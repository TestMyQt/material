// Create header anchor links

var anchorForId = function(id){
  var anchor = document.createElement("a");
  anchor.className = "header-link";
  anchor.href      = "#" + id;
  return anchor;
}

var linkifyAnchors = function(level, containingElement) {
  var headers = containingElement.getElementsByTagName("h"+level);
  for(var h=0; h<headers.length; h++){
    var header = headers[h];

    if( typeof(header.id) !== "undefined" && header.id !== "" )
      var header_link = anchorForId(header.id);
      containingElement.replaceChild(header_link, header)
      header_link.appendChild(header);
  }
};

document.onreadystatechange = function(){
  if(this.readyState === "complete"){
    var contentBlock = document.getElementsByClassName("post-content")[0]
    for(var level=1; level<=6; level++)
      linkifyAnchors(level, contentBlock);
  }
}
