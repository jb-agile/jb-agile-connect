import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roles = ["CEO / Founder", "COO / Head of Operations", "CTO / Head of Engineering", "Other"];

// Formspree form endpoint — create a form at https://formspree.io pointed at
// info@jb-agiledev.com and replace this ID with the one it gives you.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnrqqq";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-surface-light">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-dark mb-6">
                Let's talk about your problem
              </h1>
              <p className="font-body text-lg leading-relaxed mb-10" style={{ color: "#52525B" }}>
                Every engagement starts with a conversation. Tell us a little about your
                organization and what you're working through — we'll get back to you within one
                business day.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:jawad@jb-agiledev.com" className="font-body text-sm" style={{ color: "#52525B" }}>
                    jawad@jb-agiledev.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-accent" />
                  <a href="#" className="font-body text-sm" style={{ color: "#52525B" }}>
                    JB Agile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-body text-sm" style={{ color: "#52525B" }}>
                    Available globally · Remote-first
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {status === "success" ? (
                <div className="bg-card shadow-md rounded-2xl p-10 text-center">
                  <h2 className="font-heading text-2xl font-extrabold text-text-dark mb-3">
                    Thanks — message sent.
                  </h2>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#52525B" }}>
                    We've got your note and will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card shadow-md rounded-2xl p-10 space-y-5"
                >
                  <div>
                    <label className="font-body text-sm font-medium text-text-dark block mb-1.5">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border-light rounded-lg px-4 py-3 font-body text-sm text-text-dark bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-text-dark block mb-1.5">
                      Work Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-border-light rounded-lg px-4 py-3 font-body text-sm text-text-dark bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-text-dark block mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full border border-border-light rounded-lg px-4 py-3 font-body text-sm text-text-dark bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-text-dark block mb-1.5">
                      Your Role
                    </label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full border border-border-light rounded-lg px-4 py-3 font-body text-sm text-text-dark bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select your role</option>
                      {roles.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-text-dark block mb-1.5">
                      What problem are you trying to solve?
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about the challenge you're facing and what a good solution would look like for your organization."
                      className="w-full border border-border-light rounded-lg px-4 py-3 font-body text-sm text-text-dark bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-accent hover:bg-accent-hover text-primary-foreground font-body font-semibold py-4 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                  </button>
                  {status === "error" && (
                    <p className="font-body text-xs text-center text-destructive">
                      Something went wrong sending your message — please try again or email us directly.
                    </p>
                  )}
                  <p className="font-body text-xs text-center text-muted-foreground">
                    We don't spam. We don't share your data. We just get back to you.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
