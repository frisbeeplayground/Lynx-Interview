import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  Flame,
  Sparkles,
  CheckCircle2,
  Circle,
  Clock,
  Trophy,
  ArrowLeft,
  Search,
  Filter,
  ChevronRight,
  Star,
  TrendingUp,
  Zap,
  Code2,
  Brain,
  Target,
  BarChart3,
  AlertCircle,
  ThumbsUp,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProblemStatus = "solved" | "attempted" | "not-started";
type Difficulty = "easy" | "medium" | "hard";

interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  status: ProblemStatus;
  isNew: boolean;
  isHot: boolean;
  aiScore?: number;
  points: number;
  solvedBy: number;
  feedback?: {
    codeQuality: number;
    efficiency: string;
    suggestions: string[];
    strengths: string[];
  };
}

const problems: Problem[] = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "easy",
    category: "Arrays",
    status: "solved",
    isNew: false,
    isHot: true,
    aiScore: 92,
    points: 100,
    solvedBy: 15420,
    feedback: {
      codeQuality: 92,
      efficiency: "O(n)",
      suggestions: ["Consider adding input validation for empty arrays"],
      strengths: ["Excellent use of HashMap for O(1) lookups", "Clean, readable code structure"]
    }
  },
  {
    id: "2",
    title: "Valid Parentheses",
    difficulty: "easy",
    category: "Stack",
    status: "solved",
    isNew: false,
    isHot: false,
    aiScore: 88,
    points: 100,
    solvedBy: 12300,
    feedback: {
      codeQuality: 88,
      efficiency: "O(n)",
      suggestions: ["Could use early return for odd-length strings"],
      strengths: ["Good stack implementation", "Handles all edge cases"]
    }
  },
  {
    id: "3",
    title: "Merge Two Sorted Lists",
    difficulty: "easy",
    category: "Linked Lists",
    status: "attempted",
    isNew: false,
    isHot: false,
    points: 100,
    solvedBy: 9800
  },
  {
    id: "4",
    title: "Maximum Subarray",
    difficulty: "medium",
    category: "Dynamic Programming",
    status: "attempted",
    isNew: true,
    isHot: true,
    points: 200,
    solvedBy: 8500
  },
  {
    id: "5",
    title: "Binary Tree Level Order Traversal",
    difficulty: "medium",
    category: "Trees",
    status: "not-started",
    isNew: true,
    isHot: false,
    points: 200,
    solvedBy: 6200
  },
  {
    id: "6",
    title: "LRU Cache",
    difficulty: "hard",
    category: "Design",
    status: "not-started",
    isNew: false,
    isHot: true,
    points: 350,
    solvedBy: 4100
  },
  {
    id: "7",
    title: "Longest Palindromic Substring",
    difficulty: "medium",
    category: "Strings",
    status: "not-started",
    isNew: false,
    isHot: false,
    points: 200,
    solvedBy: 7800
  },
  {
    id: "8",
    title: "Word Search II",
    difficulty: "hard",
    category: "Backtracking",
    status: "not-started",
    isNew: true,
    isHot: true,
    points: 400,
    solvedBy: 2300
  },
  {
    id: "9",
    title: "Climbing Stairs",
    difficulty: "easy",
    category: "Dynamic Programming",
    status: "solved",
    isNew: false,
    isHot: false,
    aiScore: 95,
    points: 100,
    solvedBy: 14200,
    feedback: {
      codeQuality: 95,
      efficiency: "O(n)",
      suggestions: [],
      strengths: ["Optimal DP solution", "Perfect space optimization with O(1)", "Well-documented code"]
    }
  },
  {
    id: "10",
    title: "Container With Most Water",
    difficulty: "medium",
    category: "Two Pointers",
    status: "not-started",
    isNew: true,
    isHot: false,
    points: 200,
    solvedBy: 5600
  },
  {
    id: "11",
    title: "Median of Two Sorted Arrays",
    difficulty: "hard",
    category: "Binary Search",
    status: "not-started",
    isNew: false,
    isHot: true,
    points: 450,
    solvedBy: 1800
  },
  {
    id: "12",
    title: "3Sum",
    difficulty: "medium",
    category: "Arrays",
    status: "attempted",
    isNew: false,
    isHot: false,
    points: 200,
    solvedBy: 8900
  }
];

export default function ProblemsPage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredProblems = problems.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === "all" || p.difficulty === difficultyFilter;
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesDifficulty && matchesStatus;
  });

  const stats = {
    solved: problems.filter(p => p.status === "solved").length,
    attempted: problems.filter(p => p.status === "attempted").length,
    total: problems.length,
    avgScore: Math.round(
      problems.filter(p => p.aiScore).reduce((acc, p) => acc + (p.aiScore || 0), 0) /
      problems.filter(p => p.aiScore).length
    )
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[#0f111a] text-slate-300">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#0f111a]/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl hover:bg-white/5"
                onClick={() => setLocation("/dashboard")}
                data-testid="button-back"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-white font-display">Problem Library</h1>
                <p className="text-xs text-slate-500">Master algorithms with AI-powered feedback</p>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-bold text-emerald-500">{stats.solved} Solved</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-amber-500">{stats.attempted} In Progress</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <Trophy className="w-4 h-4 text-violet-500" />
                <span className="text-sm font-bold text-violet-500">{stats.avgScore}% Avg Score</span>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Search and Filters */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input
                placeholder="Search problems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-slate-500"
                data-testid="input-search"
              />
            </div>

            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-40 h-12 bg-white/5 border-white/10 rounded-xl">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 h-12 bg-white/5 border-white/10 rounded-xl">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="solved">Solved</SelectItem>
                <SelectItem value="attempted">Attempted</SelectItem>
                <SelectItem value="not-started">Not Started</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Featured / Hot Problems */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-white">Trending Problems</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {problems.filter(p => p.isHot).slice(0, 3).map((problem, idx) => (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative p-5 rounded-2xl bg-gradient-to-br from-orange-500/10 to-rose-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all cursor-pointer group"
                  onClick={() => setLocation("/coding")}
                  data-testid={`card-hot-problem-${problem.id}`}
                >
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-gradient-to-r from-orange-500 to-rose-500 text-white border-none text-[10px] gap-1">
                      <Flame className="w-3 h-3" /> HOT
                    </Badge>
                  </div>
                  <div className="flex items-start gap-3">
                    <StatusIcon status={problem.status} />
                    <div className="flex-1">
                      <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors">{problem.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{problem.category}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <DifficultyBadge difficulty={problem.difficulty} />
                        <span className="text-xs text-slate-500">{problem.solvedBy.toLocaleString()} solved</span>
                      </div>
                    </div>
                  </div>
                  {problem.aiScore && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-500">AI Score</span>
                      <ScoreBadge score={problem.aiScore} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Problems List */}
          <div className="bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white/5 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-white/5">
              <div className="col-span-1">Status</div>
              <div className="col-span-4">Problem</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-1">Difficulty</div>
              <div className="col-span-2">Points</div>
              <div className="col-span-2">AI Score</div>
            </div>

            {/* Problem Rows */}
            <ScrollArea className="h-[500px]">
              {filteredProblems.map((problem, idx) => (
                <ProblemRow key={problem.id} problem={problem} idx={idx} onClick={() => setLocation("/coding")} />
              ))}
            </ScrollArea>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}

function ProblemRow({ problem, idx, onClick }: { problem: Problem; idx: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.03 }}
      className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.03] cursor-pointer group transition-colors"
      onClick={onClick}
      data-testid={`row-problem-${problem.id}`}
    >
      {/* Status */}
      <div className="col-span-1 flex items-center">
        <StatusIcon status={problem.status} />
      </div>

      {/* Title */}
      <div className="col-span-4 flex items-center gap-3">
        <span className="font-medium text-white group-hover:text-primary transition-colors">{problem.title}</span>
        {problem.isNew && (
          <Badge className="bg-cyan-500/20 text-cyan-400 border-none text-[9px] gap-1">
            <Sparkles className="w-2.5 h-2.5" /> NEW
          </Badge>
        )}
        {problem.isHot && (
          <Badge className="bg-orange-500/20 text-orange-400 border-none text-[9px] gap-1">
            <Flame className="w-2.5 h-2.5" /> HOT
          </Badge>
        )}
      </div>

      {/* Category */}
      <div className="col-span-2 flex items-center">
        <span className="text-sm text-slate-400">{problem.category}</span>
      </div>

      {/* Difficulty */}
      <div className="col-span-1 flex items-center">
        <DifficultyBadge difficulty={problem.difficulty} />
      </div>

      {/* Points */}
      <div className="col-span-2 flex items-center gap-2">
        <Star className="w-4 h-4 text-amber-500" />
        <span className="text-sm font-medium text-amber-500">{problem.points}</span>
      </div>

      {/* AI Score */}
      <div className="col-span-2 flex items-center">
        {problem.status === "solved" && problem.aiScore && problem.feedback ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 cursor-help">
                <ScoreBadge score={problem.aiScore} />
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left" className="w-80 p-0 bg-[#1a1d2e] border-white/10">
              <FeedbackTooltip problem={problem} />
            </TooltipContent>
          </Tooltip>
        ) : problem.status === "attempted" ? (
          <span className="text-xs text-slate-500 italic">In progress...</span>
        ) : (
          <span className="text-xs text-slate-600">—</span>
        )}
      </div>
    </motion.div>
  );
}

