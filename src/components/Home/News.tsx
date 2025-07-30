"use client";
import { databases } from "@/lib/appwrite";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const colId = "6887f055001ee6815b89";

type NewsDocument = {
  $id: string;
  title: string;
  date: string;
  content: string;
  ref: string;
};

const News = () => {
  const [news, setNews] = useState<NewsDocument[] | null>(null);
  useEffect(() => {
    databases
      .listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, colId)
      .then((res) => {
        const newsDocs = res.documents.map((doc: any) => ({
          $id: doc.$id,
          date: doc.date,
          content: doc.content,
          ref: doc.ref,
        })) as NewsDocument[];
        setNews(newsDocs);
      });
  }, []);
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-5xl mx-auto">
      {news?.map((newsItem, i) => (
        <li key={newsItem.$id}>
          {i !== 0 && <hr />}
          <div className="timeline-middle">
            <FaCheckCircle />
          </div>
          <div
            className={`${i % 2 ? "timeline-end" : "timeline-start"} md:mb-10`}
          >
            <time className="font-mono italic">
              {new Date(newsItem.date).toLocaleDateString()}
            </time>
            <div className="text-lg font-black">
              {newsItem?.title || "Title"}
            </div>
            {newsItem.content}
            {newsItem?.ref && <iframe className="w-full rounded-2xl my-5" src={newsItem.ref} />}
          </div>
          {i !== news.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};

export default News;
