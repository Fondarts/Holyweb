import { useState, useEffect, type MouseEvent } from "react";
import { BookOpen, Brain, Gamepad2, Clock, Smartphone, Sparkles, Shield, Target, Zap } from "lucide-react";

export default function HolyMindLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const linkId = "fair-display-font";
    if (document.getElementById(linkId)) return;
    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fair+Display:wght@700&display=swap";
    document.head.appendChild(link);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-amber-500" />,
      title: "Bible Quizzes",
      description: "Test your knowledge with engaging quizzes covering Old and New Testament stories, characters, and teachings."
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-emerald-500" />,
      title: "Word Soup",
      description: "Find hidden Bible words in a relaxing word search puzzle. Perfect for unwinding while staying connected to Scripture."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: "Bible Reader",
      description: "Read the Bible with a clean, distraction-free interface. Multiple translations and easy navigation."
    }
  ];

  const focusFeatures = [
    { icon: <Shield className="w-5 h-5" />, text: "Block distracting apps" },
    { icon: <Target className="w-5 h-5" />, text: "keep track of your progress" },
    { icon: <Zap className="w-5 h-5" />, text: "Stay in the zone" }
  ];

  const downloadBadges = [
    {
      href: "https://apps.apple.com",
      alt: "Download on the App Store",
      asset: "/images/app-store-badge.svg",
    },
    {
      href: "https://play.google.com/store",
      alt: "Get it on Google Play",
      asset: "/images/play-store-badge.svg",
    }
  ];

  const brandStyle = { fontFamily: "'Fair Display', serif" };

  const handleNavClick = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/holymind-logo.svg" alt="HolyMind logo" className="w-10 h-10 rounded-2xl bg-white/80 p-1" />
            <span style={brandStyle} className="text-xl text-slate-900 font-bold select-none">
              HolyMind
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" onClick={handleNavClick("features")} className="text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">Features</a>
            <a href="#focus" onClick={handleNavClick("focus")} className="text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">Focus Mode</a>
            <a href="#download" onClick={handleNavClick("download")} className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center gap-3 mb-6">
            <img src="/images/holymind-logo.svg" alt="HolyMind logo" className="w-28 h-28" />
            <p style={brandStyle} className="text-4xl sm:text-5xl text-slate-900 font-bold select-none">HolyMind</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Your daily Bible companion</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Study the Bible with
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">Purpose & Joy</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            HolyMind combines engaging games, deep reading, and focus tools to transform your Bible study into a daily habit you actually look forward to.
          </p>
          <div className="mb-10 flex items-center justify-center gap-4">
            <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="hover:opacity-90 transition-opacity">
              <img src="/images/app-store-badge.svg" alt="Download on the App Store" className="h-14 w-auto object-contain" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="hover:opacity-90 transition-opacity">
              <img src="/images/play-store-badge.svg" alt="Get it on Google Play" className="h-14 w-auto object-contain" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#download" onClick={handleNavClick("download")} className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-colors">
              <Smartphone className="w-5 h-5" />
              <span>Get the App</span>
            </a>
            <a href="#features" onClick={handleNavClick("features")} className="flex items-center gap-2 px-8 py-4 text-slate-700 font-medium hover:text-slate-900 transition-colors">
              <span>Explore Features</span>
              <span className="text-xl">→</span>
            </a>
            <a href="#focus" onClick={handleNavClick("focus")} className="flex items-center gap-2 px-8 py-4 border border-slate-200 rounded-2xl text-slate-900 font-semibold hover:border-slate-900 transition-colors">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>Focus Mode</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Three Ways to Engage</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you want to test your knowledge, relax with a puzzle, or dive deep into Scripture, HolyMind has you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Mode Section */}
      <section id="focus" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                <span>Focus Time</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Block Distractions.
                <span className="block text-amber-400">Deepen Your Study.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                HolyMind's Focus Time feature lets you temporarily block other apps on your phone, creating a sacred space for uninterrupted Bible study. Keep track of your progress and stay in the zone.
              </p>
              <div className="space-y-4">
                {focusFeatures.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center text-amber-400">
                      {item.icon}
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <img src="/images/holymind-logo.svg" alt="HolyMind focus logo" className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">HolyMind</p>
                      <p className="text-slate-400 text-sm">Focus Session</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <div className="text-center py-8">
                  <div className="text-6xl font-bold text-white mb-2">25:00</div>
                  <p className="text-slate-400">Focus time remaining</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-rose-400" />
                      <span className="text-slate-300">Social Media</span>
                    </div>
                    <span className="text-rose-400 text-sm font-medium">Blocked</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Gamepad2 className="w-5 h-5 text-rose-400" />
                      <span className="text-slate-300">Games</span>
                    </div>
                    <span className="text-rose-400 text-sm font-medium">Blocked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Your Journey Today</h2>
          <p className="text-lg text-slate-600 mb-6">
            Download HolyMind now and transform your Bible study into a daily habit you love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {downloadBadges.map((badge) => (
              <a
                key={badge.alt}
                href={badge.href}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img src={badge.asset} alt={badge.alt} className="h-14 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <img src="/images/holymind-logo.svg" alt="HolyMind logo" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-lg font-bold text-white">HolyMind</span>
            </div>
            <p className="text-slate-400 text-sm">© 2026 HolyMind. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
