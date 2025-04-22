// import { useState } from "react";

// const ContactModal = ({ isOpen, closeModal }) => {
//   const [form, setForm] = useState({ name: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const sendViaWhatsApp = () => {
//     const url = `https://wa.me/234xxxxxxxxxx?text=${encodeURIComponent(
//       `Hi, I'm ${form.name}. ${form.message}`
//     )}`;
//     window.open(url, "_blank");
//   };

//   const sendViaEmail = () => {
//     const subject = `Message from ${form.name}`;
//     const body = form.message;
//     window.location.href = `mailto:your@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
//       <div className="bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white p-8 rounded-lg max-w-lg w-full">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">Contact Me</h2>
//           <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
//             X
//           </button>
//         </div>
//         <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Send me a message via WhatsApp or Email.</p>

//         <div className="grid gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             className="bg-white dark:bg-[#2c2e3e] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/10"
//           />

//           <textarea
//             name="message"
//             rows="4"
//             placeholder="Type your message..."
//             value={form.message}
//             onChange={handleChange}
//             className="bg-white dark:bg-[#2c2e3e] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/10"
//           />

//           <div className="flex flex-wrap gap-4 mt-4">
//             <button
//               onClick={sendViaWhatsApp}
//               className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
//             >
//               Send via WhatsApp
//             </button>

//             <button
//               onClick={sendViaEmail}
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
//             >
//               Send via Email
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactModal;


import { useState } from "react";
import "./ContactModal.css"; // Make sure to import the CSS

const ContactModal = ({ isOpen, closeModal }) => {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendViaWhatsApp = () => {
    const url = `https://wa.me/2347062059128?text=${encodeURIComponent(
      `Hi, I'm ${form.name}. ${form.message}`
    )}`;
    window.open(url, "_blank");
  };

  const sendViaEmail = () => {
    const subject = `Message from ${form.name}`;
    const body = form.message;
    window.location.href = `mailto:realitynuel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="rainbow-border relative p-[2px] rounded-lg max-w-lg w-[90%]">
        <div className="bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white p-8 rounded-lg relative z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-3xl text-red-500">
              X
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Send me a message via WhatsApp or Email.</p>

          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-white dark:bg-[#2c2e3e] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/10"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Type your message..."
              value={form.message}
              onChange={handleChange}
              className="bg-white dark:bg-[#2c2e3e] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/10"
            />

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={sendViaWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
              >
                Send via WhatsApp
              </button>

              <button
                onClick={sendViaEmail}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
              >
                Send via Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
