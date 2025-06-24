export default function Post() {
    const posts = [
      {
        title: "Building Human-Centered Applications with Psychology and Code",
        excerpt: "How my background in Industrial/Organizational Psychology informs my approach to software development, creating more intuitive and user-friendly applications.",
        date: "November 15, 2024",
        slug: "psychology-meets-code",
        readTime: "5 min read",
        tags: ["Psychology", "UX", "Development"],
        featured: true
      },
      {
        title: "The Power of AI-Assisted Development",
        excerpt: "Exploring how tools like Cursor AI are transforming the development process and accelerating learning for developers at all levels.",
        date: "November 8, 2024",
        slug: "ai-assisted-development",
        readTime: "4 min read",
        tags: ["AI", "Development", "Tools"]
      },
      {
        title: "From Weather Data to User Insights: Building My First API Integration",
        excerpt: "A deep dive into creating a weather dashboard application, the challenges faced, and lessons learned about API integration and user experience.",
        date: "October 25, 2024",
        slug: "weather-dashboard-journey",
        readTime: "6 min read",
        tags: ["React", "API", "Project"]
      },
      {
        title: "Why Psychology Matters in Software Development",
        excerpt: "Understanding cognitive load, user behavior, and decision-making processes can dramatically improve how we design and build software.",
        date: "October 18, 2024",
        slug: "psychology-in-software",
        readTime: "7 min read",
        tags: ["Psychology", "UX", "Design"]
      }
    ];
  
    const featuredPost = posts.find(post => post.featured);
    const regularPosts = posts.filter(post => !post.featured);

    return (
      <div>
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          Blog Posts <span className="ml-2">📝</span>
        </h1>
        <div className="h-1 w-16 bg-amber-400 mb-8"></div>
        
        <div className="mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            Insights on software development, psychology, and the intersection of human behavior and technology. 
            Sharing experiences, lessons learned, and thoughts on creating better digital experiences.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-amber-400 mb-4">Featured Article</h2>
            <div className="glass p-8 hover:ring-2 hover:ring-amber-400 transition-all duration-300">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium border border-amber-400/30">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {featuredPost.readTime}
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>
              <a 
                href={`/post/${featuredPost.slug}`} 
                className="inline-flex items-center gap-2 bg-amber-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors"
              >
                Read Full Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-amber-400 mb-6">Recent Articles</h2>
          {regularPosts.map((post, index) => (
            <article key={index} className="glass p-6 hover:ring-2 hover:ring-amber-400/50 transition-all duration-300">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-zinc-800/80 text-amber-400 px-2 py-1 rounded text-xs font-medium border border-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-amber-400 transition-colors">
                <a href={`/post/${post.slug}`}>{post.title}</a>
              </h3>
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
              <a 
                href={`/post/${post.slug}`} 
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Newsletter/Subscribe Section */}
        <div className="mt-12 glass p-8">
          <h2 className="text-2xl font-semibold mb-4 text-amber-400">Stay Updated</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Interested in more insights about the intersection of psychology and technology? 
            Connect with me on GitHub or send me an email to continue the conversation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/jason-alvarez-data" 
              className="bg-amber-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              Follow on GitHub
            </a>
            <a 
              href="mailto:jason.d.alvarez90@gmail.com" 
              className="border border-amber-400 text-amber-400 px-6 py-3 rounded-lg font-medium hover:bg-amber-400 hover:text-black transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Me
            </a>
          </div>
        </div>
      </div>
    );
  }