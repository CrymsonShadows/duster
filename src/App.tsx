import { useState } from 'react'

export function App() {
  const [tabTitle, setTabTitle] = useState<string>('')

  const getCurrentTab = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    setTabTitle(tab?.title || 'Unknown tab')
  }

  return (
    <div style={{ padding: '16px', minWidth: '240px' }}>
      <h2>React Chrome Extension</h2>
      <button onClick={getCurrentTab}>Get Current Tab</button>
      {tabTitle && <p><strong>Tab:</strong> {tabTitle}</p>}
    </div>
  )
}

export default App