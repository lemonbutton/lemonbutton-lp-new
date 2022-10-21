import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import cs from "classnames";
import { createContext, useContext, useState } from "react";
import { FeatureText } from "../features/FeatureText";

interface LayoutProps {
  children: JSX.Element;
}

interface positionContextInterface {
  moveContainer(): void;
  resetContainer(): void;
  isMovedToLeft: boolean;
}

export const PositionContext = createContext<positionContextInterface | null>(
  null
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMovedToLeft, setIsMovedToLeft] = useState(false);
  const moveContainer = () => {
    setIsMovedToLeft(!isMovedToLeft);
  };
  const resetContainer = () => {
    setIsMovedToLeft(false);
  };
  return (
    <>
      <PositionContext.Provider
        value={{ moveContainer, resetContainer, isMovedToLeft }}
      >
        <Navbar />
        <main>
          <div
            className={cs(
              "md:border md:border-zinc-400 md:mx-16 md:h-[83vh] overflow-hidden flex items-center basis-full transition-all duration-300 pt-20 md:pt-0",
              {
                "md:-translate-x-2/3 overflow-visible": isMovedToLeft,
              }
            )}
          >
            {children}
          </div>
        </main>
        <Footer />
      </PositionContext.Provider>
    </>
  );
};
