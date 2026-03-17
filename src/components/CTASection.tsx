import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import dogSilhouette from "@/assets/dog-silhouette.png";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <motion.div
          className="rounded-3xl gradient-teal p-12 md:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary-foreground/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-primary-foreground/5 translate-y-1/3 -translate-x-1/3" />

          {/* Dog silhouette */}
          <div className="absolute bottom-0 left-8 opacity-10 pointer-events-none hidden md:block">
            <img src={dogSilhouette} alt="" className="w-48 translate-y-4" />
          </div>

          <div className="relative z-10 max-w-lg mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Be First in Your Neighbourhood
            </h2>
            <p className="text-primary-foreground/70 mb-10 text-lg leading-relaxed">
              Join the waitlist and help shape the future of pet care in the Netherlands.
            </p>

            {status === "success" ? (
              <div className="flex items-center justify-center gap-2 text-primary-foreground py-4">
                <CheckCircle size={20} />
                <span className="font-semibold">You're on the list! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 text-sm"
                />
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  disabled={status === "loading"}
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 rounded-xl px-6"
                >
                  {status === "loading" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Mail size={16} />
                  )}
                  {status === "loading" ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            )}

            {status === "error" && (
              <p className="text-xs text-red-300 mt-4">
                Something went wrong. Please try again.
              </p>
            )}
            <p className="text-xs text-primary-foreground/40 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
