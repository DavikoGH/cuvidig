import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  // @ts-ignore
  state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-900 text-white text-center">
          <div className="w-16 h-16 mb-4 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-3xl font-bold">
            !
          </div>
          <h1 className="text-2xl font-bold mb-2">Ocurrió un problema temporal</h1>
          <p className="text-slate-400 text-sm max-w-md mb-6">
            Hemos registrado el incidente. Puedes volver al inicio de forma segura.
          </p>
          <button
            onClick={() => {
              // @ts-ignore
              this.setState({ hasError: false, error: null });
              window.location.href = '/';
            }}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all"
          >
            Volver al Inicio
          </button>
        </div>
      );
    }

    // @ts-ignore
    return this.props.children;
  }
}

