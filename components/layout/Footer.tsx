"use client";

import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFooter = motion.footer;

export default function Footer() {
  return (
    <MotionFooter
      style={{
        backgroundColor: '#1a202c',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#cccccc',
        borderTop: '2px solid rgba(0, 255, 255, 0.2)',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Text
        fontFamily="STAATLICHES, sans-serif"
        letterSpacing="2px"
        textTransform="uppercase"
        color="neon.white"
        textShadow="0 0 10px rgba(0, 255, 255, 0.5)"
      >
        © 2025 MIYAGUIDE 制作チーム
      </Text>
    </MotionFooter>
  );
}