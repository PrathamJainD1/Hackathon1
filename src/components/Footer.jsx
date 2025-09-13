import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="p-6 text-center bg-black border-t border-green-400 text-green-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg">© 2025 Sikkim Tourism Hackathon Project</p>
      <p className="text-sm opacity-70 mt-2">
        Built with ❤️ using React + Framer Motion
      </p>
    </motion.footer>
  );
}
