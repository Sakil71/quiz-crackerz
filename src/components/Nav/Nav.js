import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='mx-10 flex bg-black text-white p-5'>
            <div className='mr-20'>
                <h1 className='text-2xl font-bold'>Quiz Hunter</h1>
            </div>
            <div className='mt-2'>
                <Link className='font-bold mr-5' to='home'>Home</Link>
                <Link className='font-bold' to='blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Nav;