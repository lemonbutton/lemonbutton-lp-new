import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="border mx-16">{children}</div>
      </main>
      <Footer />
    </>
  );
};
