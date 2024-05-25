let API_URL = 'https://computechback.onrender.com'; // URL del backend en Render por defecto

if (process.env.NODE_ENV === 'development') {
    API_URL = process.env.REACT_APP_LOCAL_BACKEND_URL || 'https://computechback.onrender.com';
}

export default API_URL;