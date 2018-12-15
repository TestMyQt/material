# Review for part 4


## Sami

- The exercise names are not in the same format as the previous exercises. 

## 4.01

- The text contains lot's of term definitions, having outlined definitions or a table for delegates, roles etc. could improve readability for the reader.
- The test in the first exercise checks explicitly for "qrc:/icons/qt_logo.png" for the fileurl, even though just "icons/qt_logo.png" would be correct too?
- There's a typo in the concurrency example: `onMessageReceived: worker.sendMessage({"user": user, "message": message, "model": messageModel)` is missing the closing brace for the JSON
- I feel like just continuing the same project without having tests on TMC works fine in this part as the functioning of the actions is pretty easy to verify and the peer reviewing should be quite easy.

## 4.02

- "Inn addition" in the first sentence
- "ÒbjectModel" has a runaway ` over the O on the third sentence instead on the front of the term. This causes the text and code parts to be incorrectly formatted.
- TitleDelegate.qml is missing from the tmc package, the project for XMLModel does not work because of this as the test file is also missing. This needs to be fixed ASAP as the students are not able to complete the exercise.
- DelegateModel hyperlink in the text links to XmlListModel
