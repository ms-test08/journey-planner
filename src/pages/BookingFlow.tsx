import { useState } from "react";
import { Check, CreditCard, User, FileText, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = ["Details", "Review", "Payment"];

const BookingFlow = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="section-container py-8">
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              i < step ? "bg-success text-success-foreground" : i === step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-sm hidden sm:inline ${i === step ? "font-medium text-foreground" : "text-muted-foreground"}`}>{s}</span>
            {i < steps.length - 1 && <div className={`w-12 h-px ${i < step ? "bg-success" : "bg-border"}`} />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 0 && (
            <div className="travel-card p-6 space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><User className="w-5 h-5 text-primary" /> Traveler Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                  <input className="travel-input w-full" placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                  <input className="travel-input w-full" placeholder="Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input className="travel-input w-full" placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <input className="travel-input w-full" placeholder="+1 234 567 890" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground pt-4">Special Requests</h3>
              <textarea className="travel-input w-full min-h-[100px]" placeholder="Any dietary needs, accessibility requirements..." />
              <div className="flex justify-end">
                <Button size="lg" onClick={() => setStep(1)}>Continue to Review</Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="travel-card p-6 space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Review Your Booking</h2>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Package</span><span className="font-medium text-foreground">Bali Paradise Getaway</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Dates</span><span className="text-foreground">Apr 15 – Apr 21, 2026</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Travelers</span><span className="text-foreground">2 Adults</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Traveler</span><span className="text-foreground">John Doe</span></div>
              </div>
              <div className="flex justify-between gap-3">
                <Button variant="outline" size="lg" onClick={() => setStep(0)}>Back</Button>
                <Button size="lg" onClick={() => setStep(2)}>Proceed to Payment</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="travel-card p-6 space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><CreditCard className="w-5 h-5 text-primary" /> Payment Details</h2>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Card Number</label>
                <input className="travel-input w-full" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Expiry</label>
                  <input className="travel-input w-full" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">CVC</label>
                  <input className="travel-input w-full" placeholder="123" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" /> Your payment info is encrypted and secure
              </div>
              <div className="flex justify-between gap-3">
                <Button variant="outline" size="lg" onClick={() => setStep(1)}>Back</Button>
                <Link to="/dashboard">
                  <Button size="lg">Pay $1,906</Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="travel-card p-6 h-fit sticky top-24 space-y-3">
          <h3 className="font-semibold text-foreground">Order Summary</h3>
          <div className="text-sm space-y-2">
            <div className="flex justify-between"><span className="text-muted-foreground">Bali Paradise Getaway</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">$899 × 2</span><span className="text-foreground">$1,798</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Taxes & fees</span><span className="text-foreground">$108</span></div>
            <div className="flex justify-between font-semibold border-t border-border pt-2 text-foreground"><span>Total</span><span>$1,906</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;
