var rng = Math.random() *100;
maDivAtk = document.getElementById("maDivAtk");
maDivDef = document.getElementById("maDivDef");
maDivSpe = document.getElementById("maDivSpe");
PvsBanshee = document.getElementById("PvsBanshee");
PvsVenat = document.getElementById("PvsVenat");
PvsRoi = document.getElementById("PvsRoi");
afficheAction = document.getElementById("afficheAction");
annonce = document.getElementById("annonce");
annonce1 = document.getElementById("annonce1");
annonce2 = document.getElementById("annonce2");
annonce3 = document.getElementById("annonce3");
PvEtoile = document.getElementById("PvEtoile");
PvBaton = document.getElementById("PvBaton");
PvEpee = document.getElementById("PvEpee");
PvBouclier = document.getElementById("PvBouclier");


PvMonstre = 250
joueur = 1
tour = 0
epee = 100
baton = 100
bouclier = 100
etoile = 100
d1 = 0
d2 = 0
d3 = 0
d4 = 0
random = 1
de = 0
Banshee = 250
Venat = 250
Roi = 250




function MortR ()
{
    if (PvsRoi < 0)
        {
            annonce.innerHTML= " Le Roi-Liche tombe de son thrône, vaincu"
        }
}

function MortS ()
{
    if (PvsBanshee < 0)
        {
            annonce.innerHTML= " La Reine Banshee tombe, son dessein "
        }
}

function MortV ()
{
    if (PvsVenat < 0)
        {
            annonce.innerHTML= " La première primordiale est vaincue, cloturant l'épopée qui a commencer il y a si longtemps"
        }
}

