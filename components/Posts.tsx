import React from 'react'
import Post from './Post'
const DUMMY_DATA = [
    {
        id: '123',
        username: 'kaungmyathan',
        userImg:
            'https://scontent.fmdl4-3.fna.fbcdn.net/v/t1.6435-9/33083052_375460019611960_2067366586485833728_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-803kPWisC0AX_erz7y&_nc_ht=scontent.fmdl4-3.fna&oh=00_AT_Ni8q5gUXxREyku6ZKm21nuSQSeXhnvZnvYUDJGRcZrw&oe=622E281B',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is DOPE!',
    },
    {
        id: '124',
        username: 'kaungmyathan',
        userImg:
            'https://scontent.fmdl4-3.fna.fbcdn.net/v/t1.6435-9/33083052_375460019611960_2067366586485833728_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-803kPWisC0AX_erz7y&_nc_ht=scontent.fmdl4-3.fna&oh=00_AT_Ni8q5gUXxREyku6ZKm21nuSQSeXhnvZnvYUDJGRcZrw&oe=622E281B',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is DOPE!',
    },
    {
        id: '125',
        username: 'kaungmyathan',
        userImg:
            'https://scontent.fmdl4-3.fna.fbcdn.net/v/t1.6435-9/33083052_375460019611960_2067366586485833728_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-803kPWisC0AX_erz7y&_nc_ht=scontent.fmdl4-3.fna&oh=00_AT_Ni8q5gUXxREyku6ZKm21nuSQSeXhnvZnvYUDJGRcZrw&oe=622E281B',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is DOPE!',
    },
]
function Posts () {
    return (
        <div>
            {DUMMY_DATA.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    )
}

export default Posts
