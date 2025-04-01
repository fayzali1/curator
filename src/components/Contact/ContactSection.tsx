import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Contact Form Card */}
      <Card className="p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Get in Contact</h2>
        <p className="text-muted-foreground mb-6">
          If you have any questions, feedback, or need support, please don't
          hesitate to reach out.
        </p>
        <div className="space-y-4">
          <Input type="text" placeholder="Name" className="bg-gray-100" />
          <Input type="email" placeholder="Email" className="bg-gray-100" />
          <Textarea
            placeholder="Message"
            className="min-h-[250px] bg-gray-100"
          />
          <Button className="w-full bg-slate-900 text-white">Sign Up</Button>
        </div>
      </Card>

      {/* Reach Us Card */}
      <Card className="p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Reach us</h2>
        <p className="text-muted-foreground mb-6">
          If you have any questions, feedback, or need support, please don't
          hesitate to reach out.
        </p>
        <div className="bg-gray-100 rounded-md h-[500px]">
          {/* Map or additional contact info would go here */}
        </div>
      </Card>
    </div>
  );
}
