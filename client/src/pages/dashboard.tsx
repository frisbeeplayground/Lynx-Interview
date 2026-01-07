import { useState, useEffect } from "react";
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
  Calculator,
  BrainCircuit,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [userProfile, setUserProfile] = useState("software");

  useEffect(() => {
    const saved = localStorage.getItem("user_profile");
    if (saved) setUserProfile(saved);
  }, []);

  const profileContent: Record<string, any> = {
    software: {
      welcome: "Code better, John! 🚀",
      desc: "Your AI-assisted development tracks are updated.",
      courses: [
        { title: "AI Coding Assistant Pro", category: "DevTools", progress: 65, icon: <Code2 className="w-4 h-4 text-blue-500" /> },
        { title: "System Design for Scale", category: "Architecture", progress: 40, icon: <Briefcase className="w-4 h-4 text-slate-500" /> }
      ],
      news: [
        { title: "Cursor.sh launches new Composer features", date: "2h ago", category: "Tech" },
        { title: "React 19 Server Components Deep Dive", date: "5h ago", category: "Dev" }
      ],
      jobs: [
        { company: "OpenAI", role: "Software Engineer", location: "SF" },
        { company: "Stripe", role: "Frontend Lead", location: "Remote" }
      ]
    },
    accountant: {
      welcome: "Number crunching evolved, John! 📊",
      desc: "Master AI-driven financial modeling.",
      courses: [
        { title: "Advanced Accounting w/ AI", category: "Finance", progress: 20, icon: <Calculator className="w-4 h-4 text-orange-500" /> },
        { title: "Tax Law Automation", category: "Legal", progress: 10, icon: <BookOpen className="w-4 h-4 text-red-500" /> }
      ],
      news: [
        { title: "AI Agents for Bookkeeping: A 2024 Guide", date: "3h ago", category: "Finance" },
        { title: "New IFRS Standards with AI Auditing", date: "6h ago", category: "Report" }
      ],
      jobs: [
        { company: "PwC", role: "Senior AI Auditor", location: "London" },
        { company: "Deloitte", role: "Tax Strategist", location: "Remote" }
      ]
    },
    ba: {
      welcome: "Analyze deeper, John! 📈",
      desc: "Bridge business and AI seamlessly.",
      courses: [
        { title: "AI-Driven BA Analysis", category: "Business", progress: 45, icon: <BrainCircuit className="w-4 h-4 text-emerald-500" /> },
        { title: "Agile AI Product Mgmt", category: "Strategy", progress: 30, icon: <TrendingUp className="w-4 h-4 text-blue-500" /> }
      ],
      news: [
        { title: "How BA roles are evolving with GenAI", date: "1h ago", category: "Strategy" },
        { title: "User Story Automation in 2024", date: "4h ago", category: "Agile" }
      ],
      jobs: [
        { company: "Atlassian", role: "Senior BA", location: "Remote" },
        { company: "Salesforce", role: "Strategy Consultant", location: "SF" }
      ]
    },
    linguist: {
      welcome: "Language mastery, John! 🌍",
      desc: "Your AI language partner is waiting.",
      courses: [
        { title: "Conversational German B2", category: "Language", progress: 80, icon: <Languages className="w-4 h-4 text-purple-500" /> },
        { title: "Medical Spanish Pro", category: "Specifics", progress: 15, icon: <MessageSquare className="w-4 h-4 text-rose-500" /> }
      ],
      news: [
        { title: "Duolingo integrates advanced AI voices", date: "2h ago", category: "Apps" },
        { title: "Best AI Tutors for C1 Fluency", date: "5h ago", category: "Guide" }
      ],
      jobs: [
        { company: "Babbel", role: "Linguistic Designer", location: "Berlin" },
        { company: "Coursera", role: "Content Specialist", location: "Remote" }
      ]
    }
  };

  const current = profileContent[userProfile] || profileContent.software;

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
              placeholder={`Search ${userProfile} topics...`}
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
              <h1 className="text-3xl font-display font-bold tracking-tight">{current.welcome}</h1>
              <p className="text-muted-foreground mt-1 text-lg">{current.desc}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="rounded-xl bg-primary shadow-lg shadow-primary/20"><Sparkles className="w-4 h-4 mr-2" /> AI {userProfile === 'linguist' ? 'Tutor' : 'Expert'} Chat</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-primary text-white border-none shadow-xl shadow-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Mastery Streak</span>
                </div>
                <div className="text-3xl font-bold font-display">12 Days</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Active Tracks</span>
                </div>
                <div className="text-3xl font-bold font-display">4</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Profile Level</span>
                </div>
                <div className="text-3xl font-bold font-display text-primary uppercase">Expert</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold font-display">Coding Challenges</h2>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer bg-primary/10 text-primary border-primary/20">All</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Pending</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Solved</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <Card className="hover:border-primary/50 cursor-pointer transition-all group" onClick={() => setLocation("/coding")}>
                <CardContent className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Two Sum</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Badge variant="secondary" className="text-[10px] h-5 bg-emerald-500/10 text-emerald-600 border-emerald-200">Easy</Badge>
                        <span>Arrays</span>
                        <span>15 mins</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Review Solution <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 cursor-pointer transition-all group border-l-4 border-l-primary" onClick={() => setLocation("/coding")}>
                <CardContent className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">LRU Cache Implementation</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Badge variant="secondary" className="text-[10px] h-5 bg-orange-500/10 text-orange-600 border-orange-200">Medium</Badge>
                        <span>System Design</span>
                        <span>45 mins</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary shadow-lg shadow-primary/20">
                    Solve Now <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 cursor-pointer transition-all group opacity-75 hover:opacity-100">
                <CardContent className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-bold">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Merge K Sorted Lists</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Badge variant="secondary" className="text-[10px] h-5 bg-red-500/10 text-red-600 border-red-200">Hard</Badge>
                        <span>Heap</span>
                        <span>60 mins</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Start <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold font-display">Your Personalized Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.courses.map((course: any, i: number) => (
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
                Latest for {userProfile}s
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {current.news.map((n: any, i: number) => (
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

          <Card className="border-border/50 bg-white">
             <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-500" />
                  Upcoming Roles
                </CardTitle>
             </CardHeader>
             <CardContent className="p-0">
               <div className="divide-y divide-border/50">
                {current.jobs.map((job: any, i: number) => (
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
             </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
