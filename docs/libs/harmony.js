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
  this.listener = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5
  };
  this.volumeThreshold = 1000;
  this.panThreshold = 500;
};

AudioSystem.prototype.processVolume = function (entity) {
  var ax = this.listener.x;
  var ay = this.listener.y;
  var bx = entity.x;
  var by = entity.y;
  var distance = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by));
  var norm = distance / this.volumeThreshold;

  if (norm > 1) {
    norm = 1;
  }

  if (norm < 0) {
    norm = 0;
  }

  return 1.0 - norm;
};

AudioSystem.prototype.processPan = function (entity) {
  var ax = this.listener.x;
  var bx = entity.x;
  var pan = (bx - ax) / this.panThreshold;

  if (pan > 1) {
    pan = 1;
  }

  if (pan < -1) {
    pan = -1;
  }

  return pan;
};

AudioSystem.prototype.play = function (entity, name) {
  var source = this.context.createBufferSource();
  var gain = entity.components.audio.gain;
  var pan = entity.components.audio.pan;
  entity.components.audio.source = source;
  source.buffer = this.cache[name];
  source.connect(pan);
  pan.connect(gain);
  gain.connect(this.master);
  source.start();
};

AudioSystem.prototype.setVolume = function (entity, volume) {
  entity.components.audio.volume = volume;
};

AudioSystem.prototype.stop = function (entity) {
  if (entity.components.audio.source) {
    entity.components.audio.source.stop();
  }
};

AudioSystem.prototype.addAudioComponent = function (entity) {
  var component = new Harmony.AudioComponent(this);
  component.entity = entity;
  component.gain = this.context.createGain();
  component.pan = this.context.createStereoPanner();
  entity.components[this.audioComponentName] = component;
  this.components.push(component);
};

AudioSystem.prototype.update = function () {
  if (this.context.state === 'suspended') {
    this.context.resume();
  }

  for (var i = this.components.length; i--;) {
    var component = this.components[i];
    var entity = component.entity;

    if (component.mustDestroy) {
      this.components.splice(i, 1);
    } else {
      component.gain.gain.value = this.processVolume(entity) * component.volume;
      component.pan.pan.value = this.processPan(entity);
    }
  }
};

AudioSystem.prototype.destroyComponent = function (entity) {
  this.stop(entity);
  entity.components.audio.mustDestroy = true;
};

