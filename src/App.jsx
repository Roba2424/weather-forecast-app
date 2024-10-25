import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Weather from "./components/Weather";
import { createBrowserRouter } from "react-router-dom";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path="/" element={<Weather />} />
            <Route path="/:day" element={<HourlyForecast />} />
          </Route>
        )
      )}
    />
  );
}

export default App;
