'use client'

import { createNotionContactPage } from "@/tools/notion/contacts";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { AlertCircle, Sparkles, Rocket } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';

const WAITLIST_TAG_ID = '1';
const SOURCE = 'waitlist_form';

const FORM_CONFIG = {
  EMAIL_PLACEHOLDER: "Enter your email",
  BUTTON_TEXT: "Join Waitlist",
  SUCCESS_TITLE: "You're on the list! 🚀",
  SUCCESS_MESSAGE: "We'll notify you when we launch. Get ready to boost your Amazon sales!",
  ERROR_TITLE: "Oops! Something went wrong",
};

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      const userId = uuidv4();
      await createNotionContactPage({
        userId,
        email,
        source: SOURCE,
        tags: WAITLIST_TAG_ID
      });

      setEmail('');
      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to join waitlist:', error);
      setError('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-md mx-auto"
      >
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative mb-6 w-full"
            >
              <motion.div 
                className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg shadow-sm"
                animate={{ x: [-4, 4, -4, 4, 0], transition: { duration: 0.5 } }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-red-800">
                      {FORM_CONFIG.ERROR_TITLE}
                    </h3>
                    <p className="mt-1 text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-8 w-full"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#FF6B00] mb-4"
              >
                <Sparkles className="w-12 h-12 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{FORM_CONFIG.SUCCESS_TITLE}</h3>
              <p className="text-gray-600">
                {FORM_CONFIG.SUCCESS_MESSAGE}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 w-full"
            >
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={FORM_CONFIG.EMAIL_PLACEHOLDER}
                  className="flex-1 bg-white border-2 border-gray-200 focus:border-[#FF6B00] focus:ring-[#FF6B00] rounded-lg shadow-sm"
                  disabled={isSubmitting}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex items-center justify-center gap-2 px-6 py-2.5
                            bg-[#FF6B00] text-white rounded-lg font-medium
                            hover:bg-[#FF5500] transition-all duration-300 ease-out overflow-hidden shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button content */}
                  <span className="relative z-10 font-medium">
                    {isSubmitting ? 'Joining...' : FORM_CONFIG.BUTTON_TEXT}
                  </span>
                  <div
                    className="relative z-10"
                  >
                    {isSubmitting ? <Sparkles className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
                  </div>
                </motion.button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-2">
                By joining, you agree to our{" "}
                <a href="/terms" className="underline hover:text-[#FF6B00]">Terms</a>
                {" "}and{" "}
                <a href="/privacy" className="underline hover:text-[#FF6B00]">Privacy Policy</a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default WaitlistForm; 