/* global define, describe, it, should */
define(['config'], function (config) {
    'use strict';

    describe('Config', function () {
        it('should be actual', function() {
            expect(config.version).to.equal('0.0.1');
        });
    });
});
