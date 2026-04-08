import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface TravelCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  duration: string;
  tag?: string;
}

const TravelCard = ({ id, image, title, location, price, rating, duration, tag }: TravelCardProps) => (
  <Link to={`/package/${id}`} className="travel-card group overflow-hidden flex flex-col">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {tag && (
        <span className="absolute top-3 left-3 travel-badge bg-primary text-primary-foreground">
          {tag}
        </span>
      )}
    </div>
    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
        <MapPin className="w-3 h-3" />
        {location}
      </div>
      <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{title}</h3>
      <p className="text-xs text-muted-foreground mb-3">{duration}</p>
      <div className="mt-auto flex items-center justify-between">
        <div>
          <span className="text-lg font-bold text-foreground">${price}</span>
          <span className="text-xs text-muted-foreground"> /person</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-warning text-warning" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default TravelCard;
