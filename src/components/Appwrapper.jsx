import { useState, useEffect } from "react";

function AppWrapper({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1406);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1406);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen px-4 text-center bg-gray-50">
        <div>
          <h1 className="text-xl md:text-2xl  font-bold mb-4">
            Oops! Please use it on large screens
          </h1>
          <p className=" md:text-lg text-gray-700">
            For the best experience, please open this website on a laptop or
            desktop.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default AppWrapper;
