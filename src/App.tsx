import AppProvider from "@/providers/app";
import { Button } from "@/components/Elements";
import { useNotificationStore } from "./stores/notifications";

function App() {
  const { addNotification } = useNotificationStore();
  return (
    <AppProvider>
      <Button
        onClick={() => {
          addNotification({
            title: "The Noti",
            message: "Notification",
            type: "success"
          })
        }}
      >Add Noti</Button>
    </AppProvider>
  )
}

export default App
