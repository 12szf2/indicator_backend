/**
 * Cache migration utility
 * This script helps update service files to use the enhanced caching system
 */

import fs from "fs";
import path from "path";

const SERVICES_DIR = "./services";

/**
 * Template for the new cache imports and setup
 */
const NEW_IMPORTS_TEMPLATE = `import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import { ServiceCache, CACHE_TTL, withPerformanceMonitoring } from "../utils/serviceUtils.js";

// Initialize service cache
const serviceCache = new ServiceCache('SERVICE_NAME');`;

/**
 * Pattern replacements for common cache patterns
 */
const PATTERNS = [
  // Replace old cache TTL definitions
  {
    search: /const CACHE_TTL = \{[\s\S]*?\};/g,
    replace: "// Cache TTLs are now imported from serviceUtils",
  },

  // Replace old cache get patterns
  {
    search:
      /const cacheKey = [`'"]([^`'"]+)[`'"];\s*const cachedData = cache\.get\(cacheKey\);\s*if \(cachedData\) \{\s*return cachedData;\s*\}/g,
    replace: (match, key) =>
      `// Using enhanced serviceCache.get() - see function implementation`,
  },

  // Replace cache.set patterns
  {
    search: /cache\.set\(cacheKey, data, CACHE_TTL\.[A-Z_]+\);/g,
    replace: "// Cache setting is now handled by serviceCache.get()",
  },

  // Replace cache invalidation patterns
  {
    search: /cache\.del\([^)]+\);/g,
    replace: "serviceCache.invalidateRelated('operation', id);",
  },

  // Replace delByPattern calls
  {
    search: /cache\.delByPattern\([^)]+\);/g,
    replace: "serviceCache.invalidate('pattern');",
  },
];

/**
 * Generate enhanced function template
 */
function generateEnhancedFunction(serviceName, functionName, isAsync = true) {
  const asyncKeyword = isAsync ? "async " : "";
  return `export const ${functionName} = withPerformanceMonitoring('${serviceName}.${functionName}', ${asyncKeyword}function(`;
}

/**
 * Update a service file with enhanced caching
 */
async function updateServiceFile(filePath) {
  console.log(`Updating ${filePath}...`);

  try {
    let content = fs.readFileSync(filePath, "utf8");
    const serviceName = path.basename(filePath, ".service.js");

    // Update imports
    content = content.replace(
      /import prisma from "\.\.\/utils\/prisma\.js";\s*import \* as cache from "\.\.\/utils\/cache\.js";/,
      NEW_IMPORTS_TEMPLATE.replace("SERVICE_NAME", serviceName)
    );

    // Apply pattern replacements
    PATTERNS.forEach((pattern) => {
      content = content.replace(pattern.search, pattern.replace);
    });

    // Convert function declarations to enhanced format (manual step needed)
    console.log(`  - Basic patterns updated for ${serviceName}`);
    console.log(`  - Manual function conversion needed for ${serviceName}`);

    // Write back the file
    fs.writeFileSync(filePath, content);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

/**
 * Generate summary of recommended updates for each service
 */
function generateUpdateSummary() {
  const services = [
    "versenyek",
    "lemorzsolodas",
    "elegedettseg",
    "elegedettseg_meres",
    "elhelyezkedes",
    "felvettek_szama",
    "hh_es_hhh_nevelesu_tanulok",
    "intezmenyi_neveltseg",
    "muhelyiskola",
    "nszfh",
    "oktato_egyeb_tev",
    "sajatos_nevelesu_tanulok",
    "szakmai_vizsga_eredmenyek",
    "szmsz",
    "tanugyi_adatok",
    "tanulo_letszam",
    "vizsgaeredmenyek",
    "dobbanto",
    "egy_oktatora_juto_tanulo",
    "alkalmazottak_munkaugy",
  ];

  const summary = `
# Cache Enhancement Summary

## ✅ Already Updated:
- alapadatok.service.js
- kompetencia.service.js  
- user.service.js

## 📋 Recommended Updates for Remaining Services:

${services
  .map(
    (service) => `
### ${service}.service.js
**Common patterns to update:**
1. Replace \`export async function\` with \`export const functionName = withPerformanceMonitoring\`
2. Use \`serviceCache.get(operation, queryFn, ttl, ...params)\` for cached reads
3. Use \`serviceCache.invalidateRelated(operation, id)\` for cache invalidation
4. Convert year-range queries to use \`queryOptimizations.getByYearRange\`

**Example transformation:**
\`\`\`javascript
// Before:
export async function getAll(tanev) {
  const cacheKey = "service:all";
  const cachedData = cache.get(cacheKey);
  if (cachedData) return cachedData;
  
  const data = await prisma.model.findMany({...});
  cache.set(cacheKey, data, CACHE_TTL.LIST);
  return data;
}

// After:
export const getAll = withPerformanceMonitoring('${service}.getAll', async function(tanev) {
  return serviceCache.get(
    'all',
    () => queryOptimizations.getByYearRange('${service}', tanev, include),
    CACHE_TTL.MEDIUM,
    tanev
  );
});
\`\`\`
`
  )
  .join("")}

## 🚀 Benefits of Enhanced Caching:
- **LRU eviction** prevents memory overflow
- **Smart invalidation** patterns reduce cache misses
- **Performance monitoring** identifies slow operations
- **Batch operations** for better database efficiency
- **Memory usage tracking** and automatic cleanup
- **Hit rate monitoring** for cache optimization

## 📊 Usage Analytics:
After migration, you can monitor cache performance at:
- \`GET /system/cache/stats\` - Cache statistics
- \`GET /system/metrics\` - Overall performance metrics
`;

  fs.writeFileSync("./CACHE_MIGRATION_SUMMARY.md", summary);
  console.log("📄 Generated CACHE_MIGRATION_SUMMARY.md");
}

// Run the summary generator
generateUpdateSummary();

console.log(`
🎯 Cache Enhancement Status:
✅ Core utilities created (serviceUtils.js, queryOptimizations.js)
✅ Enhanced cache system implemented (cache.js)
✅ Sample services updated (alapadatok, kompetencia, user)

📋 Next Steps:
1. Review CACHE_MIGRATION_SUMMARY.md for detailed migration guide
2. Apply similar patterns to remaining service files
3. Test cache performance with /system/metrics endpoint
4. Monitor memory usage and hit rates
`);
