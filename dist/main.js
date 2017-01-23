/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import "./sass/main.sass";
	import ReactDOM from "react-dom";
	import Router, { Route, DefaultRoute } from "react-router";
	import App from "./components/App.jsx";
	import Insurance from "./components/information/Insurance.jsx";
	import Procedures from "./components/information/Procedures.jsx";

	let routes = React.createElement(
	  Route,
	  { name: "app", path: "/", handler: App },
	  React.createElement(Route, { name: "procedures", path: "procedures", handler: Procedures }),
	  React.createElement(DefaultRoute, { handler: Insurance })
	);

	Router.run(routes, function (Handler, state) {
	  let params = state.params;
	  ReactDOM.render(React.createElement(Handler, { params: params }), document.body);
	});

/***/ }
/******/ ]);