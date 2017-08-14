# LED Wand U+00BC 	

8*24 = 192 LEDs in Fall 2015

2*50 + 14*8 + 22*8 = 388 LEDs in May 2017

#### Parts

 * 1 x Raspberry Pi (we still have an old B model)
 * 3 x Fadecandy board (+3 x USB Type B mini)
 * ~60m extra cabeling (0.4mm² for signal and 0.7mm² for power)
 * ~10 LED strips with 50 WS2811S RGB LEDs each

## Raspberry Pi
Runs Raspian Jessie.

DNS: `gaenge`
Find via network scan:
`sudo nmap -sP 192.168.1.0/24 | awk '/^Nmap/{ip=$NF}/B8:27:EB/{print ip}'`

Auto starts fadecandy server and pixelcontroller via `/etc/rc.local`

## Fadecandy
![image alt](https://camo.githubusercontent.com/ffa83d86d243b2cca7c1a35865ab6d7762c70835/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3932333831322f323130333732342f65346438336339652d386637302d313165332d383662622d3065386532343262326265392e6a7067)
https://github.com/scanlime/fadecandy

PWM controller supporting up to 512 LEDs

Can be controlled via `fcserver` application understanding:
* [Websocket](https://github.com/scanlime/fadecandy/blob/master/doc/fc_protocol_websocket.md)
* [OpenPixelControl protocol](https://github.com/scanlime/fadecandy/blob/master/doc/fc_protocol_opc.md)

#### Mapping
As we have the first window wired with snake cabeling and the newer part around the door wired in pieces, we need to provide information how that maps to a continuous rectangular display.

The OPC protocol has 1 broadcast channel (`0`) and 255 (`1-255`) discrete channels each being able to address up to 21845 3-color LEDs with 8bit per color.


## LEDs
WS2811S + RGB LEDs waterproof
![](img/LEDs.JPG)

## Power
Each RGB pixel uses up to 60 mA. At 580 pixels that makes 34.8 A at 5V, so around **170 W** when fully white. This is provided by an old standard computer ATX power supply.

Aditionally the Raspberry Pi (~220 mA) and the 3 Fadecandy boards (combined less than 150 mA) take around **4.5 W**

## PixelController

![image alt](http://pixelinvaders.ch/wp-content/uploads/2011/05/screenshot13.png)
http://pixelinvaders.ch/?page_id=160

Forked to support OpenPixelControl protocol for fadecandy
https://github.com/master-lincoln/PixelController

## Simulator
There's an opengl simulator available in the `simulator` folder.
![image alt](img/simulator.png)
(window in the top left)

## Wall
You can open the diagram for editing by loading the raw file link of [img/Diagram.xml](img/Diagram.xml) in [draw.io](draw.io)
![](img/Diagram.png)

![](img/close_up.jpg)

![](img/half_done.JPG)

![](img/almost_done.jpg)
