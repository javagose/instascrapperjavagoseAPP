'use strict';

describe('instaPage.post module', function() {
  beforeEach(module('instaPage.post'));

  describe('post service', function() {
    it('should return current post', inject(function(post) {
       expect('1').toEqual('1');
    }));
  });
});