import React from 'react'
import Navbar from './Navbar'
import Breadcrumb from './BreadCrumb'

const Form = () => {
  return (
    <>
    <Navbar/>
      <div className="lg:pr-[1.25rem] lg:pl-[250px] pr-auto pl-auto">
      <div className="pl-5 md:pl-[270px] lg:pl-[20px] mt-0 pt-0 md:pt-7 mb-6">
        <h1 className="mb-2 text-xl font-semibold lg:pl-auto text-[#ff6f61]">Form</h1>
        <Breadcrumb/>
      </div>
<form className='md:w-full lg:mx-auto md:mx-0 md:px-5 md:pl-[17rem] lg:pl-5 pl-0 space-y-4 mt-5'>
<div className="flex gap-1 md:gap-3">
  <div className='ml-5 md:mx-auto w-full'>
    <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6f61] focus:border-[#ff6f61] w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff6f61] dark:focus:border-[#ff6f61]" placeholder="Enter your Name" />
  </div>
  <div className='mr-5 md:mx-auto w-full'>
    <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6f61] focus:border-[#ff6f61] w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff6f61] dark:focus:border-[#ff6f61]" placeholder="Enter your Email" />
  </div>
</div>
  
  {/* <div className='mx-5 md:mx-auto'>
  <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
  <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6f61] focus:border-[#ff6f61] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff6f61] dark:focus:border-[#ff6f61]" placeholder="Enter your Email" />
  </div> */}


  <div className='mx-5 md:mx-auto'>
    <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6f61] focus:border-[#ff6f61] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff6f61] dark:focus:border-[#ff6f61]" placeholder="Enter your Company" />
  </div>

  <div className='mx-5 md:mx-auto'>
  <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
  <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6f61] focus:border-[#ff6f61] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff6f61] dark:focus:border-[#ff6f61]" placeholder="Enter your City" />

  </div>

  <div className='mx-5 md:mx-auto'>
    <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6f61] focus:border-[#ff6f61] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff6f61] dark:focus:border-[#ff6f61]" placeholder="Enter your State" />
  </div>
  <div className="mx-5 md:mx-auto">
    <button type="submit" className="text-white py-2.5 bg-[#ff6f61] hover:bg-[#ff6f61] focus:ring-4 focus:outline-none focus:ring-[#ff6f61] font-medium rounded-lg text-sm w-full sm:w-auto px-5 my-2.5 text-center dark:bg-[#ff6f61] dark:hover:bg-[#ff6f61] dark:focus:ring-[#ff6f61]">Submit</button>
  </div>
</form>
      </div>
    </>
  )
}

export default Form