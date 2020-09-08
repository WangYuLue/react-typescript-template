import React from 'react';

const config = { name: 'wanger' };

const ConfigProvider = React.createContext(config);

export {
  config,
  ConfigProvider
};