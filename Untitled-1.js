#include <Servo.h>
​
Servo servo1,servo2,servo3,servo4;
​
​
  
void setup (){

servo1.attach(1);

servo2.attach(2);

servo3.attach(3);

servo4.attach(4);
}
​
​
void loop(){
//CONTROLE DOS MOTORES
int angulo1 = analogRead(1);
angulo1 = map(angulo1,0,1023,0,180);
servo1.write(angulo1);

int angulo2 = analogRead(2);
angulo2 = map(angulo2,0,1023,0,180);
servo2.write(angulo2);

int angulo3 = analogRead(3);
angulo3 = map(angulo3,0,1023,0,180);
servo3.write(angulo3);

int angulo4 = analogRead(4);
angulo4 = map(angulo4,0,1023,0,180);
servo4.write(angulo4);

delay(20);
}