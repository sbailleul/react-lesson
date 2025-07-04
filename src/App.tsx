import "@/App.scss";
import { ThemeProvider } from "@/shared/theme/ThemeContext";
import React from "react";
type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};
class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state: { hasError: boolean };
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log the error or send it to a monitoring service
    fetch("http://fake-api/api/v1/error", {
      method: "POST",
      body: JSON.stringify({ error: error.message, info: info.componentStack }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function ErrorThrowingComponent() {
  throw new Error("Test error");
  return <div>Error component</div>;
}
export function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
