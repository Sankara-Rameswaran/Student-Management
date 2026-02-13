import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [studentData, setStudentData] = useState({
    "roll_no":"",
    "name": "",
    "age": "",
    "dept": "",
    "isPlaced": "",
    "mark": "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudentData({
      ...studentData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    const fomattedData = {...studentData,age:Number(studentData.age),mark:Number(studentData.mark),roll_no:Number(studentData.roll_no)}
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/students", studentData);
      alert("Student was added successfully");
      navigate("/view");
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-10 border border-gray-100">

        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-wide">
          Add Student Details
        </h2>

        <form className="space-y-6">

          {/* Roll No */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Roll No
            </label>
            <input
              type="number"
              name="roll_no"
              value={studentData.roll_no}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={studentData.age}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Department
            </label>
            <input
              type="text"
              name="dept"
              value={studentData.dept}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
            />
          </div>

          {/* Mark */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Mark
            </label>
            <input
              type="number"
              name="mark"
              value={studentData.mark}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
            />
          </div>

          {/* Placement Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-3">
              Placement Status
            </label>

            <div className="flex items-center gap-10 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                <input type="radio" name="isPlaced" value={true} checked={studentData.isPlaced === true} onChange={() => setStudentData({ ...studentData, isPlaced: true })}/>
                Placed
              </label>

              <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                <input type="radio" name="isPlaced" value={false}   checked={studentData.isPlaced === false} onChange={() => setStudentData({ ...studentData, isPlaced: false })}/>
                Not Placed
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold tracking-wide shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Save Student
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Add;
