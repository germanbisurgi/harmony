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
};

AudioSystem.prototype.play = function (component) {
  var source = this.context.createBufferSource();
  var gain = this.context.createGain();
  component.source = source;
  source.buffer = this.cache[component.audioName];
  source.connect(gain);
  gain.connect(this.master);
  gain.gain.value = component.volume;
  source.start();
};

AudioSystem.prototype.stop = function (component) {
  if (component.source) {
    component.source.stop();
  }
};

AudioSystem.prototype.addAudioComponent = function (config) {
  var component = new Harmony.AudioComponent(config, this);
  this.components.push(component);
  return component;
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

/* harmony default export */ var audio_system = (AudioSystem);
// CONCATENATED MODULE: ./src/audio-system/audio-component.js
var AudioComponent = function AudioComponent(params, system) {
  var config = Object.assign({
    audioName: 'none',
    volume: 1
  }, params);
  this.system = system;
  this.source = null;
  this.audioName = config.audioName;
  this.volume = config.volume;
  this.mustDestroy = false;
};

AudioComponent.prototype.componentName = 'audio';

AudioComponent.prototype.play = function (audioName) {
  if (audioName) {
    this.audioName = audioName;
  }

  this.system.play(this);
};

AudioComponent.prototype.stop = function () {
  this.system.stop(this);
};

AudioComponent.prototype.destroy = function () {
  this.system.stop(this);
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
  this.transform = new Harmony.TransformSystem();
  this.scripts = new Harmony.ScriptSystem();
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

                _this.transform.update();

                _this.physics.update();

                _this.entities.update();

                _this.scripts.update(_this);

                _this.state.update(_this);

                _this.scene.current.update(_this);
              }

              if (_this.scene.mustDraw) {
                _this.scene.requestUpdate();

                _this.render.draw(); // this.physics.drawDebugData()


                _this.scene.current.draw(_this);
              }
            }

            if (_this.scene.mustSwitch) {
              _this.entities.destroy();

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
    tags: []
  }, params);
  this.mustDestroy = false;
  this.components = [];
  this.tags = config.tags;
};

Entity.prototype.addComponent = function (component) {
  component.entity = this;
  this[component.componentName] = component;
  this.components.push(component);
};

Entity.prototype.destroy = function () {
  this.components.forEach(function (component) {
    component.destroy();
  });
  this.mustDestroy = true;
};

