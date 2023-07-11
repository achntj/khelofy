import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";

export async function getServerSideProps(context) {
  const { slug } = context.query;

  // Validate the slug to allow only sports-related slugs
  const validSportsSlugs = [
    "football",
    "cricket",
    "tennis",
    "hockey",
    "soccer",
    "americanfootball",
    "golf",
    "baseball",
    "basketball",
    "badminton",
    "f1",
    "formulaone",
    "motogp",
  ];
  if (!validSportsSlugs.includes(slug)) {
    return {
      props: {
        slug: null, // Indicates an invalid slug
        newsItems: null, // Indicates a non-existing page
      },
    };
  }
  try {
    const response = await fetch(`/api/news?query=${slug}`);
    const newsItems = await response.json();

    return {
      props: {
        slug,
        newsItems,
      },
    };
  } catch (error) {
    console.error("Error fetching news feed:", error);
    return {
      props: {
        slug,
        newsItems: [],
      },
    };
  }
}

function NewsPage({ slug }) {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(`/api/rss?query=${slug}&limit=${15}`);
        const data = await response.json();
        setFeedItems(data);
      } catch (error) {
        console.error("Error fetching news feed:", error);
      }
    };

    fetchFeed();
  }, [slug]);

  return (
    <Container>
      {" "}
      <div>
        <div className="w-full bg-white text-black p-10 mb-10 border-b">
          <h1 className="uppercase my-10 tracking-wide">
            Top {slug === "americanfootball" ? "American Football" : slug} news
          </h1>
        </div>
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

export default NewsPage;
