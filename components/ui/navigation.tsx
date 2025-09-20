"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const closeSheet = () => {
    setIsOpen(false);
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className={cn(
                "bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:from-pink-700 hover:to-purple-700 hover:shadow-lg",
                isActive('/') && !isActive('/blog') && !isActive('/about') && "ring-2 ring-pink-300"
              )}
            >
              Track Your Pregnancy
            </Link>
            <Link 
              href="/tools" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-pink-600",
                isActive('/tools') ? "text-pink-600" : "text-gray-600"
              )}
            >
              Tools
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

          {/* Mobile Sheet Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <Link 
                  href="/" 
                  className={cn(
                    "bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-3 rounded-full text-sm font-medium text-center transition-all hover:from-pink-700 hover:to-purple-700 hover:shadow-lg",
                    isActive('/') && !isActive('/blog') && !isActive('/about') && "ring-2 ring-pink-300"
                  )}
                  onClick={closeSheet}
                >
                  Track Your Pregnancy
                </Link>
                <Link 
                  href="/tools" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-pink-600 px-3 py-2 rounded-md",
                    isActive('/tools') ? "text-pink-600 bg-pink-50" : "text-gray-600"
                  )}
                  onClick={closeSheet}
                >
                  Tools
                </Link>
                <Link 
                  href="/blog" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-pink-600 px-3 py-2 rounded-md",
                    isActive('/blog') ? "text-pink-600 bg-pink-50" : "text-gray-600"
                  )}
                  onClick={closeSheet}
                >
                  Blog
                </Link>
                <Link 
                  href="/about" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-pink-600 px-3 py-2 rounded-md",
                    isActive('/about') ? "text-pink-600 bg-pink-50" : "text-gray-600"
                  )}
                  onClick={closeSheet}
                >
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}