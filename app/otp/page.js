"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { postRequest } from "@/utils/api";

export default function OtpPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email"); // from signup redirect

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes = 300 sec

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};


  const handleVerify = async (e) => {
    e.preventDefault();

    if (timeLeft <= 0) {
      alert("OTP expired! Please request a new one.");
      return;
    }

    const response = await postRequest("v1/users/verify-otp", {
      email,
      otp,
    });

    if (response.statusCode === 200) {
      alert("OTP verified successfully!");
      router.push("/signin");
    } else {
      alert("Invalid OTP. Try again!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleVerify}
        className="p-6 border border-gray-300 rounded-lg"
      >
        <h1 className="text-xl font-bold text-center mb-4">Verify OTP</h1>
        <p className="mb-2">We sent an OTP to <b>{email}</b></p>
        <p className="mb-4 text-red-600">Expires in {formatTime(timeLeft)}</p>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="border p-2 rounded w-full mb-4 text-black"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded font-semibold hover:bg-blue-600"
        >
          Verify
        </button>
      </form>
    </div>
  );
}