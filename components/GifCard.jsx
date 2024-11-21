import React from 'react'

const GifCard = ({gif, index}) => {
  return (
      <div className={`border ${index === 6 ? "border-red-500" : "border-cyan-500"}  w-[200px] h-[400px] justify-center self-center shadow-lg
        
      `}>
        <img src={gif.images.original.webp} alt={gif.title} className={"object-contain"}/>
        <h3>{gif.title}</h3>
      </div>

  )
}
export default GifCard
