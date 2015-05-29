function getSelectedText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

 var bodytext = document.getElementsByTagName("BODY")[0];
 var formext = document.createElement("form");
 formext.setAttribute("method", "POST");
 formext.setAttribute("action", "http://libraryofbabel.info/resourcelocator.cgi");
 //formext.setAttribute("target","_blank");
 
 var hiddenField = document.createElement("input");
 hiddenField.setAttribute("type", "hidden");
 hiddenField.setAttribute("name", "extension");
 hiddenField.setAttribute("value", getSelectedText() || document.body.innerHTML); // take selected text OR bodytext
 
 formext.appendChild(hiddenField);
 document.body.appendChild(formext);
 formext.submit();

 
