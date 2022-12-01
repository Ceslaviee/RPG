var rng = Math.random() *100;
maDivAtk = document.getElementById("maDivAtk");
maDivDef = document.getElementById("maDivDef");
maDivSpe = document.getElementById("maDivSpe");
Pvs = document.getElementById("Pvs");
afficheAction = document.getElementById("afficheAction");


Pv = 100
PvMonstre = 200
Degats = 5
joueur = 1





maDivSpe.onclick = function() 
{
    Pvs.innerHTML = Pvs.innerHTML-10;
    afficheAction.innerHTML = "Tu lui fait 10 degats";
}

maDivDef.onclick = function()
{

}

maDivAtk.onclick = function()
{
    console.log ("alibaba")
    Random =  Math.floor (Math.random() * (11-1)) + 1;
   if (joueur == 1)
    {   if (Random < 8)
            {Pvs.innerHTML = Pvs.innerHTML-(12)
            afficheAction.innerHTML = "L'Etoile Polaire lui fait 12 dégats";}
        else {Pvs.innerHTML = Pvs.innerHTML-(25)
            afficheAction.innerHTML = "L'Etoile Polaire inflige un coup critique et lui fait 25 dégats";}
        joueur = 2
    }
   else if (joueur == 2)

    {   if (Random < 8)
            {Pvs.innerHTML = Pvs.innerHTML-(10)
            afficheAction.innerHTML = "Deuillegivre lui fait 10 dégats";}
        else {Pvs.innerHTML = Pvs.innerHTML-(30)
            afficheAction.innerHTML = "Deuillegivre inflige un coup critique et lui fait 30 dégats";}
        joueur = 3
        }
   else if (joueur == 3)

    {   if (Random < 8)
            {Pvs.innerHTML = Pvs.innerHTML-(6)
            afficheAction.innerHTML = "Le Baton de l'exarque lui fait 6 dégats";}
        else {Pvs.innerHTML = Pvs.innerHTML-(18)
            afficheAction.innerHTML = "Le Baton de l'exarque inflige un coup critique et lui fait 18 dégats";}
        joueur = 4
    }

   else if (joueur == 4)
        { if (Random < 8)
            {Pvs.innerHTML = Pvs.innerHTML-(8)
            afficheAction.innerHTML = "Le Penitent lui fait 8 dégats";}
        else {Pvs.innerHTML = Pvs.innerHTML-(21)
            afficheAction.innerHTML = "Le Penitent inflige un coup critique et lui fait 21 dégats";}
        joueur = 1
    }
}

maDivDef.onclick = function()
{

}







