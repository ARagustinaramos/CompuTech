import React, { useState } from 'react';
import axios from 'axios';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase/firebase';

const signUpWithEmail = async (email, password, displayName) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    await user.updateProfile({ displayName });
    const token = await user.getIdToken();
    const userInfo = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    await sendUserInfoToBackend(userInfo, token);
  } catch (error) {
    console.error('Error signing up with email:', error);
  }
};

const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const token = await user.getIdToken();
    const userInfo = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    await sendUserInfoToBackend(userInfo, token);
  } catch (error) {
    console.error('Error signing in with email:', error);
  }
};

const sendUserInfoToBackend = async (userInfo, token) => {
  try {
    await axios.post('http://localhost:3001/users', userInfo, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error sending user info to backend:', error);
  }
};

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpWithEmail(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export { SignUpForm, SignInForm };
