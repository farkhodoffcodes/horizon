import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

const CreateAccountPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md animate-slide-up">
        
        <div className="text-center mb-10">
           <h1 className="text-3xl font-bold mb-2">Create Account</h1>
           <p className="text-gray-400">Join the future of asset defense today.</p>
        </div>

        <div className="glass-card p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
           {/* Decorative background blobs */}
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

           <form className="space-y-5 relative z-10">
              
              <div className="space-y-1">
                 <label className="text-xs text-gray-400 font-medium uppercase ml-1">Full Name</label>
                 <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white placeholder:text-gray-600"
                    />
                 </div>
              </div>

              <div className="space-y-1">
                 <label className="text-xs text-gray-400 font-medium uppercase ml-1">Email Address</label>
                 <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white placeholder:text-gray-600"
                    />
                 </div>
              </div>

              <div className="space-y-1">
                 <label className="text-xs text-gray-400 font-medium uppercase ml-1">Password</label>
                 <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 focus:outline-none focus:border-blue-500/50 transition-colors text-white placeholder:text-gray-600"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                    >
                       {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                 </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                 <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-600 bg-white/5 text-blue-500 focus:ring-blue-500" />
                 <label htmlFor="terms" className="text-xs text-gray-400">
                    I agree to the <span className="text-white hover:underline cursor-pointer">Terms of Service</span> and <span className="text-white hover:underline cursor-pointer">Privacy Policy</span>
                 </label>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-4">
                 Create Account <ArrowRight className="w-4 h-4" />
              </button>

           </form>

           <div className="relative flex py-6 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-xs uppercase">Or continue with</span>
              <div className="flex-grow border-t border-white/10"></div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-colors">
                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                 <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-colors">
                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.29 0-1.15.52-2.3 1.24-3.14C13.84 1.7 15.1 1 16.26 1c.06 0 .1.03.105.43zm4.6 12.83c-.47 2.5-1.7 5.14-3.6 7.63-1.12 1.4-2.2 2.76-3.8 2.76-1.5 0-2-.88-3.7-.88-1.7 0-2.3.88-3.75.88-1.5 0-2.68-1.43-3.7-2.8C.9 19.33-1.1 12.65 1.57 7.9c1.32-2.33 3.6-3.75 5.9-3.75 1.6 0 2.97.97 3.8.97.8 0 2.6-1.1 4.5-1.03.7.03 2.78.27 4.08 2.13-3.6 1.7-2.9 6.8 1.1 8.05zM12 23c0 0 0 0 0 0z"/></svg>
                 <span className="text-sm font-medium">Apple</span>
              </button>
           </div>

           <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                 Already have an account? <span className="text-white font-medium hover:underline cursor-pointer">Sign in</span>
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;