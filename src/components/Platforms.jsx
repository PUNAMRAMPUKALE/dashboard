import React from 'react'
import { CiGlobe } from 'react-icons/ci';
import { DiAndroid, DiApple } from 'react-icons/di';
import { FaApple, FaTabletAlt } from 'react-icons/fa';

const Platforms = () => {
  return (
    <div className="p-5 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-700">Platform</h1>
      <div className="p-2 grid grid-cols-2 gap-8">
        <div className="space-y-3 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <CiGlobe /> <span>website</span>
          </p>
        </div>

        <div className="space-y-3 text-gray-500">
          <h1 className="text-2xl font-bold">87</h1>
          <p className="flex items-center space-x-2">
            <FaApple /> <span>IOS</span>
          </p>
        </div>


        <div className="space-y-3 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <DiAndroid /> <span>Android</span>
          </p>
        </div>


        <div className="space-y-3 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <FaTabletAlt /> <span>Tablets</span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Platforms;