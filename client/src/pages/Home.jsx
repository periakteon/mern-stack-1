import React from 'react'
import { useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard';

const Home = () => {

  const {posts} = useSelector(state => state.posts);

  return (
    <div className='flex items-center m-5 flex-wrap '>
      {
        posts && posts?.map((post, index) => (

          // HomeCard.jsx'te kullanmak üzere post'u prop geçiyoruz
          <HomeCard key={index} post={post}/>
        ))
        
      }
    </div>
  )
}

export default Home;