import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon } from './Icons';

export default function AppleContact() {
  const { personal } = portfolioData;
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Cloud / IoT Engineering Opportunity')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase">
          Connect &amp; Collaborate
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mt-1">
          Let’s build something extraordinary.
        </h2>
        <p className="text-[#6e6e73] dark:text-[#86868b] text-sm sm:text-base mt-2">
          Available for Team Lead, Cloud/DevOps, and IoT engineering opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Contact Info (5 cols) */}
        <div className="md:col-span-5 apple-card p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-[#161617]">
          <div>
            <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white mb-6">Direct Channels</h3>
            
            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center space-x-3 text-sm text-[#333336] dark:text-[#d2d2d7] hover:text-[#0071e3] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] group-hover:bg-[#0071e3] group-hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#6e6e73] dark:text-[#86868b]">Email</div>
                  <div className="font-medium text-[#1d1d1f] dark:text-white">{personal.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center space-x-3 text-sm text-[#333336] dark:text-[#d2d2d7] hover:text-emerald-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#6e6e73] dark:text-[#86868b]">Phone</div>
                  <div className="font-medium text-[#1d1d1f] dark:text-white">{personal.phone}</div>
                </div>
              </a>

              <div className="flex items-center space-x-3 text-sm text-[#333336] dark:text-[#d2d2d7]">
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-rose-500 dark:text-rose-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#6e6e73] dark:text-[#86868b]">Location</div>
                  <div className="font-medium text-[#1d1d1f] dark:text-white">{personal.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5">
            <div className="text-xs text-[#6e6e73] dark:text-[#86868b] mb-3">Profiles &amp; Repositories</div>
            <div className="flex items-center space-x-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[#0071e3] text-[#1d1d1f] dark:text-white hover:text-white flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-neutral-800 text-[#1d1d1f] dark:text-white hover:text-white flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-blue-400 text-[#1d1d1f] dark:text-white hover:text-white flex items-center justify-center transition-colors"
                title="Twitter/X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Composition (7 cols) */}
        <div className="md:col-span-7 apple-card p-6 sm:p-8 bg-white dark:bg-[#161617]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white mb-2">Send a Message</h3>
            
            {submitted && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Default mail client initiated. Thank you for connecting!</span>
              </div>
            )}

            <div>
              <label className="block text-xs text-[#6e6e73] dark:text-[#86868b] mb-1.5 font-medium">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Cloud/DevOps Opportunity, IoT Project..."
                className="w-full bg-[#f5f5f7] dark:bg-[#1e1e1f] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#1d1d1f] dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[#0071e3] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[#6e6e73] dark:text-[#86868b] mb-1.5 font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Hi Girindra, I'd like to talk about..."
                className="w-full bg-[#f5f5f7] dark:bg-[#1e1e1f] border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-[#1d1d1f] dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[#0071e3] transition-colors resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-semibold rounded-full shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
