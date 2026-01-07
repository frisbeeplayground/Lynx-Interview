import { useState, useRef } from "react";
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
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function IDEPage() {
  const [, setLocation] = useLocation();
  const [showProblem, setShowProblem] = useState(true);
  const [activeFile, setActiveFile] = useState("solution.ts");
  const [chatInput, setChatInput] = useState("");
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

  return (
    <div className="h-screen w-full bg-[#0d0d0d] text-gray-300 flex flex-col font-mono overflow-hidden selection:bg-primary/30">
      {/* IDE Header */}
      <header className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#141414]">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <Separator orientation="vertical" className="h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-xs font-medium opacity-60">
            <FolderTree className="w-3.5 h-3.5" />
            <span>lynxiq-project</span>
            <ChevronRight className="w-3 h-3" />
            <span>src</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-100">{activeFile}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold">
            <BarChart3 className="w-3 h-3 text-primary" />
            <span>4,281 ATTEMPTS</span>
            <Separator orientation="vertical" className="h-3 bg-white/10 mx-1" />
            <span className="text-emerald-500">82% SUCCESS</span>
          </div>
          <Button variant="ghost" size="sm" className="h-8 text-xs gap-2 hover:bg-white/5" onClick={() => setShowProblem(true)}>
            <Layout className="w-3.5 h-3.5" />
            Problem
          </Button>
          <Button size="sm" className="h-8 bg-emerald-600 hover:bg-emerald-500 text-white text-xs gap-2 rounded-md px-4">
            <Play className="w-3 h-3 fill-current" />
            Run Code
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Folder Structure */}
        <aside className="w-64 border-right border-white/10 bg-[#111] flex flex-col border-r">
          <div className="p-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
            <span>Explorer</span>
            <Plus className="w-3 h-3 cursor-pointer hover:opacity-100" />
          </div>
          <ScrollArea className="flex-1">
            <div className="py-2">
              {files.map((file, i) => (
                <FileItem key={i} item={file} active={activeFile} setActive={setActiveFile} />
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Editor Area */}
        <main className="flex-1 flex flex-col bg-[#1e1e1e] relative">
          <div className="flex items-center bg-[#252525] px-2 h-9 gap-px border-b border-white/5">
            <Tab name="solution.ts" active={activeFile === "solution.ts"} onClick={() => setActiveFile("solution.ts")} />
            <Tab name="utils.ts" active={activeFile === "utils.ts"} onClick={() => setActiveFile("utils.ts")} />
            <Tab name="validators.ts" active={activeFile === "validators.ts"} onClick={() => setActiveFile("validators.ts")} />
          </div>
          
          <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-auto">
            <div className="flex gap-4">
              <div className="text-gray-600 text-right select-none pr-4 border-r border-white/5 w-8">
                {Array.from({length: 20}).map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <div className="flex-1 text-gray-300">
                <span className="text-purple-400 italic">import</span> {"{ target }"} <span className="text-purple-400 italic">from</span> <span className="text-emerald-400">"./helpers/utils"</span>;
                <br /><br />
                <span className="text-blue-400">export function</span> <span className="text-yellow-400">solve</span>(nums: <span className="text-blue-400">number[]</span>, target: <span className="text-blue-400">number</span>) {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-gray-500">// Your optimized AI-assisted logic here</span>
                <br />
                &nbsp;&nbsp;<span className="text-purple-400 italic">const</span> map = <span className="text-blue-400">new</span> Map();
                <br />
                &nbsp;&nbsp;
                <span className="inline-block w-2 h-5 bg-primary animate-pulse align-middle" />
                <br />
                {"}"}
              </div>
            </div>
          </div>

          {/* Terminal / Output */}
          <div className="h-32 border-t border-white/10 bg-[#111] p-4 font-mono text-xs">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <Terminal className="w-3.5 h-3.5" />
              <span>TERMINAL</span>
            </div>
            <div className="text-emerald-500">$ npm run test</div>
            <div className="text-gray-400 mt-1">✓ Solution passes all base test cases (0.42ms)</div>
          </div>
        </main>

        {/* LynxAI Chat Sidebar */}
        <aside className="w-80 border-l border-white/10 bg-[#141414] flex flex-col shadow-2xl">
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center relative">
              <Cpu className="w-5 h-5 text-primary" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#141414]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-100">LynxAI Assistant</h4>
              <p className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold">Pro Context-Aware</p>
            </div>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[90%] p-3 rounded-2xl text-xs leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 bg-[#111] border-t border-white/10">
            <div className="relative">
              <textarea 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Ask LynxAI anything..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs pr-12 focus:ring-1 ring-primary/50 outline-none resize-none min-h-[80px]"
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
              className="w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-100 font-display">Two Sum Problem</h2>
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
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    Given an array of integers <code className="text-primary bg-primary/10 px-1 rounded">nums</code> and an integer <code className="text-primary bg-primary/10 px-1 rounded">target</code>, return indices of the two numbers such that they add up to target.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Example Case
                    </h4>
                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-xs space-y-2">
                      <div className="flex gap-4">
                        <span className="text-gray-500 w-16">Input:</span>
                        <span className="text-gray-300">nums = [2,7,11,15], target = 9</span>
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
                  <Button variant="outline" className="h-14 px-8 border-white/10 rounded-2xl hover:bg-white/5" onClick={() => setShowProblem(false)}>
                    Later
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FileItem({ item, active, setActive }: any) {
  const [isOpen, setIsOpen] = useState(true);

  if (item.type === "folder") {
    return (
      <div className="select-none">
        <div 
          className="flex items-center gap-2 px-4 py-1.5 hover:bg-white/5 cursor-pointer text-xs"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronDown className="w-3.5 h-3.5 opacity-40" /> : <ChevronRight className="w-3.5 h-3.5 opacity-40" />}
          <span className="text-gray-400 font-medium">{item.name}</span>
        </div>
        {isOpen && (
          <div className="ml-4 border-l border-white/5">
            {item.children.map((child: any, i: number) => (
              <FileItem key={i} item={child} active={active} setActive={setActive} />
            ))}
          </div>
        )}
      </div>
    );
  }

  const isActive = active === item.name;
  return (
    <div 
      className={`flex items-center gap-2 px-4 py-1.5 cursor-pointer text-xs group transition-colors ${isActive ? 'bg-primary/10 text-primary border-r-2 border-primary' : 'hover:bg-white/5 text-gray-400'}`}
      onClick={() => setActive(item.name)}
    >
      <FileCode2 className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'opacity-40'}`} />
      <span className={isActive ? 'font-bold' : ''}>{item.name}</span>
    </div>
  );
}

function Tab({ name, active, onClick }: any) {
  return (
    <div 
      className={`flex items-center gap-2 px-4 h-full text-[10px] font-bold uppercase tracking-widest border-r border-white/5 cursor-pointer transition-colors ${
        active ? 'bg-[#1e1e1e] text-primary' : 'bg-[#2d2d2d] text-gray-500 hover:bg-[#333]'
      }`}
      onClick={onClick}
    >
      <FileCode2 className="w-3 h-3" />
      {name}
      {active && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
    </div>
  );
}
