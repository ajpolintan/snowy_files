'use client';
import React, { useRef,ReactNode } from 'react';
import Draggable from 'react-draggable'; // The default

interface DraggableWindowProps {    
  window: string
  onClose: () => void; // onClose is a function that takes no args and returns nothing
  children: ReactNode;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({ window, onClose, children }) => {

    const nodeRef = useRef(null);

    return (
        
        <Draggable bounds={{top: -500, left: -600, right: 980, bottom: 500}} nodeRef={nodeRef}> 
            
            <div ref={nodeRef} className =" max-h-[80vh] overflow-scroll relative flex flex-col border-5 border-indigo-800 text-2xl mb-3 bg-indigo-950"> 
                <div className="bg-indigo-800">
                    <h1>{window}</h1>
                    <button onClick={onClose} className="absolute top-0 right-2 text-pink-500 hover:text-pink-400">x</button>

                </div>
                { children }
            </div>
        </Draggable> 
    )
}

export default DraggableWindow