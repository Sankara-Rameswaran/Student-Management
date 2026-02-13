import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateStudent() {

  const navigate = useNavigate();

  const [rollNo, setRollNo] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  // SEARCH STUDENT
  const handleSearch = async () => {
    if (!rollNo) {
      alert("Enter Roll No");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setStudent(null);

      const res = await axios.get(`http://localhost:8080/api/students/${rollNo}`);
      setStudent(res.data);

    } catch (err) {
      if (err.response && err.response.status === 404)
        setError("Student not found");
      else
        setError("Cannot connect to server");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setStudent(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // UPDATE STUDENT
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      await axios.put(
        `http://localhost:8080/api/students/${rollNo}`,
        student
      );

      alert("Student updated successfully");
      navigate("/view");

    } catch (err) {
      alert("Update failed");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Update Student
        </h2>

        {/* SEARCH */}
        <div className="flex gap-4 mb-6">
          <input
            type="number"
            placeholder="Enter Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        {/* UPDATE FORM */}
        {student && (
          <form onSubmit={handleUpdate} className="space-y-4">

            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />

            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />

            <input
              type="number"
              name="mark"
              value={student.mark}
              onChange={handleChange}
              placeholder="Mark"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />

            <input
              type="text"
              name="dept"
              value={student.dept}
              onChange={handleChange}
              placeholder="Department"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isPlaced"
                checked={student.isPlaced}
                onChange={handleChange}
              />
              Placed
            </label>

            <button
              type="submit"
              disabled={updating}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:bg-green-300 font-semibold"
            >
              {updating ? "Updating..." : "Update Student"}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}

export default UpdateStudent;
