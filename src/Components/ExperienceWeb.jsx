import React, { useContext, useEffect, useRef, useState } from 'react'
import img1 from "../Images/1a7ba290c6a2b84ea66458af848ad2a58515025f (1) (1).webp"
import tracked from "../Images/check 1 (traced).png"
import img2 from "../Images/Rectangle 21 (1).png"
import img3 from "../Images/Group 14.png"
import img4 from "../Images/Rectangle 21 (2).png"
import img5 from "../Images/Rectangle 21 (3).png"
import Button from './Button'
import phone from "../Images/iPhone 13 Pro Mockup Right View.png"
import { motion } from "motion/react"
import { ThemeContext } from '../App'

export default function ExperienceWeb() {
    // const [isIntersecting, setIsIntersecting] = useState(false);
    // const [isNFTrefsecting, setIsNFTRefsecting] = useState(false);
    // const [isGasless, setIsGasless] = useState(false);
    // const [isReferral, setIsReferral] = useState(false);
    // const [isSupport, setIsSupport] = useState(false)
    // const [isDigiffer, setIsDigiffer] = useState(false)
    const Crosschainref = useRef(null);
    const NFTref = useRef(null);
    const Gaslessref = useRef(null);
    const Referralref = useRef(null);
    const Supportref = useRef(null);
    const Digifferref = useRef(null);

    const { themetoggle } = useContext(ThemeContext);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsIntersecting(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     );
    //     console.log(isIntersecting);
    //     observer.observe(Crosschainref.current);
    //     return () => observer.disconnect();
    // }, [isIntersecting])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsNFTRefsecting(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     );
    //     console.log("isNFTrefsecting -----", isNFTrefsecting);
    //     observer.observe(NFTref.current);
    //     return () => observer.disconnect();
    // }, [isNFTrefsecting])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsGasless(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     )
    //     observer.observe(Gaslessref.current);
    //     return () => observer.disconnect();
    // }, [isGasless])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsReferral(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     )
    //     observer.observe(Referralref.current);
    //     return () => observer.disconnect();
    // }, [isReferral])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsSupport(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     )
    //     observer.observe(Supportref.current);
    //     return () => observer.disconnect();
    // }, [isSupport])


    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsDigiffer(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     )
    //     observer.observe(Digifferref.current);
    //     return () => observer.disconnect();
    // }, [isDigiffer])

    // useEffect(() => {
    //     if (isIntersecting) {
    //         Crosschainref.current.querySelectorAll(".slide-inAdd").forEach(element => {
    //             element.classList.add("slide-in");
    //         });
    //     }
    //     else {
    //         Crosschainref.current.querySelectorAll(".slide-inAdd").forEach((element) => {
    //             element.classList.remove("slide-in");
    //         });
    //     }
    //     if (isNFTrefsecting) {
    //         NFTref.current.querySelectorAll(".slide-inAdd").forEach(element => {
    //             element.classList.add("slide-in");
    //         });
    //     }
    //     else {
    //         NFTref.current.querySelectorAll(".slide-inAdd").forEach((element) => {
    //             element.classList.remove("slide-in");
    //         });
    //     }
    //     if (isGasless) {
    //         Gaslessref.current.querySelectorAll(".slide-inAdd").forEach(element => {
    //             element.classList.add("slide-in")
    //         })
    //     }
    //     else {
    //         Gaslessref.current.querySelectorAll(".slide-inAdd").forEach((element) => {
    //             element.classList.remove("slide-in");
    //         });
    //     }
    //     if (isReferral) {
    //         Referralref.current.querySelectorAll(".slide-inAdd").forEach(element => {
    //             element.classList.add("slide-in")
    //         })
    //     }
    //     else {
    //         Referralref.current.querySelectorAll(".slide-inAdd").forEach((element) => {
    //             element.classList.remove("slide-in");
    //         });
    //     }
    //     if (isSupport) {
    //         Supportref.current.querySelectorAll(".slide-inAdd").forEach(element => {
    //             element.classList.add("slide-in")
    //         })
    //     }
    //     else {
    //         Supportref.current.querySelectorAll(".slide-inAdd").forEach((element) => {
    //             element.classList.remove("slide-in");
    //         });
    //     }
    //     if (isDigiffer) {
    //         Digifferref.current.querySelectorAll(".slide-inAdd").forEach(element => {
    //             element.classList.add("slide-in")
    //         })
    //     }
    //     else {
    //         Digifferref.current.querySelectorAll(".slide-inAdd").forEach((element) => {
    //             element.classList.remove("slide-in");
    //         });
    //     }
    // }, [isIntersecting, isNFTrefsecting, isGasless, isReferral, isSupport, isDigiffer])


    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsIntersecting(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     );
    //     console.log(isIntersecting);
    //     observer.observe(Crosschainref.current);
    //     return () => observer.disconnect();
    // }, [isIntersecting])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsNFTRefsecting(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     );
    //     console.log("isNFTrefsecting -----", isNFTrefsecting);
    //     observer.observe(NFTref.current);
    //     return () => observer.disconnect();
    // }, [isNFTrefsecting])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsGasless(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     )
    //     observer.observe(Gaslessref.current);
    //     return () => observer.disconnect();
    // }, [isGasless])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsReferral(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     )
    //     observer.observe(Referralref.current);
    //     return () => observer.disconnect();
    // }, [isReferral])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsSupport(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     )
    //     observer.observe(Supportref.current);
    //     return () => observer.disconnect();
    // }, [isSupport])


    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsDigiffer(entry.isIntersecting);
    //         },
    //         { rootMargin: "-300px" }
    //     )
    //     observer.observe(Digifferref.current);
    //     return () => observer.disconnect();
    // }, [isDigiffer])

    useEffect(() => {
        console.log(themetoggle);

    }, [themetoggle])

    return (
        <>
            <div className='primaryfont w-full max-w-[685px] m-auto pb-[76px] md:px-[0] px-[20px] xl:mt-[282px] mt-[150px] '>
                <h1 className={`sm:text-[54px] text-[40px] leading-[120%] font-[600] text-center xl:mt-[0] mt-[40px] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Experience <span className='spanText'>Web3</span></h1>
                <p className={`sm:text-[18px] text-[15px] leading-[150%] font-[400] text-center ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>Digiffer is your gateway to the rapidly expanding galaxy of decentralised applications.</p>
            </div>
            <div className='w-full max-w-[1340px] flex justify-between flex-col gap-[135px] m-auto' >
                {/* Cross chain */}
                <div ref={Crosschainref}>
                    <motion.div
                        initial={{ transform: "translateY(100px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0%)", opacity: 1 }}
                        viewport={{ root: Crosschainref }}
                    >
                        <div className='slide-inAdd primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between justify-center items-center gap-[70px] ] w-full  2xl:px-[0] px-[20px]' >
                        
                            <div class="loading-box-container w-full h-full max-w-[591px] max-h-[591px]  ">
                                <div class="loading-box">
                                     <img src={img1} className="w-full h-full max-w-[591px] max-h-[591px] rounded-[26px] relative object-cover" />
                                </div>
                            </div>
                            <div className='max-w-[591px]'>
                                <h1 className={`sm:text-[48px] text-[32px] leading-[120%] font-[600] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Cross chain swapping</h1>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>
                                    <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Have the privilege of exchanging assets between different blockchains without the need for multiple wallets or complex processes.
                                </span>
                                <span className={`block sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Experience fast and secure cross-chain transactions in the Blockchain ecosystem.
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* NFT Storage */}
                <div ref={NFTref}>
                    <motion.div
                        initial={{ transform: "translateY(100px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0%)", opacity: 1 }}
                        viewport={{ root: NFTref }}
                    >
                        <div className='slide-inAdd primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between  justify-center items-center gap-[70px]  w-full 2xl:px-[0] px-[20px] '>
                            <div className='max-w-[591px]'>
                                <h1 className={`sm:text-[48px] text-[32px] leading-[120%] font-[600] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>NFT Storage</h1>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Secure your digital art, collectibles, and unique tokens with our wallet's dedicated NFT storage for both ERC-721 and ERC-1155 NFTs.
                                </span>
                                <span className={`block  sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Create a Unified portfolio unique NFT collection.
                                </span>
                                <span className={`block  sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Easily manage, share, and add NFTs within the wallet.
                                </span>
                            </div>
                              <div class="loading-box-container w-full h-full max-w-[591px] max-h-[591px]  ">
                                <div class="loading-box">
                                     <img src={img2} className="w-full h-full max-w-[591px] max-h-[591px] rounded-[26px] relative object-cover" />
                                </div>
                            </div>
                 
                        </div>
                    </motion.div>
                </div>

                {/* Gasless Tron Transactions */}
                <div ref={Gaslessref}>
                    <motion.div
                        initial={{ transform: "translateY(100px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0%)", opacity: 1 }}
                        viewport={{ root: Gaslessref }}
                    >
                        <div className='slide-inAdd primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between  justify-center items-center gap-[70px]  w-full 2xl:px-[0] px-[20px] '>
                              <div class="loading-box-container w-full h-full max-w-[591px] max-h-[591px]  ">
                                <div class="loading-box">
                                     <img src={img3} className="w-full h-full max-w-[591px] max-h-[591px] rounded-[26px] relative object-cover" />
                                </div>
                            </div>
                            <div className='max-w-[591px]'>
                                <h1 className={`sm:text-[48px] text-[23px] leading-[120%] font-[600] ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>Gasless Tron Transactions</h1>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Enjoy secure and lightning-fast TRON transactions without the burden of gas fees, making it a cost-effective choice.
                                </span>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Send, receive, and swap TRX tokens without worrying about additional network charges or fees.
                                </span>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    ByteBridge innovative solution covers transaction costs and offers features such as staking, trading, transferring, and more for TRON, helping you get the most from your digital tokens.\
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Referral & Rewards */}
                <div ref={Referralref}>
                    <motion.div
                        initial={{ transform: "translateY(100px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0%)", opacity: 1 }}
                        viewport={{ root: Referralref }}
                    >
                        <div className='slide-inAdd primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between  justify-center items-center gap-[70px]  w-full 2xl:px-[0] px-[20px] '>
                            <div className='max-w-[591px]'>
                                <h1 className={`sm:text-[48px] text-[32px] leading-[120%] font-[600] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Referral & Rewards</h1>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Join Digiffer Wallet's referral program and earn rewards by inviting others to use the wallet.
                                </span>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>
                                    <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Get rewarded for swapping and helping others to explore the Digiffer Swap Wallet.
                                </span>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `} >
                                    <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Earn unlimited USDT for referring new users and growing the Digiffer community.
                                </span>
                            </div>
                             <div class="loading-box-container w-full h-full max-w-[591px] max-h-[591px]  ">
                                <div class="loading-box">
                                     <img src={img4} className="w-full h-full max-w-[591px] max-h-[591px] rounded-[26px] relative object-cover" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Support */}
                <div ref={Supportref}>
                    <motion.div
                        initial={{ transform: "translateY(100px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0%)", opacity: 1 }}
                        viewport={{ root: Supportref }}
                    >
                        <div className='slide-inAdd primaryfont flex flex-wrap xl:flex-nowrap xl:justify-between  justify-center items-center gap-[70px]  w-full 2xl:px-[0] px-[20px] '>
                              <div class="loading-box-container w-full h-full max-w-[591px] max-h-[591px]  ">
                                <div class="loading-box">
                                     <img src={img5} className="w-full h-full max-w-[591px] max-h-[591px] rounded-[26px] relative object-cover" />
                                </div>
                            </div>
                            <div className='max-w-[591px]'>
                                <h1 className={`sm:text-[48px] text-[32px] leading-[120%] font-[600] ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>Support</h1>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px]  h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Getting help for our app is just a click away
                                </span>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Simply contact us via our live support feature in app
                                </span>
                                <span className={`sm:text-[18px] text-[14px] leading-[150%] font-[400] mt-[18px] flex items-start ${themetoggle === "dark" ? "text-white" : "text-[black]"} `}>
                                    <div className="w-[27px] min-w-[27px] h-[27px] flex items-center justify-start ">
                                        <img src={tracked} />
                                    </div>
                                    Expect to receive a resolution from our dedicated support team within 24 hours.
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* Digiffer wallet */}
                <div ref={Digifferref}>
                    <motion.div
                        initial={{ transform: "translateY(100px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0%)", opacity: 1 }}
                        viewport={{ root: Digifferref }}
                    >
                        <div className='slide-inAdd px-[20px]'>

                            <div className='p-[1px] maincontainerborder rounded-[26px] '>
                                <div className={`rounded-[26px] ${themetoggle === "dark" ? "bg-[#000]" : "bg-white"}`}>
                                    <div className={`w-full max-w-[1440px] flex flex-wrap flex-col lg:flex-row items-center justify-between m-auto gap-[60px]  rounded-[26px] py-[50px] px-[30px] ${themetoggle === "dark" ? "bg-[linear-gradient(103.72deg,_rgba(0,157,218,0.05)_0%,_rgba(98,186,71,0.05)_97.95%)]" : "bg-[linear-gradient(103.72deg,_rgba(0,157,218,0.05)_0%,_rgba(98,186,71,0.05)_97.95%)] bg-[#000000cf]"}`}>
                                        <div className='primaryfont max-w-[591px] flex-1 ' >
                                            <h1 className="text-white xl:text-[54px] text-[30px] font-[600] leading-[120%]">Why Digiffer Wallet</h1>
                                            <p className="text-white text-[18px] font-[400] leading-[150%]">Digiffer is the multichain wallet of the future, offering a single username for all your blockchain public addresses within a non-custodial Web3 wallet, secured by your device. Experience seamless, intermediary-free transactions, all powered by your Universal Multichain identity.</p>
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
                    </motion.div>
                </div>

            </div>

        </>
    )
}

