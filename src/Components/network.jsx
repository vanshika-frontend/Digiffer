import React from 'react'
import Bicon from "../Images/Group 10.png"
import Button from './Button'
import image1 from "../Images/image 1.png"
import image2 from "../Images/image 3 (1).png"
import image3 from "../Images/image 5.png"
import image4 from "../Images/image 7.png"
import image5 from "../Images/image 9.png"
import image6 from "../Images/image 11.png"
import image7 from "../Images/image 2.png"
import image8 from "../Images/image 4.png"
import image9 from "../Images/image 6.png"
import image10 from "../Images/image 8.png"
import image11 from "../Images/image 10.png"
import image12 from "../Images/image 12.png"
import icon1 from "../Images/biometrics 1 (traced).png"
import icon2 from "../Images/biometrics 1 (traced) (1).png"
import icon3 from "../Images/biometrics 1 (traced) (2).png"
import icon4 from "../Images/biometrics 1 (traced) (3).png"

export default function Network() {
    return (
        <>
        {/* Usernames */}
            <div className='network flex flex-wrap lg:flex-nowrap lg:justify-between justify-center w-full max-w-[1343px] items-center xl:gap-[0] gap-[60px] m-auto px-[20px] pt-[160px] '>
                <div  className='flex justify-center items-center w-full h-full md:max-w-[608px] md:min-h-[608px]  sm:max-w-[400px] sm:max-h-[400px] max-w-[250px] max-h-[250px] '>
                <img src={Bicon} className='Circle md:max-w-[608px] md:min-h-[608px]  sm:max-w-[400px] sm:max-h-[400px] max-w-[250px] max-h-[250px]' />
                </div>
                <div className='primaryfont max-w-[591px]'>
                    <h1 className='text-white lg:text-[35px] sm:text-[54px]  xl:text-[54px] text-[30px] font-[600] leading-[120%]'>With <span className='spanText'>Usernames</span></h1>
                    <p className='text-white  lg:text-[10px] sm:text-[18px] xl:text-[18px] text-[14px] leading-[150%] font-[400] mt-[5px]'>Digiffer is the multichain wallet of the future, offering a single username for all your blockchain public addresses within a non-custodial Web3 wallet, secured by your device. Experience seamless, intermediary-free transactions, all powered by your Universal Multichain identity.</p>
                    <Button text="Download Now" ClassName="mt-[40px]" />
                </div>
            </div>

            {/* Available networks  */}
            <div className='px-[20px] mx-auto mt-[160px] xl:mb-[289px] mb-[150px]'>
                <div className='max-w-[1440px] w-full m-auto maincontainerborder rounded-[26px] p-[1px] flex items-center justify-center mb-[20px]'>
                    <div className='w-full rounded-[26px] bg-[#000]'>
                        <div className='relative z-[1] w-full px-[48px] py-[48px] rounded-[26px] bg-[linear-gradient(103.72deg,_rgba(0,_157,_218,_0.04)_0%,_rgba(98,_186,_71,_0.04)_97.95%)]'>
                            <div className='primaryfont max-w-[791px] m-auto'>
                                <h1 className='text-white md:text-[54px] text-[20px] leading-[120%] font-[600] text-center'>Available on<span className='spanText'> 12+ networks</span></h1>
                                <p className='text-white md:text-[15px] text-[8px] leading-[150%] font-[400] mt-[12px] text-center'>Digiffer is the multichain wallet of the future, offering a single username for all your blockchain public addresses within a non-custodial Web3 wallet, secured by your device. Experience seamless, intermediary-free transactions, all powered by your Universal Multichain identity.</p>
                            </div>

                            <div className=" max-w-[1343px] grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 m-auto mt-[72px] relative">

                                <div className='ImageDiv xl:top-[50%] md:top-[33%] top-[16.6%] '></div>

                                <div className='ImageDivRight xl:right-[33.2%] xl:top-[0] md-ImageDiv md:top-[66%] top-[32.2%] md:right-[0]'></div>

                                <div className='ImageDivRight xl:bottom-[0] xl:right-[16.6%] xl:block md:hidden sm-ImageDiv bottom-[32.2%]  '></div>
                                <div className='ImageDivRight xl:left-[16.6%] md:left-[25%] sm-ImageDiv md:top-[0] top-[50%]'></div>
                                <div className='ImageDivRight xl:left-[33.2%] md:left-[75%]  sm-ImageDiv md:bottom-[0] bottom-[16.6%] '></div>

                                <div className='ImageDivRight left-[50%] top-[0]'></div>

                                <div className='paddingImage flex justify-center'>
                                    <img src={image1} />
                                </div>
                                <div className='paddingImage flex justify-center '>
                                    <img src={image2} />
                                </div>
                                <div className='paddingImage flex justify-center '>
                                    <img src={image3} />
                                </div>
                                <div className='paddingImage flex justify-center'>
                                    <img src={image4} />
                                </div>
                                <div className='paddingImage flex justify-center'>
                                    <img src={image5} />
                                </div>
                                <div className='paddingImage flex justify-center'>
                                    <img src={image6} />
                                </div>

                                <div className='paddingImage flex justify-center'>
                                    <img src={image7} />
                                </div>
                                <div className='paddingImage flex justify-center'>
                                    <img src={image8} />
                                </div>
                                <div className='paddingImage flex justify-center'>
                                    <img src={image9} />
                                </div>
                                <div className='paddingImage flex justify-center'>
                                    <img src={image10} />
                                </div>
                                <div className='paddingImage flex justify-center'>
                                    <img src={image11} />
                                </div>
                                <div className='paddingImage flex justify-center'>
                                    <img src={image12} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Chat & Pay */}
            <div className='w-full max-w-[1440px] m-auto flex flex-wrap xl:flex-nowrap xl:justify-between justify-center items-center gap-[60px] 2xl:px-[0] px-[20px]'>
                <div className='primaryfont max-w-[591px]'>
                    <h1 className='text-white sm:text-[54px] text-[30px] font-[600] leading-[120%]'>Chat <span className='spanText'>& Pay</span></h1>
                    <p className='text-white sm:text-[18px] text-[13px] font-[400] leading-[150%]'>Forget about the addresses- Just pick the Token/ NFT to engage in direct DeFi and NFT transactions, under the Chat window.</p>
                     <span className='block text-white sm:text-[18px] text-[13px] font-[400] leading-[150%] mt-[15px]'> No more complexties and uncertainties of sending crypto to wrong addresses. AnCrypto's Chat and Pay feature seamlessly integrates cryptocurrency transactions right into your chat window, using DID as the payment solution,combining convenience, security, and trust in one window like never before.</span>
                    <Button text="Learn More" ClassName="mt-[40px]" />
                </div>

                <div className='primaryfont sm:flex  gap-[51px]'>
                    <div className='flex flex-col gap-[43px] sm:pt-[98px] pt-[0]'>
                   <div className='max-w-[317px] p-[28px] rounded-[26px] bg-[linear-gradient(103.72deg,_rgba(0,157,218,0.05)_0%,_rgba(98,186,71,0.05)_97.95%)]'>
                    <img src={icon1}/>
                    <h1 className='text-white text-[28px] leading-[120%] font-[600] mt-[16px]'>Identity</h1>
                    <p className='text-white text-[16px] leading-[150%] font-[400]'>Transact confidently with anyone who has a DID. Your money goes where it's supposed to, and confusing wallet address for transfers becomes a thing of the past.</p>
                   </div>

                       <div className='max-w-[317px] p-[28px] rounded-[26px] bg-[linear-gradient(103.72deg,_rgba(0,157,218,0.05)_0%,_rgba(98,186,71,0.05)_97.95%)]'>
                    <img src={icon2}/>
                    <h1 className='text-white text-[28px] leading-[120%] font-[600] mt-[16px]'>Privacy</h1>
                    <p className='text-white text-[16px] leading-[150%] font-[400]'>Digiffer ensures that transaction details stay confidential between the parties involved. Your privacy is our priority, always.</p>
                   </div>
                    </div>

                    <div className='flex flex-col gap-[43px] sm:mt-[0] mt-[43px]'>
                       <div className='max-w-[317px] p-[28px] rounded-[26px] bg-[linear-gradient(103.72deg,_rgba(0,157,218,0.05)_0%,_rgba(98,186,71,0.05)_97.95%)]'>
                    <img src={icon3}/>
                    <h1 className='text-white text-[28px] leading-[120%] font-[600] mt-[16px]'>Throughput</h1>
                    <p className='text-white text-[16px] leading-[150%] font-[400]'>Execute transactions in just three quick steps. That means higher transaction throughput, letting you move your crypto faster and more efficiently than ever before.</p>
                   </div>

                       <div className='max-w-[317px] p-[28px] rounded-[26px] bg-[linear-gradient(103.72deg,_rgba(0,157,218,0.05)_0%,_rgba(98,186,71,0.05)_97.95%)]'>
                    <img src={icon4}/>
                    <h1 className='text-white text-[28px] leading-[120%] font-[600] mt-[16px]'>Forward</h1>
                    <p className='text-white text-[16px] leading-[150%] font-[400]'>Forward crypto payment requests to others in your chat list, ensuring seamless transactions when you don't have the funds</p>
                   </div>

                    </div>

                </div>
            </div>


        </>
    )
}
