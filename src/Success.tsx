import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom"; // or `next/link` if you're using Next.js

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Message Sent!
        </h1>
        <p className="text-slate-600 mb-6">
          Thank you for reaching out. I’ll get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
}
