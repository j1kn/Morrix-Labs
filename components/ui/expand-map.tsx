"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

interface LocationMapProps {
  location?: string;
  coordinates?: string;
}

export function LocationMap({
  location = "Coventry, UK",
  coordinates = "52.4068° N, 1.5197° W",
}: LocationMapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative w-full max-w-2xl"
    >
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-muted to-background p-[2px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B99FE]/20 to-[#2BC8B7]/20" />
        
        <div className="relative bg-background rounded-[14px] p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-[#9B99FE]/20 to-[#2BC8B7]/20">
              <MapPin className="w-6 h-6 text-[#9B99FE]" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">{location}</h3>
              <p className="text-sm text-muted-foreground">{coordinates}</p>
            </div>
          </div>

          <div className="relative w-full h-48 rounded-xl bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#9B99FE]/30 to-[#2BC8B7]/30 blur-2xl" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-[#9B99FE]/20 rounded-full blur-xl" />
                <div className="relative p-4 rounded-full bg-gradient-to-r from-[#9B99FE] to-[#2BC8B7] shadow-lg">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex justify-between text-xs text-muted-foreground/60">
              <span>Coventry University</span>
              <span>West Midlands</span>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Working remotely with clients worldwide
          </p>
        </div>
      </div>
    </motion.div>
  );
}
