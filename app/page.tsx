'use client';

import { CompactListingCard } from './components/CompactListingCard';
import { mockListings } from './lib/mockData';

export default function HomePage() {
  return (
    <div className="container px-4 py-6 pb-24 md:pb-8">
      {/* Grid of listings */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mockListings.map((listing) => (
          <CompactListingCard
            key={listing.id}
            listing={listing}
            onClick={() => {
              // Future: Navigate to detail page
              console.log('Clicked listing:', listing.id);
            }}
          />
        ))}
      </div>

      {/* Load more */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground">Showing {mockListings.length} listings</p>
      </div>
    </div>
  );
}
