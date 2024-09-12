import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1a73e8", // Couleur principale (bleu)
      secondary: "#505050", // Couleur secondaire (gris foncé)
      accent: "#ff6b6b", // Couleur d'accent (rouge vif)
      background: "#fafafa", // Couleur de fond (gris clair)
      neutral: "#d9d9d9", // Neutre (gris)
      outline: "#1a73e8", // Même couleur que le primary pour les bordures
      disabled: "#bdbdbd", // Couleur désactivée (gris)
      white: "#ffffff",
      lightblue: "#5597ee",
      black: "#050505",
      gray: "#c4c4c4",
      alert: {
        danger: "#FF4E4E",
        success: "#90DA1",
        warning: "#FEB72F",
      },
    },

    fontSize: {
      "8xl": [
        "160px", // Plus grand
        {
          lineHeight: "160px",
          letterSpacing: "-6px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "128px",
        {
          lineHeight: "140px",
          letterSpacing: "-4px",
          fontWeight: "500",
        },
      ],
      "6xl": [
        "96px",
        {
          lineHeight: "110px",
          letterSpacing: "-2px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "72px",
        {
          lineHeight: "90px",
          letterSpacing: "-1px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "60px",
        {
          lineHeight: "72px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "48px",
        {
          lineHeight: "56px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "36px",
        {
          lineHeight: "44px",
          fontWeight: "500",
        },
      ],
      lg: [
        "20px", // Légèrement plus grand que la version précédente
        {
          lineHeight: "30px",
          fontWeight: "400",
        },
      ],
      base: [
        "18px", // Taille de base légèrement plus grande
        {
          lineHeight: "28px",
          fontWeight: "400",
        },
      ],
      sm: [
        "16px", // Plus grand pour les petits textes
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      xs: [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      caption1: [
        "14px", // Taille augmentée pour les légendes
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      caption2: [
        "13px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      caption3: [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "400",
        },
      ],
      caption4: [
        "10px",
        {
          lineHeight: "14px",
          fontWeight: "400",
        },
      ],
    },

    // Extensions de styles pour les boutons
    extend: {
      backgroundColor: {
        buttonPrimary: "#1a73e8", // Couleur de fond pour les boutons primary
        buttonSecondary: "#333333", // Couleur de fond pour les boutons secondary
        buttonAccent: "#ff6b6b", // Couleur de fond pour les boutons accent
        buttonDisabled: "#bdbdbd", // Couleur de fond pour les boutons disabled
      },
      textColor: {
        buttonPrimary: "#ffffff", // Texte blanc pour les boutons primary
        buttonSecondary: "#ffffff", // Texte blanc pour les boutons secondary
        buttonAccent: "#ffffff", // Texte blanc pour les boutons accent
        buttonDisabled: "#6d6d6d", // Texte gris pour les boutons disabled
      },
      borderColor: {
        buttonOutline: "#1a73e8", // Couleur de la bordure pour les boutons outline
        buttonDisabled: "#bdbdbd", // Couleur de la bordure pour les boutons disabled
        gray: "#c4c4c4",
      },
    },
  },
  plugins: [],
};

export default config;
