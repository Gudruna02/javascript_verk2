# Javascript_verk2

## 2.1 Spurningar (4%)

### 1. Afhverju er `getElementById()` fljótleglegasta aðferðin?

Af því að id er unique og þá þarf ekki leita meira þegar það er fundið

### 2. Hver er munurinn á static og live NodeList?

live: Breytingar í DOM er uppfært sjálfvirkt og aðgengilegt í safni (e. collection).
static: Breytingar í DOM hefur ekki áhrif á innihald í safni.
- Öll HTMLCollections eru live
- NodeList objects eru static eða live

### 3. Hver er munurinn á true og false í AddEventListener?
elem.addEventListener("click", handlerFunction, true);
elem.addEventListener("click", handlerFunction, false);

"True" og "False" í AddEventListener er boolean sem segir hvort þurfi að grípa event eða ekki. Ef AddEventListener er "True" þá er hann Capture og fer frá top elementinu og niður. Ef það er "False" þá er það bubbling og fer frá neðsta elementinu og upp.”

### 4. this vísar í Event listener á html element en ekki á object. Þú getur notað `bind()` til að breyta því. Leystu eftirfarandi kóðadæmi með notkun á `bind()` til að birta í console “My name is Sam“ en ekki undefined.

        let Person = {
          name: 'Sam',
          sayName: function(){
            console.log('My name is '+ this.name);
          }
        };
        buttonEl = document.getElementById('id');
        buttonEl.addEventListener('click', Person.sayName.bind(Person));



# 2.2 DOM (4%)
** Í html:**

        <p>málsgrein 1</p>
        <p>málsgrein 2</p>
        <div>div 1</div>
          <p>málsgrein 3</p>
        <div>div 2</div>

** Í Javascript:**

### 1. Notaðu `querySelector()` til að velja málsgrein nr 1. og litaðu textann rauðan.

document.querySelector("p").style.color = "red";

### 2. Veldu allar málgreinar og breyttu textanum í ensku með textContent aðferðinni.

document.querySelectorAll("p")[0].textContent = "paragraph 1";
document.querySelectorAll("p")[1].textContent = "paragraph 2";
document.querySelectorAll("p")[2].textContent = "paragraph 3";
eða

        let i = 0;
        let p = document.querySelectorAll("p");
        p.forEach(element => {
            i++;
            element.textContent = "paragraph "+ i;
        });

### 3. Bættu við efst með `InnerHTML` `<h1>` með textanum Verkefni 2.2.
 document.body.innerHTML = "<h1>Verkefni 2.2</h1>" + document.body.innerHTML;

### 4. Bættu við neðst með `createElement()` og `append()` málsgrein með nafninu þínu.

let x = document.createElement("p");
x.innerHTML = "Anh";
document.body.append(x);
