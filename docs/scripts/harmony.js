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
  this.clips = {};
  this.master.connect(this.context.destination);
};

AudioSystem.prototype.play = function (component) {
  component.mustPlay = false;
  var clip = component.clipName;
  var source = this.context.createBufferSource();
  var gain = this.context.createGain();
  component.clipRef = source;
  source.buffer = this.clips[clip];
  source.connect(gain);
  gain.connect(this.master);
  gain.gain.value = component.volume;
  source.start();
};

AudioSystem.prototype.stop = function (component) {
  component.mustStop = false;
  component.clipRef.stop();
};

AudioSystem.prototype.addAudioSourceComponent = function (config) {
  var component = new Harmony.AudioSourceComponent(config, this);
  this.components.push(component);
  return component;
};

AudioSystem.prototype.loadClip = function (config) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    var xhr = new window.XMLHttpRequest();
    var AudioContext = new (window.AudioContext || window.webkitAudioContext)();
    xhr.open('GET', config.url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function () {
      AudioContext.decodeAudioData(xhr.response, function (buffer) {
        _this.clips[config.name] = buffer;
        resolve(buffer);
      }, function (reason) {
        reject(reason);
      });
    };

    xhr.onerror = function (reason) {
      reject(reason);
    };

    xhr.send();
  });
};

AudioSystem.prototype.update = function () {
  if (this.context.state === 'suspended') {
    this.context.resume();
  }

  for (var i = this.components.length; i--;) {
    var component = this.components[i];

    if (component.mustDestroy) {
      this.components.splice(i, 1);
      continue;
    }

    if (component.mustStop) {
      this.stop(component);
      continue;
    }

    if (component.mustPlay) {
      this.play(component);
    }
  }
};

/* harmony default export */ var audio_system = (AudioSystem);
// CONCATENATED MODULE: ./src/audio-system/audio-source-component.js
var AudioSourceComponent = function AudioSourceComponent(params) {
  var config = Object.assign({
    clipRef: null,
    mustPlay: false,
    mustStop: false,
    clipName: 'none',
    volume: 1
  }, params);
  this.clipRef = config.clipRef;
  this.mustPlay = config.mustPlay;
  this.mustStop = config.mustStop;
  this.clipName = config.clipName;
  this.volume = config.volume;
  this.mustDestroy = false;
};

AudioSourceComponent.prototype.name = 'audio';

AudioSourceComponent.prototype.play = function (clipName) {
  if (clipName) {
    this.clipName = clipName;
  }

  this.mustPlay = true;
};

AudioSourceComponent.prototype.stop = function () {
  this.mustStop = true;
};

AudioSourceComponent.prototype.destroy = function () {
  this.mustDestroy = true;
};

/* harmony default export */ var audio_source_component = (AudioSourceComponent);
// CONCATENATED MODULE: ./src/assets-system/assets-system.js
/* global Image Audio */
var AssetsSystem = function AssetsSystem() {};

AssetsSystem.prototype.addImage = function (config) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function (reason) {
      reject(reason);
    };

    image.src = config.url;
  });
};

AssetsSystem.prototype.addAudio = function (config) {
  return new Promise(function (resolve, reject) {
    var audio = new Audio();

    audio.oncanplaythrough = function () {
      resolve(audio);
      audio.oncanplaythrough = null;
    };

    audio.onerror = function (reason) {
      reject(reason);
    };

    audio.src = config.url;
  });
};

AssetsSystem.prototype.addAudioBuffer = function (config) {
  return new Promise(function (resolve, reject) {
    var xhr = new window.XMLHttpRequest();
    var AudioContext = new (window.AudioContext || window.webkitAudioContext)();
    xhr.open('GET', config.url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function () {
      AudioContext.decodeAudioData(xhr.response, function (buffer) {
        resolve(buffer);
      }, function (reason) {
        reject(reason);
      });
    };

    xhr.onerror = function (reason) {
      reject(reason);
    };

    xhr.send();
  });
};

AssetsSystem.prototype.addJSON = function (config) {
  return new Promise(function (resolve, reject) {
    var xhr = new window.XMLHttpRequest();
    xhr.open('GET', config.url, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      }
    };

    xhr.onerror = function (reason) {
      reject(reason);
    };

    xhr.send();
  });
};

/* harmony default export */ var assets_system = (AssetsSystem);
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

  // core
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
            if (!_this.scene.current) {
              _context.next = 9;
              break;
            }

            if (!_this.scene.mustCreate) {
              _context.next = 7;
              break;
            }

            _this.loop.pause();

            _this.scene.requestUpdate();

            _context.next = 6;
            return _this.scene.current.create(_this);

          case 6:
            _this.loop["continue"]();

          case 7:
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

          case 9:
            if (_this.scene.mustSwitch) {
              _this.entities.destroy();

              _this.pointers.destroy();

              _this.keys.destroy();

              _this.scene.current = _this.scene.requested;

              _this.scene.requestCreate();
            }

          case 10:
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
var Entity = function Entity(tag) {
  this.mustDestroy = false;
  this.components = [];
  this.tag = tag || 'none';
};

Entity.prototype.addComponent = function (component) {
  component.owner = this;
  this[component.name] = component;
  this.components.push(component);
};

Entity.prototype.destroy = function () {
  this.components.forEach(function (component) {
    component.destroy();
  });
  this.mustDestroy = true;
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
  this.owner = null;
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

SpriteComponent.prototype.name = 'sprite';

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
        this.context.translate(component.owner.transform.x + component.width * 0.5 * component.owner.transform.scale - component.width * component.anchorX * component.owner.transform.scale, component.owner.transform.y + component.height * 0.5 * component.owner.transform.scale - component.height * component.anchorY * component.owner.transform.scale);
        this.context.rotate(component.owner.transform.angle);
        this.context.scale(component.owner.transform.scale, component.owner.transform.scale);

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
    create: function create() {},
    update: function update() {},
    draw: function draw() {}
  }, params);
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
  this.mustCreate = false;
  this.mustUpdate = false;
  this.mustDraw = false;
  this.mustSwitch = false;
};

SceneSystem.prototype["switch"] = function (scene) {
  this.requested = scene;
  this.requestSwitch();
};

SceneSystem.prototype.requestCreate = function () {
  this.mustCreate = true;
  this.mustUpdate = false;
  this.mustDraw = false;
  this.mustSwitch = false;
};

SceneSystem.prototype.requestUpdate = function () {
  this.mustCreate = false;
  this.mustUpdate = true;
  this.mustDraw = false;
  this.mustSwitch = false;
};

SceneSystem.prototype.requestDraw = function () {
  this.mustCreate = false;
  this.mustUpdate = false;
  this.mustDraw = true;
  this.mustSwitch = false;
};

SceneSystem.prototype.requestSwitch = function () {
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

ScriptComponent.prototype.name = 'script';

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
  this.owner = null;
  this.mustDestroy = false;
  this.mustSwitch = true;
  this.requested = params.current;
  this.current = null;
  this.states = params.states;
};

StateComponent.prototype.name = 'state';

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
        component.states[component.current].exit(engine, component.owner);
      }
    }

    if (component.mustSwitch) {
      component.current = component.requested;

      if (component.states[component.current].enter) {
        component.states[component.current].enter(engine, component.owner);
      }

      component.mustSwitch = false;
    }

    if (component.current && component.states[component.current].update) {
      component.states[component.current].update(engine, component.owner);
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
  this.owner = null;
  this.mustDestroy = false;
  this.x = config.x;
  this.y = config.y;
  this.angle = config.angle;
  this.scale = config.scale;
};

