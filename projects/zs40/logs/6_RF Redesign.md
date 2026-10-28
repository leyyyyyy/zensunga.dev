<br>
<br>
<br>

# RF Redesign

**2026-10-27**

Its been a couple months since I wiped the dust off this project. I've finished off the pcb routing a while ago, but i never made an entry for it. this was partly because i thought it wasnt that polished yet, and that I put it off to prioritize the harrowing experience of surviving the first few months of college. After experiencing a little free time, I decided to finally open it back up and see what else I need to do before I send it off to be manufactured. 

<img src="images\PCB1.png" width="100%" alt="PCB Design 1">

<br>
<br>

*Curses!*

<br>
<br>
Turns out, I have to completely redesign the pcb layout i've made, as i had routed traces that go under the rf trace, disturbing the return path of it. i have two options, that i upgrade to a four layer pcb so I have a ground plane running beneath it, or i reroute all the traces to go around the rf trace. well, i only really have one, because i dont want to use a four layer pcb. i migrated from the aqfu package to the regular qfu package for the same reason.

<br>
<br>

<img src="images\RF close up.png" width="100%" alt="PCB Design 1">

