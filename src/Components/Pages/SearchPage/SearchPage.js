import React, { useState, useEffect } from "react";
import InputField from "../../Atoms/InputField/InputField";
import './SearchPage.css'

export default function SearchPage() {
  const [states, setStates] = useState([]);    //to store and update the list of states fetched from an API
  const [searchTerm, setSearchTerm] = useState(""); //to store and update the current search term entered by the user
  const [filteredStates, setFilteredStates] = useState([]); //used to store and update the filtered list of states based on the search term
  const [showStatesList, setShowStatesList] = useState(false); //used to control the visibility of the states list

  //Fetching Data from API
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://cdn-api.co-vin.in/api/v2/admin/location/states"
        );
        const data = await response.json();
        setStates(data.states);
        setFilteredStates(data.states);
        console.log(data.states);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStates();
  }, []);

  //Filter the states based on the current search term whenever `searchTerm` or `states` change
  useEffect(() => {
    const search = searchTerm.toLowerCase();
    const filtered = states.filter((state) =>
      state.state_name.toLowerCase().includes(search)
    );
    setFilteredStates(filtered);
  }, [searchTerm, states]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setShowStatesList(true);
  };

  const handleInputBlur = () => {
    setShowStatesList(false);
  };

  return (
    <div>
      <InputField onChange={handleSearch}
      onFocus={handleInputFocus}
              onBlur={handleInputBlur} />

      {showStatesList && (
  
        <ul className="container">
          <div className="statesName">
          {filteredStates.map((state) => (
            <li key={state.state_id}>{state.state_name}</li>
          ))}
          </div>
        </ul>
      )}
    </div>
  );
}
