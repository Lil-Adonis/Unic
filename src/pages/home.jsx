import { Wrapper } from "../layout";
import HomeMain from "../components/home";
import SEO from "../components/seo";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Default"} />
      <HomeMain />
    </Wrapper>
  );
}
