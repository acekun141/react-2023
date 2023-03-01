import AppProvider from "@/providers/app";
import { Notifications } from "./components/Notifications";
import { Button } from "@/components/Elements";

function App() {
  return (
    <AppProvider>
      <Notifications />
    </AppProvider>
  )
}

export default App
