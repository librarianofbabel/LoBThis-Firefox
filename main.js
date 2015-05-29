var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "library-link",
  label: "External Resource Locator",
  icon: {
    "16": "./icon.png",
    "32": "./icon32.png",
    "64": "./icon64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
    var contentWindow = window.BrowserApp.selectedBrowser.contentWindow;
    var tabdocument = contentWindow.document;
    var bodytext = tabdocument.getElementsByTagName("BODY")[0];
    var formext = tabdocument.createElement("form");
    formext.setAttribute("method", "POST");
    formext.setAttribute("action", "http://libraryofbabel.info/resourcelocator.cgi");
    formext.setAttribute("target","_blank");
    
    var hiddenField = tabdocument.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "extension");
    hiddenField.setAttribute("value", bodytext.innerHTML);
    
    formext.appendChild(hiddenField);
    tabdocument.body.appendChild(formext);
    formext.submit();
}
