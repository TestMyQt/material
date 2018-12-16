# Review for part 4


## Sami

- The exercise names are not in the same format as the previous exercises. 

### 4.01

- The text contains lot's of term definitions, having outlined definitions or a table for delegates, roles etc. could improve readability for the reader.
- The test in the first exercise checks explicitly for "qrc:/icons/qt_logo.png" for the fileurl, even though just "icons/qt_logo.png" would be correct too?
- There's a typo in the concurrency example: `onMessageReceived: worker.sendMessage({"user": user, "message": message, "model": messageModel)` is missing the closing brace for the JSON
- I feel like just continuing the same project without having tests on TMC works fine in this part as the functioning of the actions is pretty easy to verify and the peer reviewing should work with these changes.

### 4.02

- "Inn addition" in the first sentence
- "ÒbjectModel" has a runaway ` over the O on the third sentence instead on the front of the term. This causes the text and code parts to be incorrectly formatted.
- TitleDelegate.qml is missing from the tmc package, the project for XMLModel does not work because of this as the test file is also missing. This needs to be fixed ASAP as the students are not able to complete the exercise.
- DelegateModel link in the text links to XmlListModel
- I feel like having an exersice about the DelegateModelGroups would be good addition too, as it took a while for me to understand in what kind of situation you should use them instead of packages. The text is clear after you understand the concept, but i would have gotten it faster if I'd tried to implement something with it f. ex. some switch structure that toggles different type of images in a single view.

### 4.03

- Same kind of missing \` after the PathView is messing the structure up in the beginning of this subchapter too.
- The second paragraph has some grammatical trouble. I think it could benefit from going through the formatting of the text again.
- PictureFrame with sections (4/8) exercise doesn't really specify how should you group the images to the sections and the second instruction is unclear. I feel like this exercise needs to be explained better.
- Should the exercise 4/8 omit the changes done in the exercise 3/8 as it seems like after we have the sections on the images, there should not also be two ListViews in the program?
- 5/8 exercise has trouble with the definition of "current image" as we have not created any kind of selection to the ListView in the previous exercises. currentItem is there, but it's not well defined in the context of the exercise yet.

