const PRISMA_CLIENT_GENERATED_DEPENDENCIES = ['encoding', '_http_common'];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function webpackConfig(webpackConfig, options) {
  // Extracted from https://github.com/nrwl/nx/blob/master/packages/node/src/utils/node.config.ts#L29-L39
  webpackConfig.externals.push(function (context, callback) {
    if (PRISMA_CLIENT_GENERATED_DEPENDENCIES.includes(context.request)) {
      // not bundled
      return callback(null, `commonjs ${context.request}`);
    }

    // bundled
    callback();
  });

  return webpackConfig;
};
