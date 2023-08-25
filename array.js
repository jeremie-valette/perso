const array1 = [1, 2, 3, 4];
const array2  = [10, 11, 12];
console.log(array1); //[ 1, 2, 3, 4 ]
console.log(array2); // [ 10, 11, 12 ]


/* La propriété length (longueur) est un entier non-signé de 32 bits qui indique le nombre d'éléments présents
dans le tableau. Elle est toujours supérieure au plus grand indice du tableau.*/
console.log(array1.length); // 4


/*La méthode at() prend un entier en argument et renvoie l'élément du tableau situé à cet indice.
Des valeurs entières positives ou négatives peuvent être utilisées en argument. Dans ce dernier cas,
la recherche est effectuée depuis la fin du tableau.
L'accès aux éléments d'un tableau en utilisant les crochets ne permet que d'utiliser des indices positifs : 
array[0] renverra le premier élément, array[array.length-1] renverra le dernier.
Avec array.at(-1), on peut avoir une écriture plus concise pour accéder au dernier élément.*/
console.log(array1.at(2)); // 3

/*La méthode concat() est utilisée afin de fusionner deux ou plusieurs tableaux en les concaténant.
Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat
de l'opération.*/
console.log(array1.concat(array2)); //[ 1,  2,  3, 4, 10, 11, 12 ]

/*La méthode entries() renvoie un nouvel objet de type Array Iterator qui contient le couple clé/valeur
pour chaque élément du tableau.*/
const iterator1 = array1.entries();
console.log(iterator1) // Object [Array Iterator] {}
console.log(iterator1.next().value); // [ 0, 1 ]
console.log(iterator1.next().value); // [ 1, 2 ]

const iterator2 = array1.entries().next().value;
console.log(iterator2); // [ 0, 1 ]

for(const [index, element] of array1.entries()){
console.log(index, element)}; // 0 1  // 1 2   // 2 3  //  3 4

/*La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée
par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.*/
const estEnDessousDuSeuil = (currentValue) => currentValue < 12;
console.log(array1.every(estEnDessousDuSeuil)); // true

/*La méthode fill() remplit tous les éléments d'un tableau entre deux index avec une valeur statique.
La valeur de l'index de fin n'est pas incluse. Cette méthode renvoie le tableau modifié
Remplir avec 0 de la position 2 jusqu'à la position 4*/ 
console.log(array1.fill(0, 2, 4)); // [ 1, 2, 0, 0 ]
console.log(array1.fill(5, 1)); // [ 1, 5, 5, 5 ]
console.log(array1.fill(6)); // [ 6, 6, 6, 6 ]

/*La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine
qui remplissent une condition déterminée par la fonction callback.*/
console.log(array2.filter((element) => element > 10)); // [ 11, 12 ]

/*La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.*/
console.log(array2.find((element) => element < 12)); // 10

/*La méthode findIndex() renvoie l'index du premier élément du tableau qui satisfait une condition donnée
par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.*/
console.log(array2.findIndex((element) => element > 11)); // 2

// console.log(array1.sort() + '  ==>array1.sort()'); //16.8,18.5,19.3

