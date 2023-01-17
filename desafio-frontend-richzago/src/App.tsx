// import { CalculatorComponent } from "./components/OldCalculator";
import { CalculatorPage } from "./pages/Calculator";
import { CalculatorProvider } from "./providers/Calculator";
import Global from "./styles/global";

function App() {
  return (
    <>
      <CalculatorProvider>
        <Global />
        <CalculatorPage />
        {/* <CalculatorComponent /> */}
      </CalculatorProvider>
    </>
  );
}

export default App;
