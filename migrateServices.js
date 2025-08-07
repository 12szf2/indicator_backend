#!/usr/bin/env node
/**
 * Service Migration Script - Automates updating service files with enhanced caching
 * Run with: node migrateServices.js
 */

import fs from "fs";
import path from "path";

const SERVICES_DIR = "./services";

// List of files to migrate (excluding already updated ones)
const EXCLUDED_FILES = [
  "alkalmazottak_munkaugy.service.js", // Already updated
  "alapadatok.service.js", // Already updated
  "auth.service.js", // Already updated
  "kompetencia.service.js", // Already updated
  "user.service.js", // Already updated
  "versenyek.service.js", // Already updated
];

function getServiceFiles() {
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((file) => file.endsWith(".service.js"))
    .filter((file) => !EXCLUDED_FILES.includes(file))
    .map((file) => path.join(SERVICES_DIR, file));
}

function updateImports(content) {
  // Replace old imports with new enhanced imports
  const oldImportPattern =
    /import prisma from "\.\.\/utils\/prisma\.js";\s*import \* as cache from "\.\.\/utils\/cache\.js";\s*(\/\/ Cache TTLs[^}]*};)?/s;

  const newImports = `import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import { ServiceCache, CACHE_TTL, withPerformanceMonitoring } from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache('SERVICE_NAME');`;

  return content.replace(oldImportPattern, newImports);
}

function updateFunctionDeclarations(content, serviceName) {
  // Replace async function declarations with withPerformanceMonitoring wrapped functions
  return content.replace(
    /export async function (\w+)\((.*?)\) \{/g,
    (match, functionName, params) => {
      return `export const ${functionName} = withPerformanceMonitoring('${serviceName}.${functionName}', async function(${params}) {`;
    }
  );
}

function updateCacheUsage(content) {
  // Replace old cache.get/set patterns with serviceCache.get
  return content
    .replace(
      /const cacheKey = `([^`]+)`;[\s\S]*?const cachedData = cache\.get\(cacheKey\);[\s\S]*?if \(cachedData\) \{[\s\S]*?return cachedData;[\s\S]*?}[\s\S]*?const data = await ([^;]+);[\s\S]*?cache\.set\(cacheKey, data, [^)]+\);[\s\S]*?return data;/g,
      (match, cacheKeyTemplate, query) => {
        return `return serviceCache.get(
    'CACHE_KEY',
    async () => {
      return await ${query};
    },
    CACHE_TTL.MEDIUM
  );`;
      }
    )
    .replace(
      /cache\.delByPattern\([^)]+\);/g,
      "serviceCache.invalidateRelated('operation', id);"
    );
}

function updateClosingBraces(content) {
  // Fix function closing braces
  return content.replace(/}\s*$/gm, "});");
}

function migrateServiceFile(filePath) {
  console.log(`Migrating: ${filePath}`);

  try {
    let content = fs.readFileSync(filePath, "utf8");
    const serviceName = path.basename(filePath, ".service.js");

    // Apply transformations
    content = updateImports(content);
    content = content.replace("SERVICE_NAME", serviceName);
    content = updateFunctionDeclarations(content, serviceName);
    content = updateCacheUsage(content);
    content = updateClosingBraces(content);

    // Create backup
    fs.writeFileSync(`${filePath}.backup`, fs.readFileSync(filePath));

    // Write updated content
    fs.writeFileSync(filePath, content);

    console.log(`✅ Successfully migrated: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error migrating ${filePath}:`, error.message);
  }
}

function main() {
  console.log("🚀 Starting service migration...\n");

  const serviceFiles = getServiceFiles();
  console.log(`Found ${serviceFiles.length} service files to migrate:\n`);

  serviceFiles.forEach((file) => {
    console.log(`  - ${file}`);
  });

  console.log("\n📝 Starting migration process...\n");

  serviceFiles.forEach(migrateServiceFile);

  console.log("\n✨ Migration complete!");
  console.log("\n⚠️  Manual review recommended for:");
  console.log("  - Cache key naming");
  console.log("  - Function parameter handling");
  console.log("  - Complex cache invalidation logic");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
