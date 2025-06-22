"use client";

import { useState, useRef } from 'react';
import { upload } from '@imagekit/next';

const UploadComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    const files = fileInputRef.current?.files;
    if (!files || files.length === 0) {
      alert("Por favor, selecciona al menos un archivo para subir.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // 1. Obtener parámetros de autenticación del backend
      const authResponse = await fetch('/api/auth');
      if (!authResponse.ok) {
        throw new Error(`Error de autenticación: ${authResponse.statusText}`);
      }

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const authResponse = await fetch('/api/auth');
        const authParams = await authResponse.json();

        const result = await upload({
            ...authParams,
            file,
            fileName: file.name,
            useUniqueFileName: true,
            folder: "/bodas/fotos_invitados",
            onProgress: (progress) => {
            const percent = progress.total
                ? Math.round((progress.loaded / progress.total) * 100)
                : 0;
            console.log(`Progreso (${file.name}):`, percent + "%");
            }
        });

        console.log('Archivos subidos:', result);
        }
        alert("✅ Subida exitosa:");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } catch (err) {
      console.error('Error en la carga:', err);
      setError('La carga falló. Por favor, inténtelo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="upload-container flex flex-col items-center space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        disabled={isLoading}
        multiple // 👈 Esto permite seleccionar varios archivos
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
      <button
        onClick={handleUpload}
        disabled={isLoading}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-400"
      >
        {isLoading ? 'Subiendo...' : 'Subir Archivos'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default UploadComponent;
