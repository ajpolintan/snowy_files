'use client';
import React, { useRef,ReactNode } from 'react';

interface MobileWindowProps {    
  window: string
  onClose: () => void; // onClose is a function that takes no args and returns nothing
  children: ReactNode;
}

const MobileWindow: React.FC<MobileWindowProps> = ({ window, onClose, children }) => {

    const nodeRef = useRef(null);

    return (
        
            
            <div ref={nodeRef} className =" max-h-[80vh] overflow-scroll relative flex flex-col border-5 border-indigo-800 text-2xl mb-3 bg-indigo-950"> 
                <div className="bg-indigo-800">
                    <h1>{window}</h1>
                    <button onClick={onClose} className="absolute top-0 right-2 text-pink-500 hover:text-pink-400">x</button>

                </div>
                { children }
            </div>
    )
}

export default MobileWindow