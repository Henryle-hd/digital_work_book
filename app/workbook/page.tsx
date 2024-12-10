  'use client';
  import { useEffect, useState } from 'react';
  import { jsPDF } from 'jspdf';
import JoelNanauka from "@/public/JoelNanaukaSite.png"
import Image from 'next/image';
  export default function WorkbookPage() {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const generatePDF = () => {
      const doc = new jsPDF();
      let yPos = 20;
      const lineHeight = 10;
      const pageWidth = doc.internal.pageSize.width;
    
      doc.setFontSize(16);
      doc.text('Personal Development Workbook', pageWidth/2, yPos, { align: 'center' });
      yPos += lineHeight * 2;
    
      doc.setFontSize(12);
      Object.entries(formData).forEach(([key, value]) => {
        const question = questions.find(q => q.id === key)?.question;
        if (question) {
          if (yPos > 270) {
            doc.addPage();
            yPos = 20;
          }
          doc.setFont("helvetica", 'bold');
          const lines = doc.splitTextToSize(question, pageWidth - 20);
          doc.text(lines, 10, yPos);
          yPos += lines.length * lineHeight;
        
          doc.setFont("helvetica", 'normal');
          const answerLines = doc.splitTextToSize(String(value), pageWidth - 20);
          doc.text(answerLines, 10, yPos);
          yPos += (answerLines.length * lineHeight) + 5;
        }
      });
      doc.save('personal-development-plan.pdf');
    };

    const questionCategories = [
      {
        category: "Goal Setting",
        questions: [
          { id: 'priorities', question: 'What are my top three priorities for this year?', type: 'textarea' },
          { id: 'specificGoals', question: 'What are my specific goals for this year?', type: 'textarea' },
          { id: 'importance', question: 'Why is achieving these goals important to me?', type: 'textarea' },
          { id: 'successVision', question: 'What will success look and feel like by the end of the year?', type: 'textarea' },
        ]
      },
      {
        category: "Personal Growth",
        questions: [
          { id: 'improvements', question: 'What areas of my life do I want to improve?', type: 'textarea' },
          { id: 'skills', question: 'What skills or knowledge do I want to acquire?', type: 'textarea' },
          { id: 'habits', question: 'What habits do I need to build to support my goals?', type: 'textarea' },
          { id: 'growth', question: 'How have I grown personally and professionally?', type: 'textarea' },
        ]
      },
      {
        category: "Action Planning",
        questions: [
          { id: 'actions', question: 'What actions do I need to take each month or week to stay on track?', type: 'textarea' },
          { id: 'deadlines', question: 'What deadlines will I set for each milestone?', type: 'textarea' },
          { id: 'resources', question: 'What resources do I need to achieve my goals?', type: 'textarea' },
          { id: 'challenges', question: 'What challenges might I face, and how will I overcome them?', type: 'textarea' },
        ]
      },
      {
        category: "Progress Tracking",
        questions: [
          { id: 'measureSuccess', question: 'How will I measure success for each goal?', type: 'textarea' },
          { id: 'reviewFrequency', question: 'How often will I review my progress?', type: 'text' },
          { id: 'progressSigns', question: 'What signs will show that I\'m making progress?', type: 'textarea' },
          { id: 'adjustments', question: 'What adjustments will I make if I\'m not on track?', type: 'textarea' },
        ]
      },
      {
        category: "Reflection and Celebration",
        questions: [
          { id: 'lessons', question: 'What lessons did I learn from successes and failures this year?', type: 'textarea' },
          { id: 'achievements', question: 'What achievements am I most proud of?', type: 'textarea' },
          { id: 'rewards', question: 'How will I reward myself when I achieve a goal?', type: 'textarea' },
          { id: 'celebrations', question: 'How will I celebrate small wins along the way?', type: 'textarea' },
        ]
      },
      {
        category: "Support and Inspiration",
        questions: [
          { id: 'inspiration', question: 'Who or what inspires me to stay committed to my goals?', type: 'textarea' },
          { id: 'improvements', question: 'What will I do differently next year to improve further?', type: 'textarea' },
        ]
      }
    ];

    const questions = questionCategories.flatMap(category => category.questions);

    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 py-8 px-4 sm:px-6 lg:px-8 ">
      {loading ? (
        <div className='mt-20'>
          <div className="flex justify-center items-center">
              <Image src={JoelNanauka.src} alt="Joel Nanauka" className="w-28 h-28 rounded-full border-2 border-blue-500" width={100} height={100}/>
          </div>
          <div className="max-w-2xl mx-auto border-2 border-sky-200 rounded-3xl p-10 bg-white shadow-2xl hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-sm my-8">
            <p className="text-lg leading-relaxed text-gray-700">{"Few seconds later you'll find carefully crafted questions by Joel Nanauka based on the TIMIZA MALENGO YAKO methodology. Take your time to answer each question thoughtfully to create your personalized 2025 goal achievement plan."}</p>
          </div>
          <div className="flex justify-center items-center space-x-3 mb-8">
            <div className="w-10 h-10 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin shadow-lg"></div>
            <span className="text-xl font-semibold text-blue-600">Creating your workbook...</span>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto mt-20"> 
          <div className="flex justify-center items-center mb-4">
            <Image src={JoelNanauka.src} alt="Joel Nanauka" className="w-28 h-28 rounded-full border-2 border-blue-500" width={100} height={100}/>
          </div>
          <h1 className="text-2xl sm:text-3xlxl lg:text-4xl font-bold text-sky-900 text-center mb-5">
            Personal Development Workbook
          </h1>
        
          <form className="space-y-12">
            {questionCategories.map((category) => (
              <div key={category.category} className="mb-8">
                <h2 className="text-2xl font-bold text-sky-800 mb-6 text-center">{category.category}</h2>
                <div className="space-y-8">
                  {category.questions.map((q) => (
                    <div key={q.question} className="bg-white shadow-md rounded-lg p-8 hover:transform hover:shadow-xl transition-all duration-500">
                      <label className="block text-lg lg:text-xl font-semibold text-sky-900 mb-4">
                        {q.question}
                      </label>
                      {q.type === 'textarea' ? (
                        <textarea
                          placeholder='Enter your answer here...'
                          name={q.id}
                          rows={4}
                          className="w-full rounded-lg border border-sky-200 shadow-sm p-4 focus:ring-sky-500 focus:border-sky-500 text-gray-700 resize-none"
                          onChange={handleInputChange}
                        />
                      ) : (
                        <input
                          placeholder='Enter your answer here...'
                          type="text"
                          name={q.id}
                          className="w-full rounded-lg border border-sky-200 shadow-sm p-4 focus:ring-sky-500 focus:border-sky-500 text-gray-700"
                          onChange={handleInputChange}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          
            <div className="flex justify-center mt-12 mb-8">
              <button
                type="button"
                onClick={generatePDF}
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-10 py-4 rounded-full hover:from-sky-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg font-semibold"
              >
                Download as PDF
              </button>
            </div>
          </form>
        </div>
      )}
      </div>
    );
  }