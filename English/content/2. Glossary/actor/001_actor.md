
# Actor
<!--
@name: Actor
@description: Summary of the Actor parameters to display, animate and control images in 2D, 3D, videos, graphical texts. Actor is one of the most powerful graphics instructions in the AOZ language for graphics.
@tags: behavior,animation,design,graphic,sprite,character,movement,game,picture,image,show,display,moving,control,bob
@categories:
\-->
<div  class="compatibility"><span>Compatibility</span><img  src="https://doc.aoz.studio/assets/images/common/compatibility/aoz_logo.png"  valign="center"  alt="AOZ"  title="AOZ"  /></div>

Display, animate and control images in 2D, 3D, videos, as well as graphical texts. You will find many parameters below to do magical tricks.

## Syntax
<b>Basic syntaxes:</b>
> **Actor** actor_index, `Image` =  image_index, `X`= 100, `Y`= 50

## Examples
Some examples:
```basic
Actor "my_hero", Image$ = "magic"
Actor "enemy1", Image = 2
Actor 255, Image$ = "lucie"
Actor "my_hero", Image$ = "hero1", X = 200, Y = 300
Actor "space_ship", Image$ = "ship", Control$ = "keyboard"
Actor "enemy1", Image$="monster", StartX = 0, EndX = 320, StartY=0, EndY=50, Duration=10000
```

