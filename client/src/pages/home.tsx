import { Link, useLocation } from "wouter";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Target, Video, Mic, MessageSquare, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="LynxIQ Logo" className="w-8 h-8 object-contain" />
            <span className="font-display font-bold text-xl tracking-tight">LynxIQ</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Features</a>
            <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="hover:text-foreground transition-colors">Resources</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={() => setLocation("/auth")}>Log in</Button>
            <Button size="sm" className="rounded-full px-6" onClick={() => setLocation("/auth")}>Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Mock Interview Hero UI */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                AI Interview Simulator
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                The Interview <br />
                <span className="text-primary">Without the Stress.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Practice with an AI that mimics the world's toughest interviewers. Get real-time feedback on your body language, technical depth, and soft skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl px-8 text-base h-14 shadow-lg shadow-primary/20" onClick={() => setLocation("/auth")}>
                  Start Practice Session
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <div className="flex -space-x-2 items-center">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                  <span className="ml-4 text-sm text-muted-foreground font-medium">+2k practicing now</span>
                </div>
              </div>
            </motion.div>

            {/* Simulated Interview UI Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10 opacity-50 animate-pulse"></div>
              <div className="bg-zinc-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-video flex flex-col">
                {/* Header */}
                <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <span className="text-xs font-mono text-zinc-400">REC 00:14:23</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">L4 SOFTWARE ENGINEER</span>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="flex-1 grid grid-cols-3 gap-2 p-2">
                  <div className="col-span-2 relative rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                      className="w-full h-full object-cover opacity-80" 
                      alt="Interviewer"
                    />
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white font-medium border border-white/10">
                      Interviewer: Sarah (Senior Eng)
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex-1 rounded-lg bg-zinc-900 border border-white/5 p-3 flex flex-col justify-end relative overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <Mic className="w-12 h-12 text-primary" />
                       </div>
                       <div className="relative z-10 space-y-2">
                          <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-primary" 
                              animate={{ width: ["20%", "80%", "40%", "90%"] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            />
                          </div>
                          <span className="text-[10px] text-zinc-500 font-mono italic">Transcribing live...</span>
                       </div>
                    </div>
                    <div className="flex-1 rounded-lg bg-zinc-900 border border-white/5 p-3">
                       <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Live Feedback</h4>
                       <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span className="text-[10px] text-zinc-300">Great eye contact</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-3 h-3 text-amber-500" />
                            <span className="text-[10px] text-zinc-300">Watch your pace</span>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="p-4 flex items-center justify-center gap-6 bg-zinc-900/80 border-t border-white/5">
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Mic className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20">
                    <Video className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Blocks */}
        <section className="container mx-auto px-6 py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Interview-Specific Training</h2>
            <p className="text-muted-foreground">Master every aspect of the modern hiring process.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
             <InterviewModeCard 
               icon={<Terminal className="w-5 h-5" />}
               title="System Design"
               mode="Architectural"
               level="Senior"
             />
             <InterviewModeCard 
               icon={<MessageSquare className="w-5 h-5" />}
               title="Behavioral"
               mode="Soft Skills"
               level="General"
             />
             <InterviewModeCard 
               icon={<Video className="w-5 h-5" />}
               title="Mock Video"
               mode="Body Language"
               level="Executive"
             />
             <InterviewModeCard 
               icon={<Target className="w-5 h-5" />}
               title="Salary Negotiation"
               mode="Strategic"
               level="Advanced"
             />
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <img src={logo} alt="LynxIQ Logo" className="w-5 h-5 grayscale" />
            <span className="font-bold">LynxIQ</span>
          </div>
          <p>&copy; 2024 LynxIQ. Built for the next generation of talent.</p>
        </div>
      </footer>
    </div>
  );
}

function InterviewModeCard({ icon, title, mode, level }: { icon: React.ReactNode, title: string, mode: string, level: string }) {
  return (
    <div className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute top-4 right-4 text-[10px] font-bold text-muted-foreground/40 tracking-tighter uppercase">{level}</div>
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-1 font-display">{title}</h3>
      <p className="text-xs text-primary font-medium uppercase tracking-widest">{mode}</p>
      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-bold text-muted-foreground">25 MODULAR EXERCISES</span>
        <ArrowRight className="w-3 h-3 text-primary" />
      </div>
    </div>
  );
}
