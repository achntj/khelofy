import Container from "@/components/Container";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch("/api/rss");
        const data = await response.json();
        setFeedItems(data);
      } catch (error) {
        console.error("Error fetching news feed:", error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <Container>
      {" "}
      <div>
        <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
          {feedItems.map((item, index) => (
            <div
              className="my-10 border bg-neutral-100 p-5 rounded-md"
              key={index}
            >
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.contentSnippet}</p>
              <a
                href={item.link}
                target="_blank"
                className="text-blue-400 underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
