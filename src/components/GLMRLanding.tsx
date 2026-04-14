import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, ArrowUpRight, Play, Cpu, Hexagon,
  Globe, Sparkles, Layers, Zap, Search,
  BarChart3, Smartphone, PenTool, Database,
  Settings, TrendingUp, Users, CheckCircle2,
  Mail, Phone, X, ChevronRight, Briefcase, Car, Home, 
  GraduationCap, Utensils, ArrowRight, ShoppingBag, Activity, ChevronLeft,
  Sun, Moon, Monitor, Target, Lightbulb, ShieldCheck, Quote, Star,
  MapPin, Facebook, Twitter, Instagram, Linkedin, Send, FileText, Check, Loader2,
  Code2, Terminal, PieChart
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import AboutUs from './AboutUs';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Component Props Interfaces ---
interface IconWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

interface PillButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'solid' | 'ghost' | 'gradient';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface NavLinkProps {
  children?: React.ReactNode;
  href?: string;
}

interface SectionLabelProps {
  children?: React.ReactNode;
  color?: "cyan" | "lime" | "dark";
}

type ThemeMode = 'dark' | 'light' | 'system';

// --- Animated Visual Components (Lottie-like) ---

const RocketVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <svg viewBox="0 0 100 100" className="w-32 h-32 drop-shadow-lg">
        <motion.path
          d="M50 20 C50 20 70 50 70 70 C70 80 60 80 50 80 C40 80 30 80 30 70 C30 50 50 20 50 20 Z"
          fill="url(#rocketGrad)"
          initial={{ y: 20 }}
          animate={{ y: -5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <defs>
            <linearGradient id="rocketGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
        </defs>
        <motion.path
          d="M45 80 L50 95 L55 80 Z"
          fill="#ccff00"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1.2 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Stars */}
        {[...Array(6)].map((_, i) => (
           <motion.circle
             key={i}
             cx={10 + i * 15}
             cy={10 + i * 15}
             r={1.5}
             fill="white"
             initial={{ y: -10, opacity: 0 }}
             animate={{ y: 100, opacity: [0, 1, 0] }}
             transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
           />
        ))}
      </svg>
  </div>
);

const BuildingVisual = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         <svg viewBox="0 0 100 100" className="w-32 h-32 drop-shadow-lg">
            <motion.rect
                x="25" y="50" width="20" height="50"
                fill="#10b981"
                initial={{ height: 0, y: 100 }}
                whileInView={{ height: 50, y: 50 }}
                transition={{ duration: 0.8, ease: "backOut" }}
            />
             <motion.rect
                x="50" y="30" width="25" height="70"
                fill="#059669"
                initial={{ height: 0, y: 100 }}
                whileInView={{ height: 70, y: 30 }}
                transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            />
            {/* Windows */}
            <motion.rect x="55" y="40" width="5" height="5" fill="white" initial={{opacity:0}} whileInView={{opacity:0.5}} transition={{delay: 1.2}} />
            <motion.rect x="65" y="40" width="5" height="5" fill="white" initial={{opacity:0}} whileInView={{opacity:0.5}} transition={{delay: 1.3}} />
            <motion.rect x="55" y="50" width="5" height="5" fill="white" initial={{opacity:0}} whileInView={{opacity:0.5}} transition={{delay: 1.4}} />
            <motion.rect x="65" y="50" width="5" height="5" fill="white" initial={{opacity:0}} whileInView={{opacity:0.5}} transition={{delay: 1.5}} />
            
            <motion.path
                d="M10 90 L90 90"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-[var(--text-muted)]"
            />
            {/* Cloud */}
            <motion.path 
                d="M70 20 Q 80 10 90 20 T 100 20" 
                stroke="white" fill="none" strokeWidth="2" opacity="0.5"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    </div>
);

const TechVisual = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <svg viewBox="0 0 100 100" className="w-32 h-32 drop-shadow-lg">
            <defs>
                <linearGradient id="techGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
            </defs>
            <motion.rect
                x="15" y="20" width="70" height="50"
                rx="4"
                stroke="url(#techGrad)"
                strokeWidth="3"
                fill="rgba(6,182,212,0.1)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            {/* Data Lines */}
            <g transform="translate(25, 35)">
                 <motion.rect width="30" height="3" rx="1.5" fill="#38bdf8" initial={{ width: 0 }} whileInView={{ width: 30 }} transition={{ delay: 0.5 }} />
                 <motion.rect y="10" width="50" height="3" rx="1.5" fill="#38bdf8" opacity="0.6" initial={{ width: 0 }} whileInView={{ width: 50 }} transition={{ delay: 0.7 }} />
                 <motion.rect y="20" width="40" height="3" rx="1.5" fill="#38bdf8" opacity="0.6" initial={{ width: 0 }} whileInView={{ width: 40 }} transition={{ delay: 0.9 }} />
            </g>
            {/* Scanner */}
            <motion.rect
                 x="15" y="20" width="70" height="2"
                 fill="#ccff00"
                 opacity="0.5"
                 animate={{ y: [20, 70, 20] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {/* Connection Dots */}
            <motion.circle cx="15" cy="20" r="2" fill="white" />
            <motion.circle cx="85" cy="20" r="2" fill="white" />
            <motion.circle cx="85" cy="70" r="2" fill="white" />
            <motion.circle cx="15" cy="70" r="2" fill="white" />
        </svg>
    </div>
);

const GlobalVisual = () => (
     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <svg viewBox="0 0 100 100" className="w-32 h-32 text-blue-500 drop-shadow-lg">
            {/* Globe Grid */}
            <motion.circle
                cx="50" cy="50" r="35"
                stroke="currentColor"
                strokeWidth="1"
                fill="rgba(59, 130, 246, 0.1)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring" }}
            />
            <motion.ellipse
                cx="50" cy="50" rx="35" ry="10"
                stroke="currentColor" strokeWidth="0.5" fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.ellipse
                cx="50" cy="50" rx="10" ry="35"
                stroke="currentColor" strokeWidth="0.5" fill="none"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Orbiting Satellite */}
            <motion.circle
                cx="50" cy="15" r="3"
                fill="#ccff00"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ originX: "50px", originY: "50px" }}
            />
            
            {/* Map Markers */}
            <motion.path d="M50 50 L60 40" stroke="#ccff00" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1 }} />
            <motion.circle cx="60" cy="40" r="2" fill="#ccff00" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity }} />
        </svg>
     </div>
);

