import type { NextPage } from "next";

import React from "react";
import Image from 'next/image'
import Masonry from "react-responsive-masonry"

import { GetStaticProps } from 'next';

//references https://www.fullstackfoundations.com/blog/nextjs-masonry-image-gallery-lightbox

export type ImageEnhanced = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type ImageGalleryPageProps = {
    images: ImageEnhanced[];
};

// Create an array of images
const imagesArray: ImageEnhanced[] = [
  {
    src: "/illustrations/custom-background.jpeg",
    alt: "Image 1",
    width: 1000,
    height: 800,
  },
  {
    src: "/illustrations/custom-background.jpeg",
    alt: "Image 2",
    width: 1200,
    height: 900,
  },
  {
    src: "/illustrations/connected.jpg",
    alt: "Image 3",
    width: 800,
    height: 2000,
  },
];


const ImageGallery: NextPage<ImageGalleryPageProps> = ({ images }) => {
    return (
        <Masonry>
            { images.map((image) =>
                <Image
                    key={image.src}
                    className="hover:opacity-80 cursor-pointer my-2"
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    layout="responsive"
                />)}
        </Masonry>
    )
}

const Gallery: NextPage = () => {
    return (
        <div className="px-6 py-6">

            <h1> hey</h1>
            
            <Image src ={"/illustrations/connected.jpg"} 
            alt="illust"
            width="500"
            height="500"/> 
            <ImageGallery images={imagesArray} />

        </div>

    )
};

export default Gallery
