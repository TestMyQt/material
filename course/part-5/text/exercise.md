# Exercise for Part 5 - Image Application

Image application allows user to add and capture images for viewing. The application keeps images in memory and does not need to store images persistently. Many building blocks can be re-used from previous exercises and you are welcome to do so, if you wish. 

* The image model must be derived from `QAsbtractListModel`. The model stories only image urls, which are used by the application. The model must be implemented in a QML extension plugin and registered as singleton. It may be easier to start with the QML model and then use a C++ model, which is instantiated in the main() function. 

* The application itself must use Qt Quick Controls 2 and be based on the `StackView`. The main view shows the images from the model. Show image thumbnails e.g. in 100x100 pixel resolution. If the user clicks on the image, show it on the top of the view area in another view. 

* Add a file dialog to add images to the model.

* Add functionality to use camera to add images to the model.

* Implement at least three views: the view to show the images (main view), the view to show one image, and a camera view. Add a `ToolBar`and `ToolButtons` to navigate between the views. Push a new view, e.g. a camera view to the stack view and pop it, when the user navigates back to the main view, using tool buttons.

****
