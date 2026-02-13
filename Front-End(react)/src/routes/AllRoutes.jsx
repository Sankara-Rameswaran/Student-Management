import { Route, Routes } from "react-router-dom";
import Add from "../pages/Add";
import DeleteStudent from "../pages/DeleteStudent";
import AllStudents from "../pages/AllStudents";
import Home from "../pages/Home";
import UpdateStudent from "../pages/UpdateStudent";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add/>} />
      <Route path="/view" element={<AllStudents />} />
      <Route path="/delete" element={<DeleteStudent />} />
      <Route path='/update' element={<UpdateStudent/>}/>
    </Routes>
  );
}

export default AllRoutes;
