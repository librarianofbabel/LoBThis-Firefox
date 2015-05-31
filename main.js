var buttons = require('sdk/ui/button/action');
var data = require("sdk/self").data;
var contextMenu = require("sdk/context-menu");
var self = require("sdk/self");

var menuItem = contextMenu.Item({
                                label: "Look for selected text in the Library of Babel",
                                context: contextMenu.SelectionContext(),
                                 contentScript: 'self.on("click", function () {' +
                                'var text = window.getSelection().toString();' +
                                'var formext = document.createElement("form");' +
                                'formext.setAttribute("method", "POST");' +
                                'formext.setAttribute("action", "http://libraryofbabel.info/resourcelocator.cgi");' +
                                'var hiddenField = document.createElement("input");' +
                                ' hiddenField.setAttribute("type", "hidden");' +
                                 'hiddenField.setAttribute("name", "extension");' +
                                ' hiddenField.setAttribute("value", window.getSelection().toString());' +
                                ' formext.appendChild(hiddenField);' +
                                ' document.body.appendChild(formext);' +
                                ' formext.submit();' +
                                '});',
                                image: self.data.url("icon-16.png")
                                });

var button = buttons.ActionButton({
  id: "library-link",
  label: "External Resource Locator",
                                //  icon: self.data.url("icon-16.png"),
 
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
                                  onClick: function() {
                                  require("sdk/tabs").activeTab.attach({
                                                                       contentScriptFile: data.url("form.js")
                                                                       });
                                  }
                                  });
