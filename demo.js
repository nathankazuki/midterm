var c1 = document.getElementById('default1'),
    c2 = document.getElementById('default2'),
    c3 = document.getElementById('default3'),
    c4 = document.getElementById('default4'),
    bgText = document.getElementById('combos');


if(bgText.value == 'combo1'){
    document.getElementById('hat').style.backgroundImage = 'url(h1.png)';
    document.getElementById('shirt').style.backgroundImage = 'url(b1.png)';
    document.getElementById('pant').style.backgroundImage = 'url(l1.png)';
    document.getElementById('shoe').style.backgroundImage = 'url(f1.png)';
}else if(bgText.value == 'combo2'){
    document.getElementById('hat').style.backgroundImage = 'url(h2.png)';
    document.getElementById('shirt').style.backgroundImage = 'url(b2.png)';
    document.getElementById('pant').style.backgroundImage = 'url(l2.png)';
    document.getElementById('shoe').style.backgroundImage = 'url(f2.png)';
}