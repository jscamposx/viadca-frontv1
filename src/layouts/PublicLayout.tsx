import { Outlet, ScrollRestoration } from 'react-router-dom';

import ThemeToggle from '@/shared/ui/ThemeToggle';

export const PublicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-brand selection:text-brand-foreground">
   
        <ThemeToggle />
    

      <main className="flex-1 ">
        <Outlet />
      </main>

  
      <ScrollRestoration />
    </div>
  );
};