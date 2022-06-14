import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import { News } from "../components/home/News";
import { Clases } from "../components/clases/Clases";
import { About } from "../components/about/About";
import { Contacto } from "../components/home/Contacto";
import { ClasesMas } from "../components/clases/ClasesMas";
import { Facilitador } from "../components/about/Facilitador";


export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="clases" element={<Clases />} />
         <Route path="about" element={<About />} />
         <Route path="contacto" element={<Contacto />} />
         <Route path="news" element={<News />} />
         <Route path="clasesmas" element={<ClasesMas />} />
         <Route path="facilitador" element={<Facilitador />} />

         <Route path="/*" element={<Navigate to="/" replace />} />
       </Routes>
    </>
  )
}
