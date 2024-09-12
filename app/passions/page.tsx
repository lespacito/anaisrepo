import { Layout } from "../ui/components/layout/Layout";
import { Container } from "../ui/components/container/Container";
import { Typography } from "../ui/design-system/typography/Typography";

export default function Passions() {
  return (
    <>
      <Layout>
        <Container className="py-10 space-y-5">
          <Typography variant="lead" component="div" theme="secondary">
            Bienvenue sur la page de mes passions
          </Typography>
        </Container>
      </Layout>
    </>
  );
}
