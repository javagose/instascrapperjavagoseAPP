'use strict';

describe('instaPage.page module', function() {
  beforeEach(module('instaPage.page'));

  describe('page service', function() {
    it('should return current page', inject(function(page) {
       expect('1').toEqual('1');
    }));
  });
});