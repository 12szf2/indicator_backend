#!/usr/bin/env node

/**
 * Script to validate API documentation setup
 * Run this to ensure Swagger documentation is properly configured
 */

import fs from "fs";
import path from "path";

console.log("🔍 Validating API Documentation Setup...\n");

// Check if required files exist
const requiredFiles = [
  "controllers/tablelist.controller.js",
  "utils/swagger.js",
  "openapi.yaml",
  "API_README.md",
  "API_DOCUMENTATION_GUIDE.md",
];

let allFilesExist = true;

requiredFiles.forEach((file) => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} - exists`);
  } else {
    console.log(`❌ ${file} - missing`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log("\n❌ Some required files are missing!");
  process.exit(1);
}

// Check package.json for required dependencies
console.log("\n🔍 Checking dependencies...");
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const requiredDeps = ["swagger-jsdoc", "swagger-ui-express"];

requiredDeps.forEach((dep) => {
  if (packageJson.dependencies[dep]) {
    console.log(`✅ ${dep} - installed`);
  } else {
    console.log(`❌ ${dep} - missing`);
    allFilesExist = false;
  }
});

// Check if swagger setup is in index.js
console.log("\n🔍 Checking swagger setup in index.js...");
const indexContent = fs.readFileSync("index.js", "utf8");
if (indexContent.includes("setupSwagger")) {
  console.log("✅ Swagger setup found in index.js");
} else {
  console.log("❌ Swagger setup not found in index.js");
  allFilesExist = false;
}

// Check if tablelist controller has swagger docs
console.log("\n🔍 Checking TableList controller documentation...");
const tablelistContent = fs.readFileSync(
  "controllers/tablelist.controller.js",
  "utf8"
);
if (
  tablelistContent.includes("@swagger") &&
  tablelistContent.includes("TableList")
) {
  console.log("✅ TableList controller has Swagger documentation");
} else {
  console.log("❌ TableList controller missing Swagger documentation");
  allFilesExist = false;
}

if (allFilesExist) {
  console.log("\n🎉 All API documentation setup is complete!");
  console.log("\n📚 Next steps:");
  console.log("1. Start your server: npm run dev");
  console.log("2. Visit: http://localhost:5300/api-docs");
  console.log("3. Login first to access the documentation");
  console.log("4. Test the TableList endpoints");
  console.log("\n📖 Documentation files:");
  console.log("- API_README.md - Complete API documentation");
  console.log("- openapi.yaml - OpenAPI specification");
  console.log("- API_DOCUMENTATION_GUIDE.md - Guidelines for adding docs");
} else {
  console.log("\n❌ Setup incomplete. Please check the missing items above.");
  process.exit(1);
}
