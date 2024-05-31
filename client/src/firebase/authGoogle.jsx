import axios from 'axios';
import { auth, googleProvider } from '../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const token = await user.getIdToken();
    const userInfo = {
      mail: user.email,
      name: user.displayName,
      rol: true
    };
    await sendUserInfoToBackend(userInfo, token);
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

const sendUserInfoToBackend = async (userInfo, token) => {
  try {
    console.log('User Info:', userInfo); // Agregar un console.log para verificar userInfo
    console.log('Token:', token); // Agregar un console.log para verificar el token
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

const SignInButton = () => (
  <button onClick={signInWithGoogle}>Sign in with Google</button>
);

export default SignInButton;
