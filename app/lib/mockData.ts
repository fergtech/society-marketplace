export interface MockListing {
  id: string;
  title: string;
  description: string;
  price: number | null;  // null means "Free"
  category: string;
  subcategory?: string;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'free';
  location: {
    city: string;
    state: string;
    distance?: string;  // e.g., "2.5 mi away"
  };
  images: string[];
  seller: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    verified: boolean;
  };
  views: number;
  favorites: number;
  createdAt: string;
  status: 'active' | 'sold' | 'pending';
}

export interface MockMessage {
  id: string;
  listingId: string;
  listingTitle: string;
  listingImage: string;
  otherUser: {
    id: string;
    name: string;
    avatar: string;
  };
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

export interface MockCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

// Sample listings
export const mockListings: MockListing[] = [
  {
    id: '1',
    title: 'Vintage Bike - Great Condition',
    description: 'Classic road bike, perfect for city commuting. Barely used, selling because I\'m moving.',
    price: 250,
    category: 'Vehicles',
    subcategory: 'Bicycles',
    condition: 'good',
    location: {
      city: 'Portland',
      state: 'OR',
      distance: '1.2 mi away'
    },
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800'
    ],
    seller: {
      id: 'u1',
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 4.8,
      verified: true
    },
    views: 142,
    favorites: 23,
    createdAt: '2026-01-10T14:30:00Z',
    status: 'active'
  },
  {
    id: '2',
    title: 'Free Couch - Must Pick Up Today',
    description: 'Moving out, need this gone ASAP! Comfy 3-seater, some wear but still solid.',
    price: null,
    category: 'Furniture',
    condition: 'fair',
    location: {
      city: 'Portland',
      state: 'OR',
      distance: '0.8 mi away'
    },
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'
    ],
    seller: {
      id: 'u2',
      name: 'Mike Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 4.5,
      verified: false
    },
    views: 89,
    favorites: 12,
    createdAt: '2026-01-11T09:15:00Z',
    status: 'active'
  },
  {
    id: '3',
    title: 'iPhone 14 Pro - Like New',
    description: '256GB, Space Black. Barely used, includes original box and accessories.',
    price: 850,
    category: 'Electronics',
    subcategory: 'Phones',
    condition: 'like-new',
    location: {
      city: 'Portland',
      state: 'OR',
      distance: '3.1 mi away'
    },
    images: [
      'https://images.unsplash.com/photo-1678652197070-28c130d7e16f?w=800',
      'https://images.unsplash.com/photo-1678652197253-f50c4ba4f760?w=800'
    ],
    seller: {
      id: 'u3',
      name: 'Jessica Park',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5.0,
      verified: true
    },
    views: 312,
    favorites: 67,
    createdAt: '2026-01-09T16:45:00Z',
    status: 'active'
  },
  {
    id: '4',
    title: 'Gardening Services - Local Initiative',
    description: 'Community gardening help! Will help set up raised beds, plant vegetables, etc. Supporting GreenPortland initiative.',
    price: 0,
    category: 'Services',
    subcategory: 'Gardening',
    condition: 'free',
    location: {
      city: 'Portland',
      state: 'OR',
      distance: '2.0 mi away'
    },
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800'
    ],
    seller: {
      id: 'u4',
      name: 'Community Garden Crew',
      avatar: 'https://i.pravatar.cc/150?img=8',
      rating: 4.9,
      verified: true
    },
    views: 201,
    favorites: 45,
    createdAt: '2026-01-08T11:20:00Z',
    status: 'active'
  }
];

export const mockCategories: MockCategory[] = [
  { id: 'electronics', name: 'Electronics', icon: '📱', count: 234 },
  { id: 'furniture', name: 'Furniture', icon: '🛋️', count: 156 },
  { id: 'vehicles', name: 'Vehicles', icon: '🚲', count: 89 },
  { id: 'services', name: 'Services', icon: '🛠️', count: 167 },
  { id: 'free', name: 'Free Stuff', icon: '🎁', count: 98 },
  { id: 'community', name: 'Community', icon: '🤝', count: 45 },
];

export const mockMessages: MockMessage[] = [
  {
    id: 'm1',
    listingId: '1',
    listingTitle: 'Vintage Bike - Great Condition',
    listingImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400',
    otherUser: {
      id: 'u5',
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?img=15'
    },
    lastMessage: 'Is this still available?',
    timestamp: '2026-01-11T10:30:00Z',
    unread: true
  },
  {
    id: 'm2',
    listingId: '3',
    listingTitle: 'iPhone 14 Pro - Like New',
    listingImage: 'https://images.unsplash.com/photo-1678652197070-28c130d7e16f?w=400',
    otherUser: {
      id: 'u6',
      name: 'Taylor Smith',
      avatar: 'https://i.pravatar.cc/150?img=20'
    },
    lastMessage: 'Can you do $800?',
    timestamp: '2026-01-10T18:15:00Z',
    unread: false
  }
];
