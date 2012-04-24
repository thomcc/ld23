function c(a) {
  throw a;
}
var i = !0, j = null, m = !1;
function ba() {
  return function(a) {
    return a
  }
}
function n(a) {
  return function() {
    return this[a]
  }
}
function o(a) {
  return function() {
    return a
  }
}
var p, ca = this;
function q(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var d = Object.prototype.toString.call(a);
      if("[object Window]" == d) {
        return"object"
      }
      if("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function r(a) {
  return void 0 !== a
}
function da(a) {
  return"string" == typeof a
}
function ea(a) {
  return"number" == typeof a
}
function fa(a) {
  return a[ha] || (a[ha] = ++ia)
}
var ha = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ia = 0;
var ja = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"}, ma = {"'":"\\'"};
function na(a) {
  var l;
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0), g = b, h = d + 1, k;
    if(!(k = ja[e])) {
      if(!(31 < f && 127 > f)) {
        if(e in ma) {
          e = ma[e]
        }else {
          if(e in ja) {
            l = ma[e] = ja[e], e = l
          }else {
            f = e;
            k = e.charCodeAt(0);
            if(31 < k && 127 > k) {
              f = e
            }else {
              if(256 > k) {
                if(f = "\\x", 16 > k || 256 < k) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > k && (f += "0")
              }
              f += k.toString(16).toUpperCase()
            }
            e = ma[e] = f
          }
        }
      }
      k = e
    }
    g[h] = k
  }
  b.push('"');
  return b.join("")
}
function qa(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function ra(a) {
  for(var b = 0, d = 0;d < a.length;++d) {
    b = 31 * b + a.charCodeAt(d), b %= 4294967296
  }
  return b
}
;var sa, ta, ua, va, wa;
(wa = "ScriptEngine" in ca && "JScript" == ca.ScriptEngine()) && (ca.ScriptEngineMajorVersion(), ca.ScriptEngineMinorVersion(), ca.ScriptEngineBuildVersion());
function ya(a, b) {
  this.ba = wa ? [] : "";
  a != j && this.append.apply(this, arguments)
}
wa ? (ya.prototype.Pa = 0, ya.prototype.append = function(a, b, d) {
  b == j ? this.ba[this.Pa++] = a : (this.ba.push.apply(this.ba, arguments), this.Pa = this.ba.length);
  return this
}) : ya.prototype.append = function(a, b, d) {
  this.ba += a;
  if(b != j) {
    for(var e = 1;e < arguments.length;e++) {
      this.ba += arguments[e]
    }
  }
  return this
};
ya.prototype.clear = function() {
  wa ? this.Pa = this.ba.length = 0 : this.ba = ""
};
ya.prototype.toString = function() {
  if(wa) {
    var a = this.ba.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.ba
};
function za() {
  c(Error("No *print-fn* fn set for evaluation environment"))
}
function s(a) {
  return a != j && a !== m
}
function Aa(a, b) {
  var d = a[q.call(j, b)];
  if(s(d)) {
    return d
  }
  d = a._;
  return s(d) ? d : m
}
function t(a, b) {
  return Error("No protocol method " + a + " defined for type " + q.call(j, b) + ": " + b)
}
function Ba(a) {
  return Array.prototype.slice.call(a)
}
var Ca = function() {
  function a(a, e) {
    return b.call(j, e)
  }
  var b = j, b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return Array(b);
      case 2:
        return a.call(this, 0, e)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.i = function(a) {
    return Array(a)
  };
  b.a = a;
  return b
}();
function Da(a) {
  if(a ? a.P : a) {
    a = a.P(a)
  }else {
    var b;
    var d = Da[q.call(j, a)];
    d ? b = d : (d = Da._) ? b = d : c(t.call(j, "ICounted.-count", a));
    a = b.call(j, a)
  }
  return a
}
function Ea(a, b) {
  var d;
  if(a ? a.O : a) {
    d = a.O(a, b)
  }else {
    var e = Ea[q.call(j, a)];
    e ? d = e : (e = Ea._) ? d = e : c(t.call(j, "ICollection.-conj", a));
    d = d.call(j, a, b)
  }
  return d
}
var u = function() {
  function a(a, b, d) {
    if(a ? a.Ma : a) {
      a = a.Ma(a, b, d)
    }else {
      var h;
      var k = u[q.call(j, a)];
      k ? h = k : (k = u._) ? h = k : c(t.call(j, "IIndexed.-nth", a));
      a = h.call(j, a, b, d)
    }
    return a
  }
  function b(a, b) {
    var d;
    if(a ? a.La : a) {
      d = a.La(a, b)
    }else {
      var h = u[q.call(j, a)];
      h ? d = h : (h = u._) ? d = h : c(t.call(j, "IIndexed.-nth", a));
      d = d.call(j, a, b)
    }
    return d
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}(), Ga = {};
function Ha(a) {
  if(a ? a.pa : a) {
    a = a.pa(a)
  }else {
    var b;
    var d = Ha[q.call(j, a)];
    d ? b = d : (d = Ha._) ? b = d : c(t.call(j, "ISeq.-first", a));
    a = b.call(j, a)
  }
  return a
}
function Ia(a) {
  if(a ? a.qa : a) {
    a = a.qa(a)
  }else {
    var b;
    var d = Ia[q.call(j, a)];
    d ? b = d : (d = Ia._) ? b = d : c(t.call(j, "ISeq.-rest", a));
    a = b.call(j, a)
  }
  return a
}
var y = function() {
  function a(a, b, d) {
    if(a ? a.ka : a) {
      a = a.ka(a, b, d)
    }else {
      var h;
      var k = y[q.call(j, a)];
      k ? h = k : (k = y._) ? h = k : c(t.call(j, "ILookup.-lookup", a));
      a = h.call(j, a, b, d)
    }
    return a
  }
  function b(a, b) {
    var d;
    if(a ? a.ja : a) {
      d = a.ja(a, b)
    }else {
      var h = y[q.call(j, a)];
      h ? d = h : (h = y._) ? d = h : c(t.call(j, "ILookup.-lookup", a));
      d = d.call(j, a, b)
    }
    return d
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}();
function Ja(a, b) {
  var d;
  if(a ? a.Sa : a) {
    d = a.Sa(0, b)
  }else {
    var e = Ja[q.call(j, a)];
    e ? d = e : (e = Ja._) ? d = e : c(t.call(j, "IAssociative.-contains-key?", a));
    d = d.call(j, a, b)
  }
  return d
}
function Ka(a, b, d) {
  if(a ? a.xa : a) {
    a = a.xa(a, b, d)
  }else {
    var e;
    var f = Ka[q.call(j, a)];
    f ? e = f : (f = Ka._) ? e = f : c(t.call(j, "IAssociative.-assoc", a));
    a = e.call(j, a, b, d)
  }
  return a
}
var La = {};
function Ma(a, b) {
  var d;
  if(a ? a.Aa : a) {
    d = a.Aa(a, b)
  }else {
    var e = Ma[q.call(j, a)];
    e ? d = e : (e = Ma._) ? d = e : c(t.call(j, "IMap.-dissoc", a));
    d = d.call(j, a, b)
  }
  return d
}
function Na(a) {
  if(a ? a.Ua : a) {
    a = a.Ua(a)
  }else {
    var b;
    var d = Na[q.call(j, a)];
    d ? b = d : (d = Na._) ? b = d : c(t.call(j, "IMapEntry.-key", a));
    a = b.call(j, a)
  }
  return a
}
function Oa(a) {
  if(a ? a.Va : a) {
    a = a.Va(a)
  }else {
    var b;
    var d = Oa[q.call(j, a)];
    d ? b = d : (d = Oa._) ? b = d : c(t.call(j, "IMapEntry.-val", a));
    a = b.call(j, a)
  }
  return a
}
var Pa = {};
function Qa(a, b) {
  var d;
  if(a ? a.Wa : a) {
    d = a.Wa(0, b)
  }else {
    var e = Qa[q.call(j, a)];
    e ? d = e : (e = Qa._) ? d = e : c(t.call(j, "ISet.-disjoin", a));
    d = d.call(j, a, b)
  }
  return d
}
var Ra = {};
function Sa(a) {
  if(a ? a.$a : a) {
    a = a.state
  }else {
    var b;
    var d = Sa[q.call(j, a)];
    d ? b = d : (d = Sa._) ? b = d : c(t.call(j, "IDeref.-deref", a));
    a = b.call(j, a)
  }
  return a
}
var Ta = {};
function Ua(a) {
  if(a ? a.F : a) {
    a = a.F(a)
  }else {
    var b;
    var d = Ua[q.call(j, a)];
    d ? b = d : (d = Ua._) ? b = d : c(t.call(j, "IMeta.-meta", a));
    a = b.call(j, a)
  }
  return a
}
function Xa(a, b) {
  var d;
  if(a ? a.J : a) {
    d = a.J(a, b)
  }else {
    var e = Xa[q.call(j, a)];
    e ? d = e : (e = Xa._) ? d = e : c(t.call(j, "IWithMeta.-with-meta", a));
    d = d.call(j, a, b)
  }
  return d
}
var Ya = function() {
  function a(a, b, d) {
    if(a ? a.Oa : a) {
      a = a.Oa(a, b, d)
    }else {
      var h;
      var k = Ya[q.call(j, a)];
      k ? h = k : (k = Ya._) ? h = k : c(t.call(j, "IReduce.-reduce", a));
      a = h.call(j, a, b, d)
    }
    return a
  }
  function b(a, b) {
    var d;
    if(a ? a.Na : a) {
      d = a.Na(a, b)
    }else {
      var h = Ya[q.call(j, a)];
      h ? d = h : (h = Ya._) ? d = h : c(t.call(j, "IReduce.-reduce", a));
      d = d.call(j, a, b)
    }
    return d
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}();
function Za(a, b) {
  var d;
  if(a ? a.n : a) {
    d = a.n(a, b)
  }else {
    var e = Za[q.call(j, a)];
    e ? d = e : (e = Za._) ? d = e : c(t.call(j, "IEquiv.-equiv", a));
    d = d.call(j, a, b)
  }
  return d
}
function $a(a) {
  if(a ? a.I : a) {
    a = a.I(a)
  }else {
    var b;
    var d = $a[q.call(j, a)];
    d ? b = d : (d = $a._) ? b = d : c(t.call(j, "IHash.-hash", a));
    a = b.call(j, a)
  }
  return a
}
function ab(a) {
  if(a ? a.H : a) {
    a = a.H(a)
  }else {
    var b;
    var d = ab[q.call(j, a)];
    d ? b = d : (d = ab._) ? b = d : c(t.call(j, "ISeqable.-seq", a));
    a = b.call(j, a)
  }
  return a
}
var bb = {}, cb = {};
function db(a, b) {
  var d;
  if(a ? a.B : a) {
    d = a.B(a, b)
  }else {
    var e = db[q.call(j, a)];
    e ? d = e : (e = db._) ? d = e : c(t.call(j, "IPrintable.-pr-seq", a));
    d = d.call(j, a, b)
  }
  return d
}
function eb(a, b, d) {
  if(a ? a.Za : a) {
    a = a.Za(a, b, d)
  }else {
    var e;
    var f = eb[q.call(j, a)];
    f ? e = f : (f = eb._) ? e = f : c(t.call(j, "IWatchable.-notify-watches", a));
    a = e.call(j, a, b, d)
  }
  return a
}
function fb(a) {
  if(a ? a.Ta : a) {
    a = a.Ta()
  }else {
    var b;
    var d = fb[q.call(j, a)];
    d ? b = d : (d = fb._) ? b = d : c(t.call(j, "IEditableCollection.-as-transient", a));
    a = b.call(j, a)
  }
  return a
}
function lb(a) {
  if(a ? a.Ya : a) {
    a = a.Ya(a)
  }else {
    var b;
    var d = lb[q.call(j, a)];
    d ? b = d : (d = lb._) ? b = d : c(t.call(j, "ITransientCollection.-persistent!", a));
    a = b.call(j, a)
  }
  return a
}
function mb(a, b, d) {
  if(a ? a.Xa : a) {
    a = a.Xa(a, b, d)
  }else {
    var e;
    var f = mb[q.call(j, a)];
    f ? e = f : (f = mb._) ? e = f : c(t.call(j, "ITransientAssociative.-assoc!", a));
    a = e.call(j, a, b, d)
  }
  return a
}
function A(a, b) {
  return a === b
}
var G = function() {
  function a(a, b) {
    var d = a === b;
    return d ? d : Za.call(j, a, b)
  }
  var b = j, d = function() {
    function a(b, e, k) {
      var l = j;
      r(k) && (l = B(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, b, e, l)
    }
    function d(a, e, f) {
      for(;;) {
        if(s(b.call(j, a, e))) {
          if(s(C.call(j, f))) {
            a = e, e = E.call(j, f), f = C.call(j, f)
          }else {
            return b.call(j, e, E.call(j, f))
          }
        }else {
          return m
        }
      }
    }
    a.h = 2;
    a.c = function(a) {
      var b = E(a), e = E(C(a)), a = F(C(a));
      return d.call(this, b, e, a)
    };
    return a
  }(), b = function(b, f, g) {
    switch(arguments.length) {
      case 1:
        return i;
      case 2:
        return a.call(this, b, f);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 2;
  b.c = d.c;
  b.i = o(i);
  b.a = a;
  b.f = d;
  return b
}();
$a["null"] = o(0);
y["null"] = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return j;
      case 3:
        return d
    }
    c("Invalid arity: " + arguments.length)
  }
}();
Ka["null"] = function(a, b, d) {
  return H.call(j, b, d)
};
Ea["null"] = function(a, b) {
  return nb.call(j, b)
};
Ya["null"] = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return b.call(j);
      case 3:
        return d
    }
    c("Invalid arity: " + arguments.length)
  }
}();
cb["null"] = i;
db["null"] = function() {
  return nb.call(j, "nil")
};
Pa["null"] = i;
Qa["null"] = o(j);
Da["null"] = o(0);
Ga["null"] = i;
Ha["null"] = o(j);
Ia["null"] = function() {
  return nb.call(j)
};
Za["null"] = function(a, b) {
  return b === j
};
Xa["null"] = o(j);
Ta["null"] = i;
Ua["null"] = o(j);
u["null"] = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return j;
      case 3:
        return d
    }
    c("Invalid arity: " + arguments.length)
  }
}();
La["null"] = i;
Ma["null"] = o(j);
Date.prototype.n = function(a, b) {
  return a.toString() === b.toString()
};
$a.number = ba();
Za.number = function(a, b) {
  return a === b
};
$a["boolean"] = function(a) {
  return a === i ? 1 : 0
};
$a["function"] = function(a) {
  return fa.call(j, a)
};
function ob(a) {
  return a + 1
}
var pb = function() {
  function a(a, b, d, e) {
    for(;;) {
      if(e < Da.call(j, a)) {
        d = b.call(j, d, u.call(j, a, e)), e += 1
      }else {
        return d
      }
    }
  }
  function b(a, b, d) {
    for(var e = 0;;) {
      if(e < Da.call(j, a)) {
        d = b.call(j, d, u.call(j, a, e)), e += 1
      }else {
        return d
      }
    }
  }
  function d(a, b) {
    if(G.call(j, 0, Da.call(j, a))) {
      return b.call(j)
    }
    for(var d = u.call(j, a, 0), e = 1;;) {
      if(e < Da.call(j, a)) {
        d = b.call(j, d, u.call(j, a, e)), e += 1
      }else {
        return d
      }
    }
  }
  var e = j, e = function(e, g, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return b.call(this, e, g, h);
      case 4:
        return a.call(this, e, g, h, k)
    }
    c("Invalid arity: " + arguments.length)
  };
  e.a = d;
  e.f = b;
  e.sa = a;
  return e
}();
function qb(a, b) {
  this.ga = a;
  this.C = b
}
p = qb.prototype;
p.I = function(a) {
  return rb.call(j, a)
};
p.ra = i;
p.O = function(a, b) {
  return I.call(j, b, a)
};
p.toString = function() {
  return sb.call(j, this)
};
p.Na = function(a, b) {
  return pb.call(j, this.ga, b, this.ga[this.C], this.C + 1)
};
p.Oa = function(a, b, d) {
  return pb.call(j, this.ga, b, d, this.C)
};
p.H = ba();
p.P = function() {
  return this.ga.length - this.C
};
p.ya = i;
p.pa = function() {
  return this.ga[this.C]
};
p.qa = function() {
  return this.C + 1 < this.ga.length ? new qb(this.ga, this.C + 1) : nb.call(j)
};
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.La = function(a, b) {
  var d = b + this.C;
  return d < this.ga.length ? this.ga[d] : j
};
p.Ma = function(a, b, d) {
  a = b + this.C;
  return a < this.ga.length ? this.ga[a] : d
};
function ub(a, b) {
  return G.call(j, 0, a.length) ? j : new qb(a, b)
}
function B(a, b) {
  return ub.call(j, a, b)
}
Ya.array = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return pb.call(j, a, b);
      case 3:
        return pb.call(j, a, b, d)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
y.array = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return a[b];
      case 3:
        return u.call(j, a, b, d)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
