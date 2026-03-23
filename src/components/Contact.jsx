import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bllglwdb", userInfo);
      toast.success("Message sent successfully 🚀");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message ❌");
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700/60 text-gray-200 placeholder-gray-500
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200`;

  return (
    <section
      name="Contact"
      className="relative py-24 px-4 md:px-20 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-purple-400 font-medium tracking-widest text-sm uppercase">Let's talk</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Have a question or want to work together? Feel free to reach out. I'll get back to you soon!
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-10 border border-purple-900/20 shadow-2xl shadow-purple-900/10">
          <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <FiSend className="text-purple-400" />
            Send a Message
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                <FiUser className="text-purple-400" /> Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={inputClass}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                <FiMail className="text-purple-400" /> Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={inputClass}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                <FiMessageSquare className="text-purple-400" /> Message
              </label>
              <textarea
                rows="5"
                {...register("message", { required: "Message is required" })}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project or just say hi..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
            >
              <FiSend />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
