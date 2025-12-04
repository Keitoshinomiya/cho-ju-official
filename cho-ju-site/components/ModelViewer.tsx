'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import ThreeModel from './ThreeModel';
import { Loader } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

interface ModelViewerProps {
  path: string;
  scale?: number;
  height?: string;
}

export default function ModelViewer({ path, scale = 1, height = '400px' }: ModelViewerProps) {
  // ステートベースのエラーハンドリングはErrorBoundaryに任せるため削除

  return (
    <div className="w-full relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-inner" style={{ height }}>
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-gray-600 shadow-sm flex items-center border border-gray-100">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        360° VIEW
      </div>
      
      <ErrorBoundary>
        <Suspense fallback={
            <div className="flex items-center justify-center h-full w-full text-gray-500 bg-gray-100">
            <div className="flex flex-col items-center animate-pulse">
                <Loader className="animate-spin mb-3 text-indigo-500" size={32} />
                <span className="text-sm font-medium tracking-wide">Loading 3D Model...</span>
            </div>
            </div>
        }>
            <Canvas 
            shadows 
            dpr={[1, 2]} 
            camera={{ position: [0, 0, 4], fov: 50 }}
            className="cursor-move"
            >
            <Stage 
                environment="city" 
                intensity={0.6} 
                contactShadow={true} 
                shadows 
                adjustCamera={0.4}
            >
                <ThreeModel path={path} scale={scale} autoRotate={false} />
            </Stage>
            
            <OrbitControls 
                autoRotate 
                autoRotateSpeed={1.5}
                enableZoom={true} 
                minDistance={0.5} 
                maxDistance={10}
                makeDefault 
            />
            </Canvas>
        </Suspense>
      </ErrorBoundary>
      
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <p className="text-xs font-medium text-gray-500 bg-white/90 inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md shadow-sm border border-gray-100">
           ドラッグで回転 / スクロールで拡大
        </p>
      </div>
    </div>
  );
}

