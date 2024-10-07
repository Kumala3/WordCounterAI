"use client"

import Link from 'next/link';
import { Github } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  return (
    <nav className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              AI Word Counter
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="https://github.com/yourusername/ai-word-counter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <div className="ml-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
