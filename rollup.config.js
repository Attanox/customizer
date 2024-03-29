import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import static_files from 'rollup-plugin-static-files';

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: 'dist/index.ts',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.ts',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      static_files({
        include: ['./static'],
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      typescript(),
      terser(),
    ],
  },
];
