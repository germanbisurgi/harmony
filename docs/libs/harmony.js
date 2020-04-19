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

  for (var i = 0; i < fixtureDef.shape.m_vertices; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImF1ZGlvQ29tcG9uZW50TmFtZSIsInByb3RvdHlwZSIsInBsYXkiLCJlbnRpdHkiLCJuYW1lIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsImF1ZGlvIiwiYnVmZmVyIiwidmFsdWUiLCJ2b2x1bWUiLCJzdGFydCIsInN0b3AiLCJhZGRBdWRpb0NvbXBvbmVudCIsImNvbmZpZyIsImNvbXBvbmVudCIsIkhhcm1vbnkiLCJBdWRpb0NvbXBvbmVudCIsInB1c2giLCJ1cGRhdGUiLCJzdGF0ZSIsInJlc3VtZSIsImkiLCJsZW5ndGgiLCJtdXN0RGVzdHJveSIsInNwbGljZSIsImRlc3Ryb3lDb21wb25lbnQiLCJwYXJhbXMiLCJzeXN0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJMb2FkZXIiLCJpbWFnZXNDYWNoZSIsImF1ZGlvQ2FjaGUiLCJsb2FkaW5nIiwiY29tcGxldGUiLCJlcnJvcnMiLCJzdWNjZXNzIiwicXVldWVkIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25TdWNjZXNzIiwib25lcnJvciIsInJlYXNvbiIsIm9uRXJyb3IiLCJzcmMiLCJ1cmwiLCJsb2FkQXVkaW8iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXNwb25zZSIsInNlbmQiLCJvblN0YXJ0Iiwib25Qcm9ncmVzcyIsIm9uQ29tcGxldGUiLCJwcm9ncmVzcyIsIk1hdGgiLCJmbG9vciIsImlzTmFOIiwiRW5naW5lIiwiY2FudmFzIiwibG9hZGVyIiwibG9vcCIsIkxvb3BTeXN0ZW0iLCJzY2VuZSIsIlNjZW5lU3lzdGVtIiwicmVuZGVyIiwiUmVuZGVyU3lzdGVtIiwiZW50aXRpZXMiLCJFbnRpdHlTeXN0ZW0iLCJrZXlzIiwiS2V5U3lzdGVtIiwicGh5c2ljcyIsIlBoeXNpY3NTeXN0ZW0iLCJwb2ludGVycyIsIlBvaW50ZXJTeXN0ZW0iLCJiZWhhdmlvdXJzIiwiQmVoYXZpb3VyU3lzdGVtIiwiU3RhdGVTeXN0ZW0iLCJoZWxwZXJzIiwiSGVscGVycyIsIm9uU3RlcCIsImN1cnJlbnQiLCJtdXN0UHJlbG9hZCIsInByZWxvYWQiLCJyZXF1ZXN0Q3JlYXRlIiwibXVzdENyZWF0ZSIsInJlcXVlc3RVcGRhdGUiLCJjcmVhdGUiLCJtdXN0VXBkYXRlIiwicmVxdWVzdERyYXciLCJtdXN0RHJhdyIsImRyYXciLCJkcmF3RGVidWdEYXRhIiwibXVzdFN3aXRjaCIsImRlc3Ryb3lBbGwiLCJkZXN0cm95IiwicmVxdWVzdGVkIiwicmVxdWVzdFByZWxvYWQiLCJydW4iLCJFbnRpdHkiLCJ0YWdzIiwieCIsInkiLCJhbmdsZSIsInNjYWxlIiwiY3JlYXRlR3JpZCIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiY2VpbCIsInJhbmRvbSIsImdldFJhbmRvbUl0ZW1zIiwiYXJyYXkiLCJxdWFudGl0eSIsInJhbmRvbUl0ZW1zIiwicmFuZG9tSW5kZXgiLCJzaHVmZmxlQXJyYXkiLCJqIiwiS2V5Iiwia2V5IiwiZW5kIiwiaG9sZCIsImhvbGRUaW1lIiwic3RhcnRGcmFtZSIsImVuZEZyYW1lIiwiZW5hYmxlZCIsImRlbHRhIiwibm93IiwidGhlbiIsImZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImJpbmQiLCJoYW5kbGVLZXlVcCIsImV2ZW50IiwiZ2V0T3JTZXQiLCJnZXQiLCJwZXJmb3JtYW5jZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFjY3VtdWxhdG9yIiwibGFzdFRpbWUiLCJsYXN0U3RlcCIsImZwcyIsInBhdXNlZCIsInRpbWVzdGVwIiwicGF1c2UiLCJ0aW1lc3RhbXAiLCJzdGVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUG9pbnRlciIsImFjdGl2ZSIsImlkIiwidHlwZSIsInN0YXJ0WCIsInN0YXJ0WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW5hYmxlUG9pbnRlcnMiLCJwb2ludGVyIiwic3R5bGUiLCJ0b3VjaEFjdGlvbiIsInVzZXJTZWxlY3QiLCJoYW5kbGVQb2ludGVyRG93biIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJnZXRQb2ludGVyQnlJRCIsIm91dHB1dCIsImdldEluYWN0aXZlUG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJjbGllbnRYIiwidGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJzdG9wUHJvcGFnYXRpb24iLCJTcHJpdGVDb21wb25lbnQiLCJ3aWR0aCIsImhlaWdodCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJhbmNob3JYIiwiYW5jaG9yWSIsInZpc2libGUiLCJnZXRDb250ZXh0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic3ByaXRlQ29tcG9uZW50TmFtZSIsImNsZWFyIiwiY2xlYXJSZWN0Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJhZGRTcHJpdGVDb21wb25lbnQiLCJ1bnNoaWZ0IiwidGV4dCIsImZpbGxUZXh0IiwiY2lyY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiUEkiLCJzdHJva2UiLCJsaW5lIiwibW92ZVRvIiwiYXgiLCJheSIsImxpbmVUbyIsImJ4IiwiYnkiLCJyZWN0Iiwic3ByaXRlIiwiU2NlbmUiLCJtZXRob2RzIiwiZW5naW5lIiwicmVxdWVzdFN3aXRjaCIsIkJlaGF2aW91ckNvbXBvbmVudCIsIm11c3RTdGFydCIsIm9uVXBkYXRlIiwiYmVoYXZpb3VyQ29tcG9uZW50TmFtZSIsImFkZEJlaGF2aW91ckNvbXBvbmVudCIsIlN0YXRlQ29tcG9uZW50Iiwic3RhdGVzIiwiY29tcG9uZW50TmFtZSIsInN0YXRlQ29tcG9uZW50TmFtZSIsImFkZFN0YXRlQ29tcG9uZW50IiwiZXhpdCIsImVudGVyIiwiYWRkIiwiaGFzVGFnIiwidGFnIiwiaW5jbHVkZXMiLCJCMldvcmxkIiwiQm94MkQiLCJEeW5hbWljcyIsImIyV29ybGQiLCJCMlZlYzIiLCJDb21tb24iLCJiMlZlYzIiLCJCMkRlYnVnRHJhdyIsImIyRGVidWdEcmF3IiwiQjJDb250YWN0TGlzdGVuZXIiLCJiMkNvbnRhY3RMaXN0ZW5lciIsIndvcmxkIiwiY29udGFjdHMiLCJwaHlzaWNzQ29tcG9uZW50TmFtZSIsIlNldENvbnRhY3RMaXN0ZW5lciIsIkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJjb21wb25lbnRBIiwiR2V0Rml4dHVyZUEiLCJHZXRCb2R5IiwiR2V0VXNlckRhdGEiLCJjb21wb25lbnRCIiwiR2V0Rml4dHVyZUIiLCJlbnRpdHlBIiwiZW50aXR5QiIsIm9uQ29udGFjdEJlZ2luIiwiRW5kQ29udGFjdCIsIm9uQ29udGFjdEVuZCIsIlByZVNvbHZlIiwib25Db250YWN0UHJlU29sdmUiLCJQb3N0U29sdmUiLCJvbkNvbnRhY3RQb3N0U29sdmUiLCJkZWJ1Z0RyYXciLCJTZXRTcHJpdGUiLCJTZXREcmF3U2NhbGUiLCJTZXRGaWxsQWxwaGEiLCJTZXRGbGFncyIsImVfc2hhcGVCaXQiLCJBcHBlbmRGbGFncyIsImVfam9pbnRCaXQiLCJTZXREZWJ1Z0RyYXciLCJtX2RlYnVnRHJhdyIsIm1fc3ByaXRlIiwiZ3JhcGhpY3MiLCJjYWxsYmFjayIsImdldENvbXBvbmVudCIsInNldEdyYXZpdHkiLCJTZXRHcmF2aXR5IiwiRHJhd0RlYnVnRGF0YSIsImFkZFBoeXNpY3NDb21wb25lbnQiLCJQaHlzaWNzQ29tcG9uZW50IiwiYm9keSIsImNyZWF0ZUJvZHkiLCJTZXRVc2VyRGF0YSIsImdldEZpeHR1cmVEZWYiLCJCMkZpeHR1cmVEZWYiLCJiMkZpeHR1cmVEZWYiLCJmaXhEZWYiLCJkZW5zaXR5IiwiZnJpY3Rpb24iLCJyZXN0aXR1dGlvbiIsImlzU2Vuc29yIiwiYWRkUmVjdGFuZ2xlIiwiZGVmYXVsdHMiLCJmaXh0dXJlRGVmIiwiQjJQb2x5Z29uU2hhcGUiLCJDb2xsaXNpb24iLCJTaGFwZXMiLCJiMlBvbHlnb25TaGFwZSIsInNoYXBlIiwiU2V0QXNCb3giLCJtX3ZlcnRpY2VzIiwidmVydCIsIm1fY2VudHJvaWQiLCJmaXh0dXJlIiwiQ3JlYXRlRml4dHVyZSIsImZpeHR1cmVzIiwiYWRkQ2lyY2xlIiwiZml4dHVyZURlZmluaXRpb24iLCJCMkNpcmNsZVNoYXBlIiwiYjJDaXJjbGVTaGFwZSIsIm1fcCIsImFkZEVkZ2UiLCJTZXRBc0VkZ2UiLCJhbGxvd1NsZWVwIiwiYXdha2UiLCJidWxsZXQiLCJmaXhlZFJvdGF0aW9uIiwiYW5ndWxhckRhbXBpbmciLCJhbmd1bGFyVmVsb2NpdHkiLCJsaW5lYXJEYW1waW5nIiwibGluZWFyVmVsb2NpdHkiLCJ1c2VyRGF0YSIsIkIyQm9keURlZiIsImIyQm9keURlZiIsIkIyQm9keSIsImIyQm9keSIsImJvZHlEZWYiLCJwb3NpdGlvbiIsImIyX3N0YXRpY0JvZHkiLCJiMl9keW5hbWljQm9keSIsImIyX2tpbmVtYXRpY0JvZHkiLCJDcmVhdGVCb2R5IiwiU3RlcCIsIkNsZWFyRm9yY2VzIiwiZ2V0UG9zaXRpb24iLCJnZXRBbmdsZSIsImZvckVhY2giLCJEZXN0cm95Rml4dHVyZSIsIkRlc3Ryb3lCb2R5IiwiYXBwbHlGb3JjZSIsIkFwcGx5Rm9yY2UiLCJHZXRXb3JsZENlbnRlciIsInNldFBvc2l0aW9uIiwiU2V0UG9zaXRpb24iLCJzZXRMaW5lYXJWZWxvY2l0eSIsIlNldEF3YWtlIiwiU2V0TGluZWFyVmVsb2NpdHkiLCJHZXRQb3NpdGlvbiIsIkdldEFuZ2xlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFxQjs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNB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Z0IsRUFBRUEsaUJBWEo7QUFZZDlOLGVBQWEsRUFBRUEsY0FaRDtBQWFkbUYsU0FBTyxFQUFFQSxPQWJLO0FBY2RqRixlQUFhLEVBQUVBLGNBZEQ7QUFlZDhHLGlCQUFlLEVBQUVBLGdCQWZIO0FBZ0JkdEgsY0FBWSxFQUFFQSxhQWhCQTtBQWlCZDhKLE9BQUssRUFBRUEsS0FqQk87QUFrQmRoSyxhQUFXLEVBQUVBLFlBbEJDO0FBbUJkb0ssb0JBQWtCLEVBQUVBLG1CQW5CTjtBQW9CZHhKLGlCQUFlLEVBQUVBLGdCQXBCSDtBQXFCZDZKLGdCQUFjLEVBQUVBLGVBckJGO0FBc0JkNUosYUFBVyxFQUFFQSxZQUFXQTtBQXRCVixDQUFoQjtBQXlCZXRFLDRGQUFmLEUiLCJmaWxlIjoiaGFybW9ueS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhhcm1vbnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSGFybW9ueVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuY29uc3QgQXVkaW9TeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuICB0aGlzLmNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KClcbiAgdGhpcy5tYXN0ZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLm1hc3Rlci5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbilcbiAgdGhpcy5hdWRpb0NvbXBvbmVudE5hbWUgPSAnYXVkaW8nXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKGVudGl0eSwgbmFtZSkge1xuICBjb25zdCBzb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKClcbiAgY29uc3QgZ2FpbiA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKClcbiAgZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlID0gc291cmNlXG4gIHNvdXJjZS5idWZmZXIgPSB0aGlzLmNhY2hlW25hbWVdXG4gIHNvdXJjZS5jb25uZWN0KGdhaW4pXG4gIGdhaW4uY29ubmVjdCh0aGlzLm1hc3RlcilcbiAgZ2Fpbi5nYWluLnZhbHVlID0gZW50aXR5LmNvbXBvbmVudHMuYXVkaW8udm9sdW1lXG4gIHNvdXJjZS5zdGFydCgpXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBpZiAoZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlKSB7XG4gICAgZW50aXR5LmNvbXBvbmVudHMuYXVkaW8uc291cmNlLnN0b3AoKVxuICB9XG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5hZGRBdWRpb0NvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5BdWRpb0NvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5hdWRpb0NvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzdW1lKClcbiAgfVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9XG4gIH1cbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHRoaXMuc3RvcChlbnRpdHkpXG4gIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1N5c3RlbVxuIiwiY29uc3QgQXVkaW9Db21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdm9sdW1lOiAxXG4gIH0sIHBhcmFtcylcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5zb3VyY2UgPSBudWxsXG4gIHRoaXMudm9sdW1lID0gY29uZmlnLnZvbHVtZVxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9Db21wb25lbnRcbiIsIi8qIGdsb2JhbCBJbWFnZSAqL1xuXG5jb25zdCBMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuaW1hZ2VzQ2FjaGUgPSB7fVxuICB0aGlzLmF1ZGlvQ2FjaGUgPSB7fVxuICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gIHRoaXMuZXJyb3JzID0gMFxuICB0aGlzLnN1Y2Nlc3MgPSAwXG4gIHRoaXMucXVldWVkID0gMFxufVxuXG5Mb2FkZXIucHJvdG90eXBlLmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5xdWV1ZWQrK1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN1Y2Nlc3MrK1xuICAgICAgdGhpcy5pbWFnZXNDYWNoZVtjb25maWcubmFtZV0gPSBpbWFnZVxuICAgICAgdGhpcy5vblN1Y2Nlc3MoY29uZmlnKVxuICAgICAgcmVzb2x2ZShpbWFnZSlcbiAgICB9XG4gICAgaW1hZ2Uub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBjb25maWcudXJsXG4gIH0pXG59XG5cbkxvYWRlci5wcm90b3R5cGUubG9hZEF1ZGlvID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLnF1ZXVlZCsrXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgY29uc3QgQXVkaW9Db250ZXh0ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKClcbiAgICB4aHIub3BlbignR0VUJywgY29uZmlnLnVybCwgdHJ1ZSlcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJ1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBBdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHhoci5yZXNwb25zZSwgKGJ1ZmZlcikgPT4ge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MrK1xuICAgICAgICB0aGlzLmF1ZGlvQ2FjaGVbY29uZmlnLm5hbWVdID0gYnVmZmVyXG4gICAgICAgIHRoaXMub25TdWNjZXNzKGNvbmZpZylcbiAgICAgICAgcmVzb2x2ZShidWZmZXIpXG4gICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgICAgdGhpcy5vbkVycm9yKGNvbmZpZylcbiAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgIH0pXG4gICAgfVxuICAgIHhoci5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgdGhpcy5lcnJvcnMrK1xuICAgICAgdGhpcy5vbkVycm9yKGNvbmZpZylcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIHhoci5zZW5kKClcbiAgfSlcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucXVldWVkID4gMCkge1xuICAgIGlmICghdGhpcy5zdGFydCkge1xuICAgICAgdGhpcy5zdGFydCA9IHRydWVcbiAgICAgIHRoaXMub25TdGFydCgpXG4gICAgfVxuICAgIGlmICh0aGlzLnF1ZXVlZCA9PT0gdGhpcy5zdWNjZXNzICsgdGhpcy5lcnJvcnMpIHtcbiAgICAgIHRoaXMucXVldWVkID0gMFxuICAgICAgdGhpcy5zdWNjZXNzID0gMFxuICAgICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWVcbiAgICAgIHRoaXMuc3RhcnQgPSBmYWxzZVxuICAgICAgdGhpcy5vbkNvbXBsZXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gICAgfVxuICAgIGxldCBwcm9ncmVzcyA9IE1hdGguZmxvb3IoKHRoaXMuc3VjY2VzcyArIHRoaXMuZXJyb3JzKSAvIHRoaXMucXVldWVkICogMTAwKVxuICAgIGlmIChpc05hTihwcm9ncmVzcykpIHtcbiAgICAgIHByb2dyZXNzID0gMTAwXG4gICAgfVxuICAgIHRoaXMub25Qcm9ncmVzcyhwcm9ncmVzcylcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBFbmdpbmUgPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIHRoaXMubG9hZGVyID0gbmV3IEhhcm1vbnkuTG9hZGVyKClcbiAgdGhpcy5sb29wID0gbmV3IEhhcm1vbnkuTG9vcFN5c3RlbSgpXG4gIHRoaXMuc2NlbmUgPSBuZXcgSGFybW9ueS5TY2VuZVN5c3RlbSgpXG4gIHRoaXMucmVuZGVyID0gbmV3IEhhcm1vbnkuUmVuZGVyU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5hdWRpbyA9IG5ldyBIYXJtb255LkF1ZGlvU3lzdGVtKClcbiAgdGhpcy5lbnRpdGllcyA9IG5ldyBIYXJtb255LkVudGl0eVN5c3RlbSgpXG4gIHRoaXMua2V5cyA9IG5ldyBIYXJtb255LktleVN5c3RlbSgpXG4gIHRoaXMucGh5c2ljcyA9IG5ldyBIYXJtb255LlBoeXNpY3NTeXN0ZW0oY2FudmFzKVxuICB0aGlzLnBvaW50ZXJzID0gbmV3IEhhcm1vbnkuUG9pbnRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuYmVoYXZpb3VycyA9IG5ldyBIYXJtb255LkJlaGF2aW91clN5c3RlbSh0aGlzKVxuICB0aGlzLnN0YXRlID0gbmV3IEhhcm1vbnkuU3RhdGVTeXN0ZW0oKVxuICB0aGlzLmhlbHBlcnMgPSBuZXcgSGFybW9ueS5IZWxwZXJzKClcblxuICB0aGlzLmxvb3Aub25TdGVwID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0aGlzLnNjZW5lLmN1cnJlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RQcmVsb2FkKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkZXIubG9hZGluZykge1xuICAgICAgICAgIHRoaXMuc2NlbmUuY3VycmVudC5wcmVsb2FkKHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkZXIudXBkYXRlKClcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIuY2FjaGUgPSB0aGlzLmxvYWRlci5pbWFnZXNDYWNoZVxuICAgICAgICAgIHRoaXMuYXVkaW8uY2FjaGUgPSB0aGlzLmxvYWRlci5hdWRpb0NhY2hlXG4gICAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0Q3JlYXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdENyZWF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RVcGRhdGUoKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQuY3JlYXRlKHRoaXMpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0VXBkYXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdERyYXcoKVxuICAgICAgICB0aGlzLmtleXMudXBkYXRlKClcbiAgICAgICAgdGhpcy5wb2ludGVycy51cGRhdGUoKVxuICAgICAgICB0aGlzLmF1ZGlvLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMucGh5c2ljcy51cGRhdGUoKVxuICAgICAgICB0aGlzLmVudGl0aWVzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuYmVoYXZpb3Vycy51cGRhdGUoKVxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZSh0aGlzKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQudXBkYXRlKHRoaXMpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0RHJhdykge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RVcGRhdGUoKVxuICAgICAgICB0aGlzLnJlbmRlci5kcmF3KClcbiAgICAgICAgdGhpcy5waHlzaWNzLmRyYXdEZWJ1Z0RhdGEoKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQuZHJhdyh0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zY2VuZS5tdXN0U3dpdGNoKSB7XG4gICAgICB0aGlzLmVudGl0aWVzLmRlc3Ryb3lBbGwoKVxuICAgICAgdGhpcy5wb2ludGVycy5kZXN0cm95KClcbiAgICAgIHRoaXMua2V5cy5kZXN0cm95KClcbiAgICAgIHRoaXMuc2NlbmUuY3VycmVudCA9IHRoaXMuc2NlbmUucmVxdWVzdGVkXG4gICAgICB0aGlzLnNjZW5lLnJlcXVlc3RQcmVsb2FkKClcbiAgICB9XG4gIH1cbiAgdGhpcy5sb29wLnJ1bigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZ2luZVxuIiwiY29uc3QgRW50aXR5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICB0YWdzOiBbXSxcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgYW5nbGU6IDAsXG4gICAgc2NhbGU6IDFcbiAgfSwgcGFyYW1zKVxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgdGhpcy50YWdzID0gY29uZmlnLnRhZ3NcbiAgdGhpcy54ID0gY29uZmlnLnhcbiAgdGhpcy55ID0gY29uZmlnLnlcbiAgdGhpcy5hbmdsZSA9IGNvbmZpZy5hbmdsZVxuICB0aGlzLnNjYWxlID0gY29uZmlnLnNjYWxlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eVxuIiwiY29uc3QgSGVscGVycyA9IGZ1bmN0aW9uICgpIHt9XG5cbkhlbHBlcnMucHJvdG90eXBlLmNyZWF0ZUdyaWQgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBncmlkID0gbmV3IEFycmF5KGNvbHMpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgIGdyaWRbaV0gPSBuZXcgQXJyYXkocm93cylcbiAgfVxuICByZXR1cm4gZ3JpZFxufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5nZXRSYW5kb21JbnQgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbilcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbkhlbHBlcnMucHJvdG90eXBlLmdldFJhbmRvbUl0ZW1zID0gZnVuY3Rpb24gKGFycmF5LCBxdWFudGl0eSkge1xuICBjb25zdCByYW5kb21JdGVtcyA9IFtdXG4gIGZvciAobGV0IGkgPSBxdWFudGl0eTsgaS0tOykge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgYXJyYXkubGVuZ3RoIC0gMSlcbiAgICByYW5kb21JdGVtcy5wdXNoKGFycmF5W3JhbmRvbUluZGV4XSlcbiAgICBhcnJheS5zcGxpY2UocmFuZG9tSW5kZXgsIDEpXG4gIH1cbiAgcmV0dXJuIHJhbmRvbUl0ZW1zXG59XG5cbkhlbHBlcnMucHJvdG90eXBlLnNodWZmbGVBcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKVxuICAgIGNvbnN0IHggPSBhcnJheVtpXVxuICAgIGFycmF5W2ldID0gYXJyYXlbal1cbiAgICBhcnJheVtqXSA9IHhcbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVscGVyc1xuIiwiY29uc3QgS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICB0aGlzLmtleSA9IGtleVxuICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5lbmQgPSBmYWxzZVxuICB0aGlzLmhvbGQgPSBmYWxzZVxuICB0aGlzLmhvbGRUaW1lID0gMFxuICB0aGlzLnN0YXJ0RnJhbWUgPSAwXG4gIHRoaXMuZW5kRnJhbWUgPSAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgS2V5U3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVuYWJsZWQgPSB0cnVlXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLm5vdyA9IDBcbiAgdGhpcy50aGVuID0gMFxuICB0aGlzLmZyYW1lID0gMFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyksIGZhbHNlKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKSwgZmFsc2UpXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbZXZlbnQua2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2V2ZW50LmtleV0uaG9sZCA9IHRydWVcbiAgfVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtldmVudC5rZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbZXZlbnQua2V5XS5ob2xkID0gZmFsc2VcbiAgfVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmdldE9yU2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSBuZXcgSGFybW9ueS5LZXkoa2V5KVxuICB9XG4gIHJldHVybiB0aGlzLmNhY2hlW2tleV1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiB0aGlzLmdldE9yU2V0KGtleSlcbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICB0aGlzLmZyYW1lKytcbiAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlblxuICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAoa2V5LmhvbGQpIHtcbiAgICAgICAga2V5LmhvbGRUaW1lICs9IHRoaXMuZGVsdGFcbiAgICAgICAga2V5LmVuZEZyYW1lID0gLTFcbiAgICAgICAgaWYgKGtleS5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgIGtleS5zdGFydEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkuaG9sZFRpbWUgPSAwXG4gICAgICAgIGtleS5zdGFydEZyYW1lID0gLTFcbiAgICAgICAgaWYgKGtleS5lbmRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICBrZXkuZW5kRnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGtleS5zdGFydCA9IChrZXkuc3RhcnRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICAgIGtleS5lbmQgPSAoa2V5LmVuZEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgIH1cbiAgfVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlTeXN0ZW1cbiIsImNvbnN0IExvb3BTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWNjdW11bGF0b3IgPSAwXG4gIHRoaXMuZGVsdGEgPSAwXG4gIHRoaXMubGFzdFRpbWUgPSAwXG4gIHRoaXMubGFzdFN0ZXAgPSAwXG4gIHRoaXMuZnBzID0gNjBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxuICB0aGlzLnRpbWVzdGVwID0gMTAwMCAvIHRoaXMuZnBzXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLmNvbnRpbnVlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBhdXNlZCA9IGZhbHNlXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBhdXNlZCA9IHRydWVcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICB0aW1lc3RhbXAgPSB0aW1lc3RhbXAgfHwgMFxuICB0aGlzLnRpbWVzdGVwID0gMTAwMCAvIHRoaXMuZnBzXG4gIHRoaXMuYWNjdW11bGF0b3IgKz0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZVxuICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wXG4gIHdoaWxlICghdGhpcy5wYXVzZWQgJiYgdGhpcy5hY2N1bXVsYXRvciA+PSB0aGlzLnRpbWVzdGVwKSB7XG4gICAgdGhpcy5zdGVwKClcbiAgICB0aGlzLmRlbHRhID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0U3RlcFxuICAgIHRoaXMubGFzdFN0ZXAgPSB0aW1lc3RhbXBcbiAgICB0aGlzLmFjY3VtdWxhdG9yIC09IHRoaXMudGltZXN0ZXBcbiAgfVxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucnVuLmJpbmQodGhpcykpXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZnJhbWUrK1xuICB0aGlzLm9uU3RlcCgpXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLm9uU3RlcCA9IGZ1bmN0aW9uICgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IExvb3BTeXN0ZW1cbiIsImNvbnN0IFBvaW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgdGhpcy5ob2xkID0gZmFsc2VcbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMuZW5kID0gZmFsc2VcbiAgdGhpcy5ob2xkVGltZSA9IDBcbiAgdGhpcy5zdGFydEZyYW1lID0gMFxuICB0aGlzLmVuZEZyYW1lID0gMFxuICB0aGlzLmlkID0gMFxuICB0aGlzLnR5cGUgPSBudWxsXG4gIHRoaXMuc3RhcnRYID0gMFxuICB0aGlzLnN0YXJ0WSA9IDBcbiAgdGhpcy5vZmZzZXRYID0gMFxuICB0aGlzLm9mZnNldFkgPSAwXG4gIHRoaXMueCA9IDBcbiAgdGhpcy55ID0gMFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyXG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBQb2ludGVyU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmVuYWJsZWQgPSB0cnVlXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLm5vdyA9IDBcbiAgdGhpcy50aGVuID0gMFxuICB0aGlzLmZyYW1lID0gMFxuICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICB0aGlzLmVuYWJsZVBvaW50ZXJzKClcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0T3JTZXQgPSBmdW5jdGlvbiAocG9pbnRlcikge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbcG9pbnRlcl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtwb2ludGVyXSA9IG5ldyBIYXJtb255LlBvaW50ZXIocG9pbnRlcilcbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZVtwb2ludGVyXVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocG9pbnRlcikge1xuICByZXR1cm4gdGhpcy5nZXRPclNldChwb2ludGVyKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5lbmFibGVQb2ludGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYW52YXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJyAvLyBuZWVkZWQgZm9yIG1vYmlsZVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMuaGFuZGxlQ29udGV4dE1lbnUuYmluZCh0aGlzKSwgZmFsc2UpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldFBvaW50ZXJCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gIGxldCBvdXRwdXQgPSBmYWxzZVxuICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgY29uc3QgcG9pbnRlciA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChwb2ludGVyLmlkID09PSBpZCkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0SW5hY3RpdmVQb2ludGVyID0gZnVuY3Rpb24gKCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgIG91dHB1dCA9IHBvaW50ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuYWN0aXZlID0gdHJ1ZVxuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnR5cGUgPSBldmVudC5wb2ludGVyVHlwZSAvLyAnbW91c2UnLCAncGVuJywgJ3RvdWNoJ1xuICAgIHBvaW50ZXIuaG9sZCA9IHRydWVcbiAgICBwb2ludGVyLnN0YXJ0WCA9IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdFxuICAgIHBvaW50ZXIuc3RhcnRZID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcG9pbnRlciA9IHRoaXMuZ2V0UG9pbnRlckJ5SUQoZXZlbnQucG9pbnRlcklkKSB8fCB0aGlzLmdldEluYWN0aXZlUG9pbnRlcigpXG4gIGlmIChwb2ludGVyKSB7XG4gICAgcG9pbnRlci5pZCA9IGV2ZW50LnBvaW50ZXJJZFxuICAgIHBvaW50ZXIueCA9IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdFxuICAgIHBvaW50ZXIueSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcG9pbnRlciA9IHRoaXMuZ2V0UG9pbnRlckJ5SUQoZXZlbnQucG9pbnRlcklkKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuYWN0aXZlID0gZmFsc2VcbiAgICBwb2ludGVyLmhvbGQgPSBmYWxzZVxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgcmV0dXJuIGZhbHNlXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgIHRoaXMuZnJhbWUrK1xuICAgIHRoaXMubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuXG4gICAgdGhpcy50aGVuID0gdGhpcy5ub3dcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICAgIGlmIChwb2ludGVyLmhvbGQpIHtcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFggPSAocG9pbnRlci54IC0gcG9pbnRlci5zdGFydFgpXG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRZID0gKHBvaW50ZXIueSAtIHBvaW50ZXIuc3RhcnRZKVxuICAgICAgICAgIHBvaW50ZXIuaG9sZFRpbWUgKz0gdGhpcy5kZWx0YVxuICAgICAgICAgIHBvaW50ZXIuZW5kRnJhbWUgPSAtMVxuICAgICAgICAgIGlmIChwb2ludGVyLnN0YXJ0RnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAgICBwb2ludGVyLnN0YXJ0RnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvaW50ZXIub2Zmc2V0WCA9IDBcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFkgPSAwXG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSA9IDBcbiAgICAgICAgICBwb2ludGVyLnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICAgIGlmIChwb2ludGVyLmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRlci5zdGFydCA9IChwb2ludGVyLnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICAgIHBvaW50ZXIuZW5kID0gKHBvaW50ZXIuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyU3lzdGVtXG4iLCJjb25zdCBTcHJpdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaW1hZ2U6IG51bGwsXG4gICAgd2lkdGg6IDUwLFxuICAgIGhlaWdodDogNTAsXG4gICAgc291cmNlWDogMCxcbiAgICBzb3VyY2VZOiAwLFxuICAgIHNvdXJjZVdpZHRoOiAwLFxuICAgIHNvdXJjZUhlaWdodDogMCxcbiAgICBhbmNob3JYOiAwLjUsXG4gICAgYW5jaG9yWTogMC41LFxuICAgIHZpc2libGU6IHRydWVcbiAgfSwgcGFyYW1zKVxuXG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5pbWFnZSA9IGNvbmZpZy5pbWFnZVxuICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoXG4gIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodFxuICB0aGlzLnNvdXJjZVggPSBjb25maWcuc291cmNlWFxuICB0aGlzLnNvdXJjZVkgPSBjb25maWcuc291cmNlWVxuICB0aGlzLnNvdXJjZVdpZHRoID0gY29uZmlnLnNvdXJjZVdpZHRoXG4gIHRoaXMuc291cmNlSGVpZ2h0ID0gY29uZmlnLnNvdXJjZUhlaWdodFxuICB0aGlzLmFuY2hvclggPSBjb25maWcuYW5jaG9yWFxuICB0aGlzLmFuY2hvclkgPSBjb25maWcuYW5jaG9yWVxuICB0aGlzLnZpc2libGUgPSBjb25maWcudmlzaWJsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcHJpdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255IEltYWdlICovXG5cbmNvbnN0IFJlbmRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5zcHJpdGVDb21wb25lbnROYW1lID0gJ3Nwcml0ZSdcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBjb25maWcudXJsXG4gIH0pXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgcmV0dXJuIHRoaXMuY2FjaGVbaW1hZ2VdXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhcigpXG4gIC8vIHRoaXMuY29udGV4dC5zYXZlKClcblxuICAvLyB0cmFuc2xhdGUgdG8gY2FtZXJhIGNlbnRlclxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgICh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgICh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKVxuICAvLyApXG5cbiAgLy8gcm90YXRlXG4gIC8vIHRoaXMuY29udGV4dC5yb3RhdGUodGhpcy5jYW1lcmEuYW5nbGUpXG5cbiAgLy8gc2NhbGVcbiAgLy8gdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuY2FtZXJhLnpvb20sIHRoaXMuY2FtZXJhLnpvb20pXG5cbiAgLy8gdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCdcbiAgLy8gdGhpcy5jYW52YXMuY2lyY2xlKDAsIDAsIDEwKVxuXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgLSh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLFxuICAvLyAgIC0odGhpcy5jYW1lcmEuaGVpZ2h0IC8gMilcbiAgLy8gKVxuXG4gIC8vIHRyYW5zbGF0ZVxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi54LFxuICAvLyAgIC10aGlzLmNhbWVyYS5wb3NpdGlvbi55XG4gIC8vIClcblxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudC5lbnRpdHkpXG5cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21wb25lbnQudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpXG4gICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS54ICsgY29tcG9uZW50LndpZHRoICogMC41ICogY29tcG9uZW50LmVudGl0eS5zY2FsZSAtIGNvbXBvbmVudC53aWR0aCAqIGNvbXBvbmVudC5hbmNob3JYICogY29tcG9uZW50LmVudGl0eS5zY2FsZSxcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnkgKyBjb21wb25lbnQuaGVpZ2h0ICogMC41ICogY29tcG9uZW50LmVudGl0eS5zY2FsZSAtIGNvbXBvbmVudC5oZWlnaHQgKiBjb21wb25lbnQuYW5jaG9yWSAqIGNvbXBvbmVudC5lbnRpdHkuc2NhbGVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmNvbnRleHQucm90YXRlKGNvbXBvbmVudC5lbnRpdHkuYW5nbGUpXG4gICAgICAgIHRoaXMuY29udGV4dC5zY2FsZShcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkuc2NhbGVcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChjb21wb25lbnQuc291cmNlV2lkdGggPT09IDApIHtcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlV2lkdGggPSBjb21wb25lbnQuaW1hZ2Uud2lkdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQuc291cmNlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZUhlaWdodCA9IGNvbXBvbmVudC5pbWFnZS5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgY29tcG9uZW50LmltYWdlLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VYLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VZLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VXaWR0aCxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlSGVpZ2h0LFxuICAgICAgICAgIGNvbXBvbmVudC53aWR0aCAqIC0wLjUsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LmhlaWdodCAqIC0wLjUsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LndpZHRoLCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC5oZWlnaHQgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmFkZFNwcml0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5TcHJpdGVDb21wb25lbnQoY29uZmlnLCB0aGlzKVxuICBjb21wb25lbnQuZW50aXR5ID0gZW50aXR5XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuc3ByaXRlQ29tcG9uZW50TmFtZV0gPSBjb21wb25lbnRcbiAgdGhpcy5jb21wb25lbnRzLnVuc2hpZnQoY29tcG9uZW50KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5maWxsVGV4dChjb25maWcudGV4dCwgY29uZmlnLngsIGNvbmZpZy55KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmNpcmNsZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gIHRoaXMuY29udGV4dC5hcmMoY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcucmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUubGluZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gIHRoaXMuY29udGV4dC5tb3ZlVG8oY29uZmlnLmF4LCBjb25maWcuYXkpXG4gIHRoaXMuY29udGV4dC5saW5lVG8oY29uZmlnLmJ4LCBjb25maWcuYnkpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLnJlY3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5yZWN0KGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBlbnRpdHkuY29tcG9uZW50cy5zcHJpdGUubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN5c3RlbVxuIiwiY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHRoaXMubWV0aG9kcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHByZWxvYWQ6ICgpID0+IHt9LFxuICAgIGNyZWF0ZTogKCkgPT4ge30sXG4gICAgdXBkYXRlOiAoKSA9PiB7fSxcbiAgICBkcmF3OiAoKSA9PiB7fVxuICB9LCBwYXJhbXMpXG59XG5cblNjZW5lLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLnByZWxvYWQoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLmNyZWF0ZShlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMudXBkYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuZHJhdyhlbmdpbmUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lXG4iLCJjb25zdCBTY2VuZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB0aGlzLnJlcXVlc3RlZCA9IG51bGxcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUuc3dpdGNoID0gZnVuY3Rpb24gKHNjZW5lKSB7XG4gIHRoaXMucmVxdWVzdGVkID0gc2NlbmVcbiAgdGhpcy5yZXF1ZXN0U3dpdGNoKClcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RQcmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gdHJ1ZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSB0cnVlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IHRydWVcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0RHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSB0cnVlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0U3dpdGNoID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVTeXN0ZW1cbiIsImNvbnN0IEJlaGF2aW91ckNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3RhcnQgPSB0cnVlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubWV0aG9kcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIG9uU3RhcnQ6ICgpID0+IHt9LFxuICAgIG9uVXBkYXRlOiAoKSA9PiB7fVxuICB9LCBwYXJhbXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW91ckNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgQmVoYXZpb3VyU3lzdGVtID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICB0aGlzLmVuZ2luZSA9IGVuZ2luZVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWUgPSAnYmVoYXZpb3VyJ1xufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLmFkZEJlaGF2aW91ckNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5CZWhhdmlvdXJDb21wb25lbnQoY29uZmlnLCB0aGlzKVxuICBjb21wb25lbnQuZW50aXR5ID0gZW50aXR5XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0gPSBjb21wb25lbnRcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBjb25zdCBlbnRpdHkgPSBjb21wb25lbnQuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0U3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydChlbnRpdHkpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RVcGRhdGUpIHtcbiAgICAgIHRoaXMub25VcGRhdGUoZW50aXR5KVxuICAgIH1cbiAgfVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubXVzdFN0YXJ0ID0gZmFsc2VcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5tdXN0VXBkYXRlID0gdHJ1ZVxuICByZXR1cm4gZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5tZXRob2RzLm9uU3RhcnQodGhpcy5lbmdpbmUsIGVudGl0eSlcbn1cblxuQmVoYXZpb3VyU3lzdGVtLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgcmV0dXJuIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubWV0aG9kcy5vblVwZGF0ZSh0aGlzLmVuZ2luZSwgZW50aXR5KVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZV0ubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW91clN5c3RlbVxuIiwiY29uc3QgU3RhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG4gIHRoaXMucmVxdWVzdGVkID0gcGFyYW1zLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB0aGlzLnN0YXRlcyA9IHBhcmFtcy5zdGF0ZXNcbn1cblxuU3RhdGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudE5hbWUgPSAnc3RhdGUnXG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBTdGF0ZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5zdGF0ZUNvbXBvbmVudE5hbWUgPSAnc3RhdGUnXG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS5hZGRTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5TdGF0ZUNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5zdGF0ZUNvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGlmIChjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmV4aXQoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGNvbXBvbmVudC5jdXJyZW50ID0gY29tcG9uZW50LnJlcXVlc3RlZFxuICAgICAgaWYgKGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC5tdXN0U3dpdGNoID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5jdXJyZW50ICYmIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLnVwZGF0ZSkge1xuICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0udXBkYXRlKGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnN0YXRlLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZVN5c3RlbVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW50aXR5U3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0gW11cbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGVudGl0eSA9IG5ldyBIYXJtb255LkVudGl0eShjb25maWcpXG4gIHRoaXMuY2FjaGUucHVzaChlbnRpdHkpXG4gIHJldHVybiBlbnRpdHlcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICBpZiAoZW50aXR5Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNhY2hlLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGZvciAoY29uc3QgaSBpbiBlbnRpdHkuY29tcG9uZW50cykge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlbnRpdHkuY29tcG9uZW50cywgaSkpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRzW2ldXG4gICAgICBjb25zdCBzeXN0ZW0gPSBjb21wb25lbnQuc3lzdGVtXG4gICAgICBzeXN0ZW0uZGVzdHJveUNvbXBvbmVudChlbnRpdHkpXG4gICAgfVxuICB9XG4gIGVudGl0eS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5oYXNUYWcgPSBmdW5jdGlvbiAoZW50aXR5LCB0YWcpIHtcbiAgcmV0dXJuIGVudGl0eS50YWdzLmluY2x1ZGVzKHRhZylcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95QWxsID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmNhY2hlW2ldXG4gICAgdGhpcy5kZXN0cm95KGVudGl0eSlcbiAgfVxuICB0aGlzLmNhY2hlID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5U3lzdGVtXG4iLCIvKiBnbG9iYWwgQm94MkQgSGFybW9ueSAqL1xuXG5jb25zdCBQaHlzaWNzU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICBjb25zdCBCMldvcmxkID0gQm94MkQuRHluYW1pY3MuYjJXb3JsZFxuICBjb25zdCBCMlZlYzIgPSBCb3gyRC5Db21tb24uTWF0aC5iMlZlYzJcbiAgY29uc3QgQjJEZWJ1Z0RyYXcgPSBCb3gyRC5EeW5hbWljcy5iMkRlYnVnRHJhd1xuICBjb25zdCBCMkNvbnRhY3RMaXN0ZW5lciA9IEJveDJELkR5bmFtaWNzLmIyQ29udGFjdExpc3RlbmVyXG5cbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLnNjYWxlID0gMTAwXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMud29ybGQgPSBuZXcgQjJXb3JsZChuZXcgQjJWZWMyKDAsIDApLCB0cnVlKVxuICB0aGlzLmNvbnRhY3RzID0gbmV3IEIyQ29udGFjdExpc3RlbmVyKClcbiAgdGhpcy5waHlzaWNzQ29tcG9uZW50TmFtZSA9ICdwaHlzaWNzJ1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWN0c1xuXG4gIHRoaXMud29ybGQuU2V0Q29udGFjdExpc3RlbmVyKHRoaXMuY29udGFjdHMpXG5cbiAgdGhpcy5jb250YWN0cy5CZWdpbkNvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0QmVnaW4pIHtcbiAgICAgIGNvbXBvbmVudEEub25Db250YWN0QmVnaW4oZW50aXR5QiwgZW50aXR5QSlcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudEIub25Db250YWN0QmVnaW4pIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0QmVnaW4oZW50aXR5QSwgZW50aXR5QilcbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLkVuZENvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0RW5kKSB7XG4gICAgICBjb21wb25lbnRBLm9uQ29udGFjdEVuZChlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RFbmQpIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0RW5kKGVudGl0eUEsIGVudGl0eUIpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5QcmVTb2x2ZSA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50QS5vbkNvbnRhY3RQcmVTb2x2ZSkge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RQcmVTb2x2ZSkge1xuICAgICAgY29tcG9uZW50Qi5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuUG9zdFNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGlmIChjb21wb25lbnRBLm9uQ29udGFjdFBvc3RTb2x2ZSkge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RQb3N0U29sdmUoZW50aXR5QiwgZW50aXR5QSlcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudEIub25Db250YWN0UG9zdFNvbHZlKSB7XG4gICAgICBjb21wb25lbnRCLm9uQ29udGFjdFBvc3RTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWJ1Z1xuXG4gIGNvbnN0IGRlYnVnRHJhdyA9IG5ldyBCMkRlYnVnRHJhdyh0aGlzLmNvbnRleHQpXG4gIGRlYnVnRHJhdy5TZXRTcHJpdGUoY2FudmFzLmdldENvbnRleHQoJzJkJykpXG4gIGRlYnVnRHJhdy5TZXREcmF3U2NhbGUodGhpcy5zY2FsZSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGaWxsQWxwaGEoMC41KVxuICBkZWJ1Z0RyYXcuU2V0RmxhZ3MoQjJEZWJ1Z0RyYXcuZV9zaGFwZUJpdClcbiAgZGVidWdEcmF3LkFwcGVuZEZsYWdzKEIyRGVidWdEcmF3LmVfam9pbnRCaXQpXG4gIHRoaXMud29ybGQuU2V0RGVidWdEcmF3KGRlYnVnRHJhdylcbiAgdGhpcy53b3JsZC5tX2RlYnVnRHJhdy5tX3Nwcml0ZS5ncmFwaGljcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5vbkNvbnRhY3RCZWdpbiA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdEJlZ2luID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0RW5kID0gZnVuY3Rpb24gKGVudGl0eSwgY2FsbGJhY2spIHtcbiAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KVxuICBjb21wb25lbnQub25Db250YWN0RW5kID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0UHJlU29sdmUgPSBmdW5jdGlvbiAoZW50aXR5LCBjYWxsYmFjaykge1xuICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpXG4gIGNvbXBvbmVudC5vbkNvbnRhY3RQcmVTb2x2ZSA9IGNhbGxiYWNrXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLm9uQ29udGFjdFBvc3RTb2x2ZSA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdFBvc3RTb2x2ZSA9IGNhbGxiYWNrXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnNldEdyYXZpdHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMud29ybGQuU2V0R3Jhdml0eShjb25maWcpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRyYXdEZWJ1Z0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud29ybGQuRHJhd0RlYnVnRGF0YSgpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuUGh5c2ljc0NvbXBvbmVudCh0aGlzKVxuICBjb21wb25lbnQuYm9keSA9IHRoaXMuY3JlYXRlQm9keShwYXJhbXMpXG4gIGNvbXBvbmVudC5ib2R5LlNldFVzZXJEYXRhKGNvbXBvbmVudClcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLnBoeXNpY3NDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmdldEZpeHR1cmVEZWYgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IEIyRml4dHVyZURlZiA9IEJveDJELkR5bmFtaWNzLmIyRml4dHVyZURlZlxuICBjb25zdCBmaXhEZWYgPSBuZXcgQjJGaXh0dXJlRGVmKClcbiAgZml4RGVmLmRlbnNpdHkgPSBjb25maWcuZGVuc2l0eVxuICBmaXhEZWYuZnJpY3Rpb24gPSBjb25maWcuZnJpY3Rpb25cbiAgZml4RGVmLnJlc3RpdHV0aW9uID0gY29uZmlnLnJlc3RpdHV0aW9uXG4gIGZpeERlZi5pc1NlbnNvciA9IGNvbmZpZy5pc1NlbnNvclxuICByZXR1cm4gZml4RGVmXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFJlY3RhbmdsZSA9IGZ1bmN0aW9uIChlbnRpdHksIHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGRlbnNpdHk6IDEsXG4gICAgZnJpY3Rpb246IDAuNSxcbiAgICByZXN0aXR1dGlvbjogMC4zLFxuICAgIGlzU2Vuc29yOiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcbiAgY29uc3QgZml4dHVyZURlZiA9IHRoaXMuZ2V0Rml4dHVyZURlZihjb25maWcpXG5cbiAgY29uc3QgQjJQb2x5Z29uU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyUG9seWdvblNoYXBlXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJQb2x5Z29uU2hhcGUoKVxuICBmaXh0dXJlRGVmLnNoYXBlLlNldEFzQm94KFxuICAgIGNvbmZpZy53aWR0aCAqIDAuNSAvIHRoaXMuc2NhbGUsXG4gICAgY29uZmlnLmhlaWdodCAqIDAuNSAvIHRoaXMuc2NhbGVcbiAgKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeHR1cmVEZWYuc2hhcGUubV92ZXJ0aWNlczsgaSsrKSB7XG4gICAgY29uc3QgdmVydCA9IGZpeHR1cmVEZWYuc2hhcGUubV92ZXJ0aWNlc1tpXVxuICAgIHZlcnQueCArPSBjb25maWcueCAvIHRoaXMuc2NhbGUgfHwgMFxuICAgIHZlcnQueSArPSBjb25maWcueSAvIHRoaXMuc2NhbGUgfHwgMFxuICB9XG4gIGZpeHR1cmVEZWYuc2hhcGUubV9jZW50cm9pZC54ICs9IGNvbmZpZy54IC8gdGhpcy5zY2FsZSB8fCAwXG4gIGZpeHR1cmVEZWYuc2hhcGUubV9jZW50cm9pZC55ICs9IGNvbmZpZy55IC8gdGhpcy5zY2FsZSB8fCAwXG5cbiAgY29uc3QgZml4dHVyZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5DcmVhdGVGaXh0dXJlKGZpeHR1cmVEZWYpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuZml4dHVyZXMucHVzaChmaXh0dXJlKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5hZGRDaXJjbGUgPSBmdW5jdGlvbiAoZW50aXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHJhZGl1czogMjUsXG4gICAgZGVuc2l0eTogMSxcbiAgICBmcmljdGlvbjogMC41LFxuICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgaXNTZW5zb3I6IGZhbHNlXG4gIH1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuICBjb25zdCBmaXh0dXJlRGVmaW5pdGlvbiA9IHRoaXMuZ2V0Rml4dHVyZURlZihjb25maWcpXG4gIGNvbnN0IEIyQ2lyY2xlU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyQ2lyY2xlU2hhcGVcbiAgY29uc3QgZml4dHVyZURlZiA9IGZpeHR1cmVEZWZpbml0aW9uXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJDaXJjbGVTaGFwZShjb25maWcucmFkaXVzIC8gdGhpcy5zY2FsZSlcbiAgZml4dHVyZURlZi5zaGFwZS5tX3AgPSB7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zY2FsZVxuICB9XG4gIGNvbnN0IGZpeHR1cmUgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuQ3JlYXRlRml4dHVyZShmaXh0dXJlRGVmKVxuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmZpeHR1cmVzLnB1c2goZml4dHVyZSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkRWRnZSA9IGZ1bmN0aW9uIChlbnRpdHksIHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBheDogMCxcbiAgICBheTogMCxcbiAgICBieDogMCxcbiAgICBieTogMCxcbiAgICBkZW5zaXR5OiAxLFxuICAgIGZyaWN0aW9uOiAwLjUsXG4gICAgcmVzdGl0dXRpb246IDAuMyxcbiAgICBpc1NlbnNvcjogZmFsc2VcbiAgfVxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG4gIGNvbnN0IGZpeHR1cmVEZWYgPSB0aGlzLmdldEZpeHR1cmVEZWYoY29uZmlnKVxuICBjb25zdCBCMlBvbHlnb25TaGFwZSA9IEJveDJELkNvbGxpc2lvbi5TaGFwZXMuYjJQb2x5Z29uU2hhcGVcbiAgZml4dHVyZURlZi5zaGFwZSA9IG5ldyBCMlBvbHlnb25TaGFwZSgpXG4gIGNvbmZpZy5heCAvPSB0aGlzLnNjYWxlXG4gIGNvbmZpZy5heSAvPSB0aGlzLnNjYWxlXG4gIGNvbmZpZy5ieCAvPSB0aGlzLnNjYWxlXG4gIGNvbmZpZy5ieSAvPSB0aGlzLnNjYWxlXG4gIGZpeHR1cmVEZWYuc2hhcGUuU2V0QXNFZGdlKHsgeDogY29uZmlnLmF4LCB5OiBjb25maWcuYXkgfSwgeyB4OiBjb25maWcuYngsIHk6IGNvbmZpZy5ieSB9KVxuICBjb25zdCBmaXh0dXJlID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkNyZWF0ZUZpeHR1cmUoZml4dHVyZURlZilcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5wdXNoKGZpeHR1cmUpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICAgIHR5cGU6ICdkeW5hbWljJyxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgYWxsb3dTbGVlcDogdHJ1ZSxcbiAgICBhd2FrZTogdHJ1ZSxcbiAgICBidWxsZXQ6IGZhbHNlLFxuICAgIGZpeGVkUm90YXRpb246IGZhbHNlLFxuICAgIGFuZ2xlOiAwLFxuICAgIGFuZ3VsYXJEYW1waW5nOiAwLFxuICAgIGFuZ3VsYXJWZWxvY2l0eTogMCxcbiAgICBsaW5lYXJEYW1waW5nOiAwLFxuICAgIGxpbmVhclZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB1c2VyRGF0YToge31cbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcblxuICBjb25zdCBCMkJvZHlEZWYgPSBCb3gyRC5EeW5hbWljcy5iMkJvZHlEZWZcbiAgY29uc3QgQjJCb2R5ID0gQm94MkQuRHluYW1pY3MuYjJCb2R5XG5cbiAgY29uc3QgYm9keURlZiA9IG5ldyBCMkJvZHlEZWYoKVxuICBib2R5RGVmLnBvc2l0aW9uLnggPSBjb25maWcueCAvIHRoaXMuc2NhbGVcbiAgYm9keURlZi5wb3NpdGlvbi55ID0gY29uZmlnLnkgLyB0aGlzLnNjYWxlXG4gIGJvZHlEZWYuYWN0aXZlID0gY29uZmlnLmFjdGl2ZVxuICBib2R5RGVmLmFsbG93U2xlZXAgPSBjb25maWcuYWxsb3dTbGVlcFxuICBib2R5RGVmLmF3YWtlID0gY29uZmlnLmF3YWtlXG4gIGJvZHlEZWYuYnVsbGV0ID0gY29uZmlnLmJ1bGxldFxuICBib2R5RGVmLmZpeGVkUm90YXRpb24gPSBjb25maWcuZml4ZWRSb3RhdGlvblxuICBib2R5RGVmLmFuZ2xlID0gY29uZmlnLmFuZ2xlXG4gIGJvZHlEZWYuYW5ndWxhckRhbXBpbmcgPSBjb25maWcuYW5ndWxhckRhbXBpbmdcbiAgYm9keURlZi5hbmd1bGFyVmVsb2NpdHkgPSBjb25maWcuYW5ndWxhclZlbG9jaXR5XG4gIGJvZHlEZWYubGluZWFyRGFtcGluZyA9IGNvbmZpZy5saW5lYXJEYW1waW5nXG4gIGJvZHlEZWYubGluZWFyVmVsb2NpdHkgPSBjb25maWcubGluZWFyVmVsb2NpdHlcbiAgYm9keURlZi51c2VyRGF0YSA9IGNvbmZpZy51c2VyRGF0YVxuXG4gIGlmIChjb25maWcudHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfc3RhdGljQm9keVxuICB9XG5cbiAgaWYgKGNvbmZpZy50eXBlID09PSAnZHluYW1pYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfZHluYW1pY0JvZHlcbiAgfVxuXG4gIGlmIChjb25maWcudHlwZSA9PT0gJ2tpbmVtYXRpYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfa2luZW1hdGljQm9keVxuICB9XG5cbiAgY29uc3QgYm9keSA9IHRoaXMud29ybGQuQ3JlYXRlQm9keShib2R5RGVmKVxuICBib2R5LmFjdGl2ZSA9IHRydWVcblxuICByZXR1cm4gYm9keVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud29ybGQuU3RlcCgxIC8gdGhpcy5mcHMsIDgsIDMpXG4gIHRoaXMud29ybGQuQ2xlYXJGb3JjZXMoKVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW50aXR5ID0gY29tcG9uZW50LmVudGl0eVxuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKGVudGl0eSlcbiAgICAgIGVudGl0eS54ID0gcG9zaXRpb24ueFxuICAgICAgZW50aXR5LnkgPSBwb3NpdGlvbi55XG4gICAgICBlbnRpdHkuYW5nbGUgPSB0aGlzLmdldEFuZ2xlKGVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICByZXR1cm4gZW50aXR5LmNvbXBvbmVudHNbdGhpcy5waHlzaWNzQ29tcG9uZW50TmFtZV1cbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5mb3JFYWNoKChmaXh0dXJlKSA9PiB7XG4gICAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkRlc3Ryb3lGaXh0dXJlKGZpeHR1cmUpXG4gIH0pXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuc3lzdGVtLndvcmxkLkRlc3Ryb3lCb2R5KHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keSlcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5tdXN0RGVzdHJveSA9IHRydWVcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYXBwbHlGb3JjZSA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuQXBwbHlGb3JjZShjb25maWcsIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5HZXRXb3JsZENlbnRlcigpKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuU2V0UG9zaXRpb24oe1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgfSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuc2V0TGluZWFyVmVsb2NpdHkgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LlNldEF3YWtlKHRydWUpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5TZXRMaW5lYXJWZWxvY2l0eSh7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zY2FsZVxuICB9KVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuR2V0UG9zaXRpb24oKVxuICByZXR1cm4ge1xuICAgIHg6IHBvc2l0aW9uLnggKiB0aGlzLnNjYWxlLFxuICAgIHk6IHBvc2l0aW9uLnkgKiB0aGlzLnNjYWxlXG4gIH1cbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHJldHVybiB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuR2V0QW5nbGUoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzU3lzdGVtXG4iLCJjb25zdCBQaHlzaWNzQ29tcG9uZW50ID0gZnVuY3Rpb24gKHN5c3RlbSkge1xuICB0aGlzLmVudGl0eSA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuYm9keSA9IG51bGxcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5maXh0dXJlcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3NDb21wb25lbnRcbiIsImltcG9ydCBBdWRpb1N5c3RlbSBmcm9tICcuL2F1ZGlvLXN5c3RlbS9hdWRpby1zeXN0ZW0nXG5pbXBvcnQgQXVkaW9Db21wb25lbnQgZnJvbSAnLi9hdWRpby1zeXN0ZW0vYXVkaW8tY29tcG9uZW50J1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlci9sb2FkZXInXG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lL2VuZ2luZSdcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHktc3lzdGVtL2VudGl0eSdcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycy9oZWxwZXJzJ1xuaW1wb3J0IEtleSBmcm9tICcuL2tleS1zeXN0ZW0va2V5J1xuaW1wb3J0IEtleVN5c3RlbSBmcm9tICcuL2tleS1zeXN0ZW0va2V5LXN5c3RlbSdcbmltcG9ydCBMb29wU3lzdGVtIGZyb20gJy4vbG9vcC1zeXN0ZW0vbG9vcC1zeXN0ZW0nXG5pbXBvcnQgUG9pbnRlciBmcm9tICcuL3BvaW50ZXItc3lzdGVtL3BvaW50ZXInXG5pbXBvcnQgUG9pbnRlclN5c3RlbSBmcm9tICcuL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtJ1xuaW1wb3J0IFNwcml0ZUNvbXBvbmVudCBmcm9tICcuL3JlbmRlci1zeXN0ZW0vc3ByaXRlLWNvbXBvbmVudCdcbmltcG9ydCBSZW5kZXJTeXN0ZW0gZnJvbSAnLi9yZW5kZXItc3lzdGVtL3JlbmRlci1zeXN0ZW0nXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZS1zeXN0ZW0vc2NlbmUnXG5pbXBvcnQgU2NlbmVTeXN0ZW0gZnJvbSAnLi9zY2VuZS1zeXN0ZW0vc2NlbmUtc3lzdGVtJ1xuaW1wb3J0IEJlaGF2aW91ckNvbXBvbmVudCBmcm9tICcuL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLWNvbXBvbmVudCdcbmltcG9ydCBCZWhhdmlvdXJTeXN0ZW0gZnJvbSAnLi9iZWhhdmlvdXItc3lzdGVtL2JlaGF2aW91ci1zeXN0ZW0nXG5pbXBvcnQgU3RhdGVDb21wb25lbnQgZnJvbSAnLi9zdGF0ZS1zeXN0ZW0vc3RhdGUtY29tcG9uZW50J1xuaW1wb3J0IFN0YXRlU3lzdGVtIGZyb20gJy4vc3RhdGUtc3lzdGVtL3N0YXRlLXN5c3RlbSdcbmltcG9ydCBFbnRpdHlTeXN0ZW0gZnJvbSAnLi9lbnRpdHktc3lzdGVtL2VudGl0eS1zeXN0ZW0nXG5pbXBvcnQgUGh5c2ljc1N5c3RlbSBmcm9tICcuL3BoeXNpY3Mtc3lzdGVtL3BoeXNpY3Mtc3lzdGVtJ1xuaW1wb3J0IFBoeXNpY3NDb21wb25lbnQgZnJvbSAnLi9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudCdcblxuY29uc3QgSGFybW9ueSA9IHtcbiAgQXVkaW9TeXN0ZW06IEF1ZGlvU3lzdGVtLFxuICBBdWRpb0NvbXBvbmVudDogQXVkaW9Db21wb25lbnQsXG4gIExvYWRlcjogTG9hZGVyLFxuICBFbmdpbmU6IEVuZ2luZSxcbiAgRW50aXR5OiBFbnRpdHksXG4gIEVudGl0eVN5c3RlbTogRW50aXR5U3lzdGVtLFxuICBIZWxwZXJzOiBIZWxwZXJzLFxuICBLZXk6IEtleSxcbiAgS2V5U3lzdGVtOiBLZXlTeXN0ZW0sXG4gIExvb3BTeXN0ZW06IExvb3BTeXN0ZW0sXG4gIFBoeXNpY3NDb21wb25lbnQ6IFBoeXNpY3NDb21wb25lbnQsXG4gIFBoeXNpY3NTeXN0ZW06IFBoeXNpY3NTeXN0ZW0sXG4gIFBvaW50ZXI6IFBvaW50ZXIsXG4gIFBvaW50ZXJTeXN0ZW06IFBvaW50ZXJTeXN0ZW0sXG4gIFNwcml0ZUNvbXBvbmVudDogU3ByaXRlQ29tcG9uZW50LFxuICBSZW5kZXJTeXN0ZW06IFJlbmRlclN5c3RlbSxcbiAgU2NlbmU6IFNjZW5lLFxuICBTY2VuZVN5c3RlbTogU2NlbmVTeXN0ZW0sXG4gIEJlaGF2aW91ckNvbXBvbmVudDogQmVoYXZpb3VyQ29tcG9uZW50LFxuICBCZWhhdmlvdXJTeXN0ZW06IEJlaGF2aW91clN5c3RlbSxcbiAgU3RhdGVDb21wb25lbnQ6IFN0YXRlQ29tcG9uZW50LFxuICBTdGF0ZVN5c3RlbTogU3RhdGVTeXN0ZW1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFybW9ueVxuIl0sInNvdXJjZVJvb3QiOiIifQ==