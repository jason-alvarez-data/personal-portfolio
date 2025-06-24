import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Project data - in a real app, this might come from a CMS or database
const projectsData = {
  'coin-odyssey': {
    title: 'Coin Odyssey',
    subtitle: 'The Ultimate Coin Collection Management Platform',
    overview: 'Advanced desktop software for numismatists, combining powerful collection management with intuitive design.',
    image: '/coin-odyssey-logo.png',
    demoUrl: 'https://www.coinodysseyapp.com/',
    githubUrl: 'https://github.com/jason-alvarez-data/coin-odyssey',
    tags: ['Electron.js', 'Node.js', 'SQLite', 'JavaScript', 'Chart.js', 'SVG'],
    status: 'Live',
    sections: [
      {
        title: 'Project Overview',
        content: `Coin Odyssey is a modern, feature-rich desktop application designed to help numismatists manage their coin collections with ease. The application provides an intuitive interface for tracking coins, managing collections, and visualizing collection data through an interactive world map.

Built with Electron.js, this cross-platform application combines the power of web technologies with native desktop capabilities, offering users a seamless experience across Windows, macOS, and Linux platforms.`
      },
      {
        title: 'Key Features',
        content: `**Interactive World Map**: Visualize your collection's geographic distribution with an interactive SVG map that shows which countries are represented in your collection.

**Comprehensive Coin Management**: Add, edit, and track coins with detailed information including upload capabilities for both obverse and reverse images, purchase dates, values, and conditions.

**Advanced Collection Organization**: Filter and search through your entire collection, sort by various attributes (country, year, value, etc.), and organize coins by series, type, and storage location.

**Dynamic Dashboard**: View collection statistics at a glance, track total collection value, and monitor collection growth over time.

**Data Analysis**: Geographic distribution charts, collection composition breakdown, value timeline tracking, and year distribution visualization.

**Modern UI**: Clean, intuitive interface with dark/light mode support and responsive design for various screen sizes.`
      },
      {
        title: 'Technical Architecture',
        content: `**Frontend**: Built with HTML, CSS, and JavaScript, utilizing modern ES6+ features for clean, maintainable code.

**Backend**: Node.js runtime with SQLite database for local data storage, ensuring fast performance and offline capability.

**Desktop Framework**: Electron.js for cross-platform desktop application development, providing native OS integration.

**Data Visualization**: Chart.js for creating interactive charts and graphs, plus custom SVG implementation for the world map feature.

**Database Design**: SQLite schema optimized for coin collection data with proper indexing for fast queries and searches.`
      },
      {
        title: 'Development Challenges & Solutions',
        content: `**Challenge**: Creating an interactive world map that accurately represents coin origins and collection distribution.
**Solution**: Implemented a custom SVG-based world map with hover states and click interactions, allowing users to explore their collection geographically.

**Challenge**: Managing large collections with thousands of coins while maintaining performance.
**Solution**: Implemented efficient SQLite queries with proper indexing, lazy loading for images, and virtualized scrolling for large datasets.

**Challenge**: Cross-platform compatibility and consistent user experience.
**Solution**: Leveraged Electron.js capabilities and thorough testing across different operating systems to ensure consistent behavior.

**Challenge**: Data backup and import/export functionality.
**Solution**: Built robust CSV, Excel, and JSON import/export features with data validation and error handling.`
      },
      {
        title: 'Impact & Results',
        content: `This project demonstrates my ability to create complex desktop applications that solve real-world problems for specialized communities. The application showcases:

- **Full-stack development** skills with both frontend and backend technologies
- **Database design** and optimization for performance
- **User experience design** for specialized workflows
- **Cross-platform development** expertise
- **Data visualization** and interactive mapping capabilities

The project has been deployed with 11 releases, showing continuous improvement and maintenance over time.`
      }
    ]
  },
  'weather-dashboard': {
    title: 'Weather Dashboard',
    subtitle: 'Real-time Weather Application',
    overview: 'A comprehensive weather application providing real-time weather data and forecasts for cities worldwide.',
    image: '/weather-dashboard.jpg',
    demoUrl: 'https://personal-weather-dashboard-9cf15cc1d6ad.herokuapp.com/',
    githubUrl: 'https://github.com/jason-alvarez-data/weather_dashboard',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeather API', 'Heroku'],
    status: 'Live',
    sections: [
      {
        title: 'Project Overview',
        content: `The Weather Dashboard is a modern, responsive web application that provides real-time weather information for cities around the world. Built with Next.js and TypeScript, it offers a clean, intuitive interface for checking current weather conditions and forecasts.

The application integrates with the OpenWeatherMap API to deliver accurate, up-to-date weather data while maintaining excellent performance and user experience across all devices.`
      },
      {
        title: 'Key Features',
        content: `**Real-time Weather Data**: Current conditions including temperature, humidity, wind speed, and atmospheric pressure.

**City Search Functionality**: Intelligent search with autocomplete for finding cities worldwide.

**Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices.

**Modern UI/UX**: Clean, intuitive design with smooth animations and transitions.

**API Integration**: Efficient integration with OpenWeatherMap API for reliable data fetching.

**Error Handling**: Robust error handling for network issues and invalid city searches.`
      },
      {
        title: 'Technical Implementation',
        content: `**Frontend Framework**: Next.js 13+ with App Router for modern React development and optimal performance.

**Type Safety**: TypeScript implementation throughout the application for better code quality and developer experience.

**Styling**: Tailwind CSS for utility-first styling and responsive design.

**API Integration**: RESTful API calls to OpenWeatherMap with proper error handling and loading states.

**Deployment**: Deployed on Heroku with automatic deployments from GitHub repository.

**Performance Optimization**: Implemented caching strategies and optimized API calls to minimize load times.`
      }
    ]
  },
  'personal-portfolio': {
    title: 'Personal Portfolio Website',
    subtitle: 'Modern Developer Portfolio',
    overview: 'A responsive, modern portfolio website showcasing development skills and projects with glassmorphism design.',
    image: '/projects/portfolio.jpg',
    demoUrl: '#',
    githubUrl: 'https://github.com/jason-alvarez-data/personal-portfolio',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    status: 'Live',
    sections: [
      {
        title: 'Project Overview',
        content: `This personal portfolio website serves as a comprehensive showcase of my development skills, projects, and professional background. Built with modern web technologies, it features a unique glassmorphism design aesthetic combined with excellent performance and accessibility.

The site demonstrates my ability to create professional, user-friendly interfaces while maintaining clean, maintainable code architecture.`
      },
      {
        title: 'Design & Features',
        content: `**Glassmorphism Design**: Modern glass-like visual effects with backdrop blur and transparency for a sophisticated appearance.

**Dark Theme**: Carefully crafted dark color scheme optimized for readability and visual appeal.

**Responsive Layout**: Fully responsive design that adapts beautifully to all screen sizes and devices.

**Interactive Elements**: Smooth hover effects, transitions, and micro-interactions for enhanced user engagement.

**Professional Sections**: Comprehensive resume, portfolio showcase, blog, and about sections.

**SEO Optimized**: Proper meta tags, OpenGraph integration, and structured data for better search visibility.`
      },
      {
        title: 'Technical Architecture',
        content: `**Framework**: Next.js 15 with App Router for optimal performance and developer experience.

**Styling**: Tailwind CSS with custom components and utility classes for maintainable styling.

**Typography**: Custom font integration with proper fallbacks for optimal loading performance.

**Performance**: Optimized images, lazy loading, and efficient bundling for fast page loads.

**Accessibility**: WCAG compliant with proper semantic HTML, alt texts, and keyboard navigation support.

**Version Control**: Git-based workflow with proper commit history and branching strategies.`
      }
    ]
  },
  'data-analytics': {
    title: 'Data Analytics Dashboard',
    subtitle: 'Interactive Data Visualization Platform',
    overview: 'Interactive dashboard for data visualization and analysis, combining psychology background with technical skills.',
    image: '/projects/analytics.jpg',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
    status: 'In Development',
    sections: [
      {
        title: 'Project Overview',
        content: `This data analytics dashboard represents the intersection of my psychology background and technical development skills. The project focuses on creating meaningful insights from complex datasets through interactive visualizations and statistical analysis.

Currently in development, this project will showcase advanced data analysis techniques applied to real-world datasets, demonstrating my transition from HR and psychology into data analytics and development.`
      },
      {
        title: 'Planned Features',
        content: `**Interactive Visualizations**: Dynamic charts and graphs that allow users to explore data from multiple perspectives.

**Statistical Analysis**: Advanced statistical methods for identifying patterns, trends, and correlations in datasets.

**Psychology-Informed Design**: User interface design principles based on cognitive psychology and human factors.

**Data Processing Pipeline**: Efficient data cleaning, transformation, and analysis workflows.

**Export Capabilities**: Generate reports and export visualizations in multiple formats.

**Real-time Updates**: Live data integration with automatic refresh capabilities.`
      },
      {
        title: 'Technical Stack',
        content: `**Data Processing**: Python with Pandas for data manipulation and analysis.

**Visualization**: Matplotlib and Seaborn for creating comprehensive charts and statistical plots.

**Web Framework**: Streamlit for rapid development of interactive web applications.

**Data Sources**: Integration with various data sources including CSV, JSON, and database connections.

**Statistical Computing**: NumPy and SciPy for advanced mathematical operations and statistical analysis.

**Version Control**: Git-based development workflow with proper documentation and testing.`
      }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Jason Alvarez`,
    description: project.overview,
    keywords: [...project.tags, 'Jason Alvarez', 'portfolio', 'developer', 'project'].join(', '),
    openGraph: {
      title: project.title,
      description: project.overview,
      type: 'article',
      url: `https://jason-alvarez-data.vercel.app/portfolio/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.overview,
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="mb-8">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <div className="glass p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-amber-400 mb-4">{project.subtitle}</p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{project.overview}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'Live' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-zinc-800/80 text-amber-400 px-3 py-1 rounded-full text-sm font-medium border border-zinc-700">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.demoUrl !== '#' && (
            <a 
              href={project.demoUrl} 
              className="bg-amber-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              View Live Demo
            </a>
          )}
          {project.githubUrl !== '#' && (
            <a 
              href={project.githubUrl} 
              className="border border-amber-400 text-amber-400 px-6 py-3 rounded-lg font-medium hover:bg-amber-400 hover:text-black transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              View Source Code
            </a>
          )}
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {project.sections.map((section, index) => (
          <div key={index} className="glass p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-400">{section.title}</h2>
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="mt-12 pt-8 border-t border-zinc-700">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'coin-odyssey' },
    { slug: 'weather-dashboard' },
    { slug: 'personal-portfolio' },
    { slug: 'data-analytics' }
  ];
} 