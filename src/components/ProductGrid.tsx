"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Volume2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUpGroup } from "@/components/animations/FadeUpGroup";

interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  badges: string[];
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const getIconColor = (productId: string) => {
    // Map product IDs to color schemes for the icons
    const colorMap: { [key: string]: string } = {
      quantify: "blue-purple",
      webify: "pink",
      supportify: "purple-blue",
      strategize: "orange",
      innovate: "colorful",
      optimize: "pink-white",
      propertify: "blue-pink",
      marketify: "pink-blue",
      techify: "black-red",
      "code-craft": "black-text",
      scoope: "blue-gradient",
      connectify: "pink-gradient",
      // Add more mappings as needed
    };

    return colorMap[productId] || "blue-gradient"; // Default color
  };

  return (
    <FadeUpGroup
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
      initialDelay={0.2}
      staggerDelay={0.1}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          iconColor={getIconColor(product.id)}
          isNew={product.badges.includes("New")}
          isSponsored={product.badges.includes("Sponsored")}
          isHighlight={product.badges.includes("Highlight")}
        />
      ))}
    </FadeUpGroup>
  );
}

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  iconColor: string;
  isNew?: boolean;
  isSponsored?: boolean;
  isHighlight?: boolean;
}

function ProductCard({
  id,
  name,
  description,
  iconColor,
  isNew,
  isSponsored,
  isHighlight,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 group relative">
      <div className="flex justify-between items-start mb-4">
        <ProductIcon color={iconColor} />

        {isNew && (
          <Badge className="bg-teal-50 hover:bg-teal-50 text-teal-600 flex items-center gap-1.5 px-2.5 py-1 font-normal text-xs rounded-md border-none shadow-sm">
            <Sparkles className="h-3 w-3" /> New
          </Badge>
        )}

        {isHighlight && (
          <Badge className="bg-purple-50 hover:bg-purple-50 text-purple-600 flex items-center gap-1.5 px-2.5 py-1 font-normal text-xs rounded-md border-none shadow-sm">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-purple-600 dark:text-purple-400"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            Highlight
          </Badge>
        )}

        {isSponsored && (
          <Badge className="bg-blue-50 hover:bg-blue-50 text-blue-600  flex items-center gap-1.5 px-2.5 py-1 font-normal text-xs rounded-md border-none shadow-sm">
            <Volume2 className="h-3 w-3" /> Sponsored
          </Badge>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-1 text-gray-900 ">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      <div className="absolute bottom-5 right-5 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <Link href={`/product/${id}`}>
          <button className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded-md group/button overflow-hidden inline-flex items-center">
            <span className="relative z-10">Read more</span>
            <ArrowRight
              className="ml-0 w-0 opacity-0 transition-all duration-300 group-hover/button:ml-1.5 group-hover/button:w-4 group-hover/button:opacity-100"
              size={16}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

function ProductIcon({ color }: { color: string }) {
  let bgStyle = {};

  switch (color) {
    case "blue-purple":
      bgStyle = {
        background: "linear-gradient(135deg, #4f8bff 0%, #9f6cff 100%)",
      };
      break;
    case "pink":
      bgStyle = {
        background: "linear-gradient(135deg, #ff7eb0 0%, #ff4994 100%)",
      };
      break;
    case "purple-blue":
      bgStyle = {
        background: "linear-gradient(135deg, #9f6cff 0%, #4f8bff 100%)",
      };
      break;
    case "orange":
      bgStyle = {
        background: "linear-gradient(135deg, #ffba71 0%, #ff7b54 100%)",
      };
      break;
    case "colorful":
      bgStyle = {
        background:
          "linear-gradient(135deg, #ff5555 0%, #55ff55 50%, #5555ff 100%)",
      };
      break;
    case "pink-white":
      bgStyle = {
        background: "linear-gradient(135deg, #ff9fc1 0%, #ffe4ed 100%)",
      };
      break;
    case "blue-pink":
      bgStyle = {
        background: "linear-gradient(135deg, #8ab9ff 0%, #ff9fc1 100%)",
      };
      break;
    case "pink-blue":
      bgStyle = {
        background: "linear-gradient(135deg, #ff9fc1 0%, #8ab9ff 100%)",
      };
      break;
    case "black-red":
      bgStyle = {
        background: "linear-gradient(135deg, #222 0%, #ef4444 100%)",
      };
      break;
    case "black-text":
      bgStyle = { background: "#222" };
      break;
    case "blue-gradient":
      bgStyle = {
        background: "linear-gradient(135deg, #a7f3d0 0%, #7dd3fc 100%)",
      };
      break;
    case "pink-gradient":
      bgStyle = {
        background: "linear-gradient(135deg, #fda4af 0%, #f9a8d4 100%)",
      };
      break;
    default:
      bgStyle = { background: "#f3f4f6" };
  }

  return (
    <div className="w-10 h-10 rounded-xl overflow-hidden" style={bgStyle}>
      {color === "black-text" && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-[8px] text-white font-mono">
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
      )}
    </div>
  );
}
