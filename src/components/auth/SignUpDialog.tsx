'use client';

import { SignUp } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/auth-dialog";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useState } from "react";

interface SignUpDialogProps {
  redirectUrl?: string;
}

export function SignUpDialog({ redirectUrl }: SignUpDialogProps) {
  const [showSignUp, setShowSignUp] = useState(false);
  const fallbackUrl = redirectUrl || '/';

  return (
    <Dialog open={showSignUp} onOpenChange={setShowSignUp}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="flex-1"
        >
          Create Account
          <UserPlus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent 
        hideClose={true} 
        className="w-full md:max-w-[400px] xl:max-w-[600px] mx-auto flex justify-center items-center"
      >
        <SignUp 
          routing="hash"
          fallbackRedirectUrl={fallbackUrl}
        />
      </DialogContent>
    </Dialog>
  );
} 