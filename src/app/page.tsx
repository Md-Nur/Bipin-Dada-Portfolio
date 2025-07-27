"use client";
import { useState } from "react";
import { account, ID } from "@/lib/appwrite";
import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider/Swiper";
import EarlyResearch from "@/components/Home/Early_Research";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Slider />
      <EarlyResearch />
    </>
  );
};

export default HomePage;
