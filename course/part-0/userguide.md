This guide is written to help you get started using the TMC plugin for Qt Creator.

## Setting up the working environment

### Prerequisites for running the TMC Qt Creator plugin are:

1. User has Java Runtime installed
2. User has the executable `tmc-langs-cli` `.jar` file located on their hard drive
3. User has the Qt Creator IDE installed.

### Retrieving the tmc-langs-cli .jar file

We will be using the `tmc-langs-cli` `.jar` file for testing projects locally before they are submitted to be tested at the TMC server.  

Please visit the [maven testmycode](http://maven.testmycode.net/nexus/content/repositories/snapshots/fi/helsinki/cs/tmc/tmc-langs-cli/) directory for `tmc-langs-cli`.  
From the newest SNAPSHOT directory, download the `tmc-langs-cli` `.jar` file that does not have "sources" in it's file name.  
You should be looking for for something such as `/0.7.7-SNAPSHOT/tmc-langs-cli-0.7.7-20171213.095142-15.jar`.  
Store the file in a convenient place, as we will be using it later when setting up the plugin.

### Linux 

You can download and install Qt Creator either from [qt.io](https://www.qt.io/) or install the package using the package manager of your distribution.

### Windows

You can download and install Qt Creator from [qt.io](https://www.qt.io/).

## Getting started

### Overview

All the functionality related to the TMC plugin for Qt Creator can be found in the dropdown menu named `TestMyCode`.

### Logging in

If you are running the plugin for the first time, you will need to enter the address to the TMC server and logging in
using your TMC username and password using the _login menu_. All other TestMyCode menu options will remain unavailable until you do so.

### Setting up

Once you have logged in, you will be able to enter the _settings menu_ to set up your workspace.   
To set up your workspace, please select your organization and the course you are participating in.  
Next, choose your project folder (this is where your exercises will be downloaded) and locate the `tmc-langs cli` `.jar` file on your hard drive.  
If you wish to tweak the exercise update interval, feel free to do so.

### Downloading and configuring exercises

After setting up your workspace, you are now ready to download the exercises your course has available.

Once you have downloaded and configured the exercises, you are ready to start coding!

### Testing and submitting exercises

You may test your code locally at any time using the _Test project_ option.  
If your code passes the required local tests, you will be prompted to submit your code to be tested serverside.  
If you wish to refactor your code before submitting, you can simply press "Cancel" and submit your code manually or trough local testing at a later time.  

## Getting started, but with pictures

### Menu view

This is what you should see the first time you start up Qt Creator with the TMC plugin.  
Before logging in, further options in the menu will be grayed out and the _settings menu_ will be unavailable.

![First time menu view](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out.jpg)

### Login window

Logging on to the TMC server is the first and only thing you are able to do at this point.  
You will stay logged on until you choose to log out from the _settings menu_.  
Your username will be stored locally, however there is no reason to log out inbetween coding sessions.

![Login window](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out_logging_in.jpg)

### Settings window

The _Organization_ dropdown menu will contain a list of available organizations. You should choose the one that is offering the course that you are taking.  
The _Current Course_ dropdown menu will contain a list of available courses. You should choose the one that you have enrolled in.  
The _Project folder_ option is where the directory with your downloaded exercises will be located.
The _TMC.jar location_ is where you stored your `TMC-langs-cli.jar`.  
The TMC plugin will check for new or updated exercises in the background.  
The _Update interval_ option will allow you to tweak the interval to your liking.

![Settings window](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out_settings_window.jpg)

### Download window

Tick the exercises you wish to download.

![Download window](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out_download_window.jpg)

### Download pane

This is where you can monitor the exercise download progress. The window will close on it's own when the downloads have finished.

![Download pane](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out_download_pane.jpg)

### Configuring downloaded projects

Once the project downloads have finished, the plugin will automatically open all the downloaded exercise projects. You are required to configure your downloaded projects.  
The last exercise in the list will open in the _Configure project_ view, the rest you will need to configure manually.

![Configure project](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out_configure_project.jpg)

### Unconfigured project

As you can see, the project for Exercise 2 is unconfigured after loading.  
You may click the link in the _Mode manager_ to configure the project.  
Alternatively you can configure your unconfigured projects by clicking the _Projects_ button in the menu above the _Mode manager_.

![Unconfigured project](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out_exercise_2_unconfigured.jpg)

### Configured active project

You are able to choose your active project using the _Mode manager_ as shown.  
Testing will be done to the project that is active at time.  
Shown below is Exercise 1 as the active project.

![Configured active project](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out_exercise_1_configured_and_active.jpg)

### Tested and ready to submit

We have successfully tested our project locally, which may now be submitted to be tested on the TMC server.  
The _TMC Results_ pane shows you the results of your local testing, passed/failed tests and points attached for the exercise.  
Please note that the local tests only show the points expected.  
Points will not be awarded until tests run and pass server side.

![Tested and ready to submit](https://github.com/TestMyQt/Qt-CreatorTMC/blob/master/documentation/images/starting_out_exercise_1_tested_ready_to_submit.jpg)












