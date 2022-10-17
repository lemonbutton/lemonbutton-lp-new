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
        <div className="md:border md:border-zinc-400 md:mx-16 md:h-[83vh] overflow-hidden">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};
