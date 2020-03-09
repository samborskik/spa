// boki trójkąta
a = 3;
b = 4;
c = 5;
//h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .





let heron = (a, b, c) => {
    var p=(a+b+c)/2;
    var S=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return S
}

console.log(`Pole trójkąta o bokach ${a}, ${b}, ${c} wynosi ${heron(a, b,c)} `)
