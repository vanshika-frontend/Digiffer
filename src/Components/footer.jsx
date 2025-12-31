import React from 'react'
import arrow from "../Images/Button.png"

export default function Footer() {
    return (
        <>
            <div className='w-full max-w-[1340px] flex justify-between flex-wrap m-auto px-[30px] mt-[267px] lg:gap-[0] gap-[20px] pb-[40px]'>
                <div className='primaryfont  lg:max-w-[300px] max-w-[100%] '>
                    <h1 className='spanText max-w-[max-content]  text-[38px] font-[400] leading-[150%]'>Digiffer</h1>
                    <p className='text-white text-[18px] font-[400] leading-[150%] mt-[10px]'>Digiffer enhances your crypto
                        experience through its Username DIDs,
                        replacing complex wallet addresses and
                        simplifying interactions and
                        transactions within the Web3 ecosystem.</p>
                    <p className='text-white text-[18px] font-[400] leading-[150%] mt-[15px]'>Subscribe to our newsletter and be a
                        part of a growing community.</p>
                </div>

                <div className='primaryfont w-full sm:max-w-[300px] max-w-[100%]'>
                    <h1 className='spanText max-w-[max-content] text-[30px] font-[400] leading-[100%]'>Company</h1>
                    <ul className='text-white'>
                        <li className='spanText max-w-[max-content] mt-[10px]'>Contact Us</li>
                        <li>Privacy Policy - Android</li>
                        <li>Privacy Policy - iOS</li>
                        <li>Terms & Conditions</li>
                        <li>Download Whitepaper</li>
                    </ul>
                </div>

                <div className='primaryfont max-w-[300px] text-[30px] font-[400] leading-[100%] text-left'>
                 <h1 className='spanText max-w-[max-content] '>Jump into Web3</h1>
                 <p className='text-white text-[18px] font-[400] leading-[150%] mt-[10px]'>support@digiffer.io</p>
                 <div className='max-w-[370px] flex justify-center bg-[#141A1E] rounded-[65px] pl-[32px] pr-[8px] py-[4px] mt-[40px] '>
                    <input className='text-white text-[18px] font-[400] leading-[150%] ' placeholder='Enter Email Address' />
                    <img src={arrow} />
                 </div>
                </div>
            </div>
        </>
    )
}
