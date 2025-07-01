import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/Main/Main'
import { SidebarProvider } from "./components/context/Context";

const App = () => {
  return (
    <SidebarProvider>
      <Sidebar/>
      <Main/>
    </SidebarProvider>
  )
}
   
export default App