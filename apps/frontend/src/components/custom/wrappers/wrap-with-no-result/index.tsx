import { memo, PropsWithChildren } from "react";
// components
import NoResult, { NoResultProps } from "./no-result";

interface Props extends NoResultProps {
  length: number;
}

function WrapWithNoResult({ length, children, alternativeTitle, ...props }: PropsWithChildren<Props>) {
  return !length ? <NoResult alternativeTitle={alternativeTitle} {...props} /> : children;
}

export default memo(WrapWithNoResult);
