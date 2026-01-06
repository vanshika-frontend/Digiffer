import React, { useContext } from 'react'
import CountUp from 'react-countup';
import mobile from "../Images/Group 9.png"
import rectangle1 from "../Images/Rectangle 14.png"
import rectangle2 from "../Images/Rectangle 17.png"
import { ThemeContext } from '../App';

export default function DIDwallet() {
        const { themetoggle} = useContext(ThemeContext);
    return (
        <>
            <div className="DIDWalletDiv w-full primaryfont" >

                <div className="TextMobileImg flex flex-col  gap-[50px] md:gap-[30px] lg:flex-row lg:justify-center lg:gap-[50px] items-center lg:min-h-[100vh] w-full m-auto max-w-[1440px] px-[20px] pt-[50px] pb-[150px] lg:pb-[20px] lg:pt-[20px]">
                    <div className='w-full max-w-[450px]  md:max-w-[822px]'>
                        <div className={`text-[30px] md:text-[50px] xl:text-[80px] leading-[120%] font-[600] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Secure Your Digital Identity <span className='spanText text-white'>with Our Web3 DID Wallet</span></div>
                        <p className=' text-white text-[13px] md:text-[18px] leading-[150%] font-[400]'>The only non-custodial wallet that manages all your multichain public addresses with a single username, secured by your device, and powered by your Universal Multichain identity</p>
                    </div>
                    <div className='w-full max-w-[400px] xl:max-w-[556px] relative '>
                        <img src={rectangle1} className="rectangleImg2 absolute top-0 right-[100%] max-w-[200px] md:max-w-full" />
                        <img src={mobile} className="MobileImg  w-full " />
                        <img src={rectangle2} className="rectangleImg absolute bottom-[53px] right-[0] max-w-[200px] md:max-w-full" />
                    </div>
                </div>


            </div>
            <div className={`primaryfont w-full  ${themetoggle === "dark" ? "bg-[linear-gradient(103.72deg,_rgba(0,_157,_218,_0.04)_0%,_rgba(98,_186,_71,_0.04)_97.95%)]" : "bg-[linear-gradient(103.72deg,_rgb(0_157_218_/_12%)_0%,_rgb(98_186_71_/_8%)_97.95%)]"}`}>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-10 w-full max-w-[1652px] m-auto px-[13px] py-[40px] text-center' >
                    <div>
                        <h1 className='spanText text-[60px] font-[500] leading-[120%]'><CountUp end={400} duration={5} />K+</h1>
                        <p className={`text-[20px] leading[150%] font-[300] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Wallets Onboarded</p>
                    </div>
                    <div>
                        <h1 className='spanText text-[60px] font-[500] leading-[120%]'><CountUp end={3} duration={5} />M+</h1>
                        <p className={`text-[20px] leading[150%] font-[300] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Transactions processed</p>
                    </div>
                    <div>
                        <h1 className='spanText text-[60px] font-[500] leading-[120%]'><CountUp end={200} duration={5} />K+</h1>
                        <p className={`text-[20px] leading[150%] font-[300] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Identities Created</p>
                    </div>
                    <div>
                        <h1 className='spanText text-[60px] font-[500] leading-[120%]'><CountUp end={500} duration={5} />K+</h1>
                        <p className={`text-[20px] leading[150%] font-[300] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Monthly Transaction Volume</p>
                    </div>
                    <div>
                        <h1 className='spanText text-[60px] font-[500] leading-[120%]'><CountUp end={200} duration={5} />K+</h1>
                        <p className={`text-[20px] leading[150%] font-[300] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Chats Created</p>
                    </div>
                    <div>
                        <h1 className='spanText text-[60px] font-[500] leading-[120%]'><CountUp end={200} duration={5} />+</h1>
                        <p className={`text-[20px] leading[150%] font-[300] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Countries Available</p>
                    </div>
                </div>
            </div>
        </>
    )
}
