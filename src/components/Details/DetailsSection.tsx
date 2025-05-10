"use client";

import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Volume2, Star, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { motion, useScroll, useTransform } from "framer-motion";

export function DetailsSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Transform the scale based on scroll position
  const scale = useTransform(scrollY, [0, 200], [1, 0.85]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header with back button and sponsored tag */}
      <div className="flex justify-between items-center mb-4">
        <Link href="/">
          <Button
            variant="outline"
            className="bg-white border-gray-200 text-gray-700 rounded-full flex items-center gap-2 px-4 hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4" /> Go back
          </Button>
        </Link>
        <Badge className="bg-blue-50 hover:bg-blue-50 text-blue-600 flex items-center gap-1.5 px-2.5 py-1 font-normal text-xs rounded-md border-none shadow-sm">
          <Volume2 className="h-3 w-3" /> Sponsored
        </Badge>
      </div>

      {/* Product card */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        {/* Hero image container with padding */}
        <div className="p-4 pt-4 bg-white">
          {/* Hero image with animation */}
          {isMounted && (
            <motion.div
              ref={ref}
              style={{ scale }}
              className="h-48 w-full rounded-2xl overflow-hidden"
            >
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(to right, #0a192f, #111b2d, #121e2d, #142233, #172736, #19293f, #172c4a, #142f55, #10315f, #113469, #153673, #1e377c)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Blue swirl accents */}
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 40%, rgba(0, 153, 255, 0.3) 0%, transparent 35%), radial-gradient(circle at 80% 70%, rgba(255, 0, 85, 0.2) 0%, transparent 30%)",
                  }}
                ></div>
                {/* Additional texture */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                    mixBlendMode: "overlay",
                  }}
                ></div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pt-0 pb-6 relative">
          {/* Product icon */}
          <div
            className="absolute -top-8 left-6 w-16 h-16 rounded-2xl overflow-hidden border-4 border-white"
            style={{
              background: "linear-gradient(135deg, #ff7eb0 0%, #ff4994 100%)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-[8px] text-white">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <span key={j} className="mx-0.5">
                          {Math.random() > 0.5 ? "1" : "0"}
                        </span>
                      ))}
                  </div>
                ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 mb-6 pt-4">
            <Button
              variant="outline"
              className="bg-white border-gray-200 text-gray-700 rounded-md px-4 hover:bg-gray-50"
            >
              Visit Website
            </Button>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </div>

          {/* Product details */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Webify</h1>
          <p className="text-gray-500 mb-6">
            Revolutionizing web development with simplicity.
          </p>

          {/* Founder */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3 pl-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs text-gray-500">Founded by</div>
                <div className="font-medium">Marieke</div>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4">
              Follow
            </Button>
          </div>
        </div>
      </div>

      {/* Recommended section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recommended
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Webify */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex flex-col gap-3">
              <div
                className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #ff7eb0 0%, #ff4994 100%)",
                }}
              ></div>
              <div className="min-w-0">
                <h3 className="font-medium text-gray-900 text-sm">Webify</h3>
                <p className="text-sm text-gray-500 truncate">
                  Revolutionizing web development with simplicity.
                </p>
              </div>
            </div>
          </div>

          {/* Strategize */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex flex-col gap-3">
              <div
                className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #ffba71 0%, #ff7b54 100%)",
                }}
              ></div>
              <div className="min-w-0">
                <h3 className="font-medium text-gray-900 text-sm">
                  Strategize
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  Your virtual CFO for financial strategies made with ChatGPT.
                </p>
              </div>
            </div>
          </div>

          {/* Propertify */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 relative">
            <div className="flex flex-col gap-3">
              <div
                className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #8ab9ff 0%, #ff9fc1 100%)",
                }}
              ></div>
              <div className="min-w-0">
                <h3 className="font-medium text-gray-900 text-sm">
                  Propertify
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  Smart real estate management and analytics.
                </p>
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <Badge className="bg-teal-50 hover:bg-teal-50 text-teal-600 flex items-center gap-1 px-2 py-0.5 font-normal text-[10px] rounded-md border-none shadow-sm">
                <Sparkles className="h-2.5 w-2.5" /> New
              </Badge>
            </div>
          </div>

          {/* Marketify */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex flex-col gap-3">
              <div
                className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #ff9fc1 0%, #8ab9ff 100%)",
                }}
              ></div>
              <div className="min-w-0">
                <h3 className="font-medium text-gray-900 text-sm">Marketify</h3>
                <p className="text-sm text-gray-500 truncate">
                  Navigate market trends with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
          Subscribe to our newsletter <span className="ml-2">🤩</span>
        </h2>
        <p className="text-gray-500 mb-6">
          We regularly list new indie products & makers. Get them in your inbox!
        </p>

        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Input
              type="email"
              placeholder="name@email.com"
              className="bg-gray-50 border-gray-100 rounded-full h-12 px-5 w-full"
            />
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 h-12">
            Submit
          </Button>
        </div>
      </div>

      {/* Buy button */}
      <div className="fixed bottom-4 right-4 z-10">
        <Button className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 10H21M3 14H21M12 3V21" stroke="white" strokeWidth="2" />
          </svg>
          Buy for 69€
        </Button>
      </div>
    </div>
  );
}
