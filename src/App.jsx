import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [hoverHeading, setHoverHeading] = useState(false);

  const features = [
    { title: "Greetings", desc: "C.A.L.M. greets students and teachers warmly." },
    { title: "Attendance", desc: "Helps in smart and quick attendance marking." },
    { title: "LCD Display", desc: "Displays important classroom information." },
    { title: "Expressions", desc: "Interactive facial expressions to engage students." },
    { title: "Teacher Assistance", desc: "Supports teachers in daily activities." },
    { title: "More Features", desc: "Continuously evolving to help classrooms." },
  ];

  const credits = ["HARSH GOYAL", "ARSH SHARMA", "OJAS GUPTA", "PARV KAPOOR"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-cyan-300 p-6 font-mono">
      <header className="text-center mb-10">
        <div
          onMouseEnter={() => setHoverHeading(true)}
          onMouseLeave={() => setHoverHeading(false)}
          className="inline-block cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {!hoverHeading ? (
              <motion.h1
                key="short"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_#00fff7] tracking-widest"
              >
                C.A.L.M.
              </motion.h1>
            ) : (
              <motion.div
                key="full"
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ staggerChildren: 0.1, duration: 0.5 }}
              >
                {"Classroom Assistant and Learning Model".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="text-2xl font-bold text-pink-400 drop-shadow-[0_0_10px_#ff00d4]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="text-lg text-gray-300 mt-2 italic transition-colors duration-500">
          {hoverHeading ? "C.A.L.M." : "Classroom Assistant and Learning Model"}
        </p>
      </header>

      <section className="space-y-4 mb-12 max-w-3xl mx-auto">
        {features.map((feature, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 border border-cyan-400/40 rounded-xl shadow-lg hover:shadow-cyan-400/40 transition overflow-hidden"
          >
            <summary className="cursor-pointer py-4 px-6 text-xl font-bold text-cyan-300 select-none">
              {feature.title}
            </summary>
            <div className="px-6 pb-4 text-gray-400 text-sm">
              {feature.desc}
            </div>
          </motion.details>
        ))}
      </section>

      <section className="text-center mb-12">
        <p className="text-cyan-200 font-semibold tracking-wide flex justify-center flex-wrap gap-4">
          {credits.map((name, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.4, color: "#00fff7", textShadow: "0px 0px 8px #00fff7" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              {name}
            </motion.span>
          ))}
        </p>
      </section>

      <section className="bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center border border-cyan-400/40">
        <h2 className="text-3xl font-bold text-cyan-300 mb-6 drop-shadow-[0_0_6px_#00fff7]">
          MORE PROJECTS
        </h2>
        <Card className="rounded-xl shadow-md bg-gradient-to-r from-gray-900 to-indigo-900 border border-cyan-400/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-cyan-200 mb-2">
              Water Purifier
            </h3>
            <Button
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-4 py-2 rounded-xl shadow-md"
              onClick={() => setShowProjectInfo(!showProjectInfo)}
            >
              {showProjectInfo ? "Hide Info" : "More Info"}
            </Button>
            {showProjectInfo && (
              <p className="mt-4 text-gray-400 text-sm">
                A project designed to purify and provide clean drinking water using
                innovative techniques. <br />By Gauransh Mittal
              </p>
            )}
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-12 text-gray-500 text-xs tracking-wide">
        © 2025 Classroom Assistant and Learning Model
      </footer>
    </div>
  );
}