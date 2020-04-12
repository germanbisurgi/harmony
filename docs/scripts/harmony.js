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
  component.mustPlay = false;
  var clip = component.clipName;
  var source = this.context.createBufferSource();
  var gain = this.context.createGain();
  component.clipRef = source;
  source.buffer = this.cache[clip];
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
        _this.cache[config.name] = buffer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IYXJtb255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hhcm1vbnkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9hdWRpby1zeXN0ZW0vYXVkaW8tc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvYXVkaW8tc3lzdGVtL2F1ZGlvLXNvdXJjZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9sb2FkZXIvbG9hZGVyLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvZW5naW5lL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2VudGl0eS1zeXN0ZW0vZW50aXR5LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMva2V5LXN5c3RlbS9rZXkuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9rZXktc3lzdGVtL2tleS1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9sb29wLXN5c3RlbS9sb29wLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BvaW50ZXItc3lzdGVtL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9wb2ludGVyLXN5c3RlbS9wb2ludGVyLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3JlbmRlci1zeXN0ZW0vc3ByaXRlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3JlbmRlci1zeXN0ZW0vcmVuZGVyLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjZW5lLXN5c3RlbS9zY2VuZS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3NjZW5lLXN5c3RlbS9zY2VuZS1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zY3JpcHQtc3lzdGVtL3NjcmlwdC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zY3JpcHQtc3lzdGVtL3NjcmlwdC1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9zdGF0ZS1zeXN0ZW0vc3RhdGUtY29tcG9uZW50LmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvc3RhdGUtc3lzdGVtL3N0YXRlLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3RyYW5zZm9ybS1zeXN0ZW0vdHJhbnNmb3JtLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3RyYW5zZm9ybS1zeXN0ZW0vdHJhbnNmb3JtLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL2VudGl0eS1zeXN0ZW0vZW50aXR5LXN5c3RlbS5qcyIsIndlYnBhY2s6Ly9IYXJtb255Ly4vc3JjL3BoeXNpY3Mtc3lzdGVtL3BoeXNpY3Mtc3lzdGVtLmpzIiwid2VicGFjazovL0hhcm1vbnkvLi9zcmMvcGh5c2ljcy1zeXN0ZW0vcGh5c2ljcy1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vSGFybW9ueS8uL3NyYy9oYXJtb255LmpzIl0sIm5hbWVzIjpbIkF1ZGlvU3lzdGVtIiwiQXVkaW9Db250ZXh0Iiwid2luZG93Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY29udGV4dCIsIm1hc3RlciIsImNyZWF0ZUdhaW4iLCJjb21wb25lbnRzIiwiY2FjaGUiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJwcm90b3R5cGUiLCJwbGF5IiwiY29tcG9uZW50IiwibXVzdFBsYXkiLCJjbGlwIiwiY2xpcE5hbWUiLCJzb3VyY2UiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJnYWluIiwiY2xpcFJlZiIsImJ1ZmZlciIsInZhbHVlIiwidm9sdW1lIiwic3RhcnQiLCJzdG9wIiwibXVzdFN0b3AiLCJhZGRBdWRpb1NvdXJjZUNvbXBvbmVudCIsImNvbmZpZyIsIkhhcm1vbnkiLCJBdWRpb1NvdXJjZUNvbXBvbmVudCIsInB1c2giLCJsb2FkQ2xpcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwidXJsIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwiZGVjb2RlQXVkaW9EYXRhIiwicmVzcG9uc2UiLCJuYW1lIiwicmVhc29uIiwib25lcnJvciIsInNlbmQiLCJ1cGRhdGUiLCJzdGF0ZSIsInJlc3VtZSIsImkiLCJsZW5ndGgiLCJtdXN0RGVzdHJveSIsInNwbGljZSIsInBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImRlc3Ryb3kiLCJMb2FkZXIiLCJpbWFnZXNDYWNoZSIsImF1ZGlvQ2FjaGUiLCJsb2FkaW5nIiwiY29tcGxldGUiLCJlcnJvcnMiLCJzdWNjZXNzIiwicXVldWVkIiwibG9hZEltYWdlIiwiaW1hZ2UiLCJJbWFnZSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJzcmMiLCJsb2FkQXVkaW8iLCJvblN0YXJ0Iiwib25Qcm9ncmVzcyIsIm9uQ29tcGxldGUiLCJwcm9ncmVzcyIsIk1hdGgiLCJmbG9vciIsImlzTmFOIiwiRW5naW5lIiwiY2FudmFzIiwibG9hZGVyIiwibG9vcCIsIkxvb3BTeXN0ZW0iLCJzY2VuZSIsIlNjZW5lU3lzdGVtIiwicmVuZGVyIiwiUmVuZGVyU3lzdGVtIiwiYXVkaW8iLCJlbnRpdGllcyIsIkVudGl0eVN5c3RlbSIsImtleXMiLCJLZXlTeXN0ZW0iLCJwaHlzaWNzIiwiUGh5c2ljc1N5c3RlbSIsInBvaW50ZXJzIiwiUG9pbnRlclN5c3RlbSIsInRyYW5zZm9ybSIsIlRyYW5zZm9ybVN5c3RlbSIsInNjcmlwdHMiLCJTY3JpcHRTeXN0ZW0iLCJTdGF0ZVN5c3RlbSIsImhlbHBlcnMiLCJIZWxwZXJzIiwib25TdGVwIiwiY3VycmVudCIsIm11c3RQcmVsb2FkIiwicHJlbG9hZCIsInJlcXVlc3RDcmVhdGUiLCJtdXN0Q3JlYXRlIiwicmVxdWVzdFVwZGF0ZSIsImNyZWF0ZSIsIm11c3RVcGRhdGUiLCJyZXF1ZXN0RHJhdyIsIm11c3REcmF3IiwiZHJhdyIsIm11c3RTd2l0Y2giLCJyZXF1ZXN0ZWQiLCJyZXF1ZXN0UHJlbG9hZCIsInJ1biIsIkVudGl0eSIsInRhZyIsImFkZENvbXBvbmVudCIsIm93bmVyIiwiZm9yRWFjaCIsImNyZWF0ZUdyaWQiLCJyb3dzIiwiY29scyIsImdyaWQiLCJBcnJheSIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsImNlaWwiLCJyYW5kb20iLCJnZXRSYW5kb21JdGVtcyIsImFycmF5IiwicXVhbnRpdHkiLCJyYW5kb21JdGVtcyIsInJhbmRvbUluZGV4Iiwic2h1ZmZsZUFycmF5IiwiaiIsIngiLCJLZXkiLCJrZXkiLCJlbmQiLCJob2xkIiwiaG9sZFRpbWUiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJlbmFibGVkIiwiZGVsdGEiLCJub3ciLCJ0aGVuIiwiZnJhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsImhhbmRsZUtleVVwIiwiZXZlbnQiLCJnZXRPclNldCIsImdldCIsInBlcmZvcm1hbmNlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYWNjdW11bGF0b3IiLCJsYXN0VGltZSIsImxhc3RTdGVwIiwiZnBzIiwicGF1c2VkIiwidGltZXN0ZXAiLCJwYXVzZSIsInRpbWVzdGFtcCIsInN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJQb2ludGVyIiwiYWN0aXZlIiwiaWQiLCJ0eXBlIiwic3RhcnRYIiwic3RhcnRZIiwieSIsImVuYWJsZVBvaW50ZXJzIiwicG9pbnRlciIsInN0eWxlIiwidG91Y2hBY3Rpb24iLCJ1c2VyU2VsZWN0IiwiaGFuZGxlUG9pbnRlckRvd24iLCJoYW5kbGVQb2ludGVyTW92ZSIsImhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCIsImhhbmRsZUNvbnRleHRNZW51IiwiZ2V0UG9pbnRlckJ5SUQiLCJvdXRwdXQiLCJnZXRJbmFjdGl2ZVBvaW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwic3RvcFByb3BhZ2F0aW9uIiwiU3ByaXRlQ29tcG9uZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic291cmNlWSIsInNvdXJjZVdpZHRoIiwic291cmNlSGVpZ2h0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJ2aXNpYmxlIiwiZ2V0Q29udGV4dCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImNsZWFyIiwiY2xlYXJSZWN0Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInNjYWxlIiwicm90YXRlIiwiYW5nbGUiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiYWRkU3ByaXRlQ29tcG9uZW50IiwidW5zaGlmdCIsInRleHQiLCJmaWxsVGV4dCIsImNpcmNsZSIsImJlZ2luUGF0aCIsImFyYyIsInJhZGl1cyIsIlBJIiwic3Ryb2tlIiwibGluZSIsIm1vdmVUbyIsImF4IiwiYXkiLCJsaW5lVG8iLCJieCIsImJ5IiwicmVjdCIsIlNjZW5lIiwibWV0aG9kcyIsImVuZ2luZSIsInJlcXVlc3RTd2l0Y2giLCJTY3JpcHRDb21wb25lbnQiLCJtdXN0U3RhcnQiLCJhZGRTY3JpcHRDb21wb25lbnQiLCJTdGF0ZUNvbXBvbmVudCIsInN0YXRlcyIsImFkZFN0YXRlQ29tcG9uZW50IiwiZXhpdCIsImVudGVyIiwiVHJhbnNmb3JtQ29tcG9uZW50IiwiYWRkVHJhbnNmb3JtQ29tcG9uZW50IiwiYWRkIiwiZW50aXR5IiwiQjJXb3JsZCIsIkJveDJEIiwiRHluYW1pY3MiLCJiMldvcmxkIiwiQjJWZWMyIiwiQ29tbW9uIiwiYjJWZWMyIiwiQjJEZWJ1Z0RyYXciLCJiMkRlYnVnRHJhdyIsIkIyQ29udGFjdExpc3RlbmVyIiwiYjJDb250YWN0TGlzdGVuZXIiLCJ3b3JsZCIsImNvbnRhY3RzIiwiU2V0Q29udGFjdExpc3RlbmVyIiwiQmVnaW5Db250YWN0IiwiY29udGFjdCIsImNvbXBvbmVudEEiLCJHZXRGaXh0dXJlQSIsIkdldEJvZHkiLCJjb21wb25lbnRCIiwiR2V0Rml4dHVyZUIiLCJlbnRpdHlBIiwiZW50aXR5QiIsIm9uQ29udGFjdEJlZ2luIiwiRW5kQ29udGFjdCIsIm9uQ29udGFjdEVuZCIsIlByZVNvbHZlIiwib25Db250YWN0UHJlU29sdmUiLCJQb3N0U29sdmUiLCJvbkNvbnRhY3RQb3N0U29sdmUiLCJkZWJ1Z0RyYXciLCJTZXRTcHJpdGUiLCJTZXREcmF3U2NhbGUiLCJTZXRGaWxsQWxwaGEiLCJTZXRGbGFncyIsImVfc2hhcGVCaXQiLCJBcHBlbmRGbGFncyIsImVfam9pbnRCaXQiLCJTZXREZWJ1Z0RyYXciLCJtX2RlYnVnRHJhdyIsIm1fc3ByaXRlIiwiZ3JhcGhpY3MiLCJzZXRHcmF2aXR5IiwiU2V0R3Jhdml0eSIsImRyYXdEZWJ1Z0RhdGEiLCJEcmF3RGVidWdEYXRhIiwiYWRkUGh5c2ljc0NvbXBvbmVudCIsIlBoeXNpY3NDb21wb25lbnQiLCJTdGVwIiwiQ2xlYXJGb3JjZXMiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZ2V0QW5nbGUiLCJzeXN0ZW0iLCJkZWZhdWx0cyIsImFsbG93U2xlZXAiLCJhd2FrZSIsImJ1bGxldCIsImZpeGVkUm90YXRpb24iLCJhbmd1bGFyRGFtcGluZyIsImFuZ3VsYXJWZWxvY2l0eSIsImxpbmVhckRhbXBpbmciLCJsaW5lYXJWZWxvY2l0eSIsInVzZXJEYXRhIiwiYm9keSIsImZpeHR1cmVzIiwiQjJCb2R5RGVmIiwiYjJCb2R5RGVmIiwiQjJCb2R5IiwiYjJCb2R5IiwiYm9keURlZiIsImIyX3N0YXRpY0JvZHkiLCJiMl9keW5hbWljQm9keSIsImIyX2tpbmVtYXRpY0JvZHkiLCJDcmVhdGVCb2R5Iiwic2V0TGluZWFyVmVsb2NpdHkiLCJTZXRBd2FrZSIsIlNldExpbmVhclZlbG9jaXR5IiwiZml4dHVyZSIsIkRlc3Ryb3lGaXh0dXJlIiwiRGVzdHJveUJvZHkiLCJHZXRQb3NpdGlvbiIsIkdldEFuZ2xlIiwic2V0UG9zaXRpb24iLCJTZXRQb3NpdGlvbiIsImFwcGx5Rm9yY2UiLCJBcHBseUZvcmNlIiwiR2V0V29ybGRDZW50ZXIiLCJnZXRGaXh0dXJlRGVmIiwiQjJGaXh0dXJlRGVmIiwiYjJGaXh0dXJlRGVmIiwiZml4RGVmIiwiZGVuc2l0eSIsImZyaWN0aW9uIiwicmVzdGl0dXRpb24iLCJpc1NlbnNvciIsImFkZENpcmNsZSIsImZpeHR1cmVEZWZpbml0aW9uIiwiQjJDaXJjbGVTaGFwZSIsIkNvbGxpc2lvbiIsIlNoYXBlcyIsImIyQ2lyY2xlU2hhcGUiLCJmaXh0dXJlRGVmIiwic2hhcGUiLCJtX3AiLCJDcmVhdGVGaXh0dXJlIiwibWUiLCJvdGhlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsQ0FBcUI7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FB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b0JkcEosY0FBWSxFQUFFQSxhQXBCQTtBQXFCZHVKLGdCQUFjLEVBQUVBLGVBckJGO0FBc0JkdEosYUFBVyxFQUFFQSxZQXRCQztBQXVCZDJKLG9CQUFrQixFQUFFQSxtQkF2Qk47QUF3QmQ5SixpQkFBZSxFQUFFQSxnQkFBZUE7QUF4QmxCLENBQWhCO0FBMkJldkUsNEZBQWYsRSIsImZpbGUiOiJoYXJtb255LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGFybW9ueVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIYXJtb255XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEF1ZGlvU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpXG4gIHRoaXMubWFzdGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLmNhY2hlID0ge31cblxuICB0aGlzLm1hc3Rlci5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbilcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tdXN0UGxheSA9IGZhbHNlXG4gIGNvbnN0IGNsaXAgPSBjb21wb25lbnQuY2xpcE5hbWVcbiAgY29uc3Qgc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gIGNvbnN0IGdhaW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIGNvbXBvbmVudC5jbGlwUmVmID0gc291cmNlXG4gIHNvdXJjZS5idWZmZXIgPSB0aGlzLmNhY2hlW2NsaXBdXG4gIHNvdXJjZS5jb25uZWN0KGdhaW4pXG4gIGdhaW4uY29ubmVjdCh0aGlzLm1hc3RlcilcbiAgZ2Fpbi5nYWluLnZhbHVlID0gY29tcG9uZW50LnZvbHVtZVxuICBzb3VyY2Uuc3RhcnQoKVxufVxuXG5BdWRpb1N5c3RlbS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm11c3RTdG9wID0gZmFsc2VcbiAgY29tcG9uZW50LmNsaXBSZWYuc3RvcCgpXG59XG5cbkF1ZGlvU3lzdGVtLnByb3RvdHlwZS5hZGRBdWRpb1NvdXJjZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuQXVkaW9Tb3VyY2VDb21wb25lbnQoY29uZmlnLCB0aGlzKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLmxvYWRDbGlwID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5jYWNoZVtjb25maWcubmFtZV0gPSBidWZmZXJcbiAgICAgICAgcmVzb2x2ZShidWZmZXIpXG4gICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICB9KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIHhoci5zZW5kKClcbiAgfSlcbn1cblxuQXVkaW9TeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzdW1lKClcbiAgfVxuICBmb3IgKGxldCBpID0gdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpXVxuICAgIGlmIChjb21wb25lbnQubXVzdERlc3Ryb3kpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQubXVzdFN0b3ApIHtcbiAgICAgIHRoaXMuc3RvcChjb21wb25lbnQpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RQbGF5KSB7XG4gICAgICB0aGlzLnBsYXkoY29tcG9uZW50KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1N5c3RlbVxuIiwiY29uc3QgQXVkaW9Tb3VyY2VDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNsaXBSZWY6IG51bGwsXG4gICAgbXVzdFBsYXk6IGZhbHNlLFxuICAgIG11c3RTdG9wOiBmYWxzZSxcbiAgICBjbGlwTmFtZTogJ25vbmUnLFxuICAgIHZvbHVtZTogMVxuICB9LCBwYXJhbXMpXG5cbiAgdGhpcy5jbGlwUmVmID0gY29uZmlnLmNsaXBSZWZcbiAgdGhpcy5tdXN0UGxheSA9IGNvbmZpZy5tdXN0UGxheVxuICB0aGlzLm11c3RTdG9wID0gY29uZmlnLm11c3RTdG9wXG4gIHRoaXMuY2xpcE5hbWUgPSBjb25maWcuY2xpcE5hbWVcbiAgdGhpcy52b2x1bWUgPSBjb25maWcudm9sdW1lXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxufVxuXG5BdWRpb1NvdXJjZUNvbXBvbmVudC5wcm90b3R5cGUubmFtZSA9ICdhdWRpbydcblxuQXVkaW9Tb3VyY2VDb21wb25lbnQucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoY2xpcE5hbWUpIHtcbiAgaWYgKGNsaXBOYW1lKSB7XG4gICAgdGhpcy5jbGlwTmFtZSA9IGNsaXBOYW1lXG4gIH1cbiAgdGhpcy5tdXN0UGxheSA9IHRydWVcbn1cblxuQXVkaW9Tb3VyY2VDb21wb25lbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFN0b3AgPSB0cnVlXG59XG5cbkF1ZGlvU291cmNlQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3REZXN0cm95ID0gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1NvdXJjZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEltYWdlICovXG5cbmNvbnN0IExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbWFnZXNDYWNoZSA9IHt9XG4gIHRoaXMuYXVkaW9DYWNoZSA9IHt9XG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgdGhpcy5lcnJvcnMgPSAwXG4gIHRoaXMuc3VjY2VzcyA9IDBcbiAgdGhpcy5xdWV1ZWQgPSAwXG59XG5cbkxvYWRlci5wcm90b3R5cGUubG9hZEltYWdlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLnF1ZXVlZCsrXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3VjY2VzcysrXG4gICAgICB0aGlzLmltYWdlc0NhY2hlW2NvbmZpZy5uYW1lXSA9IGltYWdlXG4gICAgICB0aGlzLm9uU3VjY2Vzcyhjb25maWcpXG4gICAgICByZXNvbHZlKGltYWdlKVxuICAgIH1cbiAgICBpbWFnZS5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgdGhpcy5lcnJvcnMrK1xuICAgICAgdGhpcy5vbkVycm9yKGNvbmZpZylcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIGltYWdlLnNyYyA9IGNvbmZpZy51cmxcbiAgfSlcbn1cblxuTG9hZGVyLnByb3RvdHlwZS5sb2FkQXVkaW8gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMucXVldWVkKytcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICBjb25zdCBBdWRpb0NvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKVxuICAgIHhoci5vcGVuKCdHRVQnLCBjb25maWcudXJsLCB0cnVlKVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIEF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoeGhyLnJlc3BvbnNlLCAoYnVmZmVyKSA9PiB7XG4gICAgICAgIHRoaXMuc3VjY2VzcysrXG4gICAgICAgIHRoaXMuYXVkaW9DYWNoZVtjb25maWcubmFtZV0gPSBidWZmZXJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MoY29uZmlnKVxuICAgICAgICByZXNvbHZlKGJ1ZmZlcilcbiAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcnMrK1xuICAgICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgICByZWplY3QocmVhc29uKVxuICAgICAgfSlcbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycysrXG4gICAgICB0aGlzLm9uRXJyb3IoY29uZmlnKVxuICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICB9XG4gICAgeGhyLnNlbmQoKVxuICB9KVxufVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7fVxuXG5Mb2FkZXIucHJvdG90eXBlLm9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUub25Db21wbGV0ZSA9IGZ1bmN0aW9uICgpIHt9XG5cbkxvYWRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5xdWV1ZWQgPiAwKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0KSB7XG4gICAgICB0aGlzLnN0YXJ0ID0gdHJ1ZVxuICAgICAgdGhpcy5vblN0YXJ0KClcbiAgICB9XG4gICAgaWYgKHRoaXMucXVldWVkID09PSB0aGlzLnN1Y2Nlc3MgKyB0aGlzLmVycm9ycykge1xuICAgICAgdGhpcy5xdWV1ZWQgPSAwXG4gICAgICB0aGlzLnN1Y2Nlc3MgPSAwXG4gICAgICB0aGlzLmVycm9ycyA9IDBcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZVxuICAgICAgdGhpcy5zdGFydCA9IGZhbHNlXG4gICAgICB0aGlzLm9uQ29tcGxldGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgICB9XG4gICAgbGV0IHByb2dyZXNzID0gTWF0aC5mbG9vcigodGhpcy5zdWNjZXNzICsgdGhpcy5lcnJvcnMpIC8gdGhpcy5xdWV1ZWQgKiAxMDApXG4gICAgaWYgKGlzTmFOKHByb2dyZXNzKSkge1xuICAgICAgcHJvZ3Jlc3MgPSAxMDBcbiAgICB9XG4gICAgdGhpcy5vblByb2dyZXNzKHByb2dyZXNzKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEVuZ2luZSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5sb2FkZXIgPSBuZXcgSGFybW9ueS5Mb2FkZXIoKVxuICB0aGlzLmxvb3AgPSBuZXcgSGFybW9ueS5Mb29wU3lzdGVtKClcbiAgdGhpcy5zY2VuZSA9IG5ldyBIYXJtb255LlNjZW5lU3lzdGVtKClcbiAgdGhpcy5yZW5kZXIgPSBuZXcgSGFybW9ueS5SZW5kZXJTeXN0ZW0oY2FudmFzKVxuICB0aGlzLmF1ZGlvID0gbmV3IEhhcm1vbnkuQXVkaW9TeXN0ZW0oKVxuICB0aGlzLmVudGl0aWVzID0gbmV3IEhhcm1vbnkuRW50aXR5U3lzdGVtKClcbiAgdGhpcy5rZXlzID0gbmV3IEhhcm1vbnkuS2V5U3lzdGVtKClcbiAgdGhpcy5waHlzaWNzID0gbmV3IEhhcm1vbnkuUGh5c2ljc1N5c3RlbShjYW52YXMpXG4gIHRoaXMucG9pbnRlcnMgPSBuZXcgSGFybW9ueS5Qb2ludGVyU3lzdGVtKGNhbnZhcylcbiAgdGhpcy50cmFuc2Zvcm0gPSBuZXcgSGFybW9ueS5UcmFuc2Zvcm1TeXN0ZW0oKVxuICB0aGlzLnNjcmlwdHMgPSBuZXcgSGFybW9ueS5TY3JpcHRTeXN0ZW0oKVxuICB0aGlzLnN0YXRlID0gbmV3IEhhcm1vbnkuU3RhdGVTeXN0ZW0oKVxuICB0aGlzLmhlbHBlcnMgPSBuZXcgSGFybW9ueS5IZWxwZXJzKClcblxuICB0aGlzLmxvb3Aub25TdGVwID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0aGlzLnNjZW5lLmN1cnJlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNjZW5lLm11c3RQcmVsb2FkKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkZXIubG9hZGluZykge1xuICAgICAgICAgIHRoaXMuc2NlbmUuY3VycmVudC5wcmVsb2FkKHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkZXIudXBkYXRlKClcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIuY2FjaGUgPSB0aGlzLmxvYWRlci5pbWFnZXNDYWNoZVxuICAgICAgICAgIHRoaXMuYXVkaW8uY2FjaGUgPSB0aGlzLmxvYWRlci5hdWRpb0NhY2hlXG4gICAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0Q3JlYXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdENyZWF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlcXVlc3RVcGRhdGUoKVxuICAgICAgICB0aGlzLnNjZW5lLmN1cnJlbnQuY3JlYXRlKHRoaXMpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY2VuZS5tdXN0VXBkYXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVxdWVzdERyYXcoKVxuICAgICAgICB0aGlzLmtleXMudXBkYXRlKClcbiAgICAgICAgdGhpcy5wb2ludGVycy51cGRhdGUoKVxuICAgICAgICB0aGlzLmF1ZGlvLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMucGh5c2ljcy51cGRhdGUoKVxuICAgICAgICB0aGlzLmVudGl0aWVzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuc2NyaXB0cy51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUodGhpcylcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LnVwZGF0ZSh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2NlbmUubXVzdERyYXcpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhdygpXG4gICAgICAgIC8vIHRoaXMucGh5c2ljcy5kcmF3RGVidWdEYXRhKClcbiAgICAgICAgdGhpcy5zY2VuZS5jdXJyZW50LmRyYXcodGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NlbmUubXVzdFN3aXRjaCkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZXN0cm95KClcbiAgICAgIHRoaXMucG9pbnRlcnMuZGVzdHJveSgpXG4gICAgICB0aGlzLmtleXMuZGVzdHJveSgpXG4gICAgICB0aGlzLnNjZW5lLmN1cnJlbnQgPSB0aGlzLnNjZW5lLnJlcXVlc3RlZFxuICAgICAgdGhpcy5zY2VuZS5yZXF1ZXN0UHJlbG9hZCgpXG4gICAgfVxuICB9XG4gIHRoaXMubG9vcC5ydW4oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmVcbiIsImNvbnN0IEVudGl0eSA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IGZhbHNlXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMudGFnID0gdGFnIHx8ICdub25lJ1xufVxuXG5FbnRpdHkucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm93bmVyID0gdGhpc1xuICB0aGlzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudFxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG59XG5cbkVudGl0eS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbXBvbmVudC5kZXN0cm95KClcbiAgfSlcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5XG4iLCJjb25zdCBIZWxwZXJzID0gZnVuY3Rpb24gKCkge31cblxuSGVscGVycy5wcm90b3R5cGUuY3JlYXRlR3JpZCA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IGdyaWQgPSBuZXcgQXJyYXkoY29scylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgZ3JpZFtpXSA9IG5ldyBBcnJheShyb3dzKVxuICB9XG4gIHJldHVybiBncmlkXG59XG5cbkhlbHBlcnMucHJvdG90eXBlLmdldFJhbmRvbUludCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuSGVscGVycy5wcm90b3R5cGUuZ2V0UmFuZG9tSXRlbXMgPSBmdW5jdGlvbiAoYXJyYXksIHF1YW50aXR5KSB7XG4gIGNvbnN0IHJhbmRvbUl0ZW1zID0gW11cbiAgZm9yIChsZXQgaSA9IHF1YW50aXR5OyBpLS07KSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB0aGlzLmdldFJhbmRvbUludCgwLCBhcnJheS5sZW5ndGggLSAxKVxuICAgIHJhbmRvbUl0ZW1zLnB1c2goYXJyYXlbcmFuZG9tSW5kZXhdKVxuICAgIGFycmF5LnNwbGljZShyYW5kb21JbmRleCwgMSlcbiAgfVxuICByZXR1cm4gcmFuZG9tSXRlbXNcbn1cblxuSGVscGVycy5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpXG4gICAgY29uc3QgeCA9IGFycmF5W2ldXG4gICAgYXJyYXlbaV0gPSBhcnJheVtqXVxuICAgIGFycmF5W2pdID0geFxuICB9XG4gIHJldHVybiBhcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxwZXJzXG4iLCJjb25zdCBLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRoaXMua2V5ID0ga2V5XG4gIHRoaXMuc3RhcnQgPSBmYWxzZVxuICB0aGlzLmVuZCA9IGZhbHNlXG4gIHRoaXMuaG9sZCA9IGZhbHNlXG4gIHRoaXMuaG9sZFRpbWUgPSAwXG4gIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgdGhpcy5lbmRGcmFtZSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBLZXlTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgdGhpcy5jYWNoZSA9IHt9XG4gIHRoaXMuZGVsdGEgPSAwXG4gIHRoaXMubm93ID0gMFxuICB0aGlzLnRoZW4gPSAwXG4gIHRoaXMuZnJhbWUgPSAwXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpLCBmYWxzZSlcbn1cblxuS2V5U3lzdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtldmVudC5rZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbZXZlbnQua2V5XS5ob2xkID0gdHJ1ZVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW2V2ZW50LmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5jYWNoZVtldmVudC5rZXldLmhvbGQgPSBmYWxzZVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZ2V0T3JTZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGlmICh0eXBlb2YgdGhpcy5jYWNoZVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG5ldyBIYXJtb255LktleShrZXkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQoa2V5KVxufVxuXG5LZXlTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgIHRoaXMuZnJhbWUrK1xuICAgIHRoaXMubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuXG4gICAgdGhpcy50aGVuID0gdGhpcy5ub3dcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY2FjaGVbaV1cbiAgICAgIGlmIChrZXkuaG9sZCkge1xuICAgICAgICBrZXkuaG9sZFRpbWUgKz0gdGhpcy5kZWx0YVxuICAgICAgICBrZXkuZW5kRnJhbWUgPSAtMVxuICAgICAgICBpZiAoa2V5LnN0YXJ0RnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleS5ob2xkVGltZSA9IDBcbiAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICBpZiAoa2V5LmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgIGtleS5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAga2V5LnN0YXJ0ID0gKGtleS5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKVxuICAgICAga2V5LmVuZCA9IChrZXkuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgfVxuICB9XG59XG5cbktleVN5c3RlbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleVN5c3RlbVxuIiwiY29uc3QgTG9vcFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY2N1bXVsYXRvciA9IDBcbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5sYXN0VGltZSA9IDBcbiAgdGhpcy5sYXN0U3RlcCA9IDBcbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLmZyYW1lID0gMFxuICB0aGlzLnBhdXNlZCA9IGZhbHNlXG4gIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gdGhpcy5mcHNcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUuY29udGludWUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGF1c2VkID0gZmFsc2Vcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZVxufVxuXG5Mb29wU3lzdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gIHRpbWVzdGFtcCA9IHRpbWVzdGFtcCB8fCAwXG4gIHRoaXMudGltZXN0ZXAgPSAxMDAwIC8gdGhpcy5mcHNcbiAgdGhpcy5hY2N1bXVsYXRvciArPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lXG4gIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXBcbiAgd2hpbGUgKCF0aGlzLnBhdXNlZCAmJiB0aGlzLmFjY3VtdWxhdG9yID49IHRoaXMudGltZXN0ZXApIHtcbiAgICB0aGlzLnN0ZXAoKVxuICAgIHRoaXMuZGVsdGEgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RTdGVwXG4gICAgdGhpcy5sYXN0U3RlcCA9IHRpbWVzdGFtcFxuICAgIHRoaXMuYWNjdW11bGF0b3IgLT0gdGhpcy50aW1lc3RlcFxuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW4uYmluZCh0aGlzKSlcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mcmFtZSsrXG4gIHRoaXMub25TdGVwKClcbn1cblxuTG9vcFN5c3RlbS5wcm90b3R5cGUub25TdGVwID0gZnVuY3Rpb24gKCkge31cblxuZXhwb3J0IGRlZmF1bHQgTG9vcFN5c3RlbVxuIiwiY29uc3QgUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZVxuICB0aGlzLmhvbGQgPSBmYWxzZVxuICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgdGhpcy5lbmQgPSBmYWxzZVxuICB0aGlzLmhvbGRUaW1lID0gMFxuICB0aGlzLnN0YXJ0RnJhbWUgPSAwXG4gIHRoaXMuZW5kRnJhbWUgPSAwXG4gIHRoaXMuaWQgPSAwXG4gIHRoaXMudHlwZSA9IG51bGxcbiAgdGhpcy5zdGFydFggPSAwXG4gIHRoaXMuc3RhcnRZID0gMFxuICB0aGlzLnggPSAwXG4gIHRoaXMueSA9IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgKi9cblxuY29uc3QgUG9pbnRlclN5c3RlbSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB0aGlzLmNhY2hlID0ge31cbiAgdGhpcy5kZWx0YSA9IDBcbiAgdGhpcy5ub3cgPSAwXG4gIHRoaXMudGhlbiA9IDBcbiAgdGhpcy5mcmFtZSA9IDBcbiAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgdGhpcy5lbmFibGVQb2ludGVycygpXG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldE9yU2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmNhY2hlW3BvaW50ZXJdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuY2FjaGVbcG9pbnRlcl0gPSBuZXcgSGFybW9ueS5Qb2ludGVyKHBvaW50ZXIpXG4gIH1cbiAgcmV0dXJuIHRoaXMuY2FjaGVbcG9pbnRlcl1cbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQocG9pbnRlcilcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuZW5hYmxlUG9pbnRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FudmFzLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gIHRoaXMuY2FudmFzLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcyksIGZhbHNlKVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5nZXRQb2ludGVyQnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jYWNoZSwgaSkpIHtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmNhY2hlW2ldXG4gICAgICBpZiAocG9pbnRlci5pZCA9PT0gaWQpIHtcbiAgICAgICAgb3V0cHV0ID0gcG9pbnRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmdldEluYWN0aXZlUG9pbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG91dHB1dCA9IGZhbHNlXG4gIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGkpKSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgaWYgKHBvaW50ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBvdXRwdXQgPSBwb2ludGVyXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuUG9pbnRlclN5c3RlbS5wcm90b3R5cGUuaGFuZGxlUG9pbnRlckRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyQnlJRChldmVudC5wb2ludGVySWQpIHx8IHRoaXMuZ2V0SW5hY3RpdmVQb2ludGVyKClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IHRydWVcbiAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgcG9pbnRlci50eXBlID0gZXZlbnQucG9pbnRlclR5cGUgLy8gJ21vdXNlJywgJ3BlbicsICd0b3VjaCdcbiAgICBwb2ludGVyLmhvbGQgPSB0cnVlXG4gICAgcG9pbnRlci5zdGFydFggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wXG4gICAgcG9pbnRlci54ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0XG4gICAgcG9pbnRlci55ID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3BcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVQb2ludGVyTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICBpZiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICBwb2ludGVyLnggPSBldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnRcbiAgICBwb2ludGVyLnkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcFxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXJCeUlEKGV2ZW50LnBvaW50ZXJJZClcbiAgaWYgKHBvaW50ZXIpIHtcbiAgICBwb2ludGVyLmFjdGl2ZSA9IGZhbHNlXG4gICAgcG9pbnRlci5ob2xkID0gZmFsc2VcbiAgfVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS5oYW5kbGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIHJldHVybiBmYWxzZVxufVxuXG5Qb2ludGVyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICB0aGlzLmZyYW1lKytcbiAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlblxuICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBpKSkge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gdGhpcy5jYWNoZVtpXVxuICAgICAgICBpZiAocG9pbnRlci5ob2xkKSB7XG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKHBvaW50ZXIuc3RhcnRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSA9IDBcbiAgICAgICAgICBwb2ludGVyLnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICAgIGlmIChwb2ludGVyLmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRlci5zdGFydCA9IChwb2ludGVyLnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICAgIHBvaW50ZXIuZW5kID0gKHBvaW50ZXIuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblBvaW50ZXJTeXN0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FjaGUgPSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyU3lzdGVtXG4iLCJjb25zdCBTcHJpdGVDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGltYWdlOiBudWxsLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIHNvdXJjZVg6IDAsXG4gICAgc291cmNlWTogMCxcbiAgICBzb3VyY2VXaWR0aDogMCxcbiAgICBzb3VyY2VIZWlnaHQ6IDAsXG4gICAgYW5jaG9yWDogMC41LFxuICAgIGFuY2hvclk6IDAuNSxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH0sIHBhcmFtcylcblxuICB0aGlzLm93bmVyID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5pbWFnZSA9IGNvbmZpZy5pbWFnZVxuICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoXG4gIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodFxuICB0aGlzLnNvdXJjZVggPSBjb25maWcuc291cmNlWFxuICB0aGlzLnNvdXJjZVkgPSBjb25maWcuc291cmNlWVxuICB0aGlzLnNvdXJjZVdpZHRoID0gY29uZmlnLnNvdXJjZVdpZHRoXG4gIHRoaXMuc291cmNlSGVpZ2h0ID0gY29uZmlnLnNvdXJjZUhlaWdodFxuICB0aGlzLmFuY2hvclggPSBjb25maWcuYW5jaG9yWFxuICB0aGlzLmFuY2hvclkgPSBjb25maWcuYW5jaG9yWVxuICB0aGlzLnZpc2libGUgPSBjb25maWcudmlzaWJsZVxufVxuXG5TcHJpdGVDb21wb25lbnQucHJvdG90eXBlLm5hbWUgPSAnc3ByaXRlJ1xuXG5TcHJpdGVDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwcml0ZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIEhhcm1vbnkgSW1hZ2UgKi9cblxuY29uc3QgUmVuZGVyU3lzdGVtID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG4gIHRoaXMuY2FjaGUgPSB7fVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWNoZVtjb25maWcubmFtZV0gPSBpbWFnZVxuICAgICAgcmVzb2x2ZShpbWFnZSlcbiAgICB9XG4gICAgaW1hZ2Uub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIHJlamVjdChyZWFzb24pXG4gICAgfVxuICAgIGltYWdlLnNyYyA9IGNvbmZpZy51cmxcbiAgfSlcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpbWFnZSkge1xuICByZXR1cm4gdGhpcy5jYWNoZVtpbWFnZV1cbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFyKClcbiAgLy8gdGhpcy5jb250ZXh0LnNhdmUoKVxuXG4gIC8vIHRyYW5zbGF0ZSB0byBjYW1lcmEgY2VudGVyXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgKHRoaXMuY2FtZXJhLndpZHRoIC8gMiksXG4gIC8vICAgKHRoaXMuY2FtZXJhLmhlaWdodCAvIDIpXG4gIC8vIClcblxuICAvLyByb3RhdGVcbiAgLy8gdGhpcy5jb250ZXh0LnJvdGF0ZSh0aGlzLmNhbWVyYS5hbmdsZSlcblxuICAvLyBzY2FsZVxuICAvLyB0aGlzLmNvbnRleHQuc2NhbGUodGhpcy5jYW1lcmEuem9vbSwgdGhpcy5jYW1lcmEuem9vbSlcblxuICAvLyB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmVkJ1xuICAvLyB0aGlzLmNhbnZhcy5jaXJjbGUoMCwgMCwgMTApXG5cbiAgLy8gdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShcbiAgLy8gICAtKHRoaXMuY2FtZXJhLndpZHRoIC8gMiksXG4gIC8vICAgLSh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKVxuICAvLyApXG5cbiAgLy8gdHJhbnNsYXRlXG4gIC8vIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gIC8vICAgLXRoaXMuY2FtZXJhLnBvc2l0aW9uLngsXG4gIC8vICAgLXRoaXMuY2FtZXJhLnBvc2l0aW9uLnlcbiAgLy8gKVxuXG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG5cbiAgICBpZiAoY29tcG9uZW50Lm11c3REZXN0cm95KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21wb25lbnQudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpXG4gICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgY29tcG9uZW50Lm93bmVyLnRyYW5zZm9ybS54ICsgY29tcG9uZW50LndpZHRoICogMC41ICogY29tcG9uZW50Lm93bmVyLnRyYW5zZm9ybS5zY2FsZSAtIGNvbXBvbmVudC53aWR0aCAqIGNvbXBvbmVudC5hbmNob3JYICogY29tcG9uZW50Lm93bmVyLnRyYW5zZm9ybS5zY2FsZSxcbiAgICAgICAgICBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLnkgKyBjb21wb25lbnQuaGVpZ2h0ICogMC41ICogY29tcG9uZW50Lm93bmVyLnRyYW5zZm9ybS5zY2FsZSAtIGNvbXBvbmVudC5oZWlnaHQgKiBjb21wb25lbnQuYW5jaG9yWSAqIGNvbXBvbmVudC5vd25lci50cmFuc2Zvcm0uc2NhbGVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmNvbnRleHQucm90YXRlKGNvbXBvbmVudC5vd25lci50cmFuc2Zvcm0uYW5nbGUpXG4gICAgICAgIHRoaXMuY29udGV4dC5zY2FsZShcbiAgICAgICAgICBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLnNjYWxlLFxuICAgICAgICAgIGNvbXBvbmVudC5vd25lci50cmFuc2Zvcm0uc2NhbGVcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChjb21wb25lbnQuc291cmNlV2lkdGggPT09IDApIHtcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlV2lkdGggPSBjb21wb25lbnQuaW1hZ2Uud2lkdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQuc291cmNlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgY29tcG9uZW50LnNvdXJjZUhlaWdodCA9IGNvbXBvbmVudC5pbWFnZS5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgY29tcG9uZW50LmltYWdlLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VYLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VZLFxuICAgICAgICAgIGNvbXBvbmVudC5zb3VyY2VXaWR0aCxcbiAgICAgICAgICBjb21wb25lbnQuc291cmNlSGVpZ2h0LFxuICAgICAgICAgIGNvbXBvbmVudC53aWR0aCAqIC0wLjUsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LmhlaWdodCAqIC0wLjUsIC8vIGRvIG5vdCB0b3VjaCB0aGlzXG4gICAgICAgICAgY29tcG9uZW50LndpZHRoLCAvLyBkbyBub3QgdG91Y2ggdGhpc1xuICAgICAgICAgIGNvbXBvbmVudC5oZWlnaHQgLy8gZG8gbm90IHRvdWNoIHRoaXNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKVxufVxuXG5SZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmFkZFNwcml0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IEhhcm1vbnkuU3ByaXRlQ29tcG9uZW50KGNvbmZpZylcbiAgdGhpcy5jb21wb25lbnRzLnVuc2hpZnQoY29tcG9uZW50KVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGNvbmZpZy50ZXh0LCBjb25maWcueCwgY29uZmlnLnkpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0LmFyYyhjb25maWcueCwgY29uZmlnLnksIGNvbmZpZy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbn1cblxuUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5saW5lID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgdGhpcy5jb250ZXh0Lm1vdmVUbyhjb25maWcuYXgsIGNvbmZpZy5heSlcbiAgdGhpcy5jb250ZXh0LmxpbmVUbyhjb25maWcuYngsIGNvbmZpZy5ieSlcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG59XG5cblJlbmRlclN5c3RlbS5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5jb250ZXh0LnJlY3QoY29uZmlnLngsIGNvbmZpZy55LCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJTeXN0ZW1cbiIsImNvbnN0IFNjZW5lID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB0aGlzLm1ldGhvZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwcmVsb2FkOiAoKSA9PiB7fSxcbiAgICBjcmVhdGU6ICgpID0+IHt9LFxuICAgIHVwZGF0ZTogKCkgPT4ge30sXG4gICAgZHJhdzogKCkgPT4ge31cbiAgfSwgcGFyYW1zKVxufVxuXG5TY2VuZS5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5wcmVsb2FkKGVuZ2luZSlcbn1cblxuU2NlbmUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5jcmVhdGUoZW5naW5lKVxufVxuXG5TY2VuZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLnVwZGF0ZShlbmdpbmUpXG59XG5cblNjZW5lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLmRyYXcoZW5naW5lKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVxuIiwiY29uc3QgU2NlbmVTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY3VycmVudCA9IG51bGxcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBudWxsXG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnN3aXRjaCA9IGZ1bmN0aW9uIChzY2VuZSkge1xuICB0aGlzLnJlcXVlc3RlZCA9IHNjZW5lXG4gIHRoaXMucmVxdWVzdFN3aXRjaCgpXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0UHJlbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IHRydWVcbiAgdGhpcy5tdXN0Q3JlYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tdXN0RHJhdyA9IGZhbHNlXG4gIHRoaXMubXVzdFN3aXRjaCA9IGZhbHNlXG59XG5cblNjZW5lU3lzdGVtLnByb3RvdHlwZS5yZXF1ZXN0Q3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm11c3RQcmVsb2FkID0gZmFsc2VcbiAgdGhpcy5tdXN0Q3JlYXRlID0gdHJ1ZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gZmFsc2Vcbn1cblxuU2NlbmVTeXN0ZW0ucHJvdG90eXBlLnJlcXVlc3RVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSB0cnVlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdERyYXcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXVzdFByZWxvYWQgPSBmYWxzZVxuICB0aGlzLm11c3RDcmVhdGUgPSBmYWxzZVxuICB0aGlzLm11c3RVcGRhdGUgPSBmYWxzZVxuICB0aGlzLm11c3REcmF3ID0gdHJ1ZVxuICB0aGlzLm11c3RTd2l0Y2ggPSBmYWxzZVxufVxuXG5TY2VuZVN5c3RlbS5wcm90b3R5cGUucmVxdWVzdFN3aXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0UHJlbG9hZCA9IGZhbHNlXG4gIHRoaXMubXVzdENyZWF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IGZhbHNlXG4gIHRoaXMubXVzdERyYXcgPSBmYWxzZVxuICB0aGlzLm11c3RTd2l0Y2ggPSB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lU3lzdGVtXG4iLCJjb25zdCBTY3JpcHRDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLm11c3RTdGFydCA9IHRydWVcbiAgdGhpcy5tdXN0VXBkYXRlID0gZmFsc2VcbiAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgc3RhcnQ6ICgpID0+IHt9LFxuICAgIHVwZGF0ZTogKCkgPT4ge31cbiAgfSwgcGFyYW1zKVxufVxuXG5TY3JpcHRDb21wb25lbnQucHJvdG90eXBlLm5hbWUgPSAnc2NyaXB0J1xuXG5TY3JpcHRDb21wb25lbnQucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICB0aGlzLm11c3RTdGFydCA9IGZhbHNlXG4gIHRoaXMubXVzdFVwZGF0ZSA9IHRydWVcbiAgcmV0dXJuIHRoaXMubWV0aG9kcy5zdGFydChlbmdpbmUpXG59XG5cblNjcmlwdENvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICByZXR1cm4gdGhpcy5tZXRob2RzLnVwZGF0ZShlbmdpbmUpXG59XG5cblNjcmlwdENvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0Q29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBTY3JpcHRTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cblNjcmlwdFN5c3RlbS5wcm90b3R5cGUuYWRkU2NyaXB0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5TY3JpcHRDb21wb25lbnQoY29uZmlnKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuU2NyaXB0U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5tdXN0U3RhcnQpIHtcbiAgICAgIGNvbXBvbmVudC5zdGFydChlbmdpbmUpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RVcGRhdGUpIHtcbiAgICAgIGNvbXBvbmVudC51cGRhdGUoZW5naW5lKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRTeXN0ZW1cbiIsImNvbnN0IFN0YXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB0aGlzLm93bmVyID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy5tdXN0U3dpdGNoID0gdHJ1ZVxuICB0aGlzLnJlcXVlc3RlZCA9IHBhcmFtcy5jdXJyZW50XG4gIHRoaXMuY3VycmVudCA9IG51bGxcbiAgdGhpcy5zdGF0ZXMgPSBwYXJhbXMuc3RhdGVzXG59XG5cblN0YXRlQ29tcG9uZW50LnByb3RvdHlwZS5uYW1lID0gJ3N0YXRlJ1xuXG5TdGF0ZUNvbXBvbmVudC5wcm90b3R5cGUuc3dpdGNoID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHRoaXMubXVzdFN3aXRjaCA9IHRydWVcbiAgdGhpcy5yZXF1ZXN0ZWQgPSBzdGF0ZVxufVxuXG5TdGF0ZUNvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVDb21wb25lbnRcbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IFN0YXRlU3lzdGVtID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxufVxuXG5TdGF0ZVN5c3RlbS5wcm90b3R5cGUuYWRkU3RhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBIYXJtb255LlN0YXRlQ29tcG9uZW50KGNvbmZpZylcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cblN0YXRlU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5jdXJyZW50ICYmIGNvbXBvbmVudC5tdXN0U3dpdGNoKSB7XG4gICAgICBpZiAoY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0uZXhpdCkge1xuICAgICAgICBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS5leGl0KGVuZ2luZSwgY29tcG9uZW50Lm93bmVyKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Lm11c3RTd2l0Y2gpIHtcbiAgICAgIGNvbXBvbmVudC5jdXJyZW50ID0gY29tcG9uZW50LnJlcXVlc3RlZFxuICAgICAgaWYgKGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZXNbY29tcG9uZW50LmN1cnJlbnRdLmVudGVyKGVuZ2luZSwgY29tcG9uZW50Lm93bmVyKVxuICAgICAgfVxuICAgICAgY29tcG9uZW50Lm11c3RTd2l0Y2ggPSBmYWxzZVxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50LmN1cnJlbnQgJiYgY29tcG9uZW50LnN0YXRlc1tjb21wb25lbnQuY3VycmVudF0udXBkYXRlKSB7XG4gICAgICBjb21wb25lbnQuc3RhdGVzW2NvbXBvbmVudC5jdXJyZW50XS51cGRhdGUoZW5naW5lLCBjb21wb25lbnQub3duZXIpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlU3lzdGVtXG4iLCJjb25zdCBUcmFuc2Zvcm1Db21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICAgIGFuZ2xlOiAwLFxuICAgIHNjYWxlOiAxXG4gIH0sIHBhcmFtcylcblxuICB0aGlzLm93bmVyID0gbnVsbFxuICB0aGlzLm11c3REZXN0cm95ID0gZmFsc2VcbiAgdGhpcy54ID0gY29uZmlnLnhcbiAgdGhpcy55ID0gY29uZmlnLnlcbiAgdGhpcy5hbmdsZSA9IGNvbmZpZy5hbmdsZVxuICB0aGlzLnNjYWxlID0gY29uZmlnLnNjYWxlXG59XG5cblRyYW5zZm9ybUNvbXBvbmVudC5wcm90b3R5cGUubmFtZSA9ICd0cmFuc2Zvcm0nXG5cblRyYW5zZm9ybUNvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tdXN0RGVzdHJveSA9IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgSGFybW9ueSAqL1xuXG5jb25zdCBUcmFuc2Zvcm1TeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cblRyYW5zZm9ybVN5c3RlbS5wcm90b3R5cGUuYWRkVHJhbnNmb3JtQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5UcmFuc2Zvcm1Db21wb25lbnQoY29uZmlnKVxuICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuVHJhbnNmb3JtU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm1TeXN0ZW1cbiIsIi8qIGdsb2JhbCBIYXJtb255ICovXG5cbmNvbnN0IEVudGl0eVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWNoZSA9IFtdXG4gIHRoaXMuY29tcG9uZW50cyA9IFtdXG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBlbnRpdHkgPSBuZXcgSGFybW9ueS5FbnRpdHkoY29uZmlnKVxuICB0aGlzLmNhY2hlLnB1c2goZW50aXR5KVxuICByZXR1cm4gZW50aXR5XG59XG5cbkVudGl0eVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmNhY2hlW2ldXG4gICAgaWYgKGVudGl0eS5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jYWNoZS5zcGxpY2UoaSwgMSlcbiAgICB9XG4gIH1cbn1cblxuRW50aXR5U3lzdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmNhY2hlW2ldXG4gICAgZW50aXR5LmRlc3Ryb3koKVxuICB9XG4gIHRoaXMuY2FjaGUgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlTeXN0ZW1cbiIsIi8qIGdsb2JhbCBCb3gyRCBIYXJtb255ICovXG5cbmNvbnN0IFBoeXNpY3NTeXN0ZW0gPSBmdW5jdGlvbiAoY2FudmFzKSB7XG4gIGNvbnN0IEIyV29ybGQgPSBCb3gyRC5EeW5hbWljcy5iMldvcmxkXG4gIGNvbnN0IEIyVmVjMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyVmVjMlxuICBjb25zdCBCMkRlYnVnRHJhdyA9IEJveDJELkR5bmFtaWNzLmIyRGVidWdEcmF3XG4gIGNvbnN0IEIyQ29udGFjdExpc3RlbmVyID0gQm94MkQuRHluYW1pY3MuYjJDb250YWN0TGlzdGVuZXJcblxuICB0aGlzLndvcmxkID0gbmV3IEIyV29ybGQobmV3IEIyVmVjMigwLCAwKSwgdHJ1ZSlcbiAgdGhpcy5mcHMgPSA2MFxuICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICB0aGlzLnNjYWxlID0gMTAwXG4gIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuY29udGFjdHMgPSBuZXcgQjJDb250YWN0TGlzdGVuZXIoKVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb250YWN0c1xuXG4gIHRoaXMud29ybGQuU2V0Q29udGFjdExpc3RlbmVyKHRoaXMuY29udGFjdHMpXG5cbiAgdGhpcy5jb250YWN0cy5CZWdpbkNvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEEgPSBjb250YWN0LkdldEZpeHR1cmVBKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGNvbXBvbmVudEIgPSBjb250YWN0LkdldEZpeHR1cmVCKCkuR2V0Qm9keSgpLmNvbXBvbmVudFxuICAgIGNvbnN0IGVudGl0eUEgPSBjb21wb25lbnRBLm93bmVyXG4gICAgY29uc3QgZW50aXR5QiA9IGNvbXBvbmVudEIub3duZXJcbiAgICBjb21wb25lbnRBLm9uQ29udGFjdEJlZ2luKGVudGl0eUEsIGVudGl0eUIpXG4gICAgY29tcG9uZW50Qi5vbkNvbnRhY3RCZWdpbihlbnRpdHlCLCBlbnRpdHlBKVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5FbmRDb250YWN0ID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICBjb25zdCBjb21wb25lbnRBID0gY29udGFjdC5HZXRGaXh0dXJlQSgpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBjb21wb25lbnRCID0gY29udGFjdC5HZXRGaXh0dXJlQigpLkdldEJvZHkoKS5jb21wb25lbnRcbiAgICBjb25zdCBlbnRpdHlBID0gY29tcG9uZW50QS5vd25lclxuICAgIGNvbnN0IGVudGl0eUIgPSBjb21wb25lbnRCLm93bmVyXG4gICAgY29tcG9uZW50QS5vbkNvbnRhY3RFbmQoZW50aXR5QSwgZW50aXR5QilcbiAgICBjb21wb25lbnRCLm9uQ29udGFjdEVuZChlbnRpdHlCLCBlbnRpdHlBKVxuICB9XG5cbiAgdGhpcy5jb250YWN0cy5QcmVTb2x2ZSA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEub3duZXJcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5vd25lclxuICAgIGNvbXBvbmVudEEub25Db250YWN0UHJlU29sdmUoZW50aXR5QSwgZW50aXR5QilcbiAgICBjb21wb25lbnRCLm9uQ29udGFjdFByZVNvbHZlKGVudGl0eUIsIGVudGl0eUEpXG4gIH1cblxuICB0aGlzLmNvbnRhY3RzLlBvc3RTb2x2ZSA9IGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgY29uc3QgY29tcG9uZW50QSA9IGNvbnRhY3QuR2V0Rml4dHVyZUEoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50QiA9IGNvbnRhY3QuR2V0Rml4dHVyZUIoKS5HZXRCb2R5KCkuY29tcG9uZW50XG4gICAgY29uc3QgZW50aXR5QSA9IGNvbXBvbmVudEEub3duZXJcbiAgICBjb25zdCBlbnRpdHlCID0gY29tcG9uZW50Qi5vd25lclxuICAgIGNvbXBvbmVudEEub25Db250YWN0UG9zdFNvbHZlKGVudGl0eUEsIGVudGl0eUIpXG4gICAgY29tcG9uZW50Qi5vbkNvbnRhY3RQb3N0U29sdmUoZW50aXR5QiwgZW50aXR5QSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWJ1Z1xuXG4gIGNvbnN0IGRlYnVnRHJhdyA9IG5ldyBCMkRlYnVnRHJhdyh0aGlzLmNvbnRleHQpXG4gIGRlYnVnRHJhdy5TZXRTcHJpdGUoY2FudmFzLmdldENvbnRleHQoJzJkJykpXG4gIGRlYnVnRHJhdy5TZXREcmF3U2NhbGUodGhpcy5zY2FsZSlcbiAgZGVidWdEcmF3LlNldEZpbGxBbHBoYSgwLjUpXG4gIGRlYnVnRHJhdy5TZXRGaWxsQWxwaGEoMC41KVxuICBkZWJ1Z0RyYXcuU2V0RmxhZ3MoQjJEZWJ1Z0RyYXcuZV9zaGFwZUJpdClcbiAgZGVidWdEcmF3LkFwcGVuZEZsYWdzKEIyRGVidWdEcmF3LmVfam9pbnRCaXQpXG4gIHRoaXMud29ybGQuU2V0RGVidWdEcmF3KGRlYnVnRHJhdylcbiAgdGhpcy53b3JsZC5tX2RlYnVnRHJhdy5tX3Nwcml0ZS5ncmFwaGljcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5zZXRHcmF2aXR5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB0aGlzLndvcmxkLlNldEdyYXZpdHkoY29uZmlnKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5kcmF3RGVidWdEYXRhID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndvcmxkLkRyYXdEZWJ1Z0RhdGEoKVxufVxuXG5QaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5hZGRQaHlzaWNzQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBjb25zdCBjb21wb25lbnQgPSBuZXcgSGFybW9ueS5QaHlzaWNzQ29tcG9uZW50KGNvbmZpZywgdGhpcylcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cblBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53b3JsZC5TdGVwKDEgLyB0aGlzLmZwcywgOCwgMylcbiAgdGhpcy53b3JsZC5DbGVhckZvcmNlcygpXG4gIGZvciAobGV0IGkgPSB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW2ldXG4gICAgaWYgKGNvbXBvbmVudC5tdXN0RGVzdHJveSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNvbXBvbmVudC5nZXRQb3NpdGlvbigpXG4gICAgICBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLnggPSBwb3NpdGlvbi54XG4gICAgICBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLnkgPSBwb3NpdGlvbi55XG4gICAgICBjb21wb25lbnQub3duZXIudHJhbnNmb3JtLmFuZ2xlID0gY29tcG9uZW50LmdldEFuZ2xlKClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc1N5c3RlbVxuIiwiLyogZ2xvYmFsIEJveDJEICovXG5cbmNvbnN0IFBoeXNpY3NDb21wb25lbnQgPSBmdW5jdGlvbiAocGFyYW1zLCBzeXN0ZW0pIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogNTAsXG4gICAgeTogNTAsXG4gICAgdHlwZTogJ2R5bmFtaWMnLFxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBhbGxvd1NsZWVwOiB0cnVlLFxuICAgIGF3YWtlOiB0cnVlLFxuICAgIGJ1bGxldDogZmFsc2UsXG4gICAgZml4ZWRSb3RhdGlvbjogZmFsc2UsXG4gICAgYW5nbGU6IDAsXG4gICAgYW5ndWxhckRhbXBpbmc6IDAsXG4gICAgYW5ndWxhclZlbG9jaXR5OiAwLFxuICAgIGxpbmVhckRhbXBpbmc6IDAsXG4gICAgbGluZWFyVmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxuICAgIHVzZXJEYXRhOiB7fVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuXG4gIHRoaXMub3duZXIgPSBudWxsXG4gIHRoaXMubXVzdERlc3Ryb3kgPSBmYWxzZVxuICB0aGlzLmJvZHkgPSBudWxsXG4gIHRoaXMuc3lzdGVtID0gc3lzdGVtXG4gIHRoaXMuZml4dHVyZXMgPSBbXVxuICB0aGlzLnR5cGUgPSBjb25maWcudHlwZVxuXG4gIGNvbnN0IEIyQm9keURlZiA9IEJveDJELkR5bmFtaWNzLmIyQm9keURlZlxuICBjb25zdCBCMkJvZHkgPSBCb3gyRC5EeW5hbWljcy5iMkJvZHlcblxuICBjb25zdCBib2R5RGVmID0gbmV3IEIyQm9keURlZigpXG4gIGJvZHlEZWYucG9zaXRpb24ueCA9IGNvbmZpZy54IC8gdGhpcy5zeXN0ZW0uc2NhbGVcbiAgYm9keURlZi5wb3NpdGlvbi55ID0gY29uZmlnLnkgLyB0aGlzLnN5c3RlbS5zY2FsZVxuICBib2R5RGVmLmFjdGl2ZSA9IGNvbmZpZy5hY3RpdmVcbiAgYm9keURlZi5hbGxvd1NsZWVwID0gY29uZmlnLmFsbG93U2xlZXBcbiAgYm9keURlZi5hd2FrZSA9IGNvbmZpZy5hd2FrZVxuICBib2R5RGVmLmJ1bGxldCA9IGNvbmZpZy5idWxsZXRcbiAgYm9keURlZi5maXhlZFJvdGF0aW9uID0gY29uZmlnLmZpeGVkUm90YXRpb25cbiAgYm9keURlZi5hbmdsZSA9IGNvbmZpZy5hbmdsZVxuICBib2R5RGVmLmFuZ3VsYXJEYW1waW5nID0gY29uZmlnLmFuZ3VsYXJEYW1waW5nXG4gIGJvZHlEZWYuYW5ndWxhclZlbG9jaXR5ID0gY29uZmlnLmFuZ3VsYXJWZWxvY2l0eVxuICBib2R5RGVmLmxpbmVhckRhbXBpbmcgPSBjb25maWcubGluZWFyRGFtcGluZ1xuICBib2R5RGVmLmxpbmVhclZlbG9jaXR5ID0gY29uZmlnLmxpbmVhclZlbG9jaXR5XG4gIGJvZHlEZWYudXNlckRhdGEgPSBjb25maWcudXNlckRhdGFcblxuICBpZiAodGhpcy50eXBlID09PSAnc3RhdGljJykge1xuICAgIGJvZHlEZWYudHlwZSA9IEIyQm9keS5iMl9zdGF0aWNCb2R5XG4gIH1cblxuICBpZiAodGhpcy50eXBlID09PSAnZHluYW1pYycpIHtcbiAgICBib2R5RGVmLnR5cGUgPSBCMkJvZHkuYjJfZHluYW1pY0JvZHlcbiAgfVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICdraW5lbWF0aWMnKSB7XG4gICAgYm9keURlZi50eXBlID0gQjJCb2R5LmIyX2tpbmVtYXRpY0JvZHlcbiAgfVxuXG4gIHRoaXMuYm9keSA9IHRoaXMuc3lzdGVtLndvcmxkLkNyZWF0ZUJvZHkoYm9keURlZilcbiAgdGhpcy5ib2R5LmFjdGl2ZSA9IHRydWVcbiAgdGhpcy5ib2R5LmNvbXBvbmVudCA9IHRoaXNcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUubmFtZSA9ICdwaHlzaWNzJ1xuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5zZXRMaW5lYXJWZWxvY2l0eSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdGhpcy5ib2R5LlNldEF3YWtlKHRydWUpXG4gIHRoaXMuYm9keS5TZXRMaW5lYXJWZWxvY2l0eSh7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnN5c3RlbS5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZml4dHVyZXMuZm9yRWFjaCgoZml4dHVyZSkgPT4ge1xuICAgIHRoaXMuYm9keS5EZXN0cm95Rml4dHVyZShmaXh0dXJlKVxuICB9KVxuICB0aGlzLnN5c3RlbS53b3JsZC5EZXN0cm95Qm9keSh0aGlzLmJvZHkpXG4gIHRoaXMubXVzdERlc3Ryb3kgPSB0cnVlXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuYm9keS5HZXRQb3NpdGlvbigpXG4gIHJldHVybiB7XG4gICAgeDogcG9zaXRpb24ueCAqIHRoaXMuc3lzdGVtLnNjYWxlLFxuICAgIHk6IHBvc2l0aW9uLnkgKiB0aGlzLnN5c3RlbS5zY2FsZVxuICB9XG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ib2R5LkdldEFuZ2xlKClcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuYm9keS5TZXRQb3NpdGlvbih7XG4gICAgeDogY29uZmlnLnggLyB0aGlzLnN5c3RlbS5zY2FsZSxcbiAgICB5OiBjb25maWcueSAvIHRoaXMuc3lzdGVtLnNjYWxlXG4gIH0pXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmFwcGx5Rm9yY2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHRoaXMuYm9keS5BcHBseUZvcmNlKGNvbmZpZywgdGhpcy5ib2R5LkdldFdvcmxkQ2VudGVyKCkpXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmdldEZpeHR1cmVEZWYgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IEIyRml4dHVyZURlZiA9IEJveDJELkR5bmFtaWNzLmIyRml4dHVyZURlZlxuICBjb25zdCBmaXhEZWYgPSBuZXcgQjJGaXh0dXJlRGVmKClcbiAgZml4RGVmLmRlbnNpdHkgPSBjb25maWcuZGVuc2l0eVxuICBmaXhEZWYuZnJpY3Rpb24gPSBjb25maWcuZnJpY3Rpb25cbiAgZml4RGVmLnJlc3RpdHV0aW9uID0gY29uZmlnLnJlc3RpdHV0aW9uXG4gIGZpeERlZi5pc1NlbnNvciA9IGNvbmZpZy5pc1NlbnNvclxuICByZXR1cm4gZml4RGVmXG59XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLmFkZENpcmNsZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHJhZGl1czogMjUsXG4gICAgZGVuc2l0eTogMSxcbiAgICBmcmljdGlvbjogMC41LFxuICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgaXNTZW5zb3I6IGZhbHNlXG4gIH1cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgcGFyYW1zKVxuICBjb25zdCBmaXh0dXJlRGVmaW5pdGlvbiA9IHRoaXMuZ2V0Rml4dHVyZURlZihjb25maWcpXG4gIGNvbnN0IEIyQ2lyY2xlU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyQ2lyY2xlU2hhcGVcbiAgY29uc3QgZml4dHVyZURlZiA9IGZpeHR1cmVEZWZpbml0aW9uXG4gIGZpeHR1cmVEZWYuc2hhcGUgPSBuZXcgQjJDaXJjbGVTaGFwZShjb25maWcucmFkaXVzIC8gdGhpcy5zeXN0ZW0uc2NhbGUpXG4gIGZpeHR1cmVEZWYuc2hhcGUubV9wID0ge1xuICAgIHg6IGNvbmZpZy54IC8gdGhpcy5zeXN0ZW0uc2NhbGUsXG4gICAgeTogY29uZmlnLnkgLyB0aGlzLnN5c3RlbS5zY2FsZVxuICB9XG4gIGNvbnN0IGZpeHR1cmUgPSB0aGlzLmJvZHkuQ3JlYXRlRml4dHVyZShmaXh0dXJlRGVmKVxuICB0aGlzLmZpeHR1cmVzLnB1c2goZml4dHVyZSlcbiAgcmV0dXJuIGZpeHR1cmVcbn1cblxuUGh5c2ljc0NvbXBvbmVudC5wcm90b3R5cGUub25Db250YWN0QmVnaW4gPSBmdW5jdGlvbiAobWUsIG90aGVyKSB7fVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5vbkNvbnRhY3RFbmQgPSBmdW5jdGlvbiAobWUsIG90aGVyKSB7fVxuXG5QaHlzaWNzQ29tcG9uZW50LnByb3RvdHlwZS5vbkNvbnRhY3RQcmVTb2x2ZSA9IGZ1bmN0aW9uIChtZSwgb3RoZXIpIHt9XG5cblBoeXNpY3NDb21wb25lbnQucHJvdG90eXBlLm9uQ29udGFjdFBvc3RTb2x2ZSA9IGZ1bmN0aW9uIChtZSwgb3RoZXIpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3NDb21wb25lbnRcbiIsImltcG9ydCBBdWRpb1N5c3RlbSBmcm9tICcuL2F1ZGlvLXN5c3RlbS9hdWRpby1zeXN0ZW0nXG5pbXBvcnQgQXVkaW9Tb3VyY2VDb21wb25lbnQgZnJvbSAnLi9hdWRpby1zeXN0ZW0vYXVkaW8tc291cmNlLWNvbXBvbmVudCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXIvbG9hZGVyJ1xuaW1wb3J0IEVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5LXN5c3RlbS9lbnRpdHknXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMvaGVscGVycydcbmltcG9ydCBLZXkgZnJvbSAnLi9rZXktc3lzdGVtL2tleSdcbmltcG9ydCBLZXlTeXN0ZW0gZnJvbSAnLi9rZXktc3lzdGVtL2tleS1zeXN0ZW0nXG5pbXBvcnQgTG9vcFN5c3RlbSBmcm9tICcuL2xvb3Atc3lzdGVtL2xvb3Atc3lzdGVtJ1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi9wb2ludGVyLXN5c3RlbS9wb2ludGVyJ1xuaW1wb3J0IFBvaW50ZXJTeXN0ZW0gZnJvbSAnLi9wb2ludGVyLXN5c3RlbS9wb2ludGVyLXN5c3RlbSdcbmltcG9ydCBTcHJpdGVDb21wb25lbnQgZnJvbSAnLi9yZW5kZXItc3lzdGVtL3Nwcml0ZS1jb21wb25lbnQnXG5pbXBvcnQgUmVuZGVyU3lzdGVtIGZyb20gJy4vcmVuZGVyLXN5c3RlbS9yZW5kZXItc3lzdGVtJ1xuaW1wb3J0IFNjZW5lIGZyb20gJy4vc2NlbmUtc3lzdGVtL3NjZW5lJ1xuaW1wb3J0IFNjZW5lU3lzdGVtIGZyb20gJy4vc2NlbmUtc3lzdGVtL3NjZW5lLXN5c3RlbSdcbmltcG9ydCBTY3JpcHRDb21wb25lbnQgZnJvbSAnLi9zY3JpcHQtc3lzdGVtL3NjcmlwdC1jb21wb25lbnQnXG5pbXBvcnQgU2NyaXB0U3lzdGVtIGZyb20gJy4vc2NyaXB0LXN5c3RlbS9zY3JpcHQtc3lzdGVtJ1xuaW1wb3J0IFN0YXRlQ29tcG9uZW50IGZyb20gJy4vc3RhdGUtc3lzdGVtL3N0YXRlLWNvbXBvbmVudCdcbmltcG9ydCBTdGF0ZVN5c3RlbSBmcm9tICcuL3N0YXRlLXN5c3RlbS9zdGF0ZS1zeXN0ZW0nXG5pbXBvcnQgVHJhbnNmb3JtQ29tcG9uZW50IGZyb20gJy4vdHJhbnNmb3JtLXN5c3RlbS90cmFuc2Zvcm0tY29tcG9uZW50J1xuaW1wb3J0IFRyYW5zZm9ybVN5c3RlbSBmcm9tICcuL3RyYW5zZm9ybS1zeXN0ZW0vdHJhbnNmb3JtLXN5c3RlbSdcbmltcG9ydCBFbnRpdHlTeXN0ZW0gZnJvbSAnLi9lbnRpdHktc3lzdGVtL2VudGl0eS1zeXN0ZW0nXG5pbXBvcnQgUGh5c2ljc1N5c3RlbSBmcm9tICcuL3BoeXNpY3Mtc3lzdGVtL3BoeXNpY3Mtc3lzdGVtJ1xuaW1wb3J0IFBoeXNpY3NDb21wb25lbnQgZnJvbSAnLi9waHlzaWNzLXN5c3RlbS9waHlzaWNzLWNvbXBvbmVudCdcblxuY29uc3QgSGFybW9ueSA9IHtcbiAgQXVkaW9TeXN0ZW06IEF1ZGlvU3lzdGVtLFxuICBBdWRpb1NvdXJjZUNvbXBvbmVudDogQXVkaW9Tb3VyY2VDb21wb25lbnQsXG4gIExvYWRlcjogTG9hZGVyLFxuICBFbmdpbmU6IEVuZ2luZSxcbiAgRW50aXR5OiBFbnRpdHksXG4gIEVudGl0eVN5c3RlbTogRW50aXR5U3lzdGVtLFxuICBIZWxwZXJzOiBIZWxwZXJzLFxuICBLZXk6IEtleSxcbiAgS2V5U3lzdGVtOiBLZXlTeXN0ZW0sXG4gIExvb3BTeXN0ZW06IExvb3BTeXN0ZW0sXG4gIFBoeXNpY3NDb21wb25lbnQ6IFBoeXNpY3NDb21wb25lbnQsXG4gIFBoeXNpY3NTeXN0ZW06IFBoeXNpY3NTeXN0ZW0sXG4gIFBvaW50ZXI6IFBvaW50ZXIsXG4gIFBvaW50ZXJTeXN0ZW06IFBvaW50ZXJTeXN0ZW0sXG4gIFNwcml0ZUNvbXBvbmVudDogU3ByaXRlQ29tcG9uZW50LFxuICBSZW5kZXJTeXN0ZW06IFJlbmRlclN5c3RlbSxcbiAgU2NlbmU6IFNjZW5lLFxuICBTY2VuZVN5c3RlbTogU2NlbmVTeXN0ZW0sXG4gIFNjcmlwdENvbXBvbmVudDogU2NyaXB0Q29tcG9uZW50LFxuICBTY3JpcHRTeXN0ZW06IFNjcmlwdFN5c3RlbSxcbiAgU3RhdGVDb21wb25lbnQ6IFN0YXRlQ29tcG9uZW50LFxuICBTdGF0ZVN5c3RlbTogU3RhdGVTeXN0ZW0sXG4gIFRyYW5zZm9ybUNvbXBvbmVudDogVHJhbnNmb3JtQ29tcG9uZW50LFxuICBUcmFuc2Zvcm1TeXN0ZW06IFRyYW5zZm9ybVN5c3RlbVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXJtb255XG4iXSwic291cmNlUm9vdCI6IiJ9