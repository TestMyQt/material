"use strict";

// Create header anchor links

var anchorForId = function(id){
  var anchor = document.createElement("a");
  anchor.className = "header-link";
  anchor.href      = "#" + id;
  return anchor;
}

var headingOffsets = [];
var linkifyAnchors = function(level, containingElement) {
  var headers = containingElement.getElementsByTagName("h"+level);
  for(var h=0; h<headers.length; h++){
    var header = headers[h];

    if (typeof(header.id) !== "undefined" && header.id !== "")
      var header_link = anchorForId(header.id);
      containingElement.replaceChild(header_link, header)
      header_link.appendChild(header);

      // Calculate heading offset for highlight
      headingOffsets[header.id] = scrollTop(header)
  }
};

document.onreadystatechange = function(){
  if(this.readyState === "complete"){
    var contentBlock = document.getElementsByClassName("post-content")[0]

    for(var level=1; level<=6; level++)
      linkifyAnchors(level, contentBlock);

    // Check whether we have a table of contents
    if (!document.getElementById(tocId)) {
      return;
    }

    highlightOnScroll();

    if(window.addEventListener) {
      window.addEventListener('scroll', highlightOnScroll, false);
    } else if (window.attachEvent) {
      window.attachEvent('onscroll', highlightOnScroll);
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  var names = document.getElementsByClassName("names")[0]
  if (!names) return;

  [].slice.call(names.children).sort(function(a, b) {
    return 1 - Math.ceil(Math.random() * 100) % 3;
  }).forEach(function(val, index) {
    names.appendChild(val);
  });
});

// Setup table of contents

// Get element offset
function scrollTop(el) {
  el = el.getBoundingClientRect();
  return el.top + window.scrollY
}

var timeout;
var tocId = "markdown-toc"
var activeClassName = 'toc-active'

// This will toggle toc-active class with list headings
var highlightOnScroll = function(e) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
     var scrollElement = document.scrollingElement || document.documentElement;
     var top = scrollElement.scrollTop;
     var highlighted, closest = Number.MAX_VALUE;
     var headingId = "";

     // find the element that is most likely active
     for (var key in headingOffsets) {
       var currentClosest = Math.abs(headingOffsets[key] - top);
       if (currentClosest < closest) {
         headingId = key;
         closest = currentClosest;
       }
     }

     if (headingId === "") {
       return;
     }

     var tocRoot = document.getElementById(tocId);
     var activeEl = tocRoot.getElementsByClassName(activeClassName)[0];
     if (activeEl) {
       activeEl.classList.remove(activeClassName);
     }

     // Select the active / highlighted
     var highlighted = document.getElementById(tocId + '-' + headingId);

     if (!highlighted) {
         return;
     }

     highlighted.classList.add(activeClassName);
    }, 50);
}

