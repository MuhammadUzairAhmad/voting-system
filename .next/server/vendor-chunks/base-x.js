"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/base-x";
exports.ids = ["vendor-chunks/base-x"];
exports.modules = {

/***/ "(ssr)/./node_modules/base-x/src/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/base-x/src/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// base-x encoding / decoding\n// Copyright (c) 2018 base-x contributors\n// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)\n// Distributed under the MIT software license, see the accompanying\n// file LICENSE or http://www.opensource.org/licenses/mit-license.php.\nfunction base (ALPHABET) {\n  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }\n  const BASE_MAP = new Uint8Array(256)\n  for (let j = 0; j < BASE_MAP.length; j++) {\n    BASE_MAP[j] = 255\n  }\n  for (let i = 0; i < ALPHABET.length; i++) {\n    const x = ALPHABET.charAt(i)\n    const xc = x.charCodeAt(0)\n    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }\n    BASE_MAP[xc] = i\n  }\n  const BASE = ALPHABET.length\n  const LEADER = ALPHABET.charAt(0)\n  const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up\n  const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up\n  function encode (source) {\n    // eslint-disable-next-line no-empty\n    if (source instanceof Uint8Array) { } else if (ArrayBuffer.isView(source)) {\n      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)\n    } else if (Array.isArray(source)) {\n      source = Uint8Array.from(source)\n    }\n    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }\n    if (source.length === 0) { return '' }\n    // Skip & count leading zeroes.\n    let zeroes = 0\n    let length = 0\n    let pbegin = 0\n    const pend = source.length\n    while (pbegin !== pend && source[pbegin] === 0) {\n      pbegin++\n      zeroes++\n    }\n    // Allocate enough space in big-endian base58 representation.\n    const size = ((pend - pbegin) * iFACTOR + 1) >>> 0\n    const b58 = new Uint8Array(size)\n    // Process the bytes.\n    while (pbegin !== pend) {\n      let carry = source[pbegin]\n      // Apply \"b58 = b58 * 256 + ch\".\n      let i = 0\n      for (let it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {\n        carry += (256 * b58[it1]) >>> 0\n        b58[it1] = (carry % BASE) >>> 0\n        carry = (carry / BASE) >>> 0\n      }\n      if (carry !== 0) { throw new Error('Non-zero carry') }\n      length = i\n      pbegin++\n    }\n    // Skip leading zeroes in base58 result.\n    let it2 = size - length\n    while (it2 !== size && b58[it2] === 0) {\n      it2++\n    }\n    // Translate the result into a string.\n    let str = LEADER.repeat(zeroes)\n    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }\n    return str\n  }\n  function decodeUnsafe (source) {\n    if (typeof source !== 'string') { throw new TypeError('Expected String') }\n    if (source.length === 0) { return new Uint8Array() }\n    let psz = 0\n    // Skip and count leading '1's.\n    let zeroes = 0\n    let length = 0\n    while (source[psz] === LEADER) {\n      zeroes++\n      psz++\n    }\n    // Allocate enough space in big-endian base256 representation.\n    const size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.\n    const b256 = new Uint8Array(size)\n    // Process the characters.\n    while (source[psz]) {\n      // Decode character\n      let carry = BASE_MAP[source.charCodeAt(psz)]\n      // Invalid character\n      if (carry === 255) { return }\n      let i = 0\n      for (let it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {\n        carry += (BASE * b256[it3]) >>> 0\n        b256[it3] = (carry % 256) >>> 0\n        carry = (carry / 256) >>> 0\n      }\n      if (carry !== 0) { throw new Error('Non-zero carry') }\n      length = i\n      psz++\n    }\n    // Skip leading zeroes in b256.\n    let it4 = size - length\n    while (it4 !== size && b256[it4] === 0) {\n      it4++\n    }\n    const vch = new Uint8Array(zeroes + (size - it4))\n    let j = zeroes\n    while (it4 !== size) {\n      vch[j++] = b256[it4++]\n    }\n    return vch\n  }\n  function decode (string) {\n    const buffer = decodeUnsafe(string)\n    if (buffer) { return buffer }\n    throw new Error('Non-base' + BASE + ' character')\n  }\n  return {\n    encode,\n    decodeUnsafe,\n    decode\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (base);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmFzZS14L3NyYy9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQTZDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLCtCQUErQiw2Q0FBNkM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsiL1VzZXJzL3VzYW1hbGF0aWYvRGVza3RvcC93b3JrL3ZvdGluZy1zeXN0ZW0vbm9kZV9tb2R1bGVzL2Jhc2UteC9zcmMvZXNtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGJhc2UteCBlbmNvZGluZyAvIGRlY29kaW5nXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTggYmFzZS14IGNvbnRyaWJ1dG9yc1xuLy8gQ29weXJpZ2h0IChjKSAyMDE0LTIwMTggVGhlIEJpdGNvaW4gQ29yZSBkZXZlbG9wZXJzIChiYXNlNTguY3BwKVxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBzb2Z0d2FyZSBsaWNlbnNlLCBzZWUgdGhlIGFjY29tcGFueWluZ1xuLy8gZmlsZSBMSUNFTlNFIG9yIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwLlxuZnVuY3Rpb24gYmFzZSAoQUxQSEFCRVQpIHtcbiAgaWYgKEFMUEhBQkVULmxlbmd0aCA+PSAyNTUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxwaGFiZXQgdG9vIGxvbmcnKSB9XG4gIGNvbnN0IEJBU0VfTUFQID0gbmV3IFVpbnQ4QXJyYXkoMjU2KVxuICBmb3IgKGxldCBqID0gMDsgaiA8IEJBU0VfTUFQLmxlbmd0aDsgaisrKSB7XG4gICAgQkFTRV9NQVBbal0gPSAyNTVcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IEFMUEhBQkVULmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IEFMUEhBQkVULmNoYXJBdChpKVxuICAgIGNvbnN0IHhjID0geC5jaGFyQ29kZUF0KDApXG4gICAgaWYgKEJBU0VfTUFQW3hjXSAhPT0gMjU1KSB7IHRocm93IG5ldyBUeXBlRXJyb3IoeCArICcgaXMgYW1iaWd1b3VzJykgfVxuICAgIEJBU0VfTUFQW3hjXSA9IGlcbiAgfVxuICBjb25zdCBCQVNFID0gQUxQSEFCRVQubGVuZ3RoXG4gIGNvbnN0IExFQURFUiA9IEFMUEhBQkVULmNoYXJBdCgwKVxuICBjb25zdCBGQUNUT1IgPSBNYXRoLmxvZyhCQVNFKSAvIE1hdGgubG9nKDI1NikgLy8gbG9nKEJBU0UpIC8gbG9nKDI1NiksIHJvdW5kZWQgdXBcbiAgY29uc3QgaUZBQ1RPUiA9IE1hdGgubG9nKDI1NikgLyBNYXRoLmxvZyhCQVNFKSAvLyBsb2coMjU2KSAvIGxvZyhCQVNFKSwgcm91bmRlZCB1cFxuICBmdW5jdGlvbiBlbmNvZGUgKHNvdXJjZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7IH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHNvdXJjZSkpIHtcbiAgICAgIHNvdXJjZSA9IG5ldyBVaW50OEFycmF5KHNvdXJjZS5idWZmZXIsIHNvdXJjZS5ieXRlT2Zmc2V0LCBzb3VyY2UuYnl0ZUxlbmd0aClcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgc291cmNlID0gVWludDhBcnJheS5mcm9tKHNvdXJjZSlcbiAgICB9XG4gICAgaWYgKCEoc291cmNlIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgVWludDhBcnJheScpIH1cbiAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJycgfVxuICAgIC8vIFNraXAgJiBjb3VudCBsZWFkaW5nIHplcm9lcy5cbiAgICBsZXQgemVyb2VzID0gMFxuICAgIGxldCBsZW5ndGggPSAwXG4gICAgbGV0IHBiZWdpbiA9IDBcbiAgICBjb25zdCBwZW5kID0gc291cmNlLmxlbmd0aFxuICAgIHdoaWxlIChwYmVnaW4gIT09IHBlbmQgJiYgc291cmNlW3BiZWdpbl0gPT09IDApIHtcbiAgICAgIHBiZWdpbisrXG4gICAgICB6ZXJvZXMrK1xuICAgIH1cbiAgICAvLyBBbGxvY2F0ZSBlbm91Z2ggc3BhY2UgaW4gYmlnLWVuZGlhbiBiYXNlNTggcmVwcmVzZW50YXRpb24uXG4gICAgY29uc3Qgc2l6ZSA9ICgocGVuZCAtIHBiZWdpbikgKiBpRkFDVE9SICsgMSkgPj4+IDBcbiAgICBjb25zdCBiNTggPSBuZXcgVWludDhBcnJheShzaXplKVxuICAgIC8vIFByb2Nlc3MgdGhlIGJ5dGVzLlxuICAgIHdoaWxlIChwYmVnaW4gIT09IHBlbmQpIHtcbiAgICAgIGxldCBjYXJyeSA9IHNvdXJjZVtwYmVnaW5dXG4gICAgICAvLyBBcHBseSBcImI1OCA9IGI1OCAqIDI1NiArIGNoXCIuXG4gICAgICBsZXQgaSA9IDBcbiAgICAgIGZvciAobGV0IGl0MSA9IHNpemUgLSAxOyAoY2FycnkgIT09IDAgfHwgaSA8IGxlbmd0aCkgJiYgKGl0MSAhPT0gLTEpOyBpdDEtLSwgaSsrKSB7XG4gICAgICAgIGNhcnJ5ICs9ICgyNTYgKiBiNThbaXQxXSkgPj4+IDBcbiAgICAgICAgYjU4W2l0MV0gPSAoY2FycnkgJSBCQVNFKSA+Pj4gMFxuICAgICAgICBjYXJyeSA9IChjYXJyeSAvIEJBU0UpID4+PiAwXG4gICAgICB9XG4gICAgICBpZiAoY2FycnkgIT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdOb24temVybyBjYXJyeScpIH1cbiAgICAgIGxlbmd0aCA9IGlcbiAgICAgIHBiZWdpbisrXG4gICAgfVxuICAgIC8vIFNraXAgbGVhZGluZyB6ZXJvZXMgaW4gYmFzZTU4IHJlc3VsdC5cbiAgICBsZXQgaXQyID0gc2l6ZSAtIGxlbmd0aFxuICAgIHdoaWxlIChpdDIgIT09IHNpemUgJiYgYjU4W2l0Ml0gPT09IDApIHtcbiAgICAgIGl0MisrXG4gICAgfVxuICAgIC8vIFRyYW5zbGF0ZSB0aGUgcmVzdWx0IGludG8gYSBzdHJpbmcuXG4gICAgbGV0IHN0ciA9IExFQURFUi5yZXBlYXQoemVyb2VzKVxuICAgIGZvciAoOyBpdDIgPCBzaXplOyArK2l0MikgeyBzdHIgKz0gQUxQSEFCRVQuY2hhckF0KGI1OFtpdDJdKSB9XG4gICAgcmV0dXJuIHN0clxuICB9XG4gIGZ1bmN0aW9uIGRlY29kZVVuc2FmZSAoc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdzdHJpbmcnKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFN0cmluZycpIH1cbiAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoKSB9XG4gICAgbGV0IHBzeiA9IDBcbiAgICAvLyBTa2lwIGFuZCBjb3VudCBsZWFkaW5nICcxJ3MuXG4gICAgbGV0IHplcm9lcyA9IDBcbiAgICBsZXQgbGVuZ3RoID0gMFxuICAgIHdoaWxlIChzb3VyY2VbcHN6XSA9PT0gTEVBREVSKSB7XG4gICAgICB6ZXJvZXMrK1xuICAgICAgcHN6KytcbiAgICB9XG4gICAgLy8gQWxsb2NhdGUgZW5vdWdoIHNwYWNlIGluIGJpZy1lbmRpYW4gYmFzZTI1NiByZXByZXNlbnRhdGlvbi5cbiAgICBjb25zdCBzaXplID0gKCgoc291cmNlLmxlbmd0aCAtIHBzeikgKiBGQUNUT1IpICsgMSkgPj4+IDAgLy8gbG9nKDU4KSAvIGxvZygyNTYpLCByb3VuZGVkIHVwLlxuICAgIGNvbnN0IGIyNTYgPSBuZXcgVWludDhBcnJheShzaXplKVxuICAgIC8vIFByb2Nlc3MgdGhlIGNoYXJhY3RlcnMuXG4gICAgd2hpbGUgKHNvdXJjZVtwc3pdKSB7XG4gICAgICAvLyBEZWNvZGUgY2hhcmFjdGVyXG4gICAgICBsZXQgY2FycnkgPSBCQVNFX01BUFtzb3VyY2UuY2hhckNvZGVBdChwc3opXVxuICAgICAgLy8gSW52YWxpZCBjaGFyYWN0ZXJcbiAgICAgIGlmIChjYXJyeSA9PT0gMjU1KSB7IHJldHVybiB9XG4gICAgICBsZXQgaSA9IDBcbiAgICAgIGZvciAobGV0IGl0MyA9IHNpemUgLSAxOyAoY2FycnkgIT09IDAgfHwgaSA8IGxlbmd0aCkgJiYgKGl0MyAhPT0gLTEpOyBpdDMtLSwgaSsrKSB7XG4gICAgICAgIGNhcnJ5ICs9IChCQVNFICogYjI1NltpdDNdKSA+Pj4gMFxuICAgICAgICBiMjU2W2l0M10gPSAoY2FycnkgJSAyNTYpID4+PiAwXG4gICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gMjU2KSA+Pj4gMFxuICAgICAgfVxuICAgICAgaWYgKGNhcnJ5ICE9PSAwKSB7IHRocm93IG5ldyBFcnJvcignTm9uLXplcm8gY2FycnknKSB9XG4gICAgICBsZW5ndGggPSBpXG4gICAgICBwc3orK1xuICAgIH1cbiAgICAvLyBTa2lwIGxlYWRpbmcgemVyb2VzIGluIGIyNTYuXG4gICAgbGV0IGl0NCA9IHNpemUgLSBsZW5ndGhcbiAgICB3aGlsZSAoaXQ0ICE9PSBzaXplICYmIGIyNTZbaXQ0XSA9PT0gMCkge1xuICAgICAgaXQ0KytcbiAgICB9XG4gICAgY29uc3QgdmNoID0gbmV3IFVpbnQ4QXJyYXkoemVyb2VzICsgKHNpemUgLSBpdDQpKVxuICAgIGxldCBqID0gemVyb2VzXG4gICAgd2hpbGUgKGl0NCAhPT0gc2l6ZSkge1xuICAgICAgdmNoW2orK10gPSBiMjU2W2l0NCsrXVxuICAgIH1cbiAgICByZXR1cm4gdmNoXG4gIH1cbiAgZnVuY3Rpb24gZGVjb2RlIChzdHJpbmcpIHtcbiAgICBjb25zdCBidWZmZXIgPSBkZWNvZGVVbnNhZmUoc3RyaW5nKVxuICAgIGlmIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlciB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb24tYmFzZScgKyBCQVNFICsgJyBjaGFyYWN0ZXInKVxuICB9XG4gIHJldHVybiB7XG4gICAgZW5jb2RlLFxuICAgIGRlY29kZVVuc2FmZSxcbiAgICBkZWNvZGVcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgYmFzZVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/base-x/src/esm/index.js\n");

/***/ })

};
;