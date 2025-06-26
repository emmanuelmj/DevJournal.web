import React from 'react';
import { Github, Linkedin, Mail, Award, Code, Users, Heart } from 'lucide-react';

export function About() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emmanuelmj',
      icon: Linkedin,
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/emmanuelmj',
      icon: Github,
      color: 'hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700',
    },
    {
      name: 'Email',
      url: 'mailto:emmanuelmj08@gmail.com',
      icon: Mail,
      color: 'hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Hackathon Winner',
      description: 'Won Generative AI hackathon at IIT Hyderabad by TechGyan',
      color: 'text-yellow-600',
    },
    {
      icon: Code,
      title: 'Python Developer',
      description: 'Passionate about building innovative solutions',
      color: 'text-blue-600',
    },
    {
      icon: Users,
      title: 'Student Intern',
      description: 'Currently at Scaler School of Technology',
      color: 'text-green-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white">MJ</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            M.J Emmanuel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Founder of DevJournal
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${link.color}`}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About the Founder
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed mb-6">
              M.J Emmanuel is the founder of DevJournal, a passionate Python developer with a vision 
              to empower students and freelancers through innovative productivity tools. His journey 
              in technology is marked by continuous learning, creative problem-solving, and a deep 
              commitment to helping others grow.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Emmanuel's expertise shines through his recent victory at the Generative AI hackathon 
              conducted at IIT Hyderabad by TechGyan, where his innovative approach to AI solutions 
              earned him recognition among top developers and researchers.
            </p>
            
            <p className="text-lg leading-relaxed">
              Currently pursuing his studies as a student intern at Scaler School of Technology, 
              Emmanuel is expanding his knowledge in AI/ML and deep learning. His growing interest 
              in these cutting-edge fields drives him to build tools that not only solve problems 
              but also inspire others to be more productive and reflective in their learning journeys.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className={`p-3 rounded-xl w-fit mb-4 ${achievement.color.replace('text-', 'bg-').replace('-600', '-100')} dark:bg-gray-700`}>
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-indigo-100">
            "To create tools that empower developers and learners to document their journey, 
            reflect on their progress, and stay motivated through the ups and downs of their 
            learning adventure. Every line of code, every bug fixed, and every concept mastered 
            deserves to be celebrated."
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to connect or collaborate?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:emmanuelmj08@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
            <a
              href="https://github.com/emmanuelmj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}