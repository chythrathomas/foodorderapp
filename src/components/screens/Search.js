import React, { useEffect, useState } from "react";
import dataListState from "../../dataStore/dataList";
import { Row } from "react-bootstrap";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { restaurantActions } from "../../store/restaurantSlice";
import SearchResult from "./SearchResult";

function Search() {
  const dispatch = useDispatch();
  const searchedData= useSelector(state=>state.restaurant.dishSelected);
  const [searchData, setSearchData] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [searched, setSearched] = useState(false);

  const inputHandler = (e) => {
    setSearchData(e.target.value);
    setSearched(false);
    console.log(searchData);
    dispatch(restaurantActions.selectDish(''));
  };
  useEffect(() => {
    if(searchData){
        const fetchData = dataListState.filter((item) =>
      item && item.item && item.item.toLowerCase().includes(searchData.toLowerCase())
    );
    let uniqueData=[];
   uniqueData= new Set(fetchData.map(data=>data.item));
    const uniqueDataArray= [...uniqueData];
    if(uniqueDataArray){
        setFilteredList(uniqueDataArray);
    }
   
console.log(filteredList);
  }}, [searchData]);

  const selectHandler = (item) => {
    setSearchData(item);
    setSearched(!searched);
    dispatch(restaurantActions.selectDish(item));
  };
  const submitHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(restaurantActions.selectDish(searchData));
      setSearched(!searched);
    }
  }
  return (
    <div className="inputControl">
      <div className="searchBar">
        <input
          type="text"
          value={searchData}
          placeholder="search your dish here"
          onChange={inputHandler}
          onKeyDown={submitHandler}
        ></input>

        {!searched && searchData && (
          <ul style={{ listStyleType: "none" }}>
            {filteredList.map((item, index) => (
              <li key={`srch${index}`} onClick={() => selectHandler(item)}>
                <div className="searchSuggest">
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {searchedData && <SearchResult/>}
    </div>
  );
}

export default Search;
