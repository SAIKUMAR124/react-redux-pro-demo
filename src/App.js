import CakeContainer from "./pro1/components/CakeContainer";
import { Provider } from "react-redux";
import store from "./pro1/redux1/store";
import HooksCakeContainer from "./pro1/components/HooksCakeContainer";
import IceCreamContainer from "./pro1/components/IceCreamContainer";
import NewCakeContainer from "./pro1/components/NewCakeContainer";
import ItemContainer from "./pro1/components/ItemContainer";
import UserContainer from "./pro2/components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        {/* <HooksCakeContainer/> */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <IceCreamContainer/>
        <CakeContainer />
        <NewCakeContainer/> */}

        {/* <UserContainer/> */}

        
      </div>
    </Provider>
  );
}

export default App;
