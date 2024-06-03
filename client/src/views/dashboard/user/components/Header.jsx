import { useEffect, useState } from "react";
import { useFirebase } from "../../../../firebase/firebase"; // Importa el hook useFirebase
import Spinner from "../../../../components/spinner/Spinner";

const Header = () => {
  const { auth } = useFirebase();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (isLoading) {
    return <Spinner className=''/>;
  }

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl text-gray-600 dark:text-gray-100 md:text-3xl font-bold dark:bg-gray-900 dark:border-gray-900">
        Hola, <span>{user.displayName}</span>
      </h1>
    </header>
  );
};

export default Header;
