'use strict';

describe('instaPage.version module', function() {
  beforeEach(module('instaPage.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.2');
    }));
  });
});
