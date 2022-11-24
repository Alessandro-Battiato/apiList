import { useEffect, useState } from "react";
import getAll from "./services/api";
import Filter from "./components/Filter";
import Card from "./components/Card";

const App = () => {
  const [api, setApi] = useState([]);
  const [currentApi, setCurrentApi] = useState();
  const [filter, setFilter] = useState("");

  const dataHook = () => {
    getAll().then((res) => {
      setApi(res.entries);
    });
  };

  useEffect(dataHook, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredAPI = api.filter((obj) =>
      obj.API.toLowerCase().startsWith(filter.toLowerCase())
    );
    if (filteredAPI.length > 0) {
      setCurrentApi(filteredAPI);
    }
  };

  return (
    <div>
      <Filter
        value={filter}
        onChange={handleFilterChange}
        onClick={handleSubmit}
      />
      {currentApi && (
        <Card
          title={currentApi[0].API}
          description={currentApi[0].Description}
          category={currentApi[0].Category}
          link={currentApi[0].Link}
        />
      )}
    </div>
  );
};

export default App;
