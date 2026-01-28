import React from 'react'
import { HiCode } from 'react-icons/hi'

const Hero = () => {
  return (
    <div className='mt-25 w-full bg-amber-200  md:p-6'>
        <div className="w-[90%] lg:w-[80%] bg-amber-600 m-auto flex flex-col md:flex-row gap-7 items-center">
            {/* Left Side */}
            <div className="flex-1 bg-blue-400">
                <p className='inline-flex items-center mb-9 gap-2 text-[#1E5BFF] bg-[#EAF2FF] px-4 py-2 rounded-full'>
                    <HiCode size={20} color={'#000'} />
                    3-Month Intensive Program
                </p>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold mb-9'>Master Front-End Development <br /> with <span className='bg-gradient-to-r from-[#2F5BFF] to-[#7A4CFF] bg-clip-text text-transparent'>Ray's Codebase</span></h1>
                <p className='text-[17px] md:text-lg text-[#a4a0a0] mb-9'>Learn HTML, CSS, JavaScript, and professional web development workflows 
                through hands-on projects.Join our comprehensive 3-month online program and
                build real-world skills.</p>
                <div className="flex flex-col gap-3 md:flex-row">
                    <button className='bg-[#1E5BFF] py-2 px-6 text-white rounded-lg hover:bg-[#184AE0] transition-colors font-semibold'>
                        Enroll Now
                    </button>
                    <button className='bg-transparent py-2 px-6 rounded-lg  border border-[#D1D5DB] text-black hover:bg-[#EEF0F2] transition-colors font-semibold'>
                        View Curicullum
                    </button>
                </div>
            </div>

            {/* Right Side  */}
            <div className="flex-1 bg-fuchsia-600">
                <p>Learn HTML, CSS, JavaScript, and professional web development workflows 
                through hands-on projects.Join our comprehensive 3-month online program and
                build real-world skills.</p>
            </div>

        </div>
    </div>
  )
}

export default Hero