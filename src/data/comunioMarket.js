const ranked = (name, club, value) => ({ name, club, value })
export const comunioMarket = {
  updatedAt:'18.08.2026', dataStatus:'Redaktionell geprüft', winners:[], losers:[],
  recentTransfers:[
    {date:'18.08.', player:'Kane', fee:'26,30 Mio. €', manager:'Jose', direction:'in'},
    {date:'17.08.', player:'Nusa', fee:'9,2875 Mio. €', manager:'Sebastian', direction:'in'},
    {date:'17.08.', player:'Nebel', fee:'3,65 Mio. €', manager:'Sebastian', direction:'in'},
    {date:'17.08.', player:'Dompé', fee:'0,88 Mio. €', manager:'Gregor', direction:'in'},
    {date:'17.08.', player:'Finkgräfe', fee:'0,59 Mio. €', manager:'Matthias', direction:'in'},
    {date:'17.08.', player:'Aséko', fee:'4,2248 Mio. €', manager:'Sebastian → Computer', direction:'out'},
    {date:'16.08.', player:'Stange', fee:'1,4001 Mio. €', manager:'Luca', direction:'in'},
    {date:'16.08.', player:'Boey', fee:'0,31 Mio. €', manager:'Matthias', direction:'in'},
    {date:'15.08.', player:'Ginter', fee:'5,78 Mio. €', manager:'Jose', direction:'in'},
    {date:'15.08.', player:'Höler', fee:'2,55 Mio. €', manager:'Jan', direction:'in'}
  ],
  mostExpensive:[
    ranked('Harry Kane','FC Bayern','22,59 Mio. €'),
    ranked('Michael Olise','FC Bayern','18,86 Mio. €'),
    ranked('Joshua Kimmich','FC Bayern','15,66 Mio. €'),
    ranked('Guirassy','Borussia Dortmund','12,31 Mio. €'),
    ranked('Schick','Bayer Leverkusen','11,95 Mio. €')
  ], pointsCollectors:[],
  editorial:{editor:'Werner',role:'Blitzanalyse',headline:'Kane verändert die Liga – aber nicht allein das Ranking',text:'José landet mit Harry Kane den Königstransfer und springt sofort in die Spitzengruppe. Das Power Ranking bleibt trotzdem ein Qualitätsranking: Sebastian hat aktuell den komplettesten Kader, Luca den Kimmich-Anker und Henning den stärksten Doppelsturm.',managerAngle:'Marktwert ist nicht Qualität. Matthias besitzt beispielsweise mehr Kaderwert als mehrere Manager vor ihm, trägt aber mehr offene Rollen und Spekulationen im Kader. Genau deshalb bewertet die Redaktion Stammplatzsicherheit, Punktepotenzial, Spitze und Breite.'}
}
