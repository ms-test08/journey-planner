import { Plane, Calendar, MapPin, ChevronRight, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import destBali from "@/assets/dest-bali.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";

const upcoming = [
  { id: "1", title: "Bali Paradise Getaway", location: "Bali, Indonesia", date: "Apr 15 – Apr 21, 2026", image: destBali, status: "Confirmed" },
  { id: "2", title: "Romantic Paris Escape", location: "Paris, France", date: "Jun 10 – Jun 14, 2026", image: destParis, status: "Pending" },
];

const past = [
  { id: "3", title: "Tokyo Cultural Journey", location: "Tokyo, Japan", date: "Dec 1 – Dec 8, 2025", image: destTokyo, rating: 4.8 },
];

const UserDashboard = () => (
  <div className="section-container py-8">
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Welcome back, John 👋</h1>
      <p className="text-muted-foreground mt-1">Manage your trips and bookings</p>
    </div>

    {/* Quick Actions */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {[
        { label: "Search Trips", icon: Plane, to: "/search" },
        { label: "My Bookings", icon: Calendar, to: "/bookings" },
        { label: "Itineraries", icon: MapPin, to: "/itinerary" },
        { label: "View All", icon: ChevronRight, to: "/search" },
      ].map((a) => (
        <Link key={a.label} to={a.to} className="travel-card p-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <a.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">{a.label}</span>
        </Link>
      ))}
    </div>

    {/* Upcoming */}
    <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Trips</h2>
    <div className="space-y-4 mb-10">
      {upcoming.map((trip) => (
        <div key={trip.id} className="travel-card flex flex-col sm:flex-row overflow-hidden">
          <img src={trip.image} alt={trip.title} className="w-full sm:w-48 h-32 object-cover" />
          <div className="p-4 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-semibold text-foreground">{trip.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {trip.location}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><Clock className="w-3 h-3" /> {trip.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`travel-badge ${trip.status === "Confirmed" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                {trip.status}
              </span>
              <Link to={`/itinerary`}>
                <Button variant="outline" size="sm">View Itinerary</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Past */}
    <h2 className="text-lg font-semibold text-foreground mb-4">Past Trips</h2>
    <div className="space-y-4">
      {past.map((trip) => (
        <div key={trip.id} className="travel-card flex flex-col sm:flex-row overflow-hidden opacity-80">
          <img src={trip.image} alt={trip.title} className="w-full sm:w-48 h-32 object-cover" />
          <div className="p-4 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-semibold text-foreground">{trip.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {trip.location}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><Clock className="w-3 h-3" /> {trip.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="font-medium text-foreground">{trip.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UserDashboard;
