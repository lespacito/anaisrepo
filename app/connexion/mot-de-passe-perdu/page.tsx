import { GUEST } from "@/app/lib/session-status";
import { Layout } from "@/app/ui/components/layout/Layout";
import { ForgetPasswordContainer } from "@/app/ui/modules/authentification/forget-password/forget-password.container";

export default function ForgetPassword() {
  return (
    <>
      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
