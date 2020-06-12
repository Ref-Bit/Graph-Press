import React from 'react'
import { Link } from 'react-router-dom'

export default ({toaster}) => {
  return (
    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center shadow hover:shadow-xl transition duration-300">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-red-500 mb-5 flex-shrink-0">
        <img src={process.env.PUBLIC_URL + '/toaster.png'} className="h-16 w-16" alt="logo"/> 
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{toaster.title}</h2>
        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        <Link to={`/toasters/${toaster.slug}`} className="mt-3 text-red-500 inline-flex items-center">View Item
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}
