import { createStyles, Container, Avatar, Group, rem } from "@mantine/core";

import SearchInput from "./portions/SearchInput";

import { IconBellRinging } from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },

  mainSection: { maxWidth: "90rem" },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

interface HeaderProps {
  user: { name: string; image: string };
}

export default function Header({ user }: HeaderProps) {
  const { classes } = useStyles();

  return (
    <div className={`${classes.header} flex-1 `}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <SearchInput />

          <Group spacing={22}>
            <IconBellRinging strokeWidth={1} />
            <Avatar src={user.image} alt={user.name} radius="xl" size={35} />
          </Group>
        </Group>
      </Container>
    </div>
  );
}
