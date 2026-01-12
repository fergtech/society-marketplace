import { mockCategories } from '../lib/mockData';

export default function ExplorePage() {
  return (
    <div className="min-h-screen page-container p-4">
      <h1 className="text-3xl font-bold mb-6">Explore Categories</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockCategories.map((category) => (
          <div
            key={category.id}
            className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all cursor-pointer"
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <h3 className="font-semibold">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.count} items</p>
          </div>
        ))}
      </div>
    </div>
  );
}