function Riposte ()
{  
    {  
        atmo = Math.floor (Math.random() * (5-1)) + 1;
        console.log("drogue")
        if (atmo == 1)
        {
            if (d1 == 0)
            {
                repond =  Math.floor (Math.random() * (23-7)) + 7;
                PvEtoile.innerHTML = PvEtoile.innerHTML-(repond)
                etoile -= repond;
                annonce1.innerHTML = "Le Roi-Liche inflige " +repond+ " dégats a l'Etoile Polaire"
            }
            else if (d1 == 1)
            {
                annonce1.innerHTML = "L'Etoile Polaire se protège"
            }
        }
        else if (atmo == 2)
        {
            if (d2 == 0)
            {    
                repond =  Math.floor (Math.random() * (23-7)) + 7;
                PvEpee.innerHTML = PvEpee.innerHTML-(repond)
                epee -= repond;
                annonce1.innerHTML = "Le Roi-Liche inflige " +repond+ " dégats a Deuillegivre"

            }
            else 
            {
                annonce1.innerHTML = "Deuillegivre se protège"
                }
        }
        else if (atmo == 3)
        {
            if (d3 == 0)
            {
                repond =  Math.floor (Math.random() * (23-7)) + 7;
                PvBaton.innerHTML = PvBaton.innerHTML-(repond)
                baton -= repond;
                annonce1.innerHTML = "Le Roi-Liche inflige " +repond+ " au Baton de L'Exarque"
            }
            else
            {
                annonce1.innerHTML = "Le Baton de l'exarque se protège"
            }
        }
        else if (atmo == 4)
        {
            if (d4 == 0)
            {
               repond =  Math.floor (Math.random() * (23-7)) + 7;
               PvBouclier.innerHTML = PvBouclier.innerHTML-(repond)
               bouclier -= repond;
               annonce1.innerHTML = "Le Roi-Liche inflige " +repond+ " dégats au Pénitent"
            }
               else
            {
                annonce1.innerHTML = "Le Pénitent se protège " 
            } 
        }
           
    }      
    {  
     atmo = Math.floor (Math.random() * (5-1)) + 1;
        if (atmo == 1)
            {
            if (d1 == 0)
                {
                    repond =  Math.floor (Math.random() * (23-7)) + 7;
                    PvEtoile.innerHTML = PvEtoile.innerHTML-(repond)
                    etoile -= repond;
                    annonce2.innerHTML = "Sylvanas inflige " +repond+ " dégats a l'Etoile Polaire"
                   
                }
            else if (d1 == 1)
        {
                annonce2.innerHTML = "L'Etoile Polaire se protège"
            }
        }
        else if (atmo == 2)
        {
            if (d2 == 0)
            {
                repond =  Math.floor (Math.random() * (23-7)) + 7;
                PvEpee.innerHTML = PvEpee.innerHTML-(repond)
                epee -= repond;
                annonce2.innerHTML = "Sylvanas inflige " +repond+ " dégats a Deuillegivre"
            }
            else 
            {
                annonce2.innerHTML = "Deuillegivre se protège"
            }
        }
        else if (atmo == 3)
        {
            if (d3 == 0)
            {
                repond =  Math.floor (Math.random() * (23-7)) + 7;
                PvBaton.innerHTML = PvBaton.innerHTML-(repond)
                baton -= repond;
                annonce2.innerHTML = "Sylvanas inflige " +repond+ " au Baton de L'Exarque"
            }
            else
            {
                annonce2.innerHTML = "Le Baton de l'exarque se protège"
            }
        }
        else if (atmo == 4)
        {
            if (d4 == 0)
            {
            repond =  Math.floor (Math.random() * (23-7)) + 7;
            PvBouclier.innerHTML = PvBouclier.innerHTML-(repond)
            bouclier -= repond;
            annonce2.innerHTML = "Sylvanas inflige " +repond+ " dégats au Pénitent"
            }
            else
            {
                annonce2.innerHTML = "Le Pénitent se protège "
            } 
        }
    }
    {
        {  
            atmo = Math.floor (Math.random() * (5-1)) + 1;
                if (atmo == 1)
                   {
                    if (d1 == 0)
                       {
                           repond =  Math.floor (Math.random() * (23-7)) + 7;
                           PvEtoile.innerHTML = PvEtoile.innerHTML-(repond)
                           etoile -= repond;
                           annonce3.innerHTML = "Venat inflige " +repond+ " dégats a l'Etoile Polaire"
                           tour = 0
                       }
                     else if (d1 == 1)
                    {  
                       annonce3.innerHTML = "L'Etoile Polaire se protège"
                       tour = 0
                    }
               }
               else if (atmo == 2)
               {
                   if (d2 == 0)
               {
                       repond =  Math.floor (Math.random() * (23-7)) + 7;
                   PvEpee.innerHTML = PvEpee.innerHTML-(repond)
                       epee -= repond;
                   annonce3.innerHTML = "Venat inflige " +repond+ " dégats a Deuillegivre"
                   tour = 0
               }
                   else 
               {
                   annonce3.innerHTML = "Deuillegivre se protège"
                   tour = 0
                   }
               }
               else if (atmo == 3)
               {
                   if (d3 == 0)
               {
                   repond =  Math.floor (Math.random() * (23-7)) + 7;
                   PvBaton.innerHTML = PvBaton.innerHTML-(repond)
                   baton -= repond;
                   annonce3.innerHTML = "Venat inflige " +repond+ " au Baton de L'Exarque"
                   tour = 0
               }
                   else
               {
                       annonce3.innerHTML = "Le Baton de l'exarque se protège"
                       tour = 0
               }
               }
               else if (atmo == 4)
               {
                   if (d4 == 0)
                   {
                   repond =  Math.floor (Math.random() * (23-7)) + 7;
                   PvBouclier.innerHTML = PvBouclier.innerHTML-(repond)
                   bouclier -= repond;
                   annonce3.innerHTML = "Venat inflige " +repond+ " dégats au Pénitent"
                   tour = 0
                   }
                   else
                   {
                       annonce3.innerHTML = "Le Pénitent se protège "
                       tour = 0
                   } 
               }
              } 
    }
}



