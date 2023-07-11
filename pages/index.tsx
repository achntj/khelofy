import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";
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
        <h1 className="uppercase my-10 tracking-wide">
          What’s happening in Sports
        </h1>

        <div className="grid grid-cols-3 gap-5">
          {feedItems.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              content={item.contentSnippet}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
