import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-sky-600 text-left flex text-white gap-2 p-3'>
      <ul className='w-[80vw] mx-auto flex justify-between'>
        <div>
          <Link to={'/'}>My Social Media</Link>
        </div>
        <div  className='flex gap-4'>
          <Link to={'/home'}>Home</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/post'}>Post</Link>
          <Link to={'/create'}>Create</Link>
        </div>
      </ul>
    </div>
  );
}

export default Header
