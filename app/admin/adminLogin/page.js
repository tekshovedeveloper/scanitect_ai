"use client";
import React, { useState } from "react";
import { postRequest } from "@/utils/api";
import { useRouter } from "next/navigation";
// import ProtectedPageLayout from '@/app/admin/layout';




export default function AdminSignIn() {
const router = useRouter();
const [formData, setFormData] = useState({ email: "", password: "" });
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
e.preventDefault();
setError("");
setLoading(true);



try {
  // Use your admin endpoint if you have it: 'auth/admin/login'
  const res = await postRequest("auth/login", formData);
console.log("the res is",res)
  if (res?.statusCode === 200) {
    // If using a single endpoint, verify role
    
    const role =
      res?.data?.userData?.role ||
      res?.user?.role ||
      res?.role ||
      res?.data?.role;
      console.log("the role is", role)

    if ((role && role !== "admin") || !role ) {
      console.log("the role is not admin")
      setError("You are not authorized to access the admin dashboard.");
      return;
    }

    // Optional: store token/role
    // localStorage.setItem("token", res?.data?.token);
    // localStorage.setItem("role", role || "admin");

    router.push("/admin/download");
  } else {
    setError(res?.message || "Login failed");
  }
} catch (err) {
  setError(err?.message || "Something went wrong");
} finally {
  setLoading(false);
}


};

return (
  // <ProtectedPageLayout>
<div style={{ height: "90vh", width: "95vw" }} className="flex flex-wrap content-center justify-center">
<form className="w-96" onSubmit={handleSubmit}>
<h1 className="text-2xl font-bold text-center mb-4">Admin Sign In</h1>


    <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
      Username
    </label>
    <input
      type="text"
      id="email"
      name="email"
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      value={formData.email}
      onChange={handleChange}
      autoComplete="username"
    />

    <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
      Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      value={formData.password}
      onChange={handleChange}
      autoComplete="current-password"
    />

    {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

    <button
      type="submit"
      disabled={loading}
      className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Logging in..." : "Log In"}
    </button>
  </form>
</div>
// </ProtectedPageLayout>

);
}