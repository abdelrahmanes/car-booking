import {
  createStyles,
  Navbar,
  Group,
  getStylesRef,
  Flex,
  Image,
} from "@mantine/core";
import {
  IconLayoutDashboard,
  IconCar,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../Icons/DashboardIcon";
import CarIcon from "../Icons/CarIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import LogoutIcon from "../Icons/LogoutIcon";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.md,
    fontWeight: 500,
    width: 200,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.colors.gray[2],
      color: theme.colors.gray[8],
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({
          variant: "light",
          color: theme.colors.gray[0],
        }).color,
      },
    },
  },
}));

const data = [
  {
    link: "/dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
  },
  { link: "/booking", label: "Cars", icon: CarIcon },
];

export default function Nav() {
  const { classes } = useStyles();

  const links = data.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={({ isActive }) =>
        isActive ? `${classes.linkActive} ${classes.link}` : classes.link
      }
    >
      <item.icon className={classes.linkIcon} stroke={"1.5"} />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <Navbar width={{ sm: 250 }} p="md" className="md:fixed">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image
            src={"images/logo.png"}
            width={108.91}
            height={31}
            alt="logo"
          />
        </Group>
        <Flex direction={"column"} gap={3}>
          {links}
        </Flex>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <SettingsIcon className={classes.linkIcon} stroke={"1.5"} />
          <span>Settings</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <LogoutIcon className={classes.linkIcon} stroke={"1.5"} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
