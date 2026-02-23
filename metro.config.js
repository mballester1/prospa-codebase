const path = require('path');
const projectRoot = __dirname;

// Ensure expo-asset can be found when resolved from project root (e.g. when it's
// only installed as a nested dependency of expo). Patch resolve-from before
// @expo/metro-config loads so getAssetPlugins() can resolve 'expo-asset/tools/hashAssetFiles'.
const resolveFromPath = require.resolve('resolve-from', { paths: [projectRoot] });
const resolveFrom = require(resolveFromPath);
const originalSilent = resolveFrom.silent;
if (originalSilent) {
  resolveFrom.silent = function (dir, id) {
    let result = originalSilent.call(this, dir, id);
    if (!result && id && id.startsWith('expo-asset/')) {
      try {
        const expoPkgPath = require.resolve('expo/package.json', { paths: [dir] });
        const expoDir = path.dirname(expoPkgPath);
        const expoNodeModules = path.join(expoDir, 'node_modules');
        result = originalSilent.call(this, expoNodeModules, id);
      } catch (_) {}
    }
    return result;
  };
}

const { getDefaultConfig } = require('expo/metro-config');
module.exports = getDefaultConfig(projectRoot);
