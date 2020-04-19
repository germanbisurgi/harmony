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

PhysicsSystem.prototype.addEdge = function (entity, params) {
  var defaults = {
    ax: 0,
    ay: 0,
    bx: 0,
    by: 0,
    density: 1,
    friction: 0.5,
    restitution: 0.3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImF1ZGlvQ29tcG9uZW50TmFtZSIsInByb3RvdHlwZSIsInBsYXkiLCJlbnRpdHkiLCJuYW1lIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsImF1ZGlvIiwiYnVmZmVyIiwidmFsdWUiLCJ2b2x1bWUiLCJzdGFydCIsInN0b3AiLCJhZGRBdWRpb0NvbXBvbmVudCIsImNvbmZpZyIsImNvbXBvbmVudCIsIkhhcm1vbnkiLCJBdWRpb0NvbXBvbmVudCIsInB1c2giLCJ1cGRhdGUiLCJzdGF0ZSIsInJlc3VtZSIsImkiLCJsZW5ndGgiLCJtdXN0RGVzdHJveSIsInNwbGljZSIsImRlc3Ryb3lDb21wb25lbnQiLCJwYXJhbXMiLCJzeXN0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJMb2FkZXIiLCJpbWFnZXNDYWNoZSIsImF1ZGlvQ2FjaGUiLCJsb2FkaW5nIiwiY29tcGxldGUiLCJlcnJvcnMiLCJzdWNjZXNzIiwicXVldWVkIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25TdWNjZXNzIiwib25lcnJvciIsInJlYXNvbiIsIm9uRXJyb3IiLCJzcmMiLCJ1cmwiLCJsb2FkQXVkaW8iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXNwb25zZSIsInNlbmQiLCJvblN0YXJ0Iiwib25Qcm9ncmVzcyIsIm9uQ29tcGxldGUiLCJwcm9ncmVzcyIsIk1hdGgiLCJmbG9vciIsImlzTmFOIiwiRW5naW5lIiwiY2FudmFzIiwibG9hZGVyIiwibG9vcCIsIkxvb3BTeXN0ZW0iLCJzY2VuZSIsIlNjZW5lU3lzdGVtIiwicmVuZGVyIiwiUmVuZGVyU3lzdGVtIiwiZW50aXRpZXMiLCJFbnRpdHlTeXN0ZW0iLCJrZXlzIiwiS2V5U3lzdGVtIiwicGh5c2ljcyIsIlBoeXNpY3NTeXN0ZW0iLCJwb2ludGVycyIsIlBvaW50ZXJTeXN0ZW0iLCJiZWhhdmlvdXJzIiwiQmVoYXZpb3VyU3lzdGVtIiwiU3RhdGVTeXN0ZW0iLCJoZWxwZXJzIiwiSGVscGVycyIsIm9uU3RlcCIsImN1cnJlbnQiLCJtdXN0UHJlbG9hZCIsInByZWxvYWQiLCJyZXF1ZXN0Q3JlYXRlIiwibXVzdENyZWF0ZSIsInJlcXVlc3RVcGRhdGUiLCJjcmVhdGUiLCJtdXN0VXBkYXRlIiwicmVxdWVzdERyYXciLCJtdXN0RHJhdyIsImRyYXciLCJkcmF3RGVidWdEYXRhIiwibXVzdFN3aXRjaCIsImRlc3Ryb3lBbGwiLCJkZXN0cm95IiwicmVxdWVzdGVkIiwicmVxdWVzdFByZWxvYWQiLCJydW4iLCJFbnRpdHkiLCJ0YWdzIiwieCIsInkiLCJhbmdsZSIsInNjYWxlIiwiY3JlYXRlR3JpZCIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiY2VpbCIsInJhbmRvbSIsImdldFJhbmRvbUl0ZW1zIiwiYXJyYXkiLCJxdWFudGl0eSIsInJhbmRvbUl0ZW1zIiwicmFuZG9tSW5kZXgiLCJzaHVmZmxlQXJyYXkiLCJqIiwiS2V5Iiwia2V5IiwiZW5kIiwiaG9sZCIsImhvbGRUaW1lIiwic3RhcnRGcmFtZSIsImVuZEZyYW1lIiwiZW5hYmxlZCIsImRlbHRhIiwibm93IiwidGhlbiIsImZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImJpbmQiLCJoYW5kbGVLZXlVcCIsImV2ZW50IiwiZ2V0T3JTZXQiLCJnZXQiLCJwZXJmb3JtYW5jZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFjY3VtdWxhdG9yIiwibGFzdFRpbWUiLCJsYXN0U3RlcCIsImZwcyIsInBhdXNlZCIsInRpbWVzdGVwIiwicGF1c2UiLCJ0aW1lc3RhbXAiLCJzdGVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUG9pbnRlciIsImFjdGl2ZSIsImlkIiwidHlwZSIsInN0YXJ0WCIsInN0YXJ0WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW5hYmxlUG9pbnRlcnMiLCJwb2ludGVyIiwic3R5bGUiLCJ0b3VjaEFjdGlvbiIsInVzZXJTZWxlY3QiLCJoYW5kbGVQb2ludGVyRG93biIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJnZXRQb2ludGVyQnlJRCIsIm91dHB1dCIsImdldEluYWN0aXZlUG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJjbGllbnRYIiwidGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJzdG9wUHJvcGFnYXRpb24iLCJTcHJpdGVDb21wb25lbnQiLCJ3aWR0aCIsImhlaWdodCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJhbmNob3JYIiwiYW5jaG9yWSIsInZpc2libGUiLCJnZXRDb250ZXh0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic3ByaXRlQ29tcG9uZW50TmFtZSIsImNsZWFyIiwiY2xlYXJSZWN0Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJhZGRTcHJpdGVDb21wb25lbnQiLCJ1bnNoaWZ0IiwidGV4dCIsImZpbGxUZXh0IiwiY2lyY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiUEkiLCJzdHJva2UiLCJsaW5lIiwibW92ZVRvIiwiYXgiLCJheSIsImxpbmVUbyIsImJ4IiwiYnkiLCJyZWN0Iiwic3ByaXRlIiwiU2NlbmUiLCJtZXRob2RzIiwiZW5naW5lIiwicmVxdWVzdFN3aXRjaCIsIkJlaGF2aW91ckNvbXBvbmVudCIsIm11c3RTdGFydCIsIm9uVXBkYXRlIiwiYmVoYXZpb3VyQ29tcG9uZW50TmFtZSIsImFkZEJlaGF2aW91ckNvbXBvbmVudCIsIlN0YXRlQ29tcG9uZW50Iiwic3RhdGVzIiwiY29tcG9uZW50TmFtZSIsInN0YXRlQ29tcG9uZW50TmFtZSIsImFkZFN0YXRlQ29tcG9uZW50IiwiZXhpdCIsImVudGVyIiwiYWRkIiwiaGFzVGFnIiwidGFnIiwiaW5jbHVkZXMiLCJCMldvcmxkIiwiQm94MkQiLCJEeW5hbWljcyIsImIyV29ybGQiLCJCMlZlYzIiLCJDb21tb24iLCJiMlZlYzIiLCJCMkRlYnVnRHJhdyIsImIyRGVidWdEcmF3IiwiQjJDb250YWN0TGlzdGVuZXIiLCJiMkNvbnRhY3RMaXN0ZW5lciIsIndvcmxkIiwiY29udGFjdHMiLCJwaHlzaWNzQ29tcG9uZW50TmFtZSIsIlNldENvbnRhY3RMaXN0ZW5lciIsIkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJjb21wb25lbnRBIiwiR2V0Rml4dHVyZUEiLCJHZXRCb2R5IiwiR2V0VXNlckRhdGEiLCJjb21wb25lbnRCIiwiR2V0Rml4dHVyZUIiLCJlbnRpdHlBIiwiZW50aXR5QiIsIm9uQ29udGFjdEJlZ2luIiwiRW5kQ29udGFjdCIsIm9uQ29udGFjdEVuZCIsIlByZVNvbHZlIiwib25Db250YWN0UHJlU29sdmUiLCJQb3N0U29sdmUiLCJvbkNvbnRhY3RQb3N0U29sdmUiLCJkZWJ1Z0RyYXciLCJTZXRTcHJpdGUiLCJTZXREcmF3U2NhbGUiLCJTZXRGaWxsQWxwaGEiLCJTZXRGbGFncyIsImVfc2hhcGVCaXQiLCJBcHBlbmRGbGFncyIsImVfam9pbnRCaXQiLCJTZXREZWJ1Z0RyYXciLCJtX2RlYnVnRHJhdyIsIm1fc3ByaXRlIiwiZ3JhcGhpY3MiLCJjYWxsYmFjayIsImdldENvbXBvbmVudCIsInNldEdyYXZpdHkiLCJTZXRHcmF2aXR5IiwiRHJhd0RlYnVnRGF0YSIsImFkZFBoeXNpY3NDb21wb25lbnQiLCJQaHlzaWNzQ29tcG9uZW50IiwiYm9keSIsImNyZWF0ZUJvZHkiLCJTZXRVc2VyRGF0YSIsImdldEZpeHR1cmVEZWYiLCJCMkZpeHR1cmVEZWYiLCJiMkZpeHR1cmVEZWYiLCJmaXhEZWYiLCJkZW5zaXR5IiwiZnJpY3Rpb24iLCJyZXN0aXR1dGlvbiIsImlzU2Vuc29yIiwiYWRkQ2lyY2xlIiwiZGVmYXVsdHMiLCJmaXh0dXJlRGVmaW5pdGlvbiIsIkIyQ2lyY2xlU2hhcGUiLCJDb2xsaXNpb24iLCJTaGFwZXMiLCJiMkNpcmNsZVNoYXBlIiwiZml4dHVyZURlZiIsInNoYXBlIiwibV9wIiwiZml4dHVyZSIsIkNyZWF0ZUZpeHR1cmUiLCJmaXh0dXJlcyIsImFkZEVkZ2UiLCJCMlBvbHlnb25TaGFwZSIsImIyUG9seWdvblNoYXBlIiwiU2V0QXNFZGdlIiwiYWxsb3dTbGVlcCIsImF3YWtlIiwiYnVsbGV0IiwiZml4ZWRSb3RhdGlvbiIsImFuZ3VsYXJEYW1waW5nIiwiYW5ndWxhclZlbG9jaXR5IiwibGluZWFyRGFtcGluZyIsImxpbmVhclZlbG9jaXR5IiwidXNlckRhdGEiLCJCMkJvZHlEZWYiLCJiMkJvZHlEZWYiLCJCMkJvZHkiLCJiMkJvZHkiLCJib2R5RGVmIiwicG9zaXRpb24iLCJiMl9zdGF0aWNCb2R5IiwiYjJfZHluYW1pY0JvZHkiLCJiMl9raW5lbWF0aWNCb2R5IiwiQ3JlYXRlQm9keSIsIlN0ZXAiLCJDbGVhckZvcmNlcyIsImdldFBvc2l0aW9uIiwiZ2V0QW5nbGUiLCJmb3JFYWNoIiwiRGVzdHJveUZpeHR1cmUiLCJEZXN0cm95Qm9keSIsImFwcGx5Rm9yY2UiLCJBcHBseUZvcmNlIiwiR2V0V29ybGRDZW50ZXIiLCJzZXRQb3NpdGlvbiIsIlNldFBvc2l0aW9uIiwic2V0TGluZWFyVmVsb2NpdHkiLCJTZXRBd2FrZSIsIlNldExpbmVhclZlbG9jaXR5IiwiR2V0UG9zaXRpb24iLCJHZXRBbmdsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsQ0FBcUI7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9B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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0vUixlQUFPLEdBQUc7QUFDZDVCLGFBQVcsRUFBRUEsWUFEQztBQUVkNkIsZ0JBQWMsRUFBRUEsZUFGRjtBQUdkYyxRQUFNLEVBQUVBLE1BSE07QUFJZG9DLFFBQU0sRUFBRUEsTUFKTTtBQUtkeUMsUUFBTSxFQUFFQSxNQUxNO0FBTWQvQixjQUFZLEVBQUVBLGFBTkE7QUFPZFcsU0FBTyxFQUFFQSxPQVBLO0FBUWQyQyxLQUFHLEVBQUVBLEdBUlM7QUFTZHBELFdBQVMsRUFBRUEsVUFURztBQVVkUixZQUFVLEVBQUVBLFdBVkU7QUFXZHdPLGtCQUFnQixFQUFFQSxpQkFYSjtBQVlkOU4sZUFBYSxFQUFFQSxjQVpEO0FBYWRtRixTQUFPLEVBQUVBLE9BYks7QUFjZGpGLGVBQWEsRUFBRUEsY0FkRDtBQWVkOEcsaUJBQWUsRUFBRUEsZ0JBZkg7QUFnQmR0SCxjQUFZLEVBQUVBLGFBaEJBO0FBaUJkOEosT0FBSyxFQUFFQSxLQWpCTztBQWtCZGhLLGFBQVcsRUFBRUEsWUFsQkM7QUFtQmRvSyxvQkFBa0IsRUFBRUEsbUJBbkJOO0FBb0JkeEosaUJBQWUsRUFBRUEsZ0JBcEJIO0FBcUJkNkosZ0JBQWMsRUFBRUEsZUFyQkY7QUFzQmQ1SixhQUFXLEVBQUVBLFlBQVdBO0FBdEJWLENBQWhCO0FBeUJldEUsNEZBQWYsRSIsImZpbGUiOiJoYXJtb255LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGFybW9ueVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIYXJtb255XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5jb25zdCBBdWRpb1N5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG4gIHRoaXMuY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKVxuICB0aGlzLm1hc3RlciA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKClcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMubWFzdGVyLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKVxuICB0aGlzLmF1ZGlvQ29tcG9uZW50TmFtZSA9ICdhdWRpbydcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoZW50aXR5LCBuYW1lKSB7XG4gIGNvbnN0IHNvdXJjZSA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICBjb25zdCBnYWluID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICBlbnRpdHkuY29tcG9uZW50cy5hdWRpby5zb3VyY2UgPSBzb3VyY2VcbiAgc291cmNlLmJ1ZmZlciA9IHRoaXMuY2FjaGVbbmFtZV1cbiAgc291cmNlLmNvbm5lY3QoZ2FpbilcbiAgZ2Fpbi5jb25uZWN0KHRoaXMubWFzdGVyKVxuICBnYWluLmdhaW4udmFsdWUgPSBlbnRpdHkuY29tcG9uZW50cy5hdWRpby52b2x1bWVcbiAgc291cmNlLnN0YXJ0KClcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGlmIChlbnRpdHkuY29tcG9uZW50cy5hdWRpby5zb3VyY2UpIHtcbiAgICBlbnRpdHkuY29tcG9uZW50cy5hdWRpby5zb3VyY2Uuc3RvcCgpXG4gIH1cbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLmFkZEF1ZGlvQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LkF1ZGlvQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmF1ZGlvQ29tcG9uZW50TmFtZV0gPSBjb21wb25lbnRcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgIHRoaXMuY29udGV4dC5yZXN1bWUoKVxuICB9XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgdGhpcy5zdG9wKGVudGl0eSlcbiAgZW50aXR5LmNvbXBvbmVudHMuYXVkaW8ubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvU3lzdGVtXG4iLCJjb25zdCBBdWRpb0NvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICB2b2x1bWU6IDFcbiAgfSwgcGFyYW1zKVxuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLnNvdXJjZSA9IG51bGxcbiAgdGhpcy52b2x1bWUgPSBjb25maWcudm9sdW1lXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb0NvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEltYWdlICovXG5cbmNvbnN0IExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbWFnZXNDYWNoZSA9IHt9XG4gIHRoaXMuYXVkaW9DYWNoZSA9IHt9XG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgdGhpcy5lcnJvcnMgPSAwXG4gIHRoaXMuc3VjY2VzcyA9IDBcbiAgdGhpcy5xdWV1ZWQgPSAwXG59XG5cbkxvYWRlci5wcm90b3R5cGUubG9hZEltYWdlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLnF1ZXVlZCsrXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3VjY2VzcysrXG4gICAgICB0aGlzLmltYWdlc0NhY2hlW2NvbmZpZy5uYW1lXSA9IGltYWdlXG4gICAgICB0aGlzLm9uU3VjY2Vzcyhjb25maWcpXG4gICAgICByZXNvbHZlKGltYWdlKVxuICAgIH1cbiAgICBpbWFnZS5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgdGhpcy5lcnJvcnMrK1xuICAgICAgdGhpcy5vbkVycm9yKGNvbmZpZylcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIGltYWdlLnNyYyA9IGNvbmZpZy51cmxcbiAgfSlcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5sb2FkQXVkaW8gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMucXVldWVkKytcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICBjb25zdCBBdWRpb0NvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKVxuICAgIHhoci5vcGVuKCdHRVQnLCBjb25maWcudXJsLCB0cnVlKVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIEF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoeGhyLnJlc3BvbnNlLCAoYnVmZmVyKSA9PiB7XG4gICAgICAgIHRoaXMuc3VjY2VzcysrXG4gICAgICAgIHRoaXMuYXVkaW9DYWNoZVtjb25maWcubmFtZV0gPSBidWZmZXJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MoY29uZmlnKVxuICAgICAgICByZXNvbHZlKGJ1ZmZlcilcbiAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcnMrK1xuICAgICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgICByZWplY3QocmVhc29uKVxuICAgICAgfSlcbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycysrXG4gICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgeGhyLnNlbmQoKVxuICB9KVxufVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25Db21wbGV0ZSA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5xdWV1ZWQgPiAwKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0KSB7XG4gICAgICB0aGlzLnN0YXJ0ID0gdHJ1ZVxuICAgICAgdGhpcy5vblN0YXJ0KClcbiAgICB9XG4gICAgaWYgKHRoaXMucXVldWVkID09PSB0aGlzLnN1Y2Nlc3MgKyB0aGlzLmVycm9ycykge1xuICAgICAgdGhpcy5xdWV1ZWQgPSAwXG4gICAgICB0aGlzLnN1Y2Nlc3MgPSAwXG4gICAgICB0aGlzLmVycm9ycyA9IDBcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZVxuICAgICAgdGhpcy5zdGFydCA9IGZhbHNlXG4gICAgICB0aGlzLm9uQ29tcGxldGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgICB9XG4gICAgbGV0IHByb2dyZXNzID0gTWF0aC5mbG9vcigodGhpcy5zdWNjZXNzICsgdGhpcy5lcnJvcnMpIC8gdGhpcy5xdWV1ZWQgKiAxMDApXG4gICAgaWYgKGlzTmFOKHByb2dyZXNzKSkge1xuICAgICAgcHJvZ3Jlc3MgPSAxMDBcbiAgICB9XG4gICAgdGhpcy5vblByb2dyZXNzKHByb2dyZXNzKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEVuZ2luZSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5sb2FkZXIgPSBuZXcgSGFybW9ueS5Mb2FkZXIoKVxuICB0aGlzLmxvb3AgPSBuZXcgSGFybW9ueS5Mb29wU3lzdGVtKClcbiAgdGhpcy5zY2VuZSA9IG5ldyBIYXJtb255LlNjZW5lU3lzdGVtKClcbiAgdGhpcy5yZW5kZXIgPSBuZXcgSGFybW9ueS5SZW5kZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLmF1ZGlvID0gbmV3IEhhcm1vbnkuQXVkaW9TeXN0ZW0oKVxuICB0aGlzLmVudGl0aWVzID0gbmV3IEhhcm1vbnkuRW50aXR5U3lzdGVtKClcbiAgdGhpcy5rZXlzID0gbmV3IEhhcm1vbnkuS2V5U3lzdGVtKClcbiAgdGhpcy5waHlzaWNzID0gbmV3IEhhcm1vbnkuUGh5c2ljc1N5c3RlbShjYW52YXMpXG4gIHRoaXMucG9pbnRlcnMgPSBuZXcgSGFybW9ueS5Qb2ludGVyU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5iZWhhdmlvdXJzID0gbmV3IEhhcm1vbnkuQmVoYXZpb3VyU3lzdGVtKHRoaXMpXG4gIHRoaXMuc3RhdGUgPSBuZXcgSGFybW9ueS5TdGF0ZVN5c3RlbSgpXG4gIHRoaXMuaGVscGVycyA9IG5ldyBIYXJtb255LkhlbHBlcnMoKVxuXG4gIHRoaXMubG9vcC5vblN0ZXAgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2NlbmUuY3VycmVudCkge1xuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdFByZWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlci5sb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnByZWxvYWQodGhpcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRlci51cGRhdGUoKVxuICAgICAgICBpZiAodGhpcy5sb2FkZXIuY29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlci5jYWNoZSA9IHRoaXMubG9hZGVyLmltYWdlc0NhY2hlXG4gICAgICAgICAgdGhpcy5hdWRpby5jYWNoZSA9IHRoaXMubG9hZGVyLmF1ZGlvQ2FjaGVcbiAgICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RDcmVhdGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0Q3JlYXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdFVwZGF0ZSgpXG4gICAgICAgIHRoaXMuc2NlbmUuY3VycmVudC5jcmVhdGUodGhpcylcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0RHJhdygpXG4gICAgICAgIHRoaXMua2V5cy51cGRhdGUoKVxuICAgICAgICB0aGlzLnBvaW50ZXJzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuYXVkaW8udXBkYXRlKClcbiAgICAgICAgdGhpcy5waHlzaWNzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuZW50aXRpZXMudXBkYXRlKClcbiAgICAgICAgdGhpcy5iZWhhdmlvdXJzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlKHRoaXMpXG4gICAgICAgIHRoaXMuc2NlbmUuY3VycmVudC51cGRhdGUodGhpcylcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3REcmF3KSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdFVwZGF0ZSgpXG4gICAgICAgIHRoaXMucmVuZGVyLmRyYXcoKVxuICAgICAgICB0aGlzLnBoeXNpY3MuZHJhd0RlYnVnRGF0YSgpXG4gICAgICAgIHRoaXMuc2NlbmUuY3VycmVudC5kcmF3KHRoaXMpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnNjZW5lLm11c3RTd2l0Y2gpIHtcbiAgICAgIHRoaXMuZW50aXRpZXMuZGVzdHJveUFsbCgpXG4gICAgICB0aGlzLnBvaW50ZXJzLmRlc3Ryb3koKVxuICAgICAgdGhpcy5rZXlzLmRlc3Ryb3koKVxuICAgICAgdGhpcy5zY2VuZS5jdXJyZW50ID0gdGhpcy5zY2VuZS5yZXF1ZXN0ZWRcbiAgICAgIHRoaXMuc2NlbmUucmVxdWVzdFByZWxvYWQoKVxuICAgIH1cbiAgfVxuICB0aGlzLmxvb3AucnVuKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5naW5lXG4iLCJjb25zdCBFbnRpdHkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHRhZ3M6IFtdLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBhbmdsZTogMCxcbiAgICBzY2FsZTogMVxuICB9LCBwYXJhbXMpXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICB0aGlzLnRhZ3MgPSBjb25maWcudGFnc1xuICB0aGlzLnggPSBjb25maWcueFxuICB0aGlzLnkgPSBjb25maWcueVxuICB0aGlzLmFuZ2xlID0gY29uZmlnLmFuZ2xlXG4gIHRoaXMuc2NhbGUgPSBjb25maWcuc2NhbGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5XG4iLCJjb25zdCBIZWxwZXJzID0gZnVuY3Rpb24gKCkge31cblxuSGVscGVycy5wcm90b3R5cGUuY3JlYXRlR3JpZCA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IGdyaWQgPSBuZXcgQXJyYXkoY29scylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgZ3JpZFtpXSA9IG5ldyBBcnJheShyb3dzKVxuICB9XG4gIHJldHVybiBncmlkXG59XG5cbkhlbHBlcnMucHJvdG90eXBlLmdldFJhbmRvbUludCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSXRlbXMgPSBmdW5jdGlvbiAoYXJyYXksIHF1YW50aXR5KSB7XG4gIGNvbnN0IHJhbmRvbUl0ZW1zID0gW11cbiAgZm9yIChsZXQgaSA9IHF1YW50aXR5OyBpLS07KSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB0aGlzLmdldFJhbmRvbUludCgwLCBhcnJheS5sZW5ndGggLSAxKVxuICAgIHJhbmRvbUl0ZW1zLnB1c2goYXJyYXlbcmFuZG9tSW5kZXhdKVxuICAgIGFycmF5LnNwbGljZShyYW5kb21JbmRleCwgMSlcbiAgfVxuICByZXR1cm4gcmFuZG9tSXRlbXNcbn1cblxuSGVscGVycy5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpXG4gICAgY29uc3QgeCA9IGFycmF5W2ldXG4gICAgYXJyYXlbaV0gPSBhcnJheVtqXVxuICAgIGFycmF5W2pdID0geFxuICB9XG4gIHJldHVybiBhcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxwZXJzXG4iLCJjb25zdCBLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRoaXMua2V5ID0ga2V5XG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBLZXlTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMuZGVsdGEgPSAwXG4gIHRoaXMubm93ID0gMFxuICB0aGlzLnRoZW4gPSAwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpLCBmYWxzZSlcbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtldmVudC5rZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbZXZlbnQua2V5XS5ob2xkID0gdHJ1ZVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSBmYWxzZVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0T3JTZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG5ldyBIYXJtb255LktleShrZXkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQoa2V5KVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgIHRoaXMuZnJhbWUrK1xuICAgIHRoaXMubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuXG4gICAgdGhpcy50aGVuID0gdGhpcy5ub3dcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChrZXkuaG9sZCkge1xuICAgICAgICBrZXkuaG9sZFRpbWUgKz0gdGhpcy5kZWx0YVxuICAgICAgICBrZXkuZW5kRnJhbWUgPSAtMVxuICAgICAgICBpZiAoa2V5LnN0YXJ0RnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleS5ob2xkVGltZSA9IDBcbiAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICBpZiAoa2V5LmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgIGtleS5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAga2V5LnN0YXJ0ID0gKGtleS5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAga2V5LmVuZCA9IChrZXkuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgfVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleVN5c3RlbVxuIiwiY29uc3QgTG9vcFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY2N1bXVsYXRvciA9IDBcbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5sYXN0VGltZSA9IDBcbiAgdGhpcy5sYXN0U3RlcCA9IDBcbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLmZyYW1lID0gMFxuICB0aGlzLnBhdXNlZCA9IGZhbHNlXG4gIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gdGhpcy5mcHNcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUuY29udGludWUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGF1c2VkID0gZmFsc2Vcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gIHRpbWVzdGFtcCA9IHRpbWVzdGFtcCB8fCAwXG4gIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gdGhpcy5mcHNcbiAgdGhpcy5hY2N1bXVsYXRvciArPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lXG4gIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXBcbiAgd2hpbGUgKCF0aGlzLnBhdXNlZCAmJiB0aGlzLmFjY3VtdWxhdG9yID49IHRoaXMudGltZXN0ZXApIHtcbiAgICB0aGlzLnN0ZXAoKVxuICAgIHRoaXMuZGVsdGEgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RTdGVwXG4gICAgdGhpcy5sYXN0U3RlcCA9IHRpbWVzdGFtcFxuICAgIHRoaXMuYWNjdW11bGF0b3IgLT0gdGhpcy50aW1lc3RlcFxuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW4uYmluZCh0aGlzKSlcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mcmFtZSsrXG4gIHRoaXMub25TdGVwKClcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUub25TdGVwID0gZnVuY3Rpb24gKCkge31cblxuZXhwb3J0IGRlZmF1bHQgTG9vcFN5c3RlbVxuIiwiY29uc3QgUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZVxuICB0aGlzLmhvbGQgPSBmYWxzZVxuICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5lbmQgPSBmYWxzZVxuICB0aGlzLmhvbGRUaW1lID0gMFxuICB0aGlzLnN0YXJ0RnJhbWUgPSAwXG4gIHRoaXMuZW5kRnJhbWUgPSAwXG4gIHRoaXMuaWQgPSAwXG4gIHRoaXMudHlwZSA9IG51bGxcbiAgdGhpcy5zdGFydFggPSAwXG4gIHRoaXMuc3RhcnRZID0gMFxuICB0aGlzLm9mZnNldFggPSAwXG4gIHRoaXMub2Zmc2V0WSA9IDBcbiAgdGhpcy54ID0gMFxuICB0aGlzLnkgPSAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFBvaW50ZXJTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMuZGVsdGEgPSAwXG4gIHRoaXMubm93ID0gMFxuICB0aGlzLnRoZW4gPSAwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIHRoaXMuY2FudmFzID0gY2FudmFzXG4gIHRoaXMuZW5hYmxlUG9pbnRlcnMoKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRPclNldCA9IGZ1bmN0aW9uIChwb2ludGVyKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtwb2ludGVyXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW3BvaW50ZXJdID0gbmV3IEhhcm1vbnkuUG9pbnRlcihwb2ludGVyKVxuICB9XG4gIHJldHVybiB0aGlzLmNhY2hlW3BvaW50ZXJdXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwb2ludGVyKSB7XG4gIHJldHVybiB0aGlzLmdldE9yU2V0KHBvaW50ZXIpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmVuYWJsZVBvaW50ZXJzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhbnZhcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJyAvLyBuZWVkZWQgZm9yIG1vYmlsZVxuICB0aGlzLmNhbnZhcy5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVDb250ZXh0TWVudS5iaW5kKHRoaXMpLCBmYWxzZSlcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0UG9pbnRlckJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgbGV0IG91dHB1dCA9IGZhbHNlXG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKHBvaW50ZXIuaWQgPT09IGlkKSB7XG4gICAgICAgIG91dHB1dCA9IHBvaW50ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRJbmFjdGl2ZVBvaW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBvdXRwdXQgPSBmYWxzZVxuICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgY29uc3QgcG9pbnRlciA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChwb2ludGVyLmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgb3V0cHV0ID0gcG9pbnRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcG9pbnRlciA9IHRoaXMuZ2V0UG9pbnRlckJ5SUQoZXZlbnQucG9pbnRlcklkKSB8fCB0aGlzLmdldEluYWN0aXZlUG9pbnRlcigpXG4gIGlmIChwb2ludGVyKSB7XG4gICAgcG9pbnRlci5hY3RpdmUgPSB0cnVlXG4gICAgcG9pbnRlci5pZCA9IGV2ZW50LnBvaW50ZXJJZFxuICAgIHBvaW50ZXIudHlwZSA9IGV2ZW50LnBvaW50ZXJUeXBlIC8vICdtb3VzZScsICdwZW4nLCAndG91Y2gnXG4gICAgcG9pbnRlci5ob2xkID0gdHJ1ZVxuICAgIHBvaW50ZXIuc3RhcnRYID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci5zdGFydFkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICAgIHBvaW50ZXIueCA9IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdFxuICAgIHBvaW50ZXIueSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlck1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpIHx8IHRoaXMuZ2V0SW5hY3RpdmVQb2ludGVyKClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgcG9pbnRlci54ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci55ID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpXG4gIGlmIChwb2ludGVyKSB7XG4gICAgcG9pbnRlci5hY3RpdmUgPSBmYWxzZVxuICAgIHBvaW50ZXIuaG9sZCA9IGZhbHNlXG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlQ29udGV4dE1lbnUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICByZXR1cm4gZmFsc2Vcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgdGhpcy5mcmFtZSsrXG4gICAgdGhpcy5ub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLmRlbHRhID0gdGhpcy5ub3cgLSB0aGlzLnRoZW5cbiAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IHRoaXMuY2FjaGVbaV1cbiAgICAgICAgaWYgKHBvaW50ZXIuaG9sZCkge1xuICAgICAgICAgIHBvaW50ZXIub2Zmc2V0WCA9IChwb2ludGVyLnggLSBwb2ludGVyLnN0YXJ0WClcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFkgPSAocG9pbnRlci55IC0gcG9pbnRlci5zdGFydFkpXG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKHBvaW50ZXIuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRYID0gMFxuICAgICAgICAgIHBvaW50ZXIub2Zmc2V0WSA9IDBcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lID0gMFxuICAgICAgICAgIHBvaW50ZXIuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKHBvaW50ZXIuZW5kRnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb2ludGVyLnN0YXJ0ID0gKHBvaW50ZXIuc3RhcnRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICAgICAgcG9pbnRlci5lbmQgPSAocG9pbnRlci5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJTeXN0ZW1cbiIsImNvbnN0IFNwcml0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICBpbWFnZTogbnVsbCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBzb3VyY2VYOiAwLFxuICAgIHNvdXJjZVk6IDAsXG4gICAgc291cmNlV2lkdGg6IDAsXG4gICAgc291cmNlSGVpZ2h0OiAwLFxuICAgIGFuY2hvclg6IDAuNSxcbiAgICBhbmNob3JZOiAwLjUsXG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9LCBwYXJhbXMpXG5cbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmltYWdlID0gY29uZmlnLmltYWdlXG4gIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0XG4gIHRoaXMuc291cmNlWCA9IGNvbmZpZy5zb3VyY2VYXG4gIHRoaXMuc291cmNlWSA9IGNvbmZpZy5zb3VyY2VZXG4gIHRoaXMuc291cmNlV2lkdGggPSBjb25maWcuc291cmNlV2lkdGhcbiAgdGhpcy5zb3VyY2VIZWlnaHQgPSBjb25maWcuc291cmNlSGVpZ2h0XG4gIHRoaXMuYW5jaG9yWCA9IGNvbmZpZy5hbmNob3JYXG4gIHRoaXMuYW5jaG9yWSA9IGNvbmZpZy5hbmNob3JZXG4gIHRoaXMudmlzaWJsZSA9IGNvbmZpZy52aXNpYmxlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwcml0ZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgSW1hZ2UgKi9cblxuY29uc3QgUmVuZGVyU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLnNwcml0ZUNvbXBvbmVudE5hbWUgPSAnc3ByaXRlJ1xufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWNoZVtjb25maWcubmFtZV0gPSBpbWFnZVxuICAgICAgcmVzb2x2ZShpbWFnZSlcbiAgICB9XG4gICAgaW1hZ2Uub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIGltYWdlLnNyYyA9IGNvbmZpZy51cmxcbiAgfSlcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpbWFnZSkge1xuICByZXR1cm4gdGhpcy5jYWNoZVtpbWFnZV1cbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFyKClcbiAgLy8gdGhpcy5jb250ZXh0LnNhdmUoKVxuXG4gIC8vIHRyYW5zbGF0ZSB0byBjYW1lcmEgY2VudGVyXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgKHRoaXMuY2FtZXJhLndpZHRoIC8gMiksXG4gIC8vICAgKHRoaXMuY2FtZXJhLmhlaWdodCAvIDIpXG4gIC8vIClcblxuICAvLyByb3RhdGVcbiAgLy8gdGhpcy5jb250ZXh0LnJvdGF0ZSh0aGlzLmNhbWVyYS5hbmdsZSlcblxuICAvLyBzY2FsZVxuICAvLyB0aGlzLmNvbnRleHQuc2NhbGUodGhpcy5jYW1lcmEuem9vbSwgdGhpcy5jYW1lcmEuem9vbSlcblxuICAvLyB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmVkJ1xuICAvLyB0aGlzLmNhbnZhcy5jaXJjbGUoMCwgMCwgMTApXG5cbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAtKHRoaXMuY2FtZXJhLndpZHRoIC8gMiksXG4gIC8vICAgLSh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKVxuICAvLyApXG5cbiAgLy8gdHJhbnNsYXRlXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgLXRoaXMuY2FtZXJhLnBvc2l0aW9uLngsXG4gIC8vICAgLXRoaXMuY2FtZXJhLnBvc2l0aW9uLnlcbiAgLy8gKVxuXG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgLy8gY29uc29sZS5sb2coY29tcG9uZW50LmVudGl0eSlcblxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbXBvbmVudC52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKClcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnggKyBjb21wb25lbnQud2lkdGggKiAwLjUgKiBjb21wb25lbnQuZW50aXR5LnNjYWxlIC0gY29tcG9uZW50LndpZHRoICogY29tcG9uZW50LmFuY2hvclggKiBjb21wb25lbnQuZW50aXR5LnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkueSArIGNvbXBvbmVudC5oZWlnaHQgKiAwLjUgKiBjb21wb25lbnQuZW50aXR5LnNjYWxlIC0gY29tcG9uZW50LmhlaWdodCAqIGNvbXBvbmVudC5hbmNob3JZICogY29tcG9uZW50LmVudGl0eS5zY2FsZVxuICAgICAgICApXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoY29tcG9uZW50LmVudGl0eS5hbmdsZSlcbiAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUsXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS5zY2FsZVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5zb3VyY2VXaWR0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VXaWR0aCA9IGNvbXBvbmVudC5pbWFnZS53aWR0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5zb3VyY2VIZWlnaHQgPT09IDApIHtcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlSGVpZ2h0ID0gY29tcG9uZW50LmltYWdlLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBjb21wb25lbnQuaW1hZ2UsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVgsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVksXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVdpZHRoLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VIZWlnaHQsXG4gICAgICAgICAgY29tcG9uZW50LndpZHRoICogLTAuNSwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQuaGVpZ2h0ICogLTAuNSwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQud2lkdGgsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LmhlaWdodCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICApXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuYWRkU3ByaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNwcml0ZUNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5zcHJpdGVDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMudW5zaGlmdChjb21wb25lbnQpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGNvbmZpZy50ZXh0LCBjb25maWcueCwgY29uZmlnLnkpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0LmFyYyhjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5saW5lID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0Lm1vdmVUbyhjb25maWcuYXgsIGNvbmZpZy5heSlcbiAgdGhpcy5jb250ZXh0LmxpbmVUbyhjb25maWcuYngsIGNvbmZpZy5ieSlcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LnJlY3QoY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnNwcml0ZS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyU3lzdGVtXG4iLCJjb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcHJlbG9hZDogKCkgPT4ge30sXG4gICAgY3JlYXRlOiAoKSA9PiB7fSxcbiAgICB1cGRhdGU6ICgpID0+IHt9LFxuICAgIGRyYXc6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuU2NlbmUucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMucHJlbG9hZChlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuY3JlYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy51cGRhdGUoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5kcmF3KGVuZ2luZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVcbiIsImNvbnN0IFNjZW5lU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIHRoaXMucmVxdWVzdGVkID0gbnVsbFxuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzY2VuZVxuICB0aGlzLnJlcXVlc3RTd2l0Y2goKVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFByZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSB0cnVlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdENyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0VXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gdHJ1ZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3REcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IHRydWVcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RTd2l0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVN5c3RlbVxuIiwiY29uc3QgQmVoYXZpb3VyQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTdGFydCA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgb25TdGFydDogKCkgPT4ge30sXG4gICAgb25VcGRhdGU6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3VyQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBCZWhhdmlvdXJTeXN0ZW0gPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHRoaXMuZW5naW5lID0gZW5naW5lXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZSA9ICdiZWhhdmlvdXInXG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUuYWRkQmVoYXZpb3VyQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LkJlaGF2aW91ckNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGNvbnN0IGVudGl0eSA9IGNvbXBvbmVudC5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KGVudGl0eSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFVwZGF0ZSkge1xuICAgICAgdGhpcy5vblVwZGF0ZShlbnRpdHkpXG4gICAgfVxuICB9XG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5tdXN0U3RhcnQgPSBmYWxzZVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm11c3RVcGRhdGUgPSB0cnVlXG4gIHJldHVybiBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm1ldGhvZHMub25TdGFydCh0aGlzLmVuZ2luZSwgZW50aXR5KVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICByZXR1cm4gZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5tZXRob2RzLm9uVXBkYXRlKHRoaXMuZW5naW5lLCBlbnRpdHkpXG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3VyU3lzdGVtXG4iLCJjb25zdCBTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLmVudGl0eSA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBwYXJhbXMuY3VycmVudFxuICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIHRoaXMuc3RhdGVzID0gcGFyYW1zLnN0YXRlc1xufVxuXG5TdGF0ZUNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50TmFtZSA9ICdzdGF0ZSdcblxuU3RhdGVDb21wb25lbnQucHJvdG90eXBlLnN3aXRjaCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG4gIHRoaXMucmVxdWVzdGVkID0gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFN0YXRlU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLnN0YXRlQ29tcG9uZW50TmFtZSA9ICdzdGF0ZSdcbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLmFkZFN0YXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlN0YXRlQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLnN0YXRlQ29tcG9uZW50TmFtZV0gPSBjb21wb25lbnRcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxufVxuXG5TdGF0ZVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQuY3VycmVudCAmJiBjb21wb25lbnQubXVzdFN3aXRjaCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmV4aXQpIHtcbiAgICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZXhpdChlbmdpbmUsIGNvbXBvbmVudC5lbnRpdHkpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN3aXRjaCkge1xuICAgICAgY29tcG9uZW50LmN1cnJlbnQgPSBjb21wb25lbnQucmVxdWVzdGVkXG4gICAgICBpZiAoY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZW50ZXIoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgICAgfVxuICAgICAgY29tcG9uZW50Lm11c3RTd2l0Y2ggPSBmYWxzZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0udXBkYXRlKSB7XG4gICAgICBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS51cGRhdGUoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgIH1cbiAgfVxufVxuXG5TdGF0ZVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZW50aXR5LmNvbXBvbmVudHMuc3RhdGUubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlU3lzdGVtXG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBFbnRpdHlTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSBbXVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgZW50aXR5ID0gbmV3IEhhcm1vbnkuRW50aXR5KGNvbmZpZylcbiAgdGhpcy5jYWNoZS5wdXNoKGVudGl0eSlcbiAgcmV0dXJuIGVudGl0eVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY2FjaGUubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgZW50aXR5ID0gdGhpcy5jYWNoZVtpXVxuICAgIGlmIChlbnRpdHkubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY2FjaGUuc3BsaWNlKGksIDEpXG4gICAgfVxuICB9XG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZm9yIChjb25zdCBpIGluIGVudGl0eS5jb21wb25lbnRzKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVudGl0eS5jb21wb25lbnRzLCBpKSkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZW50aXR5LmNvbXBvbmVudHNbaV1cbiAgICAgIGNvbnN0IHN5c3RlbSA9IGNvbXBvbmVudC5zeXN0ZW1cbiAgICAgIHN5c3RlbS5kZXN0cm95Q29tcG9uZW50KGVudGl0eSlcbiAgICB9XG4gIH1cbiAgZW50aXR5Lm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmhhc1RhZyA9IGZ1bmN0aW9uIChlbnRpdHksIHRhZykge1xuICByZXR1cm4gZW50aXR5LnRhZ3MuaW5jbHVkZXModGFnKVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICB0aGlzLmRlc3Ryb3koZW50aXR5KVxuICB9XG4gIHRoaXMuY2FjaGUgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlTeXN0ZW1cbiIsIi8qIGdsb2JhbCBCb3gyRCBIYXJtb255ICovXG5cbmNvbnN0IFBoeXNpY3NTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIGNvbnN0IEIyV29ybGQgPSBCb3gyRC5EeW5hbWljcy5iMldvcmxkXG4gIGNvbnN0IEIyVmVjMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyVmVjMlxuICBjb25zdCBCMkRlYnVnRHJhdyA9IEJveDJELkR5bmFtaWNzLmIyRGVidWdEcmF3XG4gIGNvbnN0IEIyQ29udGFjdExpc3RlbmVyID0gQm94MkQuRHluYW1pY3MuYjJDb250YWN0TGlzdGVuZXJcblxuICB0aGlzLndvcmxkID0gbmV3IEIyV29ybGQobmV3IEIyVmVjMigwLCAwKSwgdHJ1ZSlcbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLnNjYWxlID0gMTAwXG4gIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuY29udGFjdHMgPSBuZXcgQjJDb250YWN0TGlzdGVuZXIoKVxuICB0aGlzLnBoeXNpY3NDb21wb25lbnROYW1lID0gJ3BoeXNpY3MnXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhY3RzXG5cbiAgdGhpcy53b3JsZC5TZXRDb250YWN0TGlzdGVuZXIodGhpcy5jb250YWN0cylcblxuICB0aGlzLmNvbnRhY3RzLkJlZ2luQ29udGFjdCA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50QS5vbkNvbnRhY3RCZWdpbikge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RCZWdpbihlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RCZWdpbikge1xuICAgICAgY29tcG9uZW50Qi5vbkNvbnRhY3RCZWdpbihlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuRW5kQ29udGFjdCA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50QS5vbkNvbnRhY3RFbmQpIHtcbiAgICAgIGNvbXBvbmVudEEub25Db250YWN0RW5kKGVudGl0eUIsIGVudGl0eUEpXG4gICAgfVxuICAgIGlmIChjb21wb25lbnRCLm9uQ29udGFjdEVuZCkge1xuICAgICAgY29tcG9uZW50Qi5vbkNvbnRhY3RFbmQoZW50aXR5QSwgZW50aXR5QilcbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLlByZVNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGlmIChjb21wb25lbnRBLm9uQ29udGFjdFByZVNvbHZlKSB7XG4gICAgICBjb21wb25lbnRBLm9uQ29udGFjdFByZVNvbHZlKGVudGl0eUIsIGVudGl0eUEpXG4gICAgfVxuICAgIGlmIChjb21wb25lbnRCLm9uQ29udGFjdFByZVNvbHZlKSB7XG4gICAgICBjb21wb25lbnRCLm9uQ29udGFjdFByZVNvbHZlKGVudGl0eUEsIGVudGl0eUIpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5Qb3N0U29sdmUgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0UG9zdFNvbHZlKSB7XG4gICAgICBjb21wb25lbnRBLm9uQ29udGFjdFBvc3RTb2x2ZShlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RQb3N0U29sdmUpIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0UG9zdFNvbHZlKGVudGl0eUEsIGVudGl0eUIpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlYnVnXG5cbiAgY29uc3QgZGVidWdEcmF3ID0gbmV3IEIyRGVidWdEcmF3KHRoaXMuY29udGV4dClcbiAgZGVidWdEcmF3LlNldFNwcml0ZShjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSlcbiAgZGVidWdEcmF3LlNldERyYXdTY2FsZSh0aGlzLnNjYWxlKVxuICBkZWJ1Z0RyYXcuU2V0RmlsbEFscGhhKDAuNSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGbGFncyhCMkRlYnVnRHJhdy5lX3NoYXBlQml0KVxuICBkZWJ1Z0RyYXcuQXBwZW5kRmxhZ3MoQjJEZWJ1Z0RyYXcuZV9qb2ludEJpdClcbiAgdGhpcy53b3JsZC5TZXREZWJ1Z0RyYXcoZGVidWdEcmF3KVxuICB0aGlzLndvcmxkLm1fZGVidWdEcmF3Lm1fc3ByaXRlLmdyYXBoaWNzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLm9uQ29udGFjdEJlZ2luID0gZnVuY3Rpb24gKGVudGl0eSwgY2FsbGJhY2spIHtcbiAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KVxuICBjb21wb25lbnQub25Db250YWN0QmVnaW4gPSBjYWxsYmFja1xufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5vbkNvbnRhY3RFbmQgPSBmdW5jdGlvbiAoZW50aXR5LCBjYWxsYmFjaykge1xuICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpXG4gIGNvbXBvbmVudC5vbkNvbnRhY3RFbmQgPSBjYWxsYmFja1xufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5vbkNvbnRhY3RQcmVTb2x2ZSA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdFByZVNvbHZlID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0UG9zdFNvbHZlID0gZnVuY3Rpb24gKGVudGl0eSwgY2FsbGJhY2spIHtcbiAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KVxuICBjb21wb25lbnQub25Db250YWN0UG9zdFNvbHZlID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuc2V0R3Jhdml0eSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy53b3JsZC5TZXRHcmF2aXR5KGNvbmZpZylcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZHJhd0RlYnVnRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53b3JsZC5EcmF3RGVidWdEYXRhKClcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb21wb25lbnRcblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkUGh5c2ljc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIHBhcmFtcykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5QaHlzaWNzQ29tcG9uZW50KHRoaXMpXG4gIGNvbXBvbmVudC5ib2R5ID0gdGhpcy5jcmVhdGVCb2R5KHBhcmFtcylcbiAgY29tcG9uZW50LmJvZHkuU2V0VXNlckRhdGEoY29tcG9uZW50KVxuICBjb21wb25lbnQuZW50aXR5ID0gZW50aXR5XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMucGh5c2ljc0NvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZ2V0Rml4dHVyZURlZiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgQjJGaXh0dXJlRGVmID0gQm94MkQuRHluYW1pY3MuYjJGaXh0dXJlRGVmXG4gIGNvbnN0IGZpeERlZiA9IG5ldyBCMkZpeHR1cmVEZWYoKVxuICBmaXhEZWYuZGVuc2l0eSA9IGNvbmZpZy5kZW5zaXR5XG4gIGZpeERlZi5mcmljdGlvbiA9IGNvbmZpZy5mcmljdGlvblxuICBmaXhEZWYucmVzdGl0dXRpb24gPSBjb25maWcucmVzdGl0dXRpb25cbiAgZml4RGVmLmlzU2Vuc29yID0gY29uZmlnLmlzU2Vuc29yXG4gIHJldHVybiBmaXhEZWZcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkQ2lyY2xlID0gZnVuY3Rpb24gKGVudGl0eSwgcGFyYW1zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICByYWRpdXM6IDI1LFxuICAgIGRlbnNpdHk6IDEsXG4gICAgZnJpY3Rpb246IDAuNSxcbiAgICByZXN0aXR1dGlvbjogMC4zLFxuICAgIGlzU2Vuc29yOiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcbiAgY29uc3QgZml4dHVyZURlZmluaXRpb24gPSB0aGlzLmdldEZpeHR1cmVEZWYoY29uZmlnKVxuICBjb25zdCBCMkNpcmNsZVNoYXBlID0gQm94MkQuQ29sbGlzaW9uLlNoYXBlcy5iMkNpcmNsZVNoYXBlXG4gIGNvbnN0IGZpeHR1cmVEZWYgPSBmaXh0dXJlRGVmaW5pdGlvblxuICBmaXh0dXJlRGVmLnNoYXBlID0gbmV3IEIyQ2lyY2xlU2hhcGUoY29uZmlnLnJhZGl1cyAvIHRoaXMuc2NhbGUpXG4gIGZpeHR1cmVEZWYuc2hhcGUubV9wID0ge1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgfVxuICBjb25zdCBmaXh0dXJlID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkNyZWF0ZUZpeHR1cmUoZml4dHVyZURlZilcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5wdXNoKGZpeHR1cmUpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZEVkZ2UgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgYXg6IDAsXG4gICAgYXk6IDAsXG4gICAgYng6IDAsXG4gICAgYnk6IDAsXG4gICAgZGVuc2l0eTogMSxcbiAgICBmcmljdGlvbjogMC41LFxuICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgaXNTZW5zb3I6IGZhbHNlXG4gIH1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuICBjb25zdCBmaXh0dXJlRGVmID0gdGhpcy5nZXRGaXh0dXJlRGVmKGNvbmZpZylcbiAgY29uc3QgQjJQb2x5Z29uU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyUG9seWdvblNoYXBlXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJQb2x5Z29uU2hhcGUoKVxuICBjb25maWcuYXggLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYXkgLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYnggLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYnkgLz0gdGhpcy5zY2FsZVxuICBmaXh0dXJlRGVmLnNoYXBlLlNldEFzRWRnZSh7IHg6IGNvbmZpZy5heCwgeTogY29uZmlnLmF5IH0sIHsgeDogY29uZmlnLmJ4LCB5OiBjb25maWcuYnkgfSlcbiAgY29uc3QgZml4dHVyZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5DcmVhdGVGaXh0dXJlKGZpeHR1cmVEZWYpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuZml4dHVyZXMucHVzaChmaXh0dXJlKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgICB0eXBlOiAnZHluYW1pYycsXG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGFsbG93U2xlZXA6IHRydWUsXG4gICAgYXdha2U6IHRydWUsXG4gICAgYnVsbGV0OiBmYWxzZSxcbiAgICBmaXhlZFJvdGF0aW9uOiBmYWxzZSxcbiAgICBhbmdsZTogMCxcbiAgICBhbmd1bGFyRGFtcGluZzogMCxcbiAgICBhbmd1bGFyVmVsb2NpdHk6IDAsXG4gICAgbGluZWFyRGFtcGluZzogMCxcbiAgICBsaW5lYXJWZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXG4gICAgdXNlckRhdGE6IHt9XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG5cbiAgY29uc3QgQjJCb2R5RGVmID0gQm94MkQuRHluYW1pY3MuYjJCb2R5RGVmXG4gIGNvbnN0IEIyQm9keSA9IEJveDJELkR5bmFtaWNzLmIyQm9keVxuXG4gIGNvbnN0IGJvZHlEZWYgPSBuZXcgQjJCb2R5RGVmKClcbiAgYm9keURlZi5wb3NpdGlvbi54ID0gY29uZmlnLnggLyB0aGlzLnNjYWxlXG4gIGJvZHlEZWYucG9zaXRpb24ueSA9IGNvbmZpZy55IC8gdGhpcy5zY2FsZVxuICBib2R5RGVmLmFjdGl2ZSA9IGNvbmZpZy5hY3RpdmVcbiAgYm9keURlZi5hbGxvd1NsZWVwID0gY29uZmlnLmFsbG93U2xlZXBcbiAgYm9keURlZi5hd2FrZSA9IGNvbmZpZy5hd2FrZVxuICBib2R5RGVmLmJ1bGxldCA9IGNvbmZpZy5idWxsZXRcbiAgYm9keURlZi5maXhlZFJvdGF0aW9uID0gY29uZmlnLmZpeGVkUm90YXRpb25cbiAgYm9keURlZi5hbmdsZSA9IGNvbmZpZy5hbmdsZVxuICBib2R5RGVmLmFuZ3VsYXJEYW1waW5nID0gY29uZmlnLmFuZ3VsYXJEYW1waW5nXG4gIGJvZHlEZWYuYW5ndWxhclZlbG9jaXR5ID0gY29uZmlnLmFuZ3VsYXJWZWxvY2l0eVxuICBib2R5RGVmLmxpbmVhckRhbXBpbmcgPSBjb25maWcubGluZWFyRGFtcGluZ1xuICBib2R5RGVmLmxpbmVhclZlbG9jaXR5ID0gY29uZmlnLmxpbmVhclZlbG9jaXR5XG4gIGJvZHlEZWYudXNlckRhdGEgPSBjb25maWcudXNlckRhdGFcblxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX3N0YXRpY0JvZHlcbiAgfVxuXG4gIGlmIChjb25maWcudHlwZSA9PT0gJ2R5bmFtaWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2R5bmFtaWNCb2R5XG4gIH1cblxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdraW5lbWF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2tpbmVtYXRpY0JvZHlcbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSB0aGlzLndvcmxkLkNyZWF0ZUJvZHkoYm9keURlZilcbiAgYm9keS5hY3RpdmUgPSB0cnVlXG5cbiAgcmV0dXJuIGJvZHlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndvcmxkLlN0ZXAoMSAvIHRoaXMuZnBzLCA4LCAzKVxuICB0aGlzLndvcmxkLkNsZWFyRm9yY2VzKClcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGNvbXBvbmVudC5lbnRpdHlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihlbnRpdHkpXG4gICAgICBlbnRpdHkueCA9IHBvc2l0aW9uLnhcbiAgICAgIGVudGl0eS55ID0gcG9zaXRpb24ueVxuICAgICAgZW50aXR5LmFuZ2xlID0gdGhpcy5nZXRBbmdsZShlbnRpdHkpXG4gICAgfVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgcmV0dXJuIGVudGl0eS5jb21wb25lbnRzW3RoaXMucGh5c2ljc0NvbXBvbmVudE5hbWVdXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuZml4dHVyZXMuZm9yRWFjaCgoZml4dHVyZSkgPT4ge1xuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5EZXN0cm95Rml4dHVyZShmaXh0dXJlKVxuICB9KVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLnN5c3RlbS53b3JsZC5EZXN0cm95Qm9keSh0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkubXVzdERlc3Ryb3kgPSB0cnVlXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFwcGx5Rm9yY2UgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkFwcGx5Rm9yY2UoY29uZmlnLCB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuR2V0V29ybGRDZW50ZXIoKSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LlNldFBvc2l0aW9uKHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnNldExpbmVhclZlbG9jaXR5ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5TZXRBd2FrZSh0cnVlKVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuU2V0TGluZWFyVmVsb2NpdHkoe1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgfSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkdldFBvc2l0aW9uKClcbiAgcmV0dXJuIHtcbiAgICB4OiBwb3NpdGlvbi54ICogdGhpcy5zY2FsZSxcbiAgICB5OiBwb3NpdGlvbi55ICogdGhpcy5zY2FsZVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkdldEFuZ2xlKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc1N5c3RlbVxuIiwiY29uc3QgUGh5c2ljc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChzeXN0ZW0pIHtcbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmJvZHkgPSBudWxsXG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuZml4dHVyZXMgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzQ29tcG9uZW50XG4iLCJpbXBvcnQgQXVkaW9TeXN0ZW0gZnJvbSAnLi9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtJ1xuaW1wb3J0IEF1ZGlvQ29tcG9uZW50IGZyb20gJy4vYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXIvbG9hZGVyJ1xuaW1wb3J0IEVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5LXN5c3RlbS9lbnRpdHknXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMvaGVscGVycydcbmltcG9ydCBLZXkgZnJvbSAnLi9rZXktc3lzdGVtL2tleSdcbmltcG9ydCBLZXlTeXN0ZW0gZnJvbSAnLi9rZXktc3lzdGVtL2tleS1zeXN0ZW0nXG5pbXBvcnQgTG9vcFN5c3RlbSBmcm9tICcuL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtJ1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi9wb2ludGVyLXN5c3RlbS9wb2ludGVyJ1xuaW1wb3J0IFBvaW50ZXJTeXN0ZW0gZnJvbSAnLi9wb2ludGVyLXN5c3RlbS9wb2ludGVyLXN5c3RlbSdcbmltcG9ydCBTcHJpdGVDb21wb25lbnQgZnJvbSAnLi9yZW5kZXItc3lzdGVtL3Nwcml0ZS1jb21wb25lbnQnXG5pbXBvcnQgUmVuZGVyU3lzdGVtIGZyb20gJy4vcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtJ1xuaW1wb3J0IFNjZW5lIGZyb20gJy4vc2NlbmUtc3lzdGVtL3NjZW5lJ1xuaW1wb3J0IFNjZW5lU3lzdGVtIGZyb20gJy4vc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbSdcbmltcG9ydCBCZWhhdmlvdXJDb21wb25lbnQgZnJvbSAnLi9iZWhhdmlvdXItc3lzdGVtL2JlaGF2aW91ci1jb21wb25lbnQnXG5pbXBvcnQgQmVoYXZpb3VyU3lzdGVtIGZyb20gJy4vYmVoYXZpb3VyLXN5c3RlbS9iZWhhdmlvdXItc3lzdGVtJ1xuaW1wb3J0IFN0YXRlQ29tcG9uZW50IGZyb20gJy4vc3RhdGUtc3lzdGVtL3N0YXRlLWNvbXBvbmVudCdcbmltcG9ydCBTdGF0ZVN5c3RlbSBmcm9tICcuL3N0YXRlLXN5c3RlbS9zdGF0ZS1zeXN0ZW0nXG5pbXBvcnQgRW50aXR5U3lzdGVtIGZyb20gJy4vZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtJ1xuaW1wb3J0IFBoeXNpY3NTeXN0ZW0gZnJvbSAnLi9waHlzaWNzLXN5c3RlbS9waHlzaWNzLXN5c3RlbSdcbmltcG9ydCBQaHlzaWNzQ29tcG9uZW50IGZyb20gJy4vcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1jb21wb25lbnQnXG5cbmNvbnN0IEhhcm1vbnkgPSB7XG4gIEF1ZGlvU3lzdGVtOiBBdWRpb1N5c3RlbSxcbiAgQXVkaW9Db21wb25lbnQ6IEF1ZGlvQ29tcG9uZW50LFxuICBMb2FkZXI6IExvYWRlcixcbiAgRW5naW5lOiBFbmdpbmUsXG4gIEVudGl0eTogRW50aXR5LFxuICBFbnRpdHlTeXN0ZW06IEVudGl0eVN5c3RlbSxcbiAgSGVscGVyczogSGVscGVycyxcbiAgS2V5OiBLZXksXG4gIEtleVN5c3RlbTogS2V5U3lzdGVtLFxuICBMb29wU3lzdGVtOiBMb29wU3lzdGVtLFxuICBQaHlzaWNzQ29tcG9uZW50OiBQaHlzaWNzQ29tcG9uZW50LFxuICBQaHlzaWNzU3lzdGVtOiBQaHlzaWNzU3lzdGVtLFxuICBQb2ludGVyOiBQb2ludGVyLFxuICBQb2ludGVyU3lzdGVtOiBQb2ludGVyU3lzdGVtLFxuICBTcHJpdGVDb21wb25lbnQ6IFNwcml0ZUNvbXBvbmVudCxcbiAgUmVuZGVyU3lzdGVtOiBSZW5kZXJTeXN0ZW0sXG4gIFNjZW5lOiBTY2VuZSxcbiAgU2NlbmVTeXN0ZW06IFNjZW5lU3lzdGVtLFxuICBCZWhhdmlvdXJDb21wb25lbnQ6IEJlaGF2aW91ckNvbXBvbmVudCxcbiAgQmVoYXZpb3VyU3lzdGVtOiBCZWhhdmlvdXJTeXN0ZW0sXG4gIFN0YXRlQ29tcG9uZW50OiBTdGF0ZUNvbXBvbmVudCxcbiAgU3RhdGVTeXN0ZW06IFN0YXRlU3lzdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhcm1vbnlcbiJdLCJzb3VyY2VSb290IjoiIn0=