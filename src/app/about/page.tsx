"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {
    const router = useRouter()
    return (
        <div>
            about
            <button className='bg-teal-300 text-white pointer-events-auto ' onClick={()=> router.push('/')}>Go home</button>
        </div>
    );
};

export default About;