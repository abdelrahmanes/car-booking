import { TextInput, TextInputProps, MantineProvider } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../Redux/features/car";

export default function SearchInput(props: TextInputProps) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setQuery(event.target.value));
  };

  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Input: {
            styles: () => ({
              input: {
                "&:focus": { borderColor: "transparent" },
                // paddingRight: "calc(18.25rem / 3)",
                padding: "12px 14px",
                height: "46px",
                caretColor: "orange",
                fontWeight: 500,
              },
            }),
          },
        },
      }}
    >
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={2} />}
        radius="md"
        size="lg"
        fz={"lg"}
        placeholder="Search or type"
        variant="filled"
        value={value}
        onChange={changeHandler}
        className="focus:border-gray-200"
        {...props}
      />
    </MantineProvider>
  );
}
