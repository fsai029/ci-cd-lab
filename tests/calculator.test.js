const { add, subtract, multiply, divide } = require("../src/calculator");

test("addition", () => {
    expect(add(5, 3)).toBe(8);
});

test("subtraction", () => {
    expect(subtract(5, 3)).toBe(2);
});

test("multiplication", () => {
    expect(multiply(5, 3)).toBe(15);
});

test("division", () => {
    expect(divide(6, 3)).toBe(2);
});

test("division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});