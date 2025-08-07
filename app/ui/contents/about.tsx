import Image from 'next/image'


export default function About() {
    return (
    <div className="px-6 py-6">
                <div className='mb-4 flex  items-center '> 
                    <Image
                                        className="mr-4"
                                        src="/photography/blue_me.jpg"
                                        width={200}
                                        height={300}
                                        alt="Picture of the author"
                    />
                    <h1 className="mb-16 font-bold text-3xl">Allen Jake Polintan  </h1>
                
                </div>
                <p className =" mb-5"> Hi my name is Jake and I am a software developer/illustrator based in San Francisco.
                    I love to create and express who I am through the works I craft.</p>
               
                <h1 className="text-decoration-line: underline font-bold  text-3xl">
                    Education
                </h1>

                <p className =" mb-5"> Bachelor of Science in Computer Science (Graduated Summa Cum Luade 2025) </p>
                <h1 className="text-decoration-line: underline font-bold text-3xl">
                    My interests!
                </h1>
                <ul  className="list-disc ml-7"> 
                    <li> Dance Dance Revolution </li>
                    <li> Photography (I use the Sony a6700) </li>

                    <li> Soulslikes and JRPGs (Final Fantasy :) </li>
                    <li> Reading Fantasy and YA Novels</li>
                    <li> Playing Guitar </li>
                    <li> JPOP (Yorushika) + KPOP listener (IVE, BTS) </li>
                </ul>
        </div>
    )
}
