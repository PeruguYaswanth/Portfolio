'use client'

import { useState, useEffect } from 'react'
import profile from './assets/profile.jpeg'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

const SKILLS = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['FastAPI', 'REST APIs'] },
  { category: 'Database', items: ['MongoDB', 'MySQL'] },
]

const PROJECTS = [
  {
    title: 'HR Employee Login System',
    stack: 'React · FastAPI · JWT',
    desc: 'Secure login system with role-based access control and JWT authentication for HR workflows.',
    icon: '🔐',
  },
  {
    title: 'Todo List App',
    stack: 'React · FastAPI · MongoDB',
    desc: 'Full-stack CRUD application with REST API integration and real-time UI updates.',
    icon: '✅',
  },
  {
    title: 'Tic Tac Toe',
    stack: 'Python',
    desc: 'Console-based game focused on clean logic, game state management and problem-solving.',
    icon: '🎮',
  },
  {
    title: 'Slickbot Clone',
    stack: 'React · UI/UX',
    desc: 'Pixel-perfect responsive UI clone demonstrating strong front-end design skills.',
    icon: '🤖',
  },
]

const EXPERIENCE = [
  {
    company: 'CollegePur',
    role: 'Full Stack Developer Intern',
    period: 'May 2026 – Present',
    stack: 'Next.js · Tailwind CSS',
    desc: 'Building full-stack features using Next.js and Tailwind CSS. Working on responsive UI, API integration, and end-to-end feature development.',
    current: true,
  },
  {
    company: 'Nava Software Solutions',
    role: 'Full Stack Developer Intern',
    period: '2024 – 2025 · 4 Months',
    stack: 'React · FastAPI · TypeScript · MongoDB',
    desc: 'Built REST APIs, developed UI components, and handled full lifecycle development from requirements to deployment.',
    current: false,
  },
]

const CERTIFICATIONS = [
  {
    title: 'Python',
    issuer: 'Udemy · HackerRank (Basic)',
    icon: '🐍',
    color: '#3b82f6',
  },
  {
    title: 'SQL',
    issuer: 'HackerRank (Basic & Intermediate)',
    icon: '🗄️',
    color: '#8b5cf6',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Simplilearn',
    icon: '💬',
    color: '#06b6d4',
  },
  {
    title: 'Introduction to ChatGPT AI',
    issuer: 'Simplilearn',
    icon: '🤖',
    color: '#10b981',
  },
  {
    title: 'Generative AI',
    issuer: 'Simplilearn',
    icon: '✨',
    color: '#f59e0b',
  },
]

export default function App() {
  const [activeNav, setActiveNav] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openLinkedIn = () =>
    window.open('https://www.linkedin.com/in/yaswanth-muniswar-perugu-36489a304', '_blank')
  const openGitHub = () =>
    window.open('https://github.com/PeruguYaswanth', '_blank')

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-semibold tracking-widest text-white/40 uppercase">YMP</span>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setActiveNav(item)}
                className={`text-sm transition-colors duration-200 ${
                  activeNav === item ? 'text-white' : 'text-white/40 hover:text-white/80'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="Home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-6 pt-24 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">Available for opportunities</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Yaswanth<br />
            <span className="text-white/25">Muniswar</span><br />
            Perugu
          </h1>
          <p className="text-lg text-white/50 font-light">Full Stack Developer</p>
          <p className="text-sm text-white/35 leading-relaxed max-w-md">
            Aspiring Full Stack Developer passionate about building scalable, user-friendly applications.
            Currently interning at CollegePur with Next.js & Tailwind CSS.
          </p>
          <div className="flex gap-4 pt-2">
            <button
              onClick={openLinkedIn}
              className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 active:scale-95 transition-all"
            >
              LinkedIn
            </button>
            <button
              onClick={openGitHub}
              className="px-5 py-2.5 rounded-lg border border-white/15 text-sm text-white/70 hover:border-white/30 hover:text-white active:scale-95 transition-all"
            >
              GitHub
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-white/10">
            <img src={profile} alt="Yaswanth Muniswar Perugu" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-white/5 -z-10" />
        </div>
      </section>

      {/* ── About / Education ── */}
      <section id="About" className="py-24 px-6 max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <h2 className="text-3xl font-bold mb-12">Education</h2>
        <div className="space-y-4">
          {[
            { degree: 'B.Tech', school: 'Siddharth Institute of Engineering & Technology', period: '2022 – 2026', grade: 'CGPA 8.65' },
            { degree: 'Intermediate', school: 'Sri Chaitanya Jr College', period: '2020 – 2022', grade: 'CGPA 9.1' },
            { degree: 'SSC', school: 'Balavikas EM School', period: '2019 – 2020', grade: 'CGPA 9.7' },
          ].map((e) => (
            <div key={e.school} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div>
                <p className="font-semibold text-white">{e.degree}</p>
                <p className="text-sm text-white/45 mt-0.5">{e.school}</p>
              </div>
              <div className="mt-3 sm:mt-0 flex gap-4 items-center">
                <span className="text-xs text-white/30">{e.period}</span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/8 text-white/70">{e.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="Skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s) => (
            <div key={s.category} className="p-5 rounded-xl border border-white/8 bg-white/[0.02]">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">{s.category}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-full bg-white/8 text-white/80 hover:bg-white/12 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="Experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl font-bold mb-12">Work History</h2>
        <div className="relative pl-6 border-l border-white/10 space-y-10">
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="relative">
              <div className={`absolute -left-[29px] w-3 h-3 rounded-full border-2 ${exp.current ? 'bg-green-400 border-green-400' : 'bg-white/20 border-white/20'}`} />
              <div className="p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{exp.company}</h3>
                      {exp.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/45 mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-xs text-white/30 shrink-0">{exp.period}</span>
                </div>
                <p className="text-xs text-blue-400/70 mb-3">{exp.stack}</p>
                <p className="text-sm text-white/50 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="Projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-3xl font-bold mb-12">What I've Built</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <div key={p.title} className="group p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all cursor-pointer">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-blue-400/70 mb-3">{p.stack}</p>
              <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="Certifications" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <SectionLabel>Certifications</SectionLabel>
        <h2 className="text-3xl font-bold mb-12">Credentials</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.title} className="p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
              <div className="flex items-start gap-4">
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <p className="font-medium text-white text-sm leading-snug">{cert.title}</p>
                  <p className="text-xs text-white/35 mt-1">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="Contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5 text-center">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-white/40 text-sm mb-10 max-w-md mx-auto">
          Open to full-time roles and freelance opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-5 mb-8">
          <button
            onClick={openLinkedIn}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all text-sm text-white/70 hover:text-white"
          >
            <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
            LinkedIn
          </button>
          <button
            onClick={openGitHub}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all text-sm text-white/70 hover:text-white"
          >
            <img src={github} alt="GitHub" className="w-4 h-4" />
            GitHub
          </button>
        </div>
        <a
          href="tel:+917893139826"
          className="text-sm text-white/30 hover:text-white/60 transition-colors"
        >
          +91 78931 39826
        </a>
        <p className="text-xs text-white/15 mt-12">
          © 2026 Yaswanth Muniswar Perugu
        </p>
      </section>

    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-white/25 uppercase tracking-widest mb-3 font-medium">
      {children}
    </p>
  )
}