Little more complex examples:
```basic
// Using the default bitmap font for texts using Actor instruction and parameters:
Actor "text", X=950, Y=500, FontSize=96, Text$="Hello World!", StartScale=0.05, EndScale=1.5, Hotspot$="middle", Duration=3000
Wait Input
Actor "text", StartScale=-4, EndScale=1.5 // note that negative values will reverse the image
Wait Input
// Using Images:
Actor "image1", X=500, Y=880, Image$="magic", StartScaleX=0.1, EndScaleX=2, Hotspot$="middle", Duration=6000
Actor "image2", X=950, Y=880, Image$="magic", StartSkewX=0.1,  EndSkewX=2,  Hotspot$="middle", Duration=6000
Actor "image3", X=1400,Y=880, Image$="magic", StartScale=0.1,  EndScale=2,  StartAngle=1, EndAngle=270, Hotspot$="middle", Duration=6000
Actor "image4", Image$="ship", StartX=400, EndX=1200, Duration=2000, LoopMove=True, ReverseMove=True, AutoReverse$="horizontal"
```
## Parameters
( italic ) = Optional
|**Parameter**|**Type**|**Description**|
|---|---|---|
|**`Index`**|index|Index of the Actor|
|_`Visible`_|boolean|Set the Actor visibility. If not set, True by default is used.|
|_`Enable`_|boolean|If False, the Actor will still be displayed on the screen, but the controls, animations and mouse actions will be disabled.|
|_`Collision`_|boolean|Enables or disables all collisions with this actor. If False, no collision effects will be applied.|
|_`Group$`_|string|Assigns the actor to a custom group. A custom group can be assigned to several Actor. By example: "enemy", "bonus", "key"...|
|_`Behavior$`_|string|Apply one or more availables behaviors to the Actor. By example: "jump", "fly",...|
|_`UserData$`_|string|Value reserved for the developer. This is a data exclusive to the Actor and will be used specifically for the program.|
|**Position**|||
|_`X`_|integer|Actor horizontal position on the screen. If not set, 0 by default|
|_`Y`_|integer|Actor vertical position on the screen. if not set, 0 by default|
|_`Z`_|integer|Actor depth position on the screen. if not set, 0 by default|
|**Image**|||
|_`Image`_|index|Index of the image of Actor.|
|_`SpriteSheet$`_|string|Name of the spritesheet loaded with the `Load Asset` instruction to animate the Actor.|
|_`HotSpot$`_|string|Set the hot spot of the Actor. The supported values are : <ul><li>"top-left" (by default)</li><li>"top-middle"</li><li>"top-right"</li><li>"left"</li><li>"middle"</li><li>"right"</li><li>"bottom-left"</li><li>"bottom-middle"</li><li>"bottom-right"</li></ul>|
|_`HotSpotX`_|integer|Set the horizontal hot spot position of the Actor. If not set, 0 is used by default ( left ).|
|_`HotSpotY`_|integer|Set the vertical hot spot position of the Actor. If not set, 0 is used by default ( top ).|
|_`HRev`_|boolean|Set if the horizontal flipping of the Actor. If True, the Actor is flipped horizontaly. If not set, False by default is used.|
|_`VRev`_|boolean|Set if the vertical flipping of the Actor. If True, the Actor is flipped verticaly. If not set, False by default is used.|
|**Text**||(Cannot use Text and Image on the same Actor)|
|_`Text$`_|string|Text that will be displayed by the Actor as an image|
|_`FontName$`_|string|Name of the bitmap font that will be used to display the text. If no font is defined, the default font will be used.|
|_`FontSize`_|integer|Value of the font size. The font size by default will be used if this property is not defined.|
|_`FontSpacing`_|integer|Horizontal spacing between each character. A negative value is allowed. 0 (by default) is the normal spacing.|
|**Frontiers**|||
|_`LeftLimit`_|integer|Set the left limitation for the Actor.|
|_`TopLimit`_|integer|Set the top limitation for the Actor.|
|_`UpLimit`_|integer|Alias of `TopLimit`.|
|_`RightLimit`_|integer|Set the right limitation for the Actor.|
|_`BottomLimit`_|integer|Set the bottom limitation for the Actor.|
|_`DownLimit`_|nteger|Alias of `BottomLimit`.|
|**Video**|||
|_`Video$`_|string|Name of the video loaded by `Load Asset` used like an image for this Actor|
|_`VideoPlay`_|boolean|Play the video associated at this actor. True by default|
|_`VideoLoop`_|boolean|Play the video associated at this actor in loop. True by default|
|**Inputs**|||
|_`Control$`_|string|Set one or more controls that will allow the user to interact with the Actor (keyboard, mouse or joystick).|
|_`LookAt$`_|string|Name of the object the actor has to look at. This can be the position of the mouse, another actor or a point on the screen.|
|_`Auto$`_|string|Defined an automatic movement of the actor. It uses the same parameters as for the `Control$` property.|
|**Movements**|||
|_`StartX`_|integer|Actor horizontal start position on the screen for a moving. If not set, the "X" position is used.|
|_`StartY`_|integer|Actor vertical start position on the screen for a moving. If not set, the "Y" position is used.|
|_`StartZ`_|integer|3D Actor depth start position on the 3D scene for a moving. If not set, the "Z" position is used.|
|_`EndX`_|integer|Actor horizontal end position on the screen for a moving. If not set, the "X" position is used.|
|_`Endy`_|integer|Actor vertical end position on the screen for a moving. If not set, the "Y" position is used.|
|_`EndZ`_|integer|3D Actor depth end position on the 3D scene for a moving. If not set, the "Z" position is used.|
|_`Duration`_|integer|Duration (in milliseconds or 1000xseconds) of the automatic movement.  Default value is 1 second or 1000ms. If modified while an automatic movement is running, it will speed up or slow down the ongoing movement.|
|_`LoopMove`_|boolean or positive integer|Specifies if the automatic movement should play infinitely (True), only once (False), or for a finite number of times. False by default.|
|_`Transition$`_|string|Name of the transition when the Actor moves. If not set, "linear" is used. Read more here: <a href="https://createjs.com/demos/tweenjs/tween_sparktable" target="_new">https://createjs.com/demos/tweenjs/tween_sparktable</a>
|_`ActionMove$`_|string|Allows to  "play", "pause" or "reverse" the automatic movement. Default is "play".|
|_`ReverseMove$`_|boolean|Indicates if the automatic movement should go back and forth. False by default.|
|_`AutoReverse$`_|string|When **ReverseMove** is True, indicates on which axes the actor|;s image should be reversed. Possible values are "horizontal", "vertical", "both" or "none". Defaults is "none".|
|_`TimePosition`_|Integer|Allows to jump at a specific time during the automatic transformation.|
|**Animation**|||
|_`Anim$`_|string|Name of the animation set with the Actor Animation instruction, or provided by the `SpriteSheet$` property.|
|_`LoopAnim`_|boolean|Set if the animation should play to the infinite, or not. If not set, False by default is used.|
|_`AnimPlay`_|boolean|Enabled or disables the current animation.|
|**Scaling**|||
|_`Scale`_|float|Modification of the Actor size in height and width. If not set, the last scaling value is used.|
|_`ScaleX`_|float|Modification of the Actor size in width. If not set, the last horizontal scaling value is used.|
|_`ScaleY`_|float|Modification of the Actor size in height. If not set, the last horizontal scaling value is used.|
|**Rotation**|||
|_`Angle`_|integer|Modification of the Actor angle of rotation. If not set, the last angle is used.|
|**Opacity**|||
|_`Alpha`_|float|Modification of the Actor alpha value. If not set, the last alpha value is used.|
|**Skewing**|||
|_`SkewX`_|integer|Modification of the Actor horizontal skewing. If not set, the last skewing value is used.|
|_`SkewY`_|integer|Modification of the Actor vertical skewing. If not set, the last skewing value is used.|
|**Transformations**|||
|_`StartScale`_|float|Modification of the Actor start size in height and width for a Actor moving. If not set, the last scaling value is used.|
|_`EndScale`_|float|Modification of the Actor end size in height and width for a Actor moving. If not set, the last scaling value is used.|
|_`StartScaleX`_|float|Modification of the Actor start size in width for a Actor moving. If not set, the last horizontal scaling value is used.|
|_`EndScaleX`_|float|Modification of the Actor end size in width for a Actor moving. If not set, the last horizontal scaling value is used.|
|_`StartScaleY`_|float|Modification of the Actor start size in height for a Actor moving. If not set, the last vertical scaling value is used.|
|_`EndScaleY`_|float|Modification of the Actor end size in height for a Actor moving. If not set, the last vertical scaling value is used.|
|_`StartAngle`_|integer|Modification of the Actor start angle of rotation for a Actor moving. If not set, the last angle value is used|
|_`EndAngle`_|integer|Modification of the Actor end angle of rotation for a Actor moving. If not set, the last angle value is used.|
|_`StartAlpha`_|float|Modification of the Actor start alpha value for a Actor moving. If not set, the last alpha value is used.|
|_`EndAlpha`_|float|Modification of the Actor end alpha value for a Actor moving. If not set, the last alpha is used.|
|_`StartSkewX`_|integer|Modification of the Actor start horizontal skewing for a Actor moving. If not set, the last horizontal skewing value is used.|
|_`EndSkewX`_|integer|Modification of the Actor end horizontal skewing for a Actor moving. If not set, the last horizontal skewing value is used.|
|_`StartSkewY`_|integer|Modification of the Actor start vertical skewing for a Actor moving. If not set, the last vertical skewing value is used.|
|_`EndSkewY`_|integer|Modification of the Actor end vetical skewing for a Actor moving. If not set, the last vertical skewing value is used.|


## More on the Transformations: Intro

