/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
	[42, 26, 36, 37], {
		1e3: function (t, e, o) {
			t.exports = o.p + "img/undraw_dreamer_gxxi.afa0e44.svg"
		},
		1001: function (t, e, o) {
			t.exports = o.p + "img/502.b2042cb.png"
		},
		1002: function (t, e, o) {
			t.exports = o.p + "img/undraw_cancel_u1it.2bf67a2.svg"
		},
		1003: function (t, e, o) {
			"use strict";
			o(821)
		},
		1004: function (t, e, o) {
			var n = o(99)(!1);
			n.push([t.i, ".dummy-mode[data-v-0fad4f82]{position:fixed;z-index:99;background:rgba(0,0,0,.3);padding:5px 15px;color:#fff;border-radius:50px;left:10px;top:10px;font-size:10px}.preview-badge[data-v-0fad4f82]{text-align:center;position:fixed;align-items:center;top:0;left:0;width:100%;display:flex;justify-items:center;flex-direction:row;height:100vh;padding:30px;background-color:rgba(0,0,0,.9);color:#fff;z-index:9999}#main-wrap[data-v-0fad4f82]{overflow-x:hidden}#main-wrap .darkMode[data-v-0fad4f82]{background-color:#2d2d2d}.setting-menu[data-v-0fad4f82]{position:fixed;color:#fff;z-index:99999;left:15px;top:15px}.setting-menu a[data-v-0fad4f82]{color:#fff;padding:15px 20px;border-radius:50px;background-color:rgba(0,0,0,.4);display:block;text-decoration:none}.load-page[data-v-0fad4f82]{width:100vw;height:100vh;z-index:9999;position:fixed}.load-page .b-overlay-wrap[data-v-0fad4f82]{height:100%}", ""]), t.exports = n
		},
		1036: function (t, e, o) {
			"use strict";
			o.r(e);
			o(233), o(444), o(25), o(86), o(47), o(23), o(92), o(35), o(53);
			var n = o(18),
				r = o(668),
				d = o(830),
				l = o(690),
				c = o(669),
				_ = o(579),
				v = {
					mixins: [c.a, _.a],
					head: function () {
						if (this.$store.state.invitation.user_code) return {
							title: this.head_title,
							meta: [{
								hid: "theme-color",
								name: "theme-color",
								content: this.data.invitation_data.TemplateSetting.title_color || "#FFFFFF"
							}, {
								hid: "og:image",
								property: "og:image",
								content: "".concat(this.API_URL, "uploads/").concat(this.data.invitation_data.image_separator.replace(/\.[^/.]+$/, "") + "-320.jpg")
							}, {
								hid: "og:url",
								property: "og:url",
								content: baseURL.concat(this.$route.params.id)
							}, {
								hid: "og:type",
								property: "og:type",
								content: "website"
							}, {
								hid: "og:title",
								property: "og:title",
								content: this.head_title
							}, {
								hid: "description",
								name: "description",
								content: this.description
							}, {
								hid: "og:description",
								property: "og:description",
								content: this.description
							}],
							link: this.css_source
						}
					},
					components: {
						Template1: r.default,
						Template2: d.default,
						TemplateDesktop: l.default
					},
					data: function () {
						return {
							load_page: !1,
							open_preview: !0
						}
					},
					computed: {
						head_title: function () {
							return this.data.invitation_data.Preset && this.$route.query.preset_id ? "Preset ".concat(this.data.invitation_data.Preset.name, " - Our Wedding Link") : "".concat(this.data.invitation_data.title_cover ? this.data.invitation_data.title_cover : "Wedding ".concat(this.data.invitation_data.wedding_is_private ? "Announcement" : "Invitation"), " - ").concat(this.data.invitation_data.couple_sort ? this.data.invitation_data.male_calling_name : this.data.invitation_data.female_calling_name, " & ").concat(this.data.invitation_data.couple_sort ? this.data.invitation_data.female_calling_name : this.data.invitation_data.male_calling_name)
						},
						css_source: function () {
							for (var t = {}, e = {}, o = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length, i = 0; i < 5; i++) o += n.charAt(Math.floor(Math.random() * r));
							return this.template_data.version ? (this.template_data.custom_css && "" !== this.template_data.custom_css && (t = {
								rel: "stylesheet",
								href: "".concat(baseURL, "uploads/css/custom-").concat(this.template_data.version, ".css?v=").concat(o)
							}), this.data.invitation_data.inv_css && "" !== this.data.invitation_data.inv_css && (e = {
								rel: "stylesheet",
								href: "".concat(baseURL, "uploads/css/inv-").concat(this.template_data.version, ".css?v=").concat(o)
							}), [{
								rel: "stylesheet",
								href: "".concat(baseURL, "uploads/css/").concat(this.template_data.version, ".css?v=").concat(o)
							}, t, e]) : []
						},
						description: function () {
							return this.data.invitation_data.Preset && this.$route.query.preset_id ? "Cobain preset ".concat(this.data.invitation_data.Preset.name, " sekarang juga - Our Wedding Link") : "".concat(this.toDate(this.data.invitation_data.wedding_date) || "", " ").concat(this.data.invitation_data.wedding_is_private ? "" : this.data.invitation_data.wedding_address || "", " - ").concat(this.data.invitation_data.quotes)
						},
						data: function () {
							return this.$store.state.invitation
						},
						BASE_URL: function () {
							return baseURL;
						},
						API_URL: function () {
							return baseURL
						},
						template_data: function () {
							return this.$store.state.invitation.invitation_data.TemplateSetting
						}
					},
					mounted: function () {
						var t = this;
						return Object(n.a)(regeneratorRuntime.mark((function e() {
							return regeneratorRuntime.wrap((function (e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										t.$device.userAgent && (t.$device.userAgent.includes("Vivo") || t.$device.userAgent.includes("vivo")) && (window.location.href = "".concat(baseURL, "not-support")), $(document).ready((function () {
											"dark" == t.data.invitation_data.TemplateSetting.mode && $("body").addClass("darkMode")
										}));
									case 2:
									case "end":
										return e.stop()
								}
							}), e)
						})))()
					},
					asyncData: function (t) {
						return Object(n.a)(regeneratorRuntime.mark((function e() {
							var o, n, r;
							return regeneratorRuntime.wrap((function (e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return o = t.store, n = t.route, t.redirect, r = t.app, e.prev = 1, e.next = 4, o.dispatch("invitation/init", n.params.id);
									case 4:
										if (e.sent, !n.query.preset_id) {
											e.next = 8;
											break
										}
										return e.next = 8, o.dispatch("invitation/applyPreset", n.query.preset_id);
									case 8:
										if (!n.query.to) {
											e.next = 12;
											break
										}
										return console.log("QUery to", n.query.to), e.next = 12, o.dispatch("invitation/applyTo", {
											to: n.query.to,
											user_code: n.params.id
										});
									case 12:
										if (!n.query.on_preview) {
											e.next = 15;
											break
										}
										return e.next = 15, o.dispatch("invitation/setToPreviewData");
									case 15:
										o.commit("invitation/setPreviewMode", ""), console.log(r.i18n.locale, "locale"), e.next = 22;
										break;
									case 19:
										e.prev = 19, e.t0 = e.catch(1), console.log(e.t0, "Error Async Data");
									case 22:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 19]
							])
						})))()
					}
				},
				m = (o(1003), o(117)),
				component = Object(m.a)(v, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "cover",
						class: {
							"no-scroll": !t.$store.state.invitation.is_open && t.$store.state.invitation.invitation_data.TemplateSetting && "template_1" == t.$store.state.invitation.invitation_data.TemplateSetting.template
						},
						attrs: {
							id: "main-wrap"
						}
					}, [t.$cookies.get("token") && !t.$store.state.invitation.different_user ? n("div", {
						staticClass: "setting-menu"
					}, [n("b-link", {
						attrs: {
							href: t.BASE_URL + "configuration/" + t.$route.params.id
						}
					}, [n("b", [n("b-icon", {
						attrs: {
							icon: "arrow-left"
						}
					}), t._v(" Kembali ke dashboard\n      ")], 1)])], 1) : t._e(), t._v(" "), t.$store.state.invitation.is_dummy ? n("div", {
						staticClass: "dummy-mode"
					}, [t._v("\n    sedang menggunakan data contoh\n  ")]) : t._e(), t._v(" "), t.$route.query.on_preview && t.open_preview ? n("div", {
						staticClass: "preview-badge"
					}, [n("div", {
						staticClass: "cover"
					}, [n("b", {
						staticStyle: {
							"font-size": "25px"
						}
					}, [t._v("Preview invitation")]), t._v(" "), n("br"), t._v(" "), n("span", [t._v("sebagian data kita jadikan dummy untuk melindungi privasi undangan.")]), t._v(" "), n("br"), t._v(" "), n("br"), t._v(" "), n("b-link", {
						on: {
							click: function (e) {
								t.open_preview = t.close
							}
						}
					}, [n("b", [t._v("ok, dimengerti")])])], 1)]) : t._e(), t._v(" "), t.load_page ? n("div", {
						staticClass: "load-page"
					}, [n("b-overlay", {
						attrs: {
							show: t.load_page,
							rounded: "sm",
							opacity: ".9"
						},
						scopedSlots: t._u([{
							key: "overlay",
							fn: function () {
								return [n("div", {
									staticClass: "text-center"
								}, [n("img", {
									attrs: {
										src: o(653),
										alt: "",
										width: "200px"
									}
								}), t._v(" "), n("p", {
									staticStyle: {
										"margin-top": "20px"
									},
									attrs: {
										id: "cancel-label"
									}
								}, [n("b", [t._v("Start something amazing, Please wait...")])])])]
							},
							proxy: !0
						}], null, !1, 2979952876)
					})], 1) : t._e(), t._v(" "), !t.load_page && t.data.user_code && t.data.is_exsist ? n("div", {
						class: "cover main-page " + t.template_data.style_theme + " font-" + t.template_data.font_title + "-title"
					}, [this.$device.isDesktop && "yes" !== this.$route.query.is_screenshoot ? [n("TemplateDesktop")] : ["template_1" == t.$store.state.invitation.invitation_data.TemplateSetting.template ? n("Template1") : t._e(), t._v(" "), "template_2" == t.$store.state.invitation.invitation_data.TemplateSetting.template ? n("Template2") : t._e()]], 2) : !t.data.user_code && t.data.is_exsist ? n("div", {
						staticClass: "layout-center",
						attrs: {
							align: "center"
						}
					}, [n("img", {
						staticStyle: {
							width: "300px",
							"margin-bottom": "30px"
						},
						attrs: {
							src: o(1e3),
							alt: ""
						}
					}), t._v(" "), n("h3", [t._v("Oops, undangannya "), n("br"), t._v(" "), n("b", [t._v("belum di aktif in")]), t._v(" nih. "), n("br"), t._v(" "), n("b-link", {
						staticStyle: {
							"font-size": "16px"
						},
						attrs: {
							to: "/configuration/" + t.$route.params.id
						}
					}, [t._v("Aktifin Sekarang")])], 1)]) : t.data.server_error ? n("div", {
						staticClass: "layout-center text-center"
					}, [n("img", {
						staticStyle: {
							width: "300px",
							"margin-bottom": "30px"
						},
						attrs: {
							src: o(1001),
							alt: ""
						}
					}), t._v(" "), n("b-alert", {
						staticStyle: {
							"font-size": "14px"
						},
						attrs: {
							show: "",
							variant: "warning"
						}
					}, [t._v("harap refresh secara berkala. jika belum bisa, info terupdate, silahkan kunjungi "), n("a", {
						attrs: {
							href: ""
						}
					}, [t._v("link instagram")]), t._v(" kita")])], 1) : n("div", {
						staticClass: "layout-center text-center"
					}, [n("img", {
						staticStyle: {
							width: "300px",
							"margin-bottom": "30px"
						},
						attrs: {
							src: o(1002),
							alt: ""
						}
					}), t._v(" "), n("h3", [t._v("Oops, "), n("br"), t._v(" undangan yang kamu cari "), n("br"), t._v(" "), n("b", [t._v("tidak ada")]), t._v(" nih. "), n("br"), t._v(" "), n("b-link", {
						staticStyle: {
							"font-size": "16px"
						},
						attrs: {
							to: "/register"
						}
					}, [t._v("Buat undangan sekarang ")])], 1)]), t._v(" "), n("recaptcha", {
						on: {
							error: t.onRecaptchaError,
							success: t.onRecaptchaSuccess,
							expired: t.onExpired
						}
					})], 1)
				}), [], !1, null, "0fad4f82", null);
			e.default = component.exports
		},
		594: function (t, e, o) {
			var content = o(650);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(100).default)("700572ff", content, !0, {
				sourceMap: !1
			})
		},
		603: function (t, e, o) {
			var n;
			n = function () {
				return function () {
					var t = {
							134: function (t, e, o) {
								"use strict";
								o.d(e, {
									default: function () {
										return S
									}
								});
								var n = o(279),
									r = o.n(n),
									d = o(370),
									l = o.n(d),
									c = o(817),
									_ = o.n(c);

								function v(t) {
									return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
										return typeof t
									} : function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
									})(t)
								}

								function m(t, e) {
									for (var i = 0; i < e.length; i++) {
										var o = e[i];
										o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
									}
								}
								var f = function () {
									function t(e) {
										! function (t, e) {
											if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
										}(this, t), this.resolveOptions(e), this.initSelection()
									}
									var e, o, n;
									return e = t, (o = [{
										key: "resolveOptions",
										value: function () {
											var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
											this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
										}
									}, {
										key: "initSelection",
										value: function () {
											this.text ? this.selectFake() : this.target && this.selectTarget()
										}
									}, {
										key: "createFakeElement",
										value: function () {
											var t = "rtl" === document.documentElement.getAttribute("dir");
											this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
											var e = window.pageYOffset || document.documentElement.scrollTop;
											return this.fakeElem.style.top = "".concat(e, "px"), this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.fakeElem
										}
									}, {
										key: "selectFake",
										value: function () {
											var t = this,
												e = this.createFakeElement();
											this.fakeHandlerCallback = function () {
												return t.removeFake()
											}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.container.appendChild(e), this.selectedText = _()(e), this.copyText(), this.removeFake()
										}
									}, {
										key: "removeFake",
										value: function () {
											this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
										}
									}, {
										key: "selectTarget",
										value: function () {
											this.selectedText = _()(this.target), this.copyText()
										}
									}, {
										key: "copyText",
										value: function () {
											var t;
											try {
												t = document.execCommand(this.action)
											} catch (e) {
												t = !1
											}
											this.handleResult(t)
										}
									}, {
										key: "handleResult",
										value: function (t) {
											this.emitter.emit(t ? "success" : "error", {
												action: this.action,
												text: this.selectedText,
												trigger: this.trigger,
												clearSelection: this.clearSelection.bind(this)
											})
										}
									}, {
										key: "clearSelection",
										value: function () {
											this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
										}
									}, {
										key: "destroy",
										value: function () {
											this.removeFake()
										}
									}, {
										key: "action",
										set: function () {
											var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
											if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
										},
										get: function () {
											return this._action
										}
									}, {
										key: "target",
										set: function (t) {
											if (void 0 !== t) {
												if (!t || "object" !== v(t) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
												if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
												if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
												this._target = t
											}
										},
										get: function () {
											return this._target
										}
									}]) && m(e.prototype, o), n && m(e, n), t
								}();

								function h(t) {
									return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
										return typeof t
									} : function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
									})(t)
								}

								function w(t, e) {
									for (var i = 0; i < e.length; i++) {
										var o = e[i];
										o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
									}
								}

								function y(t, p) {
									return (y = Object.setPrototypeOf || function (t, p) {
										return t.__proto__ = p, t
									})(t, p)
								}

								function k(t) {
									var e = function () {
										if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
										if (Reflect.construct.sham) return !1;
										if ("function" == typeof Proxy) return !0;
										try {
											return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
										} catch (t) {
											return !1
										}
									}();
									return function () {
										var o, n = T(t);
										if (e) {
											var r = T(this).constructor;
											o = Reflect.construct(n, arguments, r)
										} else o = n.apply(this, arguments);
										return x(this, o)
									}
								}

								function x(t, e) {
									return !e || "object" !== h(e) && "function" != typeof e ? function (t) {
										if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
										return t
									}(t) : e
								}

								function T(t) {
									return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									})(t)
								}

								function C(t, element) {
									var e = "data-clipboard-".concat(t);
									if (element.hasAttribute(e)) return element.getAttribute(e)
								}
								var S = function (t) {
									! function (t, e) {
										if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
										t.prototype = Object.create(e && e.prototype, {
											constructor: {
												value: t,
												writable: !0,
												configurable: !0
											}
										}), e && y(t, e)
									}(d, t);
									var e, o, n, r = k(d);

									function d(t, e) {
										var o;
										return function (t, e) {
											if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
										}(this, d), (o = r.call(this)).resolveOptions(e), o.listenClick(t), o
									}
									return e = d, n = [{
										key: "isSupported",
										value: function () {
											var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
												e = "string" == typeof t ? [t] : t,
												o = !!document.queryCommandSupported;
											return e.forEach((function (t) {
												o = o && !!document.queryCommandSupported(t)
											})), o
										}
									}], (o = [{
										key: "resolveOptions",
										value: function () {
											var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
											this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === h(t.container) ? t.container : document.body
										}
									}, {
										key: "listenClick",
										value: function (t) {
											var e = this;
											this.listener = l()(t, "click", (function (t) {
												return e.onClick(t)
											}))
										}
									}, {
										key: "onClick",
										value: function (t) {
											var e = t.delegateTarget || t.currentTarget;
											this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new f({
												action: this.action(e),
												target: this.target(e),
												text: this.text(e),
												container: this.container,
												trigger: e,
												emitter: this
											})
										}
									}, {
										key: "defaultAction",
										value: function (t) {
											return C("action", t)
										}
									}, {
										key: "defaultTarget",
										value: function (t) {
											var e = C("target", t);
											if (e) return document.querySelector(e)
										}
									}, {
										key: "defaultText",
										value: function (t) {
											return C("text", t)
										}
									}, {
										key: "destroy",
										value: function () {
											this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
										}
									}]) && w(e.prototype, o), n && w(e, n), d
								}(r())
							},
							828: function (t) {
								if ("undefined" != typeof Element && !Element.prototype.matches) {
									var e = Element.prototype;
									e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector
								}
								t.exports = function (element, t) {
									for (; element && 9 !== element.nodeType;) {
										if ("function" == typeof element.matches && element.matches(t)) return element;
										element = element.parentNode
									}
								}
							},
							438: function (t, e, o) {
								var n = o(828);

								function r(element, t, e, o, n) {
									var r = d.apply(this, arguments);
									return element.addEventListener(e, r, n), {
										destroy: function () {
											element.removeEventListener(e, r, n)
										}
									}
								}

								function d(element, t, e, o) {
									return function (e) {
										e.delegateTarget = n(e.target, t), e.delegateTarget && o.call(element, e)
									}
								}
								t.exports = function (t, e, o, n, d) {
									return "function" == typeof t.addEventListener ? r.apply(null, arguments) : "function" == typeof o ? r.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function (element) {
										return r(element, e, o, n, d)
									})))
								}
							},
							879: function (t, e) {
								e.node = function (t) {
									return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
								}, e.nodeList = function (t) {
									var o = Object.prototype.toString.call(t);
									return void 0 !== t && ("[object NodeList]" === o || "[object HTMLCollection]" === o) && "length" in t && (0 === t.length || e.node(t[0]))
								}, e.string = function (t) {
									return "string" == typeof t || t instanceof String
								}, e.fn = function (t) {
									return "[object Function]" === Object.prototype.toString.call(t)
								}
							},
							370: function (t, e, o) {
								var n = o(879),
									r = o(438);
								t.exports = function (t, e, o) {
									if (!t && !e && !o) throw new Error("Missing required arguments");
									if (!n.string(e)) throw new TypeError("Second argument must be a String");
									if (!n.fn(o)) throw new TypeError("Third argument must be a Function");
									if (n.node(t)) return function (t, e, o) {
										return t.addEventListener(e, o), {
											destroy: function () {
												t.removeEventListener(e, o)
											}
										}
									}(t, e, o);
									if (n.nodeList(t)) return function (t, e, o) {
										return Array.prototype.forEach.call(t, (function (t) {
											t.addEventListener(e, o)
										})), {
											destroy: function () {
												Array.prototype.forEach.call(t, (function (t) {
													t.removeEventListener(e, o)
												}))
											}
										}
									}(t, e, o);
									if (n.string(t)) return function (t, e, o) {
										return r(document.body, t, e, o)
									}(t, e, o);
									throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
								}
							},
							817: function (t) {
								t.exports = function (element) {
									var t;
									if ("SELECT" === element.nodeName) element.focus(), t = element.value;
									else if ("INPUT" === element.nodeName || "TEXTAREA" === element.nodeName) {
										var e = element.hasAttribute("readonly");
										e || element.setAttribute("readonly", ""), element.select(), element.setSelectionRange(0, element.value.length), e || element.removeAttribute("readonly"), t = element.value
									} else {
										element.hasAttribute("contenteditable") && element.focus();
										var o = window.getSelection(),
											n = document.createRange();
										n.selectNodeContents(element), o.removeAllRanges(), o.addRange(n), t = o.toString()
									}
									return t
								}
							},
							279: function (t) {
								function e() {}
								e.prototype = {
									on: function (t, e, o) {
										var n = this.e || (this.e = {});
										return (n[t] || (n[t] = [])).push({
											fn: e,
											ctx: o
										}), this
									},
									once: function (t, e, o) {
										var n = this;

										function r() {
											n.off(t, r), e.apply(o, arguments)
										}
										return r._ = e, this.on(t, r, o)
									},
									emit: function (t) {
										for (var data = [].slice.call(arguments, 1), e = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, o = e.length; i < o; i++) e[i].fn.apply(e[i].ctx, data);
										return this
									},
									off: function (t, e) {
										var o = this.e || (this.e = {}),
											n = o[t],
											r = [];
										if (n && e)
											for (var i = 0, d = n.length; i < d; i++) n[i].fn !== e && n[i].fn._ !== e && r.push(n[i]);
										return r.length ? o[t] = r : delete o[t], this
									}
								}, t.exports = e, t.exports.TinyEmitter = e
							}
						},
						e = {};

					function o(n) {
						if (e[n]) return e[n].exports;
						var r = e[n] = {
							exports: {}
						};
						return t[n](r, r.exports, o), r.exports
					}
					return o.n = function (t) {
						var e = t && t.__esModule ? function () {
							return t.default
						} : function () {
							return t
						};
						return o.d(e, {
							a: e
						}), e
					}, o.d = function (t, e) {
						for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}, o.o = function (t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}, o(134)
				}().default
			}, t.exports = n()
		},
		649: function (t, e, o) {
			"use strict";
			o(594)
		},
		650: function (t, e, o) {
			var n = o(99),
				r = o(441),
				d = o(651),
				l = o(624),
				c = o(652),
				_ = o(625),
				v = o(626),
				m = o(627),
				f = n(!1),
				h = r(d),
				w = r(l),
				y = r(c),
				k = r(_),
				x = r(v),
				T = r(m);
			f.push([t.i, ".music-control[data-v-3ae65d9e]{width:40px;height:40px;position:fixed;z-index:99;right:10px;top:10px;text-align:center;border-radius:50%;padding-top:8px}.music-control.off[data-v-3ae65d9e]{filter:grayscale(100%)}#also_inviting[data-v-3ae65d9e]{list-style-type:circle}#also_inviting li[data-v-3ae65d9e]{display:block!important;text-transform:inherit!important;padding:0!important;margin-bottom:12px}#widget[data-v-3ae65d9e]{position:relative}#widget .shape[data-v-3ae65d9e]{display:none;position:absolute;bottom:-1px;left:0;right:0}#footer p[data-v-3ae65d9e]{margin-bottom:0;text-align:center;font-size:12px}#footer p.link a[data-v-3ae65d9e]{color:#2d2d2d}#footer p.link span[data-v-3ae65d9e]{color:#f63854}#footer p img[data-v-3ae65d9e]{width:55px;padding-bottom:30px}.layout-cover[data-v-3ae65d9e]{background-color:#fff}.layout-cover .attendance-wrap[data-v-3ae65d9e]{width:80%;margin:0 auto 20px}.layout-cover .attendance-wrap p[data-v-3ae65d9e]{margin-top:10px}.layout-cover.noscroll[data-v-3ae65d9e]{height:68vh;overflow:hidden}.layout-cover.is_preview.mobile[data-v-3ae65d9e]{height:100%}.style_jawa #quote[data-v-3ae65d9e]{background-color:#9f492d;color:#f7bd78}.style_jawa #coupleProfile[data-v-3ae65d9e],.style_jawa #galleries[data-v-3ae65d9e]{background-color:#f7bd78;color:#562016}#quote[data-v-3ae65d9e]{padding:40px 0}#quote .shapeBottom[data-v-3ae65d9e]{position:absolute;left:0;right:0;display:none;bottom:-75px}#separator[data-v-3ae65d9e]{padding-bottom:0}.darkMode #footer[data-v-3ae65d9e],.darkMode section[data-v-3ae65d9e]{background-color:#2d2d2d}.darkMode #footer .link a[data-v-3ae65d9e],.darkMode #footer p[data-v-3ae65d9e]{color:#fff}.darkMode #quote[data-v-3ae65d9e]{background-color:#2d2d2d;color:#fff}.darkMode #separator[data-v-3ae65d9e]{background-color:transparent}.darkMode #separator .quotes[data-v-3ae65d9e]{color:#fff}.darkMode #coupleProfile[data-v-3ae65d9e]{background-color:#2d2d2d}.darkMode #coupleProfile .female[data-v-3ae65d9e],.darkMode #coupleProfile .male[data-v-3ae65d9e]{color:#fff}.darkMode #galleries[data-v-3ae65d9e]{background-color:#2d2d2d}.darkMode #galleries p[data-v-3ae65d9e]{color:#fff}.darkMode #weddingDetail[data-v-3ae65d9e]{background-color:#2d2d2d}.darkMode #weddingDetail #countdown h3[data-v-3ae65d9e],.darkMode #weddingDetail #countdown li[data-v-3ae65d9e],.darkMode #weddingDetail #countdown p[data-v-3ae65d9e],.darkMode #weddingDetail p[data-v-3ae65d9e]{color:#fff}.darkMode #wishes[data-v-3ae65d9e]{background-color:#2d2d2d}.darkMode .google-maps[data-v-3ae65d9e]{filter:invert(100%)}.darkMode h4[data-v-3ae65d9e],.darkMode section h1[data-v-3ae65d9e]{color:#fff}.rundown[data-v-3ae65d9e]{text-align:center}.rundown .item-rundown[data-v-3ae65d9e]{margin:30px 0}.rundown .item-rundown button[data-v-3ae65d9e]{margin-top:10px}.rundown .item-rundown h1[data-v-3ae65d9e]{text-transform:capitalize}.rundown p[data-v-3ae65d9e]{margin-bottom:5px}#countdown[data-v-3ae65d9e],#maps[data-v-3ae65d9e]{padding-top:50px}#countdown p[data-v-3ae65d9e],#countdown ul[data-v-3ae65d9e]{text-align:center}#countdown ul[data-v-3ae65d9e]{padding-left:0}#countdown li[data-v-3ae65d9e]{display:inline-block;list-style-type:none;font-size:1em;padding:1em;text-transform:uppercase;text-align:center}#countdown li#days[data-v-3ae65d9e]{font-size:1.5em;display:block}#countdown li#days span[data-v-3ae65d9e]{font-size:4.5rem}#countdown li span[data-v-3ae65d9e]{display:block;font-size:1.5rem;line-height:1}#countdown .wrapBtn[data-v-3ae65d9e]{position:relative}#countdown .shapeCountdown[data-v-3ae65d9e]{position:absolute;width:100%;left:0;display:none}.notif-wrap[data-v-3ae65d9e]{margin-top:20px}@media only screen and (max-width:400px){.item-rundown[data-v-3ae65d9e]{flex-basis:inherit}}@media only screen and (max-width:1024px){.premium #days[data-v-3ae65d9e]{background:#fff}}@media only screen and (min-width:1024px){.layout-cover:not(.mobile) #countdown li[data-v-3ae65d9e]{font-size:1.5em;display:inline-block}.layout-cover:not(.mobile) #countdown li#days[data-v-3ae65d9e]{display:inline-block}.layout-cover:not(.mobile) #countdown li span[data-v-3ae65d9e]{font-size:4.5rem}.layout-cover:not(.mobile) .premium #maps[data-v-3ae65d9e],.layout-cover:not(.mobile) .premium .video[data-v-3ae65d9e]{width:90%;margin:1rem 5%}.layout-cover:not(.mobile) .premium #coupleProfile[data-v-3ae65d9e]{background-image:url(" + h + ")}.layout-cover:not(.mobile) .premium #coupleProfile .male[data-v-3ae65d9e],.layout-cover:not(.mobile) .premium .rundown[data-v-3ae65d9e]{background-image:none}.layout-cover:not(.mobile) .premium .rundown[data-v-3ae65d9e]{background-image:url(" + w + ");background-size:cover}.layout-cover:not(.mobile) .premium #also_inviting[data-v-3ae65d9e]{background-image:none}.layout-cover.mobile .premium #days[data-v-3ae65d9e]{background:#fff}}.quotes[data-v-3ae65d9e]{white-space:pre-wrap;text-align:center;font-weight:600;font-size:15px;font-family:inherit;font-style:italic;line-height:1.7}.instagram[data-v-3ae65d9e]{margin:1px 10px;display:inline-block}.instagram img[data-v-3ae65d9e]{width:36px!important}.premium #coupleProfile[data-v-3ae65d9e]{background-color:#fff;background-image:url(" + w + ");background-size:contain;background-repeat:no-repeat}.premium #coupleProfile .male[data-v-3ae65d9e]{background-image:url(" + y + ")}.premium #coupleProfile .male[data-v-3ae65d9e],.premium #galleries[data-v-3ae65d9e]{background-size:contain;background-repeat:no-repeat}.premium #galleries[data-v-3ae65d9e]{background-image:url(" + k + ");background-color:#fff}.premium #wishes[data-v-3ae65d9e]{width:90%;margin:0 5%}.premium #footer[data-v-3ae65d9e],.premium #weddingDetail[data-v-3ae65d9e]{background-color:#fff}.premium #rsvp[data-v-3ae65d9e]{width:90%;margin:2rem 5% 0}.premium .rundown[data-v-3ae65d9e]{background-image:url(" + x + ");background-size:contain;background-repeat:no-repeat}.premium #also_inviting[data-v-3ae65d9e]{background-image:url(" + T + ');background-size:cover;background-repeat:no-repeat;padding-bottom:20px}.premium #quote[data-v-3ae65d9e]{background-size:cover;padding:15px 20px;width:90%;margin:1rem 5%}.premium #quote .quotes[data-v-3ae65d9e]{color:#794615;font-size:18px}#coupleProfile .male_name[data-v-3ae65d9e]{float:left;width:100%}#coupleProfile .call-name[data-v-3ae65d9e]{font-size:5rem}#coupleProfile .male[data-v-3ae65d9e]{text-align:left}#coupleProfile .female[data-v-3ae65d9e]{text-align:right}#coupleProfile .img-couple[data-v-3ae65d9e]{width:40%;display:inline-block;margin-bottom:20px}#coupleProfile p[data-v-3ae65d9e]{margin:5px}#coupleProfile .grid-profile[data-v-3ae65d9e]{display:grid;grid-template-columns:repeat(2,1fr);padding:0}#coupleProfile .grid-profile .box[data-v-3ae65d9e],#coupleProfile .grid-profile .box-female[data-v-3ae65d9e]{margin-bottom:0}#coupleProfile .grid-profile .profil-info[data-v-3ae65d9e]{padding:0 10px;align-self:center}#coupleProfile .grid-profile .profil-info p[data-v-3ae65d9e]{font-size:10px;margin:0}#coupleProfile .grid-profile .imgWrapper[data-v-3ae65d9e]:before{content:"";height:0;display:inline-block;padding-top:100%;width:1px;position:relative}#coupleProfile .grid-profile .imgWrapper:before img[data-v-3ae65d9e]{position:absolute;top:0;left:0;bottom:0}section[data-v-3ae65d9e]{padding-top:30px;padding-bottom:30px;width:100%;float:left;margin-top:-1px}.box[data-v-3ae65d9e],.box-female[data-v-3ae65d9e]{position:relative;text-align:center}.box img[data-v-3ae65d9e]{left:0}.box-female img[data-v-3ae65d9e],.box img[data-v-3ae65d9e]{position:absolute;top:0;width:100%;height:100%}.box-female img[data-v-3ae65d9e]{right:0}.box[data-v-3ae65d9e],.box-female[data-v-3ae65d9e]{margin-bottom:20px}.line-separator[data-v-3ae65d9e]{position:relative}.separator-img[data-v-3ae65d9e]{width:100vw}@media only screen and (min-width:1024px){.layout-cover.is_preview:not(.mobile) .attendance-wrap[data-v-3ae65d9e],.layout-cover:not(.is_preview) .attendance-wrap[data-v-3ae65d9e]{width:50%}.layout-cover.is_preview:not(.mobile) .box-separator[data-v-3ae65d9e],.layout-cover:not(.is_preview) .box-separator[data-v-3ae65d9e]{height:100vh;width:100%;margin:0 auto;z-index:-1;position:relative;overflow:hidden}.layout-cover.is_preview:not(.mobile) .box-separator[data-v-3ae65d9e]:after,.layout-cover:not(.is_preview) .box-separator[data-v-3ae65d9e]:after{content:"";height:100%;width:100%;position:absolute}.layout-cover.is_preview:not(.mobile) .separator-img[data-v-3ae65d9e],.layout-cover:not(.is_preview) .separator-img[data-v-3ae65d9e]{width:100%;height:100%;position:absolute;top:0;left:0;bottom:0;z-index:-2;-o-filter:blur(18px);filter:blur(18px)}.layout-cover.is_preview:not(.mobile) .widget[data-v-3ae65d9e],.layout-cover:not(.is_preview) .widget[data-v-3ae65d9e]{height:100vh;width:100%;overflow:hidden;-ms-background-size:contain;background-size:contain;-webkit-background-repeat:no-repeat;-moz-background-repeat:no-repeat;-ms-background-repeat:no-repeat;-o-background-repeat:no-repeat;background-repeat:no-repeat;-webkit-background-position:center;-moz-background-position:center;-ms-background-position:center;-o-background-position:center;background-position:50%}.layout-cover.is_preview:not(.mobile) .line-separator[data-v-3ae65d9e],.layout-cover:not(.is_preview) .line-separator[data-v-3ae65d9e]{margin-top:-110px}.layout-cover.is_preview:not(.mobile) .google-maps[data-v-3ae65d9e],.layout-cover:not(.is_preview) .google-maps[data-v-3ae65d9e]{padding-bottom:47%}.layout-cover.is_preview:not(.mobile) .box[data-v-3ae65d9e],.layout-cover.is_preview:not(.mobile) .box-female[data-v-3ae65d9e],.layout-cover:not(.is_preview) .box[data-v-3ae65d9e],.layout-cover:not(.is_preview) .box-female[data-v-3ae65d9e]{margin-bottom:50px}.layout-cover.is_preview:not(.mobile) .box-female[data-v-3ae65d9e]:after,.layout-cover.is_preview:not(.mobile) .box[data-v-3ae65d9e]:after,.layout-cover:not(.is_preview) .box-female[data-v-3ae65d9e]:after,.layout-cover:not(.is_preview) .box[data-v-3ae65d9e]:after{padding-bottom:100%}.layout-cover.is_preview:not(.mobile) #coupleProfile .row[data-v-3ae65d9e],.layout-cover:not(.is_preview) #coupleProfile .row[data-v-3ae65d9e]{justify-content:space-between}.layout-cover.is_preview:not(.mobile) #coupleProfile .female[data-v-3ae65d9e],.layout-cover.is_preview:not(.mobile) #coupleProfile .male[data-v-3ae65d9e],.layout-cover:not(.is_preview) #coupleProfile .female[data-v-3ae65d9e],.layout-cover:not(.is_preview) #coupleProfile .male[data-v-3ae65d9e]{text-align:center}.layout-cover.is_preview:not(.mobile) #coupleProfile .img-couple[data-v-3ae65d9e],.layout-cover:not(.is_preview) #coupleProfile .img-couple[data-v-3ae65d9e]{width:100%}}.layout-cover.mobile .container[data-v-3ae65d9e]{width:100%}.layout-cover.mobile .item-rundown[data-v-3ae65d9e]{flex-basis:inherit}.layout-cover.mobile .col-lg-4[data-v-3ae65d9e],.layout-cover.mobile .col-lg-5[data-v-3ae65d9e],.layout-cover.mobile .col-lg-6[data-v-3ae65d9e],.layout-cover.mobile .col-xl-2[data-v-3ae65d9e]{flex:0 0 100%;max-width:100%}.overlay-change-photo[data-v-3ae65d9e]{position:relative;text-align:center}.overlay-change-photo p[data-v-3ae65d9e]{text-align:center;width:100%;position:absolute;z-index:9;top:50%}.is_preview .wow[data-v-3ae65d9e]{visibility:visible!important}#coupleProfile .couple-detail[data-v-3ae65d9e]{font-size:16px}#coupleProfile .couple-detail p[data-v-3ae65d9e]{font-size:14px}', ""]), t.exports = f
		},
		651: function (t, e, o) {
			t.exports = o.p + "img/elegant_top1.4bf5403.jpg"
		},
		652: function (t, e, o) {
			t.exports = o.p + "img/elegant41.126907f.jpg"
		},
		653: function (t, e, o) {
			t.exports = o.p + "img/undraw_completed_steps_yurw.f8b1913.svg"
		},
		668: function (t, e, o) {
			"use strict";
			o.r(e);
			var n = o(617),
				r = o(605),
				d = o(584),
				line = o(596),
				l = o(597),
				c = o(606),
				_ = o(598),
				v = o(599),
				m = o(600),
				f = o(618),
				h = o(619),
				w = o(620),
				y = o(621),
				k = o(622),
				x = o(579),
				T = o(581),
				C = {
					mixins: [x.a, T.a],
					components: {
						Protocol: h.default,
						Story: w.default,
						AddNotif: f.default,
						Pay: n.default,
						Welcome: r.default,
						CoupleDecor: d.default,
						LineDecor: line.default,
						Wishes: l.default,
						Rsvp: c.default,
						AddToCalendar: m.default,
						Galleries: _.default,
						BottomBar: v.default,
						VideoEmbed: y.default,
						LiveStreaming: k.default
					},
					name: "template_1"
				},
				S = (o(649), o(117)),
				component = Object(S.a)(C, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						key: t.layoutKey,
						staticClass: "layout-cover cover animate__animated",
						class: {
							animate__fadeIn: !t.data.is_load_data, darkMode: "dark" == t.template_data.mode, mobile: "mobile" == t.preview_mode, is_preview: t.is_preview, noscroll: t.$store.state.invitation.is_preview_welcome
						}
					}, [t.$store.state.invitation.is_preview_welcome || !t.is_preview ? n("Welcome", {
						attrs: {
							invitation_data_props: t.invitation_data,
							template_data_props: t.template_data
						}
					}) : t._e(), t._v(" "), t.is_preview || !t.invitation_data.protocol_kesehatan || t.invitation_data.wedding_is_private ? t._e() : n("Protocol"), t._v(" "), n("div", {
						staticClass: "content-layout cover",
						class: t.isPremium ? "premium" : ""
					}, [t.$store.state.invitation.feature_active ? [t.is_preview ? t._e() : n("b-link", {
						staticClass: "music-control add-shadow",
						class: {
							off: !t.music_on
						},
						on: {
							click: function (e) {
								return t.toggleMusic()
							}
						}
					}, [n("b-icon", {
						attrs: {
							icon: "music-note-list"
						}
					})], 1), t._v(" "), !t.data.is_load_data && t.invitation_data.background_music ? n("audio", {
						ref: "background_music",
						attrs: {
							id: "background_music",
							loop: "",
							src: t.API_URL + "uploads/" + t.invitation_data.background_music
						}
					}) : t._e()] : t._e(), t._v(" "), t._l(t.invitation_data.sort_elements, (function (section) {
						return ["quotes" == section ? [n("div", {
							key: section
						}, [n("section", {
							staticStyle: {
								"padding-top": "0"
							},
							attrs: {
								id: "separator"
							}
						}, [n("div", {
							staticClass: "widget",
							style: [t.isDesktop ? {
								"background-image": "url(" + t.CDN_MEDIA + t.imagesFilter(t.invitation_data.image_separator) + ")"
							} : {
								background: "transparent"
							}],
							attrs: {
								id: "widget"
							}
						}, [n("div", {
							staticClass: "box-separator"
						}, [n("img", {
							staticClass: "separator-img",
							attrs: {
								src: "" + t.CDN_MEDIA + t.imagesFilter(t.invitation_data.image_separator),
								onerror: "this.src = '" + t.BASE_URL + "/placeholder.png';",
								alt: ""
							}
						})]), t._v(" "), n("div", {
							staticClass: "shape"
						}, [n("svg", {
							attrs: {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 1440 320"
							}
						}, [n("path", {
							staticClass: "shape-fill",
							attrs: {
								"fill-opacity": "0.5",
								d: "M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,202.7C840,160,960,96,1080,106.7C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
							}
						}), t._v(" "), n("path", {
							staticClass: "shape-fill",
							attrs: {
								"fill-opacity": "1",
								d: "M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
							}
						})])])]), t._v(" "), t.is_preview ? n("div", {
							staticClass: "overlay-change-photo"
						}, [n("p", [n("b-button", {
							staticClass: "btn-change-photo",
							attrs: {
								variant: "dark"
							},
							on: {
								click: function (e) {
									return t.$bvModal.show("images-separator-modal")
								}
							}
						}, [n("b-icon", {
							attrs: {
								icon: "camera-fill"
							}
						}), t._v(" Ubah Foto\n                  ")], 1)], 1)]) : t._e()]), t._v(" "), n("div", {
							staticClass: "cover",
							attrs: {
								id: "quote"
							}
						}, [n("b-container", [n("b-row", [n("b-col", {
							staticClass: "text-center",
							attrs: {
								cols: "12"
							}
						}, [n("img", {
							attrs: {
								src: "" + t.API_URL + t.imagesFilter(t.template_data.quote_decor),
								alt: "",
								width: "50%"
							}
						})]), t._v(" "), n("b-col", {
							attrs: {
								cols: "12"
							}
						}, [n("p", {
							staticClass: "quotes padding-balance mt-3 mb-3"
						}, [t._v(t._s(t.invitation_data.quotes || "Quotes Belum di input, silahkan isi quotes terbaikmu."))])]), t._v(" "), n("b-col", {
							staticClass: "text-center",
							attrs: {
								cols: "12"
							}
						}, [n("img", {
							staticStyle: {
								transform: "rotate(180deg)"
							},
							attrs: {
								src: "" + t.API_URL + t.imagesFilter(t.template_data.quote_decor),
								alt: "",
								width: "50%"
							}
						})])], 1)], 1), t._v(" "), n("div", {
							staticClass: "shapeBottom"
						}, [n("svg", {
							staticStyle: {
								margin: "auto",
								background: "transparent",
								display: "block",
								"z-index": "1",
								position: "relative",
								"shape-rendering": "auto"
							},
							attrs: {
								xmlns: "http://www.w3.org/2000/svg",
								"xmlns:xlink": "http://www.w3.org/1999/xlink",
								width: "842",
								height: "101",
								preserveAspectRatio: "xMidYMid",
								viewBox: "0 0 842 101"
							}
						}, [n("g", {
							attrs: {
								transform: "translate(421,50.5) scale(1,1) translate(-421,-50.5)"
							}
						}, [n("linearGradient", {
							attrs: {
								id: "lg-0.05423477193327719",
								x1: "0",
								x2: "1",
								y1: "0",
								y2: "0"
							}
						}, [n("stop", {
							attrs: {
								"stop-color": "#00ffff",
								offset: "0"
							}
						}), t._v(" "), n("stop", {
							attrs: {
								"stop-color": "#00ffff",
								offset: "1"
							}
						})], 1), t._v(" "), n("path", {
							staticClass: "shape-fill",
							attrs: {
								d: "",
								opacity: "1"
							}
						}, [n("animate", {
							attrs: {
								attributeName: "d",
								dur: "6.666666666666666s",
								repeatCount: "indefinite",
								keyTimes: "0;0.333;0.667;1",
								calcmod: "spline",
								keySplines: "0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1",
								begin: "0s",
								values: "M0 0L 0 45.384078466614845Q 60.142857142857146 67.12791423580364  120.28571428571429 53.00574195154302T 240.57142857142858 49.57927089980956T 360.85714285714283 46.86572013705073T 481.14285714285717 27.92662256154054T 601.4285714285714 36.1132109091357T 721.7142857142857 17.900912593185655T 842 28.851351943793556L 842 0 Z;M0 0L 0 45.60829106806834Q 60.142857142857146 67.60593625184714  120.28571428571429 40.61137431275161T 240.57142857142858 53.17013322575702T 360.85714285714283 54.380238394993114T 481.14285714285717 33.63374208472204T 601.4285714285714 48.033146029288005T 721.7142857142857 32.47273706263229T 842 27.69176889676012L 842 0 Z;M0 0L 0 37.723764629230224Q 60.142857142857146 86.04969579762147  120.28571428571429 55.8166440403042T 240.57142857142858 45.81067838503911T 360.85714285714283 34.517972838386676T 481.14285714285717 37.70069729052119T 601.4285714285714 41.22139765043012T 721.7142857142857 30.014016639292866T 842 40.79296169690214L 842 0 Z;M0 0L 0 45.384078466614845Q 60.142857142857146 67.12791423580364  120.28571428571429 53.00574195154302T 240.57142857142858 49.57927089980956T 360.85714285714283 46.86572013705073T 481.14285714285717 27.92662256154054T 601.4285714285714 36.1132109091357T 721.7142857142857 17.900912593185655T 842 28.851351943793556L 842 0 Z"
							}
						})]), t._v(" "), n("path", {
							staticClass: "shape-fill",
							attrs: {
								d: "",
								opacity: "0.55"
							}
						}, [n("animate", {
							attrs: {
								attributeName: "d",
								dur: "6.666666666666666s",
								repeatCount: "indefinite",
								keyTimes: "0;0.333;0.667;1",
								calcmod: "spline",
								keySplines: "0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1",
								begin: "-2.222222222222222s",
								values: "M0 0L 0 48.441283403647795Q 60.142857142857146 84.65597142693521  120.28571428571429 37.26569251074385T 240.57142857142858 49.73941888488861T 360.85714285714283 52.10429346435731T 481.14285714285717 30.1467149487764T 601.4285714285714 41.97633098977324T 721.7142857142857 35.13611245830011T 842 24.299012924678774L 842 0 Z;M0 0L 0 53.118009457021614Q 60.142857142857146 67.13860540684809  120.28571428571429 52.61372508290752T 240.57142857142858 51.78885905081925T 360.85714285714283 41.547274292355354T 481.14285714285717 32.49840673336809T 601.4285714285714 27.652947878186126T 721.7142857142857 29.509103379038613T 842 30.589930255333083L 842 0 Z;M0 0L 0 58.13114698339362Q 60.142857142857146 92.2432333077536  120.28571428571429 57.44743859533158T 240.57142857142858 44.49946561535287T 360.85714285714283 39.98483782939T 481.14285714285717 34.9831224017196T 601.4285714285714 21.267624751749565T 721.7142857142857 42.44318545894076T 842 36.17777567078315L 842 0 Z;M0 0L 0 48.441283403647795Q 60.142857142857146 84.65597142693521  120.28571428571429 37.26569251074385T 240.57142857142858 49.73941888488861T 360.85714285714283 52.10429346435731T 481.14285714285717 30.1467149487764T 601.4285714285714 41.97633098977324T 721.7142857142857 35.13611245830011T 842 24.299012924678774L 842 0 Z"
							}
						})]), t._v(" "), n("path", {
							staticClass: "shape-fill",
							attrs: {
								d: "",
								opacity: "0.35"
							}
						}, [n("animate", {
							attrs: {
								attributeName: "d",
								dur: "6.666666666666666s",
								repeatCount: "indefinite",
								keyTimes: "0;0.333;0.667;1",
								calcmod: "spline",
								keySplines: "0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1",
								begin: "-4.444444444444444s",
								values: "M0 0L 0 49.42694644859986Q 60.142857142857146 62.013916879019874  120.28571428571429 44.095340157907636T 240.57142857142858 48.61683856380018T 360.85714285714283 29.752418866430418T 481.14285714285717 27.80687971488426T 601.4285714285714 42.97569649276345T 721.7142857142857 38.23526034033078T 842 23.990926986580668L 842 0 Z;M0 0L 0 44.65880901368071Q 60.142857142857146 72.67512481287284  120.28571428571429 34.38234810444039T 240.57142857142858 35.37170796923728T 360.85714285714283 39.711034160519844T 481.14285714285717 25.381781731971788T 601.4285714285714 20.208055418329145T 721.7142857142857 21.29025842193259T 842 31.966489912571813L 842 0 Z;M0 0L 0 60.9715710695223Q 60.142857142857146 85.85230948768293  120.28571428571429 57.09961764124946T 240.57142857142858 45.505003328920495T 360.85714285714283 45.77409812687281T 481.14285714285717 31.678458248533104T 601.4285714285714 33.25282896833091T 721.7142857142857 20.408144842206152T 842 32.48890765218249L 842 0 Z;M0 0L 0 49.42694644859986Q 60.142857142857146 62.013916879019874  120.28571428571429 44.095340157907636T 240.57142857142858 48.61683856380018T 360.85714285714283 29.752418866430418T 481.14285714285717 27.80687971488426T 601.4285714285714 42.97569649276345T 721.7142857142857 38.23526034033078T 842 23.990926986580668L 842 0 Z"
							}
						})])], 1)])])], 1)])] : t._e(), t._v(" "), "couple" == section ? [n("div", {
							key: section
						}, [n("section", {
							attrs: {
								id: "coupleProfile"
							}
						}, ["new_style" !== t.template_data.couple_style && "minimalis" !== t.template_data.couple_style ? [t.invitation_data.title_couple ? n("h1", {
							staticClass: "title-text text-center wow animate__animated animate__fadeInUp",
							staticStyle: {
								"text-transform": "capitalize"
							}
						}, [t._v("\n                  " + t._s(t.invitation_data.title_couple))]) : "" == t.invitation_data.title_couple ? n("h1", {
							staticClass: "title-text text-center",
							staticStyle: {
								"text-transform": "capitalize"
							}
						}) : n("h1", {
							staticClass: "title-text text-center",
							staticStyle: {
								"text-transform": "capitalize"
							}
						}, [t._v(t._s(t.$t("couple.title")) + "\n                ")])] : t._e(), t._v(" "), n("div", {
							staticClass: "cover"
						}, [n("b-container", ["new_style" == t.template_data.couple_style || "new_style" == t.invitation_data.couple_style ? [n("h1", {
							staticClass: "title-text text-center wow animate__animated animate__fadeInUp call-name mt-5 mb-1",
							staticStyle: {
								"text-transform": "capitalize"
							}
						}, [t._v("\n                            " + t._s("male" == t.couple_sort[0] ? t.invitation_data.male_calling_name : t.invitation_data.female_calling_name))]), t._v(" "), n("b-row", {
							staticClass: "new_style_couple",
							attrs: {
								"align-v": "center"
							}
						}, [t._l(t.couple_sort, (function (e) {
							return ["female" == e ? n("b-col", {
								key: e,
								staticClass: "female wow animate__animated animate__fadeInLeft mb-4",
								attrs: {
									cols: "12"
								}
							}, [n("b-row", {
								attrs: {
									"align-v": "center"
								}
							}, [t.invitation_data.disabled_couple_photo ? t._e() : n("b-col", {
								staticClass: "box-female mb-0 pr-0 align-self-center",
								attrs: {
									cols: "5"
								}
							}, [n("CoupleDecor", {
								attrs: {
									source: t.imagesFilter(t.invitation_data.couple_female_photo),
									width: "100%",
									style_decor: t.imagesFilter(t.template_data.couple_decor)
								}
							})], 1), t._v(" "), n("b-col", {
								staticClass: "text-left couple-detail pl-1",
								style: [t.isDesktop ? {
									"margin-top": "-50px"
								} : {
									"margin-top": "0px"
								}],
								attrs: {
									cols: "7"
								}
							}, [t.invitation_data.couple_female_ig && "" !== t.invitation_data.couple_female_ig ? n("p", {
								staticClass: "instagram-profil"
							}, [n("b-link", {
								style: "color:" + t.template_data.text_color,
								attrs: {
									href: "https://instagram.com/" + t.invitation_data.couple_female_ig
								}
							}, [n("b", [n("b-icon", {
								attrs: {
									icon: "instagram"
								}
							}), t._v(" " + t._s(t.invitation_data.couple_female_ig) + "\n                                  ")], 1)])], 1) : t._e(), t._v(" "), t.isPremium ? [n("div", {
								staticClass: "premium-title",
								staticStyle: {
									margin: "5px"
								}
							}, [t._v("\n                                  " + t._s(t.invitation_data.couple_female_complete_name || "Adinda Mawaria S.E") + "\n                                ")]), t._v(" "), n("p", [t._v("\n                                  " + t._s(t.$t("couple.daughter_of", {
								var: t.invitation_data.couple_female_child_number || ""
							})) + "\n                                  " + t._s(t.invitation_data.couple_female_father_full_name || "Dr Bapak Michael Stam.pd") + "\n                                  "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")]), t._v("\n                                  " + t._s(t.invitation_data.couple_female_mother_full_name || "Hj Ibu Aminah SA"))]), t._v(" "), t.invitation_data.couple_female_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_female_info)
								}
							}) : t._e()] : [n("p", {
								staticStyle: {
									margin: "5px",
									"font-size": "1.2rem"
								}
							}, [n("b", [t._v(t._s(t.invitation_data.couple_female_complete_name || "Adinda Mawaria S.E"))])]), t._v(" "), n("p", [n("b", [t._v(t._s(t.$t("couple.daughter_of", {
								var: t.invitation_data.couple_female_child_number || ""
							})))])]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_female_father_full_name || "Dr Bapak Michael Stam.pd") + "\n                                ")]), t._v(" "), n("p", [n("span", {
								staticClass: "couple-and"
							}, [t._v("&\n                                  ")]), t._v(t._s(t.invitation_data.couple_female_mother_full_name || "Hj Ibu Aminah SA"))]), t._v(" "), t.invitation_data.couple_female_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_female_info)
								}
							}) : t._e()]], 2)], 1)], 1) : t._e(), t._v(" "), "dan" == e ? n("b-col", {
								key: e,
								attrs: {
									cols: "12",
									lg: "2",
									xl: "2",
									align: "center"
								}
							}, [n("div", {
								staticClass: "forDecor"
							})]) : t._e(), t._v(" "), "male" == e ? n("b-col", {
								key: e,
								staticClass: "male  wow animate__animated animate__fadeInLeft",
								attrs: {
									cols: "12"
								}
							}, [n("b-row", {
								attrs: {
									"align-v": "center"
								}
							}, [n("b-col", {
								staticClass: "text-right couple-detail pr-1",
								style: [t.isDesktop ? {
									"margin-top": "-50px"
								} : {
									"margin-top": "0px"
								}],
								attrs: {
									cols: "7"
								}
							}, [t.invitation_data.couple_male_ig && "" !== t.invitation_data.couple_male_ig ? n("p", {
								staticClass: "instagram-profil"
							}, [n("b-link", {
								style: "color:" + t.template_data.text_color,
								attrs: {
									href: "https://instagram.com/" + t.invitation_data.couple_male_ig
								}
							}, [n("b", [n("b-icon", {
								attrs: {
									icon: "instagram"
								}
							}), t._v(" " + t._s(t.invitation_data.couple_male_ig) + "\n                                  ")], 1)])], 1) : t._e(), t._v(" "), t.isPremium ? [n("div", {
								staticClass: "premium-title",
								staticStyle: {
									margin: "5px"
								}
							}, [t._v("\n                                  " + t._s(t.invitation_data.couple_male_complete_name || "John Doe S.Kom"))]), t._v(" "), n("p", [t._v("\n                                  " + t._s(t.$t("couple.son_of", {
								var: t.invitation_data.couple_male_child_number || ""
							})) + "\n                                  " + t._s(t.invitation_data.couple_male_father_full_name || "Dr Bapak Joe M.pd") + " "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")]), t._v("\n                                  " + t._s(t.invitation_data.couple_male_mother_full_name || "Hj Ibu Khodijah ST"))]), t._v(" "), t.invitation_data.couple_male_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_male_info)
								}
							}) : t._e()] : [n("p", {
								staticStyle: {
									margin: "5px",
									"font-size": "1.2rem"
								}
							}, [n("b", [t._v(t._s(t.invitation_data.couple_male_complete_name || "John Doe S.Kom"))])]), t._v(" "), n("p", [n("b", [t._v(t._s(t.$t("couple.son_of", {
								var: t.invitation_data.couple_male_child_number || ""
							})))])]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_male_father_full_name || "Dr Bapak Joe M.pd") + " ")]), t._v(" "), n("p", [n("span", {
								staticClass: "couple-and"
							}, [t._v("& ")]), t._v("\n                                  " + t._s(t.invitation_data.couple_male_mother_full_name || "Hj Ibu Khodijah ST"))]), t._v(" "), t.invitation_data.couple_male_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_male_info)
								}
							}) : t._e()]], 2), t._v(" "), t.invitation_data.disabled_couple_photo ? t._e() : n("b-col", {
								staticClass: "box pl-0 align-self-center mb-0",
								attrs: {
									cols: "5"
								}
							}, [n("CoupleDecor", {
								attrs: {
									source: t.imagesFilter(t.invitation_data.couple_male_photo),
									width: "100%",
									style_decor: t.imagesFilter(t.template_data.couple_decor)
								}
							})], 1)], 1)], 1) : t._e()]
						}))], 2), t._v(" "), n("h1", {
							staticClass: "title-text text-center wow animate__animated animate__fadeInUp call-name mt-3 male_name",
							staticStyle: {
								"text-transform": "capitalize"
							}
						}, [t._v("\n                         " + t._s("male" == t.couple_sort[0] ? t.invitation_data.female_calling_name : t.invitation_data.male_calling_name))])] : "minimalis" == t.template_data.couple_style || "minimalis" == t.invitation_data.couple_style ? [n("b-row", {
							attrs: {
								"align-v": "center"
							}
						}, [t._l(t.couple_sort, (function (e) {
							return ["female" == e ? n("b-col", {
								key: e,
								staticClass: "female wow animate__animated animate__fadeInLeft grid-profile",
								attrs: {
									cols: "12",
									lg: "5",
									xl: "5"
								}
							}, [t.invitation_data.disabled_couple_photo ? t._e() : n("div", {
								staticClass: "box-female"
							}, [n("div", {
								staticClass: "imgWrapper"
							}, [n("img", {
								attrs: {
									src: t.filterImage(t.imagesFilter(t.invitation_data.couple_female_photo)),
									alt: "",
									onerror: "this.src = '" + t.BASE_URL + "placeholder.png';"
								}
							})])]), t._v(" "), n("div", {
								staticClass: "profil-info"
							}, [t.invitation_data.couple_female_ig && "" !== t.invitation_data.couple_female_ig ? n("p", {
								staticClass: "instagram-profil"
							}, [n("b-link", {
								style: "color:" + t.template_data.text_color,
								attrs: {
									href: "https://instagram.com/" + t.invitation_data.couple_female_ig
								}
							}, [n("b", [n("b-icon", {
								attrs: {
									icon: "instagram"
								}
							}), t._v(" " + t._s(t.invitation_data.couple_female_ig) + "\n                                ")], 1)])], 1) : t._e(), t._v(" "), t.isPremium ? [n("p", [t._v("\n                                " + t._s(t.$t("couple.daughter_of", {
								var: t.invitation_data.couple_female_child_number || ""
							})) + "\n                                " + t._s(t.invitation_data.couple_female_father_full_name || "Dr Bapak Michael Stam.pd") + "\n                                "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")]), t._v("\n                                " + t._s(t.invitation_data.couple_female_mother_full_name || "Hj Ibu Aminah SA"))]), t._v(" "), t.invitation_data.couple_female_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_female_info)
								}
							}) : t._e(), t._v(" "), n("h5", {
								staticClass: "premium-title"
							}, [t._v("\n                                " + t._s(t.invitation_data.couple_female_complete_name || "Adinda Mawaria S.E") + "\n                              ")])] : [n("p", [t._v("\n                              " + t._s(t.$t("couple.daughter_of", {
								var: t.invitation_data.couple_female_child_number || ""
							})) + "\n                              ")]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_female_father_full_name || "Dr Bapak Michael Stam.pd") + "\n                                "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")])]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_female_mother_full_name || "Hj Ibu Aminah SA"))]), t._v(" "), t.invitation_data.couple_female_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_female_info)
								}
							}) : t._e(), t._v(" "), n("h5", [n("b", [t._v(t._s(t.invitation_data.couple_female_complete_name || "Adinda Mawaria S.E"))])])]], 2)]) : t._e(), t._v(" "), "male" == e ? n("b-col", {
								key: e,
								staticClass: "male  wow animate__animated animate__fadeInLeft grid-profile",
								attrs: {
									cols: "12",
									lg: "5",
									xl: "5"
								}
							}, [n("div", {
								staticClass: "profil-info"
							}, [t.invitation_data.couple_male_ig && "" !== t.invitation_data.couple_male_ig ? n("p", {
								staticClass: "instagram-profil"
							}, [n("b-link", {
								style: "color:" + t.template_data.text_color,
								attrs: {
									href: "https://instagram.com/" + t.invitation_data.couple_male_ig
								}
							}, [n("b", [n("b-icon", {
								attrs: {
									icon: "instagram"
								}
							}), t._v(" " + t._s(t.invitation_data.couple_male_ig) + "\n                                ")], 1)])], 1) : t._e(), t._v(" "), t.isPremium ? [n("p", [t._v("\n                                " + t._s(t.$t("couple.son_of", {
								var: t.invitation_data.couple_male_child_number || ""
							})) + "\n                                " + t._s(t.invitation_data.couple_male_father_full_name || "Dr Bapak Joe M.pd") + " "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")]), t._v("\n                                " + t._s(t.invitation_data.couple_male_mother_full_name || "Hj Ibu Khodijah ST"))]), t._v(" "), t.invitation_data.couple_male_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_male_info)
								}
							}) : t._e(), t._v(" "), n("h5", {
								staticClass: "premium-title"
							}, [t._v("\n                                " + t._s(t.invitation_data.couple_male_complete_name || "John Doe S.Kom"))])] : [n("p", [t._v("\n                                " + t._s(t.$t("couple.son_of", {
								var: t.invitation_data.couple_male_child_number || ""
							})) + "\n                              ")]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_male_father_full_name || "Dr Bapak Joe M.pd") + " "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")])]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_male_mother_full_name || "Hj Ibu Khodijah ST"))]), t._v(" "), t.invitation_data.couple_male_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_male_info)
								}
							}) : t._e(), t._v(" "), n("h5", [n("b", [t._v(t._s(t.invitation_data.couple_male_complete_name || "John Doe S.Kom"))])])]], 2), t._v(" "), t.invitation_data.disabled_couple_photo ? t._e() : n("div", {
								staticClass: "box"
							}, [n("div", {
								staticClass: "imgWrapper"
							}, [n("img", {
								attrs: {
									src: t.filterImage(t.imagesFilter(t.invitation_data.couple_male_photo)),
									alt: "",
									onerror: "this.src = '" + t.BASE_URL + "placeholder.png';"
								}
							})])])]) : t._e()]
						}))], 2)] : [n("b-row", {
							attrs: {
								"align-v": "center"
							}
						}, [t._l(t.couple_sort, (function (e) {
							return ["female" == e ? n("b-col", {
								key: e,
								staticClass: "female wow animate__animated animate__fadeInLeft",
								attrs: {
									cols: "12",
									lg: "5",
									xl: "5"
								}
							}, [t.invitation_data.disabled_couple_photo ? t._e() : n("div", {
								staticClass: "box-female"
							}, [n("CoupleDecor", {
								attrs: {
									source: t.imagesFilter(t.invitation_data.couple_female_photo),
									width: t.isDesktop ? "100%" : "60%",
									style_decor: t.imagesFilter(t.template_data.couple_decor)
								}
							})], 1), t._v(" "), n("div", {
								staticClass: "text-center",
								style: [t.isDesktop ? {
									"margin-top": "-50px"
								} : {
									"margin-top": "0px"
								}]
							}, [t.invitation_data.couple_female_ig && "" !== t.invitation_data.couple_female_ig ? n("p", {
								staticClass: "instagram-profil"
							}, [n("b-link", {
								style: "color:" + t.template_data.text_color,
								attrs: {
									href: "https://instagram.com/" + t.invitation_data.couple_female_ig
								}
							}, [n("b", [n("b-icon", {
								attrs: {
									icon: "instagram"
								}
							}), t._v(" " + t._s(t.invitation_data.couple_female_ig) + "\n                                ")], 1)])], 1) : t._e(), t._v(" "), t.isPremium ? [n("h4", {
								staticClass: "premium-title"
							}, [t._v("\n                                " + t._s(t.invitation_data.couple_female_complete_name || "Adinda Mawaria S.E") + "\n                              ")]), t._v(" "), n("p", [t._v("\n                                " + t._s(t.$t("couple.daughter_of", {
								var: t.invitation_data.couple_female_child_number || ""
							})) + "\n                                " + t._s(t.invitation_data.couple_female_father_full_name || "Dr Bapak Michael Stam.pd") + "\n                                "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")]), t._v("\n                                " + t._s(t.invitation_data.couple_female_mother_full_name || "Hj Ibu Aminah SA"))]), t._v(" "), t.invitation_data.couple_female_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_female_info)
								}
							}) : t._e()] : [n("h4", [n("b", [t._v(t._s(t.invitation_data.couple_female_complete_name || "Adinda Mawaria S.E"))])]), t._v(" "), n("p", [n("b", [t._v(t._s(t.$t("couple.daughter_of", {
								var: t.invitation_data.couple_female_child_number || ""
							})))])]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_female_father_full_name || "Dr Bapak Michael Stam.pd") + "\n                                "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")])]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_female_mother_full_name || "Hj Ibu Aminah SA"))]), t._v(" "), t.invitation_data.couple_female_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_female_info)
								}
							}) : t._e()]], 2)]) : t._e(), t._v(" "), "dan" == e ? n("b-col", {
								key: e,
								attrs: {
									cols: "12",
									lg: "2",
									xl: "2",
									align: "center"
								}
							}, [n("h1", {
								staticClass: "font-morning",
								staticStyle: {
									"font-size": "5rem"
								}
							}, [t._v("&")])]) : t._e(), t._v(" "), "male" == e ? n("b-col", {
								key: e,
								staticClass: "male  wow animate__animated animate__fadeInLeft",
								attrs: {
									cols: "12",
									lg: "5",
									xl: "5"
								}
							}, [t.invitation_data.disabled_couple_photo ? t._e() : n("div", {
								staticClass: "box"
							}, [n("CoupleDecor", {
								attrs: {
									source: t.imagesFilter(t.invitation_data.couple_male_photo),
									width: t.isDesktop ? "100%" : "60%",
									style_decor: t.imagesFilter(t.template_data.couple_decor)
								}
							})], 1), t._v(" "), n("div", {
								staticClass: "text-center",
								style: [t.isDesktop ? {
									"margin-top": "-50px"
								} : {
									"margin-top": "0px"
								}]
							}, [t.invitation_data.couple_male_ig && "" !== t.invitation_data.couple_male_ig ? n("p", {
								staticClass: "instagram-profil"
							}, [n("b-link", {
								style: "color:" + t.template_data.text_color,
								attrs: {
									href: "https://instagram.com/" + t.invitation_data.couple_male_ig
								}
							}, [n("b", [n("b-icon", {
								attrs: {
									icon: "instagram"
								}
							}), t._v(" " + t._s(t.invitation_data.couple_male_ig) + "\n                                ")], 1)])], 1) : t._e(), t._v(" "), t.isPremium ? [n("h4", {
								staticClass: "premium-title"
							}, [t._v("\n                                " + t._s(t.invitation_data.couple_male_complete_name || "John Doe S.Kom"))]), t._v(" "), n("p", [t._v("\n\n                                " + t._s(t.$t("couple.son_of", {
								var: t.invitation_data.couple_male_child_number || ""
							})) + "\n                                " + t._s(t.invitation_data.couple_male_father_full_name || "Dr Bapak Joe M.pd") + " "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")]), t._v("\n                                " + t._s(t.invitation_data.couple_male_mother_full_name || "Hj Ibu Khodijah ST"))]), t._v(" "), t.invitation_data.couple_male_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_male_info)
								}
							}) : t._e()] : [n("h4", [n("b", [t._v(t._s(t.invitation_data.couple_male_complete_name || "John Doe S.Kom"))])]), t._v(" "), n("p", [n("b", [t._v(t._s(t.$t("couple.son_of", {
								var: t.invitation_data.couple_male_child_number || ""
							})))])]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_male_father_full_name || "Dr Bapak Joe M.pd") + " "), n("span", {
								staticClass: "couple-and"
							}, [t._v("&")])]), t._v(" "), n("p", [t._v(t._s(t.invitation_data.couple_male_mother_full_name || "Hj Ibu Khodijah ST"))]), t._v(" "), t.invitation_data.couple_male_info ? n("p", {
								domProps: {
									innerHTML: t._s(t.invitation_data.couple_male_info)
								}
							}) : t._e()]], 2)]) : t._e()]
						}))], 2)]], 2)], 1)], 2)])] : t._e(), t._v(" "), "stories" == section ? [n("div", {
							key: section
						}, [t.$store.state.invitation.feature_active ? [n("Story", {
							attrs: {
								is_preview: t.is_preview,
								invitation_data: t.invitation_data
							}
						})] : t._e()], 2)] : t._e(), t._v(" "), "gallery" == section ? [n("div", {
							key: section
						}, [t.$store.state.invitation.feature_active ? [n("div", {
							staticClass: "gallleryWrapper"
						}, [n("div", {
							staticClass: "video cover"
						}, [t.invitation_data.youtube_url && "" !== t.invitation_data.youtube_url ? n("VideoEmbed", {
							attrs: {
								source: t.invitation_data.youtube_url
							}
						}) : t._e()], 1), t._v(" "), t.invitation_data.disabled_gallery ? t._e() : n("section", {
							staticStyle: {
								"padding-bottom": "0"
							},
							attrs: {
								id: "galleries"
							}
						}, [n("div", {
							staticClass: "quoteGalleries"
						}, [n("h1", {
							staticClass: "title-text text-center wow animate__animated animate__fadeInUp"
						}, [t._v("\n                      " + t._s(t.invitation_data.title_gallery || "Momen yang berharga"))]), t._v(" "), n("b-container", [n("p", {
							staticClass: "padding-balance text-center wow animate__animated animate__fadeInRight",
							staticStyle: {
								"margin-bottom": "40px",
								"white-space": "pre-wrap"
							}
						}, [t._v(t._s(t.invitation_data.description_gallery || '"Menciptakan kenangan adalah hadiah yang tak ternilai harganya. Kenangan akan bertahan seumur hidup; benda-benda hanya dalam waktu singkat."') + "\n                      ")])])], 1), t._v(" "), n("Galleries", {
							attrs: {
								is_preview: t.is_preview,
								mode: t.template_data.gallery_mode
							},
							on: {
								updateScroll: t.updateScrollLayout
							}
						}), t._v(" "), t.is_preview ? n("div", {
							staticClass: "overlay-change-photo cover"
						}, [n("p", [n("b-button", {
							staticClass: "btn-change-photo",
							attrs: {
								variant: "dark"
							},
							on: {
								click: function (e) {
									return t.$bvModal.show("gallery-modal")
								}
							}
						}, [n("b-icon", {
							attrs: {
								icon: "camera-fill"
							}
						}), t._v(" Upload Gallery\n                      ")], 1)], 1)]) : t._e()], 1)])] : t._e()], 2)] : t._e(), t._v(" "), "wedding_detail" == section ? [n("div", {
							key: section
						}, [t.invitation_data.wedding_is_private ? n("section", {
							attrs: {
								id: "weddingDetail"
							}
						}, [n("div", {
							attrs: {
								id: "countdown"
							}
						}, [n("div", {
							staticClass: "countdown-section"
						}, ["soon" == t.date_status(t.invitation_data.wedding_date) ? [n("h1", {
							staticClass: "text-center wow animate__animated animate__fadeInDown"
						}, [t._v(t._s(t.invitation_data.countdown_title ? t.invitation_data.countdown_title : t.$t("countdown.title")))]), t._v(" "), n("ul", {
							staticClass: "wow animate__animated animate__fadeInUp"
						}, [n("li", {
							attrs: {
								id: "days"
							}
						}, [n("span", [n("b", [t._v(t._s(t.countdown.days))])]), n("b", [t._v(t._s(t.$t("days")))])]), t._v(" "), n("li", {
							attrs: {
								id: "hours"
							}
						}, [n("span", [n("b", [t._v(t._s(t.countdown.hours))])]), n("b", [t._v(t._s(t.$t("hour")))])]), t._v(" "), n("li", {
							attrs: {
								id: "minutes"
							}
						}, [n("span", [n("b", [t._v(t._s(t.countdown.minutes))])]), n("b", [t._v(t._s(t.$t("minute")))])]), t._v(" "), n("li", {
							attrs: {
								id: "seconds"
							}
						}, [n("span", [n("b", [t._v(t._s(t.countdown.seconds))])]), n("b", [t._v(t._s(t.$t("second")))])])])] : t._e()], 2), t._v(" "), n("h1", {
							staticClass: "title-text text-center"
						}, [t._v(t._s(t.$t("event.title_info")))]), t._v(" "), n("p", {
							staticClass: "text-center"
						}, [t._v("♥ " + t._s(t.toDate(t.invitation_data.wedding_date)) + " ♥")]), t._v(" "), n("p", {
							staticClass: "padding-balance",
							staticStyle: {
								"white-space": "pre-wrap"
							},
							attrs: {
								align: "center"
							},
							domProps: {
								innerHTML: t._s(t.invitation_data.wedding_additional_info)
							}
						})])]) : t._e(), t._v(" "), t.invitation_data.wedding_is_private ? t._e() : n("section", {
							attrs: {
								id: "weddingDetail"
							}
						}, [n("div", {
							attrs: {
								id: "countdown"
							}
						}, ["soon" == t.date_status(t.invitation_data.wedding_date) ? [n("div", {
							staticClass: "countdown-section"
						}, [n("h1", {
							staticClass: "text-center wow animate__animated animate__fadeInDown"
						}, [t._v(t._s(t.invitation_data.countdown_title ? t.invitation_data.countdown_title : t.$t("countdown.title")))]), t._v(" "), n("ul", {
							staticClass: "wow animate__animated animate__fadeInUp"
						}, [n("li", {
							attrs: {
								id: "days"
							}
						}, [n("span", [n("b", [t._v(t._s(t.countdown.days))])]), n("b", [t._v(t._s(t.$t("days")))])]), t._v(" "), n("li", {
							attrs: {
								id: "hours"
							}
						}, [n("span", [n("b", [t._v(t._s(t.countdown.hours))])]), n("b", [t._v(t._s(t.$t("hour")))])]), t._v(" "), n("li", {
							attrs: {
								id: "minutes"
							}
						}, [n("span", [n("b", [t._v(t._s(t.countdown.minutes))])]), n("b", [t._v(t._s(t.$t("minute")))])]), t._v(" "), n("li", {
							attrs: {
								id: "seconds"
							}
						}, [n("span", [n("b", [t._v(t._s(t.countdown.seconds))])]), n("b", [t._v(t._s(t.$t("second")))])])]), t._v(" "), n("p", {
							staticClass: "tgl-acara wow animate__animated animate__fadeInUp"
						}, [t._v("♥\n                      " + t._s(t.toDate(t.invitation_data.wedding_date)) + " ♥")])]), t._v(" "), n("b-container", {
							staticClass: "wrapBtn"
						}, [n("b-row", [n("b-col", {
							attrs: {
								align: "center",
								sm: "12",
								lg: "12"
							}
						}, [n("AddToCalendar", {
							attrs: {
								isPremium: t.isPremium
							}
						})], 1), t._v(" "), t.$store.state.notifications.isSupport ? n("b-col", {
							staticClass: "notif-wrap",
							attrs: {
								align: "center",
								sm: "12",
								lg: "12"
							}
						}, [n("AddNotif", {
							attrs: {
								isPremium: t.isPremium
							}
						})], 1) : t._e()], 1), t._v(" "), n("div", {
							staticClass: "shapeCountdown"
						}, [n("svg", {
							staticStyle: {
								margin: "auto",
								background: "transparent",
								display: "block",
								"z-index": "1",
								position: "relative",
								"shape-rendering": "auto"
							},
							attrs: {
								xmlns: "http://www.w3.org/2000/svg",
								"xmlns:xlink": "http://www.w3.org/1999/xlink",
								width: "842",
								height: "101",
								preserveAspectRatio: "xMidYMid",
								viewBox: "0 0 842 101"
							}
						}, [n("g", {
							attrs: {
								transform: "translate(421,50.5) scale(1,1) translate(-421,-50.5)"
							}
						}, [n("linearGradient", {
							attrs: {
								id: "lg-0.05423477193327719",
								x1: "0",
								x2: "1",
								y1: "0",
								y2: "0"
							}
						}, [n("stop", {
							attrs: {
								"stop-color": "#00ffff",
								offset: "0"
							}
						}), t._v(" "), n("stop", {
							attrs: {
								"stop-color": "#00ffff",
								offset: "1"
							}
						})], 1), t._v(" "), n("path", {
							staticClass: "elementor-shape-fill",
							attrs: {
								d: "",
								opacity: "1"
							}
						}, [n("animate", {
							attrs: {
								attributeName: "d",
								dur: "6.666666666666666s",
								repeatCount: "indefinite",
								keyTimes: "0;0.333;0.667;1",
								calcmod: "spline",
								keySplines: "0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1",
								begin: "0s",
								values: "M0 0L 0 45.384078466614845Q 60.142857142857146 67.12791423580364  120.28571428571429 53.00574195154302T 240.57142857142858 49.57927089980956T 360.85714285714283 46.86572013705073T 481.14285714285717 27.92662256154054T 601.4285714285714 36.1132109091357T 721.7142857142857 17.900912593185655T 842 28.851351943793556L 842 0 Z;M0 0L 0 45.60829106806834Q 60.142857142857146 67.60593625184714  120.28571428571429 40.61137431275161T 240.57142857142858 53.17013322575702T 360.85714285714283 54.380238394993114T 481.14285714285717 33.63374208472204T 601.4285714285714 48.033146029288005T 721.7142857142857 32.47273706263229T 842 27.69176889676012L 842 0 Z;M0 0L 0 37.723764629230224Q 60.142857142857146 86.04969579762147  120.28571428571429 55.8166440403042T 240.57142857142858 45.81067838503911T 360.85714285714283 34.517972838386676T 481.14285714285717 37.70069729052119T 601.4285714285714 41.22139765043012T 721.7142857142857 30.014016639292866T 842 40.79296169690214L 842 0 Z;M0 0L 0 45.384078466614845Q 60.142857142857146 67.12791423580364  120.28571428571429 53.00574195154302T 240.57142857142858 49.57927089980956T 360.85714285714283 46.86572013705073T 481.14285714285717 27.92662256154054T 601.4285714285714 36.1132109091357T 721.7142857142857 17.900912593185655T 842 28.851351943793556L 842 0 Z"
							}
						})]), t._v(" "), n("path", {
							staticClass: "elementor-shape-fill",
							attrs: {
								d: "",
								opacity: "0.55"
							}
						}, [n("animate", {
							attrs: {
								attributeName: "d",
								dur: "6.666666666666666s",
								repeatCount: "indefinite",
								keyTimes: "0;0.333;0.667;1",
								calcmod: "spline",
								keySplines: "0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1",
								begin: "-2.222222222222222s",
								values: "M0 0L 0 48.441283403647795Q 60.142857142857146 84.65597142693521  120.28571428571429 37.26569251074385T 240.57142857142858 49.73941888488861T 360.85714285714283 52.10429346435731T 481.14285714285717 30.1467149487764T 601.4285714285714 41.97633098977324T 721.7142857142857 35.13611245830011T 842 24.299012924678774L 842 0 Z;M0 0L 0 53.118009457021614Q 60.142857142857146 67.13860540684809  120.28571428571429 52.61372508290752T 240.57142857142858 51.78885905081925T 360.85714285714283 41.547274292355354T 481.14285714285717 32.49840673336809T 601.4285714285714 27.652947878186126T 721.7142857142857 29.509103379038613T 842 30.589930255333083L 842 0 Z;M0 0L 0 58.13114698339362Q 60.142857142857146 92.2432333077536  120.28571428571429 57.44743859533158T 240.57142857142858 44.49946561535287T 360.85714285714283 39.98483782939T 481.14285714285717 34.9831224017196T 601.4285714285714 21.267624751749565T 721.7142857142857 42.44318545894076T 842 36.17777567078315L 842 0 Z;M0 0L 0 48.441283403647795Q 60.142857142857146 84.65597142693521  120.28571428571429 37.26569251074385T 240.57142857142858 49.73941888488861T 360.85714285714283 52.10429346435731T 481.14285714285717 30.1467149487764T 601.4285714285714 41.97633098977324T 721.7142857142857 35.13611245830011T 842 24.299012924678774L 842 0 Z"
							}
						})]), t._v(" "), n("path", {
							staticClass: "elementor-shape-fill",
							attrs: {
								d: "",
								opacity: "0.35"
							}
						}, [n("animate", {
							attrs: {
								attributeName: "d",
								dur: "6.666666666666666s",
								repeatCount: "indefinite",
								keyTimes: "0;0.333;0.667;1",
								calcmod: "spline",
								keySplines: "0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1",
								begin: "-4.444444444444444s",
								values: "M0 0L 0 49.42694644859986Q 60.142857142857146 62.013916879019874  120.28571428571429 44.095340157907636T 240.57142857142858 48.61683856380018T 360.85714285714283 29.752418866430418T 481.14285714285717 27.80687971488426T 601.4285714285714 42.97569649276345T 721.7142857142857 38.23526034033078T 842 23.990926986580668L 842 0 Z;M0 0L 0 44.65880901368071Q 60.142857142857146 72.67512481287284  120.28571428571429 34.38234810444039T 240.57142857142858 35.37170796923728T 360.85714285714283 39.711034160519844T 481.14285714285717 25.381781731971788T 601.4285714285714 20.208055418329145T 721.7142857142857 21.29025842193259T 842 31.966489912571813L 842 0 Z;M0 0L 0 60.9715710695223Q 60.142857142857146 85.85230948768293  120.28571428571429 57.09961764124946T 240.57142857142858 45.505003328920495T 360.85714285714283 45.77409812687281T 481.14285714285717 31.678458248533104T 601.4285714285714 33.25282896833091T 721.7142857142857 20.408144842206152T 842 32.48890765218249L 842 0 Z;M0 0L 0 49.42694644859986Q 60.142857142857146 62.013916879019874  120.28571428571429 44.095340157907636T 240.57142857142858 48.61683856380018T 360.85714285714283 29.752418866430418T 481.14285714285717 27.80687971488426T 601.4285714285714 42.97569649276345T 721.7142857142857 38.23526034033078T 842 23.990926986580668L 842 0 Z"
							}
						})])], 1)])])], 1), t._v(" "), t.invitation_data.disabled_rsvp ? t._e() : n("section", {
							attrs: {
								id: "rsvp"
							}
						}, [n("Rsvp")], 1)] : ["going_on" == t.date_status(t.invitation_data.wedding_date) ? [n("h1", {
							staticClass: "padding-balance text-center"
						}, [t._v(t._s(t.$t("countdown.event_going")))]), t._v(" "), t.invitation_data.max_attendance ? n("div", {
							staticClass: "attendance-wrap"
						}, [0 !== t.invitation_data.max_attendance ? n("b-progress", {
							attrs: {
								max: t.invitation_data.max_attendance,
								height: "2rem"
							}
						}, [n("b-progress-bar", {
							attrs: {
								value: t.attendance_active
							}
						})], 1) : t._e(), t._v(" "), t.invitation_data.max_attendance ? n("p", [t._v(t._s(t.$t("attendance.venue_capacity")) + "\n                        "), n("b", [t._v(t._s(t.attendance_active) + "/" + t._s(t.invitation_data.max_attendance))])]) : t._e()], 1) : t._e(), t._v(" "), t.invitation_data.max_attendance ? t._e() : n("p", [n("b", [t._v(t._s(t.attendance_active))]), t._v("\n                      " + t._s(t.$t("attendance.guest_join")))]), t._v(" "), n("p", [n("b", [t._v(t._s(t.$t("attendance.guest_book")) + ":")])]), t._v(" "), n("p", {
							attrs: {
								align: "center"
							}
						}, [n("b-button", {
							attrs: {
								variant: "success",
								href: "" + t.BASE_URL + t.$route.params.id + "/checkin"
							}
						}, [t._v("Check In")]), t._v(" "), n("b-button", {
							attrs: {
								variant: "danger",
								href: "" + t.BASE_URL + t.$route.params.id + "/checkout"
							}
						}, [t._v("Check Out")])], 1)] : [n("h1", {
							staticClass: "padding-balance text-center"
						}, [t._v(t._s(t.$t("countdown.event_end")))])]], t._v(" "), n("div", {
							attrs: {
								id: "adressWrapper"
							}
						}, [n("div", {
							staticClass: "cover",
							attrs: {
								id: "maps"
							}
						}, [t.invitation_data.wedding_location_embed && "" !== t.invitation_data.wedding_location_embed ? n("div", {
							staticClass: "google-maps",
							domProps: {
								innerHTML: t._s(t.invitation_data.wedding_location_embed)
							}
						}) : t._e()]), t._v(" "), n("b-container", {
							staticClass: "adress"
						}, [n("p", {
							staticStyle: {
								"white-space": "pre-wrap"
							}
						}, [t._v(t._s(t.invitation_data.wedding_address))])]), t._v(" "), n("p", {
							staticClass: "lihat-lokasi"
						}, [t.invitation_data.wedding_location && "" !== t.invitation_data.wedding_location ? n("b-button", {
							staticClass: "btn-lokasi",
							attrs: {
								variant: "outline-primary",
								href: t.invitation_data.wedding_location,
								target: "_blank",
								pill: ""
							}
						}, [t._v(t._s(t.$t("event.see_location")) + "\n                      ")]) : t._e()], 1)], 1), t._v(" "), n("div", {
							staticClass: "cover rundown"
						}, [n("b-container", {
							staticStyle: {
								position: "relative",
								"z-index": "2"
							}
						}, [n("div", {
							staticClass: "top-acara"
						}), t._v(" "), n("b-row", {
							staticClass: "justify-content-md-center"
						}, [t.invitation_data.disabled_akad ? t._e() : n("b-col", {
							staticClass: "item-rundown wow animate__animated animate__fadeInUp",
							attrs: {
								cols: "12",
								lg: t.invitation_data.custom_schedule && t.invitation_data.custom_schedule.length > 0 ? "4" : "6"
							}
						}, [n("h1", [t._v(t._s(t.invitation_data.title_akad || "akad nikah"))]), t._v(" "), n("p", [t._v(t._s(t.toDate(t.invitation_data.akad_date)))]), t._v(" "), t.invitation_data.has_akad ? [n("p", [n("b", [t._v(t._s(t.$t("event.has_been_held")))])])] : [n("p", [n("b-icon", {
							attrs: {
								icon: "clock"
							}
						}), t._v("\n                            " + t._s(t.$t("on_hour", {
							var: t.toDate(t.invitation_data.akad_time_from, !0, t.invitation_data.tz_event)
						})) + "\n                            -\n                            " + t._s("selesai" == t.invitation_data.akad_time_to ? t.$t("event.finish") : t.toDate(t.invitation_data.akad_time_to, !0, t.invitation_data.tz_event)) + "\n                          ")], 1)], t._v(" "), t.invitation_data.akad_address && t.invitation_data.wedding_address !== t.invitation_data.akad_address && "" !== t.invitation_data.akad_address ? n("p", {
							staticStyle: {
								"white-space": "pre-wrap"
							}
						}, [n("b-icon", {
							attrs: {
								icon: "signpost2-fill"
							}
						}), t._v(" " + t._s(t.invitation_data.akad_address) + "\n                        ")], 1) : t._e(), t._v(" "), t.invitation_data.has_akad ? t._e() : n("p", [t.invitation_data.wedding_location !== t.invitation_data.akad_location ? n("b-button", {
							attrs: {
								variant: "outline-primary",
								href: t.invitation_data.akad_location,
								target: "_blank",
								pill: ""
							}
						}, [t._v(t._s(t.$t("event.see_location")) + "\n                          ")]) : t._e()], 1)], 2), t._v(" "), t.invitation_data.disabled_resepsi ? t._e() : n("b-col", {
							staticClass: "item-rundown wow animate__animated animate__fadeInUp",
							attrs: {
								cols: "12",
								lg: t.invitation_data.custom_schedule && t.invitation_data.custom_schedule.length > 0 ? "4" : "6"
							}
						}, [n("h1", [t._v(t._s(t.invitation_data.title_resepsi || "resepsi"))]), t._v(" "), n("p", [t._v(t._s(t.toDate(t.invitation_data.resepsi_date)))]), t._v(" "), t.invitation_data.is_resepsi_session && t.invitation_data.resepsi_session.length > 0 ? t._l(t.invitation_data.resepsi_session, (function (e, o) {
							return n("p", {
								key: o
							}, [t._v("\n                            " + t._s(e.title) + " :\n                            " + t._s(t.$t("on_hour", {
								var: t.toDate(e.time_from, !0, t.invitation_data.tz_event)
							})) + " -\n                            " + t._s("selesai" == e.time_to ? t.$t("event.finish") : t.toDate(e.time_to, !0, t.invitation_data.tz_event)) + "\n                          ")])
						})) : [n("p", [n("b-icon", {
							attrs: {
								icon: "clock"
							}
						}), t._v("\n                            " + t._s(t.$t("on_hour", {
							var: t.toDate(t.invitation_data.resepsi_time_from, !0, t.invitation_data.tz_event)
						})) + "\n                            -\n                            " + t._s("selesai" == t.invitation_data.resepsi_time_to ? t.$t("event.finish") : t.toDate(t.invitation_data.resepsi_time_to, !0, t.invitation_data.tz_event)) + "\n                          ")], 1)], t._v(" "), t.invitation_data.resepsi_address && t.invitation_data.wedding_address !== t.invitation_data.resepsi_address && "" !== t.invitation_data.resepsi_address ? n("p", {
							staticStyle: {
								"white-space": "pre-wrap"
							}
						}, [n("b-icon", {
							attrs: {
								icon: "signpost2-fill"
							}
						}), t._v(" " + t._s(t.invitation_data.resepsi_address) + "\n                        ")], 1) : t._e(), t._v(" "), n("p", [t.invitation_data.wedding_location !== t.invitation_data.resepsi_location ? n("b-button", {
							attrs: {
								variant: "outline-primary",
								href: t.invitation_data.resepsi_location,
								target: "_blank",
								pill: ""
							}
						}, [t._v(t._s(t.$t("event.see_location")) + "\n                          ")]) : t._e()], 1)], 2), t._v(" "), t.invitation_data.custom_schedule ? t._l(t.invitation_data.custom_schedule, (function (e, o) {
							return n("b-col", {
								key: o,
								staticClass: "item-rundown wow animate__animated animate__fadeInUp",
								attrs: {
									cols: "12",
									lg: t.invitation_data.custom_schedule && t.invitation_data.custom_schedule.length > 0 ? "4" : "6"
								}
							}, [n("h1", [t._v(t._s(e.title_schedule))]), t._v(" "), n("p", [t._v(t._s(t.toDate(e.schedule_date)))]), t._v(" "), n("p", [n("b-icon", {
								attrs: {
									icon: "clock"
								}
							}), t._v("\n                            " + t._s(t.$t("on_hour", {
								var: t.toDate(e.schedule_time_from, !0, t.invitation_data.tz_event)
							})) + " -\n                            " + t._s("selesai" == e.schedule_time_to ? t.$t("event.finish") : t.toDate(e.schedule_time_to, !0, t.invitation_data.tz_event)) + "\n                          ")], 1), t._v(" "), e.schedule_address && t.invitation_data.wedding_address !== e.schedule_address && "" !== e.schedule_address ? n("p", {
								staticStyle: {
									"white-space": "pre-wrap"
								}
							}, [n("b-icon", {
								attrs: {
									icon: "signpost2-fill"
								}
							}), t._v(" " + t._s(e.schedule_address) + "\n                          ")], 1) : t._e(), t._v(" "), n("p", [t.invitation_data.wedding_location !== e.schedule_location ? n("b-button", {
								attrs: {
									variant: "outline-primary",
									href: e.schedule_location,
									target: "_blank",
									pill: ""
								}
							}, [t._v(t._s(t.$t("event.see_location")))]) : t._e()], 1)])
						})) : t._e()], 2), t._v(" "), n("p", {
							staticClass: "padding-balance wow animate__animated animate__fadeInRight",
							staticStyle: {
								"white-space": "pre-wrap"
							}
						}, [t._v(t._s(t.invitation_data.closing_word || "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak / Ibu / Saudara / i. berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih.") + "\n                    "), t.invitation_data.wedding_also_inviting && t.invitation_data.wedding_also_inviting.length > 0 ? [n("p", {
							staticClass: "wow animate__animated animate__fadeInDown",
							staticStyle: {
								"margin-top": "40px"
							}
						}, [n("b", [t._v(t._s(t.$t("event.also_invite")) + ":")])]), t._v(" "), n("ul", {
							staticClass: "wow animate__animated animate__fadeInUp",
							attrs: {
								id: "also_inviting"
							}
						}, t._l(t.invitation_data.wedding_also_inviting, (function (e, o) {
							return n("li", {
								key: o
							}, [t._v(t._s(e))])
						})), 0)] : t._e()], 2), n("div", {
							staticClass: "top-acara"
						})], 1)], 1)], 2)])])] : t._e(), t._v(" "), "live_streaming" == section ? [n("div", {
							key: section
						}, [t.$store.state.invitation.feature_ekslusif ? [t.invitation_data.enabled_live_streaming ? n("section", {
							attrs: {
								id: "live"
							}
						}, [n("LiveStreaming")], 1) : t._e()] : t._e()], 2)] : t._e()]
					})), t._v(" "), t.is_preview || t.invitation_data.disabled_amplop ? t._e() : n("Pay"), t._v(" "), n("div", {
						staticClass: "cover",
						attrs: {
							id: "section-bottom"
						}
					}, [t.$store.state.invitation.feature_active ? [n("section", {
						attrs: {
							id: "wishes"
						}
					}, [n("Wishes")], 1)] : t._e(), t._v(" "), n("section", {
						attrs: {
							id: "footer"
						}
					}, [n("b-container", [t.$store.state.invitation.vendor && "Our Wedding Link" != t.$store.state.invitation.vendor.organization_name ? n("b-row", [n("b-col", {
						attrs: {
							cols: "12"
						}
					}, [n("p", [t._v("presented by")]), t._v(" "), n("b-link", {
						attrs: {
							to: "/portofolio/" + t.$store.state.invitation.vendor.vendor_slug,
							target: "_blank"
						}
					}, [n("p", {
						staticClass: "link"
					}, [n("b", [t._v(t._s(t.$store.state.invitation.vendor.organization_name))])]), t._v(" "), n("p", [t.$store.state.invitation.vendor.logo ? n("img", {
						attrs: {
							src: t.CDN_MEDIA + "vendor/" + t.$store.state.invitation.vendor.logo,
							alt: ""
						}
					}) : t._e()])])], 1)], 1) : n("b-row", [n("b-col", {
						attrs: {
							cols: "12"
						}
					}, [n("p", [t._v("powered by")]), t._v(" "), n("p", {
						staticClass: "link"
					}, [n("b-link", {
						attrs: {
							href: "" + t.BASE_URL
						}
					}, [n("b", [t._v("OUR WEDDING "), n("span", [t._v("LINK")])])])], 1), t._v(" "), n("p", [n("b-link", {
						attrs: {
							href: "" + t.BASE_URL
						}
					}, [n("img", {
						attrs: {
							src: o(604),
							alt: ""
						}
					})]), t._v(" "), n("b-link", {
						staticClass: "instagram",
						attrs: {
							href: "https://www.instagram.com/ourwedding.link/"
						}
					}, [n("img", {
						attrs: {
							src: o(623),
							alt: ""
						}
					})])], 1)])], 1)], 1)], 1)], 2), t._v(" "), t.is_preview ? t._e() : n("BottomBar")], 2)], 1)
				}), [], !1, null, "3ae65d9e", null);
			e.default = component.exports
		},
		669: function (t, e, o) {
			"use strict";
			o(53);
			var n = o(18);
			e.a = {
				methods: {
					onRecaptchaSuccess: function (t) {
						var e = this;
						return Object(n.a)(regeneratorRuntime.mark((function o() {
							return regeneratorRuntime.wrap((function (o) {
								for (;;) switch (o.prev = o.next) {
									case 0:
										console.log("recaptha success", t), e.$store.commit("recaptha/setIsValid", !0);
									case 2:
									case "end":
										return o.stop()
								}
							}), o)
						})))()
					},
					onRecaptchaError: function (t) {
						console.log("Recaptcha Error happened:", t), this.$store.commit("recaptha/setIsValid", !1)
					},
					onExpired: function () {
						console.log("Recaptha Expired")
					}
				}
			}
		},
		726: function (t, e, o) {
			var content = o(761);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(100).default)("937cdada", content, !0, {
				sourceMap: !1
			})
		},
		727: function (t, e, o) {
			var content = o(763);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(100).default)("973006ae", content, !0, {
				sourceMap: !1
			})
		},
		760: function (t, e, o) {
			"use strict";
			o(726)
		},
		761: function (t, e, o) {
			var n = o(99)(!1);
			n.push([t.i, ".layout_style2 #welcome{position:relative;z-index:9}", ""]), t.exports = n
		},
		762: function (t, e, o) {
			"use strict";
			o(727)
		},
		763: function (t, e, o) {
			var n = o(99)(!1);
			n.push([t.i, '.layout-cover[data-v-ae7912da]{background-color:#fff}.layout-cover.noscroll[data-v-ae7912da]{height:68vh;overflow:hidden}.layout-cover.is_preview.mobile[data-v-ae7912da]{height:100%}.style_jawa #quote[data-v-ae7912da]{background-color:#9f492d;color:#f7bd78}.style_jawa #coupleProfile[data-v-ae7912da],.style_jawa #galleries[data-v-ae7912da]{background-color:#f7bd78;color:#562016}#quote[data-v-ae7912da]{padding:40px 0}#separator[data-v-ae7912da]{padding-bottom:0}.darkMode #quote[data-v-ae7912da],.darkMode section[data-v-ae7912da]{background-color:#2d2d2d}.darkMode #quote[data-v-ae7912da]{color:#fff}.darkMode #separator[data-v-ae7912da]{background-color:transparent}.darkMode #separator .quotes[data-v-ae7912da]{color:#fff}.darkMode #coupleProfile[data-v-ae7912da]{background-color:#2d2d2d}.darkMode #coupleProfile .female[data-v-ae7912da],.darkMode #coupleProfile .male[data-v-ae7912da]{color:#fff}.darkMode #galleries[data-v-ae7912da],.darkMode #weddingDetail[data-v-ae7912da]{background-color:#2d2d2d}.darkMode #weddingDetail #countdown h3[data-v-ae7912da],.darkMode #weddingDetail #countdown li[data-v-ae7912da],.darkMode #weddingDetail #countdown p[data-v-ae7912da]{color:#fff}.darkMode #wishes[data-v-ae7912da]{background-color:#2d2d2d}.darkMode .google-maps[data-v-ae7912da]{filter:invert(100%)}.darkMode section h1[data-v-ae7912da]{color:#fff}.rundown[data-v-ae7912da]{text-align:center}.rundown .item-rundown[data-v-ae7912da]{margin:30px 0}.rundown p[data-v-ae7912da]{margin-bottom:5px}#countdown[data-v-ae7912da],#maps[data-v-ae7912da]{padding-top:50px}#countdown p[data-v-ae7912da],#countdown ul[data-v-ae7912da]{text-align:center}#countdown ul[data-v-ae7912da]{padding-left:0}#countdown li[data-v-ae7912da]{display:inline-block;list-style-type:none;font-size:1em;padding:1em;text-transform:uppercase;text-align:center}#countdown li#days[data-v-ae7912da]{font-size:1.5em;display:block}#countdown li#days span[data-v-ae7912da]{font-size:4.5rem}#countdown li span[data-v-ae7912da]{display:block;font-size:1.5rem;line-height:1}@media only screen and (min-width:1024px){.layout-cover:not(.mobile) #countdown li[data-v-ae7912da]{font-size:1.5em;display:inline-block}.layout-cover:not(.mobile) #countdown li#days[data-v-ae7912da]{display:inline-block}.layout-cover:not(.mobile) #countdown li span[data-v-ae7912da]{font-size:4.5rem}}.quotes[data-v-ae7912da]{text-align:center;font-weight:600;font-size:20px}#coupleProfile .male[data-v-ae7912da]{text-align:left}#coupleProfile .female[data-v-ae7912da]{text-align:right}#coupleProfile .img-couple[data-v-ae7912da]{width:40%;display:inline-block;margin-bottom:20px}#coupleProfile p[data-v-ae7912da]{margin:5px}section[data-v-ae7912da]{padding-top:30px;padding-bottom:30px;width:100%;float:left;margin-top:-1px}.box[data-v-ae7912da],.box-female[data-v-ae7912da]{position:relative}.box img[data-v-ae7912da]{left:0}.box-female img[data-v-ae7912da],.box img[data-v-ae7912da]{position:absolute;top:0;width:100%;height:100%}.box-female img[data-v-ae7912da]{right:0}.box[data-v-ae7912da],.box-female[data-v-ae7912da]{margin-bottom:20px}.line-separator[data-v-ae7912da]{position:relative}.separator-img[data-v-ae7912da]{width:100vw}@media only screen and (min-width:1024px){.layout-cover.is_preview:not(.mobile) .box-separator[data-v-ae7912da],.layout-cover:not(.is_preview) .box-separator[data-v-ae7912da]{height:100vh;width:100%;margin:0 auto;z-index:-1;position:relative;overflow:hidden}.layout-cover.is_preview:not(.mobile) .box-separator[data-v-ae7912da]:after,.layout-cover:not(.is_preview) .box-separator[data-v-ae7912da]:after{content:"";height:100%;width:100%;position:absolute}.layout-cover.is_preview:not(.mobile) .separator-img[data-v-ae7912da],.layout-cover:not(.is_preview) .separator-img[data-v-ae7912da]{width:100%;height:100%;position:absolute;top:0;left:0;bottom:0;z-index:-2;-o-filter:blur(18px);filter:blur(18px)}.layout-cover.is_preview:not(.mobile) .widget[data-v-ae7912da],.layout-cover:not(.is_preview) .widget[data-v-ae7912da]{height:100vh;width:100%;overflow:hidden;-ms-background-size:contain;background-size:contain;-webkit-background-repeat:no-repeat;-moz-background-repeat:no-repeat;-ms-background-repeat:no-repeat;-o-background-repeat:no-repeat;background-repeat:no-repeat;-webkit-background-position:center;-moz-background-position:center;-ms-background-position:center;-o-background-position:center;background-position:50%}.layout-cover.is_preview:not(.mobile) .line-separator[data-v-ae7912da],.layout-cover:not(.is_preview) .line-separator[data-v-ae7912da]{margin-top:-110px}.layout-cover.is_preview:not(.mobile) .google-maps[data-v-ae7912da],.layout-cover:not(.is_preview) .google-maps[data-v-ae7912da]{padding-bottom:47%}.layout-cover.is_preview:not(.mobile) .box[data-v-ae7912da],.layout-cover.is_preview:not(.mobile) .box-female[data-v-ae7912da],.layout-cover:not(.is_preview) .box[data-v-ae7912da],.layout-cover:not(.is_preview) .box-female[data-v-ae7912da]{margin-bottom:50px}.layout-cover.is_preview:not(.mobile) .box-female[data-v-ae7912da]:after,.layout-cover.is_preview:not(.mobile) .box[data-v-ae7912da]:after,.layout-cover:not(.is_preview) .box-female[data-v-ae7912da]:after,.layout-cover:not(.is_preview) .box[data-v-ae7912da]:after{padding-bottom:100%}.layout-cover.is_preview:not(.mobile) #coupleProfile .row[data-v-ae7912da],.layout-cover:not(.is_preview) #coupleProfile .row[data-v-ae7912da]{justify-content:space-between}.layout-cover.is_preview:not(.mobile) #coupleProfile .female[data-v-ae7912da],.layout-cover.is_preview:not(.mobile) #coupleProfile .male[data-v-ae7912da],.layout-cover:not(.is_preview) #coupleProfile .female[data-v-ae7912da],.layout-cover:not(.is_preview) #coupleProfile .male[data-v-ae7912da]{text-align:center}.layout-cover.is_preview:not(.mobile) #coupleProfile .img-couple[data-v-ae7912da],.layout-cover:not(.is_preview) #coupleProfile .img-couple[data-v-ae7912da]{width:100%}}.layout-cover.mobile .container[data-v-ae7912da]{width:100%}.layout-cover.mobile .col-lg-4[data-v-ae7912da],.layout-cover.mobile .col-lg-5[data-v-ae7912da],.layout-cover.mobile .col-lg-6[data-v-ae7912da],.layout-cover.mobile .col-xl-2[data-v-ae7912da]{flex:0 0 100%;max-width:100%}', ""]), t.exports = n
		},
		821: function (t, e, o) {
			var content = o(1004);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(100).default)("6aa9c286", content, !0, {
				sourceMap: !1
			})
		},
		830: function (t, e, o) {
			"use strict";
			o.r(e);
			var n = o(617),
				r = o(605),
				d = o(584),
				line = o(596),
				l = o(597),
				c = o(606),
				_ = o(598),
				v = o(599),
				m = o(600),
				f = o(579),
				h = o(581),
				w = {
					mixins: [f.a, h.a],
					components: {
						Pay: n.default,
						Welcome: r.default,
						CoupleDecor: d.default,
						LineDecor: line.default,
						Wishes: l.default,
						Rsvp: c.default,
						AddToCalendar: m.default,
						Galleries: _.default,
						BottomBar: v.default
					},
					name: "template_2",
					mounted: function () {
						$("#main-wrap").removeClass("no-scroll")
					}
				},
				y = (o(760), o(762), o(117)),
				component = Object(y.a)(w, (function () {
					var t = this,
						e = t.$createElement,
						o = t._self._c || e;
					return o("div", {
						staticClass: "layout-cover cover animate__animated layout_style2",
						class: {
							animate__fadeIn: !t.data.is_load_data, darkMode: "dark" == t.template_data.mode, mobile: "mobile" == t.preview_mode, is_preview: t.is_preview, noscroll: t.$store.state.invitation.is_preview_welcome
						}
					}, [t.$store.state.invitation.is_preview_welcome || !t.is_preview ? o("Welcome", {
						attrs: {
							invitation_data_props: t.invitation_data,
							template_data_props: t.template_data
						}
					}) : t._e(), t._v(" "), t.is_preview ? t._e() : o("Pay"), t._v(" "), !t.data.is_load_data && t.invitation_data.background_music ? o("audio", {
						ref: "background_music",
						attrs: {
							id: "background_music",
							loop: "",
							src: t.API_URL + "uploads/" + t.invitation_data.background_music
						}
					}) : t._e(), t._v(" "), o("section", {
						staticStyle: {
							"padding-top": "0"
						},
						attrs: {
							id: "separator"
						}
					}, [o("div", {
						staticClass: "widget",
						style: [t.isDesktop ? {
							"background-image": "url(" + t.CDN_MEDIA + t.invitation_data.image_separator + ")"
						} : {
							background: "transparent"
						}],
						attrs: {
							id: "widget"
						}
					}, [o("div", {
						staticClass: "box-separator"
					}, [o("img", {
						staticClass: "separator-img",
						attrs: {
							src: "" + t.CDN_MEDIA + t.invitation_data.image_separator,
							onerror: "this.src = '" + t.BASE_URL + "/placeholder.png';",
							alt: ""
						}
					})])])]), t._v(" "), o("div", {
						staticClass: "cover",
						attrs: {
							id: "quote"
						}
					}, [o("b-container", [o("b-row", [o("b-col", {
						staticClass: "text-center",
						attrs: {
							cols: "12"
						}
					}, [o("img", {
						attrs: {
							src: t.CDN_MEDIA + "assets/quotes_decor_" + t.template_data.quote_decor + ".png",
							alt: "",
							width: "50%"
						}
					})]), t._v(" "), o("b-col", {
						attrs: {
							cols: "12"
						}
					}, [o("p", {
						staticClass: "quotes padding-balance mt-3 mb-3"
					}, [t._v(t._s(t.invitation_data.quotes))])]), t._v(" "), o("b-col", {
						staticClass: "text-center",
						attrs: {
							cols: "12"
						}
					}, [o("img", {
						staticStyle: {
							transform: "rotate(180deg)"
						},
						attrs: {
							src: t.CDN_MEDIA + "assets/quotes_decor_" + t.template_data.quote_decor + ".png",
							alt: "",
							width: "50%"
						}
					})])], 1)], 1)], 1), t._v(" "), "style_minimalist" !== t.template_data.style_theme ? [o("LineDecor", {
						attrs: {
							background_image: t.CDN_MEDIA + "assets/" + (t.template_data.style_theme || "style_jawa") + "/line.jpg"
						}
					})] : t._e(), t._v(" "), o("section", {
						style: "background-image:url('" + t.CDN_MEDIA + "assets/" + (t.template_data.style_theme || "style_jawa") + "/couple_background.png')",
						attrs: {
							id: "coupleProfile"
						}
					}, [o("h1", {
						staticClass: "title-text text-center"
					}, [t._v(t._s(t.$t("couple.title")))]), t._v(" "), o("div", {
						staticClass: "cover"
					}, [o("b-container", [o("b-row", [o("b-col", {
						staticClass: "male wow animate__animated animate__fadeInLeft",
						attrs: {
							cols: "12",
							lg: "5",
							xl: "5"
						}
					}, [o("div", {
						staticClass: "box"
					}, [o("CoupleDecor", {
						attrs: {
							source: "" + t.CDN_MEDIA + t.invitation_data.couple_male_photo,
							width: t.isDesktop ? "100%" : "60%",
							style_decor: t.template_data.couple_decor
						}
					})], 1), t._v(" "), o("div", {
						style: [t.isDesktop ? {
							"margin-top": "-50px"
						} : {
							"margin-top": "-20px"
						}]
					}, [o("h4", [o("b", [t._v(t._s(t.invitation_data.couple_male_complete_name || "John Doe S.Kom"))])]), t._v(" "), o("p", [o("b", [t._v("putra " + t._s(t.invitation_data.couple_male_child_number || "kedua") + " dari")])]), t._v(" "), o("p", [t._v(t._s(t.invitation_data.couple_male_father_full_name || "Dr Bapak Joe M.pd") + " &")]), t._v(" "), o("p", [t._v(t._s(t.invitation_data.couple_male_mother_full_name || "Hj Ibu Khodijah ST"))])])]), t._v(" "), o("b-col", {
						attrs: {
							cols: "12",
							lg: "2",
							xl: "2",
							align: "center"
						}
					}, [o("h1", {
						staticClass: "font-morning",
						staticStyle: {
							"font-size": "6rem"
						}
					}, [t._v("&")])]), t._v(" "), o("b-col", {
						staticClass: "female wow animate__animated animate__fadeInRight",
						attrs: {
							cols: "12",
							lg: "5",
							xl: "5"
						}
					}, [o("div", {
						staticClass: "box-female"
					}, [o("CoupleDecor", {
						attrs: {
							source: "" + t.CDN_MEDIA + t.invitation_data.couple_female_photo,
							width: t.isDesktop ? "100%" : "60%",
							style_decor: t.template_data.couple_decor
						}
					})], 1), t._v(" "), o("div", {
						style: [t.isDesktop ? {
							"margin-top": "-50px"
						} : {
							"margin-top": "-20px"
						}]
					}, [o("h4", [o("b", [t._v(t._s(t.invitation_data.couple_female_complete_name || "Adinda Mawaria S.E"))])]), t._v(" "), o("p", [o("b", [t._v("putri " + t._s(t.invitation_data.couple_female_child_number || "bungsu") + " dari")])]), t._v(" "), o("p", [t._v(t._s(t.invitation_data.couple_female_father_full_name || "Dr Bapak Michael Stam.pd") + " &")]), t._v(" "), o("p", [t._v(t._s(t.invitation_data.couple_female_mother_full_name || "Hj Ibu Aminah SA"))])])])], 1)], 1)], 1)]), t._v(" "), o("section", {
						staticStyle: {
							"padding-bottom": "0"
						},
						attrs: {
							id: "galleries"
						}
					}, [o("h1", {
						staticClass: "title-text text-center"
					}, [t._v("Momen yang berharga")]), t._v(" "), o("Galleries", {
						attrs: {
							is_preview: t.is_preview
						},
						on: {
							updateScroll: t.updateScrollLayout
						}
					})], 1), t._v(" "), o("section", {
						attrs: {
							id: "weddingDetail"
						}
					}, [o("div", {
						attrs: {
							id: "countdown"
						}
					}, [t.date_status(t.invitation_data.wedding_date) ? [o("p", [o("b", [t._v(t._s(t.$t("countdown.title")))])]), t._v(" "), o("ul", [o("li", {
						attrs: {
							id: "days"
						}
					}, [o("span", [o("b", [t._v(t._s(t.countdown.days))])]), t._v("Hari")]), t._v(" "), o("li", {
						attrs: {
							id: "hours"
						}
					}, [o("span", [o("b", [t._v(t._s(t.countdown.hours))])]), t._v("Jam")]), t._v(" "), o("li", {
						attrs: {
							id: "minutes"
						}
					}, [o("span", [o("b", [t._v(t._s(t.countdown.minutes))])]), t._v("Menit")]), t._v(" "), o("li", {
						attrs: {
							id: "seconds"
						}
					}, [o("span", [o("b", [t._v(t._s(t.countdown.seconds))])]), t._v("Detik")])]), t._v(" "), o("p", [t._v("♥ " + t._s(t._f("formatDate")(t.invitation_data.wedding_date)) + " ♥")]), t._v(" "), o("p", [o("AddToCalendar")], 1)] : [1 == t.count_day(t.invitation_data.wedding_date) ? [o("h4", {
						staticClass: "padding-balance text-center"
					}, [t._v(t._s(t.$t("countdown.event_going")))])] : [o("h4", {
						staticClass: "padding-balance text-center"
					}, [t._v(t._s(t.$t("countdown.event_end")))])]], t._v(" "), o("div", {
						staticClass: "cover",
						attrs: {
							id: "maps"
						}
					}, [t.invitation_data.wedding_location_embed ? o("div", {
						staticClass: "google-maps",
						domProps: {
							innerHTML: t._s(t.invitation_data.wedding_location_embed)
						}
					}) : t._e()]), t._v(" "), o("p", [t._v(t._s(t.invitation_data.wedding_address))]), t._v(" "), o("p", [o("b-button", {
						attrs: {
							variant: "outline-primary",
							href: t.invitation_data.wedding_location,
							target: "_blank",
							pill: ""
						}
					}, [t._v(t._s(t.$t("event.see_location")))])], 1), t._v(" "), o("div", {
						staticClass: "cover rundown"
					}, [o("b-container", [o("b-row", [o("b-col", {
						staticClass: "item-rundown",
						attrs: {
							cols: "12",
							lg: "6",
							xl: "6"
						}
					}, [o("h3", [o("b", [t._v("AKAD NIKAH")])]), t._v(" "), o("p", [t._v(t._s(t.toDate(t.invitation_data.akad_date)))]), t._v(" "), o("p", [t._v(t._s(t.$t("on_hour", {
						var: t.toDate(t.invitation_data.akad_time_from, !0)
					})) + " - " + t._s("selesai" == t.invitation_data.akad_time_to ? t.$t("event.finish") : t.invitation_data.akad_time_to))]), t._v(" "), o("p", [t.invitation_data.wedding_location !== t.invitation_data.akad_location ? o("b-button", {
						attrs: {
							variant: "outline-primary",
							href: t.invitation_data.akad_location,
							target: "_blank",
							pill: ""
						}
					}, [t._v(t._s(t.$t("event.see_location")))]) : t._e()], 1)]), t._v(" "), o("b-col", {
						staticClass: "item-rundown",
						attrs: {
							cols: "12",
							lg: "6",
							xl: "6"
						}
					}, [o("h3", [o("b", [t._v("RESEPSI")])]), t._v(" "), o("p", [t._v(t._s(t.toDate(t.invitation_data.resepsi_date)))]), t._v(" "), o("p", [t._v(t._s(t.$t("on_hour", {
						var: t.toDate(t.invitation_data.resepsi_time_from, !0)
					})) + " - " + t._s("selesai" == t.invitation_data.resepsi_time_to ? t.$t("event.finish") : t.invitation_data.resepsi_time_to))]), t._v(" "), o("p", [t.invitation_data.wedding_location !== t.invitation_data.resepsi_location ? o("b-button", {
						attrs: {
							variant: "outline-primary",
							href: t.invitation_data.resepsi_location,
							target: "_blank",
							pill: ""
						}
					}, [t._v(t._s(t.$t("event.see_location")))]) : t._e()], 1)])], 1)], 1)], 1)], 2)]), t._v(" "), o("section", {
						attrs: {
							id: "rsvp"
						}
					}, [o("Rsvp")], 1), t._v(" "), o("section", {
						attrs: {
							id: "wishes"
						}
					}, [o("Wishes")], 1), t._v(" "), t.is_preview ? t._e() : o("BottomBar")], 2)
				}), [], !1, null, "ae7912da", null);
			e.default = component.exports
		}
	}
]);
