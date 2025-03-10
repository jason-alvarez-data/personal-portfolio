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
          Hello! I'm Jason, a passionate learner with computer programming and data analytics skills.
        </p>
        
        <h2 className="text-xl font-semibold text-amber-400 mt-8 mb-4">My Journey</h2>
        <p>
          Share your journey here. How you got started, what inspired you, and where you are now.
        </p>
        
        <h2 className="text-xl font-semibold text-amber-400 mt-8 mb-4">Skills & Expertise</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Skill 1 - Details about your proficiency</li>
          <li>Skill 2 - Details about your proficiency</li>
          <li>Skill 3 - Details about your proficiency</li>
          <li>Skill 4 - Details about your proficiency</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-amber-400 mt-8 mb-4">Personal Interests</h2>
        <p>
          When I'm not coding, I enjoy... (your hobbies and interests)
        </p>
      </div>
    </div>
    );
}