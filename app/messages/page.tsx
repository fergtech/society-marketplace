import { mockMessages } from '../lib/mockData';
import { formatDistance } from '../lib/utils';
import Image from 'next/image';

export default function MessagesPage() {
  return (
    <div className="min-h-screen page-container">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold p-4">Messages</h1>
        
        <div className="divide-y divide-border">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className="p-4 hover:bg-card/50 cursor-pointer transition-colors"
            >
              <div className="flex gap-3">
                <Image
                  src={message.otherUser.avatar}
                  alt={message.otherUser.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold truncate">
                      {message.otherUser.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {formatDistance(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate mb-1">
                    {message.listingTitle}
                  </p>
                  <p className={`text-sm truncate ${message.unread ? 'font-semibold' : ''}`}>
                    {message.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
