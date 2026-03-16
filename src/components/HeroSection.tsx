import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import appScreen from "@/assets/app-screen.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-6 border border-primary/25">
                🐾 Launching in Utrecht 🇳🇱
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              One App.{" "}
              <span className="text-gradient-teal">Every Dimension</span>{" "}
              of Pet Life.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Community, services, and marketplace — unified for The Netherlands pet parent community.
              Connect with your neighbourhood, book trusted care, and shop locally.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Join the Waitlist
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                Learn More
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {[
                { value: "4.7M", label: "Dogs & cats in NL" },
                { value: "€1.8B+", label: "Pet market" },
                { value: "45%", label: "Households with pets" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary/30 pl-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — App mockup */}
          <motion.div
            className="hidden lg:flex justify-center items-center relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {/* Glow behind phone */}
            <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-[80px] pointer-events-none" />
            {/* Phone frame */}
            <div className="relative z-10 animate-float">
              <div className="relative w-[280px] rounded-[2.5rem] overflow-hidden bg-background border-[8px] border-foreground/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-b-2xl z-20" />
                <img
                  src={appScreen}
                  alt="Zoovo app screen"
                  className="w-full block"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
