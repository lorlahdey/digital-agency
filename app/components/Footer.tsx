import Image from 'next/image'
import logo from '../../public/images/footer-Logo.svg'
import Instagram from '../../public/images/instagram.svg'
import Twitter from '../../public/images/Twitter X.svg'
import Facebook from '../../public/images/facebook.svg'
import whatsApp from '../../public/images/whatsapp.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='pt-[60px] pb-[30px] lg:pb-[40px] divide-y divide-black'>
            <div className='pb-[30px] lg:pb-[40px] flex flex-col lg:flex-row justify-between divide-y lg:divide-y-0 lg:divide-x divide-black'>
                <div className='flex flex-col justify-between'>
                    <div>
                        <Image
                            src={logo}
                            alt="hero"
                        />
                        <p className='mt-[18px] lg:mt-[40px] text-[14px] lg:text-[24px] max-w-[325px]'>
                            Genpixel Digital Agency Main Street, Bandra West Mumbai- India
                        </p>
                        <div className='block lg:hidden text-14px my-[30px]' >
                            <p>Phone: +91 232 345 23 92</p>
                            <p>Email: support@genpixel.com</p>
                        </div>
                    </div>
                    <div className='flex
                        flex-row gap-[16px] mb-[30px] lg:mb-0'>
                        <Image
                            src={Instagram}
                            alt="hero"
                        />
                        <Image
                            src={Facebook}
                            alt="hero"
                        />
                        <Image
                            src={Twitter}
                            alt="hero"
                        />
                        <Image
                            src={whatsApp}
                            alt="hero"
                        />
                    </div>
                </div>
                <div className='text-[24px] lg:ps-[111px] lg:pe-[69px] '>
                    <p className='mt-[30px] lg:mt-[24px] mb-[21px] lg:mb-[32px]'>Pages</p>
                    <div className='flex flex-col lg:flex-row gap-x-[50px]'>
                        <ul >
                            <li className='mb-[18px] lg:mb-[22px]'><Link href='#'>Home</Link></li>
                            <li className='mb-[18px] lg:mb-[22px]'><Link href='#our-story'>Our Story</Link></li>
                            <li className='mb-[18px] lg:mb-[22px]'><Link href='#our-works'>Featured works</Link></li>
                            <li className='mb-[18px] lg:mb-[22px]'><Link href='#service'>Services</Link></li>
                            <li className='mb-[18px] lg:mb-0'><Link href='#contact-us'>Contact us</Link></li>
                        </ul>
                        <ul>
                            <li className='mb-[18px] lg:mb-[22px]'><Link href='blogs'>Blogs</Link></li>
                            <li className='mb-[18px] lg:mb-[22px]'><Link href='#newletters'>Newsletters</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='pt-[30px] lg:pt-[40px] flex flex-row justify-between  text-center text-[18px]'>
                <div className='hidden lg:flex gap-x-[60px]' >
                    <p>Phone: +91 232 345 23 92</p>
                    <p>Email: support@genpixel.com</p>
                </div>
                <div className='text-center'>
                    <p className=''>copyright: Genpixel@2023</p>
                </div>
            </div>

        </div>
    )
}

export default Footer