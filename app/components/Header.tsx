'use client';

import Link from 'next/link';
import { Search, Menu, Bell, Plus } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-4">
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-marketplace-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">S+</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg">society+ Marketplace</h1>
              <p className="text-xs text-muted-foreground">Buy, sell, trade locally</p>
            </div>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-2xl mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for items, services, or categories..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Link href="/create" className="hidden sm:block">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Sell
            </Button>
          </Link>
          <button className="p-2 rounded-lg hover:bg-accent">
            <Bell className="w-5 h-5" />
          </button>
          <Link href="/profile">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">U</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search marketplace..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </header>
  );
}
