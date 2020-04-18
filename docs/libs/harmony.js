(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Harmony"] = factory();
	else
		root["Harmony"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/audio-system/audio-system.js
/* global Harmony */
var AudioSystem = function AudioSystem() {
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  this.context = new AudioContext();
  this.master = this.context.createGain();
  this.components = [];
  this.cache = {};
  this.master.connect(this.context.destination);
  this.audioComponentName = 'audio';
};

AudioSystem.prototype.play = function (entity, name) {
  var source = this.context.createBufferSource();
  var gain = this.context.createGain();
  entity.components.audio.source = source;
  source.buffer = this.cache[name];
  source.connect(gain);
  gain.connect(this.master);
  gain.gain.value = entity.components.audio.volume;
  source.start();
};

AudioSystem.prototype.stop = function (entity) {
  if (entity.components.audio.source) {
    entity.components.audio.source.stop();
  }
};

AudioSystem.prototype.addAudioComponent = function (entity, config) {
  var component = new Harmony.AudioComponent(config, this);
  component.entity = entity;
  entity.components[this.audioComponentName] = component;
  this.components.push(component);
};

AudioSystem.prototype.update = function () {
  if (this.context.state === 'suspended') {
    this.context.resume();
  }

  for (var i = this.components.length; i--;) {
    var component = this.components[i];

    if (component.mustDestroy) {
      this.components.splice(i, 1);
    }
  }
};

AudioSystem.prototype.destroyComponent = function (entity) {
  this.stop(entity);
  entity.components.audio.mustDestroy = true;
};

/* harmony default export */ var audio_system = (AudioSystem);
// CONCATENATED MODULE: ./src/audio-system/audio-component.js
var AudioComponent = function AudioComponent(params, system) {
  var config = Object.assign({
    volume: 1
  }, params);
  this.system = system;
  this.source = null;
  this.volume = config.volume;
  this.mustDestroy = false;
};

/* harmony default export */ var audio_component = (AudioComponent);
// CONCATENATED MODULE: ./src/loader/loader.js
/* global Image */
var Loader = function Loader() {
  this.imagesCache = {};
  this.audioCache = {};
  this.start = false;
  this.loading = false;
  this.complete = false;
  this.errors = 0;
  this.success = 0;
  this.queued = 0;
};

Loader.prototype.loadImage = function (config) {
  var _this = this;

  this.queued++;
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      _this.success++;
      _this.imagesCache[config.name] = image;

      _this.onSuccess(config);

      resolve(image);
    };

    image.onerror = function (reason) {
      _this.errors++;

      _this.onError(config);

      reject(reason);
    };

    image.src = config.url;
  });
};

Loader.prototype.loadAudio = function (config) {
  var _this2 = this;

  this.queued++;
  return new Promise(function (resolve, reject) {
    var xhr = new window.XMLHttpRequest();
    var AudioContext = new (window.AudioContext || window.webkitAudioContext)();
    xhr.open('GET', config.url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function () {
      AudioContext.decodeAudioData(xhr.response, function (buffer) {
        _this2.success++;
        _this2.audioCache[config.name] = buffer;

        _this2.onSuccess(config);

        resolve(buffer);
      }, function (reason) {
        _this2.errors++;

        _this2.onError(config);

        reject(reason);
      });
    };

    xhr.onerror = function (reason) {
      _this2.errors++;

      _this2.onError(config);

      reject(reason);
    };

    xhr.send();
  });
};

Loader.prototype.onStart = function () {};

Loader.prototype.onSuccess = function () {};

Loader.prototype.onError = function () {};

Loader.prototype.onProgress = function () {};

Loader.prototype.onComplete = function () {};

Loader.prototype.update = function () {
  if (this.queued > 0) {
    if (!this.start) {
      this.start = true;
      this.onStart();
    }

    if (this.queued === this.success + this.errors) {
      this.queued = 0;
      this.success = 0;
      this.errors = 0;
      this.loading = false;
      this.complete = true;
      this.start = false;
      this.onComplete();
    } else {
      this.loading = true;
      this.complete = false;
    }

    var progress = Math.floor((this.success + this.errors) / this.queued * 100);

    if (isNaN(progress)) {
      progress = 100;
    }

    this.onProgress(progress);
  }
};

/* harmony default export */ var loader = (Loader);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(1);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./src/engine/engine.js



/* global Harmony */
var engine_Engine = function Engine(canvas) {
  var _this = this;

  this.loader = new Harmony.Loader();
  this.loop = new Harmony.LoopSystem();
  this.scene = new Harmony.SceneSystem();
  this.render = new Harmony.RenderSystem(canvas);
  this.audio = new Harmony.AudioSystem();
  this.entities = new Harmony.EntitySystem();
  this.keys = new Harmony.KeySystem();
  this.physics = new Harmony.PhysicsSystem(canvas);
  this.pointers = new Harmony.PointerSystem(canvas);
  this.behaviours = new Harmony.BehaviourSystem(this);
  this.state = new Harmony.StateSystem();
  this.helpers = new Harmony.Helpers();
  this.loop.onStep = /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_this.scene.current) {
              if (_this.scene.mustPreload) {
                if (!_this.loader.loading) {
                  _this.scene.current.preload(_this);
                }

                _this.loader.update();

                if (_this.loader.complete) {
                  _this.render.cache = _this.loader.imagesCache;
                  _this.audio.cache = _this.loader.audioCache;

                  _this.scene.requestCreate();
                }
              }

              if (_this.scene.mustCreate) {
                _this.scene.requestUpdate();

                _this.scene.current.create(_this);
              }

              if (_this.scene.mustUpdate) {
                _this.scene.requestDraw();

                _this.keys.update();

                _this.pointers.update();

                _this.audio.update();

                _this.physics.update();

                _this.entities.update();

                _this.behaviours.update();

                _this.state.update(_this);

                _this.scene.current.update(_this);
              }

              if (_this.scene.mustDraw) {
                _this.scene.requestUpdate();

                _this.render.draw();

                _this.physics.drawDebugData();

                _this.scene.current.draw(_this);
              }
            }

            if (_this.scene.mustSwitch) {
              _this.entities.destroyAll();

              _this.pointers.destroy();

              _this.keys.destroy();

              _this.scene.current = _this.scene.requested;

              _this.scene.requestPreload();
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  this.loop.run();
};

/* harmony default export */ var engine = (engine_Engine);
// CONCATENATED MODULE: ./src/entity-system/entity.js
var Entity = function Entity(params) {
  var config = Object.assign({
    tags: [],
    x: 0,
    y: 0,
    angle: 0,
    scale: 1
  }, params);
  this.mustDestroy = false;
  this.components = {};
  this.tags = config.tags;
  this.x = config.x;
  this.y = config.y;
  this.angle = config.angle;
  this.scale = config.scale;
};

/* harmony default export */ var entity = (Entity);
// CONCATENATED MODULE: ./src/helpers/helpers.js
var Helpers = function Helpers() {};

Helpers.prototype.createGrid = function (rows, cols) {
  var grid = new Array(cols);

  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows);
  }

  return grid;
};

Helpers.prototype.getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Helpers.prototype.getRandomItems = function (array, quantity) {
  var randomItems = [];

  for (var i = quantity; i--;) {
    var randomIndex = this.getRandomInt(0, array.length - 1);
    randomItems.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }

  return randomItems;
};

Helpers.prototype.shuffleArray = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var x = array[i];
    array[i] = array[j];
    array[j] = x;
  }

  return array;
};

/* harmony default export */ var helpers = (Helpers);
// CONCATENATED MODULE: ./src/key-system/key.js
var Key = function Key(key) {
  this.key = key;
  this.start = false;
  this.end = false;
  this.hold = false;
  this.holdTime = 0;
  this.startFrame = 0;
  this.endFrame = 0;
};

/* harmony default export */ var key = (Key);
// CONCATENATED MODULE: ./src/key-system/key-system.js
/* global Harmony */
var KeySystem = function KeySystem() {
  this.enabled = true;
  this.cache = {};
  this.delta = 0;
  this.now = 0;
  this.then = 0;
  this.frame = 0;
  document.addEventListener('keydown', this.handleKeyDown.bind(this), false);
  document.addEventListener('keyup', this.handleKeyUp.bind(this), false);
};

KeySystem.prototype.handleKeyDown = function (event) {
  if (typeof this.cache[event.key] !== 'undefined') {
    this.cache[event.key].hold = true;
  }
};

KeySystem.prototype.handleKeyUp = function (event) {
  if (typeof this.cache[event.key] !== 'undefined') {
    this.cache[event.key].hold = false;
  }
};

KeySystem.prototype.getOrSet = function (key) {
  if (typeof this.cache[key] === 'undefined') {
    this.cache[key] = new Harmony.Key(key);
  }

  return this.cache[key];
};

KeySystem.prototype.get = function (key) {
  return this.getOrSet(key);
};

KeySystem.prototype.update = function () {
  if (this.enabled) {
    this.frame++;
    this.now = window.performance.now();
    this.delta = this.now - this.then;
    this.then = this.now;

    for (var i in this.cache) {
      if (!Object.prototype.hasOwnProperty.call(this.cache, i)) {
        continue;
      }

      var key = this.cache[i];

      if (key.hold) {
        key.holdTime += this.delta;
        key.endFrame = -1;

        if (key.startFrame === -1) {
          key.startFrame = this.frame;
        }
      } else {
        key.holdTime = 0;
        key.startFrame = -1;

        if (key.endFrame === -1) {
          key.endFrame = this.frame;
        }
      }

      key.start = key.startFrame === this.frame;
      key.end = key.endFrame === this.frame;
    }
  }
};

KeySystem.prototype.destroy = function () {
  this.cache = {};
};

/* harmony default export */ var key_system = (KeySystem);
// CONCATENATED MODULE: ./src/loop-system/loop-system.js
var LoopSystem = function LoopSystem() {
  this.accumulator = 0;
  this.delta = 0;
  this.lastTime = 0;
  this.lastStep = 0;
  this.fps = 60;
  this.frame = 0;
  this.paused = false;
  this.timestep = 1000 / this.fps;
};

LoopSystem.prototype["continue"] = function () {
  this.paused = false;
};

LoopSystem.prototype.pause = function () {
  this.paused = true;
};

LoopSystem.prototype.run = function (timestamp) {
  timestamp = timestamp || 0;
  this.timestep = 1000 / this.fps;
  this.accumulator += timestamp - this.lastTime;
  this.lastTime = timestamp;

  while (!this.paused && this.accumulator >= this.timestep) {
    this.step();
    this.delta = timestamp - this.lastStep;
    this.lastStep = timestamp;
    this.accumulator -= this.timestep;
  }

  window.requestAnimationFrame(this.run.bind(this));
};

LoopSystem.prototype.step = function () {
  this.frame++;
  this.onStep();
};

LoopSystem.prototype.onStep = function () {};

/* harmony default export */ var loop_system = (LoopSystem);
// CONCATENATED MODULE: ./src/pointer-system/pointer.js
var Pointer = function Pointer() {
  this.active = false;
  this.hold = false;
  this.start = false;
  this.end = false;
  this.holdTime = 0;
  this.startFrame = 0;
  this.endFrame = 0;
  this.id = 0;
  this.type = null;
  this.startX = 0;
  this.startY = 0;
  this.offsetX = 0;
  this.offsetY = 0;
  this.x = 0;
  this.y = 0;
};

/* harmony default export */ var pointer = (Pointer);
// CONCATENATED MODULE: ./src/pointer-system/pointer-system.js
/* global Harmony */
var PointerSystem = function PointerSystem(canvas) {
  this.enabled = true;
  this.cache = {};
  this.delta = 0;
  this.now = 0;
  this.then = 0;
  this.frame = 0;
  this.canvas = canvas;
  this.enablePointers();
};

PointerSystem.prototype.getOrSet = function (pointer) {
  if (typeof this.cache[pointer] === 'undefined') {
    this.cache[pointer] = new Harmony.Pointer(pointer);
  }

  return this.cache[pointer];
};

