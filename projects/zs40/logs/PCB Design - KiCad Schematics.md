<br>
<br>

# PCB Design - KiCad Schematics

**2026-07-03**

i think at this point in time, it's dawning on me that this project might be a little bigger than I had originally forecasted. i'm starting to design the schematics for the pcb portion. considering that this is my first time making a schematic for a smd chip, I'm making surprisingly fast progress in creating this keyboard **theoretically**; i assume the most tedious part will be when i start troubleshooting the actual hardware. this image shows the progress i've made right now.
<br>
<br>
<img src="images\kicadscreenshot.png" width="100%" alt="Keyboard Layout">
<br>
<br>
i also wanted to talk about some part choices I made. i'm using the ADP150AUJZ-3.3-R7 as my LPO because of it's low quiescent current (i'm powering this with a small battery and i want it to be as energy efficient as possible) and it's cost effectiveness (im broke). the reason I chose the NRF52840 chip to begin with was because of it's small size and relatively power efficient RF capabilities.
<br>
<br>


