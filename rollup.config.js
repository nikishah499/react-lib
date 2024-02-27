import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import babel from 'rollup-plugin-babel';
// import uglify from 'rollup-plugin-uglify';

const packageJson = require('./package.json');

export default [
    {
        input: 'index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'iife',
                sourcemap: 'inline',
                name: 'reactlib'
            }
        ],
        plugins: [
            external(),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
              }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss(),
            terser(),
            babel({
                exclude: 'node_modules/**',
            }),
            // uglify()
        ],
    },
]
