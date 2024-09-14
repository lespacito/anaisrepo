import { Layout } from "../ui/components/layout/Layout";
import { Container } from "../ui/components/container/Container";
import { Typography } from "../ui/design-system/typography/Typography";

export default function Blog() {
  return (
    <>
      <Layout sessionStatus="registered">
        <Container className="py-10 space-y-5">
          <Typography variant="lead" component="div" theme="secondary">
            Bienvenue sur le blog
          </Typography>
        </Container>
      </Layout>
    </>
  );
}
