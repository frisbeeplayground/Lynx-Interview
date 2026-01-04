import { useState } from "react";
import * as React from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight, Briefcase, Target, GraduationCap, Code2, Sparkles, Cat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";

// Simple fallback Tabs for debugging
const SimpleTabs = ({ children, defaultValue }: { children: React.ReactNode, defaultValue: string }) => {
  const [active, setActive] = useState(defaultValue);
  return (
    <div className="w-full">
      <div className="flex bg-muted p-1 rounded-lg mb-6">
        {React.Children.map(children, (child: any) => {
          if (child.type === TabsList) {
            return React.Children.map(child.props.children, (trigger: any) => (
              <button
                className={`flex-1 py-1 text-sm font-medium rounded-md transition-all ${active === trigger.props.value ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`}
                onClick={() => setActive(trigger.props.value)}
              >
                {trigger.props.children}
              </button>
            ));
          }
        })}
      </div>
      {React.Children.map(children, (child: any) => {
        if (child.type === TabsContent && child.props.value === active) {
          return child.props.children;
        }
      })}
    </div>
  );
};

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState("auth"); // auth, skills, experience, goals
  const [formData, setFormData] = useState({
    skills: [],
    experience: "",
    targetCompanies: [],
  });

  const nextStep = () => {
    if (step === "auth") setStep("skills");
    else if (step === "skills") setStep("experience");
    else if (step === "experience") setStep("goals");
    else setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex items-center gap-2 mb-8 justify-center">
          <img src={logo} alt="LynxIQ Logo" className="w-10 h-10 object-contain" />
          <span className="font-display font-bold text-2xl tracking-tight">LynxIQ</span>
        </div>

        {/* Brand Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 text-center relative overflow-hidden group">
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></div>
            <div className="text-2xl font-bold font-display text-primary">2,482</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Active Now</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 text-center relative overflow-hidden group">
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
            <div className="text-2xl font-bold font-display text-primary">12.5k</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Total Users</div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === "auth" && (
            <motion.div
              key="auth"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SimpleTabs defaultValue="login">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <Card className="border-border/50 shadow-xl overflow-hidden">
                    <CardHeader>
                      <CardTitle className="font-display">Welcome Back</CardTitle>
                      <CardDescription>Enter your credentials to continue your preparation.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Colorful Social Logins */}
                      <div className="grid grid-cols-3 gap-3 mb-2">
                        <Button variant="outline" className="rounded-xl h-10 px-0 hover:border-red-500/50 hover:bg-red-500/5 transition-colors group">
                          <svg className="w-5 h-5 text-[#DB4437] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12 s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                          </svg>
                        </Button>
                        <Button variant="outline" className="rounded-xl h-10 px-0 hover:border-black/50 hover:bg-black/5 transition-colors group">
                          <svg className="w-5 h-5 text-[#24292e] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.092,0.682-0.217,0.682-0.482 c0-0.237-0.008-0.866-0.013-1.7c-2.782,0.603-3.369-1.341-3.369-1.341c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.908-0.62,0.069-0.608,0.069-0.608c1.003,0.07,1.531,1.03,1.531,1.03c0.891,1.527,2.338,1.086,2.907,0.831 c0.091-0.645,0.348-1.086,0.634-1.336c-2.22-0.252-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.029-2.683 c-0.103-0.253-0.446-1.27,0.098-2.647c0,0,0.84-0.269,2.75,1.025C10.295,7.538,11.148,7.41,12,7.405 c0.851,0.005,1.705,0.133,2.504,0.367c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.377,0.202,2.394,0.1,2.647 c0.64,0.699,1.028,1.592,1.028,2.683c0,3.842-2.339,4.687-4.566,4.935c0.359,0.309,0.678,0.92,0.678,1.855 c0,1.338-0.012,2.419-0.012,2.747c0,0.268,0.18,0.579,0.688,0.481C19.137,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"/>
                          </svg>
                        </Button>
                        <Button variant="outline" className="rounded-xl h-10 px-0 hover:border-blue-400/50 hover:bg-blue-400/5 transition-colors group">
                          <svg className="w-5 h-5 text-[#1DA1F2] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </Button>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/50"></span></div>
                        <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-card px-2 text-muted-foreground">Or continue with email</span></div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="name@company.com" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" className="rounded-xl" />
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setLocation("/")} className="flex-1 rounded-xl h-12">
                          Cancel
                        </Button>
                        <Button onClick={nextStep} className="flex-[2] rounded-xl h-12 text-base font-semibold group">
                          Sign In
                          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="signup">
                  <Card className="border-border/50 shadow-xl overflow-hidden">
                    <CardHeader>
                      <CardTitle className="font-display">Create Account</CardTitle>
                      <CardDescription>Join 2,000+ candidates mastering their interviews.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Colorful Social Signups */}
                      <div className="grid grid-cols-3 gap-3 mb-2">
                        <Button variant="outline" className="rounded-xl h-10 px-0 hover:border-red-500/50 hover:bg-red-500/5 transition-colors group">
                          <svg className="w-5 h-5 text-[#DB4437] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12 s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                          </svg>
                        </Button>
                        <Button variant="outline" className="rounded-xl h-10 px-0 hover:border-black/50 hover:bg-black/5 transition-colors group">
                          <svg className="w-5 h-5 text-[#24292e] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.092,0.682-0.217,0.682-0.482 c0-0.237-0.008-0.866-0.013-1.7c-2.782,0.603-3.369-1.341-3.369-1.341c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.908-0.62,0.069-0.608,0.069-0.608c1.003,0.07,1.531,1.03,1.531,1.03c0.891,1.527,2.338,1.086,2.907,0.831 c0.091-0.645,0.348-1.086,0.634-1.336c-2.22-0.252-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.029-2.683 c-0.103-0.253-0.446-1.27,0.098-2.647c0,0,0.84-0.269,2.75,1.025C10.295,7.538,11.148,7.41,12,7.405 c0.851,0.005,1.705,0.133,2.504,0.367c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.377,0.202,2.394,0.1,2.647 c0.64,0.699,1.028,1.592,1.028,2.683c0,3.842-2.339,4.687-4.566,4.935c0.359,0.309,0.678,0.92,0.678,1.855 c0,1.338-0.012,2.419-0.012,2.747c0,0.268,0.18,0.579,0.688,0.481C19.137,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"/>
                          </svg>
                        </Button>
                        <Button variant="outline" className="rounded-xl h-10 px-0 hover:border-blue-400/50 hover:bg-blue-400/5 transition-colors group">
                          <svg className="w-5 h-5 text-[#1DA1F2] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </Button>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/50"></span></div>
                        <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-card px-2 text-muted-foreground">Or sign up with email</span></div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <Input id="signup-email" type="email" placeholder="name@company.com" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input id="signup-password" type="password" className="rounded-xl" />
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setLocation("/")} className="flex-1 rounded-xl h-12">
                          Cancel
                        </Button>
                        <Button onClick={nextStep} className="flex-[2] rounded-xl h-12 text-base font-semibold group">
                          Get Started
                          <Sparkles className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </SimpleTabs>
            </motion.div>
          )}

          {step === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Code2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold">What are your top skills?</h2>
                <p className="text-muted-foreground">This helps us tailor technical questions for you.</p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {["React", "Node.js", "Python", "System Design", "AWS", "TypeScript", "Algorithms", "Kubernetes", "SQL", "Go"].map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="py-2 px-4 rounded-full cursor-pointer hover:bg-primary/5 hover:border-primary transition-all text-sm"
                    onClick={(e) => e.currentTarget.classList.toggle('bg-primary/10')}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <Button onClick={nextStep} className="w-full rounded-xl h-12 text-base font-semibold">
                Continue
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}

          {step === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold">Your experience level?</h2>
                <p className="text-muted-foreground">We adjust interviewer difficulty based on your seniority.</p>
              </div>

              <div className="space-y-3">
                {[
                  { id: "junior", label: "Junior / Entry Level", desc: "0-2 years experience" },
                  { id: "mid", label: "Mid-Level", desc: "3-5 years experience" },
                  { id: "senior", label: "Senior", desc: "5-8 years experience" },
                  { id: "staff", label: "Staff / Principal", desc: "8+ years experience" },
                ].map((level) => (
                  <div 
                    key={level.id}
                    className="p-4 rounded-xl border border-border/50 bg-card hover:border-primary/50 cursor-pointer transition-all flex items-center justify-between group"
                    onClick={nextStep}
                  >
                    <div>
                      <div className="font-bold">{level.label}</div>
                      <div className="text-xs text-muted-foreground">{level.desc}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === "goals" && (
            <motion.div
              key="goals"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold">Target Companies?</h2>
                <p className="text-muted-foreground">We'll use company-specific question banks.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Google", "Meta", "Amazon", "OpenAI", "Stripe", "Netflix", "Uber", "Airbnb"].map((company) => (
                  <div 
                    key={company}
                    className="p-3 rounded-xl border border-border/50 bg-card text-center font-semibold hover:border-primary/50 cursor-pointer transition-all"
                    onClick={(e) => e.currentTarget.classList.toggle('border-primary')}
                  >
                    {company}
                  </div>
                ))}
              </div>

              <Button onClick={nextStep} className="w-full rounded-xl h-12 text-base font-semibold shadow-lg shadow-primary/20">
                Complete Setup
                <Sparkles className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-1">
          {["auth", "skills", "experience", "goals"].map((s, i) => (
            <div 
              key={s} 
              className={`h-1.5 rounded-full transition-all duration-300 ${step === s ? 'w-8 bg-primary' : 'w-2 bg-muted'}`}
            ></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
