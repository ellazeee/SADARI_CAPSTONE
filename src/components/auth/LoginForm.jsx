import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/Logo.png";
import axios from 'axios'; // Import axios

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => { // HAPUS typing React.FormEvent
    e.preventDefault();
  
    try {
      // Kirim data ke backend
      // const response = await axios.post('http://localhost:5000/api/login', {
      //   email,
      //   password
      // });

      navigate('/home'); // Redirect setelah login sukses
    } catch (error) {
      if (error.response) {
        console.error("Login gagal:", error.response.data.message);
        alert("Login gagal: " + error.response.data.message);
      } else {
        console.error("Error jaringan:", error.message);
        alert("Tidak bisa terhubung ke server");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sadari-primary p-4">
      <div className="w-full max-w-sm space-y-2">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <img 
              src={logo}
              alt="Sadari Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        <div className="text-center">          
          <h2 className="text-2xl font-bold text-white">Welcome back</h2>
          <p className="text-white/80 text-sm">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 text-white placeholder:text-white/60 border-none"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/20 text-white placeholder:text-white/60 border-none"
            required
          />
          <Button 
            type="submit"
            className="w-full bg-white text-sadari-primary hover:bg-white/90"
          >
            Login
          </Button>
        </form>

        <div className="text-center text-white/80 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
