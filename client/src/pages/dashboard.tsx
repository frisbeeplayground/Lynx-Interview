import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Flame, 
  Zap,
  Trophy,
  Target,
  Play,
  ArrowRight,
  CheckCircle2,
  Clock,
  Star,
  TrendingUp,
  Brain,
  Sparkles,
  ChevronRight,
  BarChart3,
  Crown,
  Rocket,
  Award,
  BookOpen,
  Calendar,
  Gift,
  Lock,
  MessageSquare,
  Cpu,
  Wand2,
  Lightbulb,
  GraduationCap,
  Bot,
  Code2,
  FileCode,
  Mic,
  Shield,
  Eye
} from "lucide-react";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_lynxiq_interview_prep_app.png";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 17) setGreeting("Good afternoon");
    else if (hour >= 17) setGreeting("Good evening");
  }, []);

  const stats = {
    streak: 12,
    xp: 2450,
    level: 8,
    problemsSolved: 47,
    rank: 1284
  };

  const aiFeatures = [
    {
      title: "AI Code Review",
      desc: "Get instant feedback on code quality, efficiency, and best practices",
      icon: <Eye className="w-6 h-6" />,
      color: "bg-violet-500",
      lightColor: "bg-violet-50 border-violet-100",
      textColor: "text-violet-600",
      badge: "Pro",
      action: () => setLocation("/coding")
    },
    {
      title: "AI Tutor Chat",
      desc: "Ask questions, get explanations, and learn concepts interactively",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50 border-cyan-100",
      textColor: "text-cyan-600",
      badge: null,
      action: () => setLocation("/coding")
    },
    {
      title: "Smart Hints",
      desc: "Stuck on a problem? Get progressive hints without spoiling the solution",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-amber-500",
      lightColor: "bg-amber-50 border-amber-100",
      textColor: "text-amber-600",
      badge: null,
      action: () => setLocation("/coding")
    },
    {
      title: "Voice Coding",
      desc: "Explain your approach verbally and get AI feedback on your reasoning",
      icon: <Mic className="w-6 h-6" />,
      color: "bg-rose-500",
      lightColor: "bg-rose-50 border-rose-100",
      textColor: "text-rose-600",
      badge: "Beta",
      action: () => {}
    },
  ];

  const aiInsights = [
    { label: "Skill Gap Detected", value: "Dynamic Programming", improvement: "+15% with 3 more problems", icon: <Brain className="w-4 h-4" /> },
    { label: "Recommended Next", value: "Binary Search patterns", improvement: "Based on your progress", icon: <Target className="w-4 h-4" /> },
    { label: "Learning Velocity", value: "2.3x faster", improvement: "Than average learner", icon: <Rocket className="w-4 h-4" /> },
  ];

  const quickActions = [
    { 
      title: "Continue with AI", 
      subtitle: "LRU Cache - AI assistance ready", 
      icon: <Cpu className="w-5 h-5" />, 
      gradient: "from-violet-500 to-indigo-500",
      action: () => setLocation("/coding")
    },
    { 
      title: "Browse Problems", 
      subtitle: "156 AI-curated challenges", 
      icon: <BookOpen className="w-5 h-5" />, 
      gradient: "from-cyan-500 to-blue-500",
      action: () => setLocation("/problems")
    },
    { 
      title: "AI Mock Interview", 
      subtitle: "Practice with AI interviewer", 
      icon: <Bot className="w-5 h-5" />, 
      gradient: "from-emerald-500 to-teal-500",
      action: () => setLocation("/coding")
    },
  ];

  const recentProblems = [
    { id: 1, title: "Two Sum", difficulty: "easy", status: "solved", score: 92, aiReview: true },
    { id: 2, title: "Valid Parentheses", difficulty: "easy", status: "solved", score: 88, aiReview: true },
    { id: 3, title: "Merge Two Sorted Lists", difficulty: "easy", status: "attempted", aiReview: false },
  ];

  const achievements = [
    { name: "First Blood", desc: "Solve your first problem", unlocked: true, icon: <Target className="w-4 h-4" /> },
    { name: "AI Learner", desc: "Use AI hints 10 times", unlocked: true, icon: <Brain className="w-4 h-4" /> },
    { name: "Perfect Score", desc: "Get 100% AI score", unlocked: false, icon: <Star className="w-4 h-4" /> },
    { name: "Week Warrior", desc: "7-day streak", unlocked: true, icon: <Flame className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30 text-slate-900 overflow-x-hidden">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-violet-200/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan-200/50 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-amber-200/30 rounded-full blur-[60px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="LynxIQ" className="w-9 h-9" />
            <span className="font-display font-bold text-xl text-slate-900">LynxIQ</span>
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 text-[10px] font-bold">AI-POWERED</Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
              <Flame className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-bold text-amber-600">{stats.streak} day streak</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200">
              <Zap className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-bold text-violet-600">{stats.xp.toLocaleString()} XP</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-bold text-sm text-white shadow-lg shadow-violet-500/20">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-slate-500 mb-1">{greeting}, John</p>
              <h1 className="text-4xl lg:text-5xl font-display font-bold mb-3 text-slate-900">
                Your AI learning <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">companion</span>
              </h1>
              <p className="text-slate-500 max-w-lg">
                LynxIQ uses advanced AI to personalize your learning path, review your code, and help you master algorithms faster.
              </p>
            </div>

            {/* AI Status Card */}
            <div className="flex-shrink-0 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 w-full lg:w-80">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">AI Assistant</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-medium text-emerald-600">Online & Ready</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Problems analyzed</span>
                  <span className="font-bold text-slate-900">1,247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Code reviews given</span>
                  <span className="font-bold text-slate-900">89</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Hints provided</span>
                  <span className="font-bold text-slate-900">156</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {quickActions.map((action, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${action.gradient} cursor-pointer overflow-hidden group shadow-xl`}
              onClick={action.action}
              data-testid={`card-action-${idx}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{action.title}</h3>
                <p className="text-white/80 text-sm">{action.subtitle}</p>
              </div>
              <ArrowRight className="absolute bottom-6 right-6 w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </motion.div>

        {/* AI Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">AI-Powered Features</h2>
              <p className="text-sm text-slate-500">Supercharge your learning with artificial intelligence</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-2xl border ${feature.lightColor} cursor-pointer group transition-all hover:shadow-lg`}
                onClick={feature.action}
                data-testid={`card-ai-feature-${idx}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <Badge className={`${feature.badge === 'Pro' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-cyan-100 text-cyan-700 border-cyan-200'} text-[10px] font-bold`}>
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <h3 className={`font-bold mb-2 ${feature.textColor} group-hover:underline`}>{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Insights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-xl shadow-violet-500/20"
            >
              <div className="flex items-center gap-2 mb-5">
                <Brain className="w-5 h-5" />
                <h2 className="text-lg font-bold">AI Learning Insights</h2>
                <Badge className="bg-white/20 text-white border-none text-[10px]">Personalized</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {aiInsights.map((insight, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-white/70 mb-2">
                      {insight.icon}
                      <span className="text-xs font-medium">{insight.label}</span>
                    </div>
                    <div className="text-lg font-bold mb-1">{insight.value}</div>
                    <div className="text-xs text-white/60">{insight.improvement}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <StatCard icon={<CheckCircle2 className="w-5 h-5" />} label="Problems Solved" value={stats.problemsSolved} color="emerald" />
              <StatCard icon={<Flame className="w-5 h-5" />} label="Day Streak" value={stats.streak} color="amber" />
              <StatCard icon={<Trophy className="w-5 h-5" />} label="Global Rank" value={`#${stats.rank}`} color="violet" />
              <StatCard icon={<BarChart3 className="w-5 h-5" />} label="Avg AI Score" value="91%" color="cyan" />
            </motion.div>

            {/* Recent Activity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                  <Clock className="w-5 h-5 text-slate-400" />
                  Recent Activity
                </h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-500 hover:text-slate-900"
                  onClick={() => setLocation("/problems")}
                >
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-3">
                {recentProblems.map((problem, idx) => (
                  <motion.div
                    key={problem.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-200 cursor-pointer group transition-all"
                    onClick={() => setLocation("/coding")}
                    data-testid={`row-recent-${problem.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        problem.status === "solved" 
                          ? "bg-emerald-100 text-emerald-600" 
                          : "bg-amber-100 text-amber-600"
                      }`}>
                        {problem.status === "solved" ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 group-hover:text-violet-600 transition-colors">{problem.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <DifficultyBadge difficulty={problem.difficulty} />
                          {problem.aiReview && (
                            <span className="flex items-center gap-1 text-violet-600">
                              <Cpu className="w-3 h-3" /> AI Reviewed
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {problem.score && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-100 text-emerald-700">
                          <Star className="w-3 h-3" />
                          <span className="text-xs font-bold">{problem.score}%</span>
                        </div>
                      )}
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Tutor Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">AI Tutor</h3>
                  <p className="text-xs text-slate-500">Ask anything about coding</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                <p className="text-sm text-slate-600 italic">
                  "I noticed you're learning dynamic programming. Would you like me to explain the memoization pattern?"
                </p>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                onClick={() => setLocation("/coding")}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat with AI Tutor
              </Button>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold flex items-center gap-2 text-slate-900">
                  <Award className="w-5 h-5 text-amber-500" />
                  Achievements
                </h2>
                <span className="text-sm text-slate-500">{achievements.filter(a => a.unlocked).length}/{achievements.length}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      achievement.unlocked 
                        ? "bg-amber-50 border-amber-200" 
                        : "bg-slate-50 border-slate-100 opacity-50"
                    }`}
                  >
                    <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center mb-2 ${
                      achievement.unlocked 
                        ? "bg-amber-100 text-amber-600" 
                        : "bg-slate-100 text-slate-400"
                    }`}>
                      {achievement.unlocked ? achievement.icon : <Lock className="w-3 h-3" />}
                    </div>
                    <h4 className={`text-xs font-bold mb-0.5 ${achievement.unlocked ? "text-slate-900" : "text-slate-400"}`}>
                      {achievement.name}
                    </h4>
                    <p className="text-[10px] text-slate-500">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Daily Challenge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/50 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Daily AI Challenge</h3>
                    <p className="text-xs text-slate-500">+50 XP • AI-selected for you</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Today's challenge uses AI to match your skill level and learning goals.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20"
                  onClick={() => setLocation("/coding")}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Challenge
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string | number; color: string }) {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
    amber: "bg-amber-50 border-amber-200 text-amber-600",
    violet: "bg-violet-50 border-violet-200 text-violet-600",
    cyan: "bg-cyan-50 border-cyan-200 text-cyan-600",
  };

  return (
    <div className={`p-4 rounded-2xl border ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-2 opacity-80">
        {icon}
        <span className="text-[10px] uppercase tracking-wider font-bold">{label}</span>
      </div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    easy: "bg-emerald-100 text-emerald-700",
    medium: "bg-amber-100 text-amber-700",
    hard: "bg-rose-100 text-rose-700",
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}
