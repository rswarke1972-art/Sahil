import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, Loader2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = event.target;
    const params = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    emailjs
      .send("service_a7ayyfv", "template_4z7fsjw", params, "WOOkqRSQ0vMflbWWI")
      .then(() => {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
        });
        form.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again or reach out directly.",
        });
        setLoading(false);
      });
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have a project idea, collaboration proposal, feedback on a PWA, or a discussion about literature and psychology? Send me a message!
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {status.message && (
            <div
              className={`p-4 rounded-2xl mb-6 flex items-start gap-3 text-sm animate-in fade-in duration-200 ${
                status.type === "success"
                  ? "bg-green-950/40 border border-green-500/40 text-green-200"
                  : "bg-red-950/40 border border-red-500/40 text-red-200"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300 font-mono-code uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Mercer"
                  required
                  className="w-full p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300 font-mono-code uppercase">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. alex@example.com"
                  required
                  className="w-full p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300 font-mono-code uppercase">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message, project query, or thoughts here..."
                rows="6"
                required
                className="w-full p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition text-sm leading-relaxed"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
