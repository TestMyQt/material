# Review

## Sami

### Part 3 

#### Part 3.01

- Jan has a comment on the topic "Prototyping with Quick UI projects and qmlscene" that says that the qmlscene tool is apparently deprecated? I looked at the current snapshot documentation page for qmlscene and it does not mention anything about it? *J: For now I just removed the comment, let's take out the subchapter all together if it really is deprecated at some point*

- The translation comment part was very interesting new information to me professionally.

#### Part 3.02

- As the text states itself, this is quite a heavy chapter to read. I'm not sure how much you'd forget instantly, if you're completely new to QML. Maybe some simple scoping/visual parent exercise in the middle could give the student a pause from reading that would help.

- I did not know about Qt.binding() function, that explains a lot!

#### Part 3.03

- I feel like in the BorderImage example, seeing the result of the example code would make it easier to understand. Of course the student will try it out later, but when reading the text, it feels like bit confusing concept without the image to see how the image is streched/tiled. Maybe a gif or something.

- In the Text Component part "Generally explicitly setting the size is unoptimal because it causes a layout re-calculcation, so set it if you need to." I think it should be "so set it _only_ if you need to."; unoptimal <-> suboptimal and re-calculcation <-> recalculation. *J: Changed*

- In the exercise it would feel a bit more like a real frame if the window size of the program would be tied to the image size too. So when the window is scaled the image+border would fit.

#### Part 3.04

- In the FocusScope example the text does not fit the 'lessImportant' input as it's width is set to 200, maybe default should be the same 300 as on the first line and the difference made with gray color or something.
- Idea of FocusScope is a bit hard to grasp, but I think it might have more to do with the complexity of the implementation than the text. 

- HocusFocus example instructs the user to use KeyNavigation property even though the text uses the Keys system. This is confusing.
- The rectangle navigation test in the same exercise does not test the navigation, but pressing the tab again and it's broken: `var rects = Tmc.getAllObjects(grid, "Rectangle");` gives also the TextField elements so the correct element to check is [2] (this is done in the tab changes focus test too). This also causes the submission to fail on the server.
- Also QtQuick version in the FocusGrid is set at QtQuick 2.9 that the server does not recognize and gives an error.
- I feel like naming the rectangles with their positions in the grid would be better conduct to show for the student?
- The second exercise feels a bit repetitive after the first one, maybe these could have been combined in some way?

#### Part 3.05

- New versions of Qt creator like to advice on using explicit JavaScript comparison operator '===' instead of the '==' in the comparisons. The material seems to prefer == in many cases.  
- Exercise 07 does not include MouseHandling.qml in the src pro by default.
- Exercise 08 wheel.angleDelta needs magic numbers for the wanted 10% scaling, but seems like in Qt5 it's at least the same magic number on both MacOS and Windows

#### Part 3.06

- InputHandlers were interesting to me. I'd like to see an exercise of them.

#### Part 3.07

- It felt like this too could use a small exercise to test out the positioners, especially as the next chapter shows alternative way and it has an exercise.

#### Part 3.08

- It felt that this chapter had no apparent issues at all from the students' point of view. The exercise was well instructed.

#### Part 3.09

- StackView would benefit from a visualization to make it more understandable
- The problem of using View components with anchors is mentioned when talking about the StackView component, but maybe it could be emphasized more, as I think it doesn't work with any of the view components? Especially after the last chapter was about anchors.
- I don't feel that I get a clear view about the Container component from the text. After reading I'm not sure what use case I should use it for.
- Right now the exercise is still missing.

#### Part 3.10

- The difference between grouped properties and value type properties is bit confusing when discussing the possibilities of alias definitions.
- The exercise comments in the chapter have more content than the ones in the exercise itself. Maybe not a big issue, but the ones from the chapter could be more helpful in the exercise too.

#### Part 3.11

- The Shapes are important, but I'm not sure if the target audience of this course knows about how OpenGL operates or what are the vendor extensions. I think it might be better to either elaborate a bit more, or simplify the resource management information.
- Also more information about how the QPainter and other approaches work might be in order if this subchapter wants to be useful in itself.
