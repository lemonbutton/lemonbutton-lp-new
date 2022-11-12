import cs from "classnames";
import { useContext } from "react";
import { PositionContext } from "./Layout";

interface MovableContainerProps {
  children: JSX.Element;
  className?: string;
}

export const MovableContainer: React.FC<MovableContainerProps> = ({
  children,
  className,
}) => {
  const { isMovedToLeft } = useContext(PositionContext);
  return (
    <div
      className={cs(
        "font-JetBrainsMono flex flex-col transition-all duration-500",
        {
          "opacity-0 pointer-events-none": isMovedToLeft,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
