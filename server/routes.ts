// import type { Express } from "express";
// import { createServer, type Server } from "http";
// import { storage } from "./storage";
// import { insertContactMessageSchema } from "@shared/schema";
// import { ZodError } from "zod";

// export async function registerRoutes(app: Express): Promise<Server> {
//   app.post("/api/contact", async (req, res) => {
//     try {
//       const contactData = insertContactMessageSchema.parse(req.body);
//       const message = await storage.createContactMessage(contactData);
//       res.json(message);
//     } catch (error) {
//       if (error instanceof ZodError) {
//         res.status(400).json({ message: "Invalid contact form data" });
//         return;
//       }
//       res.status(500).json({ message: "Failed to send message" });
//     }
//   });

//   return createServer(app);
// }
