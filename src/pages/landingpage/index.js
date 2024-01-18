import { FooterComponent, HeaderComponent } from "../../components/modules";
import {
  Teamwork,
  Hero,
} from "../../components/molecules";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <Hero />
      <Teamwork />
      <FooterComponent />
    </>
  );
}
