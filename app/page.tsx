'use client'

import Image from "next/image";
import { useState } from "react";
import DraggableWindow from "./ui/DraggableWindow";
import About from "./ui/contents/about";
import Contact from "./ui/contents/contact";
import Gallery from "./ui/contents/gallery";
import Snowfall from "react-snowfall";
// from https://www.npmjs.com/package/react-snowfall

export default function Home() {
  const [showWindow, setShowWindow] = useState(false);
  const [showLinkWindow, setLinkWindow] = useState(false);
  const [showContactWindow, setContactWindow] = useState(false);

  
  return (

    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Snowfall color='#FFB3B3' />
      <main className="px-6 py-6 flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-indigo-950/75 ">
       <h1 className="text-4xl"> Hi my name is Jake and welcome to my website :0</h1>
       <p> Software Developer, Illustrator, Game Dev </p>
   
        
        <div className="flex items-center flex-col gap-4 sm:flex-row ">

          <button onClick={() => setShowWindow(true)} className="rounded-full font-medium h-20 w-full  bg-indigo-500 hover:bg-indigo-700"> About Me </button>
          <button onClick={() => setLinkWindow(true)} className="rounded-full font-medium h-20 w-full  bg-indigo-500 hover:bg-indigo-700"> Works </button>
          <button onClick={() => setShowWindow(true)} className="rounded-full font-medium h-20 w-full bg-indigo-500 hover:bg-indigo-700"> Links </button>
          <button onClick={() => setContactWindow(true)} className="rounded-full font-medium h-20 w-full bg-indigo-500 hover:bg-indigo-700"> Contact </button>


        </div>
        <div className="flex">
              {// (Draggable windows for personal website)
              showWindow && (
                <DraggableWindow onClose={() => setShowWindow(false)}>
                      <About />
                </DraggableWindow>
              )}

              {showLinkWindow && (
                <DraggableWindow onClose={() => setLinkWindow(false)}>
                    <Gallery />
                </DraggableWindow>
              )}

              { showContactWindow && (
                <DraggableWindow onClose={() => setContactWindow(false)}>
                    <Contact />
                </DraggableWindow>
              )}
          </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
