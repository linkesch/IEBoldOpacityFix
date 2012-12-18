IE Bold Opacity Fix
===================

It is a known issue, that IE's alpha opacity ruins bold text.
This problem occures especially in Internet Explorer 8 running on Windows XP.

EXAMPLE: http://www.linkesch.sk/IEBoldOpacityFix/

The origianl solution was found here: http://jszen.blogspot.sk/2005/04/ie-bold-text-opacity-problem.html

This little piece of code, IE Bold Opacity Fix, just finds all elements with IE's aplha opacity and sets their backgrounds to parents' background colors.
If parent's background color isn't a solid color, but IE's filter gradient, the background will be set to transparent gradient.
Those two tricks will prevent MSIE8 bug in rendering bold text on alpha opacity.


PREREQUISITES: jQuery


INSTALLATION:

1. Download jquery.IEBoldOpacityFix.js from 
2. Insert <script src="jquery.IEBoldOpacityFix.js" type="text/javascript"></script> to <head>    


AUTHOR:

Pavel Linkesch
linkesch.sk
@linkesch