import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const MemberCard =({member})=> {
  return (
    <div className="p-6 bg-white rounded-xl space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700">{member.total_members}</h1>
        <FaChevronRight/>
      </div>
      <div>
  <p className="text-sm text-gray-400">{member.job}</p>
       <div className="relative h-8">
  <img src="https://randomuser.me/api/portraits/women/15.jpg"
       alt=""
       className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-1" />

  <img src="https://randomuser.me/api/portraits/men/23.jpg"
       alt=""
       className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-5" />

  <img src="https://randomuser.me/api/portraits/women/40.jpg"
       alt=""
       className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-9" />
</div>
</div>
</div>
  )
}

export default MemberCard;