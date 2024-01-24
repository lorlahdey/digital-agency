import Image from 'next/image'
import Walmart from '../../public/images/Walmart_Index_Only.svg'
import Cisco from '../../public/images/cisco.svg'
import Volvo from '../../public/images/Volvo_Index_Only.svg.svg'
import Deloitte from '../../public/images/deloitte.svg'
import Okta from '../../public/images/okta.svg.svg'

const Client = () => {
    return (
        <div>
            <div className="py-[30px] lg:py-[40px]">
                <h4 className='mb-[40px] text-[18px] text-[#868686]'> Clients We Served</h4>
                <div className='flex justify-between flex-wrap gap-[41px]'>
                    <Image
                        src={Walmart}
                        alt="hero"
                    />
                    <Image
                        src={Cisco}
                        alt="hero"
                    />
                    <Image
                        src={Volvo}
                        alt="hero"
                    />
                    <Image
                        src={Deloitte}
                        alt="hero"
                    />
                    <Image
                        src={Okta}
                        alt="hero"
                    />
                    <Image
                        src={Okta}
                        alt="hero"
                    />
                </div>
            </div>
            <hr className='border-black'/>
        </div>
    )
}

export default Client