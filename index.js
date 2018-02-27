document.getElementById('bg1').addEventListener('click',function(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('mheader').innerHTML = 'Head Gear';
    
    document.getElementById('mImg1').style.backgroundImage = "url(h1.png)";
    
    document.getElementById('mImg2').style.backgroundImage = "url(h2.png)";
    
    document.getElementById('mImg3').style.backgroundImage = "url(h3.png)";

});

document.getElementById('bg2').addEventListener('click',function(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('mheader').innerHTML = 'Body Gears';
    
    document.getElementById('mImg1').style.backgroundImage = "url(b1.png)";
    
    document.getElementById('mImg2').style.backgroundImage = "url(b2.png)";
    
    document.getElementById('mImg3').style.backgroundImage = "url(b3.png)";
});

document.getElementById('bg3').addEventListener('click',function(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('mheader').innerHTML = 'Leg Gears';
    
    document.getElementById('mImg1').style.backgroundImage = "url(l1.png)";
    
    document.getElementById('mImg2').style.backgroundImage = "url(l2.png)";
    
    document.getElementById('mImg3').style.backgroundImage = "url(l3.png)";
});

document.getElementById('bg4').addEventListener('click',function(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('mheader').innerHTML = 'Foot Gears';
    
    document.getElementById('mImg1').style.backgroundImage = "url(f1.png)";
    
    document.getElementById('mImg2').style.backgroundImage = "url(f2.png)";
    
    document.getElementById('mImg3').style.backgroundImage = "url(f3.png)";
});

document.getElementById('main').addEventListener('click',function(){
    document.getElementById('main').style.display = 'none';
});

