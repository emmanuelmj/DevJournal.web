import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, TrendingUp, Users, ArrowRight, Code, Coffee, Target } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl shadow-lg">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Developer
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
              {' '}Learning Journey
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Log your daily learning, track your progress, and stay motivated with AI-powered insights. 
            DevJournal helps developers like you build better habits and achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-lg font-medium rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to track your progress
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Powerful features designed specifically for developers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get intelligent summaries of your learning and personalized motivational quotes powered by Gemini AI.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Progress Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Visualize your learning journey with beautiful charts and analytics that show your growth over time.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Goal Setting
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Set learning goals, track your consistency, and build lasting habits that accelerate your growth.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">1000+</span>
              </div>
              <p className="text-xl text-indigo-100">Developers Learning</p>
            </div>
            
            <div className="text-white">
              <div className="flex items-center justify-center mb-4">
                <Coffee className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">5000+</span>
              </div>
              <p className="text-xl text-indigo-100">Learning Sessions</p>
            </div>
            
            <div className="text-white">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">98%</span>
              </div>
              <p className="text-xl text-indigo-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Start your learning journey today
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Join thousands of developers who are already tracking their progress and achieving their goals.
        </p>
        <Link
          to="/auth"
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Get Started Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}