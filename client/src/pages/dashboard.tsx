import { useState } from "react";
import * as React from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  TrendingUp, 
  Flame, 
  Clock, 
  Briefcase, 
  Newspaper, 
  UserPlus, 
  Search, 
  MessageSquare,
  Code2,
  Languages,
  ArrowUpRight,
  Filter,
  Calculator,
  BrainCircuit,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";

export default function Dashboard() {
  const [, setLocation] = useLocation();

  const courses = [
    { title: "AI Coding Assistant Pro", category: "DevTools", progress: 65, icon: <Code2 className="w-4 h-4 text-blue-500" /> },
    { title: "Advanced Accounting w/ AI", category: "Finance", progress: 20, icon: <Calculator className="w-4 h-4 text-orange-500" /> },
    { title: "Conversational German", category: "Language", progress: 80, icon: <Languages className="w-4 h-4 text-purple-500" /> },
    { title: "AI-Driven BA Analysis", category: "Business", progress: 45, icon: <BrainCircuit className="w-4 h-4 text-emerald-500" /> }
  ];

  const news = [
    { title: "Cursor.sh launches new Composer features", date: "2h ago", category: "Tech" },
    { title: "Mastering Financial Forecasting with GPT-4o", date: "5h ago", category: "Blog" },
    { title: "New Module: Technical English for PMs", date: "1d ago", category: "Upskill" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-border/50 px-6 h-16 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <img src={logo} alt="LynxIQ" className="w-8 h-8" />
          <span className="font-display font-bold text-xl">LynxIQ</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Learn something new..." 
              className="pl-9 pr-4 py-2 bg-muted/50 rounded-full text-sm border-none focus:ring-2 ring-primary/20 w-64 transition-all"
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xs">
            JD
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold tracking-tight">Expand your horizon, John! 🚀</h1>
              <p className="text-muted-foreground mt-1 text-lg">Your universal upskilling dashboard is ready.</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="rounded-xl bg-primary shadow-lg shadow-primary/20"><Sparkles className="w-4 h-4 mr-2" /> AI Tutor Chat</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-primary text-white border-none shadow-xl shadow-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Growth Streak</span>
                </div>
                <div className="text-3xl font-bold font-display">12 Days</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Skills Mastered</span>
                </div>
                <div className="text-3xl font-bold font-display">18</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">AI Proficiency</span>
                </div>
                <div className="text-3xl font-bold font-display text-primary">Advanced</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold font-display">In-Progress Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, i) => (
                <Card key={i} className="group border-border/50 hover:border-primary/50 transition-all bg-white overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                        {course.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm leading-none mb-1">{course.title}</h3>
                        <Badge variant="outline" className="text-[10px] uppercase font-bold text-muted-foreground py-0">{course.category}</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1.5" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 space-y-8">
          <Card className="border-border/50 bg-white">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Trending in AI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {news.map((n, i) => (
                <div key={i} className="flex gap-4 items-start pb-4 last:pb-0 last:border-0 border-b border-border/50">
                  <div className="bg-muted p-2 rounded-lg min-w-[60px] text-center">
                    <span className="text-[10px] font-bold block text-muted-foreground uppercase">{n.category}</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold mb-1 leading-snug">{n.title}</h4>
                    <span className="text-[10px] text-muted-foreground">{n.date}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary to-violet-600 text-white border-none p-6 rounded-2xl">
            <h3 className="font-display font-bold text-xl mb-2">New: Learn Accounting using AI</h3>
            <p className="text-white/80 text-sm mb-4">Master bookkeeping and financial forecasting using advanced AI agents. 40% complete.</p>
            <Button variant="secondary" className="w-full font-bold">Continue Module</Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
