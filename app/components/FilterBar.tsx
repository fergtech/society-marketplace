'use client';

import { mockCategories } from '../lib/mockData';
import { SlidersHorizontal } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="sticky top-16 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-3">
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium whitespace-nowrap">
            All
          </button>
          {mockCategories.map((category) => (
            <button
              key={category.id}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 font-medium whitespace-nowrap transition-colors"
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-accent font-medium whitespace-nowrap transition-colors ml-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>
    </div>
  );
}
