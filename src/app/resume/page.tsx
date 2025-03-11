export default function Resume() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <div className="h-1 w-16 bg-amber-400 mb-8"></div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Education</h2>
            <div className="bg-zinc-900 p-4 rounded-lg">
              <h3 className="text-xl font-medium">Chicago School of Professional Psychology</h3>
              <p className="text-gray-400">Master of Arts in Industrial/Organizational Psychology</p>
              <p className="text-gray-400">2019 - 2021</p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-lg">
              <h3 className="text-xl font-medium">San Jose State University</h3>
              <p className="text-gray-400">Bachelor of Arts in Psychology</p>
              <p className="text-gray-400">2011 - 2013</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h3 className="text-xl font-medium">Job Title</h3>
                <p className="text-gray-400">Company Name</p>
                <p className="text-gray-400">2022 - Present</p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Accomplishment 1</li>
                  <li>Accomplishment 2</li>
                  <li>Accomplishment 3</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h3 className="text-xl font-medium">Previous Job Title</h3>
                <p className="text-gray-400">Previous Company</p>
                <p className="text-gray-400">2020 - 2022</p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Accomplishment 1</li>
                  <li>Accomplishment 2</li>
                  <li>Accomplishment 3</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Skills</h2>
            <div className="bg-zinc-900 p-4 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Programming Languages</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>JavaScript/TypeScript</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Frameworks</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Tools</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Git</li>
                    <li>Cursor AI</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }