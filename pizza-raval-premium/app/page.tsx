import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Spots } from "@/components/Spots";
import { MenuSection } from "@/components/MenuSection";
import { ForEveryone } from "@/components/ForEveryone";
import { Reviews } from "@/components/Reviews";
import { Events } from "@/components/Events";
import { OrderReserve } from "@/components/OrderReserve";
import { FindUs } from "@/components/FindUs";
import { FollowUs } from "@/components/FollowUs";
import { Footer } from "@/components/Footer";
import { SwitcherLang } from "@/components/SwitcherLang";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Spots />
        <MenuSection />
        <ForEveryone />
        <Reviews />
        <Events />
        <OrderReserve />
        <FindUs />
        <FollowUs />
      </main>
      <Footer />
      <SwitcherLang />
      <WhatsAppFloat />
    </>
  );
}
