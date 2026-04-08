import { MapPin, Clock, Camera, Utensils, Bed, Plane } from "lucide-react";

const days = [
  { day: 1, title: "Arrival & Welcome", activities: [
    { time: "14:00", title: "Airport Pickup", desc: "Private transfer to resort", icon: Plane },
    { time: "16:00", title: "Hotel Check-in", desc: "5-star beachfront villa", icon: Bed },
    { time: "19:00", title: "Welcome Dinner", desc: "Traditional Balinese cuisine", icon: Utensils },
  ]},
  { day: 2, title: "Temple Tour", activities: [
    { time: "08:00", title: "Breakfast at resort", desc: "Buffet breakfast included", icon: Utensils },
    { time: "09:30", title: "Tanah Lot Temple", desc: "Guided tour of the sea temple", icon: Camera },
    { time: "14:00", title: "Uluwatu Temple", desc: "Cliff-top temple visit", icon: Camera },
    { time: "18:00", title: "Kecak Fire Dance", desc: "Traditional performance at sunset", icon: Camera },
  ]},
  { day: 3, title: "Rice Terraces & Villages", activities: [
    { time: "07:00", title: "Sunrise Yoga", desc: "Optional session at the resort", icon: Camera },
    { time: "09:00", title: "Tegallalang Terraces", desc: "Explore the iconic rice paddies", icon: Camera },
    { time: "12:00", title: "Local Village Lunch", desc: "Authentic Balinese cooking", icon: Utensils },
    { time: "15:00", title: "Coffee Plantation", desc: "Luwak coffee tasting experience", icon: Utensils },
  ]},
  { day: 4, title: "Beach Day", activities: [
    { time: "All Day", title: "Free Day at Nusa Dua", desc: "Relax on pristine beaches, optional water sports", icon: Camera },
    { time: "19:00", title: "Seafood BBQ", desc: "Dinner on the beach", icon: Utensils },
  ]},
];

const Itinerary = () => (
  <div className="section-container py-8">
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Trip Itinerary</h1>
      <p className="text-muted-foreground mt-1">Bali Paradise Getaway · Apr 15 – Apr 21, 2026</p>
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

      <div className="space-y-10">
        {days.map((day) => (
          <div key={day.day} className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10 shrink-0">
                {day.day}
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Day {day.day}</h2>
                <p className="text-sm text-muted-foreground">{day.title}</p>
              </div>
            </div>

            <div className="md:ml-14 space-y-3">
              {day.activities.map((act, i) => (
                <div key={i} className="travel-card p-4 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <act.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-medium text-primary">{act.time}</span>
                    </div>
                    <h3 className="font-medium text-foreground text-sm">{act.title}</h3>
                    <p className="text-xs text-muted-foreground">{act.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Itinerary;
