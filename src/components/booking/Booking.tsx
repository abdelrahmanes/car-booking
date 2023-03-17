import { Container, Grid, Text } from "@mantine/core";
import { is } from "immer/dist/internal";
import { useState, useEffect } from "react";

import { useGetItemsQuery } from "../../services/car";
import { carType } from "../../types";
import CarCard from "./portions/CarCard";
import FilterSection from "./portions/FilterSection";

function Booking() {
  // const [cars, setCars] = useState<carType[]>([]);
  const [filteredCars, setFilteredCars] = useState<carType[]>([]);
  const [filters, setFilters] = useState({});
  const { data, isLoading, isError } = useGetItemsQuery(filters);

  const getFilters = (filters: {}) => {
    setFilters(filters);
  };

  useEffect(() => {
    if (data) {
      setFilteredCars(data);
    }
  }, [data]);

  return (
    <Container p={"30px"} m={0} className="max-w-full">
      <Text fw={700} fz={30} className="font-dmSans mb-8">
        Booking
      </Text>
      <FilterSection getFilters={getFilters} />
      {isError ? <Text>Error fetching cars</Text> : null}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <div className="  py-4  ">
          <Grid gutter={20} grow>
            {filteredCars?.map((car: carType) => {
              return (
                <Grid.Col
                  key={car.id}
                  xs={3}
                  bg="blue"
                  m="sm"
                  className="flex flex-col bg-white    gap-7  bg-transparent rounded-2xl p-6"
                >
                  <CarCard car={car} />
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
