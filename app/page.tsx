import { Layout } from "./ui/components/layout/Layout";
import { HomePageContainer } from "./ui/modules/home-page/home-page.container";

export default function Home() {
  return (
    <Layout isDisplayBreadcrumbs={false}>
      <HomePageContainer />
    </Layout>
  );
}
