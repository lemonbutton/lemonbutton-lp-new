import cs from "classnames";
import { useContext } from "react";
import { PositionContext } from "./Layout";

interface MovableContainerProps {
  children: JSX.Element;
  className?: string;
  flexDirection?: "row" | "col";
}

export const MovableContainer: React.FC<MovableContainerProps> = ({
  children,
  className,
  flexDirection = "row",
}) => {
  const { isMovedToLeft } = useContext(PositionContext);
  return (
    <div
      className={cs(
        "font-JetBrainsMono flex transition-all duration-500",
        {
          "opacity-0 pointer-events-none": isMovedToLeft,
        },
        {
          "flex-col": flexDirection === "col",
        },
        className
      )}
    >
      {children}
    </div>
  );
};
