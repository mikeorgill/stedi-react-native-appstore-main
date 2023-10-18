import hello from "../utils/hello.js";

it("Should say Hello", () => {
    const helloString = hello();
    console.log("Hello " ,helloString);

    expect(helloString).toBe("Mike");
})