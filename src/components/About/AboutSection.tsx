import React from "react";
import { Plus } from "lucide-react";

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* About Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-14 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200"></div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">About</h2>
          <p className="text-gray-600 mb-8">
            Welcome to The Curator. Our template is designed for discerning
            users who appreciate the art of organizing and showcasing.
          </p>

          <div className="border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">The Stack</h3>
            <p className="text-gray-500 text-sm mb-5">
              Here our tool sets while we were building it.
            </p>

            <div className="space-y-3">
              <ToolItem
                name="Framer"
                description="Our web development tool."
                icon={<FramerIcon />}
              />
              <ToolItem
                name="Figma"
                description="Design on your canvas."
                icon={<FigmaIcon />}
              />
              <ToolItem
                name="Spline"
                description="3D Design is so is with it"
                icon={<SplineIcon />}
              />
              <ToolItem
                name="Arc Browser"
                description="That's where we got our inspiration"
                icon={<ArcBrowserIcon />}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-14 w-full bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200"></div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
          <p className="text-gray-600 mb-8">
            Find answers to some of the most common questions about The Curator
            template. If you have a question, feel free to reach out to us.
          </p>

          <div className="border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Questions</h3>
            <p className="text-gray-500 text-sm mb-5">
              Here is the top 4 frequently asked questions.
            </p>

            <div className="space-y-3">
              <FaqItem question="What is The Curator?" />
              <FaqItem question="Is The Curator mobile-responsive?" />
              <FaqItem question="How do I get started with The Curator?" />
              <FaqItem question="Do I need any technical skills to use it?" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="md:col-span-2 bg-gray-100 rounded-3xl p-8 mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Looking for more?
          </h3>
          <p className="text-gray-600">Contact us for specialized packages</p>
        </div>
        <button className="bg-gray-900 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-sm">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Contact Us
        </button>
      </div>
    </div>
  );
}

interface ToolItemProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

function ToolItem({ name, description, icon }: ToolItemProps) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50">
      <div className="w-12 h-12 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({ question }: { question: string }) {
  return (
    <div className="border border-gray-100 rounded-xl p-4 pr-3 flex justify-between items-center hover:bg-gray-50">
      <span className="font-medium text-gray-900">{question}</span>
      <button className="w-6 h-6 flex items-center justify-center rounded-md bg-white">
        <Plus className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  );
}

function FramerIcon() {
  return (
    <div className="bg-black rounded-xl w-full h-full flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 5H21V13H11V5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 13H21V21H11L21 13Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 21H21V29H11V21Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function FigmaIcon() {
  return (
    <div className="bg-black rounded-xl w-full h-full flex items-center justify-center overflow-hidden p-2">
      <svg width="24" height="24" viewBox="0 0 38 57" fill="none">
        <path
          d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"
          fill="#1ABCFE"
        />
        <path
          d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.5641 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.5641 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z"
          fill="#0ACF83"
        />
        <path
          d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.5641 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z"
          fill="#FF7262"
        />
        <path
          d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.5641 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.5641 1.00089 2.78249 2.78249C1.00089 4.5641 0 6.98044 0 9.5Z"
          fill="#F24E1E"
        />
        <path
          d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.5641 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.5641 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z"
          fill="#A259FF"
        />
      </svg>
    </div>
  );
}

function SplineIcon() {
  return (
    <div className="rounded-xl w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function ArcBrowserIcon() {
  return (
    <div className="rounded-xl w-full h-full flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 5L10 10M10 10L5 15M10 10H16M16 10L19 7M16 10L19 13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
