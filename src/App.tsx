import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}
