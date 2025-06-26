import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 animate-pulse">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Search className="h-16 w-16 text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best developers encounter 404s!
          </p>
        </div>

        {/* Fun Developer Message */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-indigo-600" />
          </div>
          <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4 text-left">
            <code className="text-green-400 text-sm">
              <span className="text-purple-400">if</span> (page === <span className="text-yellow-400">'not-found'</span>) {'{'}<br />
              &nbsp;&nbsp;<span className="text-blue-400">console.log</span>(<span className="text-yellow-400">'Time to go home!'</span>);<br />
              &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-cyan-400">navigate</span>(<span className="text-yellow-400">'/'</span>);<br />
              {'}'}
            </code>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
          
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Try Dashboard
          </Link>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2">
            Fun fact: The first 404 error was at CERN in 1992!
          </p>
          <p>
            🚀 Keep learning, keep coding, keep exploring!
          </p>
        </div>
      </div>
    </div>
  );
}