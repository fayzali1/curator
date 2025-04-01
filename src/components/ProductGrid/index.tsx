import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpeakerIcon, Sparkles } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  isNew?: boolean;
  isSponsored?: boolean;
  isHighlight?: boolean;
};

const ProductCard = ({
  title,
  description,
  isNew,
  isSponsored,
  isHighlight,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-lg bg-black mb-4"></div>

        {isNew && (
          <Badge
            variant="outline"
            className="bg-teal-50 text-teal-500 border-0 flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>New</span>
          </Badge>
        )}

        {isSponsored && (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-500 border-0 flex items-center gap-1.5"
          >
            <SpeakerIcon className="h-3.5 w-3.5" />
            <span>Sponsored</span>
          </Badge>
        )}

        {isHighlight && (
          <Button
            size="sm"
            variant="secondary"
            className="bg-purple-100 text-purple-500 hover:bg-purple-200"
          >
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            Highlight
          </Button>
        )}
      </div>

      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export const ProductGrid = () => {
  const products = [
    {
      title: "Quantify",
      description: "AI-driven insights into consumer behavior.",
      isNew: true,
    },
    {
      title: "Webify",
      description: "Revolutionizing web development with simplicity.",
    },
    {
      title: "Supportify",
      description: "Redefining customer support with AI for your excellence.",
      isHighlight: true,
    },
    {
      title: "Strategize",
      description:
        "Your virtual CFO for financial strategies made with ChatGPT.",
    },
    {
      title: "Innovate",
      description: "Turn ideas into successful products seamlessly.",
      isSponsored: true,
    },
    {
      title: "Optimize",
      description: "Efficiency solutions for modern manufacturing.",
    },
    {
      title: "Propertify",
      description: "Smart real estate management and analytics.",
      isNew: true,
    },
    {
      title: "Marketify",
      description: "Navigate market trends with confidence.",
    },
    {
      title: "Techify",
      description: "Cutting-edge tech services for enterprise needs.",
      isSponsored: true,
    },
    {
      title: "Code Craft",
      description:
        "Streamlined web design platform for responsive, modern websites.",
    },
    {
      title: "Scoope",
      description:
        "Simplifying complex data analysis with intuitive visualization tools.",
    },
    {
      title: "Connectify",
      description:
        "Enhance your customer support with our integrated service suite.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};
