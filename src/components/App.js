import "../stylesheet/reset.scss";
import "../stylesheet/App.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getApi from "../services/Api";
import ls from "../services/LocalStorage";
import Header from "./Header/Header";
import Home from "./Home-Page/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Footer from "./Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [data, setData] = useState([]);
  const [page , setPage ] = useState("0");
  const [clickId, setClickId] = useState(null);
  const [isLocation, setIsLocation] = useState(ls.get("/"));
  const [filterName, setFilterName] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [isLoading , setIsLoading] = useState(false);

  useEffect(() => {
    getApi().then((data) => {
      setIsLoading(true)
      setData(data);
      setIsLoading(false)
    });
  }, []);

  useEffect(() =>{
    clickProgramsLocation(window.location.hash)
  }, [isLocation])

  useEffect(()=>{
    ls.set("location", isLocation);
  },[isLocation])

  const clickProgramsLocation = (hash) => {
    setIsLocation(hash);
  };

  const handleClickDesc = (id) => {
    setClickId(id);
  };

  const handlerChangePage = (id) =>{
    setPage(id)
  };

  const filterhandle = (program) => {
    if (program.key === "name") {
      setFilterName(program.value);
    } else if (program.key === "year") {
      setFilterYear(program.value);
    }
  };

   const filtered = (programs, data) => data.filter(item => item.programType === programs);

  const filteredPrograms = data
    .filter((item) =>
    item.title.toLowerCase().includes(filterName.toLowerCase())
  )
  .filter((item) => filterYear !== "" ? parseInt(item.releaseYear) === parseInt(filterYear) : item.releaseYear);
  ;

  return (
    <>
      <Header
        isLocation={isLocation}
        filterName={filterName}
        filterhandle={filterhandle}
        filterYear={filterYear}
        programsLocation={clickProgramsLocation} 
      />
      <main>
      <Switch>
        <Route exact path="/">
          <Home programsLocation={clickProgramsLocation} />
        </Route>
        <Route path="/movies" exact>
          <Movies
            data={filtered("movie", filteredPrograms)}
            handleClickDesc={handleClickDesc}
            click={clickId}
            page={page}
            handlerChangePage={handlerChangePage}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/series" exact>
          <Series
            data={filtered("series", filteredPrograms)}
            handleClickDesc={handleClickDesc}
            click={clickId}
            page={page}
            handlerChangePage={handlerChangePage}
            isLoading={isLoading}
          />
        </Route>
        <Route component={NotFoundPage}/>
      </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
