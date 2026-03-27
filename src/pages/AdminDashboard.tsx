import React, { useState, useEffect } from "react";
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
  TrendingUp,
  Save
} from "lucide-react";
import { cn } from "../lib/utils";
import { 
  subscribeToLeads, 
  subscribeToSiteContent, 
  updateSiteContent, 
  updateLeadStatus,
  defaultSiteContent 
} from "../services/cmsService";
import { Lead, SiteContent } from "../types";
import { toast } from "sonner";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("leads");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [cmsContent, setCmsContent] = useState<SiteContent>(defaultSiteContent);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out.");
      navigate("/admin");
    } catch (error) {
      toast.error("Logout failed.");
    }
  };

  useEffect(() => {
    const unsubLeads = subscribeToLeads(setLeads);
    const unsubCms = subscribeToSiteContent(setCmsContent);
    return () => {
      unsubLeads();
      unsubCms();
    };
  }, []);

  const handleCmsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCmsContent(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveCms = async () => {
    setIsSaving(true);
    try {
      await updateSiteContent(cmsContent);
      toast.success("Website content updated successfully!");
    } catch (error) {
      toast.error("Failed to update content.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleStatusChange = async (id: string, status: Lead["status"]) => {
    try {
      await updateLeadStatus(id, status);
      toast.success("Lead status updated.");
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };

  const tabs = [
    { id: "leads", name: "Leads", icon: MessageSquare },
    { id: "content", name: "Content CMS", icon: LayoutDashboard },
    { id: "pricing", name: "Pricing", icon: TrendingUp },
    { id: "testimonials", name: "Testimonials", icon: Users },
    { id: "settings", name: "Settings", icon: Settings },
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
                onClick={handleLogout}
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
                  {activeTab === "content" ? "Website CMS" : activeTab + " Management"}
                </h1>
                <p className="text-subtext text-sm mt-1">Manage your gym's {activeTab} data dynamically.</p>
              </div>
              {activeTab === "content" ? (
                <button 
                  onClick={handleSaveCms}
                  disabled={isSaving}
                  className="bg-accent text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all glow-red disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? "SAVING..." : "SAVE CHANGES"}
                </button>
              ) : (
                <button className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-accent hover:text-white transition-all glow-red-hover">
                  <Plus className="w-4 h-4" />
                  ADD NEW
                </button>
              )}
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
                    {leads.map((lead) => (
                      <tr key={lead.id} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 font-bold">{lead.name}</td>
                        <td className="py-6 text-subtext">{lead.phone}</td>
                        <td className="py-6">
                          <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {lead.goal}
                          </span>
                        </td>
                        <td className="py-6">
                          <select 
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead["status"])}
                            className="bg-background border border-white/10 rounded-lg px-2 py-1 text-xs font-bold uppercase tracking-widest outline-none focus:border-accent"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="joined">Joined</option>
                          </select>
                        </td>
                        <td className="py-6 text-subtext text-sm">{new Date(lead.createdAt).toLocaleDateString()}</td>
                        <td className="py-6 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-500 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {leads.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-subtext italic">No leads found yet.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* CMS Content Tab */}
            {activeTab === "content" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold border-b border-white/5 pb-2">Hero Section</h3>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Hero Title</label>
                    <input
                      name="heroTitle"
                      value={cmsContent.heroTitle}
                      onChange={handleCmsChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Hero Subtitle</label>
                    <textarea
                      name="heroSubtitle"
                      value={cmsContent.heroSubtitle}
                      onChange={handleCmsChange}
                      rows={3}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors resize-none"
                    />
                  </div>

                  <h3 className="text-lg font-bold border-b border-white/5 pb-2 pt-4">About Section</h3>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">About Title</label>
                    <input
                      name="aboutTitle"
                      value={cmsContent.aboutTitle}
                      onChange={handleCmsChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">About Content</label>
                    <textarea
                      name="aboutContent"
                      value={cmsContent.aboutContent}
                      onChange={handleCmsChange}
                      rows={4}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-bold border-b border-white/5 pb-2">Contact & Footer</h3>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">WhatsApp Number</label>
                    <input
                      name="whatsappNumber"
                      value={cmsContent.whatsappNumber}
                      onChange={handleCmsChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">WhatsApp Message</label>
                    <input
                      name="whatsappMessage"
                      value={cmsContent.whatsappMessage}
                      onChange={handleCmsChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Phone Display</label>
                    <input
                      name="phone"
                      value={cmsContent.phone}
                      onChange={handleCmsChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Address</label>
                    <input
                      name="address"
                      value={cmsContent.address}
                      onChange={handleCmsChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Opening Hours</label>
                    <textarea
                      name="openingHours"
                      value={cmsContent.openingHours}
                      onChange={handleCmsChange}
                      rows={2}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Google Maps Embed URL</label>
                    <input
                      name="googleMapsUrl"
                      value={cmsContent.googleMapsUrl}
                      onChange={handleCmsChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs placeholders */}
            {activeTab !== "leads" && activeTab !== "content" && (
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
