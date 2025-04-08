import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Dashboard() {
  const [standards, setStandards] = useState([]);
  const [stdInput, setStdInput] = useState("");
  const { logout, user } = useAuth0();
  console.log("userr",user);
  useEffect(() => {
    const savedData = localStorage.getItem("academic-records");
    if (savedData) {
      setStandards(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("academic-records", JSON.stringify(standards));
  }, [standards]);

  const addStandard = () => {
    if (stdInput.trim() !== "") {
      setStandards([...standards, { std: stdInput, subjects: [] }]);
      setStdInput("");
    }
  };

  const deleteStandard = (index) => {
    const updated = [...standards];
    updated.splice(index, 1);
    setStandards(updated);
  };

  const addSubject = (stdIndex) => {
    const updated = [...standards];
    updated[stdIndex].subjects.push({ name: "", marks: "", total: 100 });
    setStandards(updated);
  };

  const deleteSubject = (stdIndex, subjIndex) => {
    const updated = [...standards];
    updated[stdIndex].subjects.splice(subjIndex, 1);
    setStandards(updated);
  };

  const handleSubjectChange = (stdIndex, subjIndex, field, value) => {
    const updated = [...standards];
    updated[stdIndex].subjects[subjIndex][field] = value;
    setStandards(updated);
  };

  const handleSubmit = () => {
    console.log("Final Submitted Data:", standards);
    alert("All marks saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-100 p-6 font-sans animate-fade-in">
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50 left-0  ">
        <div className="text-blue-600 font-bold text-xl flex items-center select-none">
          <span className="mr-3"></span> Career Guide AI
        </div>
        <div className="text-2xl font-bold text-gray-900 animate-fade-in tracking-wide">
          Welcome,<span className="text-indigo-600">{user.name}</span>{" "}
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: "http://localhost:5173/",
              },
            })
          }
        >
          LogOut
        </button>
      </nav>

      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-b-3xl shadow-xl pt-20">
        <div className="flex justify-between items-center animate-fade-in-down">
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide">
              Academic Records
            </h1>
            <p className="text-sm opacity-80 mt-1">
              Track your academic performance
            </p>
          </div>
          <div className="bg-indigo-700 px-4 py-2 rounded-full text-sm hidden md:inline-block">
            🎓 {standards.length} Standard{standards.length !== 1 && "s"} Added
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-br from-gray-100 to-indigo-100 shadow-xl p-6 mt-10 rounded-xl max-w-xl mx-auto backdrop-blur-md border border-indigo-200 animate-fade-in-up">
        <label className="block font-semibold mb-2 text-indigo-800">
          Enter Standard Number
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g., 10"
            value={stdInput}
            onChange={(e) => setStdInput(e.target.value)}
            className="border border-indigo-300 rounded-lg px-4 py-2 w-full shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <button
            onClick={addStandard}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg shadow-md transition transform hover:scale-105"
          >
            Add
          </button>
        </div>
      </div>

      {standards.map((std, stdIdx) => (
        <div
          key={stdIdx}
          className="max-w-3xl mx-auto mt-10 animate-fade-in-up"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-1">
              Standard {std.std}
            </h2>
            <button
              onClick={() => deleteStandard(stdIdx)}
              className="text-red-600 hover:text-red-800 font-semibold text-sm"
            >
              ❌ Delete Standard
            </button>
          </div>

          {std.subjects.map((subject, subjIdx) => {
            const percent =
              subject.total && subject.marks !== ""
                ? Math.min(
                    100,
                    Math.round(
                      (parseFloat(subject.marks) / parseFloat(subject.total)) *
                        100
                    )
                  )
                : 0;

            return (
              <div
                key={subjIdx}
                className="bg-white/80 p-6 mb-6 rounded-xl shadow-lg border-l-4 border-indigo-500 transition-all duration-300 backdrop-blur-md hover:shadow-2xl"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg mb-4 text-indigo-600">
                    Subject #{subjIdx + 1}
                  </h3>
                  <button
                    onClick={() => deleteSubject(stdIdx, subjIdx)}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold"
                  >
                    🗑️ Delete
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Subject name"
                    value={subject.name}
                    onChange={(e) =>
                      handleSubjectChange(
                        stdIdx,
                        subjIdx,
                        "name",
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-400 transition"
                  />
                  <input
                    type="number"
                    placeholder="Marks Obtained"
                    value={subject.marks}
                    onChange={(e) =>
                      handleSubjectChange(
                        stdIdx,
                        subjIdx,
                        "marks",
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-400 transition"
                  />
                  <input
                    type="number"
                    placeholder="Total Marks"
                    value={subject.total}
                    onChange={(e) =>
                      handleSubjectChange(
                        stdIdx,
                        subjIdx,
                        "total",
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-400 transition"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-700 mb-1">Progress</p>
                  <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-full text-white text-xs flex items-center justify-center transition-all duration-700 ease-in-out"
                      style={{ width: `${percent}%` }}
                    >
                      {percent}%
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={() => addSubject(stdIdx)}
            className="flex items-center gap-2 mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg shadow-md transition transform hover:scale-105"
          >
            ➕ Add Subject
          </button>
        </div>
      ))}

      {standards.length > 0 && (
        <div className="mt-12 p-6 border-4 border-dashed border-indigo-300 bg-white/60 backdrop-blur-md rounded-xl max-w-3xl mx-auto shadow-lg animate-fade-in-up">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl shadow-xl w-full text-lg font-bold tracking-wide transition transform hover:scale-105"
          >
            Save All Marks
          </button>
        </div>
      )}
    </div>
  );
}
