"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {HeroUIProvider} from '@heroui/react';
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    // ...
  });

  return (
    <HeroUIProvider>
      <Toaster position="top-right" />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </HeroUIProvider>
  );
};

export default Providers;
