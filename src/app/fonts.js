import localFont from "next/font/local";
import { Archivo, Roboto_Mono } from "next/font/google";

export const clashGrotesk = localFont({
  src: [
    { path: "./fonts/ClashGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ClashGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashGrotesk-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ClashGrotesk-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = [
  clashGrotesk.variable,
  archivo.variable,
  robotoMono.variable,
].join(" ");