TransformComponent.prototype.name = 'transform';

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
    var entityA = componentA.owner;
    var entityB = componentB.owner;
    componentA.onContactBegin(entityA, entityB);
    componentB.onContactBegin(entityB, entityA);
  };

  this.contacts.EndContact = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().component;
    var componentB = contact.GetFixtureB().GetBody().component;
    var entityA = componentA.owner;
    var entityB = componentB.owner;
    componentA.onContactEnd(entityA, entityB);
    componentB.onContactEnd(entityB, entityA);
  };

  this.contacts.PreSolve = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().component;
    var componentB = contact.GetFixtureB().GetBody().component;
    var entityA = componentA.owner;
    var entityB = componentB.owner;
    componentA.onContactPreSolve(entityA, entityB);
    componentB.onContactPreSolve(entityB, entityA);
  };

  this.contacts.PostSolve = function (contact) {
    var componentA = contact.GetFixtureA().GetBody().component;
    var componentB = contact.GetFixtureB().GetBody().component;
    var entityA = componentA.owner;
    var entityB = componentB.owner;
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
      component.owner.transform.x = position.x;
      component.owner.transform.y = position.y;
      component.owner.transform.angle = component.getAngle();
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
  this.owner = null;
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

PhysicsComponent.prototype.name = 'physics';

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
  AudioSourceComponent: audio_source_component,
  AssetsSystem: assets_system,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLXNvdXJjZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hc3NldHMtc3lzdGVtL2Fzc2V0cy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2tleS1zeXN0ZW0va2V5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcG9pbnRlci1zeXN0ZW0vcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvdHJhbnNmb3JtLXN5c3RlbS90cmFuc2Zvcm0tY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvdHJhbnNmb3JtLXN5c3RlbS90cmFuc2Zvcm0tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2hhcm1vbnkuanMiXSwibmFtZXMiOlsiQXVkaW9TeXN0ZW0iLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb250ZXh0IiwibWFzdGVyIiwiY3JlYXRlR2FpbiIsImNvbXBvbmVudHMiLCJjbGlwcyIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInByb3RvdHlwZSIsInBsYXkiLCJjb21wb25lbnQiLCJtdXN0UGxheSIsImNsaXAiLCJjbGlwTmFtZSIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImdhaW4iLCJjbGlwUmVmIiwiYnVmZmVyIiwidmFsdWUiLCJ2b2x1bWUiLCJzdGFydCIsInN0b3AiLCJtdXN0U3RvcCIsImFkZEF1ZGlvU291cmNlQ29tcG9uZW50IiwiY29uZmlnIiwiSGFybW9ueSIsIkF1ZGlvU291cmNlQ29tcG9uZW50IiwicHVzaCIsImxvYWRDbGlwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJ1cmwiLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXNwb25zZSIsIm5hbWUiLCJyZWFzb24iLCJvbmVycm9yIiwic2VuZCIsInVwZGF0ZSIsInN0YXRlIiwicmVzdW1lIiwiaSIsImxlbmd0aCIsIm11c3REZXN0cm95Iiwic3BsaWNlIiwicGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVzdHJveSIsIkFzc2V0c1N5c3RlbSIsImFkZEltYWdlIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImFkZEF1ZGlvIiwiYXVkaW8iLCJBdWRpbyIsIm9uY2FucGxheXRocm91Z2giLCJhZGRBdWRpb0J1ZmZlciIsImFkZEpTT04iLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJFbmdpbmUiLCJjYW52YXMiLCJsb29wIiwiTG9vcFN5c3RlbSIsInNjZW5lIiwiU2NlbmVTeXN0ZW0iLCJyZW5kZXIiLCJSZW5kZXJTeXN0ZW0iLCJlbnRpdGllcyIsIkVudGl0eVN5c3RlbSIsImtleXMiLCJLZXlTeXN0ZW0iLCJwaHlzaWNzIiwiUGh5c2ljc1N5c3RlbSIsInBvaW50ZXJzIiwiUG9pbnRlclN5c3RlbSIsInRyYW5zZm9ybSIsIlRyYW5zZm9ybVN5c3RlbSIsInNjcmlwdHMiLCJTY3JpcHRTeXN0ZW0iLCJTdGF0ZVN5c3RlbSIsImhlbHBlcnMiLCJIZWxwZXJzIiwib25TdGVwIiwiY3VycmVudCIsIm11c3RDcmVhdGUiLCJwYXVzZSIsInJlcXVlc3RVcGRhdGUiLCJjcmVhdGUiLCJtdXN0VXBkYXRlIiwicmVxdWVzdERyYXciLCJtdXN0RHJhdyIsImRyYXciLCJtdXN0U3dpdGNoIiwicmVxdWVzdGVkIiwicmVxdWVzdENyZWF0ZSIsInJ1biIsIkVudGl0eSIsInRhZyIsImFkZENvbXBvbmVudCIsIm93bmVyIiwiZm9yRWFjaCIsImNyZWF0ZUdyaWQiLCJyb3dzIiwiY29scyIsImdyaWQiLCJBcnJheSIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSYW5kb21JdGVtcyIsImFycmF5IiwicXVhbnRpdHkiLCJyYW5kb21JdGVtcyIsInJhbmRvbUluZGV4Iiwic2h1ZmZsZUFycmF5IiwiaiIsIngiLCJLZXkiLCJrZXkiLCJlbmQiLCJob2xkIiwiaG9sZFRpbWUiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJlbmFibGVkIiwiY2FjaGUiLCJkZWx0YSIsIm5vdyIsInRoZW4iLCJmcmFtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJiaW5kIiwiaGFuZGxlS2V5VXAiLCJldmVudCIsImdldE9yU2V0IiwiZ2V0IiwicGVyZm9ybWFuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhY2N1bXVsYXRvciIsImxhc3RUaW1lIiwibGFzdFN0ZXAiLCJmcHMiLCJwYXVzZWQiLCJ0aW1lc3RlcCIsInRpbWVzdGFtcCIsInN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJQb2ludGVyIiwiYWN0aXZlIiwiaWQiLCJ0eXBlIiwic3RhcnRYIiwic3RhcnRZIiwieSIsImVuYWJsZVBvaW50ZXJzIiwicG9pbnRlciIsInN0eWxlIiwidG91Y2hBY3Rpb24iLCJ1c2VyU2VsZWN0IiwiaGFuZGxlUG9pbnRlckRvd24iLCJoYW5kbGVQb2ludGVyTW92ZSIsImhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCIsImhhbmRsZUNvbnRleHRNZW51IiwiZ2V0UG9pbnRlckJ5SUQiLCJvdXRwdXQiLCJnZXRJbmFjdGl2ZVBvaW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwic3RvcFByb3BhZ2F0aW9uIiwiU3ByaXRlQ29tcG9uZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic291cmNlWSIsInNvdXJjZVdpZHRoIiwic291cmNlSGVpZ2h0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJ2aXNpYmxlIiwiZ2V0Q29udGV4dCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImxvYWRJbWFnZSIsImNsZWFyIiwiY2xlYXJSZWN0Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInNjYWxlIiwicm90YXRlIiwiYW5nbGUiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiYWRkU3ByaXRlQ29tcG9uZW50IiwidW5zaGlmdCIsInRleHQiLCJmaWxsVGV4dCIsImNpcmNsZSIsImJlZ2luUGF0aCIsImFyYyIsInJhZGl1cyIsIlBJIiwic3Ryb2tlIiwibGluZSIsIm1vdmVUbyIsImF4IiwiYXkiLCJsaW5lVG8iLCJieCIsImJ5IiwicmVjdCIsIlNjZW5lIiwibWV0aG9kcyIsImVuZ2luZSIsInJlcXVlc3RTd2l0Y2giLCJTY3JpcHRDb21wb25lbnQiLCJtdXN0U3RhcnQiLCJhZGRTY3JpcHRDb21wb25lbnQiLCJTdGF0ZUNvbXBvbmVudCIsInN0YXRlcyIsImFkZFN0YXRlQ29tcG9uZW50IiwiZXhpdCIsImVudGVyIiwiVHJhbnNmb3JtQ29tcG9uZW50IiwiYWRkVHJhbnNmb3JtQ29tcG9uZW50IiwiYWRkIiwiZW50aXR5IiwiQjJXb3JsZCIsIkJveDJEIiwiRHluYW1pY3MiLCJiMldvcmxkIiwiQjJWZWMyIiwiQ29tbW9uIiwiYjJWZWMyIiwiQjJEZWJ1Z0RyYXciLCJiMkRlYnVnRHJhdyIsIkIyQ29udGFjdExpc3RlbmVyIiwiYjJDb250YWN0TGlzdGVuZXIiLCJ3b3JsZCIsImNvbnRhY3RzIiwiU2V0Q29udGFjdExpc3RlbmVyIiwiQmVnaW5Db250YWN0IiwiY29udGFjdCIsImNvbXBvbmVudEEiLCJHZXRGaXh0dXJlQSIsIkdldEJvZHkiLCJjb21wb25lbnRCIiwiR2V0Rml4dHVyZUIiLCJlbnRpdHlBIiwiZW50aXR5QiIsIm9uQ29udGFjdEJlZ2luIiwiRW5kQ29udGFjdCIsIm9uQ29udGFjdEVuZCIsIlByZVNvbHZlIiwib25Db250YWN0UHJlU29sdmUiLCJQb3N0U29sdmUiLCJvbkNvbnRhY3RQb3N0U29sdmUiLCJkZWJ1Z0RyYXciLCJTZXRTcHJpdGUiLCJTZXREcmF3U2NhbGUiLCJTZXRGaWxsQWxwaGEiLCJTZXRGbGFncyIsImVfc2hhcGVCaXQiLCJBcHBlbmRGbGFncyIsImVfam9pbnRCaXQiLCJTZXREZWJ1Z0RyYXciLCJtX2RlYnVnRHJhdyIsIm1fc3ByaXRlIiwiZ3JhcGhpY3MiLCJzZXRHcmF2aXR5IiwiU2V0R3Jhdml0eSIsImRyYXdEZWJ1Z0RhdGEiLCJEcmF3RGVidWdEYXRhIiwiYWRkUGh5c2ljc0NvbXBvbmVudCIsIlBoeXNpY3NDb21wb25lbnQiLCJTdGVwIiwiQ2xlYXJGb3JjZXMiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZ2V0QW5nbGUiLCJzeXN0ZW0iLCJkZWZhdWx0cyIsImFsbG93U2xlZXAiLCJhd2FrZSIsImJ1bGxldCIsImZpeGVkUm90YXRpb24iLCJhbmd1bGFyRGFtcGluZyIsImFuZ3VsYXJWZWxvY2l0eSIsImxpbmVhckRhbXBpbmciLCJsaW5lYXJWZWxvY2l0eSIsInVzZXJEYXRhIiwiYm9keSIsImZpeHR1cmVzIiwiQjJCb2R5RGVmIiwiYjJCb2R5RGVmIiwiQjJCb2R5IiwiYjJCb2R5IiwiYm9keURlZiIsImIyX3N0YXRpY0JvZHkiLCJiMl9keW5hbWljQm9keSIsImIyX2tpbmVtYXRpY0JvZHkiLCJDcmVhdGVCb2R5Iiwic2V0TGluZWFyVmVsb2NpdHkiLCJTZXRBd2FrZSIsIlNldExpbmVhclZlbG9jaXR5IiwiZml4dHVyZSIsIkRlc3Ryb3lGaXh0dXJlIiwiRGVzdHJveUJvZHkiLCJHZXRQb3NpdGlvbiIsIkdldEFuZ2xlIiwic2V0UG9zaXRpb24iLCJTZXRQb3NpdGlvbiIsImFwcGx5Rm9yY2UiLCJBcHBseUZvcmNlIiwiR2V0V29ybGRDZW50ZXIiLCJnZXRGaXh0dXJlRGVmIiwiQjJGaXh0dXJlRGVmIiwiYjJGaXh0dXJlRGVmIiwiZml4RGVmIiwiZGVuc2l0eSIsImZyaWN0aW9uIiwicmVzdGl0dXRpb24iLCJpc1NlbnNvciIsImFkZENpcmNsZSIsImZpeHR1cmVEZWZpbml0aW9uIiwiQjJDaXJjbGVTaGFwZSIsIkNvbGxpc2lvbiIsIlNoYXBlcyIsImIyQ2lyY2xlU2hhcGUiLCJmaXh0dXJlRGVmIiwic2hhcGUiLCJtX3AiLCJDcmVhdGVGaXh0dXJlIiwibWUiLCJvdGhlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsQ0FBcUI7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNB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S0FqQk87QUFrQmQvSixhQUFXLEVBQUVBLFlBbEJDO0FBbUJkbUssaUJBQWUsRUFBRUEsZ0JBbkJIO0FBb0JkckosY0FBWSxFQUFFQSxhQXBCQTtBQXFCZHdKLGdCQUFjLEVBQUVBLGVBckJGO0FBc0JkdkosYUFBVyxFQUFFQSxZQXRCQztBQXVCZDRKLG9CQUFrQixFQUFFQSxtQkF2Qk47QUF3QmQvSixpQkFBZSxFQUFFQSxnQkFBZUE7QUF4QmxCLENBQWhCO0FBMkJlN0QsNEZBQWYsRSIsImZpbGUiOiJoYXJtb255LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGFybW9ueVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIYXJtb255XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEF1ZGlvU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpXG4gIHRoaXMubWFzdGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNsaXBzID0ge31cblxuICB0aGlzLm1hc3Rlci5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbilcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tdXN0UGxheSA9IGZhbHNlXG4gIGNvbnN0IGNsaXAgPSBjb21wb25lbnQuY2xpcE5hbWVcbiAgY29uc3Qgc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gIGNvbnN0IGdhaW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIGNvbXBvbmVudC5jbGlwUmVmID0gc291cmNlXG4gIHNvdXJjZS5idWZmZXIgPSB0aGlzLmNsaXBzW2NsaXBdXG4gIHNvdXJjZS5jb25uZWN0KGdhaW4pXG4gIGdhaW4uY29ubmVjdCh0aGlzLm1hc3RlcilcbiAgZ2Fpbi5nYWluLnZhbHVlID0gY29tcG9uZW50LnZvbHVtZVxuICBzb3VyY2Uuc3RhcnQoKVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm11c3RTdG9wID0gZmFsc2VcbiAgY29tcG9uZW50LmNsaXBSZWYuc3RvcCgpXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5hZGRBdWRpb1NvdXJjZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQXVkaW9Tb3VyY2VDb21wb25lbnQoY29uZmlnLCB0aGlzKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLmxvYWRDbGlwID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5jbGlwc1tjb25maWcubmFtZV0gPSBidWZmZXJcbiAgICAgICAgcmVzb2x2ZShidWZmZXIpXG4gICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICB9KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIHhoci5zZW5kKClcbiAgfSlcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzdW1lKClcbiAgfVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN0b3ApIHtcbiAgICAgIHRoaXMuc3RvcChjb21wb25lbnQpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RQbGF5KSB7XG4gICAgICB0aGlzLnBsYXkoY29tcG9uZW50KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1N5c3RlbVxuIiwiY29uc3QgQXVkaW9Tb3VyY2VDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNsaXBSZWY6IG51bGwsXG4gICAgbXVzdFBsYXk6IGZhbHNlLFxuICAgIG11c3RTdG9wOiBmYWxzZSxcbiAgICBjbGlwTmFtZTogJ25vbmUnLFxuICAgIHZvbHVtZTogMVxuICB9LCBwYXJhbXMpXG5cbiAgdGhpcy5jbGlwUmVmID0gY29uZmlnLmNsaXBSZWZcbiAgdGhpcy5tdXN0UGxheSA9IGNvbmZpZy5tdXN0UGxheVxuICB0aGlzLm11c3RTdG9wID0gY29uZmlnLm11c3RTdG9wXG4gIHRoaXMuY2xpcE5hbWUgPSBjb25maWcuY2xpcE5hbWVcbiAgdGhpcy52b2x1bWUgPSBjb25maWcudm9sdW1lXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxufVxuXG5BdWRpb1NvdXJjZUNvbXBvbmVudC5wcm90b3R5cGUubmFtZSA9ICdhdWRpbydcblxuQXVkaW9Tb3VyY2VDb21wb25lbnQucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoY2xpcE5hbWUpIHtcbiAgaWYgKGNsaXBOYW1lKSB7XG4gICAgdGhpcy5jbGlwTmFtZSA9IGNsaXBOYW1lXG4gIH1cbiAgdGhpcy5tdXN0UGxheSA9IHRydWVcbn1cblxuQXVkaW9Tb3VyY2VDb21wb25lbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFN0b3AgPSB0cnVlXG59XG5cbkF1ZGlvU291cmNlQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1NvdXJjZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEltYWdlIEF1ZGlvICovXG5cbmNvbnN0IEFzc2V0c1N5c3RlbSA9IGZ1bmN0aW9uICgpIHt9XG5cbkFzc2V0c1N5c3RlbS5wcm90b3R5cGUuYWRkSW1hZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoaW1hZ2UpXG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBjb25maWcudXJsXG4gIH0pXG59XG5cbkFzc2V0c1N5c3RlbS5wcm90b3R5cGUuYWRkQXVkaW8gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKVxuICAgIGF1ZGlvLm9uY2FucGxheXRocm91Z2ggPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKGF1ZGlvKVxuICAgICAgYXVkaW8ub25jYW5wbGF5dGhyb3VnaCA9IG51bGxcbiAgICB9XG4gICAgYXVkaW8ub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIGF1ZGlvLnNyYyA9IGNvbmZpZy51cmxcbiAgfSlcbn1cblxuQXNzZXRzU3lzdGVtLnByb3RvdHlwZS5hZGRBdWRpb0J1ZmZlciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICBjb25zdCBBdWRpb0NvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKVxuICAgIHhoci5vcGVuKCdHRVQnLCBjb25maWcudXJsLCB0cnVlKVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIEF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoeGhyLnJlc3BvbnNlLCAoYnVmZmVyKSA9PiB7XG4gICAgICAgIHJlc29sdmUoYnVmZmVyKVxuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICByZWplY3QocmVhc29uKVxuICAgICAgfSlcbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0pXG59XG5cbkFzc2V0c1N5c3RlbS5wcm90b3R5cGUuYWRkSlNPTiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICB4aHIub3BlbignR0VUJywgY29uZmlnLnVybCwgdHJ1ZSlcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICByZWplY3QocmVhc29uKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0c1N5c3RlbVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW5naW5lID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICAvLyBjb3JlXG4gIHRoaXMubG9vcCA9IG5ldyBIYXJtb255Lkxvb3BTeXN0ZW0oKVxuICB0aGlzLnNjZW5lID0gbmV3IEhhcm1vbnkuU2NlbmVTeXN0ZW0oKVxuICB0aGlzLnJlbmRlciA9IG5ldyBIYXJtb255LlJlbmRlclN5c3RlbShjYW52YXMpXG4gIHRoaXMuYXVkaW8gPSBuZXcgSGFybW9ueS5BdWRpb1N5c3RlbSgpXG4gIHRoaXMuZW50aXRpZXMgPSBuZXcgSGFybW9ueS5FbnRpdHlTeXN0ZW0oKVxuICB0aGlzLmtleXMgPSBuZXcgSGFybW9ueS5LZXlTeXN0ZW0oKVxuICB0aGlzLnBoeXNpY3MgPSBuZXcgSGFybW9ueS5QaHlzaWNzU3lzdGVtKGNhbnZhcylcbiAgdGhpcy5wb2ludGVycyA9IG5ldyBIYXJtb255LlBvaW50ZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLnRyYW5zZm9ybSA9IG5ldyBIYXJtb255LlRyYW5zZm9ybVN5c3RlbSgpXG4gIHRoaXMuc2NyaXB0cyA9IG5ldyBIYXJtb255LlNjcmlwdFN5c3RlbSgpXG4gIHRoaXMuc3RhdGUgPSBuZXcgSGFybW9ueS5TdGF0ZVN5c3RlbSgpXG4gIHRoaXMuaGVscGVycyA9IG5ldyBIYXJtb255LkhlbHBlcnMoKVxuXG4gIHRoaXMubG9vcC5vblN0ZXAgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2NlbmUuY3VycmVudCkge1xuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdENyZWF0ZSkge1xuICAgICAgICB0aGlzLmxvb3AucGF1c2UoKVxuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RVcGRhdGUoKVxuICAgICAgICBhd2FpdCB0aGlzLnNjZW5lLmN1cnJlbnQuY3JlYXRlKHRoaXMpXG4gICAgICAgIHRoaXMubG9vcC5jb250aW51ZSgpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0VXBkYXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdERyYXcoKVxuICAgICAgICB0aGlzLmtleXMudXBkYXRlKClcbiAgICAgICAgdGhpcy5wb2ludGVycy51cGRhdGUoKVxuICAgICAgICB0aGlzLmF1ZGlvLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMucGh5c2ljcy51cGRhdGUoKVxuICAgICAgICB0aGlzLmVudGl0aWVzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuc2NyaXB0cy51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnVwZGF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdERyYXcpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhdygpXG4gICAgICAgIC8vIHRoaXMucGh5c2ljcy5kcmF3RGVidWdEYXRhKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmRyYXcodGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NlbmUubXVzdFN3aXRjaCkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZXN0cm95KClcbiAgICAgIHRoaXMucG9pbnRlcnMuZGVzdHJveSgpXG4gICAgICB0aGlzLmtleXMuZGVzdHJveSgpXG4gICAgICB0aGlzLnNjZW5lLmN1cnJlbnQgPSB0aGlzLnNjZW5lLnJlcXVlc3RlZFxuICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0Q3JlYXRlKClcbiAgICB9XG4gIH1cbiAgdGhpcy5sb29wLnJ1bigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZ2luZVxuIiwiY29uc3QgRW50aXR5ID0gZnVuY3Rpb24gKHRhZykge1xuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy50YWcgPSB0YWcgfHwgJ25vbmUnXG59XG5cbkVudGl0eS5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub3duZXIgPSB0aGlzXG4gIHRoaXNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50XG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbn1cblxuRW50aXR5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50LmRlc3Ryb3koKVxuICB9KVxuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlcbiIsImNvbnN0IEhlbHBlcnMgPSBmdW5jdGlvbiAoKSB7fVxuXG5IZWxwZXJzLnByb3RvdHlwZS5jcmVhdGVHcmlkID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgZ3JpZCA9IG5ldyBBcnJheShjb2xzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHJvd3MpXG4gIH1cbiAgcmV0dXJuIGdyaWRcbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5nZXRSYW5kb21JdGVtcyA9IGZ1bmN0aW9uIChhcnJheSwgcXVhbnRpdHkpIHtcbiAgY29uc3QgcmFuZG9tSXRlbXMgPSBbXVxuICBmb3IgKGxldCBpID0gcXVhbnRpdHk7IGktLTspIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIGFycmF5Lmxlbmd0aCAtIDEpXG4gICAgcmFuZG9tSXRlbXMucHVzaChhcnJheVtyYW5kb21JbmRleF0pXG4gICAgYXJyYXkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVxuICB9XG4gIHJldHVybiByYW5kb21JdGVtc1xufVxuXG5IZWxwZXJzLnByb3RvdHlwZS5zaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSlcbiAgICBjb25zdCB4ID0gYXJyYXlbaV1cbiAgICBhcnJheVtpXSA9IGFycmF5W2pdXG4gICAgYXJyYXlbal0gPSB4XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnNcbiIsImNvbnN0IEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy5zdGFydCA9IGZhbHNlXG4gIHRoaXMuZW5kID0gZmFsc2VcbiAgdGhpcy5ob2xkID0gZmFsc2VcbiAgdGhpcy5ob2xkVGltZSA9IDBcbiAgdGhpcy5zdGFydEZyYW1lID0gMFxuICB0aGlzLmVuZEZyYW1lID0gMFxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEtleVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSB0cnVlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbZXZlbnQua2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmNhY2hlW2V2ZW50LmtleV0uaG9sZCA9IGZhbHNlXG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5nZXRPclNldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gbmV3IEhhcm1vbnkuS2V5KGtleSlcbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZVtrZXldXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5nZXRPclNldChrZXkpXG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgdGhpcy5mcmFtZSsrXG4gICAgdGhpcy5ub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLmRlbHRhID0gdGhpcy5ub3cgLSB0aGlzLnRoZW5cbiAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKGtleS5ob2xkKSB7XG4gICAgICAgIGtleS5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgIGtleS5lbmRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5LmhvbGRUaW1lID0gMFxuICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgIGlmIChrZXkuZW5kRnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBrZXkuc3RhcnQgPSAoa2V5LnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICBrZXkuZW5kID0gKGtleS5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICB9XG4gIH1cbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5U3lzdGVtXG4iLCJjb25zdCBMb29wU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjY3VtdWxhdG9yID0gMFxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLmxhc3RUaW1lID0gMFxuICB0aGlzLmxhc3RTdGVwID0gMFxuICB0aGlzLmZwcyA9IDYwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5jb250aW51ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXVzZWQgPSB0cnVlXG59XG5cbkxvb3BTeXN0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgdGltZXN0YW1wID0gdGltZXN0YW1wIHx8IDBcbiAgdGhpcy50aW1lc3RlcCA9IDEwMDAgLyB0aGlzLmZwc1xuICB0aGlzLmFjY3VtdWxhdG9yICs9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWVcbiAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcFxuICB3aGlsZSAoIXRoaXMucGF1c2VkICYmIHRoaXMuYWNjdW11bGF0b3IgPj0gdGhpcy50aW1lc3RlcCkge1xuICAgIHRoaXMuc3RlcCgpXG4gICAgdGhpcy5kZWx0YSA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFN0ZXBcbiAgICB0aGlzLmxhc3RTdGVwID0gdGltZXN0YW1wXG4gICAgdGhpcy5hY2N1bXVsYXRvciAtPSB0aGlzLnRpbWVzdGVwXG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bi5iaW5kKHRoaXMpKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZyYW1lKytcbiAgdGhpcy5vblN0ZXAoKVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5vblN0ZXAgPSBmdW5jdGlvbiAoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBMb29wU3lzdGVtXG4iLCJjb25zdCBQb2ludGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbiAgdGhpcy5pZCA9IDBcbiAgdGhpcy50eXBlID0gbnVsbFxuICB0aGlzLnN0YXJ0WCA9IDBcbiAgdGhpcy5zdGFydFkgPSAwXG4gIHRoaXMueCA9IDBcbiAgdGhpcy55ID0gMFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyXG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBQb2ludGVyU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmVuYWJsZWQgPSB0cnVlXG4gIHRoaXMuY2FjaGUgPSB7fVxuICB0aGlzLmRlbHRhID0gMFxuICB0aGlzLm5vdyA9IDBcbiAgdGhpcy50aGVuID0gMFxuICB0aGlzLmZyYW1lID0gMFxuICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICB0aGlzLmVuYWJsZVBvaW50ZXJzKClcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0T3JTZXQgPSBmdW5jdGlvbiAocG9pbnRlcikge1xuICBpZiAodHlwZW9mIHRoaXMuY2FjaGVbcG9pbnRlcl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtwb2ludGVyXSA9IG5ldyBIYXJtb255LlBvaW50ZXIocG9pbnRlcilcbiAgfVxuICByZXR1cm4gdGhpcy5jYWNoZVtwb2ludGVyXVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocG9pbnRlcikge1xuICByZXR1cm4gdGhpcy5nZXRPclNldChwb2ludGVyKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5lbmFibGVQb2ludGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYW52YXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJyAvLyBuZWVkZWQgZm9yIG1vYmlsZVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMuaGFuZGxlQ29udGV4dE1lbnUuYmluZCh0aGlzKSwgZmFsc2UpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldFBvaW50ZXJCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gIGxldCBvdXRwdXQgPSBmYWxzZVxuICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgY29uc3QgcG9pbnRlciA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChwb2ludGVyLmlkID09PSBpZCkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0SW5hY3RpdmVQb2ludGVyID0gZnVuY3Rpb24gKCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgIG91dHB1dCA9IHBvaW50ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuYWN0aXZlID0gdHJ1ZVxuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnR5cGUgPSBldmVudC5wb2ludGVyVHlwZSAvLyAnbW91c2UnLCAncGVuJywgJ3RvdWNoJ1xuICAgIHBvaW50ZXIuaG9sZCA9IHRydWVcbiAgICBwb2ludGVyLnN0YXJ0WCA9IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdFxuICAgIHBvaW50ZXIuc3RhcnRZID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcG9pbnRlciA9IHRoaXMuZ2V0UG9pbnRlckJ5SUQoZXZlbnQucG9pbnRlcklkKSB8fCB0aGlzLmdldEluYWN0aXZlUG9pbnRlcigpXG4gIGlmIChwb2ludGVyKSB7XG4gICAgcG9pbnRlci5pZCA9IGV2ZW50LnBvaW50ZXJJZFxuICAgIHBvaW50ZXIueCA9IGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdFxuICAgIHBvaW50ZXIueSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcG9pbnRlciA9IHRoaXMuZ2V0UG9pbnRlckJ5SUQoZXZlbnQucG9pbnRlcklkKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuYWN0aXZlID0gZmFsc2VcbiAgICBwb2ludGVyLmhvbGQgPSBmYWxzZVxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZUNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgcmV0dXJuIGZhbHNlXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgIHRoaXMuZnJhbWUrK1xuICAgIHRoaXMubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuXG4gICAgdGhpcy50aGVuID0gdGhpcy5ub3dcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICAgIGlmIChwb2ludGVyLmhvbGQpIHtcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lICs9IHRoaXMuZGVsdGFcbiAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lID0gMFxuICAgICAgICAgIHBvaW50ZXIuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKHBvaW50ZXIuZW5kRnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb2ludGVyLnN0YXJ0ID0gKHBvaW50ZXIuc3RhcnRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICAgICAgcG9pbnRlci5lbmQgPSAocG9pbnRlci5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJTeXN0ZW1cbiIsImNvbnN0IFNwcml0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaW1hZ2U6IG51bGwsXG4gICAgd2lkdGg6IDUwLFxuICAgIGhlaWdodDogNTAsXG4gICAgc291cmNlWDogMCxcbiAgICBzb3VyY2VZOiAwLFxuICAgIHNvdXJjZVdpZHRoOiAwLFxuICAgIHNvdXJjZUhlaWdodDogMCxcbiAgICBhbmNob3JYOiAwLjUsXG4gICAgYW5jaG9yWTogMC41LFxuICAgIHZpc2libGU6IHRydWVcbiAgfSwgcGFyYW1zKVxuXG4gIHRoaXMub3duZXIgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmltYWdlID0gY29uZmlnLmltYWdlXG4gIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0XG4gIHRoaXMuc291cmNlWCA9IGNvbmZpZy5zb3VyY2VYXG4gIHRoaXMuc291cmNlWSA9IGNvbmZpZy5zb3VyY2VZXG4gIHRoaXMuc291cmNlV2lkdGggPSBjb25maWcuc291cmNlV2lkdGhcbiAgdGhpcy5zb3VyY2VIZWlnaHQgPSBjb25maWcuc291cmNlSGVpZ2h0XG4gIHRoaXMuYW5jaG9yWCA9IGNvbmZpZy5hbmNob3JYXG4gIHRoaXMuYW5jaG9yWSA9IGNvbmZpZy5hbmNob3JZXG4gIHRoaXMudmlzaWJsZSA9IGNvbmZpZy52aXNpYmxlXG59XG5cblNwcml0ZUNvbXBvbmVudC5wcm90b3R5cGUubmFtZSA9ICdzcHJpdGUnXG5cblNwcml0ZUNvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSBJbWFnZSAqL1xuXG5jb25zdCBSZW5kZXJTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIHRoaXMuY2FudmFzID0gY2FudmFzXG4gIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUubG9hZEltYWdlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhY2hlW2NvbmZpZy5uYW1lXSA9IGltYWdlXG4gICAgICByZXNvbHZlKGltYWdlKVxuICAgIH1cbiAgICBpbWFnZS5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gY29uZmlnLnVybFxuICB9KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGltYWdlKSB7XG4gIHJldHVybiB0aGlzLmNhY2hlW2ltYWdlXVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYXIoKVxuICAvLyB0aGlzLmNvbnRleHQuc2F2ZSgpXG5cbiAgLy8gdHJhbnNsYXRlIHRvIGNhbWVyYSBjZW50ZXJcbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAodGhpcy5jYW1lcmEud2lkdGggLyAyKSxcbiAgLy8gICAodGhpcy5jYW1lcmEuaGVpZ2h0IC8gMilcbiAgLy8gKVxuXG4gIC8vIHJvdGF0ZVxuICAvLyB0aGlzLmNvbnRleHQucm90YXRlKHRoaXMuY2FtZXJhLmFuZ2xlKVxuXG4gIC8vIHNjYWxlXG4gIC8vIHRoaXMuY29udGV4dC5zY2FsZSh0aGlzLmNhbWVyYS56b29tLCB0aGlzLmNhbWVyYS56b29tKVxuXG4gIC8vIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZWQnXG4gIC8vIHRoaXMuY2FudmFzLmNpcmNsZSgwLCAwLCAxMClcblxuICAvLyB0aGlzLmNvbnRleHQudHJhbnNsYXRlKFxuICAvLyAgIC0odGhpcy5jYW1lcmEud2lkdGggLyAyKSxcbiAgLy8gICAtKHRoaXMuY2FtZXJhLmhlaWdodCAvIDIpXG4gIC8vIClcblxuICAvLyB0cmFuc2xhdGVcbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAtdGhpcy5jYW1lcmEucG9zaXRpb24ueCxcbiAgLy8gICAtdGhpcy5jYW1lcmEucG9zaXRpb24ueVxuICAvLyApXG5cbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cblxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbXBvbmVudC52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKClcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLnggKyBjb21wb25lbnQud2lkdGggKiAwLjUgKiBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLnNjYWxlIC0gY29tcG9uZW50LndpZHRoICogY29tcG9uZW50LmFuY2hvclggKiBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5vd25lci50cmFuc2Zvcm0ueSArIGNvbXBvbmVudC5oZWlnaHQgKiAwLjUgKiBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLnNjYWxlIC0gY29tcG9uZW50LmhlaWdodCAqIGNvbXBvbmVudC5hbmNob3JZICogY29tcG9uZW50Lm93bmVyLnRyYW5zZm9ybS5zY2FsZVxuICAgICAgICApXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoY29tcG9uZW50Lm93bmVyLnRyYW5zZm9ybS5hbmdsZSlcbiAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKFxuICAgICAgICAgIGNvbXBvbmVudC5vd25lci50cmFuc2Zvcm0uc2NhbGUsXG4gICAgICAgICAgY29tcG9uZW50Lm93bmVyLnRyYW5zZm9ybS5zY2FsZVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5zb3VyY2VXaWR0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VXaWR0aCA9IGNvbXBvbmVudC5pbWFnZS53aWR0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5zb3VyY2VIZWlnaHQgPT09IDApIHtcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlSGVpZ2h0ID0gY29tcG9uZW50LmltYWdlLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBjb21wb25lbnQuaW1hZ2UsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVgsXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVksXG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZVdpZHRoLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VIZWlnaHQsXG4gICAgICAgICAgY29tcG9uZW50LndpZHRoICogLTAuNSwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQuaGVpZ2h0ICogLTAuNSwgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgICBjb21wb25lbnQud2lkdGgsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LmhlaWdodCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICApXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuYWRkU3ByaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5TcHJpdGVDb21wb25lbnQoY29uZmlnKVxuICB0aGlzLmNvbXBvbmVudHMudW5zaGlmdChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuZmlsbFRleHQoY29uZmlnLnRleHQsIGNvbmZpZy54LCBjb25maWcueSlcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5jaXJjbGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICB0aGlzLmNvbnRleHQuYXJjKGNvbmZpZy54LCBjb25maWcueSwgY29uZmlnLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmxpbmUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICB0aGlzLmNvbnRleHQubW92ZVRvKGNvbmZpZy5heCwgY29uZmlnLmF5KVxuICB0aGlzLmNvbnRleHQubGluZVRvKGNvbmZpZy5ieCwgY29uZmlnLmJ5KVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5yZWN0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQucmVjdChjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodClcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN5c3RlbVxuIiwiY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHRoaXMubWV0aG9kcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNyZWF0ZTogKCkgPT4ge30sXG4gICAgdXBkYXRlOiAoKSA9PiB7fSxcbiAgICBkcmF3OiAoKSA9PiB7fVxuICB9LCBwYXJhbXMpXG59XG5cblNjZW5lLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMuY3JlYXRlKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy51cGRhdGUoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5kcmF3KGVuZ2luZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVcbiIsImNvbnN0IFNjZW5lU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIHRoaXMucmVxdWVzdGVkID0gbnVsbFxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnN3aXRjaCA9IGZ1bmN0aW9uIChzY2VuZSkge1xuICB0aGlzLnJlcXVlc3RlZCA9IHNjZW5lXG4gIHRoaXMucmVxdWVzdFN3aXRjaCgpXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0Q3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RDcmVhdGUgPSB0cnVlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gdHJ1ZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3REcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gdHJ1ZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFN3aXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVTeXN0ZW1cbiIsImNvbnN0IFNjcmlwdENvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMubXVzdFN0YXJ0ID0gdHJ1ZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm1ldGhvZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBzdGFydDogKCkgPT4ge30sXG4gICAgdXBkYXRlOiAoKSA9PiB7fVxuICB9LCBwYXJhbXMpXG59XG5cblNjcmlwdENvbXBvbmVudC5wcm90b3R5cGUubmFtZSA9ICdzY3JpcHQnXG5cblNjcmlwdENvbXBvbmVudC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHRoaXMubXVzdFN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gdHJ1ZVxuICByZXR1cm4gdGhpcy5tZXRob2RzLnN0YXJ0KGVuZ2luZSlcbn1cblxuU2NyaXB0Q29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIHJldHVybiB0aGlzLm1ldGhvZHMudXBkYXRlKGVuZ2luZSlcbn1cblxuU2NyaXB0Q29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFNjcmlwdFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuU2NyaXB0U3lzdGVtLnByb3RvdHlwZS5hZGRTY3JpcHRDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlNjcmlwdENvbXBvbmVudChjb25maWcpXG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5TY3JpcHRTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTdGFydCkge1xuICAgICAgY29tcG9uZW50LnN0YXJ0KGVuZ2luZSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFVwZGF0ZSkge1xuICAgICAgY29tcG9uZW50LnVwZGF0ZShlbmdpbmUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFN5c3RlbVxuIiwiY29uc3QgU3RhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHRoaXMub3duZXIgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG4gIHRoaXMucmVxdWVzdGVkID0gcGFyYW1zLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB0aGlzLnN0YXRlcyA9IHBhcmFtcy5zdGF0ZXNcbn1cblxuU3RhdGVDb21wb25lbnQucHJvdG90eXBlLm5hbWUgPSAnc3RhdGUnXG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5zd2l0Y2ggPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHN0YXRlXG59XG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgU3RhdGVTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS5hZGRTdGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuU3RhdGVDb21wb25lbnQoY29uZmlnKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuU3RhdGVTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGlmIChjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmV4aXQoZW5naW5lLCBjb21wb25lbnQub3duZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN3aXRjaCkge1xuICAgICAgY29tcG9uZW50LmN1cnJlbnQgPSBjb21wb25lbnQucmVxdWVzdGVkXG4gICAgICBpZiAoY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZW50ZXIoZW5naW5lLCBjb21wb25lbnQub3duZXIpXG4gICAgICB9XG4gICAgICBjb21wb25lbnQubXVzdFN3aXRjaCA9IGZhbHNlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQuY3VycmVudCAmJiBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS51cGRhdGUpIHtcbiAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLnVwZGF0ZShlbmdpbmUsIGNvbXBvbmVudC5vd25lcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVTeXN0ZW1cbiIsImNvbnN0IFRyYW5zZm9ybUNvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgeDogNTAsXG4gICAgeTogNTAsXG4gICAgYW5nbGU6IDAsXG4gICAgc2NhbGU6IDFcbiAgfSwgcGFyYW1zKVxuXG4gIHRoaXMub3duZXIgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLnggPSBjb25maWcueFxuICB0aGlzLnkgPSBjb25maWcueVxuICB0aGlzLmFuZ2xlID0gY29uZmlnLmFuZ2xlXG4gIHRoaXMuc2NhbGUgPSBjb25maWcuc2NhbGVcbn1cblxuVHJhbnNmb3JtQ29tcG9uZW50LnByb3RvdHlwZS5uYW1lID0gJ3RyYW5zZm9ybSdcblxuVHJhbnNmb3JtQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm1Db21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFRyYW5zZm9ybVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuVHJhbnNmb3JtU3lzdGVtLnByb3RvdHlwZS5hZGRUcmFuc2Zvcm1Db21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlRyYW5zZm9ybUNvbXBvbmVudChjb25maWcpXG4gIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5UcmFuc2Zvcm1TeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybVN5c3RlbVxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgRW50aXR5U3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhY2hlID0gW11cbiAgdGhpcy5jb21wb25lbnRzID0gW11cbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGVudGl0eSA9IG5ldyBIYXJtb255LkVudGl0eShjb25maWcpXG4gIHRoaXMuY2FjaGUucHVzaChlbnRpdHkpXG4gIHJldHVybiBlbnRpdHlcbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICBpZiAoZW50aXR5Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNhY2hlLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5FbnRpdHlTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuY2FjaGVbaV1cbiAgICBlbnRpdHkuZGVzdHJveSgpXG4gIH1cbiAgdGhpcy5jYWNoZSA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eVN5c3RlbVxuIiwiLyogZ2xvYmFsIEJveDJEIEhhcm1vbnkgKi9cblxuY29uc3QgUGh5c2ljc1N5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgY29uc3QgQjJXb3JsZCA9IEJveDJELkR5bmFtaWNzLmIyV29ybGRcbiAgY29uc3QgQjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyXG4gIGNvbnN0IEIyRGVidWdEcmF3ID0gQm94MkQuRHluYW1pY3MuYjJEZWJ1Z0RyYXdcbiAgY29uc3QgQjJDb250YWN0TGlzdGVuZXIgPSBCb3gyRC5EeW5hbWljcy5iMkNvbnRhY3RMaXN0ZW5lclxuXG4gIHRoaXMud29ybGQgPSBuZXcgQjJXb3JsZChuZXcgQjJWZWMyKDAsIDApLCB0cnVlKVxuICB0aGlzLmZwcyA9IDYwXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuc2NhbGUgPSAxMDBcbiAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgdGhpcy5jb250YWN0cyA9IG5ldyBCMkNvbnRhY3RMaXN0ZW5lcigpXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRhY3RzXG5cbiAgdGhpcy53b3JsZC5TZXRDb250YWN0TGlzdGVuZXIodGhpcy5jb250YWN0cylcblxuICB0aGlzLmNvbnRhY3RzLkJlZ2luQ29udGFjdCA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEub3duZXJcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5vd25lclxuICAgIGNvbXBvbmVudEEub25Db250YWN0QmVnaW4oZW50aXR5QSwgZW50aXR5QilcbiAgICBjb21wb25lbnRCLm9uQ29udGFjdEJlZ2luKGVudGl0eUIsIGVudGl0eUEpXG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLkVuZENvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLm93bmVyXG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIub3duZXJcbiAgICBjb21wb25lbnRBLm9uQ29udGFjdEVuZChlbnRpdHlBLCBlbnRpdHlCKVxuICAgIGNvbXBvbmVudEIub25Db250YWN0RW5kKGVudGl0eUIsIGVudGl0eUEpXG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLlByZVNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5vd25lclxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLm93bmVyXG4gICAgY29tcG9uZW50QS5vbkNvbnRhY3RQcmVTb2x2ZShlbnRpdHlBLCBlbnRpdHlCKVxuICAgIGNvbXBvbmVudEIub25Db250YWN0UHJlU29sdmUoZW50aXR5QiwgZW50aXR5QSlcbiAgfVxuXG4gIHRoaXMuY29udGFjdHMuUG9zdFNvbHZlID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5vd25lclxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLm93bmVyXG4gICAgY29tcG9uZW50QS5vbkNvbnRhY3RQb3N0U29sdmUoZW50aXR5QSwgZW50aXR5QilcbiAgICBjb21wb25lbnRCLm9uQ29udGFjdFBvc3RTb2x2ZShlbnRpdHlCLCBlbnRpdHlBKVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlYnVnXG5cbiAgY29uc3QgZGVidWdEcmF3ID0gbmV3IEIyRGVidWdEcmF3KHRoaXMuY29udGV4dClcbiAgZGVidWdEcmF3LlNldFNwcml0ZShjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSlcbiAgZGVidWdEcmF3LlNldERyYXdTY2FsZSh0aGlzLnNjYWxlKVxuICBkZWJ1Z0RyYXcuU2V0RmlsbEFscGhhKDAuNSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGbGFncyhCMkRlYnVnRHJhdy5lX3NoYXBlQml0KVxuICBkZWJ1Z0RyYXcuQXBwZW5kRmxhZ3MoQjJEZWJ1Z0RyYXcuZV9qb2ludEJpdClcbiAgdGhpcy53b3JsZC5TZXREZWJ1Z0RyYXcoZGVidWdEcmF3KVxuICB0aGlzLndvcmxkLm1fZGVidWdEcmF3Lm1fc3ByaXRlLmdyYXBoaWNzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnNldEdyYXZpdHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMud29ybGQuU2V0R3Jhdml0eShjb25maWcpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmRyYXdEZWJ1Z0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud29ybGQuRHJhd0RlYnVnRGF0YSgpXG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmFkZFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlBoeXNpY3NDb21wb25lbnQoY29uZmlnLCB0aGlzKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndvcmxkLlN0ZXAoMSAvIHRoaXMuZnBzLCA4LCAzKVxuICB0aGlzLndvcmxkLkNsZWFyRm9yY2VzKClcbiAgZm9yIChsZXQgaSA9IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbaV1cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY29tcG9uZW50LmdldFBvc2l0aW9uKClcbiAgICAgIGNvbXBvbmVudC5vd25lci50cmFuc2Zvcm0ueCA9IHBvc2l0aW9uLnhcbiAgICAgIGNvbXBvbmVudC5vd25lci50cmFuc2Zvcm0ueSA9IHBvc2l0aW9uLnlcbiAgICAgIGNvbXBvbmVudC5vd25lci50cmFuc2Zvcm0uYW5nbGUgPSBjb21wb25lbnQuZ2V0QW5nbGUoKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzU3lzdGVtXG4iLCIvKiBnbG9iYWwgQm94MkQgKi9cblxuY29uc3QgUGh5c2ljc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChwYXJhbXMsIHN5c3RlbSkge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgICB0eXBlOiAnZHluYW1pYycsXG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGFsbG93U2xlZXA6IHRydWUsXG4gICAgYXdha2U6IHRydWUsXG4gICAgYnVsbGV0OiBmYWxzZSxcbiAgICBmaXhlZFJvdGF0aW9uOiBmYWxzZSxcbiAgICBhbmdsZTogMCxcbiAgICBhbmd1bGFyRGFtcGluZzogMCxcbiAgICBhbmd1bGFyVmVsb2NpdHk6IDAsXG4gICAgbGluZWFyRGFtcGluZzogMCxcbiAgICBsaW5lYXJWZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXG4gICAgdXNlckRhdGE6IHt9XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG5cbiAgdGhpcy5vd25lciA9IG51bGxcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuYm9keSA9IG51bGxcbiAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1cbiAgdGhpcy5maXh0dXJlcyA9IFtdXG4gIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlXG5cbiAgY29uc3QgQjJCb2R5RGVmID0gQm94MkQuRHluYW1pY3MuYjJCb2R5RGVmXG4gIGNvbnN0IEIyQm9keSA9IEJveDJELkR5bmFtaWNzLmIyQm9keVxuXG4gIGNvbnN0IGJvZHlEZWYgPSBuZXcgQjJCb2R5RGVmKClcbiAgYm9keURlZi5wb3NpdGlvbi54ID0gY29uZmlnLnggLyB0aGlzLnN5c3RlbS5zY2FsZVxuICBib2R5RGVmLnBvc2l0aW9uLnkgPSBjb25maWcueSAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIGJvZHlEZWYuYWN0aXZlID0gY29uZmlnLmFjdGl2ZVxuICBib2R5RGVmLmFsbG93U2xlZXAgPSBjb25maWcuYWxsb3dTbGVlcFxuICBib2R5RGVmLmF3YWtlID0gY29uZmlnLmF3YWtlXG4gIGJvZHlEZWYuYnVsbGV0ID0gY29uZmlnLmJ1bGxldFxuICBib2R5RGVmLmZpeGVkUm90YXRpb24gPSBjb25maWcuZml4ZWRSb3RhdGlvblxuICBib2R5RGVmLmFuZ2xlID0gY29uZmlnLmFuZ2xlXG4gIGJvZHlEZWYuYW5ndWxhckRhbXBpbmcgPSBjb25maWcuYW5ndWxhckRhbXBpbmdcbiAgYm9keURlZi5hbmd1bGFyVmVsb2NpdHkgPSBjb25maWcuYW5ndWxhclZlbG9jaXR5XG4gIGJvZHlEZWYubGluZWFyRGFtcGluZyA9IGNvbmZpZy5saW5lYXJEYW1waW5nXG4gIGJvZHlEZWYubGluZWFyVmVsb2NpdHkgPSBjb25maWcubGluZWFyVmVsb2NpdHlcbiAgYm9keURlZi51c2VyRGF0YSA9IGNvbmZpZy51c2VyRGF0YVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX3N0YXRpY0JvZHlcbiAgfVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICdkeW5hbWljJykge1xuICAgIGJvZHlEZWYudHlwZSA9IEIyQm9keS5iMl9keW5hbWljQm9keVxuICB9XG5cbiAgaWYgKHRoaXMudHlwZSA9PT0gJ2tpbmVtYXRpYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfa2luZW1hdGljQm9keVxuICB9XG5cbiAgdGhpcy5ib2R5ID0gdGhpcy5zeXN0ZW0ud29ybGQuQ3JlYXRlQm9keShib2R5RGVmKVxuICB0aGlzLmJvZHkuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmJvZHkuY29tcG9uZW50ID0gdGhpc1xufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5uYW1lID0gJ3BoeXNpY3MnXG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLnNldExpbmVhclZlbG9jaXR5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmJvZHkuU2V0QXdha2UodHJ1ZSlcbiAgdGhpcy5ib2R5LlNldExpbmVhclZlbG9jaXR5KHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc3lzdGVtLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zeXN0ZW0uc2NhbGVcbiAgfSlcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5maXh0dXJlcy5mb3JFYWNoKChmaXh0dXJlKSA9PiB7XG4gICAgdGhpcy5ib2R5LkRlc3Ryb3lGaXh0dXJlKGZpeHR1cmUpXG4gIH0pXG4gIHRoaXMuc3lzdGVtLndvcmxkLkRlc3Ryb3lCb2R5KHRoaXMuYm9keSlcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5ib2R5LkdldFBvc2l0aW9uKClcbiAgcmV0dXJuIHtcbiAgICB4OiBwb3NpdGlvbi54ICogdGhpcy5zeXN0ZW0uc2NhbGUsXG4gICAgeTogcG9zaXRpb24ueSAqIHRoaXMuc3lzdGVtLnNjYWxlXG4gIH1cbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmJvZHkuR2V0QW5nbGUoKVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5ib2R5LlNldFBvc2l0aW9uKHtcbiAgICB4OiBjb25maWcueCAvIHRoaXMuc3lzdGVtLnNjYWxlLFxuICAgIHk6IGNvbmZpZy55IC8gdGhpcy5zeXN0ZW0uc2NhbGVcbiAgfSlcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuYXBwbHlGb3JjZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5ib2R5LkFwcGx5Rm9yY2UoY29uZmlnLCB0aGlzLmJvZHkuR2V0V29ybGRDZW50ZXIoKSlcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0Rml4dHVyZURlZiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgQjJGaXh0dXJlRGVmID0gQm94MkQuRHluYW1pY3MuYjJGaXh0dXJlRGVmXG4gIGNvbnN0IGZpeERlZiA9IG5ldyBCMkZpeHR1cmVEZWYoKVxuICBmaXhEZWYuZGVuc2l0eSA9IGNvbmZpZy5kZW5zaXR5XG4gIGZpeERlZi5mcmljdGlvbiA9IGNvbmZpZy5mcmljdGlvblxuICBmaXhEZWYucmVzdGl0dXRpb24gPSBjb25maWcucmVzdGl0dXRpb25cbiAgZml4RGVmLmlzU2Vuc29yID0gY29uZmlnLmlzU2Vuc29yXG4gIHJldHVybiBmaXhEZWZcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuYWRkQ2lyY2xlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgcmFkaXVzOiAyNSxcbiAgICBkZW5zaXR5OiAxLFxuICAgIGZyaWN0aW9uOiAwLjUsXG4gICAgcmVzdGl0dXRpb246IDAuMyxcbiAgICBpc1NlbnNvcjogZmFsc2VcbiAgfVxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBwYXJhbXMpXG4gIGNvbnN0IGZpeHR1cmVEZWZpbml0aW9uID0gdGhpcy5nZXRGaXh0dXJlRGVmKGNvbmZpZylcbiAgY29uc3QgQjJDaXJjbGVTaGFwZSA9IEJveDJELkNvbGxpc2lvbi5TaGFwZXMuYjJDaXJjbGVTaGFwZVxuICBjb25zdCBmaXh0dXJlRGVmID0gZml4dHVyZURlZmluaXRpb25cbiAgZml4dHVyZURlZi5zaGFwZSA9IG5ldyBCMkNpcmNsZVNoYXBlKGNvbmZpZy5yYWRpdXMgLyB0aGlzLnN5c3RlbS5zY2FsZSlcbiAgZml4dHVyZURlZi5zaGFwZS5tX3AgPSB7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnN5c3RlbS5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIH1cbiAgY29uc3QgZml4dHVyZSA9IHRoaXMuYm9keS5DcmVhdGVGaXh0dXJlKGZpeHR1cmVEZWYpXG4gIHRoaXMuZml4dHVyZXMucHVzaChmaXh0dXJlKVxuICByZXR1cm4gZml4dHVyZVxufVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5vbkNvbnRhY3RCZWdpbiA9IGZ1bmN0aW9uIChtZSwgb3RoZXIpIHt9XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLm9uQ29udGFjdEVuZCA9IGZ1bmN0aW9uIChtZSwgb3RoZXIpIHt9XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLm9uQ29udGFjdFByZVNvbHZlID0gZnVuY3Rpb24gKG1lLCBvdGhlcikge31cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUub25Db250YWN0UG9zdFNvbHZlID0gZnVuY3Rpb24gKG1lLCBvdGhlcikge31cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc0NvbXBvbmVudFxuIiwiaW1wb3J0IEF1ZGlvU3lzdGVtIGZyb20gJy4vYXVkaW8tc3lzdGVtL2F1ZGlvLXN5c3RlbSdcbmltcG9ydCBBdWRpb1NvdXJjZUNvbXBvbmVudCBmcm9tICcuL2F1ZGlvLXN5c3RlbS9hdWRpby1zb3VyY2UtY29tcG9uZW50J1xuaW1wb3J0IEFzc2V0c1N5c3RlbSBmcm9tICcuL2Fzc2V0cy1zeXN0ZW0vYXNzZXRzLXN5c3RlbSdcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJ1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eS1zeXN0ZW0vZW50aXR5J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzL2hlbHBlcnMnXG5pbXBvcnQgS2V5IGZyb20gJy4va2V5LXN5c3RlbS9rZXknXG5pbXBvcnQgS2V5U3lzdGVtIGZyb20gJy4va2V5LXN5c3RlbS9rZXktc3lzdGVtJ1xuaW1wb3J0IExvb3BTeXN0ZW0gZnJvbSAnLi9sb29wLXN5c3RlbS9sb29wLXN5c3RlbSdcbmltcG9ydCBQb2ludGVyIGZyb20gJy4vcG9pbnRlci1zeXN0ZW0vcG9pbnRlcidcbmltcG9ydCBQb2ludGVyU3lzdGVtIGZyb20gJy4vcG9pbnRlci1zeXN0ZW0vcG9pbnRlci1zeXN0ZW0nXG5pbXBvcnQgU3ByaXRlQ29tcG9uZW50IGZyb20gJy4vcmVuZGVyLXN5c3RlbS9zcHJpdGUtY29tcG9uZW50J1xuaW1wb3J0IFJlbmRlclN5c3RlbSBmcm9tICcuL3JlbmRlci1zeXN0ZW0vcmVuZGVyLXN5c3RlbSdcbmltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lLXN5c3RlbS9zY2VuZSdcbmltcG9ydCBTY2VuZVN5c3RlbSBmcm9tICcuL3NjZW5lLXN5c3RlbS9zY2VuZS1zeXN0ZW0nXG5pbXBvcnQgU2NyaXB0Q29tcG9uZW50IGZyb20gJy4vc2NyaXB0LXN5c3RlbS9zY3JpcHQtY29tcG9uZW50J1xuaW1wb3J0IFNjcmlwdFN5c3RlbSBmcm9tICcuL3NjcmlwdC1zeXN0ZW0vc2NyaXB0LXN5c3RlbSdcbmltcG9ydCBTdGF0ZUNvbXBvbmVudCBmcm9tICcuL3N0YXRlLXN5c3RlbS9zdGF0ZS1jb21wb25lbnQnXG5pbXBvcnQgU3RhdGVTeXN0ZW0gZnJvbSAnLi9zdGF0ZS1zeXN0ZW0vc3RhdGUtc3lzdGVtJ1xuaW1wb3J0IFRyYW5zZm9ybUNvbXBvbmVudCBmcm9tICcuL3RyYW5zZm9ybS1zeXN0ZW0vdHJhbnNmb3JtLWNvbXBvbmVudCdcbmltcG9ydCBUcmFuc2Zvcm1TeXN0ZW0gZnJvbSAnLi90cmFuc2Zvcm0tc3lzdGVtL3RyYW5zZm9ybS1zeXN0ZW0nXG5pbXBvcnQgRW50aXR5U3lzdGVtIGZyb20gJy4vZW50aXR5LXN5c3RlbS9lbnRpdHktc3lzdGVtJ1xuaW1wb3J0IFBoeXNpY3NTeXN0ZW0gZnJvbSAnLi9waHlzaWNzLXN5c3RlbS9waHlzaWNzLXN5c3RlbSdcbmltcG9ydCBQaHlzaWNzQ29tcG9uZW50IGZyb20gJy4vcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1jb21wb25lbnQnXG5cbmNvbnN0IEhhcm1vbnkgPSB7XG4gIEF1ZGlvU3lzdGVtOiBBdWRpb1N5c3RlbSxcbiAgQXVkaW9Tb3VyY2VDb21wb25lbnQ6IEF1ZGlvU291cmNlQ29tcG9uZW50LFxuICBBc3NldHNTeXN0ZW06IEFzc2V0c1N5c3RlbSxcbiAgRW5naW5lOiBFbmdpbmUsXG4gIEVudGl0eTogRW50aXR5LFxuICBFbnRpdHlTeXN0ZW06IEVudGl0eVN5c3RlbSxcbiAgSGVscGVyczogSGVscGVycyxcbiAgS2V5OiBLZXksXG4gIEtleVN5c3RlbTogS2V5U3lzdGVtLFxuICBMb29wU3lzdGVtOiBMb29wU3lzdGVtLFxuICBQaHlzaWNzQ29tcG9uZW50OiBQaHlzaWNzQ29tcG9uZW50LFxuICBQaHlzaWNzU3lzdGVtOiBQaHlzaWNzU3lzdGVtLFxuICBQb2ludGVyOiBQb2ludGVyLFxuICBQb2ludGVyU3lzdGVtOiBQb2ludGVyU3lzdGVtLFxuICBTcHJpdGVDb21wb25lbnQ6IFNwcml0ZUNvbXBvbmVudCxcbiAgUmVuZGVyU3lzdGVtOiBSZW5kZXJTeXN0ZW0sXG4gIFNjZW5lOiBTY2VuZSxcbiAgU2NlbmVTeXN0ZW06IFNjZW5lU3lzdGVtLFxuICBTY3JpcHRDb21wb25lbnQ6IFNjcmlwdENvbXBvbmVudCxcbiAgU2NyaXB0U3lzdGVtOiBTY3JpcHRTeXN0ZW0sXG4gIFN0YXRlQ29tcG9uZW50OiBTdGF0ZUNvbXBvbmVudCxcbiAgU3RhdGVTeXN0ZW06IFN0YXRlU3lzdGVtLFxuICBUcmFuc2Zvcm1Db21wb25lbnQ6IFRyYW5zZm9ybUNvbXBvbmVudCxcbiAgVHJhbnNmb3JtU3lzdGVtOiBUcmFuc2Zvcm1TeXN0ZW1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFybW9ueVxuIl0sInNvdXJjZVJvb3QiOiIifQ==