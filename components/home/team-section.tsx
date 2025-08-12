import React from 'react';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Dr. Gagan Mahalwanshi",
        position: "Founder & CEO",
        image: "/images/gagan.jpeg",
        bio: "With over 15 years of experience in the water industry, Dr. Gagan Mahalwanshi has pioneered revolutionary water purification technologies. His vision for Ever Fresh is to create water solutions that are both sustainable and beneficial for health."
    },
    {
        name: "Sandhya Mahalwanshi",
        position: "Director",
        image: "/images/sandhya.jpeg"
    },
    {
        name: "U. S. Khobariya",
        position: "Sub-Director",
        image: "/images/1.jpeg"
    },
    {
        name: "Mukesh Dixit",
        position: "CFO",
        image: "/images/2.jpeg"
    }
];

const TeamSection = () => {
    return (
        <div className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-4xl md:text-6xl text-primary font-bold mb-20">Meet Our Expert Team</h2>
                
                {/* Founder Section - Top row with image left, description right */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                    {/* Founder Image - Left side */}
                    <div className="w-full md:w-1/3 flex justify-center px-6 sm:px-10 md:px-0">
                        <div className="w-full max-w-sm">
                            <div className="bg-white rounded-3xl p-4 shadow-xl mx-auto relative">
                                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                                    <Image
                                        src={teamMembers[0].image}
                                        alt={teamMembers[0].name}
                                        width={600}
                                        height={800}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                
                                {/* White info card at bottom */}
                                <div className="absolute -bottom-10 left-0 right-0 mx-8 bg-white rounded-xl p-4 shadow-lg">
                                    <p className="text-center font-bold text-xl text-gray-800">{teamMembers[0].name}</p>
                                    <p className="text-center text-gray-500 text-sm">We support over the world</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Founder Description - Right side */}
                    <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
                        <div className="max-w-lg">
                            <h3 className="text-3xl font-semibold text-primary mb-6">About the Founder</h3>
                            <p className="text-gray-700 leading-relaxed text-xl">
                                {teamMembers[0].bio}
                            </p>
                            <div className="mt-8 flex gap-4">
                                <a href="#" className="text-blue-600 hover:text-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-blue-600 hover:text-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Leadership Team Section - Bottom row */}
                <div className="mt-20 pt-16 border-t border-gray-200">
                    <h3 className="text-3xl font-semibold text-primary mb-12 text-center">Leadership Team</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
                        {teamMembers.slice(1).map((member, index) => (
                            <div key={index} className="flex flex-col items-center w-full px-6 sm:px-8 md:px-4">
                                <div className="w-full max-w-xs mx-auto">
                                    <div className="bg-white rounded-3xl p-4 shadow-xl relative">
                                        <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={500}
                                                height={667}
                                                className="w-full h-full object-cover"
                                                priority
                                            />
                                        </div>
                                        
                                        {/* White info card at bottom */}
                                        <div className="absolute -bottom-10 left-0 right-0 mx-8 bg-white rounded-xl p-4 shadow-lg">
                                            <p className="text-center font-bold text-lg text-gray-800">{member.name}</p>
                                            <p className="text-center text-gray-500 text-sm">We support over the world</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
