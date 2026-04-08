import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TravelCard from "@/components/TravelCard";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import destBali from "@/assets/dest-bali.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";
import destNY from "@/assets/dest-newyork.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";

const allPackages = [
  { id: "1", image: destBali, title: "Bali Paradise Getaway", location: "Bali, Indonesia", price: 899, rating: 4.8, duration: "7 days", tag: "Best Seller", type: "Beach" },
  { id: "2", image: destParis, title: "Romantic Paris Escape", location: "Paris, France", price: 1299, rating: 4.9, duration: "5 days", tag: "Popular", type: "City" },
  { id: "3", image: destMaldives, title: "Maldives Luxury Resort", location: "Maldives", price: 2199, rating: 4.9, duration: "6 days", type: "Beach" },
  { id: "4", image: destTokyo, title: "Tokyo Cultural Journey", location: "Tokyo, Japan", price: 1099, rating: 4.7, duration: "8 days", type: "City" },
  { id: "5", image: destNY, title: "New York City Explorer", location: "New York, USA", price: 1499, rating: 4.6, duration: "5 days", type: "City" },
  { id: "6", image: destBali, title: "Bali Adventure Tour", location: "Bali, Indonesia", price: 749, rating: 4.5, duration: "5 days", type: "Adventure" },
];

const priceRanges = ["Under $1000", "$1000–$1500", "$1500–$2000", "Over $2000"];
const types = ["Beach", "City", "Adventure", "Luxury"];

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filtered = allPackages.filter((p) => {
    if (selectedType && p.type !== selectedType) return false;
    if (query && !p.title.toLowerCase().includes(query.toLowerCase()) && !p.location.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="section-container py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {query ? `Results for "${query}"` : "All Packages"}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{filtered.length} packages found</p>
        </div>
        <Button variant="outline" size="sm" className="md:hidden gap-2" onClick={() => setShowFilters(!showFilters)}>
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </Button>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <aside className={`${showFilters ? "fixed inset-0 z-50 bg-background p-6 overflow-auto" : "hidden"} md:block md:relative md:w-56 shrink-0`}>
          <div className="flex items-center justify-between md:hidden mb-4">
            <h2 className="font-semibold text-foreground">Filters</h2>
            <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" /></button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Type</h3>
              <div className="space-y-2">
                {types.map((t) => (
                  <label key={t} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === t}
                      onChange={() => setSelectedType(selectedType === t ? null : t)}
                      className="accent-primary"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((r) => (
                  <label key={r} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="accent-primary" />
                    {r}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Rating</h3>
              <div className="space-y-2">
                {["4.5+", "4.0+", "3.5+"].map((r) => (
                  <label key={r} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="accent-primary" />
                    {r} stars
                  </label>
                ))}
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 md:hidden" onClick={() => setShowFilters(false)}>Apply Filters</Button>
        </aside>

        {/* Results Grid */}
        <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <TravelCard key={pkg.id} {...pkg} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="text-lg font-medium text-foreground mb-2">No packages found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
