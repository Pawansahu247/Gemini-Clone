import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [newChatFlag, setNewChatFlag] = useState(0);
  const triggerNewChat = () => setNewChatFlag(prev => prev + 1);
  return (
    <SidebarContext.Provider value={{ newChatFlag, triggerNewChat }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
