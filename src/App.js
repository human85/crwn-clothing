import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'

function Shop() {
  return <div>this is shop</div>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
