(function(w) {
    'use strict';

    function noop() {}

    w.llamamall = {
        ForumHood: noop,
        uri: ''
    };
    var _llamamallForum = w.top.llamamallForum;
    var _llamamallForumHood = w.top.llamamallForumHood;

    if (_llamamallForumHood) {
        var popNavi = function (_location, _action) {
            var uri = _location.url;
            uri = $.trim(uri);
            var uriAgainst = _llamamallForumHood.uri;

            // console.log(uri + ' !== ' + uriAgainst, RELATIVE_PATH);
            if (uri && uri !== uriAgainst) {
                uri = uri.replace(RELATIVE_PATH, '');
                _llamamallForum.$scope.$apply(function () {
                    // _llamamallForum.$location.path(uri, false);
                });
            } else {
                _llamamallForum.$scope.$apply(function () {
                    // _llamamallForum.$location.path(uriAgainst, false);
                });
            }
        };

        $(window).on('action:popstate', function (_action, _location) {
            popNavi(_location, _action);
        });

        $(window).on('action:ajaxify.start', function (_action, _location) {
            popNavi(_location, _action);
        });

        $(window).on('action:ajaxify.end', function () {
            _llamamallForum.$lScope.windowHeight = _llamamallForum.height = document.body.clientHeight + 'px';
            _llamamallForum.$lScope.$digest();
        });
    }
})(window);
