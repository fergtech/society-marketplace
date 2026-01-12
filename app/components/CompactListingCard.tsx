'use client';

import Image from 'next/image';
import { MockListing } from '../lib/mockData';
import { formatPrice, formatDistance, cn } from '../lib/utils';
import { Heart, MapPin, Eye } from 'lucide-react';
import { useState } from 'react';

interface CompactListingCardProps {
  listing: MockListing;
  onClick?: () => void;
}

export function CompactListingCard({ listing, onClick }: CompactListingCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-lg border overflow-hidden cursor-pointer hover:shadow-lg transition-all"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        
        {/* Price badge */}
        <div 
          className="absolute top-2 left-2 px-3 py-1 rounded-full text-white font-bold text-sm shadow-lg"
          style={{
            background: 'linear-gradient(135deg, hsl(142, 76%, 45%) 0%, hsl(25, 95%, 53%) 100%)'
          }}
        >
          {formatPrice(listing.price)}
        </div>

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-full backdrop-blur-sm transition-all",
            isFavorited ? "bg-red-500/90" : "bg-black/30 hover:bg-black/50"
          )}
        >
          <Heart 
            className={cn(
              "w-4 h-4",
              isFavorited ? "fill-white text-white" : "text-white"
            )} 
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Title */}
        <h3 className="font-semibold text-base line-clamp-2 min-h-[2.5rem]">
          {listing.title}
        </h3>

        {/* Location & Time */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{listing.location.distance}</span>
          </div>
          <span>•</span>
          <span>{formatDistance(listing.createdAt)}</span>
        </div>

        {/* Seller */}
        <div className="flex items-center gap-2 pt-1">
          <Image
            src={listing.seller.avatar}
            alt={listing.seller.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate flex items-center gap-1">
              {listing.seller.name}
              {listing.seller.verified && (
                <span className="text-blue-400 text-xs">✓</span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Eye className="w-3 h-3" />
            <span>{listing.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
