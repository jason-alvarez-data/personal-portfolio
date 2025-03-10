export default function Post() {
    const posts = [
      {
        title: "Getting Started with Next.js",
        excerpt: "Learn how to build modern web applications with Next.js and React.",
        date: "March 10, 2024",
        slug: "getting-started-with-nextjs"
      },
      {
        title: "Mastering Tailwind CSS",
        excerpt: "Tips and tricks for using Tailwind CSS effectively in your projects.",
        date: "February 25, 2024",
        slug: "mastering-tailwind-css"
      },
      {
        title: "The Power of TypeScript",
        excerpt: "Why TypeScript is becoming the standard for modern web development.",
        date: "February 10, 2024",
        slug: "power-of-typescript"
      }
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        <div className="h-1 w-16 bg-amber-400 mb-8"></div>
        
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <a 
                href={`/post/${post.slug}`} 
                className="text-amber-400 hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }