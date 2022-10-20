import { Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Form from './pages/Form'
import NotFound from './components/NotFound'
import Preview from './pages/Preview'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/preview/:slug" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
