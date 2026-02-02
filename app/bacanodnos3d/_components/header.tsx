"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg shadow-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 sm:h-20">
          <Link href="/bacanodnos3d" className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-base sm:text-xl">B</span>
            </div>
            <span className="font-bold text-base sm:text-xl text-foreground tracking-tight">bacanodnos3d</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 ml-12 lg:ml-16">
            {[
              { href: "#servicios", label: "Servicios" },
              { href: "#trabajos", label: "Trabajos" },
              { href: "#proceso", label: "Proceso" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block ml-auto">
            <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              <Link href="#cotizar">Cotizar Ahora</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4 items-end text-right">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#trabajos", label: "Trabajos" },
                { href: "#proceso", label: "Proceso" },
              ].map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 font-medium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-fit mt-2 animate-fade-in-up self-end" style={{ animationDelay: "400ms" }}>
                <Link href="#cotizar" onClick={() => setIsMenuOpen(false)}>
                  Cotizar Ahora
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
