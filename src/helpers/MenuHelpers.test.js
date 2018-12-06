import { formatMenus } from "./menuHelpers";

describe("Format menu data", () => {
  it("Should filter empty menu categories", () => {
    const APIMenuResponse = {
      emptyCategory: [],
      filledCategory: [1, 2, 3]
    };

    const formatedMenu = formatMenus(APIMenuResponse);

    expect(formatedMenu.length).toBe(1);
    expect(formatedMenu[0][0]).toBe("filledCategory");
  });
});
