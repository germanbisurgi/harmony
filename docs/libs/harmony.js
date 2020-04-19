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
  this.threshold = 200;
};

AudioSystem.prototype.calculateVolumeByDistance = function (entity) {
  var ax = this.listener.x;
  var ay = this.listener.y;
  var bx = entity.x;
  var by = entity.y;
  var distance = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by));
  var norm = distance / this.threshold;

  if (norm > 1) {
    norm = 1;
  }

  if (norm < 0) {
    norm = 0;
  }

  return 1.0 - norm;
};

AudioSystem.prototype.play = function (entity, name) {
  var source = this.context.createBufferSource();
  var gain = entity.components.audio.gain;
  entity.components.audio.source = source;
  source.buffer = this.cache[name];
  source.connect(gain);
  gain.connect(this.master);
  source.start();
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
      component.gain.gain.value = this.calculateVolumeByDistance(entity);
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
    restitution: 0.3,
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
    restitution: 0.3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImF1ZGlvQ29tcG9uZW50TmFtZSIsImxpc3RlbmVyIiwieCIsImlubmVyV2lkdGgiLCJ5IiwiaW5uZXJIZWlnaHQiLCJ0aHJlc2hvbGQiLCJwcm90b3R5cGUiLCJjYWxjdWxhdGVWb2x1bWVCeURpc3RhbmNlIiwiZW50aXR5IiwiYXgiLCJheSIsImJ4IiwiYnkiLCJkaXN0YW5jZSIsIk1hdGgiLCJzcXJ0Iiwibm9ybSIsInBsYXkiLCJuYW1lIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsImF1ZGlvIiwiYnVmZmVyIiwic3RhcnQiLCJzdG9wIiwiYWRkQXVkaW9Db21wb25lbnQiLCJjb21wb25lbnQiLCJIYXJtb255IiwiQXVkaW9Db21wb25lbnQiLCJwdXNoIiwidXBkYXRlIiwic3RhdGUiLCJyZXN1bWUiLCJpIiwibGVuZ3RoIiwibXVzdERlc3Ryb3kiLCJzcGxpY2UiLCJ2YWx1ZSIsImRlc3Ryb3lDb21wb25lbnQiLCJzeXN0ZW0iLCJMb2FkZXIiLCJpbWFnZXNDYWNoZSIsImF1ZGlvQ2FjaGUiLCJsb2FkaW5nIiwiY29tcGxldGUiLCJlcnJvcnMiLCJzdWNjZXNzIiwicXVldWVkIiwibG9hZEltYWdlIiwiY29uZmlnIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25TdWNjZXNzIiwib25lcnJvciIsInJlYXNvbiIsIm9uRXJyb3IiLCJzcmMiLCJ1cmwiLCJsb2FkQXVkaW8iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXNwb25zZSIsInNlbmQiLCJvblN0YXJ0Iiwib25Qcm9ncmVzcyIsIm9uQ29tcGxldGUiLCJwcm9ncmVzcyIsImZsb29yIiwiaXNOYU4iLCJFbmdpbmUiLCJjYW52YXMiLCJsb2FkZXIiLCJsb29wIiwiTG9vcFN5c3RlbSIsInNjZW5lIiwiU2NlbmVTeXN0ZW0iLCJyZW5kZXIiLCJSZW5kZXJTeXN0ZW0iLCJlbnRpdGllcyIsIkVudGl0eVN5c3RlbSIsImtleXMiLCJLZXlTeXN0ZW0iLCJwaHlzaWNzIiwiUGh5c2ljc1N5c3RlbSIsInBvaW50ZXJzIiwiUG9pbnRlclN5c3RlbSIsImJlaGF2aW91cnMiLCJCZWhhdmlvdXJTeXN0ZW0iLCJTdGF0ZVN5c3RlbSIsImhlbHBlcnMiLCJIZWxwZXJzIiwib25TdGVwIiwiY3VycmVudCIsIm11c3RQcmVsb2FkIiwicHJlbG9hZCIsInJlcXVlc3RDcmVhdGUiLCJtdXN0Q3JlYXRlIiwicmVxdWVzdFVwZGF0ZSIsImNyZWF0ZSIsIm11c3RVcGRhdGUiLCJyZXF1ZXN0RHJhdyIsIm11c3REcmF3IiwiZHJhdyIsImRyYXdEZWJ1Z0RhdGEiLCJtdXN0U3dpdGNoIiwiZGVzdHJveUFsbCIsImRlc3Ryb3kiLCJyZXF1ZXN0ZWQiLCJyZXF1ZXN0UHJlbG9hZCIsInJ1biIsIkVudGl0eSIsInBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ3MiLCJhbmdsZSIsInNjYWxlIiwiY3JlYXRlR3JpZCIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiY2VpbCIsInJhbmRvbSIsImdldFJhbmRvbUl0ZW1zIiwiYXJyYXkiLCJxdWFudGl0eSIsInJhbmRvbUl0ZW1zIiwicmFuZG9tSW5kZXgiLCJzaHVmZmxlQXJyYXkiLCJqIiwiS2V5Iiwia2V5IiwiZW5kIiwiaG9sZCIsImhvbGRUaW1lIiwic3RhcnRGcmFtZSIsImVuZEZyYW1lIiwiZW5hYmxlZCIsImRlbHRhIiwibm93IiwidGhlbiIsImZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImJpbmQiLCJoYW5kbGVLZXlVcCIsImV2ZW50IiwiZ2V0T3JTZXQiLCJnZXQiLCJwZXJmb3JtYW5jZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFjY3VtdWxhdG9yIiwibGFzdFRpbWUiLCJsYXN0U3RlcCIsImZwcyIsInBhdXNlZCIsInRpbWVzdGVwIiwicGF1c2UiLCJ0aW1lc3RhbXAiLCJzdGVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUG9pbnRlciIsImFjdGl2ZSIsImlkIiwidHlwZSIsInN0YXJ0WCIsInN0YXJ0WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW5hYmxlUG9pbnRlcnMiLCJwb2ludGVyIiwic3R5bGUiLCJ0b3VjaEFjdGlvbiIsInVzZXJTZWxlY3QiLCJoYW5kbGVQb2ludGVyRG93biIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJnZXRQb2ludGVyQnlJRCIsIm91dHB1dCIsImdldEluYWN0aXZlUG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJjbGllbnRYIiwidGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJzdG9wUHJvcGFnYXRpb24iLCJTcHJpdGVDb21wb25lbnQiLCJ3aWR0aCIsImhlaWdodCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJhbmNob3JYIiwiYW5jaG9yWSIsInZpc2libGUiLCJnZXRDb250ZXh0Iiwic3ByaXRlQ29tcG9uZW50TmFtZSIsImNsZWFyIiwiY2xlYXJSZWN0Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJhZGRTcHJpdGVDb21wb25lbnQiLCJ1bnNoaWZ0IiwidGV4dCIsImZpbGxUZXh0IiwiY2lyY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiUEkiLCJzdHJva2UiLCJsaW5lIiwibW92ZVRvIiwibGluZVRvIiwicmVjdCIsInNwcml0ZSIsIlNjZW5lIiwibWV0aG9kcyIsImVuZ2luZSIsInJlcXVlc3RTd2l0Y2giLCJCZWhhdmlvdXJDb21wb25lbnQiLCJtdXN0U3RhcnQiLCJvblVwZGF0ZSIsImJlaGF2aW91ckNvbXBvbmVudE5hbWUiLCJhZGRCZWhhdmlvdXJDb21wb25lbnQiLCJTdGF0ZUNvbXBvbmVudCIsInN0YXRlcyIsImNvbXBvbmVudE5hbWUiLCJzdGF0ZUNvbXBvbmVudE5hbWUiLCJhZGRTdGF0ZUNvbXBvbmVudCIsImV4aXQiLCJlbnRlciIsImFkZCIsImhhc1RhZyIsInRhZyIsImluY2x1ZGVzIiwiQjJXb3JsZCIsIkJveDJEIiwiRHluYW1pY3MiLCJiMldvcmxkIiwiQjJWZWMyIiwiQ29tbW9uIiwiYjJWZWMyIiwiQjJEZWJ1Z0RyYXciLCJiMkRlYnVnRHJhdyIsIkIyQ29udGFjdExpc3RlbmVyIiwiYjJDb250YWN0TGlzdGVuZXIiLCJ3b3JsZCIsImNvbnRhY3RzIiwicGh5c2ljc0NvbXBvbmVudE5hbWUiLCJTZXRDb250YWN0TGlzdGVuZXIiLCJCZWdpbkNvbnRhY3QiLCJjb250YWN0IiwiY29tcG9uZW50QSIsIkdldEZpeHR1cmVBIiwiR2V0Qm9keSIsIkdldFVzZXJEYXRhIiwiY29tcG9uZW50QiIsIkdldEZpeHR1cmVCIiwiZW50aXR5QSIsImVudGl0eUIiLCJvbkNvbnRhY3RCZWdpbiIsIkVuZENvbnRhY3QiLCJvbkNvbnRhY3RFbmQiLCJQcmVTb2x2ZSIsIm9uQ29udGFjdFByZVNvbHZlIiwiUG9zdFNvbHZlIiwib25Db250YWN0UG9zdFNvbHZlIiwiZGVidWdEcmF3IiwiU2V0U3ByaXRlIiwiU2V0RHJhd1NjYWxlIiwiU2V0RmlsbEFscGhhIiwiU2V0RmxhZ3MiLCJlX3NoYXBlQml0IiwiQXBwZW5kRmxhZ3MiLCJlX2pvaW50Qml0IiwiU2V0RGVidWdEcmF3IiwibV9kZWJ1Z0RyYXciLCJtX3Nwcml0ZSIsImdyYXBoaWNzIiwiY2FsbGJhY2siLCJnZXRDb21wb25lbnQiLCJzZXRHcmF2aXR5IiwiU2V0R3Jhdml0eSIsIkRyYXdEZWJ1Z0RhdGEiLCJhZGRQaHlzaWNzQ29tcG9uZW50IiwiUGh5c2ljc0NvbXBvbmVudCIsImJvZHkiLCJjcmVhdGVCb2R5IiwiU2V0VXNlckRhdGEiLCJnZXRGaXh0dXJlRGVmIiwiQjJGaXh0dXJlRGVmIiwiYjJGaXh0dXJlRGVmIiwiZml4RGVmIiwiZGVuc2l0eSIsImZyaWN0aW9uIiwicmVzdGl0dXRpb24iLCJpc1NlbnNvciIsImFkZFBvbHlnb24iLCJkZWZhdWx0cyIsInZlcnRpY2VzIiwiZml4dHVyZURlZiIsIkIyUG9seWdvblNoYXBlIiwiQ29sbGlzaW9uIiwiU2hhcGVzIiwiYjJQb2x5Z29uU2hhcGUiLCJzaGFwZSIsInZlcnQiLCJTZXRBc0FycmF5IiwibV92ZXJ0aWNlcyIsImZpeHR1cmUiLCJDcmVhdGVGaXh0dXJlIiwiZml4dHVyZXMiLCJhZGRSZWN0YW5nbGUiLCJTZXRBc0JveCIsIm1fY2VudHJvaWQiLCJhZGRDaXJjbGUiLCJmaXh0dXJlRGVmaW5pdGlvbiIsIkIyQ2lyY2xlU2hhcGUiLCJiMkNpcmNsZVNoYXBlIiwibV9wIiwiYWRkRWRnZSIsIlNldEFzRWRnZSIsImFsbG93U2xlZXAiLCJhd2FrZSIsImJ1bGxldCIsImZpeGVkUm90YXRpb24iLCJhbmd1bGFyRGFtcGluZyIsImFuZ3VsYXJWZWxvY2l0eSIsImxpbmVhckRhbXBpbmciLCJsaW5lYXJWZWxvY2l0eSIsInVzZXJEYXRhIiwiQjJCb2R5RGVmIiwiYjJCb2R5RGVmIiwiQjJCb2R5IiwiYjJCb2R5IiwiYm9keURlZiIsInBvc2l0aW9uIiwiYjJfc3RhdGljQm9keSIsImIyX2R5bmFtaWNCb2R5IiwiYjJfa2luZW1hdGljQm9keSIsIkNyZWF0ZUJvZHkiLCJTdGVwIiwiQ2xlYXJGb3JjZXMiLCJnZXRQb3NpdGlvbiIsImdldEFuZ2xlIiwiZm9yRWFjaCIsIkRlc3Ryb3lGaXh0dXJlIiwiRGVzdHJveUJvZHkiLCJhcHBseUZvcmNlIiwiQXBwbHlGb3JjZSIsIkdldFdvcmxkQ2VudGVyIiwic2V0UG9zaXRpb24iLCJTZXRQb3NpdGlvbiIsInNldExpbmVhclZlbG9jaXR5IiwiU2V0QXdha2UiLCJTZXRMaW5lYXJWZWxvY2l0eSIsIkdldFBvc2l0aW9uIiwiR2V0QW5nbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLGlCQUFpQixtQkFBTyxDQUFDLENBQXFCOzs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhhcm1vbnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSGFybW9ueVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuY29uc3QgQXVkaW9TeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuICB0aGlzLmNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KClcbiAgdGhpcy5tYXN0ZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLm1hc3Rlci5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbilcbiAgdGhpcy5hdWRpb0NvbXBvbmVudE5hbWUgPSAnYXVkaW8nXG4gIHRoaXMubGlzdGVuZXIgPSB7XG4gICAgeDogd2luZG93LmlubmVyV2lkdGggKiAwLjUsXG4gICAgeTogd2luZG93LmlubmVySGVpZ2h0ICogMC41XG4gIH1cbiAgdGhpcy50aHJlc2hvbGQgPSAyMDBcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLmNhbGN1bGF0ZVZvbHVtZUJ5RGlzdGFuY2UgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGNvbnN0IGF4ID0gdGhpcy5saXN0ZW5lci54XG4gIGNvbnN0IGF5ID0gdGhpcy5saXN0ZW5lci55XG4gIGNvbnN0IGJ4ID0gZW50aXR5LnhcbiAgY29uc3QgYnkgPSBlbnRpdHkueVxuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoYXggLSBieCkgKiAoYXggLSBieCkgKyAoYXkgLSBieSkgKiAoYXkgLSBieSkpXG4gIGxldCBub3JtID0gZGlzdGFuY2UgLyB0aGlzLnRocmVzaG9sZFxuICBpZiAobm9ybSA+IDEpIHtcbiAgICBub3JtID0gMVxuICB9XG4gIGlmIChub3JtIDwgMCkge1xuICAgIG5vcm0gPSAwXG4gIH1cbiAgcmV0dXJuICgxLjAgLSBub3JtKVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uIChlbnRpdHksIG5hbWUpIHtcbiAgY29uc3Qgc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gIGNvbnN0IGdhaW4gPSBlbnRpdHkuY29tcG9uZW50cy5hdWRpby5nYWluXG4gIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZSA9IHNvdXJjZVxuICBzb3VyY2UuYnVmZmVyID0gdGhpcy5jYWNoZVtuYW1lXVxuICBzb3VyY2UuY29ubmVjdChnYWluKVxuICBnYWluLmNvbm5lY3QodGhpcy5tYXN0ZXIpXG4gIHNvdXJjZS5zdGFydCgpXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBpZiAoZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlKSB7XG4gICAgZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlLnN0b3AoKVxuICB9XG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5hZGRBdWRpb0NvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQXVkaW9Db21wb25lbnQodGhpcylcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBjb21wb25lbnQuZ2FpbiA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKClcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5hdWRpb0NvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzdW1lKClcbiAgfVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGNvbnN0IGVudGl0eSA9IGNvbXBvbmVudC5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudC5nYWluLmdhaW4udmFsdWUgPSB0aGlzLmNhbGN1bGF0ZVZvbHVtZUJ5RGlzdGFuY2UoZW50aXR5KVxuICAgIH1cbiAgfVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgdGhpcy5zdG9wKGVudGl0eSlcbiAgZW50aXR5LmNvbXBvbmVudHMuYXVkaW8ubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvU3lzdGVtXG4iLCJjb25zdCBBdWRpb0NvbXBvbmVudCA9IGZ1bmN0aW9uIChzeXN0ZW0pIHtcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5zb3VyY2UgPSBudWxsXG4gIHRoaXMuZ2FpbiA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSW1hZ2UgKi9cblxuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmltYWdlc0NhY2hlID0ge31cbiAgdGhpcy5hdWRpb0NhY2hlID0ge31cbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICB0aGlzLmVycm9ycyA9IDBcbiAgdGhpcy5zdWNjZXNzID0gMFxuICB0aGlzLnF1ZXVlZCA9IDBcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMucXVldWVkKytcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgIHRoaXMuaW1hZ2VzQ2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHRoaXMub25TdWNjZXNzKGNvbmZpZylcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycysrXG4gICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5Mb2FkZXIucHJvdG90eXBlLmxvYWRBdWRpbyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5xdWV1ZWQrK1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgICAgdGhpcy5hdWRpb0NhY2hlW2NvbmZpZy5uYW1lXSA9IGJ1ZmZlclxuICAgICAgICB0aGlzLm9uU3VjY2Vzcyhjb25maWcpXG4gICAgICAgIHJlc29sdmUoYnVmZmVyKVxuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLmVycm9ycysrXG4gICAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICB9KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0pXG59XG5cbkxvYWRlci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25TdWNjZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vblByb2dyZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnF1ZXVlZCA+IDApIHtcbiAgICBpZiAoIXRoaXMuc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSB0cnVlXG4gICAgICB0aGlzLm9uU3RhcnQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5xdWV1ZWQgPT09IHRoaXMuc3VjY2VzcyArIHRoaXMuZXJyb3JzKSB7XG4gICAgICB0aGlzLnF1ZXVlZCA9IDBcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDBcbiAgICAgIHRoaXMuZXJyb3JzID0gMFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIH1cbiAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKCh0aGlzLnN1Y2Nlc3MgKyB0aGlzLmVycm9ycykgLyB0aGlzLnF1ZXVlZCAqIDEwMClcbiAgICBpZiAoaXNOYU4ocHJvZ3Jlc3MpKSB7XG4gICAgICBwcm9ncmVzcyA9IDEwMFxuICAgIH1cbiAgICB0aGlzLm9uUHJvZ3Jlc3MocHJvZ3Jlc3MpXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW5naW5lID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmxvYWRlciA9IG5ldyBIYXJtb255LkxvYWRlcigpXG4gIHRoaXMubG9vcCA9IG5ldyBIYXJtb255Lkxvb3BTeXN0ZW0oKVxuICB0aGlzLnNjZW5lID0gbmV3IEhhcm1vbnkuU2NlbmVTeXN0ZW0oKVxuICB0aGlzLnJlbmRlciA9IG5ldyBIYXJtb255LlJlbmRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuYXVkaW8gPSBuZXcgSGFybW9ueS5BdWRpb1N5c3RlbSgpXG4gIHRoaXMuZW50aXRpZXMgPSBuZXcgSGFybW9ueS5FbnRpdHlTeXN0ZW0oKVxuICB0aGlzLmtleXMgPSBuZXcgSGFybW9ueS5LZXlTeXN0ZW0oKVxuICB0aGlzLnBoeXNpY3MgPSBuZXcgSGFybW9ueS5QaHlzaWNzU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5wb2ludGVycyA9IG5ldyBIYXJtb255LlBvaW50ZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLmJlaGF2aW91cnMgPSBuZXcgSGFybW9ueS5CZWhhdmlvdXJTeXN0ZW0odGhpcylcbiAgdGhpcy5zdGF0ZSA9IG5ldyBIYXJtb255LlN0YXRlU3lzdGVtKClcbiAgdGhpcy5oZWxwZXJzID0gbmV3IEhhcm1vbnkuSGVscGVycygpXG5cbiAgdGhpcy5sb29wLm9uU3RlcCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy5zY2VuZS5jdXJyZW50KSB7XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0UHJlbG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVyLmxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQucHJlbG9hZCh0aGlzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGVyLnVwZGF0ZSgpXG4gICAgICAgIGlmICh0aGlzLmxvYWRlci5jb21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyLmNhY2hlID0gdGhpcy5sb2FkZXIuaW1hZ2VzQ2FjaGVcbiAgICAgICAgICB0aGlzLmF1ZGlvLmNhY2hlID0gdGhpcy5sb2FkZXIuYXVkaW9DYWNoZVxuICAgICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdENyZWF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RDcmVhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmNyZWF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3REcmF3KClcbiAgICAgICAgdGhpcy5rZXlzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMucG9pbnRlcnMudXBkYXRlKClcbiAgICAgICAgdGhpcy5hdWRpby51cGRhdGUoKVxuICAgICAgICB0aGlzLnBoeXNpY3MudXBkYXRlKClcbiAgICAgICAgdGhpcy5lbnRpdGllcy51cGRhdGUoKVxuICAgICAgICB0aGlzLmJlaGF2aW91cnMudXBkYXRlKClcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnVwZGF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdERyYXcpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhdygpXG4gICAgICAgIHRoaXMucGh5c2ljcy5kcmF3RGVidWdEYXRhKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmRyYXcodGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NlbmUubXVzdFN3aXRjaCkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZXN0cm95QWxsKClcbiAgICAgIHRoaXMucG9pbnRlcnMuZGVzdHJveSgpXG4gICAgICB0aGlzLmtleXMuZGVzdHJveSgpXG4gICAgICB0aGlzLnNjZW5lLmN1cnJlbnQgPSB0aGlzLnNjZW5lLnJlcXVlc3RlZFxuICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0UHJlbG9hZCgpXG4gICAgfVxuICB9XG4gIHRoaXMubG9vcC5ydW4oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmVcbiIsImNvbnN0IEVudGl0eSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdGFnczogW10sXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGFuZ2xlOiAwLFxuICAgIHNjYWxlOiAxXG4gIH0sIHBhcmFtcylcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gIHRoaXMudGFncyA9IGNvbmZpZy50YWdzXG4gIHRoaXMueCA9IGNvbmZpZy54XG4gIHRoaXMueSA9IGNvbmZpZy55XG4gIHRoaXMuYW5nbGUgPSBjb25maWcuYW5nbGVcbiAgdGhpcy5zY2FsZSA9IGNvbmZpZy5zY2FsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlcbiIsImNvbnN0IEhlbHBlcnMgPSBmdW5jdGlvbiAoKSB7fVxuXG5IZWxwZXJzLnByb3RvdHlwZS5jcmVhdGVHcmlkID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgZ3JpZCA9IG5ldyBBcnJheShjb2xzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHJvd3MpXG4gIH1cbiAgcmV0dXJuIGdyaWRcbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5nZXRSYW5kb21JdGVtcyA9IGZ1bmN0aW9uIChhcnJheSwgcXVhbnRpdHkpIHtcbiAgY29uc3QgcmFuZG9tSXRlbXMgPSBbXVxuICBmb3IgKGxldCBpID0gcXVhbnRpdHk7IGktLTspIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIGFycmF5Lmxlbmd0aCAtIDEpXG4gICAgcmFuZG9tSXRlbXMucHVzaChhcnJheVtyYW5kb21JbmRleF0pXG4gICAgYXJyYXkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVxuICB9XG4gIHJldHVybiByYW5kb21JdGVtc1xufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5zaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSlcbiAgICBjb25zdCB4ID0gYXJyYXlbaV1cbiAgICBhcnJheVtpXSA9IGFycmF5W2pdXG4gICAgYXJyYXlbal0gPSB4XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnNcbiIsImNvbnN0IEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMuZW5kID0gZmFsc2VcbiAgdGhpcy5ob2xkID0gZmFsc2VcbiAgdGhpcy5ob2xkVGltZSA9IDBcbiAgdGhpcy5zdGFydEZyYW1lID0gMFxuICB0aGlzLmVuZEZyYW1lID0gMFxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEtleVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSB0cnVlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbZXZlbnQua2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2V2ZW50LmtleV0uaG9sZCA9IGZhbHNlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5nZXRPclNldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gbmV3IEhhcm1vbnkuS2V5KGtleSlcbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZVtrZXldXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5nZXRPclNldChrZXkpXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgdGhpcy5mcmFtZSsrXG4gICAgdGhpcy5ub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLmRlbHRhID0gdGhpcy5ub3cgLSB0aGlzLnRoZW5cbiAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKGtleS5ob2xkKSB7XG4gICAgICAgIGtleS5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgIGtleS5lbmRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5LmhvbGRUaW1lID0gMFxuICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuZW5kRnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBrZXkuc3RhcnQgPSAoa2V5LnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICBrZXkuZW5kID0gKGtleS5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICB9XG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5U3lzdGVtXG4iLCJjb25zdCBMb29wU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjY3VtdWxhdG9yID0gMFxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLmxhc3RUaW1lID0gMFxuICB0aGlzLmxhc3RTdGVwID0gMFxuICB0aGlzLmZwcyA9IDYwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5jb250aW51ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSB0cnVlXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgdGltZXN0YW1wID0gdGltZXN0YW1wIHx8IDBcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xuICB0aGlzLmFjY3VtdWxhdG9yICs9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWVcbiAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcFxuICB3aGlsZSAoIXRoaXMucGF1c2VkICYmIHRoaXMuYWNjdW11bGF0b3IgPj0gdGhpcy50aW1lc3RlcCkge1xuICAgIHRoaXMuc3RlcCgpXG4gICAgdGhpcy5kZWx0YSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFN0ZXBcbiAgICB0aGlzLmxhc3RTdGVwID0gdGltZXN0YW1wXG4gICAgdGhpcy5hY2N1bXVsYXRvciAtPSB0aGlzLnRpbWVzdGVwXG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bi5iaW5kKHRoaXMpKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZyYW1lKytcbiAgdGhpcy5vblN0ZXAoKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5vblN0ZXAgPSBmdW5jdGlvbiAoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBMb29wU3lzdGVtXG4iLCJjb25zdCBQb2ludGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbiAgdGhpcy5pZCA9IDBcbiAgdGhpcy50eXBlID0gbnVsbFxuICB0aGlzLnN0YXJ0WCA9IDBcbiAgdGhpcy5zdGFydFkgPSAwXG4gIHRoaXMub2Zmc2V0WCA9IDBcbiAgdGhpcy5vZmZzZXRZID0gMFxuICB0aGlzLnggPSAwXG4gIHRoaXMueSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgUG9pbnRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5lbmFibGVQb2ludGVycygpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldE9yU2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW3BvaW50ZXJdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbcG9pbnRlcl0gPSBuZXcgSGFybW9ueS5Qb2ludGVyKHBvaW50ZXIpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVbcG9pbnRlcl1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQocG9pbnRlcilcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZW5hYmxlUG9pbnRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FudmFzLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gIHRoaXMuY2FudmFzLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRQb2ludGVyQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5pZCA9PT0gaWQpIHtcbiAgICAgICAgb3V0cHV0ID0gcG9pbnRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldEluYWN0aXZlUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG91dHB1dCA9IGZhbHNlXG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKHBvaW50ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlckRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpIHx8IHRoaXMuZ2V0SW5hY3RpdmVQb2ludGVyKClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IHRydWVcbiAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgcG9pbnRlci50eXBlID0gZXZlbnQucG9pbnRlclR5cGUgLy8gJ21vdXNlJywgJ3BlbicsICd0b3VjaCdcbiAgICBwb2ludGVyLmhvbGQgPSB0cnVlXG4gICAgcG9pbnRlci5zdGFydFggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gICAgcG9pbnRlci54ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci55ID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IGZhbHNlXG4gICAgcG9pbnRlci5ob2xkID0gZmFsc2VcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIHJldHVybiBmYWxzZVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICB0aGlzLmZyYW1lKytcbiAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlblxuICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgICBpZiAocG9pbnRlci5ob2xkKSB7XG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRYID0gKHBvaW50ZXIueCAtIHBvaW50ZXIuc3RhcnRYKVxuICAgICAgICAgIHBvaW50ZXIub2Zmc2V0WSA9IChwb2ludGVyLnkgLSBwb2ludGVyLnN0YXJ0WSlcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lICs9IHRoaXMuZGVsdGFcbiAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFggPSAwXG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRZID0gMFxuICAgICAgICAgIHBvaW50ZXIuaG9sZFRpbWUgPSAwXG4gICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5lbmRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuZW5kRnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvaW50ZXIuc3RhcnQgPSAocG9pbnRlci5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAgICBwb2ludGVyLmVuZCA9IChwb2ludGVyLmVuZEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclN5c3RlbVxuIiwiY29uc3QgU3ByaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5pbWFnZSA9IGNvbmZpZy5pbWFnZVxuICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoXG4gIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodFxuICB0aGlzLnNvdXJjZVggPSBjb25maWcuc291cmNlWFxuICB0aGlzLnNvdXJjZVkgPSBjb25maWcuc291cmNlWVxuICB0aGlzLnNvdXJjZVdpZHRoID0gY29uZmlnLnNvdXJjZVdpZHRoXG4gIHRoaXMuc291cmNlSGVpZ2h0ID0gY29uZmlnLnNvdXJjZUhlaWdodFxuICB0aGlzLmFuY2hvclggPSBjb25maWcuYW5jaG9yWFxuICB0aGlzLmFuY2hvclkgPSBjb25maWcuYW5jaG9yWVxuICB0aGlzLnZpc2libGUgPSBjb25maWcudmlzaWJsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcHJpdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255IEltYWdlICovXG5cbmNvbnN0IFJlbmRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5zcHJpdGVDb21wb25lbnROYW1lID0gJ3Nwcml0ZSdcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBjb25maWcudXJsXG4gIH0pXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgcmV0dXJuIHRoaXMuY2FjaGVbaW1hZ2VdXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhcigpXG4gIC8vIHRoaXMuY29udGV4dC5zYXZlKClcblxuICAvLyB0cmFuc2xhdGUgdG8gY2FtZXJhIGNlbnRlclxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgICh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgICh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKVxuICAvLyApXG5cbiAgLy8gcm90YXRlXG4gIC8vIHRoaXMuY29udGV4dC5yb3RhdGUodGhpcy5jYW1lcmEuYW5nbGUpXG5cbiAgLy8gc2NhbGVcbiAgLy8gdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuY2FtZXJhLnpvb20sIHRoaXMuY2FtZXJhLnpvb20pXG5cbiAgLy8gdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCdcbiAgLy8gdGhpcy5jYW52YXMuY2lyY2xlKDAsIDAsIDEwKVxuXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgLSh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgIC0odGhpcy5jYW1lcmEuaGVpZ2h0IC8gMilcbiAgLy8gKVxuXG4gIC8vIHRyYW5zbGF0ZVxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi54LFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi55XG4gIC8vIClcblxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudC5lbnRpdHkpXG5cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21wb25lbnQudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpXG4gICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS54ICsgY29tcG9uZW50LndpZHRoICogMC41ICogY29tcG9uZW50LmVudGl0eS5zY2FsZSAtIGNvbXBvbmVudC53aWR0aCAqIGNvbXBvbmVudC5hbmNob3JYICogY29tcG9uZW50LmVudGl0eS5zY2FsZSxcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnkgKyBjb21wb25lbnQuaGVpZ2h0ICogMC41ICogY29tcG9uZW50LmVudGl0eS5zY2FsZSAtIGNvbXBvbmVudC5oZWlnaHQgKiBjb21wb25lbnQuYW5jaG9yWSAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmNvbnRleHQucm90YXRlKGNvbXBvbmVudC5lbnRpdHkuYW5nbGUpXG4gICAgICAgIHRoaXMuY29udGV4dC5zY2FsZShcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkuc2NhbGVcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChjb21wb25lbnQuc291cmNlV2lkdGggPT09IDApIHtcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlV2lkdGggPSBjb21wb25lbnQuaW1hZ2Uud2lkdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQuc291cmNlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZUhlaWdodCA9IGNvbXBvbmVudC5pbWFnZS5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgY29tcG9uZW50LmltYWdlLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VYLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VZLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VXaWR0aCxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlSGVpZ2h0LFxuICAgICAgICAgIGNvbXBvbmVudC53aWR0aCAqIC0wLjUsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LmhlaWdodCAqIC0wLjUsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LndpZHRoLCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC5oZWlnaHQgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmFkZFNwcml0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIHBhcmFtcykge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICBpbWFnZTogbnVsbCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBzb3VyY2VYOiAwLFxuICAgIHNvdXJjZVk6IDAsXG4gICAgc291cmNlV2lkdGg6IDAsXG4gICAgc291cmNlSGVpZ2h0OiAwLFxuICAgIGFuY2hvclg6IDAuNSxcbiAgICBhbmNob3JZOiAwLjUsXG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9LCBwYXJhbXMpXG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNwcml0ZUNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5zcHJpdGVDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMudW5zaGlmdChjb21wb25lbnQpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGNvbmZpZy50ZXh0LCBjb25maWcueCwgY29uZmlnLnkpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0LmFyYyhjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5saW5lID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0Lm1vdmVUbyhjb25maWcuYXgsIGNvbmZpZy5heSlcbiAgdGhpcy5jb250ZXh0LmxpbmVUbyhjb25maWcuYngsIGNvbmZpZy5ieSlcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LnJlY3QoY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnNwcml0ZS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyU3lzdGVtXG4iLCJjb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcHJlbG9hZDogKCkgPT4ge30sXG4gICAgY3JlYXRlOiAoKSA9PiB7fSxcbiAgICB1cGRhdGU6ICgpID0+IHt9LFxuICAgIGRyYXc6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuU2NlbmUucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMucHJlbG9hZChlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuY3JlYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy51cGRhdGUoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5kcmF3KGVuZ2luZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVcbiIsImNvbnN0IFNjZW5lU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIHRoaXMucmVxdWVzdGVkID0gbnVsbFxuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzY2VuZVxuICB0aGlzLnJlcXVlc3RTd2l0Y2goKVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFByZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSB0cnVlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdENyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0VXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gdHJ1ZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3REcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IHRydWVcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RTd2l0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVN5c3RlbVxuIiwiY29uc3QgQmVoYXZpb3VyQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTdGFydCA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5vblN0YXJ0ID0gY29uZmlnLm9uU3RhcnRcbiAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvdXJDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEJlaGF2aW91clN5c3RlbSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgdGhpcy5lbmdpbmUgPSBlbmdpbmVcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lID0gJ2JlaGF2aW91cidcbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS5hZGRCZWhhdmlvdXJDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgb25TdGFydDogKCkgPT4ge30sXG4gICAgb25VcGRhdGU6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQmVoYXZpb3VyQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgY29uc3QgZW50aXR5ID0gY29tcG9uZW50LmVudGl0eVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQoZW50aXR5KVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0VXBkYXRlKSB7XG4gICAgICB0aGlzLm9uVXBkYXRlKGVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm11c3RTdGFydCA9IGZhbHNlXG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubXVzdFVwZGF0ZSA9IHRydWVcbiAgcmV0dXJuIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ub25TdGFydCh0aGlzLmVuZ2luZSwgZW50aXR5KVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICByZXR1cm4gZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5vblVwZGF0ZSh0aGlzLmVuZ2luZSwgZW50aXR5KVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW91clN5c3RlbVxuIiwiY29uc3QgU3RhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG4gIHRoaXMucmVxdWVzdGVkID0gcGFyYW1zLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB0aGlzLnN0YXRlcyA9IHBhcmFtcy5zdGF0ZXNcbn1cblxuU3RhdGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudE5hbWUgPSAnc3RhdGUnXG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBTdGF0ZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5zdGF0ZUNvbXBvbmVudE5hbWUgPSAnc3RhdGUnXG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS5hZGRTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5TdGF0ZUNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5zdGF0ZUNvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGlmIChjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmV4aXQoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGNvbXBvbmVudC5jdXJyZW50ID0gY29tcG9uZW50LnJlcXVlc3RlZFxuICAgICAgaWYgKGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC5tdXN0U3dpdGNoID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5jdXJyZW50ICYmIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLnVwZGF0ZSkge1xuICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0udXBkYXRlKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnN0YXRlLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZVN5c3RlbVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW50aXR5U3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0gW11cbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGVudGl0eSA9IG5ldyBIYXJtb255LkVudGl0eShjb25maWcpXG4gIHRoaXMuY2FjaGUucHVzaChlbnRpdHkpXG4gIHJldHVybiBlbnRpdHlcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICBpZiAoZW50aXR5Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNhY2hlLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGZvciAoY29uc3QgaSBpbiBlbnRpdHkuY29tcG9uZW50cykge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlbnRpdHkuY29tcG9uZW50cywgaSkpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRzW2ldXG4gICAgICBjb25zdCBzeXN0ZW0gPSBjb21wb25lbnQuc3lzdGVtXG4gICAgICBzeXN0ZW0uZGVzdHJveUNvbXBvbmVudChlbnRpdHkpXG4gICAgfVxuICB9XG4gIGVudGl0eS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5oYXNUYWcgPSBmdW5jdGlvbiAoZW50aXR5LCB0YWcpIHtcbiAgcmV0dXJuIGVudGl0eS50YWdzLmluY2x1ZGVzKHRhZylcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95QWxsID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmNhY2hlW2ldXG4gICAgdGhpcy5kZXN0cm95KGVudGl0eSlcbiAgfVxuICB0aGlzLmNhY2hlID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5U3lzdGVtXG4iLCIvKiBnbG9iYWwgQm94MkQgSGFybW9ueSAqL1xuXG5jb25zdCBQaHlzaWNzU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICBjb25zdCBCMldvcmxkID0gQm94MkQuRHluYW1pY3MuYjJXb3JsZFxuICBjb25zdCBCMlZlYzIgPSBCb3gyRC5Db21tb24uTWF0aC5iMlZlYzJcbiAgY29uc3QgQjJEZWJ1Z0RyYXcgPSBCb3gyRC5EeW5hbWljcy5iMkRlYnVnRHJhd1xuICBjb25zdCBCMkNvbnRhY3RMaXN0ZW5lciA9IEJveDJELkR5bmFtaWNzLmIyQ29udGFjdExpc3RlbmVyXG5cbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLnNjYWxlID0gMTAwXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMud29ybGQgPSBuZXcgQjJXb3JsZChuZXcgQjJWZWMyKDAsIDApLCB0cnVlKVxuICB0aGlzLmNvbnRhY3RzID0gbmV3IEIyQ29udGFjdExpc3RlbmVyKClcbiAgdGhpcy5waHlzaWNzQ29tcG9uZW50TmFtZSA9ICdwaHlzaWNzJ1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWN0c1xuXG4gIHRoaXMud29ybGQuU2V0Q29udGFjdExpc3RlbmVyKHRoaXMuY29udGFjdHMpXG5cbiAgdGhpcy5jb250YWN0cy5CZWdpbkNvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0QmVnaW4pIHtcbiAgICAgIGNvbXBvbmVudEEub25Db250YWN0QmVnaW4oZW50aXR5QiwgZW50aXR5QSlcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudEIub25Db250YWN0QmVnaW4pIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0QmVnaW4oZW50aXR5QSwgZW50aXR5QilcbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLkVuZENvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0RW5kKSB7XG4gICAgICBjb21wb25lbnRBLm9uQ29udGFjdEVuZChlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RFbmQpIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0RW5kKGVudGl0eUEsIGVudGl0eUIpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5QcmVTb2x2ZSA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50QS5vbkNvbnRhY3RQcmVTb2x2ZSkge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RQcmVTb2x2ZSkge1xuICAgICAgY29tcG9uZW50Qi5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuUG9zdFNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGlmIChjb21wb25lbnRBLm9uQ29udGFjdFBvc3RTb2x2ZSkge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RQb3N0U29sdmUoZW50aXR5QiwgZW50aXR5QSlcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudEIub25Db250YWN0UG9zdFNvbHZlKSB7XG4gICAgICBjb21wb25lbnRCLm9uQ29udGFjdFBvc3RTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWJ1Z1xuXG4gIGNvbnN0IGRlYnVnRHJhdyA9IG5ldyBCMkRlYnVnRHJhdyh0aGlzLmNvbnRleHQpXG4gIGRlYnVnRHJhdy5TZXRTcHJpdGUoY2FudmFzLmdldENvbnRleHQoJzJkJykpXG4gIGRlYnVnRHJhdy5TZXREcmF3U2NhbGUodGhpcy5zY2FsZSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGaWxsQWxwaGEoMC41KVxuICBkZWJ1Z0RyYXcuU2V0RmxhZ3MoQjJEZWJ1Z0RyYXcuZV9zaGFwZUJpdClcbiAgZGVidWdEcmF3LkFwcGVuZEZsYWdzKEIyRGVidWdEcmF3LmVfam9pbnRCaXQpXG4gIHRoaXMud29ybGQuU2V0RGVidWdEcmF3KGRlYnVnRHJhdylcbiAgdGhpcy53b3JsZC5tX2RlYnVnRHJhdy5tX3Nwcml0ZS5ncmFwaGljcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5vbkNvbnRhY3RCZWdpbiA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdEJlZ2luID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0RW5kID0gZnVuY3Rpb24gKGVudGl0eSwgY2FsbGJhY2spIHtcbiAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KVxuICBjb21wb25lbnQub25Db250YWN0RW5kID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0UHJlU29sdmUgPSBmdW5jdGlvbiAoZW50aXR5LCBjYWxsYmFjaykge1xuICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpXG4gIGNvbXBvbmVudC5vbkNvbnRhY3RQcmVTb2x2ZSA9IGNhbGxiYWNrXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLm9uQ29udGFjdFBvc3RTb2x2ZSA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdFBvc3RTb2x2ZSA9IGNhbGxiYWNrXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnNldEdyYXZpdHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMud29ybGQuU2V0R3Jhdml0eShjb25maWcpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRyYXdEZWJ1Z0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud29ybGQuRHJhd0RlYnVnRGF0YSgpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuUGh5c2ljc0NvbXBvbmVudCh0aGlzKVxuICBjb21wb25lbnQuYm9keSA9IHRoaXMuY3JlYXRlQm9keShwYXJhbXMpXG4gIGNvbXBvbmVudC5ib2R5LlNldFVzZXJEYXRhKGNvbXBvbmVudClcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLnBoeXNpY3NDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldEZpeHR1cmVEZWYgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IEIyRml4dHVyZURlZiA9IEJveDJELkR5bmFtaWNzLmIyRml4dHVyZURlZlxuICBjb25zdCBmaXhEZWYgPSBuZXcgQjJGaXh0dXJlRGVmKClcbiAgZml4RGVmLmRlbnNpdHkgPSBjb25maWcuZGVuc2l0eVxuICBmaXhEZWYuZnJpY3Rpb24gPSBjb25maWcuZnJpY3Rpb25cbiAgZml4RGVmLnJlc3RpdHV0aW9uID0gY29uZmlnLnJlc3RpdHV0aW9uXG4gIGZpeERlZi5pc1NlbnNvciA9IGNvbmZpZy5pc1NlbnNvclxuICByZXR1cm4gZml4RGVmXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFBvbHlnb24gPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgdmVydGljZXM6IFtdLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBkZW5zaXR5OiAxLFxuICAgIGZyaWN0aW9uOiAwLjUsXG4gICAgcmVzdGl0dXRpb246IDAuMyxcbiAgICBpc1NlbnNvcjogZmFsc2VcbiAgfVxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG4gIGNvbnN0IGZpeHR1cmVEZWYgPSB0aGlzLmdldEZpeHR1cmVEZWYoY29uZmlnKVxuICBjb25zdCBCMlBvbHlnb25TaGFwZSA9IEJveDJELkNvbGxpc2lvbi5TaGFwZXMuYjJQb2x5Z29uU2hhcGVcbiAgZml4dHVyZURlZi5zaGFwZSA9IG5ldyBCMlBvbHlnb25TaGFwZSgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdmVydCA9IGNvbmZpZy52ZXJ0aWNlc1tpXVxuICAgIHZlcnQueCAvPSB0aGlzLnNjYWxlXG4gICAgdmVydC55IC89IHRoaXMuc2NhbGVcbiAgfVxuICBmaXh0dXJlRGVmLnNoYXBlLlNldEFzQXJyYXkoY29uZmlnLnZlcnRpY2VzLCBjb25maWcudmVydGljZXMubGVuZ3RoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeHR1cmVEZWYuc2hhcGUubV92ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZlcnQgPSBmaXh0dXJlRGVmLnNoYXBlLm1fdmVydGljZXNbaV1cbiAgICB2ZXJ0LnggKz0gY29uZmlnLnggLyB0aGlzLnNjYWxlIHx8IDBcbiAgICB2ZXJ0LnkgKz0gY29uZmlnLnkgLyB0aGlzLnNjYWxlIHx8IDBcbiAgfVxuICBjb25zdCBmaXh0dXJlID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkNyZWF0ZUZpeHR1cmUoZml4dHVyZURlZilcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5wdXNoKGZpeHR1cmUpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFJlY3RhbmdsZSA9IGZ1bmN0aW9uIChlbnRpdHksIHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGRlbnNpdHk6IDEsXG4gICAgZnJpY3Rpb246IDAuNSxcbiAgICByZXN0aXR1dGlvbjogMC4zLFxuICAgIGlzU2Vuc29yOiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcbiAgY29uc3QgZml4dHVyZURlZiA9IHRoaXMuZ2V0Rml4dHVyZURlZihjb25maWcpXG5cbiAgY29uc3QgQjJQb2x5Z29uU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyUG9seWdvblNoYXBlXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJQb2x5Z29uU2hhcGUoKVxuICBmaXh0dXJlRGVmLnNoYXBlLlNldEFzQm94KFxuICAgIGNvbmZpZy53aWR0aCAqIDAuNSAvIHRoaXMuc2NhbGUsXG4gICAgY29uZmlnLmhlaWdodCAqIDAuNSAvIHRoaXMuc2NhbGVcbiAgKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeHR1cmVEZWYuc2hhcGUubV92ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZlcnQgPSBmaXh0dXJlRGVmLnNoYXBlLm1fdmVydGljZXNbaV1cbiAgICB2ZXJ0LnggKz0gY29uZmlnLnggLyB0aGlzLnNjYWxlIHx8IDBcbiAgICB2ZXJ0LnkgKz0gY29uZmlnLnkgLyB0aGlzLnNjYWxlIHx8IDBcbiAgfVxuICBmaXh0dXJlRGVmLnNoYXBlLm1fY2VudHJvaWQueCArPSBjb25maWcueCAvIHRoaXMuc2NhbGUgfHwgMFxuICBmaXh0dXJlRGVmLnNoYXBlLm1fY2VudHJvaWQueSArPSBjb25maWcueSAvIHRoaXMuc2NhbGUgfHwgMFxuXG4gIGNvbnN0IGZpeHR1cmUgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuQ3JlYXRlRml4dHVyZShmaXh0dXJlRGVmKVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmZpeHR1cmVzLnB1c2goZml4dHVyZSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkQ2lyY2xlID0gZnVuY3Rpb24gKGVudGl0eSwgcGFyYW1zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICByYWRpdXM6IDI1LFxuICAgIGRlbnNpdHk6IDEsXG4gICAgZnJpY3Rpb246IDAuNSxcbiAgICByZXN0aXR1dGlvbjogMC4zLFxuICAgIGlzU2Vuc29yOiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcbiAgY29uc3QgZml4dHVyZURlZmluaXRpb24gPSB0aGlzLmdldEZpeHR1cmVEZWYoY29uZmlnKVxuICBjb25zdCBCMkNpcmNsZVNoYXBlID0gQm94MkQuQ29sbGlzaW9uLlNoYXBlcy5iMkNpcmNsZVNoYXBlXG4gIGNvbnN0IGZpeHR1cmVEZWYgPSBmaXh0dXJlRGVmaW5pdGlvblxuICBmaXh0dXJlRGVmLnNoYXBlID0gbmV3IEIyQ2lyY2xlU2hhcGUoY29uZmlnLnJhZGl1cyAvIHRoaXMuc2NhbGUpXG4gIGZpeHR1cmVEZWYuc2hhcGUubV9wID0ge1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgfVxuICBjb25zdCBmaXh0dXJlID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkNyZWF0ZUZpeHR1cmUoZml4dHVyZURlZilcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5wdXNoKGZpeHR1cmUpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZEVkZ2UgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgYXg6IDAsXG4gICAgYXk6IDAsXG4gICAgYng6IDAsXG4gICAgYnk6IDAsXG4gICAgZGVuc2l0eTogMSxcbiAgICBmcmljdGlvbjogMC41LFxuICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgaXNTZW5zb3I6IGZhbHNlXG4gIH1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuICBjb25zdCBmaXh0dXJlRGVmID0gdGhpcy5nZXRGaXh0dXJlRGVmKGNvbmZpZylcbiAgY29uc3QgQjJQb2x5Z29uU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyUG9seWdvblNoYXBlXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJQb2x5Z29uU2hhcGUoKVxuICBjb25maWcuYXggLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYXkgLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYnggLz0gdGhpcy5zY2FsZVxuICBjb25maWcuYnkgLz0gdGhpcy5zY2FsZVxuICBmaXh0dXJlRGVmLnNoYXBlLlNldEFzRWRnZSh7IHg6IGNvbmZpZy5heCwgeTogY29uZmlnLmF5IH0sIHsgeDogY29uZmlnLmJ4LCB5OiBjb25maWcuYnkgfSlcbiAgY29uc3QgZml4dHVyZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5DcmVhdGVGaXh0dXJlKGZpeHR1cmVEZWYpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuZml4dHVyZXMucHVzaChmaXh0dXJlKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgICB0eXBlOiAnZHluYW1pYycsXG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGFsbG93U2xlZXA6IHRydWUsXG4gICAgYXdha2U6IHRydWUsXG4gICAgYnVsbGV0OiBmYWxzZSxcbiAgICBmaXhlZFJvdGF0aW9uOiBmYWxzZSxcbiAgICBhbmdsZTogMCxcbiAgICBhbmd1bGFyRGFtcGluZzogMCxcbiAgICBhbmd1bGFyVmVsb2NpdHk6IDAsXG4gICAgbGluZWFyRGFtcGluZzogMCxcbiAgICBsaW5lYXJWZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXG4gICAgdXNlckRhdGE6IHt9XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG5cbiAgY29uc3QgQjJCb2R5RGVmID0gQm94MkQuRHluYW1pY3MuYjJCb2R5RGVmXG4gIGNvbnN0IEIyQm9keSA9IEJveDJELkR5bmFtaWNzLmIyQm9keVxuXG4gIGNvbnN0IGJvZHlEZWYgPSBuZXcgQjJCb2R5RGVmKClcbiAgYm9keURlZi5wb3NpdGlvbi54ID0gY29uZmlnLnggLyB0aGlzLnNjYWxlXG4gIGJvZHlEZWYucG9zaXRpb24ueSA9IGNvbmZpZy55IC8gdGhpcy5zY2FsZVxuICBib2R5RGVmLmFjdGl2ZSA9IGNvbmZpZy5hY3RpdmVcbiAgYm9keURlZi5hbGxvd1NsZWVwID0gY29uZmlnLmFsbG93U2xlZXBcbiAgYm9keURlZi5hd2FrZSA9IGNvbmZpZy5hd2FrZVxuICBib2R5RGVmLmJ1bGxldCA9IGNvbmZpZy5idWxsZXRcbiAgYm9keURlZi5maXhlZFJvdGF0aW9uID0gY29uZmlnLmZpeGVkUm90YXRpb25cbiAgYm9keURlZi5hbmdsZSA9IGNvbmZpZy5hbmdsZVxuICBib2R5RGVmLmFuZ3VsYXJEYW1waW5nID0gY29uZmlnLmFuZ3VsYXJEYW1waW5nXG4gIGJvZHlEZWYuYW5ndWxhclZlbG9jaXR5ID0gY29uZmlnLmFuZ3VsYXJWZWxvY2l0eVxuICBib2R5RGVmLmxpbmVhckRhbXBpbmcgPSBjb25maWcubGluZWFyRGFtcGluZ1xuICBib2R5RGVmLmxpbmVhclZlbG9jaXR5ID0gY29uZmlnLmxpbmVhclZlbG9jaXR5XG4gIGJvZHlEZWYudXNlckRhdGEgPSBjb25maWcudXNlckRhdGFcblxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX3N0YXRpY0JvZHlcbiAgfVxuXG4gIGlmIChjb25maWcudHlwZSA9PT0gJ2R5bmFtaWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2R5bmFtaWNCb2R5XG4gIH1cblxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdraW5lbWF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2tpbmVtYXRpY0JvZHlcbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSB0aGlzLndvcmxkLkNyZWF0ZUJvZHkoYm9keURlZilcbiAgYm9keS5hY3RpdmUgPSB0cnVlXG5cbiAgcmV0dXJuIGJvZHlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndvcmxkLlN0ZXAoMSAvIHRoaXMuZnBzLCA4LCAzKVxuICB0aGlzLndvcmxkLkNsZWFyRm9yY2VzKClcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGNvbXBvbmVudC5lbnRpdHlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihlbnRpdHkpXG4gICAgICBlbnRpdHkueCA9IHBvc2l0aW9uLnhcbiAgICAgIGVudGl0eS55ID0gcG9zaXRpb24ueVxuICAgICAgZW50aXR5LmFuZ2xlID0gdGhpcy5nZXRBbmdsZShlbnRpdHkpXG4gICAgfVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgcmV0dXJuIGVudGl0eS5jb21wb25lbnRzW3RoaXMucGh5c2ljc0NvbXBvbmVudE5hbWVdXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuZml4dHVyZXMuZm9yRWFjaCgoZml4dHVyZSkgPT4ge1xuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5EZXN0cm95Rml4dHVyZShmaXh0dXJlKVxuICB9KVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLnN5c3RlbS53b3JsZC5EZXN0cm95Qm9keSh0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkubXVzdERlc3Ryb3kgPSB0cnVlXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFwcGx5Rm9yY2UgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkFwcGx5Rm9yY2UoY29uZmlnLCB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuR2V0V29ybGRDZW50ZXIoKSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LlNldFBvc2l0aW9uKHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnNldExpbmVhclZlbG9jaXR5ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5TZXRBd2FrZSh0cnVlKVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuU2V0TGluZWFyVmVsb2NpdHkoe1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgfSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkdldFBvc2l0aW9uKClcbiAgcmV0dXJuIHtcbiAgICB4OiBwb3NpdGlvbi54ICogdGhpcy5zY2FsZSxcbiAgICB5OiBwb3NpdGlvbi55ICogdGhpcy5zY2FsZVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkdldEFuZ2xlKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc1N5c3RlbVxuIiwiY29uc3QgUGh5c2ljc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChzeXN0ZW0pIHtcbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmJvZHkgPSBudWxsXG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuZml4dHVyZXMgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzQ29tcG9uZW50XG4iLCJpbXBvcnQgQXVkaW9TeXN0ZW0gZnJvbSAnLi9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtJ1xuaW1wb3J0IEF1ZGlvQ29tcG9uZW50IGZyb20gJy4vYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXIvbG9hZGVyJ1xuaW1wb3J0IEVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5LXN5c3RlbS9lbnRpdHknXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMvaGVscGVycydcbmltcG9ydCBLZXkgZnJvbSAnLi9rZXktc3lzdGVtL2tleSdcbmltcG9ydCBLZXlTeXN0ZW0gZnJvbSAnLi9rZXktc3lzdGVtL2tleS1zeXN0ZW0nXG5pbXBvcnQgTG9vcFN5c3RlbSBmcm9tICcuL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtJ1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi9wb2ludGVyLXN5c3RlbS9wb2ludGVyJ1xuaW1wb3J0IFBvaW50ZXJTeXN0ZW0gZnJvbSAnLi9wb2ludGVyLXN5c3RlbS9wb2ludGVyLXN5c3RlbSdcbmltcG9ydCBTcHJpdGVDb21wb25lbnQgZnJvbSAnLi9yZW5kZXItc3lzdGVtL3Nwcml0ZS1jb21wb25lbnQnXG5pbXBvcnQgUmVuZGVyU3lzdGVtIGZyb20gJy4vcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtJ1xuaW1wb3J0IFNjZW5lIGZyb20gJy4vc2NlbmUtc3lzdGVtL3NjZW5lJ1xuaW1wb3J0IFNjZW5lU3lzdGVtIGZyb20gJy4vc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbSdcbmltcG9ydCBCZWhhdmlvdXJDb21wb25lbnQgZnJvbSAnLi9iZWhhdmlvdXItc3lzdGVtL2JlaGF2aW91ci1jb21wb25lbnQnXG5pbXBvcnQgQmVoYXZpb3VyU3lzdGVtIGZyb20gJy4vYmVoYXZpb3VyLXN5c3RlbS9iZWhhdmlvdXItc3lzdGVtJ1xuaW1wb3J0IFN0YXRlQ29tcG9uZW50IGZyb20gJy4vc3RhdGUtc3lzdGVtL3N0YXRlLWNvbXBvbmVudCdcbmltcG9ydCBTdGF0ZVN5c3RlbSBmcm9tICcuL3N0YXRlLXN5c3RlbS9zdGF0ZS1zeXN0ZW0nXG5pbXBvcnQgRW50aXR5U3lzdGVtIGZyb20gJy4vZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtJ1xuaW1wb3J0IFBoeXNpY3NTeXN0ZW0gZnJvbSAnLi9waHlzaWNzLXN5c3RlbS9waHlzaWNzLXN5c3RlbSdcbmltcG9ydCBQaHlzaWNzQ29tcG9uZW50IGZyb20gJy4vcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1jb21wb25lbnQnXG5cbmNvbnN0IEhhcm1vbnkgPSB7XG4gIEF1ZGlvU3lzdGVtOiBBdWRpb1N5c3RlbSxcbiAgQXVkaW9Db21wb25lbnQ6IEF1ZGlvQ29tcG9uZW50LFxuICBMb2FkZXI6IExvYWRlcixcbiAgRW5naW5lOiBFbmdpbmUsXG4gIEVudGl0eTogRW50aXR5LFxuICBFbnRpdHlTeXN0ZW06IEVudGl0eVN5c3RlbSxcbiAgSGVscGVyczogSGVscGVycyxcbiAgS2V5OiBLZXksXG4gIEtleVN5c3RlbTogS2V5U3lzdGVtLFxuICBMb29wU3lzdGVtOiBMb29wU3lzdGVtLFxuICBQaHlzaWNzQ29tcG9uZW50OiBQaHlzaWNzQ29tcG9uZW50LFxuICBQaHlzaWNzU3lzdGVtOiBQaHlzaWNzU3lzdGVtLFxuICBQb2ludGVyOiBQb2ludGVyLFxuICBQb2ludGVyU3lzdGVtOiBQb2ludGVyU3lzdGVtLFxuICBTcHJpdGVDb21wb25lbnQ6IFNwcml0ZUNvbXBvbmVudCxcbiAgUmVuZGVyU3lzdGVtOiBSZW5kZXJTeXN0ZW0sXG4gIFNjZW5lOiBTY2VuZSxcbiAgU2NlbmVTeXN0ZW06IFNjZW5lU3lzdGVtLFxuICBCZWhhdmlvdXJDb21wb25lbnQ6IEJlaGF2aW91ckNvbXBvbmVudCxcbiAgQmVoYXZpb3VyU3lzdGVtOiBCZWhhdmlvdXJTeXN0ZW0sXG4gIFN0YXRlQ29tcG9uZW50OiBTdGF0ZUNvbXBvbmVudCxcbiAgU3RhdGVTeXN0ZW06IFN0YXRlU3lzdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhcm1vbnlcbiJdLCJzb3VyY2VSb290IjoiIn0=