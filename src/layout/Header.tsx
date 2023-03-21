import {
  createStyles,
  getStylesRef,
  Container,
  Avatar,
  Flex,
  Burger,
  Drawer,
  Button,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

import CarIcon from "../Icons/CarIcon";
import DashboardIcon from "../Icons/DashboardIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import SettingsIcon from "../Icons/SettingsIcon";

import SearchInput from "./portions/SearchInput";

const useStyles = createStyles((theme) => ({
  header: {
    padding: "15px 31px",
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      padding: "15px 15px",
    },
  },

  mainSection: { maxWidth: "90rem" },

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
    width: "100%",

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

interface HeaderProps {
  user: { name: string; image: string };
}

export default function Header({ user }: HeaderProps) {
  const { classes } = useStyles();
  const lang = localStorage.getItem("lang");
  const [opened, { open, close }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const data = [
    {
      link: "/dashboard",
      label: "Dashboard",
      icon: DashboardIcon,
    },
    { link: "/booking", label: "Cars", icon: CarIcon },
  ];
  const links = data.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={({ isActive }) =>
        isActive
          ? `${classes.linkActive} ${classes.link} ${
              lang === "ar" ? "rtl" : "ltr"
            }`
          : `${classes.link} ${lang === "ar" ? "rtl" : "ltr"}`
      }
      onClick={close}
    >
      <item.icon className={classes.linkIcon} stroke={"1.5"} />
      <span>{item.label}</span>
    </NavLink>
  ));
  return (
    <div className={`${classes.header}     bg-white sticky top-0 z-50`}>
      <Container className={classes.mainSection} p={0}>
        <Flex
          align={"center"}
          justify={"space-between"}
          gap={6}
          className={`${lang === "ar" ? " flex-row-reverse" : "flex-row "}`}
        >
          <Flex
            align={"center"}
            gap={8}
            className={`${lang === "ar" ? "  flex-row-reverse" : "flex-row"}`}
          >
            <Drawer
              opened={opened}
              onClose={close}
              position={lang === "ar" ? "right" : "left"}
              overlayProps={{ opacity: 0.2, blur: 4 }}
              size={"xs"}
              className="flex flex-col justify-between gap-12"
            >
              <Flex direction={"column"} gap={3} className="pb-8">
                {links}
              </Flex>
              <Flex
                direction={"column"}
                gap={3}
                className="border-t border-gray-200 pt-1"
              >
                <a
                  href="#"
                  className={`${classes.link} ${lang === "ar" ? "rtl" : "ltr"}`}
                  onClick={(event) => event.preventDefault()}
                >
                  <SettingsIcon className={classes.linkIcon} stroke={"1.5"} />
                  <span>Settings</span>
                </a>

                <a
                  href="#"
                  className={`${classes.link} ${lang === "ar" ? "rtl" : "ltr"}`}
                  onClick={(event) => event.preventDefault()}
                >
                  <LogoutIcon className={classes.linkIcon} stroke={"1.5"} />
                  <span>Logout</span>
                </a>
              </Flex>
            </Drawer>

            <Group position="center">
              <Burger
                display={{ xxs: "block", sm: "none" }}
                opened={opened}
                onClick={open}
                aria-label={label}
                color={"#5F6165"}
                pos={"relative"}
              />
            </Group>

            {/* <div
              className={`absolute ${
                lang === "ar" ? "right-2" : "left-2"
              } top-20 left-2  z-50 bg-white rounded-lg ${
                opened ? "w-64 p-2" : "w-0 overflow-hidden p-0"
              } transition-width duration-150`}
            >
              <Flex direction={"column"} gap={3} className="pb-8">
                {links}
              </Flex>
              <Flex
                direction={"column"}
                gap={3}
                className="border-t border-gray-200 pt-1"
              >
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
              </Flex>
            </div> */}

            <SearchInput />
          </Flex>

          <Flex
            gap={{ xxs: 6, md: 22 }}
            align={"center"}
            className={`${lang === "ar" ? " flex-row-reverse" : " flex-row"}`}
          >
            <NotificationIcon width={19.2} height={27} stroke={"1.5"} />

            <Avatar src={user.image} alt={user.name} radius="xl" size={48} />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
