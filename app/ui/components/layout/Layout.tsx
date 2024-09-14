import { Breadcrumbs } from "../breadcrumbs/breadcrumb";
import { Container } from "../container/Container";
import { Footer } from "../navigation/Footer";
import { Navbar } from "../navigation/Navbar";
import { UserAccountNavigation } from "@/app/ui/components/navigation/user-account-navigation";
interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
}

export const Layout = ({ children, isDisplayBreadcrumbs = true }: Props) => {
  let view = React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <UserAccountNavigation />
          </div>
          <div className="col-span-9"></div>
        </div>
      </Container>
    );
  } else {
    view = <>{ children }</>;
  }

  return (
    <div>
      <Navbar />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </div>
  );
};
