// import Header from "@/components/layout/Header";
// import Hero from "@/components/layout/Hero";
import Hero from "../components/layout/Hero"
// import HomeMenu from "@/components/layout/HomeMenu";
import HomeMenu from "../components/layout/HomeMenu"
// import SectionHeaders from "@/components/layout/SectionHeaders";
import SectionHeaders from "../components/layout/SectionHeaders";



export default function Home() {
  return (
    <>
      {/* <Header /> */}

      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'}/>
        <div className="text-gray-500 max-w-md mx-auto mt-4">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
        </div>
        
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders 
          subHeader={"Dont't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8"><a className="text-4xl underline text-gray-500" href="tel:+23456789">+46 738 123 123</a></div>
        
      </section>
      
    </>
  );
}
