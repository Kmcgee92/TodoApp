import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// provide redux and apollo
import { Provider } from "react-redux";
import { MockedProvider } from "@apollo/client/testing";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

export default function ComponentWithProviders(
  ComponentToBeTested,
  props,
  initialState
) {
  let mocks = [];
  let store = mockStore(
    
    initialState || { auth: { activeUser: {}, error: false } }
  
  );
  return (
    <MockedProvider mocks={mocks}>
      <Provider store={store}>
        <ComponentToBeTested {...props} />
      </Provider>
    </MockedProvider>
  );
}
