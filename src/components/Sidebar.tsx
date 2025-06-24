import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="w-full md:w-80 glass p-6 m-2">
        <div className="flex flex-col items-center mb-6">
          <div className="w-48 h-48 relative mb-4 overflow-hidden rounded-lg">
            <Image 
              src="/Resized.png" 
              alt="Jason Alvarez - Software Developer" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold">Jason Alvarez</h1>
          <p className="text-amber-400 font-medium">Software Developer</p>
          <p className="text-gray-400 text-sm mt-1">Psychology • Technology • Innovation</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <p className="text-gray-400 text-sm font-medium">LOCATION</p>
              <p className="text-gray-200">San Francisco, CA</p>
            </div>
          </div>
          
          <a 
            href="mailto:jason.d.alvarez90@gmail.com" 
            className="flex items-center gap-3 hover:bg-zinc-800/50 p-2 rounded-lg transition-colors group"
          >
            <span className="text-amber-400 group-hover:text-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
            <div>
              <p className="text-gray-400 text-sm font-medium">EMAIL</p>
              <p className="text-gray-200 group-hover:text-amber-400 transition-colors">jason.d.alvarez90@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="https://github.com/jason-alvarez-data" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:bg-zinc-800/50 p-2 rounded-lg transition-colors group"
          >
            <span className="text-amber-400 group-hover:text-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
            </span>
            <div>
              <p className="text-gray-400 text-sm font-medium">GITHUB</p>
              <p className="text-gray-200 group-hover:text-amber-400 transition-colors">jason-alvarez-data</p>
            </div>
          </a>

          <div className="border-t border-zinc-700 pt-6 mt-8">
            <h3 className="text-amber-400 font-medium mb-3">TECH STACK</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-gray-300 text-sm">JavaScript/TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-gray-300 text-sm">React & Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-gray-300 text-sm">Python</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-gray-300 text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }