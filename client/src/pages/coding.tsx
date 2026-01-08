import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderTree, 
  FileCode2, 
  Terminal, 
  Sparkles, 
  Send, 
  Play, 
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
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
  GitBranch,
  Github,
  Moon,
  Sun,
  Settings,
  MoreVertical,
  Search,
  Command,
  Braces,
  Zap,
  Eye,
  Crown,
  Clock,
  Database,
  Shield,
  Bug,
  FileCheck,
  Loader2,
  TrendingUp,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function IDEPage() {
  const [, setLocation] = useLocation();
  const [showProblem, setShowProblem] = useState(true);
  const [activeFile, setActiveFile] = useState("solution.ts");
  const [chatInput, setChatInput] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState("typescript");
  const [showGitModal, setShowGitModal] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [showDryRun, setShowDryRun] = useState(false);
  const [dryRunStep, setDryRunStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAgentReview, setShowAgentReview] = useState(false);
  const [reviewPhase, setReviewPhase] = useState<"idle" | "code-review" | "qa-review" | "complete">("idle");
  const [codeReviewComplete, setCodeReviewComplete] = useState(false);
  const [qaReviewComplete, setQaReviewComplete] = useState(false);
  
  const dryRunSteps = [
    {
      line: 1,
      description: "Initialize empty HashMap",
      variables: { map: "{}", i: "-", complement: "-" },
      array: [2, 7, 11, 15],
      highlights: [],
      output: "Created new Map()"
    },
    {
      line: 3,
      description: "Start loop: i = 0",
      variables: { map: "{}", i: "0", complement: "-" },
      array: [2, 7, 11, 15],
      highlights: [0],
      output: "Entering loop iteration 0"
    },
    {
      line: 4,
      description: "Calculate complement: 9 - 2 = 7",
      variables: { map: "{}", i: "0", complement: "7" },
      array: [2, 7, 11, 15],
      highlights: [0],
      output: "complement = target - nums[0] = 9 - 2 = 7"
    },
    {
      line: 5,
      description: "Check if 7 exists in map → No",
      variables: { map: "{}", i: "0", complement: "7" },
      array: [2, 7, 11, 15],
      highlights: [0],
      output: "map.has(7) → false"
    },
    {
      line: 6,
      description: "Store nums[0]=2 with index 0",
      variables: { map: "{2: 0}", i: "0", complement: "7" },
      array: [2, 7, 11, 15],
      highlights: [0],
      output: "map.set(2, 0)"
    },
    {
      line: 3,
      description: "Next iteration: i = 1",
      variables: { map: "{2: 0}", i: "1", complement: "-" },
      array: [2, 7, 11, 15],
      highlights: [1],
      output: "Entering loop iteration 1"
    },
    {
      line: 4,
      description: "Calculate complement: 9 - 7 = 2",
      variables: { map: "{2: 0}", i: "1", complement: "2" },
      array: [2, 7, 11, 15],
      highlights: [1],
      output: "complement = target - nums[1] = 9 - 7 = 2"
    },
    {
      line: 5,
      description: "Check if 2 exists in map → YES!",
      variables: { map: "{2: 0}", i: "1", complement: "2" },
      array: [2, 7, 11, 15],
      highlights: [0, 1],
      output: "map.has(2) → true ✓ Found match!"
    },
    {
      line: 7,
      description: "Return indices [0, 1]",
      variables: { map: "{2: 0}", i: "1", complement: "2" },
      array: [2, 7, 11, 15],
      highlights: [0, 1],
      output: "return [map.get(2), i] → [0, 1]"
    }
  ];

  useEffect(() => {
    if (isPlaying && showDryRun) {
      const timer = setTimeout(() => {
        if (dryRunStep < dryRunSteps.length - 1) {
          setDryRunStep(prev => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, dryRunStep, showDryRun]);

  // Agent review simulation
  useEffect(() => {
    if (showAgentReview && reviewPhase === "idle") {
      setReviewPhase("code-review");
      setCodeReviewComplete(false);
      setQaReviewComplete(false);
      
      // Simulate code review taking 3 seconds
      setTimeout(() => {
        setCodeReviewComplete(true);
        setReviewPhase("qa-review");
        
        // Simulate QA review taking 2.5 seconds
        setTimeout(() => {
          setQaReviewComplete(true);
          setReviewPhase("complete");
        }, 2500);
      }, 3000);
    }
  }, [showAgentReview, reviewPhase]);

  const startAgentReview = () => {
    setShowAgentReview(true);
    setReviewPhase("idle");
  };

  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your LynxAI pair programmer. I can help you with architecture, debugging, or explaining complex logic. What are we building today?" }
  ]);

  const files = [
    { name: "solution.ts", type: "file", language: "typescript" },
    { name: "helpers", type: "folder", children: [
      { name: "utils.ts", type: "file" },
      { name: "validators.ts", type: "file" }
    ]},
    { name: "tests", type: "folder", children: [
      { name: "solution.test.ts", type: "file" }
    ]},
    { name: "package.json", type: "file" }
  ];

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setMessages([...messages, { role: "user", content: chatInput }]);
    setChatInput("");
    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "I've analyzed your current implementation of the 'Two Sum' problem. Your helper function in utils.ts looks efficient, but consider handling the edge case where the target might be zero." }]);
    }, 1000);
  };

  // Simulate typing/autocomplete
  const handleEditorClick = () => {
    // Just a mock to show the autocomplete UI for demo purposes
    setTimeout(() => setShowAutocomplete(true), 2000);
  };

  const bgColor = theme === "dark" ? "bg-[#0f111a]" : "bg-[#f8f9fc]";
  const textColor = theme === "dark" ? "text-slate-300" : "text-slate-700";
  const headerColor = theme === "dark" ? "bg-[#161b22]" : "bg-white";
  const borderColor = theme === "dark" ? "border-white/5" : "border-slate-200";
  const sidebarColor = theme === "dark" ? "bg-[#0f111a]" : "bg-[#f1f5f9]";
  const editorColor = theme === "dark" ? "bg-[#13151f]" : "bg-white";

  return (
    <div className={`h-screen w-full flex flex-col font-mono overflow-hidden transition-colors duration-300 ${bgColor} ${textColor}`}>
      {/* IDE Header */}
      <header className={`h-14 border-b flex items-center justify-between px-4 ${headerColor} ${borderColor}`}>
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5 group cursor-pointer" onClick={() => setLocation("/dashboard")}>
            <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500" />
          </div>
          <Separator orientation="vertical" className={`h-6 ${borderColor}`} />
          <div className="flex items-center gap-2 text-xs font-medium opacity-60">
            <FolderTree className="w-4 h-4" />
            <span>lynxiq-project</span>
            <ChevronRight className="w-3 h-3" />
            <span>src</span>
            <ChevronRight className="w-3 h-3" />
            <span className={theme === "dark" ? "text-gray-100" : "text-gray-900"}>{activeFile}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className={`w-[140px] h-8 text-xs ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}>
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            variant="outline" 
            size="sm" 
            className={`h-8 text-xs gap-2 ${theme === "dark" ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-gray-200"}`}
            onClick={() => setShowGitModal(true)}
          >
            <GitBranch className="w-3.5 h-3.5" />
            Connect Git
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          <Separator orientation="vertical" className={`h-6 ${borderColor}`} />

          <Button 
            size="sm" 
            variant="outline"
            className={`h-8 text-xs gap-2 rounded-md px-4 ${theme === "dark" ? "bg-violet-500/10 border-violet-500/30 text-violet-400 hover:bg-violet-500/20" : "bg-violet-50 border-violet-200 text-violet-600 hover:bg-violet-100"}`}
            onClick={() => { setShowDryRun(true); setDryRunStep(0); setIsPlaying(false); }}
            data-testid="button-dry-run"
          >
            <Eye className="w-3 h-3" />
            Dry Run
          </Button>

          <Button size="sm" className="h-8 bg-emerald-600 hover:bg-emerald-500 text-white text-xs gap-2 rounded-md px-4 shadow-lg shadow-emerald-500/20">
            <Play className="w-3 h-3 fill-current" />
            Run Code
          </Button>

          <Button 
            size="sm" 
            className="h-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs gap-2 rounded-md px-4 shadow-lg shadow-amber-500/20"
            onClick={startAgentReview}
            data-testid="button-submit-review"
          >
            <Crown className="w-3 h-3" />
            Submit for Review
            <Badge className="ml-1 bg-white/20 text-white text-[8px] px-1 py-0 h-4 border-none">PRO</Badge>
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Folder Structure */}
        <aside className={`w-64 border-r flex flex-col ${sidebarColor} ${borderColor}`}>
          <div className="p-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
            <span>Explorer</span>
            <div className="flex gap-2">
              <Search className="w-3 h-3 cursor-pointer hover:opacity-100" />
              <Plus className="w-3 h-3 cursor-pointer hover:opacity-100" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="py-2">
              {files.map((file, i) => (
                <FileItem key={i} item={file} active={activeFile} setActive={setActiveFile} theme={theme} />
              ))}
            </div>
          </ScrollArea>
          
          <div className={`p-4 border-t ${borderColor}`}>
            <div className="flex items-center gap-2 text-xs font-medium opacity-70">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LynxIQ Sync Active</span>
            </div>
          </div>
        </aside>

        {/* Editor Area */}
        <main className={`flex-1 flex flex-col relative ${editorColor}`} onClick={handleEditorClick}>
          <div className={`flex items-center px-2 h-10 gap-px border-b ${theme === "dark" ? "bg-[#252525]" : "bg-gray-100"} ${borderColor}`}>
            <Tab name="solution.ts" active={activeFile === "solution.ts"} onClick={() => setActiveFile("solution.ts")} theme={theme} />
            <Tab name="utils.ts" active={activeFile === "utils.ts"} onClick={() => setActiveFile("utils.ts")} theme={theme} />
            <Tab name="validators.ts" active={activeFile === "validators.ts"} onClick={() => setActiveFile("validators.ts")} theme={theme} />
          </div>
          
          <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-auto relative">
            <div className="flex gap-4">
              <div className={`text-right select-none pr-4 border-r w-8 ${theme === "dark" ? "text-gray-600 border-white/5" : "text-gray-300 border-gray-100"}`}>
                {Array.from({length: 20}).map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <div className={`flex-1 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                <span className="text-purple-400 italic">import</span> {"{ target }"} <span className="text-purple-400 italic">from</span> <span className="text-emerald-400">"./helpers/utils"</span>;
                <br /><br />
                <span className="text-blue-400">export function</span> <span className="text-yellow-400">solve</span>(nums: <span className="text-blue-400">number[]</span>, target: <span className="text-blue-400">number</span>) {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-gray-500">// Your optimized AI-assisted logic here</span>
                <br />
                &nbsp;&nbsp;<span className="text-purple-400 italic">const</span> map = <span className="text-blue-400">new</span> Map();
                <br />
                &nbsp;&nbsp;
                <span className="relative inline-block">
                  <span className="w-0.5 h-5 bg-primary absolute top-0 animate-pulse" />
                  {showAutocomplete && (
                    <div className={`absolute top-6 left-0 w-64 rounded-lg border shadow-xl z-50 overflow-hidden ${theme === "dark" ? "bg-[#252525] border-white/10" : "bg-white border-gray-200"}`}>
                      <div className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider opacity-50 border-b ${theme === "dark" ? "border-white/5" : "border-gray-100"}`}>Suggestions</div>
                      <div className={`p-1 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                        <div className="flex items-center gap-2 px-2 py-1.5 bg-primary/20 text-primary rounded cursor-pointer">
                          <Braces className="w-3 h-3" />
                          <span>map.set(nums[i], i);</span>
                          <span className="ml-auto text-[10px] opacity-50">Tab</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer opacity-70">
                          <Braces className="w-3 h-3" />
                          <span>map.get(complement);</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer opacity-70">
                          <Braces className="w-3 h-3" />
                          <span>map.has(complement)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
                <br />
                {"}"}
              </div>
            </div>
          </div>

          {/* Terminal / Output */}
          <div className={`h-36 border-t p-4 font-mono text-xs ${sidebarColor} ${borderColor}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-gray-500">
                <Terminal className="w-3.5 h-3.5" />
                <span className="font-bold">TERMINAL</span>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-6 w-6"><X className="w-3 h-3" /></Button>
              </div>
            </div>
            <div className="text-emerald-500 font-bold">$ npm run test</div>
            <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mt-2`}>
              <div>&gt; lynxiq-project@0.1.0 test</div>
              <div>&gt; jest</div>
              <br />
              <div className="text-emerald-500">PASS src/tests/solution.test.ts</div>
              <div>✓ Solution passes all base test cases (0.42ms)</div>
              <div>✓ Handles edge cases (0.15ms)</div>
            </div>
          </div>
        </main>

        {/* LynxAI Chat Sidebar */}
        <aside className={`w-80 border-l flex flex-col shadow-2xl ${headerColor} ${borderColor}`}>
          <div className={`p-4 border-b flex items-center gap-3 ${borderColor}`}>
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center relative">
              <Cpu className="w-5 h-5 text-primary" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#141414]" />
            </div>
            <div>
              <h4 className={`text-sm font-bold ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>LynxAI Assistant</h4>
              <p className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold">Pro Context-Aware</p>
            </div>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[90%] p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : `${theme === "dark" ? "bg-white/5 border-white/10 text-gray-300" : "bg-white border-gray-200 text-gray-700"} border rounded-tl-none`
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className={`p-4 border-t ${sidebarColor} ${borderColor}`}>
            <div className="relative">
              <textarea 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Ask LynxAI anything..." 
                className={`w-full border rounded-xl py-3 px-4 text-xs pr-12 focus:ring-1 ring-primary/50 outline-none resize-none min-h-[80px] ${theme === "dark" ? "bg-white/5 border-white/10 text-white placeholder:text-gray-600" : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"}`}
              />
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute right-2 bottom-2 h-8 w-8 text-primary hover:text-white hover:bg-primary"
                onClick={handleSend}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </aside>
      </div>

      {/* Problem Popup Modal */}
      <AnimatePresence>
        {showProblem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`w-full max-w-2xl border rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden ${theme === "dark" ? "bg-[#1a1a1a] border-white/10" : "bg-white border-gray-200"}`}
            >
              <div className={`p-6 border-b flex items-center justify-between ${theme === "dark" ? "bg-white/5 border-white/5" : "bg-gray-50 border-gray-100"}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold font-display ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>Two Sum Problem</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <Badge className="bg-emerald-500/10 text-emerald-500 border-none text-[10px] uppercase font-bold px-2">Easy</Badge>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" /> 120 Points
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10" onClick={() => setShowProblem(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-8">
                <div className={`prose max-w-none ${theme === "dark" ? "prose-invert" : ""}`}>
                  <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    Given an array of integers <code className="text-primary bg-primary/10 px-1 rounded">nums</code> and an integer <code className="text-primary bg-primary/10 px-1 rounded">target</code>, return indices of the two numbers such that they add up to target.
                  </p>
                  <p className={`leading-relaxed mt-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <h4 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Example Case
                    </h4>
                    <div className={`rounded-2xl p-6 border font-mono text-xs space-y-2 ${theme === "dark" ? "bg-black/40 border-white/5" : "bg-gray-50 border-gray-200"}`}>
                      <div className="flex gap-4">
                        <span className="text-gray-500 w-16">Input:</span>
                        <span className={theme === "dark" ? "text-gray-300" : "text-gray-800"}>nums = [2,7,11,15], target = 9</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-500 w-16">Output:</span>
                        <span className="text-emerald-500">[0,1]</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-500 w-16">Reason:</span>
                        <span className="text-gray-400 italic">Because nums[0] + nums[1] == 9, we return [0, 1].</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 flex gap-4">
                  <Button className="flex-1 h-14 bg-primary hover:bg-primary/90 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20" onClick={() => setShowProblem(false)}>
                    Start Solving
                  </Button>
                  <Button variant="outline" className={`h-14 px-8 rounded-2xl ${theme === "dark" ? "border-white/10 hover:bg-white/5" : "border-gray-200 hover:bg-gray-50"}`} onClick={() => setShowProblem(false)}>
                    Later
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Git Connect Modal */}
      <Dialog open={showGitModal} onOpenChange={setShowGitModal}>
        <DialogContent className={theme === "dark" ? "bg-[#1a1a1a] border-white/10 text-white" : "bg-white"}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              Connect Repository
            </DialogTitle>
            <DialogDescription>
              Sync your solutions with a remote Git repository.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Repository URL</label>
              <Input placeholder="https://github.com/username/repo.git" className={theme === "dark" ? "bg-white/5 border-white/10" : ""} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Branch</label>
              <Input placeholder="main" className={theme === "dark" ? "bg-white/5 border-white/10" : ""} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowGitModal(false)} className={theme === "dark" ? "border-white/10 hover:bg-white/5 hover:text-white" : ""}>Cancel</Button>
            <Button onClick={() => setShowGitModal(false)}>Connect</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Live Dry Run Simulation Modal */}
      <AnimatePresence>
        {showDryRun && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className={`w-full max-w-5xl border rounded-3xl shadow-2xl overflow-hidden ${theme === "dark" ? "bg-[#0f111a] border-white/10" : "bg-white border-gray-200"}`}
              data-testid="modal-dry-run"
            >
              {/* Header */}
              <div className={`p-5 border-b flex items-center justify-between ${theme === "dark" ? "bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border-white/5" : "bg-gradient-to-r from-violet-50 to-indigo-50 border-gray-100"}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme === "dark" ? "bg-violet-500/20" : "bg-violet-100"}`}>
                    <Zap className="w-6 h-6 text-violet-500" />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold font-display ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      Live Dry Run Simulation
                    </h2>
                    <p className={`text-xs mt-0.5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Step-by-step visual execution • Two Sum Algorithm
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={`${theme === "dark" ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-100 text-emerald-600"} border-none`}>
                    Step {dryRunStep + 1} of {dryRunSteps.length}
                  </Badge>
                  <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setShowDryRun(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6 grid grid-cols-2 gap-6">
                {/* Left: Visualization */}
                <div className="space-y-6">
                  {/* Array Visualization */}
                  <div className={`p-5 rounded-2xl border ${theme === "dark" ? "bg-[#161b22] border-white/5" : "bg-gray-50 border-gray-100"}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                        Input Array: nums
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${theme === "dark" ? "bg-white/5 text-gray-400" : "bg-gray-200 text-gray-500"}`}>
                        target = 9
                      </span>
                    </div>
                    <div className="flex gap-3 justify-center">
                      {dryRunSteps[dryRunStep].array.map((num, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0.8 }}
                          animate={{ 
                            scale: dryRunSteps[dryRunStep].highlights.includes(idx) ? 1.1 : 1,
                            y: dryRunSteps[dryRunStep].highlights.includes(idx) ? -8 : 0
                          }}
                          transition={{ type: "spring", damping: 15 }}
                          className={`relative w-16 h-16 rounded-xl flex flex-col items-center justify-center font-mono transition-all duration-300 ${
                            dryRunSteps[dryRunStep].highlights.includes(idx)
                              ? "bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/30"
                              : theme === "dark" 
                                ? "bg-white/5 text-gray-300 border border-white/10" 
                                : "bg-white text-gray-700 border border-gray-200"
                          }`}
                        >
                          <span className="text-xl font-bold">{num}</span>
                          <span className={`text-[9px] mt-1 ${dryRunSteps[dryRunStep].highlights.includes(idx) ? "text-white/70" : "opacity-40"}`}>
                            i={idx}
                          </span>
                          {dryRunSteps[dryRunStep].highlights.includes(idx) && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Variables State */}
                  <div className={`p-5 rounded-2xl border ${theme === "dark" ? "bg-[#161b22] border-white/5" : "bg-gray-50 border-gray-100"}`}>
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                      Variable State
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(dryRunSteps[dryRunStep].variables).map(([key, value]) => (
                        <motion.div
                          key={key}
                          layout
                          className={`p-3 rounded-xl border ${theme === "dark" ? "bg-black/30 border-white/5" : "bg-white border-gray-200"}`}
                        >
                          <div className={`text-[10px] font-medium uppercase mb-1 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                            {key}
                          </div>
                          <motion.div
                            key={value}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`font-mono text-sm font-bold ${
                              value === "-" 
                                ? "text-gray-500" 
                                : key === "map" 
                                  ? "text-amber-500" 
                                  : "text-cyan-500"
                            }`}
                          >
                            {value}
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Current Action */}
                  <motion.div
                    key={dryRunStep}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-4 rounded-2xl border-l-4 border-violet-500 ${theme === "dark" ? "bg-violet-500/10" : "bg-violet-50"}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-violet-500" />
                      <span className={`text-xs font-bold ${theme === "dark" ? "text-violet-400" : "text-violet-600"}`}>
                        Current Step
                      </span>
                    </div>
                    <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      {dryRunSteps[dryRunStep].description}
                    </p>
                  </motion.div>
                </div>

                {/* Right: Code + Output */}
                <div className="space-y-4">
                  {/* Mini Code View */}
                  <div className={`rounded-2xl border overflow-hidden ${theme === "dark" ? "bg-[#13151f] border-white/5" : "bg-gray-900 border-gray-800"}`}>
                    <div className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border-b ${theme === "dark" ? "text-gray-500 border-white/5" : "text-gray-400 border-gray-800"}`}>
                      solution.ts
                    </div>
                    <div className="p-4 font-mono text-xs leading-relaxed">
                      {[
                        { num: 1, code: "const map = new Map();", highlight: dryRunSteps[dryRunStep].line === 1 },
                        { num: 2, code: "", highlight: false },
                        { num: 3, code: "for (let i = 0; i < nums.length; i++) {", highlight: dryRunSteps[dryRunStep].line === 3 },
                        { num: 4, code: "  const complement = target - nums[i];", highlight: dryRunSteps[dryRunStep].line === 4 },
                        { num: 5, code: "  if (map.has(complement)) {", highlight: dryRunSteps[dryRunStep].line === 5 },
                        { num: 6, code: "    map.set(nums[i], i);", highlight: dryRunSteps[dryRunStep].line === 6 },
                        { num: 7, code: "    return [map.get(complement), i];", highlight: dryRunSteps[dryRunStep].line === 7 },
                        { num: 8, code: "  }", highlight: false },
                        { num: 9, code: "}", highlight: false },
                      ].map((line) => (
                        <div 
                          key={line.num}
                          className={`flex gap-4 px-2 py-0.5 -mx-2 rounded transition-all duration-300 ${
                            line.highlight 
                              ? "bg-violet-500/20 border-l-2 border-violet-500" 
                              : ""
                          }`}
                        >
                          <span className="w-4 text-gray-600 select-none">{line.num}</span>
                          <span className={line.highlight ? "text-violet-300" : "text-gray-400"}>{line.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Console Output */}
                  <div className={`rounded-2xl border ${theme === "dark" ? "bg-[#161b22] border-white/5" : "bg-gray-50 border-gray-100"}`}>
                    <div className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border-b flex items-center gap-2 ${theme === "dark" ? "text-gray-500 border-white/5" : "text-gray-400 border-gray-100"}`}>
                      <Terminal className="w-3 h-3" />
                      Console Output
                    </div>
                    <ScrollArea className="h-24">
                      <div className="p-4 font-mono text-xs space-y-1">
                        {dryRunSteps.slice(0, dryRunStep + 1).map((step, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`${
                              step.output.includes("✓") 
                                ? "text-emerald-500" 
                                : theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            <span className="text-gray-600">&gt;</span> {step.output}
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>

              {/* Controls Footer */}
              <div className={`p-5 border-t flex items-center justify-between ${theme === "dark" ? "bg-[#161b22] border-white/5" : "bg-gray-50 border-gray-100"}`}>
                {/* Progress Bar */}
                <div className="flex-1 mr-6">
                  <div className={`h-2 rounded-full overflow-hidden ${theme === "dark" ? "bg-white/10" : "bg-gray-200"}`}>
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((dryRunStep + 1) / dryRunSteps.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Playback Controls */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`h-10 w-10 rounded-xl ${theme === "dark" ? "border-white/10 hover:bg-white/5" : ""}`}
                    onClick={() => { setDryRunStep(0); setIsPlaying(false); }}
                    disabled={dryRunStep === 0}
                    data-testid="button-reset"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`h-10 w-10 rounded-xl ${theme === "dark" ? "border-white/10 hover:bg-white/5" : ""}`}
                    onClick={() => setDryRunStep(Math.max(0, dryRunStep - 1))}
                    disabled={dryRunStep === 0}
                    data-testid="button-step-back"
                  >
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    className={`h-12 w-12 rounded-xl ${
                      isPlaying 
                        ? "bg-amber-500 hover:bg-amber-400" 
                        : "bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-400 hover:to-indigo-400"
                    } text-white shadow-lg`}
                    onClick={() => setIsPlaying(!isPlaying)}
                    data-testid="button-play-pause"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`h-10 w-10 rounded-xl ${theme === "dark" ? "border-white/10 hover:bg-white/5" : ""}`}
                    onClick={() => setDryRunStep(Math.min(dryRunSteps.length - 1, dryRunStep + 1))}
                    disabled={dryRunStep === dryRunSteps.length - 1}
                    data-testid="button-step-forward"
                  >
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Agent Review Modal - PRO Feature */}
      <AnimatePresence>
        {showAgentReview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className={`w-full max-w-4xl border rounded-3xl shadow-2xl overflow-hidden ${theme === "dark" ? "bg-[#0f111a] border-white/10" : "bg-white border-gray-200"}`}
              data-testid="modal-agent-review"
            >
              {/* Header */}
              <div className={`p-5 border-b flex items-center justify-between ${theme === "dark" ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-white/5" : "bg-gradient-to-r from-amber-50 to-orange-50 border-gray-100"}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className={`text-xl font-bold font-display ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        AI Agent Review
                      </h2>
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none text-[10px]">PRO</Badge>
                    </div>
                    <p className={`text-xs mt-0.5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Code Reviewer + QA Agent analyzing your solution
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => { setShowAgentReview(false); setReviewPhase("idle"); }}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                {/* Complexity Analysis Section */}
                <div className={`p-5 rounded-2xl border ${theme === "dark" ? "bg-[#161b22] border-white/5" : "bg-gray-50 border-gray-100"}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-4 h-4 text-cyan-500" />
                    <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Complexity Analysis</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Time Complexity */}
                    <div className={`p-4 rounded-xl border ${theme === "dark" ? "bg-black/30 border-white/5" : "bg-white border-gray-200"}`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-emerald-500" />
                          <span className={`text-xs font-bold uppercase tracking-wider ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Time Complexity</span>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-500 border-none text-sm font-mono font-bold">O(n)</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Best Case</span>
                          <span className="text-emerald-500 font-mono">O(1)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Average</span>
                          <span className="text-emerald-500 font-mono">O(n)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Worst Case</span>
                          <span className="text-amber-500 font-mono">O(n)</span>
                        </div>
                      </div>
                      {/* Visual Graph */}
                      <div className="mt-4 h-16 flex items-end gap-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${i * 12}%` }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-500 rounded-t"
                          />
                        ))}
                      </div>
                      <p className={`text-[10px] mt-2 text-center ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}>Linear growth with input size</p>
                    </div>

                    {/* Space Complexity */}
                    <div className={`p-4 rounded-xl border ${theme === "dark" ? "bg-black/30 border-white/5" : "bg-white border-gray-200"}`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-violet-500" />
                          <span className={`text-xs font-bold uppercase tracking-wider ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Space Complexity</span>
                        </div>
                        <Badge className="bg-violet-500/20 text-violet-500 border-none text-sm font-mono font-bold">O(n)</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>HashMap Storage</span>
                          <span className="text-violet-500 font-mono">O(n)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Variables</span>
                          <span className="text-emerald-500 font-mono">O(1)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Total</span>
                          <span className="text-violet-500 font-mono">O(n)</span>
                        </div>
                      </div>
                      {/* Visual Memory Blocks */}
                      <div className="mt-4 flex gap-1 flex-wrap">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: i < 4 ? 1 : 0.3 }}
                            transition={{ delay: i * 0.05 }}
                            className={`w-6 h-6 rounded ${i < 4 ? "bg-gradient-to-br from-violet-500 to-indigo-500" : theme === "dark" ? "bg-white/5" : "bg-gray-100"}`}
                          />
                        ))}
                      </div>
                      <p className={`text-[10px] mt-2 text-center ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}>HashMap stores up to n elements</p>
                    </div>
                  </div>
                </div>

                {/* Agent Review Panels */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Code Reviewer Agent */}
                  <div className={`p-5 rounded-2xl border ${theme === "dark" ? "bg-[#161b22] border-white/5" : "bg-gray-50 border-gray-100"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${codeReviewComplete ? "bg-emerald-500/20" : "bg-cyan-500/20"}`}>
                        {reviewPhase === "code-review" && !codeReviewComplete ? (
                          <Loader2 className="w-5 h-5 text-cyan-500 animate-spin" />
                        ) : codeReviewComplete ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <FileCheck className="w-5 h-5 text-cyan-500" />
                        )}
                      </div>
                      <div>
                        <h3 className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Code Reviewer Agent</h3>
                        <p className={`text-[10px] ${codeReviewComplete ? "text-emerald-500" : theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                          {codeReviewComplete ? "Review Complete" : reviewPhase === "code-review" ? "Analyzing code quality..." : "Pending"}
                        </p>
                      </div>
                    </div>
                    
                    {codeReviewComplete && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                        <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-emerald-500/10" : "bg-emerald-50"}`}>
                          <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold mb-1">
                            <CheckCircle2 className="w-3 h-3" /> Clean Code
                          </div>
                          <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Good use of HashMap for O(1) lookups</p>
                        </div>
                        <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-amber-500/10" : "bg-amber-50"}`}>
                          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold mb-1">
                            <AlertCircle className="w-3 h-3" /> Suggestion
                          </div>
                          <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Consider adding input validation for empty arrays</p>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>Code Quality Score</span>
                          <div className="flex items-center gap-2">
                            <div className={`w-24 h-2 rounded-full overflow-hidden ${theme === "dark" ? "bg-white/10" : "bg-gray-200"}`}>
                              <motion.div initial={{ width: 0 }} animate={{ width: "92%" }} className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
                            </div>
                            <span className="text-emerald-500 font-bold text-sm">92%</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* QA Agent */}
                  <div className={`p-5 rounded-2xl border ${theme === "dark" ? "bg-[#161b22] border-white/5" : "bg-gray-50 border-gray-100"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${qaReviewComplete ? "bg-emerald-500/20" : "bg-rose-500/20"}`}>
                        {reviewPhase === "qa-review" && !qaReviewComplete ? (
                          <Loader2 className="w-5 h-5 text-rose-500 animate-spin" />
                        ) : qaReviewComplete ? (
                          <Shield className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Bug className="w-5 h-5 text-rose-500" />
                        )}
                      </div>
                      <div>
                        <h3 className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>QA Agent</h3>
                        <p className={`text-[10px] ${qaReviewComplete ? "text-emerald-500" : reviewPhase === "qa-review" ? "text-rose-500" : theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                          {qaReviewComplete ? "All Tests Passed" : reviewPhase === "qa-review" ? "Running test suites..." : "Waiting for Code Review"}
                        </p>
                      </div>
                    </div>
                    
                    {qaReviewComplete && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                        <div className="space-y-2">
                          {[
                            { name: "Basic test cases", passed: true },
                            { name: "Edge cases (empty array)", passed: true },
                            { name: "Large input stress test", passed: true },
                            { name: "Negative numbers", passed: true },
                          ].map((test, i) => (
                            <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-lg ${theme === "dark" ? "bg-black/20" : "bg-white"}`}>
                              <span className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{test.name}</span>
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>Test Coverage</span>
                          <div className="flex items-center gap-2">
                            <div className={`w-24 h-2 rounded-full overflow-hidden ${theme === "dark" ? "bg-white/10" : "bg-gray-200"}`}>
                              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                            </div>
                            <span className="text-emerald-500 font-bold text-sm">100%</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                {reviewPhase === "complete" && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
                    <Button 
                      size="lg" 
                      className="h-14 px-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-500/20"
                      onClick={() => { setShowAgentReview(false); setReviewPhase("idle"); }}
                    >
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Submit Solution
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FileItem({ item, active, setActive, theme }: any) {
  const [isOpen, setIsOpen] = useState(true);

  if (item.type === "folder") {
    return (
      <div className="select-none">
        <div 
          className={`flex items-center gap-2 px-4 py-1.5 cursor-pointer text-xs ${theme === "dark" ? "hover:bg-white/5" : "hover:bg-gray-100"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronDown className="w-3.5 h-3.5 opacity-40" /> : <ChevronRight className="w-3.5 h-3.5 opacity-40" />}
          <span className={`font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{item.name}</span>
        </div>
        {isOpen && (
          <div className={`ml-4 border-l ${theme === "dark" ? "border-white/5" : "border-gray-200"}`}>
            {item.children.map((child: any, i: number) => (
              <FileItem key={i} item={child} active={active} setActive={setActive} theme={theme} />
            ))}
          </div>
        )}
      </div>
    );
  }

  const isActive = active === item.name;
  return (
    <div 
      className={`flex items-center gap-2 px-4 py-1.5 cursor-pointer text-xs group transition-colors ${
        isActive 
          ? 'bg-primary/10 text-primary border-r-2 border-primary' 
          : `${theme === "dark" ? "hover:bg-white/5 text-gray-400" : "hover:bg-gray-100 text-gray-600"}`
      }`}
      onClick={() => setActive(item.name)}
    >
      <FileCode2 className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'opacity-40'}`} />
      <span className={isActive ? 'font-bold' : ''}>{item.name}</span>
    </div>
  );
}

function Tab({ name, active, onClick, theme }: any) {
  return (
    <div 
      className={`flex items-center gap-2 px-4 h-full text-[10px] font-bold uppercase tracking-widest border-r cursor-pointer transition-colors ${
        theme === "dark" ? "border-white/5" : "border-gray-200"
      } ${
        active 
          ? `${theme === "dark" ? "bg-[#1e1e1e] text-primary" : "bg-white text-primary"}` 
          : `${theme === "dark" ? "bg-[#2d2d2d] text-gray-500 hover:bg-[#333]" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`
      }`}
      onClick={onClick}
    >
      <FileCode2 className="w-3 h-3" />
      {name}
      {active && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
    </div>
  );
}
