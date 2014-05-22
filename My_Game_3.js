/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var slaying=true;
youHit=Math.floor(Math.random()*2);
damageThisRound=Math.random()*5+1;
totalDamage=0;
while(slaying)
{
    slaying=false;
    if(youHit=== 1)
    {
        console.log("You Hit The Dragon!!");
        totalDamage += damageThisRound;
        if(totalDamage>=4)
    {
        console.log("Player Slew The Dragon");
        slaying=false;
            
            }
            else
            {
            youHit=Math.floor(Math.random()*2);
            }
      }
        else
        {
            console.log("Dragon defeted you!!");
        }
        
    slaying=false;
    }


