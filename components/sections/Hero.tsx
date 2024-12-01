"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="mb-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Aditya Narayanan</h1>
      <p className="text-xl text-muted-foreground mb-6">Full Stack Developer</p>
      <div className="flex justify-center gap-4">
        <Link 
          href="https://github.com/adityanarayanan343" 
          target="_blank"
          className="p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <Github className="w-6 h-6" />
        </Link>
        <Link 
          href="https://linkedin.com/in/aditya-narayanan-s-8b2a8026b" 
          target="_blank"
          className="p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link 
          href="mailto:contact@example.com" 
          className="p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <Mail className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}