import { Layout } from "../ui/components/layout/Layout";
import { Container } from "../ui/components/container/Container";
import { Typography } from "../ui/design-system/typography/Typography";
import {REGISTERED} from "@/app/lib/session-status"

export default function Blog() {
  return (
    <>
      <Layout sessionStatus={REGISTERED}>
        <Container className="py-10 space-y-5">
          <Typography variant="lead" component="div" theme="secondary">
            Bienvenue sur le blog
          </Typography>
        </Container>
      </Layout>
    </>
  );
}
