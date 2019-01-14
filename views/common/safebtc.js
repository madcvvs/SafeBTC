! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length,
            n = ie.type(e);
        return "function" !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function (e) {
            return ie.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = be[e] = {};
        return ie.each(e.match(ye) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), ie.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ne, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? ie.parseJSON(n) : n)
                } catch (e) {}
                ie.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (ie.acceptData(e)) {
            var i, o, a = ie.expando,
                s = e.nodeType,
                l = s ? ie.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = V.pop() || ie.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: ie.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = ie.extend(l[u], t) : l[u].data = ie.extend(l[u].data, t)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[ie.camelCase(t)]) : i = o, i
        }
    }

    function d(e, t, n) {
        if (ie.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ie.cache : e,
                s = o ? e[ie.expando] : ie.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !u(r) : !ie.isEmptyObject(r)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Me.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
    }

    function v(e) {
        De.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n, r, i, o = ie._data(e),
                a = ie._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ie.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                i = ie._data(t);
                for (r in i.events) ie.removeEvent(t, r, i.handle);
                t.removeAttribute(ie.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function N(t, n) {
        var r = ie(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : ie.css(r[0], "display");
        return r.detach(), i
    }

    function E(e) {
        var t = he,
            n = Qe[e];
        return n || ("none" !== (n = N(e, t)) && n || (Ge = (Ge || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), (t = (Ge[0].contentWindow || Ge[0].contentDocument).document).write(), t.close(), n = N(e, t), Ge.detach()), Qe[e] = n), n
    }

    function k(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ct.length; i--;)
            if ((t = ct[i] + n) in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)(r = e[a]).style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Se(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) : o[a] || (i = Se(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
        for (a = 0; s > a; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function D(e, t, n) {
        var r = at.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function j(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + ke[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + ke[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + ke[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + ke[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + ke[o] + "Width", !0, i)));
        return a
    }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ke(e),
            a = ne.boxSizing() && "border-box" === ie.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if ((0 > (i = Ze(e, t, o)) || null == i) && (i = e.style[t]), tt.test(i)) return i;
            r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function q() {
        return setTimeout(function () {
            dt = void 0
        }), dt = ie.now()
    }

    function _(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = ke[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (vt[t] || []).concat(vt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ie.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0,
            a = gt.length,
            s = ie.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var t = dt || q(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; a > o; o++) u.tweens[o].run(r);
                return s.notifyWith(e, [u, r, n]), 1 > r && a ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: dt || q(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ie.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (F(c, u.opts.specialEasing); a > o; o++)
            if (r = gt[o].call(u, e, c, u.opts)) return r;
        return ie.map(c, M, u), ie.isFunction(u.opts.start) && u.opts.start.call(e, u), ie.fx.timer(ie.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ye) || [];
            if (ie.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, ie.each(e[s] || [], function (e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = e === Wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = ie.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ie.extend(!0, e, n), e
    }

    function W(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function $(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o]))
                for (i in u)
                    if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function z(e, t, n, r) {
        var i;
        if (ie.isArray(t)) ie.each(t, function (t, i) {
            n || It.test(e) ? r(e, i) : z(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (i in t) z(e + "[" + i + "]", t[i], n, r)
    }

    function I() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function X() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function U(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var V = [],
        J = V.slice,
        Y = V.concat,
        G = V.push,
        Q = V.indexOf,
        K = {},
        Z = K.toString,
        ee = K.hasOwnProperty,
        te = "".trim,
        ne = {},
        re = "1.11.0",
        ie = function (e, t) {
            return new ie.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function (e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: re,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function () {
            return J.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function (e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return ie.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(ie.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: V.sort,
        splice: V.splice
    }, ie.extend = ie.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (u && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, ie.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === ie.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            try {
                if (e.constructor && !ee.call(e, "constructor") && !ee.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return ee.call(e, t);
            for (t in e);
            return void 0 === t || ee.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[Z.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && ie.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i = 0,
                o = e.length,
                a = n(e);
            if (r) {
                if (a)
                    for (; o > i && !1 !== t.apply(e[i], r); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], r)) break
            } else if (a)
                for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: te && !te.call("\ufeffÂ ") ? function (e) {
            return null == e ? "" : te.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (Q) return Q.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; o > i; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = [];
            if (n(e))
                for (; a > o; o++) null != (i = t(e[o], o, r)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, r)) && s.push(i);
            return Y.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = J.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0
        },
        now: function () {
            return +new Date
        },
        support: ne
    }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, f, p, h, m, g;
            if ((t ? t.ownerDocument || t : B) !== j && D(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (H && !r) {
                if (i = ge.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                    } if (w.qsa && (!q || !q.test(e))) {
                    if (h = p = O, m = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (f = c(e), (p = t.getAttribute("id")) ? h = p.replace(ye, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = f.length; u--;) f[u] = h + d(f[u]);
                        m = ve.test(e) && l(t.parentNode) || t, g = f.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, m.querySelectorAll(g)), n
                    } catch (e) {} finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return b(e.replace(ae, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[O] = !0, e
        }

        function i(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && typeof e.getElementsByTagName !== X && e
        }

        function u() {}

        function c(e, n) {
            var r, i, o, a, s, l, u, c = $[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                (!r || (i = se.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(i = fe[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = R++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, l, u = [P, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[O] || (t[O] = {}), (s = l[r]) && s[0] === P && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[O] && (i = m(i)), o && !o[O] && (o = m(o, a)), r(function (r, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    m = a.length,
                    g = r || y(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !r && t ? g : h(g, f, e, s, l),
                    b = n ? o || (r ? e : m || i) ? [] : a : v;
                if (n && n(v, b, s, l), i)
                    for (u = h(b, p), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(v[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(v[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? Z.call(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else b = h(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, l) : Q.apply(a, b)
            })
        }

        function g(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = f(function (e) {
                    return e === t
                }, a, !0), u = f(function (e) {
                    return Z.call(t, e) > -1
                }, a, !0), c = [function (e, n, r) {
                    return !o && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [f(p(c), n)];
                else {
                    if ((n = T.filter[e[s].type].apply(null, e[s].matches))[O]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return m(s > 1 && p(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, r > s && g(e.slice(s, r)), i > r && g(e = e.slice(r)), i > r && d(e))
                    }
                    c.push(n)
                } return p(c)
        }

        function v(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function (r, a, s, l, u) {
                    var c, d, f, p = 0,
                        m = "0",
                        g = r && [],
                        v = [],
                        y = k,
                        b = r || o && T.find.TAG("*", u),
                        x = P += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (k = a !== j && a); m !== w && null != (c = b[m]); m++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    l.push(c);
                                    break
                                } u && (P = x)
                        }
                        i && ((c = !f && c) && p--, r && g.push(c))
                    }
                    if (p += m, i && m !== p) {
                        for (d = 0; f = n[d++];) f(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; m--;) g[m] || v[m] || (v[m] = Y.call(l));
                            v = h(v)
                        }
                        Q.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (P = x, k = y), g
                };
            return i ? r(a) : a
        }

        function y(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function b(e, t, n, r) {
            var i, o, a, s, u, f = c(e);
            if (!r && 1 === f.length) {
                if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && H && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(a.matches[0].replace(be, xe), t) || [])[0])) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, xe), ve.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && d(o))) return Q.apply(n, r), n;
                        break
                    }
            }
            return E(e, f)(r, t, !H, n, ve.test(e) && l(t.parentNode) || t), n
        }
        var x, w, T, C, N, E, k, S, A, D, j, L, H, q, _, M, F, O = "sizzle" + -new Date,
            B = e.document,
            P = 0,
            R = 0,
            W = n(),
            $ = n(),
            z = n(),
            I = function (e, t) {
                return e === t && (A = !0), 0
            },
            X = "undefined",
            U = 1 << 31,
            V = {}.hasOwnProperty,
            J = [],
            Y = J.pop,
            G = J.push,
            Q = J.push,
            K = J.slice,
            Z = J.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            te = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = ne.replace("w", "w#"),
            ie = "\\[" + te + "*(" + ne + ")" + te + "*(?:([*^$|!~]?=)" + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + te + "*\\]",
            oe = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)",
            ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
            se = new RegExp("^" + te + "*," + te + "*"),
            le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
            ue = new RegExp("=" + te + "*([^\\]'\"]*?)" + te + "*\\]", "g"),
            ce = new RegExp(oe),
            de = new RegExp("^" + re + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            he = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ye = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
            xe = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Q.apply(J = K.call(B.childNodes), B.childNodes), J[B.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: J.length ? function (e, t) {
                    G.apply(e, K.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function (e) {
            var t, n = e ? e.ownerDocument || e : B,
                r = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, L = n.documentElement, H = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                D()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                D()
            })), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(n.getElementsByClassName) && i(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function (e) {
                return L.appendChild(e).id = O, !n.getElementsByName || !n.getElementsByName(O).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if (typeof t.getElementById !== X && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(be, xe);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(be, xe);
                return function (e) {
                    var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== X ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== X && H ? t.getElementsByClassName(e) : void 0
            }, _ = [], q = [], (w.qsa = me.test(n.querySelectorAll)) && (i(function (e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && q.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll(":checked").length || q.push(":checked")
            }), i(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + te + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (w.matchesSelector = me.test(M = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), _.push("!=", oe)
            }), q = q.length && new RegExp(q.join("|")), _ = _.length && new RegExp(_.join("|")), t = me.test(L.compareDocumentPosition), F = t || me.test(L.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, I = t ? function (e, t) {
                if (e === t) return A = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === B && F(B, e) ? -1 : t === n || t.ownerDocument === B && F(B, t) ? 1 : S ? Z.call(S, e) - Z.call(S, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return A = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : S ? Z.call(S, e) - Z.call(S, t) : 0;
                if (o === s) return a(e, t);
                for (r = e; r = r.parentNode;) l.unshift(r);
                for (r = t; r = r.parentNode;) u.unshift(r);
                for (; l[i] === u[i];) i++;
                return i ? a(l[i], u[i]) : l[i] === B ? -1 : u[i] === B ? 1 : 0
            }, n) : j
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== j && D(e), n = n.replace(ue, "='$1']"), !(!w.matchesSelector || !H || _ && _.test(n) || q && q.test(n))) try {
                var r = M.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== j && D(e), F(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== j && D(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (A = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(I), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return S = null, e
        }, C = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, (T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(be, xe), e[3] = (e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && ce.test(n) && (t = c(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (p = (u = (c = g[O] || (g[O] = {}))[e] || [])[0] === P && u[1], f = u[0] === P && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [P, p, f];
                                        break
                                    }
                            } else if (y && (u = (t[O] || (t[O] = {}))[e]) && u[0] === P) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[O] || (d[O] = {}))[e] = [P, f]), d !== t)););
                            return (f -= i) === r || f % r == 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = Z.call(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(ae, "$1"));
                    return i[O] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === L
                },
                focus: function (e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return he.test(e.nodeName)
                },
                input: function (e) {
                    return pe.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function () {
                    return [0]
                }),
                last: s(function (e, t) {
                    return [t - 1]
                }),
                eq: s(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: s(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: s(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: s(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: s(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(x);
        return u.prototype = T.filters = T.pseudos, T.setFilters = new u, E = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = z[e + " "];
            if (!o) {
                for (t || (t = c(e)), n = t.length; n--;) o = g(t[n]), o[O] ? r.push(o) : i.push(o);
                o = z(e, v(i, r))
            }
            return o
        }, w.sortStable = O.split("").sort(I).join("") === O, w.detectDuplicates = !!A, D(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(ee, function (e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ie.find = ue, ie.expr = ue.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = ue.uniqueSort, ie.text = ue.getText, ie.isXMLDoc = ue.isXML, ie.contains = ue.contains;
    var ce = ie.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    ie.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (ie.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ie.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function (e) {
            return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var pe, he = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ie.fn.init = function (e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t))
                    for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if ((r = he.getElementById(n[2])) && r.parentNode) {
                if (r.id !== n[2]) return pe.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = he, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? void 0 !== pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
    }).prototype = ie.fn, pe = ie(he);
    var ge = /^(?:parents|prev(?:Until|All))/,
        ve = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.extend({
        dir: function (e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ie.fn.extend({
        has: function (e) {
            var t, n = ie(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (ie.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? ie.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ie.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ie.dir(e, "parentNode", n)
        },
        next: function (e) {
            return i(e, "nextSibling")
        },
        prev: function (e) {
            return i(e, "previousSibling")
        },
        nextAll: function (e) {
            return ie.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ie.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ie.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ie.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ie.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ie.sibling(e.firstChild)
        },
        contents: function (e) {
            return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
        }
    }, function (e, t) {
        ie.fn[e] = function (n, r) {
            var i = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ve[e] || (i = ie.unique(i)), ge.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var ye = /\S+/g,
        be = {};
    ie.Callbacks = function (e) {
        var t, n, r, i, a, s, l = [],
            u = !(e = "string" == typeof e ? be[e] || o(e) : ie.extend({}, e)).once && [],
            c = function (o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++)
                    if (!1 === l[a].apply(o[0], o[1]) && e.stopOnFalse) {
                        n = !1;
                        break
                    } t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function () {
                    if (l) {
                        var r = l.length;
                        ! function t(n) {
                            ie.each(n, function (n, r) {
                                var i = ie.type(r);
                                "function" === i ? e.unique && d.has(r) || l.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments), t ? i = l.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function () {
                    return l && ie.each(arguments, function (e, n) {
                        for (var r;
                            (r = ie.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function (e) {
                    return e ? ie.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], i = 0, this
                },
                disable: function () {
                    return l = u = n = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = void 0, n || d.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, n) {
                    return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return d
    }, ie.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ie.Deferred(function (n) {
                            ie.each(t, function (t, o) {
                                var a = ie.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ie.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = J.call(arguments),
                a = o.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ie.Deferred(),
                u = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? J.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var xe;
    ie.fn.ready = function (e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function (e) {
            if (!0 === e ? !--ie.readyWait : !ie.isReady) {
                if (!he.body) return setTimeout(ie.ready);
                ie.isReady = !0, !0 !== e && --ie.readyWait > 0 || (xe.resolveWith(he, [ie]), ie.fn.trigger && ie(he).trigger("ready").off("ready"))
            }
        }
    }), ie.ready.promise = function (t) {
        if (!xe)
            if (xe = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (e) {}
            n && n.doScroll && function e() {
                if (!ie.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    a(), ie.ready()
                }
            }()
        }
        return xe.promise(t)
    };
    var we, Te = "undefined";
    for (we in ie(ne)) break;
    ne.ownLast = "0" !== we, ne.inlineBlockNeedsLayout = !1, ie(function () {
            var e, t, n = he.getElementsByTagName("body")[0];
            n && (e = he.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = he.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ne.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
        }),
        function () {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), ie.acceptData = function (e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /([A-Z])/g;
    ie.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return !!(e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando]) && !u(e)
        },
        data: function (e, t, n) {
            return c(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), ie.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) 0 === (r = a[n].name).indexOf("data-") && (r = ie.camelCase(r.slice(5)), l(o, r, i[r]));
                    ie._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                ie.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                ie.data(this, e, t)
            }) : o ? l(o, e, ie.data(o, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                ie.removeData(this, e)
            })
        }
    }), ie.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ie._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                ie.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ie._data(e, n) || ie._data(e, n, {
                empty: ie.Callbacks("once memory").add(function () {
                    ie._removeData(e, t + "queue"), ie._removeData(e, n)
                })
            })
        }
    }), ie.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = ie.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = ie._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        Se = function (e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        Ae = ie.access = function (e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === ie.type(n)) {
                i = !0;
                for (s in n) ie.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(ie(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        De = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = he.createDocumentFragment(),
            t = he.createElement("div"),
            n = he.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ne.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ne.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function () {
        var t, n, r = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = !1 === r.attributes[n].expando);
        r = null
    }();
    var je = /^(?:input|select|textarea)$/i,
        Le = /^key/,
        He = /^(?:mouse|contextmenu)|click/,
        qe = /^(?:focusinfocus|focusoutblur)$/,
        _e = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = ie._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = ie.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (e) {
                        return typeof ie === Te || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), s = (t = (t || "").match(ye) || [""]).length; s--;) o = _e.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (u = ie.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = ie.event.special[p] || {}, d = ie.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ie.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = ie.hasData(e) && ie._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(ye) || [""]).length; u--;)
                    if (s = _e.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || ie.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) ie.event.remove(e, p + t[u], n, r, !0);
                ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, a, s, l, u, c, d, f = [r || he],
                p = ee.call(t, "type") ? t.type : t,
                h = ee.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !qe.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), u = ie.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(r, n))) {
                if (!i && !u.noBubble && !ie.isWindow(r)) {
                    for (l = u.delegateType || p, qe.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, (o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle")) && o.apply(s, n), (o = a && s[a]) && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), n)) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) {
                    (c = r[a]) && (r[a] = null), ie.event.triggered = p;
                    try {
                        r[p]()
                    } catch (e) {}
                    ie.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = ie.event.fix(e);
            var t, n, r, i, o, a = [],
                s = J.call(arguments),
                l = (ie._data(this, "events") || {})[e.type] || [],
                u = ie.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = ie.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(l) >= 0 : ie.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function (e) {
            if (e[ie.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = He.test(i) ? this.mouseHooks : Le.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ie.removeEvent = he.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Te && (e[r] = null), e.detachEvent(r, n))
    }, ie.Event = function (e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (!1 === e.returnValue || e.getPreventDefault && e.getPreventDefault()) ? f : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
    }, ie.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = f, this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (ie.event.special.submit = {
        setup: function () {
            return !ie.nodeName(this, "form") && void ie.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ie._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return !ie.nodeName(this, "form") && void ie.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (ie.event.special.change = {
        setup: function () {
            return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ie.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0)
            })), !1) : void ie.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                je.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
                }), ie._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return ie.event.remove(this, "._change"), !je.test(this.nodeName)
        }
    }), ne.focusinBubbles || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            ie.event.simulate(t, e.target, ie.event.fix(e), !0)
        };
        ie.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t);
                i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t) - 1;
                i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
            }
        }
    }), ie.fn.extend({
        on: function (e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function (e) {
                return ie().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function () {
                ie.event.add(this, e, r, n, t)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = p), this.each(function () {
                ie.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? ie.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Fe = / jQuery\d+="(?:null|\d+)"/g,
        Oe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        Be = /^\s+/,
        Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Re = /<([\w:]+)/,
        We = /<tbody/i,
        $e = /<|&#?\w+;/,
        ze = /<(?:script|style|link)/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xe = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ye = m(he).appendChild(he.createElement("div"));
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, ie.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = ie.contains(e.ownerDocument, e);
            if (ne.html5Clone || ie.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ye.innerHTML = e.outerHTML, Ye.removeChild(o = Ye.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return (r = g(o, "script")).length > 0 && w(r, !l && g(e, "script")), r = s = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, l, u, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
                    else if ($e.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Re.exec(o) || ["", ""])[1].toLowerCase(), c = Je[l] || Je._default, s.innerHTML = c[1] + o.replace(Pe, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Be.test(o) && p.push(t.createTextNode(Be.exec(o)[0])), !ne.tbody)
                    for (i = (o = "table" !== l || We.test(o) ? "<table>" !== c[1] || We.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) ie.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || ie.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Xe.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ie.expando, l = ie.cache, u = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, V.push(i))
                }
        }
    }), ie.fn.extend({
        text: function (e) {
            return Ae(this, function (e) {
                return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || y(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(g(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ie.clone(this, e, t)
            })
        },
        html: function (e) {
            return Ae(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Fe, "") : void 0;
                if (!("string" != typeof e || ze.test(e) || !ne.htmlSerialize && Oe.test(e) || !ne.leadingWhitespace && Be.test(e) || Je[(Re.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Pe, "<$1></$2>");
                    try {
                        for (; r > n; n++) 1 === (t = this[n] || {}).nodeType && (ie.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = Y.apply([], e);
            var n, r, i, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = ie.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !ne.checkClone && Ie.test(f)) return this.each(function (n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (i = (o = ie.map(g(s, "script"), b)).length; u > l; l++) r = s, l !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, g(r, "script"))), t.call(this[l], r, l);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, ie.map(o, x), l = 0; i > l; l++) r = o[l], Xe.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ve, "")));
                s = n = null
            }
            return this
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ie.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), G.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ge, Qe = {};
    ! function () {
        var e, t, n = he.createElement("div");
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (e = n.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(e.style.opacity), ne.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, ne.shrinkWrapBlocks = function () {
            var e, n, r;
            if (null == t) {
                if (!(e = he.getElementsByTagName("body")[0])) return;
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = he.createElement("div"), r = he.createElement("div"), e.appendChild(n).appendChild(r), t = !1, typeof r.style.zoom !== Te && (r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t = 3 !== r.offsetWidth), e.removeChild(n), e = n = r = null
            }
            return t
        }
    }();
    var Ke, Ze, et = /^margin/,
        tt = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        nt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Ke = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, Ze = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || Ke(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), tt.test(a) && et.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : he.documentElement.currentStyle && (Ke = function (e) {
            return e.currentStyle
        }, Ze = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || Ke(e), null == (a = n ? n[t] : void 0) && s && s[t] && (a = s[t]), tt.test(a) && !nt.test(t) && (r = s.left, i = e.runtimeStyle, (o = i && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function () {
            function t() {
                var t, n, r = he.getElementsByTagName("body")[0];
                r && (t = he.createElement("div"), n = he.createElement("div"), t.style.cssText = u, r.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", ie.swap(r, null != r.style.zoom ? {
                    zoom: 1
                } : {}, function () {
                    i = 4 === n.offsetWidth
                }), o = !0, a = !1, s = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(n, null) || {}).top, o = "4px" === (e.getComputedStyle(n, null) || {
                    width: "4px"
                }).width), r.removeChild(t), n = r = null)
            }
            var n, r, i, o, a, s, l = he.createElement("div"),
                u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
            l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (n = l.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(n.style.opacity), ne.cssFloat = !!n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, ie.extend(ne, {
                reliableHiddenOffsets: function () {
                    if (null != r) return r;
                    var e, t, n, i = he.createElement("div"),
                        o = he.getElementsByTagName("body")[0];
                    return o ? (i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = he.createElement("div"), e.style.cssText = u, o.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", r = n && 0 === t[0].offsetHeight, o.removeChild(e), i = o = null, r) : void 0
                },
                boxSizing: function () {
                    return null == i && t(), i
                },
                boxSizingReliable: function () {
                    return null == o && t(), o
                },
                pixelPosition: function () {
                    return null == a && t(), a
                },
                reliableMarginRight: function () {
                    var t, n, r, i;
                    if (null == s && e.getComputedStyle) {
                        if (!(t = he.getElementsByTagName("body")[0])) return;
                        n = he.createElement("div"), r = he.createElement("div"), n.style.cssText = u, t.appendChild(n).appendChild(r), (i = r.appendChild(he.createElement("div"))).style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", s = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(n)
                    }
                    return s
                }
            })
        }(), ie.swap = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var rt = /alpha\([^)]*\)/i,
        it = /opacity\s*=\s*([^)]*)/,
        ot = /^(none|table(?!-c[ea]).+)/,
        at = new RegExp("^(" + Ee + ")(.*)$", "i"),
        st = new RegExp("^([+-])=(" + Ee + ")", "i"),
        lt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ct = ["Webkit", "O", "Moz", "ms"];
    ie.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ze(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ie.camelCase(t),
                    l = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = S(l, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if ("string" === (o = typeof n) && (i = st.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = "", l[t] = n
                } catch (e) {}
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = ie.camelCase(t);
            return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), (a = ie.cssHooks[t] || ie.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ze(e, t, r)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (i = parseFloat(o), !0 === n || ie.isNumeric(i) ? i || 0 : o) : o
        }
    }), ie.each(["height", "width"], function (e, t) {
        ie.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? 0 === e.offsetWidth && ot.test(ie.css(e, "display")) ? ie.swap(e, lt, function () {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            },
            set: function (e, n, r) {
                var i = r && Ke(e);
                return D(e, n, r ? j(e, t, r, ne.boxSizing() && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ne.opacity || (ie.cssHooks.opacity = {
        get: function (e, t) {
            return it.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = rt.test(o) ? o.replace(rt, i) : o + " " + i)
        }
    }), ie.cssHooks.marginRight = k(ne.reliableMarginRight, function (e, t) {
        return t ? ie.swap(e, {
            display: "inline-block"
        }, Ze, [e, "marginRight"]) : void 0
    }), ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ie.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + ke[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, et.test(e) || (ie.cssHooks[e + t].set = D)
    }), ie.fn.extend({
        css: function (e, t) {
            return Ae(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (r = Ke(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return A(this, !0)
        },
        hide: function () {
            return A(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Se(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = H, H.prototype = {
        constructor: H,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ie.fx = H.prototype.init, ie.fx.step = {};
    var dt, ft, pt = /^(?:toggle|show|hide)$/,
        ht = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        mt = /queueHooks$/,
        gt = [function (e, t, n) {
            var r, i, o, a, s, l, u, c, d = this,
                f = {},
                p = e.style,
                h = e.nodeType && Se(e),
                m = ie._data(e, "fxshow");
            n.queue || (null == (s = ie._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, ie.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ie.css(e, "display"), c = E(e.nodeName), "none" === u && (u = c), "inline" === u && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== c ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], pt.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        h = !0
                    }
                    f[r] = m && m[r] || ie.style(e, r)
                } if (!ie.isEmptyObject(f)) {
                m ? "hidden" in m && (h = m.hidden) : m = ie._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ie(e).show() : d.done(function () {
                    ie(e).hide()
                }), d.done(function () {
                    var t;
                    ie._removeData(e, "fxshow");
                    for (t in f) ie.style(e, t, f[t])
                });
                for (r in f) a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }],
        vt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = ht.exec(t),
                    o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== o && +r) && ht.exec(ie.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do {
                        s = s || ".5", a /= s, ie.style(n.elem, e, a + o)
                    } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ie.Animation = ie.extend(O, {
            tweener: function (e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], vt[n] = vt[n] || [], vt[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? gt.unshift(e) : gt.push(e)
            }
        }), ie.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = ie.isEmptyObject(e),
                    o = ie.speed(t, n, r),
                    a = function () {
                        var t = O(this, ie.extend({}, e), o);
                        (i || ie._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ie.timers,
                        a = ie._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && mt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && ie.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = ie._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function (e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i)
            }
        }), ie.each({
            slideDown: _("show"),
            slideUp: _("hide"),
            slideToggle: _("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            ie.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function () {
            var e, t = ie.timers,
                n = 0;
            for (dt = ie.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), dt = void 0
        }, ie.fx.timer = function (e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function () {
            ft || (ft = setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function () {
            clearInterval(ft), ft = null
        }, ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ie.fn.delay = function (e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        function () {
            var e, t, n, r, i = he.createElement("div");
            i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], r = (n = he.createElement("select")).appendChild(he.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", ne.getSetAttribute = "t" !== i.className, ne.style = /top/.test(e.getAttribute("style")), ne.hrefNormalized = "/a" === e.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = r.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, (t = he.createElement("input")).setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value, e = t = n = r = i = null
        }();
    var yt = /\r/g;
    ie.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ie.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(yt, "") : null == n ? "" : n)) : void 0
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.text(e)
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (!(!(n = r[l]).selected && l !== i || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
                        if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (e) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function () {
        ie.valHooks[this] = {
            set: function (e, t) {
                return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (ie.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var bt, xt, wt = ie.expr.attrHandle,
        Tt = /^(?:checked|selected)$/i,
        Ct = ne.getSetAttribute,
        Nt = ne.input;
    ie.fn.extend({
        attr: function (e, t) {
            return Ae(this, ie.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Te ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? xt : bt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(ye);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? Nt && Ct || !Tt.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Ct ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), xt = {
        set: function (e, t, n) {
            return !1 === t ? ie.removeAttr(e, n) : Nt && Ct || !Tt.test(n) ? e.setAttribute(!Ct && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = wt[t] || ie.find.attr;
        wt[t] = Nt && Ct || !Tt.test(t) ? function (e, t, r) {
            var i, o;
            return r || (o = wt[t], wt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, wt[t] = o), i
        } : function (e, t, n) {
            return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nt && Ct || (ie.attrHooks.value = {
        set: function (e, t, n) {
            return ie.nodeName(e, "input") ? void(e.defaultValue = t) : bt && bt.set(e, t, n)
        }
    }), Ct || (bt = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, wt.id = wt.name = wt.coords = function (e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, ie.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: bt.set
    }, ie.attrHooks.contenteditable = {
        set: function (e, t, n) {
            bt.set(e, "" !== t && t, n)
        }
    }, ie.each(["width", "height"], function (e, t) {
        ie.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (ie.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Et = /^(?:input|select|textarea|button|object)$/i,
        kt = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function (e, t) {
            return Ae(this, ie.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = ie.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), ie.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !ie.isXMLDoc(e)) && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Et.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || ie.each(["href", "src"], function (e, t) {
        ie.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (ie.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ie.propFix[this.toLowerCase()] = this
    }), ne.enctype || (ie.propFix.enctype = "encoding");
    var St = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function (t) {
                ie(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ye) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function (t) {
                ie(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ye) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? ie.trim(r) : "", n.className !== a && (n.className = a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ie.isFunction(e) ? function (n) {
                ie(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, r = 0, i = ie(this), o = e.match(ye) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Te || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ie._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(St, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ie.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var At = ie.now(),
        Dt = /\?/,
        jt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = ie.trim(t + "");
        return i && !ie.trim(i.replace(jt, function (e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t)
    }, ie.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
    };
    var Lt, Ht, qt = /#.*$/,
        _t = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ot = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Pt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Rt = {},
        Wt = {},
        $t = "*/".concat("*");
    try {
        Ht = location.href
    } catch (e) {
        (Ht = he.createElement("a")).href = "", Ht = Ht.href
    }
    Lt = Pt.exec(Ht.toLowerCase()) || [], ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ht,
            type: "GET",
            isLocal: Ft.test(Lt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? R(R(e, ie.ajaxSettings), t) : R(ie.ajaxSettings, e)
        },
        ajaxPrefilter: B(Rt),
        ajaxTransport: B(Wt),
        ajax: function (e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = W(d, w, n)), y = $(d, y, w, i), i ? (d.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (ie.lastModified[o] = x), (x = w.getResponseHeader("etag")) && (ie.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), l && (p.trigger("ajaxComplete", [w, d]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, l, u, c, d = ie.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
                h = ie.Deferred(),
                m = ie.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Mt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Ht) + "").replace(qt, "").replace(Bt, Lt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(ye) || [""], null == d.crossDomain && (r = Pt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Lt[1] && r[2] === Lt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), P(Rt, d, t, w), 2 === b) return w;
            (l = d.global) && 0 == ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ot.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Dt.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = _t.test(o) ? o.replace(_t, "$1_=" + At++) : o + (Dt.test(o) ? "&" : "?") + "_=" + At++)), d.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (!1 === d.beforeSend.call(f, w, d) || 2 === b)) return w.abort();
            x = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](d[i]);
            if (u = P(Wt, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }), ie.each(["get", "post"], function (e, t) {
        ie[t] = function (e, n, r, i) {
            return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ie.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ie._evalUrl = function (e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, ie.fn.extend({
        wrapAll: function (e) {
            if (ie.isFunction(e)) return this.each(function (t) {
                ie(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return this.each(ie.isFunction(e) ? function (t) {
                ie(this).wrapInner(e.call(this, t))
            } : function () {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ie.isFunction(e);
            return this.each(function (n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
    }, ie.expr.filters.visible = function (e) {
        return !ie.expr.filters.hidden(e)
    };
    var zt = /%20/g,
        It = /\[\]$/,
        Xt = /\r?\n/g,
        Ut = /^(?:submit|button|image|reset|file)$/i,
        Vt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, i);
        return r.join("&").replace(zt, "+")
    }, ie.fn.extend({
        serialize: function () {
            return ie.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Vt.test(this.nodeName) && !Ut.test(e) && (this.checked || !De.test(e))
            }).map(function (e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Xt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Xt, "\r\n")
                }
            }).get()
        }
    }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && I() || X()
    } : I;
    var Jt = 0,
        Yt = {},
        Gt = ie.ajaxSettings.xhr();
    e.ActiveXObject && ie(e).on("unload", function () {
        for (var e in Yt) Yt[e](void 0, !0)
    }), ne.cors = !!Gt && "withCredentials" in Gt, (Gt = ne.ajax = !!Gt) && ie.ajaxTransport(function (e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function (n, r) {
                    var i, o = e.xhr(),
                        a = ++Jt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function (n, i) {
                        var s, l, u;
                        if (t && (i || 4 === o.readyState))
                            if (delete Yt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (e) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            } u && r(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Yt[a] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ie.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = he.head || ie("head")[0] || he.documentElement;
            return {
                send: function (r, i) {
                    (t = he.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var Qt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Qt.pop() || ie.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Kt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Kt, "$1" + i) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || ie.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Qt.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), ie.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var r = de.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
    };
    var Zt = ie.fn.load;
    ie.fn.load = function (e, t, n) {
        if ("string" != typeof e && Zt) return Zt.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = e.slice(s, e.length), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, ie.expr.filters.animated = function (e) {
        return ie.grep(ie.timers, function (t) {
            return e === t.elem
        }).length
    };
    var en = e.document.documentElement;
    ie.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, l, u = ie.css(e, "position"),
                c = ie(e),
                d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = ie.css(e, "top"), l = ie.css(e, "left"), ("absolute" === u || "fixed" === u) && ie.inArray("auto", [o, l]) > -1 ? (r = c.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, ie.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ie.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Te && (r = i.getBoundingClientRect()), n = U(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ie.css(r, "marginTop", !0),
                    left: t.left - n.left - ie.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || en; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || en
            })
        }
    }), ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function (r) {
            return Ae(this, function (e, r, i) {
                var o = U(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), ie.each(["top", "left"], function (e, t) {
        ie.cssHooks[t] = k(ne.pixelPosition, function (e, n) {
            return n ? (n = Ze(e, t), tt.test(n) ? ie(e).position()[t] + "px" : n) : void 0
        })
    }), ie.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            ie.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                return Ae(this, function (t, n, r) {
                    var i;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ie.fn.size = function () {
        return this.length
    }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ie
    });
    var tn = e.jQuery,
        nn = e.$;
    return ie.noConflict = function (t) {
        return e.$ === ie && (e.$ = nn), t && e.jQuery === ie && (e.jQuery = tn), ie
    }, typeof t === Te && (e.jQuery = e.$ = ie), ie
});
! function (t, o) {
    "function" == typeof define && define.amd ? define(["jquery"], o) : "object" == typeof exports ? module.exports = o(require("jquery")) : o(t.jQuery)
}(this, function (t) {
    "function" != typeof Object.create && (Object.create = function (t) {
        function o() {}
        return o.prototype = t, new o
    });
    var o = {
        init: function (o) {
            return this.options = t.extend({}, t.noty.defaults, o), this.options.layout = this.options.custom ? t.noty.layouts.inline : t.noty.layouts[this.options.layout], t.noty.themes[this.options.theme] ? this.options.theme = t.noty.themes[this.options.theme] : this.options.themeClassName = this.options.theme, this.options = t.extend({}, this.options, this.options.layout.options), this.options.id = "noty_" + (new Date).getTime() * Math.floor(1e6 * Math.random()), this._build(), this
        },
        _build: function () {
            var o = t('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
            if (o.append(this.options.template).find(".noty_text").html(this.options.text), this.$bar = null !== this.options.layout.parent.object ? t(this.options.layout.parent.object).css(this.options.layout.parent.css).append(o) : o, this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type), this.options.buttons) {
                this.options.closeWith = [], this.options.timeout = !1;
                var e = t("<div/>").addClass("noty_buttons");
                null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(e) : this.$bar.append(e);
                var n = this;
                t.each(this.options.buttons, function (o, e) {
                    var s = t("<button/>").addClass(e.addClass ? e.addClass : "gray").html(e.text).attr("id", e.id ? e.id : "button-" + o).attr("title", e.title).appendTo(n.$bar.find(".noty_buttons")).on("click", function (o) {
                        t.isFunction(e.onClick) && e.onClick.call(s, n, o)
                    })
                })
            }
            this.$message = this.$bar.find(".noty_message"), this.$closeButton = this.$bar.find(".noty_close"), this.$buttons = this.$bar.find(".noty_buttons"), t.noty.store[this.options.id] = this
        },
        show: function () {
            var o = this;
            return o.options.custom ? o.options.custom.find(o.options.layout.container.selector).append(o.$bar) : t(o.options.layout.container.selector).append(o.$bar), o.options.theme && o.options.theme.style && o.options.theme.style.apply(o), "function" === t.type(o.options.layout.css) ? this.options.layout.css.apply(o.$bar) : o.$bar.css(this.options.layout.css || {}), o.$bar.addClass(o.options.layout.addClass), o.options.layout.container.style.apply(t(o.options.layout.container.selector), [o.options.within]), o.showing = !0, o.options.theme && o.options.theme.style && o.options.theme.callback.onShow.apply(this), t.inArray("click", o.options.closeWith) > -1 && o.$bar.css("cursor", "pointer").one("click", function (t) {
                o.stopPropagation(t), o.options.callback.onCloseClick && o.options.callback.onCloseClick.apply(o), o.close()
            }), t.inArray("hover", o.options.closeWith) > -1 && o.$bar.one("mouseenter", function () {
                o.close()
            }), t.inArray("button", o.options.closeWith) > -1 && o.$closeButton.one("click", function (t) {
                o.stopPropagation(t), o.close()
            }), -1 == t.inArray("button", o.options.closeWith) && o.$closeButton.remove(), o.options.callback.onShow && o.options.callback.onShow.apply(o), "string" == typeof o.options.animation.open ? (o.$bar.css("height", o.$bar.innerHeight()), o.$bar.on("click", function (t) {
                o.wasClicked = !0
            }), o.$bar.show().addClass(o.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                o.options.callback.afterShow && o.options.callback.afterShow.apply(o), o.showing = !1, o.shown = !0, o.hasOwnProperty("wasClicked") && (o.$bar.off("click", function (t) {
                    o.wasClicked = !0
                }), o.close())
            })) : o.$bar.animate(o.options.animation.open, o.options.animation.speed, o.options.animation.easing, function () {
                o.options.callback.afterShow && o.options.callback.afterShow.apply(o), o.showing = !1, o.shown = !0
            }), o.options.timeout && o.$bar.delay(o.options.timeout).promise().done(function () {
                o.close()
            }), this
        },
        close: function () {
            if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
                var o = this;
                if (this.showing) o.$bar.queue(function () {
                    o.close.apply(o)
                });
                else {
                    if (!this.shown && !this.showing) {
                        var e = [];
                        return t.each(t.noty.queue, function (t, n) {
                            n.options.id != o.options.id && e.push(n)
                        }), void(t.noty.queue = e)
                    }
                    o.$bar.addClass("i-am-closing-now"), o.options.callback.onClose && o.options.callback.onClose.apply(o), "string" == typeof o.options.animation.close ? o.$bar.addClass(o.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                        o.options.callback.afterClose && o.options.callback.afterClose.apply(o), o.closeCleanUp()
                    }) : o.$bar.clearQueue().stop().animate(o.options.animation.close, o.options.animation.speed, o.options.animation.easing, function () {
                        o.options.callback.afterClose && o.options.callback.afterClose.apply(o)
                    }).promise().done(function () {
                        o.closeCleanUp()
                    })
                }
            }
        },
        closeCleanUp: function () {
            var o = this;
            o.options.modal && (t.notyRenderer.setModalCount(-1), 0 == t.notyRenderer.getModalCount() && t(".noty_modal").fadeOut(o.options.animation.fadeSpeed, function () {
                t(this).remove()
            })), t.notyRenderer.setLayoutCountFor(o, -1), 0 == t.notyRenderer.getLayoutCountFor(o) && t(o.options.layout.container.selector).remove(), void 0 !== o.$bar && null !== o.$bar && ("string" == typeof o.options.animation.close ? (o.$bar.css("transition", "all 100ms ease").css("border", 0).css("margin", 0).height(0), o.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                o.$bar.remove(), o.$bar = null, o.closed = !0, o.options.theme.callback && o.options.theme.callback.onClose && o.options.theme.callback.onClose.apply(o)
            })) : (o.$bar.remove(), o.$bar = null, o.closed = !0)), delete t.noty.store[o.options.id], o.options.theme.callback && o.options.theme.callback.onClose && o.options.theme.callback.onClose.apply(o), o.options.dismissQueue || (t.noty.ontap = !0, t.notyRenderer.render()), o.options.maxVisible > 0 && o.options.dismissQueue && t.notyRenderer.render()
        },
        setText: function (t) {
            return this.closed || (this.options.text = t, this.$bar.find(".noty_text").html(t)), this
        },
        setType: function (t) {
            return this.closed || (this.options.type = t, this.options.theme.style.apply(this), this.options.theme.callback.onShow.apply(this)), this
        },
        setTimeout: function (t) {
            if (!this.closed) {
                var o = this;
                this.options.timeout = t, o.$bar.delay(o.options.timeout).promise().done(function () {
                    o.close()
                })
            }
            return this
        },
        stopPropagation: function (t) {
            void 0 !== (t = t || window.event).stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        },
        closed: !1,
        showing: !1,
        shown: !1
    };
    t.notyRenderer = {}, t.notyRenderer.init = function (e) {
        var n = Object.create(o).init(e);
        return n.options.killer && t.noty.closeAll(), n.options.force ? t.noty.queue.unshift(n) : t.noty.queue.push(n), t.notyRenderer.render(), "object" == t.noty.returns ? n : n.options.id
    }, t.notyRenderer.render = function () {
        var o = t.noty.queue[0];
        "object" === t.type(o) ? o.options.dismissQueue ? o.options.maxVisible > 0 ? t(o.options.layout.container.selector + " > li").length < o.options.maxVisible && t.notyRenderer.show(t.noty.queue.shift()) : t.notyRenderer.show(t.noty.queue.shift()) : t.noty.ontap && (t.notyRenderer.show(t.noty.queue.shift()), t.noty.ontap = !1) : t.noty.ontap = !0
    }, t.notyRenderer.show = function (o) {
        o.options.modal && (t.notyRenderer.createModalFor(o), t.notyRenderer.setModalCount(1)), o.options.custom ? 0 == o.options.custom.find(o.options.layout.container.selector).length ? o.options.custom.append(t(o.options.layout.container.object).addClass("i-am-new")) : o.options.custom.find(o.options.layout.container.selector).removeClass("i-am-new") : 0 == t(o.options.layout.container.selector).length ? t("body").append(t(o.options.layout.container.object).addClass("i-am-new")) : t(o.options.layout.container.selector).removeClass("i-am-new"), t.notyRenderer.setLayoutCountFor(o, 1), o.show()
    }, t.notyRenderer.createModalFor = function (o) {
        if (0 == t(".noty_modal").length) {
            var e = t("<div/>").addClass("noty_modal").addClass(o.options.theme).data("noty_modal_count", 0);
            o.options.theme.modal && o.options.theme.modal.css && e.css(o.options.theme.modal.css), e.prependTo(t("body")).fadeIn(o.options.animation.fadeSpeed), t.inArray("backdrop", o.options.closeWith) > -1 && e.on("click", function (o) {
                t.noty.closeAll()
            })
        }
    }, t.notyRenderer.getLayoutCountFor = function (o) {
        return t(o.options.layout.container.selector).data("noty_layout_count") || 0
    }, t.notyRenderer.setLayoutCountFor = function (o, e) {
        return t(o.options.layout.container.selector).data("noty_layout_count", t.notyRenderer.getLayoutCountFor(o) + e)
    }, t.notyRenderer.getModalCount = function () {
        return t(".noty_modal").data("noty_modal_count") || 0
    }, t.notyRenderer.setModalCount = function (o) {
        return t(".noty_modal").data("noty_modal_count", t.notyRenderer.getModalCount() + o)
    }, t.fn.noty = function (o) {
        return o.custom = t(this), t.notyRenderer.init(o)
    }, t.noty = {}, t.noty.queue = [], t.noty.ontap = !0, t.noty.layouts = {}, t.noty.themes = {}, t.noty.returns = "object", t.noty.store = {}, t.noty.get = function (o) {
        return !!t.noty.store.hasOwnProperty(o) && t.noty.store[o]
    }, t.noty.close = function (o) {
        return !!t.noty.get(o) && t.noty.get(o).close()
    }, t.noty.setText = function (o, e) {
        return !!t.noty.get(o) && t.noty.get(o).setText(e)
    }, t.noty.setType = function (o, e) {
        return !!t.noty.get(o) && t.noty.get(o).setType(e)
    }, t.noty.clearQueue = function () {
        t.noty.queue = []
    }, t.noty.closeAll = function () {
        t.noty.clearQueue(), t.each(t.noty.store, function (t, o) {
            o.close()
        })
    };
    var e = window.alert;
    return t.noty.consumeAlert = function (o) {
        window.alert = function (e) {
            o ? o.text = e : o = {
                text: e
            }, t.notyRenderer.init(o)
        }
    }, t.noty.stopConsumeAlert = function () {
        window.alert = e
    }, t.noty.defaults = {
        layout: "top",
        theme: "defaultTheme",
        type: "alert",
        text: "",
        dismissQueue: !0,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500,
            fadeSpeed: "fast"
        },
        timeout: !1,
        force: !1,
        modal: !1,
        maxVisible: 5,
        killer: !1,
        closeWith: ["click"],
        callback: {
            onShow: function () {},
            afterShow: function () {},
            onClose: function () {},
            afterClose: function () {},
            onCloseClick: function () {}
        },
        buttons: !1
    }, t(window).on("resize", function () {
        t.each(t.noty.layouts, function (o, e) {
            e.container.style.apply(t(e.container.selector))
        })
    }), window.noty = function (o) {
        return t.notyRenderer.init(o)
    }, t.noty.layouts.bottom = {
        name: "bottom",
        options: {},
        container: {
            object: '<ul id="noty_bottom_layout_container" />',
            selector: "ul#noty_bottom_layout_container",
            style: function () {
                t(this).css({
                    bottom: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    }, t.noty.layouts.bottomCenter = {
        name: "bottomCenter",
        options: {},
        container: {
            object: '<ul id="noty_bottomCenter_layout_container" />',
            selector: "ul#noty_bottomCenter_layout_container",
            style: function () {
                t(this).css({
                    bottom: 20,
                    left: 0,
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), t(this).css({
                    left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.layouts.bottomLeft = {
        name: "bottomLeft",
        options: {},
        container: {
            object: '<ul id="noty_bottomLeft_layout_container" />',
            selector: "ul#noty_bottomLeft_layout_container",
            style: function () {
                t(this).css({
                    bottom: 20,
                    left: 20,
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), window.innerWidth < 600 && t(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.layouts.bottomRight = {
        name: "bottomRight",
        options: {},
        container: {
            object: '<ul id="noty_bottomRight_layout_container" />',
            selector: "ul#noty_bottomRight_layout_container",
            style: function () {
                t(this).css({
                    bottom: 20,
                    right: 20,
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), window.innerWidth < 600 && t(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.layouts.center = {
        name: "center",
        options: {},
        container: {
            object: '<ul id="noty_center_layout_container" />',
            selector: "ul#noty_center_layout_container",
            style: function () {
                t(this).css({
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o), o.find(".i-am-closing-now").remove(), o.find("li").css("display", "block");
                var e = o.height();
                o.remove(), t(this).hasClass("i-am-new") ? t(this).css({
                    left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
                    top: (t(window).height() - e) / 2 + "px"
                }) : t(this).animate({
                    left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
                    top: (t(window).height() - e) / 2 + "px"
                }, 500)
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.layouts.centerLeft = {
        name: "centerLeft",
        options: {},
        container: {
            object: '<ul id="noty_centerLeft_layout_container" />',
            selector: "ul#noty_centerLeft_layout_container",
            style: function () {
                t(this).css({
                    left: 20,
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o), o.find(".i-am-closing-now").remove(), o.find("li").css("display", "block");
                var e = o.height();
                o.remove(), t(this).hasClass("i-am-new") ? t(this).css({
                    top: (t(window).height() - e) / 2 + "px"
                }) : t(this).animate({
                    top: (t(window).height() - e) / 2 + "px"
                }, 500), window.innerWidth < 600 && t(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.layouts.centerRight = {
        name: "centerRight",
        options: {},
        container: {
            object: '<ul id="noty_centerRight_layout_container" />',
            selector: "ul#noty_centerRight_layout_container",
            style: function () {
                t(this).css({
                    right: 20,
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o), o.find(".i-am-closing-now").remove(), o.find("li").css("display", "block");
                var e = o.height();
                o.remove(), t(this).hasClass("i-am-new") ? t(this).css({
                    top: (t(window).height() - e) / 2 + "px"
                }) : t(this).animate({
                    top: (t(window).height() - e) / 2 + "px"
                }, 500), window.innerWidth < 600 && t(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.layouts.inline = {
        name: "inline",
        options: {},
        container: {
            object: '<ul class="noty_inline_layout_container" />',
            selector: "ul.noty_inline_layout_container",
            style: function () {
                t(this).css({
                    width: "100%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    }, t.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: "ul#noty_top_layout_container",
            style: function () {
                t(this).css({
                    top: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    }, t.noty.layouts.topCenter = {
        name: "topCenter",
        options: {},
        container: {
            object: '<ul id="noty_topCenter_layout_container" />',
            selector: "ul#noty_topCenter_layout_container",
            style: function () {
                t(this).css({
                    top: 20,
                    left: 0,
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), t(this).css({
                    left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.layouts.topLeft = {
        name: "topLeft",
        options: {},
        container: {
            object: '<ul id="noty_topLeft_layout_container" />',
            selector: "ul#noty_topLeft_layout_container",
            style: function () {
                t(this).css({
                    top: 20,
                    left: 20,
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), window.innerWidth < 600 && t(this).css({
                    left: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.layouts.topRight = {
        name: "topRight",
        options: {},
        container: {
            object: '<ul id="noty_topRight_layout_container" />',
            selector: "ul#noty_topRight_layout_container",
            style: function () {
                t(this).css({
                    top: 20,
                    right: 20,
                    position: "fixed",
                    width: "240px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), window.innerWidth < 600 && t(this).css({
                    right: 5
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "240px"
        },
        addClass: ""
    }, t.noty.themes.bootstrapTheme = {
        name: "bootstrapTheme",
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function () {
            var o = this.options.layout.container.selector;
            switch (t(o).addClass("list-group"), this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'), this.$closeButton.addClass("close"), this.$bar.addClass("list-group-item").css("padding", "0px"), this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.addClass("list-group-item-info");
                    break;
                case "warning":
                    this.$bar.addClass("list-group-item-warning");
                    break;
                case "error":
                    this.$bar.addClass("list-group-item-danger");
                    break;
                case "information":
                    this.$bar.addClass("list-group-item-info");
                    break;
                case "success":
                    this.$bar.addClass("list-group-item-success")
            }
            this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            })
        },
        callback: {
            onShow: function () {},
            onClose: function () {}
        }
    }, t.noty.themes.defaultTheme = {
        name: "defaultTheme",
        helpers: {
            borderFix: function () {
                if (this.options.dismissQueue) {
                    var o = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                        case "top":
                            t(o).css({
                                borderRadius: "0px 0px 0px 0px"
                            }), t(o).last().css({
                                borderRadius: "0px 0px 5px 5px"
                            });
                            break;
                        case "topCenter":
                        case "topLeft":
                        case "topRight":
                        case "bottomCenter":
                        case "bottomLeft":
                        case "bottomRight":
                        case "center":
                        case "centerLeft":
                        case "centerRight":
                        case "inline":
                            t(o).css({
                                borderRadius: "0px 0px 0px 0px"
                            }), t(o).first().css({
                                "border-top-left-radius": "5px",
                                "border-top-right-radius": "5px"
                            }), t(o).last().css({
                                "border-bottom-left-radius": "5px",
                                "border-bottom-right-radius": "5px"
                            });
                            break;
                        case "bottom":
                            t(o).css({
                                borderRadius: "0px 0px 0px 0px"
                            }), t(o).first().css({
                                borderRadius: "5px 5px 0px 0px"
                            })
                    }
                }
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function () {
            switch (this.$bar.css({
                overflow: "hidden",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff"
            }), this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            }), this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }), this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }), this.$buttons.find("button").css({
                marginLeft: 5
            }), this.$buttons.find("button:first").css({
                marginLeft: 0
            }), this.$bar.on({
                mouseenter: function () {
                    t(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function () {
                    t(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            }), this.options.layout.name) {
                case "top":
                    this.$bar.css({
                        borderRadius: "0px 0px 5px 5px",
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case "topCenter":
                case "center":
                case "bottomCenter":
                case "inline":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    }), this.$message.css({
                        fontSize: "13px",
                        textAlign: "center"
                    });
                    break;
                case "topLeft":
                case "topRight":
                case "bottomLeft":
                case "bottomRight":
                case "centerLeft":
                case "centerRight":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    }), this.$message.css({
                        fontSize: "13px",
                        textAlign: "left"
                    });
                    break;
                case "bottom":
                    this.$bar.css({
                        borderRadius: "5px 5px 0px 0px",
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    })
            }
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break;
                case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    }), this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;
                case "error":
                    this.$bar.css({
                        backgroundColor: "red",
                        borderColor: "darkred",
                        color: "#FFF"
                    }), this.$message.css({
                        fontWeight: "bold"
                    }), this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;
                case "information":
                    this.$bar.css({
                        backgroundColor: "#57B7E2",
                        borderColor: "#0B90C4",
                        color: "#FFF"
                    }), this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;
                case "success":
                    this.$bar.css({
                        backgroundColor: "lightgreen",
                        borderColor: "#50C24E",
                        color: "darkgreen"
                    }), this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;
                default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    })
            }
        },
        callback: {
            onShow: function () {
                t.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            },
            onClose: function () {
                t.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            }
        }
    }, t.noty.themes.relax = {
        name: "relax",
        helpers: {},
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function () {
            switch (this.$bar.css({
                overflow: "hidden",
                margin: "4px 0",
                borderRadius: "2px"
            }), this.$message.css({
                fontSize: "14px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "10px",
                width: "auto",
                position: "relative"
            }), this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }), this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }), this.$buttons.find("button").css({
                marginLeft: 5
            }), this.$buttons.find("button:first").css({
                marginLeft: 0
            }), this.$bar.on({
                mouseenter: function () {
                    t(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function () {
                    t(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            }), this.options.layout.name) {
                case "top":
                    this.$bar.css({
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        borderTop: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case "topCenter":
                case "center":
                case "bottomCenter":
                case "inline":
                    this.$bar.css({
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    }), this.$message.css({
                        fontSize: "13px",
                        textAlign: "center"
                    });
                    break;
                case "topLeft":
                case "topRight":
                case "bottomLeft":
                case "bottomRight":
                case "centerLeft":
                case "centerRight":
                    this.$bar.css({
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    }), this.$message.css({
                        fontSize: "13px",
                        textAlign: "left"
                    });
                    break;
                case "bottom":
                    this.$bar.css({
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        borderBottom: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    })
            }
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#dedede",
                        color: "#444"
                    });
                    break;
                case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    }), this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;
                case "error":
                    this.$bar.css({
                        backgroundColor: "#FF8181",
                        borderColor: "#e25353",
                        color: "#FFF"
                    }), this.$message.css({
                        fontWeight: "bold"
                    }), this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;
                case "information":
                    this.$bar.css({
                        backgroundColor: "#78C5E7",
                        borderColor: "#3badd6",
                        color: "#FFF"
                    }), this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;
                case "success":
                    this.$bar.css({
                        backgroundColor: "#BCF5BC",
                        borderColor: "#7cdd77",
                        color: "darkgreen"
                    }), this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;
                default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    })
            }
        },
        callback: {
            onShow: function () {},
            onClose: function () {}
        }
    }, window.noty
});

function generate(n) {
    noty({
        text: n,
        type: n,
        dismissQueue: !0,
        modal: !1,
        maxVisible: 3,
        timeout: 2e4,
        layout: "bottomLeft",
        theme: "defaultTheme",
        animation: {
            open: "animated bounceInLeft",
            close: "animated bounceOutLeft",
            easing: "swing",
            speed: 700
        }
    })
}

function generateAll() {
    setTimeout(function () {
        generate(randbtc + " BTC mixed in " + randprocent + " Minutes")
    }, rand), setTimeout(function () {
        generate(randbtc2 + " BTC mixed in " + randprocent2 + " Minutes")
    }, rand2), setTimeout(function () {
        generate(randbtc3 + " BTC mixed in " + randprocent3 + " Minutes")
    }, rand3), setTimeout(function () {
        generate(randbtc4 + " BTC mixed in " + randprocent4 + " Minutes")
    }, rand4), setTimeout(function () {
        generate(randbtc5 + " BTC mixed in " + randprocent5 + " Minutes")
    }, rand5), setTimeout(function () {
        generate(randbtc6 + " BTC mixed in " + randprocent6 + " Minutes")
    }, rand6), setTimeout(function () {
        generate(randbtc7 + " BTC mixed in " + randprocent7 + " Minutes")
    }, rand7), setTimeout(function () {
        generate(randbtc8 + " BTC mixed in " + randprocent8 + " Minutes")
    }, rand8), setTimeout(function () {
        generate(randbtc9 + " BTC mixed in " + randprocent9 + " Minutes")
    }, rand9), setTimeout(function () {
        generate(randbtc10 + " BTC mixed in " + randprocent10 + " Minutes")
    }, rand10)
}
var rand = Math.round(19500 * Math.random()) + 500,
    randbtc = -4.99 * Math.random() + 5,
    randprocent = -2 * Math.random() + 3;
randbtc = randbtc.toPrecision(3), randprocent = randprocent.toPrecision(3);
var rand2 = Math.round(29500 * Math.random()) + 500,
    randbtc2 = -4.99 * Math.random() + 5,
    randprocent2 = -2 * Math.random() + 3;
randbtc2 = randbtc2.toPrecision(3), randprocent2 = randprocent2.toPrecision(3);
var rand3 = Math.round(39500 * Math.random()) + 500,
    randbtc3 = -4.99 * Math.random() + 5,
    randprocent3 = -2 * Math.random() + 3;
randbtc3 = randbtc3.toPrecision(3), randprocent3 = randprocent3.toPrecision(3);
var rand4 = Math.round(49500 * Math.random()) + 500,
    randbtc4 = -4.99 * Math.random() + 5,
    randprocent4 = -2 * Math.random() + 3;
randbtc4 = randbtc4.toPrecision(3), randprocent4 = randprocent4.toPrecision(3);
var rand5 = Math.round(59500 * Math.random()) + 500,
    randbtc5 = -4.99 * Math.random() + 5,
    randprocent5 = -2 * Math.random() + 3;
randbtc5 = randbtc5.toPrecision(3), randprocent5 = randprocent5.toPrecision(3);
var rand6 = Math.round(69500 * Math.random()) + 500,
    randbtc6 = -4.99 * Math.random() + 5,
    randprocent6 = -2 * Math.random() + 3;
randbtc6 = randbtc6.toPrecision(3), randprocent6 = randprocent6.toPrecision(3);
var rand7 = Math.round(79500 * Math.random()) + 500,
    randbtc7 = -4.99 * Math.random() + 5,
    randprocent7 = -2 * Math.random() + 3;
randbtc7 = randbtc7.toPrecision(3), randprocent7 = randprocent7.toPrecision(3);
var rand8 = Math.round(89500 * Math.random()) + 500,
    randbtc8 = -4.99 * Math.random() + 5,
    randprocent8 = -2 * Math.random() + 3;
randbtc8 = randbtc8.toPrecision(3), randprocent8 = randprocent8.toPrecision(3);
var rand9 = Math.round(99500 * Math.random()) + 500,
    randbtc9 = -4.99 * Math.random() + 5,
    randprocent9 = -2 * Math.random() + 3;
randbtc9 = randbtc9.toPrecision(3), randprocent9 = randprocent9.toPrecision(3);
var rand10 = Math.round(109500 * Math.random()) + 500,
    randbtc10 = -4.99 * Math.random() + 5,
    randprocent10 = -2 * Math.random() + 3;
randbtc10 = randbtc10.toPrecision(3), randprocent10 = randprocent10.toPrecision(3), $(document).ready(function () {
    generateAll()
});

function BigInteger(t, i, r) {
    null != t && ("number" == typeof t ? this.fromNumber(t, i, r) : null == i && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, i))
}

function nbi() {
    return new BigInteger(null)
}

function am1(t, i, r, n, o, e) {
    for (; --e >= 0;) {
        var s = i * this[t++] + r[n] + o;
        o = Math.floor(s / 67108864), r[n++] = 67108863 & s
    }
    return o
}

function am2(t, i, r, n, o, e) {
    for (var s = 32767 & i, h = i >> 15; --e >= 0;) {
        var u = 32767 & this[t],
            p = this[t++] >> 15,
            a = h * u + p * s;
        o = ((u = s * u + ((32767 & a) << 15) + r[n] + (1073741823 & o)) >>> 30) + (a >>> 15) + h * p + (o >>> 30), r[n++] = 1073741823 & u
    }
    return o
}

function am3(t, i, r, n, o, e) {
    for (var s = 16383 & i, h = i >> 14; --e >= 0;) {
        var u = 16383 & this[t],
            p = this[t++] >> 14,
            a = h * u + p * s;
        o = ((u = s * u + ((16383 & a) << 14) + r[n] + o) >> 28) + (a >> 14) + h * p, r[n++] = 268435455 & u
    }
    return o
}

function int2char(t) {
    return BI_RM.charAt(t)
}

function intAt(t, i) {
    var r = BI_RC[t.charCodeAt(i)];
    return null == r ? -1 : r
}

function bnpCopyTo(t) {
    for (var i = this.t - 1; i >= 0; --i) t[i] = this[i];
    t.t = this.t, t.s = this.s
}

function bnpFromInt(t) {
    this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
}

function nbv(t) {
    var i = nbi();
    return i.fromInt(t), i
}

function bnpFromString(t, i) {
    var r;
    if (16 == i) r = 4;
    else if (8 == i) r = 3;
    else if (256 == i) r = 8;
    else if (2 == i) r = 1;
    else if (32 == i) r = 5;
    else {
        if (4 != i) return void this.fromRadix(t, i);
        r = 2
    }
    this.t = 0, this.s = 0;
    for (var n = t.length, o = !1, e = 0; --n >= 0;) {
        var s = 8 == r ? 255 & t[n] : intAt(t, n);
        s < 0 ? "-" == t.charAt(n) && (o = !0) : (o = !1, 0 == e ? this[this.t++] = s : e + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - e) - 1) << e, this[this.t++] = s >> this.DB - e) : this[this.t - 1] |= s << e, (e += r) >= this.DB && (e -= this.DB))
    }
    8 == r && 0 != (128 & t[0]) && (this.s = -1, e > 0 && (this[this.t - 1] |= (1 << this.DB - e) - 1 << e)), this.clamp(), o && BigInteger.ZERO.subTo(this, this)
}

function bnpClamp() {
    for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
}

function bnToString(t) {
    if (this.s < 0) return "-" + this.negate().toString(t);
    var i;
    if (16 == t) i = 4;
    else if (8 == t) i = 3;
    else if (2 == t) i = 1;
    else if (32 == t) i = 5;
    else {
        if (4 != t) return this.toRadix(t);
        i = 2
    }
    var r, n = (1 << i) - 1,
        o = !1,
        e = "",
        s = this.t,
        h = this.DB - s * this.DB % i;
    if (s-- > 0)
        for (h < this.DB && (r = this[s] >> h) > 0 && (o = !0, e = int2char(r)); s >= 0;) h < i ? (r = (this[s] & (1 << h) - 1) << i - h, r |= this[--s] >> (h += this.DB - i)) : (r = this[s] >> (h -= i) & n, h <= 0 && (h += this.DB, --s)), r > 0 && (o = !0), o && (e += int2char(r));
    return o ? e : "0"
}

function bnNegate() {
    var t = nbi();
    return BigInteger.ZERO.subTo(this, t), t
}

function bnAbs() {
    return this.s < 0 ? this.negate() : this
}

function bnCompareTo(t) {
    var i = this.s - t.s;
    if (0 != i) return i;
    var r = this.t;
    if (0 != (i = r - t.t)) return this.s < 0 ? -i : i;
    for (; --r >= 0;)
        if (0 != (i = this[r] - t[r])) return i;
    return 0
}

function nbits(t) {
    var i, r = 1;
    return 0 != (i = t >>> 16) && (t = i, r += 16), 0 != (i = t >> 8) && (t = i, r += 8), 0 != (i = t >> 4) && (t = i, r += 4), 0 != (i = t >> 2) && (t = i, r += 2), 0 != (i = t >> 1) && (t = i, r += 1), r
}

function bnBitLength() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}

function bnpDLShiftTo(t, i) {
    var r;
    for (r = this.t - 1; r >= 0; --r) i[r + t] = this[r];
    for (r = t - 1; r >= 0; --r) i[r] = 0;
    i.t = this.t + t, i.s = this.s
}

function bnpDRShiftTo(t, i) {
    for (var r = t; r < this.t; ++r) i[r - t] = this[r];
    i.t = Math.max(this.t - t, 0), i.s = this.s
}

function bnpLShiftTo(t, i) {
    var r, n = t % this.DB,
        o = this.DB - n,
        e = (1 << o) - 1,
        s = Math.floor(t / this.DB),
        h = this.s << n & this.DM;
    for (r = this.t - 1; r >= 0; --r) i[r + s + 1] = this[r] >> o | h, h = (this[r] & e) << n;
    for (r = s - 1; r >= 0; --r) i[r] = 0;
    i[s] = h, i.t = this.t + s + 1, i.s = this.s, i.clamp()
}

function bnpRShiftTo(t, i) {
    i.s = this.s;
    var r = Math.floor(t / this.DB);
    if (r >= this.t) i.t = 0;
    else {
        var n = t % this.DB,
            o = this.DB - n,
            e = (1 << n) - 1;
        i[0] = this[r] >> n;
        for (var s = r + 1; s < this.t; ++s) i[s - r - 1] |= (this[s] & e) << o, i[s - r] = this[s] >> n;
        n > 0 && (i[this.t - r - 1] |= (this.s & e) << o), i.t = this.t - r, i.clamp()
    }
}

function bnpSubTo(t, i) {
    for (var r = 0, n = 0, o = Math.min(t.t, this.t); r < o;) n += this[r] - t[r], i[r++] = n & this.DM, n >>= this.DB;
    if (t.t < this.t) {
        for (n -= t.s; r < this.t;) n += this[r], i[r++] = n & this.DM, n >>= this.DB;
        n += this.s
    } else {
        for (n += this.s; r < t.t;) n -= t[r], i[r++] = n & this.DM, n >>= this.DB;
        n -= t.s
    }
    i.s = n < 0 ? -1 : 0, n < -1 ? i[r++] = this.DV + n : n > 0 && (i[r++] = n), i.t = r, i.clamp()
}

function bnpMultiplyTo(t, i) {
    var r = this.abs(),
        n = t.abs(),
        o = r.t;
    for (i.t = o + n.t; --o >= 0;) i[o] = 0;
    for (o = 0; o < n.t; ++o) i[o + r.t] = r.am(0, n[o], i, o, 0, r.t);
    i.s = 0, i.clamp(), this.s != t.s && BigInteger.ZERO.subTo(i, i)
}

function bnpSquareTo(t) {
    for (var i = this.abs(), r = t.t = 2 * i.t; --r >= 0;) t[r] = 0;
    for (r = 0; r < i.t - 1; ++r) {
        var n = i.am(r, i[r], t, 2 * r, 0, 1);
        (t[r + i.t] += i.am(r + 1, 2 * i[r], t, 2 * r + 1, n, i.t - r - 1)) >= i.DV && (t[r + i.t] -= i.DV, t[r + i.t + 1] = 1)
    }
    t.t > 0 && (t[t.t - 1] += i.am(r, i[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
}

function bnpDivRemTo(t, i, r) {
    var n = t.abs();
    if (!(n.t <= 0)) {
        var o = this.abs();
        if (o.t < n.t) return null != i && i.fromInt(0), void(null != r && this.copyTo(r));
        null == r && (r = nbi());
        var e = nbi(),
            s = this.s,
            h = t.s,
            u = this.DB - nbits(n[n.t - 1]);
        u > 0 ? (n.lShiftTo(u, e), o.lShiftTo(u, r)) : (n.copyTo(e), o.copyTo(r));
        var p = e.t,
            a = e[p - 1];
        if (0 != a) {
            var f = a * (1 << this.F1) + (p > 1 ? e[p - 2] >> this.F2 : 0),
                g = this.FV / f,
                b = (1 << this.F1) / f,
                l = 1 << this.F2,
                c = r.t,
                m = c - p,
                v = null == i ? nbi() : i;
            for (e.dlShiftTo(m, v), r.compareTo(v) >= 0 && (r[r.t++] = 1, r.subTo(v, r)), BigInteger.ONE.dlShiftTo(p, v), v.subTo(e, e); e.t < p;) e[e.t++] = 0;
            for (; --m >= 0;) {
                var T = r[--c] == a ? this.DM : Math.floor(r[c] * g + (r[c - 1] + l) * b);
                if ((r[c] += e.am(0, T, r, m, 0, p)) < T)
                    for (e.dlShiftTo(m, v), r.subTo(v, r); r[c] < --T;) r.subTo(v, r)
            }
            null != i && (r.drShiftTo(p, i), s != h && BigInteger.ZERO.subTo(i, i)), r.t = p, r.clamp(), u > 0 && r.rShiftTo(u, r), s < 0 && BigInteger.ZERO.subTo(r, r)
        }
    }
}

function bnMod(t) {
    var i = nbi();
    return this.abs().divRemTo(t, null, i), this.s < 0 && i.compareTo(BigInteger.ZERO) > 0 && t.subTo(i, i), i
}

function Classic(t) {
    this.m = t
}

function cConvert(t) {
    return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
}

function cRevert(t) {
    return t
}

function cReduce(t) {
    t.divRemTo(this.m, null, t)
}

function cMulTo(t, i, r) {
    t.multiplyTo(i, r), this.reduce(r)
}

function cSqrTo(t, i) {
    t.squareTo(i), this.reduce(i)
}

function bnpInvDigit() {
    if (this.t < 1) return 0;
    var t = this[0];
    if (0 == (1 & t)) return 0;
    var i = 3 & t;
    return i = i * (2 - (15 & t) * i) & 15, i = i * (2 - (255 & t) * i) & 255, i = i * (2 - ((65535 & t) * i & 65535)) & 65535, i = i * (2 - t * i % this.DV) % this.DV, i > 0 ? this.DV - i : -i
}

function Montgomery(t) {
    this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
}

function montConvert(t) {
    var i = nbi();
    return t.abs().dlShiftTo(this.m.t, i), i.divRemTo(this.m, null, i), t.s < 0 && i.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(i, i), i
}

function montRevert(t) {
    var i = nbi();
    return t.copyTo(i), this.reduce(i), i
}

function montReduce(t) {
    for (; t.t <= this.mt2;) t[t.t++] = 0;
    for (var i = 0; i < this.m.t; ++i) {
        var r = 32767 & t[i],
            n = r * this.mpl + ((r * this.mph + (t[i] >> 15) * this.mpl & this.um) << 15) & t.DM;
        for (t[r = i + this.m.t] += this.m.am(0, n, t, i, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
    }
    t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
}

function montSqrTo(t, i) {
    t.squareTo(i), this.reduce(i)
}

function montMulTo(t, i, r) {
    t.multiplyTo(i, r), this.reduce(r)
}

function bnpIsEven() {
    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
}

function bnpExp(t, i) {
    if (t > 4294967295 || t < 1) return BigInteger.ONE;
    var r = nbi(),
        n = nbi(),
        o = i.convert(this),
        e = nbits(t) - 1;
    for (o.copyTo(r); --e >= 0;)
        if (i.sqrTo(r, n), (t & 1 << e) > 0) i.mulTo(n, o, r);
        else {
            var s = r;
            r = n, n = s
        } return i.revert(r)
}

function bnModPowInt(t, i) {
    var r;
    return r = t < 256 || i.isEven() ? new Classic(i) : new Montgomery(i), this.exp(t, r)
}

function bnClone() {
    var t = nbi();
    return this.copyTo(t), t
}

function bnIntValue() {
    if (this.s < 0) {
        if (1 == this.t) return this[0] - this.DV;
        if (0 == this.t) return -1
    } else {
        if (1 == this.t) return this[0];
        if (0 == this.t) return 0
    }
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
}

function bnByteValue() {
    return 0 == this.t ? this.s : this[0] << 24 >> 24
}

function bnShortValue() {
    return 0 == this.t ? this.s : this[0] << 16 >> 16
}

function bnpChunkSize(t) {
    return Math.floor(Math.LN2 * this.DB / Math.log(t))
}

function bnSigNum() {
    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
}

function bnpToRadix(t) {
    if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
    var i = this.chunkSize(t),
        r = Math.pow(t, i),
        n = nbv(r),
        o = nbi(),
        e = nbi(),
        s = "";
    for (this.divRemTo(n, o, e); o.signum() > 0;) s = (r + e.intValue()).toString(t).substr(1) + s, o.divRemTo(n, o, e);
    return e.intValue().toString(t) + s
}

function bnpFromRadix(t, i) {
    this.fromInt(0), null == i && (i = 10);
    for (var r = this.chunkSize(i), n = Math.pow(i, r), o = !1, e = 0, s = 0, h = 0; h < t.length; ++h) {
        var u = intAt(t, h);
        u < 0 ? "-" == t.charAt(h) && 0 == this.signum() && (o = !0) : (s = i * s + u, ++e >= r && (this.dMultiply(n), this.dAddOffset(s, 0), e = 0, s = 0))
    }
    e > 0 && (this.dMultiply(Math.pow(i, e)), this.dAddOffset(s, 0)), o && BigInteger.ZERO.subTo(this, this)
}

function bnpFromNumber(t, i, r) {
    if ("number" == typeof i)
        if (t < 2) this.fromInt(1);
        else
            for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), op_or, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(BigInteger.ONE.shiftLeft(t - 1), this);
    else {
        var n = new Array,
            o = 7 & t;
        n.length = 1 + (t >> 3), i.nextBytes(n), o > 0 ? n[0] &= (1 << o) - 1 : n[0] = 0, this.fromString(n, 256)
    }
}

function bnToByteArray() {
    var t = this.t,
        i = new Array;
    i[0] = this.s;
    var r, n = this.DB - t * this.DB % 8,
        o = 0;
    if (t-- > 0)
        for (n < this.DB && (r = this[t] >> n) != (this.s & this.DM) >> n && (i[o++] = r | this.s << this.DB - n); t >= 0;) n < 8 ? (r = (this[t] & (1 << n) - 1) << 8 - n, r |= this[--t] >> (n += this.DB - 8)) : (r = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 == o && (128 & this.s) != (128 & r) && ++o, (o > 0 || r != this.s) && (i[o++] = r);
    return i
}

function bnEquals(t) {
    return 0 == this.compareTo(t)
}

function bnMin(t) {
    return this.compareTo(t) < 0 ? this : t
}

function bnMax(t) {
    return this.compareTo(t) > 0 ? this : t
}

function bnpBitwiseTo(t, i, r) {
    var n, o, e = Math.min(t.t, this.t);
    for (n = 0; n < e; ++n) r[n] = i(this[n], t[n]);
    if (t.t < this.t) {
        for (o = t.s & this.DM, n = e; n < this.t; ++n) r[n] = i(this[n], o);
        r.t = this.t
    } else {
        for (o = this.s & this.DM, n = e; n < t.t; ++n) r[n] = i(o, t[n]);
        r.t = t.t
    }
    r.s = i(this.s, t.s), r.clamp()
}

function op_and(t, i) {
    return t & i
}

function bnAnd(t) {
    var i = nbi();
    return this.bitwiseTo(t, op_and, i), i
}

function op_or(t, i) {
    return t | i
}

function bnOr(t) {
    var i = nbi();
    return this.bitwiseTo(t, op_or, i), i
}

function op_xor(t, i) {
    return t ^ i
}

function bnXor(t) {
    var i = nbi();
    return this.bitwiseTo(t, op_xor, i), i
}

function op_andnot(t, i) {
    return t & ~i
}

function bnAndNot(t) {
    var i = nbi();
    return this.bitwiseTo(t, op_andnot, i), i
}

function bnNot() {
    for (var t = nbi(), i = 0; i < this.t; ++i) t[i] = this.DM & ~this[i];
    return t.t = this.t, t.s = ~this.s, t
}

function bnShiftLeft(t) {
    var i = nbi();
    return t < 0 ? this.rShiftTo(-t, i) : this.lShiftTo(t, i), i
}

function bnShiftRight(t) {
    var i = nbi();
    return t < 0 ? this.lShiftTo(-t, i) : this.rShiftTo(t, i), i
}

function lbit(t) {
    if (0 == t) return -1;
    var i = 0;
    return 0 == (65535 & t) && (t >>= 16, i += 16), 0 == (255 & t) && (t >>= 8, i += 8), 0 == (15 & t) && (t >>= 4, i += 4), 0 == (3 & t) && (t >>= 2, i += 2), 0 == (1 & t) && ++i, i
}

function bnGetLowestSetBit() {
    for (var t = 0; t < this.t; ++t)
        if (0 != this[t]) return t * this.DB + lbit(this[t]);
    return this.s < 0 ? this.t * this.DB : -1
}

function cbit(t) {
    for (var i = 0; 0 != t;) t &= t - 1, ++i;
    return i
}

function bnBitCount() {
    for (var t = 0, i = this.s & this.DM, r = 0; r < this.t; ++r) t += cbit(this[r] ^ i);
    return t
}

function bnTestBit(t) {
    var i = Math.floor(t / this.DB);
    return i >= this.t ? 0 != this.s : 0 != (this[i] & 1 << t % this.DB)
}

function bnpChangeBit(t, i) {
    var r = BigInteger.ONE.shiftLeft(t);
    return this.bitwiseTo(r, i, r), r
}

function bnSetBit(t) {
    return this.changeBit(t, op_or)
}

function bnClearBit(t) {
    return this.changeBit(t, op_andnot)
}

function bnFlipBit(t) {
    return this.changeBit(t, op_xor)
}

function bnpAddTo(t, i) {
    for (var r = 0, n = 0, o = Math.min(t.t, this.t); r < o;) n += this[r] + t[r], i[r++] = n & this.DM, n >>= this.DB;
    if (t.t < this.t) {
        for (n += t.s; r < this.t;) n += this[r], i[r++] = n & this.DM, n >>= this.DB;
        n += this.s
    } else {
        for (n += this.s; r < t.t;) n += t[r], i[r++] = n & this.DM, n >>= this.DB;
        n += t.s
    }
    i.s = n < 0 ? -1 : 0, n > 0 ? i[r++] = n : n < -1 && (i[r++] = this.DV + n), i.t = r, i.clamp()
}

function bnAdd(t) {
    var i = nbi();
    return this.addTo(t, i), i
}

function bnSubtract(t) {
    var i = nbi();
    return this.subTo(t, i), i
}

function bnMultiply(t) {
    var i = nbi();
    return this.multiplyTo(t, i), i
}

function bnSquare() {
    var t = nbi();
    return this.squareTo(t), t
}

function bnDivide(t) {
    var i = nbi();
    return this.divRemTo(t, i, null), i
}

function bnRemainder(t) {
    var i = nbi();
    return this.divRemTo(t, null, i), i
}

function bnDivideAndRemainder(t) {
    var i = nbi(),
        r = nbi();
    return this.divRemTo(t, i, r), new Array(i, r)
}

function bnpDMultiply(t) {
    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
}

function bnpDAddOffset(t, i) {
    if (0 != t) {
        for (; this.t <= i;) this[this.t++] = 0;
        for (this[i] += t; this[i] >= this.DV;) this[i] -= this.DV, ++i >= this.t && (this[this.t++] = 0), ++this[i]
    }
}

function NullExp() {}

function nNop(t) {
    return t
}

function nMulTo(t, i, r) {
    t.multiplyTo(i, r)
}

function nSqrTo(t, i) {
    t.squareTo(i)
}

function bnPow(t) {
    return this.exp(t, new NullExp)
}

function bnpMultiplyLowerTo(t, i, r) {
    var n = Math.min(this.t + t.t, i);
    for (r.s = 0, r.t = n; n > 0;) r[--n] = 0;
    var o;
    for (o = r.t - this.t; n < o; ++n) r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
    for (o = Math.min(t.t, i); n < o; ++n) this.am(0, t[n], r, n, 0, i - n);
    r.clamp()
}

function bnpMultiplyUpperTo(t, i, r) {
    --i;
    var n = r.t = this.t + t.t - i;
    for (r.s = 0; --n >= 0;) r[n] = 0;
    for (n = Math.max(i - this.t, 0); n < t.t; ++n) r[this.t + n - i] = this.am(i - n, t[n], r, 0, 0, this.t + n - i);
    r.clamp(), r.drShiftTo(1, r)
}

function Barrett(t) {
    this.r2 = nbi(), this.q3 = nbi(), BigInteger.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
}

function barrettConvert(t) {
    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
    if (t.compareTo(this.m) < 0) return t;
    var i = nbi();
    return t.copyTo(i), this.reduce(i), i
}

function barrettRevert(t) {
    return t
}

function barrettReduce(t) {
    for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
    for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
}

function barrettSqrTo(t, i) {
    t.squareTo(i), this.reduce(i)
}

function barrettMulTo(t, i, r) {
    t.multiplyTo(i, r), this.reduce(r)
}

function bnModPow(t, i) {
    var r, n, o = t.bitLength(),
        e = nbv(1);
    if (o <= 0) return e;
    r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, n = o < 8 ? new Classic(i) : i.isEven() ? new Barrett(i) : new Montgomery(i);
    var s = new Array,
        h = 3,
        u = r - 1,
        p = (1 << r) - 1;
    if (s[1] = n.convert(this), r > 1) {
        var a = nbi();
        for (n.sqrTo(s[1], a); h <= p;) s[h] = nbi(), n.mulTo(a, s[h - 2], s[h]), h += 2
    }
    var f, g, b = t.t - 1,
        l = !0,
        c = nbi();
    for (o = nbits(t[b]) - 1; b >= 0;) {
        for (o >= u ? f = t[b] >> o - u & p : (f = (t[b] & (1 << o + 1) - 1) << u - o, b > 0 && (f |= t[b - 1] >> this.DB + o - u)), h = r; 0 == (1 & f);) f >>= 1, --h;
        if ((o -= h) < 0 && (o += this.DB, --b), l) s[f].copyTo(e), l = !1;
        else {
            for (; h > 1;) n.sqrTo(e, c), n.sqrTo(c, e), h -= 2;
            h > 0 ? n.sqrTo(e, c) : (g = e, e = c, c = g), n.mulTo(c, s[f], e)
        }
        for (; b >= 0 && 0 == (t[b] & 1 << o);) n.sqrTo(e, c), g = e, e = c, c = g, --o < 0 && (o = this.DB - 1, --b)
    }
    return n.revert(e)
}

function bnGCD(t) {
    var i = this.s < 0 ? this.negate() : this.clone(),
        r = t.s < 0 ? t.negate() : t.clone();
    if (i.compareTo(r) < 0) {
        var n = i;
        i = r, r = n
    }
    var o = i.getLowestSetBit(),
        e = r.getLowestSetBit();
    if (e < 0) return i;
    for (o < e && (e = o), e > 0 && (i.rShiftTo(e, i), r.rShiftTo(e, r)); i.signum() > 0;)(o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i), (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r), i.compareTo(r) >= 0 ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r));
    return e > 0 && r.lShiftTo(e, r), r
}

function bnpModInt(t) {
    if (t <= 0) return 0;
    var i = this.DV % t,
        r = this.s < 0 ? t - 1 : 0;
    if (this.t > 0)
        if (0 == i) r = this[0] % t;
        else
            for (var n = this.t - 1; n >= 0; --n) r = (i * r + this[n]) % t;
    return r
}

function bnModInverse(t) {
    var i = t.isEven();
    if (this.isEven() && i || 0 == t.signum()) return BigInteger.ZERO;
    for (var r = t.clone(), n = this.clone(), o = nbv(1), e = nbv(0), s = nbv(0), h = nbv(1); 0 != r.signum();) {
        for (; r.isEven();) r.rShiftTo(1, r), i ? (o.isEven() && e.isEven() || (o.addTo(this, o), e.subTo(t, e)), o.rShiftTo(1, o)) : e.isEven() || e.subTo(t, e), e.rShiftTo(1, e);
        for (; n.isEven();) n.rShiftTo(1, n), i ? (s.isEven() && h.isEven() || (s.addTo(this, s), h.subTo(t, h)), s.rShiftTo(1, s)) : h.isEven() || h.subTo(t, h), h.rShiftTo(1, h);
        r.compareTo(n) >= 0 ? (r.subTo(n, r), i && o.subTo(s, o), e.subTo(h, e)) : (n.subTo(r, n), i && s.subTo(o, s), h.subTo(e, h))
    }
    return 0 != n.compareTo(BigInteger.ONE) ? BigInteger.ZERO : h.compareTo(t) >= 0 ? h.subtract(t) : h.signum() < 0 ? (h.addTo(t, h), h.signum() < 0 ? h.add(t) : h) : h
}

function bnIsProbablePrime(t) {
    var i, r = this.abs();
    if (1 == r.t && r[0] <= lowprimes[lowprimes.length - 1]) {
        for (i = 0; i < lowprimes.length; ++i)
            if (r[0] == lowprimes[i]) return !0;
        return !1
    }
    if (r.isEven()) return !1;
    for (i = 1; i < lowprimes.length;) {
        for (var n = lowprimes[i], o = i + 1; o < lowprimes.length && n < lplim;) n *= lowprimes[o++];
        for (n = r.modInt(n); i < o;)
            if (n % lowprimes[i++] == 0) return !1
    }
    return r.millerRabin(t)
}

function bnpMillerRabin(t) {
    var i = this.subtract(BigInteger.ONE),
        r = i.getLowestSetBit();
    if (r <= 0) return !1;
    var n = i.shiftRight(r);
    (t = t + 1 >> 1) > lowprimes.length && (t = lowprimes.length);
    for (var o = nbi(), e = 0; e < t; ++e) {
        o.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var s = o.modPow(n, this);
        if (0 != s.compareTo(BigInteger.ONE) && 0 != s.compareTo(i)) {
            for (var h = 1; h++ < r && 0 != s.compareTo(i);)
                if (0 == (s = s.modPowInt(2, this)).compareTo(BigInteger.ONE)) return !1;
            if (0 != s.compareTo(i)) return !1
        }
    }
    return !0
}("undefined" == typeof Crypto || !Crypto.util) && function () {
    var t = window.Crypto = {},
        i = t.util = {
            rotl: function (t, i) {
                return t << i | t >>> 32 - i
            },
            rotr: function (t, i) {
                return t << 32 - i | t >>> i
            },
            endian: function (t) {
                if (t.constructor == Number) return 16711935 & i.rotl(t, 8) | 4278255360 & i.rotl(t, 24);
                for (var r = 0; r < t.length; r++) t[r] = i.endian(t[r]);
                return t
            },
            randomBytes: function (t) {
                for (var i = []; t > 0; t--) i.push(Math.floor(256 * Math.random()));
                return i
            },
            bytesToWords: function (t) {
                for (var i = [], r = 0, n = 0; r < t.length; r++, n += 8) i[n >>> 5] |= (255 & t[r]) << 24 - n % 32;
                return i
            },
            wordsToBytes: function (t) {
                for (var i = [], r = 0; r < 32 * t.length; r += 8) i.push(t[r >>> 5] >>> 24 - r % 32 & 255);
                return i
            },
            bytesToHex: function (t) {
                for (var i = [], r = 0; r < t.length; r++) i.push((t[r] >>> 4).toString(16)), i.push((15 & t[r]).toString(16));
                return i.join("")
            },
            hexToBytes: function (t) {
                for (var i = [], r = 0; r < t.length; r += 2) i.push(parseInt(t.substr(r, 2), 16));
                return i
            },
            bytesToBase64: function (t) {
                if ("function" == typeof btoa) return btoa(r.bytesToString(t));
                for (var i = [], n = 0; n < t.length; n += 3)
                    for (var o = t[n] << 16 | t[n + 1] << 8 | t[n + 2], e = 0; e < 4; e++) 8 * n + 6 * e <= 8 * t.length ? i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >>> 6 * (3 - e) & 63)) : i.push("=");
                return i.join("")
            },
            base64ToBytes: function (t) {
                if ("function" == typeof atob) return r.stringToBytes(atob(t));
                for (var t = t.replace(/[^A-Z0-9+\/]/gi, ""), i = [], n = 0, o = 0; n < t.length; o = ++n % 4) 0 != o && i.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(n)) >>> 6 - 2 * o);
                return i
            }
        };
    (t = t.charenc = {}).UTF8 = {
        stringToBytes: function (t) {
            return r.stringToBytes(unescape(encodeURIComponent(t)))
        },
        bytesToString: function (t) {
            return decodeURIComponent(escape(r.bytesToString(t)))
        }
    };
    var r = t.Binary = {
        stringToBytes: function (t) {
            for (var i = [], r = 0; r < t.length; r++) i.push(255 & t.charCodeAt(r));
            return i
        },
        bytesToString: function (t) {
            for (var i = [], r = 0; r < t.length; r++) i.push(String.fromCharCode(t[r]));
            return i.join("")
        }
    }
}(),
function () {
    var t = Crypto,
        i = t.util,
        r = t.charenc,
        n = r.UTF8,
        o = r.Binary,
        e = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        s = t.SHA256 = function (t, r) {
            var n = i.wordsToBytes(s._sha256(t));
            return r && r.asBytes ? n : r && r.asString ? o.bytesToString(n) : i.bytesToHex(n)
        };
    s._sha256 = function (t) {
        t.constructor == String && (t = n.stringToBytes(t));
        var r, o, s, h, u, p, a, f, g, b, l, c = i.bytesToWords(t),
            m = 8 * t.length,
            t = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            v = [];
        for (c[m >> 5] |= 128 << 24 - m % 32, c[15 + (m + 64 >> 9 << 4)] = m, f = 0; f < c.length; f += 16) {
            for (m = t[0], r = t[1], o = t[2], s = t[3], h = t[4], u = t[5], p = t[6], a = t[7], g = 0; g < 64; g++) {
                g < 16 ? v[g] = c[g + f] : (b = v[g - 15], l = v[g - 2], v[g] = ((b << 25 | b >>> 7) ^ (b << 14 | b >>> 18) ^ b >>> 3) + (v[g - 7] >>> 0) + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + (v[g - 16] >>> 0)), l = m & r ^ m & o ^ r & o;
                var T = (m << 30 | m >>> 2) ^ (m << 19 | m >>> 13) ^ (m << 10 | m >>> 22);
                b = (a >>> 0) + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & u ^ ~h & p) + e[g] + (v[g] >>> 0), a = p, p = u, u = h, h = s + b >>> 0, s = o, o = r, r = m, m = b + (l = T + l) >>> 0
            }
            t[0] += m, t[1] += r, t[2] += o, t[3] += s, t[4] += h, t[5] += u, t[6] += p, t[7] += a
        }
        return t
    }, s._blocksize = 16, s._digestsize = 32
}();
var dbits, canary = 0xdeadbeefcafe,
    j_lm = 15715070 == (16777215 & canary);
j_lm && "Microsoft Internet Explorer" == navigator.appName ? (BigInteger.prototype.am = am2, dbits = 30) : j_lm && "Netscape" != navigator.appName ? (BigInteger.prototype.am = am1, dbits = 26) : (BigInteger.prototype.am = am3, dbits = 28), BigInteger.prototype.DB = dbits, BigInteger.prototype.DM = (1 << dbits) - 1, BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP), BigInteger.prototype.F1 = BI_FP - dbits, BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
    BI_RC = new Array,
    rr, vv;
for (rr = "0".charCodeAt(0), vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
for (rr = "a".charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
for (rr = "A".charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
Classic.prototype.convert = cConvert, Classic.prototype.revert = cRevert, Classic.prototype.reduce = cReduce, Classic.prototype.mulTo = cMulTo, Classic.prototype.sqrTo = cSqrTo, Montgomery.prototype.convert = montConvert, Montgomery.prototype.revert = montRevert, Montgomery.prototype.reduce = montReduce, Montgomery.prototype.mulTo = montMulTo, Montgomery.prototype.sqrTo = montSqrTo, BigInteger.prototype.copyTo = bnpCopyTo, BigInteger.prototype.fromInt = bnpFromInt, BigInteger.prototype.fromString = bnpFromString, BigInteger.prototype.clamp = bnpClamp, BigInteger.prototype.dlShiftTo = bnpDLShiftTo, BigInteger.prototype.drShiftTo = bnpDRShiftTo, BigInteger.prototype.lShiftTo = bnpLShiftTo, BigInteger.prototype.rShiftTo = bnpRShiftTo, BigInteger.prototype.subTo = bnpSubTo, BigInteger.prototype.multiplyTo = bnpMultiplyTo, BigInteger.prototype.squareTo = bnpSquareTo, BigInteger.prototype.divRemTo = bnpDivRemTo, BigInteger.prototype.invDigit = bnpInvDigit, BigInteger.prototype.isEven = bnpIsEven, BigInteger.prototype.exp = bnpExp, BigInteger.prototype.toString = bnToString, BigInteger.prototype.negate = bnNegate, BigInteger.prototype.abs = bnAbs, BigInteger.prototype.compareTo = bnCompareTo, BigInteger.prototype.bitLength = bnBitLength, BigInteger.prototype.mod = bnMod, BigInteger.prototype.modPowInt = bnModPowInt, BigInteger.ZERO = nbv(0), BigInteger.ONE = nbv(1), NullExp.prototype.convert = nNop, NullExp.prototype.revert = nNop, NullExp.prototype.mulTo = nMulTo, NullExp.prototype.sqrTo = nSqrTo, Barrett.prototype.convert = barrettConvert, Barrett.prototype.revert = barrettRevert, Barrett.prototype.reduce = barrettReduce, Barrett.prototype.mulTo = barrettMulTo, Barrett.prototype.sqrTo = barrettSqrTo;
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
    lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
BigInteger.prototype.chunkSize = bnpChunkSize, BigInteger.prototype.toRadix = bnpToRadix, BigInteger.prototype.fromRadix = bnpFromRadix, BigInteger.prototype.fromNumber = bnpFromNumber, BigInteger.prototype.bitwiseTo = bnpBitwiseTo, BigInteger.prototype.changeBit = bnpChangeBit, BigInteger.prototype.addTo = bnpAddTo, BigInteger.prototype.dMultiply = bnpDMultiply, BigInteger.prototype.dAddOffset = bnpDAddOffset, BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo, BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo, BigInteger.prototype.modInt = bnpModInt, BigInteger.prototype.millerRabin = bnpMillerRabin, BigInteger.prototype.clone = bnClone, BigInteger.prototype.intValue = bnIntValue, BigInteger.prototype.byteValue = bnByteValue, BigInteger.prototype.shortValue = bnShortValue, BigInteger.prototype.signum = bnSigNum, BigInteger.prototype.toByteArray = bnToByteArray, BigInteger.prototype.equals = bnEquals, BigInteger.prototype.min = bnMin, BigInteger.prototype.max = bnMax, BigInteger.prototype.and = bnAnd, BigInteger.prototype.or = bnOr, BigInteger.prototype.xor = bnXor, BigInteger.prototype.andNot = bnAndNot, BigInteger.prototype.not = bnNot, BigInteger.prototype.shiftLeft = bnShiftLeft, BigInteger.prototype.shiftRight = bnShiftRight, BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit, BigInteger.prototype.bitCount = bnBitCount, BigInteger.prototype.testBit = bnTestBit, BigInteger.prototype.setBit = bnSetBit, BigInteger.prototype.clearBit = bnClearBit, BigInteger.prototype.flipBit = bnFlipBit, BigInteger.prototype.add = bnAdd, BigInteger.prototype.subtract = bnSubtract, BigInteger.prototype.multiply = bnMultiply, BigInteger.prototype.divide = bnDivide, BigInteger.prototype.remainder = bnRemainder, BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder, BigInteger.prototype.modPow = bnModPow, BigInteger.prototype.modInverse = bnModInverse, BigInteger.prototype.pow = bnPow, BigInteger.prototype.gcd = bnGCD, BigInteger.prototype.isProbablePrime = bnIsProbablePrime, BigInteger.prototype.square = bnSquare;

function rotateRight(a, h) {
    return h >>> a | h << 32 - a
}

function choice(a, h, r) {
    return a & h ^ ~a & r
}

function majority(a, h, r) {
    return a & h ^ a & r ^ h & r
}

function sha256_Sigma0(a) {
    return rotateRight(2, a) ^ rotateRight(13, a) ^ rotateRight(22, a)
}

function sha256_Sigma1(a) {
    return rotateRight(6, a) ^ rotateRight(11, a) ^ rotateRight(25, a)
}

function sha256_sigma0(a) {
    return rotateRight(7, a) ^ rotateRight(18, a) ^ a >>> 3
}

function sha256_sigma1(a) {
    return rotateRight(17, a) ^ rotateRight(19, a) ^ a >>> 10
}

function sha256_expand(a, h) {
    return a[15 & h] += sha256_sigma1(a[h + 14 & 15]) + a[h + 9 & 15] + sha256_sigma0(a[h + 1 & 15])
}

function safe_add(a, h) {
    var r = (65535 & a) + (65535 & h);
    return (a >> 16) + (h >> 16) + (r >> 16) << 16 | 65535 & r
}

function sha256_init() {
    ihash = new Array(8), count = new Array(2), buffer = new Array(64), count[0] = count[1] = 0, ihash[0] = 1779033703, ihash[1] = 3144134277, ihash[2] = 1013904242, ihash[3] = 2773480762, ihash[4] = 1359893119, ihash[5] = 2600822924, ihash[6] = 528734635, ihash[7] = 1541459225
}

function sha256_transform() {
    var a, h, r, t, e, i, n, f, s, o, u = new Array(16);
    a = ihash[0], h = ihash[1], r = ihash[2], t = ihash[3], e = ihash[4], i = ihash[5], n = ihash[6], f = ihash[7];
    for (var c = 0; c < 16; c++) u[c] = buffer[3 + (c << 2)] | buffer[2 + (c << 2)] << 8 | buffer[1 + (c << 2)] << 16 | buffer[c << 2] << 24;
    for (var _ = 0; _ < 64; _++) s = f + sha256_Sigma1(e) + choice(e, i, n) + K256[_], s += _ < 16 ? u[_] : sha256_expand(u, _), o = sha256_Sigma0(a) + majority(a, h, r), f = n, n = i, i = e, e = safe_add(t, s), t = r, r = h, h = a, a = safe_add(s, o);
    ihash[0] += a, ihash[1] += h, ihash[2] += r, ihash[3] += t, ihash[4] += e, ihash[5] += i, ihash[6] += n, ihash[7] += f
}

function sha256_update(a, h) {
    var r, t, e = 0;
    t = count[0] >> 3 & 63;
    var i = 63 & h;
    for ((count[0] += h << 3) < h << 3 && count[1]++, count[1] += h >> 29, r = 0; r + 63 < h; r += 64) {
        for (n = t; n < 64; n++) buffer[n] = a.charCodeAt(e++);
        sha256_transform(), t = 0
    }
    for (var n = 0; n < i; n++) buffer[n] = a.charCodeAt(e++)
}

function sha256_final() {
    var a = count[0] >> 3 & 63;
    if (buffer[a++] = 128, a <= 56)
        for (h = a; h < 56; h++) buffer[h] = 0;
    else {
        for (h = a; h < 64; h++) buffer[h] = 0;
        sha256_transform();
        for (var h = 0; h < 56; h++) buffer[h] = 0
    }
    buffer[56] = count[1] >>> 24 & 255, buffer[57] = count[1] >>> 16 & 255, buffer[58] = count[1] >>> 8 & 255, buffer[59] = 255 & count[1], buffer[60] = count[0] >>> 24 & 255, buffer[61] = count[0] >>> 16 & 255, buffer[62] = count[0] >>> 8 & 255, buffer[63] = 255 & count[0], sha256_transform()
}

function sha256_encode_bytes() {
    for (var a = 0, h = new Array(32), r = 0; r < 8; r++) h[a++] = ihash[r] >>> 24 & 255, h[a++] = ihash[r] >>> 16 & 255, h[a++] = ihash[r] >>> 8 & 255, h[a++] = 255 & ihash[r];
    return h
}

function sha256_encode_hex() {
    for (var a = new String, h = 0; h < 8; h++)
        for (var r = 28; r >= 0; r -= 4) a += sha256_hex_digits.charAt(ihash[h] >>> r & 15);
    return a
}

function sha256_digest(a) {
    return sha256_init(), sha256_update(a, a.length), sha256_final(), sha256_encode_hex()
}

function sha256_self_test() {
    return "f7846f55cf23e14eebeab5b4e1550cad5b509e3348fbc4efa3a1413d393cb650" == sha256_digest("message digest")
}
var K256 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
    ihash, count, buffer, sha256_hex_digits = "0123456789abcdef";
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        return setTimeout(function () {
            i || t(o).trigger(t.support.transition.end)
        }, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function (i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function o() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o())
    };
    var o = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.alert");
            n || o.data("bs.alert", n = new i(this)), "string" == typeof e && n[e].call(o)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.4", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function (e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function (t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.4", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse")) && e.transitioning)) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            a = s.data("bs.collapse") ? "toggle" : n.data();
        i.call(s, a)
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(n).each(function () {
            var o = t(this),
                n = i(o),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s)))
        }))
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }
    var o = ".dropdown-backdrop",
        n = '[data-toggle="dropdown"]',
        s = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.4", s.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = i(n),
                a = s.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, s.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var o = t(this);
            if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
                var s = i(o),
                    a = s.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && s.find(n).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = s.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                if (l.length) {
                    var h = l.index(e.target);
                    38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new s(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, s.prototype.toggle).on("keydown.bs.dropdown.data-api", n, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
}(jQuery),
function (t) {
    "use strict";

    function e(e, o) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var o = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var o = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery),
function (t) {
    "use strict";
    var e = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.4", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.getOptions = function (e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function () {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, e.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, e.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function () {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
            var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.options.container ? t(this.options.container) : this.$element.parent(),
                    g = this.getPosition(u);
                r = "bottom" == r && d.bottom + c > g.bottom ? "top" : "top" == r && d.top - c < g.top ? "bottom" : "right" == r && d.right + p > g.width ? "left" : "left" == r && d.left - p < g.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var m = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(m, r);
            var v = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
        }
    }, e.prototype.applyPlacement = function (e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top = e.top + a, e.left = e.left + r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, e.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function (i) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), i && i()
        }
        var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function () {
        return this.getTitle()
    }, e.prototype.getPosition = function (e) {
        var i = (e = e || this.$element)[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = o ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, a, r, s)
    }, e.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.width && (n.left = a.left + a.width - d)
        }
        return n
    }, e.prototype.getTitle = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function () {
        this.enabled = !0
    }, e.prototype.disable = function () {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function (e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function (i) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof i && i;
            (n || !/destroy|hide/.test(i)) && (n || o.data("bs.tooltip", n = new e(this, s)), "string" == typeof i && n[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.4", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function (i) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof i && i;
            (n || !/destroy|hide/.test(i)) && (n || o.data("bs.popover", n = new e(this, s)), "string" == typeof i && n[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery),
function (t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.4", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.4", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(t - o >= n + a) && "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top,
            h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = t(document.body).height();
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery);
! function (t, i) {
    if ("function" == typeof define && define.amd) define(["jquery"], i);
    else if ("object" == typeof module && module.exports) {
        var e;
        try {
            e = require("jquery")
        } catch (t) {
            e = null
        }
        module.exports = i(e)
    } else t.Slider = i(t.jQuery)
}(this, function (t) {
    var i;
    return function (t) {
            "use strict";

            function i() {}
            var e = Array.prototype.slice;
            ! function (t) {
                function s(i) {
                    i.prototype.option || (i.prototype.option = function (i) {
                        t.isPlainObject(i) && (this.options = t.extend(!0, this.options, i))
                    })
                }

                function o(i, s) {
                    t.fn[i] = function (o) {
                        if ("string" == typeof o) {
                            for (var a = e.call(arguments, 1), h = 0, l = this.length; h < l; h++) {
                                var r = this[h],
                                    p = t.data(r, i);
                                if (p)
                                    if (t.isFunction(p[o]) && "_" !== o.charAt(0)) {
                                        var d = p[o].apply(p, a);
                                        if (void 0 !== d && d !== p) return d
                                    } else n("no such method '" + o + "' for " + i + " instance");
                                else n("cannot call methods on " + i + " prior to initialization; attempted to call '" + o + "'")
                            }
                            return this
                        }
                        var c = this.map(function () {
                            var e = t.data(this, i);
                            return e ? (e.option(o), e._init()) : (e = new s(this, o), t.data(this, i, e)), t(this)
                        });
                        return !c || c.length > 1 ? c : c[0]
                    }
                }
                if (t) {
                    var n = "undefined" == typeof console ? i : function (t) {
                        console.error(t)
                    };
                    t.bridget = function (t, i) {
                        s(i), o(t, i)
                    }, t.bridget
                }
            }(t)
        }(t),
        function (t) {
            function e(i, e) {
                this._state = {
                    value: null,
                    enabled: null,
                    offset: null,
                    size: null,
                    percentage: null,
                    inDrag: !1,
                    over: !1
                }, "string" == typeof i ? this.element = document.querySelector(i) : i instanceof HTMLElement && (this.element = i), e = e || {};
                for (var s = Object.keys(this.defaultOptions), n = 0; n < s.length; n++) {
                    var a = s[n],
                        h = e[a];
                    h = null !== (h = void 0 !== h ? h : function (t, i) {
                        var e = "data-slider-" + i.replace(/_/g, "-"),
                            s = t.getAttribute(e);
                        try {
                            return JSON.parse(s)
                        } catch (t) {
                            return s
                        }
                    }(this.element, a)) ? h : this.defaultOptions[a], this.options || (this.options = {}), this.options[a] = h
                }
                "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.tooltip_position = "right";
                var l, r, p, d, c, u = this.element.style.width,
                    m = !1,
                    _ = this.element.parentNode;
                if (this.sliderElem) m = !0;
                else {
                    this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
                    var v = document.createElement("div");
                    if (v.className = "slider-track", r = document.createElement("div"), r.className = "slider-track-low", l = document.createElement("div"), l.className = "slider-selection", p = document.createElement("div"), p.className = "slider-track-high", d = document.createElement("div"), d.className = "slider-handle min-slider-handle", c = document.createElement("div"), c.className = "slider-handle max-slider-handle", v.appendChild(r), v.appendChild(l), v.appendChild(p), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                        for (n = 0; n < this.options.ticks.length; n++) {
                            var f = document.createElement("div");
                            f.className = "slider-tick", this.ticks.push(f), v.appendChild(f)
                        }
                        l.className += " tick-slider-selection"
                    }
                    if (v.appendChild(d), v.appendChild(c), this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
                        for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", n = 0; n < this.options.ticks_labels.length; n++) {
                            var g = document.createElement("div");
                            g.className = "slider-tick-label", g.innerHTML = this.options.ticks_labels[n], this.tickLabels.push(g), this.tickLabelContainer.appendChild(g)
                        }
                    var y = function (t) {
                            var i = document.createElement("div");
                            i.className = "tooltip-arrow";
                            var e = document.createElement("div");
                            e.className = "tooltip-inner", t.appendChild(i), t.appendChild(e)
                        },
                        b = document.createElement("div");
                    b.className = "tooltip tooltip-main", y(b);
                    var k = document.createElement("div");
                    k.className = "tooltip tooltip-min", y(k);
                    var E = document.createElement("div");
                    E.className = "tooltip tooltip-max", y(E), this.sliderElem.appendChild(v), this.sliderElem.appendChild(b), this.sliderElem.appendChild(k), this.sliderElem.appendChild(E), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), _.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"
                }
                if (t && (this.$element = t(this.element), this.$sliderElem = t(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), o[this.options.scale] && (this.options.scale = o[this.options.scale]), !0 === m && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top", "width", "height"].forEach(function (t) {
                        this._removeProperty(this.trackLow, t), this._removeProperty(this.trackSelection, t), this._removeProperty(this.trackHigh, t)
                    }, this), [this.handle1, this.handle2].forEach(function (t) {
                        this._removeProperty(t, "left"), this._removeProperty(t, "top")
                    }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (t) {
                        this._removeProperty(t, "left"), this._removeProperty(t, "top"), this._removeProperty(t, "margin-left"), this._removeProperty(t, "margin-top"), this._removeClass(t, "right"), this._removeClass(t, "top")
                    }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = u, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = r || this.trackLow, this.trackSelection = l || this.trackSelection, this.trackHigh = p || this.trackHigh, "none" === this.options.selection && (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")), this.handle1 = d || this.handle1, this.handle2 = c || this.handle2, !0 === m)
                    for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), n = 0; n < this.ticks.length; n++) this._removeClass(this.ticks[n], "round triangle hide");
                if (-1 !== ["round", "triangle", "custom"].indexOf(this.options.handle))
                    for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), n = 0; n < this.ticks.length; n++) this._addClass(this.ticks[n], this.options.handle);
                this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchCapable && this.sliderElem.addEventListener("touchstart", this.mousedown, !1), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), "hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)), this.options.enabled ? this.enable() : this.disable()
            }
            var s = {
                    formatInvalidInputErrorMsg: function (t) {
                        return "Invalid input value '" + t + "' passed in"
                    },
                    callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
                },
                o = {
                    linear: {
                        toValue: function (t) {
                            var i = t / 100 * (this.options.max - this.options.min);
                            if (this.options.ticks_positions.length > 0) {
                                for (var e, s, o, n = 0, a = 0; a < this.options.ticks_positions.length; a++)
                                    if (t <= this.options.ticks_positions[a]) {
                                        e = a > 0 ? this.options.ticks[a - 1] : 0, o = a > 0 ? this.options.ticks_positions[a - 1] : 0, s = this.options.ticks[a], n = this.options.ticks_positions[a];
                                        break
                                    } a > 0 && (i = e + (t - o) / (n - o) * (s - e))
                            }
                            var h = this.options.min + Math.round(i / this.options.step) * this.options.step;
                            return h < this.options.min ? this.options.min : h > this.options.max ? this.options.max : h
                        },
                        toPercentage: function (t) {
                            if (this.options.max === this.options.min) return 0;
                            if (this.options.ticks_positions.length > 0) {
                                for (var i, e, s, o = 0, n = 0; n < this.options.ticks.length; n++)
                                    if (t <= this.options.ticks[n]) {
                                        i = n > 0 ? this.options.ticks[n - 1] : 0, s = n > 0 ? this.options.ticks_positions[n - 1] : 0, e = this.options.ticks[n], o = this.options.ticks_positions[n];
                                        break
                                    } if (n > 0) return s + (t - i) / (e - i) * (o - s)
                            }
                            return 100 * (t - this.options.min) / (this.options.max - this.options.min)
                        }
                    },
                    logarithmic: {
                        toValue: function (t) {
                            var i = 0 === this.options.min ? 0 : Math.log(this.options.min),
                                e = Math.log(this.options.max),
                                s = Math.exp(i + (e - i) * t / 100);
                            return s = this.options.min + Math.round((s - this.options.min) / this.options.step) * this.options.step, s < this.options.min ? this.options.min : s > this.options.max ? this.options.max : s
                        },
                        toPercentage: function (t) {
                            if (this.options.max === this.options.min) return 0;
                            var i = Math.log(this.options.max),
                                e = 0 === this.options.min ? 0 : Math.log(this.options.min);
                            return 100 * ((0 === t ? 0 : Math.log(t)) - e) / (i - e)
                        }
                    }
                };
            if (i = function (t, i) {
                    return e.call(this, t, i), this
                }, i.prototype = {
                    _init: function () {},
                    constructor: i,
                    defaultOptions: {
                        id: "",
                        min: 0,
                        max: 10,
                        step: 1,
                        precision: 0,
                        orientation: "horizontal",
                        value: 5,
                        range: !1,
                        selection: "before",
                        tooltip: "show",
                        tooltip_split: !1,
                        handle: "round",
                        reversed: !1,
                        enabled: !0,
                        formatter: function (t) {
                            return Array.isArray(t) ? t[0] + " : " + t[1] : t
                        },
                        natural_arrow_keys: !1,
                        ticks: [],
                        ticks_positions: [],
                        ticks_labels: [],
                        ticks_snap_bounds: 0,
                        scale: "linear",
                        focus: !1,
                        tooltip_position: null
                    },
                    getElement: function () {
                        return this.sliderElem
                    },
                    getValue: function () {
                        return this.options.range ? this._state.value : this._state.value[0]
                    },
                    setValue: function (t, i, e) {
                        t || (t = 0);
                        var s = this.getValue();
                        this._state.value = this._validateInputValue(t);
                        var o = this._applyPrecision.bind(this);
                        this.options.range ? (this._state.value[0] = o(this._state.value[0]), this._state.value[1] = o(this._state.value[1]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = o(this._state.value), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
                        var n = this.options.range ? this._state.value : this._state.value[0];
                        return !0 === i && this._trigger("slide", n), s !== n && !0 === e && this._trigger("change", {
                            oldValue: s,
                            newValue: n
                        }), this._setDataVal(n), this
                    },
                    destroy: function () {
                        this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), t && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
                    },
                    disable: function () {
                        return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
                    },
                    enable: function () {
                        return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
                    },
                    toggle: function () {
                        return this._state.enabled ? this.disable() : this.enable(), this
                    },
                    isEnabled: function () {
                        return this._state.enabled
                    },
                    on: function (t, i) {
                        return this._bindNonQueryEventHandler(t, i), this
                    },
                    off: function (i, e) {
                        t ? (this.$element.off(i, e), this.$sliderElem.off(i, e)) : this._unbindNonQueryEventHandler(i, e)
                    },
                    getAttribute: function (t) {
                        return t ? this.options[t] : this.options
                    },
                    setAttribute: function (t, i) {
                        return this.options[t] = i, this
                    },
                    refresh: function () {
                        return this._removeSliderEventHandlers(), e.call(this, this.element, this.options), t && t.data(this.element, "slider", this), this
                    },
                    relayout: function () {
                        return this._layout(), this
                    },
                    _removeSliderEventHandlers: function () {
                        this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.handle2.removeEventListener("focus", this.handle2Keydown, !1), this.handle2.removeEventListener("blur", this.handle2Keydown, !1), this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.mousedown, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1)
                    },
                    _bindNonQueryEventHandler: function (t, i) {
                        void 0 === this.eventToCallbackMap[t] && (this.eventToCallbackMap[t] = []), this.eventToCallbackMap[t].push(i)
                    },
                    _unbindNonQueryEventHandler: function (t, i) {
                        var e = this.eventToCallbackMap[t];
                        if (void 0 !== e)
                            for (var s = 0; s < e.length; s++)
                                if (e[s] === i) {
                                    e.splice(s, 1);
                                    break
                                }
                    },
                    _cleanUpEventCallbacksMap: function () {
                        for (var t = Object.keys(this.eventToCallbackMap), i = 0; i < t.length; i++) {
                            var e = t[i];
                            this.eventToCallbackMap[e] = null
                        }
                    },
                    _showTooltip: function () {
                        !1 === this.options.tooltip_split ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"), this._state.over = !0
                    },
                    _hideTooltip: function () {
                        !1 === this._state.inDrag && !0 !== this.alwaysShowTooltip && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this._state.over = !1
                    },
                    _layout: function () {
                        var t;
                        if (t = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = t[0] + "%", this.handle2.style[this.stylePos] = t[1] + "%", Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                            var i = Math.max.apply(Math, this.options.ticks),
                                e = Math.min.apply(Math, this.options.ticks),
                                s = "vertical" === this.options.orientation ? "height" : "width",
                                o = "vertical" === this.options.orientation ? "marginTop" : "marginLeft",
                                n = this._state.size / (this.options.ticks.length - 1);
                            if (this.tickLabelContainer) {
                                var a = 0;
                                if (0 === this.options.ticks_positions.length) this.tickLabelContainer.style[o] = -n / 2 + "px", a = this.tickLabelContainer.offsetHeight;
                                else
                                    for (h = 0; h < this.tickLabelContainer.childNodes.length; h++) this.tickLabelContainer.childNodes[h].offsetHeight > a && (a = this.tickLabelContainer.childNodes[h].offsetHeight);
                                "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = a + "px")
                            }
                            for (var h = 0; h < this.options.ticks.length; h++) {
                                var l = this.options.ticks_positions[h] || 100 * (this.options.ticks[h] - e) / (i - e);
                                this.ticks[h].style[this.stylePos] = l + "%", this._removeClass(this.ticks[h], "in-selection"), this.options.range ? l >= t[0] && l <= t[1] && this._addClass(this.ticks[h], "in-selection") : "after" === this.options.selection && l >= t[0] ? this._addClass(this.ticks[h], "in-selection") : "before" === this.options.selection && l <= t[0] && this._addClass(this.ticks[h], "in-selection"), this.tickLabels[h] && (this.tickLabels[h].style[s] = n + "px", void 0 !== this.options.ticks_positions[h] && (this.tickLabels[h].style.position = "absolute", this.tickLabels[h].style[this.stylePos] = this.options.ticks_positions[h] + "%", this.tickLabels[h].style[o] = -n / 2 + "px"))
                            }
                        }
                        var r;
                        if (this.options.range) {
                            r = this.options.formatter(this._state.value), this._setText(this.tooltipInner, r), this.tooltip.style[this.stylePos] = (t[1] + t[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                            var p = this.options.formatter(this._state.value[0]);
                            this._setText(this.tooltipInner_min, p);
                            var d = this.options.formatter(this._state.value[1]);
                            this._setText(this.tooltipInner_max, d), this.tooltip_min.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"), this.tooltip_max.style[this.stylePos] = t[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")
                        } else r = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, r), this.tooltip.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                        if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(t[0], t[1]) + "%", this.trackSelection.style.top = Math.min(t[0], t[1]) + "%", this.trackSelection.style.height = Math.abs(t[0] - t[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
                        else {
                            this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(t[0], t[1]) + "%", this.trackSelection.style.left = Math.min(t[0], t[1]) + "%", this.trackSelection.style.width = Math.abs(t[0] - t[1]) + "%", this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
                            var c = this.tooltip_min.getBoundingClientRect(),
                                u = this.tooltip_max.getBoundingClientRect();
                            c.right > u.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top)
                        }
                    },
                    _removeProperty: function (t, i) {
                        t.style.removeProperty ? t.style.removeProperty(i) : t.style.removeAttribute(i)
                    },
                    _mousedown: function (t) {
                        if (!this._state.enabled) return !1;
                        this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
                        var i = this._getPercentage(t);
                        if (this.options.range) {
                            var e = Math.abs(this._state.percentage[0] - i),
                                s = Math.abs(this._state.percentage[1] - i);
                            this._state.dragged = e < s ? 0 : 1
                        } else this._state.dragged = 0;
                        this._state.percentage[this._state.dragged] = i, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
                        var o = this._calculateValue();
                        return this._trigger("slideStart", o), this._setDataVal(o), this.setValue(o, !1, !0), this._pauseEvent(t), this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0
                    },
                    _triggerFocusOnHandle: function (t) {
                        0 === t && this.handle1.focus(), 1 === t && this.handle2.focus()
                    },
                    _keydown: function (t, i) {
                        if (!this._state.enabled) return !1;
                        var e;
                        switch (i.keyCode) {
                            case 37:
                            case 40:
                                e = -1;
                                break;
                            case 39:
                            case 38:
                                e = 1
                        }
                        if (e) {
                            if (this.options.natural_arrow_keys) {
                                var s = "vertical" === this.options.orientation && !this.options.reversed,
                                    o = "horizontal" === this.options.orientation && this.options.reversed;
                                (s || o) && (e = -e)
                            }
                            var n = this._state.value[t] + e * this.options.step;
                            return this.options.range && (n = [t ? this._state.value[0] : n, t ? n : this._state.value[1]]), this._trigger("slideStart", n), this._setDataVal(n), this.setValue(n, !0, !0), this._setDataVal(n), this._trigger("slideStop", n), this._layout(), this._pauseEvent(i), !1
                        }
                    },
                    _pauseEvent: function (t) {
                        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1
                    },
                    _mousemove: function (t) {
                        if (!this._state.enabled) return !1;
                        var i = this._getPercentage(t);
                        this._adjustPercentageForRangeSliders(i), this._state.percentage[this._state.dragged] = i, this._layout();
                        var e = this._calculateValue(!0);
                        return this.setValue(e, !0, !0), !1
                    },
                    _adjustPercentageForRangeSliders: function (t) {
                        if (this.options.range) {
                            var i = this._getNumDigitsAfterDecimalPlace(t);
                            i = i ? i - 1 : 0;
                            var e = this._applyToFixedAndParseFloat(t, i);
                            0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], i) < e ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], i) > e && (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0)
                        }
                    },
                    _mouseup: function () {
                        if (!this._state.enabled) return !1;
                        this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, !1 === this._state.over && this._hideTooltip();
                        var t = this._calculateValue(!0);
                        return this._layout(), this._setDataVal(t), this._trigger("slideStop", t), !1
                    },
                    _calculateValue: function (t) {
                        var i;
                        if (this.options.range ? (i = [this.options.min, this.options.max], 0 !== this._state.percentage[0] && (i[0] = this._toValue(this._state.percentage[0]), i[0] = this._applyPrecision(i[0])), 100 !== this._state.percentage[1] && (i[1] = this._toValue(this._state.percentage[1]), i[1] = this._applyPrecision(i[1]))) : (i = this._toValue(this._state.percentage[0]), i = parseFloat(i), i = this._applyPrecision(i)), t) {
                            for (var e = [i, 1 / 0], s = 0; s < this.options.ticks.length; s++) {
                                var o = Math.abs(this.options.ticks[s] - i);
                                o <= e[1] && (e = [this.options.ticks[s], o])
                            }
                            if (e[1] <= this.options.ticks_snap_bounds) return e[0]
                        }
                        return i
                    },
                    _applyPrecision: function (t) {
                        var i = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                        return this._applyToFixedAndParseFloat(t, i)
                    },
                    _getNumDigitsAfterDecimalPlace: function (t) {
                        var i = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                        return i ? Math.max(0, (i[1] ? i[1].length : 0) - (i[2] ? +i[2] : 0)) : 0
                    },
                    _applyToFixedAndParseFloat: function (t, i) {
                        var e = t.toFixed(i);
                        return parseFloat(e)
                    },
                    _getPercentage: function (t) {
                        !this.touchCapable || "touchstart" !== t.type && "touchmove" !== t.type || (t = t.touches[0]);
                        var i = (t[this.mousePos] - this._state.offset[this.stylePos]) / this._state.size * 100;
                        return i = Math.round(i / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (i = 100 - i), Math.max(0, Math.min(100, i))
                    },
                    _validateInputValue: function (t) {
                        if ("number" == typeof t) return t;
                        if (Array.isArray(t)) return this._validateArray(t), t;
                        throw new Error(s.formatInvalidInputErrorMsg(t))
                    },
                    _validateArray: function (t) {
                        for (var i = 0; i < t.length; i++) {
                            var e = t[i];
                            if ("number" != typeof e) throw new Error(s.formatInvalidInputErrorMsg(e))
                        }
                    },
                    _setDataVal: function (t) {
                        this.element.setAttribute("data-value", t), this.element.setAttribute("value", t), this.element.value = t
                    },
                    _trigger: function (i, e) {
                        e = e || 0 === e ? e : void 0;
                        var s = this.eventToCallbackMap[i];
                        if (s && s.length)
                            for (var o = 0; o < s.length; o++)(0, s[o])(e);
                        t && this._triggerJQueryEvent(i, e)
                    },
                    _triggerJQueryEvent: function (t, i) {
                        var e = {
                            type: t,
                            value: i
                        };
                        this.$element.trigger(e), this.$sliderElem.trigger(e)
                    },
                    _unbindJQueryEventHandlers: function () {
                        this.$element.off(), this.$sliderElem.off()
                    },
                    _setText: function (t, i) {
                        void 0 !== t.innerText ? t.innerText = i : void 0 !== t.textContent && (t.textContent = i)
                    },
                    _removeClass: function (t, i) {
                        for (var e = i.split(" "), s = t.className, o = 0; o < e.length; o++) {
                            var n = e[o],
                                a = new RegExp("(?:\\s|^)" + n + "(?:\\s|$)");
                            s = s.replace(a, " ")
                        }
                        t.className = s.trim()
                    },
                    _addClass: function (t, i) {
                        for (var e = i.split(" "), s = t.className, o = 0; o < e.length; o++) {
                            var n = e[o];
                            new RegExp("(?:\\s|^)" + n + "(?:\\s|$)").test(s) || (s += " " + n)
                        }
                        t.className = s.trim()
                    },
                    _offsetLeft: function (t) {
                        return t.getBoundingClientRect().left
                    },
                    _offsetTop: function (t) {
                        for (var i = t.offsetTop;
                            (t = t.offsetParent) && !isNaN(t.offsetTop);) i += t.offsetTop;
                        return i
                    },
                    _offset: function (t) {
                        return {
                            left: this._offsetLeft(t),
                            top: this._offsetTop(t)
                        }
                    },
                    _css: function (i, e, s) {
                        if (t) t.style(i, e, s);
                        else {
                            var o = e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, i) {
                                return i.toUpperCase()
                            });
                            i.style[o] = s
                        }
                    },
                    _toValue: function (t) {
                        return this.options.scale.toValue.apply(this, [t])
                    },
                    _toPercentage: function (t) {
                        return this.options.scale.toPercentage.apply(this, [t])
                    },
                    _setTooltipPosition: function () {
                        var t = [this.tooltip, this.tooltip_min, this.tooltip_max];
                        if ("vertical" === this.options.orientation) {
                            var i = this.options.tooltip_position || "right",
                                e = "left" === i ? "right" : "left";
                            t.forEach(function (t) {
                                this._addClass(t, i), t.style[e] = "100%"
                            }.bind(this))
                        } else "bottom" === this.options.tooltip_position ? t.forEach(function (t) {
                            this._addClass(t, "bottom"), t.style.top = "22px"
                        }.bind(this)) : t.forEach(function (t) {
                            this._addClass(t, "top"), t.style.top = -this.tooltip.outerHeight - 14 + "px"
                        }.bind(this))
                    }
                }, t) {
                var n = t.fn.slider ? "bootstrapSlider" : "slider";
                t.bridget(n, i)
            }
        }(t), i
});
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

function findPrimes(e) {
    var r, n, t, _;
    for (n = new Array(e), r = 0; r < e; r++) n[r] = 0;
    for (n[0] = 2, t = 0; n[t] < e;) {
        for (r = n[t] * n[t]; r < e; r += n[t]) n[r] = 1;
        for (n[++t] = n[t - 1] + 1; n[t] < e && n[n[t]]; n[t]++);
    }
    for (_ = new Array(t), r = 0; r < t; r++) _[r] = n[r];
    return _
}

function millerRabinInt(e, r) {
    return mr_x1.length != e.length && (mr_x1 = dup(e), mr_r = dup(e), mr_a = dup(e)), copyInt_(mr_a, r), millerRabin(e, mr_a)
}

function millerRabin(e, r) {
    var n, t, _, a;
    for (mr_x1.length != e.length && (mr_x1 = dup(e), mr_r = dup(e), mr_a = dup(e)), copy_(mr_a, r), copy_(mr_r, e), copy_(mr_x1, e), addInt_(mr_r, -1), addInt_(mr_x1, -1), _ = 0, n = 0; n < mr_r.length; n++)
        for (t = 1; t < mask; t <<= 1) e[n] & t ? (a = _ < mr_r.length + bpe ? _ : 0, n = mr_r.length, t = mask) : _++;
    if (a && rightShift_(mr_r, a), powMod_(mr_a, mr_r, e), !equalsInt(mr_a, 1) && !equals(mr_a, mr_x1)) {
        for (t = 1; t <= a - 1 && !equals(mr_a, mr_x1);) {
            if (squareMod_(mr_a, e), equalsInt(mr_a, 1)) return 0;
            t++
        }
        if (!equals(mr_a, mr_x1)) return 0
    }
    return 1
}

function bitSize(e) {
    var r, n, t;
    for (r = e.length - 1; 0 == e[r] && r > 0; r--);
    for (n = 0, t = e[r]; t; t >>= 1, n++);
    return n += bpe * r
}

function expand(e, r) {
    var n = int2bigInt(0, (e.length > r ? e.length : r) * bpe, 0);
    return copy_(n, e), n
}

function randTruePrime(e) {
    var r = int2bigInt(0, e, 0);
    return randTruePrime_(r, e), trim(r, 1)
}

function randProbPrime(e) {
    return e >= 600 ? randProbPrimeRounds(e, 2) : e >= 550 ? randProbPrimeRounds(e, 4) : e >= 500 ? randProbPrimeRounds(e, 5) : e >= 400 ? randProbPrimeRounds(e, 6) : e >= 350 ? randProbPrimeRounds(e, 7) : e >= 300 ? randProbPrimeRounds(e, 9) : e >= 250 ? randProbPrimeRounds(e, 12) : e >= 200 ? randProbPrimeRounds(e, 15) : e >= 150 ? randProbPrimeRounds(e, 18) : e >= 100 ? randProbPrimeRounds(e, 27) : randProbPrimeRounds(e, 40)
}

function randProbPrimeRounds(e, r) {
    var n, t, _;
    for (3e4, n = int2bigInt(0, e, 0), 0 == primes.length && (primes = findPrimes(3e4)), rpprb.length != n.length && (rpprb = dup(n));;) {
        for (randBigInt_(n, e, 0), n[0] |= 1, _ = 0, t = 0; t < primes.length && primes[t] <= 3e4; t++)
            if (0 == modInt(n, primes[t]) && !equalsInt(n, primes[t])) {
                _ = 1;
                break
            } for (t = 0; t < r && !_; t++) {
            for (randBigInt_(rpprb, e, 0); !greater(n, rpprb);) randBigInt_(rpprb, e, 0);
            millerRabin(n, rpprb) || (_ = 1)
        }
        if (!_) return n
    }
}

function mod(e, r) {
    var n = dup(e);
    return mod_(n, r), trim(n, 1)
}

function addInt(e, r) {
    var n = expand(e, e.length + 1);
    return addInt_(n, r), trim(n, 1)
}

function mult(e, r) {
    var n = expand(e, e.length + r.length);
    return mult_(n, r), trim(n, 1)
}

function powMod(e, r, n) {
    var t = expand(e, n.length);
    return powMod_(t, trim(r, 2), trim(n, 2), 0), trim(t, 1)
}

function sub(e, r) {
    var n = expand(e, e.length > r.length ? e.length + 1 : r.length + 1);
    return sub_(n, r), trim(n, 1)
}

function add(e, r) {
    var n = expand(e, e.length > r.length ? e.length + 1 : r.length + 1);
    return add_(n, r), trim(n, 1)
}

function inverseMod(e, r) {
    var n, t = expand(e, r.length);
    return n = inverseMod_(t, r), n ? trim(t, 1) : null
}

function multMod(e, r, n) {
    var t = expand(e, n.length);
    return multMod_(t, r, n), trim(t, 1)
}

function randTruePrime_(e, r) {
    var n, t, _, a, o, s, g, i, f;
    if (0 == primes.length && (primes = findPrimes(3e4)), 0 == pows.length)
        for (pows = new Array(512), _ = 0; _ < 512; _++) pows[_] = Math.pow(2, _ / 511 - 1);
    if (.1, 20, recLimit = 20, s_i2.length != e.length && (s_i2 = dup(e), s_R = dup(e), s_n1 = dup(e), s_r2 = dup(e), s_d = dup(e), s_x1 = dup(e), s_x2 = dup(e), s_b = dup(e), s_n = dup(e), s_i = dup(e), s_rm = dup(e), s_q = dup(e), s_a = dup(e), s_aa = dup(e)), r <= recLimit) {
        for (n = (1 << (r + 2 >> 1)) - 1, copyInt_(e, 0), t = 1; t;)
            for (t = 0, e[0] = 1 | 1 << r - 1 | Math.floor(Math.random() * (1 << r)), _ = 1; _ < primes.length && (primes[_] & n) == primes[_]; _++)
                if (0 == e[0] % primes[_]) {
                    t = 1;
                    break
                } carry_(e)
    } else {
        if (o = .1 * r * r, r > 40)
            for (a = 1; r - r * a <= 20;) a = pows[Math.floor(512 * Math.random())];
        else a = .5;
        for (f = Math.floor(a * r) + 1, randTruePrime_(s_q, f), copyInt_(s_i2, 0), s_i2[Math.floor((r - 2) / bpe)] |= 1 << (r - 2) % bpe, divide_(s_i2, s_q, s_i, s_rm), g = bitSize(s_i);;) {
            for (; randBigInt_(s_R, g, 0), !greater(s_i, s_R););
            for (addInt_(s_R, 1), add_(s_R, s_i), copy_(s_n, s_q), mult_(s_n, s_R), multInt_(s_n, 2), addInt_(s_n, 1), copy_(s_r2, s_R), multInt_(s_r2, 2), s = 0, _ = 0; _ < primes.length && primes[_] < o; _++)
                if (0 == modInt(s_n, primes[_]) && !equalsInt(s_n, primes[_])) {
                    s = 1;
                    break
                } if (s || millerRabinInt(s_n, 2) || (s = 1), !s) {
                for (addInt_(s_n, -3), _ = s_n.length - 1; 0 == s_n[_] && _ > 0; _--);
                for (i = 0, w = s_n[_]; w; w >>= 1, i++);
                for (i += bpe * _; randBigInt_(s_a, i, 0), !greater(s_n, s_a););
                if (addInt_(s_n, 3), addInt_(s_a, 2), copy_(s_b, s_a), copy_(s_n1, s_n), addInt_(s_n1, -1), powMod_(s_b, s_n1, s_n), addInt_(s_b, -1), isZero(s_b) && (copy_(s_b, s_a), powMod_(s_b, s_r2, s_n), addInt_(s_b, -1), copy_(s_aa, s_n), copy_(s_d, s_b), GCD_(s_d, s_n), equalsInt(s_d, 1))) return void copy_(e, s_aa)
            }
        }
    }
}

function randBigInt(e, r) {
    var n, t;
    return n = Math.floor((e - 1) / bpe) + 2, t = int2bigInt(0, 0, n), randBigInt_(t, e, r), t
}

function randBigInt_(e, r, n) {
    var t, _;
    for (t = 0; t < e.length; t++) e[t] = 0;
    for (_ = Math.floor((r - 1) / bpe) + 1, t = 0; t < _; t++) e[t] = Math.floor(Math.random() * (1 << bpe - 1));
    e[_ - 1] &= (2 << (r - 1) % bpe) - 1, 1 == n && (e[_ - 1] |= 1 << (r - 1) % bpe)
}

function GCD(e, r) {
    var n, t;
    return n = dup(e), t = dup(r), GCD_(n, t), n
}

function GCD_(e, r) {
    var n, _, a, o, s, g, i, f, l;
    for (T.length != e.length && (T = dup(e)), l = 1; l;) {
        for (l = 0, n = 1; n < r.length; n++)
            if (r[n]) {
                l = 1;
                break
            } if (!l) break;
        for (n = e.length; !e[n] && n >= 0; n--);
        for (_ = e[n], a = r[n], o = 1, s = 0, g = 0, i = 1; a + g && a + i && (f = Math.floor((_ + o) / (a + g)), qp = Math.floor((_ + s) / (a + i)), f == qp);) t = o - f * g, o = g, g = t, t = s - f * i, s = i, i = t, t = _ - f * a, _ = a, a = t;
        s ? (copy_(T, e), linComb_(e, r, o, s), linComb_(r, T, i, g)) : (mod_(e, r), copy_(T, e), copy_(e, r), copy_(r, T))
    }
    if (0 != r[0])
        for (t = modInt(e, r[0]), copyInt_(e, r[0]), r[0] = t; r[0];) e[0] %= r[0], t = e[0], e[0] = r[0], r[0] = t
}

function inverseMod_(e, r) {
    var n = 1 + 2 * Math.max(e.length, r.length);
    if (!(1 & e[0] || 1 & r[0])) return copyInt_(e, 0), 0;
    for (eg_u.length != n && (eg_u = new Array(n), eg_v = new Array(n), eg_A = new Array(n), eg_B = new Array(n), eg_C = new Array(n), eg_D = new Array(n)), copy_(eg_u, e), copy_(eg_v, r), copyInt_(eg_A, 1), copyInt_(eg_B, 0), copyInt_(eg_C, 0), copyInt_(eg_D, 1);;) {
        for (; !(1 & eg_u[0]);) halve_(eg_u), 1 & eg_A[0] || 1 & eg_B[0] ? (add_(eg_A, r), halve_(eg_A), sub_(eg_B, e), halve_(eg_B)) : (halve_(eg_A), halve_(eg_B));
        for (; !(1 & eg_v[0]);) halve_(eg_v), 1 & eg_C[0] || 1 & eg_D[0] ? (add_(eg_C, r), halve_(eg_C), sub_(eg_D, e), halve_(eg_D)) : (halve_(eg_C), halve_(eg_D));
        if (greater(eg_v, eg_u) ? (sub_(eg_v, eg_u), sub_(eg_C, eg_A), sub_(eg_D, eg_B)) : (sub_(eg_u, eg_v), sub_(eg_A, eg_C), sub_(eg_B, eg_D)), equalsInt(eg_u, 0)) return negative(eg_C) && add_(eg_C, r), copy_(e, eg_C), equalsInt(eg_v, 1) ? 1 : (copyInt_(e, 0), 0)
    }
}

function inverseModInt(e, r) {
    for (var n = 1, t = 0;;) {
        if (1 == e) return n;
        if (0 == e) return 0;
        if (t -= n * Math.floor(r / e), 1 == (r %= e)) return t;
        if (0 == r) return 0;
        n -= t * Math.floor(e / r), e %= r
    }
}

function inverseModInt_(e, r) {
    return inverseModInt(e, r)
}

function eGCD_(e, r, n, t, _) {
    var a = 0,
        o = Math.max(e.length, r.length);
    for (eg_u.length != o && (eg_u = new Array(o), eg_A = new Array(o), eg_B = new Array(o), eg_C = new Array(o), eg_D = new Array(o)); !(1 & e[0] || 1 & r[0]);) halve_(e), halve_(r), a++;
    for (copy_(eg_u, e), copy_(n, r), copyInt_(eg_A, 1), copyInt_(eg_B, 0), copyInt_(eg_C, 0), copyInt_(eg_D, 1);;) {
        for (; !(1 & eg_u[0]);) halve_(eg_u), 1 & eg_A[0] || 1 & eg_B[0] ? (add_(eg_A, r), halve_(eg_A), sub_(eg_B, e), halve_(eg_B)) : (halve_(eg_A), halve_(eg_B));
        for (; !(1 & n[0]);) halve_(n), 1 & eg_C[0] || 1 & eg_D[0] ? (add_(eg_C, r), halve_(eg_C), sub_(eg_D, e), halve_(eg_D)) : (halve_(eg_C), halve_(eg_D));
        if (greater(n, eg_u) ? (sub_(n, eg_u), sub_(eg_C, eg_A), sub_(eg_D, eg_B)) : (sub_(eg_u, n), sub_(eg_A, eg_C), sub_(eg_B, eg_D)), equalsInt(eg_u, 0)) return negative(eg_C) && (add_(eg_C, r), sub_(eg_D, e)), multInt_(eg_D, -1), copy_(t, eg_C), copy_(_, eg_D), void leftShift_(n, a)
    }
}

function negative(e) {
    return e[e.length - 1] >> bpe - 1 & 1
}

function greaterShift(e, r, n) {
    var t, _ = e.length,
        a = r.length;
    for (k = _ + n < a ? _ + n : a, t = a - 1 - n; t < _ && t >= 0; t++)
        if (e[t] > 0) return 1;
    for (t = _ - 1 + n; t < a; t++)
        if (r[t] > 0) return 0;
    for (t = k - 1; t >= n; t--) {
        if (e[t - n] > r[t]) return 1;
        if (e[t - n] < r[t]) return 0
    }
    return 0
}

function greater(e, r) {
    var n, t = e.length < r.length ? e.length : r.length;
    for (n = e.length; n < r.length; n++)
        if (r[n]) return 0;
    for (n = r.length; n < e.length; n++)
        if (e[n]) return 1;
    for (n = t - 1; n >= 0; n--) {
        if (e[n] > r[n]) return 1;
        if (e[n] < r[n]) return 0
    }
    return 0
}

function divide_(e, r, n, t) {
    var _, a, o, s, g, i, f, l;
    for (copy_(t, e), a = r.length; 0 == r[a - 1]; a--);
    for (l = r[a - 1], f = 0; l; f++) l >>= 1;
    for (leftShift_(r, f = bpe - f), leftShift_(t, f), _ = t.length; 0 == t[_ - 1] && _ > a; _--);
    for (copyInt_(n, 0); !greaterShift(r, t, _ - a);) subShift_(t, r, _ - a), n[_ - a]++;
    for (o = _ - 1; o >= a; o--) {
        for (t[o] == r[a - 1] ? n[o - a] = mask : n[o - a] = Math.floor((t[o] * radix + t[o - 1]) / r[a - 1]); g = (a > 1 ? r[a - 2] : 0) * n[o - a], i = g >> bpe, g &= mask, s = i + n[o - a] * r[a - 1], i = s >> bpe, s &= mask, i == t[o] ? s == t[o - 1] ? g > (o > 1 ? t[o - 2] : 0) : s > t[o - 1] : i > t[o];) n[o - a]--;
        linCombShift_(t, r, -n[o - a], o - a), negative(t) && (addShift_(t, r, o - a), n[o - a]--)
    }
    rightShift_(r, f), rightShift_(t, f)
}

function carry_(e) {
    var r, n, t, _;
    for (n = e.length, t = 0, r = 0; r < n; r++) _ = 0, (t += e[r]) < 0 && (t += (_ = -(t >> bpe)) * radix), e[r] = t & mask, t = (t >> bpe) - _
}

function modInt(e, r) {
    var n, t = 0;
    for (n = e.length - 1; n >= 0; n--) t = (t * radix + e[n]) % r;
    return t
}

function int2bigInt(e, r, n) {
    var t;
    return t = Math.ceil(r / bpe) + 1, t = n > t ? n : t, buff = new Array(t), copyInt_(buff, e), buff
}

function str2bigInt(e, r, n) {
    var t, _, a, o, s, g = e.length;
    if (-1 == r) {
        for (a = new Array(0);;) {
            for (o = new Array(a.length + 1), _ = 0; _ < a.length; _++) o[_ + 1] = a[_];
            if (o[0] = parseInt(e, 10), a = o, (t = e.indexOf(",", 0)) < 1) break;
            if (0 == (e = e.substring(t + 1)).length) break
        }
        return a.length < n ? (o = new Array(n), copy_(o, a), o) : a
    }
    for (a = int2bigInt(0, r * g, 0), _ = 0; _ < g && (t = digitsStr.indexOf(e.substring(_, _ + 1), 0), r <= 36 && t >= 36 && (t -= 26), !(t >= r || t < 0)); _++) multInt_(a, r), addInt_(a, t);
    for (g = a.length; g > 0 && !a[g - 1]; g--);
    for (g = n > g + 1 ? n : g + 1, o = new Array(g), s = g < a.length ? g : a.length, _ = 0; _ < s; _++) o[_] = a[_];
    for (; _ < g; _++) o[_] = 0;
    return o
}

function equalsInt(e, r) {
    var n;
    if (e[0] != r) return 0;
    for (n = 1; n < e.length; n++)
        if (e[n]) return 0;
    return 1
}

function equals(e, r) {
    var n, t = e.length < r.length ? e.length : r.length;
    for (n = 0; n < t; n++)
        if (e[n] != r[n]) return 0;
    if (e.length > r.length) {
        for (; n < e.length; n++)
            if (e[n]) return 0
    } else
        for (; n < r.length; n++)
            if (r[n]) return 0;
    return 1
}

function isZero(e) {
    var r;
    for (r = 0; r < e.length; r++)
        if (e[r]) return 0;
    return 1
}

function bigInt2str(e, r) {
    var n, t, _ = "";
    if (s6.length != e.length ? s6 = dup(e) : copy_(s6, e), -1 == r) {
        for (n = e.length - 1; n > 0; n--) _ += e[n] + ",";
        _ += e[0]
    } else
        for (; !isZero(s6);) t = divInt_(s6, r), _ = digitsStr.substring(t, t + 1) + _;
    return 0 == _.length && (_ = "0"), _
}

function dup(e) {
    return buff = new Array(e.length), copy_(buff, e), buff
}

function copy_(e, r) {
    var n, t = e.length < r.length ? e.length : r.length;
    for (n = 0; n < t; n++) e[n] = r[n];
    for (n = t; n < e.length; n++) e[n] = 0
}

function copyInt_(e, r) {
    var n, t;
    for (t = r, n = 0; n < e.length; n++) e[n] = t & mask, t >>= bpe
}

function addInt_(e, r) {
    var n, t, _, a;
    for (e[0] += r, t = e.length, _ = 0, n = 0; n < t; n++)
        if (_ += e[n], a = 0, _ < 0 && (_ += (a = -(_ >> bpe)) * radix), e[n] = _ & mask, !(_ = (_ >> bpe) - a)) return
}

function rightShift_(e, r) {
    var n, t = Math.floor(r / bpe);
    if (t) {
        for (n = 0; n < e.length - t; n++) e[n] = e[n + t];
        for (; n < e.length; n++) e[n] = 0;
        r %= bpe
    }
    for (n = 0; n < e.length - 1; n++) e[n] = mask & (e[n + 1] << bpe - r | e[n] >> r);
    e[n] >>= r
}

function halve_(e) {
    var r;
    for (r = 0; r < e.length - 1; r++) e[r] = mask & (e[r + 1] << bpe - 1 | e[r] >> 1);
    e[r] = e[r] >> 1 | e[r] & radix >> 1
}

function leftShift_(e, r) {
    var n, t = Math.floor(r / bpe);
    if (t) {
        for (n = e.length; n >= t; n--) e[n] = e[n - t];
        for (; n >= 0; n--) e[n] = 0;
        r %= bpe
    }
    if (r) {
        for (n = e.length - 1; n > 0; n--) e[n] = mask & (e[n] << r | e[n - 1] >> bpe - r);
        e[n] = mask & e[n] << r
    }
}

function multInt_(e, r) {
    var n, t, _, a;
    if (r)
        for (t = e.length, _ = 0, n = 0; n < t; n++) a = 0, (_ += e[n] * r) < 0 && (_ += (a = -(_ >> bpe)) * radix), e[n] = _ & mask, _ = (_ >> bpe) - a
}

function divInt_(e, r) {
    var n, t, _ = 0;
    for (n = e.length - 1; n >= 0; n--) t = _ * radix + e[n], e[n] = Math.floor(t / r), _ = t % r;
    return _
}

function linComb_(e, r, n, t) {
    var _, a, o, s;
    for (o = e.length < r.length ? e.length : r.length, s = e.length, a = 0, _ = 0; _ < o; _++) a += n * e[_] + t * r[_], e[_] = a & mask, a >>= bpe;
    for (_ = o; _ < s; _++) a += n * e[_], e[_] = a & mask, a >>= bpe
}

function linCombShift_(e, r, n, t) {
    var _, a, o, s;
    for (o = e.length < t + r.length ? e.length : t + r.length, s = e.length, a = 0, _ = t; _ < o; _++) a += e[_] + n * r[_ - t], e[_] = a & mask, a >>= bpe;
    for (_ = o; a && _ < s; _++) a += e[_], e[_] = a & mask, a >>= bpe
}

function addShift_(e, r, n) {
    var t, _, a, o;
    for (a = e.length < n + r.length ? e.length : n + r.length, o = e.length, _ = 0, t = n; t < a; t++) _ += e[t] + r[t - n], e[t] = _ & mask, _ >>= bpe;
    for (t = a; _ && t < o; t++) _ += e[t], e[t] = _ & mask, _ >>= bpe
}

function subShift_(e, r, n) {
    var t, _, a, o;
    for (a = e.length < n + r.length ? e.length : n + r.length, o = e.length, _ = 0, t = n; t < a; t++) _ += e[t] - r[t - n], e[t] = _ & mask, _ >>= bpe;
    for (t = a; _ && t < o; t++) _ += e[t], e[t] = _ & mask, _ >>= bpe
}

function sub_(e, r) {
    var n, t, _;
    for (_ = e.length < r.length ? e.length : r.length, t = 0, n = 0; n < _; n++) t += e[n] - r[n], e[n] = t & mask, t >>= bpe;
    for (n = _; t && n < e.length; n++) t += e[n], e[n] = t & mask, t >>= bpe
}

function add_(e, r) {
    var n, t, _;
    for (_ = e.length < r.length ? e.length : r.length, t = 0, n = 0; n < _; n++) t += e[n] + r[n], e[n] = t & mask, t >>= bpe;
    for (n = _; t && n < e.length; n++) t += e[n], e[n] = t & mask, t >>= bpe
}

function mult_(e, r) {
    var n;
    for (ss.length != 2 * e.length && (ss = new Array(2 * e.length)), copyInt_(ss, 0), n = 0; n < r.length; n++) r[n] && linCombShift_(ss, e, r[n], n);
    copy_(e, ss)
}

function mod_(e, r) {
    s4.length != e.length ? s4 = dup(e) : copy_(s4, e), s5.length != e.length && (s5 = dup(e)), divide_(s4, r, s5, e)
}

function multMod_(e, r, n) {
    var t;
    for (s0.length != 2 * e.length && (s0 = new Array(2 * e.length)), copyInt_(s0, 0), t = 0; t < r.length; t++) r[t] && linCombShift_(s0, e, r[t], t);
    mod_(s0, n), copy_(e, s0)
}

function squareMod_(e, r) {
    var n, t, _, a, o;
    for (a = e.length; a > 0 && !e[a - 1]; a--);
    for (o = a > r.length ? 2 * a : 2 * r.length, s0.length != o && (s0 = new Array(o)), copyInt_(s0, 0), n = 0; n < a; n++) {
        for (_ = s0[2 * n] + e[n] * e[n], s0[2 * n] = _ & mask, _ >>= bpe, t = n + 1; t < a; t++) _ = s0[n + t] + 2 * e[n] * e[t] + _, s0[n + t] = _ & mask, _ >>= bpe;
        s0[n + a] = _
    }
    mod_(s0, r), copy_(e, s0)
}

function trim(e, r) {
    var n, t;
    for (n = e.length; n > 0 && !e[n - 1]; n--);
    return t = new Array(n + r), copy_(t, e), t
}

function powMod_(e, r, n) {
    var t, _, a, o;
    if (s7.length != n.length && (s7 = dup(n)), 0 != (1 & n[0])) {
        for (copyInt_(s7, 0), a = n.length; a > 0 && !n[a - 1]; a--);
        for (o = radix - inverseModInt(modInt(n, radix), radix), s7[a] = 1, multMod_(e, s7, n), s3.length != e.length ? s3 = dup(e) : copy_(s3, e), t = r.length - 1; t > 0 & !r[t]; t--);
        if (0 != r[t]) {
            for (_ = 1 << bpe - 1; _ && !(r[t] & _); _ >>= 1);
            for (;;) {
                if (!(_ >>= 1)) {
                    if (--t < 0) return void mont_(e, one, n, o);
                    _ = 1 << bpe - 1
                }
                mont_(e, e, n, o), _ & r[t] && mont_(e, s3, n, o)
            }
        } else copyInt_(e, 1)
    } else
        for (copy_(s7, e), copyInt_(e, 1); !equalsInt(r, 0);) 1 & r[0] && multMod_(e, s7, n), divInt_(r, 2), squareMod_(s7, n)
}

function mont_(e, r, n, t) {
    var _, a, o, s, g, i, f = n.length,
        l = r.length;
    for (sa.length != f && (sa = new Array(f)), copyInt_(sa, 0); f > 0 && 0 == n[f - 1]; f--);
    for (; l > 0 && 0 == r[l - 1]; l--);
    for (i = sa.length - 1, _ = 0; _ < f; _++) {
        for (o = (g = sa[0] + e[_] * r[0]) + (s = (g & mask) * t & mask) * n[0] >> bpe, g = e[_], a = 1; a < l - 4;) o += sa[a] + s * n[a] + g * r[a], sa[a - 1] = o & mask, o >>= bpe, a++, o += sa[a] + s * n[a] + g * r[a], sa[a - 1] = o & mask, o >>= bpe, a++, o += sa[a] + s * n[a] + g * r[a], sa[a - 1] = o & mask, o >>= bpe, a++, o += sa[a] + s * n[a] + g * r[a], sa[a - 1] = o & mask, o >>= bpe, a++, o += sa[a] + s * n[a] + g * r[a], sa[a - 1] = o & mask, o >>= bpe, a++;
        for (; a < l;) o += sa[a] + s * n[a] + g * r[a], sa[a - 1] = o & mask, o >>= bpe, a++;
        for (; a < f - 4;) o += sa[a] + s * n[a], sa[a - 1] = o & mask, o >>= bpe, a++, o += sa[a] + s * n[a], sa[a - 1] = o & mask, o >>= bpe, a++, o += sa[a] + s * n[a], sa[a - 1] = o & mask, o >>= bpe, a++, o += sa[a] + s * n[a], sa[a - 1] = o & mask, o >>= bpe, a++, o += sa[a] + s * n[a], sa[a - 1] = o & mask, o >>= bpe, a++;
        for (; a < f;) o += sa[a] + s * n[a], sa[a - 1] = o & mask, o >>= bpe, a++;
        for (; a < i;) o += sa[a], sa[a - 1] = o & mask, o >>= bpe, a++;
        sa[a - 1] = o & mask
    }
    greater(n, sa) || sub_(sa, n), copy_(e, sa)
}
for (bpe = 0, mask = 0, radix = mask + 1, digitsStr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\'\"+-", bpe = 0; 1 << bpe + 1 > 1 << bpe; bpe++);
bpe >>= 1, mask = (1 << bpe) - 1, radix = mask + 1, one = int2bigInt(1, 1, 1), t = new Array(0), ss = t, s0 = t, s1 = t, s2 = t, s3 = t, s4 = t, s5 = t, s6 = t, s7 = t, T = t, sa = t, mr_x1 = t, mr_r = t, mr_a = t, eg_v = t, eg_u = t, eg_A = t, eg_B = t, eg_C = t, eg_D = t, md_q1 = t, md_q2 = t, md_q3 = t, md_r = t, md_r1 = t, md_r2 = t, md_tt = t, primes = t, pows = t, s_i = t, s_i2 = t, s_R = t, s_rm = t, s_q = t, s_n1 = t, s_a = t, s_r2 = t, s_n = t, s_b = t, s_d = t, s_x1 = t, s_x2 = t, s_aa = t, rpprb = t;

function calcReceiveFields(e) {
    var t = $("#sendInput").data("value"),
        a = 0,
        n = null,
        r = 0;
    isFinite(t) ? $("#forwardingAddresses").find(".controls").each(function (s, i) {
        if ((n = $(i).find("input").attr("id")) !== e) {
            r = +$(i).find(".percent").text().replace("%", "").replace("(", "").replace(")", "").trim();
            var l = "",
                o = "";
            "max" == $('input[type="radio"]:checked').val() ? (o = "" + (l = "" + t - .001 + "") * _fixedFee / 100, a = l.substr(0, 9) - o.substr(0, 10), a -= .01) : (o = "" + (l = "" + t - 1e-4 + "") * _fixedFee / 100, a = l.substr(0, 9) - o.substr(0, 10), a -= .001), a < 0 && (a = 0), $(i).find("#receiveInput_1").val(a.toFormatString(_decimals)), $(i).find("#receiveInput_1").data("value", a)
        }
    }) : $("#receiveInput_1").val("").data("value", "")
}

function base58_decode(e) {
    var t, a = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        n = new Array;
    for (t = 0; t < 58; t++) n[a[t]] = int2bigInt(t, 8, 0);
    var r, s = e.length,
        i = int2bigInt(0, 1, 0),
        l = int2bigInt(58, 8, 0);
    for (t = 0; t < s; t++) r = e[s - t - 1], i = add(i, mult(n[r], pow(l, t)));
    var o, d = hex2a(bigInt2str(i, 16));
    for (o = 0; e[o] == a[0]; o++);
    var c = d;
    return o > 0 && (c = repeat("\0", o) + d), c
}

function hex2a(e) {
    for (var t = "", a = 0; a < e.length; a += 2) t += String.fromCharCode(parseInt(e.substr(a, 2), 16));
    return t
}

function a2hexa(e) {
    for (var t, a, n = "0123456789abcdef", r = e.length, s = "", i = 0; i < r; i++) t = e.charCodeAt(i), a = n[Math.floor(t / 16)], s += a += n[t % 16];
    return s
}

function pow(e, t) {
    if (0 == t) return int2bigInt(1, 1, 0);
    var a, n = e;
    for (a = 1; a < t; a++) n = mult(n, e);
    return n
}

function repeat(e, t) {
    for (var a = []; a.length < t;) a.push(e);
    return a.join("")
}
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val())
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus")
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus")
    })
}), $("body").scrollspy({
    target: ".navbar-fixed-top"
}), $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click()
}), $("#ex1").slider({
    formatter: function (e) {
        return "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¼Ð¸Ð½ÑƒÑ‚: " + e + " Ð¼Ð¼Ð¸Ð½ÑƒÑ‚"
    }
}), window.lang = $("#local").text();
var checkUserIdExists = function (e, t) {
    $.ajax({
        url: "//blockexplorer.com/q/checkaddress/" + e,
        dataType: "JSONP",
        success: t
    })
};
$(function () {
    $("body").on("click", ".page-scroll a", function (e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.data("scroll")).offset().top
        }, 1500, "easeInOutExpo"), e.preventDefault()
    }), forwardingAddresses = $("#forwardingAddresses"), _decimals = 7, _fee = 5e-6, _fixedFee = $("#go-percent").text(), $("#sendInput").off("keyup").on("keyup", function () {
        _fee = Math.round(1e4 * parseFloat(0)) / 1e6;
        var e = $(this).val().trim(),
            t = e.split("."),
            a = "";
        if (e && "0." !== e) {
            if (t.length > 2) return t.length = 2, $(this).val(t.join(".")), $(this).data("value", t.join(".")), !1;
            if (t.length && (a = t[t.length - 1], !/^\d*$/.test(a))) return a = a.substring(0, a.length - 1), t[t.length - 1] = a, $(this).val(t.join(".")), $(this).data("value", t.join(".")), !1;
            if (2 === t.length && t[1].length > _decimals) return a = t[t.length - 1], a = a.substring(0, a.length - 1), t[t.length - 1] = a, $(this).val(t.join(".")), $(this).data("value", t.join(".")), !1;
            $(this).data("value", e), calcReceiveFields()
        }
    }), $("#sendInput").off("blur").on("blur", function () {
        var e = $(this).data("value");
        e && (e.length && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1)), isFinite(e) && (e = +e, $("#sendInput").val(e.toFormatString(_decimals)).data("value", e)), calcReceiveFields())
    }), $("#receiveInput_1").off("blur").on("blur", function () {
        var e = $(this).data("value"),
            t = 0;
        if (e && isFinite(e)) {
            if (e.length && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1)), 1 === e.length) {
                if (0 == (e = +e)) return $("#sendInput").val(0).data("value", 0), void $("#receiveInput_1").val(0).data("value", 0)
            } else if (0 == (e = +e)) return $("#sendInput").val(0).data("value", 0), void $("#receiveInput_1").data("value", 0);
            e < 0 && (e = 0, $(this).val(0), $(this).data("value", 0)), $(this).val(e.toFormatString(_decimals)), $(this).data("value", e), +$(this).parent().parent().find(".percent").text().replace("%", "").replace("(", "").replace(")", "").trim();
            var a = "",
                n = "";
            "max" == $('input[type="radio"]:checked').val() ? (n = "" + (a = "" + t - .001 + "") * _fixedFee / 100, t = a.substr(0, 9) - n.substr(0, 10), t -= .01) : (n = "" + (a = "" + t - 1e-4 + "") * _fixedFee / 100, t = a.substr(0, 9) - n.substr(0, 10), t -= .001), t < 0 && (t = 0), 99.999999 === t && (t = 100), $("#sendInput").val(t.toFormatString(_decimals)), calcReceiveFields($(this).attr("id"))
        }
    }), $("#button_bitcoin").click(function () {
        window.end_address = "", window.start_address = "";
        var e = $("#address"),
            t = e.val().replace(/\s{2,}/g, " ");
        "" !== t ? checkUserIdExists(t, function (a) {
            if (a) {
                e.css({
                    color: "rgb(24, 188, 156)"
                }), e.css({
                    backgroundColor: "rgb(24, 188, 156, 0.13)"
                }), $(".btc_one").append('<a target="_blank" href="https://blockchain.info/address/' + t + '" class="address">' + t + "</a>"), start_address = t, $.ajax({
                    url: "/get-bitcoin-address",
                    dataType: "JSON",
                    success: function (e) {
                        console.log(e), end_address = e.address;
                        var t = $('input[type="radio"]:checked').val(),
                            a = $("#ex1").val();
                        $.ajax({
                            url: "/add-mixer/",
                            type: "GET",
                            data: {
                                start_address: start_address,
                                end_address: end_address,
                                check_discount: t,
                                check_time: a,
                                percent: _fixedFee
                            },
                            success: function (e) {
                                $("#add-mix").html(e)
                            }
                        }), $("#addressUse").html(e.address), $(".btc_two").append('<a target="_blank" href="https://blockchain.info/address/' + e.address + '" class="address">' + e.address + "</a>")
                    }
                }), $("#post-5").fadeOut(), setTimeout("$('#forwardingAddresses').fadeIn();", 500);
                var n = "";
                n = "min" == $('input[type="radio"]:checked').val() ? "0.0001" : "0.01", $("#addressUse").html(t), $("#personalDis").html(n)
            } else e.css({
                backgroundColor: "rgba(255, 177, 177, 0.13)"
            })
        }) : e.css({
            backgroundColor: "rgba(255, 177, 177, 0.13)"
        })
    }), $("#sendMessage").click(function () {
        $.ajax({
            url: "/send-message/",
            type: "POST",
            data: {
                _token: $('meta[name="csrf-token"]').attr("content"),
                email: $("#email").val(),
                name: $("#name").val(),
                message: $("#message").val()
            },
            success: function (e) {
                $("#block_con").css({
                    color: "#F7941E",
                    fontSize: "3em",
                    textAlign: "center",
                    margin: "30px"
                }).html("Message sent!")
            }
        })
    })
}), Number.prototype.toFormatString = function (e) {
    return this.toFixed(e).replace(/0*$/, "").replace(/\.$/, "")
};