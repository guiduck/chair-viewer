import { createContext, useMemo, useState } from "react";

export const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");

  const value = useMemo(
    () => ({ material, setMaterial }),
    [material, setMaterial]
  );

  return (
    <CustomizationContext.Provider value={value}>
      {props.children}
    </CustomizationContext.Provider>
  );
};
