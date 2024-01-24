'use client'
import Image from 'next/image'
import Icon from '../../public/images/hambugger.png'
import Logo from '../../public/images/genpixel.png'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };
    return (
        <div className='relative'>
            <div className='fixed top-0 w-full right-0'>
                <div className='container mx-auto'>
                    <nav className="bg-white flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 justify-between sm:items-center py-[20px] lg:py-[30px]">
                        <div className="">
                            <Image
                                src={Logo}
                                width={124}
                                height={124}
                                alt="logo"
                                layout="fixed"
                            />
                        </div>
                        <div className=" hidden sm:block">
                            <ul className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-6  gap-y-6 sm:gap-y-0">
                                <li className=""><Link  href='#our-story'>Our story</Link></li>
                                <li className=""><Link href='#our-works'>Our works</Link></li>
                                <li className=""><Link href='#service'>Service</Link></li>
                                <li className="bg-black text-white rounded py-1.5 px-2.5"><Link href='#contact-us'>Let's connent</Link></li>
                            </ul>
                        </div>
                        <div className="absolute block sm:hidden right-[30px]">
                            <Image
                                src={Icon}
                                alt="logo"
                                onClick={toggleNav}
                            />
                        </div>
                        {isNavOpen && (
                            <div className="sm:hidden lg:mt-[40px]">
                                <hr className='border-black mb-[20px]'/>
                                <ul className="flex flex-col items-start gap-4">
                                    <li className=""><Link  href='#our-story'>Our Story</Link></li>
                                    <li className=""><Link href='#our-works'>Our works</Link></li>
                                    <li className=""><Link href='#service'>Service</Link></li>
                                    <li className="bg-black text-white rounded py-1.5 px-2.5"><Link href='#contact-us'>Let's connent</Link></li>
                                </ul>
                            </div>
                        )}
                    </nav>
                    <hr className={`border-black ${isNavOpen ? 'hidden' : 'block'}`}/>
                </div>
            </div>
        </div>
    )
}

export default Header