import Image from 'next/image'
import CaseStudy1 from '../../public/images/case-study2.png'
import CaseStudy2 from '../../public/images/case-study.png'

const CaseStudy = () => {
    return (
        <div id='blogs'>
            <div className="py-[30px] lg:py-[40px]">
                <h4 className='mb-[40px] text-[18px] text-[#868686]'>Case Studies</h4>
                <div className='flex flex-col lg:flex-row justify-between'>
                            <div className='lg:pe-[48px] lg:border-r-[1px] border-black'>
                                <Image
                                    className='border-[1px] border-black rounded-lg'
                                    src={CaseStudy1}
                                    alt="hero"
                                />
                                <p className='mt-[18px] lg:mt-[24px] mb-[12px] text-[34px]'>CHALLENGE</p>
                                <p className='mt-[22px] text-[14px] lg:text-[24px] mb-[30px]'>Our client needed a brand refresh to better reflect their evolving business values and appeal to a younger demographic.</p>
                            </div>
                            <div className='lg:ps-[48px]'>
                                <Image
                                    src={CaseStudy2}
                                    alt="hero"
                                />
                            </div>
                        </div>
            </div>
            <hr className='border-black'/>
        </div>
    )
}

export default CaseStudy