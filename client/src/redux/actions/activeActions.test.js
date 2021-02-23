import { setActive, SET_ACTIVE } from "./activeActions";

describe("actionActions", () => {
  describe("setActive", () => {
    it("Should Return Proper SET_ACTIVE Payload on Function Call", () => {
      expect(setActive(1)).toEqual({ type: SET_ACTIVE, id: 1 });
    });
  });
});
