'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto py-6 md:py-8 px-4 sm:px-6 border-t border-border">
      <motion.div
        className="flex flex-row justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <div className="bg-accent flex items-center justify-center rounded">
              <Image
                src="/boost-logo.svg"
                alt="AmazonBoost Logo"
                width={40}
                height={40}
                className="sm:w-12 sm:h-12"
              />
            </div>
            <span className="ml-2 font-medium text-sm sm:text-base text-foreground">AmazonBoost</span>
          </div>
        </div>
        
        <div className="text-xs sm:text-sm text-muted-foreground flex flex-row items-center space-x-4">
          <Link prefetch href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link prefetch href="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          <p>© {new Date().getFullYear()} AmazonBoost</p>
        </div>
      </motion.div>
    </footer>
  );
} 