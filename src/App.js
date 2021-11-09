import CakeContainer from "./pro1/components/CakeContainer";
import { Provider } from "react-redux";
import store from "./pro1/redux1/store";
import HooksCakeContainer from "./pro1/components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <HooksCakeContainer/>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
