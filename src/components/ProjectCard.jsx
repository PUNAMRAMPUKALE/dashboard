import React from 'react'
import { TiAttachment } from 'react-icons/ti';

const ProjectCard =({project}) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-5">
      <div>
       <h1 className="text-xl font-semibold text-gray-700">{project.name}</h1>
       <p className="text-sm text-gray-500">{project.type}</p>
      </div>
      
      <p><span className="text-xs p-2 rounded-bg-gray-100">{project.date}</span></p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="w-[40%] bg-indigo-500 rounded-full h-2"></div>
      </div>
      
      <div>
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

<p className="flex space-x-1 items-center text-gray-400">
  <TiAttachment/> <span>{project.files} files</span></p>
</div>
</div>
  )
}

export default ProjectCard;