Automatic transformations concern the Actor|;s parameters that may have a Start and an End:

 - The X and Y position: **X, Y**
 - The scale: **Scale, ScaleX, ScaleY**
 - The angle of rotation: **Angle**
 - The skewing: **SkewX, SkewY**
 - The Transparency: **Alpha**

A transformation have a starting state (Start) up to a final state (end) at the speed defined by a duration in ms. (In reality, it is an interpolation "tweening" between the values of the parameters of Start and End). In other words the "Start" in the parameter define the starting state, the "End" the final state.

Example: the following line automatically moves Lucie from the X=100 position to the X=1000 position in 5 seconds or 5000 milliseconds (Duration).
```basic
Actor "lucie", Image$="lucie", StartX = 100, EndX = 1000, Duration = 5000
```

Note: if you specify a single "End" parameter the other parameters (like Angle, scale,…) will be frozen over the duration of the animation **_using their current_** value and not an "End" value that would have been previously given for another animation. So when you start an animation you have to think about redefining **_all_** the parameters that will vary (this is a slightly different philosophy from the other parameters of Actor that keep their previous call values with Actor).
<BR>

## Position in time
Each transformation has a duration (established by the Duration parameter) whose value corresponds to the time it takes to move from the starting state to the final state ("outbound" journey) or from the final state to the initial state ("return" journey).

Automatic transformations can be modified while they are in progress.

To do this, we simply make a new call to Actor specifying the parameter we want to modify.

The following code starts an animation and after 2 seconds, continues the animation in Y=100:
```basic
Actor "lucie", Image$="lucie", StartX = 100, EndX = 1000, Duration = 5000
Wait 2
Actor "lucie", Y = 100
```

The following code advances Lucie from (100,100) to (800,800) and 2 seconds later we freeze her Y position:

```basic
Actor "lucie", Image$="lucie", StartX = 100, EndX = 800, StartY = 100, EndY = 800, Duration = 5000
Wait 2
Actor "lucie", Y = Actor Y("lucie")
```

Notes:

-Modifying a parameter while a transformation is in progress is equivalent to putting the "Start" and the "End" of this parameter at the same value.

-If you modify one of the parameters that was precisely changing because of the transformation, this parameter then freezes.

-It is not possible to directly modify the "Start" and "End" of a parameter AND continue the current animation. In reality, defining an "End" will create a new transformation, as before.

If you activate the LoopMove parameter, it is easier to understand.

Below is a repeat of the 1st example but with LoopMove = TRUE. We see that after 2 seconds, Lucie starts her movement again in X but remains in Y = 100:

```basic
Actor "lucie", Image$="lucie", StartX = 100, EndX = 1000, Duration = 5000, LoopMove = true
Wait 2
Actor "lucie", Y = 100
```
On the other hand, if we redefine an "End" parameter it creates a new animation. In the code above, after 2 seconds of animation in X from 100 to 1000, a new animation is created. It goes from Y = 0 to Y = 500 from the current position in X of Lucie. The X position is fixed since the call to Actor is made without specifying EndX.
```basic
Actor "lucie", Image$="lucie", StartX = 100, EndX = 1000, Duration = 5000, LoopMove = true
Wait 2
Actor "lucie", EndY = 500
```
Apart from the parameters related to the transformation of an actor you can also modify HRev and VRev during animation. The following code modifies HRev (horizontal mirror) at the press of a key during Lucie|;s infinite movement:

```basic
Actor "lucie", Image$="lucie", StartX = 0, EndX = 1000, Duration = 4000, LoopMove = true
Do
	If Inkey$ Then Actor "lucie", HRev = !Actor IsHRev("lucie")
	Refresh
Loop
```
<BR>

## Changing the duration

It is possible during a transformation to change its duration. The effect obtained is that the transformation is played faster or slower.

```basic
Actor "lucie", Image$="lucie", StartX = 0, EndX = 1000, Duration = 4000, LoopMove = true
Wait 2
Actor "lucie", Duration = 1000
```

In the code below, Lucie does her transformation in 4 seconds but after 2 seconds, she accelerates and we change the duration of the total transformation to 1 second.

As after 2 seconds, it is at the X = 500 position, that is to say half the way, it will cover the last 500 X in half a second. She then completes her other animations in one second.

Changing Duration therefore changes the total duration and not the remaining duration of the animation.
<BR>

## LoopMove parameter

The LoopMove parameter allows you to play the animation in a loop, starting the animation again each time from the starting point.

The LoopMove parameter can be a boolean or an integer: The number of **_trips_** can be repeated either infinitely (LoopMove = True) or a n number of times (LoopMove = n).

If LoopMove is modified while the actor is being transformed, the new value of LoopMove is taken into account. For example, a transformation that was to be played only once (LoopMove = false) can be repeated indefinitely if you make a new call to Actor with LoopMove = true.

In the code below, Lucie repeats her movement endlessly until a key is pressed, after which she reaches her final state twice more before stopping permanently:
```basic
Actor "lucie", Image$="lucie", StartX = 400, EndX = 600, Duration = 1000, LoopMove = true
Wait Key
Actor "lucie", LoopMove = 2
```

Note: If we reset LoopMove to 0, or false, it has the same effect as setting it to 1: the animation continues one last time.
<BR>

## ReverseMove parameter

So far changing a parameter of an animation has little interest. But if we use the new ReverseMove parameter we will begin to understand the possibilities offered by this feature.

The ReverseMove parameter (also used in Actor Animation to create an animation), is a boolean and defines whether the transformation plays backwards once it reaches the final state, so it returns to the starting state.

The combined use of ReverseMove with LoopMove can give interesting effects.

In the case where LoopMove is not defined (so it is False), or if it is zero, the round trip takes place once:

