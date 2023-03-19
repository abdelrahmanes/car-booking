import { Group } from "@mantine/core";
import { useEffect, useState } from "react";
import DashboardIcon from "../../../Icons/DashboardIcon";
import FilterIcon from "../../../Icons/FilterIcon";
import DropdownList from "../../../layout/portions/DropdownList";
import { useGetItemsQuery } from "../../../services/car";
import { carType } from "../../../types";
import { keyable } from "../Booking";

type FilterSectionProps = {
  getFilters: (p: object) => void;
  gridActive: boolean;
  filtersActive: boolean;
  setGridActive: (arg: boolean) => void;
  setFiltersActive: (arg: boolean) => void;
};

export default function FilterSection({
  getFilters,
  gridActive,
  filtersActive,
  setGridActive,
  setFiltersActive,
}: FilterSectionProps) {
  const [filters, setFilters] = useState<keyable>({
    Brand: "Brand",
    State: "State",
  });

  const { data } = useGetItemsQuery("");
  const carState = [
    { label: "State" },
    { label: "New" },
    { label: "Old" },
    { label: "Pre-owned" },
    { label: "New-alike" },
  ];

  const brands = data?.specs?.map((car: carType) => {
    return { label: car.brand };
  });
  const carBrand = brands
    ? [{ label: "Brand" }, ...brands]
    : [{ label: "Brand" }];

  useEffect(() => {
    getFilters(filters);
  }, [filters]);

  return (
    <Group
      position={"apart"}
      className={`mb-8 ${filtersActive ? "" : "justify-end"}`}
    >
      {filtersActive && (
        <Group>
          <DropdownList data={carState} setFilters={setFilters} />
          <DropdownList data={carBrand} setFilters={setFilters} />
        </Group>
      )}
      <Group>
        <div
          className={`${
            gridActive ? "bg-purple" : "bg-white"
          } rounded-full p-2 cursor-pointer`}
          onClick={() => setGridActive(!gridActive)}
        >
          <DashboardIcon
            width={24}
            height={24}
            className={`${gridActive ? "text-white" : "text-dark2"}`}
          />
        </div>
        <div
          className={`${
            filtersActive ? "bg-purple" : "bg-white"
          } rounded-full p-2 cursor-pointer`}
          onClick={() => {
            setFiltersActive(!filtersActive);
            setFilters({ Brand: "Brand", State: "State" });
          }}
        >
          <FilterIcon
            width={24}
            height={24}
            className={`${filtersActive ? "text-white" : "text-dark2"}`}
          />
        </div>
      </Group>
    </Group>
  );
}
