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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImF1ZGlvQ29tcG9uZW50TmFtZSIsInByb3RvdHlwZSIsInBsYXkiLCJlbnRpdHkiLCJuYW1lIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsImF1ZGlvIiwiYnVmZmVyIiwidmFsdWUiLCJ2b2x1bWUiLCJzdGFydCIsInN0b3AiLCJhZGRBdWRpb0NvbXBvbmVudCIsImNvbmZpZyIsImNvbXBvbmVudCIsIkhhcm1vbnkiLCJBdWRpb0NvbXBvbmVudCIsInB1c2giLCJ1cGRhdGUiLCJzdGF0ZSIsInJlc3VtZSIsImkiLCJsZW5ndGgiLCJtdXN0RGVzdHJveSIsInNwbGljZSIsImRlc3Ryb3lDb21wb25lbnQiLCJwYXJhbXMiLCJzeXN0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJMb2FkZXIiLCJpbWFnZXNDYWNoZSIsImF1ZGlvQ2FjaGUiLCJsb2FkaW5nIiwiY29tcGxldGUiLCJlcnJvcnMiLCJzdWNjZXNzIiwicXVldWVkIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25TdWNjZXNzIiwib25lcnJvciIsInJlYXNvbiIsIm9uRXJyb3IiLCJzcmMiLCJ1cmwiLCJsb2FkQXVkaW8iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXNwb25zZSIsInNlbmQiLCJvblN0YXJ0Iiwib25Qcm9ncmVzcyIsIm9uQ29tcGxldGUiLCJwcm9ncmVzcyIsIk1hdGgiLCJmbG9vciIsImlzTmFOIiwiRW5naW5lIiwiY2FudmFzIiwibG9hZGVyIiwibG9vcCIsIkxvb3BTeXN0ZW0iLCJzY2VuZSIsIlNjZW5lU3lzdGVtIiwicmVuZGVyIiwiUmVuZGVyU3lzdGVtIiwiZW50aXRpZXMiLCJFbnRpdHlTeXN0ZW0iLCJrZXlzIiwiS2V5U3lzdGVtIiwicGh5c2ljcyIsIlBoeXNpY3NTeXN0ZW0iLCJwb2ludGVycyIsIlBvaW50ZXJTeXN0ZW0iLCJiZWhhdmlvdXJzIiwiQmVoYXZpb3VyU3lzdGVtIiwiU3RhdGVTeXN0ZW0iLCJoZWxwZXJzIiwiSGVscGVycyIsIm9uU3RlcCIsImN1cnJlbnQiLCJtdXN0UHJlbG9hZCIsInByZWxvYWQiLCJyZXF1ZXN0Q3JlYXRlIiwibXVzdENyZWF0ZSIsInJlcXVlc3RVcGRhdGUiLCJjcmVhdGUiLCJtdXN0VXBkYXRlIiwicmVxdWVzdERyYXciLCJtdXN0RHJhdyIsImRyYXciLCJkcmF3RGVidWdEYXRhIiwibXVzdFN3aXRjaCIsImRlc3Ryb3lBbGwiLCJkZXN0cm95IiwicmVxdWVzdGVkIiwicmVxdWVzdFByZWxvYWQiLCJydW4iLCJFbnRpdHkiLCJ0YWdzIiwieCIsInkiLCJhbmdsZSIsInNjYWxlIiwiY3JlYXRlR3JpZCIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiY2VpbCIsInJhbmRvbSIsImdldFJhbmRvbUl0ZW1zIiwiYXJyYXkiLCJxdWFudGl0eSIsInJhbmRvbUl0ZW1zIiwicmFuZG9tSW5kZXgiLCJzaHVmZmxlQXJyYXkiLCJqIiwiS2V5Iiwia2V5IiwiZW5kIiwiaG9sZCIsImhvbGRUaW1lIiwic3RhcnRGcmFtZSIsImVuZEZyYW1lIiwiZW5hYmxlZCIsImRlbHRhIiwibm93IiwidGhlbiIsImZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImJpbmQiLCJoYW5kbGVLZXlVcCIsImV2ZW50IiwiZ2V0T3JTZXQiLCJnZXQiLCJwZXJmb3JtYW5jZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFjY3VtdWxhdG9yIiwibGFzdFRpbWUiLCJsYXN0U3RlcCIsImZwcyIsInBhdXNlZCIsInRpbWVzdGVwIiwicGF1c2UiLCJ0aW1lc3RhbXAiLCJzdGVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUG9pbnRlciIsImFjdGl2ZSIsImlkIiwidHlwZSIsInN0YXJ0WCIsInN0YXJ0WSIsImVuYWJsZVBvaW50ZXJzIiwicG9pbnRlciIsInN0eWxlIiwidG91Y2hBY3Rpb24iLCJ1c2VyU2VsZWN0IiwiaGFuZGxlUG9pbnRlckRvd24iLCJoYW5kbGVQb2ludGVyTW92ZSIsImhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCIsImhhbmRsZUNvbnRleHRNZW51IiwiZ2V0UG9pbnRlckJ5SUQiLCJvdXRwdXQiLCJnZXRJbmFjdGl2ZVBvaW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwic3RvcFByb3BhZ2F0aW9uIiwiU3ByaXRlQ29tcG9uZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic291cmNlWSIsInNvdXJjZVdpZHRoIiwic291cmNlSGVpZ2h0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJ2aXNpYmxlIiwiZ2V0Q29udGV4dCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNwcml0ZUNvbXBvbmVudE5hbWUiLCJjbGVhciIsImNsZWFyUmVjdCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiYWRkU3ByaXRlQ29tcG9uZW50IiwidW5zaGlmdCIsInRleHQiLCJmaWxsVGV4dCIsImNpcmNsZSIsImJlZ2luUGF0aCIsImFyYyIsInJhZGl1cyIsIlBJIiwic3Ryb2tlIiwibGluZSIsIm1vdmVUbyIsImF4IiwiYXkiLCJsaW5lVG8iLCJieCIsImJ5IiwicmVjdCIsInNwcml0ZSIsIlNjZW5lIiwibWV0aG9kcyIsImVuZ2luZSIsInJlcXVlc3RTd2l0Y2giLCJCZWhhdmlvdXJDb21wb25lbnQiLCJtdXN0U3RhcnQiLCJvblVwZGF0ZSIsImJlaGF2aW91ckNvbXBvbmVudE5hbWUiLCJhZGRCZWhhdmlvdXJDb21wb25lbnQiLCJTdGF0ZUNvbXBvbmVudCIsInN0YXRlcyIsImNvbXBvbmVudE5hbWUiLCJzdGF0ZUNvbXBvbmVudE5hbWUiLCJhZGRTdGF0ZUNvbXBvbmVudCIsImV4aXQiLCJlbnRlciIsImFkZCIsImhhc1RhZyIsInRhZyIsImluY2x1ZGVzIiwiQjJXb3JsZCIsIkJveDJEIiwiRHluYW1pY3MiLCJiMldvcmxkIiwiQjJWZWMyIiwiQ29tbW9uIiwiYjJWZWMyIiwiQjJEZWJ1Z0RyYXciLCJiMkRlYnVnRHJhdyIsIkIyQ29udGFjdExpc3RlbmVyIiwiYjJDb250YWN0TGlzdGVuZXIiLCJ3b3JsZCIsImNvbnRhY3RzIiwicGh5c2ljc0NvbXBvbmVudE5hbWUiLCJTZXRDb250YWN0TGlzdGVuZXIiLCJCZWdpbkNvbnRhY3QiLCJjb250YWN0IiwiY29tcG9uZW50QSIsIkdldEZpeHR1cmVBIiwiR2V0Qm9keSIsIkdldFVzZXJEYXRhIiwiY29tcG9uZW50QiIsIkdldEZpeHR1cmVCIiwiZW50aXR5QSIsImVudGl0eUIiLCJvbkNvbnRhY3RCZWdpbiIsIkVuZENvbnRhY3QiLCJvbkNvbnRhY3RFbmQiLCJQcmVTb2x2ZSIsIm9uQ29udGFjdFByZVNvbHZlIiwiUG9zdFNvbHZlIiwib25Db250YWN0UG9zdFNvbHZlIiwiZGVidWdEcmF3IiwiU2V0U3ByaXRlIiwiU2V0RHJhd1NjYWxlIiwiU2V0RmlsbEFscGhhIiwiU2V0RmxhZ3MiLCJlX3NoYXBlQml0IiwiQXBwZW5kRmxhZ3MiLCJlX2pvaW50Qml0IiwiU2V0RGVidWdEcmF3IiwibV9kZWJ1Z0RyYXciLCJtX3Nwcml0ZSIsImdyYXBoaWNzIiwiY2FsbGJhY2siLCJnZXRDb21wb25lbnQiLCJzZXRHcmF2aXR5IiwiU2V0R3Jhdml0eSIsIkRyYXdEZWJ1Z0RhdGEiLCJhZGRQaHlzaWNzQ29tcG9uZW50IiwiUGh5c2ljc0NvbXBvbmVudCIsImJvZHkiLCJjcmVhdGVCb2R5IiwiU2V0VXNlckRhdGEiLCJnZXRGaXh0dXJlRGVmIiwiQjJGaXh0dXJlRGVmIiwiYjJGaXh0dXJlRGVmIiwiZml4RGVmIiwiZGVuc2l0eSIsImZyaWN0aW9uIiwicmVzdGl0dXRpb24iLCJpc1NlbnNvciIsImFkZENpcmNsZSIsImRlZmF1bHRzIiwiZml4dHVyZURlZmluaXRpb24iLCJCMkNpcmNsZVNoYXBlIiwiQ29sbGlzaW9uIiwiU2hhcGVzIiwiYjJDaXJjbGVTaGFwZSIsImZpeHR1cmVEZWYiLCJzaGFwZSIsIm1fcCIsImZpeHR1cmUiLCJDcmVhdGVGaXh0dXJlIiwiZml4dHVyZXMiLCJhbGxvd1NsZWVwIiwiYXdha2UiLCJidWxsZXQiLCJmaXhlZFJvdGF0aW9uIiwiYW5ndWxhckRhbXBpbmciLCJhbmd1bGFyVmVsb2NpdHkiLCJsaW5lYXJEYW1waW5nIiwibGluZWFyVmVsb2NpdHkiLCJ1c2VyRGF0YSIsIkIyQm9keURlZiIsImIyQm9keURlZiIsIkIyQm9keSIsImIyQm9keSIsImJvZHlEZWYiLCJwb3NpdGlvbiIsImIyX3N0YXRpY0JvZHkiLCJiMl9keW5hbWljQm9keSIsImIyX2tpbmVtYXRpY0JvZHkiLCJDcmVhdGVCb2R5IiwiU3RlcCIsIkNsZWFyRm9yY2VzIiwiZ2V0UG9zaXRpb24iLCJnZXRBbmdsZSIsImZvckVhY2giLCJEZXN0cm95Rml4dHVyZSIsIkRlc3Ryb3lCb2R5IiwiYXBwbHlGb3JjZSIsIkFwcGx5Rm9yY2UiLCJHZXRXb3JsZENlbnRlciIsInNldFBvc2l0aW9uIiwiU2V0UG9zaXRpb24iLCJzZXRMaW5lYXJWZWxvY2l0eSIsIlNldEF3YWtlIiwiU2V0TGluZWFyVmVsb2NpdHkiLCJHZXRQb3NpdGlvbiIsIkdldEFuZ2xlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFxQjs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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LEtBakJPO0FBa0JkOUosYUFBVyxFQUFFQSxZQWxCQztBQW1CZGtLLG9CQUFrQixFQUFFQSxtQkFuQk47QUFvQmR0SixpQkFBZSxFQUFFQSxnQkFwQkg7QUFxQmQySixnQkFBYyxFQUFFQSxlQXJCRjtBQXNCZDFKLGFBQVcsRUFBRUEsWUFBV0E7QUF0QlYsQ0FBaEI7QUF5QmV0RSw0RkFBZixFIiwiZmlsZSI6Imhhcm1vbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIYXJtb255XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhhcm1vbnlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cbmNvbnN0IEF1ZGlvU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpXG4gIHRoaXMubWFzdGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5tYXN0ZXIuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pXG4gIHRoaXMuYXVkaW9Db21wb25lbnROYW1lID0gJ2F1ZGlvJ1xufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uIChlbnRpdHksIG5hbWUpIHtcbiAgY29uc3Qgc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gIGNvbnN0IGdhaW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZSA9IHNvdXJjZVxuICBzb3VyY2UuYnVmZmVyID0gdGhpcy5jYWNoZVtuYW1lXVxuICBzb3VyY2UuY29ubmVjdChnYWluKVxuICBnYWluLmNvbm5lY3QodGhpcy5tYXN0ZXIpXG4gIGdhaW4uZ2Fpbi52YWx1ZSA9IGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnZvbHVtZVxuICBzb3VyY2Uuc3RhcnQoKVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgaWYgKGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZSkge1xuICAgIGVudGl0eS5jb21wb25lbnRzLmF1ZGlvLnNvdXJjZS5zdG9wKClcbiAgfVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuYWRkQXVkaW9Db21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQXVkaW9Db21wb25lbnQoY29uZmlnLCB0aGlzKVxuICBjb21wb25lbnQuZW50aXR5ID0gZW50aXR5XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMuYXVkaW9Db21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgdGhpcy5jb250ZXh0LnJlc3VtZSgpXG4gIH1cbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfVxuICB9XG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICB0aGlzLnN0b3AoZW50aXR5KVxuICBlbnRpdHkuY29tcG9uZW50cy5hdWRpby5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9TeXN0ZW1cbiIsImNvbnN0IEF1ZGlvQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcywgc3lzdGVtKSB7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZvbHVtZTogMVxuICB9LCBwYXJhbXMpXG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuc291cmNlID0gbnVsbFxuICB0aGlzLnZvbHVtZSA9IGNvbmZpZy52b2x1bWVcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSW1hZ2UgKi9cblxuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmltYWdlc0NhY2hlID0ge31cbiAgdGhpcy5hdWRpb0NhY2hlID0ge31cbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICB0aGlzLmVycm9ycyA9IDBcbiAgdGhpcy5zdWNjZXNzID0gMFxuICB0aGlzLnF1ZXVlZCA9IDBcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMucXVldWVkKytcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgIHRoaXMuaW1hZ2VzQ2FjaGVbY29uZmlnLm5hbWVdID0gaW1hZ2VcbiAgICAgIHRoaXMub25TdWNjZXNzKGNvbmZpZylcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycysrXG4gICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5Mb2FkZXIucHJvdG90eXBlLmxvYWRBdWRpbyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5xdWV1ZWQrK1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5zdWNjZXNzKytcbiAgICAgICAgdGhpcy5hdWRpb0NhY2hlW2NvbmZpZy5uYW1lXSA9IGJ1ZmZlclxuICAgICAgICB0aGlzLm9uU3VjY2Vzcyhjb25maWcpXG4gICAgICAgIHJlc29sdmUoYnVmZmVyKVxuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLmVycm9ycysrXG4gICAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICB9KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0pXG59XG5cbkxvYWRlci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25TdWNjZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vblByb2dyZXNzID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnF1ZXVlZCA+IDApIHtcbiAgICBpZiAoIXRoaXMuc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSB0cnVlXG4gICAgICB0aGlzLm9uU3RhcnQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5xdWV1ZWQgPT09IHRoaXMuc3VjY2VzcyArIHRoaXMuZXJyb3JzKSB7XG4gICAgICB0aGlzLnF1ZXVlZCA9IDBcbiAgICAgIHRoaXMuc3VjY2VzcyA9IDBcbiAgICAgIHRoaXMuZXJyb3JzID0gMFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIH1cbiAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKCh0aGlzLnN1Y2Nlc3MgKyB0aGlzLmVycm9ycykgLyB0aGlzLnF1ZXVlZCAqIDEwMClcbiAgICBpZiAoaXNOYU4ocHJvZ3Jlc3MpKSB7XG4gICAgICBwcm9ncmVzcyA9IDEwMFxuICAgIH1cbiAgICB0aGlzLm9uUHJvZ3Jlc3MocHJvZ3Jlc3MpXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW5naW5lID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmxvYWRlciA9IG5ldyBIYXJtb255LkxvYWRlcigpXG4gIHRoaXMubG9vcCA9IG5ldyBIYXJtb255Lkxvb3BTeXN0ZW0oKVxuICB0aGlzLnNjZW5lID0gbmV3IEhhcm1vbnkuU2NlbmVTeXN0ZW0oKVxuICB0aGlzLnJlbmRlciA9IG5ldyBIYXJtb255LlJlbmRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuYXVkaW8gPSBuZXcgSGFybW9ueS5BdWRpb1N5c3RlbSgpXG4gIHRoaXMuZW50aXRpZXMgPSBuZXcgSGFybW9ueS5FbnRpdHlTeXN0ZW0oKVxuICB0aGlzLmtleXMgPSBuZXcgSGFybW9ueS5LZXlTeXN0ZW0oKVxuICB0aGlzLnBoeXNpY3MgPSBuZXcgSGFybW9ueS5QaHlzaWNzU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5wb2ludGVycyA9IG5ldyBIYXJtb255LlBvaW50ZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLmJlaGF2aW91cnMgPSBuZXcgSGFybW9ueS5CZWhhdmlvdXJTeXN0ZW0odGhpcylcbiAgdGhpcy5zdGF0ZSA9IG5ldyBIYXJtb255LlN0YXRlU3lzdGVtKClcbiAgdGhpcy5oZWxwZXJzID0gbmV3IEhhcm1vbnkuSGVscGVycygpXG5cbiAgdGhpcy5sb29wLm9uU3RlcCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy5zY2VuZS5jdXJyZW50KSB7XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0UHJlbG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVyLmxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQucHJlbG9hZCh0aGlzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGVyLnVwZGF0ZSgpXG4gICAgICAgIGlmICh0aGlzLmxvYWRlci5jb21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyLmNhY2hlID0gdGhpcy5sb2FkZXIuaW1hZ2VzQ2FjaGVcbiAgICAgICAgICB0aGlzLmF1ZGlvLmNhY2hlID0gdGhpcy5sb2FkZXIuYXVkaW9DYWNoZVxuICAgICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdENyZWF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RDcmVhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmNyZWF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3REcmF3KClcbiAgICAgICAgdGhpcy5rZXlzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMucG9pbnRlcnMudXBkYXRlKClcbiAgICAgICAgdGhpcy5hdWRpby51cGRhdGUoKVxuICAgICAgICB0aGlzLnBoeXNpY3MudXBkYXRlKClcbiAgICAgICAgdGhpcy5lbnRpdGllcy51cGRhdGUoKVxuICAgICAgICB0aGlzLmJlaGF2aW91cnMudXBkYXRlKClcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnVwZGF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdERyYXcpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhdygpXG4gICAgICAgIHRoaXMucGh5c2ljcy5kcmF3RGVidWdEYXRhKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmRyYXcodGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NlbmUubXVzdFN3aXRjaCkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZXN0cm95QWxsKClcbiAgICAgIHRoaXMucG9pbnRlcnMuZGVzdHJveSgpXG4gICAgICB0aGlzLmtleXMuZGVzdHJveSgpXG4gICAgICB0aGlzLnNjZW5lLmN1cnJlbnQgPSB0aGlzLnNjZW5lLnJlcXVlc3RlZFxuICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0UHJlbG9hZCgpXG4gICAgfVxuICB9XG4gIHRoaXMubG9vcC5ydW4oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmVcbiIsImNvbnN0IEVudGl0eSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdGFnczogW10sXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGFuZ2xlOiAwLFxuICAgIHNjYWxlOiAxXG4gIH0sIHBhcmFtcylcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gIHRoaXMudGFncyA9IGNvbmZpZy50YWdzXG4gIHRoaXMueCA9IGNvbmZpZy54XG4gIHRoaXMueSA9IGNvbmZpZy55XG4gIHRoaXMuYW5nbGUgPSBjb25maWcuYW5nbGVcbiAgdGhpcy5zY2FsZSA9IGNvbmZpZy5zY2FsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlcbiIsImNvbnN0IEhlbHBlcnMgPSBmdW5jdGlvbiAoKSB7fVxuXG5IZWxwZXJzLnByb3RvdHlwZS5jcmVhdGVHcmlkID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgZ3JpZCA9IG5ldyBBcnJheShjb2xzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHJvd3MpXG4gIH1cbiAgcmV0dXJuIGdyaWRcbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5nZXRSYW5kb21JdGVtcyA9IGZ1bmN0aW9uIChhcnJheSwgcXVhbnRpdHkpIHtcbiAgY29uc3QgcmFuZG9tSXRlbXMgPSBbXVxuICBmb3IgKGxldCBpID0gcXVhbnRpdHk7IGktLTspIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIGFycmF5Lmxlbmd0aCAtIDEpXG4gICAgcmFuZG9tSXRlbXMucHVzaChhcnJheVtyYW5kb21JbmRleF0pXG4gICAgYXJyYXkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVxuICB9XG4gIHJldHVybiByYW5kb21JdGVtc1xufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5zaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSlcbiAgICBjb25zdCB4ID0gYXJyYXlbaV1cbiAgICBhcnJheVtpXSA9IGFycmF5W2pdXG4gICAgYXJyYXlbal0gPSB4XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnNcbiIsImNvbnN0IEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMuZW5kID0gZmFsc2VcbiAgdGhpcy5ob2xkID0gZmFsc2VcbiAgdGhpcy5ob2xkVGltZSA9IDBcbiAgdGhpcy5zdGFydEZyYW1lID0gMFxuICB0aGlzLmVuZEZyYW1lID0gMFxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEtleVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSB0cnVlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbZXZlbnQua2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2V2ZW50LmtleV0uaG9sZCA9IGZhbHNlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5nZXRPclNldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gbmV3IEhhcm1vbnkuS2V5KGtleSlcbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZVtrZXldXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5nZXRPclNldChrZXkpXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgdGhpcy5mcmFtZSsrXG4gICAgdGhpcy5ub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLmRlbHRhID0gdGhpcy5ub3cgLSB0aGlzLnRoZW5cbiAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKGtleS5ob2xkKSB7XG4gICAgICAgIGtleS5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgIGtleS5lbmRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5LmhvbGRUaW1lID0gMFxuICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuZW5kRnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBrZXkuc3RhcnQgPSAoa2V5LnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICBrZXkuZW5kID0gKGtleS5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICB9XG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5U3lzdGVtXG4iLCJjb25zdCBMb29wU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjY3VtdWxhdG9yID0gMFxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLmxhc3RUaW1lID0gMFxuICB0aGlzLmxhc3RTdGVwID0gMFxuICB0aGlzLmZwcyA9IDYwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5jb250aW51ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSB0cnVlXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgdGltZXN0YW1wID0gdGltZXN0YW1wIHx8IDBcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xuICB0aGlzLmFjY3VtdWxhdG9yICs9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWVcbiAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcFxuICB3aGlsZSAoIXRoaXMucGF1c2VkICYmIHRoaXMuYWNjdW11bGF0b3IgPj0gdGhpcy50aW1lc3RlcCkge1xuICAgIHRoaXMuc3RlcCgpXG4gICAgdGhpcy5kZWx0YSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFN0ZXBcbiAgICB0aGlzLmxhc3RTdGVwID0gdGltZXN0YW1wXG4gICAgdGhpcy5hY2N1bXVsYXRvciAtPSB0aGlzLnRpbWVzdGVwXG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bi5iaW5kKHRoaXMpKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZyYW1lKytcbiAgdGhpcy5vblN0ZXAoKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5vblN0ZXAgPSBmdW5jdGlvbiAoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBMb29wU3lzdGVtXG4iLCJjb25zdCBQb2ludGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbiAgdGhpcy5pZCA9IDBcbiAgdGhpcy50eXBlID0gbnVsbFxuICB0aGlzLnN0YXJ0WCA9IDBcbiAgdGhpcy5zdGFydFkgPSAwXG4gIHRoaXMueCA9IDBcbiAgdGhpcy55ID0gMFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyXG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBQb2ludGVyU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmVuYWJsZWQgPSB0cnVlXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLm5vdyA9IDBcbiAgdGhpcy50aGVuID0gMFxuICB0aGlzLmZyYW1lID0gMFxuICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICB0aGlzLmVuYWJsZVBvaW50ZXJzKClcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0T3JTZXQgPSBmdW5jdGlvbiAocG9pbnRlcikge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbcG9pbnRlcl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtwb2ludGVyXSA9IG5ldyBIYXJtb255LlBvaW50ZXIocG9pbnRlcilcbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZVtwb2ludGVyXVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocG9pbnRlcikge1xuICByZXR1cm4gdGhpcy5nZXRPclNldChwb2ludGVyKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5lbmFibGVQb2ludGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYW52YXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJyAvLyBuZWVkZWQgZm9yIG1vYmlsZVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMuaGFuZGxlQ29udGV4dE1lbnUuYmluZCh0aGlzKSwgZmFsc2UpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldFBvaW50ZXJCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gIGxldCBvdXRwdXQgPSBmYWxzZVxuICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgY29uc3QgcG9pbnRlciA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChwb2ludGVyLmlkID09PSBpZCkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0SW5hY3RpdmVQb2ludGVyID0gZnVuY3Rpb24gKCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgIG91dHB1dCA9IHBvaW50ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuYWN0aXZlID0gdHJ1ZVxuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnR5cGUgPSBldmVudC5wb2ludGVyVHlwZSAvLyAnbW91c2UnLCAncGVuJywgJ3RvdWNoJ1xuICAgIHBvaW50ZXIuaG9sZCA9IHRydWVcbiAgICBwb2ludGVyLnN0YXJ0WCA9IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdFxuICAgIHBvaW50ZXIuc3RhcnRZID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcG9pbnRlciA9IHRoaXMuZ2V0UG9pbnRlckJ5SUQoZXZlbnQucG9pbnRlcklkKSB8fCB0aGlzLmdldEluYWN0aXZlUG9pbnRlcigpXG4gIGlmIChwb2ludGVyKSB7XG4gICAgcG9pbnRlci5pZCA9IGV2ZW50LnBvaW50ZXJJZFxuICAgIHBvaW50ZXIueCA9IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdFxuICAgIHBvaW50ZXIueSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcG9pbnRlciA9IHRoaXMuZ2V0UG9pbnRlckJ5SUQoZXZlbnQucG9pbnRlcklkKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuYWN0aXZlID0gZmFsc2VcbiAgICBwb2ludGVyLmhvbGQgPSBmYWxzZVxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgcmV0dXJuIGZhbHNlXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgIHRoaXMuZnJhbWUrK1xuICAgIHRoaXMubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuXG4gICAgdGhpcy50aGVuID0gdGhpcy5ub3dcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICAgIGlmIChwb2ludGVyLmhvbGQpIHtcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lICs9IHRoaXMuZGVsdGFcbiAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lID0gMFxuICAgICAgICAgIHBvaW50ZXIuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKHBvaW50ZXIuZW5kRnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb2ludGVyLnN0YXJ0ID0gKHBvaW50ZXIuc3RhcnRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICAgICAgcG9pbnRlci5lbmQgPSAocG9pbnRlci5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJTeXN0ZW1cbiIsImNvbnN0IFNwcml0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICBpbWFnZTogbnVsbCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBzb3VyY2VYOiAwLFxuICAgIHNvdXJjZVk6IDAsXG4gICAgc291cmNlV2lkdGg6IDAsXG4gICAgc291cmNlSGVpZ2h0OiAwLFxuICAgIGFuY2hvclg6IDAuNSxcbiAgICBhbmNob3JZOiAwLjUsXG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9LCBwYXJhbXMpXG5cbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmltYWdlID0gY29uZmlnLmltYWdlXG4gIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0XG4gIHRoaXMuc291cmNlWCA9IGNvbmZpZy5zb3VyY2VYXG4gIHRoaXMuc291cmNlWSA9IGNvbmZpZy5zb3VyY2VZXG4gIHRoaXMuc291cmNlV2lkdGggPSBjb25maWcuc291cmNlV2lkdGhcbiAgdGhpcy5zb3VyY2VIZWlnaHQgPSBjb25maWcuc291cmNlSGVpZ2h0XG4gIHRoaXMuYW5jaG9yWCA9IGNvbmZpZy5hbmNob3JYXG4gIHRoaXMuYW5jaG9yWSA9IGNvbmZpZy5hbmNob3JZXG4gIHRoaXMudmlzaWJsZSA9IGNvbmZpZy52aXNpYmxlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwcml0ZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgSW1hZ2UgKi9cblxuY29uc3QgUmVuZGVyU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLnNwcml0ZUNvbXBvbmVudE5hbWUgPSAnc3ByaXRlJ1xufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWNoZVtjb25maWcubmFtZV0gPSBpbWFnZVxuICAgICAgcmVzb2x2ZShpbWFnZSlcbiAgICB9XG4gICAgaW1hZ2Uub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIGltYWdlLnNyYyA9IGNvbmZpZy51cmxcbiAgfSlcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpbWFnZSkge1xuICByZXR1cm4gdGhpcy5jYWNoZVtpbWFnZV1cbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFyKClcbiAgLy8gdGhpcy5jb250ZXh0LnNhdmUoKVxuXG4gIC8vIHRyYW5zbGF0ZSB0byBjYW1lcmEgY2VudGVyXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgKHRoaXMuY2FtZXJhLndpZHRoIC8gMiksXG4gIC8vICAgKHRoaXMuY2FtZXJhLmhlaWdodCAvIDIpXG4gIC8vIClcblxuICAvLyByb3RhdGVcbiAgLy8gdGhpcy5jb250ZXh0LnJvdGF0ZSh0aGlzLmNhbWVyYS5hbmdsZSlcblxuICAvLyBzY2FsZVxuICAvLyB0aGlzLmNvbnRleHQuc2NhbGUodGhpcy5jYW1lcmEuem9vbSwgdGhpcy5jYW1lcmEuem9vbSlcblxuICAvLyB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmVkJ1xuICAvLyB0aGlzLmNhbnZhcy5jaXJjbGUoMCwgMCwgMTApXG5cbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAtKHRoaXMuY2FtZXJhLndpZHRoIC8gMiksXG4gIC8vICAgLSh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKVxuICAvLyApXG5cbiAgLy8gdHJhbnNsYXRlXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgLXRoaXMuY2FtZXJhLnBvc2l0aW9uLngsXG4gIC8vICAgLXRoaXMuY2FtZXJhLnBvc2l0aW9uLnlcbiAgLy8gKVxuXG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgLy8gY29uc29sZS5sb2coY29tcG9uZW50LmVudGl0eSlcblxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbXBvbmVudC52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKClcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnggKyBjb21wb25lbnQud2lkdGggKiAwLjUgKiBjb21wb25lbnQuZW50aXR5LnNjYWxlIC0gY29tcG9uZW50LndpZHRoICogY29tcG9uZW50LmFuY2hvclggKiBjb21wb25lbnQuZW50aXR5LnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkueSArIGNvbXBvbmVudC5oZWlnaHQgKiAwLjUgKiBjb21wb25lbnQuZW50aXR5LnNjYWxlIC0gY29tcG9uZW50LmhlaWdodCAqIGNvbXBvbmVudC5hbmNob3JZICogY29tcG9uZW50LmVudGl0eS5zY2FsZVxuICAgICAgICApXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoY29tcG9uZW50LmVudGl0eS5hbmdsZSlcbiAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUsXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS5zY2FsZVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5zb3VyY2VXaWR0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VXaWR0aCA9IGNvbXBvbmVudC5pbWFnZS53aWR0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5zb3VyY2VIZWlnaHQgPT09IDApIHtcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlSGVpZ2h0ID0gY29tcG9uZW50LmltYWdlLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBjb21wb25lbnQuaW1hZ2UsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVgsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVksXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVdpZHRoLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VIZWlnaHQsXG4gICAgICAgICAgY29tcG9uZW50LndpZHRoICogLTAuNSwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQuaGVpZ2h0ICogLTAuNSwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQud2lkdGgsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LmhlaWdodCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICApXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuYWRkU3ByaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNwcml0ZUNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5zcHJpdGVDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMudW5zaGlmdChjb21wb25lbnQpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGNvbmZpZy50ZXh0LCBjb25maWcueCwgY29uZmlnLnkpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0LmFyYyhjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5saW5lID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0Lm1vdmVUbyhjb25maWcuYXgsIGNvbmZpZy5heSlcbiAgdGhpcy5jb250ZXh0LmxpbmVUbyhjb25maWcuYngsIGNvbmZpZy5ieSlcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LnJlY3QoY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIGVudGl0eS5jb21wb25lbnRzLnNwcml0ZS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyU3lzdGVtXG4iLCJjb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcHJlbG9hZDogKCkgPT4ge30sXG4gICAgY3JlYXRlOiAoKSA9PiB7fSxcbiAgICB1cGRhdGU6ICgpID0+IHt9LFxuICAgIGRyYXc6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuU2NlbmUucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMucHJlbG9hZChlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuY3JlYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy51cGRhdGUoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5kcmF3KGVuZ2luZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVcbiIsImNvbnN0IFNjZW5lU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIHRoaXMucmVxdWVzdGVkID0gbnVsbFxuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzY2VuZVxuICB0aGlzLnJlcXVlc3RTd2l0Y2goKVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFByZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSB0cnVlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdENyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0VXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gdHJ1ZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3REcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IHRydWVcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RTd2l0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVN5c3RlbVxuIiwiY29uc3QgQmVoYXZpb3VyQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcywgc3lzdGVtKSB7XG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTdGFydCA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgb25TdGFydDogKCkgPT4ge30sXG4gICAgb25VcGRhdGU6ICgpID0+IHt9XG4gIH0sIHBhcmFtcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3VyQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBCZWhhdmlvdXJTeXN0ZW0gPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHRoaXMuZW5naW5lID0gZW5naW5lXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuYmVoYXZpb3VyQ29tcG9uZW50TmFtZSA9ICdiZWhhdmlvdXInXG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUuYWRkQmVoYXZpb3VyQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LkJlaGF2aW91ckNvbXBvbmVudChjb25maWcsIHRoaXMpXG4gIGNvbXBvbmVudC5lbnRpdHkgPSBlbnRpdHlcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGNvbnN0IGVudGl0eSA9IGNvbXBvbmVudC5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KGVudGl0eSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFVwZGF0ZSkge1xuICAgICAgdGhpcy5vblVwZGF0ZShlbnRpdHkpXG4gICAgfVxuICB9XG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5tdXN0U3RhcnQgPSBmYWxzZVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm11c3RVcGRhdGUgPSB0cnVlXG4gIHJldHVybiBlbnRpdHkuY29tcG9uZW50c1t0aGlzLmJlaGF2aW91ckNvbXBvbmVudE5hbWVdLm1ldGhvZHMub25TdGFydCh0aGlzLmVuZ2luZSwgZW50aXR5KVxufVxuXG5CZWhhdmlvdXJTeXN0ZW0ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICByZXR1cm4gZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5tZXRob2RzLm9uVXBkYXRlKHRoaXMuZW5naW5lLCBlbnRpdHkpXG59XG5cbkJlaGF2aW91clN5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZW50aXR5LmNvbXBvbmVudHNbdGhpcy5iZWhhdmlvdXJDb21wb25lbnROYW1lXS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3VyU3lzdGVtXG4iLCJjb25zdCBTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLmVudGl0eSA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBwYXJhbXMuY3VycmVudFxuICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIHRoaXMuc3RhdGVzID0gcGFyYW1zLnN0YXRlc1xufVxuXG5TdGF0ZUNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50TmFtZSA9ICdzdGF0ZSdcblxuU3RhdGVDb21wb25lbnQucHJvdG90eXBlLnN3aXRjaCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG4gIHRoaXMucmVxdWVzdGVkID0gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFN0YXRlU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLnN0YXRlQ29tcG9uZW50TmFtZSA9ICdzdGF0ZSdcbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLmFkZFN0YXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlN0YXRlQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgY29tcG9uZW50LmVudGl0eSA9IGVudGl0eVxuICBlbnRpdHkuY29tcG9uZW50c1t0aGlzLnN0YXRlQ29tcG9uZW50TmFtZV0gPSBjb21wb25lbnRcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxufVxuXG5TdGF0ZVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQuY3VycmVudCAmJiBjb21wb25lbnQubXVzdFN3aXRjaCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmV4aXQpIHtcbiAgICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZXhpdChlbmdpbmUsIGNvbXBvbmVudC5lbnRpdHkpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN3aXRjaCkge1xuICAgICAgY29tcG9uZW50LmN1cnJlbnQgPSBjb21wb25lbnQucmVxdWVzdGVkXG4gICAgICBpZiAoY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZW50ZXIoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgICAgfVxuICAgICAgY29tcG9uZW50Lm11c3RTd2l0Y2ggPSBmYWxzZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0udXBkYXRlKSB7XG4gICAgICBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS51cGRhdGUoZW5naW5lLCBjb21wb25lbnQuZW50aXR5KVxuICAgIH1cbiAgfVxufVxuXG5TdGF0ZVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZW50aXR5LmNvbXBvbmVudHMuc3RhdGUubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlU3lzdGVtXG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBFbnRpdHlTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSBbXVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgZW50aXR5ID0gbmV3IEhhcm1vbnkuRW50aXR5KGNvbmZpZylcbiAgdGhpcy5jYWNoZS5wdXNoKGVudGl0eSlcbiAgcmV0dXJuIGVudGl0eVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY2FjaGUubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgZW50aXR5ID0gdGhpcy5jYWNoZVtpXVxuICAgIGlmIChlbnRpdHkubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY2FjaGUuc3BsaWNlKGksIDEpXG4gICAgfVxuICB9XG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgZm9yIChjb25zdCBpIGluIGVudGl0eS5jb21wb25lbnRzKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVudGl0eS5jb21wb25lbnRzLCBpKSkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZW50aXR5LmNvbXBvbmVudHNbaV1cbiAgICAgIGNvbnN0IHN5c3RlbSA9IGNvbXBvbmVudC5zeXN0ZW1cbiAgICAgIHN5c3RlbS5kZXN0cm95Q29tcG9uZW50KGVudGl0eSlcbiAgICB9XG4gIH1cbiAgZW50aXR5Lm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmhhc1RhZyA9IGZ1bmN0aW9uIChlbnRpdHksIHRhZykge1xuICByZXR1cm4gZW50aXR5LnRhZ3MuaW5jbHVkZXModGFnKVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3lBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICB0aGlzLmRlc3Ryb3koZW50aXR5KVxuICB9XG4gIHRoaXMuY2FjaGUgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlTeXN0ZW1cbiIsIi8qIGdsb2JhbCBCb3gyRCBIYXJtb255ICovXG5cbmNvbnN0IFBoeXNpY3NTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIGNvbnN0IEIyV29ybGQgPSBCb3gyRC5EeW5hbWljcy5iMldvcmxkXG4gIGNvbnN0IEIyVmVjMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyVmVjMlxuICBjb25zdCBCMkRlYnVnRHJhdyA9IEJveDJELkR5bmFtaWNzLmIyRGVidWdEcmF3XG4gIGNvbnN0IEIyQ29udGFjdExpc3RlbmVyID0gQm94MkQuRHluYW1pY3MuYjJDb250YWN0TGlzdGVuZXJcblxuICB0aGlzLndvcmxkID0gbmV3IEIyV29ybGQobmV3IEIyVmVjMigwLCAwKSwgdHJ1ZSlcbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLnNjYWxlID0gMTAwXG4gIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuY29udGFjdHMgPSBuZXcgQjJDb250YWN0TGlzdGVuZXIoKVxuICB0aGlzLnBoeXNpY3NDb21wb25lbnROYW1lID0gJ3BoeXNpY3MnXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhY3RzXG5cbiAgdGhpcy53b3JsZC5TZXRDb250YWN0TGlzdGVuZXIodGhpcy5jb250YWN0cylcblxuICB0aGlzLmNvbnRhY3RzLkJlZ2luQ29udGFjdCA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50QS5vbkNvbnRhY3RCZWdpbikge1xuICAgICAgY29tcG9uZW50QS5vbkNvbnRhY3RCZWdpbihlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RCZWdpbikge1xuICAgICAgY29tcG9uZW50Qi5vbkNvbnRhY3RCZWdpbihlbnRpdHlBLCBlbnRpdHlCKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuRW5kQ29udGFjdCA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBpZiAoY29tcG9uZW50QS5vbkNvbnRhY3RFbmQpIHtcbiAgICAgIGNvbXBvbmVudEEub25Db250YWN0RW5kKGVudGl0eUIsIGVudGl0eUEpXG4gICAgfVxuICAgIGlmIChjb21wb25lbnRCLm9uQ29udGFjdEVuZCkge1xuICAgICAgY29tcG9uZW50Qi5vbkNvbnRhY3RFbmQoZW50aXR5QSwgZW50aXR5QilcbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLlByZVNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuR2V0VXNlckRhdGEoKVxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGlmIChjb21wb25lbnRBLm9uQ29udGFjdFByZVNvbHZlKSB7XG4gICAgICBjb21wb25lbnRBLm9uQ29udGFjdFByZVNvbHZlKGVudGl0eUIsIGVudGl0eUEpXG4gICAgfVxuICAgIGlmIChjb21wb25lbnRCLm9uQ29udGFjdFByZVNvbHZlKSB7XG4gICAgICBjb21wb25lbnRCLm9uQ29udGFjdFByZVNvbHZlKGVudGl0eUEsIGVudGl0eUIpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5Qb3N0U29sdmUgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLkdldFVzZXJEYXRhKClcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5HZXRVc2VyRGF0YSgpXG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEuZW50aXR5XG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIuZW50aXR5XG4gICAgaWYgKGNvbXBvbmVudEEub25Db250YWN0UG9zdFNvbHZlKSB7XG4gICAgICBjb21wb25lbnRBLm9uQ29udGFjdFBvc3RTb2x2ZShlbnRpdHlCLCBlbnRpdHlBKVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Qi5vbkNvbnRhY3RQb3N0U29sdmUpIHtcbiAgICAgIGNvbXBvbmVudEIub25Db250YWN0UG9zdFNvbHZlKGVudGl0eUEsIGVudGl0eUIpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlYnVnXG5cbiAgY29uc3QgZGVidWdEcmF3ID0gbmV3IEIyRGVidWdEcmF3KHRoaXMuY29udGV4dClcbiAgZGVidWdEcmF3LlNldFNwcml0ZShjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSlcbiAgZGVidWdEcmF3LlNldERyYXdTY2FsZSh0aGlzLnNjYWxlKVxuICBkZWJ1Z0RyYXcuU2V0RmlsbEFscGhhKDAuNSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGbGFncyhCMkRlYnVnRHJhdy5lX3NoYXBlQml0KVxuICBkZWJ1Z0RyYXcuQXBwZW5kRmxhZ3MoQjJEZWJ1Z0RyYXcuZV9qb2ludEJpdClcbiAgdGhpcy53b3JsZC5TZXREZWJ1Z0RyYXcoZGVidWdEcmF3KVxuICB0aGlzLndvcmxkLm1fZGVidWdEcmF3Lm1fc3ByaXRlLmdyYXBoaWNzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLm9uQ29udGFjdEJlZ2luID0gZnVuY3Rpb24gKGVudGl0eSwgY2FsbGJhY2spIHtcbiAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KVxuICBjb21wb25lbnQub25Db250YWN0QmVnaW4gPSBjYWxsYmFja1xufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5vbkNvbnRhY3RFbmQgPSBmdW5jdGlvbiAoZW50aXR5LCBjYWxsYmFjaykge1xuICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpXG4gIGNvbXBvbmVudC5vbkNvbnRhY3RFbmQgPSBjYWxsYmFja1xufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5vbkNvbnRhY3RQcmVTb2x2ZSA9IGZ1bmN0aW9uIChlbnRpdHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSlcbiAgY29tcG9uZW50Lm9uQ29udGFjdFByZVNvbHZlID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUub25Db250YWN0UG9zdFNvbHZlID0gZnVuY3Rpb24gKGVudGl0eSwgY2FsbGJhY2spIHtcbiAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KVxuICBjb21wb25lbnQub25Db250YWN0UG9zdFNvbHZlID0gY2FsbGJhY2tcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuc2V0R3Jhdml0eSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy53b3JsZC5TZXRHcmF2aXR5KGNvbmZpZylcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZHJhd0RlYnVnRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53b3JsZC5EcmF3RGVidWdEYXRhKClcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb21wb25lbnRcblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkUGh5c2ljc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHksIHBhcmFtcykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5QaHlzaWNzQ29tcG9uZW50KHRoaXMpXG4gIGNvbXBvbmVudC5ib2R5ID0gdGhpcy5jcmVhdGVCb2R5KHBhcmFtcylcbiAgY29tcG9uZW50LmJvZHkuU2V0VXNlckRhdGEoY29tcG9uZW50KVxuICBjb21wb25lbnQuZW50aXR5ID0gZW50aXR5XG4gIGVudGl0eS5jb21wb25lbnRzW3RoaXMucGh5c2ljc0NvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZ2V0Rml4dHVyZURlZiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgQjJGaXh0dXJlRGVmID0gQm94MkQuRHluYW1pY3MuYjJGaXh0dXJlRGVmXG4gIGNvbnN0IGZpeERlZiA9IG5ldyBCMkZpeHR1cmVEZWYoKVxuICBmaXhEZWYuZGVuc2l0eSA9IGNvbmZpZy5kZW5zaXR5XG4gIGZpeERlZi5mcmljdGlvbiA9IGNvbmZpZy5mcmljdGlvblxuICBmaXhEZWYucmVzdGl0dXRpb24gPSBjb25maWcucmVzdGl0dXRpb25cbiAgZml4RGVmLmlzU2Vuc29yID0gY29uZmlnLmlzU2Vuc29yXG4gIHJldHVybiBmaXhEZWZcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkQ2lyY2xlID0gZnVuY3Rpb24gKGVudGl0eSwgcGFyYW1zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICByYWRpdXM6IDI1LFxuICAgIGRlbnNpdHk6IDEsXG4gICAgZnJpY3Rpb246IDAuNSxcbiAgICByZXN0aXR1dGlvbjogMC4zLFxuICAgIGlzU2Vuc29yOiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcbiAgY29uc3QgZml4dHVyZURlZmluaXRpb24gPSB0aGlzLmdldEZpeHR1cmVEZWYoY29uZmlnKVxuICBjb25zdCBCMkNpcmNsZVNoYXBlID0gQm94MkQuQ29sbGlzaW9uLlNoYXBlcy5iMkNpcmNsZVNoYXBlXG4gIGNvbnN0IGZpeHR1cmVEZWYgPSBmaXh0dXJlRGVmaW5pdGlvblxuICBmaXh0dXJlRGVmLnNoYXBlID0gbmV3IEIyQ2lyY2xlU2hhcGUoY29uZmlnLnJhZGl1cyAvIHRoaXMuc2NhbGUpXG4gIGZpeHR1cmVEZWYuc2hhcGUubV9wID0ge1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgfVxuICBjb25zdCBmaXh0dXJlID0gdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkNyZWF0ZUZpeHR1cmUoZml4dHVyZURlZilcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5wdXNoKGZpeHR1cmUpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICAgIHR5cGU6ICdkeW5hbWljJyxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgYWxsb3dTbGVlcDogdHJ1ZSxcbiAgICBhd2FrZTogdHJ1ZSxcbiAgICBidWxsZXQ6IGZhbHNlLFxuICAgIGZpeGVkUm90YXRpb246IGZhbHNlLFxuICAgIGFuZ2xlOiAwLFxuICAgIGFuZ3VsYXJEYW1waW5nOiAwLFxuICAgIGFuZ3VsYXJWZWxvY2l0eTogMCxcbiAgICBsaW5lYXJEYW1waW5nOiAwLFxuICAgIGxpbmVhclZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB1c2VyRGF0YToge31cbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcblxuICBjb25zdCBCMkJvZHlEZWYgPSBCb3gyRC5EeW5hbWljcy5iMkJvZHlEZWZcbiAgY29uc3QgQjJCb2R5ID0gQm94MkQuRHluYW1pY3MuYjJCb2R5XG5cbiAgY29uc3QgYm9keURlZiA9IG5ldyBCMkJvZHlEZWYoKVxuICBib2R5RGVmLnBvc2l0aW9uLnggPSBjb25maWcueCAvIHRoaXMuc2NhbGVcbiAgYm9keURlZi5wb3NpdGlvbi55ID0gY29uZmlnLnkgLyB0aGlzLnNjYWxlXG4gIGJvZHlEZWYuYWN0aXZlID0gY29uZmlnLmFjdGl2ZVxuICBib2R5RGVmLmFsbG93U2xlZXAgPSBjb25maWcuYWxsb3dTbGVlcFxuICBib2R5RGVmLmF3YWtlID0gY29uZmlnLmF3YWtlXG4gIGJvZHlEZWYuYnVsbGV0ID0gY29uZmlnLmJ1bGxldFxuICBib2R5RGVmLmZpeGVkUm90YXRpb24gPSBjb25maWcuZml4ZWRSb3RhdGlvblxuICBib2R5RGVmLmFuZ2xlID0gY29uZmlnLmFuZ2xlXG4gIGJvZHlEZWYuYW5ndWxhckRhbXBpbmcgPSBjb25maWcuYW5ndWxhckRhbXBpbmdcbiAgYm9keURlZi5hbmd1bGFyVmVsb2NpdHkgPSBjb25maWcuYW5ndWxhclZlbG9jaXR5XG4gIGJvZHlEZWYubGluZWFyRGFtcGluZyA9IGNvbmZpZy5saW5lYXJEYW1waW5nXG4gIGJvZHlEZWYubGluZWFyVmVsb2NpdHkgPSBjb25maWcubGluZWFyVmVsb2NpdHlcbiAgYm9keURlZi51c2VyRGF0YSA9IGNvbmZpZy51c2VyRGF0YVxuXG4gIGlmIChjb25maWcudHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfc3RhdGljQm9keVxuICB9XG5cbiAgaWYgKGNvbmZpZy50eXBlID09PSAnZHluYW1pYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfZHluYW1pY0JvZHlcbiAgfVxuXG4gIGlmIChjb25maWcudHlwZSA9PT0gJ2tpbmVtYXRpYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfa2luZW1hdGljQm9keVxuICB9XG5cbiAgY29uc3QgYm9keSA9IHRoaXMud29ybGQuQ3JlYXRlQm9keShib2R5RGVmKVxuICBib2R5LmFjdGl2ZSA9IHRydWVcblxuICByZXR1cm4gYm9keVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud29ybGQuU3RlcCgxIC8gdGhpcy5mcHMsIDgsIDMpXG4gIHRoaXMud29ybGQuQ2xlYXJGb3JjZXMoKVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW50aXR5ID0gY29tcG9uZW50LmVudGl0eVxuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKGVudGl0eSlcbiAgICAgIGVudGl0eS54ID0gcG9zaXRpb24ueFxuICAgICAgZW50aXR5LnkgPSBwb3NpdGlvbi55XG4gICAgICBlbnRpdHkuYW5nbGUgPSB0aGlzLmdldEFuZ2xlKGVudGl0eSlcbiAgICB9XG4gIH1cbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICByZXR1cm4gZW50aXR5LmNvbXBvbmVudHNbdGhpcy5waHlzaWNzQ29tcG9uZW50TmFtZV1cbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZGVzdHJveUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5maXh0dXJlcy5mb3JFYWNoKChmaXh0dXJlKSA9PiB7XG4gICAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LkRlc3Ryb3lGaXh0dXJlKGZpeHR1cmUpXG4gIH0pXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuc3lzdGVtLndvcmxkLkRlc3Ryb3lCb2R5KHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keSlcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5tdXN0RGVzdHJveSA9IHRydWVcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYXBwbHlGb3JjZSA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuQXBwbHlGb3JjZShjb25maWcsIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5HZXRXb3JsZENlbnRlcigpKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbnRpdHksIGNvbmZpZykge1xuICB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuU2V0UG9zaXRpb24oe1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc2NhbGVcbiAgfSlcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuc2V0TGluZWFyVmVsb2NpdHkgPSBmdW5jdGlvbiAoZW50aXR5LCBjb25maWcpIHtcbiAgdGhpcy5nZXRDb21wb25lbnQoZW50aXR5KS5ib2R5LlNldEF3YWtlKHRydWUpXG4gIHRoaXMuZ2V0Q29tcG9uZW50KGVudGl0eSkuYm9keS5TZXRMaW5lYXJWZWxvY2l0eSh7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zY2FsZVxuICB9KVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuR2V0UG9zaXRpb24oKVxuICByZXR1cm4ge1xuICAgIHg6IHBvc2l0aW9uLnggKiB0aGlzLnNjYWxlLFxuICAgIHk6IHBvc2l0aW9uLnkgKiB0aGlzLnNjYWxlXG4gIH1cbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiAoZW50aXR5KSB7XG4gIHJldHVybiB0aGlzLmdldENvbXBvbmVudChlbnRpdHkpLmJvZHkuR2V0QW5nbGUoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzU3lzdGVtXG4iLCJjb25zdCBQaHlzaWNzQ29tcG9uZW50ID0gZnVuY3Rpb24gKHN5c3RlbSkge1xuICB0aGlzLmVudGl0eSA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuYm9keSA9IG51bGxcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5maXh0dXJlcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3NDb21wb25lbnRcbiIsImltcG9ydCBBdWRpb1N5c3RlbSBmcm9tICcuL2F1ZGlvLXN5c3RlbS9hdWRpby1zeXN0ZW0nXG5pbXBvcnQgQXVkaW9Db21wb25lbnQgZnJvbSAnLi9hdWRpby1zeXN0ZW0vYXVkaW8tY29tcG9uZW50J1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlci9sb2FkZXInXG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lL2VuZ2luZSdcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHktc3lzdGVtL2VudGl0eSdcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycy9oZWxwZXJzJ1xuaW1wb3J0IEtleSBmcm9tICcuL2tleS1zeXN0ZW0va2V5J1xuaW1wb3J0IEtleVN5c3RlbSBmcm9tICcuL2tleS1zeXN0ZW0va2V5LXN5c3RlbSdcbmltcG9ydCBMb29wU3lzdGVtIGZyb20gJy4vbG9vcC1zeXN0ZW0vbG9vcC1zeXN0ZW0nXG5pbXBvcnQgUG9pbnRlciBmcm9tICcuL3BvaW50ZXItc3lzdGVtL3BvaW50ZXInXG5pbXBvcnQgUG9pbnRlclN5c3RlbSBmcm9tICcuL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtJ1xuaW1wb3J0IFNwcml0ZUNvbXBvbmVudCBmcm9tICcuL3JlbmRlci1zeXN0ZW0vc3ByaXRlLWNvbXBvbmVudCdcbmltcG9ydCBSZW5kZXJTeXN0ZW0gZnJvbSAnLi9yZW5kZXItc3lzdGVtL3JlbmRlci1zeXN0ZW0nXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZS1zeXN0ZW0vc2NlbmUnXG5pbXBvcnQgU2NlbmVTeXN0ZW0gZnJvbSAnLi9zY2VuZS1zeXN0ZW0vc2NlbmUtc3lzdGVtJ1xuaW1wb3J0IEJlaGF2aW91ckNvbXBvbmVudCBmcm9tICcuL2JlaGF2aW91ci1zeXN0ZW0vYmVoYXZpb3VyLWNvbXBvbmVudCdcbmltcG9ydCBCZWhhdmlvdXJTeXN0ZW0gZnJvbSAnLi9iZWhhdmlvdXItc3lzdGVtL2JlaGF2aW91ci1zeXN0ZW0nXG5pbXBvcnQgU3RhdGVDb21wb25lbnQgZnJvbSAnLi9zdGF0ZS1zeXN0ZW0vc3RhdGUtY29tcG9uZW50J1xuaW1wb3J0IFN0YXRlU3lzdGVtIGZyb20gJy4vc3RhdGUtc3lzdGVtL3N0YXRlLXN5c3RlbSdcbmltcG9ydCBFbnRpdHlTeXN0ZW0gZnJvbSAnLi9lbnRpdHktc3lzdGVtL2VudGl0eS1zeXN0ZW0nXG5pbXBvcnQgUGh5c2ljc1N5c3RlbSBmcm9tICcuL3BoeXNpY3Mtc3lzdGVtL3BoeXNpY3Mtc3lzdGVtJ1xuaW1wb3J0IFBoeXNpY3NDb21wb25lbnQgZnJvbSAnLi9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudCdcblxuY29uc3QgSGFybW9ueSA9IHtcbiAgQXVkaW9TeXN0ZW06IEF1ZGlvU3lzdGVtLFxuICBBdWRpb0NvbXBvbmVudDogQXVkaW9Db21wb25lbnQsXG4gIExvYWRlcjogTG9hZGVyLFxuICBFbmdpbmU6IEVuZ2luZSxcbiAgRW50aXR5OiBFbnRpdHksXG4gIEVudGl0eVN5c3RlbTogRW50aXR5U3lzdGVtLFxuICBIZWxwZXJzOiBIZWxwZXJzLFxuICBLZXk6IEtleSxcbiAgS2V5U3lzdGVtOiBLZXlTeXN0ZW0sXG4gIExvb3BTeXN0ZW06IExvb3BTeXN0ZW0sXG4gIFBoeXNpY3NDb21wb25lbnQ6IFBoeXNpY3NDb21wb25lbnQsXG4gIFBoeXNpY3NTeXN0ZW06IFBoeXNpY3NTeXN0ZW0sXG4gIFBvaW50ZXI6IFBvaW50ZXIsXG4gIFBvaW50ZXJTeXN0ZW06IFBvaW50ZXJTeXN0ZW0sXG4gIFNwcml0ZUNvbXBvbmVudDogU3ByaXRlQ29tcG9uZW50LFxuICBSZW5kZXJTeXN0ZW06IFJlbmRlclN5c3RlbSxcbiAgU2NlbmU6IFNjZW5lLFxuICBTY2VuZVN5c3RlbTogU2NlbmVTeXN0ZW0sXG4gIEJlaGF2aW91ckNvbXBvbmVudDogQmVoYXZpb3VyQ29tcG9uZW50LFxuICBCZWhhdmlvdXJTeXN0ZW06IEJlaGF2aW91clN5c3RlbSxcbiAgU3RhdGVDb21wb25lbnQ6IFN0YXRlQ29tcG9uZW50LFxuICBTdGF0ZVN5c3RlbTogU3RhdGVTeXN0ZW1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFybW9ueVxuIl0sInNvdXJjZVJvb3QiOiIifQ==