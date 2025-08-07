
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
    src: "/illustrations/mari.jpg",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },

  {
    src: "/illustrations/solitude.jpg",
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
  },  {
    src: "/illustrations/butterfly.jpg",
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
    {
    src: "/illustrations/mother3.png",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
    {
    src: "/illustrations/ff16.png",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
   {
    src: "/illustrations/dva_lofi.png",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
  {
    src: "/illustrations/try_again.jpg",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
  {
    src: "/illustrations/sea_of_lights.jpg",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
   {
    src: "/illustrations/city.jpg",
    width: 1000,
    height: 1000,
    title: 'slide1',
    description: 'good work'
  },
]

export default function Gallery() {

    const [open, setOpen] = useState(false);
    return (
        
        <div className="px-6 py-6 mb-16 overflow-auto">
            <h1 className="py-4 text-white-400 leading-none tracking-tight mb-8 font-bold text-4xl "> Illustrations </h1>

                <Image
                        src="/illustrations/connected.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                />

                <Lightbox className="overflow-hidden"
                    plugins={[Thumbnails]}
                    open={open}
                    close={() => setOpen(false)}
                    slides={photos}
                />
            <h6> View All of My Work  </h6>
            
            <button className="mb-4 transition-color duration-200 bg-indigo-500 hover:bg-indigo-600" type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>
            
            <h1 className="mt-8 py-4  leading-none tracking-tight font-extrabold mb-4 text-4xl"> Development </h1>
            <div className="">
                <h1 className="mb-4" > Game </h1>
                <Image
                    className="mb-4"
                    src="/thumbnails/jumploop.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <p className="mb-6"> Co-developed a Roguelike Platformer in the GMTK Game Jam! Produced the art of the game using Aesprite and used the Godot Game Engine</p>
                <a href="https://jakepolintanart.itch.io/jumploop" className="mb-4 transition-color duration-200 bg-indigo-500 hover:bg-indigo-600"> Play Now </a>
                <h1  className="mt-6 mb-4"> Data Visualization </h1>

                  <Image
                    src="/thumbnails/mental_health.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <p className="mb-6">Created an interactive data visualization site using D3.js to highlight male mental health trends, including an interactive map of crisis centers across the U.S., and dynamic line/bar charts to drive awareness </p>
                <a href="https://jakepolintanart.itch.io/jumploop" className="transition-color duration-200 bg-indigo-500 hover:bg-indigo-600"> View Here </a>
            </div>

        </div>
      
    
    )
}

