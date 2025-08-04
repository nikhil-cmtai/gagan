import React from 'react';

const milestones = [
    {
        year: 2026,
        title: "Ever Fresh",
        subtitle: "Project kickoff",
        details: [
            "After Series A Round funding",
            "We will launch our base segment brand Royal fresh minerals",
            "World's first non expiry water bottle",
            "We will take 10 Rs on each unit"
        ],
        position: "bottom",
        number: 1
    },
    {
        year: 2027,
        title: "Home care",
        subtitle: "product",
        details: [
            "We will launch our other base segment product Colin, Dish wash, Toilet cleaner, fursh cleaner",
            "We will take different different prices on every separate product As per market validation"
        ],
        position: "top",
        number: 2
    },
    {
        year: 2028,
        title: "Vehicle care",
        subtitle: "segment",
        details: [
            "After Rised Series B Round Funding",
            "We will launch our next level segment product DM water (battery water),coolant,DEF water",
            "We will take different different prices on every separate product As per market validation"
        ],
        position: "bottom",
        number: 3
    },
    {
        year: 2029,
        title: "Ultra Pure",
        subtitle: "our Premium segment",
        details: [
            "We will launch our premium brand after Series C round of funding, upgrade it with premium enhancements,",
            "provide more enhanced minerals and more health benefits, use professional branding with premium transparent glass bottle packaging and charge ₹5,000 per unit"
        ],
        position: "top",
        number: 4
    },
    {
        year: 2030,
        title: "Java",
        subtitle: "Major achievement",
        details: [
            "After Venture Capital Series round of funding we will launch our highest premium segment brand.",
            "We will upgrade it with premium enhancements and more health benefits. We will use highest premium transparent glass bottle and use good professional branding with super premium packaging. We will charge ₹25000 per unit."
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
                    <h2 className="text-3xl md:text-5xl font-bold">Our Milestone</h2>
                </div>

                {/* Desktop Version - Hidden on mobile */}
                <div className="hidden md:block">

                    {/* Top content */}
                    <div className="flex justify-between mb-24">
                        <div className="w-1/3 invisible"></div>
                        <div className="w-1/3 px-4">
                            <h3 className="text-xl font-bold">
                                <span className="text-primary">Our </span>
                                <span className="text-primary">{milestones[1].title} {milestones[1].subtitle}</span>
                                <span className="text-black"> In {milestones[1].year}</span>
                            </h3>
                            <div className="mt-2">
                                {milestones[1].details.map((detail, idx) => (
                                    <p key={idx} className="text-sm md:text-base text-black">{detail}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/3 px-4">
                            <h3 className="text-xl font-bold">
                                <span className="text-primary">{milestones[3].title}</span>
                                <span className="text-black"> {milestones[3].subtitle} In {milestones[3].year}</span>
                            </h3>
                            <div className="mt-2">
                                {milestones[3].details.map((detail, idx) => (
                                    <p key={idx} className="text-sm md:text-base text-black">{detail}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline with milestone numbers */}
                    <div className="flex justify-center mb-16 gap-4 sm:gap-6 md:gap-10">
                        {milestones.map((milestone, idx) => (
                            <div
                                key={milestone.number}
                                className="relative flex flex-col items-center"
                            >
                                {/* Number box with arrow */}
                                <div className="relative flex items-center">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-white flex items-center justify-center rounded-lg text-3xl sm:text-4xl font-bold bg-white shadow-md">
                                        {milestone.number}
                                    </div>
                                    {milestone.number < 5 && (
                                        <div className="ml-2 sm:ml-4 flex items-center">
                                            <span className="text-primary text-2xl sm:text-4xl">➡️</span>
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
                                <span className="text-black"> {milestones[0].subtitle} In {milestones[0].year}</span>
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
                                <span className="text-primary">{milestones[2].title} {milestones[2].subtitle}</span>
                                <span className="text-black"> In {milestones[2].year}</span>
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
                                <span className="text-black"> {milestones[4].subtitle} In {milestones[4].year}</span>
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
                                <div className="w-10 h-10 bg-white border-2 border-primary flex items-center justify-center rounded-lg text-xl font-bold text-primary shadow-md mr-4">
                                    {milestone.number}
                                </div>
                                <h3 className="text-lg font-bold">
                                    {milestone.title === "Home care" || milestone.title === "Vehicle care" ? (
                                        <>
                                            <span className="text-primary">Our </span>
                                            <span className="text-primary">{milestone.title} {milestone.subtitle}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-primary">{milestone.title}</span>
                                            <span className="text-black"> {milestone.subtitle}</span>
                                        </>
                                    )}
                                    <span className="text-black"> In {milestone.year}</span>
                                </h3>
                            </div>
                            <div className="pl-14">
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