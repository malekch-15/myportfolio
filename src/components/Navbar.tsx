import logo from "../assets/MalekChenennaouiLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleLogoClick = () => setIsModalOpen(true);
 const closeModal = () => setIsModalOpen(false);

 return (
     <>
      <nav className="mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center">
        <motion.div
            onClick={handleLogoClick}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer mx-2 w-20"
        >
         <img src={logo} alt="logo" className="w-full h-full" />
        </motion.div>
       </div>
       <div className="m-8 flex items-center text-2xl justify-between gap-4">
        <a
            href="https://www.linkedin.com/in/malek-chenennaoui-073269161/"
            target="_blank"
            rel="noopener noreferrer"
        >
         <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/tha.karni/">
         <FaInstagram />
        </a>
        <a href="mailto:malekchenennaoui@gmail.com">
         <FaEnvelope />
        </a>
        <a href="https://github.com/malekch-15">
         <FaGithub />
        </a>
       </div>
      </nav>

      {/* Modal */}
      <AnimatePresence>
       {isModalOpen && (
           <motion.div
               className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={closeModal}
           >
            <motion.div
                className="bg-white rounded-2xl p-6 max-w-md text-center shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
             <div className="bg-black p-4 rounded-xl w-fit mx-auto mb-4">
              <img
                  src={logo}
                  alt="logo large"
                  className="w-40 h-40 object-contain"
              />
             </div>
             <p className="text-lg font-semibold text-gray-800">
              Rooted in faith. Rising with purpose.
             </p>
             <button
                 onClick={closeModal}
                 className="mt-4 text-sm text-blue-600 hover:underline"
             >
              Close
             </button>
            </motion.div>
           </motion.div>
       )}
      </AnimatePresence>
     </>
 );
}