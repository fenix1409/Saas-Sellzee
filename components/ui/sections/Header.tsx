import Logo from '../../../public/images/logo.svg'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'

const Header = () => {
    const data = [
        {
            id: 1,
            name: "Home",
            path: '/'
        },
        {
            id: 2,
            name: "About",
            path: '/about'
        },
        {
            id: 3,
            name: "Contact",
            path: '/contact'
        },
        {
            id: 4,
            name: "Testimonial",
            path: '/testimonial'
        },
        {
            id: 5,
            name: "Pricing",
            path: '/pricing'
        }
    ]
    return (
        <header className='container flex items-center justify-between pt-[40px] pb-[47px] absolute' data-aos="fade-down">
            <Link href={'/'}>
                <Image src={Logo} alt='Logo' width={164} height={43} style={{ width: "164px", height: "43px" }} priority />
            </Link>
            <div className='flex items-center gap-[30px]'>
                {data.map(item => (
                    <Link href={item.path} className='text-[20px] leading-[160%] font-semibold text-white' key={item.id}>{item.name}</Link>
                ))}
            </div>
            <Button title='Get Started' />
        </header>
    )
}

export default Header