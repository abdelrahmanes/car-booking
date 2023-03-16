import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  MantineProvider,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

export default function SearchInput(props: TextInputProps) {
  const theme = useMantineTheme();

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
        //   rightSection={
        //     <ActionIcon
        //       size={32}
        //       radius="xl"
        //       color={theme.primaryColor}
        //       variant="filled"
        //     >
        //       {theme.dir === "ltr" ? (
        //         <IconArrowRight size="1.1rem" stroke={1.5} />
        //       ) : (
        //         <IconArrowLeft size="1.1rem" stroke={1.5} />
        //       )}
        //     </ActionIcon>
        //   }
        placeholder="Search or type"
        variant="filled"
        className="focus:border-gray-200"
        {...props}
      />
    </MantineProvider>
  );
}
