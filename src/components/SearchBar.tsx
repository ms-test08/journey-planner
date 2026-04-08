import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(destination)}`);
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border p-2 flex flex-col md:flex-row gap-2">
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors">
        <MapPin className="w-5 h-5 text-primary shrink-0" />
        <div className="flex-1">
          <label className="text-xs font-medium text-muted-foreground block">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where are you going?"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
          />
        </div>
      </div>
      <div className="hidden md:block w-px bg-border" />
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
        <Calendar className="w-5 h-5 text-primary shrink-0" />
        <div>
          <label className="text-xs font-medium text-muted-foreground block">Dates</label>
          <span className="text-sm text-muted-foreground/60">Add dates</span>
        </div>
      </div>
      <div className="hidden md:block w-px bg-border" />
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
        <Users className="w-5 h-5 text-primary shrink-0" />
        <div>
          <label className="text-xs font-medium text-muted-foreground block">Travelers</label>
          <span className="text-sm text-muted-foreground/60">Add guests</span>
        </div>
      </div>
      <Button onClick={handleSearch} size="lg" className="rounded-xl px-8 gap-2">
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
      </Button>
    </div>
  );
};

export default SearchBar;