Entity.prototype.hasTag = function (tag) {
  return this.tags.includes(tag);
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
          pointer.holdTime += this.delta;
          pointer.endFrame = -1;

          if (pointer.startFrame === -1) {
            pointer.startFrame = this.frame;
          }
        } else {
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
var SpriteComponent = function SpriteComponent(params) {
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

SpriteComponent.prototype.componentName = 'sprite';

SpriteComponent.prototype.destroy = function () {
  this.mustDestroy = true;
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
    var component = this.components[i];

    if (component.mustDestroy) {
      this.components.splice(i, 1);
    } else {
      if (component.visible) {
        this.context.save();
        this.context.translate(component.entity.transform.x + component.width * 0.5 * component.entity.transform.scale - component.width * component.anchorX * component.entity.transform.scale, component.entity.transform.y + component.height * 0.5 * component.entity.transform.scale - component.height * component.anchorY * component.entity.transform.scale);
        this.context.rotate(component.entity.transform.angle);
        this.context.scale(component.entity.transform.scale, component.entity.transform.scale);

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

RenderSystem.prototype.addSpriteComponent = function (config) {
  var component = new Harmony.SpriteComponent(config);
  this.components.unshift(component);
  return component;
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
// CONCATENATED MODULE: ./src/script-system/script-component.js
var ScriptComponent = function ScriptComponent(params) {
  this.mustDestroy = false;
  this.mustStart = true;
  this.mustUpdate = false;
  this.methods = Object.assign({
    start: function start() {},
    update: function update() {}
  }, params);
};

ScriptComponent.prototype.componentName = 'script';

ScriptComponent.prototype.start = function (engine) {
  this.mustStart = false;
  this.mustUpdate = true;
  return this.methods.start(engine);
};

ScriptComponent.prototype.update = function (engine) {
  return this.methods.update(engine);
};

ScriptComponent.prototype.destroy = function () {
  this.mustDestroy = true;
};

/* harmony default export */ var script_component = (ScriptComponent);
// CONCATENATED MODULE: ./src/script-system/script-system.js
/* global Harmony */
var ScriptSystem = function ScriptSystem() {
  this.components = [];
};

ScriptSystem.prototype.addScriptComponent = function (config) {
  var component = new Harmony.ScriptComponent(config);
  this.components.push(component);
  return component;
};

ScriptSystem.prototype.update = function (engine) {
  for (var i = this.components.length; i--;) {
    var component = this.components[i];

    if (component.mustDestroy) {
      this.components.splice(i, 1);
      continue;
    }

    if (component.mustStart) {
      component.start(engine);
      continue;
    }

    if (component.mustUpdate) {
      component.update(engine);
    }
  }
};

/* harmony default export */ var script_system = (ScriptSystem);
// CONCATENATED MODULE: ./src/state-system/state-component.js
var StateComponent = function StateComponent(params) {
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

StateComponent.prototype.destroy = function () {
  this.mustDestroy = true;
};

/* harmony default export */ var state_component = (StateComponent);
// CONCATENATED MODULE: ./src/state-system/state-system.js
/* global Harmony */
var StateSystem = function StateSystem() {
  this.components = [];
};

StateSystem.prototype.addStateComponent = function (config) {
  var component = new Harmony.StateComponent(config);
  this.components.push(component);
  return component;
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

/* harmony default export */ var state_system = (StateSystem);
// CONCATENATED MODULE: ./src/transform-system/transform-component.js
var TransformComponent = function TransformComponent(params) {
  var config = Object.assign({
    x: 50,
    y: 50,
    angle: 0,
    scale: 1
  }, params);
  this.entity = null;
  this.mustDestroy = false;
  this.x = config.x;
  this.y = config.y;
  this.angle = config.angle;
  this.scale = config.scale;
};

TransformComponent.prototype.componentName = 'transform';

TransformComponent.prototype.destroy = function () {
  this.mustDestroy = true;
};

/* harmony default export */ var transform_component = (TransformComponent);
// CONCATENATED MODULE: ./src/transform-system/transform-system.js
/* global Harmony */
var TransformSystem = function TransformSystem() {
  this.components = [];
};

TransformSystem.prototype.addTransformComponent = function (config) {
  var component = new Harmony.TransformComponent(config);
  this.components.push(component);
  return component;
};

TransformSystem.prototype.update = function () {
  for (var i = this.components.length; i--;) {
    var component = this.components[i];

    if (component.mustDestroy) {
      this.components.splice(i, 1);
    }
  }
};

/* harmony default export */ var transform_system = (TransformSystem);
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

EntitySystem.prototype.destroy = function () {
  for (var i = this.cache.length; i--;) {
    var entity = this.cache[i];
    entity.destroy();
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
  this.contacts = new B2ContactListener(); // ------------------------------------------------------------------ contacts

  this.world.SetContactListener(this.contacts);

  this.contacts.BeginContact = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().component;
    var componentB = contact.GetFixtureB().GetBody().component;
    var entityA = componentA.entity;
    var entityB = componentB.entity;
    componentA.onContactBegin(entityA, entityB);
    componentB.onContactBegin(entityB, entityA);
  };

  this.contacts.EndContact = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().component;
    var componentB = contact.GetFixtureB().GetBody().component;
    var entityA = componentA.entity;
    var entityB = componentB.entity;
    componentA.onContactEnd(entityA, entityB);
    componentB.onContactEnd(entityB, entityA);
  };

  this.contacts.PreSolve = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().component;
    var componentB = contact.GetFixtureB().GetBody().component;
    var entityA = componentA.entity;
    var entityB = componentB.entity;
    componentA.onContactPreSolve(entityA, entityB);
    componentB.onContactPreSolve(entityB, entityA);
  };

  this.contacts.PostSolve = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().component;
    var componentB = contact.GetFixtureB().GetBody().component;
    var entityA = componentA.entity;
    var entityB = componentB.entity;
    componentA.onContactPostSolve(entityA, entityB);
    componentB.onContactPostSolve(entityB, entityA);
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

PhysicsSystem.prototype.setGravity = function (config) {
  this.world.SetGravity(config);
};

PhysicsSystem.prototype.drawDebugData = function () {
  this.world.DrawDebugData();
};

PhysicsSystem.prototype.addPhysicsComponent = function (config) {
  var component = new Harmony.PhysicsComponent(config, this);
  this.components.push(component);
  return component;
};

PhysicsSystem.prototype.update = function () {
  this.world.Step(1 / this.fps, 8, 3);
  this.world.ClearForces();

  for (var i = this.components.length; i--;) {
    var component = this.components[i];

    if (component.mustDestroy) {
      this.components.splice(i, 1);
    } else {
      var position = component.getPosition();
      component.entity.transform.x = position.x;
      component.entity.transform.y = position.y;
      component.entity.transform.angle = component.getAngle();
    }
  }
};

/* harmony default export */ var physics_system = (PhysicsSystem);
// CONCATENATED MODULE: ./src/physics-system/physics-component.js
/* global Box2D */
var PhysicsComponent = function PhysicsComponent(params, system) {
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
  this.entity = null;
  this.mustDestroy = false;
  this.body = null;
  this.system = system;
  this.fixtures = [];
  this.type = config.type;
  var B2BodyDef = Box2D.Dynamics.b2BodyDef;
  var B2Body = Box2D.Dynamics.b2Body;
  var bodyDef = new B2BodyDef();
  bodyDef.position.x = config.x / this.system.scale;
  bodyDef.position.y = config.y / this.system.scale;
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

  if (this.type === 'static') {
    bodyDef.type = B2Body.b2_staticBody;
  }

  if (this.type === 'dynamic') {
    bodyDef.type = B2Body.b2_dynamicBody;
  }

  if (this.type === 'kinematic') {
    bodyDef.type = B2Body.b2_kinematicBody;
  }

  this.body = this.system.world.CreateBody(bodyDef);
  this.body.active = true;
  this.body.component = this;
};

PhysicsComponent.prototype.componentName = 'physics';

PhysicsComponent.prototype.setLinearVelocity = function (config) {
  this.body.SetAwake(true);
  this.body.SetLinearVelocity({
    x: config.x / this.system.scale,
    y: config.y / this.system.scale
  });
};

PhysicsComponent.prototype.destroy = function () {
  var _this = this;

  this.fixtures.forEach(function (fixture) {
    _this.body.DestroyFixture(fixture);
  });
  this.system.world.DestroyBody(this.body);
  this.mustDestroy = true;
};

PhysicsComponent.prototype.getPosition = function () {
  var position = this.body.GetPosition();
  return {
    x: position.x * this.system.scale,
    y: position.y * this.system.scale
  };
};

PhysicsComponent.prototype.getAngle = function () {
  return this.body.GetAngle();
};

PhysicsComponent.prototype.setPosition = function (config) {
  this.body.SetPosition({
    x: config.x / this.system.scale,
    y: config.y / this.system.scale
  });
};

PhysicsComponent.prototype.applyForce = function (config) {
  this.body.ApplyForce(config, this.body.GetWorldCenter());
};

PhysicsComponent.prototype.getFixtureDef = function (config) {
  var B2FixtureDef = Box2D.Dynamics.b2FixtureDef;
  var fixDef = new B2FixtureDef();
  fixDef.density = config.density;
  fixDef.friction = config.friction;
  fixDef.restitution = config.restitution;
  fixDef.isSensor = config.isSensor;
  return fixDef;
};

PhysicsComponent.prototype.addCircle = function (params) {
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
  fixtureDef.shape = new B2CircleShape(config.radius / this.system.scale);
  fixtureDef.shape.m_p = {
    x: config.x / this.system.scale,
    y: config.y / this.system.scale
  };
  var fixture = this.body.CreateFixture(fixtureDef);
  this.fixtures.push(fixture);
  return fixture;
};

PhysicsComponent.prototype.onContactBegin = function (me, other) {};

PhysicsComponent.prototype.onContactEnd = function (me, other) {};

PhysicsComponent.prototype.onContactPreSolve = function (me, other) {};

PhysicsComponent.prototype.onContactPostSolve = function (me, other) {};

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
  ScriptComponent: script_component,
  ScriptSystem: script_system,
  StateComponent: state_component,
  StateSystem: state_system,
  TransformComponent: transform_component,
  TransformSystem: transform_system
};
/* harmony default export */ var harmony = __webpack_exports__["default"] = (harmony_Harmony);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvdHJhbnNmb3JtLXN5c3RlbS90cmFuc2Zvcm0tY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvdHJhbnNmb3JtLXN5c3RlbS90cmFuc2Zvcm0tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInByb3RvdHlwZSIsInBsYXkiLCJjb21wb25lbnQiLCJzb3VyY2UiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJnYWluIiwiYnVmZmVyIiwiYXVkaW9OYW1lIiwidmFsdWUiLCJ2b2x1bWUiLCJzdGFydCIsInN0b3AiLCJhZGRBdWRpb0NvbXBvbmVudCIsImNvbmZpZyIsIkhhcm1vbnkiLCJBdWRpb0NvbXBvbmVudCIsInB1c2giLCJ1cGRhdGUiLCJzdGF0ZSIsInJlc3VtZSIsImkiLCJsZW5ndGgiLCJtdXN0RGVzdHJveSIsInNwbGljZSIsInBhcmFtcyIsInN5c3RlbSIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudE5hbWUiLCJkZXN0cm95IiwiTG9hZGVyIiwiaW1hZ2VzQ2FjaGUiLCJhdWRpb0NhY2hlIiwibG9hZGluZyIsImNvbXBsZXRlIiwiZXJyb3JzIiwic3VjY2VzcyIsInF1ZXVlZCIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm5hbWUiLCJvblN1Y2Nlc3MiLCJvbmVycm9yIiwicmVhc29uIiwib25FcnJvciIsInNyYyIsInVybCIsImxvYWRBdWRpbyIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwic2VuZCIsIm9uU3RhcnQiLCJvblByb2dyZXNzIiwib25Db21wbGV0ZSIsInByb2dyZXNzIiwiTWF0aCIsImZsb29yIiwiaXNOYU4iLCJFbmdpbmUiLCJjYW52YXMiLCJsb2FkZXIiLCJsb29wIiwiTG9vcFN5c3RlbSIsInNjZW5lIiwiU2NlbmVTeXN0ZW0iLCJyZW5kZXIiLCJSZW5kZXJTeXN0ZW0iLCJhdWRpbyIsImVudGl0aWVzIiwiRW50aXR5U3lzdGVtIiwia2V5cyIsIktleVN5c3RlbSIsInBoeXNpY3MiLCJQaHlzaWNzU3lzdGVtIiwicG9pbnRlcnMiLCJQb2ludGVyU3lzdGVtIiwidHJhbnNmb3JtIiwiVHJhbnNmb3JtU3lzdGVtIiwic2NyaXB0cyIsIlNjcmlwdFN5c3RlbSIsIlN0YXRlU3lzdGVtIiwiaGVscGVycyIsIkhlbHBlcnMiLCJvblN0ZXAiLCJjdXJyZW50IiwibXVzdFByZWxvYWQiLCJwcmVsb2FkIiwicmVxdWVzdENyZWF0ZSIsIm11c3RDcmVhdGUiLCJyZXF1ZXN0VXBkYXRlIiwiY3JlYXRlIiwibXVzdFVwZGF0ZSIsInJlcXVlc3REcmF3IiwibXVzdERyYXciLCJkcmF3IiwibXVzdFN3aXRjaCIsInJlcXVlc3RlZCIsInJlcXVlc3RQcmVsb2FkIiwicnVuIiwiRW50aXR5IiwidGFncyIsImFkZENvbXBvbmVudCIsImVudGl0eSIsImZvckVhY2giLCJoYXNUYWciLCJ0YWciLCJpbmNsdWRlcyIsImNyZWF0ZUdyaWQiLCJyb3dzIiwiY29scyIsImdyaWQiLCJBcnJheSIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsImNlaWwiLCJyYW5kb20iLCJnZXRSYW5kb21JdGVtcyIsImFycmF5IiwicXVhbnRpdHkiLCJyYW5kb21JdGVtcyIsInJhbmRvbUluZGV4Iiwic2h1ZmZsZUFycmF5IiwiaiIsIngiLCJLZXkiLCJrZXkiLCJlbmQiLCJob2xkIiwiaG9sZFRpbWUiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJlbmFibGVkIiwiZGVsdGEiLCJub3ciLCJ0aGVuIiwiZnJhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsImhhbmRsZUtleVVwIiwiZXZlbnQiLCJnZXRPclNldCIsImdldCIsInBlcmZvcm1hbmNlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYWNjdW11bGF0b3IiLCJsYXN0VGltZSIsImxhc3RTdGVwIiwiZnBzIiwicGF1c2VkIiwidGltZXN0ZXAiLCJwYXVzZSIsInRpbWVzdGFtcCIsInN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJQb2ludGVyIiwiYWN0aXZlIiwiaWQiLCJ0eXBlIiwic3RhcnRYIiwic3RhcnRZIiwieSIsImVuYWJsZVBvaW50ZXJzIiwicG9pbnRlciIsInN0eWxlIiwidG91Y2hBY3Rpb24iLCJ1c2VyU2VsZWN0IiwiaGFuZGxlUG9pbnRlckRvd24iLCJoYW5kbGVQb2ludGVyTW92ZSIsImhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCIsImhhbmRsZUNvbnRleHRNZW51IiwiZ2V0UG9pbnRlckJ5SUQiLCJvdXRwdXQiLCJnZXRJbmFjdGl2ZVBvaW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwic3RvcFByb3BhZ2F0aW9uIiwiU3ByaXRlQ29tcG9uZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic291cmNlWSIsInNvdXJjZVdpZHRoIiwic291cmNlSGVpZ2h0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJ2aXNpYmxlIiwiZ2V0Q29udGV4dCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImNsZWFyIiwiY2xlYXJSZWN0Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInNjYWxlIiwicm90YXRlIiwiYW5nbGUiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiYWRkU3ByaXRlQ29tcG9uZW50IiwidW5zaGlmdCIsInRleHQiLCJmaWxsVGV4dCIsImNpcmNsZSIsImJlZ2luUGF0aCIsImFyYyIsInJhZGl1cyIsIlBJIiwic3Ryb2tlIiwibGluZSIsIm1vdmVUbyIsImF4IiwiYXkiLCJsaW5lVG8iLCJieCIsImJ5IiwicmVjdCIsIlNjZW5lIiwibWV0aG9kcyIsImVuZ2luZSIsInJlcXVlc3RTd2l0Y2giLCJTY3JpcHRDb21wb25lbnQiLCJtdXN0U3RhcnQiLCJhZGRTY3JpcHRDb21wb25lbnQiLCJTdGF0ZUNvbXBvbmVudCIsInN0YXRlcyIsImFkZFN0YXRlQ29tcG9uZW50IiwiZXhpdCIsImVudGVyIiwiVHJhbnNmb3JtQ29tcG9uZW50IiwiYWRkVHJhbnNmb3JtQ29tcG9uZW50IiwiYWRkIiwiQjJXb3JsZCIsIkJveDJEIiwiRHluYW1pY3MiLCJiMldvcmxkIiwiQjJWZWMyIiwiQ29tbW9uIiwiYjJWZWMyIiwiQjJEZWJ1Z0RyYXciLCJiMkRlYnVnRHJhdyIsIkIyQ29udGFjdExpc3RlbmVyIiwiYjJDb250YWN0TGlzdGVuZXIiLCJ3b3JsZCIsImNvbnRhY3RzIiwiU2V0Q29udGFjdExpc3RlbmVyIiwiQmVnaW5Db250YWN0IiwiY29udGFjdCIsImNvbXBvbmVudEEiLCJHZXRGaXh0dXJlQSIsIkdldEJvZHkiLCJjb21wb25lbnRCIiwiR2V0Rml4dHVyZUIiLCJlbnRpdHlBIiwiZW50aXR5QiIsIm9uQ29udGFjdEJlZ2luIiwiRW5kQ29udGFjdCIsIm9uQ29udGFjdEVuZCIsIlByZVNvbHZlIiwib25Db250YWN0UHJlU29sdmUiLCJQb3N0U29sdmUiLCJvbkNvbnRhY3RQb3N0U29sdmUiLCJkZWJ1Z0RyYXciLCJTZXRTcHJpdGUiLCJTZXREcmF3U2NhbGUiLCJTZXRGaWxsQWxwaGEiLCJTZXRGbGFncyIsImVfc2hhcGVCaXQiLCJBcHBlbmRGbGFncyIsImVfam9pbnRCaXQiLCJTZXREZWJ1Z0RyYXciLCJtX2RlYnVnRHJhdyIsIm1fc3ByaXRlIiwiZ3JhcGhpY3MiLCJzZXRHcmF2aXR5IiwiU2V0R3Jhdml0eSIsImRyYXdEZWJ1Z0RhdGEiLCJEcmF3RGVidWdEYXRhIiwiYWRkUGh5c2ljc0NvbXBvbmVudCIsIlBoeXNpY3NDb21wb25lbnQiLCJTdGVwIiwiQ2xlYXJGb3JjZXMiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZ2V0QW5nbGUiLCJkZWZhdWx0cyIsImFsbG93U2xlZXAiLCJhd2FrZSIsImJ1bGxldCIsImZpeGVkUm90YXRpb24iLCJhbmd1bGFyRGFtcGluZyIsImFuZ3VsYXJWZWxvY2l0eSIsImxpbmVhckRhbXBpbmciLCJsaW5lYXJWZWxvY2l0eSIsInVzZXJEYXRhIiwiYm9keSIsImZpeHR1cmVzIiwiQjJCb2R5RGVmIiwiYjJCb2R5RGVmIiwiQjJCb2R5IiwiYjJCb2R5IiwiYm9keURlZiIsImIyX3N0YXRpY0JvZHkiLCJiMl9keW5hbWljQm9keSIsImIyX2tpbmVtYXRpY0JvZHkiLCJDcmVhdGVCb2R5Iiwic2V0TGluZWFyVmVsb2NpdHkiLCJTZXRBd2FrZSIsIlNldExpbmVhclZlbG9jaXR5IiwiZml4dHVyZSIsIkRlc3Ryb3lGaXh0dXJlIiwiRGVzdHJveUJvZHkiLCJHZXRQb3NpdGlvbiIsIkdldEFuZ2xlIiwic2V0UG9zaXRpb24iLCJTZXRQb3NpdGlvbiIsImFwcGx5Rm9yY2UiLCJBcHBseUZvcmNlIiwiR2V0V29ybGRDZW50ZXIiLCJnZXRGaXh0dXJlRGVmIiwiQjJGaXh0dXJlRGVmIiwiYjJGaXh0dXJlRGVmIiwiZml4RGVmIiwiZGVuc2l0eSIsImZyaWN0aW9uIiwicmVzdGl0dXRpb24iLCJpc1NlbnNvciIsImFkZENpcmNsZSIsImZpeHR1cmVEZWZpbml0aW9uIiwiQjJDaXJjbGVTaGFwZSIsIkNvbGxpc2lvbiIsIlNoYXBlcyIsImIyQ2lyY2xlU2hhcGUiLCJmaXh0dXJlRGVmIiwic2hhcGUiLCJtX3AiLCJDcmVhdGVGaXh0dXJlIiwibWUiLCJvdGhlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsQ0FBcUI7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3h0QkE7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0FBQzlCLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDRCxZQUFQLElBQXVCQyxNQUFNLENBQUNDLGtCQUFuRDtBQUNBLE9BQUtDLE9BQUwsR0FBZSxJQUFJSCxZQUFKLEVBQWY7QUFDQSxPQUFLSSxNQUFMLEdBQWMsS0FBS0QsT0FBTCxDQUFhRSxVQUFiLEVBQWQ7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLSCxNQUFMLENBQVlJLE9BQVosQ0FBb0IsS0FBS0wsT0FBTCxDQUFhTSxXQUFqQztBQUNELENBUEQ7O0FBU0FWLFdBQVcsQ0FBQ1csU0FBWixDQUFzQkMsSUFBdEIsR0FBNkIsVUFBVUMsU0FBVixFQUFxQjtBQUNoRCxNQUFNQyxNQUFNLEdBQUcsS0FBS1YsT0FBTCxDQUFhVyxrQkFBYixFQUFmO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEtBQUtaLE9BQUwsQ0FBYUUsVUFBYixFQUFiO0FBQ0FPLFdBQVMsQ0FBQ0MsTUFBVixHQUFtQkEsTUFBbkI7QUFDQUEsUUFBTSxDQUFDRyxNQUFQLEdBQWdCLEtBQUtULEtBQUwsQ0FBV0ssU0FBUyxDQUFDSyxTQUFyQixDQUFoQjtBQUNBSixRQUFNLENBQUNMLE9BQVAsQ0FBZU8sSUFBZjtBQUNBQSxNQUFJLENBQUNQLE9BQUwsQ0FBYSxLQUFLSixNQUFsQjtBQUNBVyxNQUFJLENBQUNBLElBQUwsQ0FBVUcsS0FBVixHQUFrQk4sU0FBUyxDQUFDTyxNQUE1QjtBQUNBTixRQUFNLENBQUNPLEtBQVA7QUFDRCxDQVREOztBQVdBckIsV0FBVyxDQUFDVyxTQUFaLENBQXNCVyxJQUF0QixHQUE2QixVQUFVVCxTQUFWLEVBQXFCO0FBQ2hELE1BQUlBLFNBQVMsQ0FBQ0MsTUFBZCxFQUFzQjtBQUNwQkQsYUFBUyxDQUFDQyxNQUFWLENBQWlCUSxJQUFqQjtBQUNEO0FBQ0YsQ0FKRDs7QUFNQXRCLFdBQVcsQ0FBQ1csU0FBWixDQUFzQlksaUJBQXRCLEdBQTBDLFVBQVVDLE1BQVYsRUFBa0I7QUFDMUQsTUFBTVgsU0FBUyxHQUFHLElBQUlZLE9BQU8sQ0FBQ0MsY0FBWixDQUEyQkYsTUFBM0IsRUFBbUMsSUFBbkMsQ0FBbEI7QUFDQSxPQUFLakIsVUFBTCxDQUFnQm9CLElBQWhCLENBQXFCZCxTQUFyQjtBQUNBLFNBQU9BLFNBQVA7QUFDRCxDQUpEOztBQU1BYixXQUFXLENBQUNXLFNBQVosQ0FBc0JpQixNQUF0QixHQUErQixZQUFZO0FBQ3pDLE1BQUksS0FBS3hCLE9BQUwsQ0FBYXlCLEtBQWIsS0FBdUIsV0FBM0IsRUFBd0M7QUFDdEMsU0FBS3pCLE9BQUwsQ0FBYTBCLE1BQWI7QUFDRDs7QUFDRCxPQUFLLElBQUlDLENBQUMsR0FBRyxLQUFLeEIsVUFBTCxDQUFnQnlCLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEdBQTJDO0FBQ3pDLFFBQU1sQixTQUFTLEdBQUcsS0FBS04sVUFBTCxDQUFnQndCLENBQWhCLENBQWxCOztBQUNBLFFBQUlsQixTQUFTLENBQUNvQixXQUFkLEVBQTJCO0FBQ3pCLFdBQUsxQixVQUFMLENBQWdCMkIsTUFBaEIsQ0FBdUJILENBQXZCLEVBQTBCLENBQTFCO0FBQ0Q7QUFDRjtBQUNGLENBVkQ7O0FBWWUvQiw0REFBZixFOztBQzlDQSxJQUFNMEIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFVUyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtBQUMvQyxNQUFNWixNQUFNLEdBQUdhLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCcEIsYUFBUyxFQUFFLE1BRGdCO0FBRTNCRSxVQUFNLEVBQUU7QUFGbUIsR0FBZCxFQUdaZSxNQUhZLENBQWY7QUFLQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLdEIsTUFBTCxHQUFjLElBQWQ7QUFDQSxPQUFLSSxTQUFMLEdBQWlCTSxNQUFNLENBQUNOLFNBQXhCO0FBQ0EsT0FBS0UsTUFBTCxHQUFjSSxNQUFNLENBQUNKLE1BQXJCO0FBQ0EsT0FBS2EsV0FBTCxHQUFtQixLQUFuQjtBQUNELENBWEQ7O0FBYUFQLGNBQWMsQ0FBQ2YsU0FBZixDQUF5QjRCLGFBQXpCLEdBQXlDLE9BQXpDOztBQUVBYixjQUFjLENBQUNmLFNBQWYsQ0FBeUJDLElBQXpCLEdBQWdDLFVBQVVNLFNBQVYsRUFBcUI7QUFDbkQsTUFBSUEsU0FBSixFQUFlO0FBQ2IsU0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7QUFDRCxPQUFLa0IsTUFBTCxDQUFZeEIsSUFBWixDQUFpQixJQUFqQjtBQUNELENBTEQ7O0FBT0FjLGNBQWMsQ0FBQ2YsU0FBZixDQUF5QlcsSUFBekIsR0FBZ0MsWUFBWTtBQUMxQyxPQUFLYyxNQUFMLENBQVlkLElBQVosQ0FBaUIsSUFBakI7QUFDRCxDQUZEOztBQUlBSSxjQUFjLENBQUNmLFNBQWYsQ0FBeUI2QixPQUF6QixHQUFtQyxZQUFZO0FBQzdDLE9BQUtKLE1BQUwsQ0FBWWQsSUFBWixDQUFpQixJQUFqQjtBQUNELENBRkQ7O0FBSWVJLGtFQUFmLEU7O0FDOUJBO0FBRUEsSUFBTWUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBWTtBQUN6QixPQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUt0QixLQUFMLEdBQWEsS0FBYjtBQUNBLE9BQUt1QixPQUFMLEdBQWUsS0FBZjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLE9BQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDRCxDQVREOztBQVdBUCxNQUFNLENBQUM5QixTQUFQLENBQWlCc0MsU0FBakIsR0FBNkIsVUFBVXpCLE1BQVYsRUFBa0I7QUFBQTs7QUFDN0MsT0FBS3dCLE1BQUw7QUFDQSxTQUFPLElBQUlFLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDs7QUFDQUQsU0FBSyxDQUFDRSxNQUFOLEdBQWUsWUFBTTtBQUNuQixXQUFJLENBQUNSLE9BQUw7QUFDQSxXQUFJLENBQUNMLFdBQUwsQ0FBaUJsQixNQUFNLENBQUNnQyxJQUF4QixJQUFnQ0gsS0FBaEM7O0FBQ0EsV0FBSSxDQUFDSSxTQUFMLENBQWVqQyxNQUFmOztBQUNBMkIsYUFBTyxDQUFDRSxLQUFELENBQVA7QUFDRCxLQUxEOztBQU1BQSxTQUFLLENBQUNLLE9BQU4sR0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzFCLFdBQUksQ0FBQ2IsTUFBTDs7QUFDQSxXQUFJLENBQUNjLE9BQUwsQ0FBYXBDLE1BQWI7O0FBQ0E0QixZQUFNLENBQUNPLE1BQUQsQ0FBTjtBQUNELEtBSkQ7O0FBS0FOLFNBQUssQ0FBQ1EsR0FBTixHQUFZckMsTUFBTSxDQUFDc0MsR0FBbkI7QUFDRCxHQWRNLENBQVA7QUFlRCxDQWpCRDs7QUFtQkFyQixNQUFNLENBQUM5QixTQUFQLENBQWlCb0QsU0FBakIsR0FBNkIsVUFBVXZDLE1BQVYsRUFBa0I7QUFBQTs7QUFDN0MsT0FBS3dCLE1BQUw7QUFDQSxTQUFPLElBQUlFLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBTVksR0FBRyxHQUFHLElBQUk5RCxNQUFNLENBQUMrRCxjQUFYLEVBQVo7QUFDQSxRQUFNaEUsWUFBWSxHQUFHLEtBQUtDLE1BQU0sQ0FBQ0QsWUFBUCxJQUF1QkMsTUFBTSxDQUFDQyxrQkFBbkMsR0FBckI7QUFDQTZELE9BQUcsQ0FBQ0UsSUFBSixDQUFTLEtBQVQsRUFBZ0IxQyxNQUFNLENBQUNzQyxHQUF2QixFQUE0QixJQUE1QjtBQUNBRSxPQUFHLENBQUNHLFlBQUosR0FBbUIsYUFBbkI7O0FBQ0FILE9BQUcsQ0FBQ1QsTUFBSixHQUFhLFlBQU07QUFDakJ0RCxrQkFBWSxDQUFDbUUsZUFBYixDQUE2QkosR0FBRyxDQUFDSyxRQUFqQyxFQUEyQyxVQUFDcEQsTUFBRCxFQUFZO0FBQ3JELGNBQUksQ0FBQzhCLE9BQUw7QUFDQSxjQUFJLENBQUNKLFVBQUwsQ0FBZ0JuQixNQUFNLENBQUNnQyxJQUF2QixJQUErQnZDLE1BQS9COztBQUNBLGNBQUksQ0FBQ3dDLFNBQUwsQ0FBZWpDLE1BQWY7O0FBQ0EyQixlQUFPLENBQUNsQyxNQUFELENBQVA7QUFDRCxPQUxELEVBS0csVUFBQzBDLE1BQUQsRUFBWTtBQUNiLGNBQUksQ0FBQ2IsTUFBTDs7QUFDQSxjQUFJLENBQUNjLE9BQUwsQ0FBYXBDLE1BQWI7O0FBQ0E0QixjQUFNLENBQUNPLE1BQUQsQ0FBTjtBQUNELE9BVEQ7QUFVRCxLQVhEOztBQVlBSyxPQUFHLENBQUNOLE9BQUosR0FBYyxVQUFDQyxNQUFELEVBQVk7QUFDeEIsWUFBSSxDQUFDYixNQUFMOztBQUNBLFlBQUksQ0FBQ2MsT0FBTCxDQUFhcEMsTUFBYjs7QUFDQTRCLFlBQU0sQ0FBQ08sTUFBRCxDQUFOO0FBQ0QsS0FKRDs7QUFLQUssT0FBRyxDQUFDTSxJQUFKO0FBQ0QsR0F2Qk0sQ0FBUDtBQXdCRCxDQTFCRDs7QUE0QkE3QixNQUFNLENBQUM5QixTQUFQLENBQWlCNEQsT0FBakIsR0FBMkIsWUFBWSxDQUFFLENBQXpDOztBQUVBOUIsTUFBTSxDQUFDOUIsU0FBUCxDQUFpQjhDLFNBQWpCLEdBQTZCLFlBQVksQ0FBRSxDQUEzQzs7QUFFQWhCLE1BQU0sQ0FBQzlCLFNBQVAsQ0FBaUJpRCxPQUFqQixHQUEyQixZQUFZLENBQUUsQ0FBekM7O0FBRUFuQixNQUFNLENBQUM5QixTQUFQLENBQWlCNkQsVUFBakIsR0FBOEIsWUFBWSxDQUFFLENBQTVDOztBQUVBL0IsTUFBTSxDQUFDOUIsU0FBUCxDQUFpQjhELFVBQWpCLEdBQThCLFlBQVksQ0FBRSxDQUE1Qzs7QUFFQWhDLE1BQU0sQ0FBQzlCLFNBQVAsQ0FBaUJpQixNQUFqQixHQUEwQixZQUFZO0FBQ3BDLE1BQUksS0FBS29CLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQixRQUFJLENBQUMsS0FBSzNCLEtBQVYsRUFBaUI7QUFDZixXQUFLQSxLQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtrRCxPQUFMO0FBQ0Q7O0FBQ0QsUUFBSSxLQUFLdkIsTUFBTCxLQUFnQixLQUFLRCxPQUFMLEdBQWUsS0FBS0QsTUFBeEMsRUFBZ0Q7QUFDOUMsV0FBS0UsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLRCxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtELE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS0YsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBS3hCLEtBQUwsR0FBYSxLQUFiO0FBQ0EsV0FBS29ELFVBQUw7QUFDRCxLQVJELE1BUU87QUFDTCxXQUFLN0IsT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBQ0QsUUFBSTZCLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQyxLQUFLN0IsT0FBTCxHQUFlLEtBQUtELE1BQXJCLElBQStCLEtBQUtFLE1BQXBDLEdBQTZDLEdBQXhELENBQWY7O0FBQ0EsUUFBSTZCLEtBQUssQ0FBQ0gsUUFBRCxDQUFULEVBQXFCO0FBQ25CQSxjQUFRLEdBQUcsR0FBWDtBQUNEOztBQUNELFNBQUtGLFVBQUwsQ0FBZ0JFLFFBQWhCO0FBQ0Q7QUFDRixDQXhCRDs7QUF5QmVqQyxpREFBZixFOzs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBRUEsSUFBTXFDLGFBQU0sR0FBRyxTQUFUQSxNQUFTLENBQVVDLE1BQVYsRUFBa0I7QUFBQTs7QUFDL0IsT0FBS0MsTUFBTCxHQUFjLElBQUl2RCxPQUFPLENBQUNnQixNQUFaLEVBQWQ7QUFDQSxPQUFLd0MsSUFBTCxHQUFZLElBQUl4RCxPQUFPLENBQUN5RCxVQUFaLEVBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWEsSUFBSTFELE9BQU8sQ0FBQzJELFdBQVosRUFBYjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxJQUFJNUQsT0FBTyxDQUFDNkQsWUFBWixDQUF5QlAsTUFBekIsQ0FBZDtBQUNBLE9BQUtRLEtBQUwsR0FBYSxJQUFJOUQsT0FBTyxDQUFDekIsV0FBWixFQUFiO0FBQ0EsT0FBS3dGLFFBQUwsR0FBZ0IsSUFBSS9ELE9BQU8sQ0FBQ2dFLFlBQVosRUFBaEI7QUFDQSxPQUFLQyxJQUFMLEdBQVksSUFBSWpFLE9BQU8sQ0FBQ2tFLFNBQVosRUFBWjtBQUNBLE9BQUtDLE9BQUwsR0FBZSxJQUFJbkUsT0FBTyxDQUFDb0UsYUFBWixDQUEwQmQsTUFBMUIsQ0FBZjtBQUNBLE9BQUtlLFFBQUwsR0FBZ0IsSUFBSXJFLE9BQU8sQ0FBQ3NFLGFBQVosQ0FBMEJoQixNQUExQixDQUFoQjtBQUNBLE9BQUtpQixTQUFMLEdBQWlCLElBQUl2RSxPQUFPLENBQUN3RSxlQUFaLEVBQWpCO0FBQ0EsT0FBS0MsT0FBTCxHQUFlLElBQUl6RSxPQUFPLENBQUMwRSxZQUFaLEVBQWY7QUFDQSxPQUFLdEUsS0FBTCxHQUFhLElBQUlKLE9BQU8sQ0FBQzJFLFdBQVosRUFBYjtBQUNBLE9BQUtDLE9BQUwsR0FBZSxJQUFJNUUsT0FBTyxDQUFDNkUsT0FBWixFQUFmO0FBRUEsT0FBS3JCLElBQUwsQ0FBVXNCLE1BQVYsb0ZBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakIsZ0JBQUksS0FBSSxDQUFDcEIsS0FBTCxDQUFXcUIsT0FBZixFQUF3QjtBQUN0QixrQkFBSSxLQUFJLENBQUNyQixLQUFMLENBQVdzQixXQUFmLEVBQTRCO0FBQzFCLG9CQUFJLENBQUMsS0FBSSxDQUFDekIsTUFBTCxDQUFZcEMsT0FBakIsRUFBMEI7QUFDeEIsdUJBQUksQ0FBQ3VDLEtBQUwsQ0FBV3FCLE9BQVgsQ0FBbUJFLE9BQW5CLENBQTJCLEtBQTNCO0FBQ0Q7O0FBQ0QscUJBQUksQ0FBQzFCLE1BQUwsQ0FBWXBELE1BQVo7O0FBQ0Esb0JBQUksS0FBSSxDQUFDb0QsTUFBTCxDQUFZbkMsUUFBaEIsRUFBMEI7QUFDeEIsdUJBQUksQ0FBQ3dDLE1BQUwsQ0FBWTdFLEtBQVosR0FBb0IsS0FBSSxDQUFDd0UsTUFBTCxDQUFZdEMsV0FBaEM7QUFDQSx1QkFBSSxDQUFDNkMsS0FBTCxDQUFXL0UsS0FBWCxHQUFtQixLQUFJLENBQUN3RSxNQUFMLENBQVlyQyxVQUEvQjs7QUFDQSx1QkFBSSxDQUFDd0MsS0FBTCxDQUFXd0IsYUFBWDtBQUNEO0FBQ0Y7O0FBQ0Qsa0JBQUksS0FBSSxDQUFDeEIsS0FBTCxDQUFXeUIsVUFBZixFQUEyQjtBQUN6QixxQkFBSSxDQUFDekIsS0FBTCxDQUFXMEIsYUFBWDs7QUFDQSxxQkFBSSxDQUFDMUIsS0FBTCxDQUFXcUIsT0FBWCxDQUFtQk0sTUFBbkIsQ0FBMEIsS0FBMUI7QUFDRDs7QUFDRCxrQkFBSSxLQUFJLENBQUMzQixLQUFMLENBQVc0QixVQUFmLEVBQTJCO0FBQ3pCLHFCQUFJLENBQUM1QixLQUFMLENBQVc2QixXQUFYOztBQUNBLHFCQUFJLENBQUN0QixJQUFMLENBQVU5RCxNQUFWOztBQUNBLHFCQUFJLENBQUNrRSxRQUFMLENBQWNsRSxNQUFkOztBQUNBLHFCQUFJLENBQUMyRCxLQUFMLENBQVczRCxNQUFYOztBQUNBLHFCQUFJLENBQUNvRSxTQUFMLENBQWVwRSxNQUFmOztBQUNBLHFCQUFJLENBQUNnRSxPQUFMLENBQWFoRSxNQUFiOztBQUNBLHFCQUFJLENBQUM0RCxRQUFMLENBQWM1RCxNQUFkOztBQUNBLHFCQUFJLENBQUNzRSxPQUFMLENBQWF0RSxNQUFiLENBQW9CLEtBQXBCOztBQUNBLHFCQUFJLENBQUNDLEtBQUwsQ0FBV0QsTUFBWCxDQUFrQixLQUFsQjs7QUFDQSxxQkFBSSxDQUFDdUQsS0FBTCxDQUFXcUIsT0FBWCxDQUFtQjVFLE1BQW5CLENBQTBCLEtBQTFCO0FBQ0Q7O0FBQ0Qsa0JBQUksS0FBSSxDQUFDdUQsS0FBTCxDQUFXOEIsUUFBZixFQUF5QjtBQUN2QixxQkFBSSxDQUFDOUIsS0FBTCxDQUFXMEIsYUFBWDs7QUFDQSxxQkFBSSxDQUFDeEIsTUFBTCxDQUFZNkIsSUFBWixHQUZ1QixDQUd2Qjs7O0FBQ0EscUJBQUksQ0FBQy9CLEtBQUwsQ0FBV3FCLE9BQVgsQ0FBbUJVLElBQW5CLENBQXdCLEtBQXhCO0FBQ0Q7QUFDRjs7QUFDRCxnQkFBSSxLQUFJLENBQUMvQixLQUFMLENBQVdnQyxVQUFmLEVBQTJCO0FBQ3pCLG1CQUFJLENBQUMzQixRQUFMLENBQWNoRCxPQUFkOztBQUNBLG1CQUFJLENBQUNzRCxRQUFMLENBQWN0RCxPQUFkOztBQUNBLG1CQUFJLENBQUNrRCxJQUFMLENBQVVsRCxPQUFWOztBQUNBLG1CQUFJLENBQUMyQyxLQUFMLENBQVdxQixPQUFYLEdBQXFCLEtBQUksQ0FBQ3JCLEtBQUwsQ0FBV2lDLFNBQWhDOztBQUNBLG1CQUFJLENBQUNqQyxLQUFMLENBQVdrQyxjQUFYO0FBQ0Q7O0FBMUNnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQjtBQTRDQSxPQUFLcEMsSUFBTCxDQUFVcUMsR0FBVjtBQUNELENBNUREOztBQThEZXhDLHdEQUFmLEU7O0FDaEVBLElBQU15QyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFVcEYsTUFBVixFQUFrQjtBQUMvQixNQUFNWCxNQUFNLEdBQUdhLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCa0YsUUFBSSxFQUFFO0FBRHFCLEdBQWQsRUFFWnJGLE1BRlksQ0FBZjtBQUdBLE9BQUtGLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLMUIsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUtpSCxJQUFMLEdBQVloRyxNQUFNLENBQUNnRyxJQUFuQjtBQUNELENBUEQ7O0FBU0FELE1BQU0sQ0FBQzVHLFNBQVAsQ0FBaUI4RyxZQUFqQixHQUFnQyxVQUFVNUcsU0FBVixFQUFxQjtBQUNuREEsV0FBUyxDQUFDNkcsTUFBVixHQUFtQixJQUFuQjtBQUNBLE9BQUs3RyxTQUFTLENBQUMwQixhQUFmLElBQWdDMUIsU0FBaEM7QUFDQSxPQUFLTixVQUFMLENBQWdCb0IsSUFBaEIsQ0FBcUJkLFNBQXJCO0FBQ0QsQ0FKRDs7QUFNQTBHLE1BQU0sQ0FBQzVHLFNBQVAsQ0FBaUI2QixPQUFqQixHQUEyQixZQUFZO0FBQ3JDLE9BQUtqQyxVQUFMLENBQWdCb0gsT0FBaEIsQ0FBd0IsVUFBQzlHLFNBQUQsRUFBZTtBQUNyQ0EsYUFBUyxDQUFDMkIsT0FBVjtBQUNELEdBRkQ7QUFHQSxPQUFLUCxXQUFMLEdBQW1CLElBQW5CO0FBQ0QsQ0FMRDs7QUFPQXNGLE1BQU0sQ0FBQzVHLFNBQVAsQ0FBaUJpSCxNQUFqQixHQUEwQixVQUFVQyxHQUFWLEVBQWU7QUFDdkMsU0FBTyxLQUFLTCxJQUFMLENBQVVNLFFBQVYsQ0FBbUJELEdBQW5CLENBQVA7QUFDRCxDQUZEOztBQUllTixpREFBZixFOztBQzFCQSxJQUFNakIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBWSxDQUFFLENBQTlCOztBQUVBQSxPQUFPLENBQUMzRixTQUFSLENBQWtCb0gsVUFBbEIsR0FBK0IsVUFBVUMsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0I7QUFDbkQsTUFBTUMsSUFBSSxHQUFHLElBQUlDLEtBQUosQ0FBVUYsSUFBVixDQUFiOztBQUNBLE9BQUssSUFBSWxHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdtRyxJQUFJLENBQUNsRyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQ21HLFFBQUksQ0FBQ25HLENBQUQsQ0FBSixHQUFVLElBQUlvRyxLQUFKLENBQVVILElBQVYsQ0FBVjtBQUNEOztBQUNELFNBQU9FLElBQVA7QUFDRCxDQU5EOztBQVFBNUIsT0FBTyxDQUFDM0YsU0FBUixDQUFrQnlILFlBQWxCLEdBQWlDLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNuREQsS0FBRyxHQUFHMUQsSUFBSSxDQUFDNEQsSUFBTCxDQUFVRixHQUFWLENBQU47QUFDQUMsS0FBRyxHQUFHM0QsSUFBSSxDQUFDQyxLQUFMLENBQVcwRCxHQUFYLENBQU47QUFDQSxTQUFPM0QsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQzZELE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQXJEO0FBQ0QsQ0FKRDs7QUFNQS9CLE9BQU8sQ0FBQzNGLFNBQVIsQ0FBa0I4SCxjQUFsQixHQUFtQyxVQUFVQyxLQUFWLEVBQWlCQyxRQUFqQixFQUEyQjtBQUM1RCxNQUFNQyxXQUFXLEdBQUcsRUFBcEI7O0FBQ0EsT0FBSyxJQUFJN0csQ0FBQyxHQUFHNEcsUUFBYixFQUF1QjVHLENBQUMsRUFBeEIsR0FBNkI7QUFDM0IsUUFBTThHLFdBQVcsR0FBRyxLQUFLVCxZQUFMLENBQWtCLENBQWxCLEVBQXFCTSxLQUFLLENBQUMxRyxNQUFOLEdBQWUsQ0FBcEMsQ0FBcEI7QUFDQTRHLGVBQVcsQ0FBQ2pILElBQVosQ0FBaUIrRyxLQUFLLENBQUNHLFdBQUQsQ0FBdEI7QUFDQUgsU0FBSyxDQUFDeEcsTUFBTixDQUFhMkcsV0FBYixFQUEwQixDQUExQjtBQUNEOztBQUNELFNBQU9ELFdBQVA7QUFDRCxDQVJEOztBQVVBdEMsT0FBTyxDQUFDM0YsU0FBUixDQUFrQm1JLFlBQWxCLEdBQWlDLFVBQVVKLEtBQVYsRUFBaUI7QUFDaEQsT0FBSyxJQUFJM0csQ0FBQyxHQUFHMkcsS0FBSyxDQUFDMUcsTUFBTixHQUFlLENBQTVCLEVBQStCRCxDQUFDLEdBQUcsQ0FBbkMsRUFBc0NBLENBQUMsRUFBdkMsRUFBMkM7QUFDekMsUUFBTWdILENBQUMsR0FBR3BFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUM2RCxNQUFMLE1BQWlCekcsQ0FBQyxHQUFHLENBQXJCLENBQVgsQ0FBVjtBQUNBLFFBQU1pSCxDQUFDLEdBQUdOLEtBQUssQ0FBQzNHLENBQUQsQ0FBZjtBQUNBMkcsU0FBSyxDQUFDM0csQ0FBRCxDQUFMLEdBQVcyRyxLQUFLLENBQUNLLENBQUQsQ0FBaEI7QUFDQUwsU0FBSyxDQUFDSyxDQUFELENBQUwsR0FBV0MsQ0FBWDtBQUNEOztBQUNELFNBQU9OLEtBQVA7QUFDRCxDQVJEOztBQVVlcEMsbURBQWYsRTs7QUNwQ0EsSUFBTTJDLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQVVDLEdBQVYsRUFBZTtBQUN6QixPQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLN0gsS0FBTCxHQUFhLEtBQWI7QUFDQSxPQUFLOEgsR0FBTCxHQUFXLEtBQVg7QUFDQSxPQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNELENBUkQ7O0FBVWVOLDJDQUFmLEU7O0FDVkE7QUFFQSxJQUFNdEQsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBWTtBQUM1QixPQUFLNkQsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLaEosS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLaUosS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNBLE9BQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQUMsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFyQyxFQUFvRSxLQUFwRTtBQUNBSCxVQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtHLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQW5DLEVBQWdFLEtBQWhFO0FBQ0QsQ0FURDs7QUFXQXJFLFNBQVMsQ0FBQ2hGLFNBQVYsQ0FBb0JvSixhQUFwQixHQUFvQyxVQUFVRyxLQUFWLEVBQWlCO0FBQ25ELE1BQUksT0FBTyxLQUFLMUosS0FBTCxDQUFXMEosS0FBSyxDQUFDaEIsR0FBakIsQ0FBUCxLQUFpQyxXQUFyQyxFQUFrRDtBQUNoRCxTQUFLMUksS0FBTCxDQUFXMEosS0FBSyxDQUFDaEIsR0FBakIsRUFBc0JFLElBQXRCLEdBQTZCLElBQTdCO0FBQ0Q7QUFDRixDQUpEOztBQU1BekQsU0FBUyxDQUFDaEYsU0FBVixDQUFvQnNKLFdBQXBCLEdBQWtDLFVBQVVDLEtBQVYsRUFBaUI7QUFDakQsTUFBSSxPQUFPLEtBQUsxSixLQUFMLENBQVcwSixLQUFLLENBQUNoQixHQUFqQixDQUFQLEtBQWlDLFdBQXJDLEVBQWtEO0FBQ2hELFNBQUsxSSxLQUFMLENBQVcwSixLQUFLLENBQUNoQixHQUFqQixFQUFzQkUsSUFBdEIsR0FBNkIsS0FBN0I7QUFDRDtBQUNGLENBSkQ7O0FBTUF6RCxTQUFTLENBQUNoRixTQUFWLENBQW9Cd0osUUFBcEIsR0FBK0IsVUFBVWpCLEdBQVYsRUFBZTtBQUM1QyxNQUFJLE9BQU8sS0FBSzFJLEtBQUwsQ0FBVzBJLEdBQVgsQ0FBUCxLQUEyQixXQUEvQixFQUE0QztBQUMxQyxTQUFLMUksS0FBTCxDQUFXMEksR0FBWCxJQUFrQixJQUFJekgsT0FBTyxDQUFDd0gsR0FBWixDQUFnQkMsR0FBaEIsQ0FBbEI7QUFDRDs7QUFDRCxTQUFPLEtBQUsxSSxLQUFMLENBQVcwSSxHQUFYLENBQVA7QUFDRCxDQUxEOztBQU9BdkQsU0FBUyxDQUFDaEYsU0FBVixDQUFvQnlKLEdBQXBCLEdBQTBCLFVBQVVsQixHQUFWLEVBQWU7QUFDdkMsU0FBTyxLQUFLaUIsUUFBTCxDQUFjakIsR0FBZCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQXZELFNBQVMsQ0FBQ2hGLFNBQVYsQ0FBb0JpQixNQUFwQixHQUE2QixZQUFZO0FBQ3ZDLE1BQUksS0FBSzRILE9BQVQsRUFBa0I7QUFDaEIsU0FBS0ksS0FBTDtBQUNBLFNBQUtGLEdBQUwsR0FBV3hKLE1BQU0sQ0FBQ21LLFdBQVAsQ0FBbUJYLEdBQW5CLEVBQVg7QUFDQSxTQUFLRCxLQUFMLEdBQWEsS0FBS0MsR0FBTCxHQUFXLEtBQUtDLElBQTdCO0FBQ0EsU0FBS0EsSUFBTCxHQUFZLEtBQUtELEdBQWpCOztBQUNBLFNBQUssSUFBTTNILENBQVgsSUFBZ0IsS0FBS3ZCLEtBQXJCLEVBQTRCO0FBQzFCLFVBQUksQ0FBQzZCLE1BQU0sQ0FBQzFCLFNBQVAsQ0FBaUIySixjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBSy9KLEtBQTFDLEVBQWlEdUIsQ0FBakQsQ0FBTCxFQUEwRDtBQUN4RDtBQUNEOztBQUNELFVBQU1tSCxHQUFHLEdBQUcsS0FBSzFJLEtBQUwsQ0FBV3VCLENBQVgsQ0FBWjs7QUFDQSxVQUFJbUgsR0FBRyxDQUFDRSxJQUFSLEVBQWM7QUFDWkYsV0FBRyxDQUFDRyxRQUFKLElBQWdCLEtBQUtJLEtBQXJCO0FBQ0FQLFdBQUcsQ0FBQ0ssUUFBSixHQUFlLENBQUMsQ0FBaEI7O0FBQ0EsWUFBSUwsR0FBRyxDQUFDSSxVQUFKLEtBQW1CLENBQUMsQ0FBeEIsRUFBMkI7QUFDekJKLGFBQUcsQ0FBQ0ksVUFBSixHQUFpQixLQUFLTSxLQUF0QjtBQUNEO0FBQ0YsT0FORCxNQU1PO0FBQ0xWLFdBQUcsQ0FBQ0csUUFBSixHQUFlLENBQWY7QUFDQUgsV0FBRyxDQUFDSSxVQUFKLEdBQWlCLENBQUMsQ0FBbEI7O0FBQ0EsWUFBSUosR0FBRyxDQUFDSyxRQUFKLEtBQWlCLENBQUMsQ0FBdEIsRUFBeUI7QUFDdkJMLGFBQUcsQ0FBQ0ssUUFBSixHQUFlLEtBQUtLLEtBQXBCO0FBQ0Q7QUFDRjs7QUFDRFYsU0FBRyxDQUFDN0gsS0FBSixHQUFhNkgsR0FBRyxDQUFDSSxVQUFKLEtBQW1CLEtBQUtNLEtBQXJDO0FBQ0FWLFNBQUcsQ0FBQ0MsR0FBSixHQUFXRCxHQUFHLENBQUNLLFFBQUosS0FBaUIsS0FBS0ssS0FBakM7QUFDRDtBQUNGO0FBQ0YsQ0E1QkQ7O0FBOEJBakUsU0FBUyxDQUFDaEYsU0FBVixDQUFvQjZCLE9BQXBCLEdBQThCLFlBQVk7QUFDeEMsT0FBS2hDLEtBQUwsR0FBYSxFQUFiO0FBQ0QsQ0FGRDs7QUFJZW1GLHdEQUFmLEU7O0FDdEVBLElBQU1ULFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDN0IsT0FBS3NGLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxPQUFLZixLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtnQixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLE9BQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsT0FBS2YsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLZ0IsTUFBTCxHQUFjLEtBQWQ7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLE9BQU8sS0FBS0YsR0FBNUI7QUFDRCxDQVREOztBQVdBekYsVUFBVSxDQUFDdkUsU0FBWCxlQUFnQyxZQUFZO0FBQzFDLE9BQUtpSyxNQUFMLEdBQWMsS0FBZDtBQUNELENBRkQ7O0FBSUExRixVQUFVLENBQUN2RSxTQUFYLENBQXFCbUssS0FBckIsR0FBNkIsWUFBWTtBQUN2QyxPQUFLRixNQUFMLEdBQWMsSUFBZDtBQUNELENBRkQ7O0FBSUExRixVQUFVLENBQUN2RSxTQUFYLENBQXFCMkcsR0FBckIsR0FBMkIsVUFBVXlELFNBQVYsRUFBcUI7QUFDOUNBLFdBQVMsR0FBR0EsU0FBUyxJQUFJLENBQXpCO0FBQ0EsT0FBS0YsUUFBTCxHQUFnQixPQUFPLEtBQUtGLEdBQTVCO0FBQ0EsT0FBS0gsV0FBTCxJQUFvQk8sU0FBUyxHQUFHLEtBQUtOLFFBQXJDO0FBQ0EsT0FBS0EsUUFBTCxHQUFnQk0sU0FBaEI7O0FBQ0EsU0FBTyxDQUFDLEtBQUtILE1BQU4sSUFBZ0IsS0FBS0osV0FBTCxJQUFvQixLQUFLSyxRQUFoRCxFQUEwRDtBQUN4RCxTQUFLRyxJQUFMO0FBQ0EsU0FBS3ZCLEtBQUwsR0FBYXNCLFNBQVMsR0FBRyxLQUFLTCxRQUE5QjtBQUNBLFNBQUtBLFFBQUwsR0FBZ0JLLFNBQWhCO0FBQ0EsU0FBS1AsV0FBTCxJQUFvQixLQUFLSyxRQUF6QjtBQUNEOztBQUNEM0ssUUFBTSxDQUFDK0sscUJBQVAsQ0FBNkIsS0FBSzNELEdBQUwsQ0FBUzBDLElBQVQsQ0FBYyxJQUFkLENBQTdCO0FBQ0QsQ0FaRDs7QUFjQTlFLFVBQVUsQ0FBQ3ZFLFNBQVgsQ0FBcUJxSyxJQUFyQixHQUE0QixZQUFZO0FBQ3RDLE9BQUtwQixLQUFMO0FBQ0EsT0FBS3JELE1BQUw7QUFDRCxDQUhEOztBQUtBckIsVUFBVSxDQUFDdkUsU0FBWCxDQUFxQjRGLE1BQXJCLEdBQThCLFlBQVksQ0FBRSxDQUE1Qzs7QUFFZXJCLDBEQUFmLEU7O0FDeENBLElBQU1nRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFZO0FBQzFCLE9BQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsT0FBSy9CLElBQUwsR0FBWSxLQUFaO0FBQ0EsT0FBSy9ILEtBQUwsR0FBYSxLQUFiO0FBQ0EsT0FBSzhILEdBQUwsR0FBVyxLQUFYO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQixDQUFoQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsT0FBSzZCLEVBQUwsR0FBVSxDQUFWO0FBQ0EsT0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxPQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLE9BQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsT0FBS3ZDLENBQUwsR0FBUyxDQUFUO0FBQ0EsT0FBS3dDLENBQUwsR0FBUyxDQUFUO0FBQ0QsQ0FkRDs7QUFnQmVOLG1EQUFmLEU7O0FDaEJBO0FBRUEsSUFBTW5GLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBVWhCLE1BQVYsRUFBa0I7QUFDdEMsT0FBS3lFLE9BQUwsR0FBZSxJQUFmO0FBQ0EsT0FBS2hKLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS2lKLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxPQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBSzdFLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUswRyxjQUFMO0FBQ0QsQ0FURDs7QUFXQTFGLGFBQWEsQ0FBQ3BGLFNBQWQsQ0FBd0J3SixRQUF4QixHQUFtQyxVQUFVdUIsT0FBVixFQUFtQjtBQUNwRCxNQUFJLE9BQU8sS0FBS2xMLEtBQUwsQ0FBV2tMLE9BQVgsQ0FBUCxLQUErQixXQUFuQyxFQUFnRDtBQUM5QyxTQUFLbEwsS0FBTCxDQUFXa0wsT0FBWCxJQUFzQixJQUFJakssT0FBTyxDQUFDeUosT0FBWixDQUFvQlEsT0FBcEIsQ0FBdEI7QUFDRDs7QUFDRCxTQUFPLEtBQUtsTCxLQUFMLENBQVdrTCxPQUFYLENBQVA7QUFDRCxDQUxEOztBQU9BM0YsYUFBYSxDQUFDcEYsU0FBZCxDQUF3QnlKLEdBQXhCLEdBQThCLFVBQVVzQixPQUFWLEVBQW1CO0FBQy9DLFNBQU8sS0FBS3ZCLFFBQUwsQ0FBY3VCLE9BQWQsQ0FBUDtBQUNELENBRkQ7O0FBSUEzRixhQUFhLENBQUNwRixTQUFkLENBQXdCOEssY0FBeEIsR0FBeUMsWUFBWTtBQUNuRCxPQUFLMUcsTUFBTCxDQUFZNEcsS0FBWixDQUFrQkMsV0FBbEIsR0FBZ0MsTUFBaEMsQ0FEbUQsQ0FDWjs7QUFDdkMsT0FBSzdHLE1BQUwsQ0FBWTRHLEtBQVosQ0FBa0JFLFVBQWxCLEdBQStCLE1BQS9CLENBRm1ELENBRWI7O0FBQ3RDLE9BQUs5RyxNQUFMLENBQVkrRSxnQkFBWixDQUE2QixhQUE3QixFQUE0QyxLQUFLZ0MsaUJBQUwsQ0FBdUI5QixJQUF2QixDQUE0QixJQUE1QixDQUE1QyxFQUErRSxLQUEvRTtBQUNBLE9BQUtqRixNQUFMLENBQVkrRSxnQkFBWixDQUE2QixhQUE3QixFQUE0QyxLQUFLaUMsaUJBQUwsQ0FBdUIvQixJQUF2QixDQUE0QixJQUE1QixDQUE1QyxFQUErRSxLQUEvRTtBQUNBLE9BQUtqRixNQUFMLENBQVkrRSxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxLQUFLa0Msd0JBQUwsQ0FBOEJoQyxJQUE5QixDQUFtQyxJQUFuQyxDQUExQyxFQUFvRixLQUFwRjtBQUNBLE9BQUtqRixNQUFMLENBQVkrRSxnQkFBWixDQUE2QixlQUE3QixFQUE4QyxLQUFLa0Msd0JBQUwsQ0FBOEJoQyxJQUE5QixDQUFtQyxJQUFuQyxDQUE5QyxFQUF3RixLQUF4RjtBQUNBLE9BQUtqRixNQUFMLENBQVkrRSxnQkFBWixDQUE2QixjQUE3QixFQUE2QyxLQUFLa0Msd0JBQUwsQ0FBOEJoQyxJQUE5QixDQUFtQyxJQUFuQyxDQUE3QyxFQUF1RixLQUF2RjtBQUNBOUosUUFBTSxDQUFDNEosZ0JBQVAsQ0FBd0IsYUFBeEIsRUFBdUMsS0FBS21DLGlCQUFMLENBQXVCakMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBdkMsRUFBMEUsS0FBMUU7QUFDRCxDQVREOztBQVdBakUsYUFBYSxDQUFDcEYsU0FBZCxDQUF3QnVMLGNBQXhCLEdBQXlDLFVBQVVkLEVBQVYsRUFBYztBQUNyRCxNQUFJZSxNQUFNLEdBQUcsS0FBYjs7QUFDQSxPQUFLLElBQU1wSyxDQUFYLElBQWdCLEtBQUt2QixLQUFyQixFQUE0QjtBQUMxQixRQUFJNkIsTUFBTSxDQUFDaUksY0FBUCxDQUFzQkMsSUFBdEIsQ0FBMkIsS0FBSy9KLEtBQWhDLEVBQXVDdUIsQ0FBdkMsQ0FBSixFQUErQztBQUM3QyxVQUFNMkosT0FBTyxHQUFHLEtBQUtsTCxLQUFMLENBQVd1QixDQUFYLENBQWhCOztBQUNBLFVBQUkySixPQUFPLENBQUNOLEVBQVIsS0FBZUEsRUFBbkIsRUFBdUI7QUFDckJlLGNBQU0sR0FBR1QsT0FBVDtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPUyxNQUFQO0FBQ0QsQ0FYRDs7QUFhQXBHLGFBQWEsQ0FBQ3BGLFNBQWQsQ0FBd0J5TCxrQkFBeEIsR0FBNkMsWUFBWTtBQUN2RCxNQUFJRCxNQUFNLEdBQUcsS0FBYjs7QUFDQSxPQUFLLElBQU1wSyxDQUFYLElBQWdCLEtBQUt2QixLQUFyQixFQUE0QjtBQUMxQixRQUFJNkIsTUFBTSxDQUFDaUksY0FBUCxDQUFzQkMsSUFBdEIsQ0FBMkIsS0FBSy9KLEtBQWhDLEVBQXVDdUIsQ0FBdkMsQ0FBSixFQUErQztBQUM3QyxVQUFNMkosT0FBTyxHQUFHLEtBQUtsTCxLQUFMLENBQVd1QixDQUFYLENBQWhCOztBQUNBLFVBQUkySixPQUFPLENBQUNQLE1BQVIsS0FBbUIsS0FBdkIsRUFBOEI7QUFDNUJnQixjQUFNLEdBQUdULE9BQVQ7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsU0FBT1MsTUFBUDtBQUNELENBWEQ7O0FBYUFwRyxhQUFhLENBQUNwRixTQUFkLENBQXdCbUwsaUJBQXhCLEdBQTRDLFVBQVU1QixLQUFWLEVBQWlCO0FBQzNEQSxPQUFLLENBQUNtQyxjQUFOO0FBQ0EsTUFBTVgsT0FBTyxHQUFHLEtBQUtRLGNBQUwsQ0FBb0JoQyxLQUFLLENBQUNvQyxTQUExQixLQUF3QyxLQUFLRixrQkFBTCxFQUF4RDs7QUFDQSxNQUFJVixPQUFKLEVBQWE7QUFDWEEsV0FBTyxDQUFDUCxNQUFSLEdBQWlCLElBQWpCO0FBQ0FPLFdBQU8sQ0FBQ04sRUFBUixHQUFhbEIsS0FBSyxDQUFDb0MsU0FBbkI7QUFDQVosV0FBTyxDQUFDTCxJQUFSLEdBQWVuQixLQUFLLENBQUNxQyxXQUFyQixDQUhXLENBR3NCOztBQUNqQ2IsV0FBTyxDQUFDdEMsSUFBUixHQUFlLElBQWY7QUFDQXNDLFdBQU8sQ0FBQ0osTUFBUixHQUFpQnBCLEtBQUssQ0FBQ3NDLE9BQU4sR0FBZ0J0QyxLQUFLLENBQUN1QyxNQUFOLENBQWFDLFVBQTlDO0FBQ0FoQixXQUFPLENBQUNILE1BQVIsR0FBaUJyQixLQUFLLENBQUN5QyxPQUFOLEdBQWdCekMsS0FBSyxDQUFDdUMsTUFBTixDQUFhRyxTQUE5QztBQUNBbEIsV0FBTyxDQUFDMUMsQ0FBUixHQUFZa0IsS0FBSyxDQUFDc0MsT0FBTixHQUFnQnRDLEtBQUssQ0FBQ3VDLE1BQU4sQ0FBYUMsVUFBekM7QUFDQWhCLFdBQU8sQ0FBQ0YsQ0FBUixHQUFZdEIsS0FBSyxDQUFDeUMsT0FBTixHQUFnQnpDLEtBQUssQ0FBQ3VDLE1BQU4sQ0FBYUcsU0FBekM7QUFDRDtBQUNGLENBYkQ7O0FBZUE3RyxhQUFhLENBQUNwRixTQUFkLENBQXdCb0wsaUJBQXhCLEdBQTRDLFVBQVU3QixLQUFWLEVBQWlCO0FBQzNEQSxPQUFLLENBQUNtQyxjQUFOO0FBQ0EsTUFBTVgsT0FBTyxHQUFHLEtBQUtRLGNBQUwsQ0FBb0JoQyxLQUFLLENBQUNvQyxTQUExQixLQUF3QyxLQUFLRixrQkFBTCxFQUF4RDs7QUFDQSxNQUFJVixPQUFKLEVBQWE7QUFDWEEsV0FBTyxDQUFDTixFQUFSLEdBQWFsQixLQUFLLENBQUNvQyxTQUFuQjtBQUNBWixXQUFPLENBQUMxQyxDQUFSLEdBQVlrQixLQUFLLENBQUNzQyxPQUFOLEdBQWdCdEMsS0FBSyxDQUFDdUMsTUFBTixDQUFhQyxVQUF6QztBQUNBaEIsV0FBTyxDQUFDRixDQUFSLEdBQVl0QixLQUFLLENBQUN5QyxPQUFOLEdBQWdCekMsS0FBSyxDQUFDdUMsTUFBTixDQUFhRyxTQUF6QztBQUNEO0FBQ0YsQ0FSRDs7QUFVQTdHLGFBQWEsQ0FBQ3BGLFNBQWQsQ0FBd0JxTCx3QkFBeEIsR0FBbUQsVUFBVTlCLEtBQVYsRUFBaUI7QUFDbEVBLE9BQUssQ0FBQ21DLGNBQU47QUFDQSxNQUFNWCxPQUFPLEdBQUcsS0FBS1EsY0FBTCxDQUFvQmhDLEtBQUssQ0FBQ29DLFNBQTFCLENBQWhCOztBQUNBLE1BQUlaLE9BQUosRUFBYTtBQUNYQSxXQUFPLENBQUNQLE1BQVIsR0FBaUIsS0FBakI7QUFDQU8sV0FBTyxDQUFDdEMsSUFBUixHQUFlLEtBQWY7QUFDRDtBQUNGLENBUEQ7O0FBU0FyRCxhQUFhLENBQUNwRixTQUFkLENBQXdCc0wsaUJBQXhCLEdBQTRDLFVBQVUvQixLQUFWLEVBQWlCO0FBQzNEQSxPQUFLLENBQUNtQyxjQUFOO0FBQ0FuQyxPQUFLLENBQUMyQyxlQUFOO0FBQ0EsU0FBTyxLQUFQO0FBQ0QsQ0FKRDs7QUFNQTlHLGFBQWEsQ0FBQ3BGLFNBQWQsQ0FBd0JpQixNQUF4QixHQUFpQyxZQUFZO0FBQzNDLE1BQUksS0FBSzRILE9BQVQsRUFBa0I7QUFDaEIsU0FBS0ksS0FBTDtBQUNBLFNBQUtGLEdBQUwsR0FBV3hKLE1BQU0sQ0FBQ21LLFdBQVAsQ0FBbUJYLEdBQW5CLEVBQVg7QUFDQSxTQUFLRCxLQUFMLEdBQWEsS0FBS0MsR0FBTCxHQUFXLEtBQUtDLElBQTdCO0FBQ0EsU0FBS0EsSUFBTCxHQUFZLEtBQUtELEdBQWpCOztBQUNBLFNBQUssSUFBTTNILENBQVgsSUFBZ0IsS0FBS3ZCLEtBQXJCLEVBQTRCO0FBQzFCLFVBQUk2QixNQUFNLENBQUNpSSxjQUFQLENBQXNCQyxJQUF0QixDQUEyQixLQUFLL0osS0FBaEMsRUFBdUN1QixDQUF2QyxDQUFKLEVBQStDO0FBQzdDLFlBQU0ySixPQUFPLEdBQUcsS0FBS2xMLEtBQUwsQ0FBV3VCLENBQVgsQ0FBaEI7O0FBQ0EsWUFBSTJKLE9BQU8sQ0FBQ3RDLElBQVosRUFBa0I7QUFDaEJzQyxpQkFBTyxDQUFDckMsUUFBUixJQUFvQixLQUFLSSxLQUF6QjtBQUNBaUMsaUJBQU8sQ0FBQ25DLFFBQVIsR0FBbUIsQ0FBQyxDQUFwQjs7QUFDQSxjQUFJbUMsT0FBTyxDQUFDcEMsVUFBUixLQUF1QixDQUFDLENBQTVCLEVBQStCO0FBQzdCb0MsbUJBQU8sQ0FBQ3BDLFVBQVIsR0FBcUIsS0FBS00sS0FBMUI7QUFDRDtBQUNGLFNBTkQsTUFNTztBQUNMOEIsaUJBQU8sQ0FBQ3JDLFFBQVIsR0FBbUIsQ0FBbkI7QUFDQXFDLGlCQUFPLENBQUNwQyxVQUFSLEdBQXFCLENBQUMsQ0FBdEI7O0FBQ0EsY0FBSW9DLE9BQU8sQ0FBQ25DLFFBQVIsS0FBcUIsQ0FBQyxDQUExQixFQUE2QjtBQUMzQm1DLG1CQUFPLENBQUNuQyxRQUFSLEdBQW1CLEtBQUtLLEtBQXhCO0FBQ0Q7QUFDRjs7QUFDRDhCLGVBQU8sQ0FBQ3JLLEtBQVIsR0FBaUJxSyxPQUFPLENBQUNwQyxVQUFSLEtBQXVCLEtBQUtNLEtBQTdDO0FBQ0E4QixlQUFPLENBQUN2QyxHQUFSLEdBQWV1QyxPQUFPLENBQUNuQyxRQUFSLEtBQXFCLEtBQUtLLEtBQXpDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsQ0EzQkQ7O0FBNkJBN0QsYUFBYSxDQUFDcEYsU0FBZCxDQUF3QjZCLE9BQXhCLEdBQWtDLFlBQVk7QUFDNUMsT0FBS2hDLEtBQUwsR0FBYSxFQUFiO0FBQ0QsQ0FGRDs7QUFJZXVGLGdFQUFmLEU7O0FDdElBLElBQU0rRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVUzSyxNQUFWLEVBQWtCO0FBQ3hDLE1BQU1YLE1BQU0sR0FBR2EsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDM0JlLFNBQUssRUFBRSxJQURvQjtBQUUzQjBKLFNBQUssRUFBRSxFQUZvQjtBQUczQkMsVUFBTSxFQUFFLEVBSG1CO0FBSTNCQyxXQUFPLEVBQUUsQ0FKa0I7QUFLM0JDLFdBQU8sRUFBRSxDQUxrQjtBQU0zQkMsZUFBVyxFQUFFLENBTmM7QUFPM0JDLGdCQUFZLEVBQUUsQ0FQYTtBQVEzQkMsV0FBTyxFQUFFLEdBUmtCO0FBUzNCQyxXQUFPLEVBQUUsR0FUa0I7QUFVM0JDLFdBQU8sRUFBRTtBQVZrQixHQUFkLEVBV1pwTCxNQVhZLENBQWY7QUFhQSxPQUFLdUYsTUFBTCxHQUFjLElBQWQ7QUFDQSxPQUFLekYsV0FBTCxHQUFtQixLQUFuQjtBQUNBLE9BQUtvQixLQUFMLEdBQWE3QixNQUFNLENBQUM2QixLQUFwQjtBQUNBLE9BQUswSixLQUFMLEdBQWF2TCxNQUFNLENBQUN1TCxLQUFwQjtBQUNBLE9BQUtDLE1BQUwsR0FBY3hMLE1BQU0sQ0FBQ3dMLE1BQXJCO0FBQ0EsT0FBS0MsT0FBTCxHQUFlekwsTUFBTSxDQUFDeUwsT0FBdEI7QUFDQSxPQUFLQyxPQUFMLEdBQWUxTCxNQUFNLENBQUMwTCxPQUF0QjtBQUNBLE9BQUtDLFdBQUwsR0FBbUIzTCxNQUFNLENBQUMyTCxXQUExQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0I1TCxNQUFNLENBQUM0TCxZQUEzQjtBQUNBLE9BQUtDLE9BQUwsR0FBZTdMLE1BQU0sQ0FBQzZMLE9BQXRCO0FBQ0EsT0FBS0MsT0FBTCxHQUFlOUwsTUFBTSxDQUFDOEwsT0FBdEI7QUFDQSxPQUFLQyxPQUFMLEdBQWUvTCxNQUFNLENBQUMrTCxPQUF0QjtBQUNELENBMUJEOztBQTRCQVQsZUFBZSxDQUFDbk0sU0FBaEIsQ0FBMEI0QixhQUExQixHQUEwQyxRQUExQzs7QUFFQXVLLGVBQWUsQ0FBQ25NLFNBQWhCLENBQTBCNkIsT0FBMUIsR0FBb0MsWUFBWTtBQUM5QyxPQUFLUCxXQUFMLEdBQW1CLElBQW5CO0FBQ0QsQ0FGRDs7QUFJZTZLLG9FQUFmLEU7O0FDbENBO0FBRUEsSUFBTXhILFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVVQLE1BQVYsRUFBa0I7QUFDckMsT0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBSzNFLE9BQUwsR0FBZSxLQUFLMkUsTUFBTCxDQUFZeUksVUFBWixDQUF1QixJQUF2QixDQUFmO0FBQ0EsT0FBS3pJLE1BQUwsQ0FBWWlJLE1BQVosR0FBcUI5TSxNQUFNLENBQUN1TixXQUE1QjtBQUNBLE9BQUsxSSxNQUFMLENBQVlnSSxLQUFaLEdBQW9CN00sTUFBTSxDQUFDd04sVUFBM0I7QUFDQSxPQUFLbk4sVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0QsQ0FQRDs7QUFTQThFLFlBQVksQ0FBQzNFLFNBQWIsQ0FBdUJzQyxTQUF2QixHQUFtQyxVQUFVekIsTUFBVixFQUFrQjtBQUFBOztBQUNuRCxTQUFPLElBQUkwQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7O0FBQ0FELFNBQUssQ0FBQ0UsTUFBTixHQUFlLFlBQU07QUFDbkIsV0FBSSxDQUFDL0MsS0FBTCxDQUFXZ0IsTUFBTSxDQUFDZ0MsSUFBbEIsSUFBMEJILEtBQTFCO0FBQ0FGLGFBQU8sQ0FBQ0UsS0FBRCxDQUFQO0FBQ0QsS0FIRDs7QUFJQUEsU0FBSyxDQUFDSyxPQUFOLEdBQWdCLFVBQUNDLE1BQUQsRUFBWTtBQUMxQlAsWUFBTSxDQUFDTyxNQUFELENBQU47QUFDRCxLQUZEOztBQUdBTixTQUFLLENBQUNRLEdBQU4sR0FBWXJDLE1BQU0sQ0FBQ3NDLEdBQW5CO0FBQ0QsR0FWTSxDQUFQO0FBV0QsQ0FaRDs7QUFjQXdCLFlBQVksQ0FBQzNFLFNBQWIsQ0FBdUJnTixLQUF2QixHQUErQixZQUFZO0FBQ3pDLE9BQUt2TixPQUFMLENBQWF3TixTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEtBQUs3SSxNQUFMLENBQVlnSSxLQUF6QyxFQUFnRCxLQUFLaEksTUFBTCxDQUFZaUksTUFBNUQ7QUFDRCxDQUZEOztBQUlBMUgsWUFBWSxDQUFDM0UsU0FBYixDQUF1QnlKLEdBQXZCLEdBQTZCLFVBQVUvRyxLQUFWLEVBQWlCO0FBQzVDLFNBQU8sS0FBSzdDLEtBQUwsQ0FBVzZDLEtBQVgsQ0FBUDtBQUNELENBRkQ7O0FBSUFpQyxZQUFZLENBQUMzRSxTQUFiLENBQXVCdUcsSUFBdkIsR0FBOEIsWUFBWTtBQUN4QyxPQUFLeUcsS0FBTCxHQUR3QyxDQUV4QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBSyxJQUFJNUwsQ0FBQyxHQUFHLEtBQUt4QixVQUFMLENBQWdCeUIsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsR0FBMkM7QUFDekMsUUFBTWxCLFNBQVMsR0FBRyxLQUFLTixVQUFMLENBQWdCd0IsQ0FBaEIsQ0FBbEI7O0FBRUEsUUFBSWxCLFNBQVMsQ0FBQ29CLFdBQWQsRUFBMkI7QUFDekIsV0FBSzFCLFVBQUwsQ0FBZ0IyQixNQUFoQixDQUF1QkgsQ0FBdkIsRUFBMEIsQ0FBMUI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJbEIsU0FBUyxDQUFDME0sT0FBZCxFQUF1QjtBQUNyQixhQUFLbk4sT0FBTCxDQUFheU4sSUFBYjtBQUNBLGFBQUt6TixPQUFMLENBQWEwTixTQUFiLENBQ0VqTixTQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkJnRCxDQUEzQixHQUErQm5JLFNBQVMsQ0FBQ2tNLEtBQVYsR0FBa0IsR0FBbEIsR0FBd0JsTSxTQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkIrSCxLQUFsRixHQUEwRmxOLFNBQVMsQ0FBQ2tNLEtBQVYsR0FBa0JsTSxTQUFTLENBQUN3TSxPQUE1QixHQUFzQ3hNLFNBQVMsQ0FBQzZHLE1BQVYsQ0FBaUIxQixTQUFqQixDQUEyQitILEtBRDdKLEVBRUVsTixTQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkJ3RixDQUEzQixHQUErQjNLLFNBQVMsQ0FBQ21NLE1BQVYsR0FBbUIsR0FBbkIsR0FBeUJuTSxTQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkIrSCxLQUFuRixHQUEyRmxOLFNBQVMsQ0FBQ21NLE1BQVYsR0FBbUJuTSxTQUFTLENBQUN5TSxPQUE3QixHQUF1Q3pNLFNBQVMsQ0FBQzZHLE1BQVYsQ0FBaUIxQixTQUFqQixDQUEyQitILEtBRi9KO0FBSUEsYUFBSzNOLE9BQUwsQ0FBYTROLE1BQWIsQ0FBb0JuTixTQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkJpSSxLQUEvQztBQUNBLGFBQUs3TixPQUFMLENBQWEyTixLQUFiLENBQ0VsTixTQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkIrSCxLQUQ3QixFQUVFbE4sU0FBUyxDQUFDNkcsTUFBVixDQUFpQjFCLFNBQWpCLENBQTJCK0gsS0FGN0I7O0FBS0EsWUFBSWxOLFNBQVMsQ0FBQ3NNLFdBQVYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0J0TSxtQkFBUyxDQUFDc00sV0FBVixHQUF3QnRNLFNBQVMsQ0FBQ3dDLEtBQVYsQ0FBZ0IwSixLQUF4QztBQUNEOztBQUVELFlBQUlsTSxTQUFTLENBQUN1TSxZQUFWLEtBQTJCLENBQS9CLEVBQWtDO0FBQ2hDdk0sbUJBQVMsQ0FBQ3VNLFlBQVYsR0FBeUJ2TSxTQUFTLENBQUN3QyxLQUFWLENBQWdCMkosTUFBekM7QUFDRDs7QUFFRCxhQUFLNU0sT0FBTCxDQUFhOE4sU0FBYixDQUNFck4sU0FBUyxDQUFDd0MsS0FEWixFQUVFeEMsU0FBUyxDQUFDb00sT0FGWixFQUdFcE0sU0FBUyxDQUFDcU0sT0FIWixFQUlFck0sU0FBUyxDQUFDc00sV0FKWixFQUtFdE0sU0FBUyxDQUFDdU0sWUFMWixFQU1Fdk0sU0FBUyxDQUFDa00sS0FBVixHQUFrQixDQUFDLEdBTnJCLEVBTTBCO0FBQ3hCbE0saUJBQVMsQ0FBQ21NLE1BQVYsR0FBbUIsQ0FBQyxHQVB0QixFQU8yQjtBQUN6Qm5NLGlCQUFTLENBQUNrTSxLQVJaLEVBUW1CO0FBQ2pCbE0saUJBQVMsQ0FBQ21NLE1BVFosQ0FTbUI7QUFUbkI7QUFXQSxhQUFLNU0sT0FBTCxDQUFhK04sT0FBYjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxPQUFLL04sT0FBTCxDQUFhK04sT0FBYjtBQUNELENBekVEOztBQTJFQTdJLFlBQVksQ0FBQzNFLFNBQWIsQ0FBdUJ5TixrQkFBdkIsR0FBNEMsVUFBVTVNLE1BQVYsRUFBa0I7QUFDNUQsTUFBTVgsU0FBUyxHQUFHLElBQUlZLE9BQU8sQ0FBQ3FMLGVBQVosQ0FBNEJ0TCxNQUE1QixDQUFsQjtBQUNBLE9BQUtqQixVQUFMLENBQWdCOE4sT0FBaEIsQ0FBd0J4TixTQUF4QjtBQUNBLFNBQU9BLFNBQVA7QUFDRCxDQUpEOztBQU1BeUUsWUFBWSxDQUFDM0UsU0FBYixDQUF1QjJOLElBQXZCLEdBQThCLFVBQVU5TSxNQUFWLEVBQWtCO0FBQzlDLE9BQUtwQixPQUFMLENBQWFtTyxRQUFiLENBQXNCL00sTUFBTSxDQUFDOE0sSUFBN0IsRUFBbUM5TSxNQUFNLENBQUN3SCxDQUExQyxFQUE2Q3hILE1BQU0sQ0FBQ2dLLENBQXBEO0FBQ0QsQ0FGRDs7QUFJQWxHLFlBQVksQ0FBQzNFLFNBQWIsQ0FBdUI2TixNQUF2QixHQUFnQyxVQUFVaE4sTUFBVixFQUFrQjtBQUNoRCxPQUFLcEIsT0FBTCxDQUFhcU8sU0FBYjtBQUNBLE9BQUtyTyxPQUFMLENBQWFzTyxHQUFiLENBQWlCbE4sTUFBTSxDQUFDd0gsQ0FBeEIsRUFBMkJ4SCxNQUFNLENBQUNnSyxDQUFsQyxFQUFxQ2hLLE1BQU0sQ0FBQ21OLE1BQTVDLEVBQW9ELENBQXBELEVBQXVELElBQUloSyxJQUFJLENBQUNpSyxFQUFoRTtBQUNBLE9BQUt4TyxPQUFMLENBQWF5TyxNQUFiO0FBQ0QsQ0FKRDs7QUFNQXZKLFlBQVksQ0FBQzNFLFNBQWIsQ0FBdUJtTyxJQUF2QixHQUE4QixVQUFVdE4sTUFBVixFQUFrQjtBQUM5QyxPQUFLcEIsT0FBTCxDQUFhcU8sU0FBYjtBQUNBLE9BQUtyTyxPQUFMLENBQWEyTyxNQUFiLENBQW9Cdk4sTUFBTSxDQUFDd04sRUFBM0IsRUFBK0J4TixNQUFNLENBQUN5TixFQUF0QztBQUNBLE9BQUs3TyxPQUFMLENBQWE4TyxNQUFiLENBQW9CMU4sTUFBTSxDQUFDMk4sRUFBM0IsRUFBK0IzTixNQUFNLENBQUM0TixFQUF0QztBQUNBLE9BQUtoUCxPQUFMLENBQWF5TyxNQUFiO0FBQ0QsQ0FMRDs7QUFPQXZKLFlBQVksQ0FBQzNFLFNBQWIsQ0FBdUIwTyxJQUF2QixHQUE4QixVQUFVN04sTUFBVixFQUFrQjtBQUM5QyxPQUFLcEIsT0FBTCxDQUFhaVAsSUFBYixDQUFrQjdOLE1BQU0sQ0FBQ3dILENBQXpCLEVBQTRCeEgsTUFBTSxDQUFDZ0ssQ0FBbkMsRUFBc0NoSyxNQUFNLENBQUN1TCxLQUE3QyxFQUFvRHZMLE1BQU0sQ0FBQ3dMLE1BQTNEO0FBQ0EsT0FBSzVNLE9BQUwsQ0FBYXlPLE1BQWI7QUFDRCxDQUhEOztBQUtldkosOERBQWYsRTs7QUN4SUEsSUFBTWdLLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQVVuTixNQUFWLEVBQWtCO0FBQzlCLE9BQUtvTixPQUFMLEdBQWVsTixNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMzQm9FLFdBQU8sRUFBRSxtQkFBTSxDQUFFLENBRFU7QUFFM0JJLFVBQU0sRUFBRSxrQkFBTSxDQUFFLENBRlc7QUFHM0JsRixVQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQUhXO0FBSTNCc0YsUUFBSSxFQUFFLGdCQUFNLENBQUU7QUFKYSxHQUFkLEVBS1ovRSxNQUxZLENBQWY7QUFNRCxDQVBEOztBQVNBbU4sS0FBSyxDQUFDM08sU0FBTixDQUFnQitGLE9BQWhCLEdBQTBCLFVBQVU4SSxNQUFWLEVBQWtCO0FBQzFDLFNBQU8sS0FBS0QsT0FBTCxDQUFhN0ksT0FBYixDQUFxQjhJLE1BQXJCLENBQVA7QUFDRCxDQUZEOztBQUlBRixLQUFLLENBQUMzTyxTQUFOLENBQWdCbUcsTUFBaEIsR0FBeUIsVUFBVTBJLE1BQVYsRUFBa0I7QUFDekMsU0FBTyxLQUFLRCxPQUFMLENBQWF6SSxNQUFiLENBQW9CMEksTUFBcEIsQ0FBUDtBQUNELENBRkQ7O0FBSUFGLEtBQUssQ0FBQzNPLFNBQU4sQ0FBZ0JpQixNQUFoQixHQUF5QixVQUFVNE4sTUFBVixFQUFrQjtBQUN6QyxTQUFPLEtBQUtELE9BQUwsQ0FBYTNOLE1BQWIsQ0FBb0I0TixNQUFwQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQUYsS0FBSyxDQUFDM08sU0FBTixDQUFnQnVHLElBQWhCLEdBQXVCLFVBQVVzSSxNQUFWLEVBQWtCO0FBQ3ZDLFNBQU8sS0FBS0QsT0FBTCxDQUFhckksSUFBYixDQUFrQnNJLE1BQWxCLENBQVA7QUFDRCxDQUZEOztBQUllRiwrQ0FBZixFOztBQ3pCQSxJQUFNbEssV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBWTtBQUM5QixPQUFLb0IsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLWSxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsT0FBS1gsV0FBTCxHQUFtQixLQUFuQjtBQUNBLE9BQUtHLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxPQUFLRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQixLQUFoQjtBQUNBLE9BQUtFLFVBQUwsR0FBa0IsS0FBbEI7QUFDRCxDQVJEOztBQVVBL0IsV0FBVyxDQUFDekUsU0FBWixhQUErQixVQUFVd0UsS0FBVixFQUFpQjtBQUM5QyxPQUFLaUMsU0FBTCxHQUFpQmpDLEtBQWpCO0FBQ0EsT0FBS3NLLGFBQUw7QUFDRCxDQUhEOztBQUtBckssV0FBVyxDQUFDekUsU0FBWixDQUFzQjBHLGNBQXRCLEdBQXVDLFlBQVk7QUFDakQsT0FBS1osV0FBTCxHQUFtQixJQUFuQjtBQUNBLE9BQUtHLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxPQUFLRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQixLQUFoQjtBQUNBLE9BQUtFLFVBQUwsR0FBa0IsS0FBbEI7QUFDRCxDQU5EOztBQVFBL0IsV0FBVyxDQUFDekUsU0FBWixDQUFzQmdHLGFBQXRCLEdBQXNDLFlBQVk7QUFDaEQsT0FBS0YsV0FBTCxHQUFtQixLQUFuQjtBQUNBLE9BQUtHLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxPQUFLRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQixLQUFoQjtBQUNBLE9BQUtFLFVBQUwsR0FBa0IsS0FBbEI7QUFDRCxDQU5EOztBQVFBL0IsV0FBVyxDQUFDekUsU0FBWixDQUFzQmtHLGFBQXRCLEdBQXNDLFlBQVk7QUFDaEQsT0FBS0osV0FBTCxHQUFtQixLQUFuQjtBQUNBLE9BQUtHLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxPQUFLRyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQixLQUFoQjtBQUNBLE9BQUtFLFVBQUwsR0FBa0IsS0FBbEI7QUFDRCxDQU5EOztBQVFBL0IsV0FBVyxDQUFDekUsU0FBWixDQUFzQnFHLFdBQXRCLEdBQW9DLFlBQVk7QUFDOUMsT0FBS1AsV0FBTCxHQUFtQixLQUFuQjtBQUNBLE9BQUtHLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxPQUFLRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQixJQUFoQjtBQUNBLE9BQUtFLFVBQUwsR0FBa0IsS0FBbEI7QUFDRCxDQU5EOztBQVFBL0IsV0FBVyxDQUFDekUsU0FBWixDQUFzQjhPLGFBQXRCLEdBQXNDLFlBQVk7QUFDaEQsT0FBS2hKLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsT0FBS0csVUFBTCxHQUFrQixLQUFsQjtBQUNBLE9BQUtFLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxPQUFLRSxVQUFMLEdBQWtCLElBQWxCO0FBQ0QsQ0FORDs7QUFRZS9CLDREQUFmLEU7O0FDdkRBLElBQU1zSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVV2TixNQUFWLEVBQWtCO0FBQ3hDLE9BQUtGLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLME4sU0FBTCxHQUFpQixJQUFqQjtBQUNBLE9BQUs1SSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsT0FBS3dJLE9BQUwsR0FBZWxOLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCakIsU0FBSyxFQUFFLGlCQUFNLENBQUUsQ0FEWTtBQUUzQk8sVUFBTSxFQUFFLGtCQUFNLENBQUU7QUFGVyxHQUFkLEVBR1pPLE1BSFksQ0FBZjtBQUlELENBUkQ7O0FBVUF1TixlQUFlLENBQUMvTyxTQUFoQixDQUEwQjRCLGFBQTFCLEdBQTBDLFFBQTFDOztBQUVBbU4sZUFBZSxDQUFDL08sU0FBaEIsQ0FBMEJVLEtBQTFCLEdBQWtDLFVBQVVtTyxNQUFWLEVBQWtCO0FBQ2xELE9BQUtHLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxPQUFLNUksVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQU8sS0FBS3dJLE9BQUwsQ0FBYWxPLEtBQWIsQ0FBbUJtTyxNQUFuQixDQUFQO0FBQ0QsQ0FKRDs7QUFNQUUsZUFBZSxDQUFDL08sU0FBaEIsQ0FBMEJpQixNQUExQixHQUFtQyxVQUFVNE4sTUFBVixFQUFrQjtBQUNuRCxTQUFPLEtBQUtELE9BQUwsQ0FBYTNOLE1BQWIsQ0FBb0I0TixNQUFwQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQUUsZUFBZSxDQUFDL08sU0FBaEIsQ0FBMEI2QixPQUExQixHQUFvQyxZQUFZO0FBQzlDLE9BQUtQLFdBQUwsR0FBbUIsSUFBbkI7QUFDRCxDQUZEOztBQUlleU4sb0VBQWYsRTs7QUMxQkE7QUFFQSxJQUFNdkosWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUMvQixPQUFLNUYsVUFBTCxHQUFrQixFQUFsQjtBQUNELENBRkQ7O0FBSUE0RixZQUFZLENBQUN4RixTQUFiLENBQXVCaVAsa0JBQXZCLEdBQTRDLFVBQVVwTyxNQUFWLEVBQWtCO0FBQzVELE1BQU1YLFNBQVMsR0FBRyxJQUFJWSxPQUFPLENBQUNpTyxlQUFaLENBQTRCbE8sTUFBNUIsQ0FBbEI7QUFDQSxPQUFLakIsVUFBTCxDQUFnQm9CLElBQWhCLENBQXFCZCxTQUFyQjtBQUNBLFNBQU9BLFNBQVA7QUFDRCxDQUpEOztBQU1Bc0YsWUFBWSxDQUFDeEYsU0FBYixDQUF1QmlCLE1BQXZCLEdBQWdDLFVBQVU0TixNQUFWLEVBQWtCO0FBQ2hELE9BQUssSUFBSXpOLENBQUMsR0FBRyxLQUFLeEIsVUFBTCxDQUFnQnlCLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEdBQTJDO0FBQ3pDLFFBQU1sQixTQUFTLEdBQUcsS0FBS04sVUFBTCxDQUFnQndCLENBQWhCLENBQWxCOztBQUNBLFFBQUlsQixTQUFTLENBQUNvQixXQUFkLEVBQTJCO0FBQ3pCLFdBQUsxQixVQUFMLENBQWdCMkIsTUFBaEIsQ0FBdUJILENBQXZCLEVBQTBCLENBQTFCO0FBQ0E7QUFDRDs7QUFDRCxRQUFJbEIsU0FBUyxDQUFDOE8sU0FBZCxFQUF5QjtBQUN2QjlPLGVBQVMsQ0FBQ1EsS0FBVixDQUFnQm1PLE1BQWhCO0FBQ0E7QUFDRDs7QUFDRCxRQUFJM08sU0FBUyxDQUFDa0csVUFBZCxFQUEwQjtBQUN4QmxHLGVBQVMsQ0FBQ2UsTUFBVixDQUFpQjROLE1BQWpCO0FBQ0Q7QUFDRjtBQUNGLENBZkQ7O0FBaUJlckosOERBQWYsRTs7QUM3QkEsSUFBTTBKLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBVTFOLE1BQVYsRUFBa0I7QUFDdkMsT0FBS3VGLE1BQUwsR0FBYyxJQUFkO0FBQ0EsT0FBS3pGLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLa0YsVUFBTCxHQUFrQixJQUFsQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUJqRixNQUFNLENBQUNxRSxPQUF4QjtBQUNBLE9BQUtBLE9BQUwsR0FBZSxJQUFmO0FBQ0EsT0FBS3NKLE1BQUwsR0FBYzNOLE1BQU0sQ0FBQzJOLE1BQXJCO0FBQ0QsQ0FQRDs7QUFTQUQsY0FBYyxDQUFDbFAsU0FBZixDQUF5QjRCLGFBQXpCLEdBQXlDLE9BQXpDOztBQUVBc04sY0FBYyxDQUFDbFAsU0FBZixhQUFrQyxVQUFVa0IsS0FBVixFQUFpQjtBQUNqRCxPQUFLc0YsVUFBTCxHQUFrQixJQUFsQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUJ2RixLQUFqQjtBQUNELENBSEQ7O0FBS0FnTyxjQUFjLENBQUNsUCxTQUFmLENBQXlCNkIsT0FBekIsR0FBbUMsWUFBWTtBQUM3QyxPQUFLUCxXQUFMLEdBQW1CLElBQW5CO0FBQ0QsQ0FGRDs7QUFJZTROLGtFQUFmLEU7O0FDcEJBO0FBRUEsSUFBTXpKLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDOUIsT0FBSzdGLFVBQUwsR0FBa0IsRUFBbEI7QUFDRCxDQUZEOztBQUlBNkYsV0FBVyxDQUFDekYsU0FBWixDQUFzQm9QLGlCQUF0QixHQUEwQyxVQUFVdk8sTUFBVixFQUFrQjtBQUMxRCxNQUFNWCxTQUFTLEdBQUcsSUFBSVksT0FBTyxDQUFDb08sY0FBWixDQUEyQnJPLE1BQTNCLENBQWxCO0FBQ0EsT0FBS2pCLFVBQUwsQ0FBZ0JvQixJQUFoQixDQUFxQmQsU0FBckI7QUFDQSxTQUFPQSxTQUFQO0FBQ0QsQ0FKRDs7QUFNQXVGLFdBQVcsQ0FBQ3pGLFNBQVosQ0FBc0JpQixNQUF0QixHQUErQixVQUFVNE4sTUFBVixFQUFrQjtBQUMvQyxPQUFLLElBQUl6TixDQUFDLEdBQUcsS0FBS3hCLFVBQUwsQ0FBZ0J5QixNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxHQUEyQztBQUN6QyxRQUFNbEIsU0FBUyxHQUFHLEtBQUtOLFVBQUwsQ0FBZ0J3QixDQUFoQixDQUFsQjs7QUFDQSxRQUFJbEIsU0FBUyxDQUFDb0IsV0FBZCxFQUEyQjtBQUN6QixXQUFLMUIsVUFBTCxDQUFnQjJCLE1BQWhCLENBQXVCSCxDQUF2QixFQUEwQixDQUExQjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSWxCLFNBQVMsQ0FBQzJGLE9BQVYsSUFBcUIzRixTQUFTLENBQUNzRyxVQUFuQyxFQUErQztBQUM3QyxVQUFJdEcsU0FBUyxDQUFDaVAsTUFBVixDQUFpQmpQLFNBQVMsQ0FBQzJGLE9BQTNCLEVBQW9Dd0osSUFBeEMsRUFBOEM7QUFDNUNuUCxpQkFBUyxDQUFDaVAsTUFBVixDQUFpQmpQLFNBQVMsQ0FBQzJGLE9BQTNCLEVBQW9Dd0osSUFBcEMsQ0FBeUNSLE1BQXpDLEVBQWlEM08sU0FBUyxDQUFDNkcsTUFBM0Q7QUFDRDtBQUNGOztBQUNELFFBQUk3RyxTQUFTLENBQUNzRyxVQUFkLEVBQTBCO0FBQ3hCdEcsZUFBUyxDQUFDMkYsT0FBVixHQUFvQjNGLFNBQVMsQ0FBQ3VHLFNBQTlCOztBQUNBLFVBQUl2RyxTQUFTLENBQUNpUCxNQUFWLENBQWlCalAsU0FBUyxDQUFDMkYsT0FBM0IsRUFBb0N5SixLQUF4QyxFQUErQztBQUM3Q3BQLGlCQUFTLENBQUNpUCxNQUFWLENBQWlCalAsU0FBUyxDQUFDMkYsT0FBM0IsRUFBb0N5SixLQUFwQyxDQUEwQ1QsTUFBMUMsRUFBa0QzTyxTQUFTLENBQUM2RyxNQUE1RDtBQUNEOztBQUNEN0csZUFBUyxDQUFDc0csVUFBVixHQUF1QixLQUF2QjtBQUNEOztBQUNELFFBQUl0RyxTQUFTLENBQUMyRixPQUFWLElBQXFCM0YsU0FBUyxDQUFDaVAsTUFBVixDQUFpQmpQLFNBQVMsQ0FBQzJGLE9BQTNCLEVBQW9DNUUsTUFBN0QsRUFBcUU7QUFDbkVmLGVBQVMsQ0FBQ2lQLE1BQVYsQ0FBaUJqUCxTQUFTLENBQUMyRixPQUEzQixFQUFvQzVFLE1BQXBDLENBQTJDNE4sTUFBM0MsRUFBbUQzTyxTQUFTLENBQUM2RyxNQUE3RDtBQUNEO0FBQ0Y7QUFDRixDQXZCRDs7QUF5QmV0Qiw0REFBZixFOztBQ3JDQSxJQUFNOEosa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFVL04sTUFBVixFQUFrQjtBQUMzQyxNQUFNWCxNQUFNLEdBQUdhLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCMEcsS0FBQyxFQUFFLEVBRHdCO0FBRTNCd0MsS0FBQyxFQUFFLEVBRndCO0FBRzNCeUMsU0FBSyxFQUFFLENBSG9CO0FBSTNCRixTQUFLLEVBQUU7QUFKb0IsR0FBZCxFQUtaNUwsTUFMWSxDQUFmO0FBT0EsT0FBS3VGLE1BQUwsR0FBYyxJQUFkO0FBQ0EsT0FBS3pGLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLK0csQ0FBTCxHQUFTeEgsTUFBTSxDQUFDd0gsQ0FBaEI7QUFDQSxPQUFLd0MsQ0FBTCxHQUFTaEssTUFBTSxDQUFDZ0ssQ0FBaEI7QUFDQSxPQUFLeUMsS0FBTCxHQUFhek0sTUFBTSxDQUFDeU0sS0FBcEI7QUFDQSxPQUFLRixLQUFMLEdBQWF2TSxNQUFNLENBQUN1TSxLQUFwQjtBQUNELENBZEQ7O0FBZ0JBbUMsa0JBQWtCLENBQUN2UCxTQUFuQixDQUE2QjRCLGFBQTdCLEdBQTZDLFdBQTdDOztBQUVBMk4sa0JBQWtCLENBQUN2UCxTQUFuQixDQUE2QjZCLE9BQTdCLEdBQXVDLFlBQVk7QUFDakQsT0FBS1AsV0FBTCxHQUFtQixJQUFuQjtBQUNELENBRkQ7O0FBSWVpTywwRUFBZixFOztBQ3RCQTtBQUVBLElBQU1qSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDbEMsT0FBSzFGLFVBQUwsR0FBa0IsRUFBbEI7QUFDRCxDQUZEOztBQUlBMEYsZUFBZSxDQUFDdEYsU0FBaEIsQ0FBMEJ3UCxxQkFBMUIsR0FBa0QsVUFBVTNPLE1BQVYsRUFBa0I7QUFDbEUsTUFBTVgsU0FBUyxHQUFHLElBQUlZLE9BQU8sQ0FBQ3lPLGtCQUFaLENBQStCMU8sTUFBL0IsQ0FBbEI7QUFDQSxPQUFLakIsVUFBTCxDQUFnQm9CLElBQWhCLENBQXFCZCxTQUFyQjtBQUNBLFNBQU9BLFNBQVA7QUFDRCxDQUpEOztBQU1Bb0YsZUFBZSxDQUFDdEYsU0FBaEIsQ0FBMEJpQixNQUExQixHQUFtQyxZQUFZO0FBQzdDLE9BQUssSUFBSUcsQ0FBQyxHQUFHLEtBQUt4QixVQUFMLENBQWdCeUIsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsR0FBMkM7QUFDekMsUUFBTWxCLFNBQVMsR0FBRyxLQUFLTixVQUFMLENBQWdCd0IsQ0FBaEIsQ0FBbEI7O0FBQ0EsUUFBSWxCLFNBQVMsQ0FBQ29CLFdBQWQsRUFBMkI7QUFDekIsV0FBSzFCLFVBQUwsQ0FBZ0IyQixNQUFoQixDQUF1QkgsQ0FBdkIsRUFBMEIsQ0FBMUI7QUFDRDtBQUNGO0FBQ0YsQ0FQRDs7QUFTZWtFLG9FQUFmLEU7O0FDckJBO0FBRUEsSUFBTVIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUMvQixPQUFLakYsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLRCxVQUFMLEdBQWtCLEVBQWxCO0FBQ0QsQ0FIRDs7QUFLQWtGLFlBQVksQ0FBQzlFLFNBQWIsQ0FBdUJ5UCxHQUF2QixHQUE2QixVQUFVNU8sTUFBVixFQUFrQjtBQUM3QyxNQUFNa0csTUFBTSxHQUFHLElBQUlqRyxPQUFPLENBQUM4RixNQUFaLENBQW1CL0YsTUFBbkIsQ0FBZjtBQUNBLE9BQUtoQixLQUFMLENBQVdtQixJQUFYLENBQWdCK0YsTUFBaEI7QUFDQSxTQUFPQSxNQUFQO0FBQ0QsQ0FKRDs7QUFNQWpDLFlBQVksQ0FBQzlFLFNBQWIsQ0FBdUJpQixNQUF2QixHQUFnQyxZQUFZO0FBQzFDLE9BQUssSUFBSUcsQ0FBQyxHQUFHLEtBQUt2QixLQUFMLENBQVd3QixNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxHQUFzQztBQUNwQyxRQUFNMkYsTUFBTSxHQUFHLEtBQUtsSCxLQUFMLENBQVd1QixDQUFYLENBQWY7O0FBQ0EsUUFBSTJGLE1BQU0sQ0FBQ3pGLFdBQVgsRUFBd0I7QUFDdEIsV0FBS3pCLEtBQUwsQ0FBVzBCLE1BQVgsQ0FBa0JILENBQWxCLEVBQXFCLENBQXJCO0FBQ0Q7QUFDRjtBQUNGLENBUEQ7O0FBU0EwRCxZQUFZLENBQUM5RSxTQUFiLENBQXVCNkIsT0FBdkIsR0FBaUMsWUFBWTtBQUMzQyxPQUFLLElBQUlULENBQUMsR0FBRyxLQUFLdkIsS0FBTCxDQUFXd0IsTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsR0FBc0M7QUFDcEMsUUFBTTJGLE1BQU0sR0FBRyxLQUFLbEgsS0FBTCxDQUFXdUIsQ0FBWCxDQUFmO0FBQ0EyRixVQUFNLENBQUNsRixPQUFQO0FBQ0Q7O0FBQ0QsT0FBS2hDLEtBQUwsR0FBYSxFQUFiO0FBQ0QsQ0FORDs7QUFRZWlGLDhEQUFmLEU7O0FDOUJBO0FBRUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFVZCxNQUFWLEVBQWtCO0FBQ3RDLE1BQU1zTCxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUEvQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWEvTCxJQUFiLENBQWtCZ00sTUFBakM7QUFDQSxNQUFNQyxXQUFXLEdBQUdOLEtBQUssQ0FBQ0MsUUFBTixDQUFlTSxXQUFuQztBQUNBLE1BQU1DLGlCQUFpQixHQUFHUixLQUFLLENBQUNDLFFBQU4sQ0FBZVEsaUJBQXpDO0FBRUEsT0FBS0MsS0FBTCxHQUFhLElBQUlYLE9BQUosQ0FBWSxJQUFJSSxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBWixFQUE4QixJQUE5QixDQUFiO0FBQ0EsT0FBSzlGLEdBQUwsR0FBVyxFQUFYO0FBQ0EsT0FBS3BLLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxPQUFLd04sS0FBTCxHQUFhLEdBQWI7QUFDQSxPQUFLM04sT0FBTCxHQUFlMkUsTUFBTSxDQUFDeUksVUFBUCxDQUFrQixJQUFsQixDQUFmO0FBQ0EsT0FBS3lELFFBQUwsR0FBZ0IsSUFBSUgsaUJBQUosRUFBaEIsQ0FYc0MsQ0FhdEM7O0FBRUEsT0FBS0UsS0FBTCxDQUFXRSxrQkFBWCxDQUE4QixLQUFLRCxRQUFuQzs7QUFFQSxPQUFLQSxRQUFMLENBQWNFLFlBQWQsR0FBNkIsVUFBVUMsT0FBVixFQUFtQjtBQUM5QyxRQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsV0FBUixHQUFzQkMsT0FBdEIsR0FBZ0MxUSxTQUFuRDtBQUNBLFFBQU0yUSxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssV0FBUixHQUFzQkYsT0FBdEIsR0FBZ0MxUSxTQUFuRDtBQUNBLFFBQU02USxPQUFPLEdBQUdMLFVBQVUsQ0FBQzNKLE1BQTNCO0FBQ0EsUUFBTWlLLE9BQU8sR0FBR0gsVUFBVSxDQUFDOUosTUFBM0I7QUFDQTJKLGNBQVUsQ0FBQ08sY0FBWCxDQUEwQkYsT0FBMUIsRUFBbUNDLE9BQW5DO0FBQ0FILGNBQVUsQ0FBQ0ksY0FBWCxDQUEwQkQsT0FBMUIsRUFBbUNELE9BQW5DO0FBQ0QsR0FQRDs7QUFTQSxPQUFLVCxRQUFMLENBQWNZLFVBQWQsR0FBMkIsVUFBVVQsT0FBVixFQUFtQjtBQUM1QyxRQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsV0FBUixHQUFzQkMsT0FBdEIsR0FBZ0MxUSxTQUFuRDtBQUNBLFFBQU0yUSxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssV0FBUixHQUFzQkYsT0FBdEIsR0FBZ0MxUSxTQUFuRDtBQUNBLFFBQU02USxPQUFPLEdBQUdMLFVBQVUsQ0FBQzNKLE1BQTNCO0FBQ0EsUUFBTWlLLE9BQU8sR0FBR0gsVUFBVSxDQUFDOUosTUFBM0I7QUFDQTJKLGNBQVUsQ0FBQ1MsWUFBWCxDQUF3QkosT0FBeEIsRUFBaUNDLE9BQWpDO0FBQ0FILGNBQVUsQ0FBQ00sWUFBWCxDQUF3QkgsT0FBeEIsRUFBaUNELE9BQWpDO0FBQ0QsR0FQRDs7QUFTQSxPQUFLVCxRQUFMLENBQWNjLFFBQWQsR0FBeUIsVUFBVVgsT0FBVixFQUFtQjtBQUMxQyxRQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsV0FBUixHQUFzQkMsT0FBdEIsR0FBZ0MxUSxTQUFuRDtBQUNBLFFBQU0yUSxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssV0FBUixHQUFzQkYsT0FBdEIsR0FBZ0MxUSxTQUFuRDtBQUNBLFFBQU02USxPQUFPLEdBQUdMLFVBQVUsQ0FBQzNKLE1BQTNCO0FBQ0EsUUFBTWlLLE9BQU8sR0FBR0gsVUFBVSxDQUFDOUosTUFBM0I7QUFDQTJKLGNBQVUsQ0FBQ1csaUJBQVgsQ0FBNkJOLE9BQTdCLEVBQXNDQyxPQUF0QztBQUNBSCxjQUFVLENBQUNRLGlCQUFYLENBQTZCTCxPQUE3QixFQUFzQ0QsT0FBdEM7QUFDRCxHQVBEOztBQVNBLE9BQUtULFFBQUwsQ0FBY2dCLFNBQWQsR0FBMEIsVUFBVWIsT0FBVixFQUFtQjtBQUMzQyxRQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsV0FBUixHQUFzQkMsT0FBdEIsR0FBZ0MxUSxTQUFuRDtBQUNBLFFBQU0yUSxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssV0FBUixHQUFzQkYsT0FBdEIsR0FBZ0MxUSxTQUFuRDtBQUNBLFFBQU02USxPQUFPLEdBQUdMLFVBQVUsQ0FBQzNKLE1BQTNCO0FBQ0EsUUFBTWlLLE9BQU8sR0FBR0gsVUFBVSxDQUFDOUosTUFBM0I7QUFDQTJKLGNBQVUsQ0FBQ2Esa0JBQVgsQ0FBOEJSLE9BQTlCLEVBQXVDQyxPQUF2QztBQUNBSCxjQUFVLENBQUNVLGtCQUFYLENBQThCUCxPQUE5QixFQUF1Q0QsT0FBdkM7QUFDRCxHQVBELENBNUNzQyxDQXFEdEM7OztBQUVBLE1BQU1TLFNBQVMsR0FBRyxJQUFJdkIsV0FBSixDQUFnQixLQUFLeFEsT0FBckIsQ0FBbEI7QUFDQStSLFdBQVMsQ0FBQ0MsU0FBVixDQUFvQnJOLE1BQU0sQ0FBQ3lJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBcEI7QUFDQTJFLFdBQVMsQ0FBQ0UsWUFBVixDQUF1QixLQUFLdEUsS0FBNUI7QUFDQW9FLFdBQVMsQ0FBQ0csWUFBVixDQUF1QixHQUF2QjtBQUNBSCxXQUFTLENBQUNHLFlBQVYsQ0FBdUIsR0FBdkI7QUFDQUgsV0FBUyxDQUFDSSxRQUFWLENBQW1CM0IsV0FBVyxDQUFDNEIsVUFBL0I7QUFDQUwsV0FBUyxDQUFDTSxXQUFWLENBQXNCN0IsV0FBVyxDQUFDOEIsVUFBbEM7QUFDQSxPQUFLMUIsS0FBTCxDQUFXMkIsWUFBWCxDQUF3QlIsU0FBeEI7O0FBQ0EsT0FBS25CLEtBQUwsQ0FBVzRCLFdBQVgsQ0FBdUJDLFFBQXZCLENBQWdDQyxRQUFoQyxDQUF5Q25GLEtBQXpDLEdBQWlELFlBQVk7QUFDM0QsV0FBTyxLQUFQO0FBQ0QsR0FGRDtBQUdELENBbEVEOztBQW9FQTlILGFBQWEsQ0FBQ2xGLFNBQWQsQ0FBd0JvUyxVQUF4QixHQUFxQyxVQUFVdlIsTUFBVixFQUFrQjtBQUNyRCxPQUFLd1AsS0FBTCxDQUFXZ0MsVUFBWCxDQUFzQnhSLE1BQXRCO0FBQ0QsQ0FGRDs7QUFJQXFFLGFBQWEsQ0FBQ2xGLFNBQWQsQ0FBd0JzUyxhQUF4QixHQUF3QyxZQUFZO0FBQ2xELE9BQUtqQyxLQUFMLENBQVdrQyxhQUFYO0FBQ0QsQ0FGRDs7QUFJQXJOLGFBQWEsQ0FBQ2xGLFNBQWQsQ0FBd0J3UyxtQkFBeEIsR0FBOEMsVUFBVTNSLE1BQVYsRUFBa0I7QUFDOUQsTUFBTVgsU0FBUyxHQUFHLElBQUlZLE9BQU8sQ0FBQzJSLGdCQUFaLENBQTZCNVIsTUFBN0IsRUFBcUMsSUFBckMsQ0FBbEI7QUFDQSxPQUFLakIsVUFBTCxDQUFnQm9CLElBQWhCLENBQXFCZCxTQUFyQjtBQUNBLFNBQU9BLFNBQVA7QUFDRCxDQUpEOztBQU1BZ0YsYUFBYSxDQUFDbEYsU0FBZCxDQUF3QmlCLE1BQXhCLEdBQWlDLFlBQVk7QUFDM0MsT0FBS29QLEtBQUwsQ0FBV3FDLElBQVgsQ0FBZ0IsSUFBSSxLQUFLMUksR0FBekIsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakM7QUFDQSxPQUFLcUcsS0FBTCxDQUFXc0MsV0FBWDs7QUFDQSxPQUFLLElBQUl2UixDQUFDLEdBQUcsS0FBS3hCLFVBQUwsQ0FBZ0J5QixNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxHQUEyQztBQUN6QyxRQUFNbEIsU0FBUyxHQUFHLEtBQUtOLFVBQUwsQ0FBZ0J3QixDQUFoQixDQUFsQjs7QUFDQSxRQUFJbEIsU0FBUyxDQUFDb0IsV0FBZCxFQUEyQjtBQUN6QixXQUFLMUIsVUFBTCxDQUFnQjJCLE1BQWhCLENBQXVCSCxDQUF2QixFQUEwQixDQUExQjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQU13UixRQUFRLEdBQUcxUyxTQUFTLENBQUMyUyxXQUFWLEVBQWpCO0FBQ0EzUyxlQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkJnRCxDQUEzQixHQUErQnVLLFFBQVEsQ0FBQ3ZLLENBQXhDO0FBQ0FuSSxlQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkJ3RixDQUEzQixHQUErQitILFFBQVEsQ0FBQy9ILENBQXhDO0FBQ0EzSyxlQUFTLENBQUM2RyxNQUFWLENBQWlCMUIsU0FBakIsQ0FBMkJpSSxLQUEzQixHQUFtQ3BOLFNBQVMsQ0FBQzRTLFFBQVYsRUFBbkM7QUFDRDtBQUNGO0FBQ0YsQ0FkRDs7QUFnQmU1TixnRUFBZixFOztBQ3BHQTtBQUVBLElBQU11TixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQVVqUixNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtBQUNqRCxNQUFNc1IsUUFBUSxHQUFHO0FBQ2YxSyxLQUFDLEVBQUUsRUFEWTtBQUVmd0MsS0FBQyxFQUFFLEVBRlk7QUFHZkgsUUFBSSxFQUFFLFNBSFM7QUFJZkYsVUFBTSxFQUFFLElBSk87QUFLZndJLGNBQVUsRUFBRSxJQUxHO0FBTWZDLFNBQUssRUFBRSxJQU5RO0FBT2ZDLFVBQU0sRUFBRSxLQVBPO0FBUWZDLGlCQUFhLEVBQUUsS0FSQTtBQVNmN0YsU0FBSyxFQUFFLENBVFE7QUFVZjhGLGtCQUFjLEVBQUUsQ0FWRDtBQVdmQyxtQkFBZSxFQUFFLENBWEY7QUFZZkMsaUJBQWEsRUFBRSxDQVpBO0FBYWZDLGtCQUFjLEVBQUU7QUFBRWxMLE9BQUMsRUFBRSxDQUFMO0FBQVF3QyxPQUFDLEVBQUU7QUFBWCxLQWJEO0FBY2YySSxZQUFRLEVBQUU7QUFkSyxHQUFqQjtBQWlCQSxNQUFNM1MsTUFBTSxHQUFHYSxNQUFNLENBQUNDLE1BQVAsQ0FBY29SLFFBQWQsRUFBd0J2UixNQUF4QixDQUFmO0FBRUEsT0FBS3VGLE1BQUwsR0FBYyxJQUFkO0FBQ0EsT0FBS3pGLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLbVMsSUFBTCxHQUFZLElBQVo7QUFDQSxPQUFLaFMsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS2lTLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxPQUFLaEosSUFBTCxHQUFZN0osTUFBTSxDQUFDNkosSUFBbkI7QUFFQSxNQUFNaUosU0FBUyxHQUFHaEUsS0FBSyxDQUFDQyxRQUFOLENBQWVnRSxTQUFqQztBQUNBLE1BQU1DLE1BQU0sR0FBR2xFLEtBQUssQ0FBQ0MsUUFBTixDQUFla0UsTUFBOUI7QUFFQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUosU0FBSixFQUFoQjtBQUNBSSxTQUFPLENBQUNuQixRQUFSLENBQWlCdkssQ0FBakIsR0FBcUJ4SCxNQUFNLENBQUN3SCxDQUFQLEdBQVcsS0FBSzVHLE1BQUwsQ0FBWTJMLEtBQTVDO0FBQ0EyRyxTQUFPLENBQUNuQixRQUFSLENBQWlCL0gsQ0FBakIsR0FBcUJoSyxNQUFNLENBQUNnSyxDQUFQLEdBQVcsS0FBS3BKLE1BQUwsQ0FBWTJMLEtBQTVDO0FBQ0EyRyxTQUFPLENBQUN2SixNQUFSLEdBQWlCM0osTUFBTSxDQUFDMkosTUFBeEI7QUFDQXVKLFNBQU8sQ0FBQ2YsVUFBUixHQUFxQm5TLE1BQU0sQ0FBQ21TLFVBQTVCO0FBQ0FlLFNBQU8sQ0FBQ2QsS0FBUixHQUFnQnBTLE1BQU0sQ0FBQ29TLEtBQXZCO0FBQ0FjLFNBQU8sQ0FBQ2IsTUFBUixHQUFpQnJTLE1BQU0sQ0FBQ3FTLE1BQXhCO0FBQ0FhLFNBQU8sQ0FBQ1osYUFBUixHQUF3QnRTLE1BQU0sQ0FBQ3NTLGFBQS9CO0FBQ0FZLFNBQU8sQ0FBQ3pHLEtBQVIsR0FBZ0J6TSxNQUFNLENBQUN5TSxLQUF2QjtBQUNBeUcsU0FBTyxDQUFDWCxjQUFSLEdBQXlCdlMsTUFBTSxDQUFDdVMsY0FBaEM7QUFDQVcsU0FBTyxDQUFDVixlQUFSLEdBQTBCeFMsTUFBTSxDQUFDd1MsZUFBakM7QUFDQVUsU0FBTyxDQUFDVCxhQUFSLEdBQXdCelMsTUFBTSxDQUFDeVMsYUFBL0I7QUFDQVMsU0FBTyxDQUFDUixjQUFSLEdBQXlCMVMsTUFBTSxDQUFDMFMsY0FBaEM7QUFDQVEsU0FBTyxDQUFDUCxRQUFSLEdBQW1CM1MsTUFBTSxDQUFDMlMsUUFBMUI7O0FBRUEsTUFBSSxLQUFLOUksSUFBTCxLQUFjLFFBQWxCLEVBQTRCO0FBQzFCcUosV0FBTyxDQUFDckosSUFBUixHQUFlbUosTUFBTSxDQUFDRyxhQUF0QjtBQUNEOztBQUVELE1BQUksS0FBS3RKLElBQUwsS0FBYyxTQUFsQixFQUE2QjtBQUMzQnFKLFdBQU8sQ0FBQ3JKLElBQVIsR0FBZW1KLE1BQU0sQ0FBQ0ksY0FBdEI7QUFDRDs7QUFFRCxNQUFJLEtBQUt2SixJQUFMLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0JxSixXQUFPLENBQUNySixJQUFSLEdBQWVtSixNQUFNLENBQUNLLGdCQUF0QjtBQUNEOztBQUVELE9BQUtULElBQUwsR0FBWSxLQUFLaFMsTUFBTCxDQUFZNE8sS0FBWixDQUFrQjhELFVBQWxCLENBQTZCSixPQUE3QixDQUFaO0FBQ0EsT0FBS04sSUFBTCxDQUFVakosTUFBVixHQUFtQixJQUFuQjtBQUNBLE9BQUtpSixJQUFMLENBQVV2VCxTQUFWLEdBQXNCLElBQXRCO0FBQ0QsQ0E1REQ7O0FBOERBdVMsZ0JBQWdCLENBQUN6UyxTQUFqQixDQUEyQjRCLGFBQTNCLEdBQTJDLFNBQTNDOztBQUVBNlEsZ0JBQWdCLENBQUN6UyxTQUFqQixDQUEyQm9VLGlCQUEzQixHQUErQyxVQUFVdlQsTUFBVixFQUFrQjtBQUMvRCxPQUFLNFMsSUFBTCxDQUFVWSxRQUFWLENBQW1CLElBQW5CO0FBQ0EsT0FBS1osSUFBTCxDQUFVYSxpQkFBVixDQUE0QjtBQUMxQmpNLEtBQUMsRUFBRXhILE1BQU0sQ0FBQ3dILENBQVAsR0FBVyxLQUFLNUcsTUFBTCxDQUFZMkwsS0FEQTtBQUUxQnZDLEtBQUMsRUFBRWhLLE1BQU0sQ0FBQ2dLLENBQVAsR0FBVyxLQUFLcEosTUFBTCxDQUFZMkw7QUFGQSxHQUE1QjtBQUlELENBTkQ7O0FBUUFxRixnQkFBZ0IsQ0FBQ3pTLFNBQWpCLENBQTJCNkIsT0FBM0IsR0FBcUMsWUFBWTtBQUFBOztBQUMvQyxPQUFLNlIsUUFBTCxDQUFjMU0sT0FBZCxDQUFzQixVQUFDdU4sT0FBRCxFQUFhO0FBQ2pDLFNBQUksQ0FBQ2QsSUFBTCxDQUFVZSxjQUFWLENBQXlCRCxPQUF6QjtBQUNELEdBRkQ7QUFHQSxPQUFLOVMsTUFBTCxDQUFZNE8sS0FBWixDQUFrQm9FLFdBQWxCLENBQThCLEtBQUtoQixJQUFuQztBQUNBLE9BQUtuUyxXQUFMLEdBQW1CLElBQW5CO0FBQ0QsQ0FORDs7QUFRQW1SLGdCQUFnQixDQUFDelMsU0FBakIsQ0FBMkI2UyxXQUEzQixHQUF5QyxZQUFZO0FBQ25ELE1BQU1ELFFBQVEsR0FBRyxLQUFLYSxJQUFMLENBQVVpQixXQUFWLEVBQWpCO0FBQ0EsU0FBTztBQUNMck0sS0FBQyxFQUFFdUssUUFBUSxDQUFDdkssQ0FBVCxHQUFhLEtBQUs1RyxNQUFMLENBQVkyTCxLQUR2QjtBQUVMdkMsS0FBQyxFQUFFK0gsUUFBUSxDQUFDL0gsQ0FBVCxHQUFhLEtBQUtwSixNQUFMLENBQVkyTDtBQUZ2QixHQUFQO0FBSUQsQ0FORDs7QUFRQXFGLGdCQUFnQixDQUFDelMsU0FBakIsQ0FBMkI4UyxRQUEzQixHQUFzQyxZQUFZO0FBQ2hELFNBQU8sS0FBS1csSUFBTCxDQUFVa0IsUUFBVixFQUFQO0FBQ0QsQ0FGRDs7QUFJQWxDLGdCQUFnQixDQUFDelMsU0FBakIsQ0FBMkI0VSxXQUEzQixHQUF5QyxVQUFVL1QsTUFBVixFQUFrQjtBQUN6RCxPQUFLNFMsSUFBTCxDQUFVb0IsV0FBVixDQUFzQjtBQUNwQnhNLEtBQUMsRUFBRXhILE1BQU0sQ0FBQ3dILENBQVAsR0FBVyxLQUFLNUcsTUFBTCxDQUFZMkwsS0FETjtBQUVwQnZDLEtBQUMsRUFBRWhLLE1BQU0sQ0FBQ2dLLENBQVAsR0FBVyxLQUFLcEosTUFBTCxDQUFZMkw7QUFGTixHQUF0QjtBQUlELENBTEQ7O0FBT0FxRixnQkFBZ0IsQ0FBQ3pTLFNBQWpCLENBQTJCOFUsVUFBM0IsR0FBd0MsVUFBVWpVLE1BQVYsRUFBa0I7QUFDeEQsT0FBSzRTLElBQUwsQ0FBVXNCLFVBQVYsQ0FBcUJsVSxNQUFyQixFQUE2QixLQUFLNFMsSUFBTCxDQUFVdUIsY0FBVixFQUE3QjtBQUNELENBRkQ7O0FBSUF2QyxnQkFBZ0IsQ0FBQ3pTLFNBQWpCLENBQTJCaVYsYUFBM0IsR0FBMkMsVUFBVXBVLE1BQVYsRUFBa0I7QUFDM0QsTUFBTXFVLFlBQVksR0FBR3ZGLEtBQUssQ0FBQ0MsUUFBTixDQUFldUYsWUFBcEM7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsWUFBSixFQUFmO0FBQ0FFLFFBQU0sQ0FBQ0MsT0FBUCxHQUFpQnhVLE1BQU0sQ0FBQ3dVLE9BQXhCO0FBQ0FELFFBQU0sQ0FBQ0UsUUFBUCxHQUFrQnpVLE1BQU0sQ0FBQ3lVLFFBQXpCO0FBQ0FGLFFBQU0sQ0FBQ0csV0FBUCxHQUFxQjFVLE1BQU0sQ0FBQzBVLFdBQTVCO0FBQ0FILFFBQU0sQ0FBQ0ksUUFBUCxHQUFrQjNVLE1BQU0sQ0FBQzJVLFFBQXpCO0FBQ0EsU0FBT0osTUFBUDtBQUNELENBUkQ7O0FBVUEzQyxnQkFBZ0IsQ0FBQ3pTLFNBQWpCLENBQTJCeVYsU0FBM0IsR0FBdUMsVUFBVWpVLE1BQVYsRUFBa0I7QUFDdkQsTUFBTXVSLFFBQVEsR0FBRztBQUNmMUssS0FBQyxFQUFFLENBRFk7QUFFZndDLEtBQUMsRUFBRSxDQUZZO0FBR2ZtRCxVQUFNLEVBQUUsRUFITztBQUlmcUgsV0FBTyxFQUFFLENBSk07QUFLZkMsWUFBUSxFQUFFLEdBTEs7QUFNZkMsZUFBVyxFQUFFLEdBTkU7QUFPZkMsWUFBUSxFQUFFO0FBUEssR0FBakI7QUFTQSxNQUFNM1UsTUFBTSxHQUFHYSxNQUFNLENBQUNDLE1BQVAsQ0FBY29SLFFBQWQsRUFBd0J2UixNQUF4QixDQUFmO0FBQ0EsTUFBTWtVLGlCQUFpQixHQUFHLEtBQUtULGFBQUwsQ0FBbUJwVSxNQUFuQixDQUExQjtBQUNBLE1BQU04VSxhQUFhLEdBQUdoRyxLQUFLLENBQUNpRyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsYUFBN0M7QUFDQSxNQUFNQyxVQUFVLEdBQUdMLGlCQUFuQjtBQUNBSyxZQUFVLENBQUNDLEtBQVgsR0FBbUIsSUFBSUwsYUFBSixDQUFrQjlVLE1BQU0sQ0FBQ21OLE1BQVAsR0FBZ0IsS0FBS3ZNLE1BQUwsQ0FBWTJMLEtBQTlDLENBQW5CO0FBQ0EySSxZQUFVLENBQUNDLEtBQVgsQ0FBaUJDLEdBQWpCLEdBQXVCO0FBQ3JCNU4sS0FBQyxFQUFFeEgsTUFBTSxDQUFDd0gsQ0FBUCxHQUFXLEtBQUs1RyxNQUFMLENBQVkyTCxLQURMO0FBRXJCdkMsS0FBQyxFQUFFaEssTUFBTSxDQUFDZ0ssQ0FBUCxHQUFXLEtBQUtwSixNQUFMLENBQVkyTDtBQUZMLEdBQXZCO0FBSUEsTUFBTW1ILE9BQU8sR0FBRyxLQUFLZCxJQUFMLENBQVV5QyxhQUFWLENBQXdCSCxVQUF4QixDQUFoQjtBQUNBLE9BQUtyQyxRQUFMLENBQWMxUyxJQUFkLENBQW1CdVQsT0FBbkI7QUFDQSxTQUFPQSxPQUFQO0FBQ0QsQ0F0QkQ7O0FBd0JBOUIsZ0JBQWdCLENBQUN6UyxTQUFqQixDQUEyQmlSLGNBQTNCLEdBQTRDLFVBQVVrRixFQUFWLEVBQWNDLEtBQWQsRUFBcUIsQ0FBRSxDQUFuRTs7QUFFQTNELGdCQUFnQixDQUFDelMsU0FBakIsQ0FBMkJtUixZQUEzQixHQUEwQyxVQUFVZ0YsRUFBVixFQUFjQyxLQUFkLEVBQXFCLENBQUUsQ0FBakU7O0FBRUEzRCxnQkFBZ0IsQ0FBQ3pTLFNBQWpCLENBQTJCcVIsaUJBQTNCLEdBQStDLFVBQVU4RSxFQUFWLEVBQWNDLEtBQWQsRUFBcUIsQ0FBRSxDQUF0RTs7QUFFQTNELGdCQUFnQixDQUFDelMsU0FBakIsQ0FBMkJ1UixrQkFBM0IsR0FBZ0QsVUFBVTRFLEVBQVYsRUFBY0MsS0FBZCxFQUFxQixDQUFFLENBQXZFOztBQUVlM0Qsc0VBQWYsRTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTNSLGVBQU8sR0FBRztBQUNkekIsYUFBVyxFQUFFQSxZQURDO0FBRWQwQixnQkFBYyxFQUFFQSxlQUZGO0FBR2RlLFFBQU0sRUFBRUEsTUFITTtBQUlkcUMsUUFBTSxFQUFFQSxNQUpNO0FBS2R5QyxRQUFNLEVBQUVBLE1BTE07QUFNZDlCLGNBQVksRUFBRUEsYUFOQTtBQU9kYSxTQUFPLEVBQUVBLE9BUEs7QUFRZDJDLEtBQUcsRUFBRUEsR0FSUztBQVNkdEQsV0FBUyxFQUFFQSxVQVRHO0FBVWRULFlBQVUsRUFBRUEsV0FWRTtBQVdka08sa0JBQWdCLEVBQUVBLGlCQVhKO0FBWWR2TixlQUFhLEVBQUVBLGNBWkQ7QUFhZHFGLFNBQU8sRUFBRUEsT0FiSztBQWNkbkYsZUFBYSxFQUFFQSxjQWREO0FBZWQrRyxpQkFBZSxFQUFFQSxnQkFmSDtBQWdCZHhILGNBQVksRUFBRUEsYUFoQkE7QUFpQmRnSyxPQUFLLEVBQUVBLEtBakJPO0FBa0JkbEssYUFBVyxFQUFFQSxZQWxCQztBQW1CZHNLLGlCQUFlLEVBQUVBLGdCQW5CSDtBQW9CZHZKLGNBQVksRUFBRUEsYUFwQkE7QUFxQmQwSixnQkFBYyxFQUFFQSxlQXJCRjtBQXNCZHpKLGFBQVcsRUFBRUEsWUF0QkM7QUF1QmQ4SixvQkFBa0IsRUFBRUEsbUJBdkJOO0FBd0JkakssaUJBQWUsRUFBRUEsZ0JBQWVBO0FBeEJsQixDQUFoQjtBQTJCZXhFLDRGQUFmLEUiLCJmaWxlIjoiaGFybW9ueS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhhcm1vbnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSGFybW9ueVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBBdWRpb1N5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG4gIHRoaXMuY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKVxuICB0aGlzLm1hc3RlciA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKClcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMubWFzdGVyLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgY29uc3Qgc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gIGNvbnN0IGdhaW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIGNvbXBvbmVudC5zb3VyY2UgPSBzb3VyY2VcbiAgc291cmNlLmJ1ZmZlciA9IHRoaXMuY2FjaGVbY29tcG9uZW50LmF1ZGlvTmFtZV1cbiAgc291cmNlLmNvbm5lY3QoZ2FpbilcbiAgZ2Fpbi5jb25uZWN0KHRoaXMubWFzdGVyKVxuICBnYWluLmdhaW4udmFsdWUgPSBjb21wb25lbnQudm9sdW1lXG4gIHNvdXJjZS5zdGFydCgpXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICBpZiAoY29tcG9uZW50LnNvdXJjZSkge1xuICAgIGNvbXBvbmVudC5zb3VyY2Uuc3RvcCgpXG4gIH1cbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLmFkZEF1ZGlvQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5BdWRpb0NvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgIHRoaXMuY29udGV4dC5yZXN1bWUoKVxuICB9XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1N5c3RlbVxuIiwiY29uc3QgQXVkaW9Db21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYXVkaW9OYW1lOiAnbm9uZScsXG4gICAgdm9sdW1lOiAxXG4gIH0sIHBhcmFtcylcblxuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLnNvdXJjZSA9IG51bGxcbiAgdGhpcy5hdWRpb05hbWUgPSBjb25maWcuYXVkaW9OYW1lXG4gIHRoaXMudm9sdW1lID0gY29uZmlnLnZvbHVtZVxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2Vcbn1cblxuQXVkaW9Db21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudE5hbWUgPSAnYXVkaW8nXG5cbkF1ZGlvQ29tcG9uZW50LnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKGF1ZGlvTmFtZSkge1xuICBpZiAoYXVkaW9OYW1lKSB7XG4gICAgdGhpcy5hdWRpb05hbWUgPSBhdWRpb05hbWVcbiAgfVxuICB0aGlzLnN5c3RlbS5wbGF5KHRoaXMpXG59XG5cbkF1ZGlvQ29tcG9uZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN5c3RlbS5zdG9wKHRoaXMpXG59XG5cbkF1ZGlvQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN5c3RlbS5zdG9wKHRoaXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSW1hZ2UgKi9cblxuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmltYWdlc0NhY2hlID0ge31cbiAgdGhpcy5hdWRpb0NhY2hlID0ge31cbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICB0aGlzLmVycm9ycyA9IDBcbiAgdGhpcy5zdWNjZXNzID0gMFxuICB0aGlzLnF1ZXVlZCA9IDBcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMucXVldWVkKytcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgIHRoaXMuaW1hZ2VzQ2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHRoaXMub25TdWNjZXNzKGNvbmZpZylcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycysrXG4gICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5Mb2FkZXIucHJvdG90eXBlLmxvYWRBdWRpbyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5xdWV1ZWQrK1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgICAgdGhpcy5hdWRpb0NhY2hlW2NvbmZpZy5uYW1lXSA9IGJ1ZmZlclxuICAgICAgICB0aGlzLm9uU3VjY2Vzcyhjb25maWcpXG4gICAgICAgIHJlc29sdmUoYnVmZmVyKVxuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLmVycm9ycysrXG4gICAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICB9KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0pXG59XG5cbkxvYWRlci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25TdWNjZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vblByb2dyZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnF1ZXVlZCA+IDApIHtcbiAgICBpZiAoIXRoaXMuc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSB0cnVlXG4gICAgICB0aGlzLm9uU3RhcnQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5xdWV1ZWQgPT09IHRoaXMuc3VjY2VzcyArIHRoaXMuZXJyb3JzKSB7XG4gICAgICB0aGlzLnF1ZXVlZCA9IDBcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDBcbiAgICAgIHRoaXMuZXJyb3JzID0gMFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIH1cbiAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKCh0aGlzLnN1Y2Nlc3MgKyB0aGlzLmVycm9ycykgLyB0aGlzLnF1ZXVlZCAqIDEwMClcbiAgICBpZiAoaXNOYU4ocHJvZ3Jlc3MpKSB7XG4gICAgICBwcm9ncmVzcyA9IDEwMFxuICAgIH1cbiAgICB0aGlzLm9uUHJvZ3Jlc3MocHJvZ3Jlc3MpXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW5naW5lID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmxvYWRlciA9IG5ldyBIYXJtb255LkxvYWRlcigpXG4gIHRoaXMubG9vcCA9IG5ldyBIYXJtb255Lkxvb3BTeXN0ZW0oKVxuICB0aGlzLnNjZW5lID0gbmV3IEhhcm1vbnkuU2NlbmVTeXN0ZW0oKVxuICB0aGlzLnJlbmRlciA9IG5ldyBIYXJtb255LlJlbmRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuYXVkaW8gPSBuZXcgSGFybW9ueS5BdWRpb1N5c3RlbSgpXG4gIHRoaXMuZW50aXRpZXMgPSBuZXcgSGFybW9ueS5FbnRpdHlTeXN0ZW0oKVxuICB0aGlzLmtleXMgPSBuZXcgSGFybW9ueS5LZXlTeXN0ZW0oKVxuICB0aGlzLnBoeXNpY3MgPSBuZXcgSGFybW9ueS5QaHlzaWNzU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5wb2ludGVycyA9IG5ldyBIYXJtb255LlBvaW50ZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBIYXJtb255LlRyYW5zZm9ybVN5c3RlbSgpXG4gIHRoaXMuc2NyaXB0cyA9IG5ldyBIYXJtb255LlNjcmlwdFN5c3RlbSgpXG4gIHRoaXMuc3RhdGUgPSBuZXcgSGFybW9ueS5TdGF0ZVN5c3RlbSgpXG4gIHRoaXMuaGVscGVycyA9IG5ldyBIYXJtb255LkhlbHBlcnMoKVxuXG4gIHRoaXMubG9vcC5vblN0ZXAgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2NlbmUuY3VycmVudCkge1xuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdFByZWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlci5sb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnByZWxvYWQodGhpcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRlci51cGRhdGUoKVxuICAgICAgICBpZiAodGhpcy5sb2FkZXIuY29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlci5jYWNoZSA9IHRoaXMubG9hZGVyLmltYWdlc0NhY2hlXG4gICAgICAgICAgdGhpcy5hdWRpby5jYWNoZSA9IHRoaXMubG9hZGVyLmF1ZGlvQ2FjaGVcbiAgICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RDcmVhdGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0Q3JlYXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdFVwZGF0ZSgpXG4gICAgICAgIHRoaXMuc2NlbmUuY3VycmVudC5jcmVhdGUodGhpcylcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0RHJhdygpXG4gICAgICAgIHRoaXMua2V5cy51cGRhdGUoKVxuICAgICAgICB0aGlzLnBvaW50ZXJzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuYXVkaW8udXBkYXRlKClcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0udXBkYXRlKClcbiAgICAgICAgdGhpcy5waHlzaWNzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuZW50aXRpZXMudXBkYXRlKClcbiAgICAgICAgdGhpcy5zY3JpcHRzLnVwZGF0ZSh0aGlzKVxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZSh0aGlzKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQudXBkYXRlKHRoaXMpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0RHJhdykge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RVcGRhdGUoKVxuICAgICAgICB0aGlzLnJlbmRlci5kcmF3KClcbiAgICAgICAgLy8gdGhpcy5waHlzaWNzLmRyYXdEZWJ1Z0RhdGEoKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQuZHJhdyh0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zY2VuZS5tdXN0U3dpdGNoKSB7XG4gICAgICB0aGlzLmVudGl0aWVzLmRlc3Ryb3koKVxuICAgICAgdGhpcy5wb2ludGVycy5kZXN0cm95KClcbiAgICAgIHRoaXMua2V5cy5kZXN0cm95KClcbiAgICAgIHRoaXMuc2NlbmUuY3VycmVudCA9IHRoaXMuc2NlbmUucmVxdWVzdGVkXG4gICAgICB0aGlzLnNjZW5lLnJlcXVlc3RQcmVsb2FkKClcbiAgICB9XG4gIH1cbiAgdGhpcy5sb29wLnJ1bigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZ2luZVxuIiwiY29uc3QgRW50aXR5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICB0YWdzOiBbXVxuICB9LCBwYXJhbXMpXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLnRhZ3MgPSBjb25maWcudGFnc1xufVxuXG5FbnRpdHkucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVudGl0eSA9IHRoaXNcbiAgdGhpc1tjb21wb25lbnQuY29tcG9uZW50TmFtZV0gPSBjb21wb25lbnRcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxufVxuXG5FbnRpdHkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICBjb21wb25lbnQuZGVzdHJveSgpXG4gIH0pXG4gIHRoaXMubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbkVudGl0eS5wcm90b3R5cGUuaGFzVGFnID0gZnVuY3Rpb24gKHRhZykge1xuICByZXR1cm4gdGhpcy50YWdzLmluY2x1ZGVzKHRhZylcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5XG4iLCJjb25zdCBIZWxwZXJzID0gZnVuY3Rpb24gKCkge31cblxuSGVscGVycy5wcm90b3R5cGUuY3JlYXRlR3JpZCA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IGdyaWQgPSBuZXcgQXJyYXkoY29scylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgZ3JpZFtpXSA9IG5ldyBBcnJheShyb3dzKVxuICB9XG4gIHJldHVybiBncmlkXG59XG5cbkhlbHBlcnMucHJvdG90eXBlLmdldFJhbmRvbUludCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSXRlbXMgPSBmdW5jdGlvbiAoYXJyYXksIHF1YW50aXR5KSB7XG4gIGNvbnN0IHJhbmRvbUl0ZW1zID0gW11cbiAgZm9yIChsZXQgaSA9IHF1YW50aXR5OyBpLS07KSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB0aGlzLmdldFJhbmRvbUludCgwLCBhcnJheS5sZW5ndGggLSAxKVxuICAgIHJhbmRvbUl0ZW1zLnB1c2goYXJyYXlbcmFuZG9tSW5kZXhdKVxuICAgIGFycmF5LnNwbGljZShyYW5kb21JbmRleCwgMSlcbiAgfVxuICByZXR1cm4gcmFuZG9tSXRlbXNcbn1cblxuSGVscGVycy5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpXG4gICAgY29uc3QgeCA9IGFycmF5W2ldXG4gICAgYXJyYXlbaV0gPSBhcnJheVtqXVxuICAgIGFycmF5W2pdID0geFxuICB9XG4gIHJldHVybiBhcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxwZXJzXG4iLCJjb25zdCBLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRoaXMua2V5ID0ga2V5XG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBLZXlTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMuZGVsdGEgPSAwXG4gIHRoaXMubm93ID0gMFxuICB0aGlzLnRoZW4gPSAwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpLCBmYWxzZSlcbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtldmVudC5rZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbZXZlbnQua2V5XS5ob2xkID0gdHJ1ZVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSBmYWxzZVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0T3JTZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG5ldyBIYXJtb255LktleShrZXkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQoa2V5KVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgIHRoaXMuZnJhbWUrK1xuICAgIHRoaXMubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuXG4gICAgdGhpcy50aGVuID0gdGhpcy5ub3dcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChrZXkuaG9sZCkge1xuICAgICAgICBrZXkuaG9sZFRpbWUgKz0gdGhpcy5kZWx0YVxuICAgICAgICBrZXkuZW5kRnJhbWUgPSAtMVxuICAgICAgICBpZiAoa2V5LnN0YXJ0RnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleS5ob2xkVGltZSA9IDBcbiAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICBpZiAoa2V5LmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgIGtleS5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAga2V5LnN0YXJ0ID0gKGtleS5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAga2V5LmVuZCA9IChrZXkuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgfVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleVN5c3RlbVxuIiwiY29uc3QgTG9vcFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY2N1bXVsYXRvciA9IDBcbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5sYXN0VGltZSA9IDBcbiAgdGhpcy5sYXN0U3RlcCA9IDBcbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLmZyYW1lID0gMFxuICB0aGlzLnBhdXNlZCA9IGZhbHNlXG4gIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gdGhpcy5mcHNcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUuY29udGludWUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGF1c2VkID0gZmFsc2Vcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gIHRpbWVzdGFtcCA9IHRpbWVzdGFtcCB8fCAwXG4gIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gdGhpcy5mcHNcbiAgdGhpcy5hY2N1bXVsYXRvciArPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lXG4gIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXBcbiAgd2hpbGUgKCF0aGlzLnBhdXNlZCAmJiB0aGlzLmFjY3VtdWxhdG9yID49IHRoaXMudGltZXN0ZXApIHtcbiAgICB0aGlzLnN0ZXAoKVxuICAgIHRoaXMuZGVsdGEgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RTdGVwXG4gICAgdGhpcy5sYXN0U3RlcCA9IHRpbWVzdGFtcFxuICAgIHRoaXMuYWNjdW11bGF0b3IgLT0gdGhpcy50aW1lc3RlcFxuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW4uYmluZCh0aGlzKSlcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mcmFtZSsrXG4gIHRoaXMub25TdGVwKClcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUub25TdGVwID0gZnVuY3Rpb24gKCkge31cblxuZXhwb3J0IGRlZmF1bHQgTG9vcFN5c3RlbVxuIiwiY29uc3QgUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZVxuICB0aGlzLmhvbGQgPSBmYWxzZVxuICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5lbmQgPSBmYWxzZVxuICB0aGlzLmhvbGRUaW1lID0gMFxuICB0aGlzLnN0YXJ0RnJhbWUgPSAwXG4gIHRoaXMuZW5kRnJhbWUgPSAwXG4gIHRoaXMuaWQgPSAwXG4gIHRoaXMudHlwZSA9IG51bGxcbiAgdGhpcy5zdGFydFggPSAwXG4gIHRoaXMuc3RhcnRZID0gMFxuICB0aGlzLnggPSAwXG4gIHRoaXMueSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgUG9pbnRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5lbmFibGVQb2ludGVycygpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldE9yU2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW3BvaW50ZXJdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbcG9pbnRlcl0gPSBuZXcgSGFybW9ueS5Qb2ludGVyKHBvaW50ZXIpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVbcG9pbnRlcl1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQocG9pbnRlcilcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZW5hYmxlUG9pbnRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FudmFzLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gIHRoaXMuY2FudmFzLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRQb2ludGVyQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5pZCA9PT0gaWQpIHtcbiAgICAgICAgb3V0cHV0ID0gcG9pbnRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldEluYWN0aXZlUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG91dHB1dCA9IGZhbHNlXG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKHBvaW50ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlckRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpIHx8IHRoaXMuZ2V0SW5hY3RpdmVQb2ludGVyKClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IHRydWVcbiAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgcG9pbnRlci50eXBlID0gZXZlbnQucG9pbnRlclR5cGUgLy8gJ21vdXNlJywgJ3BlbicsICd0b3VjaCdcbiAgICBwb2ludGVyLmhvbGQgPSB0cnVlXG4gICAgcG9pbnRlci5zdGFydFggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gICAgcG9pbnRlci54ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci55ID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IGZhbHNlXG4gICAgcG9pbnRlci5ob2xkID0gZmFsc2VcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIHJldHVybiBmYWxzZVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICB0aGlzLmZyYW1lKytcbiAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlblxuICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgICBpZiAocG9pbnRlci5ob2xkKSB7XG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKHBvaW50ZXIuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSA9IDBcbiAgICAgICAgICBwb2ludGVyLnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICAgIGlmIChwb2ludGVyLmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRlci5zdGFydCA9IChwb2ludGVyLnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICAgIHBvaW50ZXIuZW5kID0gKHBvaW50ZXIuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyU3lzdGVtXG4iLCJjb25zdCBTcHJpdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGltYWdlOiBudWxsLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIHNvdXJjZVg6IDAsXG4gICAgc291cmNlWTogMCxcbiAgICBzb3VyY2VXaWR0aDogMCxcbiAgICBzb3VyY2VIZWlnaHQ6IDAsXG4gICAgYW5jaG9yWDogMC41LFxuICAgIGFuY2hvclk6IDAuNSxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH0sIHBhcmFtcylcblxuICB0aGlzLmVudGl0eSA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuaW1hZ2UgPSBjb25maWcuaW1hZ2VcbiAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aFxuICB0aGlzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHRcbiAgdGhpcy5zb3VyY2VYID0gY29uZmlnLnNvdXJjZVhcbiAgdGhpcy5zb3VyY2VZID0gY29uZmlnLnNvdXJjZVlcbiAgdGhpcy5zb3VyY2VXaWR0aCA9IGNvbmZpZy5zb3VyY2VXaWR0aFxuICB0aGlzLnNvdXJjZUhlaWdodCA9IGNvbmZpZy5zb3VyY2VIZWlnaHRcbiAgdGhpcy5hbmNob3JYID0gY29uZmlnLmFuY2hvclhcbiAgdGhpcy5hbmNob3JZID0gY29uZmlnLmFuY2hvcllcbiAgdGhpcy52aXNpYmxlID0gY29uZmlnLnZpc2libGVcbn1cblxuU3ByaXRlQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnROYW1lID0gJ3Nwcml0ZSdcblxuU3ByaXRlQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcHJpdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255IEltYWdlICovXG5cbmNvbnN0IFJlbmRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBjb25maWcudXJsXG4gIH0pXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgcmV0dXJuIHRoaXMuY2FjaGVbaW1hZ2VdXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhcigpXG4gIC8vIHRoaXMuY29udGV4dC5zYXZlKClcblxuICAvLyB0cmFuc2xhdGUgdG8gY2FtZXJhIGNlbnRlclxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgICh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgICh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKVxuICAvLyApXG5cbiAgLy8gcm90YXRlXG4gIC8vIHRoaXMuY29udGV4dC5yb3RhdGUodGhpcy5jYW1lcmEuYW5nbGUpXG5cbiAgLy8gc2NhbGVcbiAgLy8gdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuY2FtZXJhLnpvb20sIHRoaXMuY2FtZXJhLnpvb20pXG5cbiAgLy8gdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCdcbiAgLy8gdGhpcy5jYW52YXMuY2lyY2xlKDAsIDAsIDEwKVxuXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgLSh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgIC0odGhpcy5jYW1lcmEuaGVpZ2h0IC8gMilcbiAgLy8gKVxuXG4gIC8vIHRyYW5zbGF0ZVxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi54LFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi55XG4gIC8vIClcblxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tcG9uZW50LnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKVxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkudHJhbnNmb3JtLnggKyBjb21wb25lbnQud2lkdGggKiAwLjUgKiBjb21wb25lbnQuZW50aXR5LnRyYW5zZm9ybS5zY2FsZSAtIGNvbXBvbmVudC53aWR0aCAqIGNvbXBvbmVudC5hbmNob3JYICogY29tcG9uZW50LmVudGl0eS50cmFuc2Zvcm0uc2NhbGUsXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS50cmFuc2Zvcm0ueSArIGNvbXBvbmVudC5oZWlnaHQgKiAwLjUgKiBjb21wb25lbnQuZW50aXR5LnRyYW5zZm9ybS5zY2FsZSAtIGNvbXBvbmVudC5oZWlnaHQgKiBjb21wb25lbnQuYW5jaG9yWSAqIGNvbXBvbmVudC5lbnRpdHkudHJhbnNmb3JtLnNjYWxlXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShjb21wb25lbnQuZW50aXR5LnRyYW5zZm9ybS5hbmdsZSlcbiAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkudHJhbnNmb3JtLnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkudHJhbnNmb3JtLnNjYWxlXG4gICAgICAgIClcblxuICAgICAgICBpZiAoY29tcG9uZW50LnNvdXJjZVdpZHRoID09PSAwKSB7XG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVdpZHRoID0gY29tcG9uZW50LmltYWdlLndpZHRoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcG9uZW50LnNvdXJjZUhlaWdodCA9PT0gMCkge1xuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VIZWlnaHQgPSBjb21wb25lbnQuaW1hZ2UuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgIGNvbXBvbmVudC5pbWFnZSxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlWCxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlWSxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlV2lkdGgsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZUhlaWdodCxcbiAgICAgICAgICBjb21wb25lbnQud2lkdGggKiAtMC41LCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC5oZWlnaHQgKiAtMC41LCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC53aWR0aCwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQuaGVpZ2h0IC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGV4dC5yZXN0b3JlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5hZGRTcHJpdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNwcml0ZUNvbXBvbmVudChjb25maWcpXG4gIHRoaXMuY29tcG9uZW50cy51bnNoaWZ0KGNvbXBvbmVudClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5maWxsVGV4dChjb25maWcudGV4dCwgY29uZmlnLngsIGNvbmZpZy55KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmNpcmNsZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gIHRoaXMuY29udGV4dC5hcmMoY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcucmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUubGluZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gIHRoaXMuY29udGV4dC5tb3ZlVG8oY29uZmlnLmF4LCBjb25maWcuYXkpXG4gIHRoaXMuY29udGV4dC5saW5lVG8oY29uZmlnLmJ4LCBjb25maWcuYnkpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLnJlY3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5yZWN0KGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyU3lzdGVtXG4iLCJjb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcHJlbG9hZDogKCkgPT4ge30sXG4gICAgY3JlYXRlOiAoKSA9PiB7fSxcbiAgICB1cGRhdGU6ICgpID0+IHt9LFxuICAgIGRyYXc6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuU2NlbmUucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMucHJlbG9hZChlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuY3JlYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy51cGRhdGUoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5kcmF3KGVuZ2luZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVcbiIsImNvbnN0IFNjZW5lU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIHRoaXMucmVxdWVzdGVkID0gbnVsbFxuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzY2VuZVxuICB0aGlzLnJlcXVlc3RTd2l0Y2goKVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFByZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSB0cnVlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdENyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0VXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gdHJ1ZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3REcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IHRydWVcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RTd2l0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVN5c3RlbVxuIiwiY29uc3QgU2NyaXB0Q29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3RhcnQgPSB0cnVlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubWV0aG9kcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHN0YXJ0OiAoKSA9PiB7fSxcbiAgICB1cGRhdGU6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuU2NyaXB0Q29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnROYW1lID0gJ3NjcmlwdCdcblxuU2NyaXB0Q29tcG9uZW50LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgdGhpcy5tdXN0U3RhcnQgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSB0cnVlXG4gIHJldHVybiB0aGlzLm1ldGhvZHMuc3RhcnQoZW5naW5lKVxufVxuXG5TY3JpcHRDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy51cGRhdGUoZW5naW5lKVxufVxuXG5TY3JpcHRDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdENvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgU2NyaXB0U3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxufVxuXG5TY3JpcHRTeXN0ZW0ucHJvdG90eXBlLmFkZFNjcmlwdENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuU2NyaXB0Q29tcG9uZW50KGNvbmZpZylcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cblNjcmlwdFN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN0YXJ0KSB7XG4gICAgICBjb21wb25lbnQuc3RhcnQoZW5naW5lKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0VXBkYXRlKSB7XG4gICAgICBjb21wb25lbnQudXBkYXRlKGVuZ2luZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0U3lzdGVtXG4iLCJjb25zdCBTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG4gIHRoaXMucmVxdWVzdGVkID0gcGFyYW1zLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB0aGlzLnN0YXRlcyA9IHBhcmFtcy5zdGF0ZXNcbn1cblxuU3RhdGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudE5hbWUgPSAnc3RhdGUnXG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHN0YXRlXG59XG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgU3RhdGVTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS5hZGRTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuU3RhdGVDb21wb25lbnQoY29uZmlnKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGlmIChjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmV4aXQoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGNvbXBvbmVudC5jdXJyZW50ID0gY29tcG9uZW50LnJlcXVlc3RlZFxuICAgICAgaWYgKGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC5tdXN0U3dpdGNoID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5jdXJyZW50ICYmIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLnVwZGF0ZSkge1xuICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0udXBkYXRlKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVTeXN0ZW1cbiIsImNvbnN0IFRyYW5zZm9ybUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgeDogNTAsXG4gICAgeTogNTAsXG4gICAgYW5nbGU6IDAsXG4gICAgc2NhbGU6IDFcbiAgfSwgcGFyYW1zKVxuXG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy54ID0gY29uZmlnLnhcbiAgdGhpcy55ID0gY29uZmlnLnlcbiAgdGhpcy5hbmdsZSA9IGNvbmZpZy5hbmdsZVxuICB0aGlzLnNjYWxlID0gY29uZmlnLnNjYWxlXG59XG5cblRyYW5zZm9ybUNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50TmFtZSA9ICd0cmFuc2Zvcm0nXG5cblRyYW5zZm9ybUNvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBUcmFuc2Zvcm1TeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cblRyYW5zZm9ybVN5c3RlbS5wcm90b3R5cGUuYWRkVHJhbnNmb3JtQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5UcmFuc2Zvcm1Db21wb25lbnQoY29uZmlnKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuVHJhbnNmb3JtU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm1TeXN0ZW1cbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEVudGl0eVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IFtdXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBlbnRpdHkgPSBuZXcgSGFybW9ueS5FbnRpdHkoY29uZmlnKVxuICB0aGlzLmNhY2hlLnB1c2goZW50aXR5KVxuICByZXR1cm4gZW50aXR5XG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmNhY2hlW2ldXG4gICAgaWYgKGVudGl0eS5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jYWNoZS5zcGxpY2UoaSwgMSlcbiAgICB9XG4gIH1cbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmNhY2hlW2ldXG4gICAgZW50aXR5LmRlc3Ryb3koKVxuICB9XG4gIHRoaXMuY2FjaGUgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlTeXN0ZW1cbiIsIi8qIGdsb2JhbCBCb3gyRCBIYXJtb255ICovXG5cbmNvbnN0IFBoeXNpY3NTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIGNvbnN0IEIyV29ybGQgPSBCb3gyRC5EeW5hbWljcy5iMldvcmxkXG4gIGNvbnN0IEIyVmVjMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyVmVjMlxuICBjb25zdCBCMkRlYnVnRHJhdyA9IEJveDJELkR5bmFtaWNzLmIyRGVidWdEcmF3XG4gIGNvbnN0IEIyQ29udGFjdExpc3RlbmVyID0gQm94MkQuRHluYW1pY3MuYjJDb250YWN0TGlzdGVuZXJcblxuICB0aGlzLndvcmxkID0gbmV3IEIyV29ybGQobmV3IEIyVmVjMigwLCAwKSwgdHJ1ZSlcbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLnNjYWxlID0gMTAwXG4gIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuY29udGFjdHMgPSBuZXcgQjJDb250YWN0TGlzdGVuZXIoKVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWN0c1xuXG4gIHRoaXMud29ybGQuU2V0Q29udGFjdExpc3RlbmVyKHRoaXMuY29udGFjdHMpXG5cbiAgdGhpcy5jb250YWN0cy5CZWdpbkNvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGNvbXBvbmVudEEub25Db250YWN0QmVnaW4oZW50aXR5QSwgZW50aXR5QilcbiAgICBjb21wb25lbnRCLm9uQ29udGFjdEJlZ2luKGVudGl0eUIsIGVudGl0eUEpXG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLkVuZENvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGNvbXBvbmVudEEub25Db250YWN0RW5kKGVudGl0eUEsIGVudGl0eUIpXG4gICAgY29tcG9uZW50Qi5vbkNvbnRhY3RFbmQoZW50aXR5QiwgZW50aXR5QSlcbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuUHJlU29sdmUgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGNvbXBvbmVudEEub25Db250YWN0UHJlU29sdmUoZW50aXR5QSwgZW50aXR5QilcbiAgICBjb21wb25lbnRCLm9uQ29udGFjdFByZVNvbHZlKGVudGl0eUIsIGVudGl0eUEpXG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLlBvc3RTb2x2ZSA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgY29tcG9uZW50QS5vbkNvbnRhY3RQb3N0U29sdmUoZW50aXR5QSwgZW50aXR5QilcbiAgICBjb21wb25lbnRCLm9uQ29udGFjdFBvc3RTb2x2ZShlbnRpdHlCLCBlbnRpdHlBKVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlYnVnXG5cbiAgY29uc3QgZGVidWdEcmF3ID0gbmV3IEIyRGVidWdEcmF3KHRoaXMuY29udGV4dClcbiAgZGVidWdEcmF3LlNldFNwcml0ZShjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSlcbiAgZGVidWdEcmF3LlNldERyYXdTY2FsZSh0aGlzLnNjYWxlKVxuICBkZWJ1Z0RyYXcuU2V0RmlsbEFscGhhKDAuNSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGbGFncyhCMkRlYnVnRHJhdy5lX3NoYXBlQml0KVxuICBkZWJ1Z0RyYXcuQXBwZW5kRmxhZ3MoQjJEZWJ1Z0RyYXcuZV9qb2ludEJpdClcbiAgdGhpcy53b3JsZC5TZXREZWJ1Z0RyYXcoZGVidWdEcmF3KVxuICB0aGlzLndvcmxkLm1fZGVidWdEcmF3Lm1fc3ByaXRlLmdyYXBoaWNzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnNldEdyYXZpdHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMud29ybGQuU2V0R3Jhdml0eShjb25maWcpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRyYXdEZWJ1Z0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud29ybGQuRHJhd0RlYnVnRGF0YSgpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlBoeXNpY3NDb21wb25lbnQoY29uZmlnLCB0aGlzKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndvcmxkLlN0ZXAoMSAvIHRoaXMuZnBzLCA4LCAzKVxuICB0aGlzLndvcmxkLkNsZWFyRm9yY2VzKClcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY29tcG9uZW50LmdldFBvc2l0aW9uKClcbiAgICAgIGNvbXBvbmVudC5lbnRpdHkudHJhbnNmb3JtLnggPSBwb3NpdGlvbi54XG4gICAgICBjb21wb25lbnQuZW50aXR5LnRyYW5zZm9ybS55ID0gcG9zaXRpb24ueVxuICAgICAgY29tcG9uZW50LmVudGl0eS50cmFuc2Zvcm0uYW5nbGUgPSBjb21wb25lbnQuZ2V0QW5nbGUoKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzU3lzdGVtXG4iLCIvKiBnbG9iYWwgQm94MkQgKi9cblxuY29uc3QgUGh5c2ljc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgICB0eXBlOiAnZHluYW1pYycsXG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGFsbG93U2xlZXA6IHRydWUsXG4gICAgYXdha2U6IHRydWUsXG4gICAgYnVsbGV0OiBmYWxzZSxcbiAgICBmaXhlZFJvdGF0aW9uOiBmYWxzZSxcbiAgICBhbmdsZTogMCxcbiAgICBhbmd1bGFyRGFtcGluZzogMCxcbiAgICBhbmd1bGFyVmVsb2NpdHk6IDAsXG4gICAgbGluZWFyRGFtcGluZzogMCxcbiAgICBsaW5lYXJWZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXG4gICAgdXNlckRhdGE6IHt9XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG5cbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmJvZHkgPSBudWxsXG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuZml4dHVyZXMgPSBbXVxuICB0aGlzLnR5cGUgPSBjb25maWcudHlwZVxuXG4gIGNvbnN0IEIyQm9keURlZiA9IEJveDJELkR5bmFtaWNzLmIyQm9keURlZlxuICBjb25zdCBCMkJvZHkgPSBCb3gyRC5EeW5hbWljcy5iMkJvZHlcblxuICBjb25zdCBib2R5RGVmID0gbmV3IEIyQm9keURlZigpXG4gIGJvZHlEZWYucG9zaXRpb24ueCA9IGNvbmZpZy54IC8gdGhpcy5zeXN0ZW0uc2NhbGVcbiAgYm9keURlZi5wb3NpdGlvbi55ID0gY29uZmlnLnkgLyB0aGlzLnN5c3RlbS5zY2FsZVxuICBib2R5RGVmLmFjdGl2ZSA9IGNvbmZpZy5hY3RpdmVcbiAgYm9keURlZi5hbGxvd1NsZWVwID0gY29uZmlnLmFsbG93U2xlZXBcbiAgYm9keURlZi5hd2FrZSA9IGNvbmZpZy5hd2FrZVxuICBib2R5RGVmLmJ1bGxldCA9IGNvbmZpZy5idWxsZXRcbiAgYm9keURlZi5maXhlZFJvdGF0aW9uID0gY29uZmlnLmZpeGVkUm90YXRpb25cbiAgYm9keURlZi5hbmdsZSA9IGNvbmZpZy5hbmdsZVxuICBib2R5RGVmLmFuZ3VsYXJEYW1waW5nID0gY29uZmlnLmFuZ3VsYXJEYW1waW5nXG4gIGJvZHlEZWYuYW5ndWxhclZlbG9jaXR5ID0gY29uZmlnLmFuZ3VsYXJWZWxvY2l0eVxuICBib2R5RGVmLmxpbmVhckRhbXBpbmcgPSBjb25maWcubGluZWFyRGFtcGluZ1xuICBib2R5RGVmLmxpbmVhclZlbG9jaXR5ID0gY29uZmlnLmxpbmVhclZlbG9jaXR5XG4gIGJvZHlEZWYudXNlckRhdGEgPSBjb25maWcudXNlckRhdGFcblxuICBpZiAodGhpcy50eXBlID09PSAnc3RhdGljJykge1xuICAgIGJvZHlEZWYudHlwZSA9IEIyQm9keS5iMl9zdGF0aWNCb2R5XG4gIH1cblxuICBpZiAodGhpcy50eXBlID09PSAnZHluYW1pYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfZHluYW1pY0JvZHlcbiAgfVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICdraW5lbWF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2tpbmVtYXRpY0JvZHlcbiAgfVxuXG4gIHRoaXMuYm9keSA9IHRoaXMuc3lzdGVtLndvcmxkLkNyZWF0ZUJvZHkoYm9keURlZilcbiAgdGhpcy5ib2R5LmFjdGl2ZSA9IHRydWVcbiAgdGhpcy5ib2R5LmNvbXBvbmVudCA9IHRoaXNcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50TmFtZSA9ICdwaHlzaWNzJ1xuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5zZXRMaW5lYXJWZWxvY2l0eSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5ib2R5LlNldEF3YWtlKHRydWUpXG4gIHRoaXMuYm9keS5TZXRMaW5lYXJWZWxvY2l0eSh7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnN5c3RlbS5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZml4dHVyZXMuZm9yRWFjaCgoZml4dHVyZSkgPT4ge1xuICAgIHRoaXMuYm9keS5EZXN0cm95Rml4dHVyZShmaXh0dXJlKVxuICB9KVxuICB0aGlzLnN5c3RlbS53b3JsZC5EZXN0cm95Qm9keSh0aGlzLmJvZHkpXG4gIHRoaXMubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuYm9keS5HZXRQb3NpdGlvbigpXG4gIHJldHVybiB7XG4gICAgeDogcG9zaXRpb24ueCAqIHRoaXMuc3lzdGVtLnNjYWxlLFxuICAgIHk6IHBvc2l0aW9uLnkgKiB0aGlzLnN5c3RlbS5zY2FsZVxuICB9XG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ib2R5LkdldEFuZ2xlKClcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuYm9keS5TZXRQb3NpdGlvbih7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnN5c3RlbS5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmFwcGx5Rm9yY2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuYm9keS5BcHBseUZvcmNlKGNvbmZpZywgdGhpcy5ib2R5LkdldFdvcmxkQ2VudGVyKCkpXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmdldEZpeHR1cmVEZWYgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IEIyRml4dHVyZURlZiA9IEJveDJELkR5bmFtaWNzLmIyRml4dHVyZURlZlxuICBjb25zdCBmaXhEZWYgPSBuZXcgQjJGaXh0dXJlRGVmKClcbiAgZml4RGVmLmRlbnNpdHkgPSBjb25maWcuZGVuc2l0eVxuICBmaXhEZWYuZnJpY3Rpb24gPSBjb25maWcuZnJpY3Rpb25cbiAgZml4RGVmLnJlc3RpdHV0aW9uID0gY29uZmlnLnJlc3RpdHV0aW9uXG4gIGZpeERlZi5pc1NlbnNvciA9IGNvbmZpZy5pc1NlbnNvclxuICByZXR1cm4gZml4RGVmXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmFkZENpcmNsZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHJhZGl1czogMjUsXG4gICAgZGVuc2l0eTogMSxcbiAgICBmcmljdGlvbjogMC41LFxuICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgaXNTZW5zb3I6IGZhbHNlXG4gIH1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuICBjb25zdCBmaXh0dXJlRGVmaW5pdGlvbiA9IHRoaXMuZ2V0Rml4dHVyZURlZihjb25maWcpXG4gIGNvbnN0IEIyQ2lyY2xlU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyQ2lyY2xlU2hhcGVcbiAgY29uc3QgZml4dHVyZURlZiA9IGZpeHR1cmVEZWZpbml0aW9uXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJDaXJjbGVTaGFwZShjb25maWcucmFkaXVzIC8gdGhpcy5zeXN0ZW0uc2NhbGUpXG4gIGZpeHR1cmVEZWYuc2hhcGUubV9wID0ge1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zeXN0ZW0uc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnN5c3RlbS5zY2FsZVxuICB9XG4gIGNvbnN0IGZpeHR1cmUgPSB0aGlzLmJvZHkuQ3JlYXRlRml4dHVyZShmaXh0dXJlRGVmKVxuICB0aGlzLmZpeHR1cmVzLnB1c2goZml4dHVyZSlcbiAgcmV0dXJuIGZpeHR1cmVcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUub25Db250YWN0QmVnaW4gPSBmdW5jdGlvbiAobWUsIG90aGVyKSB7fVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5vbkNvbnRhY3RFbmQgPSBmdW5jdGlvbiAobWUsIG90aGVyKSB7fVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5vbkNvbnRhY3RQcmVTb2x2ZSA9IGZ1bmN0aW9uIChtZSwgb3RoZXIpIHt9XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLm9uQ29udGFjdFBvc3RTb2x2ZSA9IGZ1bmN0aW9uIChtZSwgb3RoZXIpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3NDb21wb25lbnRcbiIsImltcG9ydCBBdWRpb1N5c3RlbSBmcm9tICcuL2F1ZGlvLXN5c3RlbS9hdWRpby1zeXN0ZW0nXG5pbXBvcnQgQXVkaW9Db21wb25lbnQgZnJvbSAnLi9hdWRpby1zeXN0ZW0vYXVkaW8tY29tcG9uZW50J1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlci9sb2FkZXInXG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lL2VuZ2luZSdcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHktc3lzdGVtL2VudGl0eSdcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycy9oZWxwZXJzJ1xuaW1wb3J0IEtleSBmcm9tICcuL2tleS1zeXN0ZW0va2V5J1xuaW1wb3J0IEtleVN5c3RlbSBmcm9tICcuL2tleS1zeXN0ZW0va2V5LXN5c3RlbSdcbmltcG9ydCBMb29wU3lzdGVtIGZyb20gJy4vbG9vcC1zeXN0ZW0vbG9vcC1zeXN0ZW0nXG5pbXBvcnQgUG9pbnRlciBmcm9tICcuL3BvaW50ZXItc3lzdGVtL3BvaW50ZXInXG5pbXBvcnQgUG9pbnRlclN5c3RlbSBmcm9tICcuL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtJ1xuaW1wb3J0IFNwcml0ZUNvbXBvbmVudCBmcm9tICcuL3JlbmRlci1zeXN0ZW0vc3ByaXRlLWNvbXBvbmVudCdcbmltcG9ydCBSZW5kZXJTeXN0ZW0gZnJvbSAnLi9yZW5kZXItc3lzdGVtL3JlbmRlci1zeXN0ZW0nXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZS1zeXN0ZW0vc2NlbmUnXG5pbXBvcnQgU2NlbmVTeXN0ZW0gZnJvbSAnLi9zY2VuZS1zeXN0ZW0vc2NlbmUtc3lzdGVtJ1xuaW1wb3J0IFNjcmlwdENvbXBvbmVudCBmcm9tICcuL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LWNvbXBvbmVudCdcbmltcG9ydCBTY3JpcHRTeXN0ZW0gZnJvbSAnLi9zY3JpcHQtc3lzdGVtL3NjcmlwdC1zeXN0ZW0nXG5pbXBvcnQgU3RhdGVDb21wb25lbnQgZnJvbSAnLi9zdGF0ZS1zeXN0ZW0vc3RhdGUtY29tcG9uZW50J1xuaW1wb3J0IFN0YXRlU3lzdGVtIGZyb20gJy4vc3RhdGUtc3lzdGVtL3N0YXRlLXN5c3RlbSdcbmltcG9ydCBUcmFuc2Zvcm1Db21wb25lbnQgZnJvbSAnLi90cmFuc2Zvcm0tc3lzdGVtL3RyYW5zZm9ybS1jb21wb25lbnQnXG5pbXBvcnQgVHJhbnNmb3JtU3lzdGVtIGZyb20gJy4vdHJhbnNmb3JtLXN5c3RlbS90cmFuc2Zvcm0tc3lzdGVtJ1xuaW1wb3J0IEVudGl0eVN5c3RlbSBmcm9tICcuL2VudGl0eS1zeXN0ZW0vZW50aXR5LXN5c3RlbSdcbmltcG9ydCBQaHlzaWNzU3lzdGVtIGZyb20gJy4vcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0nXG5pbXBvcnQgUGh5c2ljc0NvbXBvbmVudCBmcm9tICcuL3BoeXNpY3Mtc3lzdGVtL3BoeXNpY3MtY29tcG9uZW50J1xuXG5jb25zdCBIYXJtb255ID0ge1xuICBBdWRpb1N5c3RlbTogQXVkaW9TeXN0ZW0sXG4gIEF1ZGlvQ29tcG9uZW50OiBBdWRpb0NvbXBvbmVudCxcbiAgTG9hZGVyOiBMb2FkZXIsXG4gIEVuZ2luZTogRW5naW5lLFxuICBFbnRpdHk6IEVudGl0eSxcbiAgRW50aXR5U3lzdGVtOiBFbnRpdHlTeXN0ZW0sXG4gIEhlbHBlcnM6IEhlbHBlcnMsXG4gIEtleTogS2V5LFxuICBLZXlTeXN0ZW06IEtleVN5c3RlbSxcbiAgTG9vcFN5c3RlbTogTG9vcFN5c3RlbSxcbiAgUGh5c2ljc0NvbXBvbmVudDogUGh5c2ljc0NvbXBvbmVudCxcbiAgUGh5c2ljc1N5c3RlbTogUGh5c2ljc1N5c3RlbSxcbiAgUG9pbnRlcjogUG9pbnRlcixcbiAgUG9pbnRlclN5c3RlbTogUG9pbnRlclN5c3RlbSxcbiAgU3ByaXRlQ29tcG9uZW50OiBTcHJpdGVDb21wb25lbnQsXG4gIFJlbmRlclN5c3RlbTogUmVuZGVyU3lzdGVtLFxuICBTY2VuZTogU2NlbmUsXG4gIFNjZW5lU3lzdGVtOiBTY2VuZVN5c3RlbSxcbiAgU2NyaXB0Q29tcG9uZW50OiBTY3JpcHRDb21wb25lbnQsXG4gIFNjcmlwdFN5c3RlbTogU2NyaXB0U3lzdGVtLFxuICBTdGF0ZUNvbXBvbmVudDogU3RhdGVDb21wb25lbnQsXG4gIFN0YXRlU3lzdGVtOiBTdGF0ZVN5c3RlbSxcbiAgVHJhbnNmb3JtQ29tcG9uZW50OiBUcmFuc2Zvcm1Db21wb25lbnQsXG4gIFRyYW5zZm9ybVN5c3RlbTogVHJhbnNmb3JtU3lzdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhcm1vbnlcbiJdLCJzb3VyY2VSb290IjoiIn0=