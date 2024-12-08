import Image from "next/image";
import one from "@/public/pexels-cottonbro-5077047.jpg"
import two from "@/public/istockphoto-1340404785-612x612.jpg"
import three from "@/public/colorvisionprintingcom_429017873.png"
import four from "@/public/pexels-kindelmedia-6868619.jpg"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-sky-100 text-gray-800">
      
      {/* Section 1: Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-sky-900 to-blue-800 text-white overflow-hidden mb-8">
        <div className="absolute inset-0 opacity-25 bg-pattern mix-blend-overlay"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-100 animate-fade-in-down tracking-tight">
            Plan Your 2025 Goals
            <br />
            <span className="text-2xl font-sans tracking-wider">TIMIZA MALENGO WORKBOOK</span>
          </h1>
           <div className="w-96 h-1 mx-auto mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 rounded-full shadow-inner transform hover:scale-110 transition-all duration-300"></div>
          <p className="text-2xl text-cyan-100 mb-1 animate-fade-in font-light tracking-wide">Transform your dreams into achievable <br /> goals using the proven methodology by Joal Nanauka</p>
          <p className="text-2xl text-cyan-100 mb-12 animate-fade-in font-light tracking-wide">Personal Development Platform for Smart Goal Setting</p>
         
          <button className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white px-12 py-6 rounded-full hover:from-cyan-600 hover:via-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl text-2xl font-bold tracking-wide backdrop-blur-lg animate-pulse">
            Start Your 2025 Journey
          </button>
        </div>
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] animate-float">
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
            <Image 
              src={one} 
              alt="Digital Workbook" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={75}
              className="rounded-3xl shadow-2xl object-cover"
              priority 
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-6xl font-bold mb-8 text-sky-900 leading-tight">Create Your Personal Workbook</h2>
            <p className="text-2xl leading-relaxed text-gray-700">
             { 'Based on "TIMIZ MALENGO YAKO" methodology by Joel Nanauka, create your personalized workbook tailored to your unique aspirations. Get expert guidance and structured planning tools to achieve your 2025 goals.'}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-32">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-6xl font-bold mb-8 text-sky-900 leading-tight">Download Your Digital Copy</h2>
            <p className="text-2xl leading-relaxed text-gray-700">
              Access your personalized workbook instantly through our digital platform. 
              Track your progress, update your goals, and stay motivated with our comprehensive digital tools.
            </p>
          </div>
          <div className="order-1 md:order-2 transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
            <Image 
              src={two} 
              alt="Create" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={75}
              className="rounded-3xl shadow-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-32">
          <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
            <Image 
              src={three} 
              alt="Download" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={75}
              className="rounded-3xl shadow-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-6xl font-bold mb-8 text-sky-900 leading-tight">Premium Printed Version</h2>
            <p className="text-2xl leading-relaxed text-gray-700">
              Receive a beautifully crafted physical workbook with premium materials. 
              Each workbook includes QR codes linking to your digital progress dashboard for a seamless experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-32">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-6xl font-bold mb-8 text-sky-900 leading-tight">Delivery Service</h2>
            <p className="text-2xl leading-relaxed text-gray-700">
              {"We'll deliver your printed workbook right to your doorstep."}
              Enjoy the convenience of our reliable delivery service and start your goal-setting journey immediately.
            </p>
          </div>
          <div className="order-1 md:order-2 transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
            <Image 
              src={four} 
              alt="Printed Workbook" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={75}
              className="rounded-3xl shadow-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Plans */}
      <section className="bg-gradient-to-b from-sky-100 to-sky-200 py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-16 text-sky-900">2025 Goal Achievement Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Plan 1 */}
            <div className="border-2 border-sky-200 rounded-3xl p-10 bg-white shadow-2xl hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-6 text-sky-900">Digital Starter</h3>
              <p className="text-xl mb-8 text-gray-700">Essential digital planning tools</p>
              <p className="text-2xl font-bold mb-6 text-sky-600">TSH 25,000</p>
              <ul className="list-disc text-left ml-6 mb-10 text-gray-700 space-y-3">
                <li>Digital workbook access</li>
                <li>Personalized goal planning questions</li>
                <li>1 copy download</li>
                <li>Email support</li>
              </ul>
              <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-full hover:from-sky-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl w-full text-lg font-semibold">
                Start Planning 2025
              </button>
            </div>

            {/* Plan 2 */}
            <div className="border-2 border-sky-200 rounded-3xl p-10 bg-white shadow-2xl hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-6 text-sky-900">Growth Pro</h3>
              <p className="text-xl mb-8 text-gray-700">Enhanced planning experience</p>
              <p className="text-2xl font-bold mb-6 text-sky-600">TSH 45,000</p>
              <ul className="list-disc text-left ml-6 mb-10 text-gray-700 space-y-3">
                <li>All Digital Starter features</li>
                <li>Printed simple workbook</li>
                <li>Delivery service included</li>
                <li>Priority support</li>
                <li>Unlimited downloads</li>
              </ul>
              <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-full hover:from-sky-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl w-full text-lg font-semibold">
                Accelerate Your Growth
              </button>
            </div>

            {/* Plan 3 */}
            <div className="border-2 border-sky-200 rounded-3xl p-10 bg-white shadow-2xl hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-6 text-sky-900">Ultimate Success</h3>
              <p className="text-xl mb-8 text-gray-700">Complete premium experience</p>
              <p className="text-2xl font-bold mb-6 text-sky-600">TSH 75,000</p>
              <ul className="list-disc text-left ml-6 mb-10 text-gray-700 space-y-3">
                <li>All Growth Pro features</li>
                <li>Direct consultation with Joel Nanauka</li>
                <li>Premium printed workbook</li>
                <li>24/7 dedicated support</li>
                <li>Priority delivery service</li>
              </ul>
              <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-full hover:from-sky-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl w-full text-lg font-semibold">
                Transform Your 2025
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}