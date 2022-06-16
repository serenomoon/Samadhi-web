import { Route, Routes } from "react-router-dom";

import { DataAlumnos } from "../components/private/data-alumnos/DataAlumnos";
import { DataAlumnosAdd } from "../components/private/data-alumnos/DataAlumnosAdd";
import { DataAlumnosVer } from "../components/private/data-alumnos/DataAlumnosVer";

import { DataClases } from "../components/private/data-clases/DataClases";
import { DataClasesAdd } from "../components/private/data-clases/DataClasesAdd";

import { DataFacilitadores } from "../components/private/data-facilitadores/DataFacilitadores";
import { DataFacilitadoresAdd } from "../components/private/data-facilitadores/DataFacilitadoresAdd";
import { DataFacilitadoresVer } from "../components/private/data-facilitadores/DataFacilitadoresVer";

import { DataNoticias } from "../components/private/data-noticias/DataNoticias";
import { DataNoticiasAdd } from "../components/private/data-noticias/DataNoticiasAdd";




export const DataRoutes = () => {
  return (
    <>
      <Routes>

         <Route path="alumnos" element={<DataAlumnos />} />
         <Route path="alumnos-add" element={<DataAlumnosAdd />} />
         <Route path="alumnos-ver" element={<DataAlumnosVer />} />

         <Route path="clases" element={<DataClases />} />
         <Route path="clases-add" element={<DataClasesAdd />} />

         <Route path="facilitadores" element={<DataFacilitadores />} />
         <Route path="facilitadores-add" element={<DataFacilitadoresAdd />} />
         <Route path="facilitadores-ver" element={<DataFacilitadoresVer />} />

         <Route path="noticias" element={<DataNoticias />} />
         <Route path="noticias-add" element={<DataNoticiasAdd />} />

       </Routes>
    </>
  )
}