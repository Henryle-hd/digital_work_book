'use client'
import Image from "next/image";
import one from "@/public/pexels-cottonbro-5077047.jpg"
import two from "@/public/istockphoto-1340404785-612x612.jpg"
import three from "@/public/colorvisionprintingcom_429017873.png"
import four from "@/public/pexels-kindelmedia-6868619.jpg"
import JoelNanauka from "@/public/JoelNanaukaSite.png"
import Link from "next/link";
import Testimonials from "./components/feedback";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <div className="bg-gradient-to-b from-sky-50 to-sky-100 text-gray-800">
      
      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-indigo-900 via-sky-900 to-blue-800 text-white overflow-hidden mb-8">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className=" mt-32 lg:mt-0 w-full md:pr-12 mb-12 md:mb-0 flex flex-col items-center justify-center lg:block">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-100 animate-fade-in-down tracking-tight text-center lg:text-left ">
              Plan Your 2025 Goals
            </h1>
            <p className="text-xl lg:text-2xl text-cyan-100 mb-12 animate-fade-in font-light tracking-wide text-center lg:text-left">
              Transform your dreams into achievable goals using the proven methodology by Joal Nanauka With Timiza Malengo Yako Digital Workbook.
              
            </p>
            <button onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-sky-900 px-10 py-4 rounded-lg hover:bg-sky-100 transition-all duration-300 text-xl font-semibold shadow-lg">
              Start Your 2025 Journey
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="relative -mb-20 lg:mb-0 w-full md:w-full lg:w-[850px] h-[600px] lg:h-[1000px] animate-float">
              <Image 
                src={JoelNanauka.src} 
                alt="Joel nanauka"
                fill
                className="object-cover w-full h-full rounded-lg transform hover:scale-105 transition-all transition-duration-300"
                
                priority
              />
            </div>
          </div>
        </div>
      </section>
        {/* Section 2: Our Services */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-24  bg-transparent">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-sky-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image 
                  src={one} 
                  alt="Digital Workbook" 
                  width={600} 
                  height={400} 
                  placeholder="blur"
                  quality={75}
                  className="rounded-t-lg object-cover w-full h-96"
                  priority 
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-sky-900">Create Your Personal Workbook</h3>
                <p className="text-gray-600 text-sm">
                  Based on <span className="text-blue-700 cursor-pointer">#TIMIZA_MALENGO_YAKO</span>  methodology by Joel Nanauka, create your personalized workbook tailored to your unique aspirations. Get expert guidance and structured planning tools to achieve your 2025 goals.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                  </div>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image 
                  src={two} 
                  alt="Create" 
                  width={600} 
                  height={400} 
                  placeholder="blur"
                  quality={75}
                  className="rounded-t-lg object-cover w-full h-96"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-sky-900">Download Your Digital Copy</h3>
                <p className="text-gray-600 text-sm">
                  Access your personalized workbook instantly through our digital platform. 
                  Track your progress, update your goals, and stay motivated with our comprehensive digital tools.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                  </div>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image 
                  src={three} 
                  alt="Download" 
                  width={600} 
                  height={400} 
                  placeholder="blur"
                  quality={75}
                  className="rounded-t-lg object-cover w-full h-96"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-sky-900">Premium Printed Version</h3>
                <p className="text-gray-600 text-sm">
                  Receive a beautifully crafted physical workbook with premium materials. 
                  Each workbook includes QR codes linking to your digital progress dashboard for a seamless experience.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                  </div>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image 
                  src={four} 
                  alt="Printed Workbook" 
                  width={600} 
                  height={400} 
                  placeholder="blur"
                  quality={75}
                  className="rounded-t-lg object-cover w-full h-96"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-sky-900">Delivery Service</h3>
                <p className="text-gray-600 text-sm">
                  {"We'll deliver your printed workbook right to your doorstep. "}
                  Enjoy the convenience of our reliable delivery service and start your goal-setting journey immediately.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                  </div>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Section 3: Plans */}
      <section className="bg-gradient-to-b from-sky-100 to-sky-200 py-32 " id="plans">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 text-sky-900">2025 Goal Achievement Plans</h2>
          <p className="text-sm lg:text-sm mt-2 mb-10 text-gray-500">Note: All plans are currently free! We are just simulating the payment process, so feel free to try it out without any concerns.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Plan 1 */}
            <div className="border-2 border-sky-200 rounded-3xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-sky-900">Digital Starter</h3>
              <p className="text-xl mb-8 text-gray-700">Essential digital planning tools</p>
              <p className="text-2xl font-bold mb-6 text-sky-600">TSH 25,000</p>
              <ul className="list-disc text-left ml-6 mb-10 text-gray-700 space-y-3">
                <li>Digital workbook access</li>
                <li>Personalized goal planning questions</li>
                <li>1 copy download</li>
                <li>Email support</li>
              </ul>
              <Link href="/payment" className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-sky-500 hover:to-blue-600 transition-all duration-300 shadow-sm w-full text-lg font-semibold inline-block">
                Start Planning 2025
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="border-2 border-sky-300 rounded-3xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm scale-105">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-sky-900">Growth Pro</h3>
              <p className="text-xl mb-8 text-gray-700">Enhanced planning experience</p>
              <p className="text-2xl font-bold mb-6 text-sky-600">TSH 45,000</p>
              <ul className="list-disc text-left ml-6 mb-10 text-gray-700 space-y-3">
                <li>All Digital Starter features</li>
                <li>Printed simple workbook</li>
                <li>Delivery service included</li>
                <li>Priority support</li>
                <li>Unlimited downloads</li>
              </ul>
              <Link href="/payment" className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-sky-500 hover:to-blue-600 transition-all duration-300 shadow-sm w-full text-lg font-semibold inline-block">
                Accelerate Your Growth
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="border-2 border-sky-200 rounded-3xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-sky-900">Ultimate Success</h3>
              <p className="text-lg mb-8 text-gray-700">Complete premium experience</p>
              <p className="text-2xl font-bold mb-6 text-sky-600">TSH 75,000</p>
              <ul className="list-disc text-left ml-6 mb-10 text-gray-700 space-y-3">
                <li>All Growth Pro features</li>
                <li>Direct consultation with Joel Nanauka</li>
                <li>Premium printed workbook</li>
                <li>24/7 dedicated support</li>
                <li>Priority delivery service</li>
              </ul>
              <Link href="/payment" className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-sky-500 hover:to-blue-600 transition-all duration-300 shadow-sm w-full text-lg font-semibold inline-block">
                Transform Your 2025
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: Testimonials */}
      <Testimonials />
      {/* Section 5: Contact */}
      <Contact />
    </div>
    </>
  );
}