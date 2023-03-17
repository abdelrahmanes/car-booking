import { Group } from "@mantine/core";
import DashboardIcon from "../../../Icons/DashboardIcon";
import FilterIcon from "../../../Icons/FilterIcon";
import DropdownList from "../../../layout/portions/DropdownList";

export default function FilterSection() {
  const carState = [
    { label: "New" },
    { label: "Old" },
    { label: "Pre-owned" },
    { label: "New-alike" },
  ];
  const carBrand = [
    { label: "Toyota" },
    { label: "Porsche" },
    { label: "Mini Cooper" },
    { label: "Ferrari" },
  ];
  return (
    <Group position={"apart"} className="mb-8">
      <Group>
        <DropdownList data={carState} />
        <DropdownList data={carBrand} />
      </Group>
      <Group>
        <div className="bg-white rounded-full p-2">
          <DashboardIcon width={24} height={24} />
        </div>
        <div className="bg-purple rounded-full p-2">
          <FilterIcon width={24} height={24} className="text-white" />
        </div>
      </Group>
    </Group>
  );
}
