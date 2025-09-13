"use client";
import { extendTheme } from "@chakra-ui/react";

const globalstyle = extendTheme({
  fonts: {
    heading: "'Staatliches', system-ui, sans-serif",
    body: "'Staatliches', system-ui, sans-serif",
  },
  colors: {
    brand: {
      50: "#e6ffff",
      100: "#b3ffff",
      200: "#80ffff",
      300: "#4dffff",
      400: "#1affff",
      500: "#00ffff",
      600: "#00e6e6",
      700: "#00cccc",
      800: "#00b3b3",
      900: "#009999",
    },
    neon: {
      cyan: "#00ffff",
      green: "#22c55e",
      blue: "#3b82f6",
      red: "#ef4444",
      black: "#000000",
      white: "#ffffff",
      gray: "#cccccc",
    },
  },
  styles: {
    global: {
      body: {
        bg: "neon.black",
        color: "neon.white",
        fontFamily: "body",
      },
    },
  },
  components: {
    Button: {
      variants: {
        neonPrimary: {
          bg: "brand.500",
          color: "neon.black",
          border: "2px solid",
          borderColor: "brand.500",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: "bold",
          _hover: {
            transform: "scale(1.05)",
            boxShadow: "0 0 30px rgba(0, 255, 255, 0.7)",
          },
          _active: {
            transform: "scale(0.98)",
          },
        },
        neonSecondary: {
          bg: "transparent",
          color: "neon.white",
          border: "2px solid",
          borderColor: "brand.500",
          borderRadius: "8px",
          boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: "bold",
          _hover: {
            bg: "rgba(0, 255, 255, 0.1)",
            transform: "scale(1.05)",
            boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)",
          },
        },
        neonSuccess: {
          bg: "neon.green",
          color: "neon.white",
          border: "2px solid",
          borderColor: "neon.green",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: "bold",
          _hover: {
            transform: "scale(1.05)",
            boxShadow: "0 0 30px rgba(34, 197, 94, 0.7)",
          },
        },
        neonSmall: {
          bg: "transparent",
          color: "neon.gray",
          border: "1px solid",
          borderColor: "gray.600",
          borderRadius: "6px",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          _hover: {
            borderColor: "brand.500",
            color: "brand.500",
            transform: "scale(1.02)",
          },
        },
      },
    },
    Card: {
      variants: {
        neon: {
          container: {
            bg: "rgba(0, 255, 255, 0.05)",
            border: "2px solid",
            borderColor: "brand.500",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
            p: 6,
          },
        },
        neonHighlight: {
          container: {
            bg: "rgba(0, 255, 255, 0.1)",
            border: "2px solid",
            borderColor: "brand.500",
            borderRadius: "16px",
            boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
            p: 6,
          },
        },
      },
    },
    Badge: {
      variants: {
        budget: {
          bg: "rgba(57, 255, 20, 0.12)", // ライムグリーン
          color: "#39ff14",
          border: "1px solid #39ff14",
        },
        recommended: {
          bg: "rgba(0, 255, 255, 0.12)", // シアン（既存のbrand色）
          color: "#00ffff",
          border: "1px solid #00ffff",
        },
        highend: {
          bg: "rgba(255, 105, 180, 0.12)", // ホットピンク
          color: "#ff69b4",
          border: "1px solid #ff69b4",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "heading",
        textTransform: "uppercase",
        letterSpacing: "2px",
      },
      variants: {
        neonTitle: {
          color: "brand.500",
          textShadow: "0 0 20px rgba(0, 255, 255, 1)",
          fontSize: { base: "32px", md: "48px" },
        },
        neonSubtitle: {
          color: "neon.white",
          fontSize: { base: "18px", md: "24px" },
        },
      },
    },
    Text: {
      variants: {
        neonPrice: {
          color: "brand.500",
          fontSize: "24px",
          fontWeight: "bold",
          textShadow: "0 0 15px rgba(0, 255, 255, 1)",
          letterSpacing: "1px",
        },
        neonSpec: {
          color: "neon.gray",
          fontSize: "14px",
          borderLeft: "2px solid rgba(0, 255, 255, 0.3)",
          pl: 2,
          mb: 1,
        },
      },
    },
  },
});

export default globalstyle;
