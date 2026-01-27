import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios | Grupo Garza",
  description: "Servicios profesionales de construcción y mantenimiento.",
};

const collageItems = [
  { title: "Mantenimiento", src: "https://res.cloudinary.com/drotzbucj/image/upload/v1769135065/65a58e485c77ab7e993c4bcf_pexels-ksenia-chernaya-5768187-1-684x1024_syzp76.jpg", objectPosition: "70% 70%", href: "/mantenimiento" },
  { title: "Ingeniería", src: "https://res.cloudinary.com/drotzbucj/image/upload/v1769135064/65a5c5fe51c4120f9f61000b_pexels-thisisengineering-3912982-p-500_xp1sug.jpg", objectPosition: "50% 50%", href: "/ingenieria" },
  { title: "Industrial", src: "https://res.cloudinary.com/drotzbucj/image/upload/v1769135053/unnamed_n0c0fz.jpg", objectPosition: "90% 20%", href: "/industrial" },
  { title: "Comercial", src: "https://res.cloudinary.com/drotzbucj/image/upload/v1769135058/6532dba4535ec4ad90b711ae_p1_w4mywf.jpg", objectPosition: "90% 05%", href: "/comercial" },
];

const ServiciosPage = () => {
  return (
    <div className="bg-white flex-1 flex flex-col py-8">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0 flex-1 flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[528px]">
          {collageItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative w-full rounded-md overflow-hidden group h-full block"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={800}
                height={600}
                unoptimized
                className="w-full h-full object-cover"
                style={{ objectPosition: (item as any).objectPosition ?? "50% 50%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20 transition-colors duration-200 group-hover:from-black/40 group-hover:to-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-bold uppercase text-lg md:text-xl lg:text-2xl transition-transform duration-200 group-hover:scale-105">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiciosPage
