
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-4">
      <div className="text-center max-w-md">
        <div className="inline-block bg-white p-4 rounded-full mb-8 animate-float">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-soil-800">404</h1>
        <p className="text-xl text-soil-600 mb-8">
          Oops! Parece que esta página não foi encontrada.
        </p>
        <Button className="mb-8" onClick={() => window.location.href = "/"}>
          Voltar ao Início
        </Button>
        <p className="text-sm text-soil-500">
          Se você acredita que isso é um erro, entre em contato com nosso suporte.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
