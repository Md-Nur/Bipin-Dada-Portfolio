"use client";
import { databases } from "@/lib/appwrite";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextLine from "../Skeleton/TextLine";
import parse from "html-react-parser"; // Assuming you have this package installed for parsing HTML strings
import ActionBtn from "./ActionBtn";
import { useUserAuth } from "@/context/userAuth";


const Hero = () => {
  const [heroData, setHeroData] = useState<string | null>(null);
  const { user } = useUserAuth();

  useEffect(() => {
    databases
      .getDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_HERO_ID!,
        "6884caee0027d8923e44"
      )
      .then((res) => {
        setHeroData(res.content);
      })
      .catch((error) => {
        console.error("Error fetching hero data:", error);
      });
  }, []);

  const docId = "6884caee0027d8923e44";
  return (
    <div className="hero min-h-screen w-full max-w-5xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-full gap-10">
        <div className="flex flex-col">
          <Image
            alt="Hero Image"
            width={500}
            height={500}
            src="/dp.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <p className="max-w-sm text-xl my-5 font-bold font-sans text-center lg:text-right">
            Rajshahi, Bangladesh <br /> bsaha@aggies.ncat.edu <br />
            bipinsaha.bd@gmail.com
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-5xl font-bold">Bipin Saha</h1>
          <div className="py-6 w-full text-justify raw">
            {heroData ? parse(heroData) : <TextLine />}
          </div>
          <a download href={"/resume.pdf"} className="btn btn-primary mr-3">
            Curriculum Vitae
          </a>
          {/* 
          
          */}
          {user?.$id && (
            <ActionBtn
              docId={docId}
              colId={process.env.NEXT_PUBLIC_APPWRITE_HERO_ID!}
              initVal={heroData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
