import TerminalText from '../../components/TerminalText';

export default function About() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 flex items-center">
                About Me <span className="ml-2">👨‍💻</span>
            </h1> 
            <div className="h-1 w-16 bg-amber-400 mb-8"></div>
      
      <TerminalText command="cat about.md" />
      
      <div className="space-y-6 text-gray-300">
        <p>
          Hello! I&apos;m Jason, a passionate learner with computer programming and data analytics skills.
        </p>
        
        <h2 className="text-xl font-semibold text-amber-400 mt-8 mb-4">My Journey</h2>
        <p>
        My inspiration for learning to program applications with AI stems from my intrinsic desire to tackle challenges independently and problem-solve within my own projects. I thrive on creating and addressing unique obstacles in a space where I can take the time to develop solutions on my own terms, continuously pushing the boundaries of my skills and creativity.
        </p>
        
        <h2 className="text-xl font-semibold text-amber-400 mt-8 mb-4">Skills & Expertise</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Problem Solving - I demonstrate creativity and efficiency in overcoming coding challenges by utilizing AI tools like Cursor AI editor to find innovative solutions.</li>
          <li>Project Management - I skillfully organize, plan, and execute projects, ensuring they are throughly developed and shared on GitHub for broader community engagement.</li>
          <li>Collaboration - I actively contribue to and foster a collaborative environment by sharing my projects on GitHub, encouraging others to participate and enhance my work.</li>
          <li>Continous Learning - I&apos;m committed to growing my programming skills with the assistance of AI which showcases my dedication to lifelong learning and adaptability in the tech field.</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-amber-400 mt-8 mb-4">Personal Interests</h2>
        <p>
          When I&apos;m not exploring new technologies, I enjoy hiking around my local area and have began collecting coins from around the world. 
        </p>
      </div>
    </div>
    );
}