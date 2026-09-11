"use client";

import { FormEvent, useState } from "react";

export function PortfolioLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("That password did not unlock this portfolio.");
        return;
      }

      window.location.reload();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-gray-900 dark:text-[#ededed] relative z-10 bg-transparent">
      <div className="w-full max-w-md border border-gray-300 dark:border-gray-800 rounded-lg p-8 border-glow animate-in">
        <div className="mb-8">
          <p className="text-sm text-green-500 dark:text-green-400 mb-3">private portfolio</p>
          <h1 className="text-3xl font-bold mb-3">A small door first.</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Enter the access password to continue to abhishrestha&apos;s portfolio.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="portfolio-password" className="sr-only">Portfolio password</label>
          <input
            id="portfolio-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Access password"
            autoComplete="current-password"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 outline-none focus:border-green-500 dark:focus:border-green-400 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-500 dark:bg-green-400 px-4 py-3 font-semibold text-white dark:text-black hover:bg-green-600 dark:hover:bg-green-500 transition-colors disabled:opacity-60"
          >
            {loading ? "Checking..." : "Unlock portfolio"}
          </button>
          {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
        </form>
      </div>
    </main>
  );
}