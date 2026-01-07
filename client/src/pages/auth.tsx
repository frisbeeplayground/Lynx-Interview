import { useState, useRef, useEffect } from "react";
import * as React from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderTree, 
  FileCode2, 
  Terminal, 
  Sparkles, 
  Send, 
  Play, 
  CheckCircle2, 
  AlertCircle,
  X,
  Plus,
  ChevronRight,
  ChevronDown,
  Layout,
  MessageSquare,
  BarChart3,
  Cpu,
  ArrowRight,
  User,
  Target,
  BrainCircuit,
  Languages,
  Calculator,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";
import lynxVideo from "@assets/generated_videos/cinematic_lynx_walking_through_snow.mp4";

const SimpleTabs = ({ children, defaultValue }: { children: React.ReactNode, defaultValue: string }) => {
  const [active, setActive] = useState(defaultValue);
  return (
    <div className="w-full">
      <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl mb-6">
        {React.Children.map(children, (child: any) => {
          if (child && child.type === TabsList) {
            return React.Children.map(child.props.children, (trigger: any) => (
              trigger && (
                <button
                  key={trigger.props.value}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${active === trigger.props.value ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-gray-200'}`}
                  onClick={() => setActive(trigger.props.value)}
                >
                  {trigger.props.children}
                </button>
              )
            ));
          }
          return null;
        })}
      </div>
      {React.Children.map(children, (child: any) => {
        if (child && child.type === TabsContent && child.props.value === active) {
          return child.props.children;
        }
        return null;
      })}
    </div>
  );
};

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState("auth");
  const [profile, setProfile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nextStep = () => {
    if (step === "auth") setStep("profile");
    else if (step === "profile") setStep("skills");
    else if (step === "skills") setStep("goals");
    else {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem("user_profile", profile);
        setLocation("/coding");
      }, 1000);
    }
  };

  const profiles = [
    { id: "software", label: "Software Engineer", icon: <Code2 className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: "accountant", label: "Accountant", icon: <Calculator className="w-5 h-5" />, color: "text-orange-500", bg: "bg-orange-500/10" },
    { id: "ba", label: "Business Analyst", icon: <BrainCircuit className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: "linguist", label: "Language Learner", icon: <Languages className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-500/10" }
  ];

  const skillSets: Record<string, string[]> = {
    software: ["React", "Node.js", "Python", "System Design", "AWS", "TypeScript", "AI Coding"],
    accountant: ["Tax Law", "Bookkeeping", "Excel AI", "Financial Auditing", "IFRS", "GAAP"],
    ba: ["Agile", "UML", "Jira", "SQL", "Stakeholder Mgmt", "AI Data Modeling"],
    linguist: ["Pronunciation", "Grammar", "Vocabulary", "Cultural Context", "Business English"]
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black selection:bg-primary/30">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110 blur-[2px]"
      >
        <source src={lynxVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-primary/20 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md p-4"
      >
        <div className="flex flex-col items-center gap-6 mb-10 justify-center">
          <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-5 shadow-2xl backdrop-blur-xl">
            <img src={logo} alt="LynxIQ Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-display font-bold text-4xl tracking-tight text-white">LynxIQ</span>
        </div>

        <AnimatePresence mode="wait">
          {step === "auth" && (
            <motion.div
              key="auth"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-white/10 bg-black/40 backdrop-blur-xl text-white shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-display font-bold">Secure Access</CardTitle>
                  <CardDescription className="text-gray-400">Initialize your universal upskilling hub</CardDescription>
                </CardHeader>
                <CardContent>
                  <SimpleTabs defaultValue="login">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="name@example.com" className="bg-white/5 border-white/10 focus:border-primary transition-colors h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" className="bg-white/5 border-white/10 focus:border-primary transition-colors h-12" />
                        </div>
                        <Button onClick={nextStep} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20">
                          Enter Workspace
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="signup">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="new-name">Full Name</Label>
                          <Input id="new-name" placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-primary transition-colors h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-email">Email</Label>
                          <Input id="new-email" type="email" placeholder="name@example.com" className="bg-white/5 border-white/10 focus:border-primary transition-colors h-12" />
                        </div>
                        <Button onClick={nextStep} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20">
                          Initialize Profile
                        </Button>
                      </div>
                    </TabsContent>
                  </SimpleTabs>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-display font-bold text-white">What's your focus?</h2>
                <p className="text-gray-400">We'll tailor your interactive IDE experience.</p>
              </div>

              <div className="grid gap-3">
                {profiles.map((p) => (
                  <div 
                    key={p.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4 group backdrop-blur-md ${profile === p.id ? 'border-primary bg-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.2)]' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                    onClick={() => {
                      setProfile(p.id);
                      setTimeout(nextStep, 300);
                    }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center shadow-inner`}>
                      {p.icon}
                    </div>
                    <div className="font-bold flex-1 text-white">{p.label}</div>
                    <ChevronRight className={`w-4 h-4 text-primary transition-opacity ${profile === p.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                  </div>
                ))}
              </div>
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
                <h2 className="text-2xl font-display font-bold text-white">Refine your expertise</h2>
                <p className="text-gray-400">Choose skills to initialize in your workspace.</p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {(skillSets[profile] || skillSets.software).map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="py-2.5 px-5 rounded-full cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-primary/20 hover:border-primary transition-all text-sm"
                    onClick={(e) => e.currentTarget.classList.toggle('bg-primary/30')}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <Button onClick={nextStep} className="w-full h-14 bg-primary hover:bg-primary/90 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20">
                Continue Setup
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
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
                <h2 className="text-2xl font-display font-bold text-white">Final Milestone</h2>
                <p className="text-gray-400">Set your target destination.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {profile === "software" && ["Google", "Meta", "OpenAI", "Stripe"].map((g) => (
                  <div key={g} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center font-semibold text-white hover:border-primary/50 cursor-pointer transition-all hover:bg-white/10" onClick={(e) => e.currentTarget.classList.toggle('border-primary')}>{g}</div>
                ))}
                {profile === "accountant" && ["Big 4", "CPA Cert", "AI Auditor", "Tax Pro"].map((g) => (
                  <div key={g} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center font-semibold text-white hover:border-primary/50 cursor-pointer transition-all hover:bg-white/10" onClick={(e) => e.currentTarget.classList.toggle('border-primary')}>{g}</div>
                ))}
                {profile === "ba" && ["IIBA Cert", "Agile Coach", "Strategy Lead", "Product Owner"].map((g) => (
                  <div key={g} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center font-semibold text-white hover:border-primary/50 cursor-pointer transition-all hover:bg-white/10" onClick={(e) => e.currentTarget.classList.toggle('border-primary')}>{g}</div>
                ))}
                {profile === "linguist" && ["B2 Exam", "C1 Fluency", "Translator", "Native Coach"].map((g) => (
                  <div key={g} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center font-semibold text-white hover:border-primary/50 cursor-pointer transition-all hover:bg-white/10" onClick={(e) => e.currentTarget.classList.toggle('border-primary')}>{g}</div>
                ))}
              </div>

              <Button onClick={nextStep} className="w-full h-14 bg-primary hover:bg-primary/90 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 group" disabled={isLoading}>
                {isLoading ? "Synchronizing..." : "Complete Setup"}
                {!isLoading && <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-2">
          {["auth", "profile", "skills", "goals"].map((s, i) => (
            <div 
              key={s} 
              className={`h-1 rounded-full transition-all duration-500 ${step === s ? 'w-10 bg-primary' : 'w-3 bg-white/20'}`}
            ></div>
          ))}
        </div>
        
        <p className="mt-8 text-center text-sm text-gray-500">
          By continuing, you agree to our <a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a>
        </p>
      </motion.div>
    </div>
  );
}
