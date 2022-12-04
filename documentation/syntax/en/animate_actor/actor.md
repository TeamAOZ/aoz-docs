# Actor

| Compatibility                                                                       |
| ----------------------------------------------------------------------------------- |
| ![](https://drive.google.com/uc?export=view\&id=1NbXQFq8\_hw18wZSmQiAaH8PEkx0iN0ue) |

Actor is one of the powerful graphical commands offered by the AOZ language. Actor allows:

* display sprites and scenery on the screen     But not only. Soon, you will also be able to manipulate your 3D objects, your robots, with the same ease.
* to manipulate the graphic elements of the screen with the mouse, the keyboard or the gamepad
* animate your characters very easily&#x20;
* apply a behavior to a played or unplayed character, like jumping or flying.
* associate events, such as the "click" of the mouse, with images
* move your images on the screen.&#x20;
* apply effects, like rotation, resizing...

But not only. Soon, you will also be able to manipulate your 3D objects, your robots, with the same ease.

### Parameters

* **index**: Index of the Actor
* _x_ (optional): Actor horizontal position on the screen. If not set, 0 by default
* _y_ (optional): Actor vertical position on the screen. if not set, 0 by default
* _z_ (optional): Actor depth position on the screen. if not set, 0 by default
* _startx_ (optional): Actor horizontal start position on the screen for a moving. If not set, the "x" position is used.
* _starty_ (optional): Actor vertical start position on the screen for a moving. If not set, the "y" position is used.
* _startz_ (optional): 3D Actor depth start position on the 3D scene for a moving. If not set, the "z" position is used.
* _endx_ (optional): Actor horizontal end position on the screen for a moving. If not set, the "x" position is used.
* _endy_ (optional): Actor vertical end position on the screen for a moving. If not set, the "y" position is used.
* _endz_ (optional): 3D Actor depth end position on the 3D scene for a moving. If not set, the "z" position is used.
* _image_ (optional): Index of the image of Actor.
* _video$_ (optional): Name of the video loaded by Load Asset used like an image for this Actor
* _videoplay_ (optional): Play the video associated at this actor. True by default
* _videoloop_ (optional): Play the video associated at this actor in loop. True by default
* _duration_ (optional): Length in milliseconds of the Actor moving. If not set, 1000 by default (1 second)
* _onchange$_ (optional): Name of the AOZ procedure to call when the Actor change (position, alpha, scale...)
* _transition$_ (optional): Name of the transition when the Actor moves. If not set, "linear" is used. Visit https
* _scale_ (optional): Modification of the Actor size in height and width. If not set, the last scaling value is used.
* _startscale_ (optional): Modification of the Actor start size in height and width for a Actor moving. If not set, the last scaling value is used.
* _endscale_ (optional): Modification of the Actor end size in height and width for a Actor moving. If not set, the last scaling value is used.
* _scalex_ (optional): Modification of the Actor size in width. If not set, the last horizontal scaling value is used.
* _startscalex_ (optional): Modification of the Actor start size in width for a Actor moving. If not set, the last horizontal scaling value is used.
* _endscalex_ (optional): Modification of the Actor end size in width for a Actor moving. If not set, the last horizontal scaling value is used.
* _scaley_ (optional): Modification of the Actor size in height. If not set, the last horizontal scaling value is used.
* _startscaley_ (optional): Modification of the Actor start size in height for a Actor moving. If not set, the last vertical scaling value is used.
* _endscaley_ (optional): Modification of the Actor end size in height for a Actor moving. If not set, the last vertical scaling value is used.
* _angle_ (optional): Modification of the Actor angle of rotation. If not set, the last angle is used.
* _startangle_ (optional): Modification of the Actor start angle of rotation for a Actor moving. If not set, the last angle value is used.
* _endangle_ (optional): Modification of the Actor end angle of rotation for a Actor moving. If not set, the last angle value is used.
* _anglex_ (optional): Modification of the 3D Actor X angle of rotation. If not set, the last angle is used.
* _startanglex_ (optional): Modification of the 3D Actor start X angle of rotation for a Actor moving. If not set, the last angle value is used.
* _endanglex_ (optional): Modification of the 3D Actor end X angle of rotation for a Actor moving. If not set, the last angle value is used.
* _angley_ (optional): Modification of the 3D Actor Y angle of rotation. If not set, the last angle is used.
* _startangley_ (optional): Modification of the 3D Actor start Y angle of rotation for a Actor moving. If not set, the last angle value is used.
* _endangley_ (optional): Modification of the 3D Actor end Y angle of rotation for a Actor moving. If not set, the last angle value is used.
* _anglez_ (optional): Modification of the 3D Actor Z angle of rotation. If not set, the last angle is used.
* _startanglez_ (optional): Modification of the 3D Actor start Z angle of rotation for a Actor moving. If not set, the last angle value is used.
* _endanglez_ (optional): Modification of the 3D Actor end Z angle of rotation for a Actor moving. If not set, the last angle value is used.
* _alpha_ (optional): Modification of the Actor alpha value. If not set, the last alpha value is used.
* _startalpha_ (optional): Modification of the Actor start alpha value for a Actor moving. If not set, the last alpha value is used.
* _endalpha_ (optional): Modification of the Actor end alpha value for a Actor moving. If not set, the last alpha is used.
* _skewx_ (optional): Modification of the Actor horizontal skewing. If not set, the last alpha value is used.
* _startskewx_ (optional): Modification of the Actor start horizontal skewing for a Actor moving. If not set, the last horizontal skewing value is used.
* _endskewx_ (optional): Modification of the Actor end horizontal skewing for a Actor moving. If not set, the last horizontal skewing value is used.
* _skewy_ (optional): Modification of the Actor vertical skewing. If not set, the last alpha value is used.
* _startskewy_ (optional): Modification of the Actor start vertical skewing for a Actor moving. If not set, the last vertical skewing value is used.
* _endskewy_ (optional): Modification of the Actor end vetical skewing for a Actor moving. If not set, the last vertical skewing value is used.
* _visible_ (optional): Set the Actor visibility. If not set, True by default is used.
* _spritesheet$_ (optional): Name of the spritesheet loaded with the Load Asset instruction to animate the Actor.
* _anim$_ (optional): Name of the animation provided by the spritesheet to play.
* _loopanim_ (optional): Set if the animation should play to the infinite, or not. If not set, False by default is used.
* _hotspot$_ (optional): Set the hot spot of the Actor. les valeurs suivantes sont acceptées
* _hotspotx_ (optional): Set the horizontal hot spot position of the Actor. If not set, 0 is used by default ( left ).
* _hotspoty_ (optional): Set the vertical hot spot position of the Actor. If not set, 0 is used by default ( top ).
* _onanimchange$_ (optional): Name of the AOZ procedure to call when the Actor animation change ( number of frame, state,...)
* _oncollision$_ (optional): Name of the AOZ procedure to call when the Actor enter in collision with an other object.
* _loopmove_ (optional): Set if the moving should play to the infinite, or not. If not set, False by default is used.
* _actionmove$_ (optional): Action for the moving. May be "play" (by default is not set) or "pause".
* _control$_ (optional): Set one or more controls that will allow the user to interact with the Actor (keyboard, mouse or joystick).
* _oncontrol$_ (optional): Name of the AOZ procedure to call when a control is activated for the Actor (keyboard, mouse or joystick).
* _hrev_ (optional): Set if the horizontal flipping of the Actor. If True, the Actor is flipped horizontaly. If not set, False by default is used.
* _vrev_ (optional): Set if the vertical flipping of the Actor. If True, the Actor is flipped verticaly. If not set, False by default is used.
* _leftlimit_ (optional): Set the left limitation for the Actor.
* _toplimit_ (optional): Set the top limitation for the Actor.
* _uplimit_ (optional): Alias of toplimit.
* _rightlimit_ (optional): Set the right limitation for the Actor.
* _bottomlimit_ (optional): Set the bottom limitation for the Actor.
* _downlimit_ (optional): Alias of bottomlimit.
* _onlimit$_ (optional): Name of the AOZ procedure to call when the Actor touch a limit.
* _lookat$_ (optional): Name of the object the actor has to look at. This can be the position of the mouse, another actor or a point on the screen.
* _auto$_ (optional): Defined an automatic movement of the actor. It uses the same parameters as for the Control$ property
* _onmouse$_ (optional): Name of the AOZ procedure that will be called at each mouse action on the actor.
* _onmouseclick$_ (optional): Name of the AOZ procedure that will be called at each mouse click on the actor.
* _onmousedblclick$_ (optional): Name of the AOZ procedure that will be called at each mouse doubleclick on the actor.
* _onmousedown$_ (optional): Name of the AOZ procedure that will be called at each mouse button down on the actor.
* _onmouseup$_ (optional): Name of the AOZ procedure that will be called at each mouse button up on the actor.
* _onmouseenter$_ (optional): Name of the AOZ procedure that will be called when the mouse pointer enters over of the actor.
* _onmouseexit$_ (optional): Name of the AOZ procedure that will be called when the mouse pointer outs over of the actor.
* _onkeypress$_ (optional): Name of the AOZ procedure that will be called at each key pressed.
* _onkeydown$_ (optional): Name of the AOZ procedure that will be called at each key down.
* _onkeyup$_ (optional): Name of the AOZ procedure that will be called at each key up.
* _oncontrollerconnect$_ (optional): Name of the AOZ procedure that will be called at each mouse doubleclick on the actor.
* _oncontrollerdisconnect$_ (optional): Name of the AOZ procedure that will be called at each mouse button down on the actor.
* _oncontrollerbutton$_ (optional): Name of the AOZ procedure that will be called at each mouse button up on the actor.
* _oncontrolleraxis$_ (optional): Name of the AOZ procedure that will be called at each mouse doubleclick on the actor.
* _oncontrollerdirection$_ (optional): Name of the AOZ procedure that will be called at each mouse button up on the actor.
* _enable_ (optional): Enables or disables an actor. If False, the Actor will still be displayed on the screen, but the controls, animations and mouse actions will be disabled.
* _Group$_ (optional): Assigns the actor to a custom group. A custom group can be assigned to several Actor. By example
* _collision_ (optional): Enables or disables all collisions with this actor. If False, no collision effects will be applied.
* _animplay_ (optional): Enabled or disables the current animation

***

![](https://drive.google.com/uc?export=view\&id=1c2KO0LJpvMS9X9CAGV6dOfciR7OWhdKA)
