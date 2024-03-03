import { createContext } from "react";
import { AdFilterTypes } from "src/types/ad/filters";

export interface FilterContextProps {
  onFilter(params?: AdFilterTypes): void;
  filtering: boolean;
}

const onFilter = () => {};

export const FilterContext = createContext<FilterContextProps>({ onFilter, filtering: false });

export const { Provider: FilterContextProvider } = FilterContext;
