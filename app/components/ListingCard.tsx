'use client';

import Image from 'next/image';
import { MockListing } from '../lib/mockData';
import { formatPrice, formatDistance, cn } from '../lib/utils';
import { Heart, MapPin, Eye } from 'lucide-react';
import { useState } from 'react';

interface ListingCardProps {
  listing: MockListing;
  onClick?: () => void;
}

export function ListingCard({ listing, onClick }: ListingCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div 
      className="relative w-full h-screen snap-start snap-always flex-shrink-0 bg-black"
      onClick={onClick}
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

        {/* Top actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            className={cn(
              "p-2 rounded-full backdrop-blur-sm transition-all",
              isFavorited ? "bg-red-500/90" : "bg-black/30"
            )}
          >
            <Heart 
              className={cn(
                "w-6 h-6",
                isFavorited ? "fill-white text-white" : "text-white"
              )} 
            />
          </button>
        </div>

        {/* Content overlay - bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
          {/* Price badge */}
          <div 
            className="inline-block px-4 py-2 rounded-full text-white font-bold text-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(142, 76%, 45%) 0%, hsl(25, 95%, 53%) 100%)'
            }}
          >
            {formatPrice(listing.price)}
          </div>

          {/* Title */}
          <h2 className="text-white font-bold text-2xl line-clamp-2">
            {listing.title}
          </h2>

          {/* Description */}
          <p className="text-white/90 text-sm line-clamp-2">
            {listing.description}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{listing.location.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{listing.views}</span>
            </div>
            <span>•</span>
            <span>{formatDistance(listing.createdAt)}</span>
          </div>

          {/* Seller info */}
          <div className="flex items-center gap-3 pt-2">
            <Image
              src={listing.seller.avatar}
              alt={listing.seller.name}
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <div>
              <p className="text-white font-semibold flex items-center gap-1">
                {listing.seller.name}
                {listing.seller.verified && (
                  <span className="text-blue-400">✓</span>
                )}
              </p>
              <p className="text-white/70 text-xs">
                ⭐ {listing.seller.rating} rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
