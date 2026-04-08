import heroImg from "@/assets/hero-travel.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";
import destNY from "@/assets/dest-newyork.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import SearchBar from "@/components/SearchBar";
import TravelCard from "@/components/TravelCard";
import { ArrowRight, Shield, Headphones, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const destinations = [
  { name: "Bali", img: destBali, packages: 42 },
  { name: "Paris", img: destParis, packages: 38 },
  { name: "Tokyo", img: destTokyo, packages: 55 },
  { name: "New York", img: destNY, packages: 31 },
  { name: "Maldives", img: destMaldives, packages: 27 },
];

const featuredPackages = [
  { id: "1", image: destBali, title: "Bali Paradise Getaway", location: "Bali, Indonesia", price: 899, rating: 4.8, duration: "7 days · 6 nights", tag: "Best Seller" },
  { id: "2", image: destParis, title: "Romantic Paris Escape", location: "Paris, France", price: 1299, rating: 4.9, duration: "5 days · 4 nights", tag: "Popular" },
  { id: "3", image: destMaldives, title: "Maldives Luxury Resort", location: "Maldives", price: 2199, rating: 4.9, duration: "6 days · 5 nights" },
  { id: "4", image: destTokyo, title: "Tokyo Cultural Journey", location: "Tokyo, Japan", price: 1099, rating: 4.7, duration: "8 days · 7 nights" },
];

const features = [
  { icon: Shield, title: "Secure Booking", desc: "Your payments and data are always protected" },
  { icon: Headphones, title: "24/7 Support", desc: "Get help anytime, anywhere in the world" },
  { icon: CreditCard, title: "Best Price Guarantee", desc: "Find a lower price? We'll match it" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[540px] flex items-center">
      <img src={heroImg} alt="Santorini sunset" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      <div className="relative z-10 section-container w-full py-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Explore curated travel packages to the world's most stunning destinations.
          </p>
        </div>
        <div className="max-w-4xl">
          <SearchBar />
        </div>
      </div>
    </section>

    {/* Popular Destinations */}
    <section className="section-container py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Popular Destinations</h2>
          <p className="text-muted-foreground mt-1">Trending places our travelers love</p>
        </div>
        <Link to="/search" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {destinations.map((d) => (
          <Link to={`/search?q=${d.name}`} key={d.name} className="group relative rounded-xl overflow-hidden aspect-[3/4]">
            <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-semibold text-primary-foreground">{d.name}</h3>
              <p className="text-xs text-primary-foreground/70">{d.packages} packages</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Featured Packages */}
    <section className="bg-muted/40">
      <div className="section-container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Featured Packages</h2>
            <p className="text-muted-foreground mt-1">Hand-picked experiences for you</p>
          </div>
          <Link to="/search" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Browse all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg) => (
            <TravelCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section-container py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Index;
