import { useState } from "react";
import { Plus, Pencil, Trash2, Search, ToggleLeft, ToggleRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialPackages = [
  { id: "1", name: "Bali Paradise Getaway", destination: "Bali", price: 899, duration: "7 days", status: true, bookings: 156 },
  { id: "2", name: "Romantic Paris Escape", destination: "Paris", price: 1299, duration: "5 days", status: true, bookings: 98 },
  { id: "3", name: "Maldives Luxury Resort", destination: "Maldives", price: 2199, duration: "6 days", status: true, bookings: 67 },
  { id: "4", name: "Tokyo Cultural Journey", destination: "Tokyo", price: 1099, duration: "8 days", status: false, bookings: 42 },
  { id: "5", name: "New York City Explorer", destination: "New York", price: 1499, duration: "5 days", status: true, bookings: 83 },
];

const PackageManagement = () => {
  const [packages, setPackages] = useState(initialPackages);
  const [showModal, setShowModal] = useState(false);

  const toggleStatus = (id: string) => {
    setPackages((prev) => prev.map((p) => (p.id === id ? { ...p, status: !p.status } : p)));
  };

  return (
    <div className="section-container py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Package Management</h1>
          <p className="text-muted-foreground text-sm mt-1">Create and manage travel packages</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input className="travel-input pl-10 w-full sm:w-56" placeholder="Search packages..." />
          </div>
          <Button className="gap-2" onClick={() => setShowModal(true)}>
            <Plus className="w-4 h-4" /> Add Package
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="travel-card overflow-hidden overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Package</th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Destination</th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Price</th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Duration</th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Bookings</th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {packages.map((p) => (
              <tr key={p.id} className="hover:bg-muted/20 transition-colors">
                <td className="px-4 py-3 text-sm font-medium text-foreground">{p.name}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{p.destination}</td>
                <td className="px-4 py-3 text-sm text-foreground">${p.price}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{p.duration}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{p.bookings}</td>
                <td className="px-4 py-3">
                  <button onClick={() => toggleStatus(p.id)} className="flex items-center gap-1">
                    {p.status ? (
                      <ToggleRight className="w-6 h-6 text-success" />
                    ) : (
                      <ToggleLeft className="w-6 h-6 text-muted-foreground" />
                    )}
                    <span className={`text-xs ${p.status ? "text-success" : "text-muted-foreground"}`}>
                      {p.status ? "Active" : "Inactive"}
                    </span>
                  </button>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm"><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-foreground/40 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl border border-border shadow-xl w-full max-w-lg animate-fade-in">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Add New Package</h2>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Package Name</label>
                <input className="travel-input w-full" placeholder="e.g. Bali Paradise Getaway" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Destination</label>
                  <input className="travel-input w-full" placeholder="e.g. Bali" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Price ($)</label>
                  <input className="travel-input w-full" type="number" placeholder="899" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Duration</label>
                <input className="travel-input w-full" placeholder="e.g. 7 days" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Description</label>
                <textarea className="travel-input w-full min-h-[80px]" placeholder="Package description..." />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-border">
              <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
              <Button onClick={() => setShowModal(false)}>Create Package</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageManagement;
