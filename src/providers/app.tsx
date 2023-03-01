import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";


const ErrorFallback = () => {
  return (
    <div>
      <h2>Ooops, something went wrong</h2>
      <button>refresh</button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={ // TODO: need to be change
        <div>
          <p>Loading...</p>
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Router>{children}</Router>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}


export default AppProvider;