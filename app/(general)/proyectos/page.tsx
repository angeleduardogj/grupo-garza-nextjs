import type { Metadata } from "next";
import { ProjectTabs } from "@/components/projects/ProjectTabs";

export const metadata: Metadata = {
  title: "Proyectos | Grupo Garza",
  description: "Nuestros proyectos destacados",
};

const ProyectosPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <ProjectTabs />
    </div>
  )
}

export default ProyectosPage
