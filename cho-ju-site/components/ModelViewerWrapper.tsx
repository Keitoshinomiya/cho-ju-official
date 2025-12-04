'use client';

import dynamic from 'next/dynamic';

// ModelViewerを動的にインポートし、SSRを無効化する
// この処理をClient Component内で行うことでエラーを回避する
const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full w-full bg-gray-100 rounded-xl">
        <div className="text-center">
            <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-gray-500 text-sm font-medium">3Dモデルを読み込み中...</p>
        </div>
    </div>
  ),
});

interface ModelViewerWrapperProps {
  path: string;
  height?: string;
  scale?: number;
}

export default function ModelViewerWrapper(props: ModelViewerWrapperProps) {
  return <ModelViewer {...props} />;
}