```basic
Actor "lucie", Image$="lucie", StartX=0, EndX=500, Duration=2000, ReverseMove=True
```

If both LoopMove and ReverseMove are True, the round trip takes place indefinitely:

```basic
Actor "lucie", Image$="lucie", StartX=0, EndX=500, Duration=2000, ReverseMove=True, LoopMove=True
```

If LoopMove is worth an odd number, there will be one more go than returns:

```basic
Actor "lucie", Image$="lucie", StartX=0, EndX=500, Duration=2000, ReverseMove=True, LoopMove=3  
```

If LoopMove is worth an even number, there will be as many trips as returns:

```basic
Actor "lucie", Image$="lucie", StartX=0, EndX=500, Duration=2000, ReverseMove=True, LoopMove=4  
```

(If LoopMove is 2, it is equivalent to a round trip, and so it is the same as if LoopMove was false.)

Here|;s a code snippet for typical ReverseMove use: a Space Invaders style enemy move:

```basic
Actor "bee", Image$="bee-0", HotSpot$="top-middle", StartX=Actor Width("bee") / 2, EndX=Display Width - Actor Width("bee") / 2, Duration=4000, ReverseMove=True, LoopMove=True
Actor "ship", Image$="ship", HotSpot$="middle", Angle=-90, X=Display Width/2, Y=Display Height - Actor Width("ship") / 2, LeftLimit=0, RightLimit=Display Width, Control$="ArrowLeft: OffsetX=-10; ArrowRight: OffsetX=10"
```
<BR>

## AutoReverse$ parameter

The AutoReverse$ parameter is to be used when ReverseMove is set to True. It allows the image to be automatically reversed, horizontally and/or vertically, when the actor reaches the final state of the transformation or if he returns to the starting state.

(Internally, the actor|;s HRev and VRev values are changed.)

AutoReverse$ can take 4 different values. Each of the values has a few aliases:
|**Value**|**Alias**|**Meaning**|
|---|---|---|
|**"none"**|"" (empty string)|No image inversion. Default.|
|**"horizontal"**|"h"|Horizontal inversion|
|**"horizontal"**|"x"|Horizontal inversion|
|**"vertical"**|"v"|Vertical inversion|
|**"vertical"**|"y"|Vertical inversion|
|**"both"**|"hv"|Horizontal and Vertical inversion|
|**"both"**|"xy"|Horizontal and Vertical inversion|
|**"both"**|"*"|Horizontal and Vertical inversion|
|**"both"**|"all"|Horizontal and Vertical inversion|

<BR>
In this first example below, the plane goes back and forth ad infinitum. His image is reversed horizontally with each return and then restored with each trip:

```basic
Actor "ship", Image$="ship", StartX=100, EndX=600, Duration=1000, ReverseMove=True, LoopMove=True, AutoReverse$="horizontal"
```

In this second example, the plane goes back and forth diagonally. So we reverse its image in both directions:

```basic
Actor "ship", Image$="ship", StartX=100, EndX=700, StartY=100, EndY=700, Angle=45, Duration=2000, ReverseMove=True, LoopMove=True, AutoReverse$="both"
```

AutoReverse$ will typically be used when an enemy has an automatic movement from left to right. In this example, a "Tagada" goes back and forth. Its animation itself is reversed:

```basic
Actor Animation "walk-tagada", Sequence$ = "tagada-0, tagada-1, tagada-2, L"
Actor "tagada", Anim$="walk-tagada", StartX=150, EndX=500, Y=400, LoopMove=True, ReverseMove=True, Duration=1500, HRev=True, AutoReverse$="horizontal"
```
Note that the image of the "Tagada" is oriented to the left by we therefore set HRev to True when  defining the animation, which is not a problem when "Tagada" reaches its  "End"  or "Start" point.
<BR>

## ActionMove$ parameter

The ActionMove$ parameter is normally used to pause the transformation and resume it, with the values  "pause"  and "play".

A third value "reverse" reverses the direction of its current **_journey_** ( "retracing its steps"). If the animation was paused, it resumes.

ActionMove$="reverse" works independently of ReverseMove.

In this example, the "Tagada" goes back and forth. Pressing a key forces him to change direction immediately:
```basic
Actor Animation "walk-tagada", Sequence$ = "tagada-0, tagada-1, tagada-2, L"
Actor "tagada", Anim$="walk-tagada", EndX=500, StartX=150, Y=400, LoopMove=True, ReverseMove=True, Duration=2000, HRev=True, AutoReverse$="horizontal"
Do
	If Inkey$ Then Actor "tagada", ActionMove$="reverse"
	Refresh
Loop
```
<BR>

## TimePosition parameter

The TimePosition parameter  allows you to jump in time over the duration of the transformation.
Thus, for a transformation whose Duration = 1000, activating a TimePosition at 500 will "jump" the actor halfway through his transformation.

In the case where LoopMove is different from false (or zero), the actor repeats its transformation several times, and the total duration of it is LoopMove * Duration (or is infinite if LoopMove = True). A TimePosition after Duration will skip **_trips_**, and possibly place the Actor on a return **_trip_**.

The following example returns the animation to the beginning if you press a key:
```basic
Actor "lucie", Image$="lucie", Y=400, EndX=500, Duration=2000, LoopMove= True
Do
	If Inkey$ Then Actor "lucie", TimePosition = 1000
	Refresh
Loop
```

This parameter is useful especially when you want to start the transformation at a specific point.

In the previous example of type "Space Invaders", the insect began its race at the point "Start", on the left of the screen. If we want to start it in the middle of the screen we use TimePosition:

