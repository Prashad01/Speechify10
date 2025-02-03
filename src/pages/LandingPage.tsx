import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mic, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Speech to Text Converter
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Transform your voice into text with our advanced speech recognition technology.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate('/speech-to-text')}
          className="group cursor-pointer"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Speech to Text Generator
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Convert real-time speech into text with our advanced speech recognition technology. Perfect for lectures, meetings, and note-taking.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our tool uses advanced technology to provide high-quality speech recognition. Get started instantly and transform your voice into text.
        </p>
      </motion.div>
    </div>
  );
};

export default LandingPage;