export default function Portfolio() {
    const projects = [
      {
        title: "Project 1",
        description: "A brief description of your project and what technologies you used.",
        image: "/projects/project1.jpg",
        tags: ["React", "Next.js", "Tailwind CSS"],
        link: "#"
      },
      {
        title: "Project 2",
        description: "A brief description of your project and what technologies you used.",
        image: "/projects/project2.jpg",
        tags: ["TypeScript", "Node.js", "MongoDB"],
        link: "#"
      },
      {
        title: "Project 3",
        description: "A brief description of your project and what technologies you used.",
        image: "/projects/project3.jpg",
        tags: ["Python", "Django", "PostgreSQL"],
        link: "#"
      }
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <div className="h-1 w-16 bg-amber-400 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-zinc-800 flex items-center justify-center">
                {/* Replace with actual images later */}
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-zinc-800 text-amber-400 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block bg-amber-400 text-black px-4 py-2 rounded font-medium hover:bg-amber-500 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }