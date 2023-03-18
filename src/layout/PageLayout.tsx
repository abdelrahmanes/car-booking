import Header from "./Header";
import Nav from "./Nav";
import { Flex, Group } from "@mantine/core";

type PageLayoutProps = {
  children: React.ReactNode;
  className: string;
};
const lang = localStorage.getItem("lang");
export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={className}>
      <Group sx={{ gap: 0 }} align={"flex-start"}>
        <Nav />

        <Flex
          direction={"column"}
          className={`flex-1 ${
            lang === "ar" ? "md:mr-[234px]" : " md:ml-[234px]"
          } `}
        >
          <Header user={{ name: "abdelrahman", image: "/images/user.png" }} />
          {children}
        </Flex>
      </Group>
    </div>
  );
}
