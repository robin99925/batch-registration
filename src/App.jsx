import React, { useState, useEffect } from "react";

export default function App() {
  // State for Countdown Timer (48 Hours = 172800 Seconds)
  const [totalSeconds, setTotalSeconds] = useState(48 * 3600);

  // State for R:R Simulator
  const [rrRatio, setRrRatio] = useState(3.0);
  const [slPoints, setSlPoints] = useState(15);

  // State for Form Modal & Submission Status
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    experience: "Beginner (0 - 6 Months)",
    focusArea: "Nifty & BankNifty Options",
  });

  // Countdown Ticker Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Time calculations
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // R:R Calculations
  const targetPoints = Math.round(slPoints * rrRatio);
  const requiredWinRate = ((1 / (1 + rrRatio)) * 100).toFixed(1);

  const getRatingBadge = (ratio) => {
    if (ratio >= 5) {
      return {
        text: "SMC Institution Sniper",
        className:
          "text-xs bg-amber-950 text-amber-400 font-bold px-3 py-1 rounded-full border border-amber-400/30",
      };
    } else if (ratio >= 3) {
      return {
        text: "SMC Ultra High R:R",
        className:
          "text-xs bg-emerald-950 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-400/30",
      };
    }
    return {
      text: "Standard Institutional Setup",
      className:
        "text-xs bg-sky-950 text-sky-400 font-bold px-3 py-1 rounded-full border border-sky-400/30",
    };
  };

  const badgeInfo = getRatingBadge(rrRatio);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-[#00E676] selection:text-black pb-20 md:pb-0">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-[#0B0F17] to-slate-900 border-b border-[#00E676]/20 py-2.5 px-4 text-center text-xs md:text-sm font-medium">
        <span class="inline-block bg-[#00E676]/20 text-[#00E676] px-2 py-0.5 rounded-full font-bold mr-2 text-xs">
          🔥 BATCH #1 LAUNCH OFFER
        </span>
        <span className="text-slate-200">
          First 50 Students Ke Liye Extra ₹10,000 Special Discount!
        </span>
      </div>

      {/* Header Navbar */}
      <header className="sticky top-0 z-40 bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E676] via-emerald-500 to-[#FFD700] flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-[#00E676]/20">
            🎓
          </div>
          <div>
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-white">
              professor<span className="text-[#00E676]">whotrades</span>
            </span>
            <span className="block text-[10px] text-[#FFD700] font-semibold tracking-widest uppercase">
              Official Batch #1 Masterclass
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <a
            href="#strategy"
            className="text-slate-300 hover:text-[#00E676] transition-colors"
          >
            Unified Strategy
          </a>
          <a
            href="#whatsapp-vip"
            className="text-slate-300 hover:text-[#FFD700] transition-colors"
          >
            VIP Group Benefits
          </a>
          <a
            href="#proof-section"
            className="text-slate-300 hover:text-[#00E676] transition-colors"
          >
            3-Month Proofs
          </a>
          <a
            href="#rr-simulator"
            className="text-slate-300 hover:text-sky-400 transition-colors"
          >
            R:R Simulator
          </a>
          <a
            href="#pricing"
            className="text-slate-300 hover:text-[#00E676] transition-colors"
          >
            Fees & Offer
          </a>
        </div>
      </header>

      {/* Hero Section with Countdown Timer */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center relative">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-[#00E676]/30 text-[#00E676] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 shadow-lg shadow-[#00E676]/10">
          <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping"></span>
          <span>Batch #1 Live Masterclass — Registration Closing Soon!</span>
        </div>

        <h1 className="font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-6">
          Master SMC + ICT + Order Flow <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#00E676] to-sky-400 bg-clip-text text-transparent">
            In Just 30 Days Live!
          </span>
        </h1>

        <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          Ek single hybrid strategy se live market me sniper entries lein. No
          complicated indicators — Only Pure Price Action, Liquidity &
          Buyer-Seller Strength.
        </p>

        {/* Dynamic Countdown Timer */}
        <div className="max-w-md mx-auto bg-[#131926]/90 border border-slate-800 p-4 rounded-2xl mb-8 shadow-xl">
          <span className="text-slate-400 text-xs uppercase tracking-widest font-bold block mb-2">
            ⚡ Registration Closing In 2 Days!
          </span>
          <div className="flex justify-center items-center space-x-3 text-white font-black">
            <div className="bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 min-w-[65px]">
              <span className="text-2xl md:text-3xl text-[#00E676]">
                {String(hours).padStart(2, "0")}
              </span>
              <span className="block text-[10px] text-slate-500 font-sans font-normal uppercase">
                Hours
              </span>
            </div>
            <span className="text-[#00E676] text-xl font-bold">:</span>
            <div className="bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 min-w-[65px]">
              <span className="text-2xl md:text-3xl text-[#00E676]">
                {String(minutes).padStart(2, "0")}
              </span>
              <span className="block text-[10px] text-slate-500 font-sans font-normal uppercase">
                Mins
              </span>
            </div>
            <span className="text-[#00E676] text-xl font-bold">:</span>
            <div className="bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 min-w-[65px]">
              <span className="text-2xl md:text-3xl text-[#FFD700]">
                {String(seconds).padStart(2, "0")}
              </span>
              <span className="block text-[10px] text-slate-500 font-sans font-normal uppercase">
                Secs
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            // onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-[#00E676] hover:bg-emerald-400 text-slate-950 font-extrabold text-base md:text-lg px-8 py-4 rounded-xl shadow-xl transition transform hover:scale-105"
          >
            <a
              href="https://forms.gle/aPXtTv8ubbA6Vp1L6"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 underline font-semibold"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Reserve Your Seat @ ₹4,999 →
            </a>
          </button>
          <a
            href="#proof-section"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-6 py-4 rounded-xl border border-slate-800 transition"
          >
            View Past 3 Months Data
          </a>
        </div>
      </section>

      {/* Unified Strategy Section */}
      <section id="strategy" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-[#00E676] font-bold text-xs md:text-sm tracking-wider uppercase bg-[#00E676]/10 px-3 py-1 rounded-full border border-[#00E676]/30">
            ⚡ Proprietary Buyer & Seller Strength System
          </span>
          <h2 className="font-extrabold text-3xl md:text-5xl text-white mt-3">
            SMC + ICT + Order Flow Se Bani <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00E676] to-sky-400 bg-clip-text text-transparent">
              Ek High Precision Strategy
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
            Aapko multiple complex indicators seekhne ki zaroorat nahi hai. SMC,
            ICT aur Order Flow ke core rules ko combine karke{" "}
            <strong className="text-white">Ek Master Strategy</strong> tayyar ki
            gayi hai, jo Buyers aur Sellers ki real strength readout kar leti
            hai.
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#131926] via-slate-900 to-[#131926] p-6 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {/* Pillar 1 */}
            <div className="bg-slate-950/80 p-6 rounded-2xl border border-[#00E676]/30 hover:border-[#00E676] transition">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#00E676]/20 text-[#00E676] flex items-center justify-center font-bold text-lg">
                  01
                </span>
                <h4 className="font-bold text-white text-lg">
                  Buyer vs Seller Strength
                </h4>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                Yeh strategy aapko clearly dikha degi ki exact moment par market
                me <strong>Buyers dominant hain ya Sellers</strong>.
              </p>
              <span className="text-[11px] text-[#00E676] font-semibold bg-[#00E676]/10 px-2.5 py-1 rounded-md inline-block">
                Real Power Identification
              </span>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-950/80 p-6 rounded-2xl border border-[#FFD700]/30 hover:border-[#FFD700] transition">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center font-bold text-lg">
                  02
                </span>
                <h4 className="font-bold text-white text-lg">
                  Exact Entry & Smallest SL
                </h4>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                Bina guess work ke clear entry point milega. Stop-Loss sabse
                tight rahega jisse risk minimum ho jata hai.
              </p>
              <span className="text-[11px] text-[#FFD700] font-semibold bg-[#FFD700]/10 px-2.5 py-1 rounded-md inline-block">
                High Accuracy Executions
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-950/80 p-6 rounded-2xl border border-sky-400/30 hover:border-sky-400 transition">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-sky-400/20 text-sky-400 flex items-center justify-center font-bold text-lg">
                  03
                </span>
                <h4 className="font-bold text-white text-lg">
                  Target & Momentum Ride
                </h4>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                Jaise hi big players move karte hain, strategy exact target
                points aur trailing stop loss points set kar deti hai.
              </p>
              <span className="text-[11px] text-sky-400 font-semibold bg-sky-400/10 px-2.5 py-1 rounded-md inline-block">
                Big Reward Capture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Proof & Track Record Section */}
      <section
        id="proof-section"
        className="max-w-6xl mx-auto px-4 py-16 bg-slate-900/40 border-y border-slate-800"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#FFD700] font-bold text-xs uppercase tracking-wider bg-[#FFD700]/10 px-3 py-1 rounded-full border border-[#FFD700]/20">
              📸 100% VERIFIED TRACK RECORD
            </span>
            <h2 className="font-extrabold text-3xl md:text-5xl text-white mt-4 leading-tight">
              Pichle{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-orange-400 bg-clip-text text-transparent">
                3 Months Ka Complete Data
              </span>{" "}
              Instagram Par Public Hai!
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-4 leading-relaxed">
              Pichle 90+ dino ke sabhi live trade breakdowns, entry charts, stop
              losses, aur target hits step-by-step mere Official Instagram
              profile par uploaded hain.
            </p>

            <div className="mt-8">
              <a
                href="https://www.instagram.com/professor.who.trades?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition transform hover:scale-105"
              >
                <span>Check Past 3 Months Data On Instagram</span>
              </a>
            </div>
          </div>

          <div className="bg-[#131926] p-6 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-0.5">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-bold text-pink-400">
                    IG
                  </div>
                </div>
                <div>
                  <span className="font-bold text-white text-sm block">
                    professorwhotrades
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Live Analysis & Verified Proofs
                  </span>
                </div>
              </div>
              <span className="text-xs bg-emerald-950 text-[#00E676] font-bold px-2.5 py-1 rounded-full border border-[#00E676]/30">
                Verified Highlights
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-2xl font-black text-[#00E676] block">
                  90+ Days
                </span>
                <span className="text-[11px] text-slate-400">
                  Live Trade Logged
                </span>
              </div>
              <div class="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-2xl font-black text-[#FFD700] block">
                  1:3 to 1:6
                </span>
                <span className="text-[11px] text-slate-400">
                  Avg Setup R:R
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP WhatsApp Mastermind Section */}
      <section id="whatsapp-vip" className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-950/60 via-[#131926] to-slate-900 border-2 border-[#00E676]/40 p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 bg-[#00E676]/20 border border-[#00E676]/40 text-[#00E676] px-3 py-1 rounded-full text-xs font-extrabold uppercase mb-4">
            <span>UNBEATABLE VALUE OFFER</span>
          </div>

          <h2 className="font-black text-2xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            Exclusive{" "}
            <span className="bg-gradient-to-r from-[#00E676] to-sky-400 bg-clip-text text-transparent">
              Private WhatsApp Community
            </span>{" "}
            Access!
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl mb-8 leading-relaxed">
            Humne banaya hai ek <strong>VIP Mastermind WhatsApp Group</strong>{" "}
            jahan har ek trade se pehle uska logic, market dynamic aur doubt ko
            daily solve kiya jayega!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-white text-lg mb-1">
                🧠 Every Trade Logic Breakdown
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trade lene se pehle uske peeche ka SMC/ICT order block logic,
                liquidity sweep aur confirmation charts WhatsApp group par
                direct share honge.
              </p>
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-white text-lg mb-1">
                ⚡ Daily Live Market Doubt Clearing
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live market ke dauran jab aap chart dekh rahe honge, aapke har
                doubt ka exact answer aur real-time guidance milegi.
              </p>
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-white text-lg mb-1">
                🤝 Unmatched Mentor Handholding
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sabse zyada benefits aur continuous attention sirf is pehle
                batch me mil raha hai kyunki mera poora focus aapke results par
                hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk-to-Reward Interactive Simulator */}
      <section id="rr-simulator" className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-b from-[#131926] to-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="text-center mb-8">
            <span className="bg-[#FFD700]/20 text-[#FFD700] font-bold text-xs px-3 py-1 rounded-full border border-[#FFD700]/30">
              QUANT TRADING LOGIC
            </span>
            <h3 className="font-extrabold text-2xl md:text-3xl text-white mt-2">
              Risk-to-Reward (R:R) Simulator
            </h3>
            <p className="text-slate-400 text-xs md:text-sm">
              Dekhiye ki Institutional SMC/ICT setups me R:R ratio kaise aapko
              profitable rakhta hai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Input Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 font-semibold">
                  <span className="text-slate-300">
                    Target Risk-to-Reward Ratio:
                  </span>
                  <span className="text-[#00E676] font-bold text-lg">
                    1 : {rrRatio.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="10"
                  step="0.5"
                  value={rrRatio}
                  onChange={(e) => setRrRatio(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00E676]"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2 font-semibold">
                  <span className="text-slate-300">Stop Loss (Points):</span>
                  <span className="text-[#FFD700] font-bold text-lg">
                    {slPoints} Points
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={slPoints}
                  onChange={(e) => setSlPoints(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FFD700]"
                />
              </div>
            </div>

            {/* Calculated Output Display */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-slate-400 text-sm">
                  Required Stop Loss:
                </span>
                <span className="font-bold text-red-400 text-lg">
                  {slPoints} Points
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-slate-400 text-sm">
                  Target Profit Points:
                </span>
                <span className="font-bold text-[#00E676] text-xl">
                  {targetPoints} Points
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-slate-400 text-sm">
                  Minimum Required Win-Rate:
                </span>
                <span className="font-bold text-[#FFD700] text-lg">
                  {requiredWinRate}%
                </span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-300 text-sm font-semibold">
                  Setup Rating:
                </span>
                <span className={badgeInfo.className}>{badgeInfo.text}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section id="pricing" className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-3xl md:text-5xl text-white">
            Sabse Affordable Fees, Maximum Value!
          </h2>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            professorwhotrades ka yeh pehla public batch hai, isliye price sabke
            liye accessible hai.
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#131926] via-slate-900 to-[#131926] border-2 border-[#00E676] p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-extrabold text-2xl md:text-3xl text-white mb-2">
                30-Day Live Trading Masterclass
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Complete SMC + ICT + Order Flow Course + Daily Live Market
                Analysis & VIP WhatsApp Community Access.
              </p>

              <ul className="space-y-3 text-sm text-slate-200 mb-6">
                <li>✓ 30 Days Live Daily Online Classes</li>
                <li>✓ VIP WhatsApp Group Access (Every Trade Logic)</li>
                <li>✓ Exact Entry, SL & Target Framework</li>
                <li>✓ Daily Live Market Doubt Sessions</li>
                <li>✓ Recorded Sessions Backups Included</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                First Batch All-Inclusive Fee
              </span>

              <div className="my-4 flex justify-center items-baseline space-x-3">
                <span className="text-slate-500 line-through text-xl md:text-2xl font-bold">
                  ₹14,999
                </span>
                <span className="font-black text-4xl md:text-6xl text-[#00E676]">
                  ₹4,999
                </span>
              </div>

              <p className="text-xs text-[#FFD700] font-semibold mb-6">
                🔥 Flat 66% Discount For First 50 Seats Only!
              </p>

              <button
                // onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#00E676] hover:bg-emerald-400 text-slate-950 font-black text-lg py-4 rounded-xl shadow-lg transition"
              >
                <a
                  href="https://forms.gle/aPXtTv8ubbA6Vp1L6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 underline font-semibold"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Fill Form & Reserve Seat
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Floating Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-950/95 border-t border-slate-800 p-3 z-50 backdrop-blur-md flex items-center justify-between">
        <div>
          <span className="block text-[10px] text-slate-400 uppercase font-bold">
            professorwhotrades
          </span>
          <div className="flex items-center space-x-1.5">
            <span className="text-xs line-through text-slate-500">₹14,999</span>
            <span className="font-extrabold text-lg text-[#00E676]">
              ₹4,999
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#00E676] text-slate-950 font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-lg"
        >
          Book Seat Now →
        </button>
      </div>

      {/* Form Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#131926] border border-slate-700 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="bg-slate-900 p-5 border-b border-slate-800 flex justify-between items-center">
              <div>
                <h3 className="font-extrabold text-xl text-white">
                  professorwhotrades Batch #1
                </h3>
                <p className="text-xs text-[#00E676]">
                  30 Days Live Trading + VIP WhatsApp Group @ ₹4,999
                </p>
              </div>
              <button
                onClick={resetAndCloseModal}
                className="text-slate-400 hover:text-white text-xl p-1"
              >
                ✕
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Apna Poora Naam (Full Name) *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#00E676]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    pattern="[0-9]{10}"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="10 Digit Mobile Number"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#00E676]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Trading Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#00E676]"
                  >
                    <option>Beginner (0 - 6 Months)</option>
                    <option>Intermediate (6 Months - 2 Years)</option>
                    <option>Experienced (2+ Years)</option>
                  </select>
                </div>

                <div className="pt-2 text-center text-xs text-slate-400">
                  <span>Direct Google Form me fill karna chahte ho? </span>
                  <a
                    href="https://forms.gle/aPXtTv8ubbA6Vp1L6"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 underline font-semibold"
                  >
                    Open External Google Form
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00E676] text-slate-950 font-extrabold text-base py-3.5 rounded-xl shadow-lg hover:bg-emerald-400 transition"
                >
                  Submit Registration Details
                </button>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#00E676]/20 text-[#00E676] rounded-full flex items-center justify-center text-3xl mx-auto border border-[#00E676]/40">
                  ✓
                </div>
                <h3 className="font-extrabold text-2xl text-white">
                  Details Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-300">
                  Aapki details recieve ho gayi hain. professorwhotrades ki team
                  WhatsApp par contact karegi.
                </p>
                <button
                  onClick={resetAndCloseModal}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
