import { useState } from "react";

const Contact = ({ isLightMode }) => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/xwkonejj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        event.target.reset();
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className={`${isLightMode ? "bg-[#f6f7fb] text-[#0f172a]" : "bg-black text-white"} py-20 px-6 border-t ${isLightMode ? "border-black/5" : "border-white/10"} transition-colors duration-500`}>
      <div className={`max-w-4xl mx-auto rounded-[40px] p-12 text-center shadow-2xl ${isLightMode ? "bg-white" : "bg-gradient-to-r from-[#332540] via-[rgb(100,58,95)] to-[#332540]"}`}>
        <p className={`uppercase text-xs tracking-[0.4em] mb-3 ${isLightMode ? "text-[#b88c00]" : "text-[#FBD037]"}`}>Contact</p>
        <h2 className="text-4xl font-light mb-4">Let’s design your next growth leap</h2>
        <p className={`${isLightMode ? "text-gray-600" : "text-gray-200"} mb-10`}>
          Share a few details about your initiative and our strategists will respond within 24 hours.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {status && <p className="text-sm text-green-500">{status}</p>}
          <input
            type="email"
            name="_replyto"
            placeholder="Your email"
            required
            className={`w-full p-3 border outline-none rounded ${isLightMode ? "bg-white border-black/10 text-black focus:border-black" : "bg-black text-white border-transparent focus:border-white"}`}
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows="5"
            className={`w-full p-3 border outline-none rounded resize-none ${isLightMode ? "bg-white border-black/10 text-black focus:border-black" : "bg-black text-white border-transparent focus:border-white"}`}
          />
          <button
            type="submit"
            className={`w-full py-3 rounded shadow-lg transition-transform duration-300 hover:translate-y-1 ${isLightMode ? "bg-black text-white" : "bg-black text-white"}`}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

