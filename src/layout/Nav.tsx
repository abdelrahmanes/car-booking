import {
  createStyles,
  Navbar,
  Group,
  getStylesRef,
  Flex,
  Image,
  MediaQuery,
  rem,
} from "@mantine/core";

import { NavLink } from "react-router-dom";
import DashboardIcon from "../Icons/DashboardIcon";
import CarIcon from "../Icons/CarIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import LogoutIcon from "../Icons/LogoutIcon";
const lang = localStorage.getItem("lang");
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
    gap: "12px",
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
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.colors.gray[2],
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
    <Navbar
      display={{ xxs: "none", sm: "flex" }}
      width={{ sm: 250 }}
      p={{ xxs: 0, sm: "md" }}
      className={`md:fixed ${
        lang === "ar" ? "right-0 left-auto" : "left-0"
      }  overflow-hidden`}
    >
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
