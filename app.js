"use strict";

import { addContact } from "./scripts.js";

$(() => {
  $("#addContact").on("submit", addContact);
});
