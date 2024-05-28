import { Outlet } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks';

export default function Layout() {
  return (
    <div className="p-4">
      <h1>Auth Example using RouterProvider</h1>

      <p>
        This example demonstrates a simple login flow with three pages: a public page, a protected page, and a login
        page. In order to see the protected page, you must first login. Pretty standard stuff.
      </p>

      <p>
        First, visit the public page. Then, visit the protected page. You're not yet logged in, so you are redirected to
        the login page. After you login, you are redirected back to the protected page.
      </p>

      <p>
        Notice the URL change each time. If you click the back button at this point, would you expect to go back to the
        login page? No! You're already logged in. Try it out, and you'll see you go back to the page you visited just
        *before* logging in, the public page.
      </p>
      <ModeToggle />

      <Outlet />
    </div>
  );
}

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
