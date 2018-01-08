/**
 * @file mip-bkmy-anchor 组件
 * @author
 */

define(function (require) {

    var customElement = require('customElement').create();
    var $ = require('jquery');
    customElement.prototype.firstInviewCallback = function () {

        var anchor = window.location.hash;
        if (anchor !== '') {
            var id = $(anchor).parent().prev().attr('id');
            $('#' + id).click();
            var strs = anchor.split('&');
            location.href = strs[0];
        }
    };
    return customElement;
});
