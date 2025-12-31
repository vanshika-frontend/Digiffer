import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from './Button';


export default function Navbar() {
    const [menutoggle, setMenuToggle] = useState(false)
    return (
        <>
            <nav className=' flex justify-center backdrop-blur-[57px] bg-[#FFFFFF0D] py-[24px] md:px-0 fixed top-[0] left-[0] w-full z-[99]'>
                <div className='flex justify-between w-full max-w-[1440px] items-center px-[20px]'>

                <h1 className='secondaryfont text-[28px] text-white'>Digiffer</h1>
                <ul className='primaryfont hidden lg:flex text-lg gap-[45px] text-white ' >
                    <li>Home</li>
                    <li>Chat & Pay</li>
                    <li>NFT Wallet</li>
                    <li>Blog</li>
                </ul>
                <div className="secondaryfont hidden lg:flex gap-[18px] text-lg">
                    <Button text="App Store" />
                    <Button text="Play Store" />
                  </div>

            <div className="lg:hidden" onClick={() => setMenuToggle(!menutoggle)}>
                <GiHamburgerMenu size={30} color='white' />
            </div>
                </div>
            </nav>

           {/* MobileMenu */}
            <div className={`transition-all overflow-hidden absolute z-20 bg-[black] w-full ${menutoggle ? "max-h-[400px] pb-[50px]" : "max-h-[0px]" }`}>
                <ul className='flex flex-col items-center text-lg gap-[45px] text-white mt-[15px] lg:hidden ' >
                    <li>Home</li>
                    <li>Chat & Pay</li>
                    <li>NFT Wallet</li>
                    <li>Blog</li>
                </ul>
                <div className="flex text-center justify-center gap-[18px] text-[10px] lg:hidden mt-[15px] ">
                    <button className="bg-[linear-gradient(103.72deg,_#009DDA_0%,_#62BA47_97.95%)] px-[25px] py-[15px] rounded-[17px] text-white " >App Store</button>
                </div>
                <div className="flex text-center justify-center gap-[18px] text-[10px] lg:hidden mt-[15px]">
                    <button className="bg-[linear-gradient(103.72deg,_#009DDA_0%,_#62BA47_97.95%)] px-[25px] py-[15px]  rounded-[17px] text-white">Play Store</button>
                </div>
            </div>
            

        </>
    )
}
