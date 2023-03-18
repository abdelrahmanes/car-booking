import { Container, Grid, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import { useGetItemsQuery, useGetSearchResultsQuery } from "../../services/car";
import { carType } from "../../types";
import CarCard from "./portions/CarCard";
import FilterSection from "./portions/FilterSection";

function Booking() {
  const [filteredCars, setFilteredCars] = useState<carType[]>([]);
  const [gridActive, setGridActive] = useState(true);
  const [filters, setFilters] = useState({});

  const query = useSelector((state: RootState) => state.search.query);

  const { data, isLoading, isError } = useGetItemsQuery(filters);
  const {
    data: searchResults,
    isLoading: searchIsLoading,
    isError: SearchIsError,
  } = useGetSearchResultsQuery(query);

  const getFilters = (filters: {}) => {
    setFilters(filters);
  };
  //handle filters and search
  useEffect(() => {
    if (data) {
      setFilteredCars(data);
    }
    if (query !== "") {
      setFilteredCars(searchResults);
    }
  }, [data, query]);

  return (
    <Container p={"30px"} m={0} className="max-w-full">
      <Text fw={700} fz={30} className="font-dmSans mb-8">
        Booking
      </Text>
      <FilterSection
        getFilters={getFilters}
        gridActive={gridActive}
        setGridActive={setGridActive}
      />
      {isError || SearchIsError ? <Text>Error fetching cars</Text> : null}
      {searchResults?.length === 0 && (
        <Text>No results for this keyword, make sure of your spelling</Text>
      )}
      {isLoading || searchIsLoading ? (
        <Text>Loading...</Text>
      ) : (
        <div className="  py-4  ">
          <Grid gutter={20} grow>
            {filteredCars?.map((car: carType) => {
              return (
                <Grid.Col
                  key={car.id}
                  xs={gridActive ? 3 : 12}
                  bg="blue"
                  m="sm"
                  className={`flex ${
                    gridActive ? "flex-col" : ""
                  } bg-white    gap-7  bg-transparent rounded-2xl p-6`}
                >
                  <CarCard car={car} grid={gridActive} />
                </Grid.Col>
              );
            })}
          </Grid>
        </div>
      )}
    </Container>
  );
}

export default Booking;
