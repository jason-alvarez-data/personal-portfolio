import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="w-full md:w-80 glass p-6 m-2">
        <div className="flex flex-col items-center mb-6">
          <div className="w-48 h-48 relative mb-4 overflow-hidden rounded-lg">
            <Image 
              src="/Resized.png" 
              alt="Profile Picture" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold">Jason Alvarez</h1>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <p className="text-gray-400 text-sm">LOCATION</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
            <div>
              <p className="text-gray-400 text-sm">EMAIL</p>
              <p>jason.d.alvarez90@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <p className="text-gray-400 text-sm">GITHUB</p>
              <p>jason-alvarez-data</p>
            </div>
          </div>
        </div>
      </div>
    );
  }