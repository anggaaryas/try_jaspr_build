// Generated by dart2js (NullSafetyMode.sound, csp, intern-composite-values), the Dart to JavaScript compiler version: 3.5.3.
((s, d, e) => {
  s[d] = s[d] || {};
  s[d][e] = s[d][e] || [];
  s[d][e].push({p: "main.clients.dart.js_10", e: "beginPart"});
})(self, "$__dart_deferred_initializers__", "eventLog");
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var J, B, G, K,
  A = {
    h1(children) {
      var _null = null;
      return F.DomComponent$(_null, _null, children, _null, _null, _null, _null, _null, "h1");
    },
    p(children) {
      var _null = null;
      return F.DomComponent$(_null, _null, children, _null, _null, _null, _null, _null, "p");
    },
    button(children, onClick) {
      var t3, _null = null,
        t1 = type$.String,
        t2 = B.LinkedHashMap_LinkedHashMap$_empty(t1, t1);
      t2 = H.LinkedHashMap_LinkedHashMap$of(t2, t1, t1);
      t1 = B.LinkedHashMap_LinkedHashMap$_empty(t1, type$.void_Function_JSObject);
      t3 = type$.dynamic;
      t1.addAll$1(0, A.events0__events$closure().call$2$1$onClick(onClick, t3, t3));
      return F.DomComponent$(t2, _null, children, _null, t1, _null, _null, _null, "button");
    },
    img(src, width) {
      var _null = null,
        t1 = type$.String,
        t2 = B.LinkedHashMap_LinkedHashMap$_empty(t1, t1);
      t1 = H.LinkedHashMap_LinkedHashMap$of(t2, t1, t1);
      if (width != null)
        t1.$indexSet(0, "width", B.S(width));
      t1.$indexSet(0, "src", src);
      return F.DomComponent$(t1, _null, _null, _null, _null, _null, _null, _null, "img");
    },
    span(children) {
      var _null = null;
      return F.DomComponent$(_null, _null, children, _null, _null, _null, _null, _null, "span");
    },
    InputType: function InputType(t0, t1) {
      this.index = t0;
      this._core$_name = t1;
    },
    events(onChange, onClick, onInput, V1, V2) {
      var t1;
      type$.nullable_void_Function._as(onClick);
      V1._eval$1("~(0)?")._as(onInput);
      V2._eval$1("~(0)?")._as(onChange);
      t1 = B.LinkedHashMap_LinkedHashMap$_empty(type$.String, type$.void_Function_JSObject);
      if (onClick != null)
        t1.$indexSet(0, "click", new A.events_closure(onClick));
      if (onInput != null)
        t1.$indexSet(0, "input", A._callWithValue("onInput", onInput, V1));
      if (onChange != null)
        t1.$indexSet(0, "change", A._callWithValue("onChange", onChange, V2));
      return t1;
    },
    _callWithValue($event, fn, $V) {
      return new A._callWithValue_closure(fn, $V);
    },
    _extension_0_toIterable(_this) {
      return B._makeSyncStarIterable(A._extension_0_toIterable$body(_this), type$.JSObject);
    },
    _extension_0_toIterable$body($async$_this) {
      return function() {
        var _this = $async$_this;
        var $async$goto = 0, $async$handler = 2, $async$currentError, t3, t1, t2, i;
        return function $async$_extension_0_toIterable($async$iterator, $async$errorCode, $async$result) {
          if ($async$errorCode === 1) {
            $async$currentError = $async$result;
            $async$goto = $async$handler;
          }
          while (true)
            switch ($async$goto) {
              case 0:
                // Function start
                t1 = type$.int;
                t2 = type$.nullable_JSObject;
                i = 0;
              case 3:
                // while condition
                t3 = B.getProperty(_this, "length", t1);
                if (typeof t3 !== "number") {
                  B.iae(t3);
                  // goto return
                  $async$goto = 1;
                  break;
                }
                if (!(i < t3)) {
                  // goto after while
                  $async$goto = 4;
                  break;
                }
                t3 = B._callMethodUnchecked1(_this, "item", i, t2);
                t3.toString;
                $async$goto = 5;
                return $async$iterator._async$_current = t3, 1;
              case 5:
                // after yield
                ++i;
                // goto while condition
                $async$goto = 3;
                break;
              case 4:
                // after while
              case 1:
                // return
                return 0;
              case 2:
                // rethrow
                return $async$iterator._datum = $async$currentError, 3;
            }
        };
      };
    },
    events_closure: function events_closure(t0) {
      this.onClick = t0;
    },
    _callWithValue_closure: function _callWithValue_closure(t0, t1) {
      this.fn = t0;
      this.V = t1;
    },
    _callWithValue__closure: function _callWithValue__closure(t0) {
      this.target = t0;
    },
    _callWithValue___closure: function _callWithValue___closure(t0) {
      this.target = t0;
    },
    _QuadEdgeInsets$only($top) {
      return new A._QuadEdgeInsets($top);
    },
    _QuadEdgeInsets: function _QuadEdgeInsets(t0) {
      this._edge_insets0$_top = t0;
    },
    UnitExt_get_rem(_this) {
      return A._RemUnit$(G.JSNumber_methods.toDouble$0(_this));
    },
    _RemUnit$(value) {
      return new A._RemUnit("rem", value);
    },
    _RemUnit: function _RemUnit(t0, t1) {
      this._unit = t0;
      this._unit$_value = t1;
    },
    FlutterEmbedView$0(classes, constraints, id, loader, styles) {
      return new A.FlutterEmbedView0(id, classes, styles, constraints, loader, null);
    },
    FlutterEmbedView0: function FlutterEmbedView0(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _.id = t0;
      _.classes = t1;
      _.styles = t2;
      _.constraints = t3;
      _.loader = t4;
      _.key = t5;
    },
    FlutterEmbedView$deferred(builder, constraints, loadLibrary, styles) {
      return new A.FlutterEmbedView1(styles, constraints, loadLibrary, builder, null);
    },
    FlutterEmbedViewState$() {
      return new A.FlutterEmbedViewState();
    },
    FlutterEmbedView1: function FlutterEmbedView1(t0, t1, t2, t3, t4) {
      var _ = this;
      _.styles = t0;
      _.constraints = t1;
      _.loadLibrary = t2;
      _.builder = t3;
      _.key = t4;
    },
    FlutterEmbedView__libraryFuture_closure: function FlutterEmbedView__libraryFuture_closure() {
    },
    FlutterEmbedViewState: function FlutterEmbedViewState() {
      var _ = this;
      _.libraryLoading = _.flutterLoading = true;
      _._framework$_element = _._component = null;
    },
    FlutterEmbedViewState_initState_closure: function FlutterEmbedViewState_initState_closure(t0) {
      this.$this = t0;
    },
    FlutterEmbedViewState_initState__closure0: function FlutterEmbedViewState_initState__closure0(t0) {
      this.$this = t0;
    },
    FlutterEmbedViewState_initState_closure0: function FlutterEmbedViewState_initState_closure0(t0) {
      this.$this = t0;
    },
    FlutterEmbedViewState_initState__closure: function FlutterEmbedViewState_initState__closure(t0) {
      this.$this = t0;
    },
    CounterState$() {
      return new A.CounterState();
    },
    Counter: function Counter(t0) {
      this.key = t0;
    },
    CounterState: function CounterState() {
      this.count = 0;
      this._framework$_element = this._component = null;
    },
    CounterState_build_closure: function CounterState_build_closure(t0) {
      this.$this = t0;
    },
    CounterState_build__closure1: function CounterState_build__closure1(t0) {
      this.$this = t0;
    },
    CounterState_build_closure0: function CounterState_build_closure0(t0) {
      this.$this = t0;
    },
    CounterState_build__closure0: function CounterState_build__closure0(t0) {
      this.$this = t0;
    },
    CounterState_build_closure1: function CounterState_build_closure1(t0) {
      this.$this = t0;
    },
    CounterState_build__closure: function CounterState_build__closure(t0, t1) {
      this.$this = t0;
      this.value = t1;
    },
    EmbeddedCounter$(count, onChange) {
      return new A.EmbeddedCounter(count, onChange, null);
    },
    EmbeddedCounter: function EmbeddedCounter(t0, t1, t2) {
      this.count = t0;
      this.onChange = t1;
      this.key = t2;
    },
    EmbeddedCounter_build_closure: function EmbeddedCounter_build_closure(t0) {
      this.$this = t0;
    },
    Home$() {
      return new A.Home(null);
    },
    HomeState$() {
      return new A.HomeState();
    },
    Home: function Home(t0) {
      this.key = t0;
    },
    HomeState: function HomeState() {
      this._framework$_element = this._component = null;
    },
    getComponentForParams0(p) {
      return A.Home$();
    }
  },
  C, E, L, H, I, F, D;
  J = holdersList[1];
  B = holdersList[0];
  G = holdersList[2];
  K = holdersList[6];
  A = hunkHelpers.updateHolder(holdersList[3], A);
  C = holdersList[13];
  E = holdersList[7];
  L = holdersList[11];
  H = holdersList[12];
  I = holdersList[5];
  F = holdersList[10];
  D = holdersList[8];
  A.InputType.prototype = {
    _enumToString$0() {
      return "InputType." + B.S(this._core$_name);
    }
  };
  A._QuadEdgeInsets.prototype = {
    get$styles() {
      var t2,
        t1 = type$.String;
      t1 = B.LinkedHashMap_LinkedHashMap$_empty(t1, t1);
      t2 = this._edge_insets0$_top;
      if (t2 != null)
        t1.$indexSet(0, "top", t2.get$value());
      return t1;
    },
    $isEdgeInsets0: 1
  };
  A._RemUnit.prototype = {};
  A.FlutterEmbedView0.prototype = {
    build$1(context) {
      return B._makeSyncStarIterable(this.build$body$FlutterEmbedView(type$.BuildContext._as(context)), type$.Component);
    },
    build$body$FlutterEmbedView($async$context) {
      var $async$self = this;
      return function() {
        var context = $async$context;
        var $async$goto = 0, $async$handler = 1, $async$currentError, t2, t3, t4, t5, t1, _0_0;
        return function $async$build$1($async$iterator, $async$errorCode, $async$result) {
          if ($async$errorCode === 1) {
            $async$currentError = $async$result;
            $async$goto = $async$handler;
          }
          while (true)
            switch ($async$goto) {
              case 0:
                // Function start
                t1 = B._setArrayType([], type$.JSArray_Styles);
                _0_0 = $async$self.constraints;
                if (_0_0 != null) {
                  t2 = type$.nullable_double;
                  if (!B.boolConversionCheck(J.$eq$(B.getProperty(_0_0, "minWidth", t2), 1 / 0))) {
                    t3 = B.getProperty(_0_0, "minWidth", t2);
                    t3 = t3 == null ? null : D.UnitExt_get_px(t3);
                  } else
                    t3 = null;
                  if (!B.boolConversionCheck(J.$eq$(B.getProperty(_0_0, "maxWidth", t2), 1 / 0))) {
                    t4 = B.getProperty(_0_0, "maxWidth", t2);
                    t4 = t4 == null ? null : D.UnitExt_get_px(t4);
                  } else
                    t4 = null;
                  if (!B.boolConversionCheck(J.$eq$(B.getProperty(_0_0, "minHeight", t2), 1 / 0))) {
                    t5 = B.getProperty(_0_0, "minHeight", t2);
                    t5 = t5 == null ? null : D.UnitExt_get_px(t5);
                  } else
                    t5 = null;
                  if (!B.boolConversionCheck(J.$eq$(B.getProperty(_0_0, "maxHeight", t2), 1 / 0))) {
                    t2 = B.getProperty(_0_0, "maxHeight", t2);
                    t2 = t2 == null ? null : D.UnitExt_get_px(t2);
                  } else
                    t2 = null;
                  t1.push(D._BoxStyles$(null, null, t2, t4, t5, t3));
                }
                t2 = $async$self.styles;
                if (t2 != null)
                  t1.push(t2);
                t1 = D._CombinedStyles$(t1);
                t2 = B._setArrayType([], type$.JSArray_Component);
                t3 = $async$self.loader;
                if (t3 != null)
                  t2.push(t3);
                $async$goto = 2;
                return $async$iterator._async$_current = D.div(t2, $async$self.classes, $async$self.id, null, t1), 1;
              case 2:
                // after yield
                // implicit return
                return 0;
              case 1:
                // rethrow
                return $async$iterator._datum = $async$currentError, 3;
            }
        };
      };
    }
  };
  A.FlutterEmbedView1.prototype = {
    createState$0() {
      return A.FlutterEmbedViewState$();
    },
    _buildFlutter$0() {
      var t1, _null = null;
      B.checkDeferredIsLoaded("flutter");
      t1 = this.builder;
      t1 = t1 == null ? _null : t1.call$0();
      return I.FlutterEmbedView$(_null, this.constraints, _null, _null, this.styles, type$.nullable_Widget._as(t1));
    },
    _buildFallback$0() {
      return A.FlutterEmbedView$0(null, this.constraints, null, null, this.styles);
    }
  };
  A.FlutterEmbedViewState.prototype = {
    initState$0() {
      var _this = this;
      _this.super$State$initState();
      $.$get$FlutterEmbedView__libraryFuture().whenComplete$1(new A.FlutterEmbedViewState_initState_closure(_this));
      if (_this.get$component().loadLibrary != null)
        _this.get$component().loadLibrary.whenComplete$1(new A.FlutterEmbedViewState_initState_closure0(_this));
      else
        _this.libraryLoading = false;
    },
    build$1(context) {
      return B._makeSyncStarIterable(this.build$body$FlutterEmbedViewState(type$.BuildContext._as(context)), type$.Component);
    },
    build$body$FlutterEmbedViewState($async$context) {
      var $async$self = this;
      return function() {
        var context = $async$context;
        var $async$goto = 0, $async$handler = 2, $async$currentError;
        return function $async$build$1($async$iterator, $async$errorCode, $async$result) {
          if ($async$errorCode === 1) {
            $async$currentError = $async$result;
            $async$goto = $async$handler;
          }
          while (true)
            switch ($async$goto) {
              case 0:
                // Function start
                $async$goto = B.boolConversionCheck($async$self.flutterLoading) || B.boolConversionCheck($async$self.libraryLoading) ? 3 : 4;
                break;
              case 3:
                // then
                $async$goto = 5;
                return $async$iterator._async$_current = $async$self.get$component()._buildFallback$0(), 1;
              case 5:
                // after yield
                // goto return
                $async$goto = 1;
                break;
              case 4:
                // join
                $async$goto = 6;
                return $async$iterator._async$_current = $async$self.get$component()._buildFlutter$0(), 1;
              case 6:
                // after yield
              case 1:
                // return
                return 0;
              case 2:
                // rethrow
                return $async$iterator._datum = $async$currentError, 3;
            }
        };
      };
    }
  };
  A.Counter.prototype = {
    createState$0() {
      return A.CounterState$();
    }
  };
  A.CounterState.prototype = {
    build$1(context) {
      return B._makeSyncStarIterable(this.build$body$CounterState(type$.BuildContext._as(context)), type$.Component);
    },
    build$body$CounterState($async$context) {
      var $async$self = this;
      return function() {
        var context = $async$context;
        var $async$goto = 0, $async$handler = 1, $async$currentError, t1;
        return function $async$build$1($async$iterator, $async$errorCode, $async$result) {
          if ($async$errorCode === 1) {
            $async$currentError = $async$result;
            $async$goto = $async$handler;
          }
          while (true)
            switch ($async$goto) {
              case 0:
                // Function start
                t1 = type$.JSArray_Component;
                $async$goto = 2;
                return $async$iterator._async$_current = D.div(B._setArrayType([A.button(B._setArrayType([E.text("-")], t1), new A.CounterState_build_closure($async$self)), A.span(B._setArrayType([E.text(B.S($async$self.count))], t1)), A.button(B._setArrayType([E.text("+")], t1), new A.CounterState_build_closure0($async$self))], t1), "counter", null, null, null), 1;
              case 2:
                // after yield
                $async$goto = 3;
                return $async$iterator._async$_current = A.EmbeddedCounter$($async$self.count, new A.CounterState_build_closure1($async$self)), 1;
              case 3:
                // after yield
                // implicit return
                return 0;
              case 1:
                // rethrow
                return $async$iterator._datum = $async$currentError, 3;
            }
        };
      };
    },
    set$count(count) {
      this.count = B._asInt(count);
    }
  };
  A.EmbeddedCounter.prototype = {
    build$1(context) {
      return B._makeSyncStarIterable(this.build$body$EmbeddedCounter(type$.BuildContext._as(context)), type$.Component);
    },
    build$body$EmbeddedCounter($async$context) {
      var $async$self = this;
      return function() {
        var context = $async$context;
        var $async$goto = 0, $async$handler = 1, $async$currentError, t1;
        return function $async$build$1($async$iterator, $async$errorCode, $async$result) {
          if ($async$errorCode === 1) {
            $async$currentError = $async$result;
            $async$goto = $async$handler;
          }
          while (true)
            switch ($async$goto) {
              case 0:
                // Function start
                t1 = D._BoxStyles$(null, A._QuadEdgeInsets$only(A.UnitExt_get_rem(2)), null, null, null, null);
                $async$goto = 2;
                return $async$iterator._async$_current = A.FlutterEmbedView$deferred(new A.EmbeddedCounter_build_closure($async$self), {minWidth: 300, maxWidth: 1 / 0, minHeight: 100, maxHeight: 1 / 0}, B.loadDeferredLibrary("counter", 0), t1), 1;
              case 2:
                // after yield
                // implicit return
                return 0;
              case 1:
                // rethrow
                return $async$iterator._datum = $async$currentError, 3;
            }
        };
      };
    }
  };
  A.Home.prototype = {
    createState$0() {
      return A.HomeState$();
    }
  };
  A.HomeState.prototype = {
    initState$0() {
      this.super$State$initState();
      B.print("Hello client");
    },
    build$1(context) {
      return B._makeSyncStarIterable(this.build$body$HomeState(type$.BuildContext._as(context)), type$.Component);
    },
    build$body$HomeState($async$context) {
      return function() {
        var context = $async$context;
        var $async$goto = 0, $async$handler = 1, $async$currentError, t1, t2, t3, t4, t5;
        return function $async$build$1($async$iterator, $async$errorCode, $async$result) {
          if ($async$errorCode === 1) {
            $async$currentError = $async$result;
            $async$goto = $async$handler;
          }
          while (true)
            switch ($async$goto) {
              case 0:
                // Function start
                t1 = A.img("images/logo.png", 80);
                t2 = type$.JSArray_Component;
                t3 = A.h1(B._setArrayType([E.text("Welcome")], t2));
                t4 = A.p(B._setArrayType([E.text("You successfully create a new Jaspr site.")], t2));
                t5 = D._BoxStyles$(D.UnitExt_get_px(100), null, null, null, null, null);
                $async$goto = 2;
                return $async$iterator._async$_current = E.section(B._setArrayType([t1, t3, t4, D.div(B._setArrayType([], t2), null, null, null, t5), C.Counter_null], t2)), 1;
              case 2:
                // after yield
                // implicit return
                return 0;
              case 1:
                // rethrow
                return $async$iterator._datum = $async$currentError, 3;
            }
        };
      };
    }
  };
  var typesOffset = hunkHelpers.updateTypes(["bool(InputType)", "CounterWidget()", "Map<String,~(JSObject)>({onChange:~(1^)?,onClick:~()?,onInput:~(0^)?})<Object?,Object?>"]);
  A.events_closure.prototype = {
    call$1(_) {
      type$.JSObject._as(_);
      return this.onClick.call$0();
    },
    $signature: 21
  };
  A._callWithValue_closure.prototype = {
    call$1(e) {
      var t2, t3, t4, t5,
        t1 = type$.JSObject,
        target = B.getProperty(t1._as(e), "target", type$.nullable_JSObject);
      $label1$1: {
        t2 = t1._is(target);
        if (t2 && B.boolConversionCheck(B.JSAnyUtilityExtension_instanceOfString(target, "HTMLInputElement"))) {
          t1 = new A._callWithValue__closure(target).call$0();
          break $label1$1;
        }
        if (t2 && B.boolConversionCheck(B.JSAnyUtilityExtension_instanceOfString(target, "HTMLTextAreaElement"))) {
          t1 = B.getProperty(target, "value", type$.String);
          break $label1$1;
        }
        if (t2 && B.boolConversionCheck(B.JSAnyUtilityExtension_instanceOfString(target, "HTMLSelectElement"))) {
          t2 = B._setArrayType([], type$.JSArray_String);
          for (t1 = J.get$iterator$ax(A._extension_0_toIterable(B.getProperty(target, "selectedOptions", t1))), t3 = type$.String; B.boolConversionCheck(t1.moveNext$0());) {
            t4 = t1.get$current();
            t5 = B.boolConversionCheck(B.JSAnyUtilityExtension_instanceOfString(t4, "HTMLOptionElement"));
            if (t5)
              t2.push(B.getProperty(t4, "value", t3));
          }
          t1 = t2;
          break $label1$1;
        }
        t1 = null;
        break $label1$1;
      }
      this.fn.call$1(this.V._as(t1));
    },
    $signature: 21
  };
  A._callWithValue__closure.prototype = {
    call$0() {
      var t1 = this.target,
        type = B.IterableExtensions_get_firstOrNull(G.JSArray_methods.where$1(C.List_A8J, new A._callWithValue___closure(t1)), type$.InputType);
      $label0$0: {
        if (C.InputType_1_checkbox === type || C.InputType_12_radio === type) {
          t1 = B.getProperty(t1, "checked", type$.bool);
          break $label0$0;
        }
        if (C.InputType_10_number === type) {
          t1 = B.getProperty(t1, "valueAsNumber", type$.double);
          break $label0$0;
        }
        if (C.InputType_3_date === type || C.InputType_4_dateTimeLocal === type) {
          t1 = B.getProperty(t1, "valueAsDate", type$.nullable_JSObject);
          break $label0$0;
        }
        if (C.InputType_6_file === type) {
          t1 = B.getProperty(t1, "files", type$.nullable_JSObject);
          break $label0$0;
        }
        t1 = B.getProperty(t1, "value", type$.String);
        break $label0$0;
      }
      return t1;
    },
    $signature: 137
  };
  A._callWithValue___closure.prototype = {
    call$1(v) {
      return J.$eq$(L.EnumName_get_name(type$.InputType._as(v)), B.getProperty(this.target, "type", type$.String));
    },
    $signature: typesOffset + 0
  };
  A.FlutterEmbedView__libraryFuture_closure.prototype = {
    call$1(_) {
      B.checkDeferredIsLoaded("flutter");
      return I.FlutterEmbedView_preload();
    },
    $signature: 32
  };
  A.FlutterEmbedViewState_initState_closure.prototype = {
    call$0() {
      var t1 = this.$this;
      if (!B.boolConversionCheck(t1.get$mounted()))
        return;
      t1.setState$1(new A.FlutterEmbedViewState_initState__closure0(t1));
    },
    $signature: 5
  };
  A.FlutterEmbedViewState_initState__closure0.prototype = {
    call$0() {
      this.$this.flutterLoading = false;
    },
    $signature: 0
  };
  A.FlutterEmbedViewState_initState_closure0.prototype = {
    call$0() {
      var t1 = this.$this;
      if (!B.boolConversionCheck(t1.get$mounted()))
        return;
      t1.setState$1(new A.FlutterEmbedViewState_initState__closure(t1));
    },
    $signature: 5
  };
  A.FlutterEmbedViewState_initState__closure.prototype = {
    call$0() {
      this.$this.libraryLoading = false;
    },
    $signature: 0
  };
  A.CounterState_build_closure.prototype = {
    call$0() {
      var t1 = this.$this;
      t1.setState$1(new A.CounterState_build__closure1(t1));
    },
    $signature: 0
  };
  A.CounterState_build__closure1.prototype = {
    call$0() {
      var t1 = this.$this,
        t2 = t1.count;
      if (typeof t2 !== "number")
        return t2.$sub();
      t1.set$count(t2 - 1);
      return t2;
    },
    $signature: 0
  };
  A.CounterState_build_closure0.prototype = {
    call$0() {
      var t1 = this.$this;
      t1.setState$1(new A.CounterState_build__closure0(t1));
    },
    $signature: 0
  };
  A.CounterState_build__closure0.prototype = {
    call$0() {
      var t1 = this.$this,
        t2 = t1.count;
      if (typeof t2 !== "number")
        return t2.$add();
      t1.set$count(t2 + 1);
      return t2;
    },
    $signature: 0
  };
  A.CounterState_build_closure1.prototype = {
    call$1(value) {
      var t1 = this.$this;
      t1.setState$1(new A.CounterState_build__closure(t1, B._asInt(value)));
    },
    $signature: 30
  };
  A.CounterState_build__closure.prototype = {
    call$0() {
      var t1 = this.value;
      this.$this.set$count(t1);
      return t1;
    },
    $signature: 0
  };
  A.EmbeddedCounter_build_closure.prototype = {
    call$0() {
      B.checkDeferredIsLoaded("counter");
      var t1 = this.$this;
      return K.CounterWidget$(t1.count, t1.onChange);
    },
    $signature: typesOffset + 1
  };
  (function installTearOffs() {
    var _static = hunkHelpers.installStaticTearOff;
    _static(A, "events0__events$closure", 0, null, ["call$2$3$onChange$onClick$onInput", "call$0", "call$2$0", "call$2$1$onClick"], ["events", function() {
      var t1 = type$.dynamic;
      return A.events(null, null, null, t1, t1);
    }, function(V1, V2) {
      return A.events(null, null, null, V1, V2);
    }, function(onClick, V1, V2) {
      return A.events(null, onClick, null, V1, V2);
    }], 2, 0);
  })();
  (function inheritance() {
    var _inherit = hunkHelpers.inherit,
      _inheritMany = hunkHelpers.inheritMany;
    _inherit(A.InputType, B._Enum);
    _inheritMany(B.Closure, [A.events_closure, A._callWithValue_closure, A._callWithValue___closure, A.FlutterEmbedView__libraryFuture_closure, A.CounterState_build_closure1]);
    _inheritMany(B.Closure0Args, [A._callWithValue__closure, A.FlutterEmbedViewState_initState_closure, A.FlutterEmbedViewState_initState__closure0, A.FlutterEmbedViewState_initState_closure0, A.FlutterEmbedViewState_initState__closure, A.CounterState_build_closure, A.CounterState_build__closure1, A.CounterState_build_closure0, A.CounterState_build__closure0, A.CounterState_build__closure, A.EmbeddedCounter_build_closure]);
    _inherit(A._QuadEdgeInsets, B.Object);
    _inherit(A._RemUnit, D._Unit);
    _inheritMany(E.StatelessComponent, [A.FlutterEmbedView0, A.EmbeddedCounter]);
    _inheritMany(D.StatefulComponent, [A.FlutterEmbedView1, A.Counter, A.Home]);
    _inheritMany(D.State, [A.FlutterEmbedViewState, A.CounterState, A.HomeState]);
  })();
  B._Universe_addRules(init.typeUniverse, JSON.parse('{"ButtonType":{"_Enum":[],"Enum":[]},"InputType":{"_Enum":[],"Enum":[]},"CrossOrigin":{"_Enum":[],"Enum":[]},"MediaLoading":{"_Enum":[],"Enum":[]},"_QuadEdgeInsets":{"EdgeInsets0":[]},"_RemUnit":{"_Unit":[],"Unit":[]},"FlutterEmbedView0":{"StatelessComponent":[],"Component":[]},"FlutterEmbedView1":{"StatefulComponent":[],"Component":[]},"FlutterEmbedViewState":{"State":["FlutterEmbedView1"],"State.T":"FlutterEmbedView1"},"Counter":{"StatefulComponent":[],"Component":[]},"CounterState":{"State":["Counter"],"State.T":"Counter"},"EmbeddedCounter":{"StatelessComponent":[],"Component":[]},"Home":{"StatefulComponent":[],"Component":[]},"HomeState":{"State":["Home"],"State.T":"Home"}}'));
  var type$ = (function rtii() {
    var findType = B.findType;
    return {
      BuildContext: findType("BuildContext0"),
      Component: findType("Component"),
      InputType: findType("InputType"),
      JSArray_Component: findType("JSArray<Component>"),
      JSArray_String: findType("JSArray<String>"),
      JSArray_Styles: findType("JSArray<Styles>"),
      JSObject: findType("JSObject"),
      String: findType("String"),
      bool: findType("bool"),
      double: findType("double"),
      dynamic: findType("@"),
      int: findType("int"),
      nullable_JSObject: findType("JSObject?"),
      nullable_Widget: findType("Widget?"),
      nullable_double: findType("double?"),
      nullable_void_Function: findType("~()?"),
      void_Function_JSObject: findType("~(JSObject)")
    };
  })();
  (function constants() {
    var makeConstList = hunkHelpers.makeConstList;
    C.Counter_null = new A.Counter(null);
    C.InputType_10_number = new A.InputType(10, "number");
    C.InputType_12_radio = new A.InputType(12, "radio");
    C.InputType_1_checkbox = new A.InputType(1, "checkbox");
    C.InputType_3_date = new A.InputType(3, "date");
    C.InputType_4_dateTimeLocal = new A.InputType(4, "dateTimeLocal");
    C.InputType_6_file = new A.InputType(6, "file");
    C.InputType_0_button = new A.InputType(0, "button");
    C.InputType_2_color = new A.InputType(2, "color");
    C.InputType_5_email = new A.InputType(5, "email");
    C.InputType_7_hidden = new A.InputType(7, "hidden");
    C.InputType_8_image = new A.InputType(8, "image");
    C.InputType_9_month = new A.InputType(9, "month");
    C.InputType_11_password = new A.InputType(11, "password");
    C.InputType_13_range = new A.InputType(13, "range");
    C.InputType_14_reset = new A.InputType(14, "reset");
    C.InputType_15_search = new A.InputType(15, "search");
    C.InputType_16_submit = new A.InputType(16, "submit");
    C.InputType_17_tel = new A.InputType(17, "tel");
    C.InputType_18_text = new A.InputType(18, "text");
    C.InputType_19_time = new A.InputType(19, "time");
    C.InputType_20_url = new A.InputType(20, "url");
    C.InputType_21_week = new A.InputType(21, "week");
    C.List_A8J = B._setArrayType(makeConstList([C.InputType_0_button, C.InputType_1_checkbox, C.InputType_2_color, C.InputType_3_date, C.InputType_4_dateTimeLocal, C.InputType_5_email, C.InputType_6_file, C.InputType_7_hidden, C.InputType_8_image, C.InputType_9_month, C.InputType_10_number, C.InputType_11_password, C.InputType_12_radio, C.InputType_13_range, C.InputType_14_reset, C.InputType_15_search, C.InputType_16_submit, C.InputType_17_tel, C.InputType_18_text, C.InputType_19_time, C.InputType_20_url, C.InputType_21_week]), B.findType("JSArray<InputType>"));
  })();
  (function lazyInitializers() {
    var _lazyFinal = hunkHelpers.lazyFinal;
    _lazyFinal($, "FlutterEmbedView__libraryFuture", "$get$FlutterEmbedView__libraryFuture", () => B.loadDeferredLibrary("flutter", 0).then$1$1(new A.FlutterEmbedView__libraryFuture_closure(), B.findType("~")));
  })();
};
;
((d, h) => {
  d[h] = d.current;
  d.eventLog.push({p: "main.clients.dart.js_10", e: "endPart", h: h});
})($__dart_deferred_initializers__, "E3mhjKSd6x41C53/ynWqJqkp1bU=");
;
//# sourceMappingURL=main.clients.dart.js_10.part.js.map
