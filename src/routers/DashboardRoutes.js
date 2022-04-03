import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { DCScreen } from "../components/dc/DCScreen";
import { HeroScreen } from "../components/hero/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/navbar/Navbar";


export const DashboardRoutes = () => {
  return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='marvel' element={<MarvelScreen />} />
            <Route exact path='dc' element={<DCScreen />} />
            <Route exact path='search' element={<SearchScreen />} />
            <Route exact path='hero/:id' element={<HeroScreen />} />
            <Route exact path='/' element={<MarvelScreen />} />
          </Routes>
        </div>
      </>
  )
}