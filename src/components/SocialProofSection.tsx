import { motion } from "framer-motion";
import { PawPrint, MapPin, Star, Heart } from "lucide-react";

const proofs = [
  { icon: PawPrint, value: "4.7M", label: "Pets in the Netherlands" },
  { icon: MapPin, value: "Utrecht", label: "Launching first" },
  { icon: Star, value: "83%", label: "Use 3+ pet apps" },
  { icon: Heart, value: "30%", label: "Average savings with Zoovo" },
];

const SocialProofSection = () => {
  return (
    <section id="community" className="py-16 border-y border-border bg-secondary/50">
      <div className="container">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {proofs.map((proof, i) => (
            <motion.div
              key={proof.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <proof.icon size={24} className="mx-auto mb-3 text-primary" />
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                {proof.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{proof.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
