import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Clock, Users, Calendar, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import destBali from "@/assets/dest-bali.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";

const packages: Record<string, any> = {
  "1": { title: "Bali Paradise Getaway", location: "Bali, Indonesia", price: 899, rating: 4.8, reviews: 234, duration: "7 days · 6 nights", images: [destBali, destMaldives, destParis], description: "Experience the magic of Bali with this all-inclusive resort package. Explore ancient temples, lush rice terraces, and pristine beaches.", includes: ["5-star resort accommodation", "Daily breakfast & dinner", "Airport transfers", "Guided temple tour", "Spa treatment", "Snorkeling excursion"], itinerary: [{ day: 1, title: "Arrival & Welcome", desc: "Airport pickup, hotel check-in, welcome dinner" }, { day: 2, title: "Temple Tour", desc: "Visit Tanah Lot and Uluwatu temples" }, { day: 3, title: "Rice Terraces", desc: "Explore Tegallalang rice terraces and local villages" }, { day: 4, title: "Beach Day", desc: "Free day at Nusa Dua beach, optional water sports" }, { day: 5, title: "Spa & Culture", desc: "Traditional Balinese spa and dance show" }, { day: 6, title: "Adventure", desc: "Mount Batur sunrise trek or snorkeling" }, { day: 7, title: "Departure", desc: "Farewell breakfast, airport transfer" }] },
};

const fallback = packages["1"];

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = packages[id || ""] || fallback;

  return (
    <div className="section-container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/search" className="hover:text-foreground">Packages</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground">{pkg.title}</span>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 rounded-2xl overflow-hidden">
        <div className="md:col-span-2 aspect-[16/10]">
          <img src={pkg.images[0]} alt={pkg.title} className="w-full h-full object-cover" />
        </div>
        <div className="hidden md:grid grid-rows-2 gap-3">
          <img src={pkg.images[1]} alt="" className="w-full h-full object-cover rounded-none" />
          <img src={pkg.images[2]} alt="" className="w-full h-full object-cover rounded-none" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" /> {pkg.location}
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{pkg.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-warning text-warning" /> {pkg.rating} ({pkg.reviews} reviews)</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-muted-foreground" /> {pkg.duration}</span>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">About this package</h2>
            <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {pkg.includes.map((item: string) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-success shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Itinerary</h2>
            <div className="space-y-4">
              {pkg.itinerary.map((day: any) => (
                <div key={day.day} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">{day.day}</span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-medium text-foreground">{day.title}</h3>
                    <p className="text-sm text-muted-foreground">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Booking Card */}
        <div className="lg:col-span-1">
          <div className="travel-card p-6 sticky top-24 space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-foreground">${pkg.price}</span>
              <span className="text-muted-foreground">/person</span>
            </div>
            <div className="space-y-3">
              <div className="travel-input flex items-center gap-2 cursor-pointer">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Select dates</span>
              </div>
              <div className="travel-input flex items-center gap-2 cursor-pointer">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">2 travelers</span>
              </div>
            </div>
            <div className="border-t border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">${pkg.price} × 2 travelers</span><span className="text-foreground">${pkg.price * 2}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Taxes & fees</span><span className="text-foreground">${Math.round(pkg.price * 0.12)}</span></div>
              <div className="flex justify-between font-semibold border-t border-border pt-2"><span className="text-foreground">Total</span><span className="text-foreground">${pkg.price * 2 + Math.round(pkg.price * 0.12)}</span></div>
            </div>
            <Link to="/booking">
              <Button className="w-full" size="lg">Book Now</Button>
            </Link>
            <p className="text-xs text-center text-muted-foreground">Free cancellation up to 48 hours before</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
