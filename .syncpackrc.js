// @ts-check

const path = require("node:path");
const { readdirSync, readFileSync } = require("fs");

const packagesNames = readdirSync(path.resolve(__dirname, "./packages")).map(
  (packageFolderName) => {
    const packageJSONPath = path.resolve(
      __dirname,
      "./packages",
      packageFolderName,
      "package.json"
    );
    const unparsedFile = readFileSync(packageJSONPath).toString();
    return JSON.parse(unparsedFile).name;
  }
);

/** @type {import("syncpack").RcFile} */
const config = {
  versionGroups: [
    {
      dependencies: packagesNames,
      packages: ["**"],
      dependencyTypes: ["peer"],
      pinVersion: "workspace:^",
    },
  ],
};

module.exports = config;
