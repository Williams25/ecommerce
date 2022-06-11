module.exports = ({ config }) => {
  config.resolve.alias = {
    "next/image": require.resolve("./__mocks__/NextJSImageMock.js")
  };

  return config;
};
