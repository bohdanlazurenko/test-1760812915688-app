export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'system-ui',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
          🚀 AutonomiX Test
        </h1>
        <p style={{ fontSize: '1.5rem' }}>
          Создано автоматически! Время: 2025-10-18T18:41:55.688Z
        </p>
      </div>
    </div>
  );
}