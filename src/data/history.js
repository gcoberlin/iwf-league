export const seasons = [
  { season:'2016/17', table:[['Luca',1182],['Wassilios',1030],['Jose',1016],['Uwe',974],['Tomi',885],['Matthias',865],['Greg',810],['Sebastian',712],['Jan',661],['Henning',554]] },
  { season:'2017/18', table:[['Jose',1207],['Jan',1110],['Luca',1062],['Wassilios',940],['Matthias',891],['Tomi',862],['Sebastian',828],['Henning',721],['Greg',704],['Uwe',691]] },
  { season:'2018/19', table:[['Sebastian',1407],['Jose',1315],['Jan',1207],['Luca',1162],['Matthias',985],['Wassilios',905],['Henning',891],['Tomi',842],['Greg',801],['Uwe',761]] },
  { season:'2019/20', table:[['Sebastian',1434],['Luca',1317],['Jose',1197],['Wassilios',1145],['Tomi',857],['Jan',847],['Uwe',812],['Henning',717],['Greg',647],['Matthias',605]] },
  { season:'2020/21', table:[['Jose',1400],['Sebastian',1213],['Luca',1114],['Wassilios',1042],['Matthias',992],['Henning',924],['Greg',879],['Jan',855],['Tomi',815],['Uwe',756]] },
  { season:'2021/22', table:[['Matthias',1427],['Jose',1419],['Sebastian',1227],['Wassilios',1199],['Luca',1151],['Jan',1067],['Greg',1008],['Henning',930],['Uwe',865],['Tomi',735]] },
  { season:'2022/23', table:[['Sebastian',1484],['Jose',1291],['Luca',1117],['Wassilios',1066],['Henning',1006],['Tomi',922],['Matthias',867],['Greg',818],['Jan',675],['Uwe',650]] },
  { season:'2023/24', table:[['Jose',1593],['Sebastian',1576],['Luca',1570],['Greg',1205],['Matthias',1195],['Tomi',1039],['Jan',994],['Uwe',989],['Wassilios',884],['Henning',852]] },
  { season:'2024/25', table:[['Sebastian',1745],['Luca',1556],['Jose',1520],['Wassilios',1364],['Jan',1333],['Henning',1236],['Matthias',1223],['Tomi',1208],['Greg',919],['Uwe',865]] },
  { season:'2025/26', table:[['Sebastian',1891],['Jose',1708],['Jan',1409],['Henning',1382],['Matthias',1336],['Luca',1248],['Greg',1228],['Wassilios',1029],['Tomi',1027],['Uwe',0]] },
].map(item => ({...item, champion:item.table[0][0], championPoints:item.table[0][1]}))

export const allTimeTable = [
  ['Jose',13666],['Sebastian',13517],['Luca',12479],['Wassilios',10604],['Matthias',10386],['Jan',10158],['Henning',9213],['Tomi',9192],['Greg',9019],['Uwe',7363]
].map(([name, points], index) => ({rank:index+1, name, points}))

export const titleRanking = Object.entries(seasons.reduce((acc, season) => {
  acc[season.champion] = (acc[season.champion] || 0) + 1
  return acc
}, {})).map(([name,titles]) => ({name,titles})).sort((a,b) => b.titles-a.titles || a.name.localeCompare(b.name))

export const records = {
  recordChampion: seasons.reduce((best, season) => season.championPoints > best.championPoints ? season : best, seasons[0]),
  closestTitle: seasons.reduce((best, season) => {
    const margin = season.table[0][1] - season.table[1][1]
    return !best || margin < best.margin ? {season:season.season, margin, champion:season.champion, runnerUp:season.table[1][0]} : best
  }, null),
  allTimeLeader: allTimeTable[0],
  allTimeGap: allTimeTable[0].points - allTimeTable[1].points,
}
