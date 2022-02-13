import React, { useEffect, useState } from 'react'
import * as faker from 'faker'
import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {
  const [suggestiongs, setSuggestiongs] = useState([])
  const { data: session } = useSession()
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestiongs(suggestions)
  }, [])
  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          img={session?.user?.image || ''}
          username={session?.user?.username}
        />
      )}
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
