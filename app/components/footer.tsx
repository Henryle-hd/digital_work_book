  import { Mail, Instagram, Linkedin, Link, Github } from 'lucide-react';

  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Contact Creator</h3>
              <div className="space-y-1">
                <p className="flex items-center gap-2"><Mail size={16} /> henrydionizi@gmail.com</p>
                <a href="https://github.com/Henryle-hd/digital_work_book" className="hover:text-sky-400 flex items-center gap-2"><Github size={16} />Github</a>
                <a href="https://www.instagram.com/henrylee_hd/" className="hover:text-sky-400 flex items-center gap-2"><Instagram size={16} />Instagram</a>
                
                <a href="https://www.linkedin.com" className="hover:text-sky-400 flex items-center gap-2"><Linkedin size={16} />LinkedIn</a>
                
                <a href="https://linktr.ee/easyone_ai" className="hover:text-sky-400 flex items-center gap-2"><Link size={16} />All Links</a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-red-500 text-sm italic max-w-md">
                Disclaimer: This website is not officially associated with Joel Nanauka. 
                It was created independently as a fun project to help people achieve their goals.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-400">
            <p>© 2024 All rights reserved</p>
          </div>
        </div>
      </footer>
    );
  }