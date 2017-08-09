'use strict';

angular.module('instaPage.version', [
  'instaPage.version.interpolate-filter',
  'instaPage.version.version-directive'
])

.value('version', '0.2');
