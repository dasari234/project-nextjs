import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">401 - Unauthorized</h1>
      <p className="mt-2 text-gray-600">
        You do not have permission to view this page.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
