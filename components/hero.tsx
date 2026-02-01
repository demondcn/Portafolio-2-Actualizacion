"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Zap,
  Code,
  Rocket,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { HeroRubik } from "@/components/hero-rubik";

export function Hero() {
  const { lang } = useLanguage();
  const copy =
    lang === "es"
      ? {
          badge: "DESARROLLADOR FULL-STACK",
          titleLine1: "CRISTIAN STIVEN",
          titleLine2: "GUERRERO ANDRADE",
          subtitleLead: "CREANDO EL FUTURO CON",
          subtitleAccent: "CODIGO",
          description: (
            <>
              Desarrollador de software especializado en backend con{" "}
              <span className="text-emerald-400 font-semibold">Node.js</span>,{" "}
              <span className="text-cyan-300 font-semibold">.NET</span> y{" "}
              <span className="text-green-400 font-semibold">Spring Boot</span>, y en frontend con{" "}
              <span className="text-cyan-400 font-semibold">Next.js</span>,{" "}
              <span className="text-red-400 font-semibold">Angular</span> y{" "}
              <span className="text-purple-300 font-semibold">Blazor</span>. Construyo soluciones digitales robustas,
              escalables y alineadas con los objetivos del negocio.
            </>
          ),
          ctaPrimary: "EXPLORAR PROYECTOS",
          ctaSecondary: "CONTACTAR",
          discover: "DESCUBRE MAS",
        }
      : {
          badge: "FULL-STACK DEVELOPER",
          titleLine1: "CRISTIAN STIVEN",
          titleLine2: "GUERRERO ANDRADE",
          subtitleLead: "BUILDING THE FUTURE WITH",
          subtitleAccent: "CODE",
          description: (
            <>
              Software developer specialized in backend with{" "}
              <span className="text-emerald-400 font-semibold">Node.js</span>,{" "}
              <span className="text-cyan-300 font-semibold">.NET</span>, and{" "}
              <span className="text-green-400 font-semibold">Spring Boot</span>, and in frontend with{" "}
              <span className="text-cyan-400 font-semibold">Next.js</span>,{" "}
              <span className="text-red-400 font-semibold">Angular</span>, and{" "}
              <span className="text-purple-300 font-semibold">Blazor</span>. I build robust, scalable digital solutions
              aligned with business goals.
            </>
          ),
          ctaPrimary: "EXPLORE PROJECTS",
          ctaSecondary: "CONTACT",
          discover: "DISCOVER MORE",
        };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 sm:pt-28 pb-12 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      </div>

      {/* Rubik Cubes (Three.js) */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute left-6 top-24 h-[220px] w-[220px] overflow-hidden sm:left-10 sm:top-24 sm:h-[260px] sm:w-[260px] lg:left-16 lg:top-24 lg:h-[320px] lg:w-[320px]">
          <HeroRubik className="absolute inset-0 opacity-90" />
        </div>
        <div className="absolute right-0 top-24 h-[220px] w-[220px] translate-x-6 overflow-hidden sm:right-2 sm:top-24 sm:h-[260px] sm:w-[260px] sm:translate-x-4 lg:right-6 lg:top-24 lg:h-[320px] lg:w-[320px] lg:translate-x-0">
          <HeroRubik className="absolute inset-0 opacity-90" />
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="absolute inset-x-0 top-20 mx-auto h-72 max-w-3xl rounded-[32px] bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-transparent blur-3xl"></div>
          {/* Badge */}
          <div className="relative flex items-center justify-center gap-3 mb-6">
            <Code className="w-6 h-6 text-cyan-400 animate-pulse" />
            <Badge
              variant="outline"
              className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron text-xl sm:text-2xl lg:text-3xl px-6 py-3 shadow-[0_0_32px_rgba(168,85,247,0.35)]"
            >
              {copy.badge}
            </Badge>
            <Rocket className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>

          {/* Main Title */}
          <h1 className="relative font-orbitron font-bold leading-tight mb-5">
            <span className="block text-2xl sm:text-6xl lg:text-8xl text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text animate-gradient drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]">
              {copy.titleLine1}
            </span>
            <span className="block text-2xl sm:text-6xl lg:text-8xl text-transparent bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text animate-gradient-reverse glitch-text drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
              {copy.titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="relative text-lg sm:text-xl text-cyan-300 mb-7 mt-4 font-orbitron tracking-wide">
            {copy.subtitleLead}{" "}
            <span className="text-purple-400 animate-pulse">
              {copy.subtitleAccent}
            </span>
          </p>

          {/* Description */}
          <p className="relative text-base sm:text-lg text-cyan-200/90 mb-10 max-w-4xl mx-auto leading-relaxed">
            {copy.description}
          </p>

          {/* Action Buttons */}
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToAbout}
              className="arcade-button bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 group"
              size="lg"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              {copy.ctaPrimary}
            </Button>

            <Button
              variant="outline"
              className="arcade-button border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 group bg-transparent"
              size="lg"
              asChild
            >
              <a href="mailto:guerrero70407@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                {copy.ctaSecondary}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="arcade-icon-button"
            >
              <a
                href="https://www.linkedin.com/in/cristian-stiven-guerrero-andrade-877625267/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-cyan-400" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="arcade-icon-button"
            >
              <a
                href="https://github.com/demondcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-purple-400" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="arcade-icon-button"
            >
              <a href="mailto:guerrero70407@gmail.com">
                <Mail className="h-6 w-6 text-pink-400" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <p className="text-cyan-400 text-sm mb-2 font-orbitron">
              {copy.discover}
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToAbout}
              className="animate-bounce text-cyan-400 hover:text-cyan-300"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
