import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../Icons';

export default function ContactWindow() {
  const { personal } = portfolioData;
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Inquiry regarding Cloud/IoT/DevOps Opportunities')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="flex h-full select-none">
      {/* Contact Details Sidebar */}
      <div className="w-60 bg-white/5 border-r border-white/10 p-4 hidden sm:flex flex-col space-y-4">
        <div>
          <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-2">
            Direct Reachout
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex items-center space-x-2.5 text-white/80">
              <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <a href={`mailto:${personal.email}`} className="truncate hover:text-white hover:underline">
                {personal.email}
              </a>
            </div>

            <div className="flex items-center space-x-2.5 text-white/80">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <a href={`tel:${personal.phone}`} className="hover:text-white hover:underline">
                {personal.phone}
              </a>
            </div>

            <div className="flex items-center space-x-2.5 text-white/80">
              <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span>{personal.location}</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10">
          <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-2">
            Social & Profiles
          </div>
          <div className="space-y-1.5">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>GitHub Repositories</span>
            </a>
          </div>
        </div>
      </div>

      {/* macOS Mail Composition Form */}
      <div className="flex-1 flex flex-col p-5 overflow-y-auto">
        <form onSubmit={handleSend} className="space-y-4 flex-1 flex flex-col">
          {sent && (
            <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs flex items-center space-x-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>Mail client launched! If not opened automatically, click the email address on the left.</span>
            </div>
          )}

          {/* Recipient Header */}
          <div className="space-y-2 border-b border-white/10 pb-3 text-xs">
            <div className="flex items-center">
              <span className="w-16 text-white/40 font-medium">To:</span>
              <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
                Girindra Mohan &lt;{personal.email}&gt;
              </span>
            </div>

            <div className="flex items-center">
              <span className="w-16 text-white/40 font-medium">Subject:</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Cloud/DevOps Opportunity, IoT Project Collaboration..."
                className="flex-1 bg-transparent text-white placeholder-white/30 focus:outline-none"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="flex-1 flex flex-col">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Girindra, I came across your portfolio and would like to connect regarding..."
              className="w-full flex-1 min-h-[160px] bg-transparent text-white placeholder-white/30 text-xs leading-relaxed focus:outline-none resize-none"
            />
          </div>

          {/* Send Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-white/40">
              Press Send to open your default email client with this message
            </span>
            <button
              type="submit"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-md transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
