import { Route, Routes } from "react-router-dom";

import { DataAlumnos } from "../components/private/data-alumnos/DataAlumnos";
import { DataAlumnosActualizar } from "../components/private/data-alumnos/DataAlumnosActualizar";
import { DataAlumnosAdd } from "../components/private/data-alumnos/DataAlumnosAdd";
import { DataAlumnosVer } from "../components/private/data-alumnos/DataAlumnosVer";

import { DataClases } from "../components/private/data-clases/DataClases";
import { DataClasesActualizar } from "../components/private/data-clases/DataClasesActualizar";
import { DataClasesAdd } from "../components/private/data-clases/DataClasesAdd";
import { DataClasesVer } from "../components/private/data-clases/DataClasesVer";

import { DataFacilitadores } from "../components/private/data-facilitadores/DataFacilitadores";
import { DataFacilitadoresActualizar } from "../components/private/data-facilitadores/DataFacilitadoresActualizar";
import { DataFacilitadoresAdd } from "../components/private/data-facilitadores/DataFacilitadoresAdd";
import { DataFacilitadoresVer } from "../components/private/data-facilitadores/DataFacilitadoresVer";

import { DataNoticias } from "../components/private/data-noticias/DataNoticias";
import { DataNoticiasActualizar } from "../components/private/data-noticias/DataNoticiasActualizar";
import { DataNoticiasAdd } from "../components/private/data-noticias/DataNoticiasAdd";
import { DataNoticiasVer } from "../components/private/data-noticias/DataNoticiasVer";




export const DataRoutes = () => {
  return (
    <>
      <Routes>

         <Route path="alumnos" element={<DataAlumnos />} />
         <Route path="alumnos-add" element={<DataAlumnosAdd />} />
         <Route path="alumnos-ver/:id" element={<DataAlumnosVer />} />
         <Route path="alumnos-actualizar/:id" element={<DataAlumnosActualizar />} />

         <Route path="clases" element={<DataClases />} />
         <Route path="clases-add" element={<DataClasesAdd />} />
         <Route path="clases-ver/:id" element={<DataClasesVer />} />
         <Route path="clases-actualizar/:id" element={<DataClasesActualizar />} />

         <Route path="facilitadores" element={<DataFacilitadores />} />
         <Route path="facilitadores-add" element={<DataFacilitadoresAdd />} />
         <Route path="facilitadores-ver/:id" element={<DataFacilitadoresVer />} />
         <Route path="facilitadores-actualizar/:id" element={<DataFacilitadoresActualizar />} />

         <Route path="noticias" element={<DataNoticias />} />
         <Route path="noticias-add" element={<DataNoticiasAdd />} />
         <Route path="noticias-ver/:id" element={<DataNoticiasVer />} />
         <Route path="noticias-actualizar/:id" element={<DataNoticiasActualizar />} />

       </Routes>
    </>
  )
}