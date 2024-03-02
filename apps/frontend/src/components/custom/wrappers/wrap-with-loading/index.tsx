import { memo, PropsWithChildren } from "react";
// components
import LinearLoading from "./linear-loading";

type Props = {
  loading: boolean;
};

function WrapWithLoading({ loading, children }: PropsWithChildren<Props>) {
  return loading ? <LinearLoading /> : children;
}

export default memo(WrapWithLoading);
