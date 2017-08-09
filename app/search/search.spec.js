'use strict';

describe('instaPage.search module', function() {
  beforeEach(module('instaPage.search'));

  describe('search service', function() {
    it('should return current search', inject(function(search) {
      expect('1').toEqual('1');
    }));
  });
});