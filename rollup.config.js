import buble from 'rollup-plugin-buble';

export default {
	moduleName: 'pullDownRefresh',
    entry: './src/main.js',
    sourceMap: true,
	useStrict: false,
    plugins: [ 
    	buble()
    ],
    targets: [
    	{
	        format: 'es',
	        dest: './dist/pullDownRefresh.js'
	    }, 
	    {
	        format: 'cjs',
	        dest: './dist/pullDownRefresh.cjs.js'
	    }, 
	    {
	        format: 'umd',
	        dest: './dist/pullDownRefresh.umd.js'
	    },
	    {
	    	format: 'iife',
	    	dest: './dist/pullDownRefresh.global.js',
	    }
    ],
    external: ['html'],

    globals: {
    	html: 'html'
    }
};