import React, { useState } from "react";

// * Context Object, export it
export const AppContext = React.createContext();

/**
 * Our own custom wrapper react component
 */
function AppContextProvider({ children }) {
  // state
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppContext.Provider value={[isAuth, setIsAuth]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

// 1. create context
// 2. create a wrapper and pass the context provider into it with children
// 3. value into the provider
// 4. pass the wrapper around wherever you want to use
// 5. consume it where ever you want

// Create, Provide, Consume
