import React, { useContext, useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from './Button';
import { ThemeContext } from "../App";
import Modal from '../Modal/modal';

export default function Navbar() {
    const [menutoggle, setMenuToggle] = useState(false);
    const { themetoggle, setThemeToggle } = useContext(ThemeContext);
    const [modalOpen, setModalOpen] = useState(false);
    const[modalText, setModalText] = useState("");
    const[headingData, setHeadingData] = useState("")


    const handleModalOpen = (text, heading) => {
        setModalText(text);
        setHeadingData(heading);
        setModalOpen(true);
    }

    return (
        <>
            <nav className={`flex justify-center backdrop-blur-[57px]  py-[24px] md:px-0 fixed top-[0] left-[0] w-full z-[99] ${themetoggle === "dark" ? "bg-[#FFFFFF0D]" : "bg-[#9b9b9b80]"}`}>
                <div className='flex justify-between w-full max-w-[1440px] items-center px-[20px]' >
                    <h1 className={`secondaryfont text-[28px]  ${themetoggle === "dark" ? "text-white" : "text-[black]"}`}>Digiffer</h1>

                    <ul className={`primaryfont hidden lg:flex text-lg gap-[45px] ${themetoggle === "dark" ? "text-white" : "text-[black]"}`} >
                        <li>Home</li>
                        <li>Chat & Pay</li>
                        <li>NFT Wallet</li>
                        <li>Blog</li>
                    </ul>
                    <div className="secondaryfont hidden lg:flex gap-[18px] text-lg items-center">
                        <div className='cursor-pointer' onClick={() => setThemeToggle(themetoggle === "dark" ? "light" : "dark")}>
                            {themetoggle === "dark" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g fill="#000" clip-path="url(#SVGHcSWxdhd)"><path d="M12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-7.071-2.343a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414zm12.728 0a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-9 5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm20 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM3.515 3.515a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3.515 4.929a1 1 0 0 1 0-1.414m15.556 0a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414zM12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1" /></g><defs><clipPath id="SVGHcSWxdhd"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                            )}
                        </div>

                        <Button text="App Store" onClick={() => handleModalOpen("App store", "Get the Digiffer for App store")} />
                        <Button text="Play Store" onClick={() => handleModalOpen("Play store", "Gert the Digiffer for Play store")} />
                    </div>


                    <div className='lg:hidden flex gap-[10px] items-center'>

                        <div className='cursor-pointer' onClick={() => setThemeToggle(themetoggle === "dark" ? "light" : "dark")}>
                            {themetoggle === "dark" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g fill="#000" clip-path="url(#SVGHcSWxdhd)"><path d="M12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-7.071-2.343a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414zm12.728 0a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-9 5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm20 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM3.515 3.515a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3.515 4.929a1 1 0 0 1 0-1.414m15.556 0a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414zM12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1" /></g><defs><clipPath id="SVGHcSWxdhd"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                            )}
                        </div>
                        <div onClick={() => setMenuToggle(!menutoggle)}>
                            <GiHamburgerMenu size={30} className={`${themetoggle === "dark" ? "text-white" : "text-black"}`} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* MobileMenu */}
            <div className={`transition-all overflow-hidden absolute z-20 bg-[black] w-full  ${menutoggle ? "h-screen pb-[50px]" : "max-h-[0px]"} ${themetoggle === "dark" ? "bg-[black]" : "bg-white"}`}>
                <ul className={`flex flex-col items-center text-lg gap-[45px]  mt-[15px] lg:hidden ${themetoggle === "dark" ? "text-white" : "text-[black]"}`} >
                    <li>Home</li>
                    <li>Chat & Pay</li>
                    <li>NFT Wallet</li>
                    <li>Blog</li>
                </ul>
                <div className="flex text-center justify-center gap-[18px] text-[10px] lg:hidden mt-[15px] ">
                    <button className="bg-[linear-gradient(103.72deg,_#009DDA_0%,_#62BA47_97.95%)] px-[25px] py-[15px] rounded-[17px] text-white">App Store</button>
                </div>
                <div className="flex text-center justify-center gap-[18px] text-[10px] lg:hidden mt-[15px]">
                    <button className="bg-[linear-gradient(103.72deg,_#009DDA_0%,_#62BA47_97.95%)] px-[25px] py-[15px]  rounded-[17px] text-white">Play Store</button>
                </div>
            </div>


            {modalOpen && (
                <>
                    <Modal isOpen={modalOpen} text={modalText} heading={headingData} Close={() => setModalOpen(false)} />
                </>
            )}
        </>
    )
}
