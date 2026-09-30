import { useEffect, useState } from "react";
import { Landing } from "./components/Landing.jsx";
import { PrimitivesView } from "./components/PrimitivesView.jsx";

export default function App() {
  const [vista, setVista] = useState("pagina");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setVista(params.get("vista") === "primitivos" ? "primitivos" : "pagina");
  }, []);

  if (vista === "primitivos") return <PrimitivesView />;
  return <Landing />;
}
