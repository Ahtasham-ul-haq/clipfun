"use client";

import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
                  <div className="relative break-inside-avoid mb-6 overflow-hidden rounded-none shadow-lg group cursor-pointer">
                    <img
                      src={gif.images.fixed_width.url}
                      alt={gif.title}
                      className="w-full z-2 h-auto object-cover transition-transform duration-300 group-hover:brightness-50"
                    />
                    <div className="absolute bottom-4 left-4 hidden group-hover:block">
                      <p className="text-[1rem] font-semibold text-white line-clamp-1 pr-2 mb-2">
                        {gif.title}
                      </p>
                      <div className="flex items-center gap-2">
                        {gif.user?.avatar_url ? (
                          <img
                            src={gif.user.avatar_url}
                            width={30}
                            height={30}
                            alt=""
                            className="rounded-full"
                          />
                        ) : (
                          <img
                            src={"/profile.svg"}
                            width={30}
                            height={30}
                            alt="profile"
                            className="text-white"
                          />
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
