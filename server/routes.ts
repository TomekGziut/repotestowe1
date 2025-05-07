import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', server: 'server115683.nazwa.pl', domain: 'technicodecamp.pl' });
  });

  // Sample courses endpoint
  app.get('/api/courses', (req, res) => {
    const courses = [
      {
        id: 1,
        title: "Podstawy TypeScript",
        description: "Naucz się TypeScript od podstaw i wykorzystaj statyczne typowanie w swoich projektach JavaScript.",
        level: "Podstawowy",
        levelClass: "bg-blue-100 text-blue-800",
        modules: 10,
        hours: 12,
        participants: 2345,
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
        imageAlt: "Podstawy TypeScript"
      },
      {
        id: 2,
        title: "React z TypeScript",
        description: "Zbuduj aplikacje React wykorzystując TypeScript dla lepszej skalowalności i mniej błędów.",
        level: "Średniozaawansowany",
        levelClass: "bg-indigo-100 text-indigo-800",
        modules: 8,
        hours: 15,
        participants: 1876,
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
        imageAlt: "React i TypeScript"
      },
      {
        id: 3,
        title: "Node.js i Express z TypeScript",
        description: "Twórz serwery API RESTful z Node.js, Express i TypeScript, z uwzględnieniem najlepszych praktyk.",
        level: "Zaawansowany",
        levelClass: "bg-green-100 text-green-800",
        modules: 12,
        hours: 18,
        participants: 1243,
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
        imageAlt: "Node.js i Express"
      }
    ];
    
    res.json(courses);
  });

  const httpServer = createServer(app);

  return httpServer;
}
