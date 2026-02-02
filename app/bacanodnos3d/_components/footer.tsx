import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-background py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 sm:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-primary-foreground font-bold text-xl">B</span>
                </div>
                <span className="font-bold text-xl sm:text-2xl tracking-tight">bacanodnos3d</span>
              </div>
              <p className="text-background/70 max-w-md leading-relaxed text-base sm:text-lg mb-8">
                Servicio profesional de impresion 3D. Transformamos tus ideas en realidad
                con la mas alta calidad y precision.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Enlaces</h3>
              <ul className="space-y-4">
                {[
                  { href: "#servicios", label: "Servicios" },
                  { href: "#trabajos", label: "Trabajos" },
                  { href: "#proceso", label: "Proceso" },
                  { href: "#cotizar", label: "Cotizar" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Servicios</h3>
              <ul className="space-y-4">
                {[
                  "Impresion FDM",
                  "Prototipado Rapido",
                  "Produccion en Serie",
                  "Acabados Premium",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-background/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 mt-12 sm:mt-16 pt-8 text-center text-background/50">
            <p>&copy; {new Date().getFullYear()} bacanodnos3d. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
