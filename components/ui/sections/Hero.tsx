import Image from 'next/image'
import React from 'react'
import HeroImg from '../../../public/images/hero-img.png'
import Button from '../Button'

const Hero = () => {
  return (
    <section className='container hero pt-[155px]'>
      <div className="flex items-center justify-between">
        <div data-aos="fade-right" className="w-[464px]">
          <p className='text-[20px] leading-[160%] font-semibold text-white mb-[15px]'>Inspiration Technology.</p>
          <h1 className='text-[61px] leading-[120%] font-bold text-white pb-[20px] border-b-[1px] border-white'>Runs faster.<span className='text-[50px] font-medium'>Costs less and never breaks.</span></h1>
          <p className='text-[16px] leading-[160%] font-semibold text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat </p>
          <div className="flex items-center gap-[44px] mt-[43px]">
            <Button title='Get Started'/>
            <button className='w-[172px] py-[15px] px-[30px] inline-block text-[20px] leading-[160%] font-medium text-white border-[1px] border-[#FFFFFF4D] bg-transparent rounded-[4px] cursor-pointer'>Free Trail</button>
          </div>
        </div>
        <Image data-aos="fade-left" src={HeroImg} alt='Image' width={811} height={589} style={{ width: "811", height: "589" }} priority />
      </div>
    </section>
  )
}

export default Hero