import { Toast } from "@/components/ui/toast";
import { Loader2 } from "lucide-react";

interface LoadingToastProps {
  status: 'sending' | 'success' | 'error';
  message: string;
}

export function LoadingToast({ status, message }: LoadingToastProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'sending' && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}
      {status === 'success' && (
        <div className="h-2 w-2 rounded-full bg-green-500" />
      )}
      {status === 'error' && (
        <div className="h-2 w-2 rounded-full bg-red-500" />
      )}
      <span className="text-sm">{message}</span>
    </div>
  );
} 