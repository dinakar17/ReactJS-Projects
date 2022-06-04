import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");

  const URL = "http://localhost:5000/";

  const handleSubmit = async (e) => {
    e.preventDefault();
   const response = await axios.post(URL, {
      email: email,
    })
    console.log(response);
    setEmail("");
  };
  return (
    <div className="flex h-screen min-h-screen items-center justify-center">
      <div className="flex flex-col gap-5 p-10 bg-blue-100/50">
        <h1 className="text-center text-2xl">SIGN UP FOR OUR NEWSLETTER</h1>
        <p className="text-lg">
          To get updated on latest technology news, trends and many more....
        </p>
        <form className="flex gap-2  h-12" onSubmit={handleSubmit}>
          <input
            name="recipient"
            type="email"
            value={email}
            required
            placeholder="Enter your email here..."
            className="basis-3/4 border-gray-400 border-2 rounded-full text-xl pl-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-600 rounded-full basis-1/4 text-xl text-white">
            I'm in
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
