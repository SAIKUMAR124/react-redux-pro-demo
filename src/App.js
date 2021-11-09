import CakeContainer from "./pro1/components/CakeContainer";
import { Provider } from "react-redux";
import store from "./pro1/redux1/store";
import HooksCakeContainer from "./pro1/components/HooksCakeContainer";
import IceCreamContainer from "./pro1/components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        {/* <HooksCakeContainer/> */}
        <IceCreamContainer/>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
