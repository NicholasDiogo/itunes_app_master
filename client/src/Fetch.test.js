test("returns a promises", () => {
  setTimeout(() => {
    expect.assertions(1);
    async function fetchData() {
      let search = text;
      await fetch(`api/${search}/${option}`)
        .then((results) => results.json())
        .then((res) => {
          expect(res).toBe("pass");
        });
    }
    fetchData("pass");
  }, 1000);
});
