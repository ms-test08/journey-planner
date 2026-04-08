import { Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const bookings = [
  { id: "BK-001", package: "Bali Paradise Getaway", date: "Apr 15, 2026", travelers: 2, total: "$1,906", status: "Confirmed" },
  { id: "BK-002", package: "Romantic Paris Escape", date: "Jun 10, 2026", travelers: 2, total: "$2,706", status: "Pending" },
  { id: "BK-003", package: "Tokyo Cultural Journey", date: "Dec 1, 2025", travelers: 1, total: "$1,231", status: "Completed" },
  { id: "BK-004", package: "New York Explorer", date: "Sep 20, 2025", travelers: 3, total: "$4,900", status: "Cancelled" },
];

const statusColor: Record<string, string> = {
  Confirmed: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Completed: "bg-primary/10 text-primary",
  Cancelled: "bg-destructive/10 text-destructive",
};

const BookingHistory = () => (
  <div className="section-container py-8">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Booking History</h1>
        <p className="text-muted-foreground text-sm mt-1">View and manage all your bookings</p>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input className="travel-input pl-10 w-full sm:w-64" placeholder="Search bookings..." />
      </div>
    </div>

    {/* Desktop table */}
    <div className="hidden md:block travel-card overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Booking ID</th>
            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Package</th>
            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Date</th>
            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Travelers</th>
            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Total</th>
            <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Status</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {bookings.map((b) => (
            <tr key={b.id} className="hover:bg-muted/20 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-foreground">{b.id}</td>
              <td className="px-4 py-3 text-sm text-foreground">{b.package}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{b.date}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{b.travelers}</td>
              <td className="px-4 py-3 text-sm font-medium text-foreground">{b.total}</td>
              <td className="px-4 py-3"><span className={`travel-badge ${statusColor[b.status]}`}>{b.status}</span></td>
              <td className="px-4 py-3"><Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <div className="md:hidden space-y-3">
      {bookings.map((b) => (
        <div key={b.id} className="travel-card p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{b.id}</span>
            <span className={`travel-badge ${statusColor[b.status]}`}>{b.status}</span>
          </div>
          <h3 className="font-medium text-foreground">{b.package}</h3>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{b.date}</span>
            <span className="font-medium text-foreground">{b.total}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BookingHistory;
