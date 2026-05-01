import Marquee from "react-fast-marquee";
import { marqueeNews } from "../../../public/data";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/cKhTj7xY/tails.webp)",
      }}
    >
      <div className="hero-overlay bg-black/50"></div>

      <div className="hero-content text-neutral-content text-center w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">

          {/* Marquee — full width at every breakpoint */}
          <div className="w-full overflow-hidden">
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover
              className="text-xs sm:text-sm md:text-base"
            >
              {marqueeNews.map((news) => (
                <div
                  key={news.id}
                  className="flex items-center mx-3 sm:mx-5 whitespace-nowrap"
                >
                  <span className="icon">{news.icon}</span>
                  <strong className="px-1 sm:px-2">{news.title}:</strong>
                  <span>{news.message}</span>
                </div>
              ))}
            </Marquee>
          </div>

          {/* CTA Button */}
          <Link href="/alltiles">
            <button className="btn btn-primary px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg">
              Browse Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}