
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
    src: "/illustrations/Mother3.png",
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

          <div className="mb-4 flex flex-col md:flex-row items-center ">
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
              <h6 className='ml-4'> View All of My Work 
                <button className="mb-4 transition-color duration-200 bg-indigo-500 hover:bg-indigo-600" type="button" onClick={() => setOpen(true)}>
                    Open Lightbox
                </button>  
              </h6>
              
            </div>
            <h1 className="mb-4" > Bloom Hackathon </h1>
            <div className="mb-4 flex flex-col md:flex-row items-center">
                <Image
                src="/thumbnails/cottage_slower.gif"
                width={500}
                height={500}
                alt="Picture of the author"
                unoptimized
                />
                <div className="ml-4"> 
                  <p> Animated the footer for BLOOM, a three day long hackathon at the University of San Francisco </p>
                  <a href="https://bloom.build/" className="transition-color duration-200 bg-indigo-500 hover:bg-indigo-600"> View Here </a>

                </div>

            </div>
            
            <h1 className="mt-8 py-4 leading-none tracking-tight font-extrabold mb-4 text-4xl"> Development </h1>
            
            <div className="">
                <h1 className="mb-4" > JumpLoop Game </h1>
                <div className="mb-4 flex flex-col md:flex-row items-center">

                    <Image
                        className="mb-4"
                        src="/thumbnails/jumploop.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <div className="ml-4">
                      <p className="mb-6"> Co-developed a Roguelike Platformer in the GMTK Game Jam! Produced the art of the game using Aesprite and used the Godot Game Engine                 </p>
                      <a href="https://jakepolintanart.itch.io/jumploop" className="mb-4 transition-color duration-200 bg-indigo-500 hover:bg-indigo-600"> Play Now </a>
                    </div>
                </div>

                  <h1 className="mt-6 mb-4"> Mental Health Data Visualization </h1>
                <div className="mb-4 flex flex-col md:flex-row items-center"> 
                  <Image
                      src="/thumbnails/mental_health.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                  />
                  <div className="ml-4"> 
                      <p className="mb-6">Created an interactive data visualization site using D3.js to highlight male mental health trends, including an interactive map of crisis centers across the U.S., and dynamic line/bar charts to drive awareness </p>
                      <a href="https://ajpolintan.github.io/MentalHealthViz/" className="transition-color duration-200 bg-indigo-500 hover:bg-indigo-600"> View Here </a>
                  </div>
                
                </div>
                <h1 className="mb-4" > Viper (FAQ Discord Bot) </h1>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                      <Image
                      src="/thumbnails/discord_bot.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      />
                      
                      <div className="ml-4"> 
                      <p className="mb-6">Worked in a team of 4 for a Hackathon to develop a bot in Python that tracks the message history of a chat and displays the most frequent answers in an embed using the Discord API, TinyDb, and Yake </p>
                      <a href="https://viper-deploy2023.github.io/" className="transition-color duration-200 bg-indigo-500 hover:bg-indigo-600"> View Here </a>
                  </div>
                </div>
            </div>

        </div>
      
    
    )
}

