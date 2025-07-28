"use client";
import { useState } from "react";
import { account, ID } from "@/lib/appwrite";
import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider/Swiper";
import EarlyResearch from "@/components/Home/Early_Research";
import Video from "@/components/Home/Video";
import LifeAcademia from "@/components/Home/Life_Academia";
import ChildhoodAcademic from "@/components/Home/Childhood_Academic";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Slider />
      <EarlyResearch />
      <Video />
      <LifeAcademia />
      <ChildhoodAcademic />
    </>
  );
};

export default HomePage;
