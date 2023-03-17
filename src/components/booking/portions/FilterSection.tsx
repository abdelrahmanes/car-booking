import { Group } from "@mantine/core";
import { useEffect, useState } from "react";
import DashboardIcon from "../../../Icons/DashboardIcon";
import FilterIcon from "../../../Icons/FilterIcon";
import DropdownList from "../../../layout/portions/DropdownList";
import { useGetItemsQuery } from "../../../services/car";
import { carType } from "../../../types";
type FilterSectionProps = {
  getFilters: (p: object) => void;
};
export default function FilterSection({ getFilters }: FilterSectionProps) {
  const [filtersActive, setFiltersActive] = useState(false);
  const [gridActive, setGridActive] = useState(true);
  const [filters, setFilters] = useState({});

  const { data } = useGetItemsQuery("");

  const carState = [
    { label: "State" },
    { label: "New" },
    { label: "Old" },
    { label: "Pre-owned" },
    { label: "New-alike" },
  ];
  const brands = data?.map((car: carType) => {
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
          onClick={() => setFiltersActive(!filtersActive)}
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
