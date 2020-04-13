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
    x: 50,
    y: 50,
    angle: 0,
    scale: 1
  }, params);
  this.mustDestroy = false;
  this.components = [];
  this.tags = config.tags;
  this.x = config.x;
  this.y = config.y;
  this.angle = config.angle;
  this.scale = config.scale;
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
  StateSystem: state_system
};
/* harmony default export */ var harmony = __webpack_exports__["default"] = (harmony_Harmony);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjYWNoZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInByb3RvdHlwZSIsInBsYXkiLCJjb21wb25lbnQiLCJzb3VyY2UiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJnYWluIiwiYnVmZmVyIiwiYXVkaW9OYW1lIiwidmFsdWUiLCJ2b2x1bWUiLCJzdGFydCIsInN0b3AiLCJhZGRBdWRpb0NvbXBvbmVudCIsImNvbmZpZyIsIkhhcm1vbnkiLCJBdWRpb0NvbXBvbmVudCIsInB1c2giLCJ1cGRhdGUiLCJzdGF0ZSIsInJlc3VtZSIsImkiLCJsZW5ndGgiLCJtdXN0RGVzdHJveSIsInNwbGljZSIsInBhcmFtcyIsInN5c3RlbSIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudE5hbWUiLCJkZXN0cm95IiwiTG9hZGVyIiwiaW1hZ2VzQ2FjaGUiLCJhdWRpb0NhY2hlIiwibG9hZGluZyIsImNvbXBsZXRlIiwiZXJyb3JzIiwic3VjY2VzcyIsInF1ZXVlZCIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm5hbWUiLCJvblN1Y2Nlc3MiLCJvbmVycm9yIiwicmVhc29uIiwib25FcnJvciIsInNyYyIsInVybCIsImxvYWRBdWRpbyIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwic2VuZCIsIm9uU3RhcnQiLCJvblByb2dyZXNzIiwib25Db21wbGV0ZSIsInByb2dyZXNzIiwiTWF0aCIsImZsb29yIiwiaXNOYU4iLCJFbmdpbmUiLCJjYW52YXMiLCJsb2FkZXIiLCJsb29wIiwiTG9vcFN5c3RlbSIsInNjZW5lIiwiU2NlbmVTeXN0ZW0iLCJyZW5kZXIiLCJSZW5kZXJTeXN0ZW0iLCJhdWRpbyIsImVudGl0aWVzIiwiRW50aXR5U3lzdGVtIiwia2V5cyIsIktleVN5c3RlbSIsInBoeXNpY3MiLCJQaHlzaWNzU3lzdGVtIiwicG9pbnRlcnMiLCJQb2ludGVyU3lzdGVtIiwic2NyaXB0cyIsIlNjcmlwdFN5c3RlbSIsIlN0YXRlU3lzdGVtIiwiaGVscGVycyIsIkhlbHBlcnMiLCJvblN0ZXAiLCJjdXJyZW50IiwibXVzdFByZWxvYWQiLCJwcmVsb2FkIiwicmVxdWVzdENyZWF0ZSIsIm11c3RDcmVhdGUiLCJyZXF1ZXN0VXBkYXRlIiwiY3JlYXRlIiwibXVzdFVwZGF0ZSIsInJlcXVlc3REcmF3IiwibXVzdERyYXciLCJkcmF3IiwiZHJhd0RlYnVnRGF0YSIsIm11c3RTd2l0Y2giLCJyZXF1ZXN0ZWQiLCJyZXF1ZXN0UHJlbG9hZCIsInJ1biIsIkVudGl0eSIsInRhZ3MiLCJ4IiwieSIsImFuZ2xlIiwic2NhbGUiLCJhZGRDb21wb25lbnQiLCJlbnRpdHkiLCJmb3JFYWNoIiwiaGFzVGFnIiwidGFnIiwiaW5jbHVkZXMiLCJjcmVhdGVHcmlkIiwicm93cyIsImNvbHMiLCJncmlkIiwiQXJyYXkiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJjZWlsIiwicmFuZG9tIiwiZ2V0UmFuZG9tSXRlbXMiLCJhcnJheSIsInF1YW50aXR5IiwicmFuZG9tSXRlbXMiLCJyYW5kb21JbmRleCIsInNodWZmbGVBcnJheSIsImoiLCJLZXkiLCJrZXkiLCJlbmQiLCJob2xkIiwiaG9sZFRpbWUiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJlbmFibGVkIiwiZGVsdGEiLCJub3ciLCJ0aGVuIiwiZnJhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsImhhbmRsZUtleVVwIiwiZXZlbnQiLCJnZXRPclNldCIsImdldCIsInBlcmZvcm1hbmNlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYWNjdW11bGF0b3IiLCJsYXN0VGltZSIsImxhc3RTdGVwIiwiZnBzIiwicGF1c2VkIiwidGltZXN0ZXAiLCJwYXVzZSIsInRpbWVzdGFtcCIsInN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJQb2ludGVyIiwiYWN0aXZlIiwiaWQiLCJ0eXBlIiwic3RhcnRYIiwic3RhcnRZIiwiZW5hYmxlUG9pbnRlcnMiLCJwb2ludGVyIiwic3R5bGUiLCJ0b3VjaEFjdGlvbiIsInVzZXJTZWxlY3QiLCJoYW5kbGVQb2ludGVyRG93biIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJnZXRQb2ludGVyQnlJRCIsIm91dHB1dCIsImdldEluYWN0aXZlUG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJjbGllbnRYIiwidGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJzdG9wUHJvcGFnYXRpb24iLCJTcHJpdGVDb21wb25lbnQiLCJ3aWR0aCIsImhlaWdodCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJhbmNob3JYIiwiYW5jaG9yWSIsInZpc2libGUiLCJnZXRDb250ZXh0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiY2xlYXIiLCJjbGVhclJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImFkZFNwcml0ZUNvbXBvbmVudCIsInVuc2hpZnQiLCJ0ZXh0IiwiZmlsbFRleHQiLCJjaXJjbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJyYWRpdXMiLCJQSSIsInN0cm9rZSIsImxpbmUiLCJtb3ZlVG8iLCJheCIsImF5IiwibGluZVRvIiwiYngiLCJieSIsInJlY3QiLCJTY2VuZSIsIm1ldGhvZHMiLCJlbmdpbmUiLCJyZXF1ZXN0U3dpdGNoIiwiU2NyaXB0Q29tcG9uZW50IiwibXVzdFN0YXJ0IiwiYWRkU2NyaXB0Q29tcG9uZW50IiwiU3RhdGVDb21wb25lbnQiLCJzdGF0ZXMiLCJhZGRTdGF0ZUNvbXBvbmVudCIsImV4aXQiLCJlbnRlciIsImFkZCIsIkIyV29ybGQiLCJCb3gyRCIsIkR5bmFtaWNzIiwiYjJXb3JsZCIsIkIyVmVjMiIsIkNvbW1vbiIsImIyVmVjMiIsIkIyRGVidWdEcmF3IiwiYjJEZWJ1Z0RyYXciLCJCMkNvbnRhY3RMaXN0ZW5lciIsImIyQ29udGFjdExpc3RlbmVyIiwid29ybGQiLCJjb250YWN0cyIsIlNldENvbnRhY3RMaXN0ZW5lciIsIkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJjb21wb25lbnRBIiwiR2V0Rml4dHVyZUEiLCJHZXRCb2R5IiwiY29tcG9uZW50QiIsIkdldEZpeHR1cmVCIiwiZW50aXR5QSIsImVudGl0eUIiLCJvbkNvbnRhY3RCZWdpbiIsIkVuZENvbnRhY3QiLCJvbkNvbnRhY3RFbmQiLCJQcmVTb2x2ZSIsIm9uQ29udGFjdFByZVNvbHZlIiwiUG9zdFNvbHZlIiwib25Db250YWN0UG9zdFNvbHZlIiwiZGVidWdEcmF3IiwiU2V0U3ByaXRlIiwiU2V0RHJhd1NjYWxlIiwiU2V0RmlsbEFscGhhIiwiU2V0RmxhZ3MiLCJlX3NoYXBlQml0IiwiQXBwZW5kRmxhZ3MiLCJlX2pvaW50Qml0IiwiU2V0RGVidWdEcmF3IiwibV9kZWJ1Z0RyYXciLCJtX3Nwcml0ZSIsImdyYXBoaWNzIiwic2V0R3Jhdml0eSIsIlNldEdyYXZpdHkiLCJEcmF3RGVidWdEYXRhIiwiYWRkUGh5c2ljc0NvbXBvbmVudCIsIlBoeXNpY3NDb21wb25lbnQiLCJTdGVwIiwiQ2xlYXJGb3JjZXMiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZ2V0QW5nbGUiLCJkZWZhdWx0cyIsImFsbG93U2xlZXAiLCJhd2FrZSIsImJ1bGxldCIsImZpeGVkUm90YXRpb24iLCJhbmd1bGFyRGFtcGluZyIsImFuZ3VsYXJWZWxvY2l0eSIsImxpbmVhckRhbXBpbmciLCJsaW5lYXJWZWxvY2l0eSIsInVzZXJEYXRhIiwiYm9keSIsImZpeHR1cmVzIiwiQjJCb2R5RGVmIiwiYjJCb2R5RGVmIiwiQjJCb2R5IiwiYjJCb2R5IiwiYm9keURlZiIsImIyX3N0YXRpY0JvZHkiLCJiMl9keW5hbWljQm9keSIsImIyX2tpbmVtYXRpY0JvZHkiLCJDcmVhdGVCb2R5Iiwic2V0TGluZWFyVmVsb2NpdHkiLCJTZXRBd2FrZSIsIlNldExpbmVhclZlbG9jaXR5IiwiZml4dHVyZSIsIkRlc3Ryb3lGaXh0dXJlIiwiRGVzdHJveUJvZHkiLCJHZXRQb3NpdGlvbiIsIkdldEFuZ2xlIiwic2V0UG9zaXRpb24iLCJTZXRQb3NpdGlvbiIsImFwcGx5Rm9yY2UiLCJBcHBseUZvcmNlIiwiR2V0V29ybGRDZW50ZXIiLCJnZXRGaXh0dXJlRGVmIiwiQjJGaXh0dXJlRGVmIiwiYjJGaXh0dXJlRGVmIiwiZml4RGVmIiwiZGVuc2l0eSIsImZyaWN0aW9uIiwicmVzdGl0dXRpb24iLCJpc1NlbnNvciIsImFkZENpcmNsZSIsImZpeHR1cmVEZWZpbml0aW9uIiwiQjJDaXJjbGVTaGFwZSIsIkNvbGxpc2lvbiIsIlNoYXBlcyIsImIyQ2lyY2xlU2hhcGUiLCJmaXh0dXJlRGVmIiwic2hhcGUiLCJtX3AiLCJDcmVhdGVGaXh0dXJlIiwibWUiLCJvdGhlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsQ0FBcUI7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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TUFKTTtBQUtkd0MsUUFBTSxFQUFFQSxNQUxNO0FBTWQ3QixjQUFZLEVBQUVBLGFBTkE7QUFPZFcsU0FBTyxFQUFFQSxPQVBLO0FBUWQrQyxLQUFHLEVBQUVBLEdBUlM7QUFTZHhELFdBQVMsRUFBRUEsVUFURztBQVVkVCxZQUFVLEVBQUVBLFdBVkU7QUFXZDhOLGtCQUFnQixFQUFFQSxpQkFYSjtBQVlkbk4sZUFBYSxFQUFFQSxjQVpEO0FBYWR1RixTQUFPLEVBQUVBLE9BYks7QUFjZHJGLGVBQWEsRUFBRUEsY0FkRDtBQWVkZ0gsaUJBQWUsRUFBRUEsZ0JBZkg7QUFnQmR6SCxjQUFZLEVBQUVBLGFBaEJBO0FBaUJkK0osT0FBSyxFQUFFQSxLQWpCTztBQWtCZGpLLGFBQVcsRUFBRUEsWUFsQkM7QUFtQmRxSyxpQkFBZSxFQUFFQSxnQkFuQkg7QUFvQmR4SixjQUFZLEVBQUVBLGFBcEJBO0FBcUJkMkosZ0JBQWMsRUFBRUEsZUFyQkY7QUFzQmQxSixhQUFXLEVBQUVBLFlBQVdBO0FBdEJWLENBQWhCO0FBeUJlekUsNEZBQWYsRSIsImZpbGUiOiJoYXJtb255LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGFybW9ueVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIYXJtb255XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEF1ZGlvU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpXG4gIHRoaXMubWFzdGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5tYXN0ZXIuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICBjb25zdCBzb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKClcbiAgY29uc3QgZ2FpbiA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKClcbiAgY29tcG9uZW50LnNvdXJjZSA9IHNvdXJjZVxuICBzb3VyY2UuYnVmZmVyID0gdGhpcy5jYWNoZVtjb21wb25lbnQuYXVkaW9OYW1lXVxuICBzb3VyY2UuY29ubmVjdChnYWluKVxuICBnYWluLmNvbm5lY3QodGhpcy5tYXN0ZXIpXG4gIGdhaW4uZ2Fpbi52YWx1ZSA9IGNvbXBvbmVudC52b2x1bWVcbiAgc291cmNlLnN0YXJ0KClcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gIGlmIChjb21wb25lbnQuc291cmNlKSB7XG4gICAgY29tcG9uZW50LnNvdXJjZS5zdG9wKClcbiAgfVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuYWRkQXVkaW9Db21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LkF1ZGlvQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgdGhpcy5jb250ZXh0LnJlc3VtZSgpXG4gIH1cbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvU3lzdGVtXG4iLCJjb25zdCBBdWRpb0NvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICBhdWRpb05hbWU6ICdub25lJyxcbiAgICB2b2x1bWU6IDFcbiAgfSwgcGFyYW1zKVxuXG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuc291cmNlID0gbnVsbFxuICB0aGlzLmF1ZGlvTmFtZSA9IGNvbmZpZy5hdWRpb05hbWVcbiAgdGhpcy52b2x1bWUgPSBjb25maWcudm9sdW1lXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxufVxuXG5BdWRpb0NvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50TmFtZSA9ICdhdWRpbydcblxuQXVkaW9Db21wb25lbnQucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoYXVkaW9OYW1lKSB7XG4gIGlmIChhdWRpb05hbWUpIHtcbiAgICB0aGlzLmF1ZGlvTmFtZSA9IGF1ZGlvTmFtZVxuICB9XG4gIHRoaXMuc3lzdGVtLnBsYXkodGhpcylcbn1cblxuQXVkaW9Db21wb25lbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc3lzdGVtLnN0b3AodGhpcylcbn1cblxuQXVkaW9Db21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc3lzdGVtLnN0b3AodGhpcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9Db21wb25lbnRcbiIsIi8qIGdsb2JhbCBJbWFnZSAqL1xuXG5jb25zdCBMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuaW1hZ2VzQ2FjaGUgPSB7fVxuICB0aGlzLmF1ZGlvQ2FjaGUgPSB7fVxuICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gIHRoaXMuZXJyb3JzID0gMFxuICB0aGlzLnN1Y2Nlc3MgPSAwXG4gIHRoaXMucXVldWVkID0gMFxufVxuXG5Mb2FkZXIucHJvdG90eXBlLmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5xdWV1ZWQrK1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN1Y2Nlc3MrK1xuICAgICAgdGhpcy5pbWFnZXNDYWNoZVtjb25maWcubmFtZV0gPSBpbWFnZVxuICAgICAgdGhpcy5vblN1Y2Nlc3MoY29uZmlnKVxuICAgICAgcmVzb2x2ZShpbWFnZSlcbiAgICB9XG4gICAgaW1hZ2Uub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgIHRoaXMub25FcnJvcihjb25maWcpXG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBjb25maWcudXJsXG4gIH0pXG59XG5cbkxvYWRlci5wcm90b3R5cGUubG9hZEF1ZGlvID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLnF1ZXVlZCsrXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgY29uc3QgQXVkaW9Db250ZXh0ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKClcbiAgICB4aHIub3BlbignR0VUJywgY29uZmlnLnVybCwgdHJ1ZSlcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJ1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBBdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHhoci5yZXNwb25zZSwgKGJ1ZmZlcikgPT4ge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MrK1xuICAgICAgICB0aGlzLmF1ZGlvQ2FjaGVbY29uZmlnLm5hbWVdID0gYnVmZmVyXG4gICAgICAgIHRoaXMub25TdWNjZXNzKGNvbmZpZylcbiAgICAgICAgcmVzb2x2ZShidWZmZXIpXG4gICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3JzKytcbiAgICAgICAgdGhpcy5vbkVycm9yKGNvbmZpZylcbiAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgIH0pXG4gICAgfVxuICAgIHhoci5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgdGhpcy5lcnJvcnMrK1xuICAgICAgdGhpcy5vbkVycm9yKGNvbmZpZylcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIHhoci5zZW5kKClcbiAgfSlcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge31cblxuTG9hZGVyLnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucXVldWVkID4gMCkge1xuICAgIGlmICghdGhpcy5zdGFydCkge1xuICAgICAgdGhpcy5zdGFydCA9IHRydWVcbiAgICAgIHRoaXMub25TdGFydCgpXG4gICAgfVxuICAgIGlmICh0aGlzLnF1ZXVlZCA9PT0gdGhpcy5zdWNjZXNzICsgdGhpcy5lcnJvcnMpIHtcbiAgICAgIHRoaXMucXVldWVkID0gMFxuICAgICAgdGhpcy5zdWNjZXNzID0gMFxuICAgICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWVcbiAgICAgIHRoaXMuc3RhcnQgPSBmYWxzZVxuICAgICAgdGhpcy5vbkNvbXBsZXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gICAgfVxuICAgIGxldCBwcm9ncmVzcyA9IE1hdGguZmxvb3IoKHRoaXMuc3VjY2VzcyArIHRoaXMuZXJyb3JzKSAvIHRoaXMucXVldWVkICogMTAwKVxuICAgIGlmIChpc05hTihwcm9ncmVzcykpIHtcbiAgICAgIHByb2dyZXNzID0gMTAwXG4gICAgfVxuICAgIHRoaXMub25Qcm9ncmVzcyhwcm9ncmVzcylcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBFbmdpbmUgPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIHRoaXMubG9hZGVyID0gbmV3IEhhcm1vbnkuTG9hZGVyKClcbiAgdGhpcy5sb29wID0gbmV3IEhhcm1vbnkuTG9vcFN5c3RlbSgpXG4gIHRoaXMuc2NlbmUgPSBuZXcgSGFybW9ueS5TY2VuZVN5c3RlbSgpXG4gIHRoaXMucmVuZGVyID0gbmV3IEhhcm1vbnkuUmVuZGVyU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5hdWRpbyA9IG5ldyBIYXJtb255LkF1ZGlvU3lzdGVtKClcbiAgdGhpcy5lbnRpdGllcyA9IG5ldyBIYXJtb255LkVudGl0eVN5c3RlbSgpXG4gIHRoaXMua2V5cyA9IG5ldyBIYXJtb255LktleVN5c3RlbSgpXG4gIHRoaXMucGh5c2ljcyA9IG5ldyBIYXJtb255LlBoeXNpY3NTeXN0ZW0oY2FudmFzKVxuICB0aGlzLnBvaW50ZXJzID0gbmV3IEhhcm1vbnkuUG9pbnRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuc2NyaXB0cyA9IG5ldyBIYXJtb255LlNjcmlwdFN5c3RlbSgpXG4gIHRoaXMuc3RhdGUgPSBuZXcgSGFybW9ueS5TdGF0ZVN5c3RlbSgpXG4gIHRoaXMuaGVscGVycyA9IG5ldyBIYXJtb255LkhlbHBlcnMoKVxuXG4gIHRoaXMubG9vcC5vblN0ZXAgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2NlbmUuY3VycmVudCkge1xuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdFByZWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlci5sb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnByZWxvYWQodGhpcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRlci51cGRhdGUoKVxuICAgICAgICBpZiAodGhpcy5sb2FkZXIuY29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlci5jYWNoZSA9IHRoaXMubG9hZGVyLmltYWdlc0NhY2hlXG4gICAgICAgICAgdGhpcy5hdWRpby5jYWNoZSA9IHRoaXMubG9hZGVyLmF1ZGlvQ2FjaGVcbiAgICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RDcmVhdGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0Q3JlYXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdFVwZGF0ZSgpXG4gICAgICAgIHRoaXMuc2NlbmUuY3VycmVudC5jcmVhdGUodGhpcylcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0RHJhdygpXG4gICAgICAgIHRoaXMua2V5cy51cGRhdGUoKVxuICAgICAgICB0aGlzLnBvaW50ZXJzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuYXVkaW8udXBkYXRlKClcbiAgICAgICAgdGhpcy5waHlzaWNzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuZW50aXRpZXMudXBkYXRlKClcbiAgICAgICAgdGhpcy5zY3JpcHRzLnVwZGF0ZSh0aGlzKVxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZSh0aGlzKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQudXBkYXRlKHRoaXMpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0RHJhdykge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RVcGRhdGUoKVxuICAgICAgICB0aGlzLnJlbmRlci5kcmF3KClcbiAgICAgICAgdGhpcy5waHlzaWNzLmRyYXdEZWJ1Z0RhdGEoKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQuZHJhdyh0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zY2VuZS5tdXN0U3dpdGNoKSB7XG4gICAgICB0aGlzLmVudGl0aWVzLmRlc3Ryb3koKVxuICAgICAgdGhpcy5wb2ludGVycy5kZXN0cm95KClcbiAgICAgIHRoaXMua2V5cy5kZXN0cm95KClcbiAgICAgIHRoaXMuc2NlbmUuY3VycmVudCA9IHRoaXMuc2NlbmUucmVxdWVzdGVkXG4gICAgICB0aGlzLnNjZW5lLnJlcXVlc3RQcmVsb2FkKClcbiAgICB9XG4gIH1cbiAgdGhpcy5sb29wLnJ1bigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZ2luZVxuIiwiY29uc3QgRW50aXR5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICB0YWdzOiBbXSxcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgICBhbmdsZTogMCxcbiAgICBzY2FsZTogMVxuICB9LCBwYXJhbXMpXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLnRhZ3MgPSBjb25maWcudGFnc1xuICB0aGlzLnggPSBjb25maWcueFxuICB0aGlzLnkgPSBjb25maWcueVxuICB0aGlzLmFuZ2xlID0gY29uZmlnLmFuZ2xlXG4gIHRoaXMuc2NhbGUgPSBjb25maWcuc2NhbGVcbn1cblxuRW50aXR5LnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lbnRpdHkgPSB0aGlzXG4gIHRoaXNbY29tcG9uZW50LmNvbXBvbmVudE5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuRW50aXR5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50LmRlc3Ryb3koKVxuICB9KVxuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5FbnRpdHkucHJvdG90eXBlLmhhc1RhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgcmV0dXJuIHRoaXMudGFncy5pbmNsdWRlcyh0YWcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eVxuIiwiY29uc3QgSGVscGVycyA9IGZ1bmN0aW9uICgpIHt9XG5cbkhlbHBlcnMucHJvdG90eXBlLmNyZWF0ZUdyaWQgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBncmlkID0gbmV3IEFycmF5KGNvbHMpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgIGdyaWRbaV0gPSBuZXcgQXJyYXkocm93cylcbiAgfVxuICByZXR1cm4gZ3JpZFxufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5nZXRSYW5kb21JbnQgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbilcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbkhlbHBlcnMucHJvdG90eXBlLmdldFJhbmRvbUl0ZW1zID0gZnVuY3Rpb24gKGFycmF5LCBxdWFudGl0eSkge1xuICBjb25zdCByYW5kb21JdGVtcyA9IFtdXG4gIGZvciAobGV0IGkgPSBxdWFudGl0eTsgaS0tOykge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgYXJyYXkubGVuZ3RoIC0gMSlcbiAgICByYW5kb21JdGVtcy5wdXNoKGFycmF5W3JhbmRvbUluZGV4XSlcbiAgICBhcnJheS5zcGxpY2UocmFuZG9tSW5kZXgsIDEpXG4gIH1cbiAgcmV0dXJuIHJhbmRvbUl0ZW1zXG59XG5cbkhlbHBlcnMucHJvdG90eXBlLnNodWZmbGVBcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKVxuICAgIGNvbnN0IHggPSBhcnJheVtpXVxuICAgIGFycmF5W2ldID0gYXJyYXlbal1cbiAgICBhcnJheVtqXSA9IHhcbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVscGVyc1xuIiwiY29uc3QgS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICB0aGlzLmtleSA9IGtleVxuICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5lbmQgPSBmYWxzZVxuICB0aGlzLmhvbGQgPSBmYWxzZVxuICB0aGlzLmhvbGRUaW1lID0gMFxuICB0aGlzLnN0YXJ0RnJhbWUgPSAwXG4gIHRoaXMuZW5kRnJhbWUgPSAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgS2V5U3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVuYWJsZWQgPSB0cnVlXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLm5vdyA9IDBcbiAgdGhpcy50aGVuID0gMFxuICB0aGlzLmZyYW1lID0gMFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyksIGZhbHNlKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKSwgZmFsc2UpXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbZXZlbnQua2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2V2ZW50LmtleV0uaG9sZCA9IHRydWVcbiAgfVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtldmVudC5rZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbZXZlbnQua2V5XS5ob2xkID0gZmFsc2VcbiAgfVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmdldE9yU2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSBuZXcgSGFybW9ueS5LZXkoa2V5KVxuICB9XG4gIHJldHVybiB0aGlzLmNhY2hlW2tleV1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiB0aGlzLmdldE9yU2V0KGtleSlcbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICB0aGlzLmZyYW1lKytcbiAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlblxuICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAoa2V5LmhvbGQpIHtcbiAgICAgICAga2V5LmhvbGRUaW1lICs9IHRoaXMuZGVsdGFcbiAgICAgICAga2V5LmVuZEZyYW1lID0gLTFcbiAgICAgICAgaWYgKGtleS5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgIGtleS5zdGFydEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkuaG9sZFRpbWUgPSAwXG4gICAgICAgIGtleS5zdGFydEZyYW1lID0gLTFcbiAgICAgICAgaWYgKGtleS5lbmRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICBrZXkuZW5kRnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGtleS5zdGFydCA9IChrZXkuc3RhcnRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICAgIGtleS5lbmQgPSAoa2V5LmVuZEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgIH1cbiAgfVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlTeXN0ZW1cbiIsImNvbnN0IExvb3BTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWNjdW11bGF0b3IgPSAwXG4gIHRoaXMuZGVsdGEgPSAwXG4gIHRoaXMubGFzdFRpbWUgPSAwXG4gIHRoaXMubGFzdFN0ZXAgPSAwXG4gIHRoaXMuZnBzID0gNjBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxuICB0aGlzLnRpbWVzdGVwID0gMTAwMCAvIHRoaXMuZnBzXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLmNvbnRpbnVlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBhdXNlZCA9IGZhbHNlXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBhdXNlZCA9IHRydWVcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICB0aW1lc3RhbXAgPSB0aW1lc3RhbXAgfHwgMFxuICB0aGlzLnRpbWVzdGVwID0gMTAwMCAvIHRoaXMuZnBzXG4gIHRoaXMuYWNjdW11bGF0b3IgKz0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZVxuICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wXG4gIHdoaWxlICghdGhpcy5wYXVzZWQgJiYgdGhpcy5hY2N1bXVsYXRvciA+PSB0aGlzLnRpbWVzdGVwKSB7XG4gICAgdGhpcy5zdGVwKClcbiAgICB0aGlzLmRlbHRhID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0U3RlcFxuICAgIHRoaXMubGFzdFN0ZXAgPSB0aW1lc3RhbXBcbiAgICB0aGlzLmFjY3VtdWxhdG9yIC09IHRoaXMudGltZXN0ZXBcbiAgfVxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucnVuLmJpbmQodGhpcykpXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZnJhbWUrK1xuICB0aGlzLm9uU3RlcCgpXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLm9uU3RlcCA9IGZ1bmN0aW9uICgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IExvb3BTeXN0ZW1cbiIsImNvbnN0IFBvaW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgdGhpcy5ob2xkID0gZmFsc2VcbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMuZW5kID0gZmFsc2VcbiAgdGhpcy5ob2xkVGltZSA9IDBcbiAgdGhpcy5zdGFydEZyYW1lID0gMFxuICB0aGlzLmVuZEZyYW1lID0gMFxuICB0aGlzLmlkID0gMFxuICB0aGlzLnR5cGUgPSBudWxsXG4gIHRoaXMuc3RhcnRYID0gMFxuICB0aGlzLnN0YXJ0WSA9IDBcbiAgdGhpcy54ID0gMFxuICB0aGlzLnkgPSAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFBvaW50ZXJTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMuZGVsdGEgPSAwXG4gIHRoaXMubm93ID0gMFxuICB0aGlzLnRoZW4gPSAwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIHRoaXMuY2FudmFzID0gY2FudmFzXG4gIHRoaXMuZW5hYmxlUG9pbnRlcnMoKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRPclNldCA9IGZ1bmN0aW9uIChwb2ludGVyKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtwb2ludGVyXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW3BvaW50ZXJdID0gbmV3IEhhcm1vbnkuUG9pbnRlcihwb2ludGVyKVxuICB9XG4gIHJldHVybiB0aGlzLmNhY2hlW3BvaW50ZXJdXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwb2ludGVyKSB7XG4gIHJldHVybiB0aGlzLmdldE9yU2V0KHBvaW50ZXIpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmVuYWJsZVBvaW50ZXJzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhbnZhcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJyAvLyBuZWVkZWQgZm9yIG1vYmlsZVxuICB0aGlzLmNhbnZhcy5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVDb250ZXh0TWVudS5iaW5kKHRoaXMpLCBmYWxzZSlcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0UG9pbnRlckJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgbGV0IG91dHB1dCA9IGZhbHNlXG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKHBvaW50ZXIuaWQgPT09IGlkKSB7XG4gICAgICAgIG91dHB1dCA9IHBvaW50ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRJbmFjdGl2ZVBvaW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBvdXRwdXQgPSBmYWxzZVxuICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgY29uc3QgcG9pbnRlciA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChwb2ludGVyLmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgb3V0cHV0ID0gcG9pbnRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcG9pbnRlciA9IHRoaXMuZ2V0UG9pbnRlckJ5SUQoZXZlbnQucG9pbnRlcklkKSB8fCB0aGlzLmdldEluYWN0aXZlUG9pbnRlcigpXG4gIGlmIChwb2ludGVyKSB7XG4gICAgcG9pbnRlci5hY3RpdmUgPSB0cnVlXG4gICAgcG9pbnRlci5pZCA9IGV2ZW50LnBvaW50ZXJJZFxuICAgIHBvaW50ZXIudHlwZSA9IGV2ZW50LnBvaW50ZXJUeXBlIC8vICdtb3VzZScsICdwZW4nLCAndG91Y2gnXG4gICAgcG9pbnRlci5ob2xkID0gdHJ1ZVxuICAgIHBvaW50ZXIuc3RhcnRYID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci5zdGFydFkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICAgIHBvaW50ZXIueCA9IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdFxuICAgIHBvaW50ZXIueSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlck1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpIHx8IHRoaXMuZ2V0SW5hY3RpdmVQb2ludGVyKClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgcG9pbnRlci54ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci55ID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpXG4gIGlmIChwb2ludGVyKSB7XG4gICAgcG9pbnRlci5hY3RpdmUgPSBmYWxzZVxuICAgIHBvaW50ZXIuaG9sZCA9IGZhbHNlXG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlQ29udGV4dE1lbnUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICByZXR1cm4gZmFsc2Vcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgdGhpcy5mcmFtZSsrXG4gICAgdGhpcy5ub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLmRlbHRhID0gdGhpcy5ub3cgLSB0aGlzLnRoZW5cbiAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IHRoaXMuY2FjaGVbaV1cbiAgICAgICAgaWYgKHBvaW50ZXIuaG9sZCkge1xuICAgICAgICAgIHBvaW50ZXIuaG9sZFRpbWUgKz0gdGhpcy5kZWx0YVxuICAgICAgICAgIHBvaW50ZXIuZW5kRnJhbWUgPSAtMVxuICAgICAgICAgIGlmIChwb2ludGVyLnN0YXJ0RnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAgICBwb2ludGVyLnN0YXJ0RnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvaW50ZXIuaG9sZFRpbWUgPSAwXG4gICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5lbmRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuZW5kRnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvaW50ZXIuc3RhcnQgPSAocG9pbnRlci5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAgICBwb2ludGVyLmVuZCA9IChwb2ludGVyLmVuZEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclN5c3RlbVxuIiwiY29uc3QgU3ByaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICBpbWFnZTogbnVsbCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBzb3VyY2VYOiAwLFxuICAgIHNvdXJjZVk6IDAsXG4gICAgc291cmNlV2lkdGg6IDAsXG4gICAgc291cmNlSGVpZ2h0OiAwLFxuICAgIGFuY2hvclg6IDAuNSxcbiAgICBhbmNob3JZOiAwLjUsXG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9LCBwYXJhbXMpXG5cbiAgdGhpcy5lbnRpdHkgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmltYWdlID0gY29uZmlnLmltYWdlXG4gIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0XG4gIHRoaXMuc291cmNlWCA9IGNvbmZpZy5zb3VyY2VYXG4gIHRoaXMuc291cmNlWSA9IGNvbmZpZy5zb3VyY2VZXG4gIHRoaXMuc291cmNlV2lkdGggPSBjb25maWcuc291cmNlV2lkdGhcbiAgdGhpcy5zb3VyY2VIZWlnaHQgPSBjb25maWcuc291cmNlSGVpZ2h0XG4gIHRoaXMuYW5jaG9yWCA9IGNvbmZpZy5hbmNob3JYXG4gIHRoaXMuYW5jaG9yWSA9IGNvbmZpZy5hbmNob3JZXG4gIHRoaXMudmlzaWJsZSA9IGNvbmZpZy52aXNpYmxlXG59XG5cblNwcml0ZUNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50TmFtZSA9ICdzcHJpdGUnXG5cblNwcml0ZUNvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSBJbWFnZSAqL1xuXG5jb25zdCBSZW5kZXJTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIHRoaXMuY2FudmFzID0gY2FudmFzXG4gIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUubG9hZEltYWdlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhY2hlW2NvbmZpZy5uYW1lXSA9IGltYWdlXG4gICAgICByZXNvbHZlKGltYWdlKVxuICAgIH1cbiAgICBpbWFnZS5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGltYWdlKSB7XG4gIHJldHVybiB0aGlzLmNhY2hlW2ltYWdlXVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYXIoKVxuICAvLyB0aGlzLmNvbnRleHQuc2F2ZSgpXG5cbiAgLy8gdHJhbnNsYXRlIHRvIGNhbWVyYSBjZW50ZXJcbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAodGhpcy5jYW1lcmEud2lkdGggLyAyKSxcbiAgLy8gICAodGhpcy5jYW1lcmEuaGVpZ2h0IC8gMilcbiAgLy8gKVxuXG4gIC8vIHJvdGF0ZVxuICAvLyB0aGlzLmNvbnRleHQucm90YXRlKHRoaXMuY2FtZXJhLmFuZ2xlKVxuXG4gIC8vIHNjYWxlXG4gIC8vIHRoaXMuY29udGV4dC5zY2FsZSh0aGlzLmNhbWVyYS56b29tLCB0aGlzLmNhbWVyYS56b29tKVxuXG4gIC8vIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZWQnXG4gIC8vIHRoaXMuY2FudmFzLmNpcmNsZSgwLCAwLCAxMClcblxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgIC0odGhpcy5jYW1lcmEud2lkdGggLyAyKSxcbiAgLy8gICAtKHRoaXMuY2FtZXJhLmhlaWdodCAvIDIpXG4gIC8vIClcblxuICAvLyB0cmFuc2xhdGVcbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAtdGhpcy5jYW1lcmEucG9zaXRpb24ueCxcbiAgLy8gICAtdGhpcy5jYW1lcmEucG9zaXRpb24ueVxuICAvLyApXG5cbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cblxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbXBvbmVudC52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKClcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBjb21wb25lbnQuZW50aXR5LnggKyBjb21wb25lbnQud2lkdGggKiAwLjUgKiBjb21wb25lbnQuZW50aXR5LnNjYWxlIC0gY29tcG9uZW50LndpZHRoICogY29tcG9uZW50LmFuY2hvclggKiBjb21wb25lbnQuZW50aXR5LnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkueSArIGNvbXBvbmVudC5oZWlnaHQgKiAwLjUgKiBjb21wb25lbnQuZW50aXR5LnNjYWxlIC0gY29tcG9uZW50LmhlaWdodCAqIGNvbXBvbmVudC5hbmNob3JZICogY29tcG9uZW50LmVudGl0eS5zY2FsZVxuICAgICAgICApXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoY29tcG9uZW50LmVudGl0eS5hbmdsZSlcbiAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKFxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdHkuc2NhbGUsXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0eS5zY2FsZVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5zb3VyY2VXaWR0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VXaWR0aCA9IGNvbXBvbmVudC5pbWFnZS53aWR0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5zb3VyY2VIZWlnaHQgPT09IDApIHtcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlSGVpZ2h0ID0gY29tcG9uZW50LmltYWdlLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBjb21wb25lbnQuaW1hZ2UsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVgsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVksXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVdpZHRoLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VIZWlnaHQsXG4gICAgICAgICAgY29tcG9uZW50LndpZHRoICogLTAuNSwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQuaGVpZ2h0ICogLTAuNSwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQud2lkdGgsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LmhlaWdodCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICApXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuYWRkU3ByaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5TcHJpdGVDb21wb25lbnQoY29uZmlnKVxuICB0aGlzLmNvbXBvbmVudHMudW5zaGlmdChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuZmlsbFRleHQoY29uZmlnLnRleHQsIGNvbmZpZy54LCBjb25maWcueSlcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5jaXJjbGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICB0aGlzLmNvbnRleHQuYXJjKGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmxpbmUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICB0aGlzLmNvbnRleHQubW92ZVRvKGNvbmZpZy5heCwgY29uZmlnLmF5KVxuICB0aGlzLmNvbnRleHQubGluZVRvKGNvbmZpZy5ieCwgY29uZmlnLmJ5KVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5yZWN0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQucmVjdChjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodClcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN5c3RlbVxuIiwiY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHRoaXMubWV0aG9kcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHByZWxvYWQ6ICgpID0+IHt9LFxuICAgIGNyZWF0ZTogKCkgPT4ge30sXG4gICAgdXBkYXRlOiAoKSA9PiB7fSxcbiAgICBkcmF3OiAoKSA9PiB7fVxuICB9LCBwYXJhbXMpXG59XG5cblNjZW5lLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLnByZWxvYWQoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLmNyZWF0ZShlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMudXBkYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuZHJhdyhlbmdpbmUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lXG4iLCJjb25zdCBTY2VuZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB0aGlzLnJlcXVlc3RlZCA9IG51bGxcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUuc3dpdGNoID0gZnVuY3Rpb24gKHNjZW5lKSB7XG4gIHRoaXMucmVxdWVzdGVkID0gc2NlbmVcbiAgdGhpcy5yZXF1ZXN0U3dpdGNoKClcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RQcmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gdHJ1ZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSB0cnVlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IHRydWVcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0RHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSB0cnVlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0U3dpdGNoID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVTeXN0ZW1cbiIsImNvbnN0IFNjcmlwdENvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMubXVzdFN0YXJ0ID0gdHJ1ZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm1ldGhvZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBzdGFydDogKCkgPT4ge30sXG4gICAgdXBkYXRlOiAoKSA9PiB7fVxuICB9LCBwYXJhbXMpXG59XG5cblNjcmlwdENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50TmFtZSA9ICdzY3JpcHQnXG5cblNjcmlwdENvbXBvbmVudC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHRoaXMubXVzdFN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gdHJ1ZVxuICByZXR1cm4gdGhpcy5tZXRob2RzLnN0YXJ0KGVuZ2luZSlcbn1cblxuU2NyaXB0Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMudXBkYXRlKGVuZ2luZSlcbn1cblxuU2NyaXB0Q29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFNjcmlwdFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuU2NyaXB0U3lzdGVtLnByb3RvdHlwZS5hZGRTY3JpcHRDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNjcmlwdENvbXBvbmVudChjb25maWcpXG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5TY3JpcHRTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTdGFydCkge1xuICAgICAgY29tcG9uZW50LnN0YXJ0KGVuZ2luZSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFVwZGF0ZSkge1xuICAgICAgY29tcG9uZW50LnVwZGF0ZShlbmdpbmUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFN5c3RlbVxuIiwiY29uc3QgU3RhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHBhcmFtcy5jdXJyZW50XG4gIHRoaXMuY3VycmVudCA9IG51bGxcbiAgdGhpcy5zdGF0ZXMgPSBwYXJhbXMuc3RhdGVzXG59XG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnROYW1lID0gJ3N0YXRlJ1xuXG5TdGF0ZUNvbXBvbmVudC5wcm90b3R5cGUuc3dpdGNoID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzdGF0ZVxufVxuXG5TdGF0ZUNvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFN0YXRlU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxufVxuXG5TdGF0ZVN5c3RlbS5wcm90b3R5cGUuYWRkU3RhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlN0YXRlQ29tcG9uZW50KGNvbmZpZylcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5jdXJyZW50ICYmIGNvbXBvbmVudC5tdXN0U3dpdGNoKSB7XG4gICAgICBpZiAoY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZXhpdCkge1xuICAgICAgICBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KGVuZ2luZSwgY29tcG9uZW50LmVudGl0eSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0U3dpdGNoKSB7XG4gICAgICBjb21wb25lbnQuY3VycmVudCA9IGNvbXBvbmVudC5yZXF1ZXN0ZWRcbiAgICAgIGlmIChjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5lbnRlcikge1xuICAgICAgICBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5lbnRlcihlbmdpbmUsIGNvbXBvbmVudC5lbnRpdHkpXG4gICAgICB9XG4gICAgICBjb21wb25lbnQubXVzdFN3aXRjaCA9IGZhbHNlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQuY3VycmVudCAmJiBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS51cGRhdGUpIHtcbiAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLnVwZGF0ZShlbmdpbmUsIGNvbXBvbmVudC5lbnRpdHkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlU3lzdGVtXG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBFbnRpdHlTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSBbXVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgZW50aXR5ID0gbmV3IEhhcm1vbnkuRW50aXR5KGNvbmZpZylcbiAgdGhpcy5jYWNoZS5wdXNoKGVudGl0eSlcbiAgcmV0dXJuIGVudGl0eVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY2FjaGUubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgZW50aXR5ID0gdGhpcy5jYWNoZVtpXVxuICAgIGlmIChlbnRpdHkubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY2FjaGUuc3BsaWNlKGksIDEpXG4gICAgfVxuICB9XG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY2FjaGUubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgZW50aXR5ID0gdGhpcy5jYWNoZVtpXVxuICAgIGVudGl0eS5kZXN0cm95KClcbiAgfVxuICB0aGlzLmNhY2hlID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5U3lzdGVtXG4iLCIvKiBnbG9iYWwgQm94MkQgSGFybW9ueSAqL1xuXG5jb25zdCBQaHlzaWNzU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICBjb25zdCBCMldvcmxkID0gQm94MkQuRHluYW1pY3MuYjJXb3JsZFxuICBjb25zdCBCMlZlYzIgPSBCb3gyRC5Db21tb24uTWF0aC5iMlZlYzJcbiAgY29uc3QgQjJEZWJ1Z0RyYXcgPSBCb3gyRC5EeW5hbWljcy5iMkRlYnVnRHJhd1xuICBjb25zdCBCMkNvbnRhY3RMaXN0ZW5lciA9IEJveDJELkR5bmFtaWNzLmIyQ29udGFjdExpc3RlbmVyXG5cbiAgdGhpcy53b3JsZCA9IG5ldyBCMldvcmxkKG5ldyBCMlZlYzIoMCwgMCksIHRydWUpXG4gIHRoaXMuZnBzID0gNjBcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5zY2FsZSA9IDEwMFxuICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICB0aGlzLmNvbnRhY3RzID0gbmV3IEIyQ29udGFjdExpc3RlbmVyKClcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGFjdHNcblxuICB0aGlzLndvcmxkLlNldENvbnRhY3RMaXN0ZW5lcih0aGlzLmNvbnRhY3RzKVxuXG4gIHRoaXMuY29udGFjdHMuQmVnaW5Db250YWN0ID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBjb21wb25lbnRBLm9uQ29udGFjdEJlZ2luKGVudGl0eUEsIGVudGl0eUIpXG4gICAgY29tcG9uZW50Qi5vbkNvbnRhY3RCZWdpbihlbnRpdHlCLCBlbnRpdHlBKVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5FbmRDb250YWN0ID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBjb21wb25lbnRBLm9uQ29udGFjdEVuZChlbnRpdHlBLCBlbnRpdHlCKVxuICAgIGNvbXBvbmVudEIub25Db250YWN0RW5kKGVudGl0eUIsIGVudGl0eUEpXG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLlByZVNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5lbnRpdHlcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5lbnRpdHlcbiAgICBjb21wb25lbnRBLm9uQ29udGFjdFByZVNvbHZlKGVudGl0eUEsIGVudGl0eUIpXG4gICAgY29tcG9uZW50Qi5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlCLCBlbnRpdHlBKVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5Qb3N0U29sdmUgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLmVudGl0eVxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLmVudGl0eVxuICAgIGNvbXBvbmVudEEub25Db250YWN0UG9zdFNvbHZlKGVudGl0eUEsIGVudGl0eUIpXG4gICAgY29tcG9uZW50Qi5vbkNvbnRhY3RQb3N0U29sdmUoZW50aXR5QiwgZW50aXR5QSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWJ1Z1xuXG4gIGNvbnN0IGRlYnVnRHJhdyA9IG5ldyBCMkRlYnVnRHJhdyh0aGlzLmNvbnRleHQpXG4gIGRlYnVnRHJhdy5TZXRTcHJpdGUoY2FudmFzLmdldENvbnRleHQoJzJkJykpXG4gIGRlYnVnRHJhdy5TZXREcmF3U2NhbGUodGhpcy5zY2FsZSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGaWxsQWxwaGEoMC41KVxuICBkZWJ1Z0RyYXcuU2V0RmxhZ3MoQjJEZWJ1Z0RyYXcuZV9zaGFwZUJpdClcbiAgZGVidWdEcmF3LkFwcGVuZEZsYWdzKEIyRGVidWdEcmF3LmVfam9pbnRCaXQpXG4gIHRoaXMud29ybGQuU2V0RGVidWdEcmF3KGRlYnVnRHJhdylcbiAgdGhpcy53b3JsZC5tX2RlYnVnRHJhdy5tX3Nwcml0ZS5ncmFwaGljcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5zZXRHcmF2aXR5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLndvcmxkLlNldEdyYXZpdHkoY29uZmlnKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5kcmF3RGVidWdEYXRhID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndvcmxkLkRyYXdEZWJ1Z0RhdGEoKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5hZGRQaHlzaWNzQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5QaHlzaWNzQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53b3JsZC5TdGVwKDEgLyB0aGlzLmZwcywgOCwgMylcbiAgdGhpcy53b3JsZC5DbGVhckZvcmNlcygpXG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNvbXBvbmVudC5nZXRQb3NpdGlvbigpXG4gICAgICBjb21wb25lbnQuZW50aXR5LnggPSBwb3NpdGlvbi54XG4gICAgICBjb21wb25lbnQuZW50aXR5LnkgPSBwb3NpdGlvbi55XG4gICAgICBjb21wb25lbnQuZW50aXR5LmFuZ2xlID0gY29tcG9uZW50LmdldEFuZ2xlKClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc1N5c3RlbVxuIiwiLyogZ2xvYmFsIEJveDJEICovXG5cbmNvbnN0IFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogNTAsXG4gICAgeTogNTAsXG4gICAgdHlwZTogJ2R5bmFtaWMnLFxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBhbGxvd1NsZWVwOiB0cnVlLFxuICAgIGF3YWtlOiB0cnVlLFxuICAgIGJ1bGxldDogZmFsc2UsXG4gICAgZml4ZWRSb3RhdGlvbjogZmFsc2UsXG4gICAgYW5nbGU6IDAsXG4gICAgYW5ndWxhckRhbXBpbmc6IDAsXG4gICAgYW5ndWxhclZlbG9jaXR5OiAwLFxuICAgIGxpbmVhckRhbXBpbmc6IDAsXG4gICAgbGluZWFyVmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxuICAgIHVzZXJEYXRhOiB7fVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuXG4gIHRoaXMuZW50aXR5ID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5ib2R5ID0gbnVsbFxuICB0aGlzLnN5c3RlbSA9IHN5c3RlbVxuICB0aGlzLmZpeHR1cmVzID0gW11cbiAgdGhpcy50eXBlID0gY29uZmlnLnR5cGVcblxuICBjb25zdCBCMkJvZHlEZWYgPSBCb3gyRC5EeW5hbWljcy5iMkJvZHlEZWZcbiAgY29uc3QgQjJCb2R5ID0gQm94MkQuRHluYW1pY3MuYjJCb2R5XG5cbiAgY29uc3QgYm9keURlZiA9IG5ldyBCMkJvZHlEZWYoKVxuICBib2R5RGVmLnBvc2l0aW9uLnggPSBjb25maWcueCAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIGJvZHlEZWYucG9zaXRpb24ueSA9IGNvbmZpZy55IC8gdGhpcy5zeXN0ZW0uc2NhbGVcbiAgYm9keURlZi5hY3RpdmUgPSBjb25maWcuYWN0aXZlXG4gIGJvZHlEZWYuYWxsb3dTbGVlcCA9IGNvbmZpZy5hbGxvd1NsZWVwXG4gIGJvZHlEZWYuYXdha2UgPSBjb25maWcuYXdha2VcbiAgYm9keURlZi5idWxsZXQgPSBjb25maWcuYnVsbGV0XG4gIGJvZHlEZWYuZml4ZWRSb3RhdGlvbiA9IGNvbmZpZy5maXhlZFJvdGF0aW9uXG4gIGJvZHlEZWYuYW5nbGUgPSBjb25maWcuYW5nbGVcbiAgYm9keURlZi5hbmd1bGFyRGFtcGluZyA9IGNvbmZpZy5hbmd1bGFyRGFtcGluZ1xuICBib2R5RGVmLmFuZ3VsYXJWZWxvY2l0eSA9IGNvbmZpZy5hbmd1bGFyVmVsb2NpdHlcbiAgYm9keURlZi5saW5lYXJEYW1waW5nID0gY29uZmlnLmxpbmVhckRhbXBpbmdcbiAgYm9keURlZi5saW5lYXJWZWxvY2l0eSA9IGNvbmZpZy5saW5lYXJWZWxvY2l0eVxuICBib2R5RGVmLnVzZXJEYXRhID0gY29uZmlnLnVzZXJEYXRhXG5cbiAgaWYgKHRoaXMudHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfc3RhdGljQm9keVxuICB9XG5cbiAgaWYgKHRoaXMudHlwZSA9PT0gJ2R5bmFtaWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2R5bmFtaWNCb2R5XG4gIH1cblxuICBpZiAodGhpcy50eXBlID09PSAna2luZW1hdGljJykge1xuICAgIGJvZHlEZWYudHlwZSA9IEIyQm9keS5iMl9raW5lbWF0aWNCb2R5XG4gIH1cblxuICB0aGlzLmJvZHkgPSB0aGlzLnN5c3RlbS53b3JsZC5DcmVhdGVCb2R5KGJvZHlEZWYpXG4gIHRoaXMuYm9keS5hY3RpdmUgPSB0cnVlXG4gIHRoaXMuYm9keS5jb21wb25lbnQgPSB0aGlzXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudE5hbWUgPSAncGh5c2ljcydcblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuc2V0TGluZWFyVmVsb2NpdHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuYm9keS5TZXRBd2FrZSh0cnVlKVxuICB0aGlzLmJvZHkuU2V0TGluZWFyVmVsb2NpdHkoe1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zeXN0ZW0uc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnN5c3RlbS5zY2FsZVxuICB9KVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZpeHR1cmVzLmZvckVhY2goKGZpeHR1cmUpID0+IHtcbiAgICB0aGlzLmJvZHkuRGVzdHJveUZpeHR1cmUoZml4dHVyZSlcbiAgfSlcbiAgdGhpcy5zeXN0ZW0ud29ybGQuRGVzdHJveUJvZHkodGhpcy5ib2R5KVxuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmJvZHkuR2V0UG9zaXRpb24oKVxuICByZXR1cm4ge1xuICAgIHg6IHBvc2l0aW9uLnggKiB0aGlzLnN5c3RlbS5zY2FsZSxcbiAgICB5OiBwb3NpdGlvbi55ICogdGhpcy5zeXN0ZW0uc2NhbGVcbiAgfVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRBbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYm9keS5HZXRBbmdsZSgpXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmJvZHkuU2V0UG9zaXRpb24oe1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zeXN0ZW0uc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnN5c3RlbS5zY2FsZVxuICB9KVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5hcHBseUZvcmNlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmJvZHkuQXBwbHlGb3JjZShjb25maWcsIHRoaXMuYm9keS5HZXRXb3JsZENlbnRlcigpKVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRGaXh0dXJlRGVmID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBCMkZpeHR1cmVEZWYgPSBCb3gyRC5EeW5hbWljcy5iMkZpeHR1cmVEZWZcbiAgY29uc3QgZml4RGVmID0gbmV3IEIyRml4dHVyZURlZigpXG4gIGZpeERlZi5kZW5zaXR5ID0gY29uZmlnLmRlbnNpdHlcbiAgZml4RGVmLmZyaWN0aW9uID0gY29uZmlnLmZyaWN0aW9uXG4gIGZpeERlZi5yZXN0aXR1dGlvbiA9IGNvbmZpZy5yZXN0aXR1dGlvblxuICBmaXhEZWYuaXNTZW5zb3IgPSBjb25maWcuaXNTZW5zb3JcbiAgcmV0dXJuIGZpeERlZlxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5hZGRDaXJjbGUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICByYWRpdXM6IDI1LFxuICAgIGRlbnNpdHk6IDEsXG4gICAgZnJpY3Rpb246IDAuNSxcbiAgICByZXN0aXR1dGlvbjogMC4zLFxuICAgIGlzU2Vuc29yOiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHBhcmFtcylcbiAgY29uc3QgZml4dHVyZURlZmluaXRpb24gPSB0aGlzLmdldEZpeHR1cmVEZWYoY29uZmlnKVxuICBjb25zdCBCMkNpcmNsZVNoYXBlID0gQm94MkQuQ29sbGlzaW9uLlNoYXBlcy5iMkNpcmNsZVNoYXBlXG4gIGNvbnN0IGZpeHR1cmVEZWYgPSBmaXh0dXJlRGVmaW5pdGlvblxuICBmaXh0dXJlRGVmLnNoYXBlID0gbmV3IEIyQ2lyY2xlU2hhcGUoY29uZmlnLnJhZGl1cyAvIHRoaXMuc3lzdGVtLnNjYWxlKVxuICBmaXh0dXJlRGVmLnNoYXBlLm1fcCA9IHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc3lzdGVtLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zeXN0ZW0uc2NhbGVcbiAgfVxuICBjb25zdCBmaXh0dXJlID0gdGhpcy5ib2R5LkNyZWF0ZUZpeHR1cmUoZml4dHVyZURlZilcbiAgdGhpcy5maXh0dXJlcy5wdXNoKGZpeHR1cmUpXG4gIHJldHVybiBmaXh0dXJlXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLm9uQ29udGFjdEJlZ2luID0gZnVuY3Rpb24gKG1lLCBvdGhlcikge31cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUub25Db250YWN0RW5kID0gZnVuY3Rpb24gKG1lLCBvdGhlcikge31cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUub25Db250YWN0UHJlU29sdmUgPSBmdW5jdGlvbiAobWUsIG90aGVyKSB7fVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5vbkNvbnRhY3RQb3N0U29sdmUgPSBmdW5jdGlvbiAobWUsIG90aGVyKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzQ29tcG9uZW50XG4iLCJpbXBvcnQgQXVkaW9TeXN0ZW0gZnJvbSAnLi9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtJ1xuaW1wb3J0IEF1ZGlvQ29tcG9uZW50IGZyb20gJy4vYXVkaW8tc3lzdGVtL2F1ZGlvLWNvbXBvbmVudCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXIvbG9hZGVyJ1xuaW1wb3J0IEVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5LXN5c3RlbS9lbnRpdHknXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMvaGVscGVycydcbmltcG9ydCBLZXkgZnJvbSAnLi9rZXktc3lzdGVtL2tleSdcbmltcG9ydCBLZXlTeXN0ZW0gZnJvbSAnLi9rZXktc3lzdGVtL2tleS1zeXN0ZW0nXG5pbXBvcnQgTG9vcFN5c3RlbSBmcm9tICcuL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtJ1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi9wb2ludGVyLXN5c3RlbS9wb2ludGVyJ1xuaW1wb3J0IFBvaW50ZXJTeXN0ZW0gZnJvbSAnLi9wb2ludGVyLXN5c3RlbS9wb2ludGVyLXN5c3RlbSdcbmltcG9ydCBTcHJpdGVDb21wb25lbnQgZnJvbSAnLi9yZW5kZXItc3lzdGVtL3Nwcml0ZS1jb21wb25lbnQnXG5pbXBvcnQgUmVuZGVyU3lzdGVtIGZyb20gJy4vcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtJ1xuaW1wb3J0IFNjZW5lIGZyb20gJy4vc2NlbmUtc3lzdGVtL3NjZW5lJ1xuaW1wb3J0IFNjZW5lU3lzdGVtIGZyb20gJy4vc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbSdcbmltcG9ydCBTY3JpcHRDb21wb25lbnQgZnJvbSAnLi9zY3JpcHQtc3lzdGVtL3NjcmlwdC1jb21wb25lbnQnXG5pbXBvcnQgU2NyaXB0U3lzdGVtIGZyb20gJy4vc2NyaXB0LXN5c3RlbS9zY3JpcHQtc3lzdGVtJ1xuaW1wb3J0IFN0YXRlQ29tcG9uZW50IGZyb20gJy4vc3RhdGUtc3lzdGVtL3N0YXRlLWNvbXBvbmVudCdcbmltcG9ydCBTdGF0ZVN5c3RlbSBmcm9tICcuL3N0YXRlLXN5c3RlbS9zdGF0ZS1zeXN0ZW0nXG5pbXBvcnQgRW50aXR5U3lzdGVtIGZyb20gJy4vZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtJ1xuaW1wb3J0IFBoeXNpY3NTeXN0ZW0gZnJvbSAnLi9waHlzaWNzLXN5c3RlbS9waHlzaWNzLXN5c3RlbSdcbmltcG9ydCBQaHlzaWNzQ29tcG9uZW50IGZyb20gJy4vcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1jb21wb25lbnQnXG5cbmNvbnN0IEhhcm1vbnkgPSB7XG4gIEF1ZGlvU3lzdGVtOiBBdWRpb1N5c3RlbSxcbiAgQXVkaW9Db21wb25lbnQ6IEF1ZGlvQ29tcG9uZW50LFxuICBMb2FkZXI6IExvYWRlcixcbiAgRW5naW5lOiBFbmdpbmUsXG4gIEVudGl0eTogRW50aXR5LFxuICBFbnRpdHlTeXN0ZW06IEVudGl0eVN5c3RlbSxcbiAgSGVscGVyczogSGVscGVycyxcbiAgS2V5OiBLZXksXG4gIEtleVN5c3RlbTogS2V5U3lzdGVtLFxuICBMb29wU3lzdGVtOiBMb29wU3lzdGVtLFxuICBQaHlzaWNzQ29tcG9uZW50OiBQaHlzaWNzQ29tcG9uZW50LFxuICBQaHlzaWNzU3lzdGVtOiBQaHlzaWNzU3lzdGVtLFxuICBQb2ludGVyOiBQb2ludGVyLFxuICBQb2ludGVyU3lzdGVtOiBQb2ludGVyU3lzdGVtLFxuICBTcHJpdGVDb21wb25lbnQ6IFNwcml0ZUNvbXBvbmVudCxcbiAgUmVuZGVyU3lzdGVtOiBSZW5kZXJTeXN0ZW0sXG4gIFNjZW5lOiBTY2VuZSxcbiAgU2NlbmVTeXN0ZW06IFNjZW5lU3lzdGVtLFxuICBTY3JpcHRDb21wb25lbnQ6IFNjcmlwdENvbXBvbmVudCxcbiAgU2NyaXB0U3lzdGVtOiBTY3JpcHRTeXN0ZW0sXG4gIFN0YXRlQ29tcG9uZW50OiBTdGF0ZUNvbXBvbmVudCxcbiAgU3RhdGVTeXN0ZW06IFN0YXRlU3lzdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhcm1vbnlcbiJdLCJzb3VyY2VSb290IjoiIn0=