import { SkillCategory, Project } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Linux"]
  },
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "C++"]
  },
  {
    category: "Other",
    items: ["REST APIs", "GraphQL", "CI/CD", "Agile"]
  }
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "FastAPI", "MongoDB", "WebSocket"]
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with location-based forecasts and interactive maps.",
    technologies: ["React", "Node.js", "Weather API"]
  }
];