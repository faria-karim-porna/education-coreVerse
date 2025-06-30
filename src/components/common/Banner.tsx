import React, { useState } from "react";
import { motion } from "framer-motion";

interface BannerProps {
  title: string;
  subtitle: string;
}

export function Banner({ title, subtitle }: BannerProps) {
  return (
    <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
      <div className="container-lg py-5">
        <div className="text-center d-flex flex-column justify-content-center" style={{ minHeight: "200px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="display-3 fw-bold mb-4">{title}</h1>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}