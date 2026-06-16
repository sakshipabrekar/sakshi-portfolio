"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Trophy,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Menu,
  X,

  Rocket,
  Download,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "achievements", label: "Achievements" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  // Skills data is now inline in the component to avoid unused variable

  const projects = [
    {
      title: "🧠 AI Blog Hub – AI-Powered Blogging Platform  ",
      status: "In Development",
      description:
        "AI-powered blogging platform built using ASP.NET Core Web API, React.js, SQL Server, and OpenAI APIs. The platform enables users to create, manage, and optimize blog content with AI-assisted writing, SEO suggestions, summarization, and content moderation features.",
      tech: [
        "ASP.NET Core Web API",
    "C#",
    "React.js",
    "SQL Server",
    "Entity Framework Core",
    "JWT Authentication",
    "OpenAI API",
      ],
      gradient: "from-purple-400 via-pink-500 to-red-500",
      links: {
        //live: "https://ai-resume-critic.vercel.app",
        github: "https://github.com/sakshipabrekar",
        //demo: "https://ai-resume-critic.vercel.app/analyzer",
      },
      features: [
         "JWT Authentication & Authorization",
    "Email Verification & Password Recovery",
    "AI Content Generation",
    "SEO Keyword Suggestions",
    "Blog Draft & Publish Workflow",
    "Comments, Likes & Favorites",
    "Admin Dashboard & Analytics",
    "Role-Based Access Control",
      ],
    },
    {
      title: "📊 Attendance Viewer",
      status: "Completed",
      description:
        "Full-stack attendance management application developed using ASP.NET Core Web API, React.js, and SQL Server. The system provides real-time attendance tracking, CRUD operations, filtering, and efficient data management.",
      tech: [
       "ASP.NET Core Web API",
    "C#",
    "React.js",
    "SQL Server",
    "Entity Framework Core",
    "Bootstrap"
      ],
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      links: {
        github: "https://github.com/sakshipabrekar",
        //demo: "https://feedback-system-demo.vercel.app",
      },
      features: [
        "Attendance CRUD Operations",
    "RESTful API Integration",
    "Real-Time Data Updates",
    "Responsive User Interface",
    "Data Filtering & Search",
    "SQL Server Database Management",
    "Entity Framework Core",
    "Performance Optimized Queries",
      ],
    },
    {
      title: "🏢 Contract-Based Management System",
      description:
         "Enterprise web application developed during internship at MDL for managing contract employee registration, renewal, approval workflows, and role-based access management across departments.",
      tech: [ "React.js",
    "ASP.NET Core",
    "C#",
    "SQL Server",
    "JavaScript",
    "Bootstrap"],
      gradient: "from-blue-400 via-purple-500 to-pink-500",
      links: {
        github: "https://github.com/sakshipabrekar",
      },
      features: [
         "Pass Registration Workflow",
    "Pass Renewal Management",
    "Approval Process Automation",
    "Role-Based Access Control",
    "HR Module",
    "Safety Department Module",
    "Admin Dashboard",
    "Responsive User Interface"
      ],
    },
    {
      title: "AI/ML-Powered Video Dubbing",
      description:
        "A Python/FastAPI system that translates and dubs English videos into regional Indian languages using transformers and TTS. Designed for offline use with pipelining for performance. Smart India Hackathon 2023 Finalist project.",
      tech: ["Python", "FastAPI", "Transformers", "TTS", "AI/ML"],
      gradient: "from-green-400 via-blue-500 to-purple-500",
      status: "SIH 2023 Finalist",
      links: {
        github: "https://github.com/sakshipabrekar",
      },
    },
  ];

  const experiences = [
   {
  title: "Software Developer",
  company: "Netbeans Systems Limited",
  period: "Feb 2026 – Present",
  description:
    "Developing and maintaining enterprise web applications using ASP.NET Core, C#, Web API, and SQL Server. Designing and integrating RESTful APIs, optimizing database queries, resolving production issues, and ensuring seamless functionality across multiple modules of the MDL website.",
  color: "from-blue-500 to-purple-600",
},
{
  title: "Web Developer Intern",
  company: "Mazagon Dock Shipbuilders Limited (MDL)",
  period: "Mar 2025 – Feb 2026",
  description:
    "Conducted accessibility audits, resolved real-time UI issues, and developed front-end modules for a Contract-Based Management System using React.js. Built role-based access modules for HR, Safety, and Admin users while gaining hands-on experience with ASP.NET Core, C#, MVC, and SQL Server.",
  color: "from-green-500 to-blue-600",
},
  ];

  const achievements = [
    {
      text: "Finalist – Smart India Hackathon 2023 (AI video dubbing)",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      text: "Solved 500+ problems on LeetCode & GFG (DSA-focused)",
      icon: Code,
      color: "text-green-500",
    },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/sakshi_pabrekar_developer.pdf';
    link.download = 'sakshi_pabrekar_developer.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-purple-200 z-50 shadow-lg shadow-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sakshi Pabrekar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-purple-600 border-b-2 border-purple-600 transform scale-105"
                      : "text-slate-600 hover:text-purple-600 hover:scale-105"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-purple-600"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-white/50 rounded-lg mx-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-purple-500/30 animate-pulse">
                SP
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Sakshi Pabrekar
              </span>
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 font-semibold">
               🚀 Full Stack .NET Developer | ASP.NET Core | Web API | SQL Server | React.js | RESTAPIs
            </p>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed">
               Currently working as a Software Developer, I specialize in ASP.NET Core, Web API, SQL Server, and React.js. I have experience developing enterprise applications, optimizing database performance, integrating APIs, and delivering reliable solutions that solve real-world business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <Rocket className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleResumeDownload}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
            <div className="mt-12">
              <ChevronDown
                className="w-6 h-6 mx-auto text-purple-500 animate-bounce cursor-pointer hover:text-purple-700 transition-colors"
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-white to-purple-50/50">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  I am a Full Stack .NET Developer with experience in developing and maintaining enterprise web applications using ASP.NET Core, C#, Web API, SQL Server, Entity Framework Core, and React.js. Currently working as a Software Developer at Netbeans Systems Limited, I specialize in building scalable RESTful APIs, optimizing database performance, and delivering secure, user-centric solutions for real-world business requirements.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                 My experience includes working on enterprise systems for Mazagon Dock Shipbuilders Limited (MDL), where I contributed to application development, accessibility compliance, role-based access management, and production issue resolution. I am passionate about software engineering, problem-solving, and continuously expanding my expertise in AI integration, cloud technologies, and modern development practices to build innovative and impactful applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
    {
category: "Programming Languages",
items: [
"C#",
"JavaScript",
"HTML5",
"CSS3",
"SQL"
],
gradient: "from-emerald-500 to-teal-600",
bgGradient: "from-emerald-50 to-teal-50",
textColor: "text-emerald-800",
icon: "💻",
},
{
category: "Frameworks & Libraries",
items: [
"ASP.NET Core",
"ASP.NET MVC",
"Web API",
"Entity Framework Core",
"LINQ",
"React.js",
"jQuery",
"Bootstrap"
],
gradient: "from-blue-500 to-indigo-600",
bgGradient: "from-blue-50 to-indigo-50",
textColor: "text-blue-800",
icon: "⚙️",
},
{
category: "Database",
items: [
"SQL Server",
"SQL Queries",
"Stored Procedures",
"Database Management",
"Query Optimization"
],
gradient: "from-orange-500 to-red-500",
bgGradient: "from-orange-50 to-red-50",
textColor: "text-orange-800",
icon: "🗄️",
},
{
category: "API Development",
items: [
"RESTful API Design",
"API Development",
"API Integration",
"Swagger Documentation"
],
gradient: "from-violet-500 to-purple-600",
bgGradient: "from-violet-50 to-purple-50",
textColor: "text-violet-800",
icon: "🔌",
},
{
category: "Web Development",
items: [
"Responsive UI Design",
"Accessibility (WCAG Standards)",
"Cross-Browser Debugging",
"Authentication & Authorization"
],
gradient: "from-cyan-500 to-blue-500",
bgGradient: "from-cyan-50 to-blue-50",
textColor: "text-cyan-800",
icon: "🌐",
},
{
category: "Concepts & Architecture",
items: [
"Object-Oriented Programming (OOP)",
"Design Patterns",
"Role-Based Access Control (RBAC)",
"Software Architecture"
],
gradient: "from-amber-500 to-orange-500",
bgGradient: "from-amber-50 to-orange-50",
textColor: "text-amber-800",
icon: "🧠",
},
{
category: "Tools & Version Control",
items: [
"Git",
"Visual Studio",
"VS Code",
"Postman",
"SQL Server Management Studio (SSMS)"
],
gradient: "from-green-500 to-emerald-600",
bgGradient: "from-green-50 to-emerald-50",
textColor: "text-green-800",
icon: "🛠️",
},
{
category: "Methodologies & Deployment",
items: [
"Agile/Scrum",
"Unit Testing",
"CI/CD",
"Docker",
"DevOps Fundamentals",
"Azure (Foundational)",
"AWS (Foundational)",
"Cloud Deployment"
],
gradient: "from-pink-500 to-rose-600",
bgGradient: "from-pink-50 to-rose-50",
textColor: "text-pink-800",
icon: "🚀",
}


            ].map((skillGroup, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${skillGroup.bgGradient} group overflow-hidden`}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${skillGroup.gradient}`}
                ></div>
                <CardHeader>
                  <CardTitle
                    className={`text-xl font-bold flex items-center gap-3 ${skillGroup.textColor} mb-3`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skillGroup.gradient} flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skillGroup.icon}
                    </div>
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`${skillGroup.textColor} bg-white/70 hover:bg-white hover:scale-105 transition-all duration-300 shadow-sm border border-white/50`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden group"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    {project.status && (
                      <Badge
                        className={`text-white border-0 ${
                          project.status === "Completed"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : project.status.includes("SIH")
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                            : "bg-gradient-to-r from-orange-500 to-red-500"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  {/* Project Links */}
                  {project.links && (
                    <div className="flex gap-2 mb-3">
                      
                      {project.links.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:bg-slate-50 text-xs px-3 py-1 h-7"
                          onClick={() =>
                            window.open(
                              project.links.github,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Features for featured projects */}
                  {project.features && (index === 0 || index === 1) && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-xs text-slate-600"
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${
                                  index === 0
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                    : "bg-gradient-to-r from-emerald-500 to-teal-500"
                                }`}
                              ></div>
                              {feature}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-purple-100 hover:to-blue-100 hover:text-purple-700 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-2">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                        >
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        {exp.title}
                      </h3>
                      <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-600 to-red-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-yellow-50/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-yellow-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0`}
                      >
                        <achievement.icon className={`w-5 h-5 text-white`} />
                      </div>
                      {index === 1 ? (
                        <p className="text-lg text-slate-700 font-medium">
                          Solved 500+ problems on{" "}
                          <a
                            //href="https://leetcode.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 underline font-semibold transition-all duration-300"
                          >
                            LeetCode
                          </a>{" "}
                          & GFG (DSA-focused)
                        </p>
                      ) : (
                        <p className="text-lg text-slate-700 font-medium">
                          {achievement.text}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50/50 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Bachelor of Engineering (Computer Engineering)
                    </h3>
                    <p className="text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-2">
                      MCT&apos;s Rajiv Gandhi Institute of Technology, Mumbai
                    </p>
                    <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200">
                     Completed
                    </Badge>
                  </div>

                  
                   
                  
                   
        
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                Email
              </h3>
              <a
                href="mailto:rushikeshphadtare2003@gmail.com"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              >
                spabrekar24@gmail.com
              </a>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">
                Phone
              </h3>
              <a
                href="tel:+918369907194"
                className="text-slate-300 hover:text-green-400 transition-colors duration-300"
              >
                +91 8369907194
              </a>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">
                Location
              </h3>
              <p className="text-slate-300">Mumbai, Maharashtra, India</p>
            </div>
          </div>

          <Separator className="bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-12" />

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 sm:mb-0">
              <a
                href="https://github.com/sakshipabrekar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-all duration-300 hover:scale-125"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sakshi-pabrekar-b53b1422b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-125"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:spabrekar24@gmail.com"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-125"
              >
                <Mail className="w-6 h-6" />
              </a>
              <button
                onClick={handleResumeDownload}
                className="text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:scale-125"
                title="Download Resume"
              >
                <Download className="w-6 h-6" />
              </button>
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 Sakshi Pabrekar. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
