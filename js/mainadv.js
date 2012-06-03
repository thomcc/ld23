function e(a) {
  throw a;
}
var aa = void 0, h = !0, l = null, o = !1;
function ba() {
  return function(a) {
    return a
  }
}
function p(a) {
  return function() {
    return this[a]
  }
}
function q(a) {
  return function() {
    return a
  }
}
var r, ca = this;
function s(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
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
function t(a) {
  return a !== aa
}
function ea(a) {
  return"string" == typeof a
}
var fa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ga = 0;
var ha = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"}, ia = {"'":"\\'"};
function ka(a) {
  var k;
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), f = d.charCodeAt(0), i = b, g = c + 1, j;
    if(!(j = ha[d])) {
      if(!(31 < f && 127 > f)) {
        if(d in ia) {
          d = ia[d]
        }else {
          if(d in ha) {
            k = ia[d] = ha[d], d = k
          }else {
            f = d;
            j = d.charCodeAt(0);
            if(31 < j && 127 > j) {
              f = d
            }else {
              if(256 > j) {
                if(f = "\\x", 16 > j || 256 < j) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > j && (f += "0")
              }
              f += j.toString(16).toUpperCase()
            }
            d = ia[d] = f
          }
        }
      }
      j = d
    }
    i[g] = j
  }
  b.push('"');
  return b.join("")
}
;var la, ma, na, oa, ra;
(ra = "ScriptEngine" in ca && "JScript" == ca.ScriptEngine()) && (ca.ScriptEngineMajorVersion(), ca.ScriptEngineMinorVersion(), ca.ScriptEngineBuildVersion());
function sa(a, b) {
  this.ra = ra ? [] : "";
  a != l && this.append.apply(this, arguments)
}
ra ? (sa.prototype.tb = 0, sa.prototype.append = function(a, b, c) {
  b == l ? this.ra[this.tb++] = a : (this.ra.push.apply(this.ra, arguments), this.tb = this.ra.length);
  return this
}) : sa.prototype.append = function(a, b, c) {
  this.ra += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.ra += arguments[d]
    }
  }
  return this
};
sa.prototype.clear = function() {
  ra ? this.tb = this.ra.length = 0 : this.ra = ""
};
sa.prototype.toString = function() {
  if(ra) {
    var a = this.ra.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.ra
};
function ta() {
  e(Error("No *print-fn* fn set for evaluation environment"))
}
function u(a) {
  return a != l && a !== o
}
function v(a, b) {
  return a[s(b)] ? h : a._ ? h : o
}
function x(a, b) {
  return Error(["No protocol method ", a, " defined for type ", s(b), ": ", b].join(""))
}
var ua = function() {
  var a = l, a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return Array(b);
      case 2:
        return a.d(c)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.d = function(a) {
    return Array(a)
  };
  a.a = function(b, c) {
    return a.d(c)
  };
  return a
}(), va = {};
function wa(a) {
  if(a ? a.A : a) {
    a = a.A(a)
  }else {
    var b;
    var c = wa[s(a)];
    c ? b = c : (c = wa._) ? b = c : e(x("ICounted.-count", a));
    a = b.call(l, a)
  }
  return a
}
function ya(a) {
  if(a ? a.V : a) {
    a = a.V(a)
  }else {
    var b;
    var c = ya[s(a)];
    c ? b = c : (c = ya._) ? b = c : e(x("IEmptyableCollection.-empty", a));
    a = b.call(l, a)
  }
  return a
}
function Aa(a, b) {
  var c;
  if(a ? a.z : a) {
    c = a.z(a, b)
  }else {
    var d = Aa[s(a)];
    d ? c = d : (d = Aa._) ? c = d : e(x("ICollection.-conj", a));
    c = c.call(l, a, b)
  }
  return c
}
var Ba = {}, y = function() {
  function a(a, b, c) {
    if(a ? a.Na : a) {
      a = a.Na(a, b, c)
    }else {
      var g;
      var j = y[s(a)];
      j ? g = j : (j = y._) ? g = j : e(x("IIndexed.-nth", a));
      a = g.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.Ma : a) {
      c = a.Ma(a, b)
    }else {
      var g = y[s(a)];
      g ? c = g : (g = y._) ? c = g : e(x("IIndexed.-nth", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}(), Ca = {}, Da = {};
function Ea(a) {
  if(a ? a.ha : a) {
    a = a.ha(a)
  }else {
    var b;
    var c = Ea[s(a)];
    c ? b = c : (c = Ea._) ? b = c : e(x("ISeq.-first", a));
    a = b.call(l, a)
  }
  return a
}
function z(a) {
  if(a ? a.ia : a) {
    a = a.ia(a)
  }else {
    var b;
    var c = z[s(a)];
    c ? b = c : (c = z._) ? b = c : e(x("ISeq.-rest", a));
    a = b.call(l, a)
  }
  return a
}
var Fa = {};
function Ga(a) {
  if(a ? a.Oa : a) {
    a = a.Oa(a)
  }else {
    var b;
    var c = Ga[s(a)];
    c ? b = c : (c = Ga._) ? b = c : e(x("INext.-next", a));
    a = b.call(l, a)
  }
  return a
}
var A = function() {
  function a(a, b, c) {
    if(a ? a.U : a) {
      a = a.U(a, b, c)
    }else {
      var g;
      var j = A[s(a)];
      j ? g = j : (j = A._) ? g = j : e(x("ILookup.-lookup", a));
      a = g.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.T : a) {
      c = a.T(a, b)
    }else {
      var g = A[s(a)];
      g ? c = g : (g = A._) ? c = g : e(x("ILookup.-lookup", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}();
function Ha(a, b) {
  var c;
  if(a ? a.fb : a) {
    c = a.fb(a, b)
  }else {
    var d = Ha[s(a)];
    d ? c = d : (d = Ha._) ? c = d : e(x("IAssociative.-contains-key?", a));
    c = c.call(l, a, b)
  }
  return c
}
function Ia(a, b, c) {
  if(a ? a.ga : a) {
    a = a.ga(a, b, c)
  }else {
    var d;
    var f = Ia[s(a)];
    f ? d = f : (f = Ia._) ? d = f : e(x("IAssociative.-assoc", a));
    a = d.call(l, a, b, c)
  }
  return a
}
var Ja = {};
function Ka(a, b) {
  var c;
  if(a ? a.Aa : a) {
    c = a.Aa(a, b)
  }else {
    var d = Ka[s(a)];
    d ? c = d : (d = Ka._) ? c = d : e(x("IMap.-dissoc", a));
    c = c.call(l, a, b)
  }
  return c
}
var Ma = {};
function Na(a) {
  if(a ? a.ob : a) {
    a = a.ob(a)
  }else {
    var b;
    var c = Na[s(a)];
    c ? b = c : (c = Na._) ? b = c : e(x("IMapEntry.-key", a));
    a = b.call(l, a)
  }
  return a
}
function Oa(a) {
  if(a ? a.pb : a) {
    a = a.pb(a)
  }else {
    var b;
    var c = Oa[s(a)];
    c ? b = c : (c = Oa._) ? b = c : e(x("IMapEntry.-val", a));
    a = b.call(l, a)
  }
  return a
}
var Pa = {};
function Qa(a, b) {
  var c;
  if(a ? a.Wb : a) {
    c = a.Wb(a, b)
  }else {
    var d = Qa[s(a)];
    d ? c = d : (d = Qa._) ? c = d : e(x("ISet.-disjoin", a));
    c = c.call(l, a, b)
  }
  return c
}
function Ra(a) {
  if(a ? a.ab : a) {
    a = a.ab(a)
  }else {
    var b;
    var c = Ra[s(a)];
    c ? b = c : (c = Ra._) ? b = c : e(x("IStack.-peek", a));
    a = b.call(l, a)
  }
  return a
}
var Sa = {};
function C(a) {
  if(a ? a.yb : a) {
    a = a.yb(a)
  }else {
    var b;
    var c = C[s(a)];
    c ? b = c : (c = C._) ? b = c : e(x("IDeref.-deref", a));
    a = b.call(l, a)
  }
  return a
}
var Ta = {};
function Ua(a) {
  if(a ? a.D : a) {
    a = a.D(a)
  }else {
    var b;
    var c = Ua[s(a)];
    c ? b = c : (c = Ua._) ? b = c : e(x("IMeta.-meta", a));
    a = b.call(l, a)
  }
  return a
}
function Va(a, b) {
  var c;
  if(a ? a.F : a) {
    c = a.F(a, b)
  }else {
    var d = Va[s(a)];
    d ? c = d : (d = Va._) ? c = d : e(x("IWithMeta.-with-meta", a));
    c = c.call(l, a, b)
  }
  return c
}
var Wa = {}, Xa = function() {
  function a(a, b, c) {
    if(a ? a.Va : a) {
      a = a.Va(a, b, c)
    }else {
      var g;
      var j = Xa[s(a)];
      j ? g = j : (j = Xa._) ? g = j : e(x("IReduce.-reduce", a));
      a = g.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.Ua : a) {
      c = a.Ua(a, b)
    }else {
      var g = Xa[s(a)];
      g ? c = g : (g = Xa._) ? c = g : e(x("IReduce.-reduce", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}();
function Ya(a, b) {
  var c;
  if(a ? a.u : a) {
    c = a.u(a, b)
  }else {
    var d = Ya[s(a)];
    d ? c = d : (d = Ya._) ? c = d : e(x("IEquiv.-equiv", a));
    c = c.call(l, a, b)
  }
  return c
}
function Za(a) {
  if(a ? a.C : a) {
    a = a.C(a)
  }else {
    var b;
    var c = Za[s(a)];
    c ? b = c : (c = Za._) ? b = c : e(x("IHash.-hash", a));
    a = b.call(l, a)
  }
  return a
}
function $a(a) {
  if(a ? a.B : a) {
    a = a.B(a)
  }else {
    var b;
    var c = $a[s(a)];
    c ? b = c : (c = $a._) ? b = c : e(x("ISeqable.-seq", a));
    a = b.call(l, a)
  }
  return a
}
var ab = {}, bb = {};
function cb(a) {
  if(a ? a.qb : a) {
    a = a.qb(a)
  }else {
    var b;
    var c = cb[s(a)];
    c ? b = c : (c = cb._) ? b = c : e(x("IReversible.-rseq", a));
    a = b.call(l, a)
  }
  return a
}
var db = {};
function eb(a, b) {
  var c;
  if(a ? a.w : a) {
    c = a.w(a, b)
  }else {
    var d = eb[s(a)];
    d ? c = d : (d = eb._) ? c = d : e(x("IPrintable.-pr-seq", a));
    c = c.call(l, a, b)
  }
  return c
}
function fb(a, b, c) {
  if(a ? a.Yb : a) {
    a = a.Yb(a, b, c)
  }else {
    var d;
    var f = fb[s(a)];
    f ? d = f : (f = fb._) ? d = f : e(x("IWatchable.-notify-watches", a));
    a = d.call(l, a, b, c)
  }
  return a
}
var gb = {};
function hb(a) {
  if(a ? a.$a : a) {
    a = a.$a(a)
  }else {
    var b;
    var c = hb[s(a)];
    c ? b = c : (c = hb._) ? b = c : e(x("IEditableCollection.-as-transient", a));
    a = b.call(l, a)
  }
  return a
}
function ib(a, b) {
  var c;
  if(a ? a.gb : a) {
    c = a.gb(a, b)
  }else {
    var d = ib[s(a)];
    d ? c = d : (d = ib._) ? c = d : e(x("ITransientCollection.-conj!", a));
    c = c.call(l, a, b)
  }
  return c
}
function jb(a) {
  if(a ? a.hb : a) {
    a = a.hb(a)
  }else {
    var b;
    var c = jb[s(a)];
    c ? b = c : (c = jb._) ? b = c : e(x("ITransientCollection.-persistent!", a));
    a = b.call(l, a)
  }
  return a
}
function kb(a, b, c) {
  if(a ? a.rb : a) {
    a = a.rb(a, b, c)
  }else {
    var d;
    var f = kb[s(a)];
    f ? d = f : (f = kb._) ? d = f : e(x("ITransientAssociative.-assoc!", a));
    a = d.call(l, a, b, c)
  }
  return a
}
function lb(a, b, c) {
  if(a ? a.Xb : a) {
    a = a.Xb(a, b, c)
  }else {
    var d;
    var f = lb[s(a)];
    f ? d = f : (f = lb._) ? d = f : e(x("ITransientVector.-assoc-n!", a));
    a = d.call(l, a, b, c)
  }
  return a
}
var mb = {};
function nb(a, b) {
  var c;
  if(a ? a.Ub : a) {
    c = a.Ub(a, b)
  }else {
    var d = nb[s(a)];
    d ? c = d : (d = nb._) ? c = d : e(x("IComparable.-compare", a));
    c = c.call(l, a, b)
  }
  return c
}
function ob(a) {
  if(a ? a.Sb : a) {
    a = a.Sb()
  }else {
    var b;
    var c = ob[s(a)];
    c ? b = c : (c = ob._) ? b = c : e(x("IChunk.-drop-first", a));
    a = b.call(l, a)
  }
  return a
}
var sb = {};
function tb(a) {
  if(a ? a.wb : a) {
    a = a.wb(a)
  }else {
    var b;
    var c = tb[s(a)];
    c ? b = c : (c = tb._) ? b = c : e(x("IChunkedSeq.-chunked-first", a));
    a = b.call(l, a)
  }
  return a
}
function ub(a) {
  if(a ? a.xb : a) {
    a = a.xb(a)
  }else {
    var b;
    var c = ub[s(a)];
    c ? b = c : (c = ub._) ? b = c : e(x("IChunkedSeq.-chunked-rest", a));
    a = b.call(l, a)
  }
  return a
}
function vb(a) {
  if(a ? a.vb : a) {
    a = a.vb(a)
  }else {
    var b;
    var c = vb[s(a)];
    c ? b = c : (c = vb._) ? b = c : e(x("IChunkedNext.-chunked-next", a));
    a = b.call(l, a)
  }
  return a
}
function E(a, b) {
  return a === b
}
var wb = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : Ya(a, b)
  }
  var b = l, c = function() {
    function a(b, d, j) {
      var k = l;
      t(j) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k)
    }
    function c(a, d, f) {
      for(;;) {
        if(u(b.a(a, d))) {
          if(H(f)) {
            a = d, d = I(f), f = H(f)
          }else {
            return b.a(d, I(f))
          }
        }else {
          return o
        }
      }
    }
    a.n = 2;
    a.k = function(a) {
      var b = I(a), d = I(H(a)), a = J(H(a));
      return c(b, d, a)
    };
    a.c = c;
    return a
  }(), b = function(b, f, i) {
    switch(arguments.length) {
      case 1:
        return h;
      case 2:
        return a.call(this, b, f);
      default:
        return c.c(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.n = 2;
  b.k = c.k;
  b.d = q(h);
  b.a = a;
  b.c = c.c;
  return b
}();
function xb(a) {
  var b = a == l;
  return(b ? b : aa === a) ? l : a.constructor
}
Za["null"] = q(0);
A["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return l;
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Ia["null"] = function(a, b, c) {
  return yb.c(F([b, c], 0))
};
Fa["null"] = h;
Ga["null"] = q(l);
Aa["null"] = function(a, b) {
  return zb.d(b)
};
Wa["null"] = h;
Xa["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b.t ? b.t() : b.call(l);
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
db["null"] = h;
eb["null"] = function() {
  return zb.d("nil")
};
Pa["null"] = h;
Qa["null"] = q(l);
va["null"] = h;
wa["null"] = q(0);
Ra["null"] = q(l);
Da["null"] = h;
Ea["null"] = q(l);
z["null"] = function() {
  return zb.t()
};
Ya["null"] = function(a, b) {
  return b == l
};
Va["null"] = q(l);
Ta["null"] = h;
Ua["null"] = q(l);
Ba["null"] = h;
y["null"] = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return l;
      case 3:
        return c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
ya["null"] = q(l);
Ja["null"] = h;
Ka["null"] = q(l);
Date.prototype.u = function(a, b) {
  return a.toString() === b.toString()
};
Za.number = ba();
Ya.number = function(a, b) {
  return a === b
};
Za["boolean"] = function(a) {
  return a === h ? 1 : 0
};
Za._ = function(a) {
  return a[fa] || (a[fa] = ++ga)
};
function Ab(a) {
  return a + 1
}
var Cb = function() {
  function a(a, b, c, d) {
    for(var k = wa(a);;) {
      if(d < k) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(l, c, y.a(a, d));
        if(M(Bb, c)) {
          return C(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = wa(a), k = 0;;) {
      if(k < d) {
        c = b.a ? b.a(c, y.a(a, k)) : b.call(l, c, y.a(a, k));
        if(M(Bb, c)) {
          return C(c)
        }
        k += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = wa(a);
    if(0 === c) {
      return b.t ? b.t() : b.call(l)
    }
    for(var d = y.a(a, 0), k = 1;;) {
      if(k < c) {
        d = b.a ? b.a(d, y.a(a, k)) : b.call(l, d, y.a(a, k));
        if(M(Bb, d)) {
          return C(d)
        }
        k += 1
      }else {
        return d
      }
    }
  }
  var d = l, d = function(d, i, g, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, g);
      case 4:
        return a.call(this, d, i, g, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.b = b;
  d.o = a;
  return d
}();
function Db(a, b) {
  this.X = a;
  this.q = b;
  this.p = 0;
  this.i = 166199546
}
r = Db.prototype;
r.C = function(a) {
  return Eb(a)
};
r.Oa = function() {
  return this.q + 1 < this.X.length ? new Db(this.X, this.q + 1) : l
};
r.z = function(a, b) {
  return N(b, a)
};
r.qb = function(a) {
  var b = wa(a);
  return 0 < b ? new Fb(a, b - 1, l) : Gb
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.Ua = function(a, b) {
  return Ib(this.X) ? Cb.o(this.X, b, this.X[this.q], this.q + 1) : Cb.o(a, b, this.X[this.q], 0)
};
r.Va = function(a, b, c) {
  return Ib(this.X) ? Cb.o(this.X, b, c, this.q) : Cb.o(a, b, c, 0)
};
r.B = ba();
r.A = function() {
  return this.X.length - this.q
};
r.ha = function() {
  return this.X[this.q]
};
r.ia = function() {
  return this.q + 1 < this.X.length ? new Db(this.X, this.q + 1) : zb.t()
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.Ma = function(a, b) {
  var c = b + this.q;
  return c < this.X.length ? this.X[c] : l
};
r.Na = function(a, b, c) {
  a = b + this.q;
  return a < this.X.length ? this.X[a] : c
};
var Kb = function() {
  function a(a, b) {
    return 0 === a.length ? l : new Db(a, b)
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.d = b;
  c.a = a;
  return c
}(), F = function() {
  function a(a, b) {
    return Kb.a(a, b)
  }
  function b(a) {
    return Kb.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.d = b;
  c.a = a;
  return c
}();
Wa.array = h;
Xa.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Cb.a(a, b);
      case 3:
        return Cb.b(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
A.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return a[b];
      case 3:
        return y.b(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Ba.array = h;
y.array = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b < a.length ? a[b] : l;
      case 3:
        return b < a.length ? a[b] : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
va.array = h;
wa.array = function(a) {
  return a.length
};
$a.array = function(a) {
  return F.a(a, 0)
};
function Fb(a, b, c) {
  this.ub = a;
  this.q = b;
  this.l = c;
  this.p = 0;
  this.i = 31850570
}
r = Fb.prototype;
r.C = function(a) {
  return Eb(a)
};
r.z = function(a, b) {
  return N(b, a)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = ba();
r.A = function() {
  return this.q + 1
};
r.ha = function() {
  return y.a(this.ub, this.q)
};
r.ia = function() {
  return 0 < this.q ? new Fb(this.ub, this.q - 1, l) : Gb
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new Fb(this.ub, this.q, b)
};
r.D = p("l");
function P(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.i & 32) ? b : a.gc) ? h : a.i ? o : v(Ca, a) : v(Ca, a);
    a = b ? a : $a(a)
  }
  return a
}
function I(a) {
  if(a == l) {
    return l
  }
  var b;
  b = a ? ((b = a.i & 64) ? b : a.zb) ? h : a.i ? o : v(Da, a) : v(Da, a);
  if(b) {
    return Ea(a)
  }
  a = P(a);
  return a == l ? l : Ea(a)
}
function J(a) {
  if(a != l) {
    var b;
    b = a ? ((b = a.i & 64) ? b : a.zb) ? h : a.i ? o : v(Da, a) : v(Da, a);
    if(b) {
      return z(a)
    }
    a = P(a);
    return a != l ? z(a) : Gb
  }
  return Gb
}
function H(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.i & 128) ? b : a.kc) ? h : a.i ? o : v(Fa, a) : v(Fa, a);
    a = b ? Ga(a) : P(J(a))
  }
  return a
}
Ya._ = function(a, b) {
  return a === b
};
function Lb(a) {
  return u(a) ? o : h
}
var Mb = function() {
  var a = l, b = function() {
    function b(a, c, g) {
      var j = l;
      t(g) && (j = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(u(d)) {
          b = a.a(b, c), c = I(d), d = H(d)
        }else {
          return a.a(b, c)
        }
      }
    }
    b.n = 2;
    b.k = function(a) {
      var b = I(a), c = I(H(a)), a = J(H(a));
      return d(b, c, a)
    };
    b.c = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 2:
        return Aa(a, d);
      default:
        return b.c(a, d, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.n = 2;
  a.k = b.k;
  a.a = function(a, b) {
    return Aa(a, b)
  };
  a.c = b.c;
  return a
}();
function Nb(a) {
  if(Ib(a)) {
    a = wa(a)
  }else {
    a: {
      for(var a = P(a), b = 0;;) {
        if(Ib(a)) {
          a = b + wa(a);
          break a
        }
        a = H(a);
        b += 1
      }
      a = aa
    }
  }
  return a
}
var Pb = function() {
  function a(a, b, i) {
    return a == l ? i : 0 === b ? P(a) ? I(a) : i : Ob(a) ? y.b(a, b, i) : P(a) ? c.b(H(a), b - 1, i) : i
  }
  function b(a, b) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(P(a)) {
        return I(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Ob(a)) {
      return y.a(a, b)
    }
    if(P(a)) {
      return c.a(H(a), b - 1)
    }
    e(Error("Index out of bounds"))
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}(), Q = function() {
  function a(a, b, c) {
    if(a != l) {
      var g;
      g = a ? ((g = a.i & 16) ? g : a.Vb) ? h : a.i ? o : v(Ba, a) : v(Ba, a);
      a = g ? y.b(a, Math.floor(b), c) : Pb.b(a, Math.floor(b), c)
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    a == l ? c = l : (c = a ? ((c = a.i & 16) ? c : a.Vb) ? h : a.i ? o : v(Ba, a) : v(Ba, a), c = c ? y.a(a, Math.floor(b)) : Pb.a(a, Math.floor(b)));
    return c
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}(), Qb = function() {
  function a(a, b, c) {
    return A.b(a, b, c)
  }
  function b(a, b) {
    return A.a(a, b)
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}(), Rb = function() {
  var a = l, b = function() {
    function b(a, c, g, j) {
      var k = l;
      t(j) && (k = F(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, a, c, g, k)
    }
    function d(b, c, d, j) {
      for(;;) {
        if(b = a.b(b, c, d), u(j)) {
          c = I(j), d = I(H(j)), j = H(H(j))
        }else {
          return b
        }
      }
    }
    b.n = 3;
    b.k = function(a) {
      var b = I(a), c = I(H(a)), j = I(H(H(a))), a = J(H(H(a)));
      return d(b, c, j, a)
    };
    b.c = d;
    return b
  }(), a = function(a, d, f, i) {
    switch(arguments.length) {
      case 3:
        return Ia(a, d, f);
      default:
        return b.c(a, d, f, F(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.n = 3;
  a.k = b.k;
  a.b = function(a, b, f) {
    return Ia(a, b, f)
  };
  a.c = b.c;
  return a
}(), Sb = function() {
  var a = l, b = function() {
    function b(a, c, g) {
      var j = l;
      t(g) && (j = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), u(d)) {
          c = I(d), d = H(d)
        }else {
          return b
        }
      }
    }
    b.n = 2;
    b.k = function(a) {
      var b = I(a), c = I(H(a)), a = J(H(a));
      return d(b, c, a)
    };
    b.c = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Ka(a, d);
      default:
        return b.c(a, d, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.n = 2;
  a.k = b.k;
  a.d = ba();
  a.a = function(a, b) {
    return Ka(a, b)
  };
  a.c = b.c;
  return a
}();
function Tb(a, b) {
  return Va(a, b)
}
function Ub(a) {
  var b;
  b = a ? ((b = a.i & 131072) ? b : a.bc) ? h : a.i ? o : v(Ta, a) : v(Ta, a);
  return b ? Ua(a) : l
}
var Vb = function() {
  var a = l, b = function() {
    function b(a, c, g) {
      var j = l;
      t(g) && (j = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), u(d)) {
          c = I(d), d = H(d)
        }else {
          return b
        }
      }
    }
    b.n = 2;
    b.k = function(a) {
      var b = I(a), c = I(H(a)), a = J(H(a));
      return d(b, c, a)
    };
    b.c = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Qa(a, d);
      default:
        return b.c(a, d, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.n = 2;
  a.k = b.k;
  a.d = ba();
  a.a = function(a, b) {
    return Qa(a, b)
  };
  a.c = b.c;
  return a
}();
function Wb(a) {
  return Za(a)
}
function Xb(a) {
  if(a == l) {
    a = o
  }else {
    if(a) {
      var b = a.i & 4096, a = (b ? b : a.nc) ? h : a.i ? o : v(Pa, a)
    }else {
      a = v(Pa, a)
    }
  }
  return a
}
function Ib(a) {
  if(a) {
    var b = a.i & 2, a = (b ? b : a.hc) ? h : a.i ? o : v(va, a)
  }else {
    a = v(va, a)
  }
  return a
}
function Ob(a) {
  if(a) {
    var b = a.i & 16, a = (b ? b : a.Vb) ? h : a.i ? o : v(Ba, a)
  }else {
    a = v(Ba, a)
  }
  return a
}
function Yb(a) {
  if(a == l) {
    a = o
  }else {
    if(a) {
      var b = a.i & 1024, a = (b ? b : a.jc) ? h : a.i ? o : v(Ja, a)
    }else {
      a = v(Ja, a)
    }
  }
  return a
}
function Zb(a) {
  if(a) {
    var b = a.i & 16384, a = (b ? b : a.oc) ? h : a.i ? o : v(Sa, a)
  }else {
    a = v(Sa, a)
  }
  return a
}
function $b(a) {
  return a ? u(u(l) ? l : a.Tb) ? h : a.dc ? o : v(sb, a) : v(sb, a)
}
function ac(a, b, c, d, f) {
  for(;!(0 === f);) {
    c[d] = a[b];
    d += 1;
    f -= 1;
    b += 1
  }
}
var bc = {};
function M(a, b) {
  return b instanceof a
}
function cc(a) {
  if(a == l) {
    a = o
  }else {
    if(a) {
      var b = a.i & 64, a = (b ? b : a.zb) ? h : a.i ? o : v(Da, a)
    }else {
      a = v(Da, a)
    }
  }
  return a
}
function dc(a) {
  return u(a) ? h : o
}
function ec(a) {
  var b = ea(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = !(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function fc(a) {
  var b = ea(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function gc(a) {
  var b = ea(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function hc(a, b) {
  return A.b(a, b, bc) === bc ? o : h
}
function ic(a, b) {
  if(a === b) {
    return 0
  }
  if(a == l) {
    return-1
  }
  if(b == l) {
    return 1
  }
  if(xb(a) === xb(b)) {
    return(a ? u(u(l) ? l : a.$b) || (a.dc ? 0 : v(mb, a)) : v(mb, a)) ? nb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var jc = function() {
  function a(a, b, c, g) {
    for(;;) {
      var j = ic(Q.a(a, g), Q.a(b, g)), k = 0 === j;
      if(k ? g + 1 < c : k) {
        g += 1
      }else {
        return j
      }
    }
  }
  function b(a, b) {
    var i = Nb(a), g = Nb(b);
    return i < g ? -1 : i > g ? 1 : c.o(a, b, i, 0)
  }
  var c = l, c = function(c, f, i, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, i, g)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.o = a;
  return c
}(), lc = function() {
  function a(a, b, c) {
    for(c = P(c);;) {
      if(c) {
        b = a.a ? a.a(b, I(c)) : a.call(l, b, I(c));
        if(M(Bb, b)) {
          return C(b)
        }
        c = H(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = P(b);
    return c ? kc.b(a, I(c), H(c)) : a.t ? a.t() : a.call(l)
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}(), kc = function() {
  function a(a, b, c) {
    var g;
    g = c ? ((g = c.i & 524288) ? g : c.cc) ? h : c.i ? o : v(Wa, c) : v(Wa, c);
    return g ? Xa.b(c, a, b) : lc.b(a, b, c)
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.i & 524288) ? c : b.cc) ? h : b.i ? o : v(Wa, b) : v(Wa, b);
    return c ? Xa.a(b, a) : lc.a(a, b)
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}();
function Bb(a) {
  this.m = a;
  this.p = 0;
  this.i = 32768
}
Bb.prototype.yb = p("m");
var mc = function() {
  var a = l, b = function() {
    function b(a, c, g) {
      var j = l;
      t(g) && (j = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      return kc.b(a, b + c, d)
    }
    b.n = 2;
    b.k = function(a) {
      var b = I(a), c = I(H(a)), a = J(H(a));
      return d(b, c, a)
    };
    b.c = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.c(a, d, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.n = 2;
  a.k = b.k;
  a.t = q(0);
  a.d = ba();
  a.a = function(a, b) {
    return a + b
  };
  a.c = b.c;
  return a
}();
function nc(a) {
  return a - 1
}
function oc(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(l, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(l, a)
}
var pc = function() {
  function a(a) {
    return a * c.t()
  }
  function b() {
    return Math.random.t ? Math.random.t() : Math.random.call(l)
  }
  var c = l, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.t = b;
  c.d = a;
  return c
}();
function qc(a) {
  return oc(pc.d(a))
}
function wc(a) {
  for(var b = 0;;) {
    if(0 === a) {
      return b
    }
    a &= a - 1;
    b += 1
  }
}
function xc(a) {
  for(var b = 1, a = P(a);;) {
    var c = a;
    if(u(c ? 0 < b : c)) {
      b -= 1, a = H(a)
    }else {
      return a
    }
  }
}
var yc = function() {
  function a(a) {
    return a == l ? "" : a.toString()
  }
  var b = l, c = function() {
    function a(b, d) {
      var j = l;
      t(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(u(c)) {
            var d = a.append(b.d(I(c))), f = H(c), a = d, c = f
          }else {
            return b.d(a)
          }
        }
      }.call(l, new sa(b.d(a)), d)
    }
    a.n = 1;
    a.k = function(a) {
      var b = I(a), a = J(a);
      return c(b, a)
    };
    a.c = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.c(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.n = 1;
  b.k = c.k;
  b.t = q("");
  b.d = a;
  b.c = c.c;
  return b
}(), R = function() {
  function a(a) {
    return gc(a) ? a.substring(2, a.length) : fc(a) ? yc.c(":", F([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
  }
  var b = l, c = function() {
    function a(b, d) {
      var j = l;
      t(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(u(c)) {
            var d = a.append(b.d(I(c))), f = H(c), a = d, c = f
          }else {
            return yc.d(a)
          }
        }
      }.call(l, new sa(b.d(a)), d)
    }
    a.n = 1;
    a.k = function(a) {
      var b = I(a), a = J(a);
      return c(b, a)
    };
    a.c = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.c(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.n = 1;
  b.k = c.k;
  b.t = q("");
  b.d = a;
  b.c = c.c;
  return b
}(), zc = function() {
  var a = l, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.a = function(a, c) {
    return a.substring(c)
  };
  a.b = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}(), Ac = function() {
  function a(a, b) {
    return c.d(yc.c(a, F(["/", b], 0)))
  }
  function b(a) {
    return fc(a) ? a : gc(a) ? yc.c("\ufdd0", F(["'", zc.a(a, 2)], 0)) : yc.c("\ufdd0", F(["'", a], 0))
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.d = b;
  c.a = a;
  return c
}();
function Jb(a, b) {
  var c;
  c = b ? ((c = b.i & 16777216) ? c : b.mc) ? h : b.i ? o : v(ab, b) : v(ab, b);
  if(c) {
    a: {
      c = P(a);
      for(var d = P(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && wb.a(I(c), I(d))) {
          c = H(c), d = H(d)
        }else {
          c = o;
          break a
        }
      }
      c = aa
    }
  }else {
    c = l
  }
  return dc(c)
}
function Eb(a) {
  return kc.b(function(a, c) {
    var d = Za(c);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Wb(I(a)), H(a))
}
function Bc(a) {
  for(var b = 0, a = P(a);;) {
    if(a) {
      var c = I(a), b = (b + (Wb(Na(c)) ^ Wb(Oa(c)))) % 4503599627370496, a = H(a)
    }else {
      return b
    }
  }
}
function Cc(a) {
  for(var b = 0, a = P(a);;) {
    if(a) {
      var c = I(a), b = (b + Za(c)) % 4503599627370496, a = H(a)
    }else {
      return b
    }
  }
}
function Dc(a, b, c, d, f) {
  this.l = a;
  this.cb = b;
  this.Ka = c;
  this.sa = d;
  this.h = f;
  this.p = 0;
  this.i = 65413358
}
r = Dc.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.Oa = function() {
  return 1 === this.sa ? l : this.Ka
};
r.z = function(a, b) {
  return new Dc(this.l, b, a, this.sa + 1, l)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = ba();
r.A = p("sa");
r.ab = p("cb");
r.ha = p("cb");
r.ia = function() {
  return 1 === this.sa ? Gb : this.Ka
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new Dc(b, this.cb, this.Ka, this.sa, this.h)
};
r.D = p("l");
r.V = function() {
  return Gb
};
function Ec(a) {
  this.l = a;
  this.p = 0;
  this.i = 65413326
}
r = Ec.prototype;
r.C = q(0);
r.Oa = q(l);
r.z = function(a, b) {
  return new Dc(this.l, b, l, 1, l)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = q(l);
r.A = q(0);
r.ab = q(l);
r.ha = q(l);
r.ia = function() {
  return Gb
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new Ec(b)
};
r.D = p("l");
r.V = ba();
var Gb = new Ec(l);
function Fc(a) {
  var b;
  b = a ? ((b = a.i & 134217728) ? b : a.lc) ? h : a.i ? o : v(bb, a) : v(bb, a);
  return b ? cb(a) : kc.b(Mb, Gb, a)
}
var zb = function() {
  function a(a, b, c) {
    return Mb.a(d.a(b, c), a)
  }
  function b(a, b) {
    return Mb.a(d.d(b), a)
  }
  function c(a) {
    return Mb.a(Gb, a)
  }
  var d = l, f = function() {
    function a(c, d, f, i) {
      var w = l;
      t(i) && (w = F(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, f, w)
    }
    function b(a, c, d, f) {
      return Mb.a(Mb.a(Mb.a(kc.b(Mb, Gb, Fc(f)), d), c), a)
    }
    a.n = 3;
    a.k = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), a = J(H(H(a)));
      return b(c, d, f, a)
    };
    a.c = b;
    return a
  }(), d = function(d, g, j, k) {
    switch(arguments.length) {
      case 0:
        return Gb;
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, j);
      default:
        return f.c(d, g, j, F(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.n = 3;
  d.k = f.k;
  d.t = function() {
    return Gb
  };
  d.d = c;
  d.a = b;
  d.b = a;
  d.c = f.c;
  return d
}();
function Gc(a, b, c, d) {
  this.l = a;
  this.cb = b;
  this.Ka = c;
  this.h = d;
  this.p = 0;
  this.i = 65405164
}
r = Gc.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.Oa = function() {
  return this.Ka == l ? l : $a(this.Ka)
};
r.z = function(a, b) {
  return new Gc(l, b, a, this.h)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = ba();
r.ha = p("cb");
r.ia = function() {
  return this.Ka == l ? Gb : this.Ka
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new Gc(b, this.cb, this.Ka, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(Gb, this.l)
};
function N(a, b) {
  var c = b == l;
  c || (c = b ? ((c = b.i & 64) ? c : b.zb) ? h : b.i ? o : v(Da, b) : v(Da, b));
  return c ? new Gc(l, a, b, l) : new Gc(l, a, P(b), l)
}
Wa.string = h;
Xa.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return Cb.a(a, b);
      case 3:
        return Cb.b(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
A.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return y.a(a, b);
      case 3:
        return y.b(a, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Ba.string = h;
y.string = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return b < wa(a) ? a.charAt(b) : l;
      case 3:
        return b < wa(a) ? a.charAt(b) : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
va.string = h;
wa.string = function(a) {
  return a.length
};
$a.string = function(a) {
  return Kb.a(a, 0)
};
Za.string = function(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
};
function Hc(a) {
  this.Zb = a;
  this.p = 0;
  this.i = 1
}
Hc.prototype.call = function(a, b) {
  if(b == l) {
    return l
  }
  var c = b.Ta;
  return c == l ? A.b(b, this.Zb, l) : c[this.Zb]
};
Hc.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.b(b, this.toString(), l);
      case 3:
        return A.b(b, this.toString(), c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > Nb(b) ? A.b(b[0], a, l) : A.b(b[0], a, b[1])
};
function Ic(a) {
  var b = a.x;
  if(a.Nb) {
    return b
  }
  a.x = b.t ? b.t() : b.call(l);
  a.Nb = h;
  return a.x
}
function Jc(a, b, c, d) {
  this.l = a;
  this.Nb = b;
  this.x = c;
  this.h = d;
  this.p = 0;
  this.i = 31850700
}
r = Jc.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.Oa = function(a) {
  return $a(z(a))
};
r.z = function(a, b) {
  return N(b, a)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = function(a) {
  return P(Ic(a))
};
r.ha = function(a) {
  return I(Ic(a))
};
r.ia = function(a) {
  return J(Ic(a))
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new Jc(b, this.Nb, this.x, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(Gb, this.l)
};
function Kc(a, b) {
  this.sb = a;
  this.end = b;
  this.p = 0;
  this.i = 2
}
Kc.prototype.A = p("end");
Kc.prototype.add = function(a) {
  this.sb[this.end] = a;
  return this.end += 1
};
Kc.prototype.Ea = function() {
  var a = new Lc(this.sb, 0, this.end);
  this.sb = l;
  return a
};
function Lc(a, b, c) {
  this.e = a;
  this.W = b;
  this.end = c;
  this.p = 0;
  this.i = 524306
}
r = Lc.prototype;
r.Ua = function(a, b) {
  return Cb.o(a, b, this.e[this.W], this.W + 1)
};
r.Va = function(a, b, c) {
  return Cb.o(a, b, c, this.W)
};
r.Sb = function() {
  this.W === this.end && e(Error("-drop-first of empty chunk"));
  return new Lc(this.e, this.W + 1, this.end)
};
r.Ma = function(a, b) {
  return this.e[this.W + b]
};
r.Na = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.W : a) ? this.e[this.W + b] : c
};
r.A = function() {
  return this.end - this.W
};
var Mc = function() {
  function a(a, b, c) {
    return new Lc(a, b, c)
  }
  function b(a, b) {
    return d.b(a, b, a.length)
  }
  function c(a) {
    return d.b(a, 0, a.length)
  }
  var d = l, d = function(d, i, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, i);
      case 3:
        return a.call(this, d, i, g)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.d = c;
  d.a = b;
  d.b = a;
  return d
}();
function Nc(a, b, c) {
  this.Ea = a;
  this.Ra = b;
  this.l = c;
  this.p = 0;
  this.i = 27656296
}
r = Nc.prototype;
r.z = function(a, b) {
  return N(b, a)
};
r.B = ba();
r.ha = function() {
  return y.a(this.Ea, 0)
};
r.ia = function() {
  return 1 < wa(this.Ea) ? new Nc(ob(this.Ea), this.Ra, this.l) : this.Ra == l ? Gb : this.Ra
};
r.vb = function() {
  return this.Ra == l ? l : this.Ra
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new Nc(this.Ea, this.Ra, b)
};
r.D = p("l");
r.Tb = h;
r.wb = p("Ea");
r.xb = function() {
  return this.Ra == l ? Gb : this.Ra
};
function Oc(a, b) {
  return 0 === wa(a) ? b : new Nc(a, b, l)
}
function Pc(a) {
  for(var b = [];;) {
    if(P(a)) {
      b.push(I(a)), a = H(a)
    }else {
      return b
    }
  }
}
function Qc(a, b) {
  if(Ib(a)) {
    return Nb(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var i;
    i = (i = 0 < d) ? P(c) : i;
    if(u(i)) {
      c = H(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Sc = function Rc(b) {
  return b == l ? l : H(b) == l ? P(I(b)) : N(I(b), Rc(H(b)))
}, Tc = function() {
  function a(a, b) {
    return new Jc(l, o, function() {
      var c = P(a);
      return c ? $b(c) ? Oc(tb(c), d.a(ub(c), b)) : N(I(c), d.a(J(c), b)) : b
    })
  }
  function b(a) {
    return new Jc(l, o, function() {
      return a
    })
  }
  function c() {
    return new Jc(l, o, q(l))
  }
  var d = l, f = function() {
    function a(c, d, f) {
      var i = l;
      t(f) && (i = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, i)
    }
    function b(a, c, f) {
      var g = function B(a, b) {
        return new Jc(l, o, function() {
          var c = P(a);
          return c ? $b(c) ? Oc(tb(c), B(ub(c), b)) : N(I(c), B(J(c), b)) : u(b) ? B(I(b), H(b)) : l
        })
      };
      return g.a ? g.a(d.a(a, c), f) : g.call(l, d.a(a, c), f)
    }
    a.n = 2;
    a.k = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.c = b;
    return a
  }(), d = function(d, g, j) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return f.c(d, g, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.n = 2;
  d.k = f.k;
  d.t = c;
  d.d = b;
  d.a = a;
  d.c = f.c;
  return d
}(), Uc = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)))
  }
  function b(a, b, c) {
    return N(a, N(b, c))
  }
  var c = l, d = function() {
    function a(c, d, f, m, n) {
      var w = l;
      t(n) && (w = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, m, w)
    }
    function b(a, c, d, f, i) {
      return N(a, N(c, N(d, N(f, Sc(i)))))
    }
    a.n = 4;
    a.k = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), n = I(H(H(H(a)))), a = J(H(H(H(a))));
      return b(c, d, f, n, a)
    };
    a.c = b;
    return a
  }(), c = function(c, i, g, j, k) {
    switch(arguments.length) {
      case 1:
        return P(c);
      case 2:
        return N(c, i);
      case 3:
        return b.call(this, c, i, g);
      case 4:
        return a.call(this, c, i, g, j);
      default:
        return d.c(c, i, g, j, F(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.n = 4;
  c.k = d.k;
  c.d = function(a) {
    return P(a)
  };
  c.a = function(a, b) {
    return N(a, b)
  };
  c.b = b;
  c.o = a;
  c.c = d.c;
  return c
}();
function Vc(a) {
  return hb(a)
}
function Wc(a) {
  return jb(a)
}
function Xc(a, b, c) {
  return kb(a, b, c)
}
function Yc(a, b, c) {
  var d = P(c);
  if(0 === b) {
    return a.t ? a.t() : a.call(l)
  }
  var c = Ea(d), f = z(d);
  if(1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(l, c)
  }
  var d = Ea(f), i = z(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(l, c, d)
  }
  var f = Ea(i), g = z(i);
  if(3 === b) {
    return a.b ? a.b(c, d, f) : a.b ? a.b(c, d, f) : a.call(l, c, d, f)
  }
  var i = Ea(g), j = z(g);
  if(4 === b) {
    return a.o ? a.o(c, d, f, i) : a.o ? a.o(c, d, f, i) : a.call(l, c, d, f, i)
  }
  g = Ea(j);
  j = z(j);
  if(5 === b) {
    return a.ja ? a.ja(c, d, f, i, g) : a.ja ? a.ja(c, d, f, i, g) : a.call(l, c, d, f, i, g)
  }
  var a = Ea(j), k = z(j);
  if(6 === b) {
    return a.Pa ? a.Pa(c, d, f, i, g, a) : a.Pa ? a.Pa(c, d, f, i, g, a) : a.call(l, c, d, f, i, g, a)
  }
  var j = Ea(k), m = z(k);
  if(7 === b) {
    return a.ib ? a.ib(c, d, f, i, g, a, j) : a.ib ? a.ib(c, d, f, i, g, a, j) : a.call(l, c, d, f, i, g, a, j)
  }
  var k = Ea(m), n = z(m);
  if(8 === b) {
    return a.Lb ? a.Lb(c, d, f, i, g, a, j, k) : a.Lb ? a.Lb(c, d, f, i, g, a, j, k) : a.call(l, c, d, f, i, g, a, j, k)
  }
  var m = Ea(n), w = z(n);
  if(9 === b) {
    return a.Mb ? a.Mb(c, d, f, i, g, a, j, k, m) : a.Mb ? a.Mb(c, d, f, i, g, a, j, k, m) : a.call(l, c, d, f, i, g, a, j, k, m)
  }
  var n = Ea(w), B = z(w);
  if(10 === b) {
    return a.Ab ? a.Ab(c, d, f, i, g, a, j, k, m, n) : a.Ab ? a.Ab(c, d, f, i, g, a, j, k, m, n) : a.call(l, c, d, f, i, g, a, j, k, m, n)
  }
  var w = Ea(B), D = z(B);
  if(11 === b) {
    return a.Bb ? a.Bb(c, d, f, i, g, a, j, k, m, n, w) : a.Bb ? a.Bb(c, d, f, i, g, a, j, k, m, n, w) : a.call(l, c, d, f, i, g, a, j, k, m, n, w)
  }
  var B = Ea(D), K = z(D);
  if(12 === b) {
    return a.Cb ? a.Cb(c, d, f, i, g, a, j, k, m, n, w, B) : a.Cb ? a.Cb(c, d, f, i, g, a, j, k, m, n, w, B) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B)
  }
  var D = Ea(K), G = z(K);
  if(13 === b) {
    return a.Db ? a.Db(c, d, f, i, g, a, j, k, m, n, w, B, D) : a.Db ? a.Db(c, d, f, i, g, a, j, k, m, n, w, B, D) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B, D)
  }
  var K = Ea(G), O = z(G);
  if(14 === b) {
    return a.Eb ? a.Eb(c, d, f, i, g, a, j, k, m, n, w, B, D, K) : a.Eb ? a.Eb(c, d, f, i, g, a, j, k, m, n, w, B, D, K) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B, D, K)
  }
  var G = Ea(O), S = z(O);
  if(15 === b) {
    return a.Fb ? a.Fb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G) : a.Fb ? a.Fb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B, D, K, G)
  }
  var O = Ea(S), pa = z(S);
  if(16 === b) {
    return a.Gb ? a.Gb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O) : a.Gb ? a.Gb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O)
  }
  var S = Ea(pa), L = z(pa);
  if(17 === b) {
    return a.Hb ? a.Hb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S) : a.Hb ? a.Hb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S)
  }
  var pa = Ea(L), xa = z(L);
  if(18 === b) {
    return a.Ib ? a.Ib(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa) : a.Ib ? a.Ib(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa)
  }
  L = Ea(xa);
  xa = z(xa);
  if(19 === b) {
    return a.Jb ? a.Jb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa, L) : a.Jb ? a.Jb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa, L) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa, L)
  }
  var ja = Ea(xa);
  z(xa);
  if(20 === b) {
    return a.Kb ? a.Kb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa, L, ja) : a.Kb ? a.Kb(c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa, L, ja) : a.call(l, c, d, f, i, g, a, j, k, m, n, w, B, D, K, G, O, S, pa, L, ja)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var U = function() {
  function a(a, b, c, d, f) {
    b = Uc.o(b, c, d, f);
    c = a.n;
    return u(a.k) ? (d = Qc(b, c + 1), d <= c ? Yc(a, d, b) : a.k(b)) : a.apply(a, Pc(b))
  }
  function b(a, b, c, d) {
    b = Uc.b(b, c, d);
    c = a.n;
    return u(a.k) ? (d = Qc(b, c + 1), d <= c ? Yc(a, d, b) : a.k(b)) : a.apply(a, Pc(b))
  }
  function c(a, b, c) {
    b = Uc.a(b, c);
    c = a.n;
    if(u(a.k)) {
      var d = Qc(b, c + 1);
      return d <= c ? Yc(a, d, b) : a.k(b)
    }
    return a.apply(a, Pc(b))
  }
  function d(a, b) {
    var c = a.n;
    if(u(a.k)) {
      var d = Qc(b, c + 1);
      return d <= c ? Yc(a, d, b) : a.k(b)
    }
    return a.apply(a, Pc(b))
  }
  var f = l, i = function() {
    function a(c, d, f, i, g, D) {
      var K = l;
      t(D) && (K = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, i, g, K)
    }
    function b(a, c, d, f, i, g) {
      c = N(c, N(d, N(f, N(i, Sc(g)))));
      d = a.n;
      return u(a.k) ? (f = Qc(c, d + 1), f <= d ? Yc(a, f, c) : a.k(c)) : a.apply(a, Pc(c))
    }
    a.n = 5;
    a.k = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), i = I(H(H(H(a)))), g = I(H(H(H(H(a))))), a = J(H(H(H(H(a)))));
      return b(c, d, f, i, g, a)
    };
    a.c = b;
    return a
  }(), f = function(f, j, k, m, n, w) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, k);
      case 4:
        return b.call(this, f, j, k, m);
      case 5:
        return a.call(this, f, j, k, m, n);
      default:
        return i.c(f, j, k, m, n, F(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.n = 5;
  f.k = i.k;
  f.a = d;
  f.b = c;
  f.o = b;
  f.ja = a;
  f.c = i.c;
  return f
}(), Zc = function() {
  function a(a, b) {
    return!wb.a(a, b)
  }
  function b() {
    return o
  }
  var c = l, d = function() {
    function a(c, d, f) {
      var m = l;
      t(f) && (m = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, m)
    }
    function b(a, c, d) {
      return Lb(U.o(wb, a, c, d))
    }
    a.n = 2;
    a.k = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.c = b;
    return a
  }(), c = function(c, i, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this);
      case 2:
        return a.call(this, c, i);
      default:
        return d.c(c, i, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.n = 2;
  c.k = d.k;
  c.d = b;
  c.a = a;
  c.c = d.c;
  return c
}();
function $c(a) {
  return P(a) ? a : l
}
function ad(a, b) {
  for(;;) {
    if(P(b) == l) {
      return h
    }
    if(u(a.d ? a.d(I(b)) : a.call(l, I(b)))) {
      var c = a, d = H(b), a = c, b = d
    }else {
      return o
    }
  }
}
function bd(a) {
  for(var b = cd;;) {
    if(P(a)) {
      var c = b.d ? b.d(I(a)) : b.call(l, I(a));
      if(u(c)) {
        return c
      }
      a = H(a)
    }else {
      return l
    }
  }
}
function cd(a) {
  return a
}
function dd() {
  return function() {
    function a(a) {
      t(a) && F(Array.prototype.slice.call(arguments, 0), 0);
      return h
    }
    a.n = 0;
    a.k = function(a) {
      P(a);
      return h
    };
    a.c = q(h);
    return a
  }()
}
var ed = function() {
  function a(a, b, c, f) {
    return new Jc(l, o, function() {
      var m = P(b), n = P(c), w = P(f);
      return(m ? n ? w : n : m) ? N(a.b ? a.b(I(m), I(n), I(w)) : a.call(l, I(m), I(n), I(w)), d.o(a, J(m), J(n), J(w))) : l
    })
  }
  function b(a, b, c) {
    return new Jc(l, o, function() {
      var f = P(b), m = P(c);
      return(f ? m : f) ? N(a.a ? a.a(I(f), I(m)) : a.call(l, I(f), I(m)), d.b(a, J(f), J(m))) : l
    })
  }
  function c(a, b) {
    return new Jc(l, o, function() {
      var c = P(b);
      if(c) {
        if($b(c)) {
          for(var f = tb(c), m = Nb(f), n = new Kc(ua.d(m), 0), w = 0;;) {
            if(w < m) {
              var B = a.d ? a.d(y.a(f, w)) : a.call(l, y.a(f, w));
              n.add(B);
              w += 1
            }else {
              break
            }
          }
          return Oc(n.Ea(), d.a(a, ub(c)))
        }
        return N(a.d ? a.d(I(c)) : a.call(l, I(c)), d.a(a, J(c)))
      }
      return l
    })
  }
  var d = l, f = function() {
    function a(c, d, f, i, w) {
      var B = l;
      t(w) && (B = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, i, B)
    }
    function b(a, c, f, i, g) {
      var B = function K(a) {
        return new Jc(l, o, function() {
          var b = d.a(P, a);
          return ad(cd, b) ? N(d.a(I, b), K(d.a(J, b))) : l
        })
      };
      return d.a(function(b) {
        return U.a(a, b)
      }, B.d ? B.d(Mb.c(g, i, F([f, c], 0))) : B.call(l, Mb.c(g, i, F([f, c], 0))))
    }
    a.n = 4;
    a.k = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), i = I(H(H(H(a)))), a = J(H(H(H(a))));
      return b(c, d, f, i, a)
    };
    a.c = b;
    return a
  }(), d = function(d, g, j, k, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, j);
      case 4:
        return a.call(this, d, g, j, k);
      default:
        return f.c(d, g, j, k, F(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.n = 4;
  d.k = f.k;
  d.a = c;
  d.b = b;
  d.o = a;
  d.c = f.c;
  return d
}(), gd = function fd(b, c) {
  return new Jc(l, o, function() {
    if(0 < b) {
      var d = P(c);
      return d ? N(I(d), fd(b - 1, J(d))) : l
    }
    return l
  })
};
function hd(a) {
  function b(a, b) {
    for(;;) {
      var f = P(b), i = 0 < a;
      if(u(i ? f : i)) {
        i = a - 1, f = J(f), a = i, b = f
      }else {
        return f
      }
    }
  }
  return new Jc(l, o, function() {
    return b.a ? b.a(1, a) : b.call(l, 1, a)
  })
}
var id = function() {
  function a(a, b) {
    return gd(a, c.d(b))
  }
  function b(a) {
    return new Jc(l, o, function() {
      return N(a, c.d(a))
    })
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.d = b;
  c.a = a;
  return c
}(), jd = function() {
  function a(a, b) {
    return gd(a, c.d(b))
  }
  function b(a) {
    return new Jc(l, o, function() {
      return N(a.t ? a.t() : a.call(l), c.d(a))
    })
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.d = b;
  c.a = a;
  return c
}(), kd = function() {
  function a(a, c) {
    return new Jc(l, o, function() {
      var i = P(a), g = P(c);
      return(i ? g : i) ? N(I(i), N(I(g), b.a(J(i), J(g)))) : l
    })
  }
  var b = l, c = function() {
    function a(b, d, j) {
      var k = l;
      t(j) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k)
    }
    function c(a, d, f) {
      return new Jc(l, o, function() {
        var c = ed.a(P, Mb.c(f, d, F([a], 0)));
        return ad(cd, c) ? Tc.a(ed.a(I, c), U.a(b, ed.a(J, c))) : l
      })
    }
    a.n = 2;
    a.k = function(a) {
      var b = I(a), d = I(H(a)), a = J(H(a));
      return c(b, d, a)
    };
    a.c = c;
    return a
  }(), b = function(b, f, i) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.c(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.n = 2;
  b.k = c.k;
  b.a = a;
  b.c = c.c;
  return b
}();
function ld(a, b) {
  return hd(kd.a(id.d(a), b))
}
function md(a) {
  var b = function d(a, b) {
    return new Jc(l, o, function() {
      var g = P(a);
      return g ? N(I(g), d(J(g), b)) : P(b) ? d(I(b), J(b)) : l
    })
  };
  return b.a ? b.a(l, a) : b.call(l, l, a)
}
var nd = function() {
  function a(a, b) {
    return md(ed.a(a, b))
  }
  var b = l, c = function() {
    function a(c, d, j) {
      var k = l;
      t(j) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, k)
    }
    function b(a, c, d) {
      return md(U.o(ed, a, c, d))
    }
    a.n = 2;
    a.k = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.c = b;
    return a
  }(), b = function(b, f, i) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.c(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.n = 2;
  b.k = c.k;
  b.a = a;
  b.c = c.c;
  return b
}(), pd = function od(b, c) {
  return new Jc(l, o, function() {
    var d = P(c);
    if(d) {
      if($b(d)) {
        for(var f = tb(d), i = Nb(f), g = new Kc(ua.d(i), 0), j = 0;;) {
          if(j < i) {
            if(u(b.d ? b.d(y.a(f, j)) : b.call(l, y.a(f, j)))) {
              var k = y.a(f, j);
              g.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return Oc(g.Ea(), od(b, ub(d)))
      }
      f = I(d);
      d = J(d);
      return u(b.d ? b.d(f) : b.call(l, f)) ? N(f, od(b, d)) : od(b, d)
    }
    return l
  })
};
function sd(a, b) {
  var c;
  c = a ? ((c = a.p & 1) ? c : a.ic) ? h : a.p ? o : v(gb, a) : v(gb, a);
  return c ? Wc(kc.b(ib, hb(a), b)) : kc.b(Aa, a, b)
}
var td = function() {
  function a(a, b, c) {
    for(var g = bc, b = P(b);;) {
      if(b) {
        a = A.b(a, I(b), g);
        if(g === a) {
          return c
        }
        b = H(b)
      }else {
        return a
      }
    }
  }
  function b(a, b) {
    return kc.b(Qb, a, b)
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}(), vd = function ud(b, c, d) {
  var f = Q.b(c, 0, l), c = xc(c);
  return u(c) ? Rb.b(b, f, ud(A.b(b, f, l), c, d)) : Rb.b(b, f, d)
}, wd = function() {
  function a(a, d, f, i) {
    var g = l;
    t(i) && (g = F(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, f, g)
  }
  function b(b, d, f, i) {
    var g = Q.b(d, 0, l), d = xc(d);
    return u(d) ? Rb.b(b, g, U.ja(a, A.b(b, g, l), d, f, i)) : Rb.b(b, g, U.b(f, A.b(b, g, l), i))
  }
  a.n = 3;
  a.k = function(a) {
    var d = I(a), f = I(H(a)), i = I(H(H(a))), a = J(H(H(a)));
    return b(d, f, i, a)
  };
  a.c = b;
  return a
}();
function xd(a, b) {
  this.s = a;
  this.e = b
}
function yd(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function zd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new xd(a, ua.d(32));
    d.e[0] = c;
    c = d;
    b -= 5
  }
}
var Bd = function Ad(b, c, d, f) {
  var i = new xd(d.s, d.e.slice()), g = b.f - 1 >>> c & 31;
  5 === c ? i.e[g] = f : (d = d.e[g], b = d != l ? Ad(b, c - 5, d, f) : zd(l, c - 5, f), i.e[g] = b);
  return i
};
function Cd(a, b) {
  var c = 0 <= b;
  if(c ? b < a.f : c) {
    if(b >= yd(a)) {
      return a.fa
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.e[b >>> d & 31], d = f
      }else {
        return c.e
      }
    }
  }else {
    e(Error([R("No item "), R(b), R(" in vector of length "), R(a.f)].join("")))
  }
}
var Ed = function Dd(b, c, d, f, i) {
  var g = new xd(d.s, d.e.slice());
  if(0 === c) {
    g.e[f & 31] = i
  }else {
    var j = f >>> c & 31, b = Dd(b, c - 5, d.e[j], f, i);
    g.e[j] = b
  }
  return g
};
function Fd(a, b, c, d, f, i) {
  this.l = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.fa = f;
  this.h = i;
  this.p = 1;
  this.i = 167668511
}
r = Fd.prototype;
r.$a = function() {
  var a = this.f, b = this.shift, c = new xd({}, this.root.e.slice()), d = this.fa, f = ua.d(32);
  ac(d, 0, f, 0, d.length);
  return new Gd(a, b, c, f)
};
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.T = function(a, b) {
  return y.b(a, b, l)
};
r.U = function(a, b, c) {
  return y.b(a, b, c)
};
r.ga = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.f : d) {
    return yd(a) <= b ? (a = this.fa.slice(), a[b & 31] = c, new Fd(this.l, this.f, this.shift, this.root, a, l)) : new Fd(this.l, this.f, this.shift, Ed(a, this.shift, this.root, b, c), this.fa, l)
  }
  if(b === this.f) {
    return Aa(a, c)
  }
  e(Error([R("Index "), R(b), R(" out of bounds  [0,"), R(this.f), R("]")].join("")))
};
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  if(32 > this.f - yd(a)) {
    var c = this.fa.slice();
    c.push(b);
    return new Fd(this.l, this.f + 1, this.shift, this.root, c, l)
  }
  var d = this.f >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new xd(l, ua.d(32));
    d.e[0] = this.root;
    var f = zd(l, this.shift, new xd(l, this.fa));
    d.e[1] = f
  }else {
    d = Bd(a, this.shift, this.root, new xd(l, this.fa))
  }
  return new Fd(this.l, this.f + 1, c, d, [b], l)
};
r.qb = function(a) {
  return 0 < this.f ? new Fb(a, this.f - 1, l) : Gb
};
r.ob = function(a) {
  return y.a(a, 0)
};
r.pb = function(a) {
  return y.a(a, 1)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.Ua = function(a, b) {
  return Cb.a(a, b)
};
r.Va = function(a, b, c) {
  return Cb.b(a, b, c)
};
r.B = function(a) {
  return 0 === this.f ? l : Hd.b(a, 0, 0)
};
r.A = p("f");
r.ab = function(a) {
  return 0 < this.f ? y.a(a, this.f - 1) : l
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new Fd(b, this.f, this.shift, this.root, this.fa, this.h)
};
r.D = p("l");
r.Ma = function(a, b) {
  return Cd(a, b)[b & 31]
};
r.Na = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.f : d) ? y.a(a, b) : c
};
r.V = function() {
  return Va(Id, this.l)
};
var Jd = new xd(l, ua.d(32)), Id = new Fd(l, 0, 5, Jd, [], 0);
function V(a) {
  for(var b = P(a), c = hb(Id);;) {
    if(b != l) {
      a = H(b), b = I(b), c = ib(c, b), b = a
    }else {
      return jb(c)
    }
  }
}
function Kd(a) {
  return kc.b(Mb, Id, a)
}
var W = function() {
  function a(a) {
    var c = l;
    t(a) && (c = F(Array.prototype.slice.call(arguments, 0), 0));
    return Kd(c)
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return Kd(a)
  };
  a.c = function(a) {
    return Kd(a)
  };
  return a
}();
function Ld(a, b, c, d, f) {
  this.Za = a;
  this.Ja = b;
  this.q = c;
  this.W = d;
  this.l = f;
  this.p = 0;
  this.i = 27525356
}
r = Ld.prototype;
r.Oa = function(a) {
  return this.W + 1 < this.Ja.length ? (a = Hd.o(this.Za, this.Ja, this.q, this.W + 1), a == l ? l : a) : vb(a)
};
r.z = function(a, b) {
  return N(b, a)
};
r.B = ba();
r.ha = function() {
  return this.Ja[this.W]
};
r.ia = function(a) {
  return this.W + 1 < this.Ja.length ? (a = Hd.o(this.Za, this.Ja, this.q, this.W + 1), a == l ? Gb : a) : ub(a)
};
r.vb = function() {
  var a = this.Ja.length, a = this.q + a < wa(this.Za) ? Hd.b(this.Za, this.q + a, 0) : l;
  return a == l ? l : a
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return Hd.ja(this.Za, this.Ja, this.q, this.W, b)
};
r.V = function() {
  return Va(Id, this.l)
};
r.Tb = h;
r.wb = function() {
  return Mc.a(this.Ja, this.W)
};
r.xb = function() {
  var a = this.Ja.length, a = this.q + a < wa(this.Za) ? Hd.b(this.Za, this.q + a, 0) : l;
  return a == l ? Gb : a
};
var Hd = function() {
  function a(a, b, c, d, k) {
    return new Ld(a, b, c, d, k)
  }
  function b(a, b, c, j) {
    return d.ja(a, b, c, j, l)
  }
  function c(a, b, c) {
    return d.ja(a, Cd(a, b), b, c, l)
  }
  var d = l, d = function(d, i, g, j, k) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, i, g);
      case 4:
        return b.call(this, d, i, g, j);
      case 5:
        return a.call(this, d, i, g, j, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.b = c;
  d.o = b;
  d.ja = a;
  return d
}(), Nd = function Md(b, c, d, f) {
  var d = b.root.s === d.s ? d : new xd(b.root.s, d.e.slice()), i = b.f - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var g = d.e[i], b = g != l ? Md(b, c - 5, g, f) : zd(b.root.s, c - 5, f)
  }
  d.e[i] = b;
  return d
};
function Gd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.fa = d;
  this.i = 275;
  this.p = 22
}
r = Gd.prototype;
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.T = function(a, b) {
  return y.b(a, b, l)
};
r.U = function(a, b, c) {
  return y.b(a, b, c)
};
r.Ma = function(a, b) {
  if(this.root.s) {
    return Cd(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.Na = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.f : d) ? y.a(a, b) : c
};
r.A = function() {
  if(this.root.s) {
    return this.f
  }
  e(Error("count after persistent!"))
};
r.Xb = function(a, b, c) {
  var d = this;
  if(d.root.s) {
    if(function() {
      var a = 0 <= b;
      return a ? b < d.f : a
    }()) {
      if(yd(a) <= b) {
        d.fa[b & 31] = c
      }else {
        var f = function g(a, f) {
          var m = d.root.s === f.s ? f : new xd(d.root.s, f.e.slice());
          if(0 === a) {
            m.e[b & 31] = c
          }else {
            var n = b >>> a & 31, w = g(a - 5, m.e[n]);
            m.e[n] = w
          }
          return m
        }.call(l, d.shift, d.root);
        d.root = f
      }
      return a
    }
    if(b === d.f) {
      return ib(a, c)
    }
    e(Error([R("Index "), R(b), R(" out of bounds for TransientVector of length"), R(d.f)].join("")))
  }
  e(Error("assoc! after persistent!"))
};
r.rb = function(a, b, c) {
  return lb(a, b, c)
};
r.gb = function(a, b) {
  if(this.root.s) {
    if(32 > this.f - yd(a)) {
      this.fa[this.f & 31] = b
    }else {
      var c = new xd(this.root.s, this.fa), d = ua.d(32);
      d[0] = b;
      this.fa = d;
      if(this.f >>> 5 > 1 << this.shift) {
        var d = ua.d(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = zd(this.root.s, this.shift, c);
        this.root = new xd(this.root.s, d);
        this.shift = f
      }else {
        this.root = Nd(a, this.shift, this.root, c)
      }
    }
    this.f += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
r.hb = function(a) {
  if(this.root.s) {
    this.root.s = l;
    var a = this.f - yd(a), b = ua.d(a);
    ac(this.fa, 0, b, 0, a);
    return new Fd(l, this.f, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
V([]);
function Od() {
  this.p = 0;
  this.i = 2097152
}
Od.prototype.u = q(o);
var Pd = new Od;
function Qd(a, b) {
  return dc(Yb(b) ? Nb(a) === Nb(b) ? ad(cd, ed.a(function(a) {
    return wb.a(A.b(b, I(a), Pd), I(H(a)))
  }, a)) : l : l)
}
function Rd(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return l
    }
  }
}
function Sd(a, b) {
  var c = Za(a), d = Za(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Td(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var i = b[f];
      c[i] = a[i];
      f += 1
    }else {
      break
    }
  }
  return c
}
function Ud(a, b, c, d, f) {
  this.l = a;
  this.keys = b;
  this.Ta = c;
  this.mb = d;
  this.h = f;
  this.p = 1;
  this.i = 15075087
}
r = Ud.prototype;
r.$a = function(a) {
  return Vc(sd(yb(), a))
};
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return((a = ea(b)) ? Rd(b, this.keys) != l : a) ? this.Ta[b] : c
};
r.ga = function(a, b, c) {
  if(ea(b)) {
    if(Rd(b, this.keys) != l) {
      var d = Td(this.Ta, this.keys);
      d[b] = c;
      return new Ud(this.l, this.keys, d, this.mb + 1, l)
    }
    var f = this.mb < Vd;
    if(f ? f : this.keys.length < Vd) {
      return d = Td(this.Ta, this.keys), f = this.keys.slice(), d[b] = c, f.push(b), new Ud(this.l, f, d, this.mb + 1, l)
    }
  }
  a: {
    for(var f = a.keys, i = f.length, g = a.Ta, j = Tb(Wd, Ub(a)), a = 0, j = hb(j);;) {
      if(a < i) {
        var k = f[a], a = a + 1, j = kb(j, k, g[k])
      }else {
        d = Wc(kb(j, b, c));
        break a
      }
    }
  }
  return d
};
r.fb = function(a, b) {
  var c = ea(b);
  return(c ? Rd(b, this.keys) != l : c) ? h : o
};
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = function() {
  var a = this;
  return 0 < a.keys.length ? ed.a(function(b) {
    return W.c(F([b, a.Ta[b]], 0))
  }, a.keys.sort(Sd)) : l
};
r.A = function() {
  return this.keys.length
};
r.u = function(a, b) {
  return Qd(a, b)
};
r.F = function(a, b) {
  return new Ud(b, this.keys, this.Ta, this.mb, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(Xd, this.l)
};
r.Aa = function(a, b) {
  var c = ea(b);
  if(c ? Rd(b, this.keys) != l : c) {
    var c = this.keys.slice(), d = Td(this.Ta, this.keys);
    c.splice(Rd(b, c), 1);
    delete d[b];
    return new Ud(this.l, c, d, this.mb + 1, l)
  }
  return a
};
var Xd = new Ud(l, [], {}, 0, 0), Vd = 32;
function Yd(a, b) {
  return new Ud(l, a, b, 0, l)
}
function Zd(a, b) {
  for(var c = a.e, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(wb.a(c[f], b)) {
      return f
    }
    f += 2
  }
}
function $d(a, b, c, d) {
  this.l = a;
  this.f = b;
  this.e = c;
  this.h = d;
  this.p = 1;
  this.i = 16123663
}
r = $d.prototype;
r.$a = function() {
  return new ae({}, this.e.length, this.e.slice())
};
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  a = Zd(a, b);
  return-1 === a ? c : this.e[a + 1]
};
r.ga = function(a, b, c) {
  var d = this, f = Zd(a, b);
  return-1 === f ? d.f < be ? new $d(d.l, d.f + 1, function() {
    var a = d.e.slice();
    a.push(b);
    a.push(c);
    return a
  }(), l) : Wc(Xc(Vc(sd(Wd, a)), b, c)) : c === d.e[f + 1] ? a : new $d(d.l, d.f, function() {
    var a = d.e.slice();
    a[f + 1] = c;
    return a
  }(), l)
};
r.fb = function(a, b) {
  return-1 !== Zd(a, b)
};
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = function() {
  var a = this;
  if(0 < a.f) {
    var b = a.e.length, c = function f(c) {
      return new Jc(l, o, function() {
        return c < b ? N(V([a.e[c], a.e[c + 1]]), f(c + 2)) : l
      })
    };
    return c.d ? c.d(0) : c.call(l, 0)
  }
  return l
};
r.A = p("f");
r.u = function(a, b) {
  return Qd(a, b)
};
r.F = function(a, b) {
  return new $d(b, this.f, this.e, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(ce, this.l)
};
r.Aa = function(a, b) {
  if(0 <= Zd(a, b)) {
    var c = this.e.length, d = c - 2;
    if(0 === d) {
      return ya(a)
    }
    for(var d = ua.d(d), f = 0, i = 0;;) {
      if(f >= c) {
        return new $d(this.l, this.f - 1, d, l)
      }
      wb.a(b, this.e[f]) || (d[i] = this.e[f], d[i + 1] = this.e[f + 1], i += 2);
      f += 2
    }
  }else {
    return a
  }
};
var ce = new $d(l, 0, [], l), be = 16;
function de(a, b) {
  for(var c = Nb(a), d = 0, f = hb(ce);;) {
    if(d < c) {
      var i = d + 1, f = kb(f, a[d], b[d]), d = i
    }else {
      return jb(f)
    }
  }
}
function ae(a, b, c) {
  this.bb = a;
  this.Qa = b;
  this.e = c;
  this.p = 14;
  this.i = 258
}
r = ae.prototype;
r.rb = function(a, b, c) {
  if(u(this.bb)) {
    var d = Zd(a, b);
    if(-1 === d) {
      if(this.Qa + 2 <= 2 * be) {
        return this.Qa += 2, this.e.push(b), this.e.push(c), a
      }
      var f;
      a: {
        for(var a = this.Qa, d = this.e, i = hb(Yd([], {})), g = 0;;) {
          if(g < a) {
            i = kb(i, d[g], d[g + 1]), g += 2
          }else {
            f = i;
            break a
          }
        }
      }
      return kb(f, b, c)
    }
    c !== this.e[d + 1] && (this.e[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.gb = function(a, b) {
  if(u(this.bb)) {
    var c;
    c = b ? ((c = b.i & 2048) ? c : b.ac) ? h : b.i ? o : v(Ma, b) : v(Ma, b);
    if(c) {
      return kb(a, Na(b), Oa(b))
    }
    c = P(b);
    for(var d = a;;) {
      var f = I(c);
      if(u(f)) {
        c = H(c), d = kb(d, Na(f), Oa(f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.hb = function() {
  if(u(this.bb)) {
    return this.bb = o, new $d(l, oc((this.Qa - this.Qa % 2) / 2), this.e, l)
  }
  e(Error("persistent! called twice"))
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  if(u(this.bb)) {
    return a = Zd(a, b), -1 === a ? c : this.e[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.A = function() {
  if(u(this.bb)) {
    return oc((this.Qa - this.Qa % 2) / 2)
  }
  e(Error("count after persistent!"))
};
var ee = function() {
  function a(a, b, c, g, j) {
    a = a.slice();
    a[b] = c;
    a[g] = j;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = l, c = function(c, f, i, g, j) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, i);
      case 5:
        return a.call(this, c, f, i, g, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.ja = a;
  return c
}();
function fe(a, b) {
  var c = ua.d(a.length - 2);
  ac(a, 0, c, 0, 2 * b);
  ac(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var ge = function() {
  function a(a, b, c, g, j, k) {
    a = a.Wa(b);
    a.e[c] = g;
    a.e[j] = k;
    return a
  }
  function b(a, b, c, g) {
    a = a.Wa(b);
    a.e[c] = g;
    return a
  }
  var c = l, c = function(c, f, i, g, j, k) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, i, g);
      case 6:
        return a.call(this, c, f, i, g, j, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.o = b;
  c.Pa = a;
  return c
}();
function he(a, b, c) {
  this.s = a;
  this.v = b;
  this.e = c
}
r = he.prototype;
r.za = function(a, b, c, d, f, i) {
  var g = 1 << (c >>> b & 31), j = wc(this.v & g - 1);
  if(0 === (this.v & g)) {
    var k = wc(this.v);
    if(2 * k < this.e.length) {
      a = this.Wa(a);
      b = a.e;
      i[0] = h;
      a: {
        c = 2 * (k - j);
        i = 2 * j + (c - 1);
        for(k = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[k] = b[i];
          k -= 1;
          c -= 1;
          i -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.v |= g;
      return a
    }
    if(16 <= k) {
      j = ua.d(32);
      j[c >>> b & 31] = ie.za(a, b + 5, c, d, f, i);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.v >>> d & 1) && (j[d] = this.e[f] != l ? ie.za(a, b + 5, Za(this.e[f]), this.e[f], this.e[f + 1], i) : this.e[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new je(a, k + 1, j)
    }
    b = ua.d(2 * (k + 4));
    ac(this.e, 0, b, 0, 2 * j);
    b[2 * j] = d;
    i[0] = h;
    b[2 * j + 1] = f;
    ac(this.e, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    d = this.Wa(a);
    d.e = b;
    d.v |= g;
    return d
  }
  k = this.e[2 * j];
  g = this.e[2 * j + 1];
  if(k == l) {
    return d = g.za(a, b + 5, c, d, f, i), d === g ? this : ge.o(this, a, 2 * j + 1, d)
  }
  if(wb.a(d, k)) {
    return f === g ? this : ge.o(this, a, 2 * j + 1, f)
  }
  i[0] = h;
  return ge.Pa(this, a, 2 * j, l, 2 * j + 1, ke.ib(a, b + 5, k, g, c, d, f))
};
r.jb = function() {
  return le.d(this.e)
};
r.Wa = function(a) {
  if(a === this.s) {
    return this
  }
  var b = wc(this.v), c = ua.d(0 > b ? 4 : 2 * (b + 1));
  ac(this.e, 0, c, 0, 2 * b);
  return new he(a, this.v, c)
};
r.Ba = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f;
        f = 1 << (b >>> a & 31);
        if(0 === (this.v & f)) {
          f = l
        }else {
          var i = wc(this.v & f - 1);
          f = this.e[2 * i];
          i = this.e[2 * i + 1];
          f = f == l ? i.Ba(a + 5, b, c) : wb.a(c, f) ? V([f, i]) : l
        }
        return f;
      case 4:
        return f = 1 << (b >>> a & 31), 0 === (this.v & f) ? f = d : (i = wc(this.v & f - 1), f = this.e[2 * i], i = this.e[2 * i + 1], f = f == l ? i.Ba(a + 5, b, c, d) : wb.a(c, f) ? V([f, i]) : d), f
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.kb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.v & d)) {
    return this
  }
  var f = wc(this.v & d - 1), i = this.e[2 * f], g = this.e[2 * f + 1];
  return i == l ? (a = g.kb(a + 5, b, c), a === g ? this : a != l ? new he(l, this.v, ee.b(this.e, 2 * f + 1, a)) : this.v === d ? l : new he(l, this.v ^ d, fe(this.e, f))) : wb.a(c, i) ? new he(l, this.v ^ d, fe(this.e, f)) : this
};
r.ya = function(a, b, c, d, f) {
  var i = 1 << (b >>> a & 31), g = wc(this.v & i - 1);
  if(0 === (this.v & i)) {
    var j = wc(this.v);
    if(16 <= j) {
      g = ua.d(32);
      g[b >>> a & 31] = ie.ya(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.v >>> c & 1) && (g[c] = this.e[d] != l ? ie.ya(a + 5, Za(this.e[d]), this.e[d], this.e[d + 1], f) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new je(l, j + 1, g)
    }
    a = ua.d(2 * (j + 1));
    ac(this.e, 0, a, 0, 2 * g);
    a[2 * g] = c;
    f[0] = h;
    a[2 * g + 1] = d;
    ac(this.e, 2 * g, a, 2 * (g + 1), 2 * (j - g));
    return new he(l, this.v | i, a)
  }
  i = this.e[2 * g];
  j = this.e[2 * g + 1];
  if(i == l) {
    return f = j.ya(a + 5, b, c, d, f), f === j ? this : new he(l, this.v, ee.b(this.e, 2 * g + 1, f))
  }
  if(wb.a(c, i)) {
    return d === j ? this : new he(l, this.v, ee.b(this.e, 2 * g + 1, d))
  }
  f[0] = h;
  return new he(l, this.v, ee.ja(this.e, 2 * g, l, 2 * g + 1, ke.Pa(a + 5, i, j, b, c, d)))
};
var ie = new he(l, 0, ua.d(0));
function je(a, b, c) {
  this.s = a;
  this.f = b;
  this.e = c
}
r = je.prototype;
r.ya = function(a, b, c, d, f) {
  var i = b >>> a & 31, g = this.e[i];
  if(g == l) {
    return new je(l, this.f + 1, ee.b(this.e, i, ie.ya(a + 5, b, c, d, f)))
  }
  a = g.ya(a + 5, b, c, d, f);
  return a === g ? this : new je(l, this.f, ee.b(this.e, i, a))
};
r.kb = function(a, b, c) {
  var d = b >>> a & 31, f = this.e[d];
  if(f != l) {
    a = f.kb(a + 5, b, c);
    if(a === f) {
      d = this
    }else {
      if(a == l) {
        if(8 >= this.f) {
          a: {
            for(var f = this.e, a = 2 * (this.f - 1), b = ua.d(a), c = 0, i = 1, g = 0;;) {
              if(c < a) {
                var j = c !== d;
                if(j ? f[c] != l : j) {
                  b[i] = f[c], i += 2, g |= 1 << c
                }
                c += 1
              }else {
                d = new he(l, g, b);
                break a
              }
            }
            d = aa
          }
        }else {
          d = new je(l, this.f - 1, ee.b(this.e, d, a))
        }
      }else {
        d = new je(l, this.f, ee.b(this.e, d, a))
      }
    }
    return d
  }
  return this
};
r.Ba = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f = this.e[b >>> a & 31];
        return f != l ? f.Ba(a + 5, b, c) : l;
      case 4:
        return f = this.e[b >>> a & 31], f != l ? f.Ba(a + 5, b, c, d) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.jb = function() {
  return me.d(this.e)
};
r.Wa = function(a) {
  return a === this.s ? this : new je(a, this.f, this.e.slice())
};
r.za = function(a, b, c, d, f, i) {
  var g = c >>> b & 31, j = this.e[g];
  if(j == l) {
    return a = ge.o(this, a, g, ie.za(a, b + 5, c, d, f, i)), a.f += 1, a
  }
  b = j.za(a, b + 5, c, d, f, i);
  return b === j ? this : ge.o(this, a, g, b)
};
function ne(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(wb.a(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function oe(a, b, c, d) {
  this.s = a;
  this.Fa = b;
  this.f = c;
  this.e = d
}
r = oe.prototype;
r.ya = function(a, b, c, d, f) {
  if(b === this.Fa) {
    a = ne(this.e, this.f, c);
    return-1 === a ? (a = this.e.length, b = ua.d(a + 2), ac(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, f[0] = h, new oe(l, this.Fa, this.f + 1, b)) : wb.a(this.e[a], d) ? this : new oe(l, this.Fa, this.f, ee.b(this.e, a + 1, d))
  }
  return(new he(l, 1 << (this.Fa >>> a & 31), [l, this])).ya(a, b, c, d, f)
};
r.kb = function(a, b, c) {
  a = ne(this.e, this.f, c);
  return-1 === a ? this : 1 === this.f ? l : new oe(l, this.Fa, this.f - 1, fe(this.e, oc((a - a % 2) / 2)))
};
r.Ba = function() {
  return function(a, b, c, d) {
    switch(arguments.length) {
      case 3:
        var f = ne(this.e, this.f, c);
        return 0 > f ? l : wb.a(c, this.e[f]) ? V([this.e[f], this.e[f + 1]]) : l;
      case 4:
        return f = ne(this.e, this.f, c), 0 > f ? d : wb.a(c, this.e[f]) ? V([this.e[f], this.e[f + 1]]) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.jb = function() {
  return le.d(this.e)
};
r.Wa = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 1:
        var d;
        a === this.s ? d = this : (d = ua.d(2 * (this.f + 1)), ac(this.e, 0, d, 0, 2 * this.f), d = new oe(a, this.Fa, this.f, d));
        return d;
      case 3:
        return a === this.s ? (this.e = c, this.f = b, d = this) : d = new oe(this.s, this.Fa, b, c), d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.za = function(a, b, c, d, f, i) {
  if(c === this.Fa) {
    b = ne(this.e, this.f, d);
    if(-1 === b) {
      if(this.e.length > 2 * this.f) {
        return a = ge.Pa(this, a, 2 * this.f, d, 2 * this.f + 1, f), i[0] = h, a.f += 1, a
      }
      b = this.e.length;
      c = ua.d(b + 2);
      ac(this.e, 0, c, 0, b);
      c[b] = d;
      c[b + 1] = f;
      i[0] = h;
      return this.Wa(a, this.f + 1, c)
    }
    return this.e[b + 1] === f ? this : ge.o(this, a, b + 1, f)
  }
  return(new he(a, 1 << (this.Fa >>> b & 31), [l, this, l, l])).za(a, b, c, d, f, i)
};
var ke = function() {
  function a(a, b, c, g, j, k, m) {
    var n = Za(c);
    if(n === j) {
      return new oe(l, n, 2, [c, g, k, m])
    }
    var w = [o];
    return ie.za(a, b, n, c, g, w).za(a, b, j, k, m, w)
  }
  function b(a, b, c, g, j, k) {
    var m = Za(b);
    if(m === g) {
      return new oe(l, m, 2, [b, c, j, k])
    }
    var n = [o];
    return ie.ya(a, m, b, c, n).ya(a, g, j, k, n)
  }
  var c = l, c = function(c, f, i, g, j, k, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, i, g, j, k);
      case 7:
        return a.call(this, c, f, i, g, j, k, m)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.Pa = b;
  c.ib = a;
  return c
}();
function pe(a, b, c, d, f) {
  this.l = a;
  this.Sa = b;
  this.q = c;
  this.La = d;
  this.h = f;
  this.p = 0;
  this.i = 31850572
}
r = pe.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.z = function(a, b) {
  return N(b, a)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = ba();
r.ha = function() {
  return this.La == l ? V([this.Sa[this.q], this.Sa[this.q + 1]]) : I(this.La)
};
r.ia = function() {
  return this.La == l ? le.b(this.Sa, this.q + 2, l) : le.b(this.Sa, this.q, H(this.La))
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new pe(b, this.Sa, this.q, this.La, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(Gb, this.l)
};
var le = function() {
  function a(a, b, c) {
    if(c == l) {
      for(c = a.length;;) {
        if(b < c) {
          if(a[b] != l) {
            return new pe(l, a, b, l, l)
          }
          var g = a[b + 1];
          if(u(g) && (g = g.jb(), u(g))) {
            return new pe(l, a, b + 2, g, l)
          }
          b += 2
        }else {
          return l
        }
      }
    }else {
      return new pe(l, a, b, c, l)
    }
  }
  function b(a) {
    return c.b(a, 0, l)
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.d = b;
  c.b = a;
  return c
}();
function qe(a, b, c, d, f) {
  this.l = a;
  this.Sa = b;
  this.q = c;
  this.La = d;
  this.h = f;
  this.p = 0;
  this.i = 31850572
}
r = qe.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.z = function(a, b) {
  return N(b, a)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = ba();
r.ha = function() {
  return I(this.La)
};
r.ia = function() {
  return me.o(l, this.Sa, this.q, H(this.La))
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new qe(b, this.Sa, this.q, this.La, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(Gb, this.l)
};
var me = function() {
  function a(a, b, c, g) {
    if(g == l) {
      for(g = b.length;;) {
        if(c < g) {
          var j = b[c];
          if(u(j) && (j = j.jb(), u(j))) {
            return new qe(a, b, c + 1, j, l)
          }
          c += 1
        }else {
          return l
        }
      }
    }else {
      return new qe(a, b, c, g, l)
    }
  }
  function b(a) {
    return c.o(l, a, 0, l)
  }
  var c = l, c = function(c, f, i, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, i, g)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.d = b;
  c.o = a;
  return c
}();
function re(a, b, c, d, f, i) {
  this.l = a;
  this.f = b;
  this.root = c;
  this.Z = d;
  this.ma = f;
  this.h = i;
  this.p = 1;
  this.i = 16123663
}
r = re.prototype;
r.$a = function() {
  return new se({}, this.root, this.f, this.Z, this.ma)
};
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return b == l ? this.Z ? this.ma : c : this.root == l ? c : Q.a(this.root.Ba(0, Za(b), b, [l, c]), 1)
};
r.ga = function(a, b, c) {
  if(b == l) {
    var d = this.Z;
    return(d ? c === this.ma : d) ? a : new re(this.l, this.Z ? this.f : this.f + 1, this.root, h, c, l)
  }
  d = [o];
  c = (this.root == l ? ie : this.root).ya(0, Za(b), b, c, d);
  return c === this.root ? a : new re(this.l, u(d[0]) ? this.f + 1 : this.f, c, this.Z, this.ma, l)
};
r.fb = function(a, b) {
  return b == l ? this.Z : this.root == l ? o : this.root.Ba(0, Za(b), b, bc) !== bc
};
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = function() {
  if(0 < this.f) {
    var a = this.root != l ? this.root.jb() : l;
    return this.Z ? N(V([l, this.ma]), a) : a
  }
  return l
};
r.A = p("f");
r.u = function(a, b) {
  return Qd(a, b)
};
r.F = function(a, b) {
  return new re(b, this.f, this.root, this.Z, this.ma, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(Wd, this.l)
};
r.Aa = function(a, b) {
  if(b == l) {
    return this.Z ? new re(this.l, this.f - 1, this.root, o, l, l) : a
  }
  if(this.root == l) {
    return a
  }
  var c = this.root.kb(0, Za(b), b);
  return c === this.root ? a : new re(this.l, this.f - 1, c, this.Z, this.ma, l)
};
var Wd = new re(l, 0, l, o, l, 0);
function se(a, b, c, d, f) {
  this.s = a;
  this.root = b;
  this.sa = c;
  this.Z = d;
  this.ma = f;
  this.p = 14;
  this.i = 258
}
r = se.prototype;
r.rb = function(a, b, c) {
  return te(a, b, c)
};
r.gb = function(a, b) {
  var c;
  a: {
    if(u(a.s)) {
      var d;
      d = b ? ((d = b.i & 2048) ? d : b.ac) ? h : b.i ? o : v(Ma, b) : v(Ma, b);
      if(d) {
        c = te(a, Na(b), Oa(b))
      }else {
        d = P(b);
        for(var f = a;;) {
          var i = I(d);
          if(u(i)) {
            d = H(d), f = te(f, Na(i), Oa(i))
          }else {
            c = f;
            break a
          }
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
  }
  return c
};
r.hb = function(a) {
  var b;
  u(a.s) ? (a.s = l, b = new re(l, a.sa, a.root, a.Z, a.ma, l)) : e(Error("persistent! called twice"));
  return b
};
r.T = function(a, b) {
  return b == l ? u(this.Z) ? this.ma : l : this.root == l ? l : Q.a(this.root.Ba(0, Za(b), b), 1)
};
r.U = function(a, b, c) {
  return b == l ? u(this.Z) ? this.ma : c : this.root == l ? c : Q.a(this.root.Ba(0, Za(b), b, [l, c]), 1)
};
r.A = function() {
  if(u(this.s)) {
    return this.sa
  }
  e(Error("count after persistent!"))
};
function te(a, b, c) {
  if(u(a.s)) {
    if(b == l) {
      if(a.ma !== c) {
        a.ma = c
      }
      if(!u(a.Z)) {
        a.sa += 1, a.Z = h
      }
    }else {
      var d = [o], b = (a.root == l ? ie : a.root).za(a.s, 0, Za(b), b, c, d);
      if(b !== a.root) {
        a.root = b
      }
      u(d[0]) && (a.sa += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function ue(a, b, c) {
  for(var d = b;;) {
    if(a != l) {
      b = u(c) ? a.left : a.right, d = Mb.a(d, a), a = b
    }else {
      return d
    }
  }
}
function ve(a, b, c, d, f) {
  this.l = a;
  this.stack = b;
  this.nb = c;
  this.f = d;
  this.h = f;
  this.p = 0;
  this.i = 31850570
}
r = ve.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.z = function(a, b) {
  return N(b, a)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = ba();
r.A = function(a) {
  return 0 > this.f ? Nb(H(a)) + 1 : this.f
};
r.ha = function() {
  return Ra(this.stack)
};
r.ia = function() {
  var a = I(this.stack), a = ue(this.nb ? a.right : a.left, H(this.stack), this.nb);
  return a != l ? new ve(l, a, this.nb, this.f - 1, l) : Gb
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new ve(b, this.stack, this.nb, this.f, this.h)
};
r.D = p("l");
function we(a, b, c, d) {
  return M(X, c) ? M(X, c.left) ? new X(c.key, c.m, c.left.Ca(), new Y(a, b, c.right, d, l), l) : M(X, c.right) ? new X(c.right.key, c.right.m, new Y(c.key, c.m, c.left, c.right.left, l), new Y(a, b, c.right.right, d, l), l) : new Y(a, b, c, d, l) : new Y(a, b, c, d, l)
}
function xe(a, b, c, d) {
  return M(X, d) ? M(X, d.right) ? new X(d.key, d.m, new Y(a, b, c, d.left, l), d.right.Ca(), l) : M(X, d.left) ? new X(d.left.key, d.left.m, new Y(a, b, c, d.left.left, l), new Y(d.key, d.m, d.left.right, d.right, l), l) : new Y(a, b, c, d, l) : new Y(a, b, c, d, l)
}
function ye(a, b, c, d) {
  if(M(X, c)) {
    return new X(a, b, c.Ca(), d, l)
  }
  if(M(Y, d)) {
    return xe(a, b, c, d.lb())
  }
  var f = M(X, d);
  if(f ? M(Y, d.left) : f) {
    return new X(d.left.key, d.left.m, new Y(a, b, c, d.left.left, l), xe(d.key, d.m, d.left.right, d.right.lb()), l)
  }
  e(Error("red-black tree invariant violation"))
}
function ze(a, b, c, d) {
  if(M(X, d)) {
    return new X(a, b, c, d.Ca(), l)
  }
  if(M(Y, c)) {
    return we(a, b, c.lb(), d)
  }
  var f = M(X, c);
  if(f ? M(Y, c.right) : f) {
    return new X(c.right.key, c.right.m, we(c.key, c.m, c.left.lb(), c.right.left), new Y(a, b, c.right.right, d, l), l)
  }
  e(Error("red-black tree invariant violation"))
}
function Y(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.h = f;
  this.p = 0;
  this.i = 32402207
}
r = Y.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.T = function(a, b) {
  return y.b(a, b, l)
};
r.U = function(a, b, c) {
  return y.b(a, b, c)
};
r.ga = function(a, b, c) {
  return Rb.b(V([this.key, this.m]), b, c)
};
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  return V([this.key, this.m, b])
};
r.ob = p("key");
r.pb = p("m");
r.Pb = function(a) {
  return a.Rb(this)
};
r.lb = function() {
  return new X(this.key, this.m, this.left, this.right, l)
};
r.replace = function(a, b, c, d) {
  return new Y(a, b, c, d, l)
};
r.Ob = function(a) {
  return a.Qb(this)
};
r.Qb = function(a) {
  return new Y(a.key, a.m, this, a.right, l)
};
r.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Hb.c(F([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.Rb = function(a) {
  return new Y(a.key, a.m, a.left, this, l)
};
r.Ca = function() {
  return this
};
r.Ua = function(a, b) {
  return Cb.a(a, b)
};
r.Va = function(a, b, c) {
  return Cb.b(a, b, c)
};
r.B = function() {
  return zb.a(this.key, this.m)
};
r.A = q(2);
r.ab = p("m");
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return Tb(V([this.key, this.m]), b)
};
r.D = q(l);
r.Ma = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : l
};
r.Na = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
r.V = function() {
  return V([])
};
function X(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.h = f;
  this.p = 0;
  this.i = 32402207
}
r = X.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.T = function(a, b) {
  return y.b(a, b, l)
};
r.U = function(a, b, c) {
  return y.b(a, b, c)
};
r.ga = function(a, b, c) {
  return Rb.b(V([this.key, this.m]), b, c)
};
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  return V([this.key, this.m, b])
};
r.ob = p("key");
r.pb = p("m");
r.Pb = function(a) {
  return new X(this.key, this.m, this.left, a, l)
};
r.lb = function() {
  e(Error("red-black tree invariant violation"))
};
r.replace = function(a, b, c, d) {
  return new X(a, b, c, d, l)
};
r.Ob = function(a) {
  return new X(this.key, this.m, a, this.right, l)
};
r.Qb = function(a) {
  return M(X, this.left) ? new X(this.key, this.m, this.left.Ca(), new Y(a.key, a.m, this.right, a.right, l), l) : M(X, this.right) ? new X(this.right.key, this.right.m, new Y(this.key, this.m, this.left, this.right.left, l), new Y(a.key, a.m, this.right.right, a.right, l), l) : new Y(a.key, a.m, this, a.right, l)
};
r.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Hb.c(F([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.Rb = function(a) {
  return M(X, this.right) ? new X(this.key, this.m, new Y(a.key, a.m, a.left, this.left, l), this.right.Ca(), l) : M(X, this.left) ? new X(this.left.key, this.left.m, new Y(a.key, a.m, a.left, this.left.left, l), new Y(this.key, this.m, this.left.right, this.right, l), l) : new Y(a.key, a.m, a.left, this, l)
};
r.Ca = function() {
  return new Y(this.key, this.m, this.left, this.right, l)
};
r.Ua = function(a, b) {
  return Cb.a(a, b)
};
r.Va = function(a, b, c) {
  return Cb.b(a, b, c)
};
r.B = function() {
  return zb.a(this.key, this.m)
};
r.A = q(2);
r.ab = p("m");
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return Tb(V([this.key, this.m]), b)
};
r.D = q(l);
r.Ma = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : l
};
r.Na = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
r.V = function() {
  return V([])
};
var Be = function Ae(b, c, d, f, i) {
  if(c == l) {
    return new X(d, f, l, l, l)
  }
  var g = b.a ? b.a(d, c.key) : b.call(l, d, c.key);
  if(0 === g) {
    return i[0] = c, l
  }
  if(0 > g) {
    return b = Ae(b, c.left, d, f, i), b != l ? c.Ob(b) : l
  }
  b = Ae(b, c.right, d, f, i);
  return b != l ? c.Pb(b) : l
}, De = function Ce(b, c) {
  if(b == l) {
    return c
  }
  if(c == l) {
    return b
  }
  if(M(X, b)) {
    if(M(X, c)) {
      var d = Ce(b.right, c.left);
      return M(X, d) ? new X(d.key, d.m, new X(b.key, b.m, b.left, d.left, l), new X(c.key, c.m, d.right, c.right, l), l) : new X(b.key, b.m, b.left, new X(c.key, c.m, d, c.right, l), l)
    }
    return new X(b.key, b.m, b.left, Ce(b.right, c), l)
  }
  if(M(X, c)) {
    return new X(c.key, c.m, Ce(b, c.left), c.right, l)
  }
  d = Ce(b.right, c.left);
  return M(X, d) ? new X(d.key, d.m, new Y(b.key, b.m, b.left, d.left, l), new Y(c.key, c.m, d.right, c.right, l), l) : ye(b.key, b.m, b.left, new Y(c.key, c.m, d, c.right, l))
}, Fe = function Ee(b, c, d, f) {
  if(c != l) {
    var i = b.a ? b.a(d, c.key) : b.call(l, d, c.key);
    if(0 === i) {
      return f[0] = c, De(c.left, c.right)
    }
    if(0 > i) {
      var g = Ee(b, c.left, d, f);
      return function() {
        var b = g != l;
        return b ? b : f[0] != l
      }() ? M(Y, c.left) ? ye(c.key, c.m, g, c.right) : new X(c.key, c.m, g, c.right, l) : l
    }
    var j = Ee(b, c.right, d, f);
    return function() {
      var b = j != l;
      return b ? b : f[0] != l
    }() ? M(Y, c.right) ? ze(c.key, c.m, c.left, j) : new X(c.key, c.m, c.left, j, l) : l
  }
  return l
}, He = function Ge(b, c, d, f) {
  var i = c.key, g = b.a ? b.a(d, i) : b.call(l, d, i);
  return 0 === g ? c.replace(i, f, c.left, c.right) : 0 > g ? c.replace(i, c.m, Ge(b, c.left, d, f), c.right) : c.replace(i, c.m, c.left, Ge(b, c.right, d, f))
};
function Ie(a, b, c, d, f) {
  this.xa = a;
  this.Ya = b;
  this.f = c;
  this.l = d;
  this.h = f;
  this.p = 0;
  this.i = 418776847
}
r = Ie.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  a = Je(a, b);
  return a != l ? a.m : c
};
r.ga = function(a, b, c) {
  var d = [l], f = Be(this.xa, this.Ya, b, c, d);
  return f == l ? (d = Q.a(d, 0), wb.a(c, d.m) ? a : new Ie(this.xa, He(this.xa, this.Ya, b, c), this.f, this.l, l)) : new Ie(this.xa, f.Ca(), this.f + 1, this.l, l)
};
r.fb = function(a, b) {
  return Je(a, b) != l
};
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.qb = function() {
  return 0 < this.f ? new ve(l, ue(this.Ya, l, o), o, this.f, l) : l
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
function Je(a, b) {
  for(var c = a.Ya;;) {
    if(c != l) {
      var d = a.xa.a ? a.xa.a(b, c.key) : a.xa.call(l, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return l
    }
  }
}
r.B = function() {
  return 0 < this.f ? new ve(l, ue(this.Ya, l, h), h, this.f, l) : l
};
r.A = p("f");
r.u = function(a, b) {
  return Qd(a, b)
};
r.F = function(a, b) {
  return new Ie(this.xa, this.Ya, this.f, b, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(Ke, this.l)
};
r.Aa = function(a, b) {
  var c = [l], d = Fe(this.xa, this.Ya, b, c);
  return d == l ? Q.a(c, 0) == l ? a : new Ie(this.xa, l, 0, this.l, l) : new Ie(this.xa, d.Ca(), this.f - 1, this.l, l)
};
var Ke = new Ie(ic, l, 0, l, 0), yb = function() {
  function a(a) {
    var d = l;
    t(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = P(a), b = hb(Wd);;) {
      if(a) {
        var f = H(H(a)), b = Xc(b, I(a), I(H(a))), a = f
      }else {
        return jb(b)
      }
    }
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return b(a)
  };
  a.c = b;
  return a
}(), Le = function() {
  function a(a) {
    var d = l;
    t(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = P(a), b = Ke;;) {
      if(a) {
        var f = H(H(a)), b = Rb.b(b, I(a), I(H(a))), a = f
      }else {
        return b
      }
    }
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return b(a)
  };
  a.c = b;
  return a
}(), Me = function() {
  function a(a) {
    var d = l;
    t(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return u(bd(a)) ? kc.a(function(a, b) {
      return Mb.a(u(a) ? a : Yd([], {}), b)
    }, a) : l
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return b(a)
  };
  a.c = b;
  return a
}();
function Ne(a, b, c) {
  this.l = a;
  this.eb = b;
  this.h = c;
  this.p = 1;
  this.i = 15077647
}
r = Ne.prototype;
r.$a = function() {
  return new Oe(hb(this.eb))
};
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Cc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return u(Ha(this.eb, b)) ? b : c
};
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.a(this, b);
      case 3:
        return A.b(this, b, c)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  return new Ne(this.l, Rb.b(this.eb, b, l), l)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.B = function() {
  return P(ed.a(I, this.eb))
};
r.Wb = function(a, b) {
  return new Ne(this.l, Sb.a(this.eb, b), l)
};
r.A = function(a) {
  return Nb(P(a))
};
r.u = function(a, b) {
  var c = Xb(b);
  return c ? (c = Nb(a) === Nb(b)) ? ad(function(b) {
    return hc(a, b)
  }, b) : c : c
};
r.F = function(a, b) {
  return new Ne(b, this.eb, this.h)
};
r.D = p("l");
r.V = function() {
  return Va(Pe, this.l)
};
var Pe = new Ne(l, yb(), 0);
function Oe(a) {
  this.Xa = a;
  this.i = 259;
  this.p = 34
}
r = Oe.prototype;
r.call = function() {
  return function(a, b, c) {
    switch(arguments.length) {
      case 2:
        return A.b(this.Xa, b, bc) === bc ? l : b;
      case 3:
        return A.b(this.Xa, b, bc) === bc ? c : b
    }
    e("Invalid arity: " + arguments.length)
  }
}();
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return A.b(this.Xa, b, bc) === bc ? c : b
};
r.A = function() {
  return Nb(this.Xa)
};
r.gb = function(a, b) {
  this.Xa = kb(this.Xa, b, l);
  return a
};
r.hb = function() {
  return new Ne(l, jb(this.Xa), l)
};
Le();
function Qe(a) {
  for(var b = P(a), c = hb(Pe);;) {
    if(P(b)) {
      a = H(b), b = I(b), c = ib(c, b), b = a
    }else {
      return jb(c)
    }
  }
}
function Re(a) {
  if(ec(a)) {
    return a
  }
  var b = fc(a);
  if(b ? b : gc(a)) {
    return b = a.lastIndexOf("/"), 0 > b ? zc.a(a, 2) : zc.a(a, b + 1)
  }
  e(Error([R("Doesn't support name: "), R(a)].join("")))
}
function Se(a) {
  var b = fc(a);
  if(b ? b : gc(a)) {
    return b = a.lastIndexOf("/"), -1 < b ? zc.b(a, 2, b) : l
  }
  e(Error([R("Doesn't support namespace: "), R(a)].join("")))
}
function Te(a, b, c, d, f) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.h = f;
  this.p = 0;
  this.i = 32375006
}
r = Te.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Eb(a)
};
r.Oa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Te(this.l, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Te(this.l, this.start + this.step, this.end, this.step, l) : l
};
r.z = function(a, b) {
  return N(b, a)
};
r.toString = function() {
  return Hb.c(F([this], 0))
};
r.Ua = function(a, b) {
  return Cb.a(a, b)
};
r.Va = function(a, b, c) {
  return Cb.b(a, b, c)
};
r.B = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
r.A = function(a) {
  return Lb($a(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.ha = p("start");
r.ia = function(a) {
  return $a(a) != l ? new Te(this.l, this.start + this.step, this.end, this.step, l) : Gb
};
r.u = function(a, b) {
  return Jb(a, b)
};
r.F = function(a, b) {
  return new Te(b, this.start, this.end, this.step, this.h)
};
r.D = p("l");
r.Ma = function(a, b) {
  if(b < wa(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
r.Na = function(a, b, c) {
  c = b < wa(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
r.V = function() {
  return Va(Gb, this.l)
};
var Ue = function() {
  function a(a, b, c) {
    return new Te(l, a, b, c, l)
  }
  function b(a, b) {
    return f.b(a, b, 1)
  }
  function c(a) {
    return f.b(0, a, 1)
  }
  function d() {
    return f.b(0, Number.MAX_VALUE, 1)
  }
  var f = l, f = function(f, g, j) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, f);
      case 2:
        return b.call(this, f, g);
      case 3:
        return a.call(this, f, g, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  f.t = d;
  f.d = c;
  f.a = b;
  f.b = a;
  return f
}();
function Ve(a, b) {
  var c = a.exec(b);
  return wb.a(I(c), b) ? 1 === Nb(c) ? I(c) : Kd(c) : l
}
function Z(a, b, c, d, f, i) {
  return Tc.c(V([b]), md(ld(V([c]), ed.a(function(b) {
    return a.a ? a.a(b, f) : a.call(l, b, f)
  }, i))), F([V([d])], 0))
}
var $ = function We(b, c) {
  return b == l ? zb.d("nil") : aa === b ? zb.d("#<undefined>") : Tc.a(u(function() {
    var d = A.b(c, "\ufdd0'meta", l);
    return u(d) ? (d = b ? ((d = b.i & 131072) ? d : b.bc) ? h : b.i ? o : v(Ta, b) : v(Ta, b), u(d) ? Ub(b) : d) : d
  }()) ? Tc.c(V(["^"]), We(Ub(b), c), F([V([" "])], 0)) : l, function() {
    var c = b != l;
    return c ? b.qc : c
  }() ? b.pc(b) : function() {
    var c;
    c = b ? ((c = b.i & 536870912) ? c : b.H) ? h : b.i ? o : v(db, b) : v(db, b);
    return c
  }() ? eb(b, c) : zb.b("#<", "" + R(b), ">"))
};
function Xe() {
  return Yd(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":h, "\ufdd0'readably":h, "\ufdd0'meta":o, "\ufdd0'dup":o})
}
var Hb = function() {
  function a(a) {
    var d = l;
    t(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Xe(), f = I(a), i = new sa;
    if(a = P(a)) {
      for(var g = I(a);;) {
        g !== f && i.append(" ");
        var j = P($(g, b));
        if(j) {
          for(g = I(j);;) {
            if(i.append(g), g = H(j)) {
              j = g, g = I(j)
            }else {
              break
            }
          }
        }
        if(a = H(a)) {
          g = a, a = I(g), j = g, g = a, a = j
        }else {
          break
        }
      }
    }
    return"" + R(i)
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return b(a)
  };
  a.c = b;
  return a
}(), Ye = function() {
  function a(a) {
    var d = l;
    t(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a: {
      var b = Xe(), f = I(a);
      if(a = P(a)) {
        for(var i = I(a);;) {
          i !== f && ta(" ");
          var g = P($(i, b));
          if(g) {
            for(i = I(g);;) {
              if(ta(i), i = H(g)) {
                g = i, i = I(g)
              }else {
                break
              }
            }
          }
          if(a = H(a)) {
            i = a, a = I(i), g = i, i = a, a = g
          }else {
            break a
          }
        }
      }
    }
    b = Xe();
    ta("\n");
    return u(A.b(b, "\ufdd0'flush-on-newline", l)) ? l : l
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return b(a)
  };
  a.c = b;
  return a
}();
db.number = h;
eb.number = function(a) {
  return zb.d("" + R(a))
};
Db.prototype.H = h;
Db.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Nc.prototype.H = h;
Nc.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Ie.prototype.H = h;
Ie.prototype.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
$d.prototype.H = h;
$d.prototype.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Jc.prototype.H = h;
Jc.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Fb.prototype.H = h;
Fb.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
db["boolean"] = h;
eb["boolean"] = function(a) {
  return zb.d("" + R(a))
};
db.string = h;
eb.string = function(a, b) {
  return fc(a) ? zb.d([R(":"), R(function() {
    var b = Se(a);
    return u(b) ? [R(b), R("/")].join("") : l
  }()), R(Re(a))].join("")) : gc(a) ? zb.d([R(function() {
    var b = Se(a);
    return u(b) ? [R(b), R("/")].join("") : l
  }()), R(Re(a))].join("")) : zb.d(u((new Hc("\ufdd0'readably")).call(l, b)) ? ka(a) : a)
};
pe.prototype.H = h;
pe.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
X.prototype.H = h;
X.prototype.w = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
Ld.prototype.H = h;
Ld.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
re.prototype.H = h;
re.prototype.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Ne.prototype.H = h;
Ne.prototype.w = function(a, b) {
  return Z($, "#{", " ", "}", b, a)
};
Fd.prototype.H = h;
Fd.prototype.w = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
Dc.prototype.H = h;
Dc.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
db.array = h;
eb.array = function(a, b) {
  return Z($, "#<Array [", ", ", "]>", b, a)
};
db["function"] = h;
eb["function"] = function(a) {
  return zb.b("#<", "" + R(a), ">")
};
Ec.prototype.H = h;
Ec.prototype.w = function() {
  return zb.d("()")
};
Y.prototype.H = h;
Y.prototype.w = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
Gc.prototype.H = h;
Gc.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Te.prototype.H = h;
Te.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
qe.prototype.H = h;
qe.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Ud.prototype.H = h;
Ud.prototype.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ve.prototype.H = h;
ve.prototype.w = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Fd.prototype.$b = h;
Fd.prototype.Ub = function(a, b) {
  return jc.a(a, b)
};
function Ze(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.ec = c;
  this.fc = d;
  this.p = 0;
  this.i = 2690809856
}
r = Ze.prototype;
r.C = function(a) {
  return a[fa] || (a[fa] = ++ga)
};
r.Yb = function(a, b, c) {
  var d = P(this.fc);
  if(d) {
    var f = I(d);
    Q.b(f, 0, l);
    for(Q.b(f, 1, l);;) {
      var i = f, f = Q.b(i, 0, l), i = Q.b(i, 1, l);
      i.o ? i.o(f, a, b, c) : i.call(l, f, a, b, c);
      if(d = H(d)) {
        f = d, d = I(f), i = f, f = d, d = i
      }else {
        return l
      }
    }
  }else {
    return l
  }
};
r.w = function(a, b) {
  return Tc.c(V(["#<Atom: "]), eb(this.state, b), F([">"], 0))
};
r.D = p("l");
r.yb = p("state");
r.u = function(a, b) {
  return a === b
};
var $e = function() {
  function a(a) {
    return new Ze(a, l, l, l)
  }
  var b = l, c = function() {
    function a(c, d) {
      var j = l;
      t(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, j)
    }
    function b(a, c) {
      var d = cc(c) ? U.a(yb, c) : c, f = A.b(d, "\ufdd0'validator", l), d = A.b(d, "\ufdd0'meta", l);
      return new Ze(a, d, f, l)
    }
    a.n = 1;
    a.k = function(a) {
      var c = I(a), a = J(a);
      return b(c, a)
    };
    a.c = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.c(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.n = 1;
  b.k = c.k;
  b.d = a;
  b.c = c.c;
  return b
}();
function af(a, b) {
  var c = a.ec;
  u(c) && !u(c.d ? c.d(b) : c.call(l, b)) && e(Error([R("Assert failed: "), R("Validator rejected reference state"), R("\n"), R(Hb.c(F([Tb(zb("\ufdd1'validate", "\ufdd1'new-value"), yb("\ufdd0'line", 6336))], 0)))].join("")));
  c = a.state;
  a.state = b;
  fb(a, c, b);
  return b
}
var bf = function() {
  function a(a, b, c, d, f) {
    return af(a, b.o ? b.o(a.state, c, d, f) : b.call(l, a.state, c, d, f))
  }
  function b(a, b, c, d) {
    return af(a, b.b ? b.b(a.state, c, d) : b.call(l, a.state, c, d))
  }
  function c(a, b, c) {
    return af(a, b.a ? b.a(a.state, c) : b.call(l, a.state, c))
  }
  function d(a, b) {
    return af(a, b.d ? b.d(a.state) : b.call(l, a.state))
  }
  var f = l, i = function() {
    function a(c, d, f, g, i, D) {
      var K = l;
      t(D) && (K = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, g, i, K)
    }
    function b(a, c, d, f, g, i) {
      return af(a, U.c(c, a.state, d, f, g, F([i], 0)))
    }
    a.n = 5;
    a.k = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), g = I(H(H(H(a)))), i = I(H(H(H(H(a))))), a = J(H(H(H(H(a)))));
      return b(c, d, f, g, i, a)
    };
    a.c = b;
    return a
  }(), f = function(f, j, k, m, n, w) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, k);
      case 4:
        return b.call(this, f, j, k, m);
      case 5:
        return a.call(this, f, j, k, m, n);
      default:
        return i.c(f, j, k, m, n, F(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.n = 5;
  f.k = i.k;
  f.a = d;
  f.b = c;
  f.o = b;
  f.ja = a;
  f.c = i.c;
  return f
}(), pc = function() {
  function a(a) {
    return(Math.random.t ? Math.random.t() : Math.random.call(l)) * a
  }
  function b() {
    return c.d(1)
  }
  var c = l, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.t = b;
  c.d = a;
  return c
}(), qc = function(a) {
  return Math.floor.d ? Math.floor.d((Math.random.t ? Math.random.t() : Math.random.call(l)) * a) : Math.floor.call(l, (Math.random.t ? Math.random.t() : Math.random.call(l)) * a)
};
$e.d(Yd(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":Yd([], {}), "\ufdd0'descendants":Yd([], {}), "\ufdd0'ancestors":Yd([], {})}));
function cf() {
  return ec("\ufdd0'round") ? "\ufdd0'round" : fc("\ufdd0'round") ? Re("\ufdd0'round") : "" + R("\ufdd0'round")
}
function df(a, b) {
  var c = document.createElement(Re("\ufdd0'canvas"));
  c.width = a;
  c.height = b;
  return c
}
function ef(a, b) {
  return a + (qc(b) - qc(b))
}
;var ff = $e.d(Gb);
function gf() {
  for(var a = Array(16384), b = 0;;) {
    if(16384 > b) {
      a[b] = 0, b += 1
    }else {
      break
    }
  }
  return a
}
function hf(a, b, c, d, f, i, g, j, k, m, n) {
  this.S = a;
  this.Y = b;
  this.map = c;
  this.r = d;
  this.ca = f;
  this.aa = i;
  this.ba = g;
  this.da = j;
  this.ea = k;
  this.j = m;
  this.g = n;
  this.p = 0;
  this.i = 619054859;
  9 < arguments.length ? (this.j = m, this.g = n) : this.g = this.j = l
}
r = hf.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return"\ufdd0'w" === b ? this.S : "\ufdd0'h" === b ? this.Y : "\ufdd0'map" === b ? this.map : "\ufdd0'items" === b ? this.r : "\ufdd0'item-posns" === b ? this.ca : "\ufdd0'sx" === b ? this.aa : "\ufdd0'sy" === b ? this.ba : "\ufdd0'nx" === b ? this.da : "\ufdd0'ny" === b ? this.ea : A.b(this.g, b, c)
};
r.ga = function(a, b, c) {
  return(E.a ? E.a("\ufdd0'w", b) : E.call(l, "\ufdd0'w", b)) ? new hf(c, this.Y, this.map, this.r, this.ca, this.aa, this.ba, this.da, this.ea, this.j, this.g, l) : (E.a ? E.a("\ufdd0'h", b) : E.call(l, "\ufdd0'h", b)) ? new hf(this.S, c, this.map, this.r, this.ca, this.aa, this.ba, this.da, this.ea, this.j, this.g, l) : (E.a ? E.a("\ufdd0'map", b) : E.call(l, "\ufdd0'map", b)) ? new hf(this.S, this.Y, c, this.r, this.ca, this.aa, this.ba, this.da, this.ea, this.j, this.g, l) : (E.a ? E.a("\ufdd0'items", 
  b) : E.call(l, "\ufdd0'items", b)) ? new hf(this.S, this.Y, this.map, c, this.ca, this.aa, this.ba, this.da, this.ea, this.j, this.g, l) : (E.a ? E.a("\ufdd0'item-posns", b) : E.call(l, "\ufdd0'item-posns", b)) ? new hf(this.S, this.Y, this.map, this.r, c, this.aa, this.ba, this.da, this.ea, this.j, this.g, l) : (E.a ? E.a("\ufdd0'sx", b) : E.call(l, "\ufdd0'sx", b)) ? new hf(this.S, this.Y, this.map, this.r, this.ca, c, this.ba, this.da, this.ea, this.j, this.g, l) : (E.a ? E.a("\ufdd0'sy", b) : 
  E.call(l, "\ufdd0'sy", b)) ? new hf(this.S, this.Y, this.map, this.r, this.ca, this.aa, c, this.da, this.ea, this.j, this.g, l) : (E.a ? E.a("\ufdd0'nx", b) : E.call(l, "\ufdd0'nx", b)) ? new hf(this.S, this.Y, this.map, this.r, this.ca, this.aa, this.ba, c, this.ea, this.j, this.g, l) : (E.a ? E.a("\ufdd0'ny", b) : E.call(l, "\ufdd0'ny", b)) ? new hf(this.S, this.Y, this.map, this.r, this.ca, this.aa, this.ba, this.da, c, this.j, this.g, l) : new hf(this.S, this.Y, this.map, this.r, this.ca, this.aa, 
  this.ba, this.da, this.ea, this.j, Rb.b(this.g, b, c), l)
};
r.call = function(a, b, c) {
  a = b + this.S * c;
  return a < this.map.length ? this.map[a] : 0
};
r.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.B = function() {
  return P(Tc.a(V([W.c(F(["\ufdd0'w", this.S], 0)), W.c(F(["\ufdd0'h", this.Y], 0)), W.c(F(["\ufdd0'map", this.map], 0)), W.c(F(["\ufdd0'items", this.r], 0)), W.c(F(["\ufdd0'item-posns", this.ca], 0)), W.c(F(["\ufdd0'sx", this.aa], 0)), W.c(F(["\ufdd0'sy", this.ba], 0)), W.c(F(["\ufdd0'nx", this.da], 0)), W.c(F(["\ufdd0'ny", this.ea], 0))]), this.g))
};
r.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, [R("#"), R("ld23.gen.Level"), R("{")].join(""), ", ", "}", b, Tc.a(V([W.c(F(["\ufdd0'w", this.S], 0)), W.c(F(["\ufdd0'h", this.Y], 0)), W.c(F(["\ufdd0'map", this.map], 0)), W.c(F(["\ufdd0'items", this.r], 0)), W.c(F(["\ufdd0'item-posns", this.ca], 0)), W.c(F(["\ufdd0'sx", this.aa], 0)), W.c(F(["\ufdd0'sy", this.ba], 0)), W.c(F(["\ufdd0'nx", this.da], 0)), W.c(F(["\ufdd0'ny", this.ea], 0))]), this.g))
};
r.A = function() {
  return 9 + Nb(this.g)
};
r.u = function(a, b) {
  var c;
  c = u(b) ? (c = a.constructor === b.constructor) ? Qd(a, b) : c : b;
  return u(c) ? h : o
};
r.F = function(a, b) {
  return new hf(this.S, this.Y, this.map, this.r, this.ca, this.aa, this.ba, this.da, this.ea, b, this.g, this.h)
};
r.D = p("j");
r.Aa = function(a, b) {
  return hc(Qe("\ufdd0'items,\ufdd0'map,\ufdd0'item-posns,\ufdd0'sy,\ufdd0'sx,\ufdd0'h,\ufdd0'ny,\ufdd0'nx,\ufdd0'w".split(",")), b) ? Sb.a(Tb(sd(Yd([], {}), a), this.j), b) : new hf(this.S, this.Y, this.map, this.r, this.ca, this.aa, this.ba, this.da, this.ea, this.j, this.h, $c(Sb.a(this.g, b)), l)
};
function jf(a) {
  return new hf(128, 128, a, Yd([], {}), Yd([], {}), -1, -1, -1, -1)
}
function kf(a, b, c, d, f, i, g, j, k) {
  this.color = a;
  this.pa = b;
  this.ta = c;
  this.la = d;
  this.ka = f;
  this.name = i;
  this.id = g;
  this.j = j;
  this.g = k;
  this.p = 0;
  this.i = 619054858;
  7 < arguments.length ? (this.j = j, this.g = k) : this.g = this.j = l
}
r = kf.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return"\ufdd0'color" === b ? this.color : "\ufdd0'solid?" === b ? this.pa : "\ufdd0'crystal?" === b ? this.ta : "\ufdd0'liq?" === b ? this.la : "\ufdd0'hazard" === b ? this.ka : "\ufdd0'name" === b ? this.name : "\ufdd0'id" === b ? this.id : A.b(this.g, b, c)
};
r.ga = function(a, b, c) {
  return(E.a ? E.a("\ufdd0'color", b) : E.call(l, "\ufdd0'color", b)) ? new kf(c, this.pa, this.ta, this.la, this.ka, this.name, this.id, this.j, this.g, l) : (E.a ? E.a("\ufdd0'solid?", b) : E.call(l, "\ufdd0'solid?", b)) ? new kf(this.color, c, this.ta, this.la, this.ka, this.name, this.id, this.j, this.g, l) : (E.a ? E.a("\ufdd0'crystal?", b) : E.call(l, "\ufdd0'crystal?", b)) ? new kf(this.color, this.pa, c, this.la, this.ka, this.name, this.id, this.j, this.g, l) : (E.a ? E.a("\ufdd0'liq?", 
  b) : E.call(l, "\ufdd0'liq?", b)) ? new kf(this.color, this.pa, this.ta, c, this.ka, this.name, this.id, this.j, this.g, l) : (E.a ? E.a("\ufdd0'hazard", b) : E.call(l, "\ufdd0'hazard", b)) ? new kf(this.color, this.pa, this.ta, this.la, c, this.name, this.id, this.j, this.g, l) : (E.a ? E.a("\ufdd0'name", b) : E.call(l, "\ufdd0'name", b)) ? new kf(this.color, this.pa, this.ta, this.la, this.ka, c, this.id, this.j, this.g, l) : (E.a ? E.a("\ufdd0'id", b) : E.call(l, "\ufdd0'id", b)) ? new kf(this.color, 
  this.pa, this.ta, this.la, this.ka, this.name, c, this.j, this.g, l) : new kf(this.color, this.pa, this.ta, this.la, this.ka, this.name, this.id, this.j, Rb.b(this.g, b, c), l)
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.B = function() {
  return P(Tc.a(V([W.c(F(["\ufdd0'color", this.color], 0)), W.c(F(["\ufdd0'solid?", this.pa], 0)), W.c(F(["\ufdd0'crystal?", this.ta], 0)), W.c(F(["\ufdd0'liq?", this.la], 0)), W.c(F(["\ufdd0'hazard", this.ka], 0)), W.c(F(["\ufdd0'name", this.name], 0)), W.c(F(["\ufdd0'id", this.id], 0))]), this.g))
};
r.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, [R("#"), R("ld23.gen.Tile"), R("{")].join(""), ", ", "}", b, Tc.a(V([W.c(F(["\ufdd0'color", this.color], 0)), W.c(F(["\ufdd0'solid?", this.pa], 0)), W.c(F(["\ufdd0'crystal?", this.ta], 0)), W.c(F(["\ufdd0'liq?", this.la], 0)), W.c(F(["\ufdd0'hazard", this.ka], 0)), W.c(F(["\ufdd0'name", this.name], 0)), W.c(F(["\ufdd0'id", this.id], 0))]), this.g))
};
r.A = function() {
  return 7 + Nb(this.g)
};
r.u = function(a, b) {
  var c;
  c = u(b) ? (c = a.constructor === b.constructor) ? Qd(a, b) : c : b;
  return u(c) ? h : o
};
r.F = function(a, b) {
  return new kf(this.color, this.pa, this.ta, this.la, this.ka, this.name, this.id, b, this.g, this.h)
};
r.D = p("j");
r.Aa = function(a, b) {
  return hc(Qe("\ufdd0'liq?,\ufdd0'hazard,\ufdd0'name,\ufdd0'color,\ufdd0'crystal?,\ufdd0'solid?,\ufdd0'id".split(",")), b) ? Sb.a(Tb(sd(Yd([], {}), a), this.j), b) : new kf(this.color, this.pa, this.ta, this.la, this.ka, this.name, this.id, this.j, this.h, $c(Sb.a(this.g, b)), l)
};
var lf = $e.d(0);
function mf(a, b, c, d, f, i) {
  var g = C(lf);
  bf.a(lf, Ab);
  return new kf(a, b, c, d, f, i, "" + R(g))
}
var nf = mf("black", h, o, o, 0, "\ufdd0'empty"), of = mf("#010914", o, o, h, 1, "\ufdd0'sea"), pf = mf("lightslategray", o, o, o, 0, "\ufdd0'ground"), qf = mf("red", o, o, h, 10, "\ufdd0'lava"), rf = mf("SkyBlue", o, o, o, 0, "\ufdd0'glass"), sf = mf("Chartreuse", h, h, o, 0, "\ufdd0'gcrystal"), tf = mf("MediumAquaMarine", h, h, o, 0, "\ufdd0'bcrystal"), uf = mf("Orchid", h, h, o, 0, "\ufdd0'pcrystal"), vf = mf("DarkOrange", h, h, o, 0, "\ufdd0'crystal"), wf = mf("yellow", h, o, o, 0, "\ufdd0'ship"), 
xf = mf("lightslategray", o, o, o, 0, "\ufdd0'radar"), yf = mf("magenta", o, o, o, 0, "\ufdd0'engine"), zf = V([nf, of, pf, qf, rf, sf, tf, uf, vf]);
function Cf(a) {
  return a === pf
}
function Df(a) {
  function b(a, b) {
    return(a & 127) + 128 * (b & 127)
  }
  for(var c = gf(), d = 0;;) {
    if(128 > d) {
      for(var f = 0;;) {
        if(128 > f) {
          c[b.a ? b.a(d, f) : b.call(l, d, f)] = pc.d(2) - 1, f += a
        }else {
          break
        }
      }
      d += a
    }else {
      break
    }
  }
  for(var f = 0.0078125, i = 1;;) {
    for(var d = Math.floor.d ? Math.floor.d(a / 2) : Math.floor.call(l, a / 2), g = function(a, b) {
      return function(d, f, g, i) {
        return(pc.d(2) - 1) * a * b + (c[d] + c[f] + c[g] + c[i]) / 4
      }
    }(a, f, i), j = a, k = a, m = 0;;) {
      if(128 > m) {
        for(var n = 0;;) {
          if(128 > n) {
            c[b.a ? b.a(m + d, n + d) : b.call(l, m + d, n + d)] = g.o ? g.o(b.a ? b.a(m, n) : b.call(l, m, n), b.a ? b.a(m + a, n) : b.call(l, m + a, n), b.a ? b.a(m, n + a) : b.call(l, m, n + a), b.a ? b.a(m + a, n + a) : b.call(l, m + a, n + a)) : g.call(l, b.a ? b.a(m, n) : b.call(l, m, n), b.a ? b.a(m + a, n) : b.call(l, m + a, n), b.a ? b.a(m, n + a) : b.call(l, m, n + a), b.a ? b.a(m + a, n + a) : b.call(l, m + a, n + a)), n += k
          }else {
            break
          }
        }
        m += j
      }else {
        break
      }
    }
    k = j = a;
    for(m = 0;;) {
      if(128 > m) {
        for(n = 0;;) {
          if(128 > n) {
            c[b.a ? b.a(m + d, n) : b.call(l, m + d, n)] = g.o ? g.o(b.a ? b.a(m, n) : b.call(l, m, n), b.a ? b.a(m + a, n) : b.call(l, m + a, n), b.a ? b.a(m + d, n + d) : b.call(l, m + d, n + d), b.a ? b.a(m + d, n - d) : b.call(l, m + d, n - d)) : g.call(l, b.a ? b.a(m, n) : b.call(l, m, n), b.a ? b.a(m + a, n) : b.call(l, m + a, n), b.a ? b.a(m + d, n + d) : b.call(l, m + d, n + d), b.a ? b.a(m + d, n - d) : b.call(l, m + d, n - d)), c[b.a ? b.a(m, n + d) : b.call(l, m, n + d)] = g.o ? g.o(b.a ? 
            b.a(m, n) : b.call(l, m, n), b.a ? b.a(m, n + a) : b.call(l, m, n + a), b.a ? b.a(m + d, n + d) : b.call(l, m + d, n + d), b.a ? b.a(m - d, n + d) : b.call(l, m - d, n + d)) : g.call(l, b.a ? b.a(m, n) : b.call(l, m, n), b.a ? b.a(m, n + a) : b.call(l, m, n + a), b.a ? b.a(m + d, n + d) : b.call(l, m + d, n + d), b.a ? b.a(m - d, n + d) : b.call(l, m - d, n + d)), n += k
          }else {
            break
          }
        }
        m += j
      }else {
        break
      }
    }
    if(1 < d) {
      f *= i + 0.8, i *= 0.3, a = d
    }else {
      break
    }
  }
  return function(a) {
    return c[a % 16384]
  }
}
U.a(yb, nd.a(Fc, function(a, b) {
  var c = function f(b, c) {
    return new Jc(l, o, function() {
      var j = P(c);
      if(j) {
        if($b(j)) {
          for(var k = tb(j), m = Nb(k), n = new Kc(ua.d(m), 0), w = 0;;) {
            if(w < m) {
              var B = a.a ? a.a(b + w, y.a(k, w)) : a.call(l, b + w, y.a(k, w));
              n.add(B);
              w += 1
            }else {
              break
            }
          }
          return Oc(n.Ea(), f(b + m, ub(j)))
        }
        return N(a.a ? a.a(b, I(j)) : a.call(l, b, I(j)), f(b + 1, J(j)))
      }
      return l
    })
  };
  return c.a ? c.a(0, b) : c.call(l, 0, b)
}(W, zf)));
var Ef = function() {
  function a(a) {
    var d = l;
    t(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var a = U.a(yb, a), a = cc(a) ? U.a(yb, a) : a, b = A.b(a, "\ufdd0'okay-loc?", dd()), f = A.b(a, "\ufdd0'jitter", 10), i = A.b(a, "\ufdd0'rarity", 0.0010), g = A.b(a, "\ufdd0'spread", 1), j = A.b(a, "\ufdd0'clusters", 100), k = A.b(a, "\ufdd0'size", 1), m = A.b(a, "\ufdd0'transforms", Qe([]));
    return function(a) {
      for(var a = cc(a) ? U.a(yb, a) : a, c = A.b(a, "\ufdd0'map", l), B = A.b(a, "\ufdd0'h", l), D = A.b(a, "\ufdd0'w", l), K = Math.floor.d ? Math.floor.d(D * B * i) : Math.floor.call(l, D * B * i), G = 0;;) {
        if(G < K) {
          var O = qc(D), S = qc(B);
          if(u(b.a ? b.a(O / D, S / B) : b.call(l, O / D, S / B))) {
            for(var pa = k, L = 0;;) {
              if(L < pa) {
                for(var xa = O + (qc(2 * k + 1) - k), ja = S + (qc(2 * k + 1) - k), pb = j, qb = 0;;) {
                  if(qb < pb) {
                    for(var T = ef(xa, f), rb = ef(ja, f), La = T + g, qa = rb - (g - 1), rb = rb + g, T = T - (g - 1);;) {
                      if(T < La) {
                        for(var za = qa;;) {
                          if(za < rb) {
                            var da;
                            da = aa;
                            da = (da = -1 < T) ? T < D : da;
                            u(da) && (da = (da = -1 < za) ? za < B : da);
                            u(da) && (da = c[T + za * D], da = m.d ? m.d(da) : m.call(l, da), u(da) && (c[T + za * D] = da));
                            za += 1
                          }else {
                            break
                          }
                        }
                        T += 1
                      }else {
                        break
                      }
                    }
                    qb += 1
                  }else {
                    break
                  }
                }
                L += 1
              }else {
                break
              }
            }
          }
          G += 1
        }else {
          break
        }
      }
      return a
    }
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return b(a)
  };
  a.c = b;
  return a
}(), Ff = V([sf, tf, uf, vf, vf]), Gf = Ef.c(F(["\ufdd0'transforms", function(a) {
  a = de([pf], [function() {
    return Q.a(Ff, qc(Nb(Ff)))
  }]).call(l, a);
  return u(a) ? a.t ? a.t() : a.call(l) : l
}, "\ufdd0'rarity", 1 / 1800, "\ufdd0'jitter", 10], 0));
bf.b(ff, Mb, Gf);
var Hf = Ef.c(F(["\ufdd0'transforms", de([pf], [rf]), "\ufdd0'rarity", 1 / 3E3, "\ufdd0'size", 5, "\ufdd0'spread", 2, "\ufdd0'jitter", 5], 0));
bf.b(ff, Mb, Hf);
function If(a, b) {
  return Math.abs.d ? Math.abs.d(a - b) : Math.abs.call(l, a - b)
}
function Jf(a, b) {
  return 3 * (Math.abs.d ? Math.abs.d(a - b) : Math.abs.call(l, a - b)) - 2
}
function Kf() {
  for(var a = Df(16), b = Df(16), c = Df(16), d = Df(32), f = Df(32), i = gf(), g = 0;;) {
    if(128 > g) {
      for(var j = 0;;) {
        if(128 > j) {
          var k = g + 128 * j, m = Jf(If(a.d ? a.d(k) : a.call(l, k), b.d ? b.d(k) : b.call(l, k)), c.d ? c.d(k) : c.call(l, k)), n = Jf(d.d ? d.d(k) : d.call(l, k), f.d ? f.d(k) : f.call(l, k)) + 1 - 20 * (Math.pow.a ? Math.pow.a((Math.abs.d ? Math.abs.d(2 * (g / 127) - 1) : Math.abs.call(l, 2 * (g / 127) - 1)) > (Math.abs.d ? Math.abs.d(2 * (j / 127) - 1) : Math.abs.call(l, 2 * (j / 127) - 1)) ? Math.abs.d ? Math.abs.d(2 * (g / 127) - 1) : Math.abs.call(l, 2 * (g / 127) - 1) : Math.abs.d ? Math.abs.d(2 * 
          (j / 127) - 1) : Math.abs.call(l, 2 * (j / 127) - 1), 16) : Math.pow.call(l, (Math.abs.d ? Math.abs.d(2 * (g / 127) - 1) : Math.abs.call(l, 2 * (g / 127) - 1)) > (Math.abs.d ? Math.abs.d(2 * (j / 127) - 1) : Math.abs.call(l, 2 * (j / 127) - 1)) ? Math.abs.d ? Math.abs.d(2 * (g / 127) - 1) : Math.abs.call(l, 2 * (g / 127) - 1) : Math.abs.d ? Math.abs.d(2 * (j / 127) - 1) : Math.abs.call(l, 2 * (j / 127) - 1), 16));
          i[k] = Q.a(zf, -0.5 > n ? 1 : function() {
            var a = 0.5 < n;
            return a ? -1.5 > m : a
          }() ? 3 : 2);
          j += 1
        }else {
          break
        }
      }
      g += 1
    }else {
      break
    }
  }
  return Gf.d ? Gf.d(Hf.d ? Hf.d(jf(i)) : Hf.call(l, jf(i))) : Gf.call(l, Hf.d ? Hf.d(jf(i)) : Hf.call(l, jf(i)))
}
;function Lf(a) {
  return a.getContext("2d")
}
function Mf(a, b) {
  a.fillStyle = b
}
function Nf(a, b, c, d, f, i) {
  a.beginPath();
  a.moveTo(b, c + i);
  a.lineTo(b, c + f + -i);
  a.quadraticCurveTo(b, c + f, b + i, c + f);
  a.lineTo(b + d + -i, c + f);
  a.quadraticCurveTo(b + d, c + f, b + d, c + f + -i);
  a.lineTo(b + d, c + i);
  a.quadraticCurveTo(b + d, c, b + d + -i, c);
  a.lineTo(b + i, c);
  a.quadraticCurveTo(b, c, b, c + i);
  a.closePath();
  return a
}
function Of(a, b) {
  var c = Lf(a);
  c.fillStyle = b;
  c.fillRect(0, 0, a.width, a.height)
}
Nf = function(a, b, c, d, f, i) {
  a.beginPath();
  a.moveTo(b, c + i);
  a.lineTo(b, c + f + -i);
  a.quadraticCurveTo(b, c + f, b + i, c + f);
  a.lineTo(b + d + -i, c + f);
  a.quadraticCurveTo(b + d, c + f, b + d, c + f + -i);
  a.lineTo(b + d, c + i);
  a.quadraticCurveTo(b + d, c, b + d + -i, c);
  a.lineTo(b + i, c);
  a.quadraticCurveTo(b, c, b, c + i);
  a.closePath();
  return a
};
function Pf(a, b) {
  a.save();
  a.beginPath();
  a.scale(1, u(b) ? -1 : 1);
  a.moveTo(15, 7);
  a.lineTo(15, 0);
  a.lineTo(0, 0);
  a.lineTo(0, 3);
  a.quadraticCurveTo(0, 7, 9, 7);
  a.lineTo(15, 7);
  a.closePath();
  a.restore()
}
function Qf(a) {
  a.save();
  a.fillStyle = "#ccc";
  a.strokeStyle = "black";
  a.lineWidth = 0.3;
  a.scale(3, 3);
  a.save();
  a.translate(15, 13);
  Pf(a, o);
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
  Mf(a, function() {
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
  Mf(a, function() {
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
  a.restore();
  a.restore()
}
df();
function Rf(a, b) {
  var c = kc.b(function(a, c) {
    a[c.id] = b.d ? b.d(c) : b.call(l, c);
    return a
  }, {}, a);
  return function(a) {
    return c[a.id]
  }
}
var Sf = Rf(V([of, qf, pf, rf]), function(a) {
  var a = a.color, b = df(48, 48), c = Lf(b);
  c.fillStyle = a;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(16, 0);
  c.bezierCurveTo(20, 2, 28, 2, 32, 0);
  c.quadraticCurveTo(48, 0, 48, 16);
  c.bezierCurveTo(46, 20, 46, 28, 48, 32);
  c.quadraticCurveTo(48, 48, 32, 48);
  c.bezierCurveTo(28, 46, 20, 46, 16, 48);
  c.quadraticCurveTo(0, 48, 0, 32);
  c.bezierCurveTo(2, 28, 2, 20, 0, 16);
  c.quadraticCurveTo(0, 0, 16, 0);
  c.closePath();
  c.fill();
  c.globalAlpha = 0.4;
  c.stroke();
  return b
}), Tf = Rf(Ff, function(a) {
  var b = df(32, 32), c = Lf(b);
  c.fillStyle = a.color;
  c.save();
  c.beginPath();
  c.moveTo(2, 18);
  c.lineTo(3, 7);
  c.lineTo(10, 13);
  c.lineTo(12, 24);
  c.lineTo(10, 13);
  c.lineTo(13, 6);
  c.lineTo(16, 2);
  c.lineTo(21, 6);
  c.lineTo(21, 15);
  c.lineTo(22, 23);
  c.lineTo(21, 15);
  c.lineTo(25, 6);
  c.lineTo(29, 14);
  c.lineTo(26, 28);
  c.lineTo(5, 27);
  c.lineTo(2, 18);
  c.closePath();
  c.fill();
  c.strokeStyle = "black";
  c.globalAlpha = 0.6;
  c.stroke();
  c.beginPath();
  c.moveTo(2, 18);
  c.lineTo(8, 12);
  c.moveTo(5, 12);
  c.lineTo(7, 23);
  c.moveTo(12, 7);
  c.lineTo(15, 8);
  c.lineTo(19, 8);
  c.lineTo(21, 6);
  c.moveTo(16, 5);
  c.lineTo(15, 7);
  c.lineTo(15, 21);
  c.moveTo(19, 8);
  c.lineTo(18, 22);
  c.moveTo(22, 13);
  c.lineTo(24, 15);
  c.lineTo(27, 15);
  c.lineTo(28, 13);
  c.moveTo(25, 15);
  c.lineTo(23, 26);
  c.closePath();
  c.stroke();
  c.restore();
  return b
}), Uf = Kd(gd(12, jd.d(pc))), Vf = df(128, 128), Wf = $e.d(0);
function Xf() {
  var a = Yf, b = C(Zf), c = cc(b) ? U.a(yb, b) : b, d = A.b(c, "\ufdd0'yo", l), f = A.b(c, "\ufdd0'xo", l), i = A.b(c, "\ufdd0'level", l), g = A.b(c, "\ufdd0'player", l), b = Lf(a);
  b.save();
  var j = cc(i) ? U.a(yb, i) : i, k = A.b(j, "\ufdd0'items", l), m = A.b(j, "\ufdd0'sy", l), n = A.b(j, "\ufdd0'sx", l), i = Lf(a), w = f % 32, B = d % 32, D = Math.floor.d ? Math.floor.d(f / 32) : Math.floor.call(l, f / 32), K = Math.floor.d ? Math.floor.d(d / 32) : Math.floor.call(l, d / 32), G = $e.d(o);
  P(ed.a(I, k));
  Of(a, "gray");
  i.save();
  for(var k = Math.ceil.d ? Math.ceil.d((a.height + B) / 32) : Math.ceil.call(l, (a.height + B) / 32), O = 0;;) {
    if(O < k) {
      for(var S = Math.ceil.d ? Math.ceil.d((a.width + w) / 32) : Math.ceil.call(l, (a.width + w) / 32), pa = 0;;) {
        if(pa < S) {
          var L = pa + D, xa = O + K, ja = j.a ? j.a(L, xa) : j.call(l, L, xa), pb = 32 * pa - w, qb = 32 * O - B, T = Sf.d ? Sf.d(ja) : Sf.call(l, ja);
          if(u(T)) {
            var rb = T, T = i;
            T.save();
            T.translate(pb, qb);
            var La = T, qa = j, za = L, da = xa, qd = qa.a ? qa.a(za, da) : qa.call(l, za, da), Af = qd !== (qa.a ? qa.a(za, da - 1) : qa.call(l, za, da - 1)), Bf = qd !== (qa.a ? qa.a(za, da + 1) : qa.call(l, za, da + 1)), rd = qd !== (qa.a ? qa.a(za - 1, da) : qa.call(l, za - 1, da)), qa = qd !== (qa.a ? qa.a(za + 1, da) : qa.call(l, za + 1, da));
            La.drawImage(rb, 16 * (rd ? 0 : 1), 16 * (Af ? 0 : 1), 16, 16, 0, 0, 16, 16);
            La.drawImage(rb, 16 * (qa ? 2 : 1), 16 * (Af ? 0 : 1), 16, 16, 16, 0, 16, 16);
            La.drawImage(rb, 16 * (rd ? 0 : 1), 16 * (Bf ? 2 : 1), 16, 16, 0, 16, 16, 16);
            La.drawImage(rb, 16 * (qa ? 2 : 1), 16 * (Bf ? 2 : 1), 16, 16, 16, 16, 16, 16);
            T.restore()
          }
          T = Tf.d ? Tf.d(ja) : Tf.call(l, ja);
          u(T) && i.drawImage(T, pb, qb);
          ((L = L === n) ? xa === m : L) && af(G, V([pb, qb]));
          if("\ufdd0'radar" === ja.name) {
            xa = i;
            xa.save();
            xa.translate(pb + 1, qb + 1);
            xa.scale(3, 3);
            L = xa;
            L.save();
            L.fillStyle = "green";
            L.strokeStyle = "black";
            L.beginPath();
            L.arc(5, 5, 5, 0, 2 * Math.PI, aa);
            L.closePath();
            L.stroke();
            L.fill();
            L.clip();
            L.lineWidth = 0.1;
            L.strokeStyle = "rgba(0,255,0,0.7)";
            L.beginPath();
            for(T = 0;;) {
              if(10 > T) {
                La = L, La.moveTo(0, T), La.lineTo(10, T), La.moveTo(T, 0), La.lineTo(T, 10), T += 1
              }else {
                break
              }
            }
            L.closePath();
            L.stroke();
            L.lineWidth = 0.4;
            L.beginPath();
            L.moveTo(5, 5);
            T = 5 + 5 / (Math.sqrt.d ? Math.sqrt.d(2) : Math.sqrt.call(l, 2));
            La = 5 + 5 / (Math.sqrt.d ? Math.sqrt.d(2) : Math.sqrt.call(l, 2));
            L.lineTo(T, La);
            L.closePath();
            L.stroke();
            L.restore();
            xa.restore()
          }
          if("\ufdd0'engine" === ja.name) {
            ja = i, ja.save(), ja.translate(pb, 16 + qb), ja.fillStyle = "#ccc", ja.strokeStyle = "black", ja.lineWidth = 0.3, ja.scale(2, 2), Pf(ja, h), ja.fill(), ja.stroke(), ja.restore()
          }
          pa += 1
        }else {
          break
        }
      }
      O += 1
    }else {
      break
    }
  }
  j = C(G);
  u(j) && (i.save(), j = Q.a(C(G), 0), G = Q.a(C(G), 1), i.translate(j, G), Qf(i), i.restore());
  i.restore();
  b.restore();
  b.save();
  i = cc(c) ? U.a(yb, c) : c;
  G = A.b(i, "\ufdd0'player", l);
  i = (i.$.a ? i.$.a(G.x >> 5, G.y >> 5) : i.$.call(l, G.x >> 5, G.y >> 5)).la;
  g = cc(g) ? U.a(yb, g) : g;
  G = A.b(g, "\ufdd0'steps", l);
  j = A.b(g, "\ufdd0'rot", l);
  A.b(g, "\ufdd0'ey", l);
  A.b(g, "\ufdd0'ex", l);
  m = A.b(g, "\ufdd0'y", l);
  n = A.b(g, "\ufdd0'x", l);
  g = Lf(a);
  g.save();
  g.fillStyle = "white";
  g.strokeStyle = "white";
  g.save();
  g.translate(n - f, m - d);
  g.rotate(Math.PI / 2 + j);
  d = Math.floor.d ? Math.floor.d(G / 10) : Math.floor.call(l, G / 10);
  if(u(i)) {
    g.fillStyle = "white", g.strokeStyle = "black", Nf(g, -4, -4, 8, 6, 1), g.fill(), g.stroke(), g.strokeStyle = "white", d = Q.a(Uf, d % 12), g.globalAlpha = d, Nf(g, -6, -6, 12, 8, 3)
  }else {
    f = d % 4;
    d = 1 === f;
    f = 3 === f;
    g.fillStyle = "white";
    g.strokeStyle = "black";
    Nf(g, -5, 0, 10, 5, 1);
    g.fill();
    g.stroke();
    g.save();
    Nf(g, -8, -2, 16, 5, 1);
    g.fill();
    g.stroke();
    if(u(u(d) ? d : f)) {
      g.save(), g.scale(u(f) ? -1 : 1, 1), Nf(g, -8, -4, 4, 7, 1), g.fill(), g.stroke(), g.restore()
    }
    g.restore();
    g.fill();
    g.stroke();
    Nf(g, -4, -4, 8, 6, 1);
    g.fill()
  }
  g.stroke();
  g.restore();
  g.restore();
  b.restore();
  b.save();
  c = cc(c) ? U.a(yb, c) : c;
  A.b(c, "\ufdd0'need-items", l);
  A.b(c, "\ufdd0'yo", l);
  A.b(c, "\ufdd0'xo", l);
  A.b(c, "\ufdd0'level", l);
  d = A.b(c, "\ufdd0'player", l);
  a = Lf(a);
  a.save();
  a.fillStyle = "navy";
  a.strokeStyle = "white";
  a.lineWidth = 2;
  a.globalAlpha = 0.7;
  Nf(a, 5, 5, 150, 300, 3);
  a.fill();
  a.stroke();
  a.font = "10px monospace";
  a.fillStyle = "white";
  f = [R("X: "), R((Math.floor.d ? Math.floor.d(100 * (d.x / 32)) : Math.floor.call(l, 100 * (d.x / 32))) / 100)].join("");
  a.fillText(f, 15, 25);
  f = [R("Y: "), R((Math.floor.d ? Math.floor.d(100 * (d.y / 32)) : Math.floor.call(l, 100 * (d.y / 32))) / 100)].join("");
  a.fillText(f, 15, 40);
  a.save();
  a.translate(15, 25);
  f = d.G;
  a.save();
  a.lineJoin = cf();
  a.lineCap = cf();
  a.strokeStyle = "black";
  a.globalAlpha = 1;
  a.scale(5, 5);
  a.lineWidth = 0.3;
  a.fillStyle = "lightslategray";
  a.fillRect(2, 5.5, 15, 2.2);
  a.fillStyle = "#63cd27";
  a.fillRect(2, 5.5, 15 * (f / 100), 2.2);
  a.strokeRect(2, 5.5, 15, 2.2);
  a.fillStyle = "red";
  a.beginPath();
  a.moveTo(2, 5.5);
  a.bezierCurveTo(3, 4, 5, 5, 2, 8);
  a.bezierCurveTo(-1, 5, 1, 4, 2, 5.5);
  a.closePath();
  a.stroke();
  a.fill();
  a.restore();
  a.restore();
  if(hc(d.r, "\ufdd0'radar") && (a.translate(15, 90), f = cc(c) ? U.a(yb, c) : c, c = A.b(f, "\ufdd0'need-items", l), d = A.b(f, "\ufdd0'level", l), g = A.b(f, "\ufdd0'player", l), bf.a(Wf, Ab), f = g.x >> 5, g = g.y >> 5, a.drawImage(Vf, 0, 0), i = C(Wf) >> 3, ((G = "number" == typeof i) ? i == i.toFixed() : G) || e(Error([R("Argument must be an integer: "), R(i)].join(""))), 0 === (i & 1) && (a.fillStyle = "white", a.fillRect(f - 0.5, g - 0.5, 2, 2), wb.a("\ufdd0'engine", I(c))))) {
    d = td.a(d, V(["\ufdd0'item-posns", "\ufdd0'engine"])), c = Q.b(d, 0, l), d = Q.b(d, 1, l), a.fillStyle = "purple", a.fillRect(c - 0.5, d - 0.5, 2, 2)
  }
  if(u(u($f) ? 0 < C($f) : $f)) {
    c = [R("Crystals: "), R(C($f))].join(""), a.fillText(c, 15, 200)
  }
  a.restore();
  b.restore()
}
;function ag() {
  return ca.navigator ? ca.navigator.userAgent : l
}
oa = na = ma = la = o;
var bg;
if(bg = ag()) {
  var cg = ca.navigator;
  la = 0 == bg.indexOf("Opera");
  ma = !la && -1 != bg.indexOf("MSIE");
  na = !la && -1 != bg.indexOf("WebKit");
  oa = !la && !na && "Gecko" == cg.product
}
var dg = ma, eg = oa, fg = na, gg;
a: {
  var hg = "", ig;
  if(la && ca.opera) {
    var jg = ca.opera.version, hg = "function" == typeof jg ? jg() : jg
  }else {
    if(eg ? ig = /rv\:([^\);]+)(\)|;)/ : dg ? ig = /MSIE\s+([^\);]+)(\)|;)/ : fg && (ig = /WebKit\/(\S+)/), ig) {
      var kg = ig.exec(ag()), hg = kg ? kg[1] : ""
    }
  }
  if(dg) {
    var lg, mg = ca.document;
    lg = mg ? mg.documentMode : aa;
    if(lg > parseFloat(hg)) {
      gg = "" + lg;
      break a
    }
  }
  gg = hg
}
var ng = {};
function og(a) {
  var b;
  if(!(b = ng[a])) {
    b = 0;
    for(var c = ("" + gg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), i = 0;0 == b && i < f;i++) {
      var g = c[i] || "", j = d[i] || "", k = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = k.exec(g) || ["", "", ""], w = m.exec(j) || ["", "", ""];
        if(0 == n[0].length && 0 == w[0].length) {
          break
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == w[2].length) ? -1 : (0 == n[2].length) > (0 == w[2].length) ? 1 : 0) || (n[2] < w[2] ? -1 : n[2] > w[2] ? 1 : 0)
      }while(0 == b)
    }
    b = ng[a] = 0 <= b
  }
  return b
}
;!dg || og("9");
!eg && !dg || dg && og("9") || eg && og("1.9.1");
dg && og("9");
function pg(a) {
  var b = /\./;
  if(ec(b)) {
    return a.replace(RegExp(("" + b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), " ")
  }
  if(u(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), " ")
  }
  e([R("Invalid match arg: "), R(b)].join(""))
}
var qg = function() {
  function a(a, b, c) {
    if(1 > c) {
      return Kd(("" + R(a)).split(b))
    }
    for(var g = V([]);;) {
      if(wb.a(c, 1)) {
        return Mb.a(g, a)
      }
      var j;
      j = b.exec(a);
      j = j == l ? l : 1 === Nb(j) ? I(j) : Kd(j);
      if(u(j)) {
        var k = j;
        j = a.indexOf(k);
        k = a.substring(j + Nb(k));
        c -= 1;
        g = Mb.a(g, a.substring(0, j));
        a = k
      }else {
        return Mb.a(g, a)
      }
    }
  }
  function b(a, b) {
    return Kd(("" + R(a)).split(b))
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}();
var rg = Yd(["\ufdd0'xhtml", "\ufdd0'svg"], {"\ufdd0'xhtml":"http://www.w3.org/1999/xhtml", "\ufdd0'svg":"http://www.w3.org/2000/svg"}), sg = $e.d(0), tg = function() {
  function a(a, b, c) {
    a.setAttribute(Re(b), c);
    return a
  }
  function b(a, b) {
    if(u(a)) {
      if(Yb(b)) {
        var i = P(b);
        if(i) {
          var g = I(i);
          Q.b(g, 0, l);
          for(Q.b(g, 1, l);;) {
            var j = g, g = Q.b(j, 0, l), j = Q.b(j, 1, l);
            c.b(a, g, j);
            if(i = H(i)) {
              g = i, i = I(g), j = g, g = i, i = j
            }else {
              break
            }
          }
        }
        return a
      }
      return a.getAttribute(Re(b))
    }
    return l
  }
  var c = l, c = function(c, f, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.b = a;
  return c
}(), wg = function ug(b, c) {
  var d = P(c);
  if(d) {
    for(var f = I(d);;) {
      if(f == l ? f = l : (Yb(f) && e("Maps cannot be used as content"), f = ec(f) ? document.createTextNode(f) : Zb(f) ? vg(f) : cc(f) ? ug(b, f) : u(f.nodeName) ? f : l), u(f) && b.appendChild(f), f = H(d)) {
        d = f, f = I(d)
      }else {
        return l
      }
    }
  }else {
    return l
  }
}, xg = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function yg(a) {
  var b = Q.b(a, 0, l), a = xc(a);
  (function() {
    var a = fc(b);
    return a ? a : (a = gc(b)) ? a : ec(b)
  })() || e([R(b), R(" is not a valid tag name.")].join(""));
  var c = Ve(xg, Re(b));
  Q.b(c, 0, l);
  var d = Q.b(c, 1, l), f = Q.b(c, 2, l), i = Q.b(c, 3, l), g = function() {
    var a = qg.a(d, /:/), b = Q.b(a, 0, l), a = Q.b(a, 1, l), c = rg.d ? rg.d(Ac.d(b)) : rg.call(l, Ac.d(b));
    return u(a) ? V([u(c) ? c : b, a]) : V([(new Hc("\ufdd0'xhtml")).call(l, rg), b])
  }(), c = Q.b(g, 0, l), g = Q.b(g, 1, l), f = sd(Yd([], {}), pd(function(a) {
    return I(H(a)) != l
  }, Yd(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":u(f) ? f : l, "\ufdd0'class":u(i) ? pg(i) : l}))), i = I(a);
  return Yb(i) ? V([c, g, Me.c(F([f, i], 0)), H(a)]) : V([c, g, f, a])
}
var zg = u(document.createElementNS) ? function(a, b) {
  return document.createElementNS(a, b)
} : function(a, b) {
  return document.createElement(b)
};
function vg(a) {
  var b = yg(a), c = Q.b(b, 0, l), d = Q.b(b, 1, l), a = Q.b(b, 2, l), b = Q.b(b, 3, l), c = zg.a ? zg.a(c, d) : zg.call(l, c, d);
  tg.a(c, a);
  wg(c, b);
  return c
}
var Ag = function() {
  function a(a) {
    var d = l;
    t(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a = ed.a(vg, a);
    return u(I(H(a))) ? a : I(a)
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return b(a)
  };
  a.c = b;
  return a
}();
var Bg = $e.d(4E3 + qc(100));
function Cg() {
  bf.a(Bg, Ab);
  return C(Bg)
}
var Dg = bf.a(sg, Ab), Eg = function() {
  function a(a) {
    var d = l;
    t(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a = Ag.c(F([V(["\ufdd0'div.entry", N(V(["\ufdd0'h4", [R("Journal entry "), R(Cg())].join("")]), ed.a(function(a) {
      return ec(a) ? V(["\ufdd0'p", a]) : a
    }, a))])], 0));
    a.setAttribute("crateGroup", Dg);
    return a
  }
  a.n = 0;
  a.k = function(a) {
    a = P(a);
    return b(a)
  };
  a.c = b;
  return a
}(), Fg = Eg.c(F(["My name is is VQ-18J. I research small planetoids.", V(["\ufdd0'p", "Current subject: ", V(["\ufdd0'span.planet", "Minutiae Prime"])]), "An interesting due to the abundant hydrocarbons present in the seas on\n    its surface. Indication of life?", "Unimportant now. Underestimated gravitational pull, shipwrecked.\n    Hull breached, starboard engine detached, insufficient crystal fulminate\n    to power engines. Radar is missing.", "Probable best course of action:", V(["\ufdd0'p", 
"Locate my ", V(["\ufdd0'span.item", "radar."]), " It has to be around here somewhere..."])], 0)), Gg = Eg.c(F([V(["\ufdd0'p", "I have located my radar, and as luck would have it, I found my blaster\n    with it. Maybe this will prove useful"]), "I should be able to use this to seek out the items I need to repair my\n    ship and escape.", V(["\ufdd0'p", "I should try to find my ships ", V(["\ufdd0'span.item", "starboard engine"]), " next. It should show as a\n   purple spot on the radar."])], 0)), 
Hg = Eg.c(F(["I have recovered the engine.  The hard part seems to be over.", "Even with this, my ship won't be space-worthy if I don't do\n   something about that crack in the view-port.", V(["\ufdd0'p", "If only I had some ", V(["\ufdd0'span.item", "glass-like substance"]), ", then I might be able to repair the viewport using my blaster"])], 0)), Ig = Eg.c(F(["I have taken some of the blue sand present on the surface of the planet.\n    I was able to use it to make a temporary fix to the hull of my ship.", 
"Now all that remains is fuel for the engine", V(["\ufdd0'p", "Preliminary scans of the planet showed that there was fulminate\n        present in the orange crystals. ", V(["\ufdd0'span.item", "10 orange crystals"]), " should be enough for me to get off this rock for good."])], 0)), Jg = Eg.c(F(["My name is is VQ-18J. I research small planetoids.", V(["\ufdd0'p", "On my last expedition I crashed on ", V(["\ufdd0'span.planet", "Minutia Prime"])]), "Overcoming great odds, I was able to repair my ship, and escape that\n    hell-hole."], 
0)), Kg = Yd(["\ufdd0'radar", "\ufdd0'engine", "\ufdd0'glass", "\ufdd0'won"], {"\ufdd0'radar":Gg, "\ufdd0'engine":Hg, "\ufdd0'glass":Ig, "\ufdd0'won":Jg});
function Lg(a) {
  Ye.c(F([[R("moving from plot point "), R(a)].join("")], 0));
  var a = Kg.d ? Kg.d(a) : Kg.call(l, a), b = document.getElementById(Re("\ufdd0'journal"));
  b.removeChild(b.lastChild);
  b.appendChild(a)
}
;ta = function(a) {
  return console.log(a)
};
var Mg = Math.pow.a ? Math.pow.a(2, 5) : Math.pow.call(l, 2, 5), $f = $e.d(0);
function Ng(a, b, c, d, f, i, g, j, k) {
  this.$ = a;
  this.oa = b;
  this.va = c;
  this.wa = d;
  this.na = f;
  this.ua = i;
  this.qa = g;
  this.j = j;
  this.g = k;
  this.p = 0;
  this.i = 619054858;
  7 < arguments.length ? (this.j = j, this.g = k) : this.g = this.j = l
}
r = Ng.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return"\ufdd0'level" === b ? this.$ : "\ufdd0'player" === b ? this.oa : "\ufdd0'xo" === b ? this.va : "\ufdd0'yo" === b ? this.wa : "\ufdd0'over?" === b ? this.na : "\ufdd0'need-items" === b ? this.ua : "\ufdd0'won?" === b ? this.qa : A.b(this.g, b, c)
};
r.ga = function(a, b, c) {
  return(E.a ? E.a("\ufdd0'level", b) : E.call(l, "\ufdd0'level", b)) ? new Ng(c, this.oa, this.va, this.wa, this.na, this.ua, this.qa, this.j, this.g, l) : (E.a ? E.a("\ufdd0'player", b) : E.call(l, "\ufdd0'player", b)) ? new Ng(this.$, c, this.va, this.wa, this.na, this.ua, this.qa, this.j, this.g, l) : (E.a ? E.a("\ufdd0'xo", b) : E.call(l, "\ufdd0'xo", b)) ? new Ng(this.$, this.oa, c, this.wa, this.na, this.ua, this.qa, this.j, this.g, l) : (E.a ? E.a("\ufdd0'yo", b) : E.call(l, "\ufdd0'yo", 
  b)) ? new Ng(this.$, this.oa, this.va, c, this.na, this.ua, this.qa, this.j, this.g, l) : (E.a ? E.a("\ufdd0'over?", b) : E.call(l, "\ufdd0'over?", b)) ? new Ng(this.$, this.oa, this.va, this.wa, c, this.ua, this.qa, this.j, this.g, l) : (E.a ? E.a("\ufdd0'need-items", b) : E.call(l, "\ufdd0'need-items", b)) ? new Ng(this.$, this.oa, this.va, this.wa, this.na, c, this.qa, this.j, this.g, l) : (E.a ? E.a("\ufdd0'won?", b) : E.call(l, "\ufdd0'won?", b)) ? new Ng(this.$, this.oa, this.va, this.wa, 
  this.na, this.ua, c, this.j, this.g, l) : new Ng(this.$, this.oa, this.va, this.wa, this.na, this.ua, this.qa, this.j, Rb.b(this.g, b, c), l)
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.B = function() {
  return P(Tc.a(V([W.c(F(["\ufdd0'level", this.$], 0)), W.c(F(["\ufdd0'player", this.oa], 0)), W.c(F(["\ufdd0'xo", this.va], 0)), W.c(F(["\ufdd0'yo", this.wa], 0)), W.c(F(["\ufdd0'over?", this.na], 0)), W.c(F(["\ufdd0'need-items", this.ua], 0)), W.c(F(["\ufdd0'won?", this.qa], 0))]), this.g))
};
r.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, [R("#"), R("ld23.game.Game"), R("{")].join(""), ", ", "}", b, Tc.a(V([W.c(F(["\ufdd0'level", this.$], 0)), W.c(F(["\ufdd0'player", this.oa], 0)), W.c(F(["\ufdd0'xo", this.va], 0)), W.c(F(["\ufdd0'yo", this.wa], 0)), W.c(F(["\ufdd0'over?", this.na], 0)), W.c(F(["\ufdd0'need-items", this.ua], 0)), W.c(F(["\ufdd0'won?", this.qa], 0))]), this.g))
};
r.A = function() {
  return 7 + Nb(this.g)
};
r.u = function(a, b) {
  var c;
  c = u(b) ? (c = a.constructor === b.constructor) ? Qd(a, b) : c : b;
  return u(c) ? h : o
};
r.F = function(a, b) {
  return new Ng(this.$, this.oa, this.va, this.wa, this.na, this.ua, this.qa, b, this.g, this.h)
};
r.D = p("j");
r.Aa = function(a, b) {
  return hc(Qe("\ufdd0'yo,\ufdd0'player,\ufdd0'over?,\ufdd0'won?,\ufdd0'level,\ufdd0'xo,\ufdd0'need-items".split(",")), b) ? Sb.a(Tb(sd(Yd([], {}), a), this.j), b) : new Ng(this.$, this.oa, this.va, this.wa, this.na, this.ua, this.qa, this.j, this.h, $c(Sb.a(this.g, b)), l)
};
function Og(a) {
  var b = a.$, c = a.oa;
  return Rb.c(a, "\ufdd0'xo", (0 < c.x - 320 ? c.x - 320 : 0) < Mg * b.S - 640 ? 0 < c.x - 320 ? c.x - 320 : 0 : Mg * b.S - 640, F(["\ufdd0'yo", (0 < c.y - 240 ? c.y - 240 : 0) < Mg * b.Y - 480 ? 0 < c.y - 240 ? c.y - 240 : 0 : Mg * b.Y - 480], 0))
}
function Pg(a, b, c, d, f, i, g, j, k, m, n, w, B, D, K, G) {
  this.x = a;
  this.y = b;
  this.M = c;
  this.N = d;
  this.Q = f;
  this.I = i;
  this.J = g;
  this.K = j;
  this.R = k;
  this.r = m;
  this.G = n;
  this.P = w;
  this.L = B;
  this.O = D;
  this.j = K;
  this.g = G;
  this.p = 0;
  this.i = 619054858;
  14 < arguments.length ? (this.j = K, this.g = G) : this.g = this.j = l
}
r = Pg.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return"\ufdd0'x" === b ? this.x : "\ufdd0'y" === b ? this.y : "\ufdd0'ex" === b ? this.M : "\ufdd0'ey" === b ? this.N : "\ufdd0'rot" === b ? this.Q : "\ufdd0'destx" === b ? this.I : "\ufdd0'desty" === b ? this.J : "\ufdd0'moving?" === b ? this.K : "\ufdd0'steps" === b ? this.R : "\ufdd0'items" === b ? this.r : "\ufdd0'health" === b ? this.G : "\ufdd0'looking-for" === b ? this.P : "\ufdd0'crystals" === b ? this.L : "\ufdd0'found-item?" === b ? this.O : A.b(this.g, b, c)
};
r.ga = function(a, b, c) {
  return(E.a ? E.a("\ufdd0'x", b) : E.call(l, "\ufdd0'x", b)) ? new Pg(c, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'y", b) : E.call(l, "\ufdd0'y", b)) ? new Pg(this.x, c, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'ex", b) : E.call(l, "\ufdd0'ex", b)) ? new Pg(this.x, this.y, c, this.N, this.Q, this.I, this.J, 
  this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'ey", b) : E.call(l, "\ufdd0'ey", b)) ? new Pg(this.x, this.y, this.M, c, this.Q, this.I, this.J, this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'rot", b) : E.call(l, "\ufdd0'rot", b)) ? new Pg(this.x, this.y, this.M, this.N, c, this.I, this.J, this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'destx", b) : E.call(l, 
  "\ufdd0'destx", b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, c, this.J, this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'desty", b) : E.call(l, "\ufdd0'desty", b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, c, this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'moving?", b) : E.call(l, "\ufdd0'moving?", b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, c, this.R, this.r, 
  this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'steps", b) : E.call(l, "\ufdd0'steps", b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, c, this.r, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'items", b) : E.call(l, "\ufdd0'items", b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, c, this.G, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'health", b) : E.call(l, "\ufdd0'health", 
  b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, this.r, c, this.P, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'looking-for", b) : E.call(l, "\ufdd0'looking-for", b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, this.r, this.G, c, this.L, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'crystals", b) : E.call(l, "\ufdd0'crystals", b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, 
  this.r, this.G, this.P, c, this.O, this.j, this.g, l) : (E.a ? E.a("\ufdd0'found-item?", b) : E.call(l, "\ufdd0'found-item?", b)) ? new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, this.r, this.G, this.P, this.L, c, this.j, this.g, l) : new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, Rb.b(this.g, b, c), l)
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.B = function() {
  return P(Tc.a(V([W.c(F(["\ufdd0'x", this.x], 0)), W.c(F(["\ufdd0'y", this.y], 0)), W.c(F(["\ufdd0'ex", this.M], 0)), W.c(F(["\ufdd0'ey", this.N], 0)), W.c(F(["\ufdd0'rot", this.Q], 0)), W.c(F(["\ufdd0'destx", this.I], 0)), W.c(F(["\ufdd0'desty", this.J], 0)), W.c(F(["\ufdd0'moving?", this.K], 0)), W.c(F(["\ufdd0'steps", this.R], 0)), W.c(F(["\ufdd0'items", this.r], 0)), W.c(F(["\ufdd0'health", this.G], 0)), W.c(F(["\ufdd0'looking-for", this.P], 0)), W.c(F(["\ufdd0'crystals", this.L], 0)), W.c(F(["\ufdd0'found-item?", 
  this.O], 0))]), this.g))
};
r.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, [R("#"), R("ld23.game.Player"), R("{")].join(""), ", ", "}", b, Tc.a(V([W.c(F(["\ufdd0'x", this.x], 0)), W.c(F(["\ufdd0'y", this.y], 0)), W.c(F(["\ufdd0'ex", this.M], 0)), W.c(F(["\ufdd0'ey", this.N], 0)), W.c(F(["\ufdd0'rot", this.Q], 0)), W.c(F(["\ufdd0'destx", this.I], 0)), W.c(F(["\ufdd0'desty", this.J], 0)), W.c(F(["\ufdd0'moving?", this.K], 0)), W.c(F(["\ufdd0'steps", this.R], 0)), W.c(F(["\ufdd0'items", this.r], 0)), W.c(F(["\ufdd0'health", this.G], 0)), W.c(F(["\ufdd0'looking-for", this.P], 
  0)), W.c(F(["\ufdd0'crystals", this.L], 0)), W.c(F(["\ufdd0'found-item?", this.O], 0))]), this.g))
};
r.A = function() {
  return 14 + Nb(this.g)
};
r.u = function(a, b) {
  var c;
  c = u(b) ? (c = a.constructor === b.constructor) ? Qd(a, b) : c : b;
  return u(c) ? h : o
};
r.F = function(a, b) {
  return new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, this.r, this.G, this.P, this.L, this.O, b, this.g, this.h)
};
r.D = p("j");
r.Aa = function(a, b) {
  return hc(Qe("\ufdd0'destx,\ufdd0'desty,\ufdd0'items,\ufdd0'health,\ufdd0'y,\ufdd0'x,\ufdd0'looking-for,\ufdd0'ey,\ufdd0'moving?,\ufdd0'ex,\ufdd0'found-item?,\ufdd0'rot,\ufdd0'steps,\ufdd0'crystals".split(",")), b) ? Sb.a(Tb(sd(Yd([], {}), a), this.j), b) : new Pg(this.x, this.y, this.M, this.N, this.Q, this.I, this.J, this.K, this.R, this.r, this.G, this.P, this.L, this.O, this.j, this.h, $c(Sb.a(this.g, b)), l)
};
function Qg() {
  for(var a = Kf(), b = cc(a) ? U.a(yb, a) : a, a = A.b(b, "\ufdd0'map", l), c = A.b(b, "\ufdd0'h", l), d = A.b(b, "\ufdd0'w", l), f = function() {
    for(var a = qc(d), f = qc(c);;) {
      if(ad(function(a, c) {
        return function(d) {
          return Cf(b.a ? b.a(a + (d.d ? d.d(0) : d.call(l, 0)), c + (d.d ? d.d(1) : d.call(l, 1))) : b.call(l, a + (d.d ? d.d(0) : d.call(l, 0)), c + (d.d ? d.d(1) : d.call(l, 1))))
        }
      }(a, f), function() {
        var b = function(a, b) {
          return function pb(c) {
            return new Jc(l, o, function(a, b) {
              return function() {
                for(var d = c;;) {
                  if(P(d)) {
                    var f = I(d), f = function(a, b, c, d) {
                      return function rd(f) {
                        return new Jc(l, o, function(a, b, c, d) {
                          return function() {
                            for(;;) {
                              if(P(f)) {
                                var a = I(f);
                                return N(V([d, a]), rd(J(f)))
                              }
                              return l
                            }
                          }
                        }(a, b, c, d))
                      }
                    }(d, a, b, f);
                    if(f = P(f.d ? f.d(Ue.d(3)) : f.call(l, Ue.d(3)))) {
                      return Tc.a(f, pb(J(d)))
                    }
                    d = J(d)
                  }else {
                    return l
                  }
                }
              }
            }(a, b))
          }
        }(a, f);
        return b.d ? b.d(Ue.d(3)) : b.call(l, Ue.d(3))
      }())) {
        return V([a, f])
      }
      var g = qc(d), i = qc(c), a = g, f = i
    }
  }(), i = Q.b(f, 0, l), g = Q.b(f, 1, l), j = function() {
    for(var a = ef(i, 20), c = ef(g, 20);;) {
      if(u(Cf(b.a ? b.a(a, c) : b.call(l, a, c)))) {
        return V([a, c])
      }
      a = ef(i, 20);
      c = ef(g, 20)
    }
  }(), f = Q.b(j, 0, l), j = Q.b(j, 1, l), k = function() {
    for(var a = qc(d), f = qc(c);;) {
      if(u(Cf(b.a ? b.a(a, f) : b.call(l, a, f)))) {
        return V([a, f])
      }
      a = qc(d);
      f = qc(c)
    }
  }(), m = Q.b(k, 0, l), k = Q.b(k, 1, l), n = g + 2, w = i + 3, B = g;;) {
    if(B < n) {
      for(var D = i;;) {
        if(D < w) {
          a[D + B * d] = wf, D += 1
        }else {
          break
        }
      }
      B += 1
    }else {
      break
    }
  }
  u(h) && (Ye.c(F([[R("found posn for ship at "), R(i), R(", "), R(g), R(".")].join("")], 0)), Ye.c(F([[R("found posn for radar at "), R(f), R(", "), R(j), R(".")].join("")], 0)), Ye.c(F([[R("found posn for engine at "), R(m), R(", "), R(k), R(".")].join("")], 0)));
  a[f + j * d] = xf;
  a[m + k * d] = yf;
  return Rb.c(b, "\ufdd0'sx", i, F(["\ufdd0'sy", g, "\ufdd0'items", de([V([m, k]), V([f, j])], ["\ufdd0'engine", "\ufdd0'radar"]), "\ufdd0'item-posns", Yd(["\ufdd0'engine", "\ufdd0'radar"], {"\ufdd0'engine":V([m, k]), "\ufdd0'radar":V([f, j])}), "\ufdd0'nx", f, "\ufdd0'ny", j], 0))
}
function Rg(a, b) {
  var c = cc(a) ? U.a(yb, a) : a, d = A.b(c, "\ufdd0'player", l), f = cc(d) ? U.a(yb, d) : d;
  A.b(f, "\ufdd0'found-item?", l);
  var d = A.b(f, "\ufdd0'y", l), i = A.b(f, "\ufdd0'x", l);
  A.b(f, "\ufdd0'crystals", l);
  A.b(f, "\ufdd0'items", l);
  var f = A.b(c, "\ufdd0'level", l), g = A.b(c, "\ufdd0'need-items", l);
  if(10 <= C($f)) {
    return Lg("\ufdd0'won"), Rb.b(c, "\ufdd0'won?", h)
  }
  if(b == l) {
    return c
  }
  i >>= 5;
  d >>= 5;
  Lg(b);
  f.map[i + d * f.S] = pf;
  return wd.c(wd.c(wd(wd(wd.c(c, V(["\ufdd0'player", "\ufdd0'items"]), Mb, F([b], 0)), V(["\ufdd0'player", "\ufdd0'looking-for"]), I(H(g))), V(["\ufdd0'need-items"]), H), V(["\ufdd0'level", "\ufdd0'items"]), Sb, F([V([i, d])], 0)), V(["\ufdd0'level", "\ufdd0'item-posns"]), Sb, F([b], 0))
}
function Sg(a) {
  var a = cc(a) ? U.a(yb, a) : a, b = A.b(a, "\ufdd0'need-items", l);
  A.b(a, "\ufdd0'yo", l);
  A.b(a, "\ufdd0'xo", l);
  var c = A.b(a, "\ufdd0'player", l), d = A.b(a, "\ufdd0'level", l), f = c.x >> 5, i = c.y >> 5, g = d.a ? d.a(f, i) : d.call(l, f, i), j = g.ka / 100, k = function() {
    var a = td.a(d, V(["\ufdd0'items", V([f, i])]));
    if(u(a)) {
      return a
    }
    return wb.a(I(b), g.name) ? (d.map[f + d.S * i] = pf, g.name) : l
  }();
  return Rg(vd(a, V(["\ufdd0'player", "\ufdd0'health"]), c.G - j), k)
}
function Tg(a, b, c, d, f) {
  a = cc(a) ? U.a(yb, a) : a;
  A.b(a, "\ufdd0'found-item?", l);
  var i = A.b(a, "\ufdd0'y", l), g = A.b(a, "\ufdd0'x", l);
  if(function() {
    var a = 0 === d;
    return a ? d === f : a
  }()) {
    return a
  }
  var j = g - 8 >> 5, k = i - 8 >> 5, m = g + 8 >> 5, n = i + 8 >> 5, w = d + g - 8 >> 5, B = f + i - 8 >> 5, D = d + g + 8 >> 5, K = f + i + 8 >> 5, G = $e.d(h);
  $e.d(l);
  for(var D = D + 1, K = K + 1, O = w;;) {
    if(O < D) {
      for(var S = B;;) {
        if(S < K) {
          if(!u(function() {
            var a;
            a = (a = j < O) ? O < m + 1 : a;
            return u(a) ? (a = k < S) ? S < n + 1 : a : a
          }()) && u((b.a ? b.a(O, S) : b.call(l, O, S)).pa)) {
            if(af(G, o), w = b.a ? b.a(O, S) : b.call(l, O, S), u(u(c) ? wb.a("\ufdd0'crystal", w.name) : c)) {
              b.map[O + 128 * S] = pf, bf.a($f, Ab)
            }
          }
          S += 1
        }else {
          break
        }
      }
      O += 1
    }else {
      break
    }
  }
  return u(C(G)) ? Rb.c(a, "\ufdd0'x", g + d, F(["\ufdd0'y", i + f], 0)) : a
}
function Ug(a) {
  var a = cc(a) ? U.a(yb, a) : a, b = A.b(a, "\ufdd0'player", l);
  return Rb.b(a, "\ufdd0'over?", 0 > b.G)
}
function Vg(a, b) {
  var c = cc(a) ? U.a(yb, a) : a, d = A.b(c, "\ufdd0'need-items", l), f = A.b(c, "\ufdd0'yo", l), i = A.b(c, "\ufdd0'xo", l), g = A.b(c, "\ufdd0'player", l), j = A.b(c, "\ufdd0'level", l), k = cc(b) ? U.a(yb, b) : b;
  A.b(k, "\ufdd0'c?", l);
  var m = A.b(k, "\ufdd0'my", l), n = A.b(k, "\ufdd0'mx", l);
  A.b(k, "\ufdd0'ks", l);
  return Ug(Sg(Rb.b(c, "\ufdd0'player", function() {
    var a = g.x, b = g.y, c = n + i - a, k = m + f - b;
    return Rb.c(u(g.K) ? function() {
      var c = g.I - a, f = g.J - b, i = Math.sqrt.d ? Math.sqrt.d(c * c + f * f) : Math.sqrt.call(l, c * c + f * f), c = 2 * (c / i), f = 2 * (f / i);
      return i < Mg / 2 ? Rb.b(g, "\ufdd0'moving?", o) : Tg(Tg(wd(g, V(["\ufdd0'steps"]), Ab), j, wb.a("\ufdd0'crystals", I(d)), c, 0), j, wb.a("\ufdd0'crystals", I(d)), 0, f)
    }() : g, "\ufdd0'ex", n + i, F(["\ufdd0'ey", m + f, "\ufdd0'rot", Math.atan2.a ? Math.atan2.a(k, c) : Math.atan2.call(l, k, c)], 0))
  }())))
}
function Wg(a, b, c) {
  return Rb.c(a, "\ufdd0'destx", b, F(["\ufdd0'desty", c, "\ufdd0'moving?", h], 0))
}
;function Xg(a, b, c, d, f, i) {
  this.Ga = a;
  this.Ha = b;
  this.Ia = c;
  this.Da = d;
  this.j = f;
  this.g = i;
  this.p = 0;
  this.i = 619054858;
  4 < arguments.length ? (this.j = f, this.g = i) : this.g = this.j = l
}
r = Xg.prototype;
r.C = function(a) {
  var b = this.h;
  return b != l ? b : this.h = a = Bc(a)
};
r.T = function(a, b) {
  return A.b(a, b, l)
};
r.U = function(a, b, c) {
  return"\ufdd0'ks" === b ? this.Ga : "\ufdd0'mx" === b ? this.Ha : "\ufdd0'my" === b ? this.Ia : "\ufdd0'c?" === b ? this.Da : A.b(this.g, b, c)
};
r.ga = function(a, b, c) {
  return(E.a ? E.a("\ufdd0'ks", b) : E.call(l, "\ufdd0'ks", b)) ? new Xg(c, this.Ha, this.Ia, this.Da, this.j, this.g, l) : (E.a ? E.a("\ufdd0'mx", b) : E.call(l, "\ufdd0'mx", b)) ? new Xg(this.Ga, c, this.Ia, this.Da, this.j, this.g, l) : (E.a ? E.a("\ufdd0'my", b) : E.call(l, "\ufdd0'my", b)) ? new Xg(this.Ga, this.Ha, c, this.Da, this.j, this.g, l) : (E.a ? E.a("\ufdd0'c?", b) : E.call(l, "\ufdd0'c?", b)) ? new Xg(this.Ga, this.Ha, this.Ia, c, this.j, this.g, l) : new Xg(this.Ga, this.Ha, this.Ia, 
  this.Da, this.j, Rb.b(this.g, b, c), l)
};
r.z = function(a, b) {
  return Zb(b) ? Ia(a, y.a(b, 0), y.a(b, 1)) : kc.b(Aa, a, b)
};
r.B = function() {
  return P(Tc.a(V([W.c(F(["\ufdd0'ks", this.Ga], 0)), W.c(F(["\ufdd0'mx", this.Ha], 0)), W.c(F(["\ufdd0'my", this.Ia], 0)), W.c(F(["\ufdd0'c?", this.Da], 0))]), this.g))
};
r.w = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, [R("#"), R("ld23.input.Input"), R("{")].join(""), ", ", "}", b, Tc.a(V([W.c(F(["\ufdd0'ks", this.Ga], 0)), W.c(F(["\ufdd0'mx", this.Ha], 0)), W.c(F(["\ufdd0'my", this.Ia], 0)), W.c(F(["\ufdd0'c?", this.Da], 0))]), this.g))
};
r.A = function() {
  return 4 + Nb(this.g)
};
r.u = function(a, b) {
  var c;
  c = u(b) ? (c = a.constructor === b.constructor) ? Qd(a, b) : c : b;
  return u(c) ? h : o
};
r.F = function(a, b) {
  return new Xg(this.Ga, this.Ha, this.Ia, this.Da, b, this.g, this.h)
};
r.D = p("j");
r.Aa = function(a, b) {
  return hc(Qe(["\ufdd0'mx", "\ufdd0'my", "\ufdd0'c?", "\ufdd0'ks"]), b) ? Sb.a(Tb(sd(Yd([], {}), a), this.j), b) : new Xg(this.Ga, this.Ha, this.Ia, this.Da, this.j, this.h, $c(Sb.a(this.g, b)), l)
};
var Yg = de([65, 68, 37, 38, 39, 40, 81, 83, 87, 27], "\ufdd0'left,\ufdd0'right,\ufdd0'left,\ufdd0'up,\ufdd0'right,\ufdd0'down,\ufdd0'quit,\ufdd0'down,\ufdd0'up,\ufdd0'quit".split(","));
function Zg(a, b) {
  return function(c) {
    c.preventDefault();
    c = Yg.d ? Yg.d(c.keyCode) : Yg.call(l, c.keyCode);
    return u(c) ? bf.ja(a, wd, V(["\ufdd0'ks"]), b, c) : l
  }
}
function $g(a, b) {
  var c = function() {
    for(var a = 0, c = 0, d = b;;) {
      var f;
      f = d;
      f = u(f) ? Zc.a("body", d.tagName) : f;
      if(u(f)) {
        c += d.offsetLeft, f = d.offsetParent, a += d.offsetTop, d = f
      }else {
        return V([a, c])
      }
    }
  }(), d = Q.b(c, 0, l), f = Q.b(c, 1, l);
  return function(b) {
    bf.c(a, Rb, "\ufdd0'mx", b.clientX + -f + window.pageXOffset, "\ufdd0'my", F([b.clientY + -d + window.pageYOffset], 0));
    return o
  }
}
function ah() {
  var a = bh, b = ch;
  document.onkeydown = Zg(a, Mb);
  document.onkeyup = Zg(a, Vb);
  var c = $g(a, b);
  b.addEventListener("mousemove", c);
  b.addEventListener("mousedown", function(b) {
    bf.o(a, Rb, "\ufdd0'c?", h);
    return c.d ? c.d(b) : c.call(l, b)
  });
  b.addEventListener("mouseup", function(b) {
    bf.o(a, Rb, "\ufdd0'c?", o);
    return c.d ? c.d(b) : c.call(l, b)
  })
}
;var ch, dh = bf.a(sg, Ab);
function eh() {
  var a = Ag.c(F([V(["\ufdd0'div#wrapper", V(["\ufdd0'div#content", V(["\ufdd0'h1", "Crashed on Minutiae Prime"]), V(["\ufdd0'div#game", V(["\ufdd0'div.clearfix", V(["\ufdd0'canvas#canvas", Yd(["\ufdd0'width", "\ufdd0'height", "\ufdd0'onmousedown"], {"\ufdd0'width":640, "\ufdd0'height":480, "\ufdd0'onmousedown":"return false;"})]), V(["\ufdd0'div#journal", V(["\ufdd0'h3", "Ship Log"]), Fg])])]), V(["\ufdd0'span#fps"]), u(h) ? V(["\ufdd0'button#stop", Yd(["\ufdd0'style"], {"\ufdd0'style":"display: none;"}), 
  "stop"]) : V([])])])], 0));
  a.setAttribute("crateGroup", dh);
  return a
}
var Zf = $e.d(l), bh = $e.d(l), fh = $e.d(o), gh = function() {
  var a = window.uc;
  if(u(a)) {
    return a
  }
  a = window.vc;
  if(u(a)) {
    return a
  }
  a = window.rc;
  if(u(a)) {
    return a
  }
  a = window.tc;
  if(u(a)) {
    return a
  }
  a = window.sc;
  return u(a) ? a : function(a) {
    return setTimeout(a, 17)
  }
}(), hh = function() {
  function a(a, d) {
    var f = l;
    t(d) && (f = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, f)
  }
  function b(a, b) {
    Of(a, "black");
    a: {
      var f = Lf(a);
      f.fillStyle = "white";
      f.font = "15px monospace";
      for(var i = Nb(b), g = 0;;) {
        if(g < i) {
          var j = Q.a(b, g), k = (a.width - f.measureText(j).width) / 2, m = 30 * g + (a.height - 30 * Nb(b)) / 2;
          f.fillText(j, k, m);
          g += 1
        }else {
          break a
        }
      }
    }
    return a
  }
  a.n = 1;
  a.k = function(a) {
    var d = I(a), a = J(a);
    return b(d, a)
  };
  a.c = b;
  return a
}(), ih = $e.d((new Date).getTime()), jh = $e.d((new Date).getTime()), kh = $e.d(0), lh = $e.d(0), mh = $e.d(0), nh = $e.d(0), Yf = df(640, 480);
function oh() {
  ch = document.getElementById(Re("\ufdd0'canvas"));
  var a = new Xg(Qe([]), -1, -1, o), b;
  b = Qg();
  a: {
    for(var c = Lf(Vf), d = 0;;) {
      if(128 > d) {
        for(var f = 0;;) {
          if(128 > f) {
            var i = c, g = (b.a ? b.a(d, f) : b.call(l, d, f)).color;
            i.fillStyle = g;
            i.fillRect(d, f, 1, 1);
            f += 1
          }else {
            break
          }
        }
        d += 1
      }else {
        break a
      }
    }
  }
  b = Og(new Ng(b, new Pg(Mg * (0.5 + b.aa), Mg * (2.5 + b.ba), 0, 0, 0, Mg * (0.5 + b.aa), Mg * (2.5 + b.ba), o, 0, Qe([]), 100, "\ufdd0'radar", 0, o), 0, 0, o, Tb(zb("\ufdd0'radar", "\ufdd0'engine", "\ufdd0'glass", "\ufdd0'crystals"), yb("\ufdd0'line", 95)), o));
  af(bh, a);
  af(Zf, b);
  af(fh, h)
}
function ph() {
  return af(fh, o)
}
(function(a) {
  document.body.appendChild(eh());
  if(u(h)) {
    document.getElementById(Re("\ufdd0'stop")).onclick = ph
  }
  var b = document.getElementById(Re("\ufdd0'canvas"));
  hh.c(b, F(["Generating world...", "(please be patient)"], 0));
  return setTimeout(function() {
    oh();
    hh.c(b, F(["Binding events"], 0));
    return setTimeout(function() {
      ah();
      hh.c(b, F(["Starting game!"], 0));
      return setTimeout(a, 50)
    }, 50)
  }, 100)
})(function qh() {
  if(u(C(fh))) {
    var b = (new Date).getTime(), c = C(Zf).na, d = C(Zf).qa;
    bf.b(nh, mc, (b - C(ih)) / (1E3 / 60));
    af(ih, b);
    u(u(c) ? c : d) || bf.a(Zf, function(b) {
      for(var c = C(nh);;) {
        if(0 < c) {
          bf.a(lh, Ab);
          bf.a(nh, nc);
          bf.a(kh, Ab);
          var c = c - 1, d = C(bh), b = cc(b) ? U.a(yb, b) : b, j = A.b(b, "\ufdd0'yo", l), k = A.b(b, "\ufdd0'xo", l);
          A.b(b, "\ufdd0'player", l);
          A.b(b, "\ufdd0'level", l);
          var d = cc(d) ? U.a(yb, d) : d, m = A.b(d, "\ufdd0'c?", l), n = A.b(d, "\ufdd0'my", l), w = A.b(d, "\ufdd0'mx", l);
          A.b(d, "\ufdd0'ks", l);
          b = Og(Vg(u(m) ? wd.c(b, V(["\ufdd0'player"]), Wg, F([k + w, j + n], 0)) : b, d))
        }else {
          return b
        }
      }
    });
    gh.d ? gh.d(qh) : gh.call(l, qh);
    Xf();
    ch.getContext("2d").drawImage(Yf, 0, 0);
    u(c) ? hh.c(ch, F(["Game Over", "refresh to try again", "(sorry, didn't have time for good menus)"], 0)) : u(d) && hh.c(ch, F(["You Won!", "Thanks for playing!", "refresh to try again", "(sorry, didn't have time for good menus)"], 0));
    bf.a(mh, Ab);
    if(1E3 <= (new Date).getTime() - C(jh)) {
      return af(jh, (new Date).getTime()), C(mh), C(lh), af(mh, 0), af(lh, 0)
    }
  }
  return l
});
