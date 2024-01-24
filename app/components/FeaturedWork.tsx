import Image from 'next/image'
import DancingStar1 from '../../public/images/dancing-star1.png'
import DancingStar2 from '../../public/images/dancing-star2.png'
import DancingStar3 from '../../public/images/dancing-star3.png'
const FeaturedWork = () => {
    return (
        <div id='our-works'>
            <div className="py-[30px] lg:py-[40px]">
                <h4 className='mb-[40px] text-[18px] text-[#868686]'>Our Featured Work</h4>

                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='mb-[30px]'>
                        <h3 className='mb-[40px] text-[28px] lg:text-[70px] leading-[36px] lg:leading-[80px] mb-[40px]'>Showcasing our projects.</h3>
                        <div>
                            <span className='bg-black py-[6px] px-[12px] text-white text-[14px] font-400'>OUR SERVICES</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={DancingStar1}
                                alt="hero"
                            />
                            <p className='mt-[22px] text-[24px]'>DANCING STARS</p>
                        </div>
                        <hr className='hidden lg:block my-[38px] border-black'/>
                        <div className='hidden lg:flex flex-row justify-between'>
                            <div className='lg:pr-[36px] border-r-[1px] border-black'>
                                <Image
                                    src={DancingStar2}
                                    alt="hero"
                                />
                                <p className='mt-[22px] text-[24px]'>DANCING STARS</p>
                            </div>
                            <div className='lg:pl-[36px]'>
                                <Image
                                    src={DancingStar3}
                                    alt="hero"
                                />
                                <p className='mt-[22px] text-[24px]'>DANCING STARS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-black'/>
        </div>
    )
}

export default FeaturedWork