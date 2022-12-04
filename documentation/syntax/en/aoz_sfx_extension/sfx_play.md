# Sfx Play
<table><tr><td colspan="2"><b>Compatibility</b></td></tr><tr><td><img src="https://drive.google.com/uc?export=view&id=1NbXQFq8_hw18wZSmQiAaH8PEkx0iN0ue" valign="center" all="AOZ" title="AOZ" /></td></tr></table>

Plays a given sound effect
- **string**:  the type of Sfx to play, from the list "PickupCoin", "LaserShoot", "Explosion", "PowerUp", "HitHurt", "Jump", "BlipSelect", "Synth", "Tone", "Click", "Random"
- **index**: The index of a previouly created sound effect. This parameter will have precedence over the "type&dollar;" parameter if both are defined.
- **string**: A string containing the definition of an Sfx, previously saved with the =Sfx Json&dollar; function. This parameter has precedence on both previous parameters.
- **string**: A string containing the shape of the signal to generate. It can have the values "Square", "SawTooth", "Sine", "Noise"
- **float**: If not defined (by default), the instruction will not wait for the sound to end. If you use the value 0 (or negative), it will wait for the sound to complete. If none of these values, the duration parameter represents the time to wait when playing the sound, in seconds
- **float**: Length of the attack of the effect, in seconds.
- **float**: Length of the sustain period of the effect
- **float**: Power of the punch effect of the attack of the sound, in second
- **float**: Duration of the sustain perdid of the sound
- **float**: Start frequency of the synthetiser, in Hz
- **float**: Minimal frequency cutoff
- **float**: Frequency slide (from -1 to 1)
- **float**: Frequency delta (from -1 to 1)
- **float**: Vibrato strengh (from 0 to 1)
- **float**: Vibrato speed (from 0 to 1)
- **float**: Arpegio change amount (from -1 to 1)
- **float**: Arpegio speed (from 0 to 1)
- **float**: Square wave duty (proportion of time signal is high vs. low, from 0 to 1)
- **float**: Duty sweep (from 0 to 1)
- **float**: Repeat speed (from 0 to 1)
- **float**: Flanger offset (from 0 to 1)
- **float**: Flanger sweep (from 0 to 1)
- **float**: Low-pass filter cutoff frequency
- **float**: Low-pass filter cutoff sweep (from -1 to 1)
- **float**: Low-pass filter resonance (from 0 to 1)
- **float**: High-pass filter cutoff
- **float**: High-pass filter cutoff sweep (from -1 to 1)
---
<p align="center"><img valign="middle" width="76px" src="https://drive.google.com/uc?export=view&id=1c2KO0LJpvMS9X9CAGV6dOfciR7OWhdKA" /></p>