
# Mouse Handling

To enable mouse interaction with elements, `MouseArea` can be used. It's an invisible rectangular item that can capture mouse events and can be nested into an element like so:

<script>
window.addEventListener("DOMContentLoaded", function () {
  var textarea = document.querySelector('#code textarea');
  var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true
  });

  var iframe = document.querySelector("#result iframe");
  iframe.addEventListener("load", function () {
    iframe.contentWindow.postMessage(textarea.value, "*");
  });

  var execute = function() {
    iframe.src = iframe.src;
  };

  textarea.addEventListener("change", execute);

  editor.on("change", function() {
    textarea.value = editor.getValue();
    execute();
  });

  execute();
});
</script>

<div id="code">
<textarea>
import QtQuick 2.0

Rectangle {
    width: 100; height: 100
    color: "green"

    MouseArea {
        anchors.fill: parent
        onClicked: parent.color = 'red'
    }
}
</textarea>
</div>

<div id="result">
  <iframe src="assets/html/runner.html"></iframe>
</div>

Now the logic of mouse handling is contained within the `MouseArea` item. This distinction is an important aspect of Qt Quick UIs, as this separates the input handling from visual presentations. This enables the visual items to be what ever the size they may be, but the input is only accepted within constraints defined in the input elements.

### Generic mouse events using the left mouse button

By default `MouseArea` reacts to the left mouse button and signals `onClicked`. To set `MouseArea` react to other types of buttons, set the `acceptedButtons` property with desired [`Qt::MouseButton`](http://doc.qt.io/qt-5/qt.html#MouseButton-enum) flag. Multiple flags can be combined with the `|` (or) operator. To access the currently pressed buttons, the `&` (and) operator can be used with the property `pressedButtons`.

In addition to the convenient `onClicked` handler, there are other handlers such as `onPressed`, `onWheel` or `onPositionChanged` that make it possible to handle more specific mouse events.

When emitted, many `MouseArea` signals pass in a `mouse` parameter that contains information about the mouse event, such as the position, button type and any key modifiers.


