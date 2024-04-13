"use server"

import { connectToDatabase } from "../mongoose";
import { scrapeAmazonProducts } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string){
      if(!productUrl) return;

      try {
            connectToDatabase();
            const scrapeProducts = await scrapeAmazonProducts(productUrl);
            if(!scrapeProducts) return;
      } catch (error:any) {
            throw new Error(`fail to create/update product : ${error.message}`)
      }
}