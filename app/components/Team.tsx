import Image from 'next/image'
import TeamMember1 from '../../public/images/JohnDoe.png'
import TeamMember2 from '../../public/images/JohnDoe_2.png'
import TeamMember3 from '../../public/images/JohnDoe_3.png'
import TeamMember4 from '../../public/images/JohnDoe_4.png'

const Team = () => {
    return (
        <div>
            <div className="py-[30px] lg:py-[40px]">
                <h4 className='mb-[40px] text-[18px] text-[#868686]'>Our Team</h4>
                <h3 className='mb-[40px] text-[28px] lg:text-[70px] leading-[36px] lg:leading-[80px]'>
                    Our relentless pursuit of a shared vision fuels our creativity.
                </h3>
                <div className='flex flex-col sm:flex-row justify-between items-center sm:flex-wrap'>
                    <div>
                        <Image
                            src={TeamMember1}
                            alt="hero"
                        />
                        <p className='text-center text-[24px]'>John Doe, CEO</p>
                    </div>
                    <div className='mt-[25px] sm:mt-0'>
                        <Image
                            src={TeamMember2}
                            alt="hero"
                        />
                        <p className='text-center text-[24px]'>John Doe, CEO</p>
                    </div>
                    <div className='mt-[25px]'>
                        <Image
                            src={TeamMember3}
                            alt="hero"
                        />
                        <p className='text-center text-[24px]'>John Doe, CEO</p>
                    </div>
                    <div className='mt-[25px]'>
                        <Image
                            src={TeamMember4}
                            alt="hero"
                        />
                        <p className='text-center text-[24px]'>John Doe, CEO</p>
                    </div>
                    
                </div>
            </div>
            <hr className='border-black'/>
        </div>
    )
}

export default Team