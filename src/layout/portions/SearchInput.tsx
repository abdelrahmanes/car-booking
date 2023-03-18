import { TextInput, TextInputProps, MantineProvider } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../Redux/features/search";
import { RootState } from "../../Redux/store";

export default function SearchInput(props: TextInputProps) {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.search.query);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                width: "358px",
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
        size="sm"
        fz={"lg"}
        placeholder="Search or type"
        variant="filled"
        value={query}
        onChange={changeHandler}
        className="focus:border-gray-200"
        {...props}
      />
    </MantineProvider>
  );
}