```basic
Actor "bee", Image$="bee-0", HotSpot$="top-middle", Scale=1
Actor "bee", StartX=Actor Width("bee") / 2, EndX=Display Width - Actor Width("bee") / 2, Duration=5000, ReverseMove=True, LoopMove = True, TimePosition = 2500
```
<BR>

## Actor IsComingBack function

The Actor IsComingBack() function lets you know if the actor is heading to its "False" point or to its  "Start" point (True). Since the actor|;s movement is automatic, it can be useful to know if the actor is in a "going" movement or a "return" movement.

In the following example, the "Tagada" changes direction automatically if Magic is placed at its height. We therefore use ActionMove$="reverse" to reverse its displacement but also Actor IsComingBack() to know whether or not to reverse this displacement:
```basic
Actor Animation "walk-tagada", Sequence$ = "tagada-0, tagada-1, tagada-2, L"
Actor "tagada", Anim$="walk-tagada", EndX = 1800, StartX = 150, Y = Display Height - 200, HotSpot$ = "top-middle", LoopMove = True, ReverseMove = True, Duration = 5000, HRev = True, AutoReverse$ = "horizontal"

Actor Animation "fly", Sequence$ = "magicfly-0, magicfly-1, magicfly-2, L"
Actor "magic", Anim$ = "fly", Control$ = "mouse", OnChange$ = "MagicMove", HotSpot$ = "bottom-middle"

Procedure MagicMove [X, Y]
	If Y > Actor Y ("tagada") Then TX = Actor X ("tagada") : TCMB = Actor isComingBack("tagada")
	If ( X > TX And TCMB = True ) Or ( X < TX And TCMB = False ) Then Actor "tagada", ActionMove$="reverse"
End Proc
```
<BR>

## Listeners for transformations

All listeners linked to Actor such as OnChange\$, OnCollision\$, OnLimit\$, OnMouse\$ and OnControl$ return two additional parameters related to transformations:

 **ISCOMINGBACK**: (boolean) if the actor has an automatic movement/transformation, indicates if the actor is going back to its starting point
   
 **TIMEPOSITION**: (integer) If the actor has an automatic movement/transformation, indicates the current time position within the transformation
<BR>


## Non-rectilinear paths and sequence of transformations

Using the **OnChange$** listener, you can vary the parameters while continuing the current transformation.
This allows, for example, displacement on a sinusoidal trajectory:

```basic
Function Equation, x
End Function (500 + 400 * sin(x/2))

Actor "aoz", text$="AOZ", StartX=0,  EndX=Display Width, Y=500, LoopMove=True, ReverseMove=True, Duration=5000, OnChange$="change", HotSpot$="middle"
Line Width 3 : Plot 0,500
For i = 0 To Display Width
	Draw To i, Equation(i)
Next

Procedure change[X, Y]
	Actor "aoz", y = Equation(X)
End Procedure
```

If we use the "complete" event, we can also chain transformations to, for example, follow a circle:

```basic
Function Equation, x
	angle=ACos ((x - 800) / 400)
End Function (400 * sin(angle))

Actor "magic", image$="magic", StartX=400, EndX=1200, Y=500, Duration=2500, Transition$="sineInOut", OnChange$="change", HotSpot$="middle"

Line Width 3 : Circle 800,500, 400
Global HalfDone : HalfDone = false

Procedure change[EVENT$, X, Y]
If EVENT$="complete"
	If Not HalfDone
		Actor "magic", StartX=1200, EndX=400
		Else Actor "magic", StartX=400, EndX=1200
	End If
HalfDone= Not HalfDone Else
	If Not HalfDone
		Actor "magic",  y =  500 + Equation( X )
		Else Actor "magic", y = 500 - Equation( X )
	End If
End If
End Procedure
```
<BR>

_Note: if you want to continue a line of code to the next line just add:  ,\ as per the examples below._


Now we can push this further with the firing of a projectile that undergoes gravity:

```basic
Line Width 3
Global RESET, SHOT
Global SHOT_ANGLE#, SHOT_X, SHOT_Y, FAR_X
InitShip

Do
	If Inkey$ = " " And Not SHOT
		SHOT = True
		SHOT_ANGLE# = -Actor Angle("ship")
		SHOT_X = Actor X("ship")
		SHOT_Y = Actor Y("ship")
		Shoot
		Actor "ship", StartX = Actor X("ship"), EndX = FAR_X, Duration = 5000
	End If

	If RESET Then InitShip
	Refresh
Loop

Procedure InitShip
	RESET = False
	SHOT = False
	Actor "ship", Image$="ship", X = 100, Y = Display Height - 100,\
	Control$ = "arrowLeft:angle=-0.25;arrowRight:angle=+0.25",\
	OnChange$="change", Angle=-45, Hotspot$="middle"
End Procedure

Procedure change[ANGLE, X, Y, EVENT$, USERDATA$]
V = 130
	If Not SHOT
		If ANGLE > 0 Then Actor "ship", Angle = 0
		If ANGLE < -89 Then Actor "ship", Angle = -89
		PX = X
		PY = Y
		T# = 0
		Cls
		Draw 0, Display Height - 10 To Display Width, Display Height – 10

		Repeat
			Filled Circle PX, PY, 3
			PX = X +  V * T# * Cos(-ANGLE)
			PY = Y - (V * T# * Sin(-ANGLE) - 0.5 * 10 * T# * T#)
			T# = T# + 0.1
		Until PX < 0 Or PY < 0 Or PX > Display Width Or PY > Display Height

		FAR_X = PX
	Else If EVENT$="onchange"
		T# = ( X - SHOT_X ) / ( V * Cos(SHOT_ANGLE#) )
		PY = SHOT_Y - (V * T# * Sin(SHOT_ANGLE#) - 0.5 * 10 * T# * T#)
		VY# = V * Sin(SHOT_ANGLE#) - 10 * T#
		VX# = V * Cos(SHOT_ANGLE#)
		A# = -ATan( VY# / VX# )
		Actor "ship", Y=PY, Angle = A#
		Else
		Boom
		RESET = True
	End If
End Procedure

```
<BR>

