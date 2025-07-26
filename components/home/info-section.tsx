import React from 'react';
import Image from 'next/image';

const InfoSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around">
          {/* Left Side - Profile Card */}
          <div className="w-[400px]">
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              {/* Profile Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/doctor-profile.jpg"
                  alt="Doctor Profile"
                  fill
                  className="object-cover"
                />
                {/* Green Badge */}
                <div className="absolute right-4 bottom-4 w-12 h-12 bg-[#2ECC71] rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/verified.svg"
                    alt="Verified"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="text-center">
                <div className="text-[#1D1D42] text-[28px] font-semibold mb-2">
                  17,47,783.00
                </div>
                <p className="text-gray-500 text-sm">
                  We support over the world
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="max-w-[600px]">
            <h2 className="text-[#1D1D42] text-[38px] font-bold leading-tight mb-4">
              Our Commitment to<br />Care and Community
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Our mission: excellence, compassion, innovation;<br />
              empowering lives, building resilient communities
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFF3E5] rounded-xl flex items-center justify-center">
                  <Image
                    src="/icons/community.svg"
                    alt="Community"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-[#1D1D42] text-lg">
                  Compassionate Care, Strong Communities
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E5F5FF] rounded-xl flex items-center justify-center">
                  <Image
                    src="/icons/excellence.svg"
                    alt="Excellence"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-[#1D1D42] text-lg">
                  Excellence, Integrity, Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 


