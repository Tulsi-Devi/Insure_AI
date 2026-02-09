import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email, password
    });

    localStorage.setItem("token", res.data.token);
    window.location = res.data.role === "admin"
      ? "/admin"
      : "/dashboard";
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-xl w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <input className="input" placeholder="Email"
          onChange={e => setEmail(e.target.value)} />
        <input className="input mt-2" type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
        <button onClick={login} className="btn mt-4 w-full">Login</button>
      </div>
    </div>
  );
}
