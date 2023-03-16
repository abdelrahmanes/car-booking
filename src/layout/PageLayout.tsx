import Header from "./Header";
import Nav from "./Nav";
import { Flex, Group } from "@mantine/core";

type PageLayoutProps = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Group sx={{ gap: 0 }} align={"flex-start"}>
      <Nav />

      <Flex direction={"column"} className="flex-1  md:ml-[234px]">
        <Header user={{ name: "abdelrahman", image: "/images/user.png" }} />
        {children}
      </Flex>
    </Group>
  );
}
