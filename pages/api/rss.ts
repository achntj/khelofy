import Parser from "rss-parser";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, limit = 9 } = req.query;
  let URL;
  if (!query)
    URL =
      "https://news.google.com/rss/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JXVnVMVlZUR2dKVlV5Z0FQAQ?hl=en-IN&gl=IN&ceid=IN:en";
  else
    URL = `https://news.google.com/rss/search?q=${query}&hl=en-IN&gl=IN&ceid=IN:en`;

  try {
    const parser = new Parser();
    const feed = await parser.parseURL(
      URL
      // "https://news.google.com/rss/search?q=cricket&hl=en-IN&gl=IN&ceid=IN:en"
      // "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en"
      // "https://news.google.com/rss/topics/caaqkggkiirdqkftrlfvsuwymhznrfp1zedvu0jxvnvmvlzur2dkvlv5z0fqaq?hl=en-us&gl=us&ceid=us:en"
      // "https://news.google.com/rss/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JXVnVMVlZUR2dKVlV5Z0FQAQ?hl=en-IN&gl=IN&ceid=IN:en"
    );
    const limitedItems = feed.items.slice(0, limit); // Limit the items to the first 10
    console.log(limit);
    res.status(200).json(limitedItems);
  } catch (error) {
    console.error("Error fetching news feed:", error);
    res.status(500).json({ error: "Error fetching news feed" });
  }
}
