!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function q() {
    return "undefined" != typeof window;
  }
  function r() {
    return F || (q() && (F = window.gsap) && F.registerPlugin && F);
  }
  function u() {
    return String.fromCharCode.apply(null, arguments);
  }
  var F,
    I,
    M,
    A,
    O,
    L,
    B,
    z,
    N,
    U,
    W,
    G,
    K,
    i = "ScrollSmoother",
    a = u(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    t =
      //   ((function (e) {
      //     var t = "undefined" != typeof window,
      //       r =
      //         0 === (t ? window.location.href : "").indexOf(u(102, 105, 108, 101, 58, 47, 47)) ||
      //         -1 !== e.indexOf(u(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
      //         -1 !== e.indexOf(u(49, 50, 55, 46, 48, 32, 48, 46, 49)),
      //       n = [
      //         a,
      //         u(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
      //         u(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103),
      //         u(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
      //         u(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
      //         u(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101),
      //         u(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
      //         u(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
      //         u(99, 100, 112, 110, 46, 105, 111),
      //         u(112, 101, 110, 115, 46, 105, 111),
      //         u(103, 97, 110, 110, 111, 110, 46, 116, 118),
      //         u(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
      //         u(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116),
      //         u(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
      //         u(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
      //         u(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
      //         u(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109),
      //         u(112, 108, 110, 107, 114, 46, 99, 111),
      //         u(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
      //         u(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
      //         u(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
      //         u(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
      //         u(99, 115, 98, 46, 97, 112, 112),
      //         u(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
      //         u(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
      //         u(99, 111, 100, 105, 101, 114, 46, 105, 111),
      //         u(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
      //         u(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109),
      //         u(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109),
      //         u(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
      //       ],
      //       o = n.length;
      //     for (
      //       setTimeout(function checkWarn() {
      //         t &&
      //           ("loading" === document.readyState || "interactive" === document.readyState
      //             ? document.addEventListener("readystatechange", checkWarn)
      //             : (document.removeEventListener("readystatechange", checkWarn),
      //               t &&
      //                 window.console &&
      //                 !window._gsapWarned &&
      //                 "object" == typeof window.gsap &&
      //                 !1 !== window.gsap.config().trialWarn &&
      //                 (console.log(
      //                   u(37, 99, 87, 97, 114, 110, 105, 110, 103),
      //                   u(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)
      //                 ),
      //                 console.log(
      //                   u(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) +
      //                     i +
      //                     u(
      //                       32,
      //                       105,
      //                       115,
      //                       32,
      //                       108,
      //                       111,
      //                       97,
      //                       100,
      //                       101,
      //                       100,
      //                       32,
      //                       116,
      //                       104,
      //                       97,
      //                       116,
      //                       32,
      //                       111,
      //                       110,
      //                       108,
      //                       121,
      //                       32,
      //                       119,
      //                       111,
      //                       114,
      //                       107,
      //                       115,
      //                       32,
      //                       108,
      //                       111,
      //                       99,
      //                       97,
      //                       108,
      //                       108,
      //                       121,
      //                       32,
      //                       97,
      //                       110,
      //                       100,
      //                       32,
      //                       111,
      //                       110,
      //                       32,
      //                       100,
      //                       111,
      //                       109,
      //                       97,
      //                       105,
      //                       110,
      //                       115,
      //                       32,
      //                       108,
      //                       105,
      //                       107,
      //                       101,
      //                       32,
      //                       99,
      //                       111,
      //                       100,
      //                       101,
      //                       112,
      //                       101,
      //                       110,
      //                       46,
      //                       105,
      //                       111,
      //                       32,
      //                       97,
      //                       110,
      //                       100,
      //                       32,
      //                       99,
      //                       111,
      //                       100,
      //                       101,
      //                       115,
      //                       97,
      //                       110,
      //                       100,
      //                       98,
      //                       111,
      //                       120,
      //                       46,
      //                       105,
      //                       111,
      //                       46,
      //                       32,
      //                       42,
      //                       42,
      //                       42,
      //                       32,
      //                       68,
      //                       79,
      //                       32,
      //                       78,
      //                       79,
      //                       84,
      //                       32,
      //                       68,
      //                       69,
      //                       80,
      //                       76,
      //                       79,
      //                       89,
      //                       32,
      //                       84,
      //                       72,
      //                       73,
      //                       83,
      //                       32,
      //                       70,
      //                       73,
      //                       76,
      //                       69,
      //                       32,
      //                       42,
      //                       42,
      //                       42,
      //                       32,
      //                       76,
      //                       111,
      //                       97,
      //                       100,
      //                       105,
      //                       110,
      //                       103,
      //                       32,
      //                       105,
      //                       116,
      //                       32,
      //                       111,
      //                       110,
      //                       32,
      //                       97,
      //                       110,
      //                       32,
      //                       117,
      //                       110,
      //                       97,
      //                       117,
      //                       116,
      //                       104,
      //                       111,
      //                       114,
      //                       105,
      //                       122,
      //                       101,
      //                       100,
      //                       32,
      //                       115,
      //                       105,
      //                       116,
      //                       101,
      //                       32,
      //                       118,
      //                       105,
      //                       111,
      //                       108,
      //                       97,
      //                       116,
      //                       101,
      //                       115,
      //                       32,
      //                       116,
      //                       104,
      //                       101,
      //                       32,
      //                       108,
      //                       105,
      //                       99,
      //                       101,
      //                       110,
      //                       115,
      //                       101,
      //                       32,
      //                       97,
      //                       110,
      //                       100,
      //                       32,
      //                       119,
      //                       105,
      //                       108,
      //                       108,
      //                       32,
      //                       99,
      //                       97,
      //                       117,
      //                       115,
      //                       101,
      //                       32,
      //                       97,
      //                       32,
      //                       114,
      //                       101,
      //                       100,
      //                       105,
      //                       114,
      //                       101,
      //                       99,
      //                       116,
      //                       46,
      //                       32,
      //                       80,
      //                       108,
      //                       101,
      //                       97,
      //                       115,
      //                       101,
      //                       32,
      //                       106,
      //                       111,
      //                       105,
      //                       110,
      //                       32,
      //                       67,
      //                       108,
      //                       117,
      //                       98,
      //                       32,
      //                       71,
      //                       114,
      //                       101,
      //                       101,
      //                       110,
      //                       83,
      //                       111,
      //                       99,
      //                       107,
      //                       32,
      //                       116,
      //                       111,
      //                       32,
      //                       103,
      //                       101,
      //                       116,
      //                       32,
      //                       102,
      //                       117,
      //                       108,
      //                       108,
      //                       32,
      //                       97,
      //                       99,
      //                       99,
      //                       101,
      //                       115,
      //                       115,
      //                       32,
      //                       116,
      //                       111,
      //                       32,
      //                       116,
      //                       104,
      //                       101,
      //                       32,
      //                       98,
      //                       111,
      //                       110,
      //                       117,
      //                       115,
      //                       32,
      //                       112,
      //                       108,
      //                       117,
      //                       103,
      //                       105,
      //                       110,
      //                       115,
      //                       32,
      //                       116,
      //                       104,
      //                       97,
      //                       116,
      //                       32,
      //                       98,
      //                       111,
      //                       111,
      //                       115,
      //                       116,
      //                       32,
      //                       121,
      //                       111,
      //                       117,
      //                       114,
      //                       32,
      //                       97,
      //                       110,
      //                       105,
      //                       109,
      //                       97,
      //                       116,
      //                       105,
      //                       111,
      //                       110,
      //                       32,
      //                       115,
      //                       117,
      //                       112,
      //                       101,
      //                       114,
      //                       112,
      //                       111,
      //                       119,
      //                       101,
      //                       114,
      //                       115,
      //                       46,
      //                       32,
      //                       68,
      //                       105,
      //                       115,
      //                       97,
      //                       98,
      //                       108,
      //                       101,
      //                       32,
      //                       116,
      //                       104,
      //                       105,
      //                       115,
      //                       32,
      //                       119,
      //                       97,
      //                       114,
      //                       110,
      //                       105,
      //                       110,
      //                       103,
      //                       32,
      //                       119,
      //                       105,
      //                       116,
      //                       104,
      //                       32,
      //                       103,
      //                       115,
      //                       97,
      //                       112,
      //                       46,
      //                       99,
      //                       111,
      //                       110,
      //                       102,
      //                       105,
      //                       103,
      //                       40,
      //                       123,
      //                       116,
      //                       114,
      //                       105,
      //                       97,
      //                       108,
      //                       87,
      //                       97,
      //                       114,
      //                       110,
      //                       58,
      //                       32,
      //                       102,
      //                       97,
      //                       108,
      //                       115,
      //                       101,
      //                       125,
      //                       41,
      //                       59
      //                     )
      //                 ),
      //                 console.log(
      //                   u(
      //                     37,
      //                     99,
      //                     71,
      //                     101,
      //                     116,
      //                     32,
      //                     117,
      //                     110,
      //                     114,
      //                     101,
      //                     115,
      //                     116,
      //                     114,
      //                     105,
      //                     99,
      //                     116,
      //                     101,
      //                     100,
      //                     32,
      //                     102,
      //                     105,
      //                     108,
      //                     101,
      //                     115,
      //                     32,
      //                     97,
      //                     116,
      //                     32,
      //                     104,
      //                     116,
      //                     116,
      //                     112,
      //                     115,
      //                     58,
      //                     47,
      //                     47,
      //                     103,
      //                     114,
      //                     101,
      //                     101,
      //                     110,
      //                     115,
      //                     111,
      //                     99,
      //                     107,
      //                     46,
      //                     99,
      //                     111,
      //                     109,
      //                     47,
      //                     99,
      //                     108,
      //                     117,
      //                     98
      //                   ),
      //                   u(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)
      //                 ),
      //                 (window._gsapWarned = 1))));
      //       }, 50);
      //       -1 < --o;

      //     )
      //       if (-1 !== e.indexOf(n[o])) return;
      //     r ||
      //       setTimeout(function () {
      //         t &&
      //           (window.location.href =
      //             u(104, 116, 116, 112, 115, 58, 47, 47) +
      //             a +
      //             u(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) +
      //             "?plugin=" +
      //             i +
      //             "&source=trial");
      //       }, 3e3);
      //   })("undefined" != typeof window ? window.location.host : ""),
      ((ScrollSmoother.register = function register(e) {
        return (
          I ||
            ((F = e || r()),
            q() && window.document && ((M = window), (A = document), (O = A.documentElement), (L = A.body)),
            F &&
              ((B = F.utils.toArray),
              (z = F.utils.clamp),
              (W = F.parseEase("expo")),
              (N = F.core.globals().ScrollTrigger),
              F.core.globals("ScrollSmoother", ScrollSmoother),
              L && N && ((G = N.core._getVelocityProp), (K = N.core._inputObserver), (ScrollSmoother.refresh = N.refresh), (I = 1)))),
          I
        );
      }),
      (function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
      })(ScrollSmoother, [
        {
          key: "progress",
          get: function get() {
            return this.scrollTrigger.animation._time / 100;
          },
        },
      ]),
      ScrollSmoother);
  function ScrollSmoother(e) {
    var o = this;
    I || ScrollSmoother.register(F) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), (e = this.vars = e || {}), U && U.kill(), (U = this);
    function Ca() {
      return _.update(-k);
    }
    function Ea() {
      return (n.style.overflow = "visible");
    }
    function Ga(e) {
      e.update();
      var t = e.getTween();
      t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)), (h = !1), e.animation.progress(e.progress, !0);
    }
    function Ha(e, t) {
      ((e !== k && !c) || t) &&
        (E && ((n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), (n._gsap.y = e + "px")),
        (C = e - k),
        (k = e),
        N.isUpdating || N.update());
    }
    function Ia(e) {
      return arguments.length ? (e < 0 && (e = 0), (H.y = -e), (h = !0), c ? (k = -e) : Ha(-e), x(e), this) : -k;
    }
    function Ka(e) {
      (v.scrollTop = 0),
        (e.target.contains && e.target.contains(v)) ||
          (b && !1 === b(o, e)) ||
          (N.isInViewport(e.target) || e.target === d || o.scrollTo(e.target, !1, "center center"), (d = e.target));
    }
    function La(e) {
      var r, n, o, i;
      w.forEach(function (t) {
        (r = t.pins),
          (i = t.markers),
          e.forEach(function (e) {
            (e.trigger !== t.trigger && e.pinnedContainer !== t.trigger) ||
              t === e ||
              ((n = e.start),
              (o = (n - t.start - t.offset) / t.ratio - (n - t.start)),
              r.forEach(function (e) {
                return (o -= e.distance / t.ratio - e.distance);
              }),
              e.setPositions(n + o, e.end + o),
              e.markerStart && i.push(F.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
              e.pin &&
                0 < e.end &&
                ((o = e.end - e.start), r.push({ start: e.start, end: e.end, distance: o, trig: e }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)));
          });
      });
    }
    function Ma() {
      Ea(),
        requestAnimationFrame(Ea),
        w &&
          (w.forEach(function (e) {
            var t = e.start,
              r = e.auto ? Math.min(N.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
              n = (r - e.end) / 2;
            (t -= n), (r -= n), (e.offset = n || 1e-4), (e.pins.length = 0), e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e);
          }),
          La(N.sort())),
        _.reset();
    }
    function Na() {
      return (
        w &&
        w.forEach(function (e) {
          return e.vars.onRefresh(e);
        })
      );
    }
    function Oa() {
      return (
        w &&
          w.forEach(function (e) {
            return e.vars.onRefreshInit(e);
          }),
        Na
      );
    }
    function Pa(t, r, n, o) {
      return function () {
        var e = "function" == typeof r ? r(n, o) : r;
        return e || 0 === e || (e = o.getAttribute("data-" + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + t, e), "auto" === e ? e : parseFloat(e);
      };
    }
    function Qa(r, e, t, n) {
      function Eb() {
        (e = a()),
          (t = f()),
          (o = parseFloat(e) || 1),
          (u = (s = "auto" === e) ? 0 : 0.5),
          l && l.kill(),
          (l = t && F.to(r, { ease: W, overwrite: !1, y: "+=0", duration: t })),
          i && ((i.ratio = o), (i.autoSpeed = s));
      }
      function Fb() {
        (d.y = h + "px"), d.renderTransform(1), Eb();
      }
      function Jb(e) {
        if (s) {
          Fb();
          var t = (function _autoDistance(e, t) {
            var r,
              n,
              o = e.parentNode || O,
              i = e.getBoundingClientRect(),
              a = o.getBoundingClientRect(),
              s = a.top - i.top,
              l = a.bottom - i.bottom,
              u = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
              c = -u * t;
            return (
              0 < u &&
                ((c += -(n = 0.5 == (r = a.height / (M.innerHeight + a.height)) ? 2 * a.height : 2 * Math.min(a.height, (-u * r) / (2 * r - 1))) / 2),
                (u += n)),
              { change: u, offset: c }
            );
          })(r, z(0, 1, -e.start / (e.end - e.start)));
          (m = t.change), (c = t.offset);
        } else (m = (e.end - e.start) * (1 - o)), (c = 0);
        g.forEach(function (e) {
          return (m -= e.distance * (1 - o));
        }),
          e.vars.onUpdate(e),
          l && l.progress(1);
      }
      var o,
        i,
        s,
        l,
        u,
        c,
        a = Pa("speed", e, n, r),
        f = Pa("lag", t, n, r),
        h = F.getProperty(r, "y"),
        d = r._gsap,
        g = [],
        p = [],
        m = 0;
      return (
        Eb(),
        (1 !== o || s || l) &&
          (Jb(
            (i = N.create({
              trigger: s ? r.parentNode : r,
              scroller: v,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: Fb,
              onRefresh: Jb,
              onKill: function onKill(e) {
                var t = w.indexOf(e);
                0 <= t && w.splice(t, 1), Fb();
              },
              onUpdate: function onUpdate(e) {
                var t,
                  r,
                  n,
                  o = h + m * (e.progress - u),
                  i = g.length,
                  a = 0;
                if (e.offset) {
                  if (i) {
                    for (r = -k, n = e.end; i--; ) {
                      if ((t = g[i]).trig.isActive || (r >= t.start && r <= t.end))
                        return void (
                          l &&
                          ((t.trig.progress += t.trig.direction < 0 ? 0.001 : -0.001),
                          t.trig.update(0, 0, 1),
                          l.resetTo("y", parseFloat(d.y), -C, !0),
                          P && l.progress(1))
                        );
                      r > t.end && (a += t.distance), (n -= t.distance);
                    }
                    o = h + a + m * ((F.utils.clamp(e.start, e.end, r) - e.start - a) / (n - e.start) - u);
                  }
                  (o = (function _round(e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                  })(o + c)),
                    p.length &&
                      !s &&
                      p.forEach(function (e) {
                        return e(o - a);
                      }),
                    l ? (l.resetTo("y", o, -C, !0), P && l.progress(1)) : ((d.y = o + "px"), d.renderTransform(1));
                }
              },
            }))
          ),
          (F.core.getCache(i.trigger).stRevert = Oa),
          (i.startY = h),
          (i.pins = g),
          (i.markers = p),
          (i.ratio = o),
          (i.autoSpeed = s),
          (r.style.willChange = "transform")),
        i
      );
    }
    var n,
      v,
      t,
      i,
      w,
      a,
      s,
      l,
      u,
      c,
      r,
      f,
      h,
      d,
      g = e.smoothTouch,
      p = e.onUpdate,
      m = e.onStop,
      S = e.smooth,
      b = e.onFocusIn,
      T = e.normalizeScroll,
      x = N.getScrollFunc(M),
      E = 1 === N.isTouch ? (!0 === g ? 0.8 : parseFloat(g) || 0) : 0 === S || !1 === S ? 0 : parseFloat(S) || 0.8,
      k = 0,
      C = 0,
      P = 1,
      _ = G(0),
      H = { y: 0 };
    function refreshHeight() {
      return (t = n.clientHeight), (n.style.overflow = "visible"), (L.style.height = t + "px"), t - M.innerHeight;
    }
    N.addEventListener("refresh", Ma),
      F.delayedCall(0.5, function () {
        return (P = 0);
      }),
      (this.scrollTop = Ia),
      (this.scrollTo = function (e, t, r) {
        var n = F.utils.clamp(0, N.maxScroll(M), isNaN(e) ? o.offset(e, r) : +e);
        t ? (c ? F.to(o, { duration: E, scrollTop: n, overwrite: "auto", ease: W }) : x(n)) : Ia(n);
      }),
      (this.offset = function (e, t) {
        var r,
          n = (e = B(e)[0]).style.cssText,
          o = N.create({ trigger: e, start: t || "top top" });
        return w && La([o]), (r = o.start), o.kill(!1), (e.style.cssText = n), (F.core.getCache(e).uncache = 1), r;
      }),
      (this.content = function (e) {
        if (arguments.length) {
          var t = B(e || "#smooth-content")[0] || L.children[0];
          return (
            t !== n && ((u = (n = t).getAttribute("style") || ""), F.set(n, { overflow: "visible", width: "100%", boxSizing: "border-box", y: "+=0" })), this
          );
        }
        return n;
      }),
      (this.wrapper = function (e) {
        return arguments.length
          ? ((v =
              B(e || "#smooth-wrapper")[0] ||
              (function _wrap(e) {
                var t = A.querySelector(".ScrollSmoother-wrapper");
                return t || ((t = A.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t;
              })(n)),
            (l = v.getAttribute("style") || ""),
            refreshHeight(),
            F.set(
              v,
              E
                ? { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 }
                : { overflow: "visible", position: "relative", width: "100%", height: "auto", top: "auto", bottom: "auto", left: "auto", right: "auto" }
            ),
            this)
          : v;
      }),
      (this.effects = function (e, t) {
        if (((w = w || []), !e)) return w.slice(0);
        (e = B(e)).forEach(function (e) {
          for (var t = w.length; t--; ) w[t].trigger === e && (w[t].kill(), w.splice(t, 1));
        });
        t = t || {};
        var r,
          n,
          o = t.speed,
          i = t.lag,
          a = [];
        for (r = 0; r < e.length; r++) (n = Qa(e[r], o, i, r)) && a.push(n);
        return w.push.apply(w, a), a;
      }),
      (this.sections = function (e, t) {
        if (((a = a || []), !e)) return a.slice(0);
        var r = B(e).map(function (t) {
          return N.create({
            trigger: t,
            start: "top 120%",
            end: "bottom -20%",
            onToggle: function onToggle(e) {
              (t.style.opacity = e.isActive ? "1" : "0"), (t.style.pointerEvents = e.isActive ? "all" : "none");
            },
          });
        });
        return t && t.add ? a.push.apply(a, r) : (a = r.slice(0)), r;
      }),
      this.content(e.content),
      this.wrapper(e.wrapper),
      (this.render = function (e) {
        return Ha(e || 0 === e ? e : k);
      }),
      (this.getVelocity = function () {
        return _.getVelocity(-k);
      }),
      N.scrollerProxy(v, {
        scrollTop: Ia,
        scrollHeight: function scrollHeight() {
          return refreshHeight() && L.scrollHeight;
        },
        fixedMarkers: !1 !== e.fixedMarkers && !!E,
        content: n,
        getBoundingClientRect: function getBoundingClientRect() {
          return { top: 0, left: 0, width: M.innerWidth, height: M.innerHeight };
        },
      }),
      N.defaults({ scroller: v });
    var R = N.getAll().filter(function (e) {
      return e.scroller === M || e.scroller === v;
    });
    R.forEach(function (e) {
      return e.revert(!0);
    }),
      (i = N.create({
        animation: F.fromTo(
          H,
          { y: 0 },
          {
            y: function y() {
              return -refreshHeight();
            },
            immediateRender: !1,
            ease: "none",
            data: "ScrollSmoother",
            duration: 100,
            onUpdate: function onUpdate() {
              var e = h;
              e && (Ga(i), (H.y = k)), Ha(H.y, e), Ca(), p && !c && p(o);
            },
          }
        ),
        onRefreshInit: function onRefreshInit() {
          (f = k), (H.y = v.scrollTop = 0);
        },
        id: "ScrollSmoother",
        scroller: M,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: refreshHeight,
        onScrubComplete: function onScrubComplete() {
          _.reset(), m && m(o);
        },
        scrub: E || !0,
        onRefresh: function onRefresh(e) {
          Ga(e), (H.y = -x()), Ha(H.y), P || e.animation.progress(F.utils.clamp(0, 1, f / -e.end));
        },
      })),
      (this.smooth = function (e) {
        return arguments.length && (E = e || 0), arguments.length ? i.scrubDuration(e) : i.getTween() ? i.getTween().duration() : 0;
      }),
      i.getTween() && (i.getTween().vars.ease = e.ease || W),
      (this.scrollTrigger = i),
      e.effects && this.effects(!0 === e.effects ? "[data-speed], [data-lag]" : e.effects, {}),
      e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections),
      R.forEach(function (e) {
        (e.vars.scroller = v), e.init(e.vars, e.animation);
      }),
      (this.paused = function (e, t) {
        return arguments.length
          ? (!!c !== e &&
              (e
                ? (i.getTween() && i.getTween().pause(),
                  x(-k),
                  _.reset(),
                  (r = N.normalizeScroll()) && r.disable(),
                  ((c = N.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function onChangeY() {
                      return Ia(-k);
                    },
                  })).nested = K(O, "wheel,touch,scroll", !0, !1 !== t)))
                : (c.nested.kill(), c.kill(), (c = 0), r && r.enable(), (i.progress = (-k - i.start) / (i.end - i.start)), Ga(i))),
            this)
          : !!c;
      }),
      (this.kill = function () {
        o.paused(!1), Ga(i), i.kill();
        for (var e = (w || []).concat(a || []), t = e.length; t--; ) e[t].kill();
        N.scrollerProxy(v), N.removeEventListener("refresh", Ma), L.style.removeProperty("height"), (v.style.cssText = l), (n.style.cssText = u);
        var r = N.defaults({});
        r && r.scroller === v && N.defaults({ scroller: M }),
          o.normalizer && N.normalizeScroll(!1),
          clearInterval(s),
          (U = null),
          M.removeEventListener("focusin", Ka);
      }),
      (this.refresh = function (e, t) {
        return i.refresh(e, t);
      }),
      T && (this.normalizer = N.normalizeScroll(!0 === T ? { debounce: !0, content: !E && n } : T)),
      N.config(e),
      "overscrollBehavior" in M.getComputedStyle(L) && F.set([L, O], { overscrollBehavior: "none" }),
      "scrollBehavior" in M.getComputedStyle(L) && F.set([L, O], { scrollBehavior: "auto" }),
      M.addEventListener("focusin", Ka),
      (s = setInterval(Ca, 250)),
      "loading" === A.readyState ||
        requestAnimationFrame(function () {
          return N.refresh();
        });
  }
  (t.version = "3.10.5"),
    (t.create = function (e) {
      return U && e && U.content() === B(e.content)[0] ? U : new t(e);
    }),
    (t.get = function () {
      return U;
    }),
    r() && F.registerPlugin(t),
    (e.ScrollSmoother = t),
    (e.default = t);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
