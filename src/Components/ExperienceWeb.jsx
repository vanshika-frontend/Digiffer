import React from 'react'
import img1 from "../Images/Rectangle 21.png"
import tracked from "../Images/check 1 (traced).png"
import img2 from "../Images/Rectangle 21 (1).png"
import img3 from "../Images/Group 14.png"
import img4 from "../Images/Rectangle 21 (2).png"
import img5 from "../Images/Rectangle 21 (3).png"
import Button from './Button'
import phone from "../Images/iPhone 13 Pro Mockup Right View.png"

export default function ExperienceWeb() {
    return (
        <>
            <div className='primaryfont w-full max-w-[685px] m-auto pb-[76px] md:px-[0] px-[20px] xl:mt-[282px] mt-[150px] '>
                <h1 className=' text-white sm:text-[54px] text-[40px] leading-[120%] font-[600] text-center xl:mt-[0] mt-[40px]'>Experience <span className='spanText'>Web3</span></h1>
                <p className='text-white sm:text-[18px] text-[15px] leading-[150%] font-[400] text-center '>Digiffer is your gateway to the rapidly expanding galaxy of decentralised applications.</p>
            </div>
            <div className='w-full max-w-[1340px] flex justify-between flex-col gap-[135px] m-auto'>
                {/* Cross chain */}
                <div className='primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between justify-center items-center gap-[70px] ] w-full  2xl:px-[0] px-[20px]'>
                    <img src={img1} />
                    <div className='max-w-[591px] '>
                        <h1 className='text-white sm:text-[48px] text-[32px] leading-[120%] font-[600]'>Cross chain swapping</h1>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start '>
                            <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Have the privilege of exchanging assets between different blockchains without the need for multiple wallets or complex processes.
                        </span>
                        <span className='block text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start '>
                            <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Experience fast and secure cross-chain transactions in the Blockchain ecosystem.
                        </span>
                    </div>
                </div>

                {/* NFT Storage */}
                <div className='primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between  justify-center items-center gap-[70px]  w-full 2xl:px-[0] px-[20px] '>
                    <div className='max-w-[591px]'>
                        <h1 className='text-white sm:text-[48px] text-[32px] leading-[120%] font-[600]'>NFT Storage</h1>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start'>
                            <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Secure your digital art, collectibles, and unique tokens with our wallet's dedicated NFT storage for both ERC-721 and ERC-1155 NFTs.
                        </span>
                        <span className='block text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start'>
                            <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Create a Unified portfolio unique NFT collection.
                        </span>
                        <span className='block text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start '>
                            <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Easily manage, share, and add NFTs within the wallet.
                        </span>
                    </div>
                    <img src={img2} />
                </div>

                {/* Gasless Tron Transactions */}
                <div className='primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between  justify-center items-center gap-[70px]  w-full 2xl:px-[0] px-[20px] '>
                    <img src={img3} />
                    <div className='max-w-[591px]'>
                        <h1 className='text-white sm:text-[48px] text-[23px] leading-[120%] font-[600]'>Gasless Tron Transactions</h1>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start'>
                            <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Enjoy secure and lightning-fast TRON transactions without the burden of gas fees, making it a cost-effective choice.
                        </span>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start '>
                            <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Send, receive, and swap TRX tokens without worrying about additional network charges or fees.
                        </span>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start'>
                            <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            ByteBridge innovative solution covers transaction costs and offers features such as staking, trading, transferring, and more for TRON, helping you get the most from your digital tokens.\
                        </span>
                    </div>
                </div>

                {/* Referral & Rewards */}
                <div className='primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between  justify-center items-center gap-[70px]  w-full 2xl:px-[0] px-[20px] '>
                    <div className='max-w-[591px]'>
                        <h1 className='text-white sm:text-[48px] text-[32px] leading-[120%] font-[600]'>Referral & Rewards</h1>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start'>
                            <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Join Digiffer Wallet's referral program and earn rewards by inviting others to use the wallet.
                        </span>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start '>
                            <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Get rewarded for swapping and helping others to explore the Digiffer Swap Wallet.
                        </span>
                        <span className='text-[#ffffffcc] sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start'>
                            <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Earn unlimited USDT for referring new users and growing the Digiffer community.
                        </span>
                    </div>
                    <img src={img4} />
                </div>

                {/* Support */}
                <div className='primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between  justify-center items-center gap-[70px]  w-full 2xl:px-[0] px-[20px] '>
                    <img src={img5} />
                    <div className='max-w-[591px]'>
                        <h1 className='text-white sm:text-[48px] text-[32px] leading-[120%] font-[600]'>Support</h1>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start'>
                            <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Getting help for our app is just a click away
                        </span>
                        <span className='text-white sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start '>
                            <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Simply contact us via our live support feature in app
                        </span>
                        <span className='text-[#ffffffcc] sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start'>
                            <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                <img src={tracked} />
                            </div>
                            Expect to receive a resolution from our dedicated support team within 24 hours.
                        </span>
                    </div>
                </div>


                {/* Digiffer wallet */}
                <div className='px-[20px]'>

                <div className='p-[1px] maincontainerborder rounded-[26px] '>
                    <div className='rounded-[26px] bg-[#000]'>
                <div className='w-full max-w-[1440px] flex flex-wrap flex-col lg:flex-row items-center justify-between m-auto gap-[60px] bg-[linear-gradient(103.72deg,_rgba(0,157,218,0.05)_0%,_rgba(98,186,71,0.05)_97.95%)] rounded-[26px] py-[50px] px-[30px]'>
                    <div className='primaryfont max-w-[591px] flex-1 ' >
                        <h1 className='text-white xl:text-[54px] text-[30px] font-[600] leading-[120%]'>Why Digiffer Wallet</h1>
                        <p className='text-white text-[18px] font-[400] leading-[150%]'>Digiffer is the multichain wallet of the future, offering a single username for all your blockchain public addresses within a non-custodial Web3 wallet, secured by your device. Experience seamless, intermediary-free transactions, all powered by your Universal Multichain identity.</p>
                        <Button text="Get Started" ClassName="mt-[30px]" />
                    </div>

                    <div className='gradient  flex justify-center w-full max-w-[519px]'>
                        <div className='gradientcircle flex-1 flex justify-center z-[2] w-full max-w-[270px] sm:max-w-[100%]'>
                            <img src={phone} />
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                </div>


            </div>

        </>
    )
}