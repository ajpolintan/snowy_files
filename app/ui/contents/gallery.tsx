
'use client'

import { useState } from "react";
import React from "react";
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox";
import {
    RenderImageContext,
    RenderImageProps,
    RowsPhotoAlbum,
    MasonryPhotoAlbum,
} from "react-photo-album"
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { GetStaticProps } from 'next';
import { Thumbnails } from "yet-another-react-lightbox/plugins";

//references https://www.fullstackfoundations.com/blog/nextjs-masonry-image-gallery-lightbox

function renderNextImage(
    { alt = "", title, sizes }: RenderImageProps,
    { photo, width, height }: RenderImageContext,
) {
    return (
        <div 
            style ={{
                width: "100%",
                position: "relative",
                aspectRatio: `${width} / ${height}`
            }}
        >
        <Image
            fill
            src = {photo}
            alt = {alt}
            title = {title}
            sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder={"blurDataURL" in photo ? "blur" : undefined}
        />
        </div>
    )
}

// Create an array of images
const photos = [
  {
    src: "/illustrations/clouds2.png",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },

  {
    src: "/illustrations/connected.jpg",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
   {
    src: "/illustrations/clouds2-min.png",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work' 
  },  {
    src: "/illustrations/website_background2.png",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
   {
    src: "/illustrations/website_background2.png",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
]

export default function Gallery() {

      const [open, setOpen] = useState(false);
    return (
        
        <div className=" px-6 py-6 mb-16 overflow-auto">

       
                <Image
                        src="/illustrations/connected.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                />
                <Lightbox
                    plugins={[Thumbnails]}
                    open={open}
                    close={() => setOpen(false)}
                    slides={photos}
                />
            <h6> View All of My Work  </h6>
            
            <button className=" transition-color duration-200 bg-indigo-500 hover:bg-indigo-600" type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>
        </div>
      
    
    )
}

