import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import ContentArea from './components/ContentArea/ContentArea'
import './App.css'

// Import course data
import { courses } from './data/courses'

function App() {
  // Theme state - check localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  // Sidebar state for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Current active subject
  const [activeSubject, setActiveSubject] = useState('ai')

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  // Get current course data
  const currentCourse = courses[activeSubject]

  return (
    <div className="app">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        toggleSidebar={toggleSidebar}
        subjects={Object.values(courses)}
        activeSubject={activeSubject}
        setActiveSubject={setActiveSubject}
      />

      <div className="app-body">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          topics={currentCourse?.topics || []}
          subjectId={activeSubject}
        />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<ContentArea subjectId={activeSubject} />} />
            <Route path="/:subjectId" element={<ContentArea />} />
            <Route path="/:subjectId/:topicId" element={<ContentArea />} />
            <Route path="/:subjectId/:topicId/:subtopicId" element={<ContentArea />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
