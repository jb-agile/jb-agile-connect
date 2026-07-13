import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-surface-dark py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="border-t border-white/10 pt-16 pb-16 border-b border-white/10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 items-start">
            
            <p className="font-heading text-3xl lg:text-4xl italic text-accent font-bold leading-snug">
              "Not off-the-shelf. Built for you." 
            </p>
            <p className="font-body text-lg leading-relaxed" style={{ color: "#A1A1AA" }}>
              JB Agile builds custom AI-powered solutions to real business problems.
              We embed with customers to understand exactly how their business works, then design
              and deliver technology tailored precisely to their context — their workflows, their
              data, their people, and their goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutStrip;
