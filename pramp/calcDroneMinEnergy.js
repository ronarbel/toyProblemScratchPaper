/*eslint-disable*/
function calcDroneMinEnergy(route) {  
  let energy = 0;
  let minEnergyLevel = 0;

  for (let i = 1; i < route.length; i += 1) {
    let prevZCoord = route[i - 1][2];
    let curZCoord = route[i][2];
    let energyChange = prevZCoord - curZCoord;
    energy += energyChange
    minEnergyLevel = Math.min(energy, minEnergyLevel);
  }

  return Math.abs(minEnergyLevel);
}


const route = [ [0,   2, 10],
                [3,   5,  0],
                [9,  20,  6],
                [10, 12, 15],
                [10, 10,  8] ];

console.log(calcDroneMinEnergy(route)); // 5
