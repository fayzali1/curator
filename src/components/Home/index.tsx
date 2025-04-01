'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, TrendingUp, Image as ImageIcon, ShoppingCart, BarChart2, Package, Search, Zap, ArrowDown, ArrowRight, Check, FileText, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const WAITLIST_ONLY_MODE = process.env.NEXT_PUBLIC_WAITLIST_ONLY_MODE === 'true';

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <StickyHeader />
      {/* Main content wrapper that will grow to fill available space */}
      <div className="flex-grow">
        {/* Waitlist Section - will fill available space in waitlist mode */}
        <section className={`container mx-auto text-center px-4 pt-12 md:pt-16 pb-12 md:pb-16 relative ${WAITLIST_ONLY_MODE ? 'flex flex-col justify-center min-h-[70vh]' : ''}`}>
          {/* 3D floating elements - hide on small screens */}
          <div className="absolute w-full h-full inset-0 overflow-hidden pointer-events-none hidden sm:block">
            <motion.div 
              className="absolute top-10 left-10 w-16 h-16 bg-accent opacity-10 rounded-lg"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-40 right-20 w-20 h-20 bg-primary opacity-5 rounded-full"
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent opacity-10 rounded-md"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -15, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 7,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {WAITLIST_ONLY_MODE && (
              <div className="flex justify-center items-center mb-2">
                <span className="text-xs sm:text-sm text-muted-foreground">coming soon for</span>
                <span className="ml-2 bg-accent text-accent-foreground text-xs px-1 rounded">Amazon Sellers</span>
              </div>
            )}
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-accent">AI-Powered Amazon Listings</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              that convert and sell
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8"
            >
              <p className="text-sm sm:text-base text-muted-foreground mb-1">Optimize product images and copy with AI</p>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">Boost your conversion rates and sales performance</p>
            </motion.div>
            
            {/* Replace the old waitlist form with the new component */}
            {WAITLIST_ONLY_MODE && <WaitlistForm />}
          </motion.div>
        </section>

        {/* Conditionally render the rest of the content based on flag */}
        {!WAITLIST_ONLY_MODE && (
          <>
            {/* 3D Amazon Box Animation */}
            <motion.section 
              className="container mx-auto px-4 relative mb-12 md:mb-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Background elements - hide some on small screens */}
              <div className="absolute -left-10 top-10 w-20 h-20 bg-accent rounded-full opacity-70 hidden sm:block"></div>
              <div className="absolute right-20 top-0 w-16 h-16 bg-accent rounded-full opacity-20 hidden sm:block"></div>
              <div className="absolute right-40 bottom-0 w-24 h-24 bg-accent rounded-full opacity-40 hidden sm:block"></div>
              
              <motion.div 
                className="relative bg-accent rounded-lg p-4 sm:p-6 pt-6 sm:pt-12 overflow-hidden"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-accent-foreground text-2xl sm:text-3xl font-bold mb-3 sm:mb-6">Transform</h2>
                <div className="bg-card rounded-lg p-3 sm:p-4 shadow-lg">
                  <div className="w-full h-auto bg-background rounded-md flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Container for Before/After sections */}
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full p-3 sm:p-4"
                      initial={{ rotateX: 15 }}
                      animate={{ rotateX: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      {/* Before Optimization */}
                      <motion.div 
                        className="bg-muted p-3 sm:p-4 rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        <h3 className="text-foreground text-lg font-semibold mb-2 flex items-center">
                          <div className="flex justify-center items-center w-6 h-6 bg-muted-foreground/10 text-muted-foreground rounded-full mr-2 text-xs">1</div>
                          Before Optimization
                        </h3>
                        <motion.div 
                          className="bg-muted/60 h-24 sm:h-40 rounded-md mb-2 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                        >
                          <ImageIcon className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
                        </motion.div>
                        <motion.div 
                          className="bg-muted/60 h-12 sm:h-20 rounded-md mb-2"
                          whileHover={{ scale: 1.02 }}
                        ></motion.div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground text-xs">
                          <div className="flex items-center mb-1 sm:mb-0">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span>3.2 Rating</span>
                          </div>
                          <div className="flex items-center sm:ml-4">
                            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span>12% Conversion</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Visual separator for mobile only */}
                      <div className="relative h-8 flex justify-center items-center sm:hidden">
                        <div className="absolute w-px h-full bg-border"></div>
                        <div className="absolute bg-muted rounded-full p-1 z-10">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <ArrowDown className="w-3 h-3 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                      
                      {/* After AI Optimization */}
                      <motion.div 
                        className="bg-card p-3 sm:p-4 rounded-md border border-border"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        <h3 className="text-foreground text-lg font-semibold mb-2 flex items-center">
                          <div className="flex justify-center items-center w-6 h-6 bg-accent text-accent-foreground rounded-full mr-2 text-xs">2</div>
                          After AI Optimization
                        </h3>
                        <motion.div 
                          className="bg-muted h-24 sm:h-40 rounded-md mb-2 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                        >
                          <ImageIcon className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
                        </motion.div>
                        <motion.div 
                          className="bg-muted h-12 sm:h-20 rounded-md mb-2"
                          whileHover={{ scale: 1.02 }}
                        ></motion.div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-accent text-xs">
                          <div className="flex items-center mb-1 sm:mb-0">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span>4.8 Rating</span>
                          </div>
                          <div className="flex items-center sm:ml-4">
                            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span>35% Conversion</span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Simplified 3D Amazon box for better mobile performance */}
                    <motion.div 
                      className="absolute -z-10 opacity-10 w-full h-full flex items-center justify-center pointer-events-none"
                      animate={{ 
                        rotateY: [0, 360]
                      }}
                      transition={{ 
                        rotateY: { duration: 30, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <div className="w-24 h-24 sm:w-40 sm:h-40 relative">
                        <div className="absolute inset-0 border-2 sm:border-4 border-[#ff5722] rounded-md transform rotate-3"></div>
                        <div className="absolute inset-0 border-2 sm:border-4 border-[#ff5722] rounded-md transform -rotate-3"></div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Results callout - mobile friendly */}
                  <div className="bg-secondary text-center p-3 sm:p-4 rounded-b-md w-full mt-3 sm:mt-4">
                    <h3 className="text-secondary-foreground text-base sm:text-lg font-semibold">
                      See a <span className="text-accent">3x improvement</span> in your sales
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">AI optimization increases ratings and conversion rates</p>
                  </div>
                </div>
              </motion.div>
            </motion.section>
            
            {/* How it works */}
            <section className="container mx-auto mb-16 md:mb-24 relative px-4">
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground mb-10 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                How it works
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                <motion.div 
                  className="flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative mb-6 sm:mb-8">
                    <motion.div 
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-card rounded-2xl shadow-md flex items-center justify-center"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                    >
                      <Package className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                    </motion.div>
                    <div className="absolute -right-2 -top-2 bg-accent text-accent-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-lg font-bold">1</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">Upload your</h3>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Amazon listing</h3>

                  {/* Add connector line for mobile */}
                  <div className="md:hidden h-12 w-1 bg-border my-4 mx-auto"></div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Desktop connector - hide on mobile */}
                  <div className="absolute left-0 top-12 w-full hidden md:block">
                    <svg className="w-full" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        d="M0 10C50 -10 150 30 200 10" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeDasharray="5 5"
                        className="text-border"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </svg>
                  </div>
                  
                  <div className="relative mb-6 sm:mb-8">
                    <motion.div 
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-card rounded-2xl shadow-md flex items-center justify-center"
                      whileHover={{ scale: 1.05, rotate: -5 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                    >
                      <ImageIcon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                    </motion.div>
                    <div className="absolute -right-2 -top-2 bg-accent text-accent-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-lg font-bold">2</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">AI enhances images</h3>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">and copy</h3>

                  {/* Add connector line for mobile */}
                  <div className="md:hidden h-12 w-1 bg-border my-4 mx-auto"></div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Desktop connector - hide on mobile */}
                  <div className="absolute right-0 top-12 w-full hidden md:block">
                    <svg className="w-full" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        d="M0 10C50 30 150 -10 200 10" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeDasharray="5 5"
                        className="text-border"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                    </svg>
                  </div>
                  
                  <div className="relative mb-6 sm:mb-8">
                    <motion.div 
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-card rounded-2xl shadow-md flex items-center justify-center"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                    >
                      <BarChart2 className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                    </motion.div>
                    <div className="absolute -right-2 -top-2 bg-accent text-accent-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-lg font-bold">3</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">Watch your sales</h3>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">increase</h3>
                </motion.div>
              </div>
              
              {/* 3D floating elements - hide on small screens */}
              <motion.div 
                className="absolute bottom-0 right-0 w-20 h-20 opacity-10 hidden sm:block"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <Package className="w-full h-full text-accent" />
              </motion.div>
            </section>

            {/* Features Section - Enhanced */}
            <motion.section
              className="container mx-auto px-4 mb-16 md:mb-32 bg-gradient-to-br from-secondary/50 to-secondary/80 rounded-xl shadow-lg py-12 md:py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-center md:space-x-12">
                {/* Left side: Feature list */}
                <motion.div
                  className="md:w-1/2 mb-10 md:mb-0"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">Core Features</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Unlock Your Listing's Potential</h2>
                  <p className="text-secondary-foreground mb-8 text-lg">
                    Leverage AI to refine every element for maximum impact and sales velocity.
                  </p>
                  {/* Feature items - Enhanced with specific icons and hover effect */}
                  <div className="space-y-5">
                    {/* Feature 1 - Image Optimization */}
                    <motion.div
                      className="flex items-start p-4 rounded-lg transition-all duration-300 group hover:bg-background/50"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center mt-1 transition-colors duration-300">
                        <ImageIcon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-foreground">AI-Enhanced Product Images</h3>
                        <p className="text-secondary-foreground mt-1">Generate scroll-stopping visuals that convert browsers into buyers.</p>
                      </div>
                    </motion.div>
                    {/* Feature 2 - Text Optimization */}
                    <motion.div
                      className="flex items-start p-4 rounded-lg transition-all duration-300 group hover:bg-background/50"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center mt-1 transition-colors duration-300">
                        <FileText className="h-5 w-5 text-accent" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-foreground">Keyword-Optimized Copy</h3>
                        <p className="text-secondary-foreground mt-1">Craft compelling, SEO-friendly descriptions that dominate Amazon search.</p>
                      </div>
                    </motion.div>
                    {/* Feature 3 - Analytics */}
                    <motion.div
                      className="flex items-start p-4 rounded-lg transition-all duration-300 group hover:bg-background/50"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center mt-1 transition-colors duration-300">
                        <BarChart3 className="h-5 w-5 text-accent" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-foreground">Performance Analytics</h3>
                        <p className="text-secondary-foreground mt-1">Track key metrics and understand the real impact of your optimizations.</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right side: Dashboard visual - Enhanced */}
                <motion.div
                  className="md:w-1/2 relative"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Dashboard container - Enhanced background */}
                  <motion.div
                    className="w-full h-56 sm:h-72 bg-gradient-to-br from-card via-card to-muted/30 border border-border rounded-lg shadow-md mb-6 flex items-center justify-center relative overflow-hidden p-6"
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="text-center">
                      <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-2">Live Preview</div>
                      <div className="text-foreground text-lg sm:text-xl font-semibold">Product Optimization Dashboard</div>
                    </div>

                    {/* Floating elements - Adjusted opacity */}
                    <motion.div
                      className="absolute top-6 left-6 w-14 sm:w-20 h-14 sm:h-20 opacity-15 text-accent"
                      animate={{ y: [0, 6, 0], rotate: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    >
                      <Search className="w-full h-full" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-6 right-6 w-14 sm:w-20 h-14 sm:h-20 opacity-15 text-accent"
                      animate={{ y: [0, -6, 0], rotate: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.2 }}
                    >
                      <Zap className="w-full h-full" />
                    </motion.div>
                  </motion.div>

                  {/* Placeholder bars - More dynamic widths */}
                  <div className="space-y-3">
                    <div className="h-5 bg-accent/20 rounded w-full animate-pulse delay-100"></div>
                    <div className="h-5 bg-accent/20 rounded w-4/5 animate-pulse delay-200"></div>
                    <div className="h-5 bg-accent/20 rounded w-2/3 animate-pulse delay-300"></div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
            
            {/* FAQ Section - Corrected */}
            <motion.section
              className="container mx-auto mb-20 md:mb-32 px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">
                Still Have Questions?
              </h2>

              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-card border border-border rounded-lg shadow-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <AccordionItem value="item-1" className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors group">
                      How can I start optimizing my Amazon listings?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Simply sign up for an account, connect your Amazon Seller Central (optional), or manually input your listing details. Our AI will then analyze and provide actionable optimizations for images, titles, bullet points, and descriptions.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <AccordionItem value="item-2" className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors group">
                      Can I use this for any product category?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Absolutely! Our AI models are trained on vast datasets covering millions of Amazon listings across virtually all categories. It adapts its recommendations based on category-specific best practices and keyword trends.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <AccordionItem value="item-3" className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors group">
                      How much can I expect my sales to improve?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      While results vary based on product, competition, and market conditions, our users typically report significant improvements in click-through rates (CTR) and conversion rates, often ranging from 15% to over 40%, leading to increased sales and better BSR.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <AccordionItem value="item-4" className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors group">
                      Is this platform beginner-friendly?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Yes! AmazonBoost is designed for sellers of all experience levels. The interface is intuitive, and the AI does the heavy lifting. We provide clear recommendations that are easy to understand and implement directly on Amazon.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <AccordionItem value="item-5" className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors group">
                      How quickly can I see optimization results?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      The AI analysis and generation of optimized content (images, text) typically takes only a few minutes per listing. Once you implement the changes on Amazon, you can start monitoring performance improvements through our analytics dashboard.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <AccordionItem value="item-6" className="border-b-0">
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors group">
                      Do you offer analytics to track improvements?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Yes, our integrated analytics dashboard allows you to track key performance indicators (KPIs) like conversion rates, click-through rates, session data, and keyword ranking changes, comparing performance before and after optimization.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </Accordion>
            </motion.section>
          </>
        )}
      </div>
      
      {/* Footer - Always shown */}
      <Footer />
    </div>
  );
}