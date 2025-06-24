import TerminalText from '../../components/TerminalText';

export default function About() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 flex items-center">
                About Me <span className="ml-2">👨‍💻</span>
            </h1> 
            <div className="h-1 w-16 bg-amber-400 mb-8"></div>
      
      <TerminalText command="cat about-jason.md" />
      
      <div className="space-y-8">
        <section className="glass p-6">
          <p className="text-gray-300 leading-relaxed text-lg">
            Hello! I&apos;m Jason Alvarez, a passionate software developer with a unique background that bridges psychology and technology. 
            My journey combines the analytical rigor of psychological research with the creative problem-solving of software development, 
            creating a distinctive approach to building user-centered applications.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
            My Journey <span className="ml-2">🛤️</span>
          </h2>
          <div className="glass p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              My fascination with programming and AI stems from an intrinsic desire to solve complex problems independently. 
              I thrive in environments where I can take on unique challenges and develop innovative solutions at my own pace, 
              continuously pushing the boundaries of what I can create and learn.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What sets me apart is my background in <span className="text-amber-400 font-medium">Industrial/Organizational Psychology</span>, 
              which provides me with deep insights into human behavior, user experience, and the psychological factors that make 
              technology truly effective and accessible.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
            Core Competencies <span className="ml-2">⚡</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">🧠 Problem-Solving</h3>
              <p className="text-gray-300 leading-relaxed">
                I demonstrate creativity and efficiency in overcoming coding challenges by leveraging AI tools like Cursor AI, 
                finding innovative solutions that bridge the gap between complex technical requirements and user needs.
              </p>
            </div>
            
            <div className="glass p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">📋 Project Management</h3>
              <p className="text-gray-300 leading-relaxed">
                I skillfully organize, plan, and execute projects from concept to deployment, ensuring they are thoroughly developed, 
                well-documented, and shared on GitHub for broader community engagement and collaboration.
              </p>
            </div>
            
            <div className="glass p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">🤝 Collaboration</h3>
              <p className="text-gray-300 leading-relaxed">
                I actively contribute to and foster collaborative environments by sharing projects on GitHub, 
                encouraging community participation, and creating code that others can easily understand and build upon.
              </p>
            </div>
            
            <div className="glass p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">📈 Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm committed to expanding my programming skills with AI assistance, showcasing dedication to lifelong learning 
                and adaptability in the rapidly evolving technology landscape.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
            Beyond Code <span className="ml-2">🌟</span>
          </h2>
          <div className="glass p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              When I&apos;m not exploring new technologies or working on development projects, I enjoy connecting with nature through 
              hiking in the beautiful landscapes around the San Francisco Bay Area. This outdoor time helps me maintain perspective, 
              clear my mind, and often leads to creative insights for technical challenges.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I&apos;ve also developed a passion for <span className="text-amber-400 font-medium">numismatics</span> – collecting coins from around the world. 
              This hobby reflects my appreciation for history, cultural diversity, and attention to detail – qualities that translate 
              well into my approach to software development and user experience design.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
            Let's Connect <span className="ml-2">🤝</span>
          </h2>
          <div className="glass p-6">
            <p className="text-gray-300 leading-relaxed mb-6">
              I&apos;m always interested in connecting with fellow developers, potential collaborators, and anyone passionate about 
              technology&apos;s potential to improve human experiences. Whether you want to discuss a project idea, share insights 
              about psychology-driven development, or just chat about the latest in tech, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:jason.d.alvarez90@gmail.com" 
                className="bg-amber-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get In Touch
              </a>
              <a 
                href="https://github.com/jason-alvarez-data" 
                className="border border-amber-400 text-amber-400 px-6 py-3 rounded-lg font-medium hover:bg-amber-400 hover:text-black transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
    );
}