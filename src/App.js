import './App.css'
import { Home, Blog, About } from './pages'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom'

const Root = () => {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <Link to={'/Blog'}>Blog</Link>
      <Link to={'/About'}>About</Link>
      <div>
        <Outlet />
      </div>
    </>
  )
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <RouterProvider router={router} />
      </header>
    </div>
  )
}

export default App
