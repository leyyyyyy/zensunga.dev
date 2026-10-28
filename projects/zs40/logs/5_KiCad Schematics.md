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

**2026-07-07**

4 days later, progress slowed quite a bit since I picked up a full time job. despite this, I've finished the schematics for:
<br>
<br>
- USB C Port <br>
- Battery Charging / Power Management IC <br> 
- Keyboard matrix <br>
- SWD pins <br>
- RST & Boot button <br> 
- Status LEDS <br>
- LDO <br>
<br>

<img src="images\SCHEMATIC1 2026-07-07 114328.png" width="100%" alt="Keyboard Layout">

The most time consuming part was reading through the Battery Charger datasheet, specifically the model MCP73871-2CC. I have little experience with working with and charging Li ion batteries, so i don't want to mess it up and accidentally burn my house down. the IC i chose has dedicated power route management, meaning that it can switch between using the usb power and the battery power, saving the battery life and being more power efficient. 

<br>

If i had more experience with these parts, I probably could've finished the same workload within a couple hours. but then again, this project is essentially me diving into unexplored waters and HOPING it will work. if I had the time and the budget, I would order and test for each feature separately, but i'm a broke college student so i'm gonna order the full prototype pcb with all the features combined and hope I didnt fuck up somewhere. 

<br>

Just in case, there are failsafes I put because I know somewhere in this pcb i will have made an error. i have exposed all of the rest of the pins. I've also added a fuse so as to not burn my components in the event of a wrong routing or a short. i will also add many many test points so as to troubleshoot any potential bugs within the hardware. 

<br>
<br>

**2026-07-07**

It's been a month since my last update. I've encountered numerous problems, and after alot of on and off, I've completed the schematic. It took way longer than it should've, but personal delays and other projects took up my time. I want to finish this before school starts, so I'm sprinting to finish it now. 

Here are some major updates:
- I've finished soldering and coding the handwired part of the keyboard. It can type now, but the battery charger module I bought was the wrong rating for my battery, so I have to order a new one. 
- Instead of using the aQFN package of the NRF52840, I've switched to using the QFN48 package to save manufacturing costs and reduce needless complexity; I originally used micro vias-in-pads to breakout the pins from the aQFN package, but this came with a steep increase in manufacturing price, especially in small volume orders. Using QFN48 has a downside of having no USB support, but I can use the other keyboard half for USB features. The two sides will communicate through bluetooth removing the need for usb support on the pcb half.
- I added art on the PCB for style points
- I removed the switch stub holes on the PCB to make space for the MCU.
- I finished the BOM and making all the footprints, so I can start designing the PCB fully.
<br>
<img src="images\SCHEMATIC2 2026-10-27.png" width="100%" alt="Keyboard Layout">