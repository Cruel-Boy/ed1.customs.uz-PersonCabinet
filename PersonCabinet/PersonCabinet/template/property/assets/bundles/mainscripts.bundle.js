function addLoadEvent(a) {
    var b = window.onload;
    "function" != typeof window.onload ? window.onload = a : window.onload = function() {
        b(), a()
    }
}

function loadTracking() {
    ! function(a, b, c, d, e, f, g) {
        a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
            (a[e].q = a[e].q || []).push(arguments)
        }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = "https://www.google-analytics.com/analytics.js", g.parentNode.insertBefore(f, g)
    }(window, document, "script", 0, "ga"), ga("create", trackingId, "auto"), ga("send", "pageview")
}

function skinChanger() {
    $(".right-sidebar .choose-skin li").on("click", function() {
        var a = $("body"),
            b = $(this),
            c = $(".right-sidebar .choose-skin li.active").data("theme");
        $(".right-sidebar .choose-skin li").removeClass("active"), a.removeClass("theme-" + c), b.addClass("active"), a.addClass("theme-" + b.data("theme"))
    })
}

function setSkinListHeightAndScroll() {
    var a = $(window).height() - ($(".navbar").innerHeight() + $(".right-sidebar .nav-tabs").outerHeight()),
        b = $(".right_menu");
    b.slimScroll({
        destroy: !0
    }).height("auto"), b.parent().find(".slimScrollBar, .slimScrollRail").remove(), b.slimscroll({
        height: a + "px",
        color: "rgba(0,0,0,0.4)",
        size: "3px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "3px"
    })
}

function setSkinListHeightAndScroll() {
    var a = $(window).height() - ($(".navbar").innerHeight() + $(".sidebar .user-info").outerHeight()),
        b = $(".sidebar .menu");
    b.slimScroll({
        destroy: !0
    }).height("auto"), b.parent().find(".slimScrollBar, .slimScrollRail").remove(), b.slimscroll({
        height: a + "px",
        color: "rgba(0,0,0,0.3)",
        size: "3px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "3px"
    })
}

function activateNotificationAndTasksScroll() {
    $(".navbar-right .dropdown-menu .body .menu").slimscroll({
        height: "254px",
        color: "rgba(0,0,0,0.3)",
        size: "3px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "3px"
    })
}