maDivSpe.onclick = function()
{
    Random =  Math.floor (Math.random() * (11-1)) + 1;
    console.log(joueur)
    if (joueur == 1)
     {  de = Math.floor (Math.random() * (4-1)) + 1;
        if (de == 1) 
        {    
         {PvsBanshee.innerHTML = PvsBanshee.innerHTML-(Random*4);
              Banshee -= Random*4;
              afficheAction.innerHTML = "L'Etoile Polaire fait " +Random*4+ " dégats à Sylvanas";
              MortS()
              console.log ("etoile")
             joueur += 1;
             tour = 1;
             }
        }
        if (de == 2) 
        {    
         {PvsRoi.innerHTML = PvsRoi.innerHTML-(Random*4);
              Roi -= Random*4;
              afficheAction.innerHTML = "L'Etoile Polaire fait " +Random*4+ " dégats au Roi-Liche";
              MortR()
              console.log ("etoile")
             joueur += 1;
             tour = 1;
             }
        }
        if (de == 3) 
        {    
         {PvsVenat.innerHTML = PvsVenat.innerHTML-(Random*4);
              Venat -= Random*4;
              afficheAction.innerHTML = "L'Etoile Polaire fait " +Random*4+ " dégats à Venat";
              MortV()
              console.log ("etoile")
             joueur += 1;
             tour = 1;
             }
        }
     }
    else if (joueur == 2)
 
     {  de = Math.floor (Math.random() * (4-1)) + 1;
        if (de == 1) 
        {    
         {PvsBanshee.innerHTML = PvsBanshee.innerHTML-(Random*6);
              Banshee -= Random*4;
              afficheAction.innerHTML = "Deuillegivre fait " +Random*6+ " dégats à Sylvanas";
              MortS()
             joueur += 1;
             tour = 2;
             }
        }
        if (de == 2) 
        {    
         {PvsRoi.innerHTML = PvsRoi.innerHTML-(Random*6);
              Roi -= Random*4;
              afficheAction.innerHTML = "Deuillegivre fait " +Random*6+ " dégats à son ancien maître";
              MortR()
             joueur += 1;
             tour = 2;
             }
        }
        if (de == 3) 
        {    
         {PvsVenat.innerHTML = PvsVenat.innerHTML-(Random*6);
              Venat -= Random*6;
              afficheAction.innerHTML = "Deuillegivre fait " +Random*6+ " dégats à Venat";
              MortV()
             joueur += 1;
             tour = 2;
             }
        }
     }
    else if (joueur == 3)
 
     {       {PvEpee.innerHTML = PvEpee.innerHTML-(-Random*2);
                 PvEpee.innerHTML + Random*2;
              PvBaton.innerHTML = PvBaton.innerHTML-(-Random*2);
                 PvBaton.innerHTML + Random*2;
              PvEtoile.innerHTML = PvEtoile.innerHTML-(-Random*2);
                 PvEtoile.innerHTML + Random*2;
              PvBouclier.innerHTML = PvBouclier.innerHTML-(-Random*2);
                 PvBouclier.innerHTML + Random*2;


             afficheAction.innerHTML = "Le Baton de l'exarque rend " +Random*2+ " pvs a l'équipe";
             tour = 3;
         joueur = 4;
         console.log ("baton")
     }
     }
    else if (joueur == 4)
    {
        d1 = 1
        d2 = 1
        d3 = 1
        d4 = 1
         afficheAction.innerHTML = "Le Penitent protège l'équipe";
         tour = 4;
        Riposte()
     joueur = 1}
    d1 = 0
    d2 = 0
    d3 = 0
    d4 = 0
}

