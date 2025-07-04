import { NavLink } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import NavRoutes from "./NavRoutes";
import { IoMdMenu } from "react-icons/io";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ children }: { children?: ReactNode }) {
  const user = {
    id: "12345", // Example user object, replace with actual user state
    name: "John Doe", // Example user name, replace with actual user state
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            backdropFilter: "blur(1rem)",
          }}
          className={`w-full sticky top-0 z-10 ${
            isScrolled ? "shadow-sm bg-base-100/80" : "bg-base-100/95"
          } transition-all duration-300`}
        >
          <div className="navbar w-full max-w-6xl mx-auto">
            <div className="flex-none lg:hidden">
              <motion.label
                whileTap={{ scale: 0.9 }}
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <IoMdMenu className="w-7 h-7" />
              </motion.label>
            </div>
            <div className="flex-1 px-2">
              <NavLink to="/" className="text-lg font-bold">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  Bipin Shaha
                </motion.span>
              </NavLink>
            </div>
            <div className="hidden flex-6 justify-center w-full lg:flex">
              <ul className="menu menu-horizontal items-center gap-5 text-lg">
                <NavRoutes />
              </ul>
            </div>
            <ThemeToggle />
          </div>
        </motion.div>
        {children}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <motion.ul
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="menu bg-base-200 min-h-full w-80 p-4"
        >
          <NavRoutes />
        </motion.ul>
      </div>
    </div>
  );
}
