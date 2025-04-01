'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState, useEffect } from 'react';
import { persistQueryClient } from '@tanstack/query-persist-client-core';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(true);
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 10,
          refetchOnWindowFocus: false,
          gcTime: 1000 * 60 * 60 * 24,
        },
      },
    });
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHydrated(false);
      const persister = createSyncStoragePersister({
        storage: window.localStorage,
      });
      
      const [restore, hydratePromise] = persistQueryClient({
        queryClient,
        persister,
        maxAge: 1000 * 60 * 60 * 24,
        hydrateOptions: {
          defaultOptions: {
            queries: { retry: false },
          },
        },
      });

      hydratePromise.finally(() => setIsHydrated(true));
    }
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
} 