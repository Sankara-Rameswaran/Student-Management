import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllStudents() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <h2 className="text-center mt-10 text-xl">Loading...</h2>;
  if (error) return <h2 className="text-center mt-10 text-red-500">Error: {error}</h2>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">

      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Student List
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {students.map((student) => (
          <div
            key={student.roll_no}
            className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              {student.name}
            </h3>

            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Roll No:</span> {student.roll_no}</p>
              <p><span className="font-medium">Age:</span> {student.age}</p>
              <p><span className="font-medium">Mark:</span> {student.mark}</p>
              <p><span className="font-medium">Department:</span> {student.dept}</p>
              <p>
                <span className="font-medium">Placed:</span>{" "}
                <span className={`font-semibold ${student.isPlaced ? "text-green-600" : "text-red-500"}`}>
                  {student.isPlaced ? "Yes" : "No"}
                </span>
              </p>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => navigate(`/edit/${student.roll_no}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Edit
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default AllStudents;
