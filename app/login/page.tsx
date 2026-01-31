import Link from 'next/link';

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <p className="mb-6">Use the main login page.</p>
        <Link className="text-blue-600 underline" href="/">
          Go to /
        </Link>
      </div>
    </main>
  );
}
