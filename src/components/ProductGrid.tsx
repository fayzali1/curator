import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        name="Quantify"
        description="AI-driven insights into consumer behavior."
        color="blue"
        isNew
        hasReadMore
      />
      <ProductCard
        name="Webify"
        description="Revolutionizing web development with simplicity."
        color="pink"
      />
      <ProductCard
        name="Supportify"
        description="Redefining customer support with AI for your excellence."
        color="purple"
        highlight
      />
      <ProductCard
        name="Strategize"
        description="Your virtual CFO for financial strategies made with ChatGPT."
        color="orange"
      />
      <ProductCard
        name="Innovate"
        description="Turn ideas into successful products seamlessly."
        color="red"
        sponsored
      />
      <ProductCard
        name="Optimize"
        description="Efficiency solutions for modern manufacturing."
        color="pink"
      />
      <ProductCard
        name="Propertify"
        description="Smart real estate management and analytics."
        color="blue"
        isNew
      />
      <ProductCard
        name="Marketify"
        description="Navigate market trends with confidence."
        color="purple"
      />
      <ProductCard
        name="Techify"
        description="Cutting-edge tech services for enterprise needs."
        color="blue"
        sponsored
      />
      <ProductCard
        name="Code Craft"
        description="Streamlined web design platform for responsive, modern websites."
        color="black"
      />
      <ProductCard
        name="Scoope"
        description="Simplifying complex data analysis with intuitive visualization tools."
        color="teal"
      />
      <ProductCard
        name="Connectify"
        description="Enhance your customer support with our integrated service suite."
        color="pink"
      />
    </div>
  );
}

interface ProductCardProps {
  name: string;
  description: string;
  color: "blue" | "pink" | "purple" | "orange" | "red" | "teal" | "black";
  isNew?: boolean;
  sponsored?: boolean;
  highlight?: boolean;
  hasReadMore?: boolean;
}

function ProductCard({
  name,
  description,
  color,
  isNew,
  sponsored,
  highlight,
  hasReadMore,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center",
            color === "blue" && "bg-blue-100",
            color === "pink" && "bg-pink-100",
            color === "purple" && "bg-purple-100",
            color === "orange" && "bg-orange-100",
            color === "red" && "bg-red-100",
            color === "teal" && "bg-teal-100",
            color === "black" && "bg-gray-900"
          )}
        >
          <div
            className={cn(
              "w-6 h-6 rounded",
              color === "blue" && "bg-blue-400",
              color === "pink" && "bg-pink-400",
              color === "purple" && "bg-purple-400",
              color === "orange" && "bg-orange-400",
              color === "red" && "bg-red-400",
              color === "teal" && "bg-teal-400",
              color === "black" && "bg-gray-700"
            )}
          ></div>
        </div>

        {isNew && (
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M12 2v8"></path>
                <path d="m4.93 10.93 1.41 1.41"></path>
                <path d="M2 18h2"></path>
                <path d="M20 18h2"></path>
                <path d="m19.07 10.93-1.41 1.41"></path>
                <path d="M22 22H2"></path>
                <path d="m16 6-4 4-4-4"></path>
              </svg>
              New
            </span>
          </Badge>
        )}

        {sponsored && (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4"></path>
                <path d="M17 9 12 4 7 9"></path>
                <path d="M12 4v11"></path>
              </svg>
              Sponsored
            </span>
          </Badge>
        )}

        {highlight && (
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              </svg>
              Highlight
            </span>
          </Badge>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-500 text-sm">{description}</p>

      {hasReadMore && (
        <div className="mt-4">
          <Button
            variant="secondary"
            className="bg-gray-800 text-white hover:bg-gray-700 text-xs px-4 h-8 rounded"
          >
            Read more
          </Button>
        </div>
      )}
    </div>
  );
}
