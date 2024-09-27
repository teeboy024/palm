import { useEffect, useState } from "react";

export const NameBanner = ({ setName, submitted }) => {
  const [localName, setLocalName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setLocalName(storedName);
      setName(storedName);
      submitted(true);
    }
  }, [setName, submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localName.trim()) {
      localStorage.setItem("userName", localName);
      setName(localName);
      submitted(true);
    }
  };

  if (submitted) {
    return null;
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <img src="src/assets/palmpay.png" className="ml-10" />
        <h2
          className="text-xl font-bold mb-4 ml-10 "
          style={{ color: "#6431ff" }}
        >
          <b>Welcome to Palmpay</b>
        </h2>
        <form onSubmit={handleSubmit} action="" className="space-y-4">
          <input
            type="text"
            placeholder="Write Your Name here.."
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md hover:bg-#6431ff-500 focus: outline-none focus: ring-2 focus: ring-#6431ff-200"
          />

          <button
            type="submit"
            style={{ backgroundColor: "#6431ff" }}
            className="w-full py-2 bg-blue-400 text-white "
          >
            <b>ENTER</b>
          </button>
        </form>
      </div>
    </div>
  );
};
