import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import trackVisitor from "./utils/visitorTracker";

function App() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return <AppRoutes />;
}

export default App;