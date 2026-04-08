import { TrendingUp, Users, Package, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Revenue", value: "$124,500", change: "+12.5%", up: true, icon: DollarSign },
  { label: "Total Bookings", value: "1,247", change: "+8.2%", up: true, icon: Package },
  { label: "Active Users", value: "3,890", change: "+15.3%", up: true, icon: Users },
  { label: "Conversion Rate", value: "3.2%", change: "-0.4%", up: false, icon: TrendingUp },
];

const monthlyRevenue = [
  { month: "Jan", revenue: 8200 }, { month: "Feb", revenue: 9100 }, { month: "Mar", revenue: 10500 },
  { month: "Apr", revenue: 12300 }, { month: "May", revenue: 11800 }, { month: "Jun", revenue: 14200 },
];

const bookingsByType = [
  { type: "Beach", bookings: 420 }, { type: "City", bookings: 380 }, { type: "Adventure", bookings: 290 },
  { type: "Luxury", bookings: 180 }, { type: "Cultural", bookings: 150 },
];

const recentActivity = [
  { user: "Sarah M.", action: "Booked Bali Paradise", time: "2 min ago" },
  { user: "James K.", action: "Cancelled NYC Explorer", time: "15 min ago" },
  { user: "Emily R.", action: "Booked Paris Escape", time: "1 hour ago" },
  { user: "Michael T.", action: "Payment received", time: "2 hours ago" },
];

const AdminDashboard = () => (
  <div className="section-container py-8">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Overview of your travel platform</p>
      </div>
      <Link to="/admin/packages">
        <Button size="sm">Manage Packages</Button>
      </Link>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((s) => (
        <div key={s.label} className="travel-card p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <span className={`text-xs font-medium flex items-center gap-0.5 ${s.up ? "text-success" : "text-destructive"}`}>
              {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              {s.change}
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Charts */}
    <div className="grid lg:grid-cols-2 gap-6 mb-8">
      <div className="travel-card p-6">
        <h3 className="font-semibold text-foreground mb-4">Monthly Revenue</h3>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
            <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="travel-card p-6">
        <h3 className="font-semibold text-foreground mb-4">Bookings by Type</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={bookingsByType}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="type" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
            <Bar dataKey="bookings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="travel-card p-6">
      <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recentActivity.map((a, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                {a.user.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{a.user}</p>
                <p className="text-xs text-muted-foreground">{a.action}</p>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AdminDashboard;
