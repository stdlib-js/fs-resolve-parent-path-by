/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert-is-function' );
var format = require( '@stdlib/string-format' );
var cwd = require( '@stdlib/process-cwd' );
var exists = require( '@stdlib/fs-exists' );
var validate = require( './validate.js' );


// MAIN //

/**
* Asynchronously resolves a path according to a predicate function by walking parent directories.
*
* @param {string} path - path to resolve
* @param {Options} [options] - function options
* @param {string} [options.dir] - base directory
* @param {Function} predicate - callback which tests whether a resolved path passes a test
* @param {Function} clbk - callback to invoke after resolving a path
* @throws {TypeError} first argument must be a string
* @throws {TypeError} predicate function argument must be a function
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
*
* @example
* resolveParentPathBy( 'package.json', predicate, onPath );
*
* function predicate( path, next ) {
*     next( null, true );
* }
*
* function onPath( error, path ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( path );
* }
*/
function resolveParentPathBy( path, options, predicate, clbk ) {
	var spath;
	var child;
	var test;
	var opts;
	var done;
	var dir;
	var err;
	if ( !isString( path ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', path ) );
	}
	opts = {};
	if ( arguments.length > 3 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		test = predicate;
		done = clbk;
	} else {
		test = options;
		done = predicate;
	}
	if ( !isFunction( test ) ) {
		throw new TypeError( format( 'invalid argument. Predicate function must be a function. Value: `%s`.', test ) );
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', done ) );
	}
	if ( opts.dir ) {
		dir = resolve( cwd(), opts.dir );
	} else {
		dir = cwd();
	}
	spath = resolve( dir, path );
	exists( spath, onExists );

	/**
	* Resolves the next candidate path.
	*
	* @private
	* @returns {void}
	*/
	function next() {
		// Resolve a parent directory:
		child = dir;
		dir = resolve( dir, '..' );

		// If we have already reached root, we cannot resolve any higher directories...
		if ( child === dir ) {
			return done( null, null );
		}
		// Resolve the next search path:
		spath = resolve( dir, path );
		exists( spath, onExists );
	}

	/**
	* Callback invoked after checking for path existence.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating if a path exists
	* @returns {void}
	*/
	function onExists( error, bool ) { // eslint-disable-line handle-callback-err
		if ( bool ) {
			return test( spath, onTest );
		}
		next();
	}

	/**
	* Callback invoked after testing a resolved path.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating if a path exists
	* @returns {void}
	*/
	function onTest( error, bool ) {
		if ( error ) {
			return done( error );
		}
		if ( bool ) {
			return done( null, spath );
		}
		next();
	}
}


// EXPORTS //

module.exports = resolveParentPathBy;