/* harmony default export */ var audio_system = (AudioSystem);
// CONCATENATED MODULE: ./src/audio-system/audio-component.js
var AudioComponent = function AudioComponent(system) {
  this.system = system;
  this.source = null;
  this.gain = null;
  this.pan = null;
  this.mustDestroy = false;
  this.volume = 1;
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
var SpriteComponent = function SpriteComponent(config, system) {
  this.system = system;
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

RenderSystem.prototype.addSpriteComponent = function (entity, params) {
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
var BehaviourComponent = function BehaviourComponent(config, system) {
  this.system = system;
  this.mustDestroy = false;
  this.mustStart = true;
  this.mustUpdate = false;
  this.onStart = config.onStart;
  this.onUpdate = config.onUpdate;
};

/* harmony default export */ var behaviour_component = (BehaviourComponent);
// CONCATENATED MODULE: ./src/behaviour-system/behaviour-system.js
/* global Harmony */
var BehaviourSystem = function BehaviourSystem(engine) {
  this.engine = engine;
  this.components = [];
  this.behaviourComponentName = 'behaviour';
};

BehaviourSystem.prototype.addBehaviourComponent = function (entity, params) {
  var config = Object.assign({
    onStart: function onStart() {},
    onUpdate: function onUpdate() {}
  }, params);
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
  return entity.components[this.behaviourComponentName].onStart(this.engine, entity);
};

BehaviourSystem.prototype.onUpdate = function (entity) {
  return entity.components[this.behaviourComponentName].onUpdate(this.engine, entity);
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
  this.fps = 60;
  this.scale = 100;
  this.components = [];
  this.context = canvas.getContext('2d');
  this.world = new B2World(new B2Vec2(0, 0), true);
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

PhysicsSystem.prototype.addPolygon = function (entity, params) {
  var defaults = {
    vertices: [],
    x: 0,
    y: 0,
    density: 1,
    friction: 0.5,
    restitution: 0.5,
    isSensor: false
  };
  var config = Object.assign(defaults, params);
  var fixtureDef = this.getFixtureDef(config);
  var B2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
  fixtureDef.shape = new B2PolygonShape();

  for (var i = 0; i < config.vertices.length; i++) {
    var vert = config.vertices[i];
    vert.x /= this.scale;
    vert.y /= this.scale;
  }

  fixtureDef.shape.SetAsArray(config.vertices, config.vertices.length);

  for (var _i = 0; _i < fixtureDef.shape.m_vertices.length; _i++) {
    var _vert = fixtureDef.shape.m_vertices[_i];
    _vert.x += config.x / this.scale || 0;
    _vert.y += config.y / this.scale || 0;
  }

  var fixture = this.getComponent(entity).body.CreateFixture(fixtureDef);
  this.getComponent(entity).fixtures.push(fixture);
};

PhysicsSystem.prototype.addRectangle = function (entity, params) {
  var defaults = {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    density: 1,
    friction: 0.5,
    restitution: 0.5,
    isSensor: false
  };
  var config = Object.assign(defaults, params);
  var fixtureDef = this.getFixtureDef(config);
  var B2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
  fixtureDef.shape = new B2PolygonShape();
  fixtureDef.shape.SetAsBox(config.width * 0.5 / this.scale, config.height * 0.5 / this.scale);

  for (var i = 0; i < fixtureDef.shape.m_vertices.length; i++) {
    var vert = fixtureDef.shape.m_vertices[i];
    vert.x += config.x / this.scale || 0;
    vert.y += config.y / this.scale || 0;
  }

  fixtureDef.shape.m_centroid.x += config.x / this.scale || 0;
  fixtureDef.shape.m_centroid.y += config.y / this.scale || 0;
  var fixture = this.getComponent(entity).body.CreateFixture(fixtureDef);
  this.getComponent(entity).fixtures.push(fixture);
};

PhysicsSystem.prototype.addCircle = function (entity, params) {
  var defaults = {
    x: 0,
    y: 0,
    radius: 25,
    density: 1,
    friction: 0.5,
    restitution: 0.5,
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

PhysicsSystem.prototype.addEdge = function (entity, params) {
  var defaults = {
    ax: 0,
    ay: 0,
    bx: 0,
    by: 0,
    density: 1,
    friction: 0.5,
    restitution: 0.5,
    isSensor: false
  };
  var config = Object.assign(defaults, params);
  var fixtureDef = this.getFixtureDef(config);
  var B2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
  fixtureDef.shape = new B2PolygonShape();
  config.ax /= this.scale;
  config.ay /= this.scale;
  config.bx /= this.scale;
  config.by /= this.scale;
  fixtureDef.shape.SetAsEdge({
    x: config.ax,
    y: config.ay
  }, {
    x: config.bx,
    y: config.by
  });
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

PhysicsSystem.prototype.getLinearVelocity = function (entity) {
  var velocity = this.getComponent(entity).body.GetLinearVelocity();
  return {
    x: velocity.x * this.scale,
    y: velocity.y * this.scale
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImF1ZGlvQ29tcG9uZW50TmFtZSIsImxpc3RlbmVyIiwieCIsImlubmVyV2lkdGgiLCJ5IiwiaW5uZXJIZWlnaHQiLCJ2b2x1bWVUaHJlc2hvbGQiLCJwYW5UaHJlc2hvbGQiLCJwcm90b3R5cGUiLCJwcm9jZXNzVm9sdW1lIiwiZW50aXR5IiwiYXgiLCJheSIsImJ4IiwiYnkiLCJkaXN0YW5jZSIsIk1hdGgiLCJzcXJ0Iiwibm9ybSIsInByb2Nlc3NQYW4iLCJwYW4iLCJwbGF5IiwibmFtZSIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImdhaW4iLCJhdWRpbyIsImJ1ZmZlciIsInN0YXJ0Iiwic2V0Vm9sdW1lIiwidm9sdW1lIiwic3RvcCIsImFkZEF1ZGlvQ29tcG9uZW50IiwiY29tcG9uZW50IiwiSGFybW9ueSIsIkF1ZGlvQ29tcG9uZW50IiwiY3JlYXRlU3RlcmVvUGFubmVyIiwicHVzaCIsInVwZGF0ZSIsInN0YXRlIiwicmVzdW1lIiwiaSIsImxlbmd0aCIsIm11c3REZXN0cm95Iiwic3BsaWNlIiwidmFsdWUiLCJkZXN0cm95Q29tcG9uZW50Iiwic3lzdGVtIiwiTG9hZGVyIiwiaW1hZ2VzQ2FjaGUiLCJhdWRpb0NhY2hlIiwibG9hZGluZyIsImNvbXBsZXRlIiwiZXJyb3JzIiwic3VjY2VzcyIsInF1ZXVlZCIsImxvYWRJbWFnZSIsImNvbmZpZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uU3VjY2VzcyIsIm9uZXJyb3IiLCJyZWFzb24iLCJvbkVycm9yIiwic3JjIiwidXJsIiwibG9hZEF1ZGlvIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwiZGVjb2RlQXVkaW9EYXRhIiwicmVzcG9uc2UiLCJzZW5kIiwib25TdGFydCIsIm9uUHJvZ3Jlc3MiLCJvbkNvbXBsZXRlIiwicHJvZ3Jlc3MiLCJmbG9vciIsImlzTmFOIiwiRW5naW5lIiwiY2FudmFzIiwibG9hZGVyIiwibG9vcCIsIkxvb3BTeXN0ZW0iLCJzY2VuZSIsIlNjZW5lU3lzdGVtIiwicmVuZGVyIiwiUmVuZGVyU3lzdGVtIiwiZW50aXRpZXMiLCJFbnRpdHlTeXN0ZW0iLCJrZXlzIiwiS2V5U3lzdGVtIiwicGh5c2ljcyIsIlBoeXNpY3NTeXN0ZW0iLCJwb2ludGVycyIsIlBvaW50ZXJTeXN0ZW0iLCJiZWhhdmlvdXJzIiwiQmVoYXZpb3VyU3lzdGVtIiwiU3RhdGVTeXN0ZW0iLCJoZWxwZXJzIiwiSGVscGVycyIsIm9uU3RlcCIsImN1cnJlbnQiLCJtdXN0UHJlbG9hZCIsInByZWxvYWQiLCJyZXF1ZXN0Q3JlYXRlIiwibXVzdENyZWF0ZSIsInJlcXVlc3RVcGRhdGUiLCJjcmVhdGUiLCJtdXN0VXBkYXRlIiwicmVxdWVzdERyYXciLCJtdXN0RHJhdyIsImRyYXciLCJkcmF3RGVidWdEYXRhIiwibXVzdFN3aXRjaCIsImRlc3Ryb3lBbGwiLCJkZXN0cm95IiwicmVxdWVzdGVkIiwicmVxdWVzdFByZWxvYWQiLCJydW4iLCJFbnRpdHkiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdzIiwiYW5nbGUiLCJzY2FsZSIsImNyZWF0ZUdyaWQiLCJyb3dzIiwiY29scyIsImdyaWQiLCJBcnJheSIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsImNlaWwiLCJyYW5kb20iLCJnZXRSYW5kb21JdGVtcyIsImFycmF5IiwicXVhbnRpdHkiLCJyYW5kb21JdGVtcyIsInJhbmRvbUluZGV4Iiwic2h1ZmZsZUFycmF5IiwiaiIsIktleSIsImtleSIsImVuZCIsImhvbGQiLCJob2xkVGltZSIsInN0YXJ0RnJhbWUiLCJlbmRGcmFtZSIsImVuYWJsZWQiLCJkZWx0YSIsIm5vdyIsInRoZW4iLCJmcmFtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJiaW5kIiwiaGFuZGxlS2V5VXAiLCJldmVudCIsImdldE9yU2V0IiwiZ2V0IiwicGVyZm9ybWFuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhY2N1bXVsYXRvciIsImxhc3RUaW1lIiwibGFzdFN0ZXAiLCJmcHMiLCJwYXVzZWQiLCJ0aW1lc3RlcCIsInBhdXNlIiwidGltZXN0YW1wIiwic3RlcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlBvaW50ZXIiLCJhY3RpdmUiLCJpZCIsInR5cGUiLCJzdGFydFgiLCJzdGFydFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVuYWJsZVBvaW50ZXJzIiwicG9pbnRlciIsInN0eWxlIiwidG91Y2hBY3Rpb24iLCJ1c2VyU2VsZWN0IiwiaGFuZGxlUG9pbnRlckRvd24iLCJoYW5kbGVQb2ludGVyTW92ZSIsImhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCIsImhhbmRsZUNvbnRleHRNZW51IiwiZ2V0UG9pbnRlckJ5SUQiLCJvdXRwdXQiLCJnZXRJbmFjdGl2ZVBvaW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwic3RvcFByb3BhZ2F0aW9uIiwiU3ByaXRlQ29tcG9uZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic291cmNlWSIsInNvdXJjZVdpZHRoIiwic291cmNlSGVpZ2h0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJ2aXNpYmxlIiwiZ2V0Q29udGV4dCIsInNwcml0ZUNvbXBvbmVudE5hbWUiLCJjbGVhciIsImNsZWFyUmVjdCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiYWRkU3ByaXRlQ29tcG9uZW50IiwidW5zaGlmdCIsInRleHQiLCJmaWxsVGV4dCIsImNpcmNsZSIsImJlZ2luUGF0aCIsImFyYyIsInJhZGl1cyIsIlBJIiwic3Ryb2tlIiwibGluZSIsIm1vdmVUbyIsImxpbmVUbyIsInJlY3QiLCJzcHJpdGUiLCJTY2VuZSIsIm1ldGhvZHMiLCJlbmdpbmUiLCJyZXF1ZXN0U3dpdGNoIiwiQmVoYXZpb3VyQ29tcG9uZW50IiwibXVzdFN0YXJ0Iiwib25VcGRhdGUiLCJiZWhhdmlvdXJDb21wb25lbnROYW1lIiwiYWRkQmVoYXZpb3VyQ29tcG9uZW50IiwiU3RhdGVDb21wb25lbnQiLCJzdGF0ZXMiLCJjb21wb25lbnROYW1lIiwic3RhdGVDb21wb25lbnROYW1lIiwiYWRkU3RhdGVDb21wb25lbnQiLCJleGl0IiwiZW50ZXIiLCJhZGQiLCJoYXNUYWciLCJ0YWciLCJpbmNsdWRlcyIsIkIyV29ybGQiLCJCb3gyRCIsIkR5bmFtaWNzIiwiYjJXb3JsZCIsIkIyVmVjMiIsIkNvbW1vbiIsImIyVmVjMiIsIkIyRGVidWdEcmF3IiwiYjJEZWJ1Z0RyYXciLCJCMkNvbnRhY3RMaXN0ZW5lciIsImIyQ29udGFjdExpc3RlbmVyIiwid29ybGQiLCJjb250YWN0cyIsInBoeXNpY3NDb21wb25lbnROYW1lIiwiU2V0Q29udGFjdExpc3RlbmVyIiwiQmVnaW5Db250YWN0IiwiY29udGFjdCIsImNvbXBvbmVudEEiLCJHZXRGaXh0dXJlQSIsIkdldEJvZHkiLCJHZXRVc2VyRGF0YSIsImNvbXBvbmVudEIiLCJHZXRGaXh0dXJlQiIsImVudGl0eUEiLCJlbnRpdHlCIiwib25Db250YWN0QmVnaW4iLCJFbmRDb250YWN0Iiwib25Db250YWN0RW5kIiwiUHJlU29sdmUiLCJvbkNvbnRhY3RQcmVTb2x2ZSIsIlBvc3RTb2x2ZSIsIm9uQ29udGFjdFBvc3RTb2x2ZSIsImRlYnVnRHJhdyIsIlNldFNwcml0ZSIsIlNldERyYXdTY2FsZSIsIlNldEZpbGxBbHBoYSIsIlNldEZsYWdzIiwiZV9zaGFwZUJpdCIsIkFwcGVuZEZsYWdzIiwiZV9qb2ludEJpdCIsIlNldERlYnVnRHJhdyIsIm1fZGVidWdEcmF3IiwibV9zcHJpdGUiLCJncmFwaGljcyIsImNhbGxiYWNrIiwiZ2V0Q29tcG9uZW50Iiwic2V0R3Jhdml0eSIsIlNldEdyYXZpdHkiLCJEcmF3RGVidWdEYXRhIiwiYWRkUGh5c2ljc0NvbXBvbmVudCIsIlBoeXNpY3NDb21wb25lbnQiLCJib2R5IiwiY3JlYXRlQm9keSIsIlNldFVzZXJEYXRhIiwiZ2V0Rml4dHVyZURlZiIsIkIyRml4dHVyZURlZiIsImIyRml4dHVyZURlZiIsImZpeERlZiIsImRlbnNpdHkiLCJmcmljdGlvbiIsInJlc3RpdHV0aW9uIiwiaXNTZW5zb3IiLCJhZGRQb2x5Z29uIiwiZGVmYXVsdHMiLCJ2ZXJ0aWNlcyIsImZpeHR1cmVEZWYiLCJCMlBvbHlnb25TaGFwZSIsIkNvbGxpc2lvbiIsIlNoYXBlcyIsImIyUG9seWdvblNoYXBlIiwic2hhcGUiLCJ2ZXJ0IiwiU2V0QXNBcnJheSIsIm1fdmVydGljZXMiLCJmaXh0dXJlIiwiQ3JlYXRlRml4dHVyZSIsImZpeHR1cmVzIiwiYWRkUmVjdGFuZ2xlIiwiU2V0QXNCb3giLCJtX2NlbnRyb2lkIiwiYWRkQ2lyY2xlIiwiZml4dHVyZURlZmluaXRpb24iLCJCMkNpcmNsZVNoYXBlIiwiYjJDaXJjbGVTaGFwZSIsIm1fcCIsImFkZEVkZ2UiLCJTZXRBc0VkZ2UiLCJhbGxvd1NsZWVwIiwiYXdha2UiLCJidWxsZXQiLCJmaXhlZFJvdGF0aW9uIiwiYW5ndWxhckRhbXBpbmciLCJhbmd1bGFyVmVsb2NpdHkiLCJsaW5lYXJEYW1waW5nIiwibGluZWFyVmVsb2NpdHkiLCJ1c2VyRGF0YSIsIkIyQm9keURlZiIsImIyQm9keURlZiIsIkIyQm9keSIsImIyQm9keSIsImJvZHlEZWYiLCJwb3NpdGlvbiIsImIyX3N0YXRpY0JvZHkiLCJiMl9keW5hbWljQm9keSIsImIyX2tpbmVtYXRpY0JvZHkiLCJDcmVhdGVCb2R5IiwiU3RlcCIsIkNsZWFyRm9yY2VzIiwiZ2V0UG9zaXRpb24iLCJnZXRBbmdsZSIsImZvckVhY2giLCJEZXN0cm95Rml4dHVyZSIsIkRlc3Ryb3lCb2R5IiwiYXBwbHlGb3JjZSIsIkFwcGx5Rm9yY2UiLCJHZXRXb3JsZENlbnRlciIsInNldFBvc2l0aW9uIiwiU2V0UG9zaXRpb24iLCJnZXRMaW5lYXJWZWxvY2l0eSIsInZlbG9jaXR5IiwiR2V0TGluZWFyVmVsb2NpdHkiLCJzZXRMaW5lYXJWZWxvY2l0eSIsIlNldEF3YWtlIiwiU2V0TGluZWFyVmVsb2NpdHkiLCJHZXRQb3NpdGlvbiIsIkdldEFuZ2xlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFxQjs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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a0JBQWdCLEVBQUVBLGlCQVhKO0FBWWR6TixlQUFhLEVBQUVBLGNBWkQ7QUFhZG9GLFNBQU8sRUFBRUEsT0FiSztBQWNkbEYsZUFBYSxFQUFFQSxjQWREO0FBZWQrRyxpQkFBZSxFQUFFQSxnQkFmSDtBQWdCZHZILGNBQVksRUFBRUEsYUFoQkE7QUFpQmR5SixPQUFLLEVBQUVBLEtBakJPO0FBa0JkM0osYUFBVyxFQUFFQSxZQWxCQztBQW1CZCtKLG9CQUFrQixFQUFFQSxtQkFuQk47QUFvQmRuSixpQkFBZSxFQUFFQSxnQkFwQkg7QUFxQmR3SixnQkFBYyxFQUFFQSxlQXJCRjtBQXNCZHZKLGFBQVcsRUFBRUEsWUFBV0E7QUF0QlYsQ0FBaEI7QUF5QmVyRSw0RkFBZixFIiwiZmlsZSI6Imhhcm1vbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIYXJtb255XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhhcm1vbnlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cbmNvbnN0IEF1ZGlvU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpXG4gIHRoaXMubWFzdGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5tYXN0ZXIuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pXG4gIHRoaXMuYXVkaW9Db21wb25lbnROYW1lID0gJ2F1ZGlvJ1xuICB0aGlzLmxpc3RlbmVyID0ge1xuICAgIHg6IHdpbmRvdy5pbm5lcldpZHRoICogMC41LFxuICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNVxuICB9XG4gIHRoaXMudm9sdW1lVGhyZXNob2xkID0gMTAwMFxuICB0aGlzLnBhblRocmVzaG9sZCA9IDUwMFxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUucHJvY2Vzc1ZvbHVtZSA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgY29uc3QgYXggPSB0aGlzLmxpc3RlbmVyLnhcbiAgY29uc3QgYXkgPSB0aGlzLmxpc3RlbmVyLnlcbiAgY29uc3QgYnggPSBlbnRpdHkueFxuICBjb25zdCBieSA9IGVudGl0eS55XG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChheCAtIGJ4KSAqIChheCAtIGJ4KSArIChheSAtIGJ5KSAqIChheSAtIGJ5KSlcbiAgbGV0IG5vcm0gPSBkaXN0YW5jZSAvIHRoaXMudm9sdW1lVGhyZXNob2xkXG4gIGlmIChub3JtID4gMSkge1xuICAgIG5vcm0gPSAxXG4gIH1cbiAgaWYgKG5vcm0gPCAwKSB7XG4gICAgbm9ybSA9IDBcbiAgfVxuICByZXR1cm4gKDEuMCAtIG5vcm0pXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5wcm9jZXNzUGFuID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBjb25zdCBheCA9IHRoaXMubGlzdGVuZXIueFxuICBjb25zdCBieCA9IGVudGl0eS54XG4gIGxldCBwYW4gPSAoYnggLSBheCkgLyB0aGlzLnBhblRocmVzaG9sZFxuICBpZiAocGFuID4gMSkge1xuICAgIHBhbiA9IDFcbiAgfVxuICBpZiAocGFuIDwgLTEpIHtcbiAgICBwYW4gPSAtMVxuICB9XG4gIHJldHVybiBwYW5cbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoZW50aXR5LCBuYW1lKSB7XG4gIGNvbnN0IHNvdXJjZSA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICBjb25zdCBnYWluID0gZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uZ2FpblxuICBjb25zdCBwYW4gPSBlbnRpdHkuY29tcG9uZW50cy5hdWRpby5wYW5cbiAgZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlID0gc291cmNlXG4gIHNvdXJjZS5idWZmZXIgPSB0aGlzLmNhY2hlW25hbWVdXG4gIHNvdXJjZS5jb25uZWN0KHBhbilcbiAgcGFuLmNvbm5lY3QoZ2FpbilcbiAgZ2Fpbi5jb25uZWN0KHRoaXMubWFzdGVyKVxuICBzb3VyY2Uuc3RhcnQoKVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuc2V0Vm9sdW1lID0gZnVuY3Rpb24gKGVudGl0eSwgdm9sdW1lKSB7XG4gIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnZvbHVtZSA9IHZvbHVtZVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgaWYgKGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZSkge1xuICAgIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZS5zdG9wKClcbiAgfVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuYWRkQXVkaW9Db21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LkF1ZGlvQ29tcG9uZW50KHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgY29tcG9uZW50LmdhaW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIGNvbXBvbmVudC5wYW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlU3RlcmVvUGFubmVyKClcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5hdWRpb0NvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzdW1lKClcbiAgfVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGNvbnN0IGVudGl0eSA9IGNvbXBvbmVudC5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudC5nYWluLmdhaW4udmFsdWUgPSB0aGlzLnByb2Nlc3NWb2x1bWUoZW50aXR5KSAqIGNvbXBvbmVudC52b2x1bWVcbiAgICAgIGNvbXBvbmVudC5wYW4ucGFuLnZhbHVlID0gdGhpcy5wcm9jZXNzUGFuKGVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHRoaXMuc3RvcChlbnRpdHkpXG4gIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1N5c3RlbVxuIiwiY29uc3QgQXVkaW9Db21wb25lbnQgPSBmdW5jdGlvbiAoc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuc291cmNlID0gbnVsbFxuICB0aGlzLmdhaW4gPSBudWxsXG4gIHRoaXMucGFuID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy52b2x1bWUgPSAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSW1hZ2UgKi9cblxuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmltYWdlc0NhY2hlID0ge31cbiAgdGhpcy5hdWRpb0NhY2hlID0ge31cbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICB0aGlzLmVycm9ycyA9IDBcbiAgdGhpcy5zdWNjZXNzID0gMFxuICB0aGlzLnF1ZXVlZCA9IDBcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMucXVldWVkKytcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgIHRoaXMuaW1hZ2VzQ2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHRoaXMub25TdWNjZXNzKGNvbmZpZylcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycysrXG4gICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5Mb2FkZXIucHJvdG90eXBlLmxvYWRBdWRpbyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5xdWV1ZWQrK1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgICAgdGhpcy5hdWRpb0NhY2hlW2NvbmZpZy5uYW1lXSA9IGJ1ZmZlclxuICAgICAgICB0aGlzLm9uU3VjY2Vzcyhjb25maWcpXG4gICAgICAgIHJlc29sdmUoYnVmZmVyKVxuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLmVycm9ycysrXG4gICAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICB9KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0pXG59XG5cbkxvYWRlci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25TdWNjZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vblByb2dyZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnF1ZXVlZCA+IDApIHtcbiAgICBpZiAoIXRoaXMuc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSB0cnVlXG4gICAgICB0aGlzLm9uU3RhcnQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5xdWV1ZWQgPT09IHRoaXMuc3VjY2VzcyArIHRoaXMuZXJyb3JzKSB7XG4gICAgICB0aGlzLnF1ZXVlZCA9IDBcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDBcbiAgICAgIHRoaXMuZXJyb3JzID0gMFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIH1cbiAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKCh0aGlzLnN1Y2Nlc3MgKyB0aGlzLmVycm9ycykgLyB0aGlzLnF1ZXVlZCAqIDEwMClcbiAgICBpZiAoaXNOYU4ocHJvZ3Jlc3MpKSB7XG4gICAgICBwcm9ncmVzcyA9IDEwMFxuICAgIH1cbiAgICB0aGlzLm9uUHJvZ3Jlc3MocHJvZ3Jlc3MpXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW5naW5lID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmxvYWRlciA9IG5ldyBIYXJtb255LkxvYWRlcigpXG4gIHRoaXMubG9vcCA9IG5ldyBIYXJtb255Lkxvb3BTeXN0ZW0oKVxuICB0aGlzLnNjZW5lID0gbmV3IEhhcm1vbnkuU2NlbmVTeXN0ZW0oKVxuICB0aGlzLnJlbmRlciA9IG5ldyBIYXJtb255LlJlbmRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuYXVkaW8gPSBuZXcgSGFybW9ueS5BdWRpb1N5c3RlbSgpXG4gIHRoaXMuZW50aXRpZXMgPSBuZXcgSGFybW9ueS5FbnRpdHlTeXN0ZW0oKVxuICB0aGlzLmtleXMgPSBuZXcgSGFybW9ueS5LZXlTeXN0ZW0oKVxuICB0aGlzLnBoeXNpY3MgPSBuZXcgSGFybW9ueS5QaHlzaWNzU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5wb2ludGVycyA9IG5ldyBIYXJtb255LlBvaW50ZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLmJlaGF2aW91cnMgPSBuZXcgSGFybW9ueS5CZWhhdmlvdXJTeXN0ZW0odGhpcylcbiAgdGhpcy5zdGF0ZSA9IG5ldyBIYXJtb255LlN0YXRlU3lzdGVtKClcbiAgdGhpcy5oZWxwZXJzID0gbmV3IEhhcm1vbnkuSGVscGVycygpXG5cbiAgdGhpcy5sb29wLm9uU3RlcCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy5zY2VuZS5jdXJyZW50KSB7XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0UHJlbG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVyLmxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQucHJlbG9hZCh0aGlzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGVyLnVwZGF0ZSgpXG4gICAgICAgIGlmICh0aGlzLmxvYWRlci5jb21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyLmNhY2hlID0gdGhpcy5sb2FkZXIuaW1hZ2VzQ2FjaGVcbiAgICAgICAgICB0aGlzLmF1ZGlvLmNhY2hlID0gdGhpcy5sb2FkZXIuYXVkaW9DYWNoZVxuICAgICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdENyZWF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RDcmVhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmNyZWF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3REcmF3KClcbiAgICAgICAgdGhpcy5rZXlzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMucG9pbnRlcnMudXBkYXRlKClcbiAgICAgICAgdGhpcy5hdWRpby51cGRhdGUoKVxuICAgICAgICB0aGlzLnBoeXNpY3MudXBkYXRlKClcbiAgICAgICAgdGhpcy5lbnRpdGllcy51cGRhdGUoKVxuICAgICAgICB0aGlzLmJlaGF2aW91cnMudXBkYXRlKClcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnVwZGF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdERyYXcpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhdygpXG4gICAgICAgIHRoaXMucGh5c2ljcy5kcmF3RGVidWdEYXRhKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmRyYXcodGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NlbmUubXVzdFN3aXRjaCkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZXN0cm95QWxsKClcbiAgICAgIHRoaXMucG9pbnRlcnMuZGVzdHJveSgpXG4gICAgICB0aGlzLmtleXMuZGVzdHJveSgpXG4gICAgICB0aGlzLnNjZW5lLmN1cnJlbnQgPSB0aGlzLnNjZW5lLnJlcXVlc3RlZFxuICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0UHJlbG9hZCgpXG4gICAgfVxuICB9XG4gIHRoaXMubG9vcC5ydW4oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmVcbiIsImNvbnN0IEVudGl0eSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdGFnczogW10sXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGFuZ2xlOiAwLFxuICAgIHNjYWxlOiAxXG4gIH0sIHBhcmFtcylcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gIHRoaXMudGFncyA9IGNvbmZpZy50YWdzXG4gIHRoaXMueCA9IGNvbmZpZy54XG4gIHRoaXMueSA9IGNvbmZpZy55XG4gIHRoaXMuYW5nbGUgPSBjb25maWcuYW5nbGVcbiAgdGhpcy5zY2FsZSA9IGNvbmZpZy5zY2FsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlcbiIsImNvbnN0IEhlbHBlcnMgPSBmdW5jdGlvbiAoKSB7fVxuXG5IZWxwZXJzLnByb3RvdHlwZS5jcmVhdGVHcmlkID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgZ3JpZCA9IG5ldyBBcnJheShjb2xzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHJvd3MpXG4gIH1cbiAgcmV0dXJuIGdyaWRcbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5nZXRSYW5kb21JdGVtcyA9IGZ1bmN0aW9uIChhcnJheSwgcXVhbnRpdHkpIHtcbiAgY29uc3QgcmFuZG9tSXRlbXMgPSBbXVxuICBmb3IgKGxldCBpID0gcXVhbnRpdHk7IGktLTspIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIGFycmF5Lmxlbmd0aCAtIDEpXG4gICAgcmFuZG9tSXRlbXMucHVzaChhcnJheVtyYW5kb21JbmRleF0pXG4gICAgYXJyYXkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVxuICB9XG4gIHJldHVybiByYW5kb21JdGVtc1xufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5zaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSlcbiAgICBjb25zdCB4ID0gYXJyYXlbaV1cbiAgICBhcnJheVtpXSA9IGFycmF5W2pdXG4gICAgYXJyYXlbal0gPSB4XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnNcbiIsImNvbnN0IEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMuZW5kID0gZmFsc2VcbiAgdGhpcy5ob2xkID0gZmFsc2VcbiAgdGhpcy5ob2xkVGltZSA9IDBcbiAgdGhpcy5zdGFydEZyYW1lID0gMFxuICB0aGlzLmVuZEZyYW1lID0gMFxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEtleVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSB0cnVlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbZXZlbnQua2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2V2ZW50LmtleV0uaG9sZCA9IGZhbHNlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5nZXRPclNldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gbmV3IEhhcm1vbnkuS2V5KGtleSlcbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZVtrZXldXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5nZXRPclNldChrZXkpXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgdGhpcy5mcmFtZSsrXG4gICAgdGhpcy5ub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLmRlbHRhID0gdGhpcy5ub3cgLSB0aGlzLnRoZW5cbiAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKGtleS5ob2xkKSB7XG4gICAgICAgIGtleS5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgIGtleS5lbmRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5LmhvbGRUaW1lID0gMFxuICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuZW5kRnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBrZXkuc3RhcnQgPSAoa2V5LnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICBrZXkuZW5kID0gKGtleS5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICB9XG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5U3lzdGVtXG4iLCJjb25zdCBMb29wU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjY3VtdWxhdG9yID0gMFxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLmxhc3RUaW1lID0gMFxuICB0aGlzLmxhc3RTdGVwID0gMFxuICB0aGlzLmZwcyA9IDYwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5jb250aW51ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSB0cnVlXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgdGltZXN0YW1wID0gdGltZXN0YW1wIHx8IDBcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xuICB0aGlzLmFjY3VtdWxhdG9yICs9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWVcbiAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcFxuICB3aGlsZSAoIXRoaXMucGF1c2VkICYmIHRoaXMuYWNjdW11bGF0b3IgPj0gdGhpcy50aW1lc3RlcCkge1xuICAgIHRoaXMuc3RlcCgpXG4gICAgdGhpcy5kZWx0YSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFN0ZXBcbiAgICB0aGlzLmxhc3RTdGVwID0gdGltZXN0YW1wXG4gICAgdGhpcy5hY2N1bXVsYXRvciAtPSB0aGlzLnRpbWVzdGVwXG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bi5iaW5kKHRoaXMpKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZyYW1lKytcbiAgdGhpcy5vblN0ZXAoKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5vblN0ZXAgPSBmdW5jdGlvbiAoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBMb29wU3lzdGVtXG4iLCJjb25zdCBQb2ludGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbiAgdGhpcy5pZCA9IDBcbiAgdGhpcy50eXBlID0gbnVsbFxuICB0aGlzLnN0YXJ0WCA9IDBcbiAgdGhpcy5zdGFydFkgPSAwXG4gIHRoaXMub2Zmc2V0WCA9IDBcbiAgdGhpcy5vZmZzZXRZID0gMFxuICB0aGlzLnggPSAwXG4gIHRoaXMueSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgUG9pbnRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5lbmFibGVQb2ludGVycygpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldE9yU2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW3BvaW50ZXJdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbcG9pbnRlcl0gPSBuZXcgSGFybW9ueS5Qb2ludGVyKHBvaW50ZXIpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVbcG9pbnRlcl1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQocG9pbnRlcilcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZW5hYmxlUG9pbnRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FudmFzLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gIHRoaXMuY2FudmFzLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRQb2ludGVyQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5pZCA9PT0gaWQpIHtcbiAgICAgICAgb3V0cHV0ID0gcG9pbnRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldEluYWN0aXZlUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG91dHB1dCA9IGZhbHNlXG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKHBvaW50ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlckRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpIHx8IHRoaXMuZ2V0SW5hY3RpdmVQb2ludGVyKClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IHRydWVcbiAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgcG9pbnRlci50eXBlID0gZXZlbnQucG9pbnRlclR5cGUgLy8gJ21vdXNlJywgJ3BlbicsICd0b3VjaCdcbiAgICBwb2ludGVyLmhvbGQgPSB0cnVlXG4gICAgcG9pbnRlci5zdGFydFggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gICAgcG9pbnRlci54ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci55ID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IGZhbHNlXG4gICAgcG9pbnRlci5ob2xkID0gZmFsc2VcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIHJldHVybiBmYWxzZVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICB0aGlzLmZyYW1lKytcbiAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlblxuICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgICBpZiAocG9pbnRlci5ob2xkKSB7XG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRYID0gKHBvaW50ZXIueCAtIHBvaW50ZXIuc3RhcnRYKVxuICAgICAgICAgIHBvaW50ZXIub2Zmc2V0WSA9IChwb2ludGVyLnkgLSBwb2ludGVyLnN0YXJ0WSlcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lICs9IHRoaXMuZGVsdGFcbiAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFggPSAwXG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRZID0gMFxuICAgICAgICAgIHBvaW50ZXIuaG9sZFRpbWUgPSAwXG4gICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5lbmRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuZW5kRnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvaW50ZXIuc3RhcnQgPSAocG9pbnRlci5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAgICBwb2ludGVyLmVuZCA9IChwb2ludGVyLmVuZEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclN5c3RlbVxuIiwiY29uc3QgU3ByaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5pbWFnZSA9IGNvbmZpZy5pbWFnZVxuICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoXG4gIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodFxuICB0aGlzLnNvdXJjZVggPSBjb25maWcuc291cmNlWFxuICB0aGlzLnNvdXJjZVkgPSBjb25maWcuc291cmNlWVxuICB0aGlzLnNvdXJjZVdpZHRoID0gY29uZmlnLnNvdXJjZVdpZHRoXG4gIHRoaXMuc291cmNlSGVpZ2h0ID0gY29uZmlnLnNvdXJjZUhlaWdodFxuICB0aGlzLmFuY2hvclggPSBjb25maWcuYW5jaG9yWFxuICB0aGlzLmFuY2hvclkgPSBjb25maWcuYW5jaG9yWVxuICB0aGlzLnZpc2libGUgPSBjb25maWcudmlzaWJsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcHJpdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255IEltYWdlICovXG5cbmNvbnN0IFJlbmRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5zcHJpdGVDb21wb25lbnROYW1lID0gJ3Nwcml0ZSdcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBjb25maWcudXJsXG4gIH0pXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgcmV0dXJuIHRoaXMuY2FjaGVbaW1hZ2VdXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhcigpXG4gIC8vIHRoaXMuY29udGV4dC5zYXZlKClcblxuICAvLyB0cmFuc2xhdGUgdG8gY2FtZXJhIGNlbnRlclxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgICh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgICh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKVxuICAvLyApXG5cbiAgLy8gcm90YXRlXG4gIC8vIHRoaXMuY29udGV4dC5yb3RhdGUodGhpcy5jYW1lcmEuYW5nbGUpXG5cbiAgLy8gc2NhbGVcbiAgLy8gdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuY2FtZXJhLnpvb20sIHRoaXMuY2FtZXJhLnpvb20pXG5cbiAgLy8gdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCdcbiAgLy8gdGhpcy5jYW52YXMuY2lyY2xlKDAsIDAsIDEwKVxuXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgLSh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgIC0odGhpcy5jYW1lcmEuaGVpZ2h0IC8gMilcbiAgLy8gKVxuXG4gIC8vIHRyYW5zbGF0ZVxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi54LFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi55XG4gIC8vIClcblxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudC5lbnRpdHkpXG5cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21wb25lbnQudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpXG4gICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS54ICsgY29tcG9uZW50LndpZHRoICogMC41ICogY29tcG9uZW50LmVudGl0eS5zY2FsZSAtIGNvbXBvbmVudC53aWR0aCAqIGNvbXBvbmVudC5hbmNob3JYICogY29tcG9uZW50LmVudGl0eS5zY2FsZSxcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnkgKyBjb21wb25lbnQuaGVpZ2h0ICogMC41ICogY29tcG9uZW50LmVudGl0eS5zY2FsZSAtIGNvbXBvbmVudC5oZWlnaHQgKiBjb21wb25lbnQuYW5jaG9yWSAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmNvbnRleHQucm90YXRlKGNvbXBvbmVudC5lbnRpdHkuYW5nbGUpXG4gICAgICAgIHRoaXMuY29udGV4dC5zY2FsZShcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkuc2NhbGVcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChjb21wb25lbnQuc291cmNlV2lkdGggPT09IDApIHtcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlV2lkdGggPSBjb21wb25lbnQuaW1hZ2Uud2lkdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQuc291cmNlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZUhlaWdodCA9IGNvbXBvbmVudC5pbWFnZS5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgY29tcG9uZW50LmltYWdlLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VYLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VZLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VXaWR0aCxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlSGVpZ2h0LFxuICAgICAgICAgIGNvbXBvbmVudC53aWR0aCAqIC0wLjUsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LmhlaWdodCAqIC0wLjUsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LndpZHRoLCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC5oZWlnaHQgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmFkZFNwcml0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIHBhcmFtcykge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICBpbWFnZTogbnVsbCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBzb3VyY2VYOiAwLFxuICAgIHNvdXJjZVk6IDAsXG4gICAgc291cmNlV2lkdGg6IDAsXG4gICAgc291cmNlSGVpZ2h0OiAwLFxuICAgIGFuY2hvclg6IDAuNSxcbiAgICBhbmNob3JZOiAwLjUsXG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9LCBwYXJhbXMpXG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNwcml0ZUNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5zcHJpdGVDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMudW5zaGlmdChjb21wb25lbnQpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGNvbmZpZy50ZXh0LCBjb25maWcueCwgY29uZmlnLnkpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0LmFyYyhjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5saW5lID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0Lm1vdmVUbyhjb25maWcuYXgsIGNvbmZpZy5heSlcbiAgdGhpcy5jb250ZXh0LmxpbmVUbyhjb25maWcuYngsIGNvbmZpZy5ieSlcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LnJlY3QoY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnNwcml0ZS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyU3lzdGVtXG4iLCJjb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcHJlbG9hZDogKCkgPT4ge30sXG4gICAgY3JlYXRlOiAoKSA9PiB7fSxcbiAgICB1cGRhdGU6ICgpID0+IHt9LFxuICAgIGRyYXc6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuU2NlbmUucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMucHJlbG9hZChlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuY3JlYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy51cGRhdGUoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5kcmF3KGVuZ2luZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVcbiIsImNvbnN0IFNjZW5lU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIHRoaXMucmVxdWVzdGVkID0gbnVsbFxuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzY2VuZVxuICB0aGlzLnJlcXVlc3RTd2l0Y2goKVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFByZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSB0cnVlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdENyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0VXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gdHJ1ZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3REcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IHRydWVcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RTd2l0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVN5c3RlbVxuIiwiY29uc3QgQmVoYXZpb3VyQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTdGFydCA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5vblN0YXJ0ID0gY29uZmlnLm9uU3RhcnRcbiAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvdXJDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEJlaGF2aW91clN5c3RlbSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgdGhpcy5lbmdpbmUgPSBlbmdpbmVcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lID0gJ2JlaGF2aW91cidcbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS5hZGRCZWhhdmlvdXJDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgb25TdGFydDogKCkgPT4ge30sXG4gICAgb25VcGRhdGU6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQmVoYXZpb3VyQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgY29uc3QgZW50aXR5ID0gY29tcG9uZW50LmVudGl0eVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQoZW50aXR5KVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0VXBkYXRlKSB7XG4gICAgICB0aGlzLm9uVXBkYXRlKGVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm11c3RTdGFydCA9IGZhbHNlXG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubXVzdFVwZGF0ZSA9IHRydWVcbiAgcmV0dXJuIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ub25TdGFydCh0aGlzLmVuZ2luZSwgZW50aXR5KVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICByZXR1cm4gZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5vblVwZGF0ZSh0aGlzLmVuZ2luZSwgZW50aXR5KVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW91clN5c3RlbVxuIiwiY29uc3QgU3RhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG4gIHRoaXMucmVxdWVzdGVkID0gcGFyYW1zLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB0aGlzLnN0YXRlcyA9IHBhcmFtcy5zdGF0ZXNcbn1cblxuU3RhdGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudE5hbWUgPSAnc3RhdGUnXG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBTdGF0ZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5zdGF0ZUNvbXBvbmVudE5hbWUgPSAnc3RhdGUnXG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS5hZGRTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5TdGF0ZUNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5zdGF0ZUNvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGlmIChjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmV4aXQoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGNvbXBvbmVudC5jdXJyZW50ID0gY29tcG9uZW50LnJlcXVlc3RlZFxuICAgICAgaWYgKGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC5tdXN0U3dpdGNoID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5jdXJyZW50ICYmIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLnVwZGF0ZSkge1xuICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0udXBkYXRlKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnN0YXRlLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZVN5c3RlbVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW50aXR5U3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0gW11cbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGVudGl0eSA9IG5ldyBIYXJtb255LkVudGl0eShjb25maWcpXG4gIHRoaXMuY2FjaGUucHVzaChlbnRpdHkpXG4gIHJldHVybiBlbnRpdHlcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICBpZiAoZW50aXR5Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNhY2hlLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGZvciAoY29uc3QgaSBpbiBlbnRpdHkuY29tcG9uZW50cykge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlbnRpdHkuY29tcG9uZW50cywgaSkpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRzW2ldXG4gICAgICBjb25zdCBzeXN0ZW0gPSBjb21wb25lbnQuc3lzdGVtXG4gICAgICBzeXN0ZW0uZGVzdHJveUNvbXBvbmVudChlbnRpdHkpXG4gICAgfVxuICB9XG4gIGVudGl0eS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5oYXNUYWcgPSBmdW5jdGlvbiAoZW50aXR5LCB0YWcpIHtcbiAgcmV0dXJuIGVudGl0eS50YWdzLmluY2x1ZGVzKHRhZylcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95QWxsID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmNhY2hlW2ldXG4gICAgdGhpcy5kZXN0cm95KGVudGl0eSlcbiAgfVxuICB0aGlzLmNhY2hlID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5U3lzdGVtXG4iLCIvKiBnbG9iYWwgQm94MkQgSGFybW9ueSAqL1xuXG5jb25zdCBQaHlzaWNzU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICBjb25zdCBCMldvcmxkID0gQm94MkQuRHluYW1pY3MuYjJXb3JsZFxuICBjb25zdCBCMlZlYzIgPSBCb3gyRC5Db21tb24uTWF0aC5iMlZlYzJcbiAgY29uc3QgQjJEZWJ1Z0RyYXcgPSBCb3gyRC5EeW5hbWljcy5iMkRlYnVnRHJhd1xuICBjb25zdCBCMkNvbnRhY3RMaXN0ZW5lciA9IEJveDJELkR5bmFtaWNzLmIyQ29udGFjdExpc3RlbmVyXG5cbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLnNjYWxlID0gMTAwXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMud29ybGQgPSBuZXcgQjJXb3JsZChuZXcgQjJWZWMyKDAsIDApLCB0cnVlKVxuICB0aGlzLmNvbnRhY3RzID0gbmV3IEIyQ29udGFjdExpc3RlbmVyKClcbiAgdGhpcy5waHlzaWNzQ29tcG9uZW50TmFtZSA9ICdwaHlzaWNzJ1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWN0c1xuXG4gIHRoaXMud29ybGQuU2V0Q29udGFjdExpc3RlbmVyKHRoaXMuY29udGFjdHMpXG5cbiAgdGhpcy5jb250YWN0cy5CZWdpbkNvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0QmVnaW4pIHtcbiAgICAgIGNvbXBvbmVudEEub25Db250YWN0QmVnaW4oZW50aXR5QiwgZW50aXR5QSlcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudEIub25Db250YWN0QmVnaW4pIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0QmVnaW4oZW50aXR5QSwgZW50aXR5QilcbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLkVuZENvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0RW5kKSB7XG4gICAgICBjb21wb25lbnRBLm9uQ29udGFjdEVuZChlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RFbmQpIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0RW5kKGVudGl0eUEsIGVudGl0eUIpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5QcmVTb2x2ZSA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50QS5vbkNvbnRhY3RQcmVTb2x2ZSkge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RQcmVTb2x2ZSkge1xuICAgICAgY29tcG9uZW50Qi5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuUG9zdFNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGlmIChjb21wb25lbnRBLm9uQ29udGFjdFBvc3RTb2x2ZSkge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RQb3N0U29sdmUoZW50aXR5QiwgZW50aXR5QSlcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudEIub25Db250YWN0UG9zdFNvbHZlKSB7XG4gICAgICBjb21wb25lbnRCLm9uQ29udGFjdFBvc3RTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWJ1Z1xuXG4gIGNvbnN0IGRlYnVnRHJhdyA9IG5ldyBCMkRlYnVnRHJhdyh0aGlzLmNvbnRleHQpXG4gIGRlYnVnRHJhdy5TZXRTcHJpdGUoY2FudmFzLmdldENvbnRleHQoJzJkJykpXG4gIGRlYnVnRHJhdy5TZXREcmF3U2NhbGUodGhpcy5zY2FsZSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGaWxsQWxwaGEoMC41KVxuICBkZWJ1Z0RyYXcuU2V0RmxhZ3MoQjJEZWJ1Z0RyYXcuZV9zaGFwZUJpdClcbiAgZGVidWdEcmF3LkFwcGVuZEZsYWdzKEIyRGVidWdEcmF3LmVfam9pbnRCaXQpXG4gIHRoaXMud29ybGQuU2V0RGVidWdEcmF3KGRlYnVnRHJhdylcbiAgdGhpcy53b3JsZC5tX2RlYnVnRHJhdy5tX3Nwcml0ZS5ncmFwaGljcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5vbkNvbnRhY3RCZWdpbiA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdEJlZ2luID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0RW5kID0gZnVuY3Rpb24gKGVudGl0eSwgY2FsbGJhY2spIHtcbiAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KVxuICBjb21wb25lbnQub25Db250YWN0RW5kID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0UHJlU29sdmUgPSBmdW5jdGlvbiAoZW50aXR5LCBjYWxsYmFjaykge1xuICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpXG4gIGNvbXBvbmVudC5vbkNvbnRhY3RQcmVTb2x2ZSA9IGNhbGxiYWNrXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLm9uQ29udGFjdFBvc3RTb2x2ZSA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdFBvc3RTb2x2ZSA9IGNhbGxiYWNrXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnNldEdyYXZpdHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMud29ybGQuU2V0R3Jhdml0eShjb25maWcpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRyYXdEZWJ1Z0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud29ybGQuRHJhd0RlYnVnRGF0YSgpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuUGh5c2ljc0NvbXBvbmVudCh0aGlzKVxuICBjb21wb25lbnQuYm9keSA9IHRoaXMuY3JlYXRlQm9keShwYXJhbXMpXG4gIGNvbXBvbmVudC5ib2R5LlNldFVzZXJEYXRhKGNvbXBvbmVudClcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLnBoeXNpY3NDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldEZpeHR1cmVEZWYgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IEIyRml4dHVyZURlZiA9IEJveDJELkR5bmFtaWNzLmIyRml4dHVyZURlZlxuICBjb25zdCBmaXhEZWYgPSBuZXcgQjJGaXh0dXJlRGVmKClcbiAgZml4RGVmLmRlbnNpdHkgPSBjb25maWcuZGVuc2l0eVxuICBmaXhEZWYuZnJpY3Rpb24gPSBjb25maWcuZnJpY3Rpb25cbiAgZml4RGVmLnJlc3RpdHV0aW9uID0gY29uZmlnLnJlc3RpdHV0aW9uXG4gIGZpeERlZi5pc1NlbnNvciA9IGNvbmZpZy5pc1NlbnNvclxuICByZXR1cm4gZml4RGVmXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFBvbHlnb24gPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgdmVydGljZXM6IFtdLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBkZW5zaXR5OiAxLFxuICAgIGZyaWN0aW9uOiAwLjUsXG4gICAgcmVzdGl0dXRpb246IDAuNSxcbiAgICBpc1NlbnNvcjogZmFsc2VcbiAgfVxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG4gIGNvbnN0IGZpeHR1cmVEZWYgPSB0aGlzLmdldEZpeHR1cmVEZWYoY29uZmlnKVxuICBjb25zdCBCMlBvbHlnb25TaGFwZSA9IEJveDJELkNvbGxpc2lvbi5TaGFwZXMuYjJQb2x5Z29uU2hhcGVcbiAgZml4dHVyZURlZi5zaGFwZSA9IG5ldyBCMlBvbHlnb25TaGFwZSgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdmVydCA9IGNvbmZpZy52ZXJ0aWNlc1tpXVxuICAgIHZlcnQueCAvPSB0aGlzLnNjYWxlXG4gICAgdmVydC55IC89IHRoaXMuc2NhbGVcbiAgfVxuICBmaXh0dXJlRGVmLnNoYXBlLlNldEFzQXJyYXkoY29uZmlnLnZlcnRpY2VzLCBjb25maWcudmVydGljZXMubGVuZ3RoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeHR1cmVEZWYuc2hhcGUubV92ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZlcnQgPSBmaXh0dXJlRGVmLnNoYXBlLm1fdmVydGljZXNbaV1cbiAgICB2ZXJ0LnggKz0gY29uZmlnLnggLyB0aGlzLnNjYWxlIHx8IDBcbiAgICB2ZXJ0LnkgKz0gY29uZmlnLnkgLyB0aGlzLnNjYWxlIHx8IDBcbiAgfVxuICBjb25zdCBmaXh0dXJlID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkNyZWF0ZUZpeHR1cmUoZml4dHVyZURlZilcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5wdXNoKGZpeHR1cmUpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFJlY3RhbmdsZSA9IGZ1bmN0aW9uIChlbnRpdHksIHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGRlbnNpdHk6IDEsXG4gICAgZnJpY3Rpb246IDAuNSxcbiAgICByZXN0aXR1dGlvbjogMC41LFxuICAgIGlzU2Vuc29yOiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcbiAgY29uc3QgZml4dHVyZURlZiA9IHRoaXMuZ2V0Rml4dHVyZURlZihjb25maWcpXG5cbiAgY29uc3QgQjJQb2x5Z29uU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyUG9seWdvblNoYXBlXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJQb2x5Z29uU2hhcGUoKVxuICBmaXh0dXJlRGVmLnNoYXBlLlNldEFzQm94KFxuICAgIGNvbmZpZy53aWR0aCAqIDAuNSAvIHRoaXMuc2NhbGUsXG4gICAgY29uZmlnLmhlaWdodCAqIDAuNSAvIHRoaXMuc2NhbGVcbiAgKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeHR1cmVEZWYuc2hhcGUubV92ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZlcnQgPSBmaXh0dXJlRGVmLnNoYXBlLm1fdmVydGljZXNbaV1cbiAgICB2ZXJ0LnggKz0gY29uZmlnLnggLyB0aGlzLnNjYWxlIHx8IDBcbiAgICB2ZXJ0LnkgKz0gY29uZmlnLnkgLyB0aGlzLnNjYWxlIHx8IDBcbiAgfVxuICBmaXh0dXJlRGVmLnNoYXBlLm1fY2VudHJvaWQueCArPSBjb25maWcueCAvIHRoaXMuc2NhbGUgfHwgMFxuICBmaXh0dXJlRGVmLnNoYXBlLm1fY2VudHJvaWQueSArPSBjb25maWcueSAvIHRoaXMuc2NhbGUgfHwgMFxuXG4gIGNvbnN0IGZpeHR1cmUgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuQ3JlYXRlRml4dHVyZShmaXh0dXJlRGVmKVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmZpeHR1cmVzLnB1c2goZml4dHVyZSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkQ2lyY2xlID0gZnVuY3Rpb24gKGVudGl0eSwgcGFyYW1zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICByYWRpdXM6IDI1LFxuICAgIGRlbnNpdHk6IDEsXG4gICAgZnJpY3Rpb246IDAuNSxcbiAgICByZXN0aXR1dGlvbjogMC41LFxuICAgIGlzU2Vuc29yOiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcbiAgY29uc3QgZml4dHVyZURlZmluaXRpb24gPSB0aGlzLmdldEZpeHR1cmVEZWYoY29uZmlnKVxuICBjb25zdCBCMkNpcmNsZVNoYXBlID0gQm94MkQuQ29sbGlzaW9uLlNoYXBlcy5iMkNpcmNsZVNoYXBlXG4gIGNvbnN0IGZpeHR1cmVEZWYgPSBmaXh0dXJlRGVmaW5pdGlvblxuICBmaXh0dXJlRGVmLnNoYXBlID0gbmV3IEIyQ2lyY2xlU2hhcGUoY29uZmlnLnJhZGl1cyAvIHRoaXMuc2NhbGUpXG4gIGZpeHR1cmVEZWYuc2hhcGUubV9wID0ge1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgfVxuICBjb25zdCBmaXh0dXJlID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkNyZWF0ZUZpeHR1cmUoZml4dHVyZURlZilcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5wdXNoKGZpeHR1cmUpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZEVkZ2UgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgYXg6IDAsXG4gICAgYXk6IDAsXG4gICAgYng6IDAsXG4gICAgYnk6IDAsXG4gICAgZGVuc2l0eTogMSxcbiAgICBmcmljdGlvbjogMC41LFxuICAgIHJlc3RpdHV0aW9uOiAwLjUsXG4gICAgaXNTZW5zb3I6IGZhbHNlXG4gIH1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuICBjb25zdCBmaXh0dXJlRGVmID0gdGhpcy5nZXRGaXh0dXJlRGVmKGNvbmZpZylcbiAgY29uc3QgQjJQb2x5Z29uU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyUG9seWdvblNoYXBlXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJQb2x5Z29uU2hhcGUoKVxuICBjb25maWcuYXggLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYXkgLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYnggLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYnkgLz0gdGhpcy5zY2FsZVxuICBmaXh0dXJlRGVmLnNoYXBlLlNldEFzRWRnZSh7IHg6IGNvbmZpZy5heCwgeTogY29uZmlnLmF5IH0sIHsgeDogY29uZmlnLmJ4LCB5OiBjb25maWcuYnkgfSlcbiAgY29uc3QgZml4dHVyZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5DcmVhdGVGaXh0dXJlKGZpeHR1cmVEZWYpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuZml4dHVyZXMucHVzaChmaXh0dXJlKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgICB0eXBlOiAnZHluYW1pYycsXG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGFsbG93U2xlZXA6IHRydWUsXG4gICAgYXdha2U6IHRydWUsXG4gICAgYnVsbGV0OiBmYWxzZSxcbiAgICBmaXhlZFJvdGF0aW9uOiBmYWxzZSxcbiAgICBhbmdsZTogMCxcbiAgICBhbmd1bGFyRGFtcGluZzogMCxcbiAgICBhbmd1bGFyVmVsb2NpdHk6IDAsXG4gICAgbGluZWFyRGFtcGluZzogMCxcbiAgICBsaW5lYXJWZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXG4gICAgdXNlckRhdGE6IHt9XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG5cbiAgY29uc3QgQjJCb2R5RGVmID0gQm94MkQuRHluYW1pY3MuYjJCb2R5RGVmXG4gIGNvbnN0IEIyQm9keSA9IEJveDJELkR5bmFtaWNzLmIyQm9keVxuXG4gIGNvbnN0IGJvZHlEZWYgPSBuZXcgQjJCb2R5RGVmKClcbiAgYm9keURlZi5wb3NpdGlvbi54ID0gY29uZmlnLnggLyB0aGlzLnNjYWxlXG4gIGJvZHlEZWYucG9zaXRpb24ueSA9IGNvbmZpZy55IC8gdGhpcy5zY2FsZVxuICBib2R5RGVmLmFjdGl2ZSA9IGNvbmZpZy5hY3RpdmVcbiAgYm9keURlZi5hbGxvd1NsZWVwID0gY29uZmlnLmFsbG93U2xlZXBcbiAgYm9keURlZi5hd2FrZSA9IGNvbmZpZy5hd2FrZVxuICBib2R5RGVmLmJ1bGxldCA9IGNvbmZpZy5idWxsZXRcbiAgYm9keURlZi5maXhlZFJvdGF0aW9uID0gY29uZmlnLmZpeGVkUm90YXRpb25cbiAgYm9keURlZi5hbmdsZSA9IGNvbmZpZy5hbmdsZVxuICBib2R5RGVmLmFuZ3VsYXJEYW1waW5nID0gY29uZmlnLmFuZ3VsYXJEYW1waW5nXG4gIGJvZHlEZWYuYW5ndWxhclZlbG9jaXR5ID0gY29uZmlnLmFuZ3VsYXJWZWxvY2l0eVxuICBib2R5RGVmLmxpbmVhckRhbXBpbmcgPSBjb25maWcubGluZWFyRGFtcGluZ1xuICBib2R5RGVmLmxpbmVhclZlbG9jaXR5ID0gY29uZmlnLmxpbmVhclZlbG9jaXR5XG4gIGJvZHlEZWYudXNlckRhdGEgPSBjb25maWcudXNlckRhdGFcblxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX3N0YXRpY0JvZHlcbiAgfVxuXG4gIGlmIChjb25maWcudHlwZSA9PT0gJ2R5bmFtaWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2R5bmFtaWNCb2R5XG4gIH1cblxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdraW5lbWF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2tpbmVtYXRpY0JvZHlcbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSB0aGlzLndvcmxkLkNyZWF0ZUJvZHkoYm9keURlZilcbiAgYm9keS5hY3RpdmUgPSB0cnVlXG5cbiAgcmV0dXJuIGJvZHlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndvcmxkLlN0ZXAoMSAvIHRoaXMuZnBzLCA4LCAzKVxuICB0aGlzLndvcmxkLkNsZWFyRm9yY2VzKClcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGNvbXBvbmVudC5lbnRpdHlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihlbnRpdHkpXG4gICAgICBlbnRpdHkueCA9IHBvc2l0aW9uLnhcbiAgICAgIGVudGl0eS55ID0gcG9zaXRpb24ueVxuICAgICAgZW50aXR5LmFuZ2xlID0gdGhpcy5nZXRBbmdsZShlbnRpdHkpXG4gICAgfVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgcmV0dXJuIGVudGl0eS5jb21wb25lbnRzW3RoaXMucGh5c2ljc0NvbXBvbmVudE5hbWVdXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuZml4dHVyZXMuZm9yRWFjaCgoZml4dHVyZSkgPT4ge1xuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5EZXN0cm95Rml4dHVyZShmaXh0dXJlKVxuICB9KVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLnN5c3RlbS53b3JsZC5EZXN0cm95Qm9keSh0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkubXVzdERlc3Ryb3kgPSB0cnVlXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFwcGx5Rm9yY2UgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkFwcGx5Rm9yY2UoY29uZmlnLCB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuR2V0V29ybGRDZW50ZXIoKSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LlNldFBvc2l0aW9uKHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldExpbmVhclZlbG9jaXR5ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBjb25zdCB2ZWxvY2l0eSA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5HZXRMaW5lYXJWZWxvY2l0eSgpXG4gIHJldHVybiB7XG4gICAgeDogdmVsb2NpdHkueCAqIHRoaXMuc2NhbGUsXG4gICAgeTogdmVsb2NpdHkueSAqIHRoaXMuc2NhbGVcbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5zZXRMaW5lYXJWZWxvY2l0eSA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuU2V0QXdha2UodHJ1ZSlcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LlNldExpbmVhclZlbG9jaXR5KHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5HZXRQb3NpdGlvbigpXG4gIHJldHVybiB7XG4gICAgeDogcG9zaXRpb24ueCAqIHRoaXMuc2NhbGUsXG4gICAgeTogcG9zaXRpb24ueSAqIHRoaXMuc2NhbGVcbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5nZXRBbmdsZSA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5HZXRBbmdsZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3NTeXN0ZW1cbiIsImNvbnN0IFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAoc3lzdGVtKSB7XG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5ib2R5ID0gbnVsbFxuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLmZpeHR1cmVzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc0NvbXBvbmVudFxuIiwiaW1wb3J0IEF1ZGlvU3lzdGVtIGZyb20gJy4vYXVkaW8tc3lzdGVtL2F1ZGlvLXN5c3RlbSdcbmltcG9ydCBBdWRpb0NvbXBvbmVudCBmcm9tICcuL2F1ZGlvLXN5c3RlbS9hdWRpby1jb21wb25lbnQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyL2xvYWRlcidcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJ1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eS1zeXN0ZW0vZW50aXR5J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzL2hlbHBlcnMnXG5pbXBvcnQgS2V5IGZyb20gJy4va2V5LXN5c3RlbS9rZXknXG5pbXBvcnQgS2V5U3lzdGVtIGZyb20gJy4va2V5LXN5c3RlbS9rZXktc3lzdGVtJ1xuaW1wb3J0IExvb3BTeXN0ZW0gZnJvbSAnLi9sb29wLXN5c3RlbS9sb29wLXN5c3RlbSdcbmltcG9ydCBQb2ludGVyIGZyb20gJy4vcG9pbnRlci1zeXN0ZW0vcG9pbnRlcidcbmltcG9ydCBQb2ludGVyU3lzdGVtIGZyb20gJy4vcG9pbnRlci1zeXN0ZW0vcG9pbnRlci1zeXN0ZW0nXG5pbXBvcnQgU3ByaXRlQ29tcG9uZW50IGZyb20gJy4vcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50J1xuaW1wb3J0IFJlbmRlclN5c3RlbSBmcm9tICcuL3JlbmRlci1zeXN0ZW0vcmVuZGVyLXN5c3RlbSdcbmltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lLXN5c3RlbS9zY2VuZSdcbmltcG9ydCBTY2VuZVN5c3RlbSBmcm9tICcuL3NjZW5lLXN5c3RlbS9zY2VuZS1zeXN0ZW0nXG5pbXBvcnQgQmVoYXZpb3VyQ29tcG9uZW50IGZyb20gJy4vYmVoYXZpb3VyLXN5c3RlbS9iZWhhdmlvdXItY29tcG9uZW50J1xuaW1wb3J0IEJlaGF2aW91clN5c3RlbSBmcm9tICcuL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLXN5c3RlbSdcbmltcG9ydCBTdGF0ZUNvbXBvbmVudCBmcm9tICcuL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQnXG5pbXBvcnQgU3RhdGVTeXN0ZW0gZnJvbSAnLi9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtJ1xuaW1wb3J0IEVudGl0eVN5c3RlbSBmcm9tICcuL2VudGl0eS1zeXN0ZW0vZW50aXR5LXN5c3RlbSdcbmltcG9ydCBQaHlzaWNzU3lzdGVtIGZyb20gJy4vcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0nXG5pbXBvcnQgUGh5c2ljc0NvbXBvbmVudCBmcm9tICcuL3BoeXNpY3Mtc3lzdGVtL3BoeXNpY3MtY29tcG9uZW50J1xuXG5jb25zdCBIYXJtb255ID0ge1xuICBBdWRpb1N5c3RlbTogQXVkaW9TeXN0ZW0sXG4gIEF1ZGlvQ29tcG9uZW50OiBBdWRpb0NvbXBvbmVudCxcbiAgTG9hZGVyOiBMb2FkZXIsXG4gIEVuZ2luZTogRW5naW5lLFxuICBFbnRpdHk6IEVudGl0eSxcbiAgRW50aXR5U3lzdGVtOiBFbnRpdHlTeXN0ZW0sXG4gIEhlbHBlcnM6IEhlbHBlcnMsXG4gIEtleTogS2V5LFxuICBLZXlTeXN0ZW06IEtleVN5c3RlbSxcbiAgTG9vcFN5c3RlbTogTG9vcFN5c3RlbSxcbiAgUGh5c2ljc0NvbXBvbmVudDogUGh5c2ljc0NvbXBvbmVudCxcbiAgUGh5c2ljc1N5c3RlbTogUGh5c2ljc1N5c3RlbSxcbiAgUG9pbnRlcjogUG9pbnRlcixcbiAgUG9pbnRlclN5c3RlbTogUG9pbnRlclN5c3RlbSxcbiAgU3ByaXRlQ29tcG9uZW50OiBTcHJpdGVDb21wb25lbnQsXG4gIFJlbmRlclN5c3RlbTogUmVuZGVyU3lzdGVtLFxuICBTY2VuZTogU2NlbmUsXG4gIFNjZW5lU3lzdGVtOiBTY2VuZVN5c3RlbSxcbiAgQmVoYXZpb3VyQ29tcG9uZW50OiBCZWhhdmlvdXJDb21wb25lbnQsXG4gIEJlaGF2aW91clN5c3RlbTogQmVoYXZpb3VyU3lzdGVtLFxuICBTdGF0ZUNvbXBvbmVudDogU3RhdGVDb21wb25lbnQsXG4gIFN0YXRlU3lzdGVtOiBTdGF0ZVN5c3RlbVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXJtb255XG4iXSwic291cmNlUm9vdCI6IiJ9