PointerSystem.prototype.get = function (pointer) {
  return this.getOrSet(pointer);
};

PointerSystem.prototype.enablePointers = function () {
  this.canvas.style.touchAction = 'none'; // needed for mobile

  this.canvas.style.userSelect = 'none'; // needed for mobile

  this.canvas.addEventListener('pointerdown', this.handlePointerDown.bind(this), false);
  this.canvas.addEventListener('pointermove', this.handlePointerMove.bind(this), false);
  this.canvas.addEventListener('pointerup', this.handlePointerUpAndCancel.bind(this), false);
  this.canvas.addEventListener('pointercancel', this.handlePointerUpAndCancel.bind(this), false);
  this.canvas.addEventListener('pointerleave', this.handlePointerUpAndCancel.bind(this), false);
  window.addEventListener('contextmenu', this.handleContextMenu.bind(this), false);
};

PointerSystem.prototype.getPointerByID = function (id) {
  var output = false;

  for (var i in this.cache) {
    if (Object.hasOwnProperty.call(this.cache, i)) {
      var pointer = this.cache[i];

      if (pointer.id === id) {
        output = pointer;
      }
    }
  }

  return output;
};

PointerSystem.prototype.getInactivePointer = function () {
  var output = false;

  for (var i in this.cache) {
    if (Object.hasOwnProperty.call(this.cache, i)) {
      var pointer = this.cache[i];

      if (pointer.active === false) {
        output = pointer;
      }
    }
  }

  return output;
};

PointerSystem.prototype.handlePointerDown = function (event) {
  event.preventDefault();
  var pointer = this.getPointerByID(event.pointerId) || this.getInactivePointer();

  if (pointer) {
    pointer.active = true;
    pointer.id = event.pointerId;
    pointer.type = event.pointerType; // 'mouse', 'pen', 'touch'

    pointer.hold = true;
    pointer.startX = event.clientX - event.target.offsetLeft;
    pointer.startY = event.clientY - event.target.offsetTop;
    pointer.x = event.clientX - event.target.offsetLeft;
    pointer.y = event.clientY - event.target.offsetTop;
  }
};

PointerSystem.prototype.handlePointerMove = function (event) {
  event.preventDefault();
  var pointer = this.getPointerByID(event.pointerId) || this.getInactivePointer();

  if (pointer) {
    pointer.id = event.pointerId;
    pointer.x = event.clientX - event.target.offsetLeft;
    pointer.y = event.clientY - event.target.offsetTop;
  }
};

PointerSystem.prototype.handlePointerUpAndCancel = function (event) {
  event.preventDefault();
  var pointer = this.getPointerByID(event.pointerId);

  if (pointer) {
    pointer.active = false;
    pointer.hold = false;
  }
};

PointerSystem.prototype.handleContextMenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

PointerSystem.prototype.update = function () {
  if (this.enabled) {
    this.frame++;
    this.now = window.performance.now();
    this.delta = this.now - this.then;
    this.then = this.now;

    for (var i in this.cache) {
      if (Object.hasOwnProperty.call(this.cache, i)) {
        var pointer = this.cache[i];

        if (pointer.hold) {
          pointer.offsetX = pointer.x - pointer.startX;
          pointer.offsetY = pointer.y - pointer.startY;
          pointer.holdTime += this.delta;
          pointer.endFrame = -1;

          if (pointer.startFrame === -1) {
            pointer.startFrame = this.frame;
          }
        } else {
          pointer.offsetX = 0;
          pointer.offsetY = 0;
          pointer.holdTime = 0;
          pointer.startFrame = -1;

          if (pointer.endFrame === -1) {
            pointer.endFrame = this.frame;
          }
        }

        pointer.start = pointer.startFrame === this.frame;
        pointer.end = pointer.endFrame === this.frame;
      }
    }
  }
};

PointerSystem.prototype.destroy = function () {
  this.cache = {};
};

/* harmony default export */ var pointer_system = (PointerSystem);
// CONCATENATED MODULE: ./src/render-system/sprite-component.js
var SpriteComponent = function SpriteComponent(params, system) {
  this.system = system;
  var config = Object.assign({
    image: null,
    width: 50,
    height: 50,
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 0,
    sourceHeight: 0,
    anchorX: 0.5,
    anchorY: 0.5,
    visible: true
  }, params);
  this.entity = null;
  this.mustDestroy = false;
  this.image = config.image;
  this.width = config.width;
  this.height = config.height;
  this.sourceX = config.sourceX;
  this.sourceY = config.sourceY;
  this.sourceWidth = config.sourceWidth;
  this.sourceHeight = config.sourceHeight;
  this.anchorX = config.anchorX;
  this.anchorY = config.anchorY;
  this.visible = config.visible;
};

/* harmony default export */ var sprite_component = (SpriteComponent);
// CONCATENATED MODULE: ./src/render-system/render-system.js
/* global Harmony Image */
var RenderSystem = function RenderSystem(canvas) {
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.canvas.height = window.innerHeight;
  this.canvas.width = window.innerWidth;
  this.components = [];
  this.cache = {};
  this.spriteComponentName = 'sprite';
};

RenderSystem.prototype.loadImage = function (config) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      _this.cache[config.name] = image;
      resolve(image);
    };

    image.onerror = function (reason) {
      reject(reason);
    };

    image.src = config.url;
  });
};

RenderSystem.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

RenderSystem.prototype.get = function (image) {
  return this.cache[image];
};

RenderSystem.prototype.draw = function () {
  this.clear(); // this.context.save()
  // translate to camera center
  // this.context.translate(
  //   (this.camera.width / 2),
  //   (this.camera.height / 2)
  // )
  // rotate
  // this.context.rotate(this.camera.angle)
  // scale
  // this.context.scale(this.camera.zoom, this.camera.zoom)
  // this.context.strokeStyle = 'red'
  // this.canvas.circle(0, 0, 10)
  // this.context.translate(
  //   -(this.camera.width / 2),
  //   -(this.camera.height / 2)
  // )
  // translate
  // this.context.translate(
  //   -this.camera.position.x,
  //   -this.camera.position.y
  // )

  for (var i = this.components.length; i--;) {
    var component = this.components[i]; // console.log(component.entity)

    if (component.mustDestroy) {
      this.components.splice(i, 1);
    } else {
      if (component.visible) {
        this.context.save();
        this.context.translate(component.entity.x + component.width * 0.5 * component.entity.scale - component.width * component.anchorX * component.entity.scale, component.entity.y + component.height * 0.5 * component.entity.scale - component.height * component.anchorY * component.entity.scale);
        this.context.rotate(component.entity.angle);
        this.context.scale(component.entity.scale, component.entity.scale);

        if (component.sourceWidth === 0) {
          component.sourceWidth = component.image.width;
        }

        if (component.sourceHeight === 0) {
          component.sourceHeight = component.image.height;
        }

        this.context.drawImage(component.image, component.sourceX, component.sourceY, component.sourceWidth, component.sourceHeight, component.width * -0.5, // do not touch this
        component.height * -0.5, // do not touch this
        component.width, // do not touch this
        component.height // do not touch this
        );
        this.context.restore();
      }
    }
  }

  this.context.restore();
};

RenderSystem.prototype.addSpriteComponent = function (entity, config) {
  var component = new Harmony.SpriteComponent(config, this);
  component.entity = entity;
  entity.components[this.spriteComponentName] = component;
  this.components.unshift(component);
};

RenderSystem.prototype.text = function (config) {
  this.context.fillText(config.text, config.x, config.y);
};

RenderSystem.prototype.circle = function (config) {
  this.context.beginPath();
  this.context.arc(config.x, config.y, config.radius, 0, 2 * Math.PI);
  this.context.stroke();
};

RenderSystem.prototype.line = function (config) {
  this.context.beginPath();
  this.context.moveTo(config.ax, config.ay);
  this.context.lineTo(config.bx, config.by);
  this.context.stroke();
};

RenderSystem.prototype.rect = function (config) {
  this.context.rect(config.x, config.y, config.width, config.height);
  this.context.stroke();
};

RenderSystem.prototype.destroyComponent = function (entity) {
  entity.components.sprite.mustDestroy = true;
};

/* harmony default export */ var render_system = (RenderSystem);
// CONCATENATED MODULE: ./src/scene-system/scene.js
var Scene = function Scene(params) {
  this.methods = Object.assign({
    preload: function preload() {},
    create: function create() {},
    update: function update() {},
    draw: function draw() {}
  }, params);
};

Scene.prototype.preload = function (engine) {
  return this.methods.preload(engine);
};

Scene.prototype.create = function (engine) {
  return this.methods.create(engine);
};

Scene.prototype.update = function (engine) {
  return this.methods.update(engine);
};

Scene.prototype.draw = function (engine) {
  return this.methods.draw(engine);
};

/* harmony default export */ var scene = (Scene);
// CONCATENATED MODULE: ./src/scene-system/scene-system.js
var SceneSystem = function SceneSystem() {
  this.current = null;
  this.requested = null;
  this.mustPreload = false;
  this.mustCreate = false;
  this.mustUpdate = false;
  this.mustDraw = false;
  this.mustSwitch = false;
};

SceneSystem.prototype["switch"] = function (scene) {
  this.requested = scene;
  this.requestSwitch();
};

SceneSystem.prototype.requestPreload = function () {
  this.mustPreload = true;
  this.mustCreate = false;
  this.mustUpdate = false;
  this.mustDraw = false;
  this.mustSwitch = false;
};

SceneSystem.prototype.requestCreate = function () {
  this.mustPreload = false;
  this.mustCreate = true;
  this.mustUpdate = false;
  this.mustDraw = false;
  this.mustSwitch = false;
};

SceneSystem.prototype.requestUpdate = function () {
  this.mustPreload = false;
  this.mustCreate = false;
  this.mustUpdate = true;
  this.mustDraw = false;
  this.mustSwitch = false;
};

SceneSystem.prototype.requestDraw = function () {
  this.mustPreload = false;
  this.mustCreate = false;
  this.mustUpdate = false;
  this.mustDraw = true;
  this.mustSwitch = false;
};

SceneSystem.prototype.requestSwitch = function () {
  this.mustPreload = false;
  this.mustCreate = false;
  this.mustUpdate = false;
  this.mustDraw = false;
  this.mustSwitch = true;
};

/* harmony default export */ var scene_system = (SceneSystem);
// CONCATENATED MODULE: ./src/behaviour-system/behaviour-component.js
var BehaviourComponent = function BehaviourComponent(params, system) {
  this.system = system;
  this.mustDestroy = false;
  this.mustStart = true;
  this.mustUpdate = false;
  this.methods = Object.assign({
    onStart: function onStart() {},
    onUpdate: function onUpdate() {}
  }, params);
};

/* harmony default export */ var behaviour_component = (BehaviourComponent);
// CONCATENATED MODULE: ./src/behaviour-system/behaviour-system.js
/* global Harmony */
var BehaviourSystem = function BehaviourSystem(engine) {
  this.engine = engine;
  this.components = [];
  this.behaviourComponentName = 'behaviour';
};

BehaviourSystem.prototype.addBehaviourComponent = function (entity, config) {
  var component = new Harmony.BehaviourComponent(config, this);
  component.entity = entity;
  entity.components[this.behaviourComponentName] = component;
  this.components.push(component);
};

BehaviourSystem.prototype.update = function () {
  for (var i = this.components.length; i--;) {
    var component = this.components[i];
    var entity = component.entity;

    if (component.mustDestroy) {
      this.components.splice(i, 1);
      continue;
    }

    if (component.mustStart) {
      this.onStart(entity);
      continue;
    }

    if (component.mustUpdate) {
      this.onUpdate(entity);
    }
  }
};

BehaviourSystem.prototype.onStart = function (entity) {
  entity.components[this.behaviourComponentName].mustStart = false;
  entity.components[this.behaviourComponentName].mustUpdate = true;
  return entity.components[this.behaviourComponentName].methods.onStart(this.engine, entity);
};

