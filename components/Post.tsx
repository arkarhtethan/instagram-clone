import React, { useEffect, useState } from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
} from '@firebase/firestore'
import { db } from '../firebase';
import Moment from 'react-moment';
interface IPostProps {
    id: string
    username: string
    userImg: string
    img: string
    caption: string
}

function Post ({ id, username, userImg, img, caption }: IPostProps) {
    const { data: session } = useSession()
    const [comments, setComments] = useState<any>([])
    const [likes, setLikes] = useState<any>([]);
    const [comment, setComment] = useState('');
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'posts', id, 'comments'),
                    orderBy('timestamp', 'desc')
                ),
                (snapshot) => {
                    setComments(snapshot.docs)
                }
            ),
        [db, id]
    );

    useEffect(
        () =>
            onSnapshot(
                collection(db, 'posts', id, 'likes'),
                (snapshot) => {
                    setLikes(snapshot.docs)
                }
            ),
        [db, id]
    );

    useEffect(() =>
        setHasLiked(
            likes.findIndex((like: any) => {
                return like.id === session?.user?.uid
            }) !== -1
        )
        , [likes]
    );


    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session?.user?.uid));
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session?.user?.uid), {
                username: session?.user?.username
            })
        }
    }

    const sendComment = async (e: any) => {
        e.preventDefault()
        const commentToSend = comment
        setComment('')
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session?.user?.username,
            userImage: session?.user?.image,
            timestamp: serverTimestamp(),
        })
    }

    return (
        <div className="my-7 rounded-sm border bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-5">
                <img
                    className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
                    src={userImg}
                    alt={username}
                />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>
            {/* img */}
            <img className="w-full object-cover" src={img} alt="" />
            {/* Buttons */}
            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        {!hasLiked ? <HeartIcon onClick={likePost} className="btn" /> :
                            <HeartIconFilled onClick={likePost} className="btn text-red-500" />}
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            )}
            {/* caption */}
            <div className="truncate p-5">
                {likes.length > 0 && (<p className="font-bold mb-1">{likes.length} likes</p>)}
                <span className="mr-1 font-bold">{username}</span>
                {caption}
            </div>
            {/* comments */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map((comment: any) => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img className="h-7 rounded-full" src={comment.data().userImage} alt="" />
                            <p className="text-sm flex-1"> <span className="font-bold">{comment.data().username}</span> {comment.data().comment}</p>
                            <Moment fromNow className="pr-5 text-xs">
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}
            {/* input box */}
            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7" />
                    <input
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment...."
                        type="text"
                        className="flex flex-1 border-none focus:ring-0"
                    />
                    <button
                        type="submit"
                        disabled={!comment.trim()}
                        onClick={sendComment}
                        className="font-semibold text-blue-400"
                    >
                        Post
                    </button>
                </form>
            )}
        </div>
    )
}

export default Post
