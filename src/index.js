const core = require("@actions/core");
const github = require("@actions/github");

try {
  const fixture = core.getInput("fixture");
  console.log(`Fixture: ${fixture}`);
} catch (error) {
  core.setFailed(error.message);
}
