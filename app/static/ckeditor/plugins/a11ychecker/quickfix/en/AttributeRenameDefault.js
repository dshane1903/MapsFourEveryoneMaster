/*
 Copyright (c) 2014-2016, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){CKEDITOR.plugins.a11ychecker.quickFixes.get({langCode:"en",name:"AttributeRename",callback:function(b){function a(a){b.call(this,a)}a.prototype=new b;a.prototype.constructor=a;a.prototype.getProposedValue=function(){var a=this.issue.element;return a.getAttribute(this.attributeTargetName)||a.getAttribute(this.attributeName)||""};a.prototype.lang={};CKEDITOR.plugins.a11ychecker.quickFixes.add("en/AttributeRenameDefault",a)}})})();