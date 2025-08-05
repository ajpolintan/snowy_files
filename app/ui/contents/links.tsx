'use client'

import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/discord'
import 'react-social-icons/instagram'
import 'react-social-icons/itch.io'
import 'react-social-icons/linkedin'
import 'react-social-icons/twitter'
import 'react-social-icons/itch.io'
import 'react-social-icons/github'

import { useState } from "react";

export default function Links() {
    const [sm_icon_index, setIndex] = useState(-1);

    const icons = [
        { url: 'https://www.discord.com/', href:'https://discord.com/users/Snowy_Oshawott' },
        { url: 'https://www.instagram.com', href:'https://www.instagram.com/jakepolintanart/'},
        { url: 'https://www.linkedin.com', href:'https://www.linkedin.com/in/allen-polintan-1528a121b/'},
        { url: 'https://www.twitter.com', href:'https://x.com/Snowy_Oshawott'},
        { url: 'https://www.itch.io.com', href:'https://jakepolintanart.itch.io/'},
        { url: 'https://www.github.com', href:'https://github.com/ajpolintan'}

    ]

    return (
    
        //reference https://stackoverflow.com/questions/53194663/reactjs-render-single-icon-on-hover-for-list-item-rendered-from-array
        <div className="grid grid-cols-3 gap-4 px-6 py-6 text-center mb-4 ">
            {icons.map((icon, index) =>                                 //icons.map loops through the icons array and gets each index and creates a new social media icon
                <SocialIcon
                key={index}                                             // useful for react to know where each icon is in the list. creates youtube with key 0 and set_size(0) in first run and instagram with key 1 and set_size(1) after
                onMouseEnter={() => setIndex(index)}                    //if it is youtube. it will run set_index(0). if it is instagram it will run set_instgram(1) 
                onMouseLeave={() => setIndex(-1)}
                target="_blank"
                url={icon.url}   
                href={icon.href}                                       //url for each icon
                style={{
                    height: sm_icon_index === index ? 100 : 95,         // get input from on MouseEnter and compare it to a sm icon. example hover instgram and compared to youtube's 0
                    width:  sm_icon_index === index ? 100 : 95,
                    transition: 'all 0.2s ease',
                    marginRight: 10,
                }}
                />
                )

            }

        </div>
        
    )
}