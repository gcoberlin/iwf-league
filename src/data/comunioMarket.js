// Redaktionell erfasster Comunio-Stand der IWF League.
// Stand: 14.08.2026. Tagesbewegungen werden nur gezeigt, wenn sie verifiziert vorliegen.
const ranked = (name, club, value) => ({ name, club, value })
export const comunioMarket = {
  updatedAt:'14.08.2026 · 15:47 Uhr', dataStatus:'Redaktionell geprüft', winners:[], losers:[],
  recentTransfers:[
    {date:'14.08.', player:'Uzun', fee:'8,10 Mio. €', manager:'Matthias', direction:'in'},
    {date:'14.08.', player:'Alfa-Ruprecht', fee:'0,77 Mio. €', manager:'Jose', direction:'in'},
    {date:'14.08.', player:'Marino', fee:'0,50 Mio. €', manager:'Sebastian', direction:'in'},
    {date:'13.08.', player:'Stiller', fee:'9,34 Mio. €', manager:'Sebastian', direction:'in'},
    {date:'13.08.', player:'Ansah', fee:'2,64 Mio. €', manager:'Matthias', direction:'in'},
    {date:'13.08.', player:'Malatini', fee:'0,27 Mio. €', manager:'Matthias', direction:'in'},
    {date:'12.08.', player:'Karl', fee:'9,35 Mio. €', manager:'Matthias', direction:'in'},
    {date:'12.08.', player:'Moreira', fee:'8,80 Mio. €', manager:'Luca', direction:'in'},
    {date:'12.08.', player:'Tillman', fee:'5,56 Mio. €', manager:'Jan', direction:'in'},
    {date:'12.08.', player:'Mwene', fee:'1,76 Mio. €', manager:'Jan', direction:'in'},
    {date:'12.08.', player:'Schmid', fee:'4,68 Mio. €', manager:'Sebastian → Computer', direction:'out'}
  ],
  mostExpensive:[
    ranked('Joshua Kimmich','FC Bayern','14,38 Mio. €'),
    ranked('Guirassy','Borussia Dortmund','12,22 Mio. €'),
    ranked('Schick','Bayer Leverkusen','12,19 Mio. €'),
    ranked('Burkardt','Eintracht Frankfurt','11,53 Mio. €'),
    ranked('Nusa','RB Leipzig','9,35 Mio. €')
  ], pointsCollectors:[],
  editorial:{editor:'Werner',role:'Wochenanalyse',headline:'Große Einkäufe, unbekannte Kontostände',text:'Luca besitzt mit 71,25 Millionen Euro den wertvollsten und aus Sicht der Redaktion stärksten Kader. Matthias hat sich auf 62,14 Millionen hochgekauft, Sebastian auf 55,66 Millionen umgebaut. Der reine Kaderwert sagt aber nichts darüber aus, wer im Plus oder Minus steht.',managerAngle:'Transferduell der Woche: Muje bietet 8,562 Millionen für Moreira und wird abgelehnt; Luca bekommt ihn kurz darauf für 8,80 Millionen. Sebastian korrigiert seinen Schmid-Fehlgriff nach dem Wechsel des Österreichers nach Italien.'}
}
