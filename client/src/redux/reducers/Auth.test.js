import {
  LOGIN_USER,
  LOGOUT_USER,
  REFRESH_SESSION,
} from "../actions/authActions";

import { auth } from "./Auth";

describe("Auth Reducer", () => {
  describe("Initial State", () => {
    it("Should return Initial State", () => {
      let action = { type: "MOCK_ACTION" };
      let mockInitialState = { error: false, activeUser: {} };
      expect(auth(undefined, action)).toEqual(mockInitialState);
    });
  });
  describe("LOGIN_USER Action", () => {
    it("Expect Login Case to Return Proper State Update", () => {
      let mockState = "";
      let mockAction = {
        type: LOGIN_USER,
        data: {
          Login: {
            error: "",
            user: "MOCKUSER",
            token: "MOCKTOKEN",
          },
        },
      };
      let expectedStateReturn = {
        activeUser: mockAction.data.Login.user,
        error: false,
        token: mockAction.data.Login.token,
      };
      let returnedState = auth(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
    it("Should Return State with Error on Error", () => {
      let mockState = undefined;
      let mockAction = {
        type: LOGIN_USER,
        data: {
          Login: {
            error: "MOCKERROR",
            user: "MOCKUSER",
            token: "MOCKTOKEN",
          },
        },
      };
      let expectedStateReturn = {
        error: mockAction.data.Login.error,
        activeUser: {},
      };
      let returnedState = auth(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
    it("Should Return Previous State if no action.type Matches", () => {
      let mockState = "";
      let mockAction = {
        type: "MOCK_ACTION",
        id: 2,
      };
      let returnedState = auth(mockState, mockAction);
      expect(returnedState).toEqual("");
    });
  });
  describe("LOGOUT_USER Action", () => {
    it("Should Return State to Inital State", () => {
      let mockState = undefined;
      let mockAction = {
        type: "LOGOUT_USER",
      };
      let expectedStateReturn = {
        error: false,
        activeUser: {},
      };
      let returnedState = auth(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
  });
  describe("REFRESH_SESSION Action", () => {
    it("Expect RefreshSession Case to Return Proper State Update", () => {
      let mockState = undefined;
      let mockAction = {
        type: REFRESH_SESSION,
        data: {
          GetActiveUser: {
            user: {
              id: "MOCKID",
              name: "MOCKNAME",
              email: "MOCKEMAIL",
              items: [],
            },
            token: "MOCKTOKEN",
            error: false,
          },
        },
      };
      let expectedStateReturn = {
        token: mockAction.data.GetActiveUser.token,
        error: false,
        activeUser: {
          id: mockAction.data.GetActiveUser.user.id,
          name: mockAction.data.GetActiveUser.user.name,
          email: mockAction.data.GetActiveUser.user.email,
          items: mockAction.data.GetActiveUser.user.items,
        },
      };
      let returnedState = auth(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
    it("Should Return Inital State if no Token is Present", () => {
      let mockState = undefined;
      let mockAction = {
        type: REFRESH_SESSION,
        data: {
          GetActiveUser: {
            user: {
              id: "MOCKID",
              name: "MOCKNAME",
              email: "MOCKEMAIL",
              items: [],
            },
            token: undefined,
            error: false,
          },
        },
      };
      let expectedStateReturn = {
        error: false,
        activeUser: {},
      };
      let returnedState = auth(mockState, mockAction);
      expect(returnedState).toEqual(expectedStateReturn);
    });
  });
});
