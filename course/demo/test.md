---
layout: page
title: Demo page
permalink: /demo
qmlweb: true
---

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

[Image](https://doc.qt.io/qt-5/qml-qtquick-image.html) type displays an image from an URL specified in the `source` property. `Image` type can handle Qt supported URLs and image types (PNG, JPEG, SVG, ...).

{% capture image %}
import QtQuick 2.0

Image {
    width: 130; height: 100
    source: "{{ "/assets/images/qt.png" | absolute_url }}"
}

{% endcapture %}

{% include editor.html id="image-demo" name="ImageDemo.qml" code=image %}

The source image can naturally be smaller or bigger than the `Image` item. With the `fillMode` property, you can choose the strategy used when painting the image inside the item:

- `Image.Stretch` - the image is scaled to fit (default)
    
{% capture stretch %}
import QtQuick 2.0

Image {
    width: 130; height: 100
    source: "{{ "/assets/images/qt.png" | absolute_url }}"
}
{% endcapture %}

{% include editor.html id="image-stretch" name="Stretch.qml" code=stretch %}

- `Image.PreserveAspectFit` - the image is scaled uniformly to fit without cropping

{% capture preserveaspectfit %}
import QtQuick 2.0

Image {
    width: 130; height: 100

    fillMode: Image.PreserveAspectFit
    
    source: "{{ "/assets/images/qt.png" | absolute_url }}"
}
{% endcapture %}
{% include editor.html id="image-preserveaspectfit" name="PreserveAspectFit.qml" code=preserveaspectfit %}

- `Image.PreserveAspectCrop` - the image is scaled uniformly to fill, cropping if necessary. The property `clip` needs to be se to `true` as without it, the item might paint outside its bounding rectangle even if the `fillMode` is set to `PreserveAspectCrop`.

{% capture preserveaspectcrop %}
import QtQuick 2.0

Image {
    width: 130; height: 100
    
    fillMode: Image.PreserveAspectCrop
    clip: true
    
    source: "{{ "/assets/images/qt.png" | absolute_url }}"

}
{% endcapture %}
{% include editor.html id="image-preserveaspectcrop" name="PreserveAspectCrop.qml" code=preserveaspectcrop %}

- Image.Tile - the image is duplicated horizontally and vertically

{% capture tile %}
import QtQuick 2.0

Image {
    width: 130; height: 100
    
    fillMode: Image.Tile
    horizontalAlignment: Image.AlignLeft
    verticalAlignment: Image.AlignTop
    
    source: "{{ "/assets/images/qt.png" | absolute_url }}"
}
{% endcapture %}
{% include editor.html id="image-tile" name="Tile.qml" code=tile %}

- Image.TileVertically - the image is stretched horizontally and tiled vertically

{% capture tilevertically %}
import QtQuick 2.0

Image {
    width: 130; height: 100
    
    fillMode: Image.TileVertically
    verticalAlignment: Image.AlignTop
    
    source: "{{ "/assets/images/qt.png" | absolute_url }}"
}
{% endcapture %}
{% include editor.html id="image-tile-vertically" name="TileVertically.qml" code=tilevertically %}

- Image.TileHorizontally - the image is stretched vertically and tiled horizontally

{% capture tilehorizontally %}
import QtQuick 2.0

Image {
    width: 130; height: 100

    fillMode: Image.TileHorizontally
    verticalAlignment: Image.AlignLeft
    
    source: "{{ "/assets/images/qt.png" | absolute_url }}"
}
{% endcapture %}
{% include editor.html id="image-tile-horizontally" name="TileHorizontally.qml" code=tilehorizontally %}

- Image.Pad - the image is not transformed

{% capture pad %}
import QtQuick 2.0

Image {
    width: 130; height: 100
    fillMode: Image.Pad
    source: "{{ "/assets/images/qt.png" | absolute_url }}"
}
{% endcapture %}

{% include editor.html id="image-pad" name="Pad.qml" code=pad %}

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


