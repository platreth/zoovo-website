import { motion } from "framer-motion";
import dogSilhouette from "@/assets/dog-silhouette.png";

const steps = [
  {
    num: "01",
    title: "Create Your Pet Profile",
    desc: "Add your pets, set your neighbourhood, and personalise your feed.",
  },
  {
    num: "02",
    title: "Connect & Discover",
    desc: "Find nearby pet parents, local services, and trusted shops in one place.",
  },
  {
    num: "03",
    title: "Book & Buy with Confidence",
    desc: "Verified providers, escrow payments, and real community reviews.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-28 bg-primary relative overflow-hidden">
      {/* Dog silhouette decoration */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <img src={dogSilhouette} alt="" className="w-72 md:w-96 translate-y-8 translate-x-8" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-4 border border-primary-foreground/20">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
            Simple as a Belly Rub
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
                <span className="text-2xl font-display font-bold text-primary-foreground">{step.num}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-primary-foreground">{step.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs mx-auto">{step.desc}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+48px)] w-[calc(100%-96px)] h-px bg-primary-foreground/15" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
