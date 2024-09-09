import { createContext, useContext } from "react";

export interface AppContextProps {
  routerOutletRef: React.RefObject<any> | null;
  baseMiles: number;
  baseAPY: number;
  extraAPY: number;
  setExtraAPY: (apy: number) => void;
  setBaseMiles: (miles: number) => void;
  extraMiles: number;
  setExtraMiles: (miles: number) => void;
  maxAmount: number;
  setMaxAmount: (amount: number) => void;
  selectedAmount: number;
  setSelectedAmount: (amount: number) => void;
  claimByDate: Date;
  setClaimByDate: (date: Date) => void;
  setBaseAPY: (apy: number) => void;
}

export const AppContext = createContext<AppContextProps>(undefined!);

//use the context in the component
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}