## Automatic transformations and other automatisms of Actor

Because now automatic transformations accept that their parameters are changed during animation (HRev and VRev), new possibilities are opening up for the use of other Actor automatisms.

The main principle is that automatic transformation is never a priority: changing one of the parameters takes precedence over transformation and is always allowed.
<BR>

## Automatic transformations and LookAt$

In the example below, the player controls Magic with a mouse and an enemy moves from left to right and shoots him. Magic and the enemy look at each other with LookAt$. The enemy undergoes an infinite transformation on the X-axis and each of its missiles is itself in transformation in the direction of fire. Magic has energy that decreases every time a shot hits him. Invigorating stars appear from time to time:

```basic
Global N, NRJ, GAME_OVER, DIFFICULTY#, START_DIFFICULTY#, STAR_INTERVAL
START_DIFFICULTY# = 0.05
InitGame

Do
	Cls
	Print "Score:"; N
	Print "Energy:"; NRJ
	Print "Level:"; Int ( (DIFFICULTY# - START_DIFFICULTY#) / 0.01 )
	If Rnd < DIFFICULTY#
		ang = Actor Angle("ship")
		Actor "beam_" + trim$(str$(N)), Image$="beam2", HotSpot$="middle", \
		Angle = ang+90, \
		StartX = Actor X("ship") + Cos(ang) * 64, \
		StartY = Actor Y("ship") + Sin(ang) * 64, \
		EndX = Actor X("ship") + Cos(ang) * 2000, \
		EndY = Actor Y("ship") + Sin(ang) * 2000, \
		OnChange$ = "DelBeam", Duration = Rnd(2000 To 4000)
		N = N + 1
		If DIFFICULTY# < 0.3 Then DIFFICULTY# = DIFFICULTY# + 0.0001
	End If

	If GAME_OVER
		Boom
		Actor Del "magic"
		Clear Interval STAR_INTERVAL
		Locate 0,12
		Centre "GAME OVER - PRESS A KEY TO RESTART"
		Wait Key
		InitGame
	End If
	Refresh
Loop

Procedure DelBeam[INDEX$, EVENT$]
	If EVENT$="complete"
		Actor Del INDEX$
	End If
End Procedure

Procedure kaboom[INDEX2$]
If INDEX2$ <> "star"
	NRJ = NRJ – 1
	Bell 90
	If NRJ <= 0 Then NRJ=0: GAME_OVER = true
Else
	Bell 50
	NRJ = NRJ + Rnd (10 to 50)
	ShowHideStar
End If
End Procedure

Procedure InitGame
	NRJ = 100
	GAME_OVER = False
	Actor "ship", Image$="ship", LookAt$="mouse", Y = Display Height - 100, \
	StartX=0, EndX= Display Width, \
	HotSpot$="middle", Duration = 5000, \
	LoopMove = True, ReverseMove = True
	Actor "magic", Image$="magic", Control$="mouse", HotSpot$="middle", \
	onCollision$="kaboom", LookAt$="ship"
	DIFFICULTY# = START_DIFFICULTY#
	ShowHideStar
End Procedure

Procedure ShowHideStar
	If Not Actor Exists("star") Or Actor IsVisible("star")
		Actor "star", Image$="star-0", Visible = False
	Else
		Actor "star", Visible = True, \
		X = Rnd(100 To Display Width - 100), \
		Y = Rnd(100 To Display Width - 200)
	End If
	w = Rnd( 5000 To 30000 )
	Clear Interval STAR_INTERVAL
	STAR_INTERVAL = Set Interval (w, "ShowHideStar" )
End Procedure

```
<BR>

## Automatic transformations and Auto$

In this example, the enemy when shot down makes a cabriole whose direction is given by **Actor IsComingBack()** but whose movement is managed by **Auto$**. During its fall, its transparency varies in loop to add a little dramatic and visual intensity.

```basic
// this gets "beam2", rotates it and create a new image in memory
// so it can be used with Actor and Auto$ with "forward"
// instead of playing with cos/sin

Paste Image 50,0,"beam2", Angle=90
Set Transparent 0
Get Image "beam2rot",0,0,50,45
Cls
Actor "ennemi", Image$="skyvenger_plane1", \
StartX = 0, EndX = Display Width, Duration = 5000, \
LoopMove = True, ReverseMove = True, AutoReverse$="horizontal", \
Scale = 0.5, Hotspot$="middle", Y=100
Actor "ship", Image$="ship", HotSpot$ = "middle", \
X = Display Width/2, Y = Display Height - 100, \
Control$ = "arrowLeft:offsetX=-10;arrowRight:offsetX=+10", \
Angle = -90

Do
	If Inkey$=" "
		Shoot
		Actor "missile" + trim$(str$(N)), Image$="beam2rot", \
		X = Actor X("ship"), Y=Actor Y("ship") - 64, \
		Auto$ = "forward=30", Angle=-90, \
		OnScreenExit$="DelBoom", \
		OnCollision$="kaboom", HotSpot$="middle"
		N = N + 1
	End If
	Refresh
Loop

Procedure DelBoom[Snd=False, INDEX$]
	If Snd Then Boom
	Actor Del INDEX$
End Procedure

Procedure kaboom[INDEX1$, INDEX2$]
	If INDEX2$ <> "ennemi" Then Pop Proc
	Actor Del INDEX1$
	v$ = "4"
	If Actor isComingBack("ennemi") Then v$="-" + v$
	Actor "ennemi", Auto$="offsetX=" + v$ + ",offsetY=" + v$ + ",angle=4", \
	StartAlpha = 1, EndAlpha = 0.25, Duration = 500, \
	OnScreenExit$ = "DelBoom[Snd=True]" , \
	OnCollision$ = "DelBoom[Snd=True]" , \
	LoopMove = True, ReverseMove = True, AutoReverse$ = "none"
End Procedure

```
<BR>

