// LeetCode - Easy - 2704

function expect(val) {
  return {
    toBe(val2) {
      if (val === val2) {
        return true;
      }

      throw new Error("Not Equal");
    },

    notToBe(val2) {
      if (val !== val2) {
        return true;
      }

      throw new Error("Equal");
    },

    value: null,
  };
}