maDivAtk.onclick = function()
{
   if (joueur == 1)
    {   
        // DE détermine qui le joueur attaque 
        // 1 - Sylvanas
        // 2 - Le Roi-Liche
        // 3 - Venat
        {  de = Math.floor (Math.random() * (4-1)) + 1;
         {PvsBanshee.innerHTML = PvsBanshee.innerHTML-(20);
              Banshee -= 20;
              afficheAction.innerHTML = "L'Etoile Polaire fait " +20+ " dégats à Sylvanas";
              MortS()
              console.log ("etoile")
             joueur += 1;
             tour = 1;
             }
        }
        if (de == 2) 
        {    
         {PvsRoi.innerHTML = PvsRoi.innerHTML-(20);
              Roi -= 20;
              afficheAction.innerHTML = "L'Etoile Polaire fait " +20+ " dégats au Roi-Liche";
              MortR()
              console.log ("etoile")
             joueur += 1;
             tour = 1;
             }
        }
        if (de == 3) 
        {    
         {PvsVenat.innerHTML = PvsVenat.innerHTML-(20);
              Venat -= 20;
              afficheAction.innerHTML = "L'Etoile Polaire fait " +20+ " dégats à Venat";
              MortV()
              console.log ("etoile2")
             joueur += 1;
             tour = 1;
             }
        }
     }
    else if (joueur == 2)
 
     {  de = Math.floor (Math.random() * (4-1)) + 1;
        if (de == 1) 
        {    
         {PvsBanshee.innerHTML = PvsBanshee.innerHTML-(15);
              Banshee -= 15;
              afficheAction.innerHTML = "Deuillegivre fait " + 15 + " dégats à Sylvanas";
              MortS()
             joueur += 1;
             tour = 2;
             }
        }
        if (de == 2) 
        {    
         {PvsRoi.innerHTML = PvsRoi.innerHTML-(15);
              Roi -= 15;
              afficheAction.innerHTML = "Deuillegivre fait " +15+ " dégats à son ancien maître";
              MortR()
             joueur += 1;
             tour = 2;
             }
        }
        if (de == 3) 
        {    
         {PvsVenat.innerHTML = PvsVenat.innerHTML-(15);
              Venat -= 15;
              afficheAction.innerHTML = "Deuillegivre fait " +15+ " dégats à Venat";
              MortV()
             joueur += 1;
             tour = 2;
             }
        }
     }
   else if (joueur == 3)

   {  de = Math.floor (Math.random() * (4-1)) + 1;
      if (de == 1) 
      {    
       {PvsBanshee.innerHTML = PvsBanshee.innerHTML-(6);
            Banshee -= 6;
            afficheAction.innerHTML = "Le baton de l'exarque fait " + 6 + " dégats à Sylvanas";
            MortS()
           joueur += 1;
           tour = 3;
           }
      }
      if (de == 2) 
      {    
       {PvsRoi.innerHTML = PvsRoi.innerHTML-(6);
            Roi -= 6;
            afficheAction.innerHTML = "Le baton de l'exarque fait " +6+ " dégats au Roi-Liche";
            MortR()
           joueur += 1;
           tour = 3;
           }
      }
      if (de == 3) 
      {    
       {PvsVenat.innerHTML = PvsVenat.innerHTML-(6);
            Venat -= 6;
            afficheAction.innerHTML = "Le baton de l'exarque fait " +6+ " dégats à Venat";
            MortV()
           joueur += 1;
           tour = 3;
           }
      }
   }

   else if (joueur == 4)
   {  de = Math.floor (Math.random() * (4-1)) + 1;
    if (de == 1) 
    {    
     {PvsBanshee.innerHTML = PvsBanshee.innerHTML-(9);
          Banshee -= 9;
          afficheAction.innerHTML = "Le baton de l'exarque fait " + 9 + " dégats à Sylvanas";
          MortS()
          Riposte()
         joueur = 1;
         tour = 4;
         }
    }
    if (de == 2) 
    {    
     {PvsRoi.innerHTML = PvsRoi.innerHTML-(9);
          Roi -= 9;
          afficheAction.innerHTML = "Le baton de l'exarque fait " +9+ " dégats au Roi-Liche";
          MortR()
          Riposte()
         joueur = 1;
         tour = 4;
         }
    }
    if (de == 3) 
    {    
     {PvsVenat.innerHTML = PvsVenat.innerHTML-(9);
          Venat -= 9;
          afficheAction.innerHTML = "Le baton de l'exarque fait " +9+ " dégats à Venat";
          MortV()
          Riposte()
         joueur = 1;
         tour = 4;
         }
    }
 }
}

maDivDef.onclick = function()
{
    if (joueur == 1)
    {
        d1 = 1
        joueur += 1
        tour = 1
        afficheAction.innerHTML = " l'Etoile Polaire se protège"
    }
    else if (joueur == 2)
    {
        d2 = 1
        joueur += 1
        tour = 2
        afficheAction.innerHTML = " Deuillegivre se protège"
    }
    else if (joueur == 3)
    {
        d3 = 1
        joueur += 1
        tour = 3
        afficheAction.innerHTML = " Le Baton de l'exarque se protège"
    }
    else if (joueur == 4)
    {
        d4 = 1
        joueur = 1
        tour = 4
        afficheAction.innerHTML = " Le Pénitent se protège"
        Riposte()
        
    }
        
}





