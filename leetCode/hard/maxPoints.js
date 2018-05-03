//requires mocha.js installed locally or globally
// https://leetcode.com/problems/max-points-on-a-line/description/
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      /**
       * @param {Point[]} points
       * @return {number}
       */
      // let maxPoints1 = function(points) {
      //   let len = points.length;
      //   if(len <= 2){
      //     return len;
      //   }
      //   let lines = {};
      //   let max = 1;
      //   for(let i = 0; i<len; i++){
      //     for(let j = i + 1; j<len; j++){
      //       let k = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0]);
      //       let m = k === -Infinity ? points[i][0]:points[i][1] - k*points[i][0];
      //       if(lines[k] === undefined){
      //         lines[k] = {};
      //       } else if(lines[k][m] === undefined){
      //         lines[k][m] = 2;
      //       } else {
      //         lines[k][m]++;
      //       }
      //       if(lines[k][m] > max){
      //         max = lines[k][m];
      //       }
      //     }
      //   }
      //   let counter = 0;
      //   while(max > 0){
      //     counter++;
      //     max -= counter;
      //   }
      //   return counter+1;
      // };
      let maxPoints = function(points) {
        let len = points.length;
        
        if(len <= 2){
          return len;
        }
        let flag = true;
        for(let i = 1; i<len;i++){
          if(points[i][0] !== points[i-1][0] || points[i][1] !== points[i-1][1]){
            flag = false;
            break;
          }
        }
        if(flag){
          return len;
        }
        let GCD = function(a,b){
          if(b === 0){
            return a;
          } else {
            return GCD(b,a % b);
          }
        }
        let group = {};
        let max = 1;
        for(let i = 0; i<len; i++){
          for(let j = i + 1; j<len; j++){
            if(points[i][0] === points[j][0] && points[i][1] === points[j][1]){
              continue;
            }
            let y = points[i][1] - points[j][1];
            let x = points[i][0] - points[j][0];
            let gcd = GCD(y,x);
            y /= gcd;
            x /= gcd;
            let counter = 0;
            if(group[y] === undefined){
              group[y]={};
            }

            if(group[y][x] === undefined){
              group[y][x] = [];
            } else {
              if(group[y][x].indexOf[i] !== -1){
                console.log('skip')
                continue;
              }
            }
            for(let n = 0;n < len; n++){
              if(n === i || n === j){
                group[y][x].push(n);
                counter++;
                continue;
              }
              if(points[i][0] === points[n][0] && points[i][1] === points[n][1]){
                group[y][x].push(n);
                counter++;
                continue;
              }
              let yA = points[n][1]-points[i][1];
              let xA = points[n][0]-points[i][0];
              let gcdA = GCD(yA,xA);
              yA /= gcdA;
              xA /= gcdA; 
              if(yA === y && xA === x){
                group[y][x].push(n);
                counter ++;
              } 
            }
            if(max < counter){
              max = counter;
            }
            if(max > len /2){
              break;
            }
          }
        }
        console.log(group)
        return max;
      };
      console.log(maxPoints([[560,248],[0,16],[30,250],[950,187],[630,277],[950,187],[-212,-268],[-287,-222],[53,37],[-280,-100],[-1,-14],[-5,4],[-35,-387],[-95,11],[-70,-13],[-700,-274],[-95,11],[-2,-33],[3,62],[-4,-47],[106,98],[-7,-65],[-8,-71],[-8,-147],[5,5],[-5,-90],[-420,-158],[-420,-158],[-350,-129],[-475,-53],[-4,-47],[-380,-37],[0,-24],[35,299],[-8,-71],[-2,-6],[8,25],[6,13],[-106,-146],[53,37],[-7,-128],[-5,-1],[-318,-390],[-15,-191],[-665,-85],[318,342],[7,138],[-570,-69],[-9,-4],[0,-9],[1,-7],[-51,23],[4,1],[-7,5],[-280,-100],[700,306],[0,-23],[-7,-4],[-246,-184],[350,161],[-424,-512],[35,299],[0,-24],[-140,-42],[-760,-101],[-9,-9],[140,74],[-285,-21],[-350,-129],[-6,9],[-630,-245],[700,306],[1,-17],[0,16],[-70,-13],[1,24],[-328,-260],[-34,26],[7,-5],[-371,-451],[-570,-69],[0,27],[-7,-65],[-9,-166],[-475,-53],[-68,20],[210,103],[700,306],[7,-6],[-3,-52],[-106,-146],[560,248],[10,6],[6,119],[0,2],[-41,6],[7,19],[30,250]]))
      // console.log(maxPoints([[0,0],[94911151,94911150],[94911152,94911151]]))
      
      done()
    })
  });
});