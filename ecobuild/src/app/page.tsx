import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

import logoImg from "../resources/LogoWText.png";
import heroImg from "../resources/pb-hero.jpg";
import svc1Img from "../resources/pb-home_renovations.jpg";
import svc2Img from "../resources/pb-construction.jpg";
import svc3Img from "../resources/pb-consultation.jpg";
import svc4Img from "../resources/pb-solar.jpg";
import aboutImg from "../resources/pb-wind-turbine.jpg";
import practisesImg from "../resources/pb-caring.png";
import longtermImg from "../resources/pb-long-term.png";
import innovativeImg from "../resources/pb-innovative.png";

import SustainabilityPromise from "@/components/SustainabilityPromise";
import QuoteCarousel from "@/components/QuoteCarousel";
import ContactModalOpenButton from "@/components/ContactModalOpenButton";
import { ITestimonial } from "@/types/Testimonial";
import ColorOverflowSectionLayout from "@/components/ColorOverflowSectionLayout";

export default async function Home() {
  const testimonials_res = await fetch(
    "http://localhost:3000/api/testimonials",
  );
  const testimonials: ITestimonial[] = await testimonials_res.json();

  return (
    <div>
      <header>
        <div className="relative h-[70dvh] w-full sm:h-[92dvh]">
          <div className="relative flex size-full h-5/6 items-center overflow-hidden">
            {/** Note, empty alt text will hide the image from screenreaders should only be done for purely decorative elements */}
            <Image
              src={heroImg}
              alt=""
              className="min-h-full min-w-full object-cover"
            />
            <div className="absolute top-0 flex size-full items-center justify-center overflow-hidden drop-shadow-md">
              {/** This is actually kinda dumb, hard to make scalable but it will do for now... */}
              <div className="h-1/2 drop-shadow-2xl">
                <Image
                  src={logoImg}
                  data-testid="site-logo"
                  alt="EcoBuild Logo"
                  className="h-auto w-full max-w-full"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 min-w-[70%] rounded-br-3xl bg-gradient-to-r from-green-200 to-teal-100 drop-shadow-lg">
            <h1 className="mx-auto max-w-[12em] px-8 py-12 text-4xl text-green-900 md:text-6xl lg:text-8xl">
              Solutions for Building a Greener Tomorrow
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div>
          <section
            className="mx-auto flex max-w-screen-xl flex-col p-2 text-green-950 sm:p-8"
            data-testid="services-section"
          >
            <h2 className="my-14 pb-4 text-4xl md:text-6xl">
              Consulting for Sustainable Projects
            </h2>
            <ul
              className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4"
              data-testid="services-list"
            >
              <li className="flex-grow basis-56">
                <ServiceCard
                  title="Green Home Renovations"
                  description="Get expert advice on making your home more energy-efficient with eco-friendly renovation strategies."
                  image={{
                    src: svc1Img,
                    alt: "A home with new shiny installed solar panels",
                  }}
                />
              </li>
              <li className="flex-grow basis-56">
                <ServiceCard
                  title="Sustainable Construction"
                  description="Consult with us to design eco-friendly commercial spaces using sustainable, energy-efficient building practices."
                  image={{
                    src: svc2Img,
                    alt: "A home with new shiny installed solar panels",
                  }}
                />
              </li>
              <li className="flex-grow basis-56">
                <ServiceCard
                  title="Energy Audits and Consultations"
                  description="Uncover inefficiencies with a thorough energy audit and receive custom recommendations to optimize energy use."
                  image={{
                    src: svc3Img,
                    alt: "A home with new shiny installed solar panels",
                  }}
                />
              </li>
              <li className="flex-grow basis-56">
                <ServiceCard
                  title="Solar Panel Installations"
                  description="Receive tailored guidance on integrating solar panels to maximize energy savings and sustainability."
                  image={{
                    src: svc4Img,
                    alt: "A home with new shiny installed solar panels",
                  }}
                />
              </li>
            </ul>
            {/** Oops, someone forgot to add modal trigger for the button, definitely by accident... */}
            <button
              data-testid="services-request-quote-btn"
              className="m-8 self-center rounded-md bg-green-200 p-6 text-3xl drop-shadow-md transition-all duration-300 ease-out hover:drop-shadow-xl"
            >
              Request a Quote
            </button>
          </section>
          <ColorOverflowSectionLayout
            image={{ src: aboutImg, alt: "Wind turbine behind lush trees" }}
          >
            <section
              className="flex flex-col justify-between gap-4 p-4 text-base sm:p-8 sm:text-lg"
              data-testid="about-us-section"
            >
              <h2 className="text-4xl sm:text-6xl">
                Building Green, Living Green.
              </h2>
              <p>
                EcoBuild Solutions is dedicated to leading the shift toward
                sustainable construction, creating eco-friendly spaces that
                benefit both people and the environment. Our goal is to make
                green building practical and impactful, reducing environmental
                harm with every project.
              </p>
              <p>
                Sustainability drives everything we do, from using renewable
                materials to designing energy-efficient spaces. We focus on
                reducing waste, conserving resources, and delivering solutions
                that make a lasting positive impact on the planet.
              </p>
              <ul className="flex flex-col sm:flex-row">
                <li className="basis-1/3">
                  <SustainabilityPromise
                    title="Eco-First Approach"
                    description="Every project uses green techniques that protect the planet."
                    image={practisesImg}
                  />
                </li>
                <li className="basis-1/3">
                  <SustainabilityPromise
                    title="Energy Savings"
                    description="Our designs help clients cut energy costs and reduce their carbon footprint."
                    image={longtermImg}
                  />
                </li>
                <li className="basis-1/3">
                  <SustainabilityPromise
                    title="Innovative Sustainability"
                    description="We continuously push the boundaries to integrate cutting-edge, eco-friendly solutions."
                    image={innovativeImg}
                  />
                </li>
              </ul>
            </section>
          </ColorOverflowSectionLayout>
          <section
            className="mx-auto max-w-screen-xl"
            data-testid="testimonials-section"
          >
            <h2 className="my-14 pb-4 text-6xl">From Our Clients</h2>
            <QuoteCarousel quotes={testimonials} />
          </section>
          <section className="my-24" data-testid="cta-section">
            <h2 className="my-14 w-[70%] text-center text-6xl">
              Ready to Go{" "}
              <span className="font-semibold text-green-800 drop-shadow-sm">
                Green
              </span>{" "}
              With Us?
            </h2>
            <div className="mx-auto flex max-w-screen-xl justify-center">
              <ContactModalOpenButton>
                Request a Free Quote Now!
              </ContactModalOpenButton>
            </div>
          </section>
        </div>
      </main>
      <footer className="relative bg-green-950 bg-[url('/pb-leaf-pattern.png')]">
        <div className="mx-auto flex h-72 max-w-screen-xl flex-col justify-evenly p-8 text-green-200 saturate-50">
          <p className="text-lg font-semibold">EcoBuild Solutions</p>
          <div>
            <p className="">Vihertie 12</p>
            <p className="">00100 Helsinki, Finland</p>
          </div>
          <div>
            <p>+358 40 123 4567</p>
            <p>info@ecobuildsolutions.com</p>
          </div>
        </div>
        <p className="mx-2 text-sm text-stone-300">
          &copy; 2024 EcoBuild Solutions
        </p>
      </footer>
    </div>
  );
}
