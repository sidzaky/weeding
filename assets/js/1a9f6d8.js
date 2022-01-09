(window.webpackJsonp = window.webpackJsonp || []).push([
	[0], {
		581: function (module, __webpack_exports__, __webpack_require__) {
			"use strict";
			var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25),
				core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),
				core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86),
				core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__),
				core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30),
				core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__),
				core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27),
				core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__),
				core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43),
				core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__),
				core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36),
				core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__),
				core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
				core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__),
				core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55),
				core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__),
				core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92),
				core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__),
				core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42),
				core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__),
				core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66),
				core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__),
				_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57),
				regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53),
				regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_12__),
				_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18),
				_mixins_background_section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(654);
			__webpack_exports__.a = {
				mixins: [_mixins_background_section__WEBPACK_IMPORTED_MODULE_14__.a],
				mounted: function () {
					var t = this;
					if (this.invitation_data.couple_sort && (this.couple_sort = ["male", "dan", "female"]), (window.matchMedia("(min-width: 1024px)").matches && !this.is_preview || "desktop" == this.preview_mode) && (this.isDesktop = !0), this.invitation_data.attendance && this.invitation_data.attendance.length > 0 && this.invitation_data.attendance.map((function (e) {
							"check_in" == e.status && (t.attendance_active += e.total_person || 1)
						})), "dark" !== this.template_data.mode && (this.updateColor(), (this.template_data.custom_css && "" !== this.template_data.custom_css || this.invitation_data.inv_css && "" !== this.invitation_data.inv_css) && this.UpdateCustomCss(this.template_data.custom_css)), jQuery(document).ready((function () {
							t.addAnimateClass()
						})), this.$device.isDesktop) {
						var e = $(".scrollableUndangan");
						$(e).on("scroll", (function () {
							console.log("scroll");
							var o = $(e).scrollTop();
							console.log("scroll", o), o > 100 && t.invitationOpen()
						}))
					}
				},
				beforeMount: function () {
					var t = this;
					return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__.a)(regeneratorRuntime.mark((function e() {
						return regeneratorRuntime.wrap((function (e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, Modernizr.on("webp", (function (e) {
										console.log("is_webp", e), e || (t.is_webp = !1)
									}));
								case 2:
								case "end":
									return e.stop()
							}
						}), e)
					})))()
				},
				filters: {
					imagesFilter: function (t) {
						return t && this.is_webp ? t.split(".").slice(0, -1).join(".") + ".webp" : t
					}
				},
				data: function () {
					return {
						isDesktop: !1,
						attendance_active: 0,
						music_on: !1,
						layoutKey: 0,
						unscroll: !1,
						is_webp: !0,
						newPreset: !1,
						invitation_has_open: !1,
						couple_sort: ["female", "dan", "male"]
					}
				},
				methods: {
					filterImage: function (t) {
						if (t) return t.includes("base64") ? t : "".concat(this.API_URL, "uploads/").concat(t)
					},
					generateTypeEffect: function () {},
					generateAnimation: function (t, e, o) {
						$(t).addClass("animate__animated animate__" + e).css("animation-delay", o)
					},
					addAnimateClass: function () {
						this.generateAnimation("#welcome-text", "fadeInDown", ".5s"), this.generateAnimation("#wedding-of", "fadeInDown", ".8s"), this.generateAnimation("#couple-name", "zoomIn", "1s"), this.generateAnimation(".new_date, #date-text", "fadeInUp", "1.3s"), this.generateAnimation(".invitation_to", "zoomIn", "1.4s")
					},
					imagesFilter: function (t) {
						return t && this.is_webp ? t.split(".").slice(0, -1).join(".") + ".webp" : t
					},
					updateColor: function () {
						if (this.is_preview || !this.template_data.version) {
							var t = this.template_data;
							$("#styleColor").remove(), $(".content-layout").append('\n      <style id="styleColor">\n      #bottom-bar .wrapper {\n        background-color: '.concat(this.convertColor(t.background_color, 1), " !important;\n      }\n      #quote, #live, #coupleProfile, #galleries, #weddingDetail, #story, #wishes, #footer, .premium #hours, .premium #minutes, .premium #seconds, .premium #rsvp, .btn-premium{\n        background-color: ").concat(t.background_color, ";\n      }\n      .content-layout p {\n        color: ").concat(t.text_color, ";\n      }\n      .content-layout h4, .content-layout h3, .content-layout h1, .btn-premium {\n        color: ").concat(t.title_color, ";\n      }\n      .content-layout .alert {\n        border-color: ").concat(t.title_color, ";\n        background-color: ").concat(this.convertColor(t.title_color, .1), ";\n        color: ").concat(t.title_color, ";\n      }\n      .content-layout .btn.btn-outline-primary {\n        border-color: ").concat(t.title_color, ";\n        color: ").concat(t.title_color, ";\n      }\n      .content-layout .btn.btn-primary:not(.btn-calendar) {\n        background-color: ").concat(this.convertColor(t.title_color, 1), ";\n        border-color: ").concat(this.convertColor(t.title_color, 1), ";\n        color: ").concat(this.convertColor(t.background_color, 1), ";\n      }\n      .content-layout .custom-file-label, .content-layout .form-control,.content-layout .form-control::placeholder {\n        color: ").concat(this.convertColor(t.text_color, .5), ";\n      }\n      #wishes .text-container {\n        color: ").concat(this.convertColor(t.title_color, 1), ";\n        background-color: ").concat(this.convertColor(t.background_color, 1), " !important;\n      }\n      .content-layout .music-control {\n        background-color: ").concat(t.title_color, ";\n        color: ").concat(t.background_color, ";\n      }\n      #countdown ul li{\n        color: ").concat(this.convertColor(t.text_color, 1), "\n      }\n      #countdown ul li span{\n        color: ").concat(this.convertColor(t.title_color, 1), "\n      }\n      #bottom-bar .wrapper ul li a {\n        color: ").concat(this.convertColor(t.title_color, 1), " !important;\n      }\n      #bottom-bar .wrapper ul li a.active {\n        color: ").concat(this.convertColor(t.background_color, 1), " !important;\n        background-color: ").concat(this.convertColor(t.title_color, 1), " !important;\n      }\n      </style>\n      "))
						}
					},
					UpdateCustomJs: function (t) {
						this.is_preview
					},
					UpdateCustomCss: function UpdateCustomCss(css) {
						if (this.is_preview) try {
							var inv_css = this.invitation_data.inv_css,
								_this$template_data = this.template_data,
								custom_css = _this$template_data.custom_css,
								title_color = _this$template_data.title_color,
								background_color = _this$template_data.background_color,
								text_color = _this$template_data.text_color,
								font_title = _this$template_data.font_title,
								secondary_color = _this$template_data.secondary_color,
								font_content = _this$template_data.font_content;
							console.log("UpdateCustomCss", secondary_color);
							var font_content_data = "";
							font_content && "default" !== font_content && (font_content_data = "\n          @font-face { \n            font-family: '".concat(font_content, "'; \n            src: url('").concat(baseURL, "uploads/fonts/").concat(font_content, ".ttf'); \n          } \n         .content-layout p, \n         .content-layout p b, \n         .content-layout a, \n         .content-layout .form-control, \n         .content-layout button, \n         #welcome p,\n         #welcome p b,\n         #welcome button,\n         .modal-body p, \n         .modal-body label, \n         .modal-body p, \n         .modal-body b { \n            font-family: '").concat(font_content, "' !important; \n          }\n          "));
							var contents = eval("`${custom_css}`"),
								invt_css = eval("`${inv_css}`");
							console.log(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_11__.a)(invt_css), "type of"), "undefined" == invt_css && (invt_css = ""), "undefined" == contents && (contents = "");
							var contentss = "`" + font_content_data + contents + invt_css + "`",
								css_content = eval(contentss.toString());
							$("#customCss").remove(), console.log(css_content, "Update Custom CSS!"), $(".content-layout").append('\n        <style id="customCss">\n        '.concat(css_content, "\n        </style>\n        "))
						} catch (t) {
							alert("Css has an error! please check your css script")
						}
					},
					convertColor: function (t, e) {
						return "rgba(" + parseInt(t.slice(-6, -4), 16) + "," + parseInt(t.slice(-4, -2), 16) + "," + parseInt(t.slice(-2), 16) + "," + e + ")"
					},
					toggleMusic: function () {
						var audio = document.getElementById("background_music");
						this.music_on ? (this.music_on = !1, audio.pause()) : (this.music_on = !0, audio.play())
					},
					invitationOpen: function () {
						var t = this;
						return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__.a)(regeneratorRuntime.mark((function e() {
							var audio;
							return regeneratorRuntime.wrap((function (e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!t.invitation_has_open) {
											e.next = 2;
											break
										}
										return e.abrupt("return");
									case 2:
										if (!t.is_preview) {
											e.next = 4;
											break
										}
										return e.abrupt("return");
									case 4:
										(audio = document.getElementById("background_music")) && (audio.play(), t.music_on = !0), t.$device.isDesktop && t.$bvModal.show("protocol-modal"), window.jQuery && t.$device.isMobile && (console.log("initialize script!"), $(document).ready((function () {
											new SmoothScroll('a[href*="#"]');
											new WOW({
												offset: 200
											}).init()
										})), setTimeout((function () {
											t.UpdateCustomCss(t.template_data.custom_css)
										}), 500)), t.invitation_has_open = !0;
									case 9:
									case "end":
										return e.stop()
								}
							}), e)
						})))()
					},
					updateScrollLayout: function () {
						window.addEventListener("scroll", (function () {
							document.documentElement.style.setProperty("--scroll-y", "".concat(window.scrollY, "px"))
						}))
					}
				},
				watch: {
					couple_sorting: function (t) {
						this.couple_sort = t ? ["male", "dan", "female"] : ["female", "dan", "male"]
					},
					template_data_props: function () {
						console.log("watching template_data_props")
					},
					custom_css: function (t) {
						console.log("custom_css updated"), this.UpdateCustomCss(t)
					},
					inv_css: function (t) {
						console.log("custom_css updated"), this.UpdateCustomCss(t)
					},
					custom_js: function (t) {
						this.UpdateCustomJs(t)
					},
					is_open: function (t) {
						t && this.invitationOpen()
					},
					template_mode: function (t) {
						console.log("mode change"), this.layoutKey += 1
					},
					text_color: function (t) {
						console.log("watch text_color"), this.updateColor(), this.UpdateCustomCss()
					},
					font_title: function (t) {
						console.log("watch text_color"), this.UpdateCustomCss()
					},
					font_content: function (t) {
						console.log("watch text_color"), this.UpdateCustomCss()
					},
					title_color: function (t) {
						console.log("watch title_color"), this.updateColor(), this.UpdateCustomCss()
					},
					background_color: function (t) {
						console.log("watch background_color"), this.updateColor(), this.UpdateCustomCss()
					},
					secondary_color: function (t) {
						console.log("watch background_color"), this.UpdateCustomCss()
					},
					preview_mode: function (t) {
						"mobile" == t && (this.isDesktop = !1), "desktop" == t && (this.isDesktop = !0)
					}
				},
				props: ["invitation_data_props", "template_data_props", "is_preview"],
				computed: {
					couple_sorting: function () {
						return this.invitation_data.couple_sort
					},
					custom_css: function () {
						return console.log("custom css"), this.template_data.custom_css
					},
					inv_css: function () {
						return console.log("custom css"), this.invitation_data.inv_css
					},
					custom_js: function () {
						return this.template_data.custom_js
					},
					isPremium: function () {
						return !(!this.invitation_data.Preset || "premium" != this.invitation_data.Preset.type)
					},
					PresetIsPremium: function () {
						return !(!this.invitation_data.Preset || "premium" != this.invitation_data.Preset.preset_type)
					},
					template_mode: function () {
						return this.template_data.mode
					},
					text_color: function () {
						return this.template_data.text_color
					},
					font_content: function () {
						return this.template_data.font_content
					},
					font_title: function () {
						return this.template_data.font_title
					},
					title_color: function () {
						return this.template_data.title_color
					},
					background_color: function () {
						return this.template_data.background_color
					},
					secondary_color: function () {
						return this.template_data.secondary_color
					},
					is_open: function () {
						return this.$store.state.invitation.is_open
					},
					preview_mode: function () {
						return this.$store.state.invitation.preview_mode
					},
					data: function () {
						return this.$store.state.invitation
					},
					invitation_data: function () {
						return this.invitation_data_props ? this.invitation_data_props : this.$store.state.invitation.invitation_data
					},
					template_data: function () {
						return console.log("update template_data"), this.template_data_props ? this.template_data_props : this.$store.state.invitation.invitation_data.TemplateSetting
					},
					API_URL: function () {
						return baseURL
					},
					CDN_MEDIA: function () {
						return baseURL
					},
					BASE_URL: function () {
						return baseURL
					}
				}
			}
		},
		617: function (t, e, o) {
			"use strict";
			o.r(e);
			o(25), o(47), o(66), o(53);
			var n = o(18),
				_ = o(581),
				r = (o(603), {
					mixins: [_.a],
					data: function () {
						return {
							form: {
								name: "",
								email: "",
								message: "",
								payment_method: "qris"
							},
							copy_text: "",
							show_popover: !1,
							trigger_popover: !1,
							load_payment: !1,
							onError: !1,
							errorMessage: "",
							is_success: !1,
							qr_code_url: "",
							selected_payment_method: ""
						}
					},
					mounted: function () {
						var t = this;
						this.invitation_data.disabled_qris && (this.form.payment_method = "direct"), $(window).scroll((function () {
							$(window).scrollTop() + $(window).height() > $("#wishes").offset().top && (t.trigger_popover || t.$cookies.get("popup_amplop") || (t.show_popover = !0), t.trigger_popover = !0, t.$cookies.set("popup_amplop", "closed"))
						}))
					},
					methods: {
						copyStringToClipboard: function (t) {
							this.copy_text = t, setTimeout((function () {
								var t = document.getElementById("copy-input");
								t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), alert("Copied the text: " + t.value)
							}), 50)
						},
						submitForm: function () {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var o;
								return regeneratorRuntime.wrap((function (e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!t.$route.query.on_preview && !t.$route.query.preset_id) {
												e.next = 3;
												break
											}
											return alert("Tidak bisa melakukan aksi ini karena hanya preview"), e.abrupt("return");
										case 3:
											if (!t.val_name || !t.val_msg) {
												e.next = 14;
												break
											}
											return console.log("Submitttt"), e.next = 7, t.$recaptcha.getResponse();
										case 7:
											return o = e.sent, console.log("ReCaptcha token:", o), e.next = 11, t.$recaptcha.reset();
										case 11:
											if (!t.$store.state.recaptha.is_valid) {
												e.next = 14;
												break
											}
											return e.next = 14, t.createPayment();
										case 14:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						createPayment: function () {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var o;
								return regeneratorRuntime.wrap((function (e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, t.load_payment = !0, e.next = 4, t.$axios.$post("".concat("https://api.our-wedding.link/", "invitation/payment/").concat(t.data.user_code), t.form);
										case 4:
											o = e.sent, t.is_success = !0, t.qr_code_url = o.data.additional_payment_data, t.selected_payment_method = o.data.payment_method, window.open("".concat("https://our-wedding.link/", "amplop/").concat(o.data._id)), e.next = 14;
											break;
										case 11:
											e.prev = 11, e.t0 = e.catch(0), e.t0.response && (t.onError = !0, t.errorMessage = e.t0.response.data.message);
										case 14:
											t.load_payment = !1;
										case 15:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 11]
								])
							})))()
						}
					},
					computed: {
						invitation_data: function () {
							return this.$store.state.invitation.invitation_data
						},
						val_name: function () {
							if (this.form.name.length > 1) {
								return !/<\/?[^>]+>/gi.test(this.form.name)
							}
						},
						val_msg: function () {
							if (this.form.message.length > 1) {
								return !/<\/?[^>]+>/gi.test(this.form.message) && "" != this.form.message
							}
						}
					}
				}),
				c = (o(738), o(740), o(117)),
				component = Object(c.a)(r, (function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						class: {
							float: "stick" !== t.template_data.amplop_type
						},
						attrs: {
							id: "pay"
						}
					}, [!this.invitation_data.disabled_qris || t.invitation_data.amplop_account_number && t.invitation_data.amplop_account_number.length > 0 ? ["stick" !== t.template_data.amplop_type ? n("b-link", {
						staticClass: "pay-btn add-shadow",
						attrs: {
							id: "pay-button"
						},
						on: {
							click: function (e) {
								return t.$bvModal.show("pay-modal")
							}
						}
					}, [n("img", {
						attrs: {
							src: o(737),
							alt: ""
						}
					})]) : t._e(), t._v(" "), "stick" == t.template_data.amplop_type ? n("div", {
						staticClass: "cover pay-stick",
						style: "background-color:" + t.template_data.background_color + ";"
					}, [n("h1", [t._v(t._s(t.$t("gift.title")))]), t._v(" "), n("p", {
						domProps: {
							innerHTML: t._s("" + t.$t("gift.popover_desc"))
						}
					}), t._v(" "), n("b-button", {
						attrs: {
							variant: "primary",
							pill: ""
						},
						on: {
							click: function (e) {
								return t.$bvModal.show("pay-modal")
							}
						}
					}, [t._v(t._s(t.$t("gift.make_gift")))])], 1) : t._e(), t._v(" "), n("b-popover", {
						ref: "popover",
						attrs: {
							show: t.show_popover,
							target: "pay-button",
							title: "Popover",
							placement: "leftbottom"
						},
						on: {
							"update:show": function (e) {
								t.show_popover = e
							}
						},
						scopedSlots: t._u([{
							key: "title",
							fn: function () {
								return [t._v("\n        " + t._s(t.$t("gift.popover_title")) + "\n        "), n("b-button", {
									staticClass: "close",
									attrs: {
										"aria-label": "Close"
									},
									on: {
										click: function (e) {
											t.show_popover = !1, t.$refs.popover.$emit("disable")
										}
									}
								}, [n("span", {
									staticClass: "d-inline-block",
									attrs: {
										"aria-hidden": "true"
									}
								}, [t._v("×")])])]
							},
							proxy: !0
						}], null, !1, 1363450936)
					}, [t._v(" "), n("span", {
						domProps: {
							innerHTML: t._s(t.$t("gift.popover_desc"))
						}
					})])] : t._e(), t._v(" "), n("b-modal", {
						attrs: {
							"hide-footer": "",
							id: "pay-modal",
							centered: "",
							title: t.$t("gift.title")
						}
					}, [t.invitation_data.amplop_note && "" !== t.invitation_data.amplop_note ? n("b-alert", {
						staticStyle: {
							"white-space": "pre-wrap"
						},
						attrs: {
							variant: "info",
							show: ""
						},
						domProps: {
							innerHTML: t._s(t.invitation_data.amplop_note)
						}
					}) : t._e(), t._v(" "), t.is_success ? [n("b-alert", {
						attrs: {
							show: t.is_success
						}
					}, [t._v("Berhasil Membuat Pembayaran dengan QRIS, silahkan scan QRcode dibawah ini dengan e-wallet (OVO, Gopay, DANA, LinkAja, ShopeePay) mobile banking (BCA, CIMB, Mandiri) atau mobile banking yang sudah support QRIS ")]), t._v(" "), n("p", {
						attrs: {
							align: "center"
						}
					}, [n("img", {
						attrs: {
							src: t.qr_code_url,
							alt: ""
						}
					})]), t._v(" "), n("b-alert", {
						attrs: {
							show: "",
							variant: "success"
						}
					}, [t._v("Detail Transaksi sudah dikirim ke email anda. Terimakasih")])] : [n("b-alert", {
						attrs: {
							variant: "danger",
							show: t.onError
						}
					}, [t._v(t._s(t.errorMessage))]), t._v(" "), n("b-form", {
						on: {
							submit: function (e) {
								return e.preventDefault(), t.submitForm(e)
							}
						}
					}, [this.invitation_data.disabled_qris ? t._e() : n("b-form-group", {
						attrs: {
							label: t.$t("gift.payment_method")
						}
					}, [n("b-form-radio", {
						attrs: {
							name: "payment_method",
							value: "qris"
						},
						model: {
							value: t.form.payment_method,
							callback: function (e) {
								t.$set(t.form, "payment_method", e)
							},
							expression: "form.payment_method"
						}
					}, [n("b", [t._v("QRIS")]), t._v(" " + t._s(t.$t("gift.qris")))])], 1), t._v(" "), t.invitation_data.amplop_account_number && t.invitation_data.amplop_account_number.length > 0 ? n("b-form-group", [n("b-form-radio", {
						attrs: {
							name: "payment_method",
							value: "direct"
						},
						model: {
							value: t.form.payment_method,
							callback: function (e) {
								t.$set(t.form, "payment_method", e)
							},
							expression: "form.payment_method"
						}
					}, [n("b", [t._v("Direct Transfer")]), t._v(" " + t._s(t.$t("gift.direct_desc")))])], 1) : t._e(), t._v(" "), "qris" == t.form.payment_method ? [n("b-form-group", [n("b-form-input", {
						attrs: {
							placeholder: t.$t("form.fullname"),
							required: "",
							state: t.val_name,
							maxlength: "200"
						},
						model: {
							value: t.form.name,
							callback: function (e) {
								t.$set(t.form, "name", e)
							},
							expression: "form.name"
						}
					}), t._v(" "), n("b-form-invalid-feedback", {
						attrs: {
							state: t.val_name
						}
					}, [t._v("\n            Tidak boleh ada tag html\n          ")])], 1), t._v(" "), n("b-form-group", [n("b-form-input", {
						attrs: {
							placeholder: t.$t("form.email"),
							required: "",
							type: "email"
						},
						model: {
							value: t.form.email,
							callback: function (e) {
								t.$set(t.form, "email", e)
							},
							expression: "form.email"
						}
					})], 1), t._v(" "), n("b-form-group", [n("b-form-textarea", {
						attrs: {
							placeholder: t.$t("form.message"),
							rows: "2",
							state: t.val_msg,
							maxlength: "200"
						},
						model: {
							value: t.form.message,
							callback: function (e) {
								t.$set(t.form, "message", e)
							},
							expression: "form.message"
						}
					}), t._v(" "), n("b-form-invalid-feedback", {
						attrs: {
							state: t.val_msg
						}
					}, [t._v("\n              Tidak boleh ada tag html\n            ")])], 1)] : [t.invitation_data.amplop_account_number ? [n("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.copy_text,
							expression: "copy_text"
						}],
						attrs: {
							type: "text",
							id: "copy-input"
						},
						domProps: {
							value: t.copy_text
						},
						on: {
							input: function (e) {
								e.target.composing || (t.copy_text = e.target.value)
							}
						}
					}), t._v(" "), n("p", [t._v(t._s(t.$t("gift.direct_detail")))]), t._v(" "), t._l(t.invitation_data.amplop_account_number, (function (e, i) {
						return n("ul", {
							key: i,
							staticClass: "bank-list"
						}, [n("li", [t._v(t._s(e.bank_name))]), t._v(" "), n("li", [n("b", [t._v(t._s(e.account_number))]), t._v(" "), n("b-link", {
							staticClass: "clip-btn",
							attrs: {
								"data-clipboard-text": e.account_number
							},
							on: {
								click: function (o) {
									return t.copyStringToClipboard(e.account_number)
								}
							}
						}, [n("b-icon", {
							attrs: {
								icon: "files"
							}
						})], 1)], 1), t._v(" "), n("li", [t._v("a/n " + t._s(e.account_name))])])
					}))] : t._e()], t._v(" "), n("b-overlay", {
						attrs: {
							show: t.load_payment,
							rounded: "",
							opacity: "0.6",
							"spinner-small": "",
							"spinner-variant": "primary"
						}
					}, ["qris" == t.form.payment_method ? n("b-button", {
						attrs: {
							type: "submit",
							variant: "success",
							block: "",
							pill: ""
						}
					}, [t._v(t._s(t.$t("gift.make_gift")))]) : t._e()], 1)], 2)]], 2)], 2)
				}), [], !1, null, "126e3c29", null);
			e.default = component.exports
		},
		654: function (t, e, o) {
			"use strict";
			o(25), o(27), o(43), o(53);
			var n = o(18);
			e.a = {
				data: function () {
					return {
						choose_section: null,
						loading_background_section: !1,
						has_exist_background: [],
						section: {
							target: "",
							image: null,
							overlay_color: "#FFFFFF",
							overlay_opacity: 3
						},
						section_edit: {
							target: "",
							image: null,
							overlay_color: "#FFFFFF",
							overlay_opacity: 3
						},
						list_of_section: []
					}
				},
				mounted: function () {
					this.getlistBackgroundSection()
				},
				watch: {
					list_of_section: {
						handler: function (t) {
							var e = this;
							this.has_exist_background = [], t.map((function (t) {
								e.has_exist_background.push(t.target)
							})), this.applyBackgroundSection()
						},
						deep: !0
					}
				},
				computed: {
					invitation_id: function () {
						return this.$store.state.invitation.invitation_data._id
					}
				},
				methods: {
					getlistBackgroundSection: function () {
						var t = this;
						return Object(n.a)(regeneratorRuntime.mark((function e() {
							var o;
							return regeneratorRuntime.wrap((function (e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, t.$axios.get("".concat("https://api.our-wedding.link/", "background_section/").concat(t.invitation_id));
									case 2:
										o = e.sent, console.log(o), t.list_of_section = o.data.data;
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})))()
					},
					addBackgroundSection: function () {
						null != this.choose_section && (this.section.target = this.choose_section, this.$bvModal.show("add_background_section"))
					},
					saveBackgroundSection: function () {
						var t = this;
						return Object(n.a)(regeneratorRuntime.mark((function e() {
							var o, n, _;
							return regeneratorRuntime.wrap((function (e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t.loading_background_section = !0, e.prev = 1, console.log(t.section), (o = new FormData).append("target", t.section.target), o.append("overlay_color", t.section.overlay_color), o.append("overlay_opacity", t.section.overlay_opacity), o.append("image", t.section.image), e.next = 10, t.$axios.$post("".concat("https://api.our-wedding.link/", "background_section"), o, {
											headers: {
												Authorization: "Bearer ".concat(t.$cookies.get("token"))
											}
										});
									case 10:
										n = e.sent, t.list_of_section.push(n.data), t.$bvModal.hide("add_background_section"), e.next = 20;
										break;
									case 15:
										e.prev = 15, e.t0 = e.catch(1), _ = e.t0.response ? e.t0.response.data.message : e.t0, e.t0.response && 413 == e.t0.response.status && alert("Oopss, Gambar yang kamu masukan terlalu besar, silahkan upload gambar dibawah 1.5mb."), alert("ERROR on save background section : ".concat(_));
									case 20:
										t.loading_background_section = !1;
									case 21:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 15]
							])
						})))()
					},
					openEditBackgroundSection: function (section) {
						this.section_edit = section, this.$bvModal.show("edit_background_section")
					},
					updateBackgroundSection: function () {
						var t = this;
						return Object(n.a)(regeneratorRuntime.mark((function e() {
							var o, n;
							return regeneratorRuntime.wrap((function (e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t.loading_background_section = !0, e.prev = 1, console.log(t.section), (o = new FormData).append("target", t.section_edit.target), o.append("overlay_color", t.section_edit.overlay_color), o.append("overlay_opacity", t.section_edit.overlay_opacity), o.append("image", t.section_edit.image), e.next = 10, t.$axios.$post("".concat("https://api.our-wedding.link/", "background_section/").concat(t.section_edit._id), o, {
											headers: {
												Authorization: "Bearer ".concat(t.$cookies.get("token"))
											}
										});
									case 10:
										n = e.sent, t.$bvModal.hide("edit_background_section"), console.log(n.data), t.list_of_section = n.data, e.next = 19;
										break;
									case 16:
										e.prev = 16, e.t0 = e.catch(1), alert("ERROR on update background section");
									case 19:
										t.loading_background_section = !1;
									case 20:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 16]
							])
						})))()
					},
					deleteBackgroundSection: function (t) {
						var e = this;
						return Object(n.a)(regeneratorRuntime.mark((function o() {
							var n;
							return regeneratorRuntime.wrap((function (o) {
								for (;;) switch (o.prev = o.next) {
									case 0:
										if (!0 === confirm("Ingin menghapus background ini?")) {
											o.next = 2;
											break
										}
										return o.abrupt("return");
									case 2:
										return o.prev = 2, o.next = 5, e.$axios.$delete("".concat("https://api.our-wedding.link/", "background_section/").concat(t), {
											headers: {
												Authorization: "Bearer ".concat(e.$cookies.get("token"))
											}
										});
									case 5:
										n = o.sent, e.list_of_section = n.data, o.next = 12;
										break;
									case 9:
										o.prev = 9, o.t0 = o.catch(2), alert("ERROR on delete background section");
									case 12:
									case "end":
										return o.stop()
								}
							}), o, null, [
								[2, 9]
							])
						})))()
					},
					convertColor: function (t, e) {
						return "rgba(" + parseInt(t.slice(-6, -4), 16) + "," + parseInt(t.slice(-4, -2), 16) + "," + parseInt(t.slice(-2), 16) + "," + e + ")"
					},
					applyBackgroundSection: function () {
						var t = this,
							e = "";
						this.list_of_section.map((function (o) {
							console.log(o, "data background section"), console.log($("#quote"), "element background "), e += "\n        ".concat(o.target, " {\n          background-image: url(").concat("https://api.our-wedding.link/", "uploads/").concat(o.image, ") !important;\n          background-size: cover;\n          background-position: 50% 50%;\n          box-shadow: inset 2000px 0 0 0 ").concat(t.convertColor(o.overlay_color, o.overlay_opacity / 10), ";\n        }\n        ")
						})), $("#backgroundSectionCSS").remove(), console.log(e, $(".content-layout"), "Update backgroundSectionCSS!"), $(".content-layout").append('\n        <style id="backgroundSectionCSS">\n        '.concat(e, "\n        </style>\n        "))
					}
				}
			}
		},
		692: function (t, e, o) {
			var content = o(739);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(100).default)("2ac988cd", content, !0, {
				sourceMap: !1
			})
		},
		693: function (t, e, o) {
			var content = o(741);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(100).default)("7c6ea576", content, !0, {
				sourceMap: !1
			})
		},
		737: function (t, e, o) {
			t.exports = o.p + "img/pay_money.18b5b10.svg"
		},
		738: function (t, e, o) {
			"use strict";
			o(692)
		},
		739: function (t, e, o) {
			var n = o(99)(!1);
			n.push([t.i, "#copy-input[data-v-126e3c29]{opacity:0;margin-bottom:-30px;position:absolute}.bank-list[data-v-126e3c29]{padding-top:10px;margin-top:10px;border-top:1px solid #eee}.bank-list[data-v-126e3c29]:first-child{border-top:none}.bank-list li[data-v-126e3c29]{list-style:none}#pay.float[data-v-126e3c29]{position:fixed;z-index:99;right:10px;top:60px}#pay .pay-stick[data-v-126e3c29]{text-align:center;padding:40px}#pay .pay-btn[data-v-126e3c29]{width:60px;height:60px;border-radius:50%;text-align:center;display:flex;justify-content:center;align-items:center;background-color:#23cba7;font-size:12px}#pay .pay-btn img[data-v-126e3c29]{width:60%}", ""]), t.exports = n
		},
		740: function (t, e, o) {
			"use strict";
			o(693)
		},
		741: function (t, e, o) {
			var n = o(99)(!1);
			n.push([t.i, ".popover{max-width:200px}.popover .popover-body{font-size:12px}", ""]), t.exports = n
		}
	}
]);
