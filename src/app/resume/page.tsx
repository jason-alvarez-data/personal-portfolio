export default function Resume() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <div className="h-1 w-16 bg-amber-400 mb-8"></div>
        
        <div className="space-y-8">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Professional Summary</h2>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                Experienced Human Resources professional with a strong interest in transitioning to Data Analysis and People Analytics. Recently earned the Google Data Analytics certificate, gaining proficiency in data visualization and analysis. Skilled in SQL for database queries and adept at creating visualizations using Microsoft Power BI and Tableau. Open to continuing work in Human Resources if the opportunity arises, leveraging my expertise to contribute to both fields effectively.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Education</h2>
            <div className="space-y-4">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium">The Chicago School of Professional Psychology</h3>
                <p className="text-amber-400 font-medium">Master of Arts in Industrial and Organizational Psychology</p>
                <p className="text-gray-400">March 2021</p>
                <p className="text-gray-300 mt-2">Specialized in human behavior, organizational development, and evidence-based HR practices</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium">San Jose State University</h3>
                <p className="text-amber-400 font-medium">Bachelor of Arts in Psychology</p>
                <p className="text-gray-400">May 2013</p>
                <p className="text-gray-300 mt-2">Foundation in research methods, statistical analysis, and human behavior</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Work Experience</h2>
            <div className="space-y-6">
              <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-xl font-medium">People Services Coordinator</h3>
                <p className="text-amber-400 font-medium">Arup</p>
                <p className="text-gray-400">San Francisco, CA | December 2024 – Present</p>
                <p className="text-gray-300 mt-2 mb-3 italic">
                  Arup is a global architectural and engineering consultancy firm renowned for innovative design and sustainable development solutions.
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
                  <li><span className="font-medium text-amber-400">HR Support:</span> Answer general HR inquiries and provide employee assistance</li>
                  <li><span className="font-medium text-amber-400">Onboarding Management:</span> Coordinate onboarding of new hires to the firm, including adding new hires to human resources systems and processing I-9 verifications</li>
                  <li><span className="font-medium text-amber-400">Data Analysis & Reporting:</span> Produce staff reports and analysis of staff across different locations in the United States, Canada, and Bogotá, Colombia</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium">HR Coordinator (Temporary)</h3>
                <p className="text-amber-400 font-medium">Albertina Kerr Centers</p>
                <p className="text-gray-400">Portland, OR | March 2024 – August 2024</p>
                <p className="text-gray-300 mt-2 mb-3 italic">
                  Albertina Kerr Centers empower individuals with intellectual and developmental disabilities to lead self-determined lives through comprehensive support services in Oregon.
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
                  <li><span className="font-medium text-amber-400">Incident Tracking:</span> Monitor and manage workers' compensation claims</li>
                  <li><span className="font-medium text-amber-400">Safety Programs:</span> Coordinate safety initiatives across Kerr including facilitating monthly centralized safety committee meetings</li>
                  <li><span className="font-medium text-amber-400">OSHA Administration:</span> Manage OSHA employee incident documentation and compliance</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium">HR Business Partner (Interim)</h3>
                <p className="text-amber-400 font-medium">Oregon Health & Science University</p>
                <p className="text-gray-400">Portland, OR | March 2023 – September 2023</p>
                <p className="text-gray-300 mt-2 mb-3 italic">
                  Oregon Health & Science University is Oregon's only public academic health center, renowned for its comprehensive healthcare services, cutting-edge research, and top-ranked educational programs.
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
                  <li>Conducted investigation into employee performance and concerns, information security and labor relations for five departments in the University hospital</li>
                  <li>Advised management and employees on employment-related questions such as protected leave and collective bargaining contract interpretation or implementation</li>
                  <li>Created and documented letters of progressive discipline, investigation follow-up and collective bargaining response</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium">HR Coordinator</h3>
                <p className="text-amber-400 font-medium">Oregon Health & Science University</p>
                <p className="text-gray-400">Portland, OR | November 2021 – February 2023</p>
                <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
                  <li>Coordinated calendars and scheduled meetings for five HR Business Partners that advised 26+ departments in the School of Medicine</li>
                  <li>Responded to or triaged employment-related emails from the 6,000+ School of Medicine employees</li>
                  <li><span className="font-medium text-amber-400">Data Management:</span> Developed case management and tracking system for the five HR Business Partners in Microsoft Excel that was collaborated on through a OneDrive shared folder</li>
                  <li><span className="font-medium text-amber-400">Data Visualization:</span> Reported on, with Excel visuals, tracked cases monthly for the Director of Employee Relations</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Technical Skills</h2>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3 text-amber-400">Data Analysis & Visualization</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Microsoft Power BI (Beginner)</li>
                    <li>• Tableau (Beginner)</li>
                    <li>• Excel (Intermediate)</li>
                    <li>• SQL (Beginner)</li>
                    <li>• R (Beginner)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3 text-amber-400">Human Resources Systems</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Workday</li>
                    <li>• AskHR Ticketing System</li>
                    <li>• Workers' Compensation Management</li>
                    <li>• OSHA Compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3 text-amber-400">Core HR Competencies</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Employee Relations</li>
                    <li>• Labor Relations</li>
                    <li>• Performance Management</li>
                    <li>• Safety Program Coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Certifications & Training</h2>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-400 pl-4">
                    <h3 className="font-medium text-amber-400">Google Data Analytics Certification</h3>
                    <p className="text-gray-400 text-sm">2023</p>
                    <p className="text-gray-300 text-sm mt-1">Comprehensive program covering data analysis, visualization, and statistical methods</p>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <h3 className="font-medium text-amber-400">Workday Basics</h3>
                    <p className="text-gray-400 text-sm">2024</p>
                    <p className="text-gray-300 text-sm mt-1">HRIS system administration and user management</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Core Competencies</h2>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3 text-amber-400">People Analytics</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="text-amber-400">Data-Driven HR:</span> Combining HR expertise with analytical skills</li>
                    <li>• <span className="text-amber-400">Case Management:</span> Systematic tracking and visualization of HR metrics</li>
                    <li>• <span className="text-amber-400">Reporting:</span> Creating actionable insights from employee data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3 text-amber-400">Leadership & Communication</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="text-amber-400">Investigation Skills:</span> Complex employee relations and compliance issues</li>
                    <li>• <span className="text-amber-400">Cross-functional Collaboration:</span> Supporting 26+ departments and 6,000+ employees</li>
                    <li>• <span className="text-amber-400">Process Improvement:</span> Developing efficient tracking and management systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Contact Information</h2>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-gray-300">Daly City, CA</p>
                      <p className="text-gray-400 text-sm">(Open to Remote)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p className="text-gray-300">+1-415-994-6256</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:jason.d.alvarez90@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                      jason.d.alvarez90@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a href="https://linkedin.com/in/jason-alvarez-4280a099" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                      linkedin.com/in/jason-alvarez-4280a099
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }