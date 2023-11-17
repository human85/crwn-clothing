import { Suspense, lazy } from 'react'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'
import Shop from './routes/shop/shop.component'

const Authentication = lazy(() => import('./routes/authentication/authentication.component'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="auth"
          element={
            <Suspense fallback={<div>加载中...</div>}>
              <Authentication />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
