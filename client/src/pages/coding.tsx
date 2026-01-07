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
  Braces
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

          <Button size="sm" className="h-8 bg-emerald-600 hover:bg-emerald-500 text-white text-xs gap-2 rounded-md px-4 shadow-lg shadow-emerald-500/20">
            <Play className="w-3 h-3 fill-current" />
            Run Code
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
