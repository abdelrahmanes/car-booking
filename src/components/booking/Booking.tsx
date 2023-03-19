import { Container, Grid, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../../Redux/features/car";
import { RootState } from "../../Redux/store";
import { useGetItemsQuery } from "../../services/car";

import { carType } from "../../types";
import CarCard from "./portions/CarCard";
import FilterSection from "./portions/FilterSection";

export interface keyable {
  [key: string]: any;
}

function Booking() {
  const [filtersActive, setFiltersActive] = useState(false);
  const [gridActive, setGridActive] = useState(true);
  const [filters, setFilters] = useState<keyable>({
    Brand: "Brand",
    State: "State",
  });

  const data = useSelector((state: RootState) => state.car.cars);
  const { data: allData, isLoading } = useGetItemsQuery("");
  const dispatch = useDispatch();

  const getFilters = (filters: {}) => {
    if (filters) {
      console.log("sldk");

      setFilters(filters);
    }
    console.log("sdf");
  };

  const filterCars = () => {
    const filteredCars = allData?.specs?.filter((car: carType) => {
      if (filters.Brand === "Brand" && filters.State === "State") {
        console.log(1);

        return car;
      } else if (filters.Brand !== "Brand" && filters.State !== "State") {
        console.log(2);

        return car.brand === filters.Brand && car.state === filters.State;
      } else {
        console.log(3);

        return car.brand === filters.Brand || car.state === filters.State;
      }
    });
    // this condition for the action not to empty the cars array in store if the filtered cars array is empty
    dispatch(setCars(filteredCars));
  };

  useEffect(() => {
    filterCars();
  }, [filters]);

  return (
    <Container p={"30px"} m={0} className="max-w-full">
      <Text fw={700} fz={30} className="font-dmSans mb-8">
        Booking
      </Text>
      <FilterSection
        filtersActive={filtersActive}
        getFilters={getFilters}
        gridActive={gridActive}
        setGridActive={setGridActive}
        setFiltersActive={setFiltersActive}
      />

      <div className="  py-4  ">
        <Grid gutter={20} grow>
          {isLoading && <Text>Loading...</Text>}
          {/* prettier-ignore */}
          {(filtersActive && data?.length) === 0 ? (
            <Text>No Results</Text>
          ) : (
            data?.map((car: carType) => {
              return (
                <Grid.Col
                  key={car.id}
                  xs={gridActive ? 3 : 12}
                  bg="blue"
                  m="sm"
                  className={`flex ${
                    gridActive ? "flex-col" : ""
                  } bg-white  gap-7  bg-transparent rounded-2xl p-6`}
                >
                  <CarCard car={car} grid={gridActive} />
                </Grid.Col>
              );
            })
          )}
        </Grid>
      </div>
    </Container>
  );
}

export default Booking;
