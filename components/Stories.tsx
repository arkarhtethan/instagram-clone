import React, { useEffect, useState } from 'react'
import * as faker from 'faker'
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories () {
    const [suggestiongs, setSuggestiongs] = useState<any[]>([])
    const { data: session } = useSession();
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        setSuggestiongs(suggestions)
    }, [])
    console.log(faker.internet.avatar());
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {session && <Story
                img={session?.user?.image || ""}
                username={session?.user?.username}
            />}
            {suggestiongs.map((profile, index) => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories
