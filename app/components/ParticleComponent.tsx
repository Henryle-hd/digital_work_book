// import React, { useState, useEffect } from 'react';


// const ParticleComponent = () => {
//   const [showMessage, setShowMessage] = useState(true);

 

//   useEffect(() => {
//     // Set a timer to hide the message after 5 seconds
//     const timer = setTimeout(() => setShowMessage(false), 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="absolute w-full h-screen overflow-hidden">
//             {/* Congratulations Message */}
//       {showMessage && (
//         <div className="absolute  transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-4 rounded-lg shadow-lg text-center animate-fadeInOut">
//           <h1 className="text-2xl font-bold">🎉 Congratulations! 🎉</h1>
//           <p className="mt-2 text-lg">{"You've achieved something amazing!"}</p>
//         </div>
//       )}

//       {/* Tailwind Animation */}
//       <style jsx>{`
//         .animate-fadeInOut {
//           animation: fadeInOut 5s ease-in-out;
//         }

//         @keyframes fadeInOut {
//           0% { opacity: 0; transform: scale(0.1); }
//           20% { opacity: 1; transform: scale(1.6); }
//           80% { opacity: 1; transform: scale(1); }
//           100% { opacity: 0; transform: scale(0.1); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ParticleComponent;
import React, { useState, useEffect } from 'react';

const ParticleComponent = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Set a timer to hide the message after 5 seconds
    const timer = setTimeout(() => setShowMessage(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Congratulations Message */}
      {showMessage && (
        <div className="bg-green-100 text-green-800 px-8 py-4 rounded-lg shadow-lg text-center animate-slideInOut">
          <h1 className="text-2xl font-semibold">🎉 Payment Successful! 🎉</h1>
          <p className="mt-2 text-lg">{"Thank you for your purchase! Your plan is activated"}</p>
        </div>
      )}

      {/* Tailwind Animation */}
      <style jsx>{`
        .animate-slideInOut {
          animation: slideInOut 4s ease-in-out forwards;
        }

        @keyframes slideInOut {
          0% {
            opacity: 0;
            transform: translateY(-50vh);
          }
          30% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(50vh);
          }
        }
      `}</style>
    </div>
  );
};

export default ParticleComponent;

