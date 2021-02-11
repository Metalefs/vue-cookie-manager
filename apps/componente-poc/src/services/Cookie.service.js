SP_BLACKLIST = [
  /doubleclick.net/,
  /.marchex.io/,
  /connect.facebook.net/,
  /.simpli.fi/,
  /ec.editmysite.com/,
  /google-analytics.com/,
  /www.googleadservices.com/,
  /widget.privy.com/,
  /sdk.beeketing.com/,
];
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).sptt = {}));
})
(this, function(t) {
  "use strict";

  function o(e, t) {
    return (
      e &&
      (!t || t !== s) &&
      (!a.blacklist ||
        a.blacklist.some(function(t) {
          return t.test(e);
        })) &&
      (!a.whitelist ||
        a.whitelist.every(function(t) {
          return !t.test(e);
        }))
    );
  }

  function l(t) {
    var e = t.getAttribute("src");
    return (
      (a.blacklist &&
        a.blacklist.every(function(t) {
          return !t.test(e);
        })) ||
      (a.whitelist &&
        a.whitelist.some(function(t) {
          return t.test(e);
        }))
    );
  }
  var s = "javascript/blocked",
    a = {
      blacklist: window.SP_BLACKLIST,
      whitelist: window.SP_WHITELIST,
    },
    u = {
      blacklisted: [],
    },
    p = new MutationObserver(function(t) {
      for (var e = 0; e < t.length; e++)
        for (
          var i = t[e].addedNodes,
            n = function(t) {
              var n = i[t];
              if (1 === n.nodeType && "SCRIPT" === n.tagName) {
                var e = n.src,
                  r = n.type;
                if (o(e, r)) {
                  u.blacklisted.push(n.cloneNode()), (n.type = s);
                  n.addEventListener("beforescriptexecute", function t(e) {
                    n.getAttribute("type") === s && e.preventDefault(),
                      n.removeEventListener("beforescriptexecute", t);
                  }),
                    n.parentElement && n.parentElement.removeChild(n);
                }
              }
            },
            r = 0;
          r < i.length;
          r++
        )
          n(r);
    });
  p.observe(document.documentElement, {
    childList: !0,
    subtree: !0,
  });
  var c = document.createElement;

  function f(t) {
    return (
      (function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      })(t) ||
      (function(t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      })(t) ||
      (function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  document.createElement = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    if (typeof e[0] == "string" && "script" !== e[0].toLowerCase())
      return c.bind(document).apply(void 0, e);
    var r = c.bind(document).apply(void 0, e),
      i = r.setAttribute.bind(r);
    try {
      Object.defineProperties(r, {
        src: {
          get: function() {
            return r.getAttribute("src");
          },
          set: function(t) {
            return o(t, r.type) && i("type", s), i("src", t), !0;
          },
        },
        type: {
          set: function(t) {
            var e = o(r.src, r.type) ? s : t;
            return i("type", e), !0;
          },
        },
      }),
        (r.setAttribute = function(t, e) {
          "type" === t || "src" === t
            ? (r[t] = e)
            : HTMLScriptElement.prototype.setAttribute.call(r, t, e);
        });
    } catch (t) {
      console.warn(
        "SPtt: unable to prevent script execution for script src ",
        r.src,
        ".\n",
        'A likely cause would be because you are using a third-party browser extension that monkey patches the "document.createElement" function.'
      );
    }
    return r;
  };
  var d = new RegExp("[|\\{}()[\\]^$+*?.]", "g");
  (t.unblock = function() {
    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
      n[e] = arguments[e];
    n.length < 1
      ? ((a.blacklist = []), (a.whitelist = []))
      : (a.blacklist &&
          (a.blacklist = a.blacklist.filter(function(e) {
            return n.every(function(t) {
              return "string" == typeof t
                ? !e.test(t)
                : t instanceof RegExp
                ? e.toString() !== t.toString()
                : void 0;
            });
          })),
        a.whitelist &&
          (a.whitelist = [].concat(
            f(a.whitelist),
            f(
              n
                .map(function(e) {
                  if ("string" == typeof e) {
                    var n = ".*" + e.replace(d, "\\$&") + ".*";
                    if (
                      a.whitelist.every(function(t) {
                        return t.toString() !== n.toString();
                      })
                    )
                      return new RegExp(n);
                  } else if (
                    e instanceof RegExp &&
                    a.whitelist.every(function(t) {
                      return t.toString() !== e.toString();
                    })
                  )
                    return e;
                  return null;
                })
                .filter(Boolean)
            )
          )));
    for (
      var r = document.querySelectorAll('script[type="'.concat(s, '"]')), i = 0;
      i < r.length;
      i++
    ) {
      var o = r[i];
      l(o) &&
        ((o.type = "application/javascript"),
        u.blacklisted.push(o),
        o.parentElement.removeChild(o));
    }
    var c = 0;
    f(u.blacklisted).forEach(function(t, e) {
      if (l(t)) {
        var n = document.createElement("script");
        n.setAttribute("src", t.src),
          n.setAttribute("type", "application/javascript"),
          document.head.appendChild(n),
          u.blacklisted.splice(e - c, 1),
          c++;
      }
    }),
      a.blacklist && a.blacklist.length < 1 && p.disconnect();
  }),
    Object.defineProperty(t, "__esModule", {
        value: !0,
    });
});
