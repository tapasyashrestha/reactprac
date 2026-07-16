function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center">
          LOGIN FORM
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300">
          Submit
        </button>

        <p className="text-gray-500 text-center text-sm">
          Don't have an account?
          <span className="text-blue-500 font-medium cursor-pointer hover:underline">
            {" "}Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;