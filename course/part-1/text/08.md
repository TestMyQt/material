## Object Communicating: Custom Events (P2 | 1,5h)

## Learning objectives

### Beginner

### Intermediate

* What is a custom event?
* What can be accomplished with Custom Events?
* What are spontaneous and synthetic events (created outside the app process or by sendEvent(), postEvent())?
* What are synchronous and asynchronous events (sendEvent(), postEvent())?
* What are event filters?
* When to use Signals/Slots, event handlers or event filters?

### Expert


***

## Course material content

### Custom events

### Spontaneous and synthetic events

### Synchronous and asynchronous events

### Event filters

Sometimes an object needs to look at, and possibly intercept, the events that are delivered to another object. For example, dialogs commonly want to filter key presses for some widgets; for example, to modify Return-key handling.

The QObject::installEventFilter() function enables this by setting up an event filter, causing a nominated filter object to receive the events for a target object in its QObject::eventFilter() function. An event filter gets to process events before the target object does, allowing it to inspect and discard the events as required. An existing event filter can be removed using the QObject::removeEventFilter() function.

When the filter object's eventFilter() implementation is called, it can accept or reject the event, and allow or deny further processing of the event. If all the event filters allow further processing of an event (by each returning false), the event is sent to the target object itself. If one of them stops processing (by returning true), the target and any later event filters do not get to see the event at all.

     bool FilterObject::eventFilter(QObject *object, QEvent *event)
     {
          if (object == target && event->type() == QEvent::KeyPress) {
               QKeyEvent *keyEvent = static_cast<QKeyEvent *>(event);
               if (keyEvent->key() == Qt::Key_Tab) {
                    // Special tab handling
                    return true;
               } else
                    return false;
           }
           return false;
     }

The above code shows another way to intercept Tab key press events sent to a particular target widget. In this case, the filter handles the relevant events and returns true to stop them from being processed any further. All other events are ignored, and the filter returns false to allow them to be sent on to the target widget, via any other event filters that are installed on it.

It is also possible to filter all events for the entire application, by installing an event filter on the QApplication or QCoreApplication object. Such global event filters are called before the object-specific filters. This is very powerful, but it also slows down event delivery of every single event in the entire application; the other techniques discussed should generally be used instead.

### Choosing between Signals/Slots, Event Handlers and Event Filters

***


## Instructions and description for the exercise of the topic

***

### Exhaustive reference material mentioned in this topic


### Further reading topics/links:

***
