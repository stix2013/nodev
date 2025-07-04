"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookie } from 'cookies-next';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const laravelSession = getCookie('laravel_session');
      if (laravelSession) {
        try {
          // Verify the session with the backend by calling a protected route
          await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            withCredentials: true,
          });
          router.push("/dashboard");
        } catch (error) {
          // If the session is invalid, do nothing and let the user stay on the login page
          console.error("Session verification failed:", error);
        }
      }
    };
    checkLoginStatus();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Ensure CSRF cookie is set
      await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/sanctum/csrf-cookie`,
        {
          withCredentials: true,
        }
      );

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        router.push("/dashboard"); // Redirect to a dashboard or home page on successful login
      }
    } catch (err: unknown) {
      if (
        axios.isAxiosError(err) &&
        err.response &&
        err.response.status === 422
      ) {
        setError("Invalid credentials. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
      console.error("Login error:", err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          width: "400px",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}
        >
          Login
        </h2>
        {error && (
          <p
            style={{ color: "red", textAlign: "center", marginBottom: "20px" }}
          >
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "8px", color: "#555" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "8px", color: "#555" }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
