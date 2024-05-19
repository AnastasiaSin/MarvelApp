import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import { lazy, Suspense } from "react";
import Spinner from "../Spinner/Spinner";

const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsListPage = lazy(() => import('../pages/ComicsListPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage/SingleComicPage'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))

const App = () => {

    return (
        <Suspense fallback={<Spinner/>}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />

                        <Route path="comics" element={<LayoutComics />}>
                            <Route index element={<ComicsListPage />} />
                            <Route path=":comicId" element={<SingleComicPage />} />
                        </Route>

                        <Route path="*" element={<ErrorPage />} />
                    </Route>

                </Routes>

            </Router>
        </Suspense>

    )
}

const Layout = () => {
    return (
        <div className="app">
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}


const LayoutComics = () => {
    return (
        <Outlet />
    )
}

export default App;