import Cookie from "js-cookie";
import configureStore from "redux-mock-store";

import { LOGIN_USER, LOGOUT_USER, REFRESH_SESSION } from "./authActions";

import { loginUser, logoutUser, refreshSession } from "./authActions";

import { loginHandler, logoutHandler, signupHandler } from "./authActions";

describe("AuthActions", () => {
  describe("Actions", () => {
    let mockData;
    let mockObj;
    beforeEach(() => {
      mockData = "mockData";
      mockObj = {
        loginUserSpy: loginUser,
        logoutUserSpy: logoutUser,
        refreshSessionSpy: refreshSession,
      };
    });
    it("Should Return Proper loginUser Payload on Function Call", () => {
      const spy = jest.spyOn(mockObj, "loginUserSpy");
      expect(mockObj.loginUserSpy(mockData)).toEqual({
        type: LOGIN_USER,
        data: mockData,
      });
      expect(spy).toBeCalledTimes(1);
    });
    it("Should Return Proper logoutUser Payload on Function Call", () => {
      const spy = jest.spyOn(mockObj, "logoutUserSpy");
      expect(mockObj.logoutUserSpy(mockData)).toEqual({
        type: LOGOUT_USER,
        data: mockData,
      });
      expect(spy).toBeCalledTimes(1);
    });
    it("Should Return Proper refreshSession Payload on Function Call", () => {
      const spy = jest.spyOn(mockObj, "refreshSessionSpy");
      expect(mockObj.refreshSessionSpy(mockData)).toEqual({
        type: REFRESH_SESSION,
        data: mockData,
      });
      expect(spy).toBeCalledTimes(1);
    });
  });
  describe("LoginHandler Thunk", () => {
    let mockData;
    beforeEach(() => {
      mockData = {
        mockData: "mockData",
        Login: {
          token: "mockToken",
        },
      };
    });
    it("loginHandler Should Call Dispatch Internally", async () => {
      const dispatch = jest.fn();
      await loginHandler(mockData)(dispatch);
      expect(dispatch).toBeCalledTimes(1);
    });
    it("loginHandler Should 'set' Cookie", async () => {
      let cookieSpy = jest.spyOn(Cookie, "set");
      const dispatch = jest.fn();
      await loginHandler(mockData)(dispatch);
      expect(cookieSpy).toBeCalledTimes(1);
    });
  });
  describe("LogoutHandler Thunk", () => {
    let mockData;
    beforeEach(() => {
      mockData = {
        mockData: "mockData",
        Login: {
          token: "mockToken",
        },
      };
    });
    it("logoutHandler Should Call Dispatch Internally", async () => {
      const dispatch = jest.fn();
      await logoutHandler(mockData)(dispatch);
      expect(dispatch).toBeCalledTimes(1);
    });
    it("loginHandler Should 'remove' Cookie", async () => {
      let cookieSpy = jest.spyOn(Cookie, "remove");
      const dispatch = jest.fn();
      await logoutHandler(mockData)(dispatch);
      expect(cookieSpy).toBeCalledTimes(1);
    });
  });
  describe("SignupHandler", () => {
    let mockData;
    beforeEach(() => {
      mockData = {
        mockData: "mockData",
        Signup: {
          token: "mockToken",
        },
      };
    });
    it("signupHandler Should Call Dispatch Internally", async () => {
      const dispatch = jest.fn();
      await signupHandler(mockData)(dispatch);
      expect(dispatch).toBeCalledTimes(1);
    });
    it("signupHandler Should 'set' Cookie", async () => {
      let cookieSpy = jest.spyOn(Cookie, "set");
      const dispatch = jest.fn();
      await signupHandler(mockData)(dispatch);
      expect(cookieSpy).toBeCalledTimes(1);
    });
  });
});