BehaviourSystem.prototype.onUpdate = function (entity) {
  return entity.components[this.behaviourComponentName].methods.onUpdate(this.engine, entity);
};

BehaviourSystem.prototype.destroyComponent = function (entity) {
  entity.components[this.behaviourComponentName].mustDestroy = true;
};

/* harmony default export */ var behaviour_system = (BehaviourSystem);
// CONCATENATED MODULE: ./src/state-system/state-component.js
var StateComponent = function StateComponent(params, system) {
  this.system = system;
  this.entity = null;
  this.mustDestroy = false;
  this.mustSwitch = true;
  this.requested = params.current;
  this.current = null;
  this.states = params.states;
};

StateComponent.prototype.componentName = 'state';

StateComponent.prototype["switch"] = function (state) {
  this.mustSwitch = true;
  this.requested = state;
};

/* harmony default export */ var state_component = (StateComponent);
// CONCATENATED MODULE: ./src/state-system/state-system.js
/* global Harmony */
var StateSystem = function StateSystem() {
  this.components = [];
  this.stateComponentName = 'state';
};

StateSystem.prototype.addStateComponent = function (entity, config) {
  var component = new Harmony.StateComponent(config, this);
  component.entity = entity;
  entity.components[this.stateComponentName] = component;
  this.components.push(component);
};

StateSystem.prototype.update = function (engine) {
  for (var i = this.components.length; i--;) {
    var component = this.components[i];

    if (component.mustDestroy) {
      this.components.splice(i, 1);
      continue;
    }

    if (component.current && component.mustSwitch) {
      if (component.states[component.current].exit) {
        component.states[component.current].exit(engine, component.entity);
      }
    }

    if (component.mustSwitch) {
      component.current = component.requested;

      if (component.states[component.current].enter) {
        component.states[component.current].enter(engine, component.entity);
      }

      component.mustSwitch = false;
    }

    if (component.current && component.states[component.current].update) {
      component.states[component.current].update(engine, component.entity);
    }
  }
};

StateSystem.prototype.destroyComponent = function (entity) {
  entity.components.state.mustDestroy = true;
};

/* harmony default export */ var state_system = (StateSystem);
// CONCATENATED MODULE: ./src/entity-system/entity-system.js
/* global Harmony */
var EntitySystem = function EntitySystem() {
  this.cache = [];
  this.components = [];
};

EntitySystem.prototype.add = function (config) {
  var entity = new Harmony.Entity(config);
  this.cache.push(entity);
  return entity;
};

EntitySystem.prototype.update = function () {
  for (var i = this.cache.length; i--;) {
    var entity = this.cache[i];

    if (entity.mustDestroy) {
      this.cache.splice(i, 1);
    }
  }
};

EntitySystem.prototype.destroy = function (entity) {
  for (var i in entity.components) {
    if (Object.hasOwnProperty.call(entity.components, i)) {
      var component = entity.components[i];
      var system = component.system;
      system.destroyComponent(entity);
    }
  }

  entity.mustDestroy = true;
};

EntitySystem.prototype.hasTag = function (entity, tag) {
  return entity.tags.includes(tag);
};

EntitySystem.prototype.destroyAll = function () {
  for (var i = this.cache.length; i--;) {
    var entity = this.cache[i];
    this.destroy(entity);
  }

  this.cache = [];
};

/* harmony default export */ var entity_system = (EntitySystem);
// CONCATENATED MODULE: ./src/physics-system/physics-system.js
/* global Box2D Harmony */
var PhysicsSystem = function PhysicsSystem(canvas) {
  var B2World = Box2D.Dynamics.b2World;
  var B2Vec2 = Box2D.Common.Math.b2Vec2;
  var B2DebugDraw = Box2D.Dynamics.b2DebugDraw;
  var B2ContactListener = Box2D.Dynamics.b2ContactListener;
  this.world = new B2World(new B2Vec2(0, 0), true);
  this.fps = 60;
  this.components = [];
  this.scale = 100;
  this.context = canvas.getContext('2d');
  this.contacts = new B2ContactListener();
  this.physicsComponentName = 'physics'; // ------------------------------------------------------------------ contacts

  this.world.SetContactListener(this.contacts);

  this.contacts.BeginContact = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().GetUserData();
    var componentB = contact.GetFixtureB().GetBody().GetUserData();
    var entityA = componentA.entity;
    var entityB = componentB.entity;

    if (componentA.onContactBegin) {
      componentA.onContactBegin(entityB, entityA);
    }

    if (componentB.onContactBegin) {
      componentB.onContactBegin(entityA, entityB);
    }
  };

  this.contacts.EndContact = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().GetUserData();
    var componentB = contact.GetFixtureB().GetBody().GetUserData();
    var entityA = componentA.entity;
    var entityB = componentB.entity;

    if (componentA.onContactEnd) {
      componentA.onContactEnd(entityB, entityA);
    }

    if (componentB.onContactEnd) {
      componentB.onContactEnd(entityA, entityB);
    }
  };

  this.contacts.PreSolve = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().GetUserData();
    var componentB = contact.GetFixtureB().GetBody().GetUserData();
    var entityA = componentA.entity;
    var entityB = componentB.entity;

    if (componentA.onContactPreSolve) {
      componentA.onContactPreSolve(entityB, entityA);
    }

    if (componentB.onContactPreSolve) {
      componentB.onContactPreSolve(entityA, entityB);
    }
  };

  this.contacts.PostSolve = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().GetUserData();
    var componentB = contact.GetFixtureB().GetBody().GetUserData();
    var entityA = componentA.entity;
    var entityB = componentB.entity;

    if (componentA.onContactPostSolve) {
      componentA.onContactPostSolve(entityB, entityA);
    }

    if (componentB.onContactPostSolve) {
      componentB.onContactPostSolve(entityA, entityB);
    }
  }; // --------------------------------------------------------------------- debug


  var debugDraw = new B2DebugDraw(this.context);
  debugDraw.SetSprite(canvas.getContext('2d'));
  debugDraw.SetDrawScale(this.scale);
  debugDraw.SetFillAlpha(0.5);
  debugDraw.SetFillAlpha(0.5);
  debugDraw.SetFlags(B2DebugDraw.e_shapeBit);
  debugDraw.AppendFlags(B2DebugDraw.e_jointBit);
  this.world.SetDebugDraw(debugDraw);

  this.world.m_debugDraw.m_sprite.graphics.clear = function () {
    return false;
  };
};

PhysicsSystem.prototype.onContactBegin = function (entity, callback) {
  var component = this.getComponent(entity);
  component.onContactBegin = callback;
};

PhysicsSystem.prototype.onContactEnd = function (entity, callback) {
  var component = this.getComponent(entity);
  component.onContactEnd = callback;
};

PhysicsSystem.prototype.onContactPreSolve = function (entity, callback) {
  var component = this.getComponent(entity);
  component.onContactPreSolve = callback;
};

PhysicsSystem.prototype.onContactPostSolve = function (entity, callback) {
  var component = this.getComponent(entity);
  component.onContactPostSolve = callback;
};

PhysicsSystem.prototype.setGravity = function (config) {
  this.world.SetGravity(config);
};

PhysicsSystem.prototype.drawDebugData = function () {
  this.world.DrawDebugData();
}; // ------------------------------------------------------------------- component


PhysicsSystem.prototype.addPhysicsComponent = function (entity, params) {
  var component = new Harmony.PhysicsComponent(this);
  component.body = this.createBody(params);
  component.body.SetUserData(component);
  component.entity = entity;
  entity.components[this.physicsComponentName] = component;
  this.components.push(component);
};

PhysicsSystem.prototype.getFixtureDef = function (config) {
  var B2FixtureDef = Box2D.Dynamics.b2FixtureDef;
  var fixDef = new B2FixtureDef();
  fixDef.density = config.density;
  fixDef.friction = config.friction;
  fixDef.restitution = config.restitution;
  fixDef.isSensor = config.isSensor;
  return fixDef;
};

PhysicsSystem.prototype.addCircle = function (entity, params) {
  var defaults = {
    x: 0,
    y: 0,
    radius: 25,
    density: 1,
    friction: 0.5,
    restitution: 0.3,
    isSensor: false
  };
  var config = Object.assign(defaults, params);
  var fixtureDefinition = this.getFixtureDef(config);
  var B2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
  var fixtureDef = fixtureDefinition;
  fixtureDef.shape = new B2CircleShape(config.radius / this.scale);
  fixtureDef.shape.m_p = {
    x: config.x / this.scale,
    y: config.y / this.scale
  };
  var fixture = this.getComponent(entity).body.CreateFixture(fixtureDef);
  this.getComponent(entity).fixtures.push(fixture);
};

PhysicsSystem.prototype.createBody = function (params) {
  var defaults = {
    x: 50,
    y: 50,
    type: 'dynamic',
    active: true,
    allowSleep: true,
    awake: true,
    bullet: false,
    fixedRotation: false,
    angle: 0,
    angularDamping: 0,
    angularVelocity: 0,
    linearDamping: 0,
    linearVelocity: {
      x: 0,
      y: 0
    },
    userData: {}
  };
  var config = Object.assign(defaults, params);
  var B2BodyDef = Box2D.Dynamics.b2BodyDef;
  var B2Body = Box2D.Dynamics.b2Body;
  var bodyDef = new B2BodyDef();
  bodyDef.position.x = config.x / this.scale;
  bodyDef.position.y = config.y / this.scale;
  bodyDef.active = config.active;
  bodyDef.allowSleep = config.allowSleep;
  bodyDef.awake = config.awake;
  bodyDef.bullet = config.bullet;
  bodyDef.fixedRotation = config.fixedRotation;
  bodyDef.angle = config.angle;
  bodyDef.angularDamping = config.angularDamping;
  bodyDef.angularVelocity = config.angularVelocity;
  bodyDef.linearDamping = config.linearDamping;
  bodyDef.linearVelocity = config.linearVelocity;
  bodyDef.userData = config.userData;

  if (config.type === 'static') {
    bodyDef.type = B2Body.b2_staticBody;
  }

  if (config.type === 'dynamic') {
    bodyDef.type = B2Body.b2_dynamicBody;
  }

  if (config.type === 'kinematic') {
    bodyDef.type = B2Body.b2_kinematicBody;
  }

  var body = this.world.CreateBody(bodyDef);
  body.active = true;
  return body;
};

PhysicsSystem.prototype.update = function () {
  this.world.Step(1 / this.fps, 8, 3);
  this.world.ClearForces();

  for (var i = this.components.length; i--;) {
    var component = this.components[i];

    if (component.mustDestroy) {
      this.components.splice(i, 1);
    } else {
      var entity = component.entity;
      var position = this.getPosition(entity);
      entity.x = position.x;
      entity.y = position.y;
      entity.angle = this.getAngle(entity);
    }
  }
};

PhysicsSystem.prototype.getComponent = function (entity) {
  return entity.components[this.physicsComponentName];
};

PhysicsSystem.prototype.destroyComponent = function (entity) {
  var _this = this;

  this.getComponent(entity).fixtures.forEach(function (fixture) {
    _this.getComponent(entity).body.DestroyFixture(fixture);
  });
  this.getComponent(entity).system.world.DestroyBody(this.getComponent(entity).body);
  this.getComponent(entity).mustDestroy = true;
  this.getComponent(entity).mustDestroy = true;
};

PhysicsSystem.prototype.applyForce = function (entity, config) {
  this.getComponent(entity).body.ApplyForce(config, this.getComponent(entity).body.GetWorldCenter());
};

PhysicsSystem.prototype.setPosition = function (entity, config) {
  this.getComponent(entity).body.SetPosition({
    x: config.x / this.scale,
    y: config.y / this.scale
  });
};

