import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Target, 
  Video, 
  Mic, 
  MessageSquare, 
  Terminal, 
  Sparkles,
  BookOpen,
  Code2,
  Languages,
  Calculator,
  BrainCircuit,
  Trophy,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-background font-sans selection:bg-primary/20 transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
          <div className="container mx-auto px-6 h-24 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="LynxIQ Logo" className="w-16 h-16 object-contain" />
              <span className="font-display font-bold text-3xl tracking-tight">LynxIQ</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <a href="#knowledge" className="hover:text-foreground transition-colors">Knowledge Base</a>
              <a href="#community" className="hover:text-foreground transition-colors">Community</a>
              <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={() => setLocation("/auth")}>Log in</Button>
              <Button size="sm" className="rounded-full px-6 bg-primary shadow-lg shadow-primary/20" onClick={() => setLocation("/auth")}>Get Started</Button>
            </div>
          </div>
        </nav>

        <main className="pt-28 pb-20">
          {/* Universal Upskilling Hero */}
          <section className="container mx-auto px-6 mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8 flex justify-start gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                    2,482 Active Now
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-[10px] font-bold uppercase tracking-wider border border-orange-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
                    12.5k Total Users
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
                  The Ultimate AI <br />
                  <span className="text-foreground">Upskilling Hub.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  Master any skill with AI-driven training. From coding and interview prep to accounting and foreign languages. Your universal knowledge base for the AI era.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-xl px-8 text-base h-14 bg-primary shadow-xl shadow-primary/20 hover:scale-105 transition-transform" onClick={() => setLocation("/auth")}>
                    Explore Knowledge Base
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              {/* AI Learning Hub Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 opacity-30 animate-pulse"></div>
                <div className="bg-white rounded-2xl border border-border/50 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col p-6 space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">LynxAI Assistant</h4>
                        <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Intelligent Learning Partner</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-none">Online</Badge>
                  </div>
                  
                  <div className="flex-1 space-y-4 py-4 overflow-y-auto no-scrollbar">
                    <div className="bg-muted/50 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                      <p className="text-sm">Welcome back! What would you like to master today? I've prepared sessions for <strong>AI-Assisted Coding</strong> and <strong>Accounting Fundamentals</strong>.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <LearningModuleSmall icon={<Code2 className="text-blue-500" />} title="AI Coding" />
                      <LearningModuleSmall icon={<Calculator className="text-orange-500" />} title="Accounting" />
                      <LearningModuleSmall icon={<Languages className="text-purple-500" />} title="German B2" />
                      <LearningModuleSmall icon={<Target className="text-emerald-500" />} title="Interviews" />
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ask LynxAI to teach you anything..." 
                      className="w-full bg-muted/50 border-none rounded-xl py-3 px-4 text-sm pr-12 focus:ring-2 ring-primary/20"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Universal Upskilling Categories */}
          <section id="knowledge" className="container mx-auto px-6 py-20 bg-muted/30">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">A Library of Infinite Growth</h2>
              <p className="text-muted-foreground text-lg">Harness the power of AI tools across every professional discipline.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
               <UpskillCard 
                 icon={<Code2 className="w-6 h-6" />}
                 title="AI-Assisted Development"
                 description="Master Copilot, Cursor, and LLM-driven architecture techniques."
                 color="bg-blue-500"
               />
               <UpskillCard 
                 icon={<Calculator className="w-6 h-6" />}
                 title="AI in Finance & Accounting"
                 description="Automate bookkeeping and financial analysis using modern AI agents."
                 color="bg-orange-500"
               />
               <UpskillCard 
                 icon={<Languages className="w-6 h-6" />}
                 title="Foreign Languages"
                 description="Real-time conversational practice with culture-aware AI tutors."
                 color="bg-purple-500"
               />
               <UpskillCard 
                 icon={<BrainCircuit className="w-6 h-6" />}
                 title="Business Analysis"
                 description="Leverage AI for data modeling, requirements, and stakeholder analysis."
                 color="bg-emerald-500"
               />
               <UpskillCard 
                 icon={<Video className="w-6 h-6" />}
                 title="Modern Interviewing"
                 description="High-fidelity simulations for tech, behavioral, and executive roles."
                 color="bg-pink-500"
               />
               <UpskillCard 
                 icon={<BookOpen className="w-6 h-6" />}
                 title="Technical English"
                 description="Refine your professional communication for global tech environments."
                 color="bg-indigo-500"
               />
            </div>
          </section>

          {/* Community, Competitions & Courses */}
          <section id="community" className="container mx-auto px-6 py-24 space-y-24 overflow-hidden">
            {/* Testimonials Banner */}
            <div>
              <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-display font-bold">Member Stories</h2>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors"><ChevronLeft className="w-4 h-4" /></div>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors"><ChevronRight className="w-4 h-4" /></div>
                </div>
              </div>
              <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar -mx-6 px-6">
                {[
                  { quote: "LynxIQ helped me pivot from traditional accounting to AI-driven financial strategy in just 3 months. The personalized track was a game changer.", author: "Sarah Jenkins", role: "Financial Controller" },
                  { quote: "The AI coding simulations are eerily realistic. It prepared me for my senior engineer interview at OpenAI like nothing else.", author: "Marcus Chen", role: "Senior Dev" },
                  { quote: "Finally a platform that understands the BA mindset. The AI data modeling module is exceptional.", author: "Elena Rodriguez", role: "Business Analyst" },
                  { quote: "Learning German with the AI partner felt like talking to a native friend. Reached B2 faster than expected.", author: "Lukas Weber", role: "Product Manager" },
                  { quote: "The finance modules are incredibly deep. It's not just basic AI, it's real industry application.", author: "James Wilson", role: "Tax Consultant" }
                ].map((t, i) => (
                  <div key={i} className="min-w-[400px] snap-center">
                    <Testimonial {...t} />
                  </div>
                ))}
              </div>
            </div>

            {/* Events & Masterclasses Banner */}
            <div className="bg-primary/5 rounded-[2rem] p-12 border border-primary/10">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-display font-bold mb-2">Happening Soon</h2>
                  <p className="text-muted-foreground">Join exclusive competitions and expert-led sessions.</p>
                </div>
                <Button className="rounded-full px-8">View Full Calendar</Button>
              </div>
              
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x no-scrollbar">
                <div className="min-w-[450px] snap-center">
                  <div className="bg-white border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between">
                    <div>
                      <Badge className="bg-orange-500/10 text-orange-600 border-none mb-4 uppercase text-[10px] tracking-widest font-bold">Competition</Badge>
                      <h3 className="text-2xl font-bold mb-4">AI Prompt Engineering Hackathon</h3>
                      <div className="flex items-center gap-4 text-emerald-600 font-bold mb-6">
                        <Trophy className="w-5 h-5" />
                        $5,000 Prize Pool
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        Oct 15, 2024
                      </div>
                      <Button variant="outline" className="rounded-xl px-6">Register Now</Button>
                    </div>
                  </div>
                </div>

                <div className="min-w-[450px] snap-center">
                  <div className="bg-white border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between">
                    <div>
                      <Badge className="bg-primary/10 text-primary border-none mb-4 uppercase text-[10px] tracking-widest font-bold">Masterclass</Badge>
                      <h3 className="text-2xl font-bold mb-4">Mastering LLM Fine-Tuning</h3>
                      <p className="text-muted-foreground text-sm mb-6">Expert-led deep dive into custom model development with Dr. Elena Rossi.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        Oct 20, 2024
                      </div>
                      <Button variant="outline" className="rounded-xl px-6">Join Session</Button>
                    </div>
                  </div>
                </div>

                <div className="min-w-[450px] snap-center">
                  <div className="bg-white border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between">
                    <div>
                      <Badge className="bg-emerald-500/10 text-emerald-600 border-none mb-4 uppercase text-[10px] tracking-widest font-bold">Challenge</Badge>
                      <h3 className="text-2xl font-bold mb-4">Universal Data Analysis Challenge</h3>
                      <div className="flex items-center gap-4 text-primary font-bold mb-6">
                        <Sparkles className="w-5 h-5" />
                        Lynx Pro Annual Subs
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        Nov 2, 2024
                      </div>
                      <Button variant="outline" className="rounded-xl px-6">Enter Challenge</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="border-t border-border/40 py-12 bg-muted/20">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src={logo} alt="LynxIQ Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg text-foreground">LynxIQ Knowledge Base</span>
            </div>
            <div className="flex justify-center gap-8 mb-8 text-sm">
              <a href="#" className="hover:text-primary">About Us</a>
              <a href="#" className="hover:text-primary">Careers</a>
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Contact Support</a>
            </div>
            <p>&copy; 2024 LynxIQ. The universal upskilling platform.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

