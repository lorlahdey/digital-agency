'use client'
import Image from 'next/image'
import Post from '../../public/images/post.png'
import InputField from './form/InputField'
import { useState, ChangeEvent, FormEvent  } from 'react';

interface User {
    name: string;
    email: string;
    message: string;
}

const user: User = {
    name: '',
    email: '',
    message: '',
}

const Connect = () => {
    const [formData, setFormData] = useState<User>(user)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
    };

    return (
        <div id='contact-us'>

            <div className="py-[30px] lg:py-[40px]">
                <h4 className='mb-[40px] text-[18px] text-[#868686]'>We Can Connect</h4>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex flex-col justify-between lg:pe-[54px] lg:border-r-[1px] border-black'>
                        <h3 className='mb-[18px] lg:mb-0 text-[28px] lg:text-[70px] leading-[36px] lg:leading-[80px]'>
                        Let’s bring your brand to the next level.</h3>
                        <Image
                            className='hidden lg:block'
                            src={Post}
                            alt="hero"
                        />
                    </div>
                    <div className='lg:ps-[54px]'>
                        <p className='text-[14px] lg:text-[24px] mb-[30px] lg:mb-[80px]'>Together, let's elevate your brand to new heights by unleashing its full potential and captivating your target audience.</p>
                        <div id='newletters'>
                            <h2  className='text-[34px] lg:text-[54px] lg:mb-[41px]'>SUBSCRIBE TO OUR NEWSLETTER</h2>
                            <div className='my-[30px] lg:my-0'>
                                <form onSubmit={handleSubmit}>
                                    <InputField 
                                        label="Name *"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        inputstyle='mt-[30px]'
                                        onChange={handleInputChange}
                                    />
                                    <InputField 
                                        label="Email *"
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        inputstyle='mt-[41px]'
                                        onChange={handleInputChange}
                                    />
                                    <InputField 
                                        label="Message"
                                        type="text"
                                        name="message"
                                        value={formData.message}
                                        inputstyle='mt-[41px]'
                                        onChange={handleInputChange}
                                    />
                                    <div className='text-right mt-[30px] lg:mt-[79px]'>
                                        <button className='tuppercase bg-black py-[4px] lg:py-[8px] px-[18px] lg:px-[22px] text-white text-[14px] lg:text-[18px] font-400 rounded-[6px]'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Image
                            className='block lg:hidden'
                            src={Post}
                            alt="hero"
                        />
                    </div>
                </div>
            </div>

            <hr className='border-black'/>
        </div>
    )
}

export default Connect