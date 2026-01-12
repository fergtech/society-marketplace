'use client';

import { ArrowLeftRight } from 'lucide-react';
import { useState } from 'react';

export function AppSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg hover:bg-card transition-all"
      >
        <ArrowLeftRight className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden">
          <a
            href="https://society.plus"
            className="block px-4 py-3 hover:bg-accent transition-colors"
          >
            <div className="font-semibold">society+</div>
            <div className="text-xs text-muted-foreground">Civic engagement</div>
          </a>
          <div className="block px-4 py-3 bg-marketplace-gradient-subtle">
            <div className="font-semibold text-primary">Marketplace</div>
            <div className="text-xs text-muted-foreground">Current app</div>
          </div>
        </div>
      )}
    </div>
  );
}
