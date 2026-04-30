import Link from "next/link";

export default function NotFound() {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4"
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Raleway:wght@300;400&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes flicker {
          0%, 95%, 100% { opacity: 1; }
          96%            { opacity: 0.4; }
          97%            { opacity: 1; }
          98%            { opacity: 0.3; }
          99%            { opacity: 0.9; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          0%   { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 0 0 rgba(96,165,250,0); }
          50%       { box-shadow: 0 0 0 4px rgba(96,165,250,0.15); }
        }

        .float-anim { animation: float 4s ease-in-out infinite; }
        .flicker    { animation: flicker 8s step-end infinite; }

        .anim-1 { animation: fade-in-up 0.7s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .anim-2 { animation: fade-in-up 0.7s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .anim-3 { animation: fade-in-up 0.7s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .anim-4 { animation: fade-in-up 0.7s ease forwards; animation-delay: 0.7s; opacity: 0; }

        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.25), transparent);
          animation: scan 5s linear infinite;
          pointer-events: none;
        }

        .btn-home {
          animation: pulse-border 3s ease-in-out infinite;
          transition: background 0.25s, color 0.25s, letter-spacing 0.25s;
        }
        .btn-home:hover {
          background: rgba(96,165,250,0.12) !important;
          letter-spacing: 0.35em;
        }
      `}</style>

            {/* Ambient radial glow — deep blue centered */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 55% at 50% 45%, #0f2744 0%, transparent 70%)",
                }}
            />

            {/* Scan line effect */}
            <div className="scan-line" />

            {/* Decorative corner marks */}
            {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map(
                (pos, i) => (
                    <div
                        key={i}
                        className={`absolute ${pos} w-6 h-6 opacity-20`}
                        style={{
                            borderTop: i < 2 ? "1px solid #60a5fa" : "none",
                            borderBottom: i >= 2 ? "1px solid #60a5fa" : "none",
                            borderLeft: i % 2 === 0 ? "1px solid #60a5fa" : "none",
                            borderRight: i % 2 === 1 ? "1px solid #60a5fa" : "none",
                        }}
                    />
                )
            )}

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

                {/* Floating 404 */}
                <div className="float-anim mb-2">
                    <h1
                        className="flicker select-none"
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontWeight: 900,
                            fontSize: "clamp(6rem, 22vw, 10rem)",
                            lineHeight: 1,
                            letterSpacing: "0.08em",
                            background:
                                "linear-gradient(180deg, #e0eeff 0%, #60a5fa 40%, #1e40af 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            filter: "drop-shadow(0 0 40px rgba(96,165,250,0.25))",
                        }}
                    >
                        404
                    </h1>
                </div>

                {/* Divider */}
                <div className="anim-1 flex items-center gap-3 mb-6 w-full max-w-xs">
                    <div className="flex-1 h-px bg-blue-400/20" />
                    <div className="w-1 h-1 rounded-full bg-blue-400/40" />
                    <div className="flex-1 h-px bg-blue-400/20" />
                </div>

                {/* Headline */}
                <h2
                    className="anim-2 mb-3 text-white/90 text-lg sm:text-2xl tracking-widest uppercase"
                    style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}
                >
                    Lost in the wild
                </h2>

                {/* Description */}
                <p
                    className="anim-3 text-blue-200/50 text-sm sm:text-base leading-relaxed mb-10 px-2"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
                >
                    The page you&apos;re looking for has wandered off. <br className="hidden sm:block" />
                    Let&apos;s get you back on the trail.
                </p>

                {/* CTA buttons */}
                <div className="anim-4 flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-sm">
                    <Link
                        href="/"
                        className="btn-home flex-1 flex items-center justify-center px-6 py-3 rounded-none border border-blue-400/30 text-blue-200 text-xs tracking-[0.3em] uppercase"
                        style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/browse"
                        className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-500/90 text-white text-xs tracking-[0.3em] uppercase transition-all duration-200 hover:bg-blue-400"
                        style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
                    >
                        Browse Now
                    </Link>
                </div>

                {/* Status line */}
                <p
                    className="anim-4 mt-10 text-xs tracking-[0.2em] text-blue-200/20 uppercase"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                    Error 404 &mdash; Page not found
                </p>
            </div>

            {/* Bottom decorative strip */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        </div>
    );
}