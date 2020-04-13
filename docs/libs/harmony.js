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

AudioComponent.prototype.componentName = 'audio';
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

                _this.physics.update();

                _this.entities.update();

                _this.scripts.update(_this);

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

Entity.prototype.addComponent = function (component) {
  component.entity = this;
  this.components[component.componentName] = component;
};

Entity.prototype.destroy = function () {
  for (var i in this.components) {
    if (Object.hasOwnProperty.call(this.components, i)) {
      var component = this.components[i];
      var system = component.system;
      var entity = this;
      system.destroyComponent(entity);
    }
  }

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

SpriteComponent.prototype.componentName = 'sprite';
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

RenderSystem.prototype.addSpriteComponent = function (config) {
  var component = new Harmony.SpriteComponent(config, this);
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
// CONCATENATED MODULE: ./src/script-system/script-component.js
var ScriptComponent = function ScriptComponent(params, system) {
  this.system = system;
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

/* harmony default export */ var script_component = (ScriptComponent);
// CONCATENATED MODULE: ./src/script-system/script-system.js
/* global Harmony */
var ScriptSystem = function ScriptSystem() {
  this.components = [];
};

ScriptSystem.prototype.addScriptComponent = function (config) {
  var component = new Harmony.ScriptComponent(config, this);
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

ScriptSystem.prototype.destroyComponent = function (entity) {
  entity.components.script.mustDestroy = true;
};

/* harmony default export */ var script_system = (ScriptSystem);
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
};

StateSystem.prototype.addStateComponent = function (config) {
  var component = new Harmony.StateComponent(config, this);
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
      component.entity.x = position.x;
      component.entity.y = position.y;
      component.entity.angle = component.getAngle();
    }
  }
};

PhysicsSystem.prototype.destroyComponent = function (entity) {
  entity.components.physics.fixtures.forEach(function (fixture) {
    entity.components.physics.body.DestroyFixture(fixture);
  });
  entity.components.physics.system.world.DestroyBody(entity.components.physics.body);
  entity.components.physics.mustDestroy = true;
  entity.components.physics.mustDestroy = true;
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
  StateSystem: state_system
};
/* harmony default export */ var harmony = __webpack_exports__["default"] = (harmony_Harmony);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInByb3RvdHlwZSIsInBsYXkiLCJlbnRpdHkiLCJuYW1lIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsImF1ZGlvIiwiYnVmZmVyIiwidmFsdWUiLCJ2b2x1bWUiLCJzdGFydCIsInN0b3AiLCJhZGRBdWRpb0NvbXBvbmVudCIsImNvbmZpZyIsImNvbXBvbmVudCIsIkhhcm1vbnkiLCJBdWRpb0NvbXBvbmVudCIsInB1c2giLCJ1cGRhdGUiLCJzdGF0ZSIsInJlc3VtZSIsImkiLCJsZW5ndGgiLCJtdXN0RGVzdHJveSIsInNwbGljZSIsImRlc3Ryb3lDb21wb25lbnQiLCJwYXJhbXMiLCJzeXN0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wb25lbnROYW1lIiwiTG9hZGVyIiwiaW1hZ2VzQ2FjaGUiLCJhdWRpb0NhY2hlIiwibG9hZGluZyIsImNvbXBsZXRlIiwiZXJyb3JzIiwic3VjY2VzcyIsInF1ZXVlZCIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uU3VjY2VzcyIsIm9uZXJyb3IiLCJyZWFzb24iLCJvbkVycm9yIiwic3JjIiwidXJsIiwibG9hZEF1ZGlvIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwiZGVjb2RlQXVkaW9EYXRhIiwicmVzcG9uc2UiLCJzZW5kIiwib25TdGFydCIsIm9uUHJvZ3Jlc3MiLCJvbkNvbXBsZXRlIiwicHJvZ3Jlc3MiLCJNYXRoIiwiZmxvb3IiLCJpc05hTiIsIkVuZ2luZSIsImNhbnZhcyIsImxvYWRlciIsImxvb3AiLCJMb29wU3lzdGVtIiwic2NlbmUiLCJTY2VuZVN5c3RlbSIsInJlbmRlciIsIlJlbmRlclN5c3RlbSIsImVudGl0aWVzIiwiRW50aXR5U3lzdGVtIiwia2V5cyIsIktleVN5c3RlbSIsInBoeXNpY3MiLCJQaHlzaWNzU3lzdGVtIiwicG9pbnRlcnMiLCJQb2ludGVyU3lzdGVtIiwic2NyaXB0cyIsIlNjcmlwdFN5c3RlbSIsIlN0YXRlU3lzdGVtIiwiaGVscGVycyIsIkhlbHBlcnMiLCJvblN0ZXAiLCJjdXJyZW50IiwibXVzdFByZWxvYWQiLCJwcmVsb2FkIiwicmVxdWVzdENyZWF0ZSIsIm11c3RDcmVhdGUiLCJyZXF1ZXN0VXBkYXRlIiwiY3JlYXRlIiwibXVzdFVwZGF0ZSIsInJlcXVlc3REcmF3IiwibXVzdERyYXciLCJkcmF3IiwiZHJhd0RlYnVnRGF0YSIsIm11c3RTd2l0Y2giLCJkZXN0cm95IiwicmVxdWVzdGVkIiwicmVxdWVzdFByZWxvYWQiLCJydW4iLCJFbnRpdHkiLCJ0YWdzIiwieCIsInkiLCJhbmdsZSIsInNjYWxlIiwiYWRkQ29tcG9uZW50IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaGFzVGFnIiwidGFnIiwiaW5jbHVkZXMiLCJjcmVhdGVHcmlkIiwicm93cyIsImNvbHMiLCJncmlkIiwiQXJyYXkiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJjZWlsIiwicmFuZG9tIiwiZ2V0UmFuZG9tSXRlbXMiLCJhcnJheSIsInF1YW50aXR5IiwicmFuZG9tSXRlbXMiLCJyYW5kb21JbmRleCIsInNodWZmbGVBcnJheSIsImoiLCJLZXkiLCJrZXkiLCJlbmQiLCJob2xkIiwiaG9sZFRpbWUiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJlbmFibGVkIiwiZGVsdGEiLCJub3ciLCJ0aGVuIiwiZnJhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsImhhbmRsZUtleVVwIiwiZXZlbnQiLCJnZXRPclNldCIsImdldCIsInBlcmZvcm1hbmNlIiwiYWNjdW11bGF0b3IiLCJsYXN0VGltZSIsImxhc3RTdGVwIiwiZnBzIiwicGF1c2VkIiwidGltZXN0ZXAiLCJwYXVzZSIsInRpbWVzdGFtcCIsInN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJQb2ludGVyIiwiYWN0aXZlIiwiaWQiLCJ0eXBlIiwic3RhcnRYIiwic3RhcnRZIiwiZW5hYmxlUG9pbnRlcnMiLCJwb2ludGVyIiwic3R5bGUiLCJ0b3VjaEFjdGlvbiIsInVzZXJTZWxlY3QiLCJoYW5kbGVQb2ludGVyRG93biIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJnZXRQb2ludGVyQnlJRCIsIm91dHB1dCIsImdldEluYWN0aXZlUG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJjbGllbnRYIiwidGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJzdG9wUHJvcGFnYXRpb24iLCJTcHJpdGVDb21wb25lbnQiLCJ3aWR0aCIsImhlaWdodCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJhbmNob3JYIiwiYW5jaG9yWSIsInZpc2libGUiLCJnZXRDb250ZXh0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiY2xlYXIiLCJjbGVhclJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImFkZFNwcml0ZUNvbXBvbmVudCIsInVuc2hpZnQiLCJ0ZXh0IiwiZmlsbFRleHQiLCJjaXJjbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJyYWRpdXMiLCJQSSIsInN0cm9rZSIsImxpbmUiLCJtb3ZlVG8iLCJheCIsImF5IiwibGluZVRvIiwiYngiLCJieSIsInJlY3QiLCJzcHJpdGUiLCJTY2VuZSIsIm1ldGhvZHMiLCJlbmdpbmUiLCJyZXF1ZXN0U3dpdGNoIiwiU2NyaXB0Q29tcG9uZW50IiwibXVzdFN0YXJ0IiwiYWRkU2NyaXB0Q29tcG9uZW50Iiwic2NyaXB0IiwiU3RhdGVDb21wb25lbnQiLCJzdGF0ZXMiLCJhZGRTdGF0ZUNvbXBvbmVudCIsImV4aXQiLCJlbnRlciIsImFkZCIsIkIyV29ybGQiLCJCb3gyRCIsIkR5bmFtaWNzIiwiYjJXb3JsZCIsIkIyVmVjMiIsIkNvbW1vbiIsImIyVmVjMiIsIkIyRGVidWdEcmF3IiwiYjJEZWJ1Z0RyYXciLCJCMkNvbnRhY3RMaXN0ZW5lciIsImIyQ29udGFjdExpc3RlbmVyIiwid29ybGQiLCJjb250YWN0cyIsIlNldENvbnRhY3RMaXN0ZW5lciIsIkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJjb21wb25lbnRBIiwiR2V0Rml4dHVyZUEiLCJHZXRCb2R5IiwiY29tcG9uZW50QiIsIkdldEZpeHR1cmVCIiwiZW50aXR5QSIsImVudGl0eUIiLCJvbkNvbnRhY3RCZWdpbiIsIkVuZENvbnRhY3QiLCJvbkNvbnRhY3RFbmQiLCJQcmVTb2x2ZSIsIm9uQ29udGFjdFByZVNvbHZlIiwiUG9zdFNvbHZlIiwib25Db250YWN0UG9zdFNvbHZlIiwiZGVidWdEcmF3IiwiU2V0U3ByaXRlIiwiU2V0RHJhd1NjYWxlIiwiU2V0RmlsbEFscGhhIiwiU2V0RmxhZ3MiLCJlX3NoYXBlQml0IiwiQXBwZW5kRmxhZ3MiLCJlX2pvaW50Qml0IiwiU2V0RGVidWdEcmF3IiwibV9kZWJ1Z0RyYXciLCJtX3Nwcml0ZSIsImdyYXBoaWNzIiwic2V0R3Jhdml0eSIsIlNldEdyYXZpdHkiLCJEcmF3RGVidWdEYXRhIiwiYWRkUGh5c2ljc0NvbXBvbmVudCIsIlBoeXNpY3NDb21wb25lbnQiLCJTdGVwIiwiQ2xlYXJGb3JjZXMiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZ2V0QW5nbGUiLCJmaXh0dXJlcyIsImZvckVhY2giLCJmaXh0dXJlIiwiYm9keSIsIkRlc3Ryb3lGaXh0dXJlIiwiRGVzdHJveUJvZHkiLCJkZWZhdWx0cyIsImFsbG93U2xlZXAiLCJhd2FrZSIsImJ1bGxldCIsImZpeGVkUm90YXRpb24iLCJhbmd1bGFyRGFtcGluZyIsImFuZ3VsYXJWZWxvY2l0eSIsImxpbmVhckRhbXBpbmciLCJsaW5lYXJWZWxvY2l0eSIsInVzZXJEYXRhIiwiQjJCb2R5RGVmIiwiYjJCb2R5RGVmIiwiQjJCb2R5IiwiYjJCb2R5IiwiYm9keURlZiIsImIyX3N0YXRpY0JvZHkiLCJiMl9keW5hbWljQm9keSIsImIyX2tpbmVtYXRpY0JvZHkiLCJDcmVhdGVCb2R5Iiwic2V0TGluZWFyVmVsb2NpdHkiLCJTZXRBd2FrZSIsIlNldExpbmVhclZlbG9jaXR5IiwiR2V0UG9zaXRpb24iLCJHZXRBbmdsZSIsInNldFBvc2l0aW9uIiwiU2V0UG9zaXRpb24iLCJhcHBseUZvcmNlIiwiQXBwbHlGb3JjZSIsIkdldFdvcmxkQ2VudGVyIiwiZ2V0Rml4dHVyZURlZiIsIkIyRml4dHVyZURlZiIsImIyRml4dHVyZURlZiIsImZpeERlZiIsImRlbnNpdHkiLCJmcmljdGlvbiIsInJlc3RpdHV0aW9uIiwiaXNTZW5zb3IiLCJhZGRDaXJjbGUiLCJmaXh0dXJlRGVmaW5pdGlvbiIsIkIyQ2lyY2xlU2hhcGUiLCJDb2xsaXNpb24iLCJTaGFwZXMiLCJiMkNpcmNsZVNoYXBlIiwiZml4dHVyZURlZiIsInNoYXBlIiwibV9wIiwiQ3JlYXRlRml4dHVyZSIsIm1lIiwib3RoZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLGlCQUFpQixtQkFBTyxDQUFDLENBQXFCOzs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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LGlCQUFlLEVBQUVBLGdCQW5CSDtBQW9CZHhKLGNBQVksRUFBRUEsYUFwQkE7QUFxQmQ0SixnQkFBYyxFQUFFQSxlQXJCRjtBQXNCZDNKLGFBQVcsRUFBRUEsWUFBV0E7QUF0QlYsQ0FBaEI7QUF5QmV2RSw0RkFBZixFIiwiZmlsZSI6Imhhcm1vbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIYXJtb255XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhhcm1vbnlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cbmNvbnN0IEF1ZGlvU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpXG4gIHRoaXMubWFzdGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5tYXN0ZXIuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKGVudGl0eSwgbmFtZSkge1xuICBjb25zdCBzb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKClcbiAgY29uc3QgZ2FpbiA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKClcbiAgZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlID0gc291cmNlXG4gIHNvdXJjZS5idWZmZXIgPSB0aGlzLmNhY2hlW25hbWVdXG4gIHNvdXJjZS5jb25uZWN0KGdhaW4pXG4gIGdhaW4uY29ubmVjdCh0aGlzLm1hc3RlcilcbiAgZ2Fpbi5nYWluLnZhbHVlID0gZW50aXR5LmNvbXBvbmVudHMuYXVkaW8udm9sdW1lXG4gIHNvdXJjZS5zdGFydCgpXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBpZiAoZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlKSB7XG4gICAgZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlLnN0b3AoKVxuICB9XG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5hZGRBdWRpb0NvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQXVkaW9Db21wb25lbnQoY29uZmlnLCB0aGlzKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzdW1lKClcbiAgfVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9XG4gIH1cbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHRoaXMuc3RvcChlbnRpdHkpXG4gIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1N5c3RlbVxuIiwiY29uc3QgQXVkaW9Db21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdm9sdW1lOiAxXG4gIH0sIHBhcmFtcylcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5zb3VyY2UgPSBudWxsXG4gIHRoaXMudm9sdW1lID0gY29uZmlnLnZvbHVtZVxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2Vcbn1cblxuQXVkaW9Db21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudE5hbWUgPSAnYXVkaW8nXG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSW1hZ2UgKi9cblxuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmltYWdlc0NhY2hlID0ge31cbiAgdGhpcy5hdWRpb0NhY2hlID0ge31cbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICB0aGlzLmVycm9ycyA9IDBcbiAgdGhpcy5zdWNjZXNzID0gMFxuICB0aGlzLnF1ZXVlZCA9IDBcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMucXVldWVkKytcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgIHRoaXMuaW1hZ2VzQ2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHRoaXMub25TdWNjZXNzKGNvbmZpZylcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycysrXG4gICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5Mb2FkZXIucHJvdG90eXBlLmxvYWRBdWRpbyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5xdWV1ZWQrK1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgICAgdGhpcy5hdWRpb0NhY2hlW2NvbmZpZy5uYW1lXSA9IGJ1ZmZlclxuICAgICAgICB0aGlzLm9uU3VjY2Vzcyhjb25maWcpXG4gICAgICAgIHJlc29sdmUoYnVmZmVyKVxuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLmVycm9ycysrXG4gICAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICB9KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0pXG59XG5cbkxvYWRlci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25TdWNjZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vblByb2dyZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnF1ZXVlZCA+IDApIHtcbiAgICBpZiAoIXRoaXMuc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSB0cnVlXG4gICAgICB0aGlzLm9uU3RhcnQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5xdWV1ZWQgPT09IHRoaXMuc3VjY2VzcyArIHRoaXMuZXJyb3JzKSB7XG4gICAgICB0aGlzLnF1ZXVlZCA9IDBcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDBcbiAgICAgIHRoaXMuZXJyb3JzID0gMFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIH1cbiAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKCh0aGlzLnN1Y2Nlc3MgKyB0aGlzLmVycm9ycykgLyB0aGlzLnF1ZXVlZCAqIDEwMClcbiAgICBpZiAoaXNOYU4ocHJvZ3Jlc3MpKSB7XG4gICAgICBwcm9ncmVzcyA9IDEwMFxuICAgIH1cbiAgICB0aGlzLm9uUHJvZ3Jlc3MocHJvZ3Jlc3MpXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW5naW5lID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmxvYWRlciA9IG5ldyBIYXJtb255LkxvYWRlcigpXG4gIHRoaXMubG9vcCA9IG5ldyBIYXJtb255Lkxvb3BTeXN0ZW0oKVxuICB0aGlzLnNjZW5lID0gbmV3IEhhcm1vbnkuU2NlbmVTeXN0ZW0oKVxuICB0aGlzLnJlbmRlciA9IG5ldyBIYXJtb255LlJlbmRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuYXVkaW8gPSBuZXcgSGFybW9ueS5BdWRpb1N5c3RlbSgpXG4gIHRoaXMuZW50aXRpZXMgPSBuZXcgSGFybW9ueS5FbnRpdHlTeXN0ZW0oKVxuICB0aGlzLmtleXMgPSBuZXcgSGFybW9ueS5LZXlTeXN0ZW0oKVxuICB0aGlzLnBoeXNpY3MgPSBuZXcgSGFybW9ueS5QaHlzaWNzU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5wb2ludGVycyA9IG5ldyBIYXJtb255LlBvaW50ZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLnNjcmlwdHMgPSBuZXcgSGFybW9ueS5TY3JpcHRTeXN0ZW0oKVxuICB0aGlzLnN0YXRlID0gbmV3IEhhcm1vbnkuU3RhdGVTeXN0ZW0oKVxuICB0aGlzLmhlbHBlcnMgPSBuZXcgSGFybW9ueS5IZWxwZXJzKClcblxuICB0aGlzLmxvb3Aub25TdGVwID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0aGlzLnNjZW5lLmN1cnJlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RQcmVsb2FkKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkZXIubG9hZGluZykge1xuICAgICAgICAgIHRoaXMuc2NlbmUuY3VycmVudC5wcmVsb2FkKHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkZXIudXBkYXRlKClcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIuY2FjaGUgPSB0aGlzLmxvYWRlci5pbWFnZXNDYWNoZVxuICAgICAgICAgIHRoaXMuYXVkaW8uY2FjaGUgPSB0aGlzLmxvYWRlci5hdWRpb0NhY2hlXG4gICAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0Q3JlYXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdENyZWF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RVcGRhdGUoKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQuY3JlYXRlKHRoaXMpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0VXBkYXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdERyYXcoKVxuICAgICAgICB0aGlzLmtleXMudXBkYXRlKClcbiAgICAgICAgdGhpcy5wb2ludGVycy51cGRhdGUoKVxuICAgICAgICB0aGlzLmF1ZGlvLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMucGh5c2ljcy51cGRhdGUoKVxuICAgICAgICB0aGlzLmVudGl0aWVzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuc2NyaXB0cy51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnVwZGF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdERyYXcpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhdygpXG4gICAgICAgIHRoaXMucGh5c2ljcy5kcmF3RGVidWdEYXRhKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmRyYXcodGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NlbmUubXVzdFN3aXRjaCkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZXN0cm95KClcbiAgICAgIHRoaXMucG9pbnRlcnMuZGVzdHJveSgpXG4gICAgICB0aGlzLmtleXMuZGVzdHJveSgpXG4gICAgICB0aGlzLnNjZW5lLmN1cnJlbnQgPSB0aGlzLnNjZW5lLnJlcXVlc3RlZFxuICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0UHJlbG9hZCgpXG4gICAgfVxuICB9XG4gIHRoaXMubG9vcC5ydW4oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmVcbiIsImNvbnN0IEVudGl0eSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdGFnczogW10sXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGFuZ2xlOiAwLFxuICAgIHNjYWxlOiAxXG4gIH0sIHBhcmFtcylcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gIHRoaXMudGFncyA9IGNvbmZpZy50YWdzXG4gIHRoaXMueCA9IGNvbmZpZy54XG4gIHRoaXMueSA9IGNvbmZpZy55XG4gIHRoaXMuYW5nbGUgPSBjb25maWcuYW5nbGVcbiAgdGhpcy5zY2FsZSA9IGNvbmZpZy5zY2FsZVxufVxuXG5FbnRpdHkucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVudGl0eSA9IHRoaXNcbiAgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudC5jb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxufVxuXG5FbnRpdHkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jb21wb25lbnRzLCBpKSkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgICBjb25zdCBzeXN0ZW0gPSBjb21wb25lbnQuc3lzdGVtXG4gICAgICBjb25zdCBlbnRpdHkgPSB0aGlzXG4gICAgICBzeXN0ZW0uZGVzdHJveUNvbXBvbmVudChlbnRpdHkpXG4gICAgfVxuICB9XG4gIHRoaXMubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbkVudGl0eS5wcm90b3R5cGUuaGFzVGFnID0gZnVuY3Rpb24gKHRhZykge1xuICByZXR1cm4gdGhpcy50YWdzLmluY2x1ZGVzKHRhZylcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5XG4iLCJjb25zdCBIZWxwZXJzID0gZnVuY3Rpb24gKCkge31cblxuSGVscGVycy5wcm90b3R5cGUuY3JlYXRlR3JpZCA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IGdyaWQgPSBuZXcgQXJyYXkoY29scylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgZ3JpZFtpXSA9IG5ldyBBcnJheShyb3dzKVxuICB9XG4gIHJldHVybiBncmlkXG59XG5cbkhlbHBlcnMucHJvdG90eXBlLmdldFJhbmRvbUludCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSXRlbXMgPSBmdW5jdGlvbiAoYXJyYXksIHF1YW50aXR5KSB7XG4gIGNvbnN0IHJhbmRvbUl0ZW1zID0gW11cbiAgZm9yIChsZXQgaSA9IHF1YW50aXR5OyBpLS07KSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB0aGlzLmdldFJhbmRvbUludCgwLCBhcnJheS5sZW5ndGggLSAxKVxuICAgIHJhbmRvbUl0ZW1zLnB1c2goYXJyYXlbcmFuZG9tSW5kZXhdKVxuICAgIGFycmF5LnNwbGljZShyYW5kb21JbmRleCwgMSlcbiAgfVxuICByZXR1cm4gcmFuZG9tSXRlbXNcbn1cblxuSGVscGVycy5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpXG4gICAgY29uc3QgeCA9IGFycmF5W2ldXG4gICAgYXJyYXlbaV0gPSBhcnJheVtqXVxuICAgIGFycmF5W2pdID0geFxuICB9XG4gIHJldHVybiBhcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxwZXJzXG4iLCJjb25zdCBLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRoaXMua2V5ID0ga2V5XG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBLZXlTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMuZGVsdGEgPSAwXG4gIHRoaXMubm93ID0gMFxuICB0aGlzLnRoZW4gPSAwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpLCBmYWxzZSlcbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtldmVudC5rZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbZXZlbnQua2V5XS5ob2xkID0gdHJ1ZVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSBmYWxzZVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0T3JTZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG5ldyBIYXJtb255LktleShrZXkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQoa2V5KVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgIHRoaXMuZnJhbWUrK1xuICAgIHRoaXMubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuXG4gICAgdGhpcy50aGVuID0gdGhpcy5ub3dcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChrZXkuaG9sZCkge1xuICAgICAgICBrZXkuaG9sZFRpbWUgKz0gdGhpcy5kZWx0YVxuICAgICAgICBrZXkuZW5kRnJhbWUgPSAtMVxuICAgICAgICBpZiAoa2V5LnN0YXJ0RnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleS5ob2xkVGltZSA9IDBcbiAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICBpZiAoa2V5LmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgIGtleS5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAga2V5LnN0YXJ0ID0gKGtleS5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAga2V5LmVuZCA9IChrZXkuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgfVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleVN5c3RlbVxuIiwiY29uc3QgTG9vcFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY2N1bXVsYXRvciA9IDBcbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5sYXN0VGltZSA9IDBcbiAgdGhpcy5sYXN0U3RlcCA9IDBcbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLmZyYW1lID0gMFxuICB0aGlzLnBhdXNlZCA9IGZhbHNlXG4gIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gdGhpcy5mcHNcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUuY29udGludWUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGF1c2VkID0gZmFsc2Vcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gIHRpbWVzdGFtcCA9IHRpbWVzdGFtcCB8fCAwXG4gIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gdGhpcy5mcHNcbiAgdGhpcy5hY2N1bXVsYXRvciArPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lXG4gIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXBcbiAgd2hpbGUgKCF0aGlzLnBhdXNlZCAmJiB0aGlzLmFjY3VtdWxhdG9yID49IHRoaXMudGltZXN0ZXApIHtcbiAgICB0aGlzLnN0ZXAoKVxuICAgIHRoaXMuZGVsdGEgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RTdGVwXG4gICAgdGhpcy5sYXN0U3RlcCA9IHRpbWVzdGFtcFxuICAgIHRoaXMuYWNjdW11bGF0b3IgLT0gdGhpcy50aW1lc3RlcFxuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW4uYmluZCh0aGlzKSlcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mcmFtZSsrXG4gIHRoaXMub25TdGVwKClcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUub25TdGVwID0gZnVuY3Rpb24gKCkge31cblxuZXhwb3J0IGRlZmF1bHQgTG9vcFN5c3RlbVxuIiwiY29uc3QgUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZVxuICB0aGlzLmhvbGQgPSBmYWxzZVxuICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5lbmQgPSBmYWxzZVxuICB0aGlzLmhvbGRUaW1lID0gMFxuICB0aGlzLnN0YXJ0RnJhbWUgPSAwXG4gIHRoaXMuZW5kRnJhbWUgPSAwXG4gIHRoaXMuaWQgPSAwXG4gIHRoaXMudHlwZSA9IG51bGxcbiAgdGhpcy5zdGFydFggPSAwXG4gIHRoaXMuc3RhcnRZID0gMFxuICB0aGlzLnggPSAwXG4gIHRoaXMueSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgUG9pbnRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5lbmFibGVQb2ludGVycygpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldE9yU2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW3BvaW50ZXJdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbcG9pbnRlcl0gPSBuZXcgSGFybW9ueS5Qb2ludGVyKHBvaW50ZXIpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVbcG9pbnRlcl1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQocG9pbnRlcilcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZW5hYmxlUG9pbnRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FudmFzLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gIHRoaXMuY2FudmFzLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRQb2ludGVyQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5pZCA9PT0gaWQpIHtcbiAgICAgICAgb3V0cHV0ID0gcG9pbnRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldEluYWN0aXZlUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG91dHB1dCA9IGZhbHNlXG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKHBvaW50ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlckRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpIHx8IHRoaXMuZ2V0SW5hY3RpdmVQb2ludGVyKClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IHRydWVcbiAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgcG9pbnRlci50eXBlID0gZXZlbnQucG9pbnRlclR5cGUgLy8gJ21vdXNlJywgJ3BlbicsICd0b3VjaCdcbiAgICBwb2ludGVyLmhvbGQgPSB0cnVlXG4gICAgcG9pbnRlci5zdGFydFggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gICAgcG9pbnRlci54ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci55ID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IGZhbHNlXG4gICAgcG9pbnRlci5ob2xkID0gZmFsc2VcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIHJldHVybiBmYWxzZVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICB0aGlzLmZyYW1lKytcbiAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlblxuICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgICBpZiAocG9pbnRlci5ob2xkKSB7XG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKHBvaW50ZXIuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSA9IDBcbiAgICAgICAgICBwb2ludGVyLnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICAgIGlmIChwb2ludGVyLmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRlci5zdGFydCA9IChwb2ludGVyLnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICAgIHBvaW50ZXIuZW5kID0gKHBvaW50ZXIuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyU3lzdGVtXG4iLCJjb25zdCBTcHJpdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaW1hZ2U6IG51bGwsXG4gICAgd2lkdGg6IDUwLFxuICAgIGhlaWdodDogNTAsXG4gICAgc291cmNlWDogMCxcbiAgICBzb3VyY2VZOiAwLFxuICAgIHNvdXJjZVdpZHRoOiAwLFxuICAgIHNvdXJjZUhlaWdodDogMCxcbiAgICBhbmNob3JYOiAwLjUsXG4gICAgYW5jaG9yWTogMC41LFxuICAgIHZpc2libGU6IHRydWVcbiAgfSwgcGFyYW1zKVxuXG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5pbWFnZSA9IGNvbmZpZy5pbWFnZVxuICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoXG4gIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodFxuICB0aGlzLnNvdXJjZVggPSBjb25maWcuc291cmNlWFxuICB0aGlzLnNvdXJjZVkgPSBjb25maWcuc291cmNlWVxuICB0aGlzLnNvdXJjZVdpZHRoID0gY29uZmlnLnNvdXJjZVdpZHRoXG4gIHRoaXMuc291cmNlSGVpZ2h0ID0gY29uZmlnLnNvdXJjZUhlaWdodFxuICB0aGlzLmFuY2hvclggPSBjb25maWcuYW5jaG9yWFxuICB0aGlzLmFuY2hvclkgPSBjb25maWcuYW5jaG9yWVxuICB0aGlzLnZpc2libGUgPSBjb25maWcudmlzaWJsZVxufVxuXG5TcHJpdGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudE5hbWUgPSAnc3ByaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBTcHJpdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255IEltYWdlICovXG5cbmNvbnN0IFJlbmRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBjb25maWcudXJsXG4gIH0pXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgcmV0dXJuIHRoaXMuY2FjaGVbaW1hZ2VdXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhcigpXG4gIC8vIHRoaXMuY29udGV4dC5zYXZlKClcblxuICAvLyB0cmFuc2xhdGUgdG8gY2FtZXJhIGNlbnRlclxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgICh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgICh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKVxuICAvLyApXG5cbiAgLy8gcm90YXRlXG4gIC8vIHRoaXMuY29udGV4dC5yb3RhdGUodGhpcy5jYW1lcmEuYW5nbGUpXG5cbiAgLy8gc2NhbGVcbiAgLy8gdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuY2FtZXJhLnpvb20sIHRoaXMuY2FtZXJhLnpvb20pXG5cbiAgLy8gdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCdcbiAgLy8gdGhpcy5jYW52YXMuY2lyY2xlKDAsIDAsIDEwKVxuXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgLSh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgIC0odGhpcy5jYW1lcmEuaGVpZ2h0IC8gMilcbiAgLy8gKVxuXG4gIC8vIHRyYW5zbGF0ZVxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi54LFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi55XG4gIC8vIClcblxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tcG9uZW50LnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKVxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkueCArIGNvbXBvbmVudC53aWR0aCAqIDAuNSAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUgLSBjb21wb25lbnQud2lkdGggKiBjb21wb25lbnQuYW5jaG9yWCAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUsXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS55ICsgY29tcG9uZW50LmhlaWdodCAqIDAuNSAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUgLSBjb21wb25lbnQuaGVpZ2h0ICogY29tcG9uZW50LmFuY2hvclkgKiBjb21wb25lbnQuZW50aXR5LnNjYWxlXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShjb21wb25lbnQuZW50aXR5LmFuZ2xlKVxuICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUoXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS5zY2FsZSxcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnNjYWxlXG4gICAgICAgIClcblxuICAgICAgICBpZiAoY29tcG9uZW50LnNvdXJjZVdpZHRoID09PSAwKSB7XG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVdpZHRoID0gY29tcG9uZW50LmltYWdlLndpZHRoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcG9uZW50LnNvdXJjZUhlaWdodCA9PT0gMCkge1xuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VIZWlnaHQgPSBjb21wb25lbnQuaW1hZ2UuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgIGNvbXBvbmVudC5pbWFnZSxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlWCxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlWSxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlV2lkdGgsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZUhlaWdodCxcbiAgICAgICAgICBjb21wb25lbnQud2lkdGggKiAtMC41LCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC5oZWlnaHQgKiAtMC41LCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC53aWR0aCwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQuaGVpZ2h0IC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGV4dC5yZXN0b3JlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5hZGRTcHJpdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNwcml0ZUNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIHRoaXMuY29tcG9uZW50cy51bnNoaWZ0KGNvbXBvbmVudClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5maWxsVGV4dChjb25maWcudGV4dCwgY29uZmlnLngsIGNvbmZpZy55KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmNpcmNsZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gIHRoaXMuY29udGV4dC5hcmMoY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcucmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUubGluZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gIHRoaXMuY29udGV4dC5tb3ZlVG8oY29uZmlnLmF4LCBjb25maWcuYXkpXG4gIHRoaXMuY29udGV4dC5saW5lVG8oY29uZmlnLmJ4LCBjb25maWcuYnkpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLnJlY3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5yZWN0KGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBlbnRpdHkuY29tcG9uZW50cy5zcHJpdGUubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN5c3RlbVxuIiwiY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHRoaXMubWV0aG9kcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHByZWxvYWQ6ICgpID0+IHt9LFxuICAgIGNyZWF0ZTogKCkgPT4ge30sXG4gICAgdXBkYXRlOiAoKSA9PiB7fSxcbiAgICBkcmF3OiAoKSA9PiB7fVxuICB9LCBwYXJhbXMpXG59XG5cblNjZW5lLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLnByZWxvYWQoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLmNyZWF0ZShlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMudXBkYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuZHJhdyhlbmdpbmUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lXG4iLCJjb25zdCBTY2VuZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB0aGlzLnJlcXVlc3RlZCA9IG51bGxcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUuc3dpdGNoID0gZnVuY3Rpb24gKHNjZW5lKSB7XG4gIHRoaXMucmVxdWVzdGVkID0gc2NlbmVcbiAgdGhpcy5yZXF1ZXN0U3dpdGNoKClcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RQcmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gdHJ1ZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSB0cnVlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IHRydWVcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0RHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSB0cnVlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0U3dpdGNoID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVTeXN0ZW1cbiIsImNvbnN0IFNjcmlwdENvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3RhcnQgPSB0cnVlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubWV0aG9kcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHN0YXJ0OiAoKSA9PiB7fSxcbiAgICB1cGRhdGU6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuU2NyaXB0Q29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnROYW1lID0gJ3NjcmlwdCdcblxuU2NyaXB0Q29tcG9uZW50LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgdGhpcy5tdXN0U3RhcnQgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSB0cnVlXG4gIHJldHVybiB0aGlzLm1ldGhvZHMuc3RhcnQoZW5naW5lKVxufVxuXG5TY3JpcHRDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy51cGRhdGUoZW5naW5lKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFNjcmlwdFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuU2NyaXB0U3lzdGVtLnByb3RvdHlwZS5hZGRTY3JpcHRDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNjcmlwdENvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5TY3JpcHRTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTdGFydCkge1xuICAgICAgY29tcG9uZW50LnN0YXJ0KGVuZ2luZSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFVwZGF0ZSkge1xuICAgICAgY29tcG9uZW50LnVwZGF0ZShlbmdpbmUpXG4gICAgfVxuICB9XG59XG5cblNjcmlwdFN5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZW50aXR5LmNvbXBvbmVudHMuc2NyaXB0Lm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRTeXN0ZW1cbiIsImNvbnN0IFN0YXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHBhcmFtcy5jdXJyZW50XG4gIHRoaXMuY3VycmVudCA9IG51bGxcbiAgdGhpcy5zdGF0ZXMgPSBwYXJhbXMuc3RhdGVzXG59XG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnROYW1lID0gJ3N0YXRlJ1xuXG5TdGF0ZUNvbXBvbmVudC5wcm90b3R5cGUuc3dpdGNoID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgU3RhdGVTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS5hZGRTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuU3RhdGVDb21wb25lbnQoY29uZmlnLCB0aGlzKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGlmIChjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmV4aXQoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGNvbXBvbmVudC5jdXJyZW50ID0gY29tcG9uZW50LnJlcXVlc3RlZFxuICAgICAgaWYgKGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC5tdXN0U3dpdGNoID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5jdXJyZW50ICYmIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLnVwZGF0ZSkge1xuICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0udXBkYXRlKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnN0YXRlLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZVN5c3RlbVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW50aXR5U3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0gW11cbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGVudGl0eSA9IG5ldyBIYXJtb255LkVudGl0eShjb25maWcpXG4gIHRoaXMuY2FjaGUucHVzaChlbnRpdHkpXG4gIHJldHVybiBlbnRpdHlcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICBpZiAoZW50aXR5Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNhY2hlLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICBlbnRpdHkuZGVzdHJveSgpXG4gIH1cbiAgdGhpcy5jYWNoZSA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eVN5c3RlbVxuIiwiLyogZ2xvYmFsIEJveDJEIEhhcm1vbnkgKi9cblxuY29uc3QgUGh5c2ljc1N5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgY29uc3QgQjJXb3JsZCA9IEJveDJELkR5bmFtaWNzLmIyV29ybGRcbiAgY29uc3QgQjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyXG4gIGNvbnN0IEIyRGVidWdEcmF3ID0gQm94MkQuRHluYW1pY3MuYjJEZWJ1Z0RyYXdcbiAgY29uc3QgQjJDb250YWN0TGlzdGVuZXIgPSBCb3gyRC5EeW5hbWljcy5iMkNvbnRhY3RMaXN0ZW5lclxuXG4gIHRoaXMud29ybGQgPSBuZXcgQjJXb3JsZChuZXcgQjJWZWMyKDAsIDApLCB0cnVlKVxuICB0aGlzLmZwcyA9IDYwXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuc2NhbGUgPSAxMDBcbiAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgdGhpcy5jb250YWN0cyA9IG5ldyBCMkNvbnRhY3RMaXN0ZW5lcigpXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhY3RzXG5cbiAgdGhpcy53b3JsZC5TZXRDb250YWN0TGlzdGVuZXIodGhpcy5jb250YWN0cylcblxuICB0aGlzLmNvbnRhY3RzLkJlZ2luQ29udGFjdCA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgY29tcG9uZW50QS5vbkNvbnRhY3RCZWdpbihlbnRpdHlBLCBlbnRpdHlCKVxuICAgIGNvbXBvbmVudEIub25Db250YWN0QmVnaW4oZW50aXR5QiwgZW50aXR5QSlcbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuRW5kQ29udGFjdCA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgY29tcG9uZW50QS5vbkNvbnRhY3RFbmQoZW50aXR5QSwgZW50aXR5QilcbiAgICBjb21wb25lbnRCLm9uQ29udGFjdEVuZChlbnRpdHlCLCBlbnRpdHlBKVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5QcmVTb2x2ZSA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgY29tcG9uZW50QS5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIGNvbXBvbmVudEIub25Db250YWN0UHJlU29sdmUoZW50aXR5QiwgZW50aXR5QSlcbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuUG9zdFNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBjb21wb25lbnRBLm9uQ29udGFjdFBvc3RTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIGNvbXBvbmVudEIub25Db250YWN0UG9zdFNvbHZlKGVudGl0eUIsIGVudGl0eUEpXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVidWdcblxuICBjb25zdCBkZWJ1Z0RyYXcgPSBuZXcgQjJEZWJ1Z0RyYXcodGhpcy5jb250ZXh0KVxuICBkZWJ1Z0RyYXcuU2V0U3ByaXRlKGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpKVxuICBkZWJ1Z0RyYXcuU2V0RHJhd1NjYWxlKHRoaXMuc2NhbGUpXG4gIGRlYnVnRHJhdy5TZXRGaWxsQWxwaGEoMC41KVxuICBkZWJ1Z0RyYXcuU2V0RmlsbEFscGhhKDAuNSlcbiAgZGVidWdEcmF3LlNldEZsYWdzKEIyRGVidWdEcmF3LmVfc2hhcGVCaXQpXG4gIGRlYnVnRHJhdy5BcHBlbmRGbGFncyhCMkRlYnVnRHJhdy5lX2pvaW50Qml0KVxuICB0aGlzLndvcmxkLlNldERlYnVnRHJhdyhkZWJ1Z0RyYXcpXG4gIHRoaXMud29ybGQubV9kZWJ1Z0RyYXcubV9zcHJpdGUuZ3JhcGhpY3MuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuc2V0R3Jhdml0eSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy53b3JsZC5TZXRHcmF2aXR5KGNvbmZpZylcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZHJhd0RlYnVnRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53b3JsZC5EcmF3RGVidWdEYXRhKClcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkUGh5c2ljc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuUGh5c2ljc0NvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud29ybGQuU3RlcCgxIC8gdGhpcy5mcHMsIDgsIDMpXG4gIHRoaXMud29ybGQuQ2xlYXJGb3JjZXMoKVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBjb21wb25lbnQuZ2V0UG9zaXRpb24oKVxuICAgICAgY29tcG9uZW50LmVudGl0eS54ID0gcG9zaXRpb24ueFxuICAgICAgY29tcG9uZW50LmVudGl0eS55ID0gcG9zaXRpb24ueVxuICAgICAgY29tcG9uZW50LmVudGl0eS5hbmdsZSA9IGNvbXBvbmVudC5nZXRBbmdsZSgpXG4gICAgfVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnBoeXNpY3MuZml4dHVyZXMuZm9yRWFjaCgoZml4dHVyZSkgPT4ge1xuICAgIGVudGl0eS5jb21wb25lbnRzLnBoeXNpY3MuYm9keS5EZXN0cm95Rml4dHVyZShmaXh0dXJlKVxuICB9KVxuICBlbnRpdHkuY29tcG9uZW50cy5waHlzaWNzLnN5c3RlbS53b3JsZC5EZXN0cm95Qm9keShlbnRpdHkuY29tcG9uZW50cy5waHlzaWNzLmJvZHkpXG4gIGVudGl0eS5jb21wb25lbnRzLnBoeXNpY3MubXVzdERlc3Ryb3kgPSB0cnVlXG4gIGVudGl0eS5jb21wb25lbnRzLnBoeXNpY3MubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3NTeXN0ZW1cbiIsIi8qIGdsb2JhbCBCb3gyRCAqL1xuXG5jb25zdCBQaHlzaWNzQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcywgc3lzdGVtKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICAgIHR5cGU6ICdkeW5hbWljJyxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgYWxsb3dTbGVlcDogdHJ1ZSxcbiAgICBhd2FrZTogdHJ1ZSxcbiAgICBidWxsZXQ6IGZhbHNlLFxuICAgIGZpeGVkUm90YXRpb246IGZhbHNlLFxuICAgIGFuZ2xlOiAwLFxuICAgIGFuZ3VsYXJEYW1waW5nOiAwLFxuICAgIGFuZ3VsYXJWZWxvY2l0eTogMCxcbiAgICBsaW5lYXJEYW1waW5nOiAwLFxuICAgIGxpbmVhclZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB1c2VyRGF0YToge31cbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcblxuICB0aGlzLmVudGl0eSA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuYm9keSA9IG51bGxcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5maXh0dXJlcyA9IFtdXG4gIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlXG5cbiAgY29uc3QgQjJCb2R5RGVmID0gQm94MkQuRHluYW1pY3MuYjJCb2R5RGVmXG4gIGNvbnN0IEIyQm9keSA9IEJveDJELkR5bmFtaWNzLmIyQm9keVxuXG4gIGNvbnN0IGJvZHlEZWYgPSBuZXcgQjJCb2R5RGVmKClcbiAgYm9keURlZi5wb3NpdGlvbi54ID0gY29uZmlnLnggLyB0aGlzLnN5c3RlbS5zY2FsZVxuICBib2R5RGVmLnBvc2l0aW9uLnkgPSBjb25maWcueSAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIGJvZHlEZWYuYWN0aXZlID0gY29uZmlnLmFjdGl2ZVxuICBib2R5RGVmLmFsbG93U2xlZXAgPSBjb25maWcuYWxsb3dTbGVlcFxuICBib2R5RGVmLmF3YWtlID0gY29uZmlnLmF3YWtlXG4gIGJvZHlEZWYuYnVsbGV0ID0gY29uZmlnLmJ1bGxldFxuICBib2R5RGVmLmZpeGVkUm90YXRpb24gPSBjb25maWcuZml4ZWRSb3RhdGlvblxuICBib2R5RGVmLmFuZ2xlID0gY29uZmlnLmFuZ2xlXG4gIGJvZHlEZWYuYW5ndWxhckRhbXBpbmcgPSBjb25maWcuYW5ndWxhckRhbXBpbmdcbiAgYm9keURlZi5hbmd1bGFyVmVsb2NpdHkgPSBjb25maWcuYW5ndWxhclZlbG9jaXR5XG4gIGJvZHlEZWYubGluZWFyRGFtcGluZyA9IGNvbmZpZy5saW5lYXJEYW1waW5nXG4gIGJvZHlEZWYubGluZWFyVmVsb2NpdHkgPSBjb25maWcubGluZWFyVmVsb2NpdHlcbiAgYm9keURlZi51c2VyRGF0YSA9IGNvbmZpZy51c2VyRGF0YVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX3N0YXRpY0JvZHlcbiAgfVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICdkeW5hbWljJykge1xuICAgIGJvZHlEZWYudHlwZSA9IEIyQm9keS5iMl9keW5hbWljQm9keVxuICB9XG5cbiAgaWYgKHRoaXMudHlwZSA9PT0gJ2tpbmVtYXRpYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfa2luZW1hdGljQm9keVxuICB9XG5cbiAgdGhpcy5ib2R5ID0gdGhpcy5zeXN0ZW0ud29ybGQuQ3JlYXRlQm9keShib2R5RGVmKVxuICB0aGlzLmJvZHkuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmJvZHkuY29tcG9uZW50ID0gdGhpc1xufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnROYW1lID0gJ3BoeXNpY3MnXG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLnNldExpbmVhclZlbG9jaXR5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmJvZHkuU2V0QXdha2UodHJ1ZSlcbiAgdGhpcy5ib2R5LlNldExpbmVhclZlbG9jaXR5KHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc3lzdGVtLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zeXN0ZW0uc2NhbGVcbiAgfSlcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5ib2R5LkdldFBvc2l0aW9uKClcbiAgcmV0dXJuIHtcbiAgICB4OiBwb3NpdGlvbi54ICogdGhpcy5zeXN0ZW0uc2NhbGUsXG4gICAgeTogcG9zaXRpb24ueSAqIHRoaXMuc3lzdGVtLnNjYWxlXG4gIH1cbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmJvZHkuR2V0QW5nbGUoKVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5ib2R5LlNldFBvc2l0aW9uKHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc3lzdGVtLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zeXN0ZW0uc2NhbGVcbiAgfSlcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuYXBwbHlGb3JjZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5ib2R5LkFwcGx5Rm9yY2UoY29uZmlnLCB0aGlzLmJvZHkuR2V0V29ybGRDZW50ZXIoKSlcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0Rml4dHVyZURlZiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgQjJGaXh0dXJlRGVmID0gQm94MkQuRHluYW1pY3MuYjJGaXh0dXJlRGVmXG4gIGNvbnN0IGZpeERlZiA9IG5ldyBCMkZpeHR1cmVEZWYoKVxuICBmaXhEZWYuZGVuc2l0eSA9IGNvbmZpZy5kZW5zaXR5XG4gIGZpeERlZi5mcmljdGlvbiA9IGNvbmZpZy5mcmljdGlvblxuICBmaXhEZWYucmVzdGl0dXRpb24gPSBjb25maWcucmVzdGl0dXRpb25cbiAgZml4RGVmLmlzU2Vuc29yID0gY29uZmlnLmlzU2Vuc29yXG4gIHJldHVybiBmaXhEZWZcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuYWRkQ2lyY2xlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgcmFkaXVzOiAyNSxcbiAgICBkZW5zaXR5OiAxLFxuICAgIGZyaWN0aW9uOiAwLjUsXG4gICAgcmVzdGl0dXRpb246IDAuMyxcbiAgICBpc1NlbnNvcjogZmFsc2VcbiAgfVxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG4gIGNvbnN0IGZpeHR1cmVEZWZpbml0aW9uID0gdGhpcy5nZXRGaXh0dXJlRGVmKGNvbmZpZylcbiAgY29uc3QgQjJDaXJjbGVTaGFwZSA9IEJveDJELkNvbGxpc2lvbi5TaGFwZXMuYjJDaXJjbGVTaGFwZVxuICBjb25zdCBmaXh0dXJlRGVmID0gZml4dHVyZURlZmluaXRpb25cbiAgZml4dHVyZURlZi5zaGFwZSA9IG5ldyBCMkNpcmNsZVNoYXBlKGNvbmZpZy5yYWRpdXMgLyB0aGlzLnN5c3RlbS5zY2FsZSlcbiAgZml4dHVyZURlZi5zaGFwZS5tX3AgPSB7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnN5c3RlbS5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIH1cbiAgY29uc3QgZml4dHVyZSA9IHRoaXMuYm9keS5DcmVhdGVGaXh0dXJlKGZpeHR1cmVEZWYpXG4gIHRoaXMuZml4dHVyZXMucHVzaChmaXh0dXJlKVxuICByZXR1cm4gZml4dHVyZVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5vbkNvbnRhY3RCZWdpbiA9IGZ1bmN0aW9uIChtZSwgb3RoZXIpIHt9XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLm9uQ29udGFjdEVuZCA9IGZ1bmN0aW9uIChtZSwgb3RoZXIpIHt9XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLm9uQ29udGFjdFByZVNvbHZlID0gZnVuY3Rpb24gKG1lLCBvdGhlcikge31cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUub25Db250YWN0UG9zdFNvbHZlID0gZnVuY3Rpb24gKG1lLCBvdGhlcikge31cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc0NvbXBvbmVudFxuIiwiaW1wb3J0IEF1ZGlvU3lzdGVtIGZyb20gJy4vYXVkaW8tc3lzdGVtL2F1ZGlvLXN5c3RlbSdcbmltcG9ydCBBdWRpb0NvbXBvbmVudCBmcm9tICcuL2F1ZGlvLXN5c3RlbS9hdWRpby1jb21wb25lbnQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyL2xvYWRlcidcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJ1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eS1zeXN0ZW0vZW50aXR5J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzL2hlbHBlcnMnXG5pbXBvcnQgS2V5IGZyb20gJy4va2V5LXN5c3RlbS9rZXknXG5pbXBvcnQgS2V5U3lzdGVtIGZyb20gJy4va2V5LXN5c3RlbS9rZXktc3lzdGVtJ1xuaW1wb3J0IExvb3BTeXN0ZW0gZnJvbSAnLi9sb29wLXN5c3RlbS9sb29wLXN5c3RlbSdcbmltcG9ydCBQb2ludGVyIGZyb20gJy4vcG9pbnRlci1zeXN0ZW0vcG9pbnRlcidcbmltcG9ydCBQb2ludGVyU3lzdGVtIGZyb20gJy4vcG9pbnRlci1zeXN0ZW0vcG9pbnRlci1zeXN0ZW0nXG5pbXBvcnQgU3ByaXRlQ29tcG9uZW50IGZyb20gJy4vcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50J1xuaW1wb3J0IFJlbmRlclN5c3RlbSBmcm9tICcuL3JlbmRlci1zeXN0ZW0vcmVuZGVyLXN5c3RlbSdcbmltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lLXN5c3RlbS9zY2VuZSdcbmltcG9ydCBTY2VuZVN5c3RlbSBmcm9tICcuL3NjZW5lLXN5c3RlbS9zY2VuZS1zeXN0ZW0nXG5pbXBvcnQgU2NyaXB0Q29tcG9uZW50IGZyb20gJy4vc2NyaXB0LXN5c3RlbS9zY3JpcHQtY29tcG9uZW50J1xuaW1wb3J0IFNjcmlwdFN5c3RlbSBmcm9tICcuL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LXN5c3RlbSdcbmltcG9ydCBTdGF0ZUNvbXBvbmVudCBmcm9tICcuL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQnXG5pbXBvcnQgU3RhdGVTeXN0ZW0gZnJvbSAnLi9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtJ1xuaW1wb3J0IEVudGl0eVN5c3RlbSBmcm9tICcuL2VudGl0eS1zeXN0ZW0vZW50aXR5LXN5c3RlbSdcbmltcG9ydCBQaHlzaWNzU3lzdGVtIGZyb20gJy4vcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0nXG5pbXBvcnQgUGh5c2ljc0NvbXBvbmVudCBmcm9tICcuL3BoeXNpY3Mtc3lzdGVtL3BoeXNpY3MtY29tcG9uZW50J1xuXG5jb25zdCBIYXJtb255ID0ge1xuICBBdWRpb1N5c3RlbTogQXVkaW9TeXN0ZW0sXG4gIEF1ZGlvQ29tcG9uZW50OiBBdWRpb0NvbXBvbmVudCxcbiAgTG9hZGVyOiBMb2FkZXIsXG4gIEVuZ2luZTogRW5naW5lLFxuICBFbnRpdHk6IEVudGl0eSxcbiAgRW50aXR5U3lzdGVtOiBFbnRpdHlTeXN0ZW0sXG4gIEhlbHBlcnM6IEhlbHBlcnMsXG4gIEtleTogS2V5LFxuICBLZXlTeXN0ZW06IEtleVN5c3RlbSxcbiAgTG9vcFN5c3RlbTogTG9vcFN5c3RlbSxcbiAgUGh5c2ljc0NvbXBvbmVudDogUGh5c2ljc0NvbXBvbmVudCxcbiAgUGh5c2ljc1N5c3RlbTogUGh5c2ljc1N5c3RlbSxcbiAgUG9pbnRlcjogUG9pbnRlcixcbiAgUG9pbnRlclN5c3RlbTogUG9pbnRlclN5c3RlbSxcbiAgU3ByaXRlQ29tcG9uZW50OiBTcHJpdGVDb21wb25lbnQsXG4gIFJlbmRlclN5c3RlbTogUmVuZGVyU3lzdGVtLFxuICBTY2VuZTogU2NlbmUsXG4gIFNjZW5lU3lzdGVtOiBTY2VuZVN5c3RlbSxcbiAgU2NyaXB0Q29tcG9uZW50OiBTY3JpcHRDb21wb25lbnQsXG4gIFNjcmlwdFN5c3RlbTogU2NyaXB0U3lzdGVtLFxuICBTdGF0ZUNvbXBvbmVudDogU3RhdGVDb21wb25lbnQsXG4gIFN0YXRlU3lzdGVtOiBTdGF0ZVN5c3RlbVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXJtb255XG4iXSwic291cmNlUm9vdCI6IiJ9