import { createContext, useState, type ReactNode, useContext } from "react";

type VisibilityContextType = {
  visibilityCondition: boolean;
  setVisibilityCondition: React.Dispatch<React.SetStateAction<boolean>>;
};

export const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

export const VisibilityProvider = ({ children }: { children: ReactNode }) => {

  const [visibilityCondition, setVisibilityCondition] = useState(false);

  return (
    <VisibilityContext.Provider
      value={{ visibilityCondition, setVisibilityCondition }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

//  CUSTOM HOOK
export const useVisibility = (): VisibilityContextType => {

  const context = useContext(VisibilityContext);

  if (context === undefined) {
    throw new Error("useVisibility must be used within VisibilityProvider");
  }

  return context;
};