## Automatic transformations and Behavior$

It is possible to use **Behavior\$** while using automatic transformations. Of course, if  the Behavior\$ modifies one of the parameters that was animated, this parameter is no longer part of the transformation.  
In this example, Lucie goes from left to right but jumps if you press "space":

```basic
Palette $202020 // slightly change black color
Cls
Actor Animation "walk", \
sequence$="lucie-0, lucie-1, lucie-2, lucie-3, lucie-4, lucie-5, L"
Actor "lucie", Anim$="walk", \
Behavior$="jump", Y = 500, \
StartX = 0, EndX = Display Width - 200, \
LoopMove = True, ReverseMove = True, AutoReverse$ = "horizontal", \
Duration = 5000
Line Width 10
Draw 0, Actor Height("lucie") + 500 To Display Width, Actor Height("lucie") + 500
```


In the following example, Magic has a Behavior$ of "tank". When it "eats" a star it grows for half a second. 
Note that if he eats another star while he had not finished his previous transformation, a new animation is generated starting from the last known position (time).

```basic
Actor "magic", Image$="magic", Behavior$="tank", HotSpot$="middle", Scale=0.5, \
onCollision$ = "miam", X = 100, Y = 100
For i = 1 To 20
	Actor "star" + Trim$(Str$(i)), Image$="star-0" , \
	X = Rnd(100 To Display Width - 100), \
	Y = Rnd(100 To Display Height - 100)
Next

Procedure miam[INDEX2$, TIMEPOSITION]
	Actor Del INDEX2$
	If TIMEPOSITION < 0 THEN TIMEPOSITION = 0
	Actor "magic", StartScale = 0.5, EndScale = 1, \
	LoopMove = false, ReverseMove = true, \
	Duration = 500, TimePosition = TIMEPOSITION
End Procedure
```
<BR>

## Automatic transformations and limits

When an actor crosses a boundary, his transformation pauses and can always be restarted whenever you want.
Using the  **OnLimit\$ listener**, it is possible to decide what happens to the current transformation.

In the example below, 4 "Magic" wander from left to right. Those on the left always have a left/right limit enabled. The limit of those on the right is enabled/disabled with the spacebar.
The top "Magic" get stuck if they reach a limit. Those at the bottom, on the other hand, change direction.

So that the "Magic" at the bottom do not get stuck in the limits, it is necessary to slightly change their **TimePosition** before making them **ActionMove\$="reverse"**.

In addition, when you remove the limits, the Magic at the top right must be able to resume its movement with **ActionMove\$="play"**.

```basic
Palette $202020, $ffffff, $ff0000, $00ff00
Cls: Line Width 2
Actor "magic0", Image$="magic", HotSpot$="middle", \
Y = 300, StartX = 100, EndX = 900, Duration = 5000, \
LoopMove = true, ReverseMove = true, AutoReverse$="horizontal", \
TimePosition = 2500, \
RightLimit=800, OnLimit$="lim", LeftLimit = 200
Actor "magic1", Image$="magic", HotSpot$="middle", \
Y = 800, StartX = 100, EndX = 900, Duration = 5000, \
LoopMove = true, ReverseMove = true, AutoReverse$="horizontal", \
OnChange$="change" , TimePosition = 2500, \
RightLimit=800, OnLimit$="lim", LeftLimit = 200
Actor "magic2", Image$="magic", HotSpot$="middle", \
Y = 300, StartX = 1100+62, EndX = 1900-62, Duration = 5000, \
LoopMove = true, ReverseMove = true, AutoReverse$="horizontal", \
TimePosition = 2500, \
RightLimit=9999, OnLimit$="lim", LeftLimit =-9999
Actor "magic3", Image$="magic", HotSpot$="middle", \
Y = 800, StartX = 1100+62, EndX = 1900-62, Duration = 5000, \
LoopMove = true, ReverseMove = true, AutoReverse$="horizontal", \
TimePosition = 2500, \
RightLimit=9999, OnLimit$="lim", LeftLimit =-9999
Limit = False

Do
	Cls
	Ink 2
	Box 200,100 To 800, 500
	Box 200,600 To 800, 1000
	If Limit Then Line Dash 10,0 Else Line Dash 10,10
	Box 1200,100 To 1800, 500
	Box 1200,600 To 1800, 1000
	Line Dash 10,0
	Ink 3
	Box 100,100 To 900,500
	Box 100,600 To 900,1000
	Box 1100,100 To 1900,500
	Box 1100,600 To 1900,1000
	If Inkey$=" "
		Limit = Not Limit
		If Limit
			Actor "magic2", RightLimit=1800, LeftLimit=1200
			Actor "magic3", RightLimit=1800, LeftLimit=1200
		Else
			Actor "magic2", RightLimit=9999, LeftLimit=-9999, \
			ActionMove$ = "play"
			Actor "magic3", RightLimit=9999, LeftLimit=-9999
		End if
	End If
	Refresh
Loop

Procedure lim[INDEX$, TIMEPOSITION, ISCOMINGBACK]
	If INDEX$ = "magic1" Or INDEX$ = "magic3"
		Actor INDEX$, TimePosition = TIMEPOSITION - 100, \
		ActionMove$="reverse"
	End If
End Procedure
```
<BR>

