import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Please make sure your password match!")
    } else {
      setError("")
      alert("Registration successful")
      // logika lanjut ke halaman berikutnya
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-600 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-pink-600 text-white">
        <h1 className="text-xl font-semibold text-center mb-1">Create your account</h1>
        <p className="text-center text-sm mb-6">Hello! Please set up your new account</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-white text-black placeholder-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 rounded bg-white text-black placeholder-gray-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-white text-black placeholder-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-2 p-2 rounded bg-white text-black placeholder-gray-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-300 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-white text-[#e6007e] font-semibold py-2 rounded hover:bg-gray-100"
        >
          Continue
        </button>

        <p className="text-xs text-center mt-3">
          By clicking continue, you agree to our <span className="underline font-semibold">Terms of Service</span> and <span className="underline font-semibold">Privacy Policy</span>
        </p>
      </form>
    </div>
  )
}
