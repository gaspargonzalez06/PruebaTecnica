import { useEffect, useState } from 'react'
import './App.css'

const apiUrl = import.meta.env.VITE_API_URL ?? '/api/health'

function App() {
  const [status, setStatus] = useState({ loading: true, error: null, data: null })

  useEffect(() => {
    const controller = new AbortController()

    const loadStatus = async () => {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Backend respondió con ${response.status}`)
        }

        const data = await response.json()
        setStatus({ loading: false, error: null, data })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStatus({ loading: false, error: error.message, data: null })
        }
      }
    }

    loadStatus()

    return () => controller.abort()
  }, [])

  return (
    <main className="container">
      <h1>Prueba técnica</h1>
      <p>Frontend React consumiendo backend ASP.NET Core</p>

      {status.loading && <p className="info">Consultando API...</p>}

      {status.error && (
        <p className="error">No se pudo conectar con el backend: {status.error}</p>
      )}

      {status.data && (
        <section className="card" aria-live="polite">
          <h2>Estado del backend</h2>
          <p>
            <strong>Mensaje:</strong> {status.data.message}
          </p>
          <p>
            <strong>UTC:</strong> {new Date(status.data.timestampUtc).toLocaleString()}
          </p>
        </section>
      )}
    </main>
  )
}

export default App
