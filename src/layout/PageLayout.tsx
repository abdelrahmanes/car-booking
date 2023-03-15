import Header from "./Header";
import Nav from "./Nav";

export default function PageLayout() {
  return (
    <>
      <Nav />
      <Header user={{ name: "abdelrahman", image: "./abdelrahman.jpeg" }} />
    </>
  );
}
