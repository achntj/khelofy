import Parser from "rss-parser";

export default async function handler(req, res) {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(
      "https://news.google.com/rss/search?q=cricket&hl=en-IN&gl=IN&ceid=IN:en"
    );
    res.status(200).json(feed.items);
  } catch (error) {
    console.error("Error fetching news feed:", error);
    res.status(500).json({ error: "Error fetching news feed" });
  }
}
