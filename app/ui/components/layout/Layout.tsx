import { Breadcrumbs } from "../breadcrumbs/breadcrumb";
import { Container } from "../container/Container";
import { Footer } from "../navigation/Footer";
import { Navbar } from "../navigation/Navbar";
import { Session } from "../session/session";
import { UserAccountNavigation } from "@/app/ui/components/navigation/user-account-navigation";
import { UserAccountContainer } from "@/app/ui/modules/user-profile/user-account/user-account.container";
interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
  sessionStatus?: string;
}

export const Layout = ({
  children,
  withSidebar,
  isDisplayBreadcrumbs = true,
}: Props) => {
  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <UserAccountNavigation />
          </div>
          <div className="col-span-9">
            <UserAccountContainer />
          </div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }

  return (
    <Session sessionStatus={sessionStatus}>
      <Navbar />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </Session>
  );
};