### Bonus example

Here is for fun a small "beginning of a game" that uses transformations.

```basic
Palette $202020, $ffffff, $ff0000
Cls

Actor Animation "walk-tagada", Sequence$ = "tagada-0, tagada-1, tagada-2, L"
Actor Animation "magic-fly", Sequence$ = "magicfly-0, magicfly-1, magicfly-2, L"
Actor "ground", Image$="ground", X=0, Y= 945, ScaleX = 1650 / 3840, ScaleY=0.5
Actor "ceiling", Image$="ground", X=0, Y= 655, ScaleX = 955 / 3840, ScaleY=0.5, VRev = True
Actor "LWall", Image$="ground", X=1055, Y= 0, ScaleX=750/3840, Scaley=0.5, Angle=90
Actor "RWall", Image$="ground", X=1550, Y= 0, ScaleX=750/3840, ScaleY=0.5, Angle=90, VRev=True
Actor "tagada1", Anim$="walk-tagada", EndX = 250, StartX = 1500, Y= 800, \
LoopMove = True, Reversemove = True, Duration = 5000
Actor "tagada2", Anim$="walk-tagada", EndY = 150, StartY = 600, X= 1200, \
Angle=90, LoopMove = True, ReverseMove = True, Duration = 2500
Actor "tagada3", Anim$="walk-tagada", EndY = 750, StartY = 300, X= 1300, \
Angle=270, LoopMove = True, ReverseMove = True, AutoReverse$="vertical", Duration = 2500
Actor "magic", Anim$="magic-fly", Control$="keyboard", Y = 800, OnCollision$="bang"
Actor "goal", Image$="goal-0", X = 1250, Y = 51, HotSpot$ = "middle", Scale = 0.2

Do
	Refresh
Loop

Procedure bang[INDEX2$]
	If INDEX2$ = "goal"
		Cls
		Actor Del "*"
		Actor "goal", Image$="goal-0", StartX=1250, StartY =51, \
		HotSpot$ = "middle", StartScale = 0.2, \
		EndScale = 1.5, EndY = Display Height /2, EndX = Display Width / 2
	End
	Else
		Boom : Cls 2
		Actor "magic", X=0, Y= 800
		Wait 1 : Cls
	End if
End Procedure

```
-----------

## Events
( italic ) = Optional
|**Event**|**Description**|
|---|---|
|_`OnRefresh$`_|Name of the AOZ procedure to call at each cycle of the Runtime.|
|_`OnChange$`_|Name of the AOZ procedure to call when the Actor change (position, alpha, scale...)|
|_`OnAnimChange$`_|Name of the AOZ procedure to call when the Actor animation change ( number of frame, state,...)|
|_`OnCollision$`_|Name of the AOZ procedure to call when the Actor enter in collision with an other object.|
|_`OnControl$`_|Name of the AOZ procedure to call when a control is activated for the Actor (keyboard, mouse or joystick).|
|_`OnLimit$`_|Name of the AOZ procedure to call when the Actor touch a limit.|
|_`OnScreenEnter$`_|Name of the AOZ procedure to call when the Actor appears on the screen.|
|_`OnScreenExit$`_|Name of the AOZ procedure to call when the Actor exits on the screen.|
|_`OnBehavior$`_|Name of the AOZ procedure to call when the Actor behavior changes.|
|**Mouse**|||
|_`OnMouse$`_|Name of the AOZ procedure that will be called at each mouse action on the actor.|
|_`OnMouseClick$`_|Name of the AOZ procedure that will be called at each mouse click on the actor.|
|_`OnMouseDblClick$`_|Name of the AOZ procedure that will be called at each mouse doubleclick on the actor.|
|_`OnMouseDown$`_|Name of the AOZ procedure that will be called at each mouse button down on the actor.
|_`OnMouseUp$`_|Name of the AOZ procedure that will be called at each mouse button up on the actor.|
|_`OnMouseEnter$`_|Name of the AOZ procedure that will be called when the mouse pointer enters over of the actor.|
|_`OnMouseExit$`_|Name of the AOZ procedure that will be called when the mouse pointer outs over of the actor.|
|**Keyboard**|||
|_`OnKeyPress$`_|Name of the AOZ procedure that will be called at each key pressed.|
|_`OnKeyDown$`_|Name of the AOZ procedure that will be called at each key down.|
|_`OnKeyUp$`_|Name of the AOZ procedure that will be called at each key up.|
|**Controllers**|||
|_`OnControllerConnect$`_|Name of the AOZ procedure that will be called when a controller is connected (gamepad, joystick...).|
|_`OnControllerDisconnect$`_|Name of the AOZ procedure that will be called when a controller is disconnected (gamepad, joystick...)|
|_`OnControllerButton$`_|Name of the AOZ procedure that will be called at each controller button pressed.|
|_`OnControllerAxis$`_|Name of the AOZ procedure that will be called when an axis value of a controller changes.|
|_`OnControllerDirection$`_|Name of the AOZ procedure that will be called when a direction value changes.|
---

<p  align="center"><img  valign="middle"  width="76px"  src="https://doc.aoz.studio/assets/images/en/image001.png"  /></p>

<!--stackedit_data:

eyJoaXN0b3J5IjpbLTEwODA3NjMzNzAsLTExNjE0MTU5NjBdfQ

==

-->
