import React, { useState, useRef } from 'react';

const Login: React.FC = () => {
  const [error, setError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailValue = emailRef.current?.value || '';
    const passwordValue = passwordRef.current?.value || '';

    if (!emailValue || !passwordValue) {
      setError('Please fill in all fields');
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setError('Please enter a valid email address');
    } else if (passwordValue.length < 8) {
      setError('Password should have at least 8 characters');
    } else {
      // Perform login functionality here
      console.log('Logging in...');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="p-6 bg-white rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input ref={emailRef} type="email" id="email" className="form-input mt-1 block w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input ref={passwordRef} type="password" id="password" className="form-input mt-1 block w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
