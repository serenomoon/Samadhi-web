import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Noticias } from "../components/noticias/Noticias";
import { Clases } from "../components/clases/Clases";
import { Facilitadores } from "../components/facilitadores/Facilitadores";
import { Contacto } from "../components/home/Contacto";
import { ClasesMas } from "../components/clases/ClasesMas";
import { Facilitador } from "../components/facilitadores/Facilitador";


export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home />} />

         <Route path="facilitadores" element={<Facilitadores />} />
         <Route path="facilitador/:id" element={<Facilitador />} />

         <Route path="clases" element={<Clases />} />
         <Route path="clase/:id" element={<ClasesMas />} />

         <Route path="noticias/:id" element={<Noticias />} />
         
         <Route path="contacto" element={<Contacto />} />
         

         {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
       </Routes>
    </>
  )
}
