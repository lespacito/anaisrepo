import { Breadcrumbs } from "../breadcrumbs/breadcrumb";
import { Footer } from "../navigation/Footer";
import { Navbar } from "../navigation/Navbar";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
}

export const Layout = ({ children, isDisplayBreadcrumbs = true }: Props) => {
  return (
    <div>
      <Navbar />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {children}
      <Footer />
    </div>
  );
};
