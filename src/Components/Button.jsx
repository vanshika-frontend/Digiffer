import React from 'react'

export default function Button({text, ClassName}) {
  return (<>
   <button  className={`bg-[linear-gradient(103.72deg,_#009DDA_0%,_#62BA47_97.95%)] sm:px-[25px] px-[18px] sm:py-[15px] py-[10px] sm:text-[18px]  text-[14px] rounded-[17px] text-white ${ClassName}`}>
    {text}
   </button>
  </>
  )
}
