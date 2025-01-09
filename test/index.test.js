import test from "node:test";
import assert from "node:assert";

import * as hello from "../lib/index.js";

test("Success test", async (t) => {
  assert.strictEqual(hello.say(), "Hello, conditional exports(/lib/index.js)!");
});
