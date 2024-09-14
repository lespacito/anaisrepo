import { Layout } from "../ui/components/layout/Layout";
import type { Metadata } from "next";
import { UserAccountContainer } from "../ui/modules/user-profile/user-account/user-account.container";

export const metadata: Metadata = {
  title: "Mon espace",
  description: "Infos de l'utilisateur",
};

export default function Myspace() {
  return (
    <>
      <Layout withSidebar sessionStatus="registered">
        <UserAccountContainer />
      </Layout>
    </>
  );
}