function LearningModuleSmall({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 hover:bg-white hover:shadow-md transition-all cursor-pointer">
      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs font-bold">{title}</span>
    </div>
  );
}

function UpskillCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <div className="group relative bg-white border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-2xl ${color} text-white flex items-center justify-center mb-6 shadow-lg shadow-black/5`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
      <div className="mt-8 pt-6 border-t border-border/20 flex items-center justify-between text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
        Explore Module
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

function Testimonial({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <Card className="border-border/50 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
        </div>
        <p className="italic text-muted-foreground mb-4 text-sm leading-relaxed">"{quote}"</p>
        <div>
          <div className="font-bold text-sm">{author}</div>
          <div className="text-[10px] text-primary font-bold uppercase tracking-widest">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function CoursePreview({ title, instructor, date, tag }: { title: string, instructor: string, date: string, tag: string }) {
  return (
    <div className="flex gap-4 p-4 bg-muted/20 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white transition-all cursor-pointer group">
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <BookOpen className="w-8 h-8" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{title}</h4>
          <Badge variant="outline" className="text-[9px] uppercase font-bold py-0">{tag}</Badge>
        </div>
        <p className="text-xs text-muted-foreground mb-2">By {instructor}</p>
        <div className="text-[10px] font-bold text-primary uppercase tracking-wider">{date}</div>
      </div>
    </div>
  );
}
