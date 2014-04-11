/* global define */
define([
    // All your tests go here.
    'spec/config-spec'
], function () {
    'use strict';

    window.console = window.console || function() {}; // protect from barfs
    window.notrack = true; // don't track
    window.mocha.run(); // kickoff the runner
});