const MilestoneMedia = ({ type }: { type: string }) => {
  switch(type) {
    case 'rocket': return <RocketVisual />;
    case 'building': return <BuildingVisual />;
    case 'tech': return <TechVisual />;
    case 'global': return <GlobalVisual />;
    default: return null;
  }
}

// --- Icons wrapper to simulate "Ion Icons" feel with Lucide ---
const IconWrapper = ({ children, className }: IconWrapperProps) => (
  <div className={cn("p-2 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-muted)]", className)}>
    {children}
  </div>
);

// --- Components ---

const PillButton = ({ children, className, variant = 'outline', onClick, type = "button", disabled }: PillButtonProps) => {
  const variants = {
    outline: "border border-[var(--glass-border)] text-[var(--text-main)] hover:bg-[var(--glass-bg)] hover:border-[var(--text-muted)]",
    solid: "bg-[var(--text-main)] text-[var(--bg-page)] hover:opacity-90 border-transparent",
    ghost: "bg-transparent text-[var(--text-main)] hover:bg-[var(--glass-bg)]",
    gradient: "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
  };
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={cn(
        "px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 font-sans flex items-center gap-2 select-none",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

const NavLink = ({ children, href = "#" }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="px-5 py-2 rounded-full border border-transparent text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--glass-bg)] hover:border-[var(--glass-border)] transition-all text-sm font-medium cursor-pointer"
    >
      {children}
    </a>
  );
};

const SectionLabel = ({ children, color = "cyan" }: SectionLabelProps) => {
  const styles = {
    cyan: "border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",
    lime: "border-[#ccff00]/30 text-[#65a30d] dark:text-[#ccff00] bg-[#ccff00]/5",
    dark: "border-[var(--text-main)]/20 text-[var(--text-main)] bg-[var(--text-main)]/5"
  };
  
  const dotStyles = {
    cyan: "bg-cyan-500",
    lime: "bg-[#84cc16] dark:bg-[#ccff00]",
    dark: "bg-[var(--text-main)]"
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-8",
      styles[color]
    )}>
      <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotStyles[color])}></span>
      {children}
    </div>
  );
};

const AnimatedCounter = ({ value, suffix = "", label }: { value: number, suffix?: string, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { duration: 2500, bounce: 0 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return displayValue.on("change", (latest) => setCurrent(latest));
  }, [displayValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 border border-[var(--glass-border)] rounded-[2rem] bg-[var(--bg-card)] hover:bg-[var(--glass-bg)] transition-colors group relative overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex items-baseline gap-1 mb-2 relative z-10">
         <span className="text-5xl md:text-6xl font-bold text-[var(--text-main)] tabular-nums tracking-tight">
           {current}
         </span>
         <span className="text-3xl md:text-4xl font-medium text-cyan-600 dark:text-cyan-500">{suffix}</span>
      </div>
      <span className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest text-center relative z-10">
        {label}
      </span>
    </div>
  );
};

const GridPattern = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    <div className="absolute inset-0" 
         style={{ 
           backgroundImage: 'linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)', 
           backgroundSize: '40px 40px' 
         }}>
    </div>
  </div>
);

