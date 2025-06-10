import React from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../constants'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                        <span className='text-xl tracking-tight text-white font-orbitron font-black uppercase'>VirtualR</span>

                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='text-white font-orbitron font-semibold uppercase'>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-8 items-center">
                        <a href="#" className='py-2 px-6 border border-gray-50 text-white rounded-md font-orbitron font-semibold uppercase'>Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white font-orbitron font-semibold uppercase'>
                            Create a account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button className='text-white' onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-5 flex flex-col items-left lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href} className='text-white font-orbitron uppercase'>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border border-white text-white rounded-md font-orbitron uppercase">
                                Sign In
                            </a>
                            <a
                                href="#"
                                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 font-orbitron uppercase text-center text-white"
                            >
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
