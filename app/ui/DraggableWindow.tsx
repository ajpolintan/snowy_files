'use client';
import React, { useRef,ReactNode } from 'react';
import Draggable from 'react-draggable'; // The default

interface DraggableWindowProps {
  onClose: () => void; // onClose is a function that takes no args and returns nothing
  children: ReactNode;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({ onClose, children }) => {

    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}> 
            <div ref={nodeRef} className ="relative flex flex-col border-5 border-purple-500 text-2xl mb-3 bg-black"> 
                <button onClick={onClose} className="absolute top-0 right-2 text-red-500">✕</button>
                { children }
            </div>
        </Draggable> 
    )
}

export default DraggableWindow