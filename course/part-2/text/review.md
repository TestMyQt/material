# Review

## Sami

### Part 2

#### 2.01

- 'Value Type and Identity type' is as a heading for the second time, first appearing in 1.02. Is it intentional to have the identical heading twice or should this second one talk more about Identity types in special and the first one about value types? Now I kind of feel like it's best to read them both in succession to get the idea.

- One of the things that I've run into with QObjects is the multiple inheritance problems. Could it be a good idea to address the fact that QObject subclassing is not very compatible with some multiple inheritance models when using signals and slots. Might save someone from refactoring in the future :)

- The property system part is very information packed, but I feel like it might be better to give the reader a hint what it can be useful in, as at this point the material has not talked about the Qt GUI systems at all. Property system can of course be used in other cases, but to me at least it seems that it's most common usage is the GUI-systems so some explanation about this could illuminate it to the reader?

- Exercise 01: reflection.cpp and testobject.cpp are not included in the src.pro
- Exercise 01: getObjectClassName instructions do not reflect the test. The output should be synced between the tests and the instruction. 
- In the getObjectProperties "valueName" should probably be "value" or "propertyValue"

- Exercise 02: StudentRegistry.cpp explanation of expelDivisibleStudents is somewhat vague on what it should return and what expelling means to the class.

#### 2.02

- There could be a link to the Observer pattern (Wikipedia for example) for the people who are not familiar with the definition.
- I think that the Event loop part is slightly vague, it does not explain the thing enough for a person who is not familiar with it to understand the idea. Maybe an external link here too?
- To what does Jan's comment in Signals subchapter link to? I don't see any information that's not relevant, maybe deleted text?

- I feel like the signals assignment is too easy. It could be improved by having to use different connect overloads or looking into some features of signal/slot system like the sender() function?
- Assignment also passes the tests for some reason when i threw it in a recursive loop accidentally. It seems like the same bug that I noticed earlier where the system says that it passes if the tests crash, but as I submitted it to the server it seems to take quite a lot of server time to produce an error.

#### 2.03 

- Conceptually not much so say, important and basic needed stuff.

- Heading typo: "The Dangling Pointer Probelm". 
- The dangling pointer problem might be a good heading to go through QSharedPointer and QScopedPointer too in some iteration of the course?

- Exercise 04: Destructable and parenting cpp files are not added on the src.pro by default.
- Exercise 04: The assignment has good concepts, I think it might benefit from some example code for using them. Maybe in the next iteration of the course or something. 
