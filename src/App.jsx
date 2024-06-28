import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useWeather } from "./Context/Weather";
import { useEffect } from "react";
import "./App.css";

function App() {
  const weather = useWeather();
  useEffect(() => {
    weather.fetchCurrentuserLocationData();
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
    </div>
  );
}

export default App;
