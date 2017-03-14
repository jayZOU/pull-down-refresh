import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const option = {
    entry: './src/pullDownRefresh.js',
    plugins: [ 
        buble(),
        uglify()
    ],
}

rollup(option)
    .then((bundle) => {
        bundle.write({
            format: 'cjs',
            moduleName: 'pullDownRefresh',
            sourceMap: true,
            useStrict: false,
            dest: './dist/pullDownRefresh.cjs.js'
        });
        return rollup(option)
    })
    .then((bundle) => {
        bundle.write({
            format: 'iife',
            moduleName: 'pullDownRefresh',
            sourceMap: true,
            useStrict: false,
            dest: './dist/pullDownRefresh.global.js'
        });
        return rollup(option)
    })
    .then((bundle) => {
        bundle.write({
            format: 'umd',
            moduleName: 'pullDownRefresh',
            sourceMap: true,
            useStrict: false,
            dest: './dist/pullDownRefresh.umd.js'
        });
        return rollup({
            entry: './src/pullDownRefresh.js',
            plugins: [ 
                buble()
            ],
        })
    })
    .then((bundle) => {
        bundle.write({
            format: 'es',
            sourceMap: true,
            dest: './dist/pullDownRefresh.js'
        });
        // return rollup(option)
    })
