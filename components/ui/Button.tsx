import React from 'react'

const Button = ({ title }: ButtonProps) => {
  return (
    <button className='w-[172px] py-[15px] px-[30px] inline-block text-[20px] leading-[160%] font-medium text-white bg-[#FF5A05] rounded-[4px]'>{title}</button>
  )
}

export default Button