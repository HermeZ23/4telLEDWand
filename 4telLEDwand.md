# LED Wand U+00BC 	

8x24 in Fall 2015


## Raspberry Pi
DNS: `gaenge` or `gaenge.local`   
Find via network scan:
`sudo nmap -sP 192.168.1.0/24 | awk '/^Nmap/{ip=$NF}/B8:27:EB/{print ip}'`

## Fadecandy
![image alt](https://camo.githubusercontent.com/ffa83d86d243b2cca7c1a35865ab6d7762c70835/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3932333831322f323130333732342f65346438336339652d386637302d313165332d383662622d3065386532343262326265392e6a7067)
https://github.com/scanlime/fadecandy

PWM controller supporting up to 512 LEDs

Can be controlled via `fcserver` application understanding:
* [Websocket](https://github.com/scanlime/fadecandy/blob/master/doc/fc_protocol_websocket.md)
* [OpenPixelControl protocol](https://github.com/scanlime/fadecandy/blob/master/doc/fc_protocol_opc.md)
*

## LEDs
WS2811S + RGB LEDs waterproof
![](img/LEDs.JPG)

## PixelController

![image alt](http://pixelinvaders.ch/wp-content/uploads/2011/05/screenshot13.png)
http://pixelinvaders.ch/?page_id=160

Forked to support OpenPixelControl protocol for fadecandy
https://github.com/master-lincoln/PixelController

## Wall
You can open the diagram for editing by loading the raw file link of [img/Diagram.xml](img/Diagram.xml) in [draw.io](draw.io)
![](img/Diagram.png)

![](img/close_up.jpg)

![](img/half_done.JPG)

![](img/almost_done.jpg)
