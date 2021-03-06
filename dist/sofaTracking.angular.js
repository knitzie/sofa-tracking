/**
 * sofa-tracking - v0.7.1 - Wed Feb 04 2015 18:17:49 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
'use strict';

angular.module('sofa.tracking', ['sofa.core'])

.factory('trackingService', ["$window", "$http", "configService", function($window, $http, configService) {
    return new sofa.tracking.TrackingService($window, $http, configService);
}]);
}(angular));
