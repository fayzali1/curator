'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const WAITLIST_ONLY_MODE = process.env.NEXT_PUBLIC_WAITLIST_ONLY_MODE === 'true';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use theme variables for background
  const headerBg = 'bg-background';

  return (
    <header className={`sticky top-0 ${headerBg} transition-all duration-300 w-full ${
      isScrolled ? 'shadow-lg' : 'shadow-none'
    } z-50 flex justify-between items-center px-4 sm:px-8 py-4 sm:pt-8`}>
      <Link href="/" className="flex items-center space-x-2">
        <motion.div 
          className="flex items-center flex-row transition-transform duration-300"
          style={{ transform: isScrolled ? 'translateY(-25%)' : 'translateY(0)' }}
        >
          <div className="flex items-center bg-card rounded-md shadow-sm">
            <img 
              src="/boost-logo.svg" 
              alt="AmazonBoost" 
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
          <div className="ml-3 flex flex-col">
            <div className="flex flex-row items-center">
              <span className="font-bold text-sm sm:text-base text-foreground">Amazon</span>
              <span className="font-bold text-sm sm:text-base text-accent">Boost</span>
            </div>
            <span className="text-xs text-muted-foreground hidden sm:block">AI for Sellers</span>
          </div>
        </motion.div>
      </Link>
      
      {/* Right side container */}
      <div className="flex items-center space-x-2">
        {/* Desktop navigation & Theme Toggle */}
        <motion.div
          className="hidden md:flex items-center space-x-4" // Group desktop buttons and toggle
          style={{ transform: isScrolled ? 'translateY(-25%)' : 'translateY(0)' }}
        >
          <ThemeToggle /> {/* Theme Toggle for Desktop */}
          <Link href="https://cal.com/aalpha/demo" prefetch={true}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-md px-4">
              Book a Demo
            </Button>
          </Link>
          {!WAITLIST_ONLY_MODE && (
            <>
              <SignedIn>
                <Link href={APP_URL || '/'} prefetch={true}>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-md px-4">
                    Go to App
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <Link href={APP_URL || '/'} prefetch={true}>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-md px-4">
                    Sign In
                  </Button>
                </Link>
              </SignedOut>
            </>
          )}
        </motion.div>

        {/* Mobile controls: Theme Toggle & Menu */}
        <div className="md:hidden flex items-center space-x-2"> {/* Group mobile toggle and menu */}
           <ThemeToggle /> {/* Theme Toggle for Mobile */}
           {/* Mobile navigation trigger */}
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col mt-10">
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-border">
                  <div className="flex items-center">
                    <div className="bg-card rounded-md shadow-sm">
                      <img 
                        src="/boost-logo.svg" 
                        alt="AmazonBoost" 
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="ml-3 flex flex-col">
                      <div className="flex flex-row items-center">
                        <span className="font-bold text-base text-foreground">Amazon</span>
                        <span className="font-bold text-base text-accent">Boost</span>
                      </div>
                      <span className="text-xs text-muted-foreground">AI for Sellers</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <SheetClose asChild>
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        Close
                      </Button>
                    </SheetClose>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <Link href="https://cal.com/aalpha/demo" prefetch={true} className="w-full">
                    <Button 
                      variant="default" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-md text-base"
                    >
                      Book a Demo
                    </Button>
                  </Link>
                  {!WAITLIST_ONLY_MODE && (
                    <>
                      <SignedIn>
                        <Link href={APP_URL || '/'} prefetch={true} className="w-full">
                          <Button 
                            variant="default" 
                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-md text-base"
                          >
                            Go to App
                          </Button>
                        </Link>
                      </SignedIn>
                      <SignedOut>
                        <Link href={APP_URL || '/'} prefetch={true} className="w-full">
                          <Button 
                            variant="default" 
                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-md text-base"
                          >
                            Sign In
                          </Button>
                        </Link>
                      </SignedOut>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 