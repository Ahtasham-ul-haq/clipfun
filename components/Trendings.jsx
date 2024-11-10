"use client"

import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GifCard from "@/components/GifCard";

const Trendings = () => {
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const apiKey = process.env.GIPHY_API_KEY;
    useEffect(() => {
        const fetchTrendingGifs = async () => {
            const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZHIR2Xae4o3numBZKtoIspcKbaZ2oB8y')
            const data = await response.json()
            setGifs(data.data)
            setIsLoading(false)
            console.log({data})
        }
        fetchTrendingGifs()
    }, [])
    
  return (
    <section className={"mx-12"}>
        {isLoading ? (
            <Loader2 />
        ) : (
            <div className='grid lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2  gap-8'>
                {gifs.map((gif) => (
                    <GifCard gif={gif} key={gif.id} />
                ))}
            </div>
        )
    }
    </section>
  )
}

export default Trendings