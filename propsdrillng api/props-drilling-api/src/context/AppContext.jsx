import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const a = "Apple";
  const b = "Ball";
  const c = "Cat";
  const d = "Dog";
  const e = "Elephant";
  const f = "Fish";

  return (
    <AppContext.Provider value={{ a, b, c, d, e, f }}>
      {children}
    </AppContext.Provider>
  );
};
