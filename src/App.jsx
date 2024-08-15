import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import { Suspense } from "react";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/CustomizationContext";

function App() {
  return (
    <div className="App">
      <CustomizationProvider>
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          {/* <Suspense> */}
          <Experience />
          {/* </Suspense> */}
        </Canvas>
        <Configurator />
      </CustomizationProvider>
    </div>
  );
}

export default App;
