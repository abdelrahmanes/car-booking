import { useState } from "react";
import { Menu, Group, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

type dropdownListProps = {
  data: { label: string }[];
};

export default function DropdownList({ data }: dropdownListProps) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      onClick={() => setSelected(item)}
      key={item.label}
      className="rounded-md"
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius={40}
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={`bg-white rounded-3xl text-dark2 px-5 py-2 border-0 flex justify-between items-center whitespace-nowrap `}
          w={140}
          maw={250}
        >
          <Group spacing="xs">
            <Text fw={500} fz={16} w={80} truncate>
              {selected.label}
            </Text>
          </Group>
          <IconChevronDown
            size="1rem"
            className={`transform ${
              opened ? "rotate-180" : "rotate-0"
            } transition duration-150 ease-in`}
            stroke={1.5}
          />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown className="rounded-md">{items}</Menu.Dropdown>
    </Menu>
  );
}
