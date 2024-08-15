import { useContext } from "react";
import { CustomizationContext } from "../context/CustomizationContext";

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};

export default useCustomization;
