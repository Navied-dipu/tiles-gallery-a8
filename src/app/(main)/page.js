import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Popular from "../components/Popular";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  );
}
