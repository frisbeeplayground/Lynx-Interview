import { Link } from "wouter";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
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
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Log in</Button>
            <Button size="sm" className="rounded-full px-6">Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Now available in beta
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              Master your interview <br />
              <span className="text-primary relative inline-block">
                with precision.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              LynxIQ uses advanced AI to simulate real-world interviews, analyze your responses, and give you the competitive edge you need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="rounded-full px-8 text-base h-12 w-full sm:w-auto">
                Start Practicing Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12 w-full sm:w-auto">
                View Demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Logo Showcase */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-purple-500/30 to-blue-500/30 blur-3xl -z-10 rounded-full opacity-20 transform scale-75"></div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-12 md:p-24 shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="mb-8 relative group">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                  src={logo} 
                  alt="LynxIQ Brand Mark" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-xl transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-display font-bold">LynxIQ</h2>
                <p className="text-muted-foreground tracking-widest text-sm uppercase">Visionary Interview Intelligence</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<Target className="w-6 h-6 text-primary" />}
              title="Precise Feedback"
              description="Get instant, actionable feedback on your tone, pace, and content relevance."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Real-time Analysis"
              description="Our AI engine analyzes your responses in real-time, just like a human recruiter."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="w-6 h-6 text-primary" />}
              title="Industry Standards"
              description="Practice with questions curated from top tech companies and Fortune 500s."
            />
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border/40 py-12 bg-muted/20">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <img src={logo} alt="LynxIQ Logo" className="w-5 h-5 grayscale" />
            <span className="font-bold">LynxIQ</span>
          </div>
          <p>&copy; 2024 LynxIQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
