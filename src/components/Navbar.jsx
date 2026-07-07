"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser.email);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      setLoginOpen(false);
      setRegisterOpen(true);
      return;
    }

    const registeredUser = JSON.parse(savedUser);

    if (
      registeredUser.email === loginData.email &&
      registeredUser.password === loginData.password
    ) {
      localStorage.setItem("loggedIn", "true");
      setUser(registeredUser.email);
      setLoginOpen(false);

      router.push("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(registerData));

    alert("Registration Successful");

    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Cresthaven
            <span className="text-green-400"> Stays</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-white">
            <li><a href="#home">Home</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setLoginOpen(true)}
              className="px-4 py-2 border border-green-400 rounded-lg text-white"
            >
              Login
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="flex flex-col p-6 gap-4 text-white">
              <a href="#home">Home</a>
              <a href="#rooms">Rooms</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>

              <button
                onClick={() => setLoginOpen(true)}
                className="border border-green-400 rounded-lg py-2"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </header>

      {loginOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 mb-3 rounded"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-3 rounded"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded"
              >
                Login
              </button>
            </form>

            <p className="mt-4 text-center">
              No Account?
              <button
                onClick={() => {
                  setLoginOpen(false);
                  setRegisterOpen(true);
                }}
                className="text-blue-500 ml-2"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      )}

      {registerOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-2xl font-bold mb-4">Register</h2>

            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-2 mb-3 rounded"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 mb-3 rounded"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-3 rounded"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded"
              >
                Register
              </button>
            </form>

            <p className="mt-4 text-center">
              Already have an account?
              <button
                onClick={() => {
                  setRegisterOpen(false);
                  setLoginOpen(true);
                }}
                className="text-blue-500 ml-2"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}