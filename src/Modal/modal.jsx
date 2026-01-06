import React from 'react'
import playstore from "../Images/google_play.png"

export default function Modal({Close, text, heading}) {
    return (
        <>
            <div className='fixed top-0 left-0 flex justify-center items-center w-screen h-screen inset-0 bg-black/70 z-[999]'>
                <div className='primaryfont text-center bg-[rgba(31,_31,_31,_0.88)] w-full max-w-[500px] px-[20px] pb-[20px] relative overflow-y-auto rounded-[16px]'>
                    <div className='flex justify-end text-[30px] text-white cursor-pointer' onClick={Close}>&times;</div>
                    <div className='text-white'>
                    <h1 className='text-[25px]'>{heading}</h1>
                    <p>Experience Digiffer on your mobile device.</p>
                    <p>Choose your platform to download the app</p>
                    </div>
                    <div className='flex items-center justify-center gap-[5px] w-full max-w-[150px] m-auto bg-black text-white p-[10px] my-[20px]'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 14 14"><g fill="none"><path fill="#8fbffa" d="M.352 12.418V1.305c0-.73.858-1.192 1.556-.837l10.936 5.556c.719.365.719 1.31 0 1.675L1.908 13.255c-.698.355-1.556-.107-1.556-.838"/><path fill="#2859c5" fillule="evenodd" d="M1.61.366C1.014.25.403.643.356 1.232l5.63 5.629l-5.63 5.63c.047.588.657.98 1.254.866l5.436-5.435l1.806 1.806l1.407-.715L8.106 6.86l2.151-2.151l-1.407-.715L7.045 5.8z" clipRule="evenodd"/></g></svg><h1>{text}</h1>
                    </div>
                    <div className='w-full max-w-[300px] m-auto text-white'>
                    <div className='flex items-center gap-[5px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="green" strokeLinecap="round" strokeWidth="1.5"><path strokeMiterlimit="10" d="M20 12H4" /><path strokeLinejoin="round" d="m12.968 19.66l6.572-6.572a1.53 1.53 0 0 0 0-2.176L12.968 4.34" /></g></svg><h1>Faster Performance</h1>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="green" strokeLinecap="round" strokeWidth="1.5"><path strokeMiterlimit="10" d="M20 12H4" /><path strokeLinejoin="round" d="m12.968 19.66l6.572-6.572a1.53 1.53 0 0 0 0-2.176L12.968 4.34" /></g></svg><h1>Secure & seamless Experience</h1>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="green" strokeLinecap="round" strokeWidth="1.5"><path strokeMiterlimit="10" d="M20 12H4" /><path strokeLinejoin="round" d="m12.968 19.66l6.572-6.572a1.53 1.53 0 0 0 0-2.176L12.968 4.34" /></g></svg><h1>FAccess Digiffer anytime, anywhere</h1>
                    </div>
                    </div>
                    <h1 className='text-white mt-[10px]'>Avilable for iOS and Android</h1>
                </div>
            </div>
        </>
    )
}
