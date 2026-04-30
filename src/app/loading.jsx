export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
            {/* Ambient radial glow */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 50%, #1a3a5c 0%, transparent 70%)",
                }}
            />

            {/* Animated grain overlay */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Raleway:wght@300;400&display=swap');

        @keyframes pulse-ring {
          0%   { transform: scale(0.85); opacity: 0.6; }
          50%  { transform: scale(1.05); opacity: 0.15; }
          100% { transform: scale(0.85); opacity: 0.6; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dot-pulse {
          0%, 80%, 100% { opacity: 0.2; transform: scaleY(0.6); }
          40%            { opacity: 1;   transform: scaleY(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .ring-outer {
          animation: spin-slow 4s linear infinite;
        }
        .ring-inner {
          animation: spin-reverse 2.5s linear infinite;
        }
        .pulse-glow {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        .fade-up-1 { animation: fade-up 0.8s ease forwards; animation-delay: 0.2s; opacity: 0; }
        .fade-up-2 { animation: fade-up 0.8s ease forwards; animation-delay: 0.5s; opacity: 0; }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #6b8fa3 0%,
            #c8dde8 40%,
            #ffffff 50%,
            #c8dde8 60%,
            #6b8fa3 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .dot { animation: dot-pulse 1.4s ease-in-out infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

            {/* Loader rings */}
            <div className="relative flex items-center justify-center w-32 h-32 mb-10">
                {/* Pulse background */}
                <div className="pulse-glow absolute w-28 h-28 rounded-full border border-blue-400/20" />

                {/* Outer spinning ring */}
                <div className="ring-outer absolute w-28 h-28">
                    <svg viewBox="0 0 112 112" className="w-full h-full">
                        <circle
                            cx="56"
                            cy="56"
                            r="50"
                            fill="none"
                            stroke="url(#grad-outer)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray="80 235"
                        />
                        <defs>
                            <linearGradient id="grad-outer" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Inner reverse ring */}
                <div className="ring-inner absolute w-20 h-20">
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                        <circle
                            cx="40"
                            cy="40"
                            r="34"
                            fill="none"
                            stroke="url(#grad-inner)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeDasharray="40 173"
                        />
                        <defs>
                            <linearGradient id="grad-inner" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
                                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Center dot */}
                <div className="w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_10px_4px_rgba(147,197,253,0.4)]" />
            </div>

            {/* Brand name */}
            <div className="fade-up-1">
                <h1
                    className="shimmer-text text-3xl sm:text-4xl tracking-[0.25em] uppercase mb-3"
                    style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}
                >
                    TailsWorld
                </h1>
            </div>

            {/* Animated dots */}
            <div className="fade-up-2 flex items-end gap-1.5 h-6 mt-1">
                <span
                    className="dot block w-1 h-4 rounded-full bg-blue-300/70"
                    style={{ transformOrigin: "bottom" }}
                />
                <span
                    className="dot block w-1 h-4 rounded-full bg-blue-300/70"
                    style={{ transformOrigin: "bottom" }}
                />
                <span
                    className="dot block w-1 h-4 rounded-full bg-blue-300/70"
                    style={{ transformOrigin: "bottom" }}
                />
            </div>

            {/* Tagline */}
            <p
                className="fade-up-2 mt-6 text-xs sm:text-sm tracking-[0.3em] uppercase text-blue-200/40"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
            >
                Loading your experience
            </p>

            {/* Bottom decorative line */}
            <div className="absolute bottom-10 flex items-center gap-3 opacity-20">
                <div className="w-12 h-px bg-blue-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                <div className="w-12 h-px bg-blue-300" />
            </div>
        </div>
    );
}