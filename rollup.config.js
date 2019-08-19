import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      "presets": [
        [
          "@babel/preset-env", {
          "targets": {
            "browsers": ["last 2 versions", "ie >= 10"]
          },
          "debug": false,
          "modules": false
        }]
      ],
      "plugins": [
        "@babel/plugin-external-helpers",
        "@babel/plugin-proposal-class-properties"
      ],
      babelrc: false
    }),
    nodeResolve({
      jsnext: true
    })
  ],
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  sourcemap: true
};