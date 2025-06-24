'use client';

import Link from 'next/link';

export default function Portfolio() {
    const projects = [
      {
        title: "Coin Odyssey",
        description: "The Ultimate Coin Collection Management Platform. Advanced software for numismatists, combining powerful collection management with intuitive design. Features interactive world map, comprehensive analytics, and modern interface for tracking and managing coin collections.",
        image: "/coin-odyssey-logo.png",
        tags: ["Electron.js", "Node.js", "SQLite", "JavaScript", "Chart.js", "SVG"],
        link: "https://github.com/jason-alvarez-data/coin-odyssey",
        demo: "https://www.coinodysseyapp.com/",
        status: "Live",
        slug: "coin-odyssey"
      },
      {
        title: "Weather Dashboard",
        description: "A comprehensive weather application providing real-time weather data and forecasts for cities worldwide. Features a clean, intuitive interface with city search functionality and current conditions display, powered by the OpenWeatherMap API.",
        image: "/weather-dashboard.jpg",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API", "Heroku"],
        link: "https://github.com/jason-alvarez-data/weather_dashboard",
        demo: "https://personal-weather-dashboard-9cf15cc1d6ad.herokuapp.com/",
        status: "Live",
        slug: "weather-dashboard"
      },
      {
        title: "Personal Portfolio Website",
        description: "A responsive, modern portfolio website showcasing my development skills and projects. Built with Next.js 15, featuring glassmorphism design, dark theme, and optimized performance.",
        image: "/projects/portfolio.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
        link: "https://github.com/jason-alvarez-data/personal-portfolio",
        demo: "#",
        status: "Live",
        slug: "personal-portfolio"
      },
      {
        title: "Data Analytics Dashboard",
        description: "Interactive dashboard for data visualization and analysis, combining my psychology background with technical skills to create meaningful insights from complex datasets.",
        image: "/projects/analytics.jpg",
        tags: ["Python", "Pandas", "Matplotlib", "Streamlit"],
        link: "#",
        demo: "#",
        status: "In Development",
        slug: "data-analytics"
      }
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          Portfolio <span className="ml-2">🚀</span>
        </h1>
        <div className="h-1 w-16 bg-amber-400 mb-8"></div>
        
        <div className="mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            Here are some of the projects I&apos;ve built, showcasing my skills in web development, 
            data analysis, and user experience design. Each project represents a unique challenge 
            and learning opportunity. <span className="text-amber-400">Click on any project card to learn more</span> about the technical details and development process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-amber-400 hover:transform hover:scale-[1.02] cursor-pointer group">
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent group-hover:from-amber-400/20 transition-all duration-300"></div>
                  <div className="text-center z-10">
                    <div className="text-4xl mb-2">
                      {index === 0 && "🪙"}
                      {index === 1 && "🌤️"}
                      {index === 2 && "💼"}
                      {index === 3 && "📊"}
                    </div>
                    <span className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">{project.title}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  {/* Click indicator */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-amber-400/20 p-2 rounded-full border border-amber-400/30">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <Link href={`/portfolio/${project.slug}`} className="block mb-4 group">
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">{project.title}</h2>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{project.description}</p>
                </Link>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-zinc-800/80 text-amber-400 px-3 py-1 rounded-full text-sm font-medium border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="flex-1 bg-amber-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors text-center flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                    View Code
                  </a>
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      className="px-4 py-2 rounded-lg font-medium border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass p-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-400">What's Next?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I&apos;m continuously working on new projects and learning emerging technologies. 
            Currently exploring machine learning applications and advanced React patterns.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/jason-alvarez-data" 
              className="bg-amber-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
            <a 
              href="/resume" 
              className="border border-amber-400 text-amber-400 px-6 py-2 rounded-lg font-medium hover:bg-amber-400 hover:text-black transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    );
  }