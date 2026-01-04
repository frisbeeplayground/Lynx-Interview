import { useState } from "react";
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
  LayoutDashboard,
  MessageSquare,
  Code2,
  Languages,
  ArrowUpRight,
  Filter
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";

export default function Dashboard() {
  const [, setLocation] = useLocation();

  const courses = [
    { title: "React Performance", category: "Software", progress: 65, icon: <Code2 className="w-4 h-4 text-blue-500" /> },
    { title: "STAR Method Pro", category: "Behavioral", progress: 80, icon: <MessageSquare className="w-4 h-4 text-purple-500" /> },
    { title: "Business Analysis 101", category: "BA", progress: 20, icon: <TrendingUp className="w-4 h-4 text-emerald-500" /> },
    { title: "Technical English", category: "English", progress: 45, icon: <Languages className="w-4 h-4 text-orange-500" /> }
  ];

  const jobs = [
    { company: "Stripe", role: "Frontend Engineer", location: "Remote", type: "Full-time" },
    { company: "OpenAI", role: "Technical Writer", location: "SF", type: "Contract" },
    { company: "Airbnb", role: "Lead Designer", location: "Remote", type: "Full-time" }
  ];

  const news = [
    { title: "Go 1.22 is here!", date: "2h ago", category: "Release" },
    { title: "System Design for Billion Users", date: "5h ago", category: "Blog" },
    { title: "New Interview Bank: Meta", date: "1d ago", category: "Update" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Sidebar / Nav */}
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
              placeholder="Search topics..." 
              className="pl-9 pr-4 py-2 bg-muted/50 rounded-full text-sm border-none focus:ring-2 ring-primary/20 w-64 transition-all"
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xs">
            JD
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column - Progress & Courses */}
        <div className="xl:col-span-8 space-y-8">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold tracking-tight">Welcome back, John! 👋</h1>
              <p className="text-muted-foreground mt-1 text-lg">You're in the top 5% of candidates this week.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-xl"><Filter className="w-4 h-4 mr-2" /> Filter View</Button>
              <Button size="sm" className="rounded-xl bg-primary shadow-lg shadow-primary/20">Resume Practice</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-primary text-white border-none shadow-xl shadow-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Session Streak</span>
                </div>
                <div className="text-3xl font-bold font-display">12 Days</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Total Practice</span>
                </div>
                <div className="text-3xl font-bold font-display">24.5h</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Average Score</span>
                </div>
                <div className="text-3xl font-bold font-display text-emerald-600">88%</div>
              </CardContent>
            </Card>
          </div>

          {/* Topics & Courses */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold font-display">Active Learning</h2>
              <Button variant="link" size="sm">View Library</Button>
            </div>
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

          {/* Hot Topics */}
          <div className="space-y-4">
             <h2 className="text-xl font-bold font-display">Trending Hot Topics 🔥</h2>
             <div className="flex flex-wrap gap-2">
               {["System Design", "Microservices", "AI Ethics", "Star Method", "React 19", "Public Speaking", "BA Documentation"].map(tag => (
                 <Badge key={tag} className="bg-white text-foreground border-border/50 hover:bg-primary hover:text-white cursor-pointer px-4 py-1.5 rounded-full transition-all">
                   {tag}
                 </Badge>
               ))}
             </div>
          </div>
        </div>

        {/* Right Column - Jobs, News, People */}
        <div className="xl:col-span-4 space-y-8">
          {/* Upcoming Job Opportunities */}
          <Card className="border-border/50 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Targeted Jobs</CardTitle>
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <CardDescription>Matching your skills & goals</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border/50">
                {jobs.map((job, i) => (
                  <div key={i} className="p-4 hover:bg-muted/30 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm">{job.role}</h4>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium text-primary">{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full rounded-none border-t border-border/50 text-xs text-muted-foreground hover:text-primary">View All Openings</Button>
            </CardContent>
          </Card>

          {/* Tech News & Blog */}
          <Card className="border-border/50 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-red-500 flex items-center gap-2">
                  <Newspaper className="w-5 h-5" />
                  Live News
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {news.map((n, i) => (
                <div key={i} className="flex gap-4 items-start pb-4 last:pb-0 last:border-0 border-b border-border/50">
                  <div className="bg-muted p-2 rounded-lg text-center min-w-[50px]">
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

          {/* Recommended Mentors / Users to Follow */}
          <Card className="border-border/50 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Experts to Follow</CardTitle>
                <UserPlus className="w-5 h-5 text-emerald-500" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Sarah Chen", role: "Staff Eng @ Google", img: "21" },
                { name: "Michael Scott", role: "Product Manager @ Meta", img: "32" },
                { name: "Jessica Alba", role: "Tech Recruiter @ Stripe", img: "44" }
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/100?img=${user.img}`} className="w-8 h-8 rounded-full" alt={user.name} />
                    <div>
                      <h4 className="text-xs font-bold leading-none mb-1">{user.name}</h4>
                      <p className="text-[10px] text-muted-foreground">{user.role}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="xs" className="h-7 text-[10px] font-bold rounded-lg px-3">Follow</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
