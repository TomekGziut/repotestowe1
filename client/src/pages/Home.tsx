import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import CodeDemo from "@/components/CodeDemo";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>TechniCodeCamp - Kursy programowania</title>
        <meta name="description" content="Kursy, warsztaty i mentorzy, którzy pomogą Ci nauczyć się programowania od podstaw lub rozwinąć swoje umiejętności w TypeScript, React i Node.js." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Header />
        <main>
          <Hero />
          <FeaturedCourses />
          <CodeDemo />
          <Features />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
}
