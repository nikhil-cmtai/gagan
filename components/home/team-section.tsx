import React from 'react';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Dr. Gagan Mahalwanshi",
        position: "Founder & CEO",
        image: "/vitamin.png"
    },
    {
        name: "Sandhya Mahalwanshi",
        position: "Director",
        image: "/vitamin.png"
    },
    {
        name: "U. S. Khobariya",
        position: "Sub-Director",
        image: "/vitamin.png"
    },
    {
        name: "Mukesh Dixit",
        position: "CFO",
        image: "/vitamin.png"
    }
];

const TeamSection = () => {
    return (
        <div className="py-16 px-4">
            <h2 className="text-center text-3xl md:text-5xl text-primary font-bold mb-24">Meet Our Expert Team</h2>
            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-wrap justify-center items-start">
                    {/* First team member (left) */}
                    <div className="w-64 md:w-72 mx-4">
                        <div className="rounded-lg p-2 shadow-lg border-6 border-white">
                            <Image
                                src={teamMembers[0].image}
                                alt={teamMembers[0].name}
                                width={300}
                                height={350}
                                className="w-full h-auto"
                            />
                            <div className="bg-gray-200 rounded-lg p-2 mt-1 relative -mb-6">
                                <p className="text-center font-bold">{teamMembers[0].name}</p>
                                <p className="text-center text-blue-600 font-bold">{teamMembers[0].position}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* Second team member (top) */}
                        <div className="w-48 md:w-56 mb-8 md:mb-12 mx-4 mt-8">
                            <div className="rounded-lg p-2 shadow-lg border-6 border-white">
                                <Image
                                    src={teamMembers[1].image}
                                    alt={teamMembers[1].name}
                                    width={220}
                                    height={260}
                                    className="w-full h-auto"
                                />
                                <div className="bg-gray-200 rounded-lg p-1 mt-1 relative -mb-6">
                                    <p className="text-center font-bold text-sm">{teamMembers[1].name}</p>
                                    <p className="text-center text-blue-600 font-bold">{teamMembers[1].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-end">
                        {/* Third team member (bottom) */}
                        <div className="w-48 md:w-56 mt-0 md:mt-16 mx-4">
                            <div className="rounded-lg p-2 shadow-lg border-6 border-white">
                                <Image
                                    src={teamMembers[2].image}
                                    alt={teamMembers[2].name}
                                    width={220}
                                    height={260}
                                    className="w-full h-auto"
                                />
                                <div className="bg-gray-200 rounded-lg p-1 mt-1 relative -mb-6">
                                    <p className="text-center font-bold text-sm">{teamMembers[2].name}</p>
                                    <p className="text-center text-blue-600 font-bold">{teamMembers[2].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* Fourth team member (right) */}
                        <div className="w-48 md:w-56 mx-4 mt-8">
                            <div className="rounded-lg p-2 shadow-lg border-6 border-white">
                                <Image
                                    src={teamMembers[3].image}
                                    alt={teamMembers[3].name}
                                    width={220}
                                    height={260}
                                    className="w-full h-auto"
                                />
                                <div className="bg-gray-200 rounded-lg p-1 mt-1 relative -mb-6">
                                    <p className="text-center font-bold text-sm">{teamMembers[3].name}</p>
                                    <p className="text-center text-blue-600 font-bold">{teamMembers[3].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
