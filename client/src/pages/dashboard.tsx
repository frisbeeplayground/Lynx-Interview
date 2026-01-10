import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Code2,
  Brain,
  Sparkles,
  ChevronRight,
  BarChart3,
  Crown,
  Rocket,
  Award,
  BookOpen,
  Users,
  Calendar,
  Gift,
  Lock
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

  const recentProblems = [
    { id: 1, title: "Two Sum", difficulty: "easy", status: "solved", score: 92, time: "12 min" },
    { id: 2, title: "Valid Parentheses", difficulty: "easy", status: "solved", score: 88, time: "8 min" },
    { id: 3, title: "Merge Two Sorted Lists", difficulty: "easy", status: "attempted", time: "15 min" },
  ];

  const quickActions = [
    { 
      title: "Continue Problem", 
      subtitle: "LRU Cache - Medium", 
      icon: <Play className="w-5 h-5" />, 
      color: "from-violet-500 to-indigo-600",
      action: () => setLocation("/coding")
    },
    { 
      title: "Browse Problems", 
      subtitle: "156 new challenges", 
      icon: <BookOpen className="w-5 h-5" />, 
      color: "from-cyan-500 to-blue-600",
      action: () => setLocation("/problems")
    },
    { 
      title: "Daily Challenge", 
      subtitle: "+50 XP bonus", 
      icon: <Zap className="w-5 h-5" />, 
      color: "from-amber-500 to-orange-600",
      action: () => setLocation("/coding")
    },
  ];

  const achievements = [
    { name: "First Blood", desc: "Solve your first problem", unlocked: true, icon: <Target className="w-4 h-4" /> },
    { name: "Speed Demon", desc: "Solve in under 5 min", unlocked: true, icon: <Zap className="w-4 h-4" /> },
    { name: "Perfect Score", desc: "Get 100% AI score", unlocked: false, icon: <Star className="w-4 h-4" /> },
    { name: "Week Warrior", desc: "7-day streak", unlocked: true, icon: <Flame className="w-4 h-4" /> },
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", xp: 8420, avatar: "AC" },
    { rank: 2, name: "Sarah Kim", xp: 7850, avatar: "SK" },
    { rank: 3, name: "Mike Johnson", xp: 6920, avatar: "MJ" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/5 bg-[#0a0b0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="LynxIQ" className="w-9 h-9" />
            <span className="font-display font-bold text-xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">LynxIQ</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Flame className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-bold text-amber-500">{stats.streak} day streak</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
              <Zap className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-bold text-violet-500">{stats.xp.toLocaleString()} XP</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-bold text-sm shadow-lg shadow-violet-500/20">
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
              <p className="text-slate-400 mb-1">{greeting}, John</p>
              <h1 className="text-4xl lg:text-5xl font-display font-bold mb-3">
                Ready to <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">level up</span>?
              </h1>
              <p className="text-slate-400 max-w-md">
                You're making great progress! Complete today's challenge to maintain your streak.
              </p>
            </div>

            {/* Level Progress Card */}
            <div className="flex-shrink-0 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm w-full lg:w-80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Current Level</div>
                    <div className="text-2xl font-bold">{stats.level}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Next Level</div>
                  <div className="text-lg font-bold text-violet-400">{stats.level + 1}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{stats.xp} XP</span>
                  <span className="text-slate-500">3000 XP</span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(stats.xp / 3000) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                  />
                </div>
                <p className="text-xs text-slate-500 text-center">{3000 - stats.xp} XP to next level</p>
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
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${action.color} cursor-pointer overflow-hidden group shadow-xl`}
              onClick={action.action}
              data-testid={`card-action-${idx}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{action.title}</h3>
                <p className="text-white/70 text-sm">{action.subtitle}</p>
              </div>
              <ArrowRight className="absolute bottom-6 right-6 w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <StatCard 
                icon={<CheckCircle2 className="w-5 h-5" />}
                label="Problems Solved"
                value={stats.problemsSolved}
                color="emerald"
              />
              <StatCard 
                icon={<Flame className="w-5 h-5" />}
                label="Day Streak"
                value={stats.streak}
                color="amber"
              />
              <StatCard 
                icon={<Trophy className="w-5 h-5" />}
                label="Global Rank"
                value={`#${stats.rank}`}
                color="violet"
              />
              <StatCard 
                icon={<BarChart3 className="w-5 h-5" />}
                label="Avg Score"
                value="91%"
                color="cyan"
              />
            </motion.div>

            {/* Recent Activity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Clock className="w-5 h-5 text-slate-400" />
                  Recent Activity
                </h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-400 hover:text-white"
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
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 cursor-pointer group transition-all"
                    onClick={() => setLocation("/coding")}
                    data-testid={`row-recent-${problem.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        problem.status === "solved" 
                          ? "bg-emerald-500/20 text-emerald-500" 
                          : "bg-amber-500/20 text-amber-500"
                      }`}>
                        {problem.status === "solved" ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-violet-400 transition-colors">{problem.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <DifficultyBadge difficulty={problem.difficulty} />
                          <span>{problem.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {problem.score && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400">
                          <Star className="w-3 h-3" />
                          <span className="text-xs font-bold">{problem.score}%</span>
                        </div>
                      )}
                      <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Achievements
                </h2>
                <span className="text-sm text-slate-500">{achievements.filter(a => a.unlocked).length}/{achievements.length} unlocked</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: achievement.unlocked ? 1.05 : 1 }}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      achievement.unlocked 
                        ? "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20" 
                        : "bg-white/[0.02] border-white/5 opacity-50"
                    }`}
                  >
                    <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-2 ${
                      achievement.unlocked 
                        ? "bg-amber-500/20 text-amber-500" 
                        : "bg-white/5 text-slate-600"
                    }`}>
                      {achievement.unlocked ? achievement.icon : <Lock className="w-4 h-4" />}
                    </div>
                    <h4 className={`text-xs font-bold mb-1 ${achievement.unlocked ? "text-white" : "text-slate-500"}`}>
                      {achievement.name}
                    </h4>
                    <p className="text-[10px] text-slate-500">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <h2 className="text-lg font-bold flex items-center gap-2 mb-5">
                <Trophy className="w-5 h-5 text-amber-500" />
                Leaderboard
              </h2>

              <div className="space-y-3">
                {leaderboard.map((user, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      idx === 0 ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20" : "bg-white/[0.02]"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      idx === 0 ? "bg-amber-500 text-black" :
                      idx === 1 ? "bg-slate-400 text-black" :
                      "bg-amber-700 text-white"
                    }`}>
                      {user.rank}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-slate-500">{user.xp.toLocaleString()} XP</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center font-bold text-sm text-violet-400">
                    {stats.rank}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">You</div>
                    <div className="text-xs text-violet-400">{stats.xp.toLocaleString()} XP</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Daily Challenge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Daily Challenge</h3>
                    <p className="text-xs text-slate-400">Refreshes in 8h 23m</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 mb-4">
                  Complete today's challenge for bonus XP and exclusive rewards!
                </p>
                <Button 
                  className="w-full bg-violet-500 hover:bg-violet-400 text-white shadow-lg shadow-violet-500/20"
                  onClick={() => setLocation("/coding")}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Challenge
                </Button>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <h2 className="text-lg font-bold flex items-center gap-2 mb-5">
                <Calendar className="w-5 h-5 text-cyan-500" />
                Upcoming
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex flex-col items-center justify-center">
                    <span className="text-xs text-cyan-500 font-bold">JAN</span>
                    <span className="text-lg font-bold text-cyan-400">15</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Weekly Contest</h4>
                    <p className="text-xs text-slate-500">3 problems • 90 min</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex flex-col items-center justify-center">
                    <span className="text-xs text-violet-500 font-bold">JAN</span>
                    <span className="text-lg font-bold text-violet-400">20</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">System Design Workshop</h4>
                    <p className="text-xs text-slate-500">Live session • 2 hrs</p>
                  </div>
                </div>
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
    emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-500",
    amber: "from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-500",
    violet: "from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-500",
    cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-500",
  };

  return (
    <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors[color]} border`}>
      <div className="flex items-center gap-2 mb-2 opacity-80">
        {icon}
        <span className="text-[10px] uppercase tracking-wider font-bold">{label}</span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    easy: "bg-emerald-500/20 text-emerald-400",
    medium: "bg-amber-500/20 text-amber-400",
    hard: "bg-rose-500/20 text-rose-400",
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}
