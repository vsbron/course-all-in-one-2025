import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  // Creating the state for loading
  const [isLoading, setIsLoading] = useState(true);

  // Creating the useEffect function
  useEffect(() => {
    // Change the isLoading state after 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup function
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Returned conditional JSX
  if (isLoading) {
    return <h2>Loading...</h2>;
  } else return <h2>Multiple Returns Basics</h2>;
};

export default MultipleReturnsBasics;
