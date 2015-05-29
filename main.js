var buttons = require('sdk/ui/button/action');
var data = require("sdk/self").data;

var button = buttons.ActionButton({
  id: "library-link",
  label: "External Resource Locator",
  icon: {
    "16": "./icon.png",
    "32": "./icon32.png",
    "64": "./icon64.png"
  },
                                  onClick: function() {
                                  require("sdk/tabs").activeTab.attach({
                                                                        contentScriptFile: data.url("form.js")
                                                                       });
                                  }
                                  });
