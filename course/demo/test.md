---
layout: page
title: Demo page
permalink: /demo
qmlweb: true
---

This is a note for the material. 
{: .note}

**Note**: this is a longer note for the material! Do not write bad code. The widget will segfault if the heap gets toppled.
{: .note}

{% capture borderimage %}
import QtQuick 2.0

BorderImage {
    width: 180; height: 180
    border { left: 30; top: 30; right: 30; bottom: 30 }
    horizontalTileMode: BorderImage.Stretch
    verticalTileMode: BorderImage.Stretch
    source: "{{ "/assets/images/part-2/borderimage.png" | absolute_url }}"
}
{% endcapture %}
{% include editor.html id="borderimage" name="BorderImage.qml" code=borderimage %}

# Mouse demo

To enable mouse interaction with elements, `MouseArea` can be used. It's an invisible rectangular item that can capture mouse events and can be nested into an element like so:

{% capture mousedemo %}
import QtQuick 2.0

Rectangle {
    width: 100; height: 100
    color: 'green'

    MouseArea {
        anchors.fill: parent
        onClicked: parent.color = 'red'
    }
}
{% endcapture %}

{% include editor.html id="mousehandling" name="MouseHandling.qml" code=mousedemo %}

# Image demo

Images can include urls.

{% capture imagedemo %}


import QtQuick 2.0

Image {
    source: "{{ "/assets/images/qt.png" | absolute_url }}"
}

{% endcapture %}

{% include editor.html id="image" name="Image.qml" code=imagedemo %}

### Generic mouse events using the left mouse button

By default `MouseArea` reacts to the left mouse button and signals `onClicked`. To set `MouseArea` react to other types of buttons, set the `acceptedButtons` property with desired [`Qt::MouseButton`](http://doc.qt.io/qt-5/qt.html#MouseButton-enum) flag. Multiple flags can be combined with the `|` (or) operator. To access the currently pressed buttons, the `&` (and) operator can be used with the property `pressedButtons`.

In addition to the convenient `onClicked` handler, there are other handlers such as `onPressed`, `onWheel` or `onPositionChanged` that make it possible to handle more specific mouse events.

When emitted, many `MouseArea` signals pass in a `mouse` parameter that contains information about the mouse event, such as the position, button type and any key modifiers.


