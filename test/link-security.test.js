import test from "node:test";
import assert from "node:assert/strict";
import { safeHref } from "../js/link-security.js";

test("accepts approved HTTPS links and email addresses", () => {
  assert.equal(safeHref("https://github.com/mertsurucu1"), "https://github.com/mertsurucu1");
  assert.equal(safeHref("linkedin.com/in/mertsurucu1"), "https://linkedin.com/in/mertsurucu1");
  assert.equal(safeHref("kamertsurucu@gmail.com"), "mailto:kamertsurucu@gmail.com");
});

test("rejects unsafe or unapproved link targets", () => {
  const unsafeValues = [
    "http://github.com/mertsurucu1",
    "javascript:alert(1)",
    "https://github.com.evil.example/mertsurucu1",
    "https://github.com@evil.example/mertsurucu1",
    "https://example.com",
    "https://github.com:8443/mertsurucu1",
    "mailto:kamertsurucu@gmail.com?subject=unexpected"
  ];

  unsafeValues.forEach((value) => assert.equal(safeHref(value), null, value));
});
