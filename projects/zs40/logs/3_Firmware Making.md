<br>
<br>
<br>

# Firmware Making - NRF Connect
**2026-07-12**

it's at this stage where i've hit kind of a wall in pursuing this tall project. i'm struggling to turn an LED on on the NRF52840 Pro Micro using the NRF Connect SDK. i've ordered a pi pico so as to upload the firmware using swd pins. right now, i'm using the bootloader it came with to try to upload uf2 files, but it doesn't seem to be doing anything. the board doesn't show up as a com port, it doesn't visibly change the LED's behavior. i'll try again tomorrow, and if i can get anything physical to change using firmware i'm celebrating like no tomorrow.

<br>

**2026-07-17**

holy shit i did it. using the nrf connect, i've managed to blink an led. some semblance of what im doing finally affected the board after 5 days of trying. i never thought getting an led to blink would ever make me this happy, but im glad that these 5 days werent for naught. i'll try to simulate the keyboard with a four by four switch keyboard that ive created in the past. 


<br>

**2026-07-18**

it worked! i now have a fully working prototype of the real keyboard, minus the bluetooth aspect, which was probably the most challenging part. the board can now type when shorting a gpio pin to gnd. now i can focus on the hardware portion, as i've proved that it can work now. i'll probably start soldering the board soon.

<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="images/firsttpe.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

