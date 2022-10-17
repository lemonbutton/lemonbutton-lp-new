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
        <div className="border border-zinc-400 mx-16 h-[83vh]">{children}</div>
      </main>
      <Footer />
    </>
  );
};
