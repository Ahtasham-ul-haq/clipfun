"use client";

import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import GifCard from "@/components/GifCard";

const Trendings = () => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = process.env.GIPHY_API_KEY;
  useEffect(() => {
    const fetchTrendingGifs = async () => {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=ZHIR2Xae4o3numBZKtoIspcKbaZ2oB8y"
      );
      const data = await response.json();
      setGifs(data.data);
      setIsLoading(false);
      console.log({ data });
    };
    fetchTrendingGifs();
  }, []);

  return (
    <section className={"mx-12"}>
      {isLoading ? (
        <Loader2 />
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 p-4">
          {gifs.map((gif) => (
            <div
              key={gif.id}
              className="relative mb-6 break-inside-avoid overflow-hidden rounded-none shadow-lg group"
            >
              <img
                src={gif.images.fixed_width.url}
                alt={gif.title}
                className="w-full z-2 h-auto object-cover transition-transform duration-300 hover:scale-1.25 hover:brightness-50"
              />
              <div className="absolute bottom-4 left-4 hidden group-hover:block">
                <p className="font-xl font-semibold text-white">{gif.title}</p>
                <div className="flex">
                  {gif.user?.avatar_url ? (
                    <img src={gif.user.avatar_url} alt="" width={20} height={20} />
                  ) : (
                    // <img src="" alt="" />
                    <></>
                  )}
                <p className="text-sm text-white">
                  {gif.username || "Anonymous"}
                </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Trendings;
