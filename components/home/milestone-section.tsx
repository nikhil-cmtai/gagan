import React from 'react';
import Image from 'next/image';

const milestones = [
    {
        year: '2026',
        yearImage: '/2026.png',
        title: "Newtro-X",
        subtitle: "Project Kickoff",
        details: [
            "Launch of Newtro-X, our base segment brand.",
            "Introducing the world's first non-expiry water bottle."
        ],
        position: "bottom",
        number: 1
    },
    {
        year: '2027',
        yearImage: '/2027.png',
        title: "Home Care",
        subtitle: "Product Expansion",
        details: [
            "Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner."
        ],
        position: "top",
        number: 2
    },
    {
        year: '2028',
        yearImage: '/2028.png',
        title: "Vehicle Care",
        subtitle: "Segment Launch",
        details: [
            "Introduction of DM Water (battery), Coolant, and DEF Water."
        ],
        position: "bottom",
        number: 3
    },
    {
        year: '2029',
        yearImage: '/2029.png',
        title: "Black Plum",
        subtitle: "Premium Segment",
        details: [
            "Launch of our premium brand with enhanced minerals and benefits.",
            "Premium glass bottle packaging, professional branding."
        ],
        position: "top",
        number: 4
    },
    {
        year: '2030',
        yearImage: '/2030.png',
        title: "Java-X",
        subtitle: "Major Achievement",
        details: [
            "Launch of our highest premium segment brand with top enhancements.",
            "Super premium glass bottle, elite branding."
        ],
        position: "bottom",
        number: 5
    }
];

const MilestoneSection = () => {
    return (
        <div className="text-primary py-16 px-4">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex items-center mb-12">
                    <div className="text-5xl mr-4">🏆</div>
                    <h2 className="text-3xl md:text-5xl font-bold">Our 
                        <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text"> Milestone</span>
                    </h2>
                </div>

                {/* Desktop Version - Hidden on mobile */}
                <div className="hidden md:block">

                    {/* Top content */}
                    <div className="flex justify-between mb-24">
                        <div className="w-1/3 invisible"></div>
                        <div className="w-1/3 px-4">
                            <h3 className="text-xl font-bold">
                                <span className="text-primary">{milestones[3].title}</span>
                                <span className="text-black"> {milestones[3].subtitle}</span>                            </h3>
                            <div className="mt-2">
                                {milestones[1].details.map((detail, idx) => (
                                    <p key={idx} className="text-sm text-black md:text-base">{detail}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/3 px-4">
                            <h3 className="text-xl font-bold">
                                <span className="text-primary">{milestones[3].title}</span>
                                <span className="text-black"> {milestones[3].subtitle}</span>
                            </h3>
                            <div className="mt-2">
                                {milestones[3].details.map((detail, idx) => (
                                    <p key={idx} className="text-sm md:text-base text-black">{detail}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline with milestone years */}
                    <div className="flex justify-center mb-16 gap-4 sm:gap-6 md:gap-10">
                        {milestones.map((milestone) => (
                            <div
                                key={milestone.number}
                                className="relative flex flex-col items-center"
                            >
                                {/* Year box with arrow */}
                                <div className="relative flex items-center">
                                    <div className="w-40 h-40 sm:w-40 sm:h-40 flex items-center justify-center rounded-lg text-2xl sm:text-3xl font-bold text-primary overflow-hidden">
                                        {milestone.yearImage ? (
                                            <Image 
                                                src={milestone.yearImage} 
                                                alt={`Year ${milestone.year}`} 
                                                width={100} 
                                                height={100} 
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            milestone.year
                                        )}
                                    </div>
                                    {milestone.number < 5 && (
                                        <div className="ml-2 sm:ml-4 flex items-center">
                                            <Image src="/arrow.png" alt="Arrow" width={40} height={40} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom content */}
                    <div className="flex justify-between">
                        <div className="w-1/3 px-4">
                            <h3 className="text-xl font-bold">
                                <span className="text-primary">{milestones[0].title}</span>
                                <span className="text-black"> {milestones[0].subtitle}</span>
                            </h3>
                            <div className="mt-2">
                                {milestones[0].details.map((detail, idx) => (
                                    <p key={idx} className="text-sm md:text-base text-black">{detail}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/3 px-4">
                            <h3 className="text-xl font-bold">
                                <span className="text-primary">Our </span>
                                <span className="text-primary">{milestones[2].title}</span>
                                <span className="text-black"> {milestones[2].subtitle}</span>
                            </h3>
                            <div className="mt-2">
                                {milestones[2].details.map((detail, idx) => (
                                    <p key={idx} className="text-sm md:text-base text-black">{detail}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/3 px-4">
                            <h3 className="text-xl font-bold">
                                <span className="text-primary">{milestones[4].title}</span>
                                <span className="text-black"> {milestones[4].subtitle}</span>
                            </h3>
                            <div className="mt-2">
                                {milestones[4].details.map((detail, idx) => (
                                    <p key={idx} className="text-sm md:text-base text-black">{detail}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Version - Stacked in columns */}
                <div className="md:hidden">
                    {milestones.map((milestone) => (
                        <div key={milestone.number} className="mb-10 pb-10 border-b border-gray-200 last:border-0">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-white border-2 border-primary flex items-center justify-center rounded-lg text-lg font-bold text-primary shadow-md mr-4 overflow-hidden">
                                    {milestone.yearImage ? (
                                        <Image 
                                            src={milestone.yearImage} 
                                            alt={`Year ${milestone.year}`} 
                                            width={64} 
                                            height={64} 
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        milestone.year
                                    )}
                                </div>
                                <h3 className="text-lg font-bold">
                                    {milestone.title === "Home Care" || milestone.title === "Vehicle Care" ? (
                                        <>
                                            <span className="text-primary">Our </span>
                                            <span className="text-primary">{milestone.title}</span>
                                            <span className="text-black"> {milestone.subtitle}</span>

                                        </>
                                    ) : (
                                        <>
                                            <span className="text-primary">{milestone.title}</span>
                                            <span className="text-black"> {milestone.subtitle}</span>
                                        </>
                                    )}
                                </h3>
                            </div>
                            <div className="pl-20">
                                {milestone.details.map((detail, idx) => (
                                    <p key={idx} className="text-sm text-black mb-2">{detail}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MilestoneSection;