import TerminalText from '../components/TerminalText';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
    const articles = [
        {
            id: 1,
            title: "Your GO-TO Stack for Building Software",
            slug: "go-to-stack",
            image: "/articles/stack.jpg",
        },
        {
            id: 2,
            title: "Who is Your Name",
            slug: "about-me",
            image: "/articles/about.jpg",
        },
        {
            id: 3,
            title: "Access Environment Variables in Your Favorite Language",
            slug: "environment-variables",
            image: "/articles/env.jpg",
        },
    ];

return (
    <div>
        <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4 flex items-center">
                About Me <span className="ml-2">👨‍💻</span>
            </h1>
            <div className="h-1 w-16 bg-amber-400 mb-8"></div>

            <TerminalText command="whoami" />

            <div className="space-y-6 text-gray-300">
                <p>
                    I'm Jason Alvarez, a passionate software developer with a unique background in psychology. I hold a Master's degree from the <span className="text-amber-400">Chicago School of Professional Psychology 🎓</span>, which gives me a unique perspective on human-centered design and user experience.
                </p>

                <p>
                    I believe that great software is built by understanding human behavior and needs. My background in <span className="text-amber-400 font-medium">Industrial/Organizational Psychology</span> has taught me that humans make errors, and technology should be designed to minimize these errors while maximizing efficiency and user satisfaction.
                </p>

                
          <p>
            I'm continuously learning new technologies, building projects that solve real-world problems, and contributing to the developer community. When I'm not coding, you'll find me hiking and exploring the outdoors, or expanding my world coin collection.
          </p>
          
          <p>
            <span className="text-amber-400 font-medium">Core Values:</span> Self-motivated learner, collaborative team player, and advocate for accessible, human-centered technology.
          </p>
        </div>
      </div>
      
      <div>
        <TerminalText command="ls -la ~/articles" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
    );
}
