import React from 'react';

function Services(){
    return(

        // To Do:
        // This file should render a list of all services--
        //page details to include:
        //  1. photo of style
        //  2. description of style
        //  3. cost of style
        //  4. a 'book now' button that connects the style + price and sends it 
        //   to calendar.js for scheduling style, then to cart.js and gives a confirmation of sale.


        <>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">

            
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Women's Shampoo</h2>
                        <p class="leading-relaxed text-base">Our shampoo service provides our clients with a pleasurable and relaxing experience while cleansing the hair and scalp.</p>
                            <a href="./calendar/womensshampoo" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img src="./images/womanShampoo.jpg" alt="Display Picture of partial highlight" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                </div>

                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">   
                        <img src="./images/haircut-4.jpg" alt="Display Picture of women's haircut" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Women's Haircut</h2>
                        <p class="leading-relaxed text-base">Each haircut begins with a complete consultation and hair analysis, followed by a magnificent shampoo and relaxing scalp massage. After your cut, we finish with a technical blow dry style and our recommendations for at home hair care.</p>
                        <a href="./calendar/womenshaircut" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                </div>


                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Partial Highlight</h2>
                        <p class="leading-relaxed text-base">Each color service begins with a complete consultation and hair analysis. Partial Highlight entails adding dimension and texture to your hair color with highlights and lowlights. The foils are placed on only part of your hair, generally from ear to ear and from fringe to the crown, to give you dimension and texture. You'll be shampooed and styled before you walk out the door!
                            Your highlights can be chunky, light or natural. This completely depends on what you are looking for. </p>
                            <a href="./calendar/partialhighlight" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img src="./images/partHighlight.jpg" alt="Display Picture of partial highlight" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                </div>



                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">   
                        <img src="./images/fullHighlight.jpg" alt="Display Picture of full highlight" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Full Highlight</h2>
                        <p class="leading-relaxed text-base">A full highlight entails adding dimension and texture to your hair color with highlights and lowlights. The foils are placed on throughout your entire head, generally from ear to ear and from fringe to neck, to give you dimension and texture. You'll be shampooed and styled before you walk out the door!</p>
                        <a href="./calendar/fullhighlight" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                </div>


                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Bridal Style</h2>
                        <p class="leading-relaxed text-base">You'll need to schedule at least 1 trial updo a few weeks before the wedding. This appointment will be with the same stylist who will style your hair on the big day. If you have photos or ideas, jot them down! Your stylist will need this information to have a better understanding of the look you're wanting to achieve. Please contact us for more details regarding our bridal pricing!</p>
                        <a href="./calendar/bridalstyle" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img src="./images/bridal.jpg" alt="Display Picture of Bridal Style" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                </div>

                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">   
                        <img src="./images/bridalNatural.jpg" alt="Display Picture of natural bride" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Full Bridal Services with travel</h2>
                        <p class="leading-relaxed text-base">You'll need to schedule at least 1 trial updo one month before the wedding. This appointment will be with the same stylist who will style your hair on the big day. If you have photos or ideas, jot them down! Your stylist will need this information to have a better understanding of the look you're wanting to achieve. Please contact us for more details regarding our bridal pricing and our travel restrictions and requirements!</p>
                        <a href="./calendar/fullbridalservice" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                </div>


                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Afro Hair Styling</h2>
                        <p class="leading-relaxed text-base">This service provides a relaxing hair cleansing experience, a comfortale detangling of coil-tresses, and a styling of your choice, including one of the following: Bantu Knots, Twist-Out, Flat-Twists, Silk Press, Curl Defining, or Blow-Out.</p>
                        <a href="./calendar/afrohairstyling" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img src="./images/naturalStyle.jpg" alt="Display Picture of Natural Afro Hair" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                </div>

                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">   
                        <img src="./images/haircut-7.jpg" alt="Display Picture of Man with Locs" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Loc Retwist/ Style</h2>
                        <p class="leading-relaxed text-base">Whether you're in the beginning, middle or matured stage of your loc'ing journey, we can provide services such as a shampoo and deep-condition when appropriate, installation and/or retwisting, interlocing and styling.</p>
                        <a href="./calendar/locstyling" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                </div>


                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Men's Shampoo</h2>
                        <p class="leading-relaxed text-base">Our shampoo service provides our clients with a pleasurable and relaxing experience while cleansing the hair and scalp.</p>
                        <a href="./calendar/mensshampoo" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img src="./images/menShampoo.jpg" alt="Display Picture of man being shampooed." role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                </div>

                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">   
                        <img src="./images/haircut-2.jpg" alt="Display Picture of Man with Fade" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Men's Fade with Ponytail</h2>
                        <p class="leading-relaxed text-base">Each haircut begins with a complete consultation and hair analysis, followed by a magnificent shampoo and relaxing scalp massage. After your cut, we style and give our recommendations for at home hair care. </p>
                        <a href="./calendar/mensfade" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                </div>


                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Braiding Services</h2>
                        <p class="leading-relaxed text-base">Our shampoo service provides our clients with a pleasurable and relaxing experience while cleansing the hair and scalp.</p>
                        <a href="./calendar/braidingservices" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img src="./images/kawhi.png" alt="Display Picture of man being shampooed." role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                </div>


                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">   
                        <img src="./images/champagne.jpg" alt="Display Picture of Man with Fade" role="img" className="rounded-full object-cover h-full w-full shadow-md"></img>
                    </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Champagne Add-On</h2>
                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <a href="./calendar/champagne" class="mt-3 text-yellow-500 inline-flex items-center">Book Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                </div>
                </div>
                <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
            </section>
        </>
    )
};

export default Services;