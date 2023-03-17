import { Container, Grid, Text } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useGetItemsQuery } from "../../services/car";
import { carType } from "../../types";
import CarCard from "./portions/CarCard";
import FilterSection from "./portions/FilterSection";

function Booking() {
  const dispatch = useDispatch();
  const { data } = useGetItemsQuery("");

  return (
    <Container p={"30px"} m={0} className="max-w-full">
      <Text fw={700} fz={30} className="font-dmSans mb-8">
        Booking
      </Text>
      <FilterSection />
      <div className="px-8 py-4  ">
        <Grid gutter={20} grow>
          {data?.map((car: carType) => {
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
    </Container>
  );
}

export default Booking;
