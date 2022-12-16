import React from "react";
import "./styles.scss";

export const Header: React.FC<
  React.HTMLAttributes<HTMLHeadingElement>
> = function ({ children, ...props }) {
  return (
    <div className="header">
      <div className="header__background">
        <h1 className="header__text" {...props}>
          {children}
        </h1>
      </div>
    </div>
  );
};
