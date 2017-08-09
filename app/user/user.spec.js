"use strict";

describe("instaPage.search api service", function () {
  var userService, httpBackend;

  beforeEach(module("instaPage.search"));

  beforeEach(inject(function (_userService_, $httpBackend) {
    userService = _userService_;
    httpBackend = $httpBackend;
  }));

  it("should do something", function () {
    httpBackend.whenGET("http://localhost:8080/instagram/getUser.php?username=walidbjm").respond({
        data: {
                userName: "walidbjm"
              }      
    });
    userService.getUserInfo("walidbjm").then(function(subreddits) {
      expect(username).toEqual("walidbjm");
    });
    httpBackend.flush();
  });

});