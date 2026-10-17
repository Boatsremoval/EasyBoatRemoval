import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { quoteSchema, contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendQuoteToTelegram, sendContactToTelegram } from "./telegram";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote submission endpoint
  app.post("/api/quote", async (req, res) => {
    try {
      // Validate request body
      const validatedData = quoteSchema.parse(req.body);
      
      // Forward to Telegram
      await sendQuoteToTelegram(validatedData);
      
      res.json({ 
        success: true, 
        message: "Quote request submitted successfully" 
      });
    } catch (error) {
      console.error('Quote submission error:', error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof ZodError ? error.issues[0]?.message : error instanceof Error ? error.message : "Failed to submit quote request" 
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Forward to Telegram
      await sendContactToTelegram(validatedData);
      
      res.json({ 
        success: true, 
        message: "Contact request submitted successfully" 
      });
    } catch (error) {
      console.error('Contact submission error:', error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof ZodError ? error.issues[0]?.message : error instanceof Error ? error.message : "Failed to submit contact request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
