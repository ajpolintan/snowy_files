'use client'

import Image from "next/image";
import { useState } from "react";
import DraggableWindow from "./ui/DraggableWindow";
import About from "./ui/contents/about";

export default function Home() {
  const [showWindow, setShowWindow] = useState(false);
  const [showLinkWindow, setLinkWindow] = useState(false);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <h1 className="text-4xl"> Hi my name is Jake and welcome to my website :0</h1>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            The Snowy Files{" "}
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        
        <div className="flex items-center flex-col gap-4 sm:flex-row ">

          <button onClick={() => setShowWindow(true)} className="rounded-full font-medium h-20 w-full  bg-teal-500 hover:bg-teal-700"> About Me </button>
          <button onClick={() => setLinkWindow(true)} className="rounded-full font-medium h-20 w-full  bg-teal-500 hover:bg-teal-700"> Works </button>
          <button onClick={() => setShowWindow(true)} className="rounded-full font-medium h-20 w-full bg-teal-500 hover:bg-teal-700"> Links </button>
          <button onClick={() => setShowWindow(true)} className="rounded-full font-medium h-20 w-full bg-teal-500 hover:bg-teal-700"> Contact </button>


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
                              <h1 className="mb-16">thy Link</h1>

                              <h1>My interests!</h1>
                              <ul className="list-disc">
                                <li>Dance Dance Revolution</li>
                                <li>Soulslikes and JRPGs (Final Fantasy :) )</li>
                                <li>Reading Fantasy and YA Novels</li>
                                <li>Playing Guitar</li>
                                <li>JPOP (Yorushika) + KPOP listener (IVE, BTS)</li>
                              </ul>
                        </DraggableWindow>
              )}
          </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
