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
        <div className="flex items-center justify-center h-full w-full text-red-600 bg-red-50 p-6 min-h-[300px] rounded-xl border border-red-100">
          <div className="flex flex-col items-center text-center max-w-md">
            <AlertTriangle className="mb-4 text-red-500" size={48} />
            <h3 className="font-bold text-xl mb-2 text-gray-800">表示エラーが発生しました</h3>
            <div className="bg-white p-4 rounded-lg border border-red-200 w-full mb-6 shadow-sm">
                <p className="text-sm text-red-600 break-all font-mono text-left">
                {this.state.error?.message || '不明なエラー'}
                </p>
            </div>
            <button 
              onClick={this.handleReset}
              className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm hover:shadow-md"
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
