!(function (r, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((r = "undefined" != typeof globalThis ? globalThis : r || self).Redux =
          {})
      );
})(this, function (r) {
  "use strict";
  function t(r) {
    return (
      "Minified Redux error #" +
      r +
      "; visit https://redux.js.org/Errors?code=" +
      r +
      " for the full message or use the non-minified dev environment for full errors. "
    );
  }
  var e = (function () {
      return (
        ("function" == typeof Symbol && Symbol.observable) || "@@observable"
      );
    })(),
    n = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
    o = {
      INIT: "@@redux/INIT" + n(),
      REPLACE: "@@redux/REPLACE" + n(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + n();
      },
    };
  function i(r) {
    if ("object" != typeof r || null === r) return !1;
    for (var t = r; null !== Object.getPrototypeOf(t); )
      t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(r) === t;
  }
  function f(r, t) {
    return function () {
      for (var e = arguments.length, n = Array(e), o = 0; e > o; o++)
        n[o] = arguments[o];
      return t(r.apply(this, n));
    };
  }
  function u(r, t) {
    var e = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(r);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(r, t).enumerable;
        })),
        e.push.apply(e, n);
    }
    return e;
  }
  function c(r) {
    for (var t = 1; arguments.length > t; t++) {
      var e = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? u(Object(e), !0).forEach(function (t) {
            p(r, t, e[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
        : u(Object(e)).forEach(function (t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
          });
    }
    return r;
  }
  function p(r, t, e) {
    return (
      t in r
        ? Object.defineProperty(r, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (r[t] = e),
      r
    );
  }
  function a() {
    for (var r = arguments.length, t = Array(r), e = 0; r > e; e++)
      t[e] = arguments[e];
    return 0 === t.length
      ? function (r) {
          return r;
        }
      : 1 === t.length
      ? t[0]
      : t.reduce(function (r, t) {
          return function () {
            return r(t.apply(void 0, arguments));
          };
        });
  }
  (r.__DO_NOT_USE__ActionTypes = o),
    (r.applyMiddleware = function () {
      for (var r = arguments.length, e = Array(r), n = 0; r > n; n++)
        e[n] = arguments[n];
      return function (r) {
        return function (n, o) {
          var i = r(n, o),
            f = function () {
              throw Error(t(15));
            },
            u = {
              getState: i.getState,
              dispatch: function (r) {
                for (
                  var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), n = 1;
                  t > n;
                  n++
                )
                  e[n - 1] = arguments[n];
                return f.apply(void 0, [r].concat(e));
              },
            },
            p = e.map(function (r) {
              return r(u);
            });
          return (
            (f = a.apply(void 0, p)(i.dispatch)),
            c(c({}, i), {}, { dispatch: f })
          );
        };
      };
    }),
    (r.bindActionCreators = function (r, e) {
      if ("function" == typeof r) return f(r, e);
      if ("object" != typeof r || null === r) throw Error(t(16));
      var n = {};
      for (var o in r) {
        var i = r[o];
        "function" == typeof i && (n[o] = f(i, e));
      }
      return n;
    }),
    (r.combineReducers = function (r) {
      for (var e = Object.keys(r), n = {}, i = 0; e.length > i; i++) {
        var f = e[i];
        "function" == typeof r[f] && (n[f] = r[f]);
      }
      var u,
        c = Object.keys(n);
      try {
        !(function (r) {
          Object.keys(r).forEach(function (e) {
            var n = r[e];
            if (void 0 === n(void 0, { type: o.INIT })) throw Error(t(12));
            if (void 0 === n(void 0, { type: o.PROBE_UNKNOWN_ACTION() }))
              throw Error(t(13));
          });
        })(n);
      } catch (r) {
        u = r;
      }
      return function (r, e) {
        if ((void 0 === r && (r = {}), u)) throw u;
        for (var o = !1, i = {}, f = 0; c.length > f; f++) {
          var p = c[f],
            a = r[p],
            l = (0, n[p])(a, e);
          if (void 0 === l) throw Error(t(14));
          (i[p] = l), (o = o || l !== a);
        }
        return (o = o || c.length !== Object.keys(r).length) ? i : r;
      };
    }),
    (r.compose = a),
    (r.createStore = function r(n, f, u) {
      var c;
      if (
        ("function" == typeof f && "function" == typeof u) ||
        ("function" == typeof u && "function" == typeof arguments[3])
      )
        throw Error(t(0));
      if (
        ("function" == typeof f && void 0 === u && ((u = f), (f = void 0)),
        void 0 !== u)
      ) {
        if ("function" != typeof u) throw Error(t(1));
        return u(r)(n, f);
      }
      if ("function" != typeof n) throw Error(t(2));
      var p = n,
        a = f,
        l = [],
        y = l,
        s = !1;
      function d() {
        y === l && (y = l.slice());
      }
      function h() {
        if (s) throw Error(t(3));
        return a;
      }
      function b(r) {
        if ("function" != typeof r) throw Error(t(4));
        if (s) throw Error(t(5));
        var e = !0;
        return (
          d(),
          y.push(r),
          function () {
            if (e) {
              if (s) throw Error(t(6));
              (e = !1), d();
              var n = y.indexOf(r);
              y.splice(n, 1), (l = null);
            }
          }
        );
      }
      function v(r) {
        if (!i(r)) throw Error(t(7));
        if (void 0 === r.type) throw Error(t(8));
        if (s) throw Error(t(9));
        try {
          (s = !0), (a = p(a, r));
        } finally {
          s = !1;
        }
        for (var e = (l = y), n = 0; e.length > n; n++) {
          (0, e[n])();
        }
        return r;
      }
      function O(r) {
        if ("function" != typeof r) throw Error(t(10));
        return (p = r), v({ type: o.REPLACE }), E;
      }
      function g() {
        var r,
          n = b;
        return (
          ((r = {
            subscribe: function (r) {
              if ("object" != typeof r || null === r) throw Error(t(11));
              function e() {
                r.next && r.next(h());
              }
              return e(), { unsubscribe: n(e) };
            },
          })[e] = function () {
            return this;
          }),
          r
        );
      }
      v({ type: o.INIT });
      var E =
        (((c = { dispatch: v, subscribe: b, getState: h, replaceReducer: O })[
          e
        ] = g),
        c);
      return E;
    }),
    Object.defineProperty(r, "__esModule", { value: !0 });
});