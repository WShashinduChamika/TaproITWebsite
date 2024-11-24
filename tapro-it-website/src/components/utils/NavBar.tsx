import Link from 'next/link'
import React from 'react'
import TextAnimateBtn from './TextAnimateBtn';

const NavBar = () => {
  const btn = {
    href:"/",
    height: "3rem",
    width: "11rem",
    bgClr:"rgba(30, 30, 30, 1)",
    text1:"Work With Us",
    text2:"Let's Talk"
  }
  const navLinks = [
    {
      name:"Design",
      href:"/"
    },
    {
      name:"Development",
      href:"/"
    },
    {
      name:"Marketing",
      href:"/"
    },
    {
      name:"About Us",
      href:"/"
    }
  ]
  return (
    <div className='sticky top-0 left-0 px-6 w-full z-50 py-3 grid grid-cols-6 bg-white'>
      <div className='col-span-1 flex justify-center text-3xl font-font1 font-normal text-TP-primary'>
        Tapro IT
      </div>
      <div className='col-span-4 flex items-center justify-center gap-14 uppercase'>
         {
           navLinks.map((link,index)=>{
              return (
                <Link key={index} href={link.href} className='text-lg'>{link.name}</Link>
              )
           })
         }
      </div>
      <div className='col-span-1 flex justify-center'>
         <TextAnimateBtn btn={btn} />
      </div>
    </div>
  )
}

export default NavBar
