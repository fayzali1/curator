import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Volume2 } from "lucide-react";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {/* Row 1 */}
      <ProductCard
        name="Quantify"
        description="AI-driven insights into consumer behavior."
        iconColor="blue-purple"
        isNew
      />
      <ProductCard
        name="Webify"
        description="Revolutionizing web development with simplicity."
        iconColor="pink"
      />
      <ProductCard
        name="Supportify"
        description="Redefining customer support with AI for your excellence."
        iconColor="purple-blue"
        isHighlight
      />

      {/* Row 2 */}
      <ProductCard
        name="Strategize"
        description="Your virtual CFO for financial strategies made with ChatGPT."
        iconColor="orange"
      />
      <ProductCard
        name="Innovate"
        description="Turn ideas into successful products seamlessly."
        iconColor="colorful"
        isSponsored
      />
      <ProductCard
        name="Optimize"
        description="Efficiency solutions for modern manufacturing."
        iconColor="pink-white"
      />

      {/* Row 3 */}
      <ProductCard
        name="Propertify"
        description="Smart real estate management and analytics."
        iconColor="blue-pink"
        isNew
      />
      <ProductCard
        name="Marketify"
        description="Navigate market trends with confidence."
        iconColor="pink-blue"
      />
      <ProductCard
        name="Techify"
        description="Cutting-edge tech services for enterprise needs."
        iconColor="black-red"
        isSponsored
      />

      {/* Row 4 */}
      <ProductCard
        name="Code Craft"
        description="Streamlined web design platform for responsive, modern websites."
        iconColor="black-text"
      />
      <ProductCard
        name="Scoope"
        description="Simplifying complex data analysis with intuitive visualization tools."
        iconColor="blue-gradient"
      />
      <ProductCard
        name="Connectify"
        description="Enhance your customer support with our integrated service suite."
        iconColor="pink-gradient"
      />
    </div>
  );
}

interface ProductCardProps {
  name: string;
  description: string;
  iconColor: string;
  isNew?: boolean;
  isSponsored?: boolean;
  isHighlight?: boolean;
}

function ProductCard({
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
              className="text-purple-600"
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
          <Badge className="bg-blue-50 hover:bg-blue-50 text-blue-600 flex items-center gap-1.5 px-2.5 py-1 font-normal text-xs rounded-md border-none shadow-sm">
            <Volume2 className="h-3 w-3" /> Sponsored
          </Badge>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-1 text-gray-900">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      {/* Read more button with slower transition */}
      <div className="absolute bottom-5 right-5 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <button className="bg-gray-800 hover:bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-md">
          Read more
        </button>
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