function customslimscroll() {
    $(".chat-widget").slimscroll({
        height: "300px",
        color: "rgba(0,0,0,0.4)",
        size: "3px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "3px"
    }), $(".chat-app .chat .chat-history").slimscroll({
        height: "400px",
        color: "rgba(0,0,0,0.5)",
        size: "4px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "0"
    }), $(".chat-app .people-list .chat-list").slimscroll({
        height: "550px",
        color: "rgba(0,0,0,0.5)",
        size: "4px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "0"
    })
}
if ("undefined" == typeof jQuery) throw new Error("jQuery plugins need to be before this file");
$.AdminCC = {}, $.AdminCC.options = {
    colors: {
        red: "#ec3b57",
        pink: "#E91E63",
        purple: "#ba3bd0",
        deepPurple: "#673AB7",
        indigo: "#3F51B5",
        blue: "#457fca",
        lightBlue: "#03A9F4",
        cyan: "#01b4ae",
        green: "#78b83e",
        lightGreen: "#8BC34A",
        yellow: "#ffe821",
        orange: "#FF9800",
        deepOrange: "#f83600",
        grey: "#9E9E9E",
        blueGrey: "#607D8B",
        black: "#000000",
        blush: "#F15F79",
        white: "#ffffff"
    },
    leftSideBar: {
        scrollColor: "rgba(0,0,0,0.5)",
        scrollWidth: "4px",
        scrollAlwaysVisible: !1,
        scrollBorderRadius: "0",
        scrollRailBorderRadius: "0"
    },
    dropdownMenu: {
        effectIn: "fadeIn",
        effectOut: "fadeOut"
    }
}, $.AdminCC.leftSideBar = {
    activate: function() {
        var a = this,
            b = $("body"),
            c = $(".overlay");
        $(window).on("click", function(d) {
            var e = $(d.target);
            "i" === d.target.nodeName.toLowerCase() && (e = $(d.target).parent()), !e.hasClass("bars") && a.isOpen() && 0 === e.parents("#leftsidebar").length && (e.hasClass("js-right-sidebar") || c.fadeOut(), b.removeClass("overlay-open"))
        }), $.each($(".menu-toggle.toggled"), function(a, b) {
            $(b).next().slideToggle(0)
        }), $.each($(".menu .list li.active"), function(a, b) {
            var c = $(b).find("a:eq(0)");
            c.addClass("toggled"), c.next().show()
        }), $(".menu-toggle").on("click", function(a) {
            var b = $(this),
                c = b.next();
            if ($(b.parents("ul")[0]).hasClass("list")) {
                var d = $(a.target).hasClass("menu-toggle") ? a.target : $(a.target).parents(".menu-toggle");
                $.each($(".menu-toggle.toggled").not(d).next(), function(a, b) {
                    $(b).is(":visible") && ($(b).prev().toggleClass("toggled"), $(b).slideUp())
                })
            }
            b.toggleClass("toggled"), c.slideToggle(320)
        }), a.setMenuHeight(), a.checkStatuForResize(!0), $(window).resize(function() {
            a.setMenuHeight(), a.checkStatuForResize(!1)
        }), Waves.attach(".menu .list a", ["waves-block"]), Waves.init()
    },
    setMenuHeight: function() {
        if (void 0 !== $.fn.slimScroll) {
            var a = $.AdminCC.options.leftSideBar,
                b = $(window).height() - ($(".legal").outerHeight() + $(".user-info").outerHeight() + $(".navbar").innerHeight()),
                c = $("");
            c.slimScroll({
                destroy: !0
            }).height("auto"), c.parent().find(".slimScrollBar, .slimScrollRail").remove(), c.slimscroll({
                height: b + "px",
                color: a.scrollColor,
                size: a.scrollWidth,
                alwaysVisible: a.scrollAlwaysVisible,
                borderRadius: a.scrollBorderRadius,
                railBorderRadius: a.scrollRailBorderRadius
            })
        }
    },
    checkStatuForResize: function(a) {
        var b = $("body"),
            c = $(".navbar .navbar-header .bars"),
            d = b.width();
        a && b.find(".content, .sidebar").addClass("no-animate").delay(1e3).queue(function() {
            $(this).removeClass("no-animate").dequeue()
        }), d < 1170 ? (b.addClass("ls-closed"), c.fadeIn()) : (b.removeClass("ls-closed"), c.fadeOut())
    },
    isOpen: function() {
        return $("body").hasClass("overlay-open")
    }
}, $.AdminCC.rightSideBar = {
    activate: function() {
        var a = this,
            b = $("#rightsidebar"),
            c = $(".overlay");
        $(window).on("click", function(d) {
            var e = $(d.target);
            "i" === d.target.nodeName.toLowerCase() && (e = $(d.target).parent()), !e.hasClass("js-right-sidebar") && a.isOpen() && 0 === e.parents("#rightsidebar").length && (e.hasClass("bars") || c.fadeOut(), b.removeClass("open"))
        }), $(".js-right-sidebar").on("click", function() {
            b.toggleClass("open"), a.isOpen() ? c.fadeIn() : c.fadeOut()
        })
    },
    isOpen: function() {
        return $(".right-sidebar").hasClass("open")
    }
};
var $searchBar = $(".search-bar");
$.AdminCC.search = {
    activate: function() {
        var a = this;
        $(".js-search").on("click", function() {
            a.showSearchBar()
        }), $searchBar.find(".close-search").on("click", function() {
            a.hideSearchBar()
        }), $searchBar.find('input[type="text"]').on("keyup", function(b) {
            27 == b.keyCode && a.hideSearchBar()
        })
    },
    showSearchBar: function() {
        $searchBar.addClass("open"), $searchBar.find('input[type="text"]').focus()
    },
    hideSearchBar: function() {
        $searchBar.removeClass("open"), $searchBar.find('input[type="text"]').val("")
    }
}, $.AdminCC.navbar = {
    activate: function() {
        var a = $("body"),
            b = $(".overlay");
        $(".bars").on("click", function() {
            a.toggleClass("overlay-open"), a.hasClass("overlay-open") ? b.fadeIn() : b.fadeOut()
        }), $('.nav [data-close="true"]').on("click", function() {
            var a = $(".navbar-toggle").is(":visible"),
                b = $(".navbar-collapse");
            a && b.slideUp(function() {
                b.removeClass("in").removeAttr("style")
            })
        })
    }
}, $.AdminCC.input = {
    activate: function() {
        $(".form-control").focus(function() {
            $(this).parent().addClass("focused")
        }), $(".form-control").focusout(function() {
            var a = $(this);
            a.parents(".form-group").hasClass("form-float") ? "" == a.val() && a.parents(".form-line").removeClass("focused") : a.parents(".form-line").removeClass("focused")
        }), $("body").on("click", ".form-float .form-line .form-label", function() {
            $(this).parent().find("input").focus()
        })
    }
}, $.AdminCC.select = {
    activate: function() {
        $.fn.selectpicker && $("select:not(.ms)").selectpicker()
    }
};
var edge = "Microsoft Edge",
    ie10 = "Internet Explorer 10",
    ie11 = "Internet Explorer 11",
    opera = "Opera",
    firefox = "Mozilla Firefox",
    chrome = "Google Chrome",
    safari = "Safari";
$.AdminCC.browser = {
    activate: function() {
        var a = this;
        "" !== a.getClassName() && $("html").addClass(a.getClassName())
    },
    getBrowser: function() {
        var a = navigator.userAgent.toLowerCase();
        return /edge/i.test(a) ? edge : /rv:11/i.test(a) ? ie11 : /msie 10/i.test(a) ? ie10 : /opr/i.test(a) ? opera : /chrome/i.test(a) ? chrome : /firefox/i.test(a) ? firefox : navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ? safari : void 0
    },
    getClassName: function() {
        var a = this.getBrowser();
        return a === edge ? "edge" : a === ie11 ? "ie11" : a === ie10 ? "ie10" : a === opera ? "opera" : a === chrome ? "chrome" : a === firefox ? "firefox" : a === safari ? "safari" : ""
    }
}, $(function() {
    $.AdminCC.browser.activate(), $.AdminCC.leftSideBar.activate(), $.AdminCC.rightSideBar.activate(), $.AdminCC.navbar.activate(), $.AdminCC.input.activate(), $.AdminCC.select.activate(), $.AdminCC.search.activate(), setTimeout(function() {
        $(".page-loader-wrapper").fadeOut()
    }, 50)
}), addLoadEvent(loadTracking);
var trackingId = "UA-30038099-6";
$(function() {
    skinChanger(), activateNotificationAndTasksScroll(), setSkinListHeightAndScroll(), customslimscroll(), $(window).resize(function() {
        setSkinListHeightAndScroll()
    })
});