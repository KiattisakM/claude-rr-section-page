import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener">
            <img src={viteLogo} className="h-16 w-16 hover:opacity-80 transition-opacity" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener">
            <img src={reactLogo} className="h-16 w-16 hover:opacity-80 transition-opacity animate-spin" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Vite + React + Tailwind
        </h1>
        
        <div className="text-center mb-6">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            count is {count}
          </button>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-gray-600">
            Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/app.tsx</code> and save to test HMR
          </p>
          <p className="text-sm text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-green-600 font-semibold">✅ Tailwind CSS is working!</p>
        <p className="text-sm text-gray-500 mt-2">
          This layout uses Tailwind utility classes
        </p>
      </div>
    </div>
  )
}

export default App
