import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
            <Plane className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Create an account</h1>
          <p className="text-muted-foreground mt-1">Start planning your dream trip today</p>
        </div>

        <div className="travel-card p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">First name</label>
              <input type="text" placeholder="John" className="travel-input w-full" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Last name</label>
              <input type="text" placeholder="Doe" className="travel-input w-full" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="email" placeholder="you@example.com" className="travel-input w-full pl-10" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type={showPw ? "text" : "password"} placeholder="Min. 8 characters" className="travel-input w-full pl-10 pr-10" />
              <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <label className="flex items-start gap-2 text-sm text-muted-foreground">
            <input type="checkbox" className="rounded border-border mt-0.5" />
            I agree to the Terms of Service and Privacy Policy
          </label>
          <Button className="w-full" size="lg">Create Account</Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground">or sign up with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">Google</Button>
            <Button variant="outline" className="w-full">Apple</Button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
