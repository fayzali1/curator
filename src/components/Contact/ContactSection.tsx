import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Contact Form Card */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Get in Contact
        </h2>
        <p className="text-gray-500 mb-6">
          If you have any questions, feedback, or need support, please
          don&apos;t hesitate to reach out.
        </p>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Name"
            className="bg-gray-50 border-gray-100 rounded-lg h-12 px-4"
          />
          <Input
            type="email"
            placeholder="Email"
            className="bg-gray-50 border-gray-100 rounded-lg h-12 px-4"
          />
          <Textarea
            placeholder="Message"
            className="min-h-[400px] bg-gray-50 border-gray-100 rounded-lg px-4 py-3 resize-none"
          />
          <Button className="w-full bg-gray-900 hover:bg-black text-white rounded-lg h-12 font-medium">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Reach Us Card */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Reach us</h2>
        <p className="text-gray-500 mb-6">
          If you have any questions, feedback, or need support, please
          don&apos;t hesitate to reach out.
        </p>
        <div className="h-[500px] rounded-lg overflow-hidden relative">
          <div className="absolute top-3 left-3 bg-white shadow-sm p-2 rounded-lg text-xs text-gray-700 z-10">
            <div className="font-medium">
              52°22&apos;33.2&quot;N 4°53&apos;28.7&quot;E
            </div>
            <div className="text-gray-500">9VGR+9G3 Amsterdam, Netherlands</div>
            <div className="mt-1 flex justify-between">
              <a href="#" className="text-blue-500">
                Directions
              </a>
              <a href="#" className="text-blue-500">
                View larger map
              </a>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19482.93896407939!2d4.876501621552371!3d52.37278234323946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c5213e1149%3A0xb3fa5db974f3887a!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1644872599447!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.1] contrast-[0.9]"
          ></iframe>

          <div className="absolute bottom-2 right-2 flex flex-col gap-1 z-10">
            <button className="bg-white w-8 h-8 rounded-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button className="bg-white w-8 h-8 rounded-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1">
            <img
              src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
              alt="Google"
              className="h-6"
            />
            <div className="text-xs text-gray-700">
              Map data ©2023 Google
              <span className="mx-2">|</span>
              <a href="#" className="text-gray-700">
                Terms
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="text-gray-700">
                Report a map error
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