// --- Interactive Hero Background ---
const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.fillStyle = 'rgba(6, 182, 212, 0.4)'; // Cyan
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';

      particles.forEach((p, index) => {
        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Interaction with mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
            // Draw line to mouse
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Subtle attraction
            p.x += dx * 0.01;
            p.y += dy * 0.01;
        }

        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nearby particles
        for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (dist2 < 100) {
                 ctx.beginPath();
                 ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist2/100)})`;
                 ctx.moveTo(p.x, p.y);
                 ctx.lineTo(p2.x, p2.y);
                 ctx.stroke();
            }
        }
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// --- Lead Gen Modal Component ---
const LeadGenModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    interests: [] as string[],
    budget: '',
    details: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error
    if (name === 'name' || name === 'email') {
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateStep = (currentStep: number) => {
    let isValid = true;
    const newErrors = { name: '', email: '' };

    if (currentStep === 1) {
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }
    }
    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
        setStep(prev => prev + 1);
    }
  };
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Construct mailto link
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const bodyContent = `Name: ${formData.name}
Email: ${formData.email}
Website: ${formData.website}
Interests: ${formData.interests.join(', ')}
Budget: ${formData.budget}
Details: ${formData.details}`;
    const body = encodeURIComponent(bodyContent);
    window.location.href = `mailto:kshitij.glmr@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    onClose();
    // Reset form after close animation
    setTimeout(() => {
        setStep(1);
        setFormData({ name: '', email: '', website: '', interests: [], budget: '', details: '' });
        setErrors({ name: '', email: '' });
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[var(--bg-page)] border border-[var(--glass-border)] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--glass-border)] bg-[var(--glass-bg)]">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-[var(--text-main)]">Start Your Engine</h3>
                    <p className="text-xs text-[var(--text-muted)]">Step {step} of 3</p>
                 </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-[var(--glass-border)] rounded-full text-[var(--text-muted)] transition-colors">
                 <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-[var(--glass-border)] w-full">
               <motion.div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 3) * 100}%` }}
               />
            </div>

            {/* Form Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {step === 1 && (
                  <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                     <h4 className="text-2xl font-medium text-[var(--text-main)]">Let's get acquainted.</h4>
                     <div className="space-y-4">
                        <div>
                           <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Your Name *</label>
                           <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                className={cn(
                                    "w-full bg-[var(--bg-card)] border rounded-xl px-4 py-3 text-[var(--text-main)] focus:ring-1 focus:ring-cyan-500 outline-none transition-all",
                                    errors.name ? "border-red-500 focus:border-red-500" : "border-[var(--glass-border)] focus:border-cyan-500"
                                )} 
                                placeholder="John Doe" 
                           />
                           {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Email Address *</label>
                           <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                className={cn(
                                    "w-full bg-[var(--bg-card)] border rounded-xl px-4 py-3 text-[var(--text-main)] focus:ring-1 focus:ring-cyan-500 outline-none transition-all",
                                    errors.email ? "border-red-500 focus:border-red-500" : "border-[var(--glass-border)] focus:border-cyan-500"
                                )}
                                placeholder="john@company.com" 
                           />
                           {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Website URL (Optional)</label>
                           <input type="url" name="website" value={formData.website} onChange={handleInputChange} className="w-full bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" placeholder="https://company.com" />
                        </div>
                     </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                     <h4 className="text-2xl font-medium text-[var(--text-main)]">What are your goals?</h4>
                     <div>
                        <label className="block text-sm font-medium text-[var(--text-muted)] mb-4">Select Areas of Interest</label>
                        <div className="flex flex-wrap gap-3">
                           {['Web Development', 'Mobile Apps', 'SEO', 'PPC Ads', 'Social Media', 'Branding', 'CRM Setup', 'Lead Gen'].map(interest => (
                              <button
                                 key={interest}
                                 type="button"
                                 onClick={() => toggleInterest(interest)}
                                 className={cn(
                                    "px-4 py-2 rounded-full border text-sm transition-all",
                                    formData.interests.includes(interest)
                                       ? "bg-cyan-500/10 border-cyan-500 text-cyan-600 dark:text-cyan-400"
                                       : "border-[var(--glass-border)] text-[var(--text-muted)] hover:border-[var(--text-main)]"
                                 )}
                              >
                                 {interest}
                              </button>
                           ))}
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-[var(--text-muted)] mb-4">Estimated Budget</label>
                        <div className="grid grid-cols-2 gap-3">
                           {['<$5k', '$5k - $10k', '$10k - $50k', '$50k+'].map(b => (
                              <button
                                 key={b}
                                 type="button"
                                 onClick={() => setFormData(prev => ({...prev, budget: b}))}
                                 className={cn(
                                    "px-4 py-3 rounded-xl border text-sm transition-all text-center",
                                    formData.budget === b
                                       ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold"
                                       : "border-[var(--glass-border)] text-[var(--text-muted)] hover:border-[var(--text-main)]"
                                 )}
                              >
                                 {b}
                              </button>
                           ))}
                        </div>
                     </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                     <h4 className="text-2xl font-medium text-[var(--text-main)]">Almost there.</h4>
                     <div>
                        <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Project Details</label>
                        <textarea 
                           name="details" 
                           value={formData.details} 
                           onChange={handleInputChange} 
                           rows={4}
                           className="w-full bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none" 
                           placeholder="Tell us a bit more about your project..." 
                        />
                     </div>
                  </motion.div>
                )}

              </form>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-[var(--glass-border)] bg-[var(--glass-bg)] flex justify-between">
               {step > 1 ? (
                  <PillButton onClick={prevStep} variant="outline">Back</PillButton>
               ) : (
                  <div></div>
               )}
               {step < 3 ? (
                  <PillButton onClick={nextStep} variant="solid" className="px-8">Continue <ChevronRight className="w-4 h-4"/></PillButton>
               ) : (
                  <PillButton onClick={handleSubmit} variant="gradient" disabled={isSubmitting} className="px-8">
                     {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin"/> : <Send className="w-4 h-4" />}
                     {isSubmitting ? 'Sending...' : 'Send Proposal'}
                  </PillButton>
               )}
            </div>

            {/* Decorative Background Particles */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


// --- Main Page Component ---

export function GLMRLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const scrollRef = useRef(null);
  const industryScrollRef = useRef<HTMLDivElement>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  
  // Footer Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Theme Logic
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // CSS Variables for Theming
  const themeStyles = {
    '--bg-page': theme === 'light' ? '#f0f4f8' : '#050505',
    '--bg-card': theme === 'light' ? '#ffffff' : '#111111',
    '--text-main': theme === 'light' ? '#0f172a' : '#ffffff',
    '--text-muted': theme === 'light' ? '#475569' : 'rgba(255,255,255,0.6)',
    '--glass-border': theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)',
    '--glass-bg': theme === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.05)',
  } as React.CSSProperties;

  const scrollIndustries = (direction: 'left' | 'right') => {
    if (industryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      industryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialScrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      testimonialScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLeadGen = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };
  
  const handleContactSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setContactStatus('sending');
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      setContactStatus('success');
      // Reset after delay
      setTimeout(() => {
          setContactStatus('idle');
          setContactForm({ name: '', email: '', subject: '', message: '' });
      }, 3000);
  };

  // Mobile Menu Overlay - Liquid Animation
  const MobileMenu = () => {
    const navItems = [
      { name: 'Services', href: 'services' },
      { name: 'About Us', href: 'about' },
      { name: 'Industries', href: 'industries' },
      { name: 'Client Stories', href: 'client-stories' },
      { name: 'Contact', href: 'contact' }
    ];

    return (
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ clipPath: "circle(30px at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(30px at calc(100% - 40px) 40px)" }}
            transition={{ type: "spring", stiffness: 40, damping: 10, restDelta: 2 }}
            className="fixed inset-0 z-[100] bg-[var(--bg-page)]/95 backdrop-blur-2xl flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-[var(--glass-bg)] rounded-full text-[var(--text-main)] hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-medium text-[var(--text-main)] mt-12">
              {navItems.map((item, i) => (
                  <motion.a 
                      key={item.name}
                      href={`#${item.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="flex items-center gap-4 hover:text-cyan-500 transition-colors"
                  >
                      <span className="text-sm font-mono text-cyan-500 opacity-50">0{i+1}</span>
                      {item.name}
                  </motion.a>
              ))}
            </div>
            <div className="mt-auto">
              <PillButton 
                variant="gradient" 
                className="w-full justify-center py-4 text-lg"
                onClick={openLeadGen}
              >
                Get Free Audit
              </PillButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const industries = [
    { 
      icon: Home, 
      color: "text-emerald-600 dark:text-emerald-400",
      title: "Real Estate", 
      desc: "Immersive virtual tours and high-converting lead funnels for developers and agents.",
      tags: ["Virtual Tours", "Lead Gen", "Local SEO"],
      gradient: "from-emerald-500/10 to-teal-500/10"
    },
    { 
      icon: Car, 
      color: "text-blue-600 dark:text-blue-400",
      title: "Automobile", 
      desc: "Digital showrooms and automated service booking systems for modern dealerships.",
      tags: ["Inventory UI", "PPC", "Service Booking"],
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    { 
      icon: Utensils, 
      color: "text-orange-600 dark:text-orange-400",
      title: "Hospitality", 
      desc: "Direct reservation engines and reputation management for hotels & restaurants.",
      tags: ["Reservations", "Social Media", "Loyalty Apps"],
      gradient: "from-orange-500/10 to-red-500/10"
    },
    { 
      icon: GraduationCap, 
      color: "text-yellow-600 dark:text-yellow-400",
      title: "Education", 
      desc: "Student enrollment pipelines and custom e-learning platform development.",
      tags: ["LMS Dev", "Enrollment Ads", "Branding"],
      gradient: "from-yellow-500/10 to-amber-500/10"
    },
    { 
      icon: Briefcase, 
      color: "text-purple-600 dark:text-purple-400",
      title: "Startups", 
      desc: "Go-to-market strategies and rapid MVP development to secure funding.",
      tags: ["Growth Hacking", "MVP Dev", "Pitch Decks"],
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    { 
      icon: ShoppingBag, 
      color: "text-cyan-600 dark:text-cyan-400",
      title: "E-Commerce", 
      desc: "Shopify/WooCommerce scaling, cart abandonment recovery, and ROAS optimization.",
      tags: ["Shopify", "Conversion Rate", "Email Marketing"],
      gradient: "from-cyan-500/10 to-blue-500/10"
    },
    { 
      icon: Activity, 
      color: "text-green-600 dark:text-green-400",
      title: "Healthcare", 
      desc: "Patient trust building, appointment scheduling, and HIPAA-compliant marketing.",
      tags: ["Patient Portals", "Local Trust", "Telehealth"],
      gradient: "from-green-500/10 to-emerald-500/10"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO",
      company: "Apex Realty",
      quote: "GLMR transformed our lead generation pipeline. We went from 50 to 500 qualified leads per month in just one quarter. The ROI is undeniable.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "Founder",
      company: "Novus Tech",
      quote: "Their team doesn't just execute; they strategize. The custom CRM solution they built streamlined our entire sales process.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Director",
      company: "Luxe Hotels",
      quote: "Our direct bookings increased by 40% after the website revamp. The design is stunning, fast, and incredibly user-friendly.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
    },
    {
       name: "Michael Chang",
       role: "VP of Sales",
       company: "Solaris Energy",
       quote: "Professional, data-driven, and transparent. GLMR is the partner we've been looking for to scale our digital presence.",
       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Amanda Cole",
      role: "CEO",
      company: "Vantage Health",
      quote: "Compliance and creativity usually don't mix, but GLMR nailed it. Our patient engagement scores have never been higher.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
    }
  ];

  const clientLogos = [
    { name: "TechFlow", icon: Cpu },
    { name: "Nebulon", icon: Globe },
    { name: "Vertex", icon: Hexagon },
    { name: "Quantico", icon: BarChart3 },
    { name: "Cyberdyne", icon: ShieldCheck },
    { name: "Acumen", icon: Lightbulb },
    { name: "Zenith", icon: ArrowUpRight },
    { name: "Horizon", icon: Sun },
  ];

  return (
    <div 
        ref={scrollRef} 
        style={themeStyles}
        className="md:p-4 lg:p-6 min-h-screen w-full flex flex-col items-center text-[var(--text-main)] bg-[var(--bg-page)] font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden transition-colors duration-500"
    >
      <MobileMenu />
      <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        style={{ scaleX: smoothProgress }} 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 origin-left z-[100]"
      />

      {/* Main Container */}
      <div className="relative w-full max-w-[1920px] bg-[var(--bg-page)] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-[var(--glass-border)] flex flex-col min-h-screen transition-colors duration-500">
        
        {/* === HERO SECTION === */}
        <div className="relative w-full min-h-[95vh] bg-[var(--bg-page)] flex flex-col relative overflow-hidden transition-colors duration-500">
          <HeroBackground />
          <GridPattern />
          
          {/* Ambient Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500 rounded-full blur-[180px] opacity-[0.08] animate-pulse duration-[8s]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600 rounded-full blur-[150px] opacity-[0.08]"></div>
          <div className="absolute top-[40%] left-[30%] w-[20vw] h-[20vw] bg-blue-600 rounded-full blur-[120px] opacity-[0.05]"></div>

          {/* Navigation */}
          <nav className="relative z-50 px-6 md:px-12 py-8 flex justify-between items-center w-full">
            {/* Logo Area */}
            <div className="flex items-center group cursor-pointer z-50">
              <img 
                src="/logo.png" 
                alt="GLMR Technologies" 
                className="h-14 md:h-16 w-auto object-contain drop-shadow-md" 
                style={{ imageRendering: 'high-quality', maxWidth: '100%' }}
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1 bg-[var(--glass-bg)] p-1.5 rounded-full border border-[var(--glass-border)] backdrop-blur-md">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#industries">Industries</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
               {/* Theme Toggle */}
               <div className="hidden sm:flex items-center bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full p-1">
                  <button 
                    onClick={() => setTheme('light')} 
                    className={cn("p-1.5 rounded-full transition-colors", theme === 'light' ? "bg-white text-black shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text-main)]")}
                  >
                    <Sun className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setTheme('system')} 
                    className={cn("p-1.5 rounded-full transition-colors", theme === 'system' ? "bg-[var(--text-main)] text-[var(--bg-page)] shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text-main)]")}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setTheme('dark')} 
                    className={cn("p-1.5 rounded-full transition-colors", theme === 'dark' ? "bg-[#333] text-white shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text-main)]")}
                  >
                    <Moon className="w-4 h-4" />
                  </button>
               </div>

              <div className="hidden md:flex items-center text-[var(--text-muted)] text-xs font-mono gap-2 mr-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ACCEPTING NEW CLIENTS
              </div>
              
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-3 rounded-full bg-[var(--glass-bg)] text-[var(--text-main)] hover:bg-[var(--glass-bg)] transition-colors lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>

              <button 
                onClick={openLeadGen}
                className="hidden sm:flex bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
              >
                Start Project
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-12 relative z-10 pt-10 pb-20">
            <div className="max-w-[95vw] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left: Typography */}
              <div className="col-span-12 lg:col-span-7">
                <motion.div 
                  className="max-md:text-left max-md:w-[347.987px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-8">
                    <Sparkles className="w-3 h-3" />
                    <span>DIGITAL MARKETING & IT SOLUTIONS</span>
                  </div>
                  
                  <h1 className="text-5xl sm:text-7xl xl:text-[6.5rem] leading-[0.95] font-medium text-[var(--text-main)] tracking-tighter mb-8">
                    Elevating Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600">Brand.</span> Driving <br/>
                    Your <span className="relative inline-block font-serif italic pr-4">
                      Future.
                      <svg className="absolute w-full h-3 bottom-2 left-0 text-cyan-500 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                  </h1>
                  
                  <p className="text-[var(--text-muted)] text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 border-l-2 border-[var(--glass-border)] pl-6 max-md:w-[335.987px] max-md:text-left">
                    Founded in 2025. We combine creative digital marketing with robust technology systems to help brands build visibility, improve conversions, and scale sustainably.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <PillButton onClick={openLeadGen} variant="gradient" className="shadow-lg shadow-cyan-500/20 group">
                      Build Your Engine
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </PillButton>
                    <PillButton variant="outline">
                      <Play className="w-4 h-4 fill-current mr-2" /> View Case Studies
                    </PillButton>
                  </div>
                </motion.div>
              </div>

              {/* Right: Visual */}
              <div className="col-span-12 lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center max-md:w-[337.987px]">
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 0.2 }}
                   className="relative w-full aspect-square max-md:w-[391px]"
                >
                  {/* Floating Elements Animation */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-cyan-900/20 rounded-full blur-3xl animate-pulse"></div>
                  
                  {/* Central Dashboard Concept */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-[#151515] border border-white/10 rounded-2xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent max-md:w-[292.729px]"></div>
                    
                    {/* Header */}
                    <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="ml-4 h-4 w-32 bg-white/5 rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 grid grid-cols-2 gap-4 h-full">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                            <h4 className="text-white/40 text-xs font-mono mb-2">ROI TRACKER</h4>
                            <div className="text-3xl text-emerald-400 font-bold">+245%</div>
                            <TrendingUp className="absolute bottom-4 right-4 text-white/10 w-12 h-12" />
                            <div className="mt-4 h-16 w-full flex items-end gap-1">
                                {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                                        className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-400 rounded-t-sm" 
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col justify-between group-hover:border-cyan-500/30 transition-colors duration-500">
                             <div>
                                <h4 className="text-white/40 text-xs font-mono mb-2">LEADS GEN</h4>
                                <div className="text-2xl text-white font-bold">1,204</div>
                             </div>
                             <div className="flex -space-x-2">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#151515] bg-gray-600 flex items-center justify-center text-[8px] text-white">User</div>
                                ))}
                             </div>
                        </div>
                        <div className="col-span-2 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl border border-white/5 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-white font-medium">Campaign Active</div>
                                    <div className="text-xs text-white/40">Optimizing Real-time</div>
                                </div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
                        </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <AboutUs />

        {/* === JOURNEY SECTION === */}
        <section className="bg-[var(--bg-page)] px-6 md:px-12 py-24 relative z-20 border-t border-[var(--glass-border)] transition-colors duration-500">
          <div className="max-w-[1400px] mx-auto">
             <div className="text-center mb-16">
                 <SectionLabel color="cyan">Our Journey</SectionLabel>
                 <h3 className="text-3xl md:text-4xl font-medium text-[var(--text-main)]">Milestones that <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">defined us</span>.</h3>
             </div>
             
             <div className="flex flex-col md:grid md:grid-cols-2 gap-12 relative">
                 {/* Center Line */}
                 <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-emerald-500/50 to-transparent md:-translate-x-1/2"></div>

                 {[
                     { year: "Jan 2025", title: "Inception", desc: "Founded with a vision to merge creative marketing with hard-coded tech." },
                     { year: "Mar 2025", title: "First Enterprise Win", desc: "Secured partnership with a Fortune 500 real estate developer." },
                     { year: "Jun 2025", title: "Tech Stack Launch", desc: "Released proprietary ROI tracking dashboard for 100% transparency." },
                     { year: "Sep 2025", title: "Global Expansion", desc: "Expanded operations to Dubai & Singapore for international reach." },
                 ].map((m, i) => (
                     <motion.div 
                         key={i} 
                         initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, margin: "-50px" }}
                         transition={{ duration: 0.6, delay: i * 0.1 }}
                         className={cn(
                             "flex items-center gap-6 relative",
                             "md:col-span-1",
                             i % 2 === 0 ? "md:text-right md:flex-row-reverse" : "md:flex-row",
                             "flex-row" 
                         )}
                     >
                         <div className="w-16 h-16 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-full flex items-center justify-center text-sm font-bold text-[var(--text-main)] z-10 shadow-xl">
                             {m.year}
                         </div>
                         <div className="flex-1 p-6 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-2xl">
                             <h4 className="text-lg font-bold text-[var(--text-main)] mb-2">{m.title}</h4>
                             <p className="text-sm text-[var(--text-muted)]">{m.desc}</p>
                         </div>
                     </motion.div>
                 ))}
             </div>
          </div>
        </section>

        <section className="bg-[var(--bg-page)] px-6 md:px-12 py-24 relative z-20 transition-colors duration-500">
           <div className="max-w-[1600px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 <AnimatedCounter value={150} suffix="+" label="Projects Completed" />
                 <AnimatedCounter value={98} suffix="%" label="Client Satisfaction" />
                 <AnimatedCounter value={300} suffix="%" label="ROI Delivered" />
                 <AnimatedCounter value={17} suffix="+" label="Years Experience" />
              </div>
           </div>
        </section>

        {/* === SERVICES BENTO GRID (ENHANCED) === */}
        <section id="services" className="bg-[var(--bg-page)] px-6 md:px-12 py-24 relative z-20 overflow-hidden transition-colors duration-500">
          {/* Background Elements */}
          <div className="absolute right-0 top-1/4 w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[120px]"></div>

          <div className="max-w-[1600px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <SectionLabel color="lime">Our Services</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-main)] tracking-tight mb-4">
                Full-Stack <span className="text-[#ccff00] font-serif italic">Digital Powerhouse</span>
              </h2>
              <p className="text-[var(--text-muted)] text-lg">
                Comprehensive solutions tailored for growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
              
              {/* Service 1: Digital Marketing (Video/Image Background) */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="lg:col-span-2 row-span-1 md:row-span-2 rounded-[2rem] border border-[var(--glass-border)] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="relative z-10 h-full flex flex-col p-10 justify-end">
                    <div className="mb-auto flex items-start justify-between w-full">
                       <div className="p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl">
                          <TrendingUp className="w-8 h-8 text-[#ccff00]" />
                       </div>
                       <ArrowUpRight className="w-8 h-8 text-white opacity-50 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white mb-4">Digital Marketing</h3>
                    <p className="text-white/70 text-lg mb-8 max-w-xl">
                        Data-driven campaigns that convert. From SEO to PPC, we build the funnels that fuel your growth engine.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/5">
                           <CheckCircle2 className="w-5 h-5 text-[#ccff00]" /> <span>SEO & SEM</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/5">
                           <CheckCircle2 className="w-5 h-5 text-[#ccff00]" /> <span>Social Media</span>
                        </div>
                         <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/5">
                           <CheckCircle2 className="w-5 h-5 text-[#ccff00]" /> <span>Content Strategy</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/5">
                           <CheckCircle2 className="w-5 h-5 text-[#ccff00]" /> <span>Email Automation</span>
                        </div>
                    </div>
                </div>
              </motion.div>

              {/* Service 2: Web Dev (Code Visual) */}
              <motion.div whileHover={{ y: -5 }} className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--glass-border)] p-8 flex flex-col relative overflow-hidden group">
                  <div className="w-12 h-12 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl flex items-center justify-center mb-6">
                      <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl text-[var(--text-main)] font-medium mb-3">Web Development</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-6">High-performance React & Next.js applications built for scale and speed.</p>
                  
                  {/* Fake Code Window */}
                  <div className="mt-auto bg-[#1e1e1e] rounded-xl p-4 border border-white/10 shadow-2xl transform group-hover:scale-105 transition-transform">
                      <div className="flex gap-1.5 mb-3 opacity-50">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px] text-gray-400">
                         <div className="flex"><span className="text-purple-400">const</span> <span className="text-blue-400 ml-2">App</span> = () ={'>'} {'{'}</div>
                         <div className="ml-4 flex"><span className="text-purple-400">return</span> <span className="text-green-400 ml-2">{'<GLMR />'}</span></div>
                         <div>{'}'}</div>
                      </div>
                  </div>
              </motion.div>

               {/* Service 3: CRM (Flowchart Visual) */}
               <motion.div whileHover={{ y: -5 }} className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--glass-border)] p-8 flex flex-col relative overflow-hidden group">
                  <div className="w-12 h-12 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
                      <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl text-[var(--text-main)] font-medium mb-3">CRM Solutions</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-6">Automate your sales pipeline with custom Salesforce & HubSpot integrations.</p>
                  
                  {/* Visual Node Graph */}
                  <div className="mt-auto relative h-24 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-[2px] bg-[var(--glass-border)]"></div>
                      </div>
                      <div className="flex justify-between w-full relative z-10 px-2">
                          <div className="w-8 h-8 bg-[var(--bg-page)] border border-cyan-500 rounded-full flex items-center justify-center"><Users className="w-3 h-3 text-cyan-500"/></div>
                          <div className="w-8 h-8 bg-[var(--bg-page)] border border-purple-500 rounded-full flex items-center justify-center animate-pulse"><Settings className="w-3 h-3 text-purple-500"/></div>
                          <div className="w-8 h-8 bg-[var(--bg-page)] border border-emerald-500 rounded-full flex items-center justify-center"><Check className="w-3 h-3 text-emerald-500"/></div>
                      </div>
                  </div>
              </motion.div>


               {/* CTA Card */}
               <div className="lg:col-span-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 group shadow-lg shadow-cyan-500/20">
                 <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Ready to scale?</h3>
                    <p className="text-white/80">Let's build your custom growth engine today.</p>
                 </div>
                 <PillButton onClick={openLeadGen} className="bg-white text-black hover:bg-gray-100 border-none shrink-0 px-8 py-4">
                    Get Free Audit <ChevronRight className="w-4 h-4" />
                 </PillButton>
              </div>

            </div>
          </div>
        </section>

        {/* === INDUSTRIES CAROUSEL === */}
        <section id="industries" className="py-24 bg-[var(--bg-page)] relative overflow-hidden border-y border-[var(--glass-border)] transition-colors duration-500">
            {/* Background Decor */}
            <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--glass-bg),_transparent)] pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <SectionLabel color="lime">Industries</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-main)] max-w-xl">
                        Powering Growth Across <span className="text-[#ccff00] font-serif italic">Key Sectors</span>.
                    </h2>
                </div>
                <div className="flex gap-2">
                     <button 
                        onClick={() => scrollIndustries('left')}
                        className="w-12 h-12 rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] flex items-center justify-center text-[var(--text-main)] transition-colors"
                     >
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button 
                        onClick={() => scrollIndustries('right')}
                        className="w-12 h-12 rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] flex items-center justify-center text-[var(--text-main)] transition-colors"
                     >
                        <ChevronRight className="w-6 h-6" />
                     </button>
                </div>
            </div>

            <div 
                className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar" 
                ref={industryScrollRef}
            >
                {industries.map((ind, i) => (
                    <div 
                        key={i} 
                        className="min-w-[320px] md:min-w-[400px] bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--glass-border)] p-8 rounded-[2rem] relative group snap-center hover:border-[var(--text-muted)] transition-all duration-500 flex flex-col justify-between h-[450px]"
                    >
                        {/* Gradient Background on Hover */}
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]", ind.gradient)}></div>
                        
                        <div className="relative z-10">
                            <IconWrapper className="w-16 h-16 flex items-center justify-center mb-8 bg-[var(--glass-bg)] border-[var(--glass-border)] group-hover:scale-110 transition-transform duration-500">
                                <ind.icon className={cn("w-8 h-8", ind.color)} />
                            </IconWrapper>
                            <h3 className="text-3xl font-medium text-[var(--text-main)] mb-4">{ind.title}</h3>
                            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
                                {ind.desc}
                            </p>
                        </div>

                        <div className="relative z-10">
                            <div className="h-px w-full bg-[var(--glass-border)] mb-6"></div>
                            <div className="flex flex-wrap gap-2">
                                {ind.tags.map((tag, t) => (
                                    <span key={t} className="px-3 py-1 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* === TESTIMONIALS SECTION === */}
        <section id="client-stories" className="bg-[var(--bg-page)] px-6 md:px-12 py-24 relative z-20 border-t border-[var(--glass-border)] transition-colors duration-500 overflow-hidden">
           <div className="max-w-[1600px] mx-auto">
              <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                 <div>
                    <SectionLabel color="cyan">Client Stories</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-main)] mb-2">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Industry Leaders</span></h2>
                 </div>
                 <div className="flex gap-2">
                     <button 
                        onClick={() => scrollTestimonials('left')}
                        className="w-12 h-12 rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] flex items-center justify-center text-[var(--text-main)] transition-colors"
                     >
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button 
                        onClick={() => scrollTestimonials('right')}
                        className="w-12 h-12 rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] flex items-center justify-center text-[var(--text-main)] transition-colors"
                     >
                        <ChevronRight className="w-6 h-6" />
                     </button>
                </div>
              </div>
              
              <div 
                 className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
                 ref={testimonialScrollRef}
              >
                 {testimonials.map((t, i) => (
                    <motion.div 
                       key={i}
                       className="min-w-[300px] md:min-w-[400px] bg-[var(--bg-card)] border border-[var(--glass-border)] p-8 rounded-3xl relative group hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-cyan-500/10 snap-center flex flex-col justify-between"
                       whileHover={{ y: -5 }}
                    >
                       <div>
                          <Quote className="absolute top-8 right-8 w-10 h-10 text-[var(--glass-border)] group-hover:text-cyan-500/20 transition-colors" />
                          <div className="flex gap-1 mb-6">
                             {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                          </div>
                          <p className="text-[var(--text-muted)] text-lg mb-8 relative z-10 leading-relaxed italic">"{t.quote}"</p>
                       </div>
                       <div className="flex items-center gap-4 mt-auto">
                          <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-[var(--glass-border)]" />
                          <div>
                             <h4 className="font-bold text-[var(--text-main)]">{t.name}</h4>
                             <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{t.role}, {t.company}</p>
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* === CLIENT LOGOS SECTION === */}
        <section className="bg-[var(--bg-page)] py-20 border-t border-[var(--glass-border)] relative z-20 overflow-hidden transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center mb-12">
                <p className="text-[var(--text-muted)] text-sm font-mono uppercase tracking-[0.3em]">Powering the world's most ambitious teams</p>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Left/Right Fade Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[var(--bg-page)] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[var(--bg-page)] to-transparent z-10"></div>

                {/* Marquee Track 1 */}
                <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-16 md:gap-32 pr-16 md:pr-32">
                    {clientLogos.map((client, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-300 cursor-pointer group grayscale hover:grayscale-0">
                            <div className="p-2 bg-[var(--glass-bg)] rounded-lg group-hover:bg-cyan-500/10 border border-transparent group-hover:border-cyan-500/20 transition-colors">
                                <client.icon className="w-8 h-8 text-[var(--text-main)] group-hover:text-cyan-500" />
                            </div>
                            <span className="text-xl font-bold font-sans tracking-tight text-[var(--text-main)] group-hover:text-cyan-500 transition-colors">{client.name}</span>
                        </div>
                    ))}
                </div>
                {/* Marquee Track 2 (Duplicate for loop) */}
                <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-16 md:gap-32 pr-16 md:pr-32">
                    {clientLogos.map((client, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-300 cursor-pointer group grayscale hover:grayscale-0">
                            <div className="p-2 bg-[var(--glass-bg)] rounded-lg group-hover:bg-cyan-500/10 border border-transparent group-hover:border-cyan-500/20 transition-colors">
                                <client.icon className="w-8 h-8 text-[var(--text-main)] group-hover:text-cyan-500" />
                            </div>
                            <span className="text-xl font-bold font-sans tracking-tight text-[var(--text-main)] group-hover:text-cyan-500 transition-colors">{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* === FOUNDER SECTION === */}
        <section id="founder" className="bg-[#e5e5e5] w-full px-6 md:px-12 py-24 rounded-[3rem] my-12 mx-auto max-w-[1850px] relative z-30 text-black">
           <div className="max-w-[1400px] mx-auto">
              <SectionLabel color="dark">Leadership</SectionLabel>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1">
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1] mb-8 text-black">
                       "Your success is not a milestone — <span className="text-emerald-700 font-serif italic">it's our mission.</span>"
                    </h2>
                    
                    <div className="space-y-6 text-lg text-black/70 leading-relaxed mb-8">
                        <p>
                            I founded GLMR Technologies to build a company that truly understands business owners. As a founder, I understand the pressure of managing growth, customers, and operations simultaneously.
                        </p>
                        <p>
                            Many businesses fail not because they lack potential, but because they lack the right digital strategy and systems. We don't sell generic services; we take ownership of your growth.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-black/10 pt-6">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl font-mono">K</div>
                        <div>
                            <div className="font-bold text-xl text-black">Kshitij Katara</div>
                            <div className="text-sm text-black/50 uppercase tracking-widest">Founder & CEO</div>
                        </div>
                    </div>
                 </div>

                 <div className="order-1 lg:order-2 relative flex justify-center">
                    <div className="w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 bg-white">
                       <img 
                          src="/Kshitij-Katara.png" 
                          alt="Kshitij Katara" 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                       <div className="absolute bottom-6 right-6">
                          <img src="/logo-placeholder.png" className="h-8 opacity-50" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* === FOOTER (FORTUNE 500 STYLE) === */}
        <footer id="contact" className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5 font-sans relative overflow-hidden">
           {/* Decorative Background */}
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

           <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
              
              {/* Top Section: CTA & Contact Form */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-b border-white/10 pb-16">
                 {/* Left Side */}
                 <div className="flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">Ready to transform your business?</h2>
                    <p className="text-white/60 text-lg mb-8 max-w-md">Join industry leaders who have scaled their operations with GLMR's proprietary growth systems.</p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                       <button onClick={openLeadGen} className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-50 transition-colors">Start Project</button>
                    </div>

                    <div className="space-y-6">
                         <div className="flex items-center gap-4 text-white/60">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                <Mail className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-wider opacity-50 mb-1">Email us</div>
                                <div className="text-white font-medium hover:text-cyan-400 transition-colors cursor-pointer">kshitij.glmr@gmail.com</div>
                            </div>
                         </div>
                         <div className="flex items-center gap-4 text-white/60">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                <Phone className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-wider opacity-50 mb-1">Call us</div>
                                <div className="text-white font-medium">+91-9549602463</div>
                            </div>
                         </div>
                    </div>
                 </div>

                 {/* Right Side - Contact Form */}
                 <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
                     <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        Send a Message
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                     </h3>
                     <form onSubmit={handleContactSubmit} className="space-y-4">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-1">
                                 <label className="text-xs uppercase tracking-wider text-white/40 ml-1">Name</label>
                                 <input 
                                     type="text" 
                                     required
                                     value={contactForm.name}
                                     onChange={e => setContactForm({...contactForm, name: e.target.value})}
                                     className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors placeholder:text-white/20"
                                     placeholder="John Doe"
                                 />
                             </div>
                             <div className="space-y-1">
                                 <label className="text-xs uppercase tracking-wider text-white/40 ml-1">Email</label>
                                 <input 
                                     type="email" 
                                     required
                                     value={contactForm.email}
                                     onChange={e => setContactForm({...contactForm, email: e.target.value})}
                                     className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors placeholder:text-white/20"
                                     placeholder="john@example.com"
                                 />
                             </div>
                         </div>
                         <div className="space-y-1">
                             <label className="text-xs uppercase tracking-wider text-white/40 ml-1">Subject</label>
                              <select 
                                 value={contactForm.subject}
                                 onChange={e => setContactForm({...contactForm, subject: e.target.value})}
                                 className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors [&>option]:bg-black cursor-pointer appearance-none"
                             >
                                 <option value="">Select a topic...</option>
                                 <option value="project">Start a Project</option>
                                 <option value="partnership">Partnership</option>
                                 <option value="careers">Careers</option>
                                 <option value="other">Other</option>
                             </select>
                         </div>
                         <div className="space-y-1">
                             <label className="text-xs uppercase tracking-wider text-white/40 ml-1">Message</label>
                             <textarea 
                                 required
                                 value={contactForm.message}
                                 onChange={e => setContactForm({...contactForm, message: e.target.value})}
                                 rows={4}
                                 className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors placeholder:text-white/20 resize-none"
                                 placeholder="Tell us about your needs..."
                             />
                         </div>
                         <button 
                             type="submit"
                             disabled={contactStatus === 'sending' || contactStatus === 'success'}
                             className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2 shadow-lg shadow-cyan-900/20"
                         >
                             {contactStatus === 'sending' ? (
                                 <>
                                     <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                 </>
                             ) : contactStatus === 'success' ? (
                                 <>
                                     <CheckCircle2 className="w-5 h-5" /> Message Sent
                                 </>
                             ) : (
                                 <>
                                     Send Message <Send className="w-4 h-4" />
                                 </>
                             )}
                         </button>
                     </form>
                 </div>
              </div>

              {/* Main Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
                 <div className="col-span-2 lg:col-span-2">
                    <div className="flex items-center mb-6">
                        <img 
                          src="/logo.png" 
                          alt="GLMR Technologies" 
                          className="h-auto object-contain" 
                          style={{ width: '129.989px', imageRendering: 'high-quality', maxWidth: '100%' }}
                        />
                    </div>
                    <p className="text-white/50 mb-8 max-w-sm">
                       We combine creative digital marketing with robust technology systems to help brands build visibility, improve conversions, and scale sustainably.
                    </p>
                    <div className="flex gap-4">
                       {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                          <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-cyan-500 hover:text-white transition-all">
                             <Icon className="w-4 h-4" />
                          </a>
                       ))}
                    </div>
                 </div>
                 
                 <div>
                    <h4 className="font-bold text-white mb-6">Services</h4>
                    <ul className="space-y-4 text-white/50 text-sm">
                       {['Digital Marketing', 'Web Development', 'Mobile Apps', 'SEO Optimization', 'PPC Advertising', 'CRM Solutions'].map(item => (
                          <li key={item}><a href="#" className="hover:text-cyan-400 transition-colors">{item}</a></li>
                       ))}
                    </ul>
                 </div>

                 <div>
                    <h4 className="font-bold text-white mb-6">Company</h4>
                    <ul className="space-y-4 text-white/50 text-sm">
                       {['About Us', 'Leadership', 'Careers', 'Press', 'Partners', 'Legal'].map(item => (
                          <li key={item}><a href="#" className="hover:text-cyan-400 transition-colors">{item}</a></li>
                       ))}
                    </ul>
                 </div>

                 <div>
                    <h4 className="font-bold text-white mb-6">Global HQ</h4>
                    <div className="space-y-4 text-white/50 text-sm">
                       <div className="flex gap-3">
                          <MapPin className="w-5 h-5 shrink-0 text-cyan-500" />
                          <span>Jaipur, Rajasthan<br/>India</span>
                       </div>
                       <div className="flex gap-3">
                          <Mail className="w-5 h-5 shrink-0 text-cyan-500" />
                          <a href="mailto:kshitij.glmr@gmail.com" className="hover:text-white">kshitij.glmr@gmail.com</a>
                       </div>
                       <div className="flex gap-3">
                          <Phone className="w-5 h-5 shrink-0 text-cyan-500" />
                          <span>+91-9549602463</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30">
                 <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                 </div>
                 <div>
                    © 2025 GLMR TECHNOLOGIES. ALL RIGHTS RESERVED.
                 </div>
              </div>

           </div>
        </footer>

      </div>
      
      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
        }
        .animate-marquee {
            animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
            animation: marquee2 25s linear infinite;
        }
        /* Custom Scrollbar for Modal */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: var(--glass-border);
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}