import { Metadata } from "next";
import localFont from "next/dist/compiled/@next/font/dist/local";
export const rc: { [k: string]: { [k: string]: string[] } } = {};
export const metadata: Metadata = {
  title: "Python challenged",
  description: "Form generated for answering question about the Python libraries knowledge",
};
export const labEquivalents: Map<string, string> = new Map([["default", "none"]]);
