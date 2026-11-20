import React, { useState, useEffect } from 'react';
import MenuBar from './components/MenuBar';
import Dock from './components/Dock';
import DesktopIcons from './components/DesktopIcons';
import WindowFrame from './components/WindowFrame';
import ControlCenter from './components/ControlCenter';
import Spotlight from './components/Spotlight';

// Windows
import AboutWindow from './components/windows/AboutWindow';
import ProjectsWindow from './components/windows/ProjectsWindow';
import SkillsWindow from './components/windows/SkillsWindow';
import ExperienceWindow from './components/windows/ExperienceWindow';
import TerminalWindow from './components/windows/TerminalWindow';
import ContactWindow from './components/windows/ContactWindow';
import AboutThisMacWindow from './components/windows/AboutThisMacWindow';

import { 
  User, 
  FolderGit2, 
  Cpu, 
  FileText, 
  Terminal as TerminalIcon, 
  Mail, 
  Info 
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [controlCenterOpen, setControlCenterOpen] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [topZ, setTopZ] = useState(20);

  // Windows State
  const [windows, setWindows] = useState({
    about: { isOpen: true, isMinimized: false, zIndex: 10 },
    projects: { isOpen: false, isMinimized: false, zIndex: 11 },
    skills: { isOpen: false, isMinimized: false, zIndex: 12 },
    experience: { isOpen: false, isMinimized: false, zIndex: 13 },
    terminal: { isOpen: false, isMinimized: false, zIndex: 14 },
    contact: { isOpen: false, isMinimized: false, zIndex: 15 },
    'about-mac': { isOpen: false, isMinimized: false, zIndex: 16 },
  });

  const [activeApp, setActiveApp] = useState('About Me');

  // Handle bringing window to front
  const focusWindow = (id, appName) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], zIndex: nextZ, isMinimized: false }
    }));
    if (appName) setActiveApp(appName);
  };

  const openApp = (id) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows(prev => ({
      ...prev,
      [id]: { isOpen: true, isMinimized: false, zIndex: nextZ }
    }));

    const appTitles = {
      about: 'About Me',
      projects: 'Projects & Work',
      skills: 'Skills & Stack',
      experience: 'Experience Log',
      terminal: 'Terminal (zsh)',
      contact: 'Mail',
      'about-mac': 'About This Mac'
    };
    if (appTitles[id]) setActiveApp(appTitles[id]);
  };

  const closeWindow = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false }
    }));
  };

  const minimizeWindow = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true }
    }));
  };

  // Keyboard shortcut for Spotlight (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSpotlightOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Wallpapers
  const darkWallpaper = "radial-gradient(ellipse at 80% 20%, rgba(30, 58, 138, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(76, 29, 149, 0.4) 0%, transparent 60%), linear-gradient(135deg, #090A0F 0%, #0F172A 50%, #020617 100%)";
  const lightWallpaper = "radial-gradient(ellipse at 70% 30%, rgba(96, 165, 250, 0.35) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(192, 132, 252, 0.3) 0%, transparent 60%), linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 50%, #94A3B8 100%)";

  return (
    <div 
      className="relative h-screen w-screen overflow-hidden text-slate-100 flex flex-col"
      style={{ background: theme === 'dark' ? darkWallpaper : lightWallpaper }}
    >
      {/* Top macOS Menu Bar */}
      <MenuBar
        activeAppTitle={activeApp}
        onOpenApp={openApp}
        onToggleControlCenter={() => setControlCenterOpen(prev => !prev)}
        onToggleSpotlight={() => setSpotlightOpen(prev => !prev)}
        theme={theme}
        onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      />

      {/* Desktop Workspace Area */}
      <main className="relative flex-1 w-full overflow-hidden">
        {/* Desktop Shortcuts */}
        <DesktopIcons onOpenApp={openApp} />

        {/* Windows */}

        {/* 1. About Window */}
        <WindowFrame
          id="about"
          title="About — Girindra Mohan"
          icon={User}
          isOpen={windows.about.isOpen}
          isMinimized={windows.about.isMinimized}
          zIndex={windows.about.zIndex}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={() => focusWindow('about', 'About Me')}
          defaultWidth="max-w-3xl"
          defaultHeight="h-[560px]"
        >
          <AboutWindow onOpenApp={openApp} />
        </WindowFrame>

        {/* 2. Projects Window (Finder) */}
        <WindowFrame
          id="projects"
          title="Projects — Finder"
          icon={FolderGit2}
          isOpen={windows.projects.isOpen}
          isMinimized={windows.projects.isMinimized}
          zIndex={windows.projects.zIndex}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={() => focusWindow('projects', 'Projects & Work')}
          defaultWidth="max-w-4xl"
          defaultHeight="h-[550px]"
        >
          <ProjectsWindow />
        </WindowFrame>

        {/* 3. Skills Window */}
        <WindowFrame
          id="skills"
          title="Technical Stack & Architecture"
          icon={Cpu}
          isOpen={windows.skills.isOpen}
          isMinimized={windows.skills.isMinimized}
          zIndex={windows.skills.zIndex}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={() => focusWindow('skills', 'Skills & Stack')}
          defaultWidth="max-w-3xl"
          defaultHeight="h-[530px]"
        >
          <SkillsWindow />
        </WindowFrame>

        {/* 4. Experience Window */}
        <WindowFrame
          id="experience"
          title="Experience Log — Notes"
          icon={FileText}
          isOpen={windows.experience.isOpen}
          isMinimized={windows.experience.isMinimized}
          zIndex={windows.experience.zIndex}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={() => focusWindow('experience', 'Experience Log')}
          defaultWidth="max-w-4xl"
          defaultHeight="h-[540px]"
        >
          <ExperienceWindow />
        </WindowFrame>

        {/* 5. Terminal Window */}
        <WindowFrame
          id="terminal"
          title="girindra@macbook: ~ (zsh)"
          icon={TerminalIcon}
          isOpen={windows.terminal.isOpen}
          isMinimized={windows.terminal.isMinimized}
          zIndex={windows.terminal.zIndex}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={() => focusWindow('terminal', 'Terminal')}
          defaultWidth="max-w-2xl"
          defaultHeight="h-[440px]"
        >
          <TerminalWindow onOpenApp={openApp} />
        </WindowFrame>

        {/* 6. Contact Window */}
        <WindowFrame
          id="contact"
          title="New Message — Mail"
          icon={Mail}
          isOpen={windows.contact.isOpen}
          isMinimized={windows.contact.isMinimized}
          zIndex={windows.contact.zIndex}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={() => focusWindow('contact', 'Mail')}
          defaultWidth="max-w-3xl"
          defaultHeight="h-[480px]"
        >
          <ContactWindow />
        </WindowFrame>

        {/* 7. About This Mac Window */}
        <WindowFrame
          id="about-mac"
          title="About This Mac"
          icon={Info}
          isOpen={windows['about-mac'].isOpen}
          isMinimized={windows['about-mac'].isMinimized}
          zIndex={windows['about-mac'].zIndex}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={() => focusWindow('about-mac', 'About This Mac')}
          defaultWidth="max-w-md"
          defaultHeight="h-[400px]"
        >
          <AboutThisMacWindow onOpenApp={openApp} />
        </WindowFrame>
      </main>

      {/* Control Center Flyout */}
      <ControlCenter
        isOpen={controlCenterOpen}
        onClose={() => setControlCenterOpen(false)}
        theme={theme}
        onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      />

      {/* Spotlight Search Overlay */}
      <Spotlight
        isOpen={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
        onOpenApp={openApp}
      />

      {/* Bottom Floating macOS Dock */}
      <Dock
        openWindows={windows}
        onOpenApp={openApp}
      />
    </div>
  );
}