u.array = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return b < a.length ? a[b] : j;
      case 3:
        return b < a.length ? a[b] : d
    }
    c("Invalid arity: " + arguments.length)
  }
}();
Da.array = function(a) {
  return a.length
};
ab.array = function(a) {
  return B.call(j, a, 0)
};
function J(a) {
  return s(a) ? ab.call(j, a) : j
}
function E(a) {
  a = J.call(j, a);
  return s(a) ? Ha.call(j, a) : j
}
function F(a) {
  return Ia.call(j, J.call(j, a))
}
function C(a) {
  return s(a) ? J.call(j, F.call(j, a)) : j
}
function vb(a) {
  return E.call(j, C.call(j, a))
}
function wb(a) {
  return C.call(j, C.call(j, a))
}
Da._ = function(a) {
  for(var a = J.call(j, a), b = 0;;) {
    if(s(a)) {
      a = C.call(j, a), b += 1
    }else {
      return b
    }
  }
};
Za._ = function(a, b) {
  return a === b
};
function L(a) {
  return s(a) ? m : i
}
var xb = function() {
  function a(a, b) {
    return Ea.call(j, a, b)
  }
  var b = j, d = function() {
    function a(b, e, k) {
      var l = j;
      r(k) && (l = B(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, b, e, l)
    }
    function d(a, e, f) {
      for(;;) {
        if(s(f)) {
          a = b.call(j, a, e), e = E.call(j, f), f = C.call(j, f)
        }else {
          return b.call(j, a, e)
        }
      }
    }
    a.h = 2;
    a.c = function(a) {
      var b = E(a), e = E(C(a)), a = F(C(a));
      return d.call(this, b, e, a)
    };
    return a
  }(), b = function(b, f, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 2;
  b.c = d.c;
  b.a = a;
  b.f = d;
  return b
}();
function yb(a) {
  return Da.call(j, a)
}
var M = function() {
  function a(a, b, d) {
    return u.call(j, a, Math.floor(b), d)
  }
  function b(a, b) {
    return u.call(j, a, Math.floor(b))
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}(), P = function() {
  function a(a, b, d) {
    return y.call(j, a, b, d)
  }
  function b(a, b) {
    return y.call(j, a, b)
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}(), Q = function() {
  function a(a, b, d) {
    return Ka.call(j, a, b, d)
  }
  var b = j, d = function() {
    function a(b, e, k, l) {
      var v = j;
      r(l) && (v = B(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, b, e, k, v)
    }
    function d(a, e, f, l) {
      for(;;) {
        if(a = b.call(j, a, e, f), s(l)) {
          e = E.call(j, l), f = vb.call(j, l), l = wb.call(j, l)
        }else {
          return a
        }
      }
    }
    a.h = 3;
    a.c = function(a) {
      var b = E(a), e = E(C(a)), l = E(C(C(a))), a = F(C(C(a)));
      return d.call(this, b, e, l, a)
    };
    return a
  }(), b = function(b, f, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, f, g);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 3;
  b.c = d.c;
  b.f = a;
  b.sa = d;
  return b
}(), zb = function() {
  function a(a, b) {
    return Ma.call(j, a, b)
  }
  var b = j, d = function() {
    function a(b, e, k) {
      var l = j;
      r(k) && (l = B(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, b, e, l)
    }
    function d(a, e, f) {
      for(;;) {
        if(a = b.call(j, a, e), s(f)) {
          e = E.call(j, f), f = C.call(j, f)
        }else {
          return a
        }
      }
    }
    a.h = 2;
    a.c = function(a) {
      var b = E(a), e = E(C(a)), a = F(C(a));
      return d.call(this, b, e, a)
    };
    return a
  }(), b = function(b, f, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, f);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 2;
  b.c = d.c;
  b.i = ba();
  b.a = a;
  b.f = d;
  return b
}();
function Ab(a, b) {
  return Xa.call(j, a, b)
}
function Bb(a) {
  var b;
  s(a) ? (b = a.D, b = s(b) ? L.call(j, a.hasOwnProperty("cljs$core$IMeta$")) : b) : b = a;
  b = s(b) ? i : Aa.call(j, Ta, a);
  return s(b) ? Ua.call(j, a) : j
}
var Cb = function() {
  function a(a, b) {
    return Qa.call(j, a, b)
  }
  var b = j, d = function() {
    function a(b, e, k) {
      var l = j;
      r(k) && (l = B(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, b, e, l)
    }
    function d(a, e, f) {
      for(;;) {
        if(a = b.call(j, a, e), s(f)) {
          e = E.call(j, f), f = C.call(j, f)
        }else {
          return a
        }
      }
    }
    a.h = 2;
    a.c = function(a) {
      var b = E(a), e = E(C(a)), a = F(C(a));
      return d.call(this, b, e, a)
    };
    return a
  }(), b = function(b, f, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, f);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 2;
  b.c = d.c;
  b.i = ba();
  b.a = a;
  b.f = d;
  return b
}();
function Db(a) {
  return $a.call(j, a)
}
function Eb(a) {
  return L.call(j, J.call(j, a))
}
function Fb(a) {
  if(a === j) {
    a = m
  }else {
    var b;
    s(a) ? (b = a.ab, b = s(b) ? L.call(j, a.hasOwnProperty("cljs$core$ISet$")) : b) : b = a;
    a = s(b) ? i : Aa.call(j, Pa, a)
  }
  return a
}
function Gb(a) {
  var b;
  s(a) ? (b = a.ra, b = s(b) ? L.call(j, a.hasOwnProperty("cljs$core$ISequential$")) : b) : b = a;
  return s(b) ? i : Aa.call(j, bb, a)
}
function Hb(a) {
  if(a === j) {
    a = m
  }else {
    var b;
    s(a) ? (b = a.Da, b = s(b) ? L.call(j, a.hasOwnProperty("cljs$core$IMap$")) : b) : b = a;
    a = s(b) ? i : Aa.call(j, La, a)
  }
  return a
}
function Ib(a) {
  var b;
  s(a) ? (b = a.bb, b = s(b) ? L.call(j, a.hasOwnProperty("cljs$core$IVector$")) : b) : b = a;
  return s(b) ? i : Aa.call(j, Ra, a)
}
function Kb() {
  return{}
}
var Lb = Kb.call(j);
function R(a) {
  if(a === j) {
    a = m
  }else {
    var b;
    s(a) ? (b = a.ya, b = s(b) ? L.call(j, a.hasOwnProperty("cljs$core$ISeq$")) : b) : b = a;
    a = s(b) ? i : Aa.call(j, Ga, a)
  }
  return a
}
function Mb(a) {
  return s(a) ? i : m
}
function Nb(a) {
  var b = da.call(j, a);
  return s(b) ? L.call(j, function() {
    var b = G.call(j, a.charAt(0), "\ufdd0");
    return b ? b : G.call(j, a.charAt(0), "\ufdd1")
  }()) : b
}
function Ob(a) {
  var b = da.call(j, a);
  return s(b) ? G.call(j, a.charAt(0), "\ufdd0") : b
}
function Pb(a) {
  var b = da.call(j, a);
  return s(b) ? G.call(j, a.charAt(0), "\ufdd1") : b
}
function Qb(a) {
  return ea.call(j, a)
}
function Rb(a) {
  var b = Qb.call(j, a);
  return b ? a == a.toFixed() : b
}
function Sb(a, b) {
  return y.call(j, a, b, Lb) === Lb ? m : i
}
var Tb = function() {
  function a(a, b, d) {
    return Ya.call(j, d, a, b)
  }
  function b(a, b) {
    return Ya.call(j, b, a)
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}(), Ub = function() {
  function a(a, b, d) {
    for(d = J.call(j, d);;) {
      if(s(d)) {
        b = a.call(j, b, E.call(j, d)), d = C.call(j, d)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var d = J.call(j, b);
    return s(d) ? Tb.call(j, a, E.call(j, d), C.call(j, d)) : a.call(j)
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}();
Ya._ = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return Ub.call(j, b, a);
      case 3:
        return Ub.call(j, b, d, a)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
var Vb = function() {
  var a = j, b = function() {
    function b(d, f, g) {
      var h = j;
      r(g) && (h = B(Array.prototype.slice.call(arguments, 2), 0));
      return Tb.call(j, a, d + f, h)
    }
    b.h = 2;
    b.c = function(b) {
      var d = E(b), g = E(C(b)), b = F(C(b));
      return Tb.call(j, a, d + g, b)
    };
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + e;
      default:
        return b.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  a.h = 2;
  a.c = b.c;
  a.Ea = o(0);
  a.i = ba();
  a.a = function(a, b) {
    return a + b
  };
  a.f = b;
  return a
}(), Wb = function() {
  var a = j, b = function() {
    function a(d, g, h) {
      var k = j;
      r(h) && (k = B(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, d, g, k)
    }
    function b(a, d, e) {
      for(;;) {
        if(a < d) {
          if(s(C.call(j, e))) {
            a = d, d = E.call(j, e), e = C.call(j, e)
          }else {
            return d < E.call(j, e)
          }
        }else {
          return m
        }
      }
    }
    a.h = 2;
    a.c = function(a) {
      var d = E(a), h = E(C(a)), a = F(C(a));
      return b.call(this, d, h, a)
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return i;
      case 2:
        return a < e;
      default:
        return b.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  a.h = 2;
  a.c = b.c;
  a.i = o(i);
  a.a = function(a, b) {
    return a < b
  };
  a.f = b;
  return a
}(), Xb = function() {
  var a = j, b = function() {
    function a(d, g, h) {
      var k = j;
      r(h) && (k = B(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, d, g, k)
    }
    function b(a, d, e) {
      for(;;) {
        if(a > d) {
          if(s(C.call(j, e))) {
            a = d, d = E.call(j, e), e = C.call(j, e)
          }else {
            return d > E.call(j, e)
          }
        }else {
          return m
        }
      }
    }
    a.h = 2;
    a.c = function(a) {
      var d = E(a), h = E(C(a)), a = F(C(a));
      return b.call(this, d, h, a)
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return i;
      case 2:
        return a > e;
      default:
        return b.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  a.h = 2;
  a.c = b.c;
  a.i = o(i);
  a.a = function(a, b) {
    return a > b
  };
  a.f = b;
  return a
}();
function Yb(a) {
  return a - 1
}
function Zb(a) {
  return 0 <= a ? Math.floor.call(j, a) : Math.ceil.call(j, a)
}
function $b(a, b) {
  return Zb.call(j, (a - a % b) / b)
}
var ac = function() {
  function a(a) {
    return a * d.call(j)
  }
  function b() {
    return Math.random.call(j)
  }
  var d = j, d = function(d) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, d)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.Ea = b;
  d.i = a;
  return d
}();
function cc(a) {
  return Zb.call(j, ac.call(j, a))
}
function dc(a) {
  for(var b = 0;;) {
    if(0 === a) {
      return b
    }
    a &= a - 1;
    b += 1
  }
}
function ec(a, b) {
  for(var d = b, e = J.call(j, a);;) {
    var f = e;
    if(s(s(f) ? 0 < d : f)) {
      d -= 1, e = C.call(j, e)
    }else {
      return e
    }
  }
}
u._ = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        var e;
        var f = ec.call(j, a, b);
        s(f) ? e = E.call(j, f) : c(Error("Index out of bounds"));
        return e;
      case 3:
        return e = ec.call(j, a, b), s(e) ? E.call(j, e) : d
    }
    c("Invalid arity: " + arguments.length)
  }
}();
var fc = function() {
  function a(a) {
    return a === j ? "" : a.toString()
  }
  var b = j, d = function() {
    function a(b, e) {
      var k = j;
      r(e) && (k = B(Array.prototype.slice.call(arguments, 1), 0));
      return d.call(this, b, k)
    }
    function d(a, e) {
      return function(a, d) {
        for(;;) {
          if(s(d)) {
            var e = a.append(b.call(j, E.call(j, d))), f = C.call(j, d), a = e, d = f
          }else {
            return b.call(j, a)
          }
        }
      }.call(j, new ya(b.call(j, a)), e)
    }
    a.h = 1;
    a.c = function(a) {
      var b = E(a), a = F(a);
      return d.call(this, b, a)
    };
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 1;
  b.c = d.c;
  b.Ea = o("");
  b.i = a;
  b.a = d;
  return b
}(), S = function() {
  function a(a) {
    return Pb.call(j, a) ? a.substring(2, a.length) : Ob.call(j, a) ? fc.call(j, ":", a.substring(2, a.length)) : a === j ? "" : a.toString()
  }
  var b = j, d = function() {
    function a(b, e) {
      var k = j;
      r(e) && (k = B(Array.prototype.slice.call(arguments, 1), 0));
      return d.call(this, b, k)
    }
    function d(a, e) {
      return function(a, d) {
        for(;;) {
          if(s(d)) {
            var e = a.append(b.call(j, E.call(j, d))), f = C.call(j, d), a = e, d = f
          }else {
            return fc.call(j, a)
          }
        }
      }.call(j, new ya(b.call(j, a)), e)
    }
    a.h = 1;
    a.c = function(a) {
      var b = E(a), a = F(a);
      return d.call(this, b, a)
    };
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 1;
  b.c = d.c;
  b.Ea = o("");
  b.i = a;
  b.a = d;
  return b
}(), gc = function() {
  var a = j, a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return a.substring(d);
      case 3:
        return a.substring(d, e)
    }
    c("Invalid arity: " + arguments.length)
  };
  a.a = function(a, d) {
    return a.substring(d)
  };
  a.f = function(a, d, e) {
    return a.substring(d, e)
  };
  return a
}(), hc = function() {
  function a(a, b) {
    return d.call(j, fc.call(j, a, "/", b))
  }
  function b(a) {
    return Ob.call(j, a) ? a : Pb.call(j, a) ? fc.call(j, "\ufdd0", "'", gc.call(j, a, 2)) : fc.call(j, "\ufdd0", "'", a)
  }
  var d = j, d = function(d, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, f)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.i = b;
  d.a = a;
  return d
}();
function tb(a, b) {
  return Mb.call(j, Gb.call(j, b) ? function() {
    for(var d = J.call(j, a), e = J.call(j, b);;) {
      if(d === j) {
        return e === j
      }
      if(e !== j && G.call(j, E.call(j, d), E.call(j, e))) {
        d = C.call(j, d), e = C.call(j, e)
      }else {
        return m
      }
    }
  }() : j)
}
function ic(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function rb(a) {
  return Tb.call(j, function(a, d) {
    return ic.call(j, a, Db.call(j, d))
  }, Db.call(j, E.call(j, a)), C.call(j, a))
}
function jc(a) {
  for(var b = 0, a = J.call(j, a);;) {
    if(s(a)) {
      var d = E.call(j, a), b = (b + (Db.call(j, kc.call(j, d)) ^ Db.call(j, lc.call(j, d)))) % 4503599627370496, a = C.call(j, a)
    }else {
      return b
    }
  }
}
function mc(a, b, d, e) {
  this.k = a;
  this.Ha = b;
  this.Fa = d;
  this.la = e
}
p = mc.prototype;
p.I = function(a) {
  return rb.call(j, a)
};
p.ra = i;
p.O = function(a, b) {
  return new mc(this.k, b, a, this.la + 1)
};
p.toString = function() {
  return sb.call(j, this)
};
p.H = ba();
p.P = n("la");
p.ya = i;
p.pa = n("Ha");
p.qa = n("Fa");
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.J = function(a, b) {
  return new mc(b, this.Ha, this.Fa, this.la)
};
p.D = i;
p.F = n("k");
function nc(a) {
  this.k = a
}
p = nc.prototype;
p.I = function(a) {
  return rb.call(j, a)
};
p.ra = i;
p.O = function(a, b) {
  return new mc(this.k, b, j, 1)
};
p.toString = function() {
  return sb.call(j, this)
};
p.H = o(j);
p.P = o(0);
p.ya = i;
p.pa = o(j);
p.qa = o(j);
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.J = function(a, b) {
  return new nc(b)
};
p.D = i;
p.F = n("k");
var oc = new nc(j);
function pc(a) {
  return Tb.call(j, xb, oc, a)
}
var nb = function() {
  function a(a) {
    var d = j;
    r(a) && (d = B(Array.prototype.slice.call(arguments, 0), 0));
    return Tb.call(j, xb, oc, pc.call(j, d))
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return Tb.call(j, xb, oc, pc.call(j, a))
  };
  return a
}();
function qc(a, b, d) {
  this.k = a;
  this.Ha = b;
  this.Fa = d
}
p = qc.prototype;
p.I = function(a) {
  return rb.call(j, a)
};
p.ra = i;
p.O = function(a, b) {
  return new qc(j, b, a)
};
p.toString = function() {
  return sb.call(j, this)
};
p.H = ba();
p.ya = i;
p.pa = n("Ha");
p.qa = function() {
  return this.Fa === j ? oc : this.Fa
};
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.J = function(a, b) {
  return new qc(b, this.Ha, this.Fa)
};
p.D = i;
p.F = n("k");
function I(a, b) {
  return new qc(j, a, b)
}
Ya.string = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return pb.call(j, a, b);
      case 3:
        return pb.call(j, a, b, d)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
y.string = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return u.call(j, a, b);
      case 3:
        return u.call(j, a, b, d)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
u.string = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return b < Da.call(j, a) ? a.charAt(b) : j;
      case 3:
        return b < Da.call(j, a) ? a.charAt(b) : d
    }
    c("Invalid arity: " + arguments.length)
  }
}();
Da.string = function(a) {
  return a.length
};
ab.string = function(a) {
  return ub.call(j, a, 0)
};
$a.string = function(a) {
  return ra.call(j, a)
};
String.prototype.call = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return P.call(j, b, this.toString());
      case 3:
        return P.call(j, b, this.toString(), d)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, b) {
  return 2 > yb.call(j, b) ? P.call(j, b[0], a) : P.call(j, b[0], a, b[1])
};
function rc(a) {
  var b = a.x;
  if(s(a.Ra)) {
    return b
  }
  a.x = b.call(j);
  a.Ra = i;
  return a.x
}
function T(a, b, d) {
  this.k = a;
  this.Ra = b;
  this.x = d
}
p = T.prototype;
p.I = function(a) {
  return rb.call(j, a)
};
p.ra = i;
p.O = function(a, b) {
  return I.call(j, b, a)
};
p.toString = function() {
  return sb.call(j, this)
};
p.H = function(a) {
  return J.call(j, rc.call(j, a))
};
p.ya = i;
p.pa = function(a) {
  return E.call(j, rc.call(j, a))
};
p.qa = function(a) {
  return F.call(j, rc.call(j, a))
};
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.J = function(a, b) {
  return new T(b, this.Ra, this.x)
};
p.D = i;
p.F = n("k");
function sc(a) {
  for(var b = [];;) {
    if(s(J.call(j, a))) {
      b.push(E.call(j, a)), a = C.call(j, a)
    }else {
      return b
    }
  }
}
function tc(a, b) {
  for(var d = a, e = b, f = 0;;) {
    var g;
    g = (g = 0 < e) ? J.call(j, d) : g;
    if(s(g)) {
      d = C.call(j, d), e -= 1, f += 1
    }else {
      return f
    }
  }
}
var vc = function uc(b) {
  return b === j ? j : C.call(j, b) === j ? J.call(j, E.call(j, b)) : I.call(j, E.call(j, b), uc.call(j, C.call(j, b)))
}, wc = function() {
  function a(a, b) {
    return new T(j, m, function() {
      var d = J.call(j, a);
      return s(d) ? I.call(j, E.call(j, d), e.call(j, F.call(j, d), b)) : b
    })
  }
  function b(a) {
    return new T(j, m, function() {
      return a
    })
  }
  function d() {
    return new T(j, m, o(j))
  }
  var e = j, f = function() {
    function a(d, e, f) {
      var g = j;
      r(f) && (g = B(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, d, e, g)
    }
    function b(a, d, f) {
      return function z(a, b) {
        return new T(j, m, function() {
          var d = J.call(j, a);
          return s(d) ? I.call(j, E.call(j, d), z.call(j, F.call(j, d), b)) : s(b) ? z.call(j, E.call(j, b), C.call(j, b)) : j
        })
      }.call(j, e.call(j, a, d), f)
    }
    a.h = 2;
    a.c = function(a) {
      var d = E(a), e = E(C(a)), a = F(C(a));
      return b.call(this, d, e, a)
    };
    return a
  }(), e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return b.call(this, e);
      case 2:
        return a.call(this, e, h);
      default:
        return f.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  e.h = 2;
  e.c = f.c;
  e.Ea = d;
  e.i = b;
  e.a = a;
  e.f = f;
  return e
}(), xc = function() {
  function a(a, b, d, e) {
    return I.call(j, a, I.call(j, b, I.call(j, d, e)))
  }
  function b(a, b, d) {
    return I.call(j, a, I.call(j, b, d))
  }
  function d(a, b) {
    return I.call(j, a, b)
  }
  function e(a) {
    return J.call(j, a)
  }
  var f = j, g = function() {
    function a(d, e, f, g, h) {
      var x = j;
      r(h) && (x = B(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, d, e, f, g, x)
    }
    function b(a, d, e, f, g) {
      return I.call(j, a, I.call(j, d, I.call(j, e, I.call(j, f, vc.call(j, g)))))
    }
    a.h = 4;
    a.c = function(a) {
      var d = E(a), e = E(C(a)), f = E(C(C(a))), g = E(C(C(C(a)))), a = F(C(C(C(a))));
      return b.call(this, d, e, f, g, a)
    };
    return a
  }(), f = function(f, k, l, v, w) {
    switch(arguments.length) {
      case 1:
        return e.call(this, f);
      case 2:
        return d.call(this, f, k);
      case 3:
        return b.call(this, f, k, l);
      case 4:
        return a.call(this, f, k, l, v);
      default:
        return g.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  f.h = 4;
  f.c = g.c;
  f.i = e;
  f.a = d;
  f.f = b;
  f.sa = a;
  f.Ga = g;
  return f
}(), U = function() {
  function a(a, b, d, e, f) {
    b = xc.call(j, b, d, e, f);
    d = a.h;
    return s(a.c) ? tc.call(j, b, d) <= d ? a.apply(a, sc.call(j, b)) : a.c(b) : a.apply(a, sc.call(j, b))
  }
  function b(a, b, d, e) {
    b = xc.call(j, b, d, e);
    d = a.h;
    return s(a.c) ? tc.call(j, b, d) <= d ? a.apply(a, sc.call(j, b)) : a.c(b) : a.apply(a, sc.call(j, b))
  }
  function d(a, b, d) {
    b = xc.call(j, b, d);
    d = a.h;
    return s(a.c) ? tc.call(j, b, d) <= d ? a.apply(a, sc.call(j, b)) : a.c(b) : a.apply(a, sc.call(j, b))
  }
  function e(a, b) {
    var d = a.h;
    return s(a.c) ? tc.call(j, b, d + 1) <= d ? a.apply(a, sc.call(j, b)) : a.c(b) : a.apply(a, sc.call(j, b))
  }
  var f = j, g = function() {
    function a(d, e, f, g, h, x) {
      var D = j;
      r(x) && (D = B(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, d, e, f, g, h, D)
    }
    function b(a, d, e, f, g, h) {
      d = I.call(j, d, I.call(j, e, I.call(j, f, I.call(j, g, vc.call(j, h)))));
      e = a.h;
      return s(a.c) ? tc.call(j, d, e) <= e ? a.apply(a, sc.call(j, d)) : a.c(d) : a.apply(a, sc.call(j, d))
    }
    a.h = 5;
    a.c = function(a) {
      var d = E(a), e = E(C(a)), f = E(C(C(a))), g = E(C(C(C(a)))), h = E(C(C(C(C(a))))), a = F(C(C(C(C(a)))));
      return b.call(this, d, e, f, g, h, a)
    };
    return a
  }(), f = function(f, k, l, v, w, z) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return b.call(this, f, k, l, v);
      case 5:
        return a.call(this, f, k, l, v, w);
      default:
        return g.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  f.h = 5;
  f.c = g.c;
  f.a = e;
  f.f = d;
  f.sa = b;
  f.Ga = a;
  f.Qa = g;
  return f
}(), Ac = function() {
  function a(a, b) {
    return L.call(j, G.call(j, a, b))
  }
  function b() {
    return m
  }
  var d = j, e = function() {
    function a(b, d, e) {
      var f = j;
      r(e) && (f = B(Array.prototype.slice.call(arguments, 2), 0));
      return L.call(j, U.call(j, G, b, d, f))
    }
    a.h = 2;
    a.c = function(a) {
      var b = E(a), d = E(C(a)), a = F(C(a));
      return L.call(j, U.call(j, G, b, d, a))
    };
    return a
  }(), d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this);
      case 2:
        return a.call(this, d, g);
      default:
        return e.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.h = 2;
  d.c = e.c;
  d.i = b;
  d.a = a;
  d.f = e;
  return d
}();
function Bc(a) {
  return s(J.call(j, a)) ? a : j
}
function Cc(a, b) {
  for(;;) {
    if(J.call(j, b) === j) {
      return i
    }
    if(s(a.call(j, E.call(j, b)))) {
      var d = a, e = C.call(j, b), a = d, b = e
    }else {
      return m
    }
  }
}
function Dc(a, b) {
  for(;;) {
    if(s(J.call(j, b))) {
      var d = a.call(j, E.call(j, b));
      if(s(d)) {
        return d
      }
      var d = a, e = C.call(j, b), a = d, b = e
    }else {
      return j
    }
  }
}
function Ec(a) {
  return a
}
function Fc() {
  return function() {
    function a(a) {
      r(a) && B(Array.prototype.slice.call(arguments, 0), 0);
      return i
    }
    a.h = 0;
    a.c = function(a) {
      J(a);
      return i
    };
    return a
  }()
}
var Gc = function() {
  function a(a, b, d, f) {
    return new T(j, m, function() {
      var v = J.call(j, b), w = J.call(j, d), z = J.call(j, f);
      return s(s(v) ? s(w) ? z : w : v) ? I.call(j, a.call(j, E.call(j, v), E.call(j, w), E.call(j, z)), e.call(j, a, F.call(j, v), F.call(j, w), F.call(j, z))) : j
    })
  }
  function b(a, b, d) {
    return new T(j, m, function() {
      var f = J.call(j, b), v = J.call(j, d);
      return s(s(f) ? v : f) ? I.call(j, a.call(j, E.call(j, f), E.call(j, v)), e.call(j, a, F.call(j, f), F.call(j, v))) : j
    })
  }
  function d(a, b) {
    return new T(j, m, function() {
      var d = J.call(j, b);
      return s(d) ? I.call(j, a.call(j, E.call(j, d)), e.call(j, a, F.call(j, d))) : j
    })
  }
  var e = j, f = function() {
    function a(d, e, f, g, z) {
      var O = j;
      r(z) && (O = B(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, d, e, f, g, O)
    }
    function b(a, d, f, g, h) {
      return e.call(j, function(b) {
        return U.call(j, a, b)
      }, function x(a) {
        return new T(j, m, function() {
          var b = e.call(j, J, a);
          return Cc.call(j, Ec, b) ? I.call(j, e.call(j, E, b), x.call(j, e.call(j, F, b))) : j
        })
      }.call(j, xb.call(j, h, g, f, d)))
    }
    a.h = 4;
    a.c = function(a) {
      var d = E(a), e = E(C(a)), f = E(C(C(a))), g = E(C(C(C(a)))), a = F(C(C(C(a))));
      return b.call(this, d, e, f, g, a)
    };
    return a
  }(), e = function(e, h, k, l, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return b.call(this, e, h, k);
      case 4:
        return a.call(this, e, h, k, l);
      default:
        return f.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  e.h = 4;
  e.c = f.c;
  e.a = d;
  e.f = b;
  e.sa = a;
  e.Ga = f;
  return e
}(), Ic = function Hc(b, d) {
  return new T(j, m, function() {
    if(0 < b) {
      var e = J.call(j, d);
      return s(e) ? I.call(j, E.call(j, e), Hc.call(j, b - 1, F.call(j, e))) : j
    }
    return j
  })
};
function Jc(a, b) {
  function d(a, b) {
    for(;;) {
      var d = J.call(j, b), h = 0 < a;
      if(s(h ? d : h)) {
        h = a - 1, d = F.call(j, d), a = h, b = d
      }else {
        return d
      }
    }
  }
  return new T(j, m, function() {
    return d.call(j, a, b)
  })
}
var Kc = function() {
  function a(a, b) {
    return Ic.call(j, a, d.call(j, b))
  }
  function b(a) {
    return new T(j, m, function() {
      return I.call(j, a, d.call(j, a))
    })
  }
  var d = j, d = function(d, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, f)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.i = b;
  d.a = a;
  return d
}(), Lc = function() {
  function a(a, b) {
    return Ic.call(j, a, d.call(j, b))
  }
  function b(a) {
    return new T(j, m, function() {
      return I.call(j, a.call(j), d.call(j, a))
    })
  }
  var d = j, d = function(d, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, f)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.i = b;
  d.a = a;
  return d
}(), Mc = function() {
  function a(a, d) {
    return new T(j, m, function() {
      var g = J.call(j, a), h = J.call(j, d);
      return s(s(g) ? h : g) ? I.call(j, E.call(j, g), I.call(j, E.call(j, h), b.call(j, F.call(j, g), F.call(j, h)))) : j
    })
  }
  var b = j, d = function() {
    function a(b, e, k) {
      var l = j;
      r(k) && (l = B(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, b, e, l)
    }
    function d(a, e, f) {
      return new T(j, m, function() {
        var d = Gc.call(j, J, xb.call(j, f, e, a));
        return Cc.call(j, Ec, d) ? wc.call(j, Gc.call(j, E, d), U.call(j, b, Gc.call(j, F, d))) : j
      })
    }
    a.h = 2;
    a.c = function(a) {
      var b = E(a), e = E(C(a)), a = F(C(a));
      return d.call(this, b, e, a)
    };
    return a
  }(), b = function(b, f, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 2;
  b.c = d.c;
  b.a = a;
  b.f = d;
  return b
}();
function Nc(a, b) {
  return Jc.call(j, 1, Mc.call(j, Kc.call(j, a), b))
}
function Oc(a) {
  return function d(a, f) {
    return new T(j, m, function() {
      var g = J.call(j, a);
      return s(g) ? I.call(j, E.call(j, g), d.call(j, F.call(j, g), f)) : s(J.call(j, f)) ? d.call(j, E.call(j, f), F.call(j, f)) : j
    })
  }.call(j, j, a)
}
var Pc = function() {
  function a(a, b) {
    return Oc.call(j, Gc.call(j, a, b))
  }
  var b = j, d = function() {
    function a(b, d, e) {
      var k = j;
      r(e) && (k = B(Array.prototype.slice.call(arguments, 2), 0));
      return Oc.call(j, U.call(j, Gc, b, d, k))
    }
    a.h = 2;
    a.c = function(a) {
      var b = E(a), d = E(C(a)), a = F(C(a));
      return Oc.call(j, U.call(j, Gc, b, d, a))
    };
    return a
  }(), b = function(b, f, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 2;
  b.c = d.c;
  b.a = a;
  b.f = d;
  return b
}(), Rc = function Qc(b, d) {
  return new T(j, m, function() {
    var e = J.call(j, d);
    if(s(e)) {
      var f = E.call(j, e), e = F.call(j, e);
      return s(b.call(j, f)) ? I.call(j, f, Qc.call(j, b, e)) : Qc.call(j, b, e)
    }
    return j
  })
};
function Sc(a, b) {
  return Tb.call(j, Ea, a, b)
}
var Tc = function() {
  function a(a, b, d) {
    for(var h = Lb, b = J.call(j, b);;) {
      if(s(b)) {
        a = P.call(j, a, E.call(j, b), h);
        if(h === a) {
          return d
        }
        b = C.call(j, b)
      }else {
        return a
      }
    }
  }
  function b(a, b) {
    return Tb.call(j, P, a, b)
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}(), Vc = function Uc(b, d, e) {
  var f = M.call(j, d, 0, j), d = ec.call(j, d, 1);
  return s(d) ? Q.call(j, b, f, Uc.call(j, P.call(j, b, f), d, e)) : Q.call(j, b, f, e)
}, Wc = function() {
  function a(a, e, f, g) {
    var h = j;
    r(g) && (h = B(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, e, f, h)
  }
  function b(b, e, f, g) {
    var h = M.call(j, e, 0, j), e = ec.call(j, e, 1);
    return s(e) ? Q.call(j, b, h, U.call(j, a, P.call(j, b, h), e, f, g)) : Q.call(j, b, h, U.call(j, f, P.call(j, b, h), g))
  }
  a.h = 3;
  a.c = function(a) {
    var e = E(a), f = E(C(a)), g = E(C(C(a))), a = F(C(C(a)));
    return b.call(this, e, f, g, a)
  };
  return a
}();
function Xc(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >> 5 << 5
}
function Yc(a, b) {
  for(var d = a, e = b;;) {
    if(0 === d) {
      return e
    }
    var f = Ba.call(j, Zc);
    f[0] = e;
    e = f;
    d -= 5
  }
}
var ad = function $c(b, d, e, f) {
  var g = Ba.call(j, e), h = b.g - 1 >> d & 31;
  5 === d ? g[h] = f : (e = e[h], b = s(e) ? $c.call(j, b, d - 5, e, f) : Yc.call(j, d - 5, f), g[h] = b);
  return g
};
function cd(a, b) {
  var d = 0 <= b;
  if(d ? b < a.g : d) {
    if(b >= Xc.call(j, a)) {
      return a.Ca
    }
    for(var d = a.root, e = a.shift;;) {
      if(0 < e) {
        var f = e - 5, d = d[b >> e & 31], e = f
      }else {
        return d
      }
    }
  }else {
    c(Error(S.call(j, "No item ", b, " in vector of length ", a.g)))
  }
}
var ed = function dd(b, d, e, f, g) {
  var h = Ba.call(j, e);
  if(0 === d) {
    h[f & 31] = g
  }else {
    var k = f >> d & 31;
    h[k] = dd.call(j, b, d - 5, e[k], f, g)
  }
  return h
};
function fd(a, b, d, e, f) {
  this.k = a;
  this.g = b;
  this.shift = d;
  this.root = e;
  this.Ca = f
}
p = fd.prototype;
p.I = function(a) {
  return rb.call(j, a)
};
p.ja = function(a, b) {
  return u.call(j, a, b, j)
};
p.ka = function(a, b, d) {
  return u.call(j, a, b, d)
};
p.xa = function(a, b, d) {
  var e = 0 <= b;
  if(e ? b < this.g : e) {
    return Xc.call(j, a) <= b ? (a = Ba.call(j, this.Ca), a[b & 31] = d, new fd(this.k, this.g, this.shift, this.root, a)) : new fd(this.k, this.g, this.shift, ed.call(j, a, this.shift, this.root, b, d), this.Ca)
  }
  if(b === this.g) {
    return Ea.call(j, a, d)
  }
  c(Error(S.call(j, "Index ", b, " out of bounds  [0,", this.g, "]")))
};
p.call = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this, b);
      case 3:
        return y.call(j, this, b, d)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
p.ra = i;
p.O = function(a, b) {
  if(32 > this.g - Xc.call(j, a)) {
    var d = Ba.call(j, this.Ca);
    d.push(b);
    return new fd(this.k, this.g + 1, this.shift, this.root, d)
  }
  var e = this.g >> 5 > 1 << this.shift, d = e ? this.shift + 5 : this.shift;
  e ? (e = Ba.call(j, Zc), e[0] = this.root, e[1] = Yc.call(j, this.shift, this.Ca)) : e = ad.call(j, a, this.shift, this.root, this.Ca);
  return new fd(this.k, this.g + 1, d, e, [b])
};
p.Ua = function(a) {
  return u.call(j, a, 0)
};
p.Va = function(a) {
  return u.call(j, a, 1)
};
p.toString = function() {
  return sb.call(j, this)
};
p.Na = function(a, b) {
  return pb.call(j, a, b)
};
p.Oa = function(a, b, d) {
  return pb.call(j, a, b, d)
};
p.H = function(a) {
  var b = this;
  return 0 < b.g ? function e(f) {
    return new T(j, m, function() {
      return f < b.g ? I.call(j, u.call(j, a, f), e.call(j, f + 1)) : j
    })
  }.call(j, 0) : j
};
p.P = n("g");
p.bb = i;
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.J = function(a, b) {
  return new fd(b, this.g, this.shift, this.root, this.Ca)
};
p.D = i;
p.F = n("k");
p.La = function(a, b) {
  return cd.call(j, a, b)[b & 31]
};
p.Ma = function(a, b, d) {
  var e = 0 <= b;
  return(e ? b < this.g : e) ? u.call(j, a, b) : d
};
var Zc = Ca.call(j, 32), gd = new fd(j, 0, 5, Zc, []);
function V(a) {
  return Sc.call(j, gd, a)
}
function hd(a) {
  return Tb.call(j, xb, gd, a)
}
var X = function() {
  function a(a) {
    var d = j;
    r(a) && (d = B(Array.prototype.slice.call(arguments, 0), 0));
    return hd.call(j, d)
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return hd.call(j, a)
  };
  return a
}();
V([]);
function id() {
}
id.prototype.n = o(m);
var jd = new id;
function kd(a, b) {
  return Mb.call(j, Hb.call(j, b) ? G.call(j, yb.call(j, a), yb.call(j, b)) ? Cc.call(j, Ec, Gc.call(j, function(a) {
    return G.call(j, P.call(j, b, E.call(j, a), jd), vb.call(j, a))
  }, a)) : j : j)
}
function ld(a) {
  return fb.call(j, a)
}
function md(a) {
  return lb.call(j, a)
}
function nd(a, b, d) {
  return mb.call(j, a, b, d)
}
var od = function() {
  function a(a, b, d, h, k) {
    a = Ba.call(j, a);
    a[b] = d;
    a[h] = k;
    return a
  }
  function b(a, b, d) {
    a = Ba.call(j, a);
    a[b] = d;
    return a
  }
  var d = j, d = function(d, f, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, d, f, g);
      case 5:
        return a.call(this, d, f, g, h, k)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.f = b;
  d.Ga = a;
  return d
}();
function pd(a, b, d, e, f) {
  for(;;) {
    if(0 === f) {
      return d
    }
    d[e] = a[b];
    e += 1;
    f -= 1;
    b += 1
  }
}
function qd(a, b, d, e, f) {
  b += f - 1;
  for(e += f - 1;;) {
    if(0 === f) {
      return d
    }
    d[e] = a[b];
    e -= 1;
    f -= 1;
    b -= 1
  }
}
function rd(a, b) {
  var d = Ca.call(j, a.length - 2);
  pd.call(j, a, 0, d, 0, 2 * b);
  pd.call(j, a, 2 * (b + 1), d, 2 * b, d.length - 2 * b);
  return d
}
function sd(a, b) {
  return dc.call(j, a & b - 1)
}
var td = function() {
  function a(a, b, d, h, k, l) {
    a = a.Ba(b);
    a.e[d] = h;
    a.e[k] = l;
    return a
  }
  function b(a, b, d, h) {
    a = a.Ba(b);
    a.e[d] = h;
    return a
  }
  var d = j, d = function(d, f, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, d, f, g, h);
      case 6:
        return a.call(this, d, f, g, h, k, l)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.sa = b;
  d.Qa = a;
  return d
}();
function ud(a, b, d) {
  this.U = a;
  this.l = b;
  this.e = d
}
p = ud.prototype;
p.ha = function(a, b, d, e, f) {
  var g = 1 << (b >>> a & 31), h = sd.call(j, this.l, g);
  if(0 === (this.l & g)) {
    var k = dc.call(j, this.l);
    if(16 <= k) {
      h = Ca.call(j, 32);
      h[b >>> a & 31] = vd.ha(a + 5, b, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.l >>> d & 1) && (h[d] = j != this.e[e] ? vd.ha(a + 5, Db.call(j, this.e[e]), this.e[e], this.e[e + 1], f) : this.e[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new wd(j, k + 1, h)
    }
    a = Ca.call(j, 2 * (k + 1));
    pd.call(j, this.e, 0, a, 0, 2 * h);
    a[2 * h] = d;
    f[0] = i;
    a[2 * h + 1] = e;
    pd.call(j, this.e, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    return new ud(j, this.l | g, a)
  }
  g = this.e[2 * h];
  k = this.e[2 * h + 1];
  if(j == g) {
    return f = k.ha(a + 5, b, d, e, f), f === k ? this : new ud(j, this.l, od.call(j, this.e, 2 * h + 1, f))
  }
  if(G.call(j, d, g)) {
    return e === k ? this : new ud(j, this.l, od.call(j, this.e, 2 * h + 1, e))
  }
  f[0] = i;
  return new ud(j, this.l, od.call(j, this.e, 2 * h, j, 2 * h + 1, xd.call(j, a + 5, g, k, b, d, e)))
};
p.Ka = function(a, b, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.l & e)) {
    return this
  }
  var f = sd.call(j, this.l, e), g = this.e[2 * f], h = this.e[2 * f + 1];
  return j == g ? (a = h.Ka(a + 5, b, d), a === h ? this : j != a ? new ud(j, this.l, od.call(j, this.e, 2 * f + 1, a)) : this.l === e ? j : new ud(j, this.l ^ e, rd.call(j, this.e, f))) : G.call(j, d, g) ? new ud(j, this.l ^ e, rd.call(j, this.e, f)) : this
};
p.ma = function() {
  return function(a, b, d, e) {
    switch(arguments.length) {
      case 3:
        var f;
        f = 1 << (b >>> a & 31);
        if(0 === (this.l & f)) {
          f = j
        }else {
          var g = sd.call(j, this.l, f);
          f = this.e[2 * g];
          g = this.e[2 * g + 1];
          f = j == f ? g.ma(a + 5, b, d) : G.call(j, d, f) ? V([f, g]) : j
        }
        return f;
      case 4:
        return f = 1 << (b >>> a & 31), 0 === (this.l & f) ? f = e : (g = sd.call(j, this.l, f), f = this.e[2 * g], g = this.e[2 * g + 1], f = j == f ? g.ma(a + 5, b, d, e) : G.call(j, d, f) ? V([f, g]) : e), f
    }
    c("Invalid arity: " + arguments.length)
  }
}();
p.Ja = function() {
  return yd.call(j, this.e)
};
p.Ba = function(a) {
  if(a === this.U) {
    return this
  }
  var b = dc.call(j, this.l), d = Ca.call(j, 0 > b ? 4 : 2 * (b + 1));
  pd.call(j, this.e, 0, d, 0, 2 * b);
  return new ud(a, this.l, d)
};
p.ia = function(a, b, d, e, f, g) {
  var h = 1 << (d >>> b & 31), k = sd.call(j, this.l, h);
  if(0 === (this.l & h)) {
    var l = dc.call(j, this.l);
    if(2 * l < this.e.length) {
      return a = this.Ba(a), b = a.e, g[0] = i, qd.call(j, b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), b[2 * k] = e, b[2 * k + 1] = f, a.l |= h, a
    }
    if(16 <= l) {
      k = Ca.call(j, 32);
      k[d >>> b & 31] = vd.ia(a, b + 5, d, e, f, g);
      for(f = e = 0;;) {
        if(32 > e) {
          0 !== (this.l >>> e & 1) && (k[e] = j != this.e[f] ? vd.ia(a, b + 5, Db.call(j, this.e[f]), this.e[f], this.e[f + 1], g) : this.e[f + 1], f += 2), e += 1
        }else {
          break
        }
      }
      return new wd(a, l + 1, k)
    }
    b = Ca.call(j, 2 * (l + 4));
    pd.call(j, this.e, 0, b, 0, 2 * k);
    b[2 * k] = e;
    g[0] = i;
    b[2 * k + 1] = f;
    pd.call(j, this.e, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    g = this.Ba(a);
    g.e = b;
    g.l |= h;
    return g
  }
  h = this.e[2 * k];
  l = this.e[2 * k + 1];
  if(j == h) {
    return g = l.ia(a, b + 5, d, e, f, g), g === l ? this : td.call(j, this, a, 2 * k + 1, g)
  }
  if(G.call(j, e, h)) {
    return f === l ? this : td.call(j, this, a, 2 * k + 1, f)
  }
  g[0] = i;
  return td.call(j, this, a, 2 * k, j, 2 * k + 1, xd.call(j, a, b + 5, h, l, d, e, f))
};
var vd = new ud(j, 0, Ca.call(j, 0));
function zd(a, b, d) {
  for(var e = a.e, a = 2 * (a.g - 1), f = Ca.call(j, a), g = 0, h = 1, k = 0;;) {
    if(g < a) {
      var l = g != d;
      if(l ? j != e[g] : l) {
        f[h] = e[g], h += 2, k |= 1 << g
      }
      g += 1
    }else {
      return new ud(b, k, f)
    }
  }
}
function wd(a, b, d) {
  this.U = a;
  this.g = b;
  this.e = d
}
p = wd.prototype;
p.ha = function(a, b, d, e, f) {
  var g = b >>> a & 31, h = this.e[g];
  if(j == h) {
    return new wd(j, this.g + 1, od.call(j, this.e, g, vd.ha(a + 5, b, d, e, f)))
  }
  a = h.ha(a + 5, b, d, e, f);
  return a === h ? this : new wd(j, this.g, od.call(j, this.e, g, a))
};
p.Ka = function(a, b, d) {
  var e = b >>> a & 31, f = this.e[e];
  return j != f ? (a = f.Ka(a + 5, b, d), a === f ? this : a === j ? 8 >= this.g ? zd.call(j, this, e) : new wd(j, this.g - 1, od.call(j, this.e, e, a)) : new wd(j, this.g, od.call(j, this.e, e, a))) : this
};
p.ma = function() {
  return function(a, b, d, e) {
    switch(arguments.length) {
      case 3:
        var f = this.e[b >>> a & 31];
        return j != f ? f.ma(a + 5, b, d) : j;
      case 4:
        return f = this.e[b >>> a & 31], j != f ? f.ma(a + 5, b, d, e) : e
    }
    c("Invalid arity: " + arguments.length)
  }
}();
p.Ja = function() {
  return Ad.call(j, this.e)
};
p.Ba = function(a) {
  return a === this.U ? this : new wd(a, this.g, Ba.call(j, this.e))
};
p.ia = function(a, b, d, e, f, g) {
  var h = d >>> b & 31, k = this.e[h];
  if(j == k) {
    return a = td.call(j, this, a, h, vd.ia(a, b + 5, d, e, f, g)), a.g += 1, a
  }
  b = k.ia(a, b + 5, d, e, f, g);
  return b === k ? this : td.call(j, this, a, h, b)
};
function Bd(a, b, d) {
  for(var b = 2 * b, e = 0;;) {
    if(e < b) {
      if(G.call(j, d, a[e])) {
        return e
      }
      e += 2
    }else {
      return-1
    }
  }
}
function Cd(a, b, d, e) {
  this.U = a;
  this.na = b;
  this.g = d;
  this.e = e
}
p = Cd.prototype;
p.ha = function(a, b, d, e, f) {
  if(b === this.na) {
    a = Bd.call(j, this.e, this.g, d);
    return-1 === a ? (a = this.e.length, b = Ca.call(j, a + 2), pd.call(j, this.e, 0, b, 0, a), b[a] = d, b[a + 1] = e, f[0] = i, new Cd(j, this.na, this.g + 1, b)) : G.call(j, this.e[a], e) ? this : new Cd(j, this.na, this.g, od.call(j, this.e, a + 1, e))
  }
  return(new ud(j, 1 << (this.na >>> a & 31), [j, this])).ha(a, b, d, e, f)
};
p.Ka = function(a, b, d) {
  a = Bd.call(j, this.e, this.g, d);
  return-1 === a ? this : 1 === this.g ? j : new Cd(j, this.na, this.g - 1, rd.call(j, this.e, $b.call(j, a, 2)))
};
p.ma = function() {
  return function(a, b, d, e) {
    switch(arguments.length) {
      case 3:
        var f = Bd.call(j, this.e, this.g, d);
        return 0 > f ? j : G.call(j, d, this.e[f]) ? V([this.e[f], this.e[f + 1]]) : j;
      case 4:
        return f = Bd.call(j, this.e, this.g, d), 0 > f ? e : G.call(j, d, this.e[f]) ? V([this.e[f], this.e[f + 1]]) : e
    }
    c("Invalid arity: " + arguments.length)
  }
}();
p.Ja = function() {
  return yd.call(j, this.e)
};
p.Ba = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 1:
        var e;
        a === this.U ? e = this : (e = Ca.call(j, 2 * (this.g + 1)), pd.call(j, this.e, 0, e, 0, 2 * this.g), e = new Cd(a, this.na, this.g, e));
        return e;
      case 3:
        return a === this.U ? (this.e = d, this.g = b, e = this) : e = new Cd(this.U, this.na, b, d), e
    }
    c("Invalid arity: " + arguments.length)
  }
}();
p.ia = function(a, b, d, e, f, g) {
  if(d === this.na) {
    b = Bd.call(j, this.e, this.g, e);
    if(-1 === b) {
      if(this.e.length > 2 * this.g) {
        return a = td.call(j, this, a, 2 * this.g, e, 2 * this.g + 1, f), g[0] = i, a.g += 1, a
      }
      b = this.e.length;
      d = Ca.call(j, b + 2);
      pd.call(j, this.e, 0, d, 0, b);
      d[b] = e;
      d[b + 1] = f;
      g[0] = i;
      return this.Ba(a, this.g + 1, d)
    }
    return this.e[b + 1] === f ? this : td.call(j, this, a, b + 1, f)
  }
  return(new ud(a, 1 << (this.na >>> b & 31), [j, this, j, j])).ia(a, b, d, e, f, g)
};
var xd = function() {
  function a(a, b, d, h, k, l, v) {
    var w = Db.call(j, d);
    if(w === k) {
      return new Cd(j, w, 2, [d, h, l, v])
    }
    var z = [m];
    return vd.ia(a, b, w, d, h, z).ia(a, b, k, l, v, z)
  }
  function b(a, b, d, h, k, l) {
    var v = Db.call(j, b);
    if(v === h) {
      return new Cd(j, v, 2, [b, d, k, l])
    }
    var w = [m];
    return vd.ha(a, v, b, d, w).ha(a, h, k, l, w)
  }
  var d = j, d = function(d, f, g, h, k, l, v) {
    switch(arguments.length) {
      case 6:
        return b.call(this, d, f, g, h, k, l);
      case 7:
        return a.call(this, d, f, g, h, k, l, v)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.Qa = b;
  d.fb = a;
  return d
}();
function Dd(a, b, d, e) {
  this.k = a;
  this.za = b;
  this.C = d;
  this.wa = e
}
p = Dd.prototype;
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.H = ba();
p.ya = i;
p.pa = function() {
  return this.wa === j ? V([this.za[this.C], this.za[this.C + 1]]) : E.call(j, this.wa)
};
p.qa = function() {
  return this.wa === j ? yd.call(j, this.za, this.C + 2, j) : yd.call(j, this.za, this.C, C.call(j, this.wa))
};
p.ra = i;
p.J = function(a, b) {
  return new Dd(b, this.za, this.C, this.wa)
};
p.D = i;
p.F = n("k");
var yd = function() {
  function a(a, b, d) {
    if(d === j) {
      for(d = a.length;;) {
        if(b < d) {
          if(j != a[b]) {
            return new Dd(j, a, b, j)
          }
          var h = a[b + 1];
          if(s(h) && (h = h.Ja(), s(h))) {
            return new Dd(j, a, b + 2, h)
          }
          b += 2
        }else {
          return j
        }
      }
    }else {
      return new Dd(j, a, b, d)
    }
  }
  function b(a) {
    return d.call(j, a, 0, j)
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.i = b;
  d.f = a;
  return d
}();
function Ed(a, b, d, e) {
  this.k = a;
  this.za = b;
  this.C = d;
  this.wa = e
}
p = Ed.prototype;
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.H = ba();
p.ya = i;
p.pa = function() {
  return E.call(j, this.wa)
};
p.qa = function() {
  return Ad.call(j, j, this.za, this.C, C.call(j, this.wa))
};
p.ra = i;
p.J = function(a, b) {
  return new Ed(b, this.za, this.C, this.wa)
};
p.D = i;
p.F = n("k");
var Ad = function() {
  function a(a, b, d, h) {
    if(h === j) {
      for(h = b.length;;) {
        if(d < h) {
          var k = b[d];
          if(s(k) && (k = k.Ja(), s(k))) {
            return new Ed(a, b, d + 1, k)
          }
          d += 1
        }else {
          return j
        }
      }
    }else {
      return new Ed(a, b, d, h)
    }
  }
  function b(a) {
    return d.call(j, j, a, 0, j)
  }
  var d = j, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 4:
        return a.call(this, d, f, g, h)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.i = b;
  d.sa = a;
  return d
}();
function Fd(a, b, d, e, f) {
  this.k = a;
  this.g = b;
  this.root = d;
  this.L = e;
  this.X = f
}
p = Fd.prototype;
p.Ta = function() {
  return new Gd(Kb.call(j), this.root, this.g, this.L, this.X)
};
p.I = function(a) {
  return jc.call(j, a)
};
p.ja = function(a, b) {
  return y.call(j, a, b, j)
};
p.ka = function(a, b, d) {
  return b === j ? s(this.L) ? this.X : d : this.root === j ? d : M.call(j, this.root.ma(0, Db.call(j, b), b, [j, d]), 1)
};
p.xa = function(a, b, d) {
  if(b === j) {
    var e = this.L;
    return s(s(e) ? d === this.X : e) ? a : new Fd(this.k, s(this.L) ? this.g : this.g + 1, this.root, i, d)
  }
  e = [m];
  d = (this.root === j ? vd : this.root).ha(0, Db.call(j, b), b, d, e);
  return d === this.root ? a : new Fd(this.k, s(e[0]) ? this.g + 1 : this.g, d, this.L, this.X)
};
p.Sa = function(a, b) {
  return b === j ? this.L : this.root === j ? m : L.call(j, this.root.ma(0, Db.call(j, b), b, Lb) === Lb)
};
p.call = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this, b);
      case 3:
        return y.call(j, this, b, d)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
p.O = function(a, b) {
  return Ib.call(j, b) ? Ka.call(j, a, u.call(j, b, 0), u.call(j, b, 1)) : Tb.call(j, Ea, a, b)
};
p.toString = function() {
  return sb.call(j, this)
};
p.H = function() {
  if(0 < this.g) {
    var a = j != this.root ? this.root.Ja() : j;
    return s(this.L) ? I.call(j, V([j, this.X]), a) : a
  }
  return j
};
p.P = n("g");
p.n = function(a, b) {
  return kd.call(j, a, b)
};
p.J = function(a, b) {
  return new Fd(b, this.g, this.root, this.L, this.X)
};
p.D = i;
p.F = n("k");
p.Da = i;
p.Aa = function(a, b) {
  if(b === j) {
    return s(this.L) ? new Fd(this.k, this.g - 1, this.root, m, j) : a
  }
  if(this.root === j) {
    return a
  }
  var d = this.root.Ka(0, Db.call(j, b), b);
  return d === this.root ? a : new Fd(this.k, this.g - 1, d, this.L, this.X)
};
var Hd = new Fd(j, 0, j, m, j);
function Y(a, b) {
  for(var d = a.length, e = 0, f = ld.call(j, Hd);;) {
    if(e < d) {
      var g = e + 1, f = nd.call(j, f, a[e], b[e]), e = g
    }else {
      return md.call(j, f)
    }
  }
}
function Gd(a, b, d, e, f) {
  this.U = a;
  this.root = b;
  this.la = d;
  this.L = e;
  this.X = f
}
p = Gd.prototype;
p.Xa = function(a, b, d) {
  if(s(a.U)) {
    if(b === j) {
      if(a.X !== d) {
        a.X = d
      }
      if(!s(a.L)) {
        a.la += 1, a.L = i
      }
    }else {
      var e = [m], b = (a.root === j ? vd : a.root).ia(a.U, 0, Db.call(j, b), b, d, e);
      if(b !== a.root) {
        a.root = b
      }
      s(e[0]) && (a.la += 1)
    }
  }else {
    c(Error("assoc! after persistent!"))
  }
  return a
};
p.Ya = function(a) {
  var b;
  s(a.U) ? (a.U = j, b = new Fd(j, a.la, a.root, a.L, a.X)) : c(Error("persistent! called twice"));
  return b
};
p.ja = function(a, b) {
  return b === j ? s(this.L) ? this.X : j : this.root === j ? j : M.call(j, this.root.ma(0, Db.call(j, b), b), 1)
};
p.ka = function(a, b, d) {
  return b === j ? s(this.L) ? this.X : d : this.root === j ? d : M.call(j, this.root.ma(0, Db.call(j, b), b, d), 1)
};
p.P = function() {
  if(s(this.U)) {
    return this.la
  }
  c(Error("count after persistent!"))
};
var H = function() {
  function a(a) {
    var e = j;
    r(a) && (e = B(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, e)
  }
  function b(a) {
    for(var a = J.call(j, a), b = Hd;;) {
      if(s(a)) {
        var f = wb.call(j, a), b = Q.call(j, b, E.call(j, a), vb.call(j, a)), a = f
      }else {
        return b
      }
    }
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return b.call(this, a)
  };
  return a
}();
function Id(a) {
  return J.call(j, Gc.call(j, E, a))
}
function kc(a) {
  return Na.call(j, a)
}
function lc(a) {
  return Oa.call(j, a)
}
var Jd = function() {
  function a(a) {
    var e = j;
    r(a) && (e = B(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, e)
  }
  function b(a) {
    return s(Dc.call(j, Ec, a)) ? Tb.call(j, function(a, b) {
      return xb.call(j, s(a) ? a : Y([], []), b)
    }, a) : j
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return b.call(this, a)
  };
  return a
}();
function Kd(a, b) {
  this.k = a;
  this.Ia = b
}
p = Kd.prototype;
p.I = function(a) {
  return rb.call(j, a)
};
p.ja = function(a, b) {
  return y.call(j, a, b, j)
};
p.ka = function(a, b, d) {
  return s(Ja.call(j, this.Ia, b)) ? b : d
};
p.call = function() {
  return function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this, b);
      case 3:
        return y.call(j, this, b, d)
    }
    c("Invalid arity: " + arguments.length)
  }
}();
p.O = function(a, b) {
  return new Kd(this.k, Q.call(j, this.Ia, b, j))
};
p.toString = function() {
  return sb.call(j, this)
};
p.H = function() {
  return Id.call(j, this.Ia)
};
p.ab = i;
p.Wa = function(a, b) {
  return new Kd(this.k, zb.call(j, this.Ia, b))
};
p.P = function(a) {
  return yb.call(j, J.call(j, a))
};
p.n = function(a, b) {
  var d = Fb.call(j, b);
  return d ? (d = G.call(j, yb.call(j, a), yb.call(j, b))) ? Cc.call(j, function(b) {
    return Sb.call(j, a, b)
  }, b) : d : d
};
p.J = function(a, b) {
  return new Kd(b, this.Ia)
};
p.D = i;
p.F = n("k");
var Ld = new Kd(j, H.call(j));
function Md(a) {
  for(var a = J.call(j, a), b = Ld;;) {
    if(L.call(j, Eb.call(j, a))) {
      var d = F.call(j, a), b = xb.call(j, b, E.call(j, a)), a = d
    }else {
      return b
    }
  }
}
function Nd(a) {
  if(Nb.call(j, a)) {
    return a
  }
  var b = Ob.call(j, a);
  if(b ? b : Pb.call(j, a)) {
    return b = a.lastIndexOf("/"), 0 > b ? gc.call(j, a, 2) : gc.call(j, a, b + 1)
  }
  c(Error(S.call(j, "Doesn't support name: ", a)))
}
function Od(a) {
  var b = Ob.call(j, a);
  if(b ? b : Pb.call(j, a)) {
    return b = a.lastIndexOf("/"), -1 < b ? gc.call(j, a, 2, b) : j
  }
  c(Error(S.call(j, "Doesn't support namespace: ", a)))
}
function Pd(a, b, d, e) {
  this.k = a;
  this.start = b;
  this.end = d;
  this.step = e
}
p = Pd.prototype;
p.I = function(a) {
  return rb.call(j, a)
};
p.ra = i;
p.O = function(a, b) {
  return I.call(j, b, a)
};
p.toString = function() {
  return sb.call(j, this)
};
p.Na = function(a, b) {
  return pb.call(j, a, b)
};
p.Oa = function(a, b, d) {
  return pb.call(j, a, b, d)
};
p.H = function(a) {
  return s((0 < this.step ? Wb : Xb).call(j, this.start, this.end)) ? a : j
};
p.P = function(a) {
  return L.call(j, ab.call(j, a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
p.ya = i;
p.pa = n("start");
p.qa = function(a) {
  return s(ab.call(j, a)) ? new Pd(this.k, this.start + this.step, this.end, this.step) : nb.call(j)
};
p.n = function(a, b) {
  return tb.call(j, a, b)
};
p.J = function(a, b) {
  return new Pd(b, this.start, this.end, this.step)
};
p.D = i;
p.F = n("k");
p.La = function(a, b) {
  if(b < Da.call(j, a)) {
    return this.start + b * this.step
  }
  var d = this.start > this.end;
  if(d ? G.call(j, this.step, 0) : d) {
    return this.start
  }
  c(Error("Index out of bounds"))
};
p.Ma = function(a, b, d) {
  d = b < Da.call(j, a) ? this.start + b * this.step : ((a = this.start > this.end) ? G.call(j, this.step, 0) : a) ? this.start : d;
  return d
};
var Qd = function() {
  function a(a, b, d) {
    return new Pd(j, a, b, d)
  }
  function b(a, b) {
    return f.call(j, a, b, 1)
  }
  function d(a) {
    return f.call(j, 0, a, 1)
  }
  function e() {
    return f.call(j, 0, Number.MAX_VALUE, 1)
  }
  var f = j, f = function(f, h, k) {
    switch(arguments.length) {
      case 0:
        return e.call(this);
      case 1:
        return d.call(this, f);
      case 2:
        return b.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    c("Invalid arity: " + arguments.length)
  };
  f.Ea = e;
  f.i = d;
  f.a = b;
  f.f = a;
  return f
}();
function Rd(a, b) {
  var d = a.exec(b);
  return G.call(j, E.call(j, d), b) ? G.call(j, yb.call(j, d), 1) ? E.call(j, d) : hd.call(j, d) : j
}
function Sd(a, b) {
  var d = a.exec(b);
  return d === j ? j : G.call(j, yb.call(j, d), 1) ? E.call(j, d) : hd.call(j, d)
}
function Z(a, b, d, e, f, g) {
  return wc.call(j, V([b]), Oc.call(j, Nc.call(j, V([d]), Gc.call(j, function(b) {
    return a.call(j, b, f)
  }, g))), V([e]))
}
function Td(a) {
  za.call(j, a);
  return j
}
function Ud() {
  return j
}
var Wd = function Vd(b, d) {
  return b === j ? nb.call(j, "nil") : void 0 === b ? nb.call(j, "#<undefined>") : wc.call(j, s(function() {
    var e = P.call(j, d, "\ufdd0'meta");
    return s(e) ? (s(b) ? (e = b.D, e = s(e) ? L.call(j, b.hasOwnProperty("cljs$core$IMeta$")) : e) : e = b, e = s(e) ? i : Aa.call(j, Ta, b), s(e) ? Bb.call(j, b) : e) : e
  }()) ? wc.call(j, V(["^"]), Vd.call(j, Bb.call(j, b), d), V([" "])) : j, s(function() {
    var d;
    s(b) ? (d = b.G, d = s(d) ? L.call(j, b.hasOwnProperty("cljs$core$IPrintable$")) : d) : d = b;
    return s(d) ? i : Aa.call(j, cb, b)
  }()) ? db.call(j, b, d) : nb.call(j, "#<", S.call(j, b), ">"))
};
function Xd(a, b) {
  var d = E.call(j, a), e = new ya, f = J.call(j, a);
  if(s(f)) {
    for(var g = E.call(j, f);;) {
      g !== d && e.append(" ");
      var h = J.call(j, Wd.call(j, g, b));
      if(s(h)) {
        for(g = E.call(j, h);;) {
          if(e.append(g), g = C.call(j, h), s(g)) {
            h = g, g = E.call(j, h)
          }else {
            break
          }
        }
      }
      f = C.call(j, f);
      if(s(f)) {
        g = f, f = E.call(j, g), h = g, g = f, f = h
      }else {
        break
      }
    }
  }
  return e
}
function Yd(a, b) {
  return S.call(j, Xd.call(j, a, b))
}
function Zd(a, b) {
  var d = E.call(j, a), e = J.call(j, a);
  if(s(e)) {
    for(var f = E.call(j, e);;) {
      f !== d && Td.call(j, " ");
      var g = J.call(j, Wd.call(j, f, b));
      if(s(g)) {
        for(f = E.call(j, g);;) {
          if(Td.call(j, f), f = C.call(j, g), s(f)) {
            g = f, f = E.call(j, g)
          }else {
            break
          }
        }
      }
      e = C.call(j, e);
      if(s(e)) {
        f = e, e = E.call(j, f), g = f, f = e, e = g
      }else {
        return j
      }
    }
  }else {
    return j
  }
}
function $d(a) {
  Td.call(j, "\n");
  return s(P.call(j, a, "\ufdd0'flush-on-newline")) ? Ud.call(j) : j
}
function ae() {
  return Y(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], [i, i, m, m])
}
var sb = function() {
  function a(a) {
    var d = j;
    r(a) && (d = B(Array.prototype.slice.call(arguments, 0), 0));
    return Yd.call(j, d, ae.call(j))
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return Yd.call(j, a, ae.call(j))
  };
  return a
}(), be = function() {
  function a(a) {
    var e = j;
    r(a) && (e = B(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, e)
  }
  function b(a) {
    Zd.call(j, a, ae.call(j));
    return $d.call(j, ae.call(j))
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return b.call(this, a)
  };
  return a
}();
cb.number = i;
db.number = function(a) {
  return nb.call(j, S.call(j, a))
};
qb.prototype.G = i;
qb.prototype.B = function(a, b) {
  return Z.call(j, Wd, "(", " ", ")", b, a)
};
T.prototype.G = i;
T.prototype.B = function(a, b) {
  return Z.call(j, Wd, "(", " ", ")", b, a)
};
cb["boolean"] = i;
db["boolean"] = function(a) {
  return nb.call(j, S.call(j, a))
};
Kd.prototype.G = i;
Kd.prototype.B = function(a, b) {
  return Z.call(j, Wd, "#{", " ", "}", b, a)
};
cb.string = i;
db.string = function(a, b) {
  return Ob.call(j, a) ? nb.call(j, S.call(j, ":", function() {
    var b = Od.call(j, a);
    return s(b) ? S.call(j, b, "/") : j
  }(), Nd.call(j, a))) : Pb.call(j, a) ? nb.call(j, S.call(j, function() {
    var b = Od.call(j, a);
    return s(b) ? S.call(j, b, "/") : j
  }(), Nd.call(j, a))) : nb.call(j, s("\ufdd0'readably".call(j, b)) ? na.call(j, a) : a)
};
Dd.prototype.G = i;
Dd.prototype.B = function(a, b) {
  return Z.call(j, Wd, "(", " ", ")", b, a)
};
Fd.prototype.G = i;
Fd.prototype.B = function(a, b) {
  return Z.call(j, function(a) {
    return Z.call(j, Wd, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
fd.prototype.G = i;
fd.prototype.B = function(a, b) {
  return Z.call(j, Wd, "[", " ", "]", b, a)
};
mc.prototype.G = i;
mc.prototype.B = function(a, b) {
  return Z.call(j, Wd, "(", " ", ")", b, a)
};
cb.array = i;
db.array = function(a, b) {
  return Z.call(j, Wd, "#<Array [", ", ", "]>", b, a)
};
cb["function"] = i;
db["function"] = function(a) {
  return nb.call(j, "#<", S.call(j, a), ">")
};
nc.prototype.G = i;
nc.prototype.B = function() {
  return nb.call(j, "()")
};
qc.prototype.G = i;
qc.prototype.B = function(a, b) {
  return Z.call(j, Wd, "(", " ", ")", b, a)
};
Pd.prototype.G = i;
Pd.prototype.B = function(a, b) {
  return Z.call(j, Wd, "(", " ", ")", b, a)
};
Ed.prototype.G = i;
Ed.prototype.B = function(a, b) {
  return Z.call(j, Wd, "(", " ", ")", b, a)
};
function ce(a, b, d, e) {
  this.state = a;
  this.k = b;
  this.cb = d;
  this.eb = e
}
p = ce.prototype;
p.I = function(a) {
  return fa.call(j, a)
};
p.Za = function(a, b, d) {
  var e = J.call(j, this.eb);
  if(s(e)) {
    var f = E.call(j, e);
    M.call(j, f, 0, j);
    for(M.call(j, f, 1, j);;) {
      var g = f, f = M.call(j, g, 0, j), g = M.call(j, g, 1, j);
      g.call(j, f, a, b, d);
      e = C.call(j, e);
      if(s(e)) {
        f = e, e = E.call(j, f), g = f, f = e, e = g
      }else {
        return j
      }
    }
  }else {
    return j
  }
};
p.G = i;
p.B = function(a, b) {
  return wc.call(j, V(["#<Atom: "]), db.call(j, this.state, b), ">")
};
p.D = i;
p.F = n("k");
p.$a = n("state");
p.n = function(a, b) {
  return a === b
};
var de = function() {
  function a(a) {
    return new ce(a, j, j, j)
  }
  var b = j, d = function() {
    function a(d, e) {
      var k = j;
      r(e) && (k = B(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, d, k)
    }
    function b(a, d) {
      var e = R.call(j, d) ? U.call(j, H, d) : d, f = P.call(j, e, "\ufdd0'validator"), e = P.call(j, e, "\ufdd0'meta");
      return new ce(a, e, f, j)
    }
    a.h = 1;
    a.c = function(a) {
      var d = E(a), a = F(a);
      return b.call(this, d, a)
    };
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return d.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  b.h = 1;
  b.c = d.c;
  b.i = a;
  b.a = d;
  return b
}();
function ee(a, b) {
  var d = a.cb;
  s(d) && !s(d.call(j, b)) && c(Error(S.call(j, "Assert failed: ", "Validator rejected reference state", "\n", sb.call(j, Ab(nb("\ufdd1'validate", "\ufdd1'new-value"), H("\ufdd0'line", 4963))))));
  d = a.state;
  a.state = b;
  eb.call(j, a, d, b);
  return b
}
var fe = function() {
  function a(a, b, d, e, f) {
    return ee.call(j, a, b.call(j, a.state, d, e, f))
  }
  function b(a, b, d, e) {
    return ee.call(j, a, b.call(j, a.state, d, e))
  }
  function d(a, b, d) {
    return ee.call(j, a, b.call(j, a.state, d))
  }
  function e(a, b) {
    return ee.call(j, a, b.call(j, a.state))
  }
  var f = j, g = function() {
    function a(b, d, e, f, g, h) {
      var x = j;
      r(h) && (x = B(Array.prototype.slice.call(arguments, 5), 0));
      return ee.call(j, b, U.call(j, d, b.state, e, f, g, x))
    }
    a.h = 5;
    a.c = function(a) {
      var b = E(a), d = E(C(a)), e = E(C(C(a))), f = E(C(C(C(a)))), g = E(C(C(C(C(a))))), a = F(C(C(C(C(a)))));
      return ee.call(j, b, U.call(j, d, b.state, e, f, g, a))
    };
    return a
  }(), f = function(f, k, l, v, w, z) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return b.call(this, f, k, l, v);
      case 5:
        return a.call(this, f, k, l, v, w);
      default:
        return g.apply(this, arguments)
    }
    c("Invalid arity: " + arguments.length)
  };
  f.h = 5;
  f.c = g.c;
  f.a = e;
  f.f = d;
  f.sa = b;
  f.Ga = a;
  f.Qa = g;
  return f
}();
function $(a) {
  return Sa.call(j, a)
}
ac = function() {
  function a(a) {
    return Math.random() * a
  }
  function b() {
    return d.call(j, 1)
  }
  var d = j, d = function(d) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, d)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.Ea = b;
  d.i = a;
  return d
}();
cc = function(a) {
  return Math.floor(Math.random() * a)
};
de.call(j, function() {
  return Y(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], [Y([], []), Y([], []), Y([], [])])
}.call(j));
function ie(a) {
  return document.getElementById(Nd(a))
}
function je(a) {
  return Nb(a) ? a : Ob(a) ? Nd(a) : S.i(a)
}
function ke(a, b) {
  var d = document.createElement(Nd("\ufdd0'canvas"));
  d.width = a;
  d.height = b;
  return d
}
function le(a, b) {
  return a + (cc(b) - cc(b))
}
;var me = de.i(oc);
function ne(a) {
  for(var b = Array(a), d = 0;;) {
    if(d < a) {
      b[d] = 0, d += 1
    }else {
      break
    }
  }
  return b
}
function oe(a, b, d, e, f, g, h, k, l, v, w) {
  this.A = a;
  this.K = b;
  this.map = d;
  this.j = e;
  this.Q = f;
  this.M = g;
  this.N = h;
  this.S = k;
  this.T = l;
  this.d = v;
  this.b = w;
  9 < arguments.length ? (this.d = v, this.b = w) : this.b = this.d = j
}
p = oe.prototype;
p.I = function(a) {
  return rb(a)
};
p.ja = function(a, b) {
  return y.f(a, b, j)
};
p.ka = function(a, b, d) {
  return"\ufdd0'w" === b ? this.A : "\ufdd0'h" === b ? this.K : "\ufdd0'map" === b ? this.map : "\ufdd0'items" === b ? this.j : "\ufdd0'item-posns" === b ? this.Q : "\ufdd0'sx" === b ? this.M : "\ufdd0'sy" === b ? this.N : "\ufdd0'nx" === b ? this.S : "\ufdd0'ny" === b ? this.T : P.f(this.b, b, d)
};
p.xa = function(a, b, d) {
  return s(A.call(j, "\ufdd0'w", b)) ? new oe(d, this.K, this.map, this.j, this.Q, this.M, this.N, this.S, this.T, this.d, this.b) : s(A.call(j, "\ufdd0'h", b)) ? new oe(this.A, d, this.map, this.j, this.Q, this.M, this.N, this.S, this.T, this.d, this.b) : s(A.call(j, "\ufdd0'map", b)) ? new oe(this.A, this.K, d, this.j, this.Q, this.M, this.N, this.S, this.T, this.d, this.b) : s(A.call(j, "\ufdd0'items", b)) ? new oe(this.A, this.K, this.map, d, this.Q, this.M, this.N, this.S, this.T, this.d, this.b) : 
  s(A.call(j, "\ufdd0'item-posns", b)) ? new oe(this.A, this.K, this.map, this.j, d, this.M, this.N, this.S, this.T, this.d, this.b) : s(A.call(j, "\ufdd0'sx", b)) ? new oe(this.A, this.K, this.map, this.j, this.Q, d, this.N, this.S, this.T, this.d, this.b) : s(A.call(j, "\ufdd0'sy", b)) ? new oe(this.A, this.K, this.map, this.j, this.Q, this.M, d, this.S, this.T, this.d, this.b) : s(A.call(j, "\ufdd0'nx", b)) ? new oe(this.A, this.K, this.map, this.j, this.Q, this.M, this.N, d, this.T, this.d, this.b) : 
  s(A.call(j, "\ufdd0'ny", b)) ? new oe(this.A, this.K, this.map, this.j, this.Q, this.M, this.N, this.S, d, this.d, this.b) : new oe(this.A, this.K, this.map, this.j, this.Q, this.M, this.N, this.S, this.T, this.d, Q.f(this.b, b, d))
};
p.call = function(a, b, d) {
  a = b + this.A * d;
  return a < this.map.length ? this.map[a] : 0
};
p.O = function(a, b) {
  return Ib(b) ? Ka(a, u.a(b, 0), u.a(b, 1)) : Tb.f(Ea, a, b)
};
p.H = function() {
  return J(wc.a(V([X("\ufdd0'w", this.A), X("\ufdd0'h", this.K), X("\ufdd0'map", this.map), X("\ufdd0'items", this.j), X("\ufdd0'item-posns", this.Q), X("\ufdd0'sx", this.M), X("\ufdd0'sy", this.N), X("\ufdd0'nx", this.S), X("\ufdd0'ny", this.T)]), this.b))
};
p.G = i;
p.B = function(a, b) {
  return Z(function(a) {
    return Z(Wd, "", " ", "", b, a)
  }, S("#", "ld23.gen.Level", "{"), ", ", "}", b, wc.a(V([X("\ufdd0'w", this.A), X("\ufdd0'h", this.K), X("\ufdd0'map", this.map), X("\ufdd0'items", this.j), X("\ufdd0'item-posns", this.Q), X("\ufdd0'sx", this.M), X("\ufdd0'sy", this.N), X("\ufdd0'nx", this.S), X("\ufdd0'ny", this.T)]), this.b))
};
p.P = function() {
  return 9 + yb(this.b)
};
p.n = function(a, b) {
  var d = a.constructor === b.constructor;
  return d ? kd(a, b) : d
};
p.J = function(a, b) {
  return new oe(this.A, this.K, this.map, this.j, this.Q, this.M, this.N, this.S, this.T, b, this.b)
};
p.D = i;
p.F = n("d");
p.Da = i;
p.Aa = function(a, b) {
  return Sb(Md("\ufdd0'items,\ufdd0'map,\ufdd0'item-posns,\ufdd0'sy,\ufdd0'sx,\ufdd0'h,\ufdd0'ny,\ufdd0'nx,\ufdd0'w".split(",")), b) ? zb.a(Ab(Sc(Y([], []), a), this.d), b) : new oe(this.A, this.K, this.map, this.j, this.Q, this.M, this.N, this.S, this.T, this.d, Bc(zb.a(this.b, b)))
};
function pe(a, b, d, e, f, g, h, k, l) {
  this.color = a;
  this.$ = b;
  this.ca = d;
  this.W = e;
  this.V = f;
  this.name = g;
  this.id = h;
  this.d = k;
  this.b = l;
  7 < arguments.length ? (this.d = k, this.b = l) : this.b = this.d = j
}
p = pe.prototype;
p.I = function(a) {
  return rb(a)
};
p.ja = function(a, b) {
  return y.f(a, b, j)
};
p.ka = function(a, b, d) {
  return"\ufdd0'color" === b ? this.color : "\ufdd0'solid?" === b ? this.$ : "\ufdd0'crystal?" === b ? this.ca : "\ufdd0'liq?" === b ? this.W : "\ufdd0'hazard" === b ? this.V : "\ufdd0'name" === b ? this.name : "\ufdd0'id" === b ? this.id : P.f(this.b, b, d)
};
p.xa = function(a, b, d) {
  return s(A.call(j, "\ufdd0'color", b)) ? new pe(d, this.$, this.ca, this.W, this.V, this.name, this.id, this.d, this.b) : s(A.call(j, "\ufdd0'solid?", b)) ? new pe(this.color, d, this.ca, this.W, this.V, this.name, this.id, this.d, this.b) : s(A.call(j, "\ufdd0'crystal?", b)) ? new pe(this.color, this.$, d, this.W, this.V, this.name, this.id, this.d, this.b) : s(A.call(j, "\ufdd0'liq?", b)) ? new pe(this.color, this.$, this.ca, d, this.V, this.name, this.id, this.d, this.b) : s(A.call(j, "\ufdd0'hazard", 
  b)) ? new pe(this.color, this.$, this.ca, this.W, d, this.name, this.id, this.d, this.b) : s(A.call(j, "\ufdd0'name", b)) ? new pe(this.color, this.$, this.ca, this.W, this.V, d, this.id, this.d, this.b) : s(A.call(j, "\ufdd0'id", b)) ? new pe(this.color, this.$, this.ca, this.W, this.V, this.name, d, this.d, this.b) : new pe(this.color, this.$, this.ca, this.W, this.V, this.name, this.id, this.d, Q.f(this.b, b, d))
};
p.O = function(a, b) {
  return Ib(b) ? Ka(a, u.a(b, 0), u.a(b, 1)) : Tb.f(Ea, a, b)
};
p.H = function() {
  return J(wc.a(V([X("\ufdd0'color", this.color), X("\ufdd0'solid?", this.$), X("\ufdd0'crystal?", this.ca), X("\ufdd0'liq?", this.W), X("\ufdd0'hazard", this.V), X("\ufdd0'name", this.name), X("\ufdd0'id", this.id)]), this.b))
};
p.G = i;
p.B = function(a, b) {
  return Z(function(a) {
    return Z(Wd, "", " ", "", b, a)
  }, S("#", "ld23.gen.Tile", "{"), ", ", "}", b, wc.a(V([X("\ufdd0'color", this.color), X("\ufdd0'solid?", this.$), X("\ufdd0'crystal?", this.ca), X("\ufdd0'liq?", this.W), X("\ufdd0'hazard", this.V), X("\ufdd0'name", this.name), X("\ufdd0'id", this.id)]), this.b))
};
p.P = function() {
  return 7 + yb(this.b)
};
p.n = function(a, b) {
  var d = a.constructor === b.constructor;
  return d ? kd(a, b) : d
};
p.J = function(a, b) {
  return new pe(this.color, this.$, this.ca, this.W, this.V, this.name, this.id, b, this.b)
};
p.D = i;
p.F = n("d");
p.Da = i;
p.Aa = function(a, b) {
  return Sb(Md("\ufdd0'liq?,\ufdd0'hazard,\ufdd0'name,\ufdd0'color,\ufdd0'crystal?,\ufdd0'solid?,\ufdd0'id".split(",")), b) ? zb.a(Ab(Sc(Y([], []), a), this.d), b) : new pe(this.color, this.$, this.ca, this.W, this.V, this.name, this.id, this.d, Bc(zb.a(this.b, b)))
};
var qe = de.i(0);
function re(a, b, d, e, f, g) {
  var h = $(qe);
  fe.a(qe, ob);
  return new pe(a, b, d, e, f, g, S.i(h))
}
var se = re("black", i, m, m, 0, "\ufdd0'empty"), te = re("#010914", m, m, i, 1, "\ufdd0'sea"), ue = re("lightslategray", m, m, m, 0, "\ufdd0'ground"), ve = re("red", m, m, i, 10, "\ufdd0'lava"), we = re("SkyBlue", m, m, m, 0, "\ufdd0'glass"), xe = re("Chartreuse", i, i, m, 0, "\ufdd0'gcrystal"), ye = re("MediumAquaMarine", i, i, m, 0, "\ufdd0'bcrystal"), ze = re("Orchid", i, i, m, 0, "\ufdd0'pcrystal"), Ae = re("DarkOrange", i, i, m, 0, "\ufdd0'crystal"), Be = re("yellow", i, m, m, 0, "\ufdd0'ship"), 
Ce = re("lightslategray", m, m, m, 0, "\ufdd0'radar"), De = re("magenta", m, m, m, 0, "\ufdd0'engine"), Ee = V([se, te, ue, ve, we, xe, ye, ze, Ae]);
function Fe(a) {
  return a === ue
}
function Ge(a, b, d) {
  function e(d, e) {
    return(d & a - 1) + a * (e & b - 1)
  }
  for(var f = ne(a * b), g = 0;;) {
    if(g < a) {
      for(var h = 0;;) {
        if(h < b) {
          f[e.call(j, g, h)] = ac.i(2) - 1, h += d
        }else {
          break
        }
      }
      g += d
    }else {
      break
    }
  }
  for(var h = 1 / a, k = 1;;) {
    for(var g = Math.floor.call(j, d / 2), l = function(a, b) {
      return function(d, e, g, h) {
        return(ac.i(2) - 1) * a * b + (f[d] + f[e] + f[g] + f[h]) / 4
      }
    }(d, h, k), v = a, w = d, z = b, O = d, x = 0;;) {
      if(x < v) {
        for(var D = 0;;) {
          if(D < z) {
            f[e.call(j, x + g, D + g)] = l.call(j, e.call(j, x, D), e.call(j, x + d, D), e.call(j, x, D + d), e.call(j, x + d, D + d)), D += O
          }else {
            break
          }
        }
        x += w
      }else {
        break
      }
    }
    v = a;
    w = d;
    z = b;
    O = d;
    for(x = 0;;) {
      if(x < v) {
        for(D = 0;;) {
          if(D < z) {
            f[e.call(j, x + g, D)] = l.call(j, e.call(j, x, D), e.call(j, x + d, D), e.call(j, x + g, D + g), e.call(j, x + g, D - g)), f[e.call(j, x, D + g)] = l.call(j, e.call(j, x, D), e.call(j, x, D + d), e.call(j, x + g, D + g), e.call(j, x - g, D + g)), D += O
          }else {
            break
          }
        }
        x += w
      }else {
        break
      }
    }
    if(1 < g) {
      h *= k + 0.8, k *= 0.3, d = g
    }else {
      break
    }
  }
  var aa = a * b;
  return function(a) {
    return f[a % aa]
  }
}
U.a(H, Pc.a(pc, function(a, b) {
  return function e(b, g) {
    return new T(j, m, function() {
      var h = J.call(j, g);
      return s(h) ? I.call(j, a.call(j, b, E.call(j, h)), e.call(j, b + 1, F.call(j, h))) : j
    })
  }.call(j, 0, b)
}(X, Ee)));
var He = function() {
  function a(a) {
    var e = j;
    r(a) && (e = B(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, e)
  }
  function b(a) {
    var a = U.a(H, a), a = R(a) ? U.a(H, a) : a, b = P.f(a, "\ufdd0'okay-loc?", Fc()), f = P.f(a, "\ufdd0'jitter", 10), g = P.f(a, "\ufdd0'rarity", 0.0010), h = P.f(a, "\ufdd0'spread", 1), k = P.f(a, "\ufdd0'clusters", 100), l = P.f(a, "\ufdd0'size", 1), v = P.f(a, "\ufdd0'transforms", Md([]));
    return function(a) {
      for(var a = R(a) ? U.a(H, a) : a, d = P.a(a, "\ufdd0'map"), O = P.a(a, "\ufdd0'h"), x = P.a(a, "\ufdd0'w"), D = Math.floor.call(j, x * O * g), aa = 0;;) {
        if(aa < D) {
          var N = cc(x), ka = cc(O);
          if(s(b.call(j, N / x, ka / O))) {
            for(var bd = l, Va = 0;;) {
              if(Va < bd) {
                for(var K = N + (cc(2 * l + 1) - l), xa = ka + (cc(2 * l + 1) - l), la = k, Wa = 0;;) {
                  if(Wa < la) {
                    for(var oa = le.call(j, K, f), W = le.call(j, xa, f), Jb = oa + h, Fa = W - (h - 1), W = W + h, oa = oa - (h - 1);;) {
                      if(oa < Jb) {
                        for(var pa = Fa;;) {
                          if(pa < W) {
                            var ga;
                            ga = void 0;
                            ga = (ga = -1 < oa) ? oa < x : ga;
                            s(ga) && (ga = (ga = -1 < pa) ? pa < O : ga);
                            s(ga) && (ga = v.call(j, d[oa + pa * x]), s(ga) && (d[oa + pa * x] = ga));
                            pa += 1
                          }else {
                            break
                          }
                        }
                        oa += 1
                      }else {
                        break
                      }
                    }
                    Wa += 1
                  }else {
                    break
                  }
                }
                Va += 1
              }else {
                break
              }
            }
          }
          aa += 1
        }else {
          break
        }
      }
      return a
    }
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return b.call(this, a)
  };
  return a
}(), Ie = V([xe, ye, ze, Ae, Ae]), Je = He("\ufdd0'transforms", function(a) {
  a = Y([ue], [function() {
    return M.call(j, Ie, cc.call(j, yb.call(j, Ie)))
  }]).call(j, a);
  return s(a) ? a.call(j) : j
}, "\ufdd0'rarity", 1 / 1800, "\ufdd0'jitter", 10);
fe.f(me, xb, Je);
var Ke = He("\ufdd0'transforms", Y([ue], [we]), "\ufdd0'rarity", 1 / 3E3, "\ufdd0'size", 5, "\ufdd0'spread", 2, "\ufdd0'jitter", 5);
fe.f(me, xb, Ke);
function Le(a, b) {
  return Math.abs.call(j, a - b)
}
function Me(a, b) {
  return 3 * Math.abs.call(j, a - b) - 2
}
function Ne(a, b) {
  for(var d = Ge(a, b, 16), e = Ge(a, b, 16), f = Ge(a, b, 16), g = Ge(a, b, 32), h = Ge(a, b, 32), k = ne(a * b), l = 0;;) {
    if(l < a) {
      for(var v = 0;;) {
        if(v < b) {
          var w = l + v * a, z = Me(Le(d.call(j, w), e.call(j, w)), f.call(j, w)), O = Me(g.call(j, w), h.call(j, w)) + 1 - 20 * Math.pow.call(j, Math.abs.call(j, 2 * (l / (a - 1)) - 1) > Math.abs.call(j, 2 * (v / (b - 1)) - 1) ? Math.abs.call(j, 2 * (l / (a - 1)) - 1) : Math.abs.call(j, 2 * (v / (b - 1)) - 1), 16);
          k[w] = M.a(Ee, -0.5 > O ? 1 : function() {
            var a = 0.5 < O;
            return a ? -1.5 > z : a
          }() ? 3 : 2);
          v += 1
        }else {
          break
        }
      }
      l += 1
    }else {
      break
    }
  }
  return Je.call(j, Ke.call(j, new oe(a, b, k, Y([], []), Y([], []), -1, -1, -1, -1)))
}
;function Oe(a) {
  return a.getContext("2d")
}
function Pe(a, b) {
  a.fillStyle = b
}
function Qe(a, b, d, e, f, g) {
  a.beginPath();
  a.moveTo(b, d + g);
  a.lineTo(b, d + f + -g);
  a.quadraticCurveTo(b, d + f, b + g, d + f);
  a.lineTo(b + e + -g, d + f);
  a.quadraticCurveTo(b + e, d + f, b + e, d + f + -g);
  a.lineTo(b + e, d + g);
  a.quadraticCurveTo(b + e, d, b + e + -g, d);
  a.lineTo(b + g, d);
  a.quadraticCurveTo(b, d, b, d + g);
  a.closePath();
  return a
}
function Re(a, b) {
  var d = Oe(a);
  d.fillStyle = b;
  d.fillRect(0, 0, a.width, a.height);
  return d
}
Qe = function(a, b, d, e, f, g) {
  a.beginPath();
  a.moveTo(b, d + g);
  a.lineTo(b, d + f + -g);
  a.quadraticCurveTo(b, d + f, b + g, d + f);
  a.lineTo(b + e + -g, d + f);
  a.quadraticCurveTo(b + e, d + f, b + e, d + f + -g);
  a.lineTo(b + e, d + g);
  a.quadraticCurveTo(b + e, d, b + e + -g, d);
  a.lineTo(b + g, d);
  a.quadraticCurveTo(b, d, b, d + g);
  a.closePath();
  return a
};
function Se(a, b) {
  var d = Oe(a);
  d.fillStyle = "white";
  d.font = "15px monospace";
  for(var e = yb(b), f = 0;;) {
    if(f < e) {
      var g = M.a(b, f), h = (a.width - d.measureText(g).width) / 2, k = 30 * f + (a.height - 30 * yb(b)) / 2;
      d.fillText(g, h, k);
      f += 1
    }else {
      return j
    }
  }
}
function Te(a, b) {
  a.save();
  a.beginPath();
  a.scale(1, s(b) ? -1 : 1);
  a.moveTo(15, 7);
  a.lineTo(15, 0);
  a.lineTo(0, 0);
  a.lineTo(0, 3);
  a.quadraticCurveTo(0, 7, 9, 7);
  a.lineTo(15, 7);
  a.closePath();
  a.restore()
}
function Ue(a) {
  a.fillStyle = "#ccc";
  a.strokeStyle = "black";
  a.lineWidth = 0.3;
  a.scale(3, 3);
  a.save();
  a.translate(15, 13);
  Te(a, m);
  a.restore();
  a.fill();
  a.stroke();
  a.beginPath();
  a.moveTo(16, 0);
  a.lineTo(31, 0);
  a.quadraticCurveTo(32, 0, 32, 1);
  a.lineTo(32, 15);
  a.quadraticCurveTo(32, 16, 31, 16);
  a.lineTo(16, 16);
  a.quadraticCurveTo(4, 14, 0, 8);
  a.quadraticCurveTo(4, 2, 16, 0);
  a.closePath();
  a.save();
  Pe(a, function() {
    var b = a.createRadialGradient(32, 0, 3, 24, 4, 15);
    b.addColorStop(0.1, "#474747");
    b.addColorStop(0.8, "#d6d6d6");
    return b
  }());
  a.fill();
  a.restore();
  a.stroke();
  a.beginPath();
  a.moveTo(16, 4);
  a.lineTo(23, 4);
  a.quadraticCurveTo(24, 4, 24, 5);
  a.lineTo(24, 11);
  a.quadraticCurveTo(24, 12, 23, 12);
  a.lineTo(16, 12);
  a.quadraticCurveTo(8, 12, 4, 8);
  a.quadraticCurveTo(8, 4, 16, 4);
  a.closePath();
  Pe(a, function() {
    var b = a.createLinearGradient(0, 0, 32, 16);
    b.addColorStop(0.3, "#99ccff");
    b.addColorStop(0.5, "#d0e8ff");
    b.addColorStop(0.7, "#99ccff");
    return b
  }());
  a.fill();
  a.save();
  a.globalAlpha = 0.7;
  a.stroke();
  a.restore();
  a.save();
  a.clip();
  a.translate(0, -3);
  a.strokeStyle = "#7198bd";
  a.beginPath();
  a.moveTo(14, 7);
  a.lineTo(20, 12);
  a.moveTo(19, 11);
  a.lineTo(20, 10);
  a.moveTo(11, 10);
  a.lineTo(14, 13);
  a.closePath();
  a.stroke();
  a.strokeStyle = "#4c637e";
  a.beginPath();
  a.moveTo(13, 7);
  a.lineTo(16, 9);
  a.moveTo(14, 8);
  a.lineTo(11, 11);
  a.lineTo(9, 11);
  a.moveTo(12, 10);
  a.lineTo(13, 11);
  a.closePath();
  a.stroke();
  a.restore()
}
ke.call(j);
function Ve(a, b) {
  var d = Tb.f(function(a, d) {
    a[d.id] = b.call(j, d);
    return a
  }, {}, a);
  return function(a) {
    return d[a.id]
  }
}
var We = Ve(V([te, ve, ue, we]), function(a) {
  var a = a.color, b = ke.call(j, 48, 48), d = Oe(b);
  d.fillStyle = a;
  d.strokeStyle = "black";
  d.beginPath();
  d.moveTo(16, 0);
  d.bezierCurveTo(20, 2, 28, 2, 32, 0);
  d.quadraticCurveTo(48, 0, 48, 16);
  d.bezierCurveTo(46, 20, 46, 28, 48, 32);
  d.quadraticCurveTo(48, 48, 32, 48);
  d.bezierCurveTo(28, 46, 20, 46, 16, 48);
  d.quadraticCurveTo(0, 48, 0, 32);
  d.bezierCurveTo(2, 28, 2, 20, 0, 16);
  d.quadraticCurveTo(0, 0, 16, 0);
  d.closePath();
  d.fill();
  d.globalAlpha = 0.4;
  d.stroke();
  return b
}), Xe = Ve(Ie, function(a) {
  var b = ke.call(j, 32, 32), d = Oe(b);
  d.fillStyle = a.color;
  d.save();
  d.beginPath();
  d.moveTo(2, 18);
  d.lineTo(3, 7);
  d.lineTo(10, 13);
  d.lineTo(12, 24);
  d.lineTo(10, 13);
  d.lineTo(13, 6);
  d.lineTo(16, 2);
  d.lineTo(21, 6);
  d.lineTo(21, 15);
  d.lineTo(22, 23);
  d.lineTo(21, 15);
  d.lineTo(25, 6);
  d.lineTo(29, 14);
  d.lineTo(26, 28);
  d.lineTo(5, 27);
  d.lineTo(2, 18);
  d.closePath();
  d.fill();
  d.strokeStyle = "black";
  d.globalAlpha = 0.6;
  d.stroke();
  d.beginPath();
  d.moveTo(2, 18);
  d.lineTo(8, 12);
  d.moveTo(5, 12);
  d.lineTo(7, 23);
  d.moveTo(12, 7);
  d.lineTo(15, 8);
  d.lineTo(19, 8);
  d.lineTo(21, 6);
  d.moveTo(16, 5);
  d.lineTo(15, 7);
  d.lineTo(15, 21);
  d.moveTo(19, 8);
  d.lineTo(18, 22);
  d.moveTo(22, 13);
  d.lineTo(24, 15);
  d.lineTo(27, 15);
  d.lineTo(28, 13);
  d.moveTo(25, 15);
  d.lineTo(23, 26);
  d.closePath();
  d.stroke();
  d.restore();
  return b
}), Ye = hd(Ic(12, Lc.i(ac))), Ze = ke.call(j, 128, 128);
function $e(a) {
  for(var b = Oe(Ze), d = 0;;) {
    if(128 > d) {
      for(var e = 0;;) {
        if(128 > e) {
          var f = b, g = a.call(j, d, e).color;
          f.fillStyle = g;
          f.fillRect(d, e, 1, 1);
          e += 1
        }else {
          break
        }
      }
      d += 1
    }else {
      return j
    }
  }
}
var af = de.i(0);
function bf(a, b) {
  var d = R(b) ? U.a(H, b) : b, e = P.a(d, "\ufdd0'yo"), f = P.a(d, "\ufdd0'xo"), g = P.a(d, "\ufdd0'level"), h = P.a(d, "\ufdd0'player"), k = Oe(a);
  k.save();
  var l = R(g) ? U.a(H, g) : g, v = P.a(l, "\ufdd0'items"), w = P.a(l, "\ufdd0'sy"), z = P.a(l, "\ufdd0'sx"), g = Oe(a), O = f % 32, x = e % 32, D = Math.floor.call(j, f / 32), aa = Math.floor.call(j, e / 32), N = de.i(m);
  Id(v);
  Re(a, "gray");
  g.save();
  for(var v = Math.ceil.call(j, (a.height + x) / 32), ka = 0;;) {
    if(ka < v) {
      for(var bd = Math.ceil.call(j, (a.width + O) / 32), Va = 0;;) {
        if(Va < bd) {
          var K = Va + D, xa = ka + aa, la = l.call(j, K, xa), Wa = 32 * Va - O, oa = 32 * ka - x, W = We.call(j, la);
          if(s(W)) {
            var Jb = W, W = g;
            W.save();
            W.translate(Wa, oa);
            var Fa = W, pa = l, ga = K, bc = xa, yc = pa.call(j, ga, bc), zc = L(yc === pa.call(j, ga, bc - 1)), ge = L(yc === pa.call(j, ga, bc + 1)), he = L(yc === pa.call(j, ga - 1, bc)), pa = L(yc === pa.call(j, ga + 1, bc));
            Fa.drawImage(Jb, 16 * (he ? 0 : 1), 16 * (zc ? 0 : 1), 16, 16, 0, 0, 16, 16);
            Fa.drawImage(Jb, 16 * (pa ? 2 : 1), 16 * (zc ? 0 : 1), 16, 16, 16, 0, 16, 16);
            Fa.drawImage(Jb, 16 * (he ? 0 : 1), 16 * (ge ? 2 : 1), 16, 16, 0, 16, 16, 16);
            Fa.drawImage(Jb, 16 * (pa ? 2 : 1), 16 * (ge ? 2 : 1), 16, 16, 16, 16, 16, 16);
            W.restore()
          }
          W = Xe.call(j, la);
          s(W) && g.drawImage(W, Wa, oa);
          ((K = K === z) ? xa === w : K) && ee(N, V([Wa, oa]));
          if("\ufdd0'radar" === la.name) {
            xa = g;
            xa.save();
            xa.translate(Wa + 1, oa + 1);
            xa.scale(3, 3);
            K = xa;
            K.save();
            K.fillStyle = "green";
            K.strokeStyle = "black";
            K.beginPath();
            K.arc(5, 5, 5, 0, 2 * Math.PI, void 0);
            K.closePath();
            K.stroke();
            K.fill();
            K.clip();
            K.lineWidth = 0.1;
            K.strokeStyle = "rgba(0,255,0,0.7)";
            K.beginPath();
            for(W = 0;;) {
              if(10 > W) {
                Fa = K, Fa.moveTo(0, W), Fa.lineTo(10, W), Fa.moveTo(W, 0), Fa.lineTo(W, 10), W += 1
              }else {
                break
              }
            }
            K.closePath();
            K.stroke();
            K.lineWidth = 0.4;
            K.beginPath();
            K.moveTo(5, 5);
            K.lineTo(5 + 5 / Math.sqrt.call(j, 2), 5 + 5 / Math.sqrt.call(j, 2));
            K.closePath();
            K.stroke();
            K.restore();
            xa.restore()
          }
          if("\ufdd0'engine" === la.name) {
            la = g, la.save(), la.translate(Wa, 16 + oa), la.fillStyle = "#ccc", la.strokeStyle = "black", la.lineWidth = 0.3, la.scale(2, 2), Te(la, i), la.fill(), la.stroke(), la.restore()
          }
          Va += 1
        }else {
          break
        }
      }
      ka += 1
    }else {
      break
    }
  }
  l = $(N);
  s(l) && (l = M.a($(N), 0), N = M.a($(N), 1), g.translate(l, N), Ue(g));
  g.restore();
  k.restore();
  k.save();
  g = R(d) ? U.a(H, d) : d;
  N = P.a(g, "\ufdd0'player");
  g = g.R.call(j, N.x >> 5, N.y >> 5).W;
  h = R(h) ? U.a(H, h) : h;
  N = P.a(h, "\ufdd0'steps");
  l = P.a(h, "\ufdd0'rot");
  P.a(h, "\ufdd0'ey");
  P.a(h, "\ufdd0'ex");
  w = P.a(h, "\ufdd0'y");
  z = P.a(h, "\ufdd0'x");
  h = Oe(a);
  h.save();
  h.fillStyle = "white";
  h.strokeStyle = "white";
  h.save();
  h.translate(z - f, w - e);
  h.rotate(Math.PI / 2 + l);
  e = Math.floor.call(j, N / 10);
  if(s(g)) {
    h.fillStyle = "white", h.strokeStyle = "black", Qe(h, -4, -4, 8, 6, 1), h.fill(), h.stroke(), h.strokeStyle = "white", e = M.a(Ye, e % 12), h.globalAlpha = e, Qe(h, -6, -6, 12, 8, 3)
  }else {
    f = e % 4;
    e = 1 === f;
    f = 3 === f;
    h.fillStyle = "white";
    h.strokeStyle = "black";
    Qe(h, -5, 0, 10, 5, 1);
    h.fill();
    h.stroke();
    h.save();
    Qe(h, -8, -2, 16, 5, 1);
    h.fill();
    h.stroke();
    if(s(s(e) ? e : f)) {
      h.save(), h.scale(s(f) ? -1 : 1, 1), Qe(h, -8, -4, 4, 7, 1), h.fill(), h.stroke(), h.restore()
    }
    h.restore();
    h.fill();
    h.stroke();
    Qe(h, -4, -4, 8, 6, 1);
    h.fill()
  }
  h.stroke();
  h.restore();
  h.restore();
  k.restore();
  k.save();
  e = R(d) ? U.a(H, d) : d;
  P.a(e, "\ufdd0'need-items");
  P.a(e, "\ufdd0'yo");
  P.a(e, "\ufdd0'xo");
  P.a(e, "\ufdd0'level");
  f = P.a(e, "\ufdd0'player");
  d = Oe(a);
  d.save();
  d.fillStyle = "navy";
  d.strokeStyle = "white";
  d.lineWidth = 2;
  d.globalAlpha = 0.7;
  Qe(d, 5, 5, 150, 300, 3);
  d.fill();
  d.stroke();
  d.font = "10px monospace";
  d.fillStyle = "white";
  h = S("X: ", Math.floor.call(j, 100 * (f.x / 32)) / 100);
  d.fillText(h, 15, 25);
  h = S("Y: ", Math.floor.call(j, 100 * (f.y / 32)) / 100);
  d.fillText(h, 15, 40);
  d.save();
  d.translate(15, 25);
  h = f.m;
  d.save();
  d.lineJoin = je.call(j, "\ufdd0'round");
  d.lineCap = je.call(j, "\ufdd0'round");
  d.strokeStyle = "black";
  d.globalAlpha = 1;
  d.scale(5, 5);
  d.lineWidth = 0.3;
  d.fillStyle = "lightslategray";
  d.fillRect(2, 5.5, 15, 2.2);
  d.fillStyle = "#63cd27";
  d.fillRect(2, 5.5, 15 * (h / 100), 2.2);
  d.strokeRect(2, 5.5, 15, 2.2);
  d.fillStyle = "red";
  d.beginPath();
  d.moveTo(2, 5.5);
  d.bezierCurveTo(3, 4, 5, 5, 2, 8);
  d.bezierCurveTo(-1, 5, 1, 4, 2, 5.5);
  d.closePath();
  d.stroke();
  d.fill();
  d.restore();
  d.restore();
  if(Sb(f.j, "\ufdd0'radar") && (d.translate(15, 90), h = R(e) ? U.a(H, e) : e, e = P.a(h, "\ufdd0'need-items"), f = P.a(h, "\ufdd0'level"), g = P.a(h, "\ufdd0'player"), fe.a(af, ob), h = g.x >> 5, g = g.y >> 5, d.drawImage(Ze, 0, 0), N = $(af) >> 3, Rb.call(j, N) || c(Error(S.call(j, "Argument must be an integer: ", N))), 0 === (N & 1) && (d.fillStyle = "white", d.fillRect(h - 0.5, g - 0.5, 2, 2), G.a("\ufdd0'engine", E(e))))) {
    f = Tc.a(f, V(["\ufdd0'item-posns", "\ufdd0'engine"])), e = M.f(f, 0, j), f = M.f(f, 1, j), d.fillStyle = "purple", d.fillRect(e - 0.5, f - 0.5, 2, 2)
  }
  if(s(s(cf) ? 0 < $(cf) : cf)) {
    e = S("Crystals: ", $(cf)), d.fillText(e, 15, 200)
  }
  d.restore();
  return k.restore()
}
;function df() {
  return ca.navigator ? ca.navigator.userAgent : j
}
va = ua = ta = sa = m;
var ef;
if(ef = df()) {
  var ff = ca.navigator;
  sa = 0 == ef.indexOf("Opera");
  ta = !sa && -1 != ef.indexOf("MSIE");
  ua = !sa && -1 != ef.indexOf("WebKit");
  va = !sa && !ua && "Gecko" == ff.product
}
var gf = ta, hf = va, jf = ua, kf;
a: {
  var lf = "", mf;
  if(sa && ca.opera) {
    var nf = ca.opera.version, lf = "function" == typeof nf ? nf() : nf
  }else {
    if(hf ? mf = /rv\:([^\);]+)(\)|;)/ : gf ? mf = /MSIE\s+([^\);]+)(\)|;)/ : jf && (mf = /WebKit\/(\S+)/), mf) {
      var of = mf.exec(df()), lf = of ? of[1] : ""
    }
  }
  if(gf) {
    var pf, qf = ca.document;
    pf = qf ? qf.documentMode : void 0;
    if(pf > parseFloat(lf)) {
      kf = "" + pf;
      break a
    }
  }
  kf = lf
}
var rf = {};
function sf(a) {
  var b;
  if(!(b = rf[a])) {
    b = 0;
    for(var d = ("" + kf).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0;0 == b && g < f;g++) {
      var h = d[g] || "", k = e[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), v = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = l.exec(h) || ["", "", ""], z = v.exec(k) || ["", "", ""];
        if(0 == w[0].length && 0 == z[0].length) {
          break
        }
        b = ((0 == w[1].length ? 0 : parseInt(w[1], 10)) < (0 == z[1].length ? 0 : parseInt(z[1], 10)) ? -1 : (0 == w[1].length ? 0 : parseInt(w[1], 10)) > (0 == z[1].length ? 0 : parseInt(z[1], 10)) ? 1 : 0) || ((0 == w[2].length) < (0 == z[2].length) ? -1 : (0 == w[2].length) > (0 == z[2].length) ? 1 : 0) || (w[2] < z[2] ? -1 : w[2] > z[2] ? 1 : 0)
      }while(0 == b)
    }
    b = rf[a] = 0 <= b
  }
  return b
}
;!gf || sf("9");
!hf && !gf || gf && sf("9") || hf && sf("1.9.1");
gf && sf("9");
function tf(a) {
  return document.createTextNode(a)
}
function uf(a, b) {
  a.appendChild(b)
}
;function vf(a, b, d) {
  if(Nb.call(j, b)) {
    return a.replace(RegExp(qa.call(j, b), "g"), d)
  }
  if(s(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), d)
  }
  c(S.call(j, "Invalid match arg: ", b))
}
var wf = function() {
  function a(a, b, d) {
    if(1 > d) {
      return hd.call(j, S.call(j, a).split(b))
    }
    for(var h = V([]);;) {
      if(G.call(j, d, 1)) {
        return xb.call(j, h, a)
      }
      var k = Sd.call(j, b, a);
      if(s(k)) {
        var l = k, k = a.indexOf(l), l = a.substring(k + yb.call(j, l)), d = d - 1, h = xb.call(j, h, a.substring(0, k)), a = l
      }else {
        return xb.call(j, h, a)
      }
    }
  }
  function b(a, b) {
    return hd.call(j, S.call(j, a).split(b))
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}();
var xf = Y(["\ufdd0'xhtml", "\ufdd0'svg"], ["http://www.w3.org/1999/xhtml", "http://www.w3.org/2000/svg"]), yf = de.call(j, 0), zf = function() {
  function a(a, b, d) {
    a.setAttribute(Nd.call(j, b), d);
    return a
  }
  function b(a, b) {
    if(s(a)) {
      if(L.call(j, Hb.call(j, b))) {
        return a.getAttribute(Nd.call(j, b))
      }
      var g = J.call(j, b);
      if(s(g)) {
        var h = E.call(j, g);
        M.call(j, h, 0, j);
        for(M.call(j, h, 1, j);;) {
          var k = h, h = M.call(j, k, 0, j), k = M.call(j, k, 1, j);
          d.call(j, a, h, k);
          g = C.call(j, g);
          if(s(g)) {
            h = g, g = E.call(j, h), k = h, h = g, g = k
          }else {
            break
          }
        }
      }
      return a
    }
    return j
  }
  var d = j, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    c("Invalid arity: " + arguments.length)
  };
  d.a = b;
  d.f = a;
  return d
}(), Cf = function Af(b, d) {
  var e = J.call(j, d);
  if(s(e)) {
    for(var f = E.call(j, e);;) {
      if(f === j ? f = j : (Hb.call(j, f) && c("Maps cannot be used as content"), f = Nb.call(j, f) ? tf.call(j, f) : Ib.call(j, f) ? Bf.call(j, f) : R.call(j, f) ? Af.call(j, b, f) : s(f.nodeName) ? f : j), s(f) && uf.call(j, b, f), f = C.call(j, e), s(f)) {
        e = f, f = E.call(j, e)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}, Df = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function Ef(a) {
  var b = M.call(j, a, 0, j), a = ec.call(j, a, 1);
  L.call(j, function() {
    var a = Ob.call(j, b);
    return a ? a : (a = Pb.call(j, b)) ? a : Nb.call(j, b)
  }()) && c(S.call(j, b, " is not a valid tag name."));
  var d = Rd.call(j, Df, Nd.call(j, b));
  M.call(j, d, 0, j);
  var e = M.call(j, d, 1, j), f = M.call(j, d, 2, j), g = M.call(j, d, 3, j), h = function() {
    var a = wf.call(j, e, /:/), b = M.call(j, a, 0, j), a = M.call(j, a, 1, j), d = xf.call(j, hc.call(j, b));
    return s(a) ? V([s(d) ? d : b, a]) : V(["\ufdd0'xhtml".call(j, xf), b])
  }(), d = M.call(j, h, 0, j), h = M.call(j, h, 1, j), f = Sc.call(j, Y([], []), Rc.call(j, function(a) {
    return L.call(j, vb.call(j, a) === j)
  }, Y(["\ufdd0'id", "\ufdd0'class"], [s(f) ? f : j, s(g) ? vf.call(j, g, /\./, " ") : j]))), g = E.call(j, a);
  return Hb.call(j, g) ? V([d, h, Jd.call(j, f, g), C.call(j, a)]) : V([d, h, f, a])
}
var Ff = s(document.createElementNS) ? function(a, b) {
  return document.createElementNS(a, b)
} : function(a, b) {
  return document.createElement(b)
};
function Bf(a) {
  var b = Ef.call(j, a), d = M.call(j, b, 0, j), e = M.call(j, b, 1, j), a = M.call(j, b, 2, j), b = M.call(j, b, 3, j), d = Ff.call(j, d, e);
  zf.call(j, d, a);
  Cf.call(j, d, b);
  return d
}
var Gf = function() {
  function a(a) {
    var e = j;
    r(a) && (e = B(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, e)
  }
  function b(a) {
    a = Gc.call(j, Bf, a);
    return s(vb.call(j, a)) ? a : E.call(j, a)
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return b.call(this, a)
  };
  return a
}();
var Hf = de.i(4E3 + cc(100));
function If() {
  fe.a(Hf, ob);
  return $(Hf)
}
var Jf = fe.a(yf, ob), Kf = function() {
  function a(a) {
    var e = j;
    r(a) && (e = B(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, e)
  }
  function b(a) {
    a = Gf.call(j, V(["\ufdd0'div.entry", I(V(["\ufdd0'h4", S("Journal entry ", If())]), Gc.a(function(a) {
      return Nb(a) ? V(["\ufdd0'p", a]) : a
    }, a))]));
    a.setAttribute("crateGroup", Jf);
    return a
  }
  a.h = 0;
  a.c = function(a) {
    a = J(a);
    return b.call(this, a)
  };
  return a
}(), Lf = Kf("My name is is VQ-18J. I research small planetoids.", V(["\ufdd0'p", "Current subject: ", V(["\ufdd0'span.planet", "Minutiae Prime"])]), "An interesting due to the abundant hydrocarbons present in the seas on\n    its surface. Indication of life?", "Unimportant now. Underestimated gravitational pull, shipwrecked.\n    Hull breached, starboard engine detached, insufficient crystal fulminate\n    to power engines. Radar is missing.", "Probable best course of action:", V(["\ufdd0'p", "Locate my ", 
V(["\ufdd0'span.item", "radar."]), " It has to be around here somewhere..."])), Mf = Kf(V(["\ufdd0'p", "I have located my radar, and as luck would have it, I found my blaster\n    with it. Maybe this will prove useful"]), "I should be able to use this to seek out the items I need to repair my\n    ship and escape.", V(["\ufdd0'p", "I should try to find my ships ", V(["\ufdd0'span.item", "starboard engine"]), " next. It should show as a\n   purple spot on the radar. [author: it is hard to see :(]"])), 
Nf = Kf("I have recovered the engine.  The hard part seems to be over.", "Even with this, my ship won't be space-worthy if I don't do\n   something about that crack in the view-port.", V(["\ufdd0'p", "If only I had some ", V(["\ufdd0'span.item", "glass-like substance"]), ", then I might be able to repair the viewport using my blaster"])), Of = Kf("I have taken some of the blue sand present on the surface of the planet.\n    I was able to use it to make a temporary fix to the hull of my ship.", "Now all that remains is fuel for the engine", 
V(["\ufdd0'p", "Preliminary scans of the planet showed that there was fulminate\n        present in the orange crystals. ", V(["\ufdd0'span.item", "10 orange crystals"]), " should be enough for me to get off this rock for good."])), Pf = Kf("My name is is VQ-18J. I research small planetoids.", V(["\ufdd0'p", "On my last expedition I crashed on ", V(["\ufdd0'span.planet", "Minutia Prime"])]), "Overcoming great odds, I was able to repair my ship, and escape that\n    hell-hole."), Qf = Y(["\ufdd0'radar", 
"\ufdd0'engine", "\ufdd0'glass", "\ufdd0'won"], [Mf, Nf, Of, Pf]);
function Rf(a) {
  be(S("moving from plot point ", a));
  var a = Qf.call(j, a), b = ie.call(j, "\ufdd0'journal");
  b.removeChild(b.lastChild);
  b.appendChild(a);
  return b
}
;za = function(a) {
  return console.log(a)
};
var Sf = Math.pow.call(j, 2, 5), cf = de.i(0);
function Tf(a, b, d, e, f, g, h, k, l) {
  this.R = a;
  this.Z = b;
  this.ea = d;
  this.fa = e;
  this.Y = f;
  this.da = g;
  this.aa = h;
  this.d = k;
  this.b = l;
  7 < arguments.length ? (this.d = k, this.b = l) : this.b = this.d = j
}
p = Tf.prototype;
p.I = function(a) {
  return rb(a)
};
p.ja = function(a, b) {
  return y.f(a, b, j)
};
p.ka = function(a, b, d) {
  return"\ufdd0'level" === b ? this.R : "\ufdd0'player" === b ? this.Z : "\ufdd0'xo" === b ? this.ea : "\ufdd0'yo" === b ? this.fa : "\ufdd0'over?" === b ? this.Y : "\ufdd0'need-items" === b ? this.da : "\ufdd0'won?" === b ? this.aa : P.f(this.b, b, d)
};
p.xa = function(a, b, d) {
  return s(A.call(j, "\ufdd0'level", b)) ? new Tf(d, this.Z, this.ea, this.fa, this.Y, this.da, this.aa, this.d, this.b) : s(A.call(j, "\ufdd0'player", b)) ? new Tf(this.R, d, this.ea, this.fa, this.Y, this.da, this.aa, this.d, this.b) : s(A.call(j, "\ufdd0'xo", b)) ? new Tf(this.R, this.Z, d, this.fa, this.Y, this.da, this.aa, this.d, this.b) : s(A.call(j, "\ufdd0'yo", b)) ? new Tf(this.R, this.Z, this.ea, d, this.Y, this.da, this.aa, this.d, this.b) : s(A.call(j, "\ufdd0'over?", b)) ? new Tf(this.R, 
  this.Z, this.ea, this.fa, d, this.da, this.aa, this.d, this.b) : s(A.call(j, "\ufdd0'need-items", b)) ? new Tf(this.R, this.Z, this.ea, this.fa, this.Y, d, this.aa, this.d, this.b) : s(A.call(j, "\ufdd0'won?", b)) ? new Tf(this.R, this.Z, this.ea, this.fa, this.Y, this.da, d, this.d, this.b) : new Tf(this.R, this.Z, this.ea, this.fa, this.Y, this.da, this.aa, this.d, Q.f(this.b, b, d))
};
p.O = function(a, b) {
  return Ib(b) ? Ka(a, u.a(b, 0), u.a(b, 1)) : Tb.f(Ea, a, b)
};
p.H = function() {
  return J(wc.a(V([X("\ufdd0'level", this.R), X("\ufdd0'player", this.Z), X("\ufdd0'xo", this.ea), X("\ufdd0'yo", this.fa), X("\ufdd0'over?", this.Y), X("\ufdd0'need-items", this.da), X("\ufdd0'won?", this.aa)]), this.b))
};
p.G = i;
p.B = function(a, b) {
  return Z(function(a) {
    return Z(Wd, "", " ", "", b, a)
  }, S("#", "ld23.game.Game", "{"), ", ", "}", b, wc.a(V([X("\ufdd0'level", this.R), X("\ufdd0'player", this.Z), X("\ufdd0'xo", this.ea), X("\ufdd0'yo", this.fa), X("\ufdd0'over?", this.Y), X("\ufdd0'need-items", this.da), X("\ufdd0'won?", this.aa)]), this.b))
};
p.P = function() {
  return 7 + yb(this.b)
};
p.n = function(a, b) {
  var d = a.constructor === b.constructor;
  return d ? kd(a, b) : d
};
p.J = function(a, b) {
  return new Tf(this.R, this.Z, this.ea, this.fa, this.Y, this.da, this.aa, b, this.b)
};
p.D = i;
p.F = n("d");
p.Da = i;
p.Aa = function(a, b) {
  return Sb(Md("\ufdd0'yo,\ufdd0'player,\ufdd0'over?,\ufdd0'won?,\ufdd0'level,\ufdd0'xo,\ufdd0'need-items".split(",")), b) ? zb.a(Ab(Sc(Y([], []), a), this.d), b) : new Tf(this.R, this.Z, this.ea, this.fa, this.Y, this.da, this.aa, this.d, Bc(zb.a(this.b, b)))
};
function Uf(a) {
  var b = a.R, d = a.Z;
  return Q(a, "\ufdd0'xo", (0 < d.x - 320 ? d.x - 320 : 0) < Sf * b.A - 640 ? 0 < d.x - 320 ? d.x - 320 : 0 : Sf * b.A - 640, "\ufdd0'yo", (0 < d.y - 240 ? d.y - 240 : 0) < Sf * b.K - 480 ? 0 < d.y - 240 ? d.y - 240 : 0 : Sf * b.K - 480)
}
function Vf(a, b, d, e, f, g, h, k, l, v, w, z, O, x, D, aa) {
  this.x = a;
  this.y = b;
  this.s = d;
  this.t = e;
  this.w = f;
  this.o = g;
  this.p = h;
  this.q = k;
  this.z = l;
  this.j = v;
  this.m = w;
  this.v = z;
  this.r = O;
  this.u = x;
  this.d = D;
  this.b = aa;
  14 < arguments.length ? (this.d = D, this.b = aa) : this.b = this.d = j
}
p = Vf.prototype;
p.I = function(a) {
  return rb(a)
};
p.ja = function(a, b) {
  return y.f(a, b, j)
};
p.ka = function(a, b, d) {
  return"\ufdd0'x" === b ? this.x : "\ufdd0'y" === b ? this.y : "\ufdd0'ex" === b ? this.s : "\ufdd0'ey" === b ? this.t : "\ufdd0'rot" === b ? this.w : "\ufdd0'destx" === b ? this.o : "\ufdd0'desty" === b ? this.p : "\ufdd0'moving?" === b ? this.q : "\ufdd0'steps" === b ? this.z : "\ufdd0'items" === b ? this.j : "\ufdd0'health" === b ? this.m : "\ufdd0'looking-for" === b ? this.v : "\ufdd0'crystals" === b ? this.r : "\ufdd0'found-item?" === b ? this.u : P.f(this.b, b, d)
};
p.xa = function(a, b, d) {
  return s(A.call(j, "\ufdd0'x", b)) ? new Vf(d, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'y", b)) ? new Vf(this.x, d, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'ex", b)) ? new Vf(this.x, this.y, d, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, 
  "\ufdd0'ey", b)) ? new Vf(this.x, this.y, this.s, d, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'rot", b)) ? new Vf(this.x, this.y, this.s, this.t, d, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'destx", b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, d, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'desty", 
  b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, this.o, d, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'moving?", b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, d, this.z, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'steps", b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, d, this.j, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'items", 
  b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, d, this.m, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'health", b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, d, this.v, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'looking-for", b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, d, this.r, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'crystals", 
  b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, d, this.u, this.d, this.b) : s(A.call(j, "\ufdd0'found-item?", b)) ? new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, d, this.d, this.b) : new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, Q.f(this.b, b, d))
};
p.O = function(a, b) {
  return Ib(b) ? Ka(a, u.a(b, 0), u.a(b, 1)) : Tb.f(Ea, a, b)
};
p.H = function() {
  return J(wc.a(V([X("\ufdd0'x", this.x), X("\ufdd0'y", this.y), X("\ufdd0'ex", this.s), X("\ufdd0'ey", this.t), X("\ufdd0'rot", this.w), X("\ufdd0'destx", this.o), X("\ufdd0'desty", this.p), X("\ufdd0'moving?", this.q), X("\ufdd0'steps", this.z), X("\ufdd0'items", this.j), X("\ufdd0'health", this.m), X("\ufdd0'looking-for", this.v), X("\ufdd0'crystals", this.r), X("\ufdd0'found-item?", this.u)]), this.b))
};
p.G = i;
p.B = function(a, b) {
  return Z(function(a) {
    return Z(Wd, "", " ", "", b, a)
  }, S("#", "ld23.game.Player", "{"), ", ", "}", b, wc.a(V([X("\ufdd0'x", this.x), X("\ufdd0'y", this.y), X("\ufdd0'ex", this.s), X("\ufdd0'ey", this.t), X("\ufdd0'rot", this.w), X("\ufdd0'destx", this.o), X("\ufdd0'desty", this.p), X("\ufdd0'moving?", this.q), X("\ufdd0'steps", this.z), X("\ufdd0'items", this.j), X("\ufdd0'health", this.m), X("\ufdd0'looking-for", this.v), X("\ufdd0'crystals", this.r), X("\ufdd0'found-item?", this.u)]), this.b))
};
p.P = function() {
  return 14 + yb(this.b)
};
p.n = function(a, b) {
  var d = a.constructor === b.constructor;
  return d ? kd(a, b) : d
};
p.J = function(a, b) {
  return new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, b, this.b)
};
p.D = i;
p.F = n("d");
p.Da = i;
p.Aa = function(a, b) {
  return Sb(Md("\ufdd0'destx,\ufdd0'desty,\ufdd0'items,\ufdd0'health,\ufdd0'y,\ufdd0'x,\ufdd0'looking-for,\ufdd0'ey,\ufdd0'moving?,\ufdd0'ex,\ufdd0'found-item?,\ufdd0'rot,\ufdd0'steps,\ufdd0'crystals".split(",")), b) ? zb.a(Ab(Sc(Y([], []), a), this.d), b) : new Vf(this.x, this.y, this.s, this.t, this.w, this.o, this.p, this.q, this.z, this.j, this.m, this.v, this.r, this.u, this.d, Bc(zb.a(this.b, b)))
};
function Wf() {
  for(var a = Ne.call(j, 128, 128), b = R(a) ? U.a(H, a) : a, a = P.a(b, "\ufdd0'map"), d = P.a(b, "\ufdd0'h"), e = P.a(b, "\ufdd0'w"), f = function() {
    for(var a = cc(e), f = cc(d);;) {
      if(Cc(function(a, d) {
        return function(e) {
          return Fe.call(j, b.call(j, a + e.call(j, 0), d + e.call(j, 1)))
        }
      }(a, f), function() {
        return function(a, b) {
          return function xa(d) {
            return new T(j, m, function(a, b) {
              return function() {
                for(var e = d;;) {
                  if(s(J(e))) {
                    var f = E(e), f = J(function(a, b, d, e) {
                      return function zc(f) {
                        return new T(j, m, function(a, b, d, e) {
                          return function() {
                            for(;;) {
                              if(s(J(f))) {
                                var a = E(f);
                                return I(V([e, a]), zc.call(j, F(f)))
                              }
                              return j
                            }
                          }
                        }(a, b, d, e))
                      }
                    }(e, a, b, f).call(j, Qd.i(3)));
                    if(s(f)) {
                      return wc.a(f, xa.call(j, F(e)))
                    }
                    e = F(e)
                  }else {
                    return j
                  }
                }
              }
            }(a, b))
          }
        }(a, f).call(j, Qd.i(3))
      }())) {
        return V([a, f])
      }
      var g = cc(e), h = cc(d), a = g, f = h
    }
  }(), g = M.f(f, 0, j), h = M.f(f, 1, j), k = function() {
    for(var a = le.call(j, g, 20), d = le.call(j, h, 20);;) {
      if(s(Fe.call(j, b.call(j, a, d)))) {
        return V([a, d])
      }
      a = le.call(j, g, 20);
      d = le.call(j, h, 20)
    }
  }(), f = M.f(k, 0, j), k = M.f(k, 1, j), l = function() {
    for(var a = cc(e), f = cc(d);;) {
      if(s(Fe.call(j, b.call(j, a, f)))) {
        return V([a, f])
      }
      a = cc(e);
      f = cc(d)
    }
  }(), v = M.f(l, 0, j), l = M.f(l, 1, j), w = h + 2, z = g + 3, O = h;;) {
    if(O < w) {
      for(var x = g;;) {
        if(x < z) {
          a[x + O * e] = Be, x += 1
        }else {
          break
        }
      }
      O += 1
    }else {
      break
    }
  }
  s(i) && (be(S("found posn for ship at ", g, ", ", h, ".")), be(S("found posn for radar at ", f, ", ", k, ".")), be(S("found posn for engine at ", v, ", ", l, ".")));
  a[f + k * e] = Ce;
  a[v + l * e] = De;
  return Q(b, "\ufdd0'sx", g, "\ufdd0'sy", h, "\ufdd0'items", Y([V([v, l]), V([f, k])], ["\ufdd0'engine", "\ufdd0'radar"]), "\ufdd0'item-posns", Y(["\ufdd0'engine", "\ufdd0'radar"], [V([v, l]), V([f, k])]), "\ufdd0'nx", f, "\ufdd0'ny", k)
}
function Xf(a, b) {
  var d = R(a) ? U.a(H, a) : a, e = P.a(d, "\ufdd0'player"), f = R(e) ? U.a(H, e) : e;
  P.a(f, "\ufdd0'found-item?");
  var e = P.a(f, "\ufdd0'y"), g = P.a(f, "\ufdd0'x");
  P.a(f, "\ufdd0'crystals");
  P.a(f, "\ufdd0'items");
  var f = P.a(d, "\ufdd0'level"), h = P.a(d, "\ufdd0'need-items");
  if(10 <= $(cf)) {
    return Rf.call(j, "\ufdd0'won"), Q.f(d, "\ufdd0'won?", i)
  }
  if(b === j) {
    return d
  }
  g >>= 5;
  e >>= 5;
  Rf.call(j, b);
  f.map[g + e * f.A] = ue;
  return Wc(Wc(Wc(Wc(Wc(d, V(["\ufdd0'player", "\ufdd0'items"]), xb, b), V(["\ufdd0'player", "\ufdd0'looking-for"]), E.call(j, C.call(j, h))), V(["\ufdd0'need-items"]), C), V(["\ufdd0'level", "\ufdd0'items"]), zb, V([g, e])), V(["\ufdd0'level", "\ufdd0'item-posns"]), zb, b)
}
function Yf(a) {
  var a = R(a) ? U.a(H, a) : a, b = P.a(a, "\ufdd0'need-items");
  P.a(a, "\ufdd0'yo");
  P.a(a, "\ufdd0'xo");
  var d = P.a(a, "\ufdd0'player"), e = P.a(a, "\ufdd0'level"), f = d.x >> 5, g = d.y >> 5, h = e.call(j, f, g), k = h.V / 100, l = function() {
    var a = Tc.a(e, V(["\ufdd0'items", V([f, g])]));
    if(s(a)) {
      return a
    }
    return G.a(E(b), h.name) ? (e.map[f + e.A * g] = ue, h.name) : j
  }();
  return Xf(Vc(a, V(["\ufdd0'player", "\ufdd0'health"]), d.m - k), l)
}
function Zf(a, b, d, e, f) {
  a = R(a) ? U.a(H, a) : a;
  P.a(a, "\ufdd0'found-item?");
  var g = P.a(a, "\ufdd0'y"), h = P.a(a, "\ufdd0'x");
  if(L(function() {
    var a = 0 === e;
    return a ? e === f : a
  }())) {
    var k = h - 8 >> 5, l = g - 8 >> 5, v = h + 8 >> 5, w = g + 8 >> 5, z = e + h - 8 >> 5, O = f + g - 8 >> 5, x = e + h + 8 >> 5, D = f + g + 8 >> 5, aa = de.i(i);
    de.i(j);
    for(var x = x + 1, D = D + 1, N = z;;) {
      if(N < x) {
        for(var ka = O;;) {
          if(ka < D) {
            if(!s(function() {
              var a;
              a = (a = k < N) ? N < v + 1 : a;
              return s(a) ? (a = l < ka) ? ka < w + 1 : a : a
            }()) && s(b.call(j, N, ka).$) && (ee(aa, m), z = b.call(j, N, ka), s(s(d) ? G.a("\ufdd0'crystal", z.name) : d))) {
              b.map[N + 128 * ka] = ue, fe.a(cf, ob)
            }
            ka += 1
          }else {
            break
          }
        }
        N += 1
      }else {
        break
      }
    }
    return s($(aa)) ? Q(a, "\ufdd0'x", h + e, "\ufdd0'y", g + f) : a
  }
  return a
}
function $f(a) {
  var a = R(a) ? U.a(H, a) : a, b = P.a(a, "\ufdd0'player");
  return Q.f(a, "\ufdd0'over?", 0 > b.m)
}
function ag(a, b) {
  var d = R(a) ? U.a(H, a) : a, e = P.a(d, "\ufdd0'need-items"), f = P.a(d, "\ufdd0'yo"), g = P.a(d, "\ufdd0'xo"), h = P.a(d, "\ufdd0'player"), k = P.a(d, "\ufdd0'level"), l = R(b) ? U.a(H, b) : b;
  P.a(l, "\ufdd0'c?");
  var v = P.a(l, "\ufdd0'my"), w = P.a(l, "\ufdd0'mx");
  P.a(l, "\ufdd0'ks");
  return $f(Yf(Q.f(d, "\ufdd0'player", function() {
    var a = h.x, b = h.y, d = w + g - a, l = v + f - b;
    if(s(h.q)) {
      var a = h.o - a, aa = h.p - b, b = Math.sqrt.call(j, a * a + aa * aa), a = 2 * (a / b), aa = 2 * (aa / b), b = b < Sf / 2 ? Q.f(h, "\ufdd0'moving?", m) : Zf(Zf(Wc(h, V(["\ufdd0'steps"]), ob), k, G.a("\ufdd0'crystals", E(e)), a, 0), k, G.a("\ufdd0'crystals", E(e)), 0, aa)
    }else {
      b = h
    }
    return Q(b, "\ufdd0'ex", w + g, "\ufdd0'ey", v + f, "\ufdd0'rot", Math.atan2.call(j, l, d))
  }())))
}
function bg(a, b, d) {
  return Q(a, "\ufdd0'destx", b, "\ufdd0'desty", d, "\ufdd0'moving?", i)
}
;function cg(a, b, d, e, f, g) {
  this.ta = a;
  this.ua = b;
  this.va = d;
  this.oa = e;
  this.d = f;
  this.b = g;
  4 < arguments.length ? (this.d = f, this.b = g) : this.b = this.d = j
}
p = cg.prototype;
p.I = function(a) {
  return rb(a)
};
p.ja = function(a, b) {
  return y.f(a, b, j)
};
p.ka = function(a, b, d) {
  return"\ufdd0'ks" === b ? this.ta : "\ufdd0'mx" === b ? this.ua : "\ufdd0'my" === b ? this.va : "\ufdd0'c?" === b ? this.oa : P.f(this.b, b, d)
};
p.xa = function(a, b, d) {
  return s(A.call(j, "\ufdd0'ks", b)) ? new cg(d, this.ua, this.va, this.oa, this.d, this.b) : s(A.call(j, "\ufdd0'mx", b)) ? new cg(this.ta, d, this.va, this.oa, this.d, this.b) : s(A.call(j, "\ufdd0'my", b)) ? new cg(this.ta, this.ua, d, this.oa, this.d, this.b) : s(A.call(j, "\ufdd0'c?", b)) ? new cg(this.ta, this.ua, this.va, d, this.d, this.b) : new cg(this.ta, this.ua, this.va, this.oa, this.d, Q.f(this.b, b, d))
};
p.O = function(a, b) {
  return Ib(b) ? Ka(a, u.a(b, 0), u.a(b, 1)) : Tb.f(Ea, a, b)
};
p.H = function() {
  return J(wc.a(V([X("\ufdd0'ks", this.ta), X("\ufdd0'mx", this.ua), X("\ufdd0'my", this.va), X("\ufdd0'c?", this.oa)]), this.b))
};
p.G = i;
p.B = function(a, b) {
  return Z(function(a) {
    return Z(Wd, "", " ", "", b, a)
  }, S("#", "ld23.input.Input", "{"), ", ", "}", b, wc.a(V([X("\ufdd0'ks", this.ta), X("\ufdd0'mx", this.ua), X("\ufdd0'my", this.va), X("\ufdd0'c?", this.oa)]), this.b))
};
p.P = function() {
  return 4 + yb(this.b)
};
p.n = function(a, b) {
  var d = a.constructor === b.constructor;
  return d ? kd(a, b) : d
};
p.J = function(a, b) {
  return new cg(this.ta, this.ua, this.va, this.oa, b, this.b)
};
p.D = i;
p.F = n("d");
p.Da = i;
p.Aa = function(a, b) {
  return Sb(Md(["\ufdd0'mx", "\ufdd0'my", "\ufdd0'c?", "\ufdd0'ks"]), b) ? zb.a(Ab(Sc(Y([], []), a), this.d), b) : new cg(this.ta, this.ua, this.va, this.oa, this.d, Bc(zb.a(this.b, b)))
};
var dg = Y([65, 68, 37, 38, 39, 40, 81, 83, 87, 27], "\ufdd0'left,\ufdd0'right,\ufdd0'left,\ufdd0'up,\ufdd0'right,\ufdd0'down,\ufdd0'quit,\ufdd0'down,\ufdd0'up,\ufdd0'quit".split(","));
function eg(a, b) {
  return function(d) {
    d.preventDefault();
    d = dg.call(j, d.keyCode);
    return s(d) ? fe.Ga(a, Wc, V(["\ufdd0'ks"]), b, d) : j
  }
}
function fg(a, b) {
  var d = function() {
    for(var a = 0, d = 0, e = b;;) {
      var f;
      f = e;
      f = s(f) ? Ac.a("body", e.tagName) : f;
      if(s(f)) {
        d += e.offsetLeft, f = e.offsetParent, a += e.offsetTop, e = f
      }else {
        return V([a, d])
      }
    }
  }(), e = M.f(d, 0, j), f = M.f(d, 1, j);
  return function(b) {
    fe(a, Q, "\ufdd0'mx", b.clientX + -f + window.pageXOffset, "\ufdd0'my", b.clientY + -e + window.pageYOffset);
    return m
  }
}
function gg() {
  var a = hg, b = ig;
  document.onkeydown = eg(a, xb);
  document.onkeyup = eg(a, Cb);
  var d = fg(a, b);
  b.addEventListener("mousemove", d);
  b.addEventListener("mousedown", function(b) {
    fe.sa(a, Q, "\ufdd0'c?", i);
    return d.call(j, b)
  });
  b.addEventListener("mouseup", function(b) {
    fe.sa(a, Q, "\ufdd0'c?", m);
    return d.call(j, b)
  })
}
;var ig, jg = fe.a(yf, ob);
function kg() {
  var a = Gf.call(j, V(["\ufdd0'div#wrapper", V(["\ufdd0'div#content", V(["\ufdd0'h1", "Crashed on Minutiae Prime"]), V(["\ufdd0'div#game", V(["\ufdd0'div.clearfix", V(["\ufdd0'canvas#canvas", Y(["\ufdd0'width", "\ufdd0'height", "\ufdd0'onmousedown"], [640, 480, "return false;"])]), V(["\ufdd0'div#journal", V(["\ufdd0'h3", "Ship Log"]), Lf])])]), V(["\ufdd0'span#fps"]), s(i) ? V(["\ufdd0'button#stop", Y(["\ufdd0'style"], ["display: none;"]), "stop"]) : V([])])]));
  a.setAttribute("crateGroup", jg);
  return a
}
var lg = de.i(j), hg = de.i(j), mg = de.i(m), ng = function() {
  var a = window.jb;
  if(s(a)) {
    return a
  }
  a = window.kb;
  if(s(a)) {
    return a
  }
  a = window.gb;
  if(s(a)) {
    return a
  }
  a = window.ib;
  if(s(a)) {
    return a
  }
  a = window.hb;
  return s(a) ? a : function(a) {
    return setTimeout(a, 17)
  }
}(), og = function() {
  function a(a, e) {
    var f = j;
    r(e) && (f = B(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, f)
  }
  function b(a, b) {
    Re.call(j, a, "black");
    Se.call(j, a, b);
    return a
  }
  a.h = 1;
  a.c = function(a) {
    var e = E(a), a = F(a);
    return b.call(this, e, a)
  };
  return a
}(), pg = de.i((new Date).getTime()), qg = de.i((new Date).getTime()), rg = de.i(0), sg = de.i(0), tg = de.i(0), ug = de.i(0), vg = ke.call(j, 640, 480);
function wg() {
  ig = ie.call(j, "\ufdd0'canvas");
  var a = new cg(Md([]), -1, -1, m), b;
  b = Wf();
  $e.call(j, b);
  b = Uf(new Tf(b, new Vf(Sf * (0.5 + b.M), Sf * (2.5 + b.N), 0, 0, 0, Sf * (0.5 + b.M), Sf * (2.5 + b.N), m, 0, Md([]), 100, "\ufdd0'radar", 0, m), 0, 0, m, Ab(nb("\ufdd0'radar", "\ufdd0'engine", "\ufdd0'glass", "\ufdd0'crystals"), H("\ufdd0'line", 95)), m));
  ee(hg, a);
  ee(lg, b);
  ee(mg, i)
}
function xg() {
  return ee(mg, m)
}
(function(a) {
  document.body.appendChild(kg());
  if(s(i)) {
    ie.call(j, "\ufdd0'stop").onclick = xg
  }
  var b = ie.call(j, "\ufdd0'canvas");
  og(b, "Generating world...", "(please be patient)");
  return setTimeout(function() {
    wg();
    og(b, "Binding events");
    return setTimeout(function() {
      gg();
      og(b, "Starting game!");
      return setTimeout(a, 50)
    }, 50)
  }, 100)
})(function yg() {
  if(s($(mg))) {
    var b = (new Date).getTime(), d = $(lg).Y, e = $(lg).aa;
    fe.f(ug, Vb, (b - $(pg)) / (1E3 / 60));
    ee(pg, b);
    s(s(d) ? d : e) || fe.a(lg, function(b) {
      for(var d = $(ug);;) {
        if(0 < d) {
          fe.a(sg, ob);
          fe.a(ug, Yb);
          fe.a(rg, ob);
          var d = d - 1, e = $(hg), b = R(b) ? U.a(H, b) : b, k = P.a(b, "\ufdd0'yo"), l = P.a(b, "\ufdd0'xo");
          P.a(b, "\ufdd0'player");
          P.a(b, "\ufdd0'level");
          var e = R(e) ? U.a(H, e) : e, v = P.a(e, "\ufdd0'c?"), w = P.a(e, "\ufdd0'my"), z = P.a(e, "\ufdd0'mx");
          P.a(e, "\ufdd0'ks");
          b = Uf(ag(s(v) ? Wc(b, V(["\ufdd0'player"]), bg, l + z, k + w) : b, e))
        }else {
          return b
        }
      }
    });
    ng.call(j, yg);
    bf.call(j, vg, $(lg));
    ig.getContext("2d").drawImage(vg, 0, 0);
    s(d) ? og(ig, "Game Over", "refresh to try again", "(sorry, didn't have time for good menus)") : s(e) && og(ig, "You Won!", "Thanks for playing!", "refresh to try again", "(sorry, didn't have time for good menus)");
    fe.a(tg, ob);
    if(1E3 <= (new Date).getTime() - $(qg)) {
      return ee(qg, (new Date).getTime()), $(tg), $(sg), ee(tg, 0), ee(sg, 0)
    }
  }
  return j
});
