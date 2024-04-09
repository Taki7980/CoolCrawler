"use server"

import { scrapeAmazonProducts } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string){
      if(!productUrl) return;

      try {
            const scrapeProducts = await scrapeAmazonProducts(productUrl);
      } catch (error:any) {
            throw new Error(`fail to create/update product : ${error.message}`)
      }
}