'use client';
import React, { useRef } from 'react';
import Draggable from 'react-draggable'; // The default

interface DraggableWindowProps {
  onClose: () => void; // onClose is a function that takes no args and returns nothing
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({ onClose }) => {

    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}> 
            <div ref={nodeRef} className ="flex border-b border-gray-500 text-2xl mb-3"> 
                <p> Hi my name is Allen Jake Polintan</p>
                <ul> My favorite hobbies are
                    <li> gaming </li>
                    <li> gaming </li>
                    <li> gaming </li>

                </ul>
                        <button onClick={onClose} className="text-red-500">✕</button>
            </div>
        </Draggable> 
    )
}

export default DraggableWindow