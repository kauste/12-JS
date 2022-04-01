/* Sablonai
-
-
- if () {} else {}
- if () {} else if {} else {} .... else { }
*/

 //NESTINIMAS


 /* whats wrong?
  const day = 1
 if(day === 1) {
     console.log('pirmadienis');
 } else if (day === 2); {
     console.log('antradienis');
 } else if (day === 3); {
     console.log('treciadienis')
 } else if(day === 4); {
     console.log('ketvirtadienis')
 } else if(day === 5); {
     console.log('penktadienis')
 } else if(day === 6); {
     console.log('sestadienis')
 } else if(day === 7); {
     console.log('sekmadienis')
 } else {
console.log('Tokia diena savaiteje neegistuoja')}*/


 const akiuSpalva = 'zalia'

 if (akiuSpalva === 'zalia') {
     console.log('Zaliaakiai yra zalciai')
 } else {
     if (akiuSpalva === 'melyna') {
  	console.log('Melynakiai megsta melynes')
    } else {
        if(akiuSpalva === 'ruda') {
        console.log('Rudaakiai yra melagiai')
        } else {
            if(akiuSpalva === 'raudona') {
            console.log('Raudonakis? turbus programuotojas')
            } else {
                console.log('O tu turi akis?')
            }
        }
    }
 }

 const temperatura = 25;
 const nuoKadaLaikomeKadSilta = 15;
 const arYraKrituliu = true;

 if(arYraKrituliu) { //(arYraKrituliu === true nereikia rasyti, nes ir taip naudojiesi, kartais nereikia prie ifo palyginimo'
     if(temperatura >= nuoKadaLaikomeKadSilta) {
         console.log('Varyk su maike') //silta ir lija
     } else {
         console.log('Tau reikes kailiniu') //salta ir lija
     }
 }  else {
     if(temperatura >= nuoKadaLaikomeKadSilta) {
         console.log('Varyk prie ezero')
     } else {
         console.log('Be striukes neapseisi')  //eiliskumas kartais svarbu
     }
 }
