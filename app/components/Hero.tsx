import Image from 'next/image'
import HeroImage from '../../public/images/hero-img.svg'
import MobileHeroImg from '../../public/images/mob-hero.jpeg'

const Hero = () => {
    return (
        <div id='our-story'>
            <div className="py-[30px] lg:py-[40px] font-400">
                <h2 className="text-[34px] lg:text-[91px] leading-[36px] lg:leading-[100px] lg:max-w-[1076px] font-400">We are a creative studio that inspires.</h2>
                <p className="text-[24px] leading-normal font-400 my-[18px] lg:my-[20px] lg:max-w-[670px]">Designers from across the world challenging the very idea of design one project at a time.</p>
                <span className='text-[#868686] text-[14px] mb-[30px] block lg:hidden'>Watch our reel</span>
                <Image
                    className='hidden lg:block '
                    src={HeroImage}
                    alt="hero"
                />
                <Image
                    className='block lg:hidden'
                    src={MobileHeroImg}
                    alt="hero"
                />
            </div>
            <hr className='border-black'/>
        </div>
    )
}

export default Hero