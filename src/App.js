import "./App.css";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('renderd');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonster);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
