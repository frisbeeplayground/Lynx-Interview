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
    else setLocation("/");
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
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold font-display text-primary">2,482</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Active Now</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold font-display text-primary">150+</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Hiring Partners</div>
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
                  <Card className="border-border/50 shadow-xl">
                    <CardHeader>
                      <CardTitle className="font-display">Welcome Back</CardTitle>
                      <CardDescription>Enter your credentials to continue your preparation.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                  <Card className="border-border/50 shadow-xl">
                    <CardHeader>
                      <CardTitle className="font-display">Create Account</CardTitle>
                      <CardDescription>Join 2,000+ candidates mastering their interviews.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
