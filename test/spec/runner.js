/* global define */
define([
    // All your tests go here.
    'spec/config-spec',
    'spec/controllers/static-pages-controller-spec'
], function () {
    'use strict';

    window.console = window.console || function() {}; // protect from barfs
    window.notrack = true; // don't track
    

    // Set up Mocha with custom Blanket.js reporter.
    mocha.reporter(function (_reporter) {
        // Updated for Mocha 1.15.1 integration.
        // See: https://github.com/alex-seville/blanket/pull/356
        var blanketReporter = function (runner) {
            // Listeners.
            runner.on("start",  function () { blanket.setupCoverage(); });
            runner.on("suite",  function () { blanket.onModuleStart(); });
            runner.on("test",   function () { blanket.onTestStart(); });
            runner.on("test end", function (test) {
                blanket.onTestDone(test.parent.tests.length, test.state === 'passed');
            });
            runner.on("end",    function () {
                blanket.onTestsDone();
                $("#blanket-main").removeClass("hidden").show("fast");
                $("html, body").animate({ scrollTop: 0 });
            });

            _reporter.call(this, runner);
        };

        blanketReporter.prototype = _reporter.prototype;

        return blanketReporter;
    }(mocha._reporter));

    blanket.beforeStartTestRunner({
        callback: function () {
            (window.mochaPhantomJS || mocha).run();
        }
    });


    window.mocha.run(); // kickoff the runner
});