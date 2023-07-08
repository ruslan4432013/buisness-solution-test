import { RuleSetRule } from 'webpack';

const svgRegex = /\.svg$/i;

export const svgLoader: RuleSetRule = {
  test: svgRegex,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
};
