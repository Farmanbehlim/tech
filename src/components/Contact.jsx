// import { useState } from "react";

// const Contact = ({ isLightMode }) => {
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     try {
//       const response = await fetch("https://formspree.io/xwkonejj", {
//         method: "POST",
//         body: formData,
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         event.target.reset();
//       } else {
//         setStatus("Error sending message. Please try again.");
//       }
//     } catch (error) {
//       setStatus("Error sending message. Please try again.");
//     }
//   };

//   return (
//     <section id="contact" className={`${isLightMode ? "bg-[#f6f7fb] text-[#0f172a]" : "bg-black text-white"} py-20 px-6 border-t ${isLightMode ? "border-black/5" : "border-white/10"} transition-colors duration-500`}>
//       {/* <div className={`max-w-4xl mx-auto rounded-[40px] p-12 text-center shadow-2xl ${isLightMode ? "bg-white" : "bg-gradient-to-r from-[#332540] via-[rgb(100,58,95)] to-[#332540]"}`}>
//         <p className={`uppercase text-xs tracking-[0.4em] mb-3 ${isLightMode ? "text-[#b88c00]" : "text-[#FBD037]"}`}>Contact</p>
//         <h2 className="text-4xl font-light mb-4">Let’s design your next growth leap</h2>
//         <p className={`${isLightMode ? "text-gray-600" : "text-gray-200"} mb-10`}>
//           Share a few details about your initiative and our strategists will respond within 24 hours.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4 text-left">
//           {status && <p className="text-sm text-green-500">{status}</p>}
//           <input
//             type="email"
//             name="_replyto"
//             placeholder="Your email"
//             required
//             className={`w-full p-3 border outline-none rounded ${isLightMode ? "bg-white border-black/10 text-black focus:border-black" : "bg-black text-white border-transparent focus:border-white"}`}
//           />
//           <textarea
//             name="message"
//             placeholder="Your message"
//             required
//             rows="5"
//             className={`w-full p-3 border outline-none rounded resize-none ${isLightMode ? "bg-white border-black/10 text-black focus:border-black" : "bg-black text-white border-transparent focus:border-white"}`}
//           />
//           <button
//             type="submit"
//             className={`w-full py-3 rounded shadow-lg transition-transform duration-300 hover:translate-y-1 ${isLightMode ? "bg-black text-white" : "bg-black text-white"}`}
//           >
//             Send
//           </button>
//         </form>
//       </div> */}














//       <div className={`max-w-4xl mx-auto rounded-[40px] p-12 text-center shadow-2xl ${isLightMode ? "bg-white border border-black/5" : "bg-white/5 border border-white/10"}`}>
//   <p className={`uppercase text-xs tracking-[0.4em] mb-3 ${isLightMode ? "text-[#b88c00]" : "text-[#FBD037]"}`}>Contact</p>
//   <h2 className="text-4xl font-light mb-4">Let's design your next growth leap</h2>
//   <p className={`${isLightMode ? "text-gray-600" : "text-gray-200"} mb-10`}>
//     Share a few details about your initiative and our strategists will respond within 24 hours.
//   </p>
//   <form onSubmit={handleSubmit} className="space-y-4 text-left">
//     {status && <p className="text-sm text-green-500">{status}</p>}
//     <input
//       type="email"
//       name="_replyto"
//       placeholder="Your email"
//       required
//       className={`w-full p-3 border outline-none rounded ${isLightMode ? "bg-white border-black/10 text-black focus:border-black" : "bg-white/5 text-white border-white/10 focus:border-white/30"}`}
//     />
//     <textarea
//       name="message"
//       placeholder="Your message"
//       required
//       rows="5"
//       className={`w-full p-3 border outline-none rounded resize-none ${isLightMode ? "bg-white border-black/10 text-black focus:border-black" : "bg-white/5 text-white border-white/10 focus:border-white/30"}`}
//     />
//     <button
//       type="submit"
//       className={`w-full py-3 rounded shadow-lg transition-transform duration-300 hover:translate-y-1 ${isLightMode ? "bg-black text-white" : "bg-white text-black hover:bg-gray-200"}`}
//     >
//       Send
//     </button>
//   </form>
// </div>
//     </section>
//   );
// };

// export default Contact;



















const Contact = ({ isLightMode }) => {
  console.log("isLightMode in Contact:", isLightMode);
  const sectionBg = isLightMode
    ? "bg-gradient-to-r from-[#fdf9eb] via-[#fefdf8] to-[#f7f4ff] text-[#1f2933]"
    : "bg-gradient-to-r from-[#111] via-[#151515] to-[#0c0c0c] text-white";
  const cardBg = isLightMode ? "bg-white" : "bg-white/5";
  const inputBg = isLightMode ? "bg-white border-gray-200" : "bg-white/5 border-white/20";
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";

  return (
    <section id="contact" className={`${sectionBg} py-20 px-6 transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className={`uppercase text-xs tracking-[0.4em] mb-3 ${labelColor}`}>Contact</p>
          <h2 className="text-4xl font-light">Let's design your next growth leap</h2>
          <p className={`mt-4 ${isLightMode ? "text-gray-600" : "text-gray-200"}`}>
            Share a few details about your initiative and our strategists will respond within 24 hours.
          </p>
        </div>
        
        <div className={`${cardBg} rounded-2xl md:grid-cols-2 grid-cols-1 grid gap-6 w-full lg:p-10 pt-8 p-4 z-10 relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]`}>
          <div className="bg-gradient-to-r from-[60%] from-[#FBD037] to-[#FBD037] w-full absolute top-0 h-2 z-0 rounded-t-3xl"></div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Full Name</label>
            <input 
              className={`px-4 py-3 border rounded-md focus:outline-none ${inputBg} ${isLightMode ? "text-black" : "text-white"}`} 
              placeholder="Enter Name" 
              type="text" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Enter Email</label>
            <input 
              className={`px-4 py-3 border rounded-md focus:outline-none ${inputBg} ${isLightMode ? "text-black" : "text-white"}`} 
              placeholder="example@gmail.com" 
              type="email" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Phone Number</label>
            <input 
              className={`px-4 py-3 border rounded-md focus:outline-none ${inputBg} ${isLightMode ? "text-black" : "text-white"}`} 
              maxLength="12" 
              placeholder="+ 90 20260 000" 
              type="text" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Company/Organization</label>
            <input 
              className={`px-4 py-3 border rounded-md focus:outline-none ${inputBg} ${isLightMode ? "text-black" : "text-white"}`} 
              placeholder="Company name" 
              type="text" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Preferred Consultation Time</label>
            <input 
              className={`px-4 py-3 border rounded-md focus:outline-none ${inputBg} ${isLightMode ? "text-black" : "text-white"}`} 
              type="datetime-local" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Subjects</label>
            <input 
              className={`px-4 py-3 border rounded-md focus:outline-none ${inputBg} ${isLightMode ? "text-black" : "text-white"}`} 
              placeholder="Enter subject" 
              type="text" 
            />
          </div>
          
          <div className="flex flex-col gap-2 lg:col-span-2">
            <label className="font-medium">Project Details</label>
            <textarea 
              rows="6" 
              className={`px-4 py-3 border rounded-md focus:outline-none w-full ${inputBg} ${isLightMode ? "text-black" : "text-white"}`} 
              placeholder="Write here..."
            ></textarea>
          </div>
          
          <div className="flex flex-col gap-2">
            <button className="text-[#FBD037] hover:bg-[#FBD037] hover:text-[#212121] border border-[#FBD037] px-8 py-2.5 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer w-fit transition-colors duration-300">
              Submit
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

