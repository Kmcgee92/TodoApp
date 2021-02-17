import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// provide redux and apollo
import { Provider } from "react-redux";
import { MockedProvider } from "@apollo/client/testing";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = { auth: { activeUser: {}, error: false } };

export default function ComponentWithProviders(ComponentToBeTested, props) {
  let mocks = [];
  let store = mockStore(initialState);
  return (
    <MockedProvider mocks={mocks}>
      <Provider store={store}>
        <ComponentToBeTested {...props} />
      </Provider>
    </MockedProvider>
  );
}
