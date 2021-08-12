import React from 'react';

import MetaData from './layout/MetaData';

function AboutUs() {
    return (
        <div>
            <MetaData title={'About Us'}/>
        <div className="container flex justify-center mx-auto pt-16">
            <div>
                <p className="text-gray-500 text-lg text-center font-normal pb-3">SCISSORS PALACE TEAM</p>
                <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes</h1>
            </div>
        </div>
        <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
                <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                    <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                        <div className="rounded overflow-hidden shadow-md bg-white">
                            <div className="absolute -mt-20 w-full flex justify-center">
                                <div className="h-32 w-32">
                                    <img src="./images/profile/ericPic.jpg" alt="Display Picture of Eric Flores" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                </div>
                            </div>
                            <div className="px-6 mt-16">
                                <h1 className="font-bold text-3xl text-center mb-1">Erick Flores</h1>
                                <p className="text-gray-800 text-sm text-center">Project Manager/Senior Software Developer</p>
                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Software development manager with extensive experience in full lifecycle software engineering, 
                                development, programming, quality assurance, support and implementation. In-depth knowledge of software technologies, architectures and platforms, with the ability to apply them to cutting edge software, 
                                systems and applications.</p>
                                <div className="w-full flex justify-center pt-5 pb-5">
                                    <a href="https://github.com/ferick8246" className="mx-5">
                                        <div aria-label="Github" role="img">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </div>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="./images/profile/idaPic.jpg" alt="Display Picture of Ida Shalilian" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Ida Shalilian</h1>
                            <p className="text-gray-800 text-sm text-center">Front-End Developer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">Specializing in Front-End React components and styling, using Tailwind CSS.
                            Focused on being a valuable part of any team I am on and believe in the team rising together.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <a href="http://github.com/corgimaman" className="mx-5">
                                    <div aria-label="Github" role="img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="./images/profile/jessePic.jpg" alt="Display Picture of Jessie Ceniceros" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Jesse Ceniceros</h1>
                            <p className="text-gray-800 text-sm text-center">Front-End Developer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">Determining the layouts of the pages and integrating mobile design.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <a href="https://github.com/Jesse2360" className="mx-5">
                                    <div aria-label="Github" role="img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="./images/profile/kevinPic.jpg" alt="Display Picture of Kevin Henley" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Kevin Henley</h1>
                            <p className="text-gray-800 text-sm text-center">Back-End Developer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">An avid open-source developer who loves to be creative and innovative. 
                            If one portion of the team needs help with a task, I have no issue jumping in to assist on anything that's required.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <a href="https://github.com/KevinHenleyCode" className="mx-5">
                                    <div aria-label="Github" role="img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="./images/profile/celestePic.jpg" alt="Display Picture of Rachel Adams" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Celeste Moore</h1>
                            <p className="text-gray-800 text-sm text-center">Front-End Developer, Research & Development</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">Front-End Developer with a creative eye and knack for aesthetics. Interests include 
                            Googling emerging technologies and sharing Tech Tea with friends. Skilled in taking ideas and giving them a life with HTML, CSS, Javascript, and ReactJS.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <a href="https://github.com/celestealexmoore" className="mx-5">
                                    <div aria-label="Github" role="img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default AboutUs;