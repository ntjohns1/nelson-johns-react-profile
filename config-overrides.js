module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": false,
    "fs": false,
    "os": false
  };
  return config;
};
