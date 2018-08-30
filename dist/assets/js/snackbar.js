// Snackbar

! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
  function b(a) {
    return void 0 !== a && null !== a
  }
  a(document).ready(function() {
    a("body").append("<div id=snackbar-container/>")
  });
  var c = {
    events: {},
    on: function(a, b) {
      this.events[a] = this.events[a] || [], this.events[a].push(b)
    },
    off: function(a) {
      this.events[a] && delete this.events[a]
    },
    emit: function(a, b) {
      this.events[a] && this.events[a].forEach(function(a) {
        a(b)
      })
    }
  };
  a(document).on("click", "[data-toggle=snackbar]", function() {
    a(this).snackbar("toggle")
  }).on("click", "#snackbar-container .snackbar", function() {
    a(this).snackbar("hide")
  }), a.snackbar = function(d) {
    if (b(d) && d === Object(d)) {
      var e, f = !1;
      d = Object.assign({}, a.snackbar.defaults, d), b(d.id) ? a("#" + d.id).length ? e = a("#" + d.id) : (e = a("<div/>").attr("id", "" + d.id).attr("class", "snackbar"), f = !0) : (d.id = "snackbar" + Date.now(), e = a("<div/>").attr("id", d.id).attr("class", "snackbar"), f = !0);
      var g = e.hasClass("snackbar-opened");
      b(d.style) ? (g ? e.attr("class", "snackbar snackbar-opened " + d.style) : e.attr("class", "snackbar " + d.style), e.attr("data-style", d.style)) : g ? e.attr("class", "snackbar snackbar-opened") : e.attr("class", "snackbar"), d.htmlAllowed = !!b(d.htmlAllowed) && d.htmlAllowed, d.timeout = b(d.timeout) ? d.timeout : 3e3, e.attr("data-timeout", d.timeout), d.content = d.htmlAllowed ? d.content : a("<p>" + d.content + "</p>").text(), b(d.onClose) && c.on(d.id, d.onClose), b(d.htmlAllowed) && e.attr("data-html-allowed", d.htmlAllowed), b(d.content) && (e.find(".snackbar-content").length ? e.find(".snackbar-content").html(d.content) : e.prepend("<span class=snackbar-content>" + d.content + "</span>"), e.attr("data-content", d.content)), f ? e.appendTo("#snackbar-container") : e.insertAfter("#snackbar-container .snackbar:last-child"), b(d.action) && "toggle" == d.action && (d.action = g ? "hide" : "show");
      var h = Date.now();
      e.data("animationId1", h), setTimeout(function() {
        e.data("animationId1") === h && (b(d.action) && "show" != d.action ? b(d.action) && "hide" == d.action && (e.removeClass("snackbar-opened"), c.emit(d.id), c.off(d.id)) : e.addClass("snackbar-opened"))
      }, 50);
      var i = Date.now();
      return e.data("animationId2", i), 0 !== d.timeout && setTimeout(function() {
        e.data("animationId2") === i && (e.removeClass("snackbar-opened"), c.emit(d.id), c.off(d.id))
      }, d.timeout), e
    }
    return !1
  }, a.snackbar.defaults = {}, a.fn.snackbar = function(c) {
    if (void 0 !== c) {
      var d = {};
      if (this.hasClass("snackbar")) return d = {
        id: this.attr("id"),
        content: a(this).attr("data-content"),
        style: a(this).attr("data-style"),
        timeout: parseInt(a(this).attr("data-timeout")),
        htmlAllowed: a(this).attr("data-html-allowed")
      }, "show" !== c && "hide" !== c && "toggle" != c || (d.action = c), a.snackbar(d);
      b(c) && "show" !== c && "hide" !== c && "toggle" != c || (d = {
        content: a(this).attr("data-content"),
        style: a(this).attr("data-style"),
        timeout: a(this).attr("data-timeout"),
        htmlAllowed: a(this).attr("data-html-allowed")
      }), b(c) && (d.id = this.attr("data-snackbar-id"), "show" !== c && "hide" !== c && "toggle" != c || (d.action = c));
      var e = a.snackbar(d);
      return this.attr("data-snackbar-id", e.attr("id")), e
    }
  }
});