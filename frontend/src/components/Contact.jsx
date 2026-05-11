import { useState } from "react";


import { motion } from "framer-motion";
import API from "../api/api";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaRobot,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";

import { HiArrowUpRight } from "react-icons/hi2";

import { profile } from "../data/portfolio";

export default function Contact() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      setSuccess("");

      setError("");

      const response =
       await API.post(
  "/contact",
  formData
);

      setSuccess(
        response.data.message ||
          "Message sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);

      setError(
        err?.response?.data?.message ||
          "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ff5500_1px,transparent_1px)] bg-[length:24px_24px]" />

      <div className="grid grid-cols-12 gap-6 md:gap-8">
        {/* LEFT */}
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-28">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff5500] mb-4">
              [ 05 ] Contact
            </div>

            <h2 className="font-black text-4xl md:text-5xl tracking-tighter leading-none">
              Let's
              <br />

              <span className="text-neutral-500">
                build.
              </span>
            </h2>

            <div className="mt-8 border border-white/10 bg-[#0a0a0a] p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-300">
                  Available
                </span>
              </div>

              <p className="font-mono text-sm text-neutral-400 leading-relaxed">
                Open for internships,
                freelance work, AI product
                development, and startup
                collaborations.
              </p>

              <div className="mt-4 flex items-center gap-2 text-neutral-500 font-mono text-xs">
                <HiOutlineClock size={14} />
                Usually replies within few
                hours
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-12 md:col-span-9">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="border border-white/10 bg-[#0a0a0a] p-8 md:p-12 backdrop-blur-sm"
          >
            {/* HEADING */}
            <p className="font-black text-3xl md:text-5xl tracking-tighter leading-[1.05] mb-8">
              Looking for an{" "}

              <span className="text-[#ff5500]">
                AI-native engineer
              </span>{" "}

              who actually ships?
            </p>

            <p className="font-mono text-sm md:text-base text-neutral-400 leading-relaxed mb-10 max-w-3xl">
              I'm open to Software
              Engineering, Full-Stack,
              Frontend, Backend, and
              AI-focused roles where I can
              build scalable systems,
              modern user experiences, and
              production-grade products.
            </p>

            {/* SUCCESS */}
            {success && (
              <div className="mb-6 border border-green-500/20 bg-green-500/10 text-green-400 px-4 py-4 font-mono text-sm">
                {success}
              </div>
            )}

            {/* ERROR */}
            {error && (
              <div className="mb-6 border border-red-500/20 bg-red-500/10 text-red-400 px-4 py-4 font-mono text-sm">
                {error}
              </div>
            )}

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 mb-12"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/10 px-5 py-4 outline-none focus:border-[#ff5500] focus:bg-[#111] transition-all font-mono text-sm"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/10 px-5 py-4 outline-none focus:border-[#ff5500] focus:bg-[#111] transition-all font-mono text-sm"
                />
              </div>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell me about your project, role, or idea..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 px-5 py-4 outline-none focus:border-[#ff5500] focus:bg-[#111] transition-all font-mono text-sm resize-none"
              />

              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-4">
                {/* SEND */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] px-6 py-4 bg-[#ff5500] text-black hover:bg-[#ff7733] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <HiOutlineMail size={18} />

                  {loading
                    ? "Sending..."
                    : "Send Message"}

                  <HiArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/919559261513?text=Hi%20Amit%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] px-6 py-4 border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300"
                >
                  <FaWhatsapp size={18} />

                  WhatsApp

                  <HiArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

              </div>
            </form>

            {/* CONTACT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-8 border-t border-white/10">
              <ContactItem
                icon={
                  <HiOutlineMail size={18} />
                }
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />

              <ContactItem
                icon={
                  <HiOutlinePhone size={18} />
                }
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
              />

              <ContactItem
                icon={<FaGithub size={18} />}
                label="GitHub"
                value="@Amit-code01"
                href={profile.github}
                external
              />

              <ContactItem
                icon={
                  <FaLinkedin size={18} />
                }
                label="LinkedIn"
                value="@amiityadav"
                href={profile.linkedin}
                external
              />

              <ContactItem
                icon={
                  <HiOutlineLocationMarker size={18} />
                }
                label="Location"
                value={profile.location}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}) {
  const content = (
    <div className="flex items-center gap-4 py-5 group">
      <span className="text-[#ff5500]">
        {icon}
      </span>

      <div className="flex-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
          {label}
        </div>

        <div className="font-mono text-sm text-neutral-200 group-hover:text-[#ff5500] transition-colors">
          {value}
        </div>
      </div>

      {href && (
        <HiArrowUpRight
          size={14}
          className="text-neutral-600 group-hover:text-[#ff5500] transition-colors"
        />
      )}
    </div>
  );

  if (!href) {
    return (
      <div className="border-b border-white/5 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:pr-6 md:[&:nth-child(even)]:pl-6">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      className="border-b border-white/5 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:pr-6 md:[&:nth-child(even)]:pl-6"
    >
      {content}
    </a>
  );
}