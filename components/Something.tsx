import { PropsWithChildren } from "react";

export const Something = ({ children }: PropsWithChildren<any>) => {
  return <div className="specialDiv">{children}</div>;
};
