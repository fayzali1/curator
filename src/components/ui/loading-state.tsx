import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState = () => {
  return (
    <div className="container flex items-center justify-center h-[calc(50vh)]">
      <Loader2 className="w-6 h-6 animate-spin mr-2" />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingState;
