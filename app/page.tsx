import { Hero } from "@/sections/home/Hero";
import { HomeServices } from "@/sections/home/HomeServices";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { Reviews } from "@/sections/home/Reviews";
import { GalleryPreview } from "@/sections/home/GalleryPreview";
import { HomeCta } from "@/sections/home/HomeCta";
import { RetailPartners } from "@/sections/home/RetailPartners";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <WhyChooseUs />
      <RetailPartners />
      <Reviews />
      <GalleryPreview />
      <HomeCta />
    </>
  );
}
