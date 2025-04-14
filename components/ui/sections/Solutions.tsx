import React from 'react'
import FedEx from '../../../public/images/Fedex.svg'
import Google from '../../../public/images/google.svg'
import Microsoft from '../../../public/images/Microsoft.svg'
import Ola from '../../../public/images/ola.svg'
import Amazon from '../../../public/images/amazon.svg'
import Walmart from '../../../public/images/walmart.svg'
import Fedx from '../../../public/images/fedx.svg'
import Link from 'next/link'
import Image from 'next/image'
import Transactions from '../../../public/images/transaction.png'

const Solutions = () => {
    const data = [
        {
            id: 1,
            image: FedEx
        },
        {
            id: 2,
            image: Google
        },
        {
            id: 3,
            image: Ola
        },
        {
            id: 4,
            image: Microsoft
        },
        {
            id: 5,
            image: Amazon
        },
        {
            id: 6,
            image: Fedx
        },
        {
            id: 7,
            image: Walmart
        }
    ]
    return (
        <section className='container pt-[120px]'>
            <div className="flex items-center justify-center gap-[30px] flex-wrap mb-[121px]" data-aos="fade-up" data-aos-duration="2000">
                {data.map(item => (
                    <Link href={'#'} className='w-[261px] h-[82px] py-[17px] shadow-md' key={item.id}>
                        <Image src={item.image} alt={`${item.image} image`} className={`${item.id === 1 && "w-[164px] h-[46px]"} ${item.id === 2 && "w-[155px] h-[45px]"} ${item.id === 3 && "w-[130px] h-[45px]"} ${item.id === 4 && "w-[210px] h-[46px]"} ${item.id === 5 && "w-[143px] h-[43px]"} ${item.id === 6 && "w-[98px] h-[46px]"} ${item.id === 7 && "w-[193px] h-[46px]"} mx-auto`} priority />
                    </Link>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <Image src={Transactions} alt='image' width={515} height={454} style={{ width: "515px", height: "454px" }} priority />
            </div>
        </section>
    )
}

export default Solutions