import {
  createStyles,
  Container,
  Avatar,
  Group,
  rem,
  Image,
} from "@mantine/core";
import NotificationIcon from "../Icons/NotificationIcon";

import SearchInput from "./portions/SearchInput";

const useStyles = createStyles((theme) => ({
  header: {
    padding: "15px 31px",
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
    <div className={`${classes.header} flex-1 bg-white md:sticky top-0 z-50`}>
      <Container className={classes.mainSection} p={0}>
        <Group position="apart">
          <SearchInput />

          <Group spacing={22}>
            <NotificationIcon width={19.2} height={27} stroke={"1.5"} />

            <Avatar src={user.image} alt={user.name} radius="xl" size={48} />
          </Group>
        </Group>
      </Container>
    </div>
  );
}
