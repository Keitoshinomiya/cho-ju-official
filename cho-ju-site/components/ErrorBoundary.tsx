'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex items-center justify-center h-full w-full text-shu bg-kinari-deep p-6 min-h-[300px] border border-hai">
          <div className="flex flex-col items-center text-center max-w-md">
            <AlertTriangle className="mb-4 text-shu" size={48} />
            <h3 className="font-serif text-xl mb-2 text-sumi">表示エラーが発生しました</h3>
            <div className="bg-kinari p-4 border border-hai w-full mb-6 shadow-sm">
                <p className="text-sm text-shu break-all font-mono text-left">
                {this.state.error?.message || '不明なエラー'}
                </p>
            </div>
            <button
              onClick={this.handleReset}
              className="flex items-center px-6 py-3 bg-kinari border border-hai text-sm font-medium text-sumi hover:border-sumi transition-all"
            >
              <RefreshCw size={18} className="mr-2" /> 再読み込み
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
