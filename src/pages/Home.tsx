import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import About from "../components/About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Trainers from "../components/Trainers";
import Contact from "../components/Contact";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <Pricing />
      <Trainers />
      <Contact />
    </motion.div>
  );
}
