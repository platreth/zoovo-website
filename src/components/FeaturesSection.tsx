import { motion } from "framer-motion";
import { Users, Stethoscope, ShoppingCart, Check, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community",
    subtitle: "Connect Locally",
    description: "Find pet parents in your neighbourhood and build lasting connections.",
    items: [
      "Neighbourhood pet feed",
      "Dog & cat playdates",
      "Walk routes & photos",
      "Pet profiles with history",
    ],
  },
  {
    icon: Stethoscope,
    title: "Services",
    subtitle: "Book with Trust",
    description: "Verified, background-checked providers you can rely on.",
    items: [
      "Verified walkers & sitters",
      "Grooming appointments",
      "Vet scheduling",
      "Background-checked providers",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Marketplace",
    subtitle: "Buy & Sell Locally",
    description: "Everything your pet needs, from trusted local sellers.",
    items: [
      "Food, toys & accessories",
      "Trusted second-hand listings",
      "Local business storefronts",
      "Verified transactions",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 bg-card relative overflow-hidden">
      {/* Decorative blurred circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4 border border-primary/20">
            Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-5">
            Everything Your Pet Needs
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Three pillars, one app. No more juggling 4-6 separate apps for your pet's life.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="rounded-2xl border border-border bg-background p-8 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_hsl(51_100%_50%/0.15)]"
            >
              <div className="gradient-teal w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{feature.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.items.map((fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {fi}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
