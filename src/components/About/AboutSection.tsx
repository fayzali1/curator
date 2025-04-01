import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <div className="space-y-8">
      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About section */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          {/* Decorative banner */}
          <div className="h-16 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-t-lg"></div>

          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900">About</h2>
            <p className="mt-4 text-gray-600">
              Welcome to The Curator. Our template is designed for discerning
              users who appreciate the art of organizing and showcasing.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">The Stack</h3>
              <p className="text-gray-600 mt-1">
                Here our tool sets while we were building it.
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-black w-10 h-10 rounded-md flex-shrink-0"></div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Framer</h4>
                    <p className="text-sm text-gray-600">
                      Our web development tool.
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-black w-10 h-10 rounded-md flex-shrink-0"></div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Figma</h4>
                    <p className="text-sm text-gray-600">
                      Design on your canvas.
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-black w-10 h-10 rounded-md flex-shrink-0"></div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Spline</h4>
                    <p className="text-sm text-gray-600">
                      3D Design is so is with it
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-black w-10 h-10 rounded-md flex-shrink-0"></div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Arc Browser</h4>
                    <p className="text-sm text-gray-600">
                      That's where we got our inspiration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          {/* Decorative banner */}
          <div className="h-16 bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-500 rounded-t-lg"></div>

          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
            <p className="mt-4 text-gray-600">
              Find answers to some of the most common questions about The
              Curator template. If you have a question, feel free to reach out
              to us.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Questions</h3>
              <p className="text-gray-600 mt-1">
                Here is the top 4 frequently asked questions.
              </p>

              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem
                  value="item-1"
                  className="border rounded-lg px-4 mb-2"
                >
                  <AccordionTrigger className="py-4 font-medium">
                    What is The Curator?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    The Curator is a template designed to help you organize and
                    showcase content in an elegant way.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border rounded-lg px-4 mb-2"
                >
                  <AccordionTrigger className="py-4 font-medium">
                    Is The Curator mobile-responsive?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    Yes, The Curator is fully responsive and works seamlessly
                    across desktop, tablet, and mobile devices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border rounded-lg px-4 mb-2"
                >
                  <AccordionTrigger className="py-4 font-medium">
                    How do I get started with The Curator?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    Getting started is easy. Simply install the template,
                    customize the content, and you're ready to go.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border rounded-lg px-4 mb-2"
                >
                  <AccordionTrigger className="py-4 font-medium">
                    Do I need any technical skills to use it?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    Basic familiarity with web development concepts will be
                    helpful, but our documentation makes it accessible for
                    everyone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Looking for more?
          </h3>
          <p className="text-gray-600 mt-1">
            Contact us for specialized packages
          </p>
        </div>
        <Button className="mt-4 md:mt-0 bg-black text-white hover:bg-gray-800 px-6">
          <Mail className="w-4 h-4 mr-2" />
          Contact Us
        </Button>
      </div>

      <div className="flex justify-end items-center text-sm text-gray-500">
        <span className="mr-1">Made in Framer</span>
      </div>
    </div>
  );
};
