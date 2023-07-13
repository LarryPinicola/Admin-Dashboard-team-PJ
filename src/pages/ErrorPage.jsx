import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className=''>
      {/* main */}
      <div className="w-[100%] mx-auto text-center mt-20 flex flex-col gap-7">
          <h1 className="text-7xl font-bold text-blue-600">404</h1>
          <p className="text-xl md:w-[420px] md:mx-auto lg:w-[420px] lg:mx-auto text-gray-500">Oops. Looks like the page you're looking for no longer exists</p>
          <p className="text-gray-400">But we're here to bring you back to safety</p>
          <Link to={'/home'}>
          <button className='bg-red-400 text-white py-2 px-8 rounded-full lg:border-none text-sm mb-5 '> Back to Home</button>
          </Link>

      </div>

    {/* Image */}
      <div className="mt-20 p-2">
        <img src="https://flatlogic.github.io/sofia-react-template/static/media/errorImage.f2dac3af.svg" alt="" className="w-[80%] mx-auto md:w-[40%] lg:w-[50%]" />
      </div>

      {/* footer */}
      <footer>
        <div className="flex justify-center p-3 gap-3 items-center mt-24">
          <div className="">

          <p className="text-sm text-gray-500">2021 © Flatlogic. Hand-crafted &amp; Made with </p>
          </div>
        <div className="">
        <AiFillHeart className="text-red-600" />
        </div>
        </div>
      </footer>
    </div>
  )
}

export default ErrorPage
