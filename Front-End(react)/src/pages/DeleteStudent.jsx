import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeleteStudent() {

  const [rollNo, setRollNo] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const navigate = useNavigate();

  
const handleSearch = async () => {
  if (!rollNo) {
    alert("Please enter Roll No");
    return;
  }

  try {
    setLoading(true);
    setError("");
    setStudent(null);

    const response = await axios.get(
      `http://localhost:8080/api/students/${rollNo}`
    );

    setStudent(response.data);

  } catch (err) {

    if (err.response && err.response.status === 404) {
      setError("Student not found");
    } else {
      setError("Cannot connect to server");
    }

  } finally {
    setLoading(false);
  }
};



  // 🗑 Delete Student
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      setDeleting(true);

      await axios.delete(
        `http://localhost:8080/api/students/${rollNo}`
      );

      alert("Student deleted successfully");
      navigate("/view");

    } catch (err) {
      alert("Failed to delete student");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-red-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-xl p-8 border border-gray-100">

        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Delete Student
        </h2>

        {/* Search Section */}
        <div className="flex gap-4 mb-6">
          <input
            type="number"
            placeholder="Enter Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* Status Messages */}
        {loading && <p className="text-center text-gray-500">Searching...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Student Preview */}
        {student && (
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner mt-6 border border-gray-200">

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Student Details
            </h3>

            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Roll No:</span> {student.roll_no}</p>
              <p><span className="font-medium">Name:</span> {student.name}</p>
              <p><span className="font-medium">Age:</span> {student.age}</p>
              <p><span className="font-medium">Mark:</span> {student.mark}</p>
              <p><span className="font-medium">Dept:</span> {student.dept}</p>

              <p>
                <span className="font-medium">Placed:</span>{" "}
                <span className={`font-semibold ${student.placed ? "text-green-600" : "text-red-500"}`}>
                  {student.placed ? "Yes" : "No"}
                </span>
              </p>
            </div>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold disabled:bg-red-400"
            >
              {deleting ? "Deleting..." : "Confirm Delete"}
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default DeleteStudent;
