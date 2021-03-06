
function mean(numbers) {
    
    var total = 0,
        i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
  }
  function median(numbers) {
   
    var median = 0,
        numsLen = numbers.length;
    numbers.sort();
    if (numsLen % 2 === 0) {
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { 
        median = numbers[(numsLen - 1) / 2];
    }
    return median;
  }
  function mode(numbers) {
    
    var modes = [],
        count = [],
        i,
        number,
        maxIndex = 0;
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count) if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
            modes.push(Number(i));
        }
    }
    return modes;
  }
  
  var data = [35, 11, 45, 45, 11,];
  console.log(mean(data));
   console.log(median(data));
   console.log(mode(data));
