'use client'

import { useIsMobile } from "./hooks/mobile";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import DraggableWindow from "./ui/DraggableWindow copy";
import MobileWindow from "./ui/MobileWindow";
import About from "./ui/contents/about";
import Contact from "./ui/contents/contact"; 
import Gallery from "./ui/contents/gallery";
import Snowfall from "react-snowfall";
import Links from "./ui/contents/links";
import Head from 'next/head'
// from https://www.npmjs.com/package/react-snowfall



export default function Home() {
  const [showWindow, setShowWindow] = useState(false);
  const [showLinkWindow, setLinkWindow] = useState(false);
  const [showWorksWindow, setWorksWindow] = useState(false);
  const [showContactWindow, setContactWindow] = useState(false);
  const isMobile = useIsMobile();
  
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      <Snowfall color='#FFB3B3' />
      <main className=" relative items-center row-start-2 ">
      <div className="px-6 py-6 flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-indigo-950/75 "> 
        <h1 className="text-4xl"> Hi my name is Jake :)</h1>
        <p> Software Developer, Illustrator, Game Dev <span className="text-pink-400"> (website inspired by shars desktop)  </span> </p>
    
          
          <div className="flex items-center flex-col transition-all duration-300 ease-in-out gap-4 hover:gap-6 sm:flex-row ">

            <button onClick={() => setShowWindow(true)} className="py-1.5 px-2.5 transition-all duration-300 ease-in-out  font-medium h-20 w-20 w-full bg-indigo-500    hover:bg-indigo-700"> About Me </button>
            <button onClick={() => setLinkWindow(true)} className="py-1.5 px-2.5  transition-all duration-300 ease-in-out font-medium h-20 w-full  bg-indigo-500     hover:bg-indigo-700"> Works </button>
            <button onClick={() => setWorksWindow(true)} className=" py-1.5 px-2.5 transition-all duration-300 ease-in-out font-medium h-20 w-full bg-indigo-500     hover:bg-indigo-700"> Links </button>
            <button onClick={() => setContactWindow(true)} className=" py-1.5 px-2.5 transition-all duration-300 ease-in-out font-medium h-20 w-full bg-indigo-500   hover:bg-indigo-700"> Contact </button>


          </div>
        </div>

        <div> 
              {isMobile ? 
              <div className="fixed top-40 left-0 right-0 text-center transition-all duration-300 ease-in-out hover:w-150 hover:h-50 top-5 text-white ">
                  {// (Draggable windows for personal website)
                      showWindow && (
                        <MobileWindow window="about me" onClose={() => setShowWindow(false)}>
                              <About />
                        </MobileWindow>
                  )}
              </div>
                :
                <div  className="fixed w-100 h-2  transition-all duration-300 ease-in-out hover:w-150 hover:h-50 top-5 text-white ">
                    {// (Draggable windows for personal website)
                      showWindow && (
                        <DraggableWindow window="about me" onClose={() => setShowWindow(false)}>
                              <About />
                        </DraggableWindow>
                      )}   
                </div> 
              }
             
          </div>
        <div>
              {isMobile ? 
              <div className="fixed top-40  right-0 left-0 text-center transition-all duration-300 ease-in-out hover:w-250 hover:h-50 top-5 text-white " >
                  {// (Draggable windows for personal website)
                      showLinkWindow && (
                        <MobileWindow window="works" onClose={() => setLinkWindow(false)}>
                              <Gallery />
                        </MobileWindow>
                  )}
              </div>
                :
                <div  className="fixed w-100 h-2 transition-all duration-300 ease-in-out hover:w-250 hover:h-50 top-5 text-white">
                    {// (Draggable windows for personal website)
                      showLinkWindow && (
                        <DraggableWindow window="works" onClose={() => setLinkWindow(false)}>
                              <Gallery />
                        </DraggableWindow>
                      )}   
                </div> 
              }
          </div>
        <div>

              {isMobile ? 
              <div className="fixed top-112 left-0 right-0 text-center  transition-all duration-300 ease-in-out hover:w-150 hover:h-50 text-white">
                  {// (Draggable windows for personal website)
                      showWorksWindow && (
                        <MobileWindow window="links" onClose={() => setWorksWindow(false)}>
                              <Links />
                        </MobileWindow>
                  )}
              </div>
                :
                <div className="fixed w-100 h-2 transition-all duration-300 ease-in-out hover:w-150 hover:h-50 top-30 left-110 text-white">
                    {// (Draggable windows for personal website)
                      showWorksWindow && (
                        <DraggableWindow window="links" onClose={() => setWorksWindow(false)}>
                              <Links />
                        </DraggableWindow>
                      )}   
                </div> 
              }
          </div>
        <div className=" ">


              {isMobile ? 
              <div className="fixed top-108 left-0 right-0 text-center transition-all duration-300 ease-in-out hover:w-150 hover:h-50 text-white">
                  {// (Draggable windows for personal website)
                      showContactWindow && (
                        <MobileWindow window="contact" onClose={() => setContactWindow(false)}>
                              <Contact />
                        </MobileWindow>
                  )}
              </div>
                :
                <div className="fixed w-100 h-2 transition-all duration-300 ease-in-out hover:w-150 hover:h-50 top-5 top-30 left-175 text-white">
                    {// (Draggable windows for personal website)
                      showContactWindow && (
                        <DraggableWindow window="contact" onClose={() => setContactWindow(false)}>
                              <Contact />
                        </DraggableWindow>
                      )}   
                </div> 
              }
          </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
