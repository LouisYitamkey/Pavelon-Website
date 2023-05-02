import React from 'react'
import styles from '../style'
import Video from '../video/herovideo.webm'
import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";


const Homehero = () => {
  return (
    <div className='w-full h-full  bg-[#11243e] '>
          <section id="home" className={`flex md:px-20  md:flex-row  flex-col sm:py-1 py-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
<div className='md:mb-28 mt-5 md:mt-20'>
<video className='w-full h-full' src={Video} autoPlay muted loop />

</div>
    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
         
        </div>

     
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0  my-5 relative`}>
        <div>
        <h1 className='md:text-7xl md:pb-10 tracking-wide text-white text-5xl pl-3 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[60px] '> Instant access to <br/> open banking</h1>

     <br/>
     <p className='font-normal pl-3 md:hidden text-slate-200  text-lg'>Utilize Pavelon’s channel partners like payment apps,  payroll services, financial comparison websites, CRM  solutions, or tax apps for effective distribution at lower  costs. Get pre-verified leads and offers. </p>
<span className='font-normal hidden md:block text-slate-200 pb-5   text-lg'>Utilize Pavelon’s channel partners—like payment apps, <br/> payroll services, financial comparison websites, CRM <br/> solutions, or tax apps for effective distribution at lower <br/> costs. Get pre-verified leads and offers. </span>



     {/* For Desktop */}
     
<div className='hidden md:block'>

<div className='flex  space-x-5'>
     <div className='pt-10'>
     <Button className=" bg-sky-600 hover:bg-sky-500 text-base     text-white px-6 py-3 " variant="outlined">Get In Touch <BiChevronRight size={25} /> </Button>
     </div>
     <div className='pt-10'>
     <Button className=" text-white  text-base hover:text-white  hover:bg-sky-600  px-6 py-3.5 " variant="outlined"> Start Building  </Button>

     </div>

    </div>

</div>


{/* For Mobile */}
<div className='pt-10 pb-10 md:hidden'>
    <div className='w-full h-full mb-5 px-3'>
    <button  class="fluid ui button blue "> Get in Touch  </button>
    </div>
    <div className='w-full h-full px-3'>
    <button  class="fluid ui button "> Start Building</button>
    </div>

</div>

    </div>

      </div>

    </section>
        
    </div>
  )
}

export default Homehero