"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className={cn("bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50", className)}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Image 
                src="/baby.svg" 
                alt="Pregnancy Tracker" 
                width={32} 
                height={32} 
                className="rounded-full" 
              />
              <div>
                <h1 className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Your Journey
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">Pregnancy Tracker</p>
              </div>
            </Link>
          </div>
          
          <nav className="flex items-center gap-6">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-pink-600",
                isActive('/') && !isActive('/blog') && !isActive('/about')
                  ? "text-pink-600" 
                  : "text-gray-600"
              )}
            >
              Tracker
            </Link>
            <Link 
              href="/blog" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-pink-600",
                isActive('/blog') ? "text-pink-600" : "text-gray-600"
              )}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-pink-600",
                isActive('/about') ? "text-pink-600" : "text-gray-600"
              )}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}