import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import { store } from './redux/store'
import Favorites from './components/Pages/Favorites'
import History from './components/Pages/History'
import Logo from './components/Pages/Logo'
import NotFound from './components/Pages/NotFound'
import Search from './components/Pages/Search'
import Signin from './components/Pages/Signin'
import Signup from './components/Pages/Signup'
import Project from './components/Pages/Project'
import { ThemeProvider } from './context/ThemeContext'
import MainLayout from './layouts/MainLayout'
import { FavoritesProvider } from './context/FavoritesContext'
import './App.css'
import { loadUser } from './redux/slices/userSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <Provider store={store}>
      <ThemeProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<MainLayout />}>
                  <Route index element={<Logo />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="project/:id" element={<Project />} />
                  <Route path="history" element={<History />} />
                  <Route path="search" element={<Search />} />
                  <Route exact path="signin" element={<Signin />} />
                  <Route exact path="signup" element={<Signup />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </div>
          </BrowserRouter>
        </FavoritesProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
