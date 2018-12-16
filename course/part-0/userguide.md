---
layout: page
title: Installation
permalink: /install
---

THIS GUIDE IS OUT OF DATE, UPDATE!

This guide is written to help you get started using the TMC plugin for Qt Creator.

## Current bugs, issues and fixes: 

**13/06/2018** NB! If you have issues with SSL during login, please make sure that you have OpenSSL 1.0 installed and in your `LD_LIBRARY_PATH`. On some platforms OpenSSL 1.1 is not compatible with Qt
{: .note}

**11/06/2018** NB! After downloading and installing Qt 5.11, please do not update it during the duration of this BETA course as doing so will overwrite our plugin install and will require a reinstall
{: .note}

## Setting up the working environment

### Linux 

- Install development tools (`g++`, `make`, etc.) for your distribution.
  - Ubuntu/Debian: `sudo apt install build-essential`
- To run graphical applications you need to install the development libraries for OpenGL.
  - Ubuntu/Debian: `sudo apt install mesa-common-dev libgl1-mesa-dev`
- (Install libssl1.0 development package)
  - Ubuntu 16.04: `sudo apt install libssl-dev`
  - Ubuntu 18.04/Debian: `sudo apt install libssl1.0-dev`
- You need to download and install Qt 5.11 and Qt Creator 4.6.2 with the online installer from [qt.io](https://www.qt.io/download-qt-installer)
- Remember where you installed Qt
- Download [qtcreator-tmc-linux-v1.0.zip](https://github.com/TestMyQt/Qt-CreatorTMC/releases/download/v1.0/qtcreator-tmc-linux-v1.0.zip).
- Copy/move the `.so` files extracted from the `qtcreator-tmc-linux-v1.0.zip` to the following path: `$QT_INSTALL_DIRECTORY/Tools/QtCreator/lib/qtcreator/plugins/`
- Now lauch Qt Creator to start the course
  - Optional but highly recommended: If you want to enable automatic syntax checking and linting, you need to enable the `ClangCodeModel` plugin with `Help -> About Plugins -> search for ClangCodeModel` and restart Qt Creator. You can change the settings in `Tools -> Options -> C++ -> Code Model`.

### Windows

If you are using Windows and have no means of working on this course using a Linux machine, please contact us ASAP on #qt-mooc @ Freenode

### macOS

- Install [XCode](http://developer.apple.com/xcode/) from AppStore.
- You need to download and install Qt 5.11 with the online installer from [qt.io](https://www.qt.io/download-qt-installer)
- Install [Qt Creator 4.7.0-beta2](http://download.qt.io/snapshots/qtcreator/4.7/4.7.0-beta2/2224/qt-creator-opensource-mac-x86_64-4.7.0-beta2_2224.dmg)
- Remember where you installed Qt Creator
- Download [qtcreator-tmc-macos-v1.0.zip](https://github.com/TestMyQt/Qt-CreatorTMC/releases/download/v1.0/qtcreator-tmc-macos-v1.0.zip).
- Copy/move the `libTestMyCode.dylib` file extracted from the `qtcreator-tmc-macos-v1.0.zip` to the following path: `$QT_INSTALL_DIRECTORY/Qt Creator App/Contents/Plugins/`
- Now lauch Qt Creator to start the course

## Getting started

### Overview

All the functionality related to the TMC plugin for Qt Creator can be found in the dropdown menu named `TestMyCode`.

### Logging in

If you are running the plugin for the first time, you will need to log in using your TMC username and password using the _login menu_.
All other TestMyCode menu options will remain unavailable until you do so.

### Setting up

Once you have logged in, you will be able to enter the _settings menu_ to set up your workspace.   
To set up your workspace, please select the organization 'Helsingin Yliopisto' and the course 'UI Application Development with Qt and QML'.  
The chosen 'Project directory' location is where the exercises are downloaded.   
If you wish to tweak the exercise update interval, feel free to do so.

### Downloading and configuring exercises

After setting up your workspace, you are now ready to download the exercises your course has available.

Once you have downloaded and configured the exercises, you are ready to start coding!

### Testing and submitting exercises

You may test your code locally at any time using the _Test project_ option.  
If your code passes the required local tests, you will be prompted to submit your code to be tested serverside.  
If you wish to refactor your code before submitting, you can simply press "Cancel" and submit your code manually or through local testing at a later time.  

## Getting started, but with pictures

### Menu view

This is what you should see the first time you start up Qt Creator with the TMC plugin.  
Before logging in, further options in the menu will be grayed out and the _settings menu_ will be unavailable.

![First time menu view](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out.jpg)

### Login window

Logging on to the TMC server is the first and only thing you are able to do at this point.  
You will stay logged on until you choose to log out from the _settings menu_.  
Your username will be stored locally, however there is no reason to log out inbetween coding sessions.

![Login window](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out_logging_in.jpg)

### Settings window

The _Organization_ dropdown menu will contain a list of available organizations. You should choose the one that is offering the course that you are taking.  
The _Current Course_ dropdown menu will contain a list of available courses. You should choose the one that you have enrolled in.  
The _Project folder_ option is where the directory with your downloaded exercises will be located.
The TMC plugin will check for new or updated exercises in the background.  
The _Update interval_ option will allow you to tweak the interval to your liking.

![Settings window](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out_settings_window.jpg)

### Download window

Tick the exercises you wish to download.

![Download window](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out_download_window.jpg)

### Download pane

This is where you can monitor the exercise download progress. The window will close on it's own when the downloads have finished.

![Download pane](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out_download_pane.jpg)

### Configuring downloaded projects

Once the project downloads have finished, the plugin will automatically open all the downloaded exercise projects. You are required to configure your downloaded projects.  
The last exercise in the list will open in the _Configure project_ view, the rest you will need to configure manually.

![Configure project](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out_configure_project.jpg)

### Unconfigured project

As you can see, the project for Exercise 2 is unconfigured after loading.  
You may click the link in the _Mode manager_ to configure the project.  
Alternatively you can configure your unconfigured projects by clicking the _Projects_ button in the menu above the _Mode manager_.

![Unconfigured project](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out_exercise_2_unconfigured.jpg)

### Configured active project

You are able to choose your active project using the _Mode manager_ as shown.  
Testing will be done to the project that is active at time.  
Shown below is Exercise 1 as the active project.

![Configured active project](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out_exercise_1_configured_and_active.jpg)

### Tested and ready to submit

We have successfully tested our project locally, which may now be submitted to be tested on the TMC server.  
The _TMC Results_ pane shows you the results of your local testing, passed/failed tests and points attached for the exercise.  
Please note that the local tests only show the points expected.  
Points will not be awarded until tests run and pass server side.

![Tested and ready to submit](https://raw.githubusercontent.com/TestMyQt/Qt-CreatorTMC/master/documentation/images/starting_out_exercise_1_tested_ready_to_submit.jpg)












