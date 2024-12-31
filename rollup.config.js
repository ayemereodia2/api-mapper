import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';


export default {
    input: 'src/index.ts', // Entry file
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        typescript(),
        resolve(),
    ],
    external: ['react', 'react-dom'], // Mark React as an external dependency
};