PhysicsSystem.prototype.setLinearVelocity = function (entity, config) {
  this.getComponent(entity).body.SetAwake(true);
  this.getComponent(entity).body.SetLinearVelocity({
    x: config.x / this.scale,
    y: config.y / this.scale
  });
};

PhysicsSystem.prototype.getPosition = function (entity) {
  var position = this.getComponent(entity).body.GetPosition();
  return {
    x: position.x * this.scale,
    y: position.y * this.scale
  };
};

PhysicsSystem.prototype.getAngle = function (entity) {
  return this.getComponent(entity).body.GetAngle();
};

/* harmony default export */ var physics_system = (PhysicsSystem);
// CONCATENATED MODULE: ./src/physics-system/physics-component.js
var PhysicsComponent = function PhysicsComponent(system) {
  this.entity = null;
  this.mustDestroy = false;
  this.body = null;
  this.system = system;
  this.fixtures = [];
};

/* harmony default export */ var physics_component = (PhysicsComponent);
// CONCATENATED MODULE: ./src/harmony.js






















var harmony_Harmony = {
  AudioSystem: audio_system,
  AudioComponent: audio_component,
  Loader: loader,
  Engine: engine,
  Entity: entity,
  EntitySystem: entity_system,
  Helpers: helpers,
  Key: key,
  KeySystem: key_system,
  LoopSystem: loop_system,
  PhysicsComponent: physics_component,
  PhysicsSystem: physics_system,
  Pointer: pointer,
  PointerSystem: pointer_system,
  SpriteComponent: sprite_component,
  RenderSystem: render_system,
  Scene: scene,
  SceneSystem: scene_system,
  BehaviourComponent: behaviour_component,
  BehaviourSystem: behaviour_system,
  StateComponent: state_component,
  StateSystem: state_system
};
/* harmony default export */ var harmony = __webpack_exports__["default"] = (harmony_Harmony);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImF1ZGlvQ29tcG9uZW50TmFtZSIsInByb3RvdHlwZSIsInBsYXkiLCJlbnRpdHkiLCJuYW1lIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsImF1ZGlvIiwiYnVmZmVyIiwidmFsdWUiLCJ2b2x1bWUiLCJzdGFydCIsInN0b3AiLCJhZGRBdWRpb0NvbXBvbmVudCIsImNvbmZpZyIsImNvbXBvbmVudCIsIkhhcm1vbnkiLCJBdWRpb0NvbXBvbmVudCIsInB1c2giLCJ1cGRhdGUiLCJzdGF0ZSIsInJlc3VtZSIsImkiLCJsZW5ndGgiLCJtdXN0RGVzdHJveSIsInNwbGljZSIsImRlc3Ryb3lDb21wb25lbnQiLCJwYXJhbXMiLCJzeXN0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJMb2FkZXIiLCJpbWFnZXNDYWNoZSIsImF1ZGlvQ2FjaGUiLCJsb2FkaW5nIiwiY29tcGxldGUiLCJlcnJvcnMiLCJzdWNjZXNzIiwicXVldWVkIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25TdWNjZXNzIiwib25lcnJvciIsInJlYXNvbiIsIm9uRXJyb3IiLCJzcmMiLCJ1cmwiLCJsb2FkQXVkaW8iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXNwb25zZSIsInNlbmQiLCJvblN0YXJ0Iiwib25Qcm9ncmVzcyIsIm9uQ29tcGxldGUiLCJwcm9ncmVzcyIsIk1hdGgiLCJmbG9vciIsImlzTmFOIiwiRW5naW5lIiwiY2FudmFzIiwibG9hZGVyIiwibG9vcCIsIkxvb3BTeXN0ZW0iLCJzY2VuZSIsIlNjZW5lU3lzdGVtIiwicmVuZGVyIiwiUmVuZGVyU3lzdGVtIiwiZW50aXRpZXMiLCJFbnRpdHlTeXN0ZW0iLCJrZXlzIiwiS2V5U3lzdGVtIiwicGh5c2ljcyIsIlBoeXNpY3NTeXN0ZW0iLCJwb2ludGVycyIsIlBvaW50ZXJTeXN0ZW0iLCJiZWhhdmlvdXJzIiwiQmVoYXZpb3VyU3lzdGVtIiwiU3RhdGVTeXN0ZW0iLCJoZWxwZXJzIiwiSGVscGVycyIsIm9uU3RlcCIsImN1cnJlbnQiLCJtdXN0UHJlbG9hZCIsInByZWxvYWQiLCJyZXF1ZXN0Q3JlYXRlIiwibXVzdENyZWF0ZSIsInJlcXVlc3RVcGRhdGUiLCJjcmVhdGUiLCJtdXN0VXBkYXRlIiwicmVxdWVzdERyYXciLCJtdXN0RHJhdyIsImRyYXciLCJkcmF3RGVidWdEYXRhIiwibXVzdFN3aXRjaCIsImRlc3Ryb3lBbGwiLCJkZXN0cm95IiwicmVxdWVzdGVkIiwicmVxdWVzdFByZWxvYWQiLCJydW4iLCJFbnRpdHkiLCJ0YWdzIiwieCIsInkiLCJhbmdsZSIsInNjYWxlIiwiY3JlYXRlR3JpZCIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiY2VpbCIsInJhbmRvbSIsImdldFJhbmRvbUl0ZW1zIiwiYXJyYXkiLCJxdWFudGl0eSIsInJhbmRvbUl0ZW1zIiwicmFuZG9tSW5kZXgiLCJzaHVmZmxlQXJyYXkiLCJqIiwiS2V5Iiwia2V5IiwiZW5kIiwiaG9sZCIsImhvbGRUaW1lIiwic3RhcnRGcmFtZSIsImVuZEZyYW1lIiwiZW5hYmxlZCIsImRlbHRhIiwibm93IiwidGhlbiIsImZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImJpbmQiLCJoYW5kbGVLZXlVcCIsImV2ZW50IiwiZ2V0T3JTZXQiLCJnZXQiLCJwZXJmb3JtYW5jZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFjY3VtdWxhdG9yIiwibGFzdFRpbWUiLCJsYXN0U3RlcCIsImZwcyIsInBhdXNlZCIsInRpbWVzdGVwIiwicGF1c2UiLCJ0aW1lc3RhbXAiLCJzdGVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUG9pbnRlciIsImFjdGl2ZSIsImlkIiwidHlwZSIsInN0YXJ0WCIsInN0YXJ0WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW5hYmxlUG9pbnRlcnMiLCJwb2ludGVyIiwic3R5bGUiLCJ0b3VjaEFjdGlvbiIsInVzZXJTZWxlY3QiLCJoYW5kbGVQb2ludGVyRG93biIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJnZXRQb2ludGVyQnlJRCIsIm91dHB1dCIsImdldEluYWN0aXZlUG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJjbGllbnRYIiwidGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJzdG9wUHJvcGFnYXRpb24iLCJTcHJpdGVDb21wb25lbnQiLCJ3aWR0aCIsImhlaWdodCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJhbmNob3JYIiwiYW5jaG9yWSIsInZpc2libGUiLCJnZXRDb250ZXh0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic3ByaXRlQ29tcG9uZW50TmFtZSIsImNsZWFyIiwiY2xlYXJSZWN0Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJhZGRTcHJpdGVDb21wb25lbnQiLCJ1bnNoaWZ0IiwidGV4dCIsImZpbGxUZXh0IiwiY2lyY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiUEkiLCJzdHJva2UiLCJsaW5lIiwibW92ZVRvIiwiYXgiLCJheSIsImxpbmVUbyIsImJ4IiwiYnkiLCJyZWN0Iiwic3ByaXRlIiwiU2NlbmUiLCJtZXRob2RzIiwiZW5naW5lIiwicmVxdWVzdFN3aXRjaCIsIkJlaGF2aW91ckNvbXBvbmVudCIsIm11c3RTdGFydCIsIm9uVXBkYXRlIiwiYmVoYXZpb3VyQ29tcG9uZW50TmFtZSIsImFkZEJlaGF2aW91ckNvbXBvbmVudCIsIlN0YXRlQ29tcG9uZW50Iiwic3RhdGVzIiwiY29tcG9uZW50TmFtZSIsInN0YXRlQ29tcG9uZW50TmFtZSIsImFkZFN0YXRlQ29tcG9uZW50IiwiZXhpdCIsImVudGVyIiwiYWRkIiwiaGFzVGFnIiwidGFnIiwiaW5jbHVkZXMiLCJCMldvcmxkIiwiQm94MkQiLCJEeW5hbWljcyIsImIyV29ybGQiLCJCMlZlYzIiLCJDb21tb24iLCJiMlZlYzIiLCJCMkRlYnVnRHJhdyIsImIyRGVidWdEcmF3IiwiQjJDb250YWN0TGlzdGVuZXIiLCJiMkNvbnRhY3RMaXN0ZW5lciIsIndvcmxkIiwiY29udGFjdHMiLCJwaHlzaWNzQ29tcG9uZW50TmFtZSIsIlNldENvbnRhY3RMaXN0ZW5lciIsIkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJjb21wb25lbnRBIiwiR2V0Rml4dHVyZUEiLCJHZXRCb2R5IiwiR2V0VXNlckRhdGEiLCJjb21wb25lbnRCIiwiR2V0Rml4dHVyZUIiLCJlbnRpdHlBIiwiZW50aXR5QiIsIm9uQ29udGFjdEJlZ2luIiwiRW5kQ29udGFjdCIsIm9uQ29udGFjdEVuZCIsIlByZVNvbHZlIiwib25Db250YWN0UHJlU29sdmUiLCJQb3N0U29sdmUiLCJvbkNvbnRhY3RQb3N0U29sdmUiLCJkZWJ1Z0RyYXciLCJTZXRTcHJpdGUiLCJTZXREcmF3U2NhbGUiLCJTZXRGaWxsQWxwaGEiLCJTZXRGbGFncyIsImVfc2hhcGVCaXQiLCJBcHBlbmRGbGFncyIsImVfam9pbnRCaXQiLCJTZXREZWJ1Z0RyYXciLCJtX2RlYnVnRHJhdyIsIm1fc3ByaXRlIiwiZ3JhcGhpY3MiLCJjYWxsYmFjayIsImdldENvbXBvbmVudCIsInNldEdyYXZpdHkiLCJTZXRHcmF2aXR5IiwiRHJhd0RlYnVnRGF0YSIsImFkZFBoeXNpY3NDb21wb25lbnQiLCJQaHlzaWNzQ29tcG9uZW50IiwiYm9keSIsImNyZWF0ZUJvZHkiLCJTZXRVc2VyRGF0YSIsImdldEZpeHR1cmVEZWYiLCJCMkZpeHR1cmVEZWYiLCJiMkZpeHR1cmVEZWYiLCJmaXhEZWYiLCJkZW5zaXR5IiwiZnJpY3Rpb24iLCJyZXN0aXR1dGlvbiIsImlzU2Vuc29yIiwiYWRkQ2lyY2xlIiwiZGVmYXVsdHMiLCJmaXh0dXJlRGVmaW5pdGlvbiIsIkIyQ2lyY2xlU2hhcGUiLCJDb2xsaXNpb24iLCJTaGFwZXMiLCJiMkNpcmNsZVNoYXBlIiwiZml4dHVyZURlZiIsInNoYXBlIiwibV9wIiwiZml4dHVyZSIsIkNyZWF0ZUZpeHR1cmUiLCJmaXh0dXJlcyIsImFsbG93U2xlZXAiLCJhd2FrZSIsImJ1bGxldCIsImZpeGVkUm90YXRpb24iLCJhbmd1bGFyRGFtcGluZyIsImFuZ3VsYXJWZWxvY2l0eSIsImxpbmVhckRhbXBpbmciLCJsaW5lYXJWZWxvY2l0eSIsInVzZXJEYXRhIiwiQjJCb2R5RGVmIiwiYjJCb2R5RGVmIiwiQjJCb2R5IiwiYjJCb2R5IiwiYm9keURlZiIsInBvc2l0aW9uIiwiYjJfc3RhdGljQm9keSIsImIyX2R5bmFtaWNCb2R5IiwiYjJfa2luZW1hdGljQm9keSIsIkNyZWF0ZUJvZHkiLCJTdGVwIiwiQ2xlYXJGb3JjZXMiLCJnZXRQb3NpdGlvbiIsImdldEFuZ2xlIiwiZm9yRWFjaCIsIkRlc3Ryb3lGaXh0dXJlIiwiRGVzdHJveUJvZHkiLCJhcHBseUZvcmNlIiwiQXBwbHlGb3JjZSIsIkdldFdvcmxkQ2VudGVyIiwic2V0UG9zaXRpb24iLCJTZXRQb3NpdGlvbiIsInNldExpbmVhclZlbG9jaXR5IiwiU2V0QXdha2UiLCJTZXRMaW5lYXJWZWxvY2l0eSIsIkdldFBvc2l0aW9uIiwiR2V0QW5nbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLGlCQUFpQixtQkFBTyxDQUFDLENBQXFCOzs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0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LEVBQUVBLE1BTE07QUFNZC9CLGNBQVksRUFBRUEsYUFOQTtBQU9kVyxTQUFPLEVBQUVBLE9BUEs7QUFRZDJDLEtBQUcsRUFBRUEsR0FSUztBQVNkcEQsV0FBUyxFQUFFQSxVQVRHO0FBVWRSLFlBQVUsRUFBRUEsV0FWRTtBQVdkd08sa0JBQWdCLEVBQUVBLGlCQVhKO0FBWWQ5TixlQUFhLEVBQUVBLGNBWkQ7QUFhZG1GLFNBQU8sRUFBRUEsT0FiSztBQWNkakYsZUFBYSxFQUFFQSxjQWREO0FBZWQ4RyxpQkFBZSxFQUFFQSxnQkFmSDtBQWdCZHRILGNBQVksRUFBRUEsYUFoQkE7QUFpQmQ4SixPQUFLLEVBQUVBLEtBakJPO0FBa0JkaEssYUFBVyxFQUFFQSxZQWxCQztBQW1CZG9LLG9CQUFrQixFQUFFQSxtQkFuQk47QUFvQmR4SixpQkFBZSxFQUFFQSxnQkFwQkg7QUFxQmQ2SixnQkFBYyxFQUFFQSxlQXJCRjtBQXNCZDVKLGFBQVcsRUFBRUEsWUFBV0E7QUF0QlYsQ0FBaEI7QUF5QmV0RSw0RkFBZixFIiwiZmlsZSI6Imhhcm1vbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIYXJtb255XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhhcm1vbnlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cbmNvbnN0IEF1ZGlvU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpXG4gIHRoaXMubWFzdGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5tYXN0ZXIuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pXG4gIHRoaXMuYXVkaW9Db21wb25lbnROYW1lID0gJ2F1ZGlvJ1xufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uIChlbnRpdHksIG5hbWUpIHtcbiAgY29uc3Qgc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gIGNvbnN0IGdhaW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZSA9IHNvdXJjZVxuICBzb3VyY2UuYnVmZmVyID0gdGhpcy5jYWNoZVtuYW1lXVxuICBzb3VyY2UuY29ubmVjdChnYWluKVxuICBnYWluLmNvbm5lY3QodGhpcy5tYXN0ZXIpXG4gIGdhaW4uZ2Fpbi52YWx1ZSA9IGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnZvbHVtZVxuICBzb3VyY2Uuc3RhcnQoKVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgaWYgKGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZSkge1xuICAgIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZS5zdG9wKClcbiAgfVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuYWRkQXVkaW9Db21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQXVkaW9Db21wb25lbnQoY29uZmlnLCB0aGlzKVxuICBjb21wb25lbnQuZW50aXR5ID0gZW50aXR5XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYXVkaW9Db21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgdGhpcy5jb250ZXh0LnJlc3VtZSgpXG4gIH1cbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfVxuICB9XG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICB0aGlzLnN0b3AoZW50aXR5KVxuICBlbnRpdHkuY29tcG9uZW50cy5hdWRpby5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9TeXN0ZW1cbiIsImNvbnN0IEF1ZGlvQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcywgc3lzdGVtKSB7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZvbHVtZTogMVxuICB9LCBwYXJhbXMpXG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuc291cmNlID0gbnVsbFxuICB0aGlzLnZvbHVtZSA9IGNvbmZpZy52b2x1bWVcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSW1hZ2UgKi9cblxuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmltYWdlc0NhY2hlID0ge31cbiAgdGhpcy5hdWRpb0NhY2hlID0ge31cbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICB0aGlzLmVycm9ycyA9IDBcbiAgdGhpcy5zdWNjZXNzID0gMFxuICB0aGlzLnF1ZXVlZCA9IDBcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMucXVldWVkKytcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgIHRoaXMuaW1hZ2VzQ2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHRoaXMub25TdWNjZXNzKGNvbmZpZylcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycysrXG4gICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5Mb2FkZXIucHJvdG90eXBlLmxvYWRBdWRpbyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5xdWV1ZWQrK1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgICAgdGhpcy5hdWRpb0NhY2hlW2NvbmZpZy5uYW1lXSA9IGJ1ZmZlclxuICAgICAgICB0aGlzLm9uU3VjY2Vzcyhjb25maWcpXG4gICAgICAgIHJlc29sdmUoYnVmZmVyKVxuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLmVycm9ycysrXG4gICAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICB9KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0pXG59XG5cbkxvYWRlci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25TdWNjZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vblByb2dyZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnF1ZXVlZCA+IDApIHtcbiAgICBpZiAoIXRoaXMuc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSB0cnVlXG4gICAgICB0aGlzLm9uU3RhcnQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5xdWV1ZWQgPT09IHRoaXMuc3VjY2VzcyArIHRoaXMuZXJyb3JzKSB7XG4gICAgICB0aGlzLnF1ZXVlZCA9IDBcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDBcbiAgICAgIHRoaXMuZXJyb3JzID0gMFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIH1cbiAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKCh0aGlzLnN1Y2Nlc3MgKyB0aGlzLmVycm9ycykgLyB0aGlzLnF1ZXVlZCAqIDEwMClcbiAgICBpZiAoaXNOYU4ocHJvZ3Jlc3MpKSB7XG4gICAgICBwcm9ncmVzcyA9IDEwMFxuICAgIH1cbiAgICB0aGlzLm9uUHJvZ3Jlc3MocHJvZ3Jlc3MpXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW5naW5lID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmxvYWRlciA9IG5ldyBIYXJtb255LkxvYWRlcigpXG4gIHRoaXMubG9vcCA9IG5ldyBIYXJtb255Lkxvb3BTeXN0ZW0oKVxuICB0aGlzLnNjZW5lID0gbmV3IEhhcm1vbnkuU2NlbmVTeXN0ZW0oKVxuICB0aGlzLnJlbmRlciA9IG5ldyBIYXJtb255LlJlbmRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuYXVkaW8gPSBuZXcgSGFybW9ueS5BdWRpb1N5c3RlbSgpXG4gIHRoaXMuZW50aXRpZXMgPSBuZXcgSGFybW9ueS5FbnRpdHlTeXN0ZW0oKVxuICB0aGlzLmtleXMgPSBuZXcgSGFybW9ueS5LZXlTeXN0ZW0oKVxuICB0aGlzLnBoeXNpY3MgPSBuZXcgSGFybW9ueS5QaHlzaWNzU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5wb2ludGVycyA9IG5ldyBIYXJtb255LlBvaW50ZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLmJlaGF2aW91cnMgPSBuZXcgSGFybW9ueS5CZWhhdmlvdXJTeXN0ZW0odGhpcylcbiAgdGhpcy5zdGF0ZSA9IG5ldyBIYXJtb255LlN0YXRlU3lzdGVtKClcbiAgdGhpcy5oZWxwZXJzID0gbmV3IEhhcm1vbnkuSGVscGVycygpXG5cbiAgdGhpcy5sb29wLm9uU3RlcCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy5zY2VuZS5jdXJyZW50KSB7XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0UHJlbG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVyLmxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQucHJlbG9hZCh0aGlzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGVyLnVwZGF0ZSgpXG4gICAgICAgIGlmICh0aGlzLmxvYWRlci5jb21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyLmNhY2hlID0gdGhpcy5sb2FkZXIuaW1hZ2VzQ2FjaGVcbiAgICAgICAgICB0aGlzLmF1ZGlvLmNhY2hlID0gdGhpcy5sb2FkZXIuYXVkaW9DYWNoZVxuICAgICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdENyZWF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RDcmVhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmNyZWF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3REcmF3KClcbiAgICAgICAgdGhpcy5rZXlzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMucG9pbnRlcnMudXBkYXRlKClcbiAgICAgICAgdGhpcy5hdWRpby51cGRhdGUoKVxuICAgICAgICB0aGlzLnBoeXNpY3MudXBkYXRlKClcbiAgICAgICAgdGhpcy5lbnRpdGllcy51cGRhdGUoKVxuICAgICAgICB0aGlzLmJlaGF2aW91cnMudXBkYXRlKClcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnVwZGF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdERyYXcpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhdygpXG4gICAgICAgIHRoaXMucGh5c2ljcy5kcmF3RGVidWdEYXRhKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmRyYXcodGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NlbmUubXVzdFN3aXRjaCkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZXN0cm95QWxsKClcbiAgICAgIHRoaXMucG9pbnRlcnMuZGVzdHJveSgpXG4gICAgICB0aGlzLmtleXMuZGVzdHJveSgpXG4gICAgICB0aGlzLnNjZW5lLmN1cnJlbnQgPSB0aGlzLnNjZW5lLnJlcXVlc3RlZFxuICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0UHJlbG9hZCgpXG4gICAgfVxuICB9XG4gIHRoaXMubG9vcC5ydW4oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmVcbiIsImNvbnN0IEVudGl0eSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdGFnczogW10sXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGFuZ2xlOiAwLFxuICAgIHNjYWxlOiAxXG4gIH0sIHBhcmFtcylcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gIHRoaXMudGFncyA9IGNvbmZpZy50YWdzXG4gIHRoaXMueCA9IGNvbmZpZy54XG4gIHRoaXMueSA9IGNvbmZpZy55XG4gIHRoaXMuYW5nbGUgPSBjb25maWcuYW5nbGVcbiAgdGhpcy5zY2FsZSA9IGNvbmZpZy5zY2FsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlcbiIsImNvbnN0IEhlbHBlcnMgPSBmdW5jdGlvbiAoKSB7fVxuXG5IZWxwZXJzLnByb3RvdHlwZS5jcmVhdGVHcmlkID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgZ3JpZCA9IG5ldyBBcnJheShjb2xzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHJvd3MpXG4gIH1cbiAgcmV0dXJuIGdyaWRcbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5nZXRSYW5kb21JdGVtcyA9IGZ1bmN0aW9uIChhcnJheSwgcXVhbnRpdHkpIHtcbiAgY29uc3QgcmFuZG9tSXRlbXMgPSBbXVxuICBmb3IgKGxldCBpID0gcXVhbnRpdHk7IGktLTspIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIGFycmF5Lmxlbmd0aCAtIDEpXG4gICAgcmFuZG9tSXRlbXMucHVzaChhcnJheVtyYW5kb21JbmRleF0pXG4gICAgYXJyYXkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVxuICB9XG4gIHJldHVybiByYW5kb21JdGVtc1xufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5zaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSlcbiAgICBjb25zdCB4ID0gYXJyYXlbaV1cbiAgICBhcnJheVtpXSA9IGFycmF5W2pdXG4gICAgYXJyYXlbal0gPSB4XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnNcbiIsImNvbnN0IEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMuZW5kID0gZmFsc2VcbiAgdGhpcy5ob2xkID0gZmFsc2VcbiAgdGhpcy5ob2xkVGltZSA9IDBcbiAgdGhpcy5zdGFydEZyYW1lID0gMFxuICB0aGlzLmVuZEZyYW1lID0gMFxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEtleVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSB0cnVlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbZXZlbnQua2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2V2ZW50LmtleV0uaG9sZCA9IGZhbHNlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5nZXRPclNldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gbmV3IEhhcm1vbnkuS2V5KGtleSlcbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZVtrZXldXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5nZXRPclNldChrZXkpXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgdGhpcy5mcmFtZSsrXG4gICAgdGhpcy5ub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLmRlbHRhID0gdGhpcy5ub3cgLSB0aGlzLnRoZW5cbiAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKGtleS5ob2xkKSB7XG4gICAgICAgIGtleS5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgIGtleS5lbmRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5LmhvbGRUaW1lID0gMFxuICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuZW5kRnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBrZXkuc3RhcnQgPSAoa2V5LnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICBrZXkuZW5kID0gKGtleS5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICB9XG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5U3lzdGVtXG4iLCJjb25zdCBMb29wU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjY3VtdWxhdG9yID0gMFxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLmxhc3RUaW1lID0gMFxuICB0aGlzLmxhc3RTdGVwID0gMFxuICB0aGlzLmZwcyA9IDYwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5jb250aW51ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSB0cnVlXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgdGltZXN0YW1wID0gdGltZXN0YW1wIHx8IDBcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xuICB0aGlzLmFjY3VtdWxhdG9yICs9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWVcbiAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcFxuICB3aGlsZSAoIXRoaXMucGF1c2VkICYmIHRoaXMuYWNjdW11bGF0b3IgPj0gdGhpcy50aW1lc3RlcCkge1xuICAgIHRoaXMuc3RlcCgpXG4gICAgdGhpcy5kZWx0YSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFN0ZXBcbiAgICB0aGlzLmxhc3RTdGVwID0gdGltZXN0YW1wXG4gICAgdGhpcy5hY2N1bXVsYXRvciAtPSB0aGlzLnRpbWVzdGVwXG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bi5iaW5kKHRoaXMpKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZyYW1lKytcbiAgdGhpcy5vblN0ZXAoKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5vblN0ZXAgPSBmdW5jdGlvbiAoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBMb29wU3lzdGVtXG4iLCJjb25zdCBQb2ludGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbiAgdGhpcy5pZCA9IDBcbiAgdGhpcy50eXBlID0gbnVsbFxuICB0aGlzLnN0YXJ0WCA9IDBcbiAgdGhpcy5zdGFydFkgPSAwXG4gIHRoaXMub2Zmc2V0WCA9IDBcbiAgdGhpcy5vZmZzZXRZID0gMFxuICB0aGlzLnggPSAwXG4gIHRoaXMueSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgUG9pbnRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5lbmFibGVQb2ludGVycygpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldE9yU2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW3BvaW50ZXJdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbcG9pbnRlcl0gPSBuZXcgSGFybW9ueS5Qb2ludGVyKHBvaW50ZXIpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVbcG9pbnRlcl1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQocG9pbnRlcilcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZW5hYmxlUG9pbnRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FudmFzLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gIHRoaXMuY2FudmFzLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRQb2ludGVyQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5pZCA9PT0gaWQpIHtcbiAgICAgICAgb3V0cHV0ID0gcG9pbnRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldEluYWN0aXZlUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG91dHB1dCA9IGZhbHNlXG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKHBvaW50ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlckRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpIHx8IHRoaXMuZ2V0SW5hY3RpdmVQb2ludGVyKClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IHRydWVcbiAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgcG9pbnRlci50eXBlID0gZXZlbnQucG9pbnRlclR5cGUgLy8gJ21vdXNlJywgJ3BlbicsICd0b3VjaCdcbiAgICBwb2ludGVyLmhvbGQgPSB0cnVlXG4gICAgcG9pbnRlci5zdGFydFggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gICAgcG9pbnRlci54ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci55ID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IGZhbHNlXG4gICAgcG9pbnRlci5ob2xkID0gZmFsc2VcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIHJldHVybiBmYWxzZVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICB0aGlzLmZyYW1lKytcbiAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlblxuICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgICBpZiAocG9pbnRlci5ob2xkKSB7XG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRYID0gKHBvaW50ZXIueCAtIHBvaW50ZXIuc3RhcnRYKVxuICAgICAgICAgIHBvaW50ZXIub2Zmc2V0WSA9IChwb2ludGVyLnkgLSBwb2ludGVyLnN0YXJ0WSlcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lICs9IHRoaXMuZGVsdGFcbiAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFggPSAwXG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRZID0gMFxuICAgICAgICAgIHBvaW50ZXIuaG9sZFRpbWUgPSAwXG4gICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5lbmRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuZW5kRnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvaW50ZXIuc3RhcnQgPSAocG9pbnRlci5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAgICBwb2ludGVyLmVuZCA9IChwb2ludGVyLmVuZEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclN5c3RlbVxuIiwiY29uc3QgU3ByaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGltYWdlOiBudWxsLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIHNvdXJjZVg6IDAsXG4gICAgc291cmNlWTogMCxcbiAgICBzb3VyY2VXaWR0aDogMCxcbiAgICBzb3VyY2VIZWlnaHQ6IDAsXG4gICAgYW5jaG9yWDogMC41LFxuICAgIGFuY2hvclk6IDAuNSxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH0sIHBhcmFtcylcblxuICB0aGlzLmVudGl0eSA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuaW1hZ2UgPSBjb25maWcuaW1hZ2VcbiAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aFxuICB0aGlzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHRcbiAgdGhpcy5zb3VyY2VYID0gY29uZmlnLnNvdXJjZVhcbiAgdGhpcy5zb3VyY2VZID0gY29uZmlnLnNvdXJjZVlcbiAgdGhpcy5zb3VyY2VXaWR0aCA9IGNvbmZpZy5zb3VyY2VXaWR0aFxuICB0aGlzLnNvdXJjZUhlaWdodCA9IGNvbmZpZy5zb3VyY2VIZWlnaHRcbiAgdGhpcy5hbmNob3JYID0gY29uZmlnLmFuY2hvclhcbiAgdGhpcy5hbmNob3JZID0gY29uZmlnLmFuY2hvcllcbiAgdGhpcy52aXNpYmxlID0gY29uZmlnLnZpc2libGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSBJbWFnZSAqL1xuXG5jb25zdCBSZW5kZXJTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIHRoaXMuY2FudmFzID0gY2FudmFzXG4gIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMuc3ByaXRlQ29tcG9uZW50TmFtZSA9ICdzcHJpdGUnXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUubG9hZEltYWdlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhY2hlW2NvbmZpZy5uYW1lXSA9IGltYWdlXG4gICAgICByZXNvbHZlKGltYWdlKVxuICAgIH1cbiAgICBpbWFnZS5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGltYWdlKSB7XG4gIHJldHVybiB0aGlzLmNhY2hlW2ltYWdlXVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYXIoKVxuICAvLyB0aGlzLmNvbnRleHQuc2F2ZSgpXG5cbiAgLy8gdHJhbnNsYXRlIHRvIGNhbWVyYSBjZW50ZXJcbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAodGhpcy5jYW1lcmEud2lkdGggLyAyKSxcbiAgLy8gICAodGhpcy5jYW1lcmEuaGVpZ2h0IC8gMilcbiAgLy8gKVxuXG4gIC8vIHJvdGF0ZVxuICAvLyB0aGlzLmNvbnRleHQucm90YXRlKHRoaXMuY2FtZXJhLmFuZ2xlKVxuXG4gIC8vIHNjYWxlXG4gIC8vIHRoaXMuY29udGV4dC5zY2FsZSh0aGlzLmNhbWVyYS56b29tLCB0aGlzLmNhbWVyYS56b29tKVxuXG4gIC8vIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZWQnXG4gIC8vIHRoaXMuY2FudmFzLmNpcmNsZSgwLCAwLCAxMClcblxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgIC0odGhpcy5jYW1lcmEud2lkdGggLyAyKSxcbiAgLy8gICAtKHRoaXMuY2FtZXJhLmhlaWdodCAvIDIpXG4gIC8vIClcblxuICAvLyB0cmFuc2xhdGVcbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAtdGhpcy5jYW1lcmEucG9zaXRpb24ueCxcbiAgLy8gICAtdGhpcy5jYW1lcmEucG9zaXRpb24ueVxuICAvLyApXG5cbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICAvLyBjb25zb2xlLmxvZyhjb21wb25lbnQuZW50aXR5KVxuXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tcG9uZW50LnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKVxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkueCArIGNvbXBvbmVudC53aWR0aCAqIDAuNSAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUgLSBjb21wb25lbnQud2lkdGggKiBjb21wb25lbnQuYW5jaG9yWCAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUsXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS55ICsgY29tcG9uZW50LmhlaWdodCAqIDAuNSAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUgLSBjb21wb25lbnQuaGVpZ2h0ICogY29tcG9uZW50LmFuY2hvclkgKiBjb21wb25lbnQuZW50aXR5LnNjYWxlXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShjb21wb25lbnQuZW50aXR5LmFuZ2xlKVxuICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUoXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS5zY2FsZSxcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnNjYWxlXG4gICAgICAgIClcblxuICAgICAgICBpZiAoY29tcG9uZW50LnNvdXJjZVdpZHRoID09PSAwKSB7XG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVdpZHRoID0gY29tcG9uZW50LmltYWdlLndpZHRoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcG9uZW50LnNvdXJjZUhlaWdodCA9PT0gMCkge1xuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VIZWlnaHQgPSBjb21wb25lbnQuaW1hZ2UuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgIGNvbXBvbmVudC5pbWFnZSxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlWCxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlWSxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlV2lkdGgsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZUhlaWdodCxcbiAgICAgICAgICBjb21wb25lbnQud2lkdGggKiAtMC41LCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC5oZWlnaHQgKiAtMC41LCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC53aWR0aCwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQuaGVpZ2h0IC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGV4dC5yZXN0b3JlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5hZGRTcHJpdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuU3ByaXRlQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLnNwcml0ZUNvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy51bnNoaWZ0KGNvbXBvbmVudClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuZmlsbFRleHQoY29uZmlnLnRleHQsIGNvbmZpZy54LCBjb25maWcueSlcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5jaXJjbGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICB0aGlzLmNvbnRleHQuYXJjKGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmxpbmUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICB0aGlzLmNvbnRleHQubW92ZVRvKGNvbmZpZy5heCwgY29uZmlnLmF5KVxuICB0aGlzLmNvbnRleHQubGluZVRvKGNvbmZpZy5ieCwgY29uZmlnLmJ5KVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5yZWN0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQucmVjdChjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodClcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZW50aXR5LmNvbXBvbmVudHMuc3ByaXRlLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJTeXN0ZW1cbiIsImNvbnN0IFNjZW5lID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB0aGlzLm1ldGhvZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwcmVsb2FkOiAoKSA9PiB7fSxcbiAgICBjcmVhdGU6ICgpID0+IHt9LFxuICAgIHVwZGF0ZTogKCkgPT4ge30sXG4gICAgZHJhdzogKCkgPT4ge31cbiAgfSwgcGFyYW1zKVxufVxuXG5TY2VuZS5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5wcmVsb2FkKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5jcmVhdGUoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLnVwZGF0ZShlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLmRyYXcoZW5naW5lKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVxuIiwiY29uc3QgU2NlbmVTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY3VycmVudCA9IG51bGxcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBudWxsXG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnN3aXRjaCA9IGZ1bmN0aW9uIChzY2VuZSkge1xuICB0aGlzLnJlcXVlc3RlZCA9IHNjZW5lXG4gIHRoaXMucmVxdWVzdFN3aXRjaCgpXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0UHJlbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IHRydWVcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0Q3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gdHJ1ZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSB0cnVlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdERyYXcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gdHJ1ZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFN3aXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lU3lzdGVtXG4iLCJjb25zdCBCZWhhdmlvdXJDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMubXVzdFN0YXJ0ID0gdHJ1ZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm1ldGhvZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBvblN0YXJ0OiAoKSA9PiB7fSxcbiAgICBvblVwZGF0ZTogKCkgPT4ge31cbiAgfSwgcGFyYW1zKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvdXJDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEJlaGF2aW91clN5c3RlbSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgdGhpcy5lbmdpbmUgPSBlbmdpbmVcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lID0gJ2JlaGF2aW91cidcbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS5hZGRCZWhhdmlvdXJDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQmVoYXZpb3VyQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgY29uc3QgZW50aXR5ID0gY29tcG9uZW50LmVudGl0eVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQoZW50aXR5KVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0VXBkYXRlKSB7XG4gICAgICB0aGlzLm9uVXBkYXRlKGVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm11c3RTdGFydCA9IGZhbHNlXG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubXVzdFVwZGF0ZSA9IHRydWVcbiAgcmV0dXJuIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubWV0aG9kcy5vblN0YXJ0KHRoaXMuZW5naW5lLCBlbnRpdHkpXG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHJldHVybiBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm1ldGhvZHMub25VcGRhdGUodGhpcy5lbmdpbmUsIGVudGl0eSlcbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvdXJTeXN0ZW1cbiIsImNvbnN0IFN0YXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHBhcmFtcy5jdXJyZW50XG4gIHRoaXMuY3VycmVudCA9IG51bGxcbiAgdGhpcy5zdGF0ZXMgPSBwYXJhbXMuc3RhdGVzXG59XG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnROYW1lID0gJ3N0YXRlJ1xuXG5TdGF0ZUNvbXBvbmVudC5wcm90b3R5cGUuc3dpdGNoID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgU3RhdGVTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuc3RhdGVDb21wb25lbnROYW1lID0gJ3N0YXRlJ1xufVxuXG5TdGF0ZVN5c3RlbS5wcm90b3R5cGUuYWRkU3RhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuU3RhdGVDb21wb25lbnQoY29uZmlnLCB0aGlzKVxuICBjb21wb25lbnQuZW50aXR5ID0gZW50aXR5XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuc3RhdGVDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5jdXJyZW50ICYmIGNvbXBvbmVudC5tdXN0U3dpdGNoKSB7XG4gICAgICBpZiAoY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZXhpdCkge1xuICAgICAgICBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0U3dpdGNoKSB7XG4gICAgICBjb21wb25lbnQuY3VycmVudCA9IGNvbXBvbmVudC5yZXF1ZXN0ZWRcbiAgICAgIGlmIChjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5lbnRlcikge1xuICAgICAgICBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5lbnRlcihlbmdpbmUsIGNvbXBvbmVudC5lbnRpdHkpXG4gICAgICB9XG4gICAgICBjb21wb25lbnQubXVzdFN3aXRjaCA9IGZhbHNlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQuY3VycmVudCAmJiBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS51cGRhdGUpIHtcbiAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLnVwZGF0ZShlbmdpbmUsIGNvbXBvbmVudC5lbnRpdHkpXG4gICAgfVxuICB9XG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBlbnRpdHkuY29tcG9uZW50cy5zdGF0ZS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVTeXN0ZW1cbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEVudGl0eVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IFtdXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBlbnRpdHkgPSBuZXcgSGFybW9ueS5FbnRpdHkoY29uZmlnKVxuICB0aGlzLmNhY2hlLnB1c2goZW50aXR5KVxuICByZXR1cm4gZW50aXR5XG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmNhY2hlW2ldXG4gICAgaWYgKGVudGl0eS5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jYWNoZS5zcGxpY2UoaSwgMSlcbiAgICB9XG4gIH1cbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBmb3IgKGNvbnN0IGkgaW4gZW50aXR5LmNvbXBvbmVudHMpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZW50aXR5LmNvbXBvbmVudHMsIGkpKSB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbnRpdHkuY29tcG9uZW50c1tpXVxuICAgICAgY29uc3Qgc3lzdGVtID0gY29tcG9uZW50LnN5c3RlbVxuICAgICAgc3lzdGVtLmRlc3Ryb3lDb21wb25lbnQoZW50aXR5KVxuICAgIH1cbiAgfVxuICBlbnRpdHkubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUuaGFzVGFnID0gZnVuY3Rpb24gKGVudGl0eSwgdGFnKSB7XG4gIHJldHVybiBlbnRpdHkudGFncy5pbmNsdWRlcyh0YWcpXG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY2FjaGUubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgZW50aXR5ID0gdGhpcy5jYWNoZVtpXVxuICAgIHRoaXMuZGVzdHJveShlbnRpdHkpXG4gIH1cbiAgdGhpcy5jYWNoZSA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eVN5c3RlbVxuIiwiLyogZ2xvYmFsIEJveDJEIEhhcm1vbnkgKi9cblxuY29uc3QgUGh5c2ljc1N5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgY29uc3QgQjJXb3JsZCA9IEJveDJELkR5bmFtaWNzLmIyV29ybGRcbiAgY29uc3QgQjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyXG4gIGNvbnN0IEIyRGVidWdEcmF3ID0gQm94MkQuRHluYW1pY3MuYjJEZWJ1Z0RyYXdcbiAgY29uc3QgQjJDb250YWN0TGlzdGVuZXIgPSBCb3gyRC5EeW5hbWljcy5iMkNvbnRhY3RMaXN0ZW5lclxuXG4gIHRoaXMud29ybGQgPSBuZXcgQjJXb3JsZChuZXcgQjJWZWMyKDAsIDApLCB0cnVlKVxuICB0aGlzLmZwcyA9IDYwXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuc2NhbGUgPSAxMDBcbiAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgdGhpcy5jb250YWN0cyA9IG5ldyBCMkNvbnRhY3RMaXN0ZW5lcigpXG4gIHRoaXMucGh5c2ljc0NvbXBvbmVudE5hbWUgPSAncGh5c2ljcydcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFjdHNcblxuICB0aGlzLndvcmxkLlNldENvbnRhY3RMaXN0ZW5lcih0aGlzLmNvbnRhY3RzKVxuXG4gIHRoaXMuY29udGFjdHMuQmVnaW5Db250YWN0ID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGlmIChjb21wb25lbnRBLm9uQ29udGFjdEJlZ2luKSB7XG4gICAgICBjb21wb25lbnRBLm9uQ29udGFjdEJlZ2luKGVudGl0eUIsIGVudGl0eUEpXG4gICAgfVxuICAgIGlmIChjb21wb25lbnRCLm9uQ29udGFjdEJlZ2luKSB7XG4gICAgICBjb21wb25lbnRCLm9uQ29udGFjdEJlZ2luKGVudGl0eUEsIGVudGl0eUIpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5FbmRDb250YWN0ID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGlmIChjb21wb25lbnRBLm9uQ29udGFjdEVuZCkge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RFbmQoZW50aXR5QiwgZW50aXR5QSlcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudEIub25Db250YWN0RW5kKSB7XG4gICAgICBjb21wb25lbnRCLm9uQ29udGFjdEVuZChlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuUHJlU29sdmUgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0UHJlU29sdmUpIHtcbiAgICAgIGNvbXBvbmVudEEub25Db250YWN0UHJlU29sdmUoZW50aXR5QiwgZW50aXR5QSlcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudEIub25Db250YWN0UHJlU29sdmUpIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0UHJlU29sdmUoZW50aXR5QSwgZW50aXR5QilcbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLlBvc3RTb2x2ZSA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50QS5vbkNvbnRhY3RQb3N0U29sdmUpIHtcbiAgICAgIGNvbXBvbmVudEEub25Db250YWN0UG9zdFNvbHZlKGVudGl0eUIsIGVudGl0eUEpXG4gICAgfVxuICAgIGlmIChjb21wb25lbnRCLm9uQ29udGFjdFBvc3RTb2x2ZSkge1xuICAgICAgY29tcG9uZW50Qi5vbkNvbnRhY3RQb3N0U29sdmUoZW50aXR5QSwgZW50aXR5QilcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVidWdcblxuICBjb25zdCBkZWJ1Z0RyYXcgPSBuZXcgQjJEZWJ1Z0RyYXcodGhpcy5jb250ZXh0KVxuICBkZWJ1Z0RyYXcuU2V0U3ByaXRlKGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpKVxuICBkZWJ1Z0RyYXcuU2V0RHJhd1NjYWxlKHRoaXMuc2NhbGUpXG4gIGRlYnVnRHJhdy5TZXRGaWxsQWxwaGEoMC41KVxuICBkZWJ1Z0RyYXcuU2V0RmlsbEFscGhhKDAuNSlcbiAgZGVidWdEcmF3LlNldEZsYWdzKEIyRGVidWdEcmF3LmVfc2hhcGVCaXQpXG4gIGRlYnVnRHJhdy5BcHBlbmRGbGFncyhCMkRlYnVnRHJhdy5lX2pvaW50Qml0KVxuICB0aGlzLndvcmxkLlNldERlYnVnRHJhdyhkZWJ1Z0RyYXcpXG4gIHRoaXMud29ybGQubV9kZWJ1Z0RyYXcubV9zcHJpdGUuZ3JhcGhpY3MuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0QmVnaW4gPSBmdW5jdGlvbiAoZW50aXR5LCBjYWxsYmFjaykge1xuICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpXG4gIGNvbXBvbmVudC5vbkNvbnRhY3RCZWdpbiA9IGNhbGxiYWNrXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLm9uQ29udGFjdEVuZCA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdEVuZCA9IGNhbGxiYWNrXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLm9uQ29udGFjdFByZVNvbHZlID0gZnVuY3Rpb24gKGVudGl0eSwgY2FsbGJhY2spIHtcbiAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KVxuICBjb21wb25lbnQub25Db250YWN0UHJlU29sdmUgPSBjYWxsYmFja1xufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5vbkNvbnRhY3RQb3N0U29sdmUgPSBmdW5jdGlvbiAoZW50aXR5LCBjYWxsYmFjaykge1xuICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpXG4gIGNvbXBvbmVudC5vbkNvbnRhY3RQb3N0U29sdmUgPSBjYWxsYmFja1xufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5zZXRHcmF2aXR5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLndvcmxkLlNldEdyYXZpdHkoY29uZmlnKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5kcmF3RGVidWdEYXRhID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndvcmxkLkRyYXdEZWJ1Z0RhdGEoKVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbXBvbmVudFxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5hZGRQaHlzaWNzQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgcGFyYW1zKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlBoeXNpY3NDb21wb25lbnQodGhpcylcbiAgY29tcG9uZW50LmJvZHkgPSB0aGlzLmNyZWF0ZUJvZHkocGFyYW1zKVxuICBjb21wb25lbnQuYm9keS5TZXRVc2VyRGF0YShjb21wb25lbnQpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5waHlzaWNzQ29tcG9uZW50TmFtZV0gPSBjb21wb25lbnRcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5nZXRGaXh0dXJlRGVmID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBCMkZpeHR1cmVEZWYgPSBCb3gyRC5EeW5hbWljcy5iMkZpeHR1cmVEZWZcbiAgY29uc3QgZml4RGVmID0gbmV3IEIyRml4dHVyZURlZigpXG4gIGZpeERlZi5kZW5zaXR5ID0gY29uZmlnLmRlbnNpdHlcbiAgZml4RGVmLmZyaWN0aW9uID0gY29uZmlnLmZyaWN0aW9uXG4gIGZpeERlZi5yZXN0aXR1dGlvbiA9IGNvbmZpZy5yZXN0aXR1dGlvblxuICBmaXhEZWYuaXNTZW5zb3IgPSBjb25maWcuaXNTZW5zb3JcbiAgcmV0dXJuIGZpeERlZlxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5hZGRDaXJjbGUgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHJhZGl1czogMjUsXG4gICAgZGVuc2l0eTogMSxcbiAgICBmcmljdGlvbjogMC41LFxuICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgaXNTZW5zb3I6IGZhbHNlXG4gIH1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuICBjb25zdCBmaXh0dXJlRGVmaW5pdGlvbiA9IHRoaXMuZ2V0Rml4dHVyZURlZihjb25maWcpXG4gIGNvbnN0IEIyQ2lyY2xlU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyQ2lyY2xlU2hhcGVcbiAgY29uc3QgZml4dHVyZURlZiA9IGZpeHR1cmVEZWZpbml0aW9uXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJDaXJjbGVTaGFwZShjb25maWcucmFkaXVzIC8gdGhpcy5zY2FsZSlcbiAgZml4dHVyZURlZi5zaGFwZS5tX3AgPSB7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zY2FsZVxuICB9XG4gIGNvbnN0IGZpeHR1cmUgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuQ3JlYXRlRml4dHVyZShmaXh0dXJlRGVmKVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmZpeHR1cmVzLnB1c2goZml4dHVyZSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogNTAsXG4gICAgeTogNTAsXG4gICAgdHlwZTogJ2R5bmFtaWMnLFxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBhbGxvd1NsZWVwOiB0cnVlLFxuICAgIGF3YWtlOiB0cnVlLFxuICAgIGJ1bGxldDogZmFsc2UsXG4gICAgZml4ZWRSb3RhdGlvbjogZmFsc2UsXG4gICAgYW5nbGU6IDAsXG4gICAgYW5ndWxhckRhbXBpbmc6IDAsXG4gICAgYW5ndWxhclZlbG9jaXR5OiAwLFxuICAgIGxpbmVhckRhbXBpbmc6IDAsXG4gICAgbGluZWFyVmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxuICAgIHVzZXJEYXRhOiB7fVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuXG4gIGNvbnN0IEIyQm9keURlZiA9IEJveDJELkR5bmFtaWNzLmIyQm9keURlZlxuICBjb25zdCBCMkJvZHkgPSBCb3gyRC5EeW5hbWljcy5iMkJvZHlcblxuICBjb25zdCBib2R5RGVmID0gbmV3IEIyQm9keURlZigpXG4gIGJvZHlEZWYucG9zaXRpb24ueCA9IGNvbmZpZy54IC8gdGhpcy5zY2FsZVxuICBib2R5RGVmLnBvc2l0aW9uLnkgPSBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgYm9keURlZi5hY3RpdmUgPSBjb25maWcuYWN0aXZlXG4gIGJvZHlEZWYuYWxsb3dTbGVlcCA9IGNvbmZpZy5hbGxvd1NsZWVwXG4gIGJvZHlEZWYuYXdha2UgPSBjb25maWcuYXdha2VcbiAgYm9keURlZi5idWxsZXQgPSBjb25maWcuYnVsbGV0XG4gIGJvZHlEZWYuZml4ZWRSb3RhdGlvbiA9IGNvbmZpZy5maXhlZFJvdGF0aW9uXG4gIGJvZHlEZWYuYW5nbGUgPSBjb25maWcuYW5nbGVcbiAgYm9keURlZi5hbmd1bGFyRGFtcGluZyA9IGNvbmZpZy5hbmd1bGFyRGFtcGluZ1xuICBib2R5RGVmLmFuZ3VsYXJWZWxvY2l0eSA9IGNvbmZpZy5hbmd1bGFyVmVsb2NpdHlcbiAgYm9keURlZi5saW5lYXJEYW1waW5nID0gY29uZmlnLmxpbmVhckRhbXBpbmdcbiAgYm9keURlZi5saW5lYXJWZWxvY2l0eSA9IGNvbmZpZy5saW5lYXJWZWxvY2l0eVxuICBib2R5RGVmLnVzZXJEYXRhID0gY29uZmlnLnVzZXJEYXRhXG5cbiAgaWYgKGNvbmZpZy50eXBlID09PSAnc3RhdGljJykge1xuICAgIGJvZHlEZWYudHlwZSA9IEIyQm9keS5iMl9zdGF0aWNCb2R5XG4gIH1cblxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdkeW5hbWljJykge1xuICAgIGJvZHlEZWYudHlwZSA9IEIyQm9keS5iMl9keW5hbWljQm9keVxuICB9XG5cbiAgaWYgKGNvbmZpZy50eXBlID09PSAna2luZW1hdGljJykge1xuICAgIGJvZHlEZWYudHlwZSA9IEIyQm9keS5iMl9raW5lbWF0aWNCb2R5XG4gIH1cblxuICBjb25zdCBib2R5ID0gdGhpcy53b3JsZC5DcmVhdGVCb2R5KGJvZHlEZWYpXG4gIGJvZHkuYWN0aXZlID0gdHJ1ZVxuXG4gIHJldHVybiBib2R5XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53b3JsZC5TdGVwKDEgLyB0aGlzLmZwcywgOCwgMylcbiAgdGhpcy53b3JsZC5DbGVhckZvcmNlcygpXG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbnRpdHkgPSBjb21wb25lbnQuZW50aXR5XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oZW50aXR5KVxuICAgICAgZW50aXR5LnggPSBwb3NpdGlvbi54XG4gICAgICBlbnRpdHkueSA9IHBvc2l0aW9uLnlcbiAgICAgIGVudGl0eS5hbmdsZSA9IHRoaXMuZ2V0QW5nbGUoZW50aXR5KVxuICAgIH1cbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHJldHVybiBlbnRpdHkuY29tcG9uZW50c1t0aGlzLnBoeXNpY3NDb21wb25lbnROYW1lXVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmZpeHR1cmVzLmZvckVhY2goKGZpeHR1cmUpID0+IHtcbiAgICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuRGVzdHJveUZpeHR1cmUoZml4dHVyZSlcbiAgfSlcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5zeXN0ZW0ud29ybGQuRGVzdHJveUJvZHkodGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5KVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLm11c3REZXN0cm95ID0gdHJ1ZVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5hcHBseUZvcmNlID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5BcHBseUZvcmNlKGNvbmZpZywgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkdldFdvcmxkQ2VudGVyKCkpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5TZXRQb3NpdGlvbih7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zY2FsZVxuICB9KVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5zZXRMaW5lYXJWZWxvY2l0eSA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuU2V0QXdha2UodHJ1ZSlcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LlNldExpbmVhclZlbG9jaXR5KHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5HZXRQb3NpdGlvbigpXG4gIHJldHVybiB7XG4gICAgeDogcG9zaXRpb24ueCAqIHRoaXMuc2NhbGUsXG4gICAgeTogcG9zaXRpb24ueSAqIHRoaXMuc2NhbGVcbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5nZXRBbmdsZSA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5HZXRBbmdsZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3NTeXN0ZW1cbiIsImNvbnN0IFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAoc3lzdGVtKSB7XG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5ib2R5ID0gbnVsbFxuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLmZpeHR1cmVzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc0NvbXBvbmVudFxuIiwiaW1wb3J0IEF1ZGlvU3lzdGVtIGZyb20gJy4vYXVkaW8tc3lzdGVtL2F1ZGlvLXN5c3RlbSdcbmltcG9ydCBBdWRpb0NvbXBvbmVudCBmcm9tICcuL2F1ZGlvLXN5c3RlbS9hdWRpby1jb21wb25lbnQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyL2xvYWRlcidcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJ1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eS1zeXN0ZW0vZW50aXR5J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzL2hlbHBlcnMnXG5pbXBvcnQgS2V5IGZyb20gJy4va2V5LXN5c3RlbS9rZXknXG5pbXBvcnQgS2V5U3lzdGVtIGZyb20gJy4va2V5LXN5c3RlbS9rZXktc3lzdGVtJ1xuaW1wb3J0IExvb3BTeXN0ZW0gZnJvbSAnLi9sb29wLXN5c3RlbS9sb29wLXN5c3RlbSdcbmltcG9ydCBQb2ludGVyIGZyb20gJy4vcG9pbnRlci1zeXN0ZW0vcG9pbnRlcidcbmltcG9ydCBQb2ludGVyU3lzdGVtIGZyb20gJy4vcG9pbnRlci1zeXN0ZW0vcG9pbnRlci1zeXN0ZW0nXG5pbXBvcnQgU3ByaXRlQ29tcG9uZW50IGZyb20gJy4vcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50J1xuaW1wb3J0IFJlbmRlclN5c3RlbSBmcm9tICcuL3JlbmRlci1zeXN0ZW0vcmVuZGVyLXN5c3RlbSdcbmltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lLXN5c3RlbS9zY2VuZSdcbmltcG9ydCBTY2VuZVN5c3RlbSBmcm9tICcuL3NjZW5lLXN5c3RlbS9zY2VuZS1zeXN0ZW0nXG5pbXBvcnQgQmVoYXZpb3VyQ29tcG9uZW50IGZyb20gJy4vYmVoYXZpb3VyLXN5c3RlbS9iZWhhdmlvdXItY29tcG9uZW50J1xuaW1wb3J0IEJlaGF2aW91clN5c3RlbSBmcm9tICcuL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLXN5c3RlbSdcbmltcG9ydCBTdGF0ZUNvbXBvbmVudCBmcm9tICcuL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQnXG5pbXBvcnQgU3RhdGVTeXN0ZW0gZnJvbSAnLi9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtJ1xuaW1wb3J0IEVudGl0eVN5c3RlbSBmcm9tICcuL2VudGl0eS1zeXN0ZW0vZW50aXR5LXN5c3RlbSdcbmltcG9ydCBQaHlzaWNzU3lzdGVtIGZyb20gJy4vcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0nXG5pbXBvcnQgUGh5c2ljc0NvbXBvbmVudCBmcm9tICcuL3BoeXNpY3Mtc3lzdGVtL3BoeXNpY3MtY29tcG9uZW50J1xuXG5jb25zdCBIYXJtb255ID0ge1xuICBBdWRpb1N5c3RlbTogQXVkaW9TeXN0ZW0sXG4gIEF1ZGlvQ29tcG9uZW50OiBBdWRpb0NvbXBvbmVudCxcbiAgTG9hZGVyOiBMb2FkZXIsXG4gIEVuZ2luZTogRW5naW5lLFxuICBFbnRpdHk6IEVudGl0eSxcbiAgRW50aXR5U3lzdGVtOiBFbnRpdHlTeXN0ZW0sXG4gIEhlbHBlcnM6IEhlbHBlcnMsXG4gIEtleTogS2V5LFxuICBLZXlTeXN0ZW06IEtleVN5c3RlbSxcbiAgTG9vcFN5c3RlbTogTG9vcFN5c3RlbSxcbiAgUGh5c2ljc0NvbXBvbmVudDogUGh5c2ljc0NvbXBvbmVudCxcbiAgUGh5c2ljc1N5c3RlbTogUGh5c2ljc1N5c3RlbSxcbiAgUG9pbnRlcjogUG9pbnRlcixcbiAgUG9pbnRlclN5c3RlbTogUG9pbnRlclN5c3RlbSxcbiAgU3ByaXRlQ29tcG9uZW50OiBTcHJpdGVDb21wb25lbnQsXG4gIFJlbmRlclN5c3RlbTogUmVuZGVyU3lzdGVtLFxuICBTY2VuZTogU2NlbmUsXG4gIFNjZW5lU3lzdGVtOiBTY2VuZVN5c3RlbSxcbiAgQmVoYXZpb3VyQ29tcG9uZW50OiBCZWhhdmlvdXJDb21wb25lbnQsXG4gIEJlaGF2aW91clN5c3RlbTogQmVoYXZpb3VyU3lzdGVtLFxuICBTdGF0ZUNvbXBvbmVudDogU3RhdGVDb21wb25lbnQsXG4gIFN0YXRlU3lzdGVtOiBTdGF0ZVN5c3RlbVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXJtb255XG4iXSwic291cmNlUm9vdCI6IiJ9