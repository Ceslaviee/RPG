var rng = Math.random() *100;
maDivAtk = document.getElementById("maDivAtk");
maDivDef = document.getElementById("maDivDef");
maDivSpe = document.getElementById("maDivSpe");
Pvs = document.getElementById("Pvs");
afficheAction = document.getElementById("afficheAction");
annonce = document.getElementById("annonce");
PvEtoile = document.getElementById("PvEtoile");
PvBaton = document.getElementById("PvBaton");
PvEpee = document.getElementById("PvEpee");
PvBouclier = document.getElementById("PvBouclier");



PvMonstre = 250
joueur = 1
tour = 3
epee = 100
baton = 100
bouclier = 100
etoile = 100

function Mort ()
{
    if (PvMonstre < 0)
        {
            annonce.innerHTML= "  Un monstre est mort"
            console.log("Il é mor")
        }
}

function Riposte ()
{ 
    if (tour == 4)
    {   
        repond =  Math.floor (Math.random() * (23-7)) + 7;
        PvEpee.innerHTML = PvEpee.innerHTML - repond
        annonce.innerHTML = "Les Héros subissent " + repond + " degats"
        udpateHP(PvEpee)
        tour = 0
    }
}

function udpateHP(PvEpee)
{
    document.getElementById('PvEpee').innerHTML = + PvEpee.innerHTML +  " hp";
    document.getElementById('PvEtoile').innerHTML = + PvEtoile.innerHTML + " hp";
    document.getElementById('PvBaton').innerHTML = + PvBaton.innerHTML + " hp";
    document.getElementById('PvBouclier').innerHTML = + PvBouclier.innerHTML + " hp";
}

maDivSpe.onclick = function()
{
    Random =  Math.floor (Math.random() * (11-1)) + 1;
    console.log(joueur)
    if (joueur == 1)
     {      {Pvs.innerHTML = Pvs.innerHTML-(Random*4);
             PvMonstre -= Random*4;
             afficheAction.innerHTML = "L'Etoile Polaire lui fait " +Random*6+ " dégats";
             Mort()
             Riposte()
             console.log ("etoile")
            joueur += 1;
            tour = 1;
            }
     }
    else if (joueur == 2)
 
     {  {Pvs.innerHTML = Pvs.innerHTML-(Random*6);
         PvMonstre -= Random*6;
         afficheAction.innerHTML = "Deuillegivre lui fait " +Random*6+ " dégats";
         joueur = 3;
         tour = 2;
         Mort()
         Riposte()
         console.log ("epee")
        }
     }
    else if (joueur == 3)
 
     {       {PvEpee.innerHTML = PvEpee.innerHTML-(-Random*2);
                 PvEpee.innerHTML += Random*2;
             afficheAction.innerHTML = "Le Baton de l'exarque rend " +Random*2+ " pvs";
             tour = 3;
         joueur = 4;
         console.log ("baton")
         Riposte()
     }
     }
    else if (joueur == 4)
    {Pvs.innerHTML = Pvs.innerHTML-(8);
             PvMonstre -= 8;
         afficheAction.innerHTML = "Le Penitent lui fait 8 dégats";
         tour = 4;
         Riposte()
         Mort()
         console.log ("bouclier")
     joueur = 1}
}

maDivAtk.onclick = function()
{
    Random =  Math.floor (Math.random() * (11-1)) + 1;
   if (joueur == 1)
    {   if (Random < 8)
            {Pvs.innerHTML = Pvs.innerHTML-(12)
            PvMonstre -= 12
            afficheAction.innerHTML = "L'Etoile Polaire lui fait 12 dégats";
            tour = 1
            Mort()
        }
            
        else {Pvs.innerHTML = Pvs.innerHTML-(25)
            PvMonstre -= 25
            afficheAction.innerHTML = "L'Etoile Polaire inflige un coup critique et lui fait 25 dégats";}
            Mort()
            tour = 2
        joueur = 2
    }
   else if (joueur == 2)

    {   if (Random < 8)
            {Pvs.innerHTML = Pvs.innerHTML-(10)
                PvMonstre -= 10
            afficheAction.innerHTML = "Deuillegivre lui fait 10 dégats";
            Mort()
            tour = 3
        }
        else {Pvs.innerHTML = Pvs.innerHTML-(30)
            PvMonstre -= 30
            afficheAction.innerHTML = "Deuillegivre inflige un coup critique et lui fait 30 dégats";
            Mort()
            tour = 3
        }
        joueur = 3
        }
   else if (joueur == 3)

    {   if (Random < 8)
            {Pvs.innerHTML = Pvs.innerHTML-(6)
                PvMonstre -= 6
            afficheAction.innerHTML = "Le Baton de l'exarque lui fait 6 dégats";
            Mort()
        }
        else {Pvs.innerHTML = Pvs.innerHTML-(18)
            PvMonstre -= 18
            afficheAction.innerHTML = "Le Baton de l'exarque inflige un coup critique et lui fait 18 dégats";
            Mort()
        }
        joueur = 4
    }

   else if (joueur == 4)
        { if (Random < 8)
            {Pvs.innerHTML = Pvs.innerHTML-(8)
                PvMonstre -= 8
            afficheAction.innerHTML = "Le Penitent lui fait 8 dégats";
            Mort()
        }
        else {Pvs.innerHTML = Pvs.innerHTML-(21)
            PvMonstre -= 21
            afficheAction.innerHTML = "Le Penitent inflige un coup critique et lui fait 21 dégats";
            Mort()
        }
        joueur = 1
    }
}

maDivDef.onclick = function()
{

}





