/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\nconsole.log('app is runnung');\r\nconsole.log(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"square\"])(5));\r\nconsole.log(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(5,1));\r\nconsole.log(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5,1));\r\n\r\n// const obj = {\r\n//     name: 've',\r\n//     getName() {\r\n//         return this.name;\r\n//     }\r\n// }\r\n\r\n// class IndecisionApp extends React.Component {\r\n//     constructor(props) {\r\n//         super(props);\r\n//         this.state = {\r\n//             title: 'Indecision',\r\n//             subTitle: 'subTitle',\r\n//             options: [1, 2, 3]\r\n//         }\r\n//         this.hasOptions = this.hasOptions.bind(this);\r\n//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);\r\n//         this.handlePick = this.handlePick.bind(this);\r\n//         this.handleAddOptions = this.handleAddOptions.bind(this);\r\n//         this.handleDeleteOption = this.handleDeleteOption.bind(this);\r\n//     }\r\n\r\n//     componentDidMount() {\r\n//         try {\r\n//             const options = JSON.parse(localStorage.getItem('options'));\r\n//             if(options) {\r\n//                 this.setState(() => ({options}));\r\n//             }\r\n//             console.log('did mount');\r\n//         } catch(e) {\r\n//             console.log(e);\r\n//         }\r\n//     }\r\n\r\n//     componentDidUpdate(prevProps, prevState) {\r\n//         if(prevState.options.length !== this.state.options.length) {\r\n//             const json = JSON.stringify(this.state.options);\r\n//             localStorage.setItem('options', json);\r\n//             console.log('save data');    \r\n//         }\r\n//         console.log('update');\r\n//     }\r\n\r\n//     componentWillUnmount() {\r\n//         console.log('unmount');\r\n//     }\r\n\r\n//     handleAddOptions(option) {\r\n//         if (!option) {\r\n//             return 'Enter valid value';\r\n//         } else if(this.state.options.includes(option)) {\r\n//             console.log('Duplicated value');\r\n//             return 'Duplicated value';\r\n//         }\r\n//         this.setState((prevState) => ({\r\n//                 options: prevState.options.concat(option)\r\n//         }));\r\n//     }\r\n\r\n//     handleDeleteOption(option) {\r\n//         this.setState((prevState) => ({\r\n//             options: prevState.options.filter(x => x !== option)\r\n//         }));\r\n//     }\r\n\r\n//     handleDeleteOptions() {\r\n//         this.setState(() => ({ options: [] }));\r\n//     }\r\n\r\n//     handlePick() {\r\n//         alert('pick');\r\n//     }\r\n\r\n//     hasOptions() {\r\n//         return this.state.options.length > 0;\r\n//     }\r\n\r\n//     render() {\r\n//         return (\r\n//             <div>\r\n//                 <Header title={this.state.title} subTitle={this.state.subTitle}/>\r\n//                 <Action \r\n//                     hasOptions={this.state.options.length > 0}\r\n//                     handlePick={this.handlePick}\r\n//                 />\r\n//                 <Options \r\n//                     options={this.state.options}\r\n//                     handleDeleteOptions={this.handleDeleteOptions}\r\n//                     handleDeleteOption={this.handleDeleteOption}\r\n//                 />\r\n//                 <AddOption \r\n//                     handleAddOptions={this.handleAddOptions}\r\n//                 />\r\n//             </div>\r\n//         );\r\n//     }\r\n// }\r\n\r\n// const Header = (props) => {\r\n//     return (\r\n//         <div>\r\n//             <h1>Indecision: {props.title}</h1>\r\n//             <h2>Put .... {props.subTitle}</h2>\r\n//         </div>\r\n//     );\r\n// };\r\n\r\n// Header.defaultProps = {\r\n//     title: 'Default Title'\r\n// }\r\n\r\n// const Action = (props) => {\r\n//     return (\r\n//         <div>\r\n//             <button \r\n//                 onClick={props.handlePick} \r\n//                 disabled={!props.hasOptions}>\r\n//                     What should I do?\r\n//             </button>\r\n//         </div>\r\n//     );\r\n// };\r\n\r\n// class AddOption extends React.Component {\r\n\r\n//     constructor(props) {\r\n//         super(props);\r\n//         this.onSubmit = this.onSubmit.bind(this);\r\n//         this.state = {\r\n//             error: null\r\n//         }\r\n//     }\r\n//     onSubmit(event) {\r\n//         event.preventDefault();\r\n//         const option = event.target.elements.option.value.trim();\r\n//         event.target.elements.option.value = '';\r\n//         this.setState(() => ({error: ''}));\r\n//         const error = this.props.handleAddOptions(option);\r\n//         this.setState(() => ({error}));\r\n//     }\r\n\r\n//     render() {\r\n//         return (\r\n//             <div>\r\n//                 {this.state.error && <p>{this.state.error}</p>}\r\n//                 <form onSubmit={this.onSubmit}>\r\n//                     <input type=\"text\" name=\"option\" />\r\n//                     <button>Add option</button>\r\n//                 </form>\r\n//             </div>\r\n//         )\r\n//     }\r\n// }\r\n\r\n// const Options = (props) => {\r\n//     return (\r\n//         <div>\r\n//             <button onClick={props.handleDeleteOptions}>Remove all</button>\r\n//             <p>Options ({props.options.length}):</p>\r\n//             {\r\n//                 props.options.map(x => (\r\n//                     <Option \r\n//                         key={x} \r\n//                         option={x} \r\n//                         handleDeleteOption={props.handleDeleteOption}\r\n//                     /> \r\n//                 ))\r\n//             }\r\n//         </div>\r\n//     );\r\n// };\r\n\r\n// const Option = (props) => {\r\n//     return (\r\n//         <div>\r\n//             Option Component is {props.option}\r\n//             <button \r\n//                 onClick={(e) => {\r\n//                     props.handleDeleteOption(props.option)\r\n//                 }}\r\n\r\n//             >remove</button>\r\n//         </div>\r\n//     );\r\n// };\r\n\r\n// const User = (props) => {\r\n//     return (\r\n//         <div>\r\n//             <p>Name: {props.name}</p>\r\n//             <p>Age: {props.age}</p>\r\n//         </div>\r\n//     );\r\n// };\r\n\r\n// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: square, add, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return substract; });\nconsole.log('util is runnung');\r\n\r\n// export const square = (x) => x * x;\r\n// export const add = (a,b) => a + b;\r\nconst square = (x) => x * x;\r\nconst add = (a,b) => a + b;\r\n\r\nconst substract = (a,b) => a - b;\r\n\r\n\r\n\r\n// export default substract;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });