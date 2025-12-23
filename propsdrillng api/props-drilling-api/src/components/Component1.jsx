import Component2 from "./Component2";
import { AppContextProvider } from "../context/AppContext";

const Component1 = () => {
  return (
    <AppContextProvider>
      <h3>Component 1</h3>
      <Component2 />
    </AppContextProvider>
  );
};

export default Component1;