function FeedbackTooltip({ problem }: { problem: Problem }) {
  if (!problem.feedback) return null;

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-bold text-white">AI Feedback</span>
        </div>
        <ScoreBadge score={problem.aiScore!} />
      </div>

      {/* Efficiency */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Zap className="w-3 h-3 text-cyan-400" />
          Time Complexity
        </div>
        <span className="text-xs font-mono text-cyan-400 font-bold">{problem.feedback.efficiency}</span>
      </div>

      {/* Strengths */}
      {problem.feedback.strengths.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <ThumbsUp className="w-3 h-3" />
            Strengths
          </div>
          <div className="space-y-1">
            {problem.feedback.strengths.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300 pl-5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {problem.feedback.suggestions.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-amber-400">
            <Lightbulb className="w-3 h-3" />
            Suggestions
          </div>
          <div className="space-y-1">
            {problem.feedback.suggestions.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300 pl-5">
                <AlertCircle className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View Full Report Link */}
      <div className="pt-2 border-t border-white/10">
        <button className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1">
          View Full AI Report <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

function StatusIcon({ status }: { status: ProblemStatus }) {
  switch (status) {
    case "solved":
      return (
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        </div>
      );
    case "attempted":
      return (
        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
          <Clock className="w-4 h-4 text-amber-500" />
        </div>
      );
    default:
      return (
        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
          <Circle className="w-4 h-4 text-slate-600" />
        </div>
      );
  }
}

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const colors = {
    easy: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    hard: "bg-rose-500/20 text-rose-400 border-rose-500/30"
  };

  return (
    <Badge className={`${colors[difficulty]} border text-[10px] uppercase font-bold`}>
      {difficulty}
    </Badge>
  );
}

function ScoreBadge({ score }: { score: number }) {
  const getColor = (score: number) => {
    if (score >= 90) return "text-emerald-400 bg-emerald-500/20";
    if (score >= 75) return "text-cyan-400 bg-cyan-500/20";
    if (score >= 60) return "text-amber-400 bg-amber-500/20";
    return "text-rose-400 bg-rose-500/20";
  };

  return (
    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg ${getColor(score)}`}>
      <BarChart3 className="w-3 h-3" />
      <span className="text-xs font-bold">{score}%</span>
    </div>
  );
}
