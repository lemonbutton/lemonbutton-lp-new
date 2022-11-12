import { SideBackButton } from "./SideBackButton";
import cs from "classnames";
import { useContext } from "react";
import { PositionContext } from "./Layout";

interface HiddenContainerProps {
  children: JSX.Element;
  className?: string;
}

export const HiddenContainer: React.FC<HiddenContainerProps> = ({
  children,
  className,
}) => {
  const { isMovedToLeft } = useContext(PositionContext);
  return (
    <div
      id="backButton"
      className={cs(
        "absolute transition-all 2xl:right-[-100px] md:max-w-xl top-12 p-8 md:p-0",
        {
          "opacity-0 duration-300 md:left-0 pointer-events-none":
            !isMovedToLeft,
          "duration-[800ms]": isMovedToLeft,
        },
        className
      )}
    >
      <SideBackButton />
      {children}
    </div>
  );
};
