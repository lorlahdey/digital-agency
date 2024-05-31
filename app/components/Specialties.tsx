import Image from 'next/image'
import ServiceImage from '../../public/images/service.svg'
import Arrow from '../../public/images/Arrow.svg'

const Specialties = () => {
    return (
        <div id='service'>
            <div className="py-[30px] lg:py-[40px]">
                <h4 className='mb-[30px] lg:mb-[40px] text-[18px] text-[#868686]'>Our Specialties</h4>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='flex flex-col lg:max-w-[553px] justify-between '>
                        <div>
                            <h3 className='hidden lg:block text-[28px] lg:text-[70px] leading-[36px] lg:leading-[80px] mb-[18px] lg:mb-[20px]'>We help our clients succeed.</h3>
                            <h3 className='block lg:hidden text-[28px] lg:text-[70px] leading-[36px] lg:leading-[80px] mb-[18px] lg:mb-[20px]'>We are a creative studio that inspires.</h3>
                            <span className='text-[14px]  lg:text-[24px] font-400'>Through careful analysis, creative thinking, and a deep understanding of their goals, we empower businesses to surpass expectations and thrive in today&apos;s dynamic and competitive landscape.</span>
                        </div>
                        <Image
                                className='block lg:hidden my-[30px]'
                                src={ServiceImage}
                                alt="hero"
                            />
                        <div className='flex justify-between mb-[30px] lg:mb-0'>
                            <p className='text-[34px] lg:text-[64px]'>BRANDING</p>
                            <Image
                                src={Arrow}
                                alt="hero"
                            />
                        </div>
                        <div>
                            <span className='bg-black py-[6px] px-[12px] text-white text-[14px] font-400'>OUR SERVICES</span>
                        </div>
                    </div>
                    <div>
                        <Image
                            className='hidden lg:block lg:ps-[97px]'
                            src={ServiceImage}
                            alt="hero"
                        />
                    </div>
                </div>
                
            </div>
            <hr className='border-black'/>
        </div>
    )
}

export default Specialties