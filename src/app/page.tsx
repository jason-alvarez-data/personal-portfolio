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
            <h1 className="text=3xl font-bold mb-4 flex items-center">
                About You <span className="ml-2">👨‍💻</span>
            </h1>
            <div className="h-1 w-16 bg-amber-400 mb-8"></div>

            <TerminalText command="Me 👨‍💻 (He/Him)" />

            <div className="space-y-6 text-gray-300">
                <p>
                    I obtained my degree from <span className="text-amber-400">Chicago School of Professional Psychology 🎓</span>, driven by a sincere passion for psychology.
                </p>

                <p>
                Your field is built by humans. Unfortunately, humans make errors, <span className="text-amber-400 font-bold">LOTS of ERRORS</span>. 
            Throughout human history, humans have learned to craft machines and tools to help us construct complex architecture. 
            Inspired by this, I explore practical methodologies and tools to improve large-scale systems&apos; quality, reliability, and efficiency.
                </p>

                
          <p>
            In my spare time, I focus on processing my skills and learning in new technologies while also ensuring I take time out of my day to soak in sunlight and go hiking on my free time. 
          </p>
          
          <p>
            Self-motivated, Avid Learner of new technologies, and a Team player.
          </p>
        </div>
      </div>
      
      <div>
        <TerminalText command="Latest Articles" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
    );
}
