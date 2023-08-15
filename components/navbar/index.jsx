'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {

    const [show,setShow] = useState(false)
    
    return (
        <nav className="w-full bg-gray-800 shadow px-5">
            <div className="container mx-auto flex justify-between items-center py-5">
                <div className="text-white font-semibold text-lg"><img className='w-16 h-12' src='/logo.png' alt="" /></div>
                <div className="hidden md:flex gap-5">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Services</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                </div>
                <button className="md:hidden text-white" onClick={()=>setShow(!show)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className={`flex flex-col text-center py-5 ${show ? 'flex' : 'hidden'} md:hidden`}>
                    <a href="#" className={'text-white py-2 my-2 w-full hover:border-b'}>Home</a>
                    <a href="#" className={'text-white py-2 my-2 w-full hover:border-b'}>About</a>
                    <a href="#" className={'text-white py-2 my-2 w-full hover:border-b'}>Services</a>
                    <a href="#" className={'text-white py-2 my-2 w-full hover:border-b'}>Contact</a>
            </div>
        </nav>
    )
  }