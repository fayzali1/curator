'use client';

import { SignIn } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/auth-dialog";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useState } from "react";

interface SignInDialogProps {
  redirectUrl?: string;
}

export function SignInDialog({ redirectUrl }: SignInDialogProps) {
  const [showSignIn, setShowSignIn] = useState(false);
  const fallbackUrl = redirectUrl || '/';

  return (
    <Dialog open={showSignIn} onOpenChange={setShowSignIn}>
      <DialogTrigger asChild>
        <Button className="flex-1 bg-[#0f172a] text-white hover:bg-[#1e293b]">
          Sign In
          <LogIn className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent 
        hideClose={true} 
        className="w-full md:max-w-[400px] xl:max-w-[600px] mx-auto flex justify-center items-center"
      >
        <SignIn 
          routing="hash"
          fallbackRedirectUrl={fallbackUrl}
        />
      </DialogContent>
    </Dialog>
  );
} 