import { ReactNode } from "react";

type TConditionRender = {
  condition?: boolean
  children: ReactNode
}

const ConditionRender = ({ condition, children }: TConditionRender) => {
  return (condition ? children : null)
};

export default ConditionRender;
