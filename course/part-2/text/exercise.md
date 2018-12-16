# Exercise for Part 2 - Directory Browser

This exercise does not test any functionality of your application, you can just submit it after you think you are ready! It will be graded based on peer review.
{: .note}

Complete the implementation of a trivial directory browser. You are provided with a simple browser QML UI and your task is to complete the implementation. Comment in the lines in the UI, when you add the required functionality. The UI shows a directory name and number of file entries and a list of all entries. If the gird at the top is clicked, the application should sort the files to descending or ascending order, depending on the current order. Clicking on the file will show the files in that folder or open a text editor, if the file is a text file.

* Derive `QObject` to implement the requested functionality.
* Instantiate and expose your object to the **root context** of the QML engine in `main.cpp` line 11. Hint: Use [`setContextProperty()`](https://doc.qt.io/qt-5/qqmlcontext.html#setContextProperty)
* When a program is started, read at least file names and sizes of a directory, e.g. home, into a container. Note that the container must be a string list, so concatenate the name and size to a single string. 

The QML UI expects the following API from your `QObject` sub-class.

* There must be two properties: `dirName` of type `String` and `filesInDir` of type int. The values should correspond the real values of the current directory. 
* Provide the slot functions to be called from the UI.
* `model()` returns the container.
* `fileContent()` returns the content of a text file as String.
* `sort()` will sort entries in ascending or descending order. 
* `entryChanged(QString)` is called from the UI. You should check, whether the entry is a directory or a file. In the former case, you should read new entries from the new directory and in the latter case, you should read content of the file and use `fileContent()` to return the content to the UI.

The UI is heavily based on signals. 

* `dirNameChanged()` indicates the directory name has changed, i.e. the user has clicked on the directory name on the UI.
* Similarly, `filesInDirChanged()` indicates that the `filesInDir` value has changed.
* `fileContentChanged()` is similar, indicating the user has clicked on the file name in the UI and new data has been read from the file.
* `dataChanged()` notifies the container content has changed.
* `entryClicked(QString)` signal is emitted from the UI. You should handle this by checking the type of the entry and by reading either a directory content to the container or file content to the String, used in the UI. 

