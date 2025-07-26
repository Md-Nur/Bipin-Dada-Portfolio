"use client";
import { useState } from "react";
import { account, ID } from "@/lib/appwrite";
import Hero from "@/components/Home/Hero/Hero";
import Slider from "@/components/Home/Slider/Swiper";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Slider />
    </>
  );
};

export default HomePage;
