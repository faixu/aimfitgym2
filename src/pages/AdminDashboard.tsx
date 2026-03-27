import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit2,
  CheckCircle,
  Clock,
  TrendingUp
} from "lucide-react";
import { cn } from "../lib/utils";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("leads");
  const navigate = useNavigate();

  const tabs = [
    { id: "leads", name: "Leads", icon: MessageSquare },
    { id: "content", name: "Content", icon: LayoutDashboard },
    { id: "pricing", name: "Pricing", icon: TrendingUp },
    { id: "testimonials", name: "Testimonials", icon: Users },
    { id: "settings", name: "Settings", icon: Settings },
  ];

  const mockLeads = [
    { id: "1", name: "Amit Kumar", phone: "9876543210", goal: "Weight Loss", status: "new", date: "2024-03-26" },
    { id: "2", name: "Suresh Raina", phone: "9876543211", goal: "Muscle Gain", status: "contacted", date: "2024-03-25" },
    { id: "3", name: "Pooja Hegde", phone: "9876543212", goal: "General Fitness", status: "joined", date: "2024-03-24" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-secondary rounded-3xl border border-white/5 p-4 sticky top-28">
            <div className="p-4 mb-6">
              <h2 className="text-xl font-display font-black tracking-tighter">ADMIN PANEL</h2>
              <p className="text-[10px] text-subtext font-bold uppercase tracking-widest mt-1">AimFit Gym India</p>
            </div>
            
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                    activeTab === tab.id 
                      ? "bg-accent text-white glow-red" 
                      : "text-subtext hover:bg-white/5 hover:text-white"
                  )}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.name}
                </button>
              ))}
              <button
                onClick={() => navigate("/admin")}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-500/10 transition-all mt-8"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="bg-secondary rounded-[2rem] border border-white/5 p-8 md:p-12">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <h1 className="text-3xl font-display font-black tracking-tighter uppercase">
                  {activeTab} Management
                </h1>
                <p className="text-subtext text-sm mt-1">Manage your gym's {activeTab} data dynamically.</p>
              </div>
              <button className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-accent hover:text-white transition-all glow-red-hover">
                <Plus className="w-4 h-4" />
                ADD NEW
              </button>
            </header>

            {/* Leads Table */}
            {activeTab === "leads" && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-subtext">Name</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-subtext">Phone</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-subtext">Goal</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-subtext">Status</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-subtext">Date</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-subtext text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {mockLeads.map((lead) => (
                      <tr key={lead.id} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 font-bold">{lead.name}</td>
                        <td className="py-6 text-subtext">{lead.phone}</td>
                        <td className="py-6">
                          <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {lead.goal}
                          </span>
                        </td>
                        <td className="py-6">
                          <div className="flex items-center gap-2">
                            {lead.status === "new" && <Clock className="w-4 h-4 text-yellow-500" />}
                            {lead.status === "contacted" && <Edit2 className="w-4 h-4 text-blue-500" />}
                            {lead.status === "joined" && <CheckCircle className="w-4 h-4 text-green-500" />}
                            <span className={cn(
                              "text-xs font-bold uppercase tracking-widest",
                              lead.status === "new" ? "text-yellow-500" : 
                              lead.status === "contacted" ? "text-blue-500" : "text-green-500"
                            )}>
                              {lead.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-6 text-subtext text-sm">{lead.date}</td>
                        <td className="py-6 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 hover:bg-white/10 rounded-lg text-subtext hover:text-white transition-colors">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-500 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Other tabs placeholders */}
            {activeTab !== "leads" && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-10 h-10 text-subtext" />
                </div>
                <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                <p className="text-subtext max-w-xs">We're building the {activeTab} management interface. Stay tuned!</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
