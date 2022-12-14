
function schedule(listOfSelectedCoworkers) {
    // Here we set an array of valid times, and iterate keeping only the matching valid times, a new array being formed and the previous one discarded
    // Until all items have been iterated, then we show the result.
    // For the first iteration the first array is the only one being populated, next round is a comparison of that array, and a creation of a new one based on it.
    // The array will follow the format that index 0 is 00:00 to 00:30, index 1 is 00:30 to 01:00, etc.
    var availableTimes = [];
    var resultingArray = [];
    var currentArray = [];
  
    function calculateSlots(time_start, time_end) {
      var start = calculateHoursMinutes(time_start);
      var end = calculateHoursMinutes(time_end);
      // console.log("delta: " + delta);
      // console.log("start of available slots: " + start);
  
      var returnValue = [start, end];
      return returnValue;
    }
  
    function addToResultingArray(start, end) {
      for (var i = start; i < end; i++) {
        // console.log("i: "+i);
        resultingArray.push(i);
      }
    }
    function addToCurrentArray(start, end) {
      for (var i = start; i < end; i++) {
        // console.log("i: "+i);
        currentArray.push(i);
      }
    }
  
    function calculateHoursMinutes(time) {
      // var strDate = listOfSelectedCoworkers[0].time_one_start;
      var strDate = time;
      var arr = strDate.split(":");
      var hour = parseInt(arr[0]);
      var minute = parseInt(arr[1]);
      var total = hour * 2 + (minute == 30 ? 1 : 0); // if minutes is 30 then we add 1 to the total.
  
      // console.log(hour + "hours");
      // console.log(min + "minutes");
      return total; // 9 would be 18 and every 30 minutes adds 1 to the total. 9h 30m would be 19.
    }
  
    if (listOfSelectedCoworkers.length > 1) {
      // we need at least two coworkers to plan a meeting
  
      //first item added to prevArray
      var time_one = calculateSlots(
        listOfSelectedCoworkers[0].time_one_start,
        listOfSelectedCoworkers[0].time_one_end
      );
      addToResultingArray(time_one[0], time_one[1]);
      var time_two = calculateSlots(
        listOfSelectedCoworkers[0].time_two_start,
        listOfSelectedCoworkers[0].time_two_end
      );
      addToResultingArray(time_two[0], time_two[1]);
      var time_three = calculateSlots(
        listOfSelectedCoworkers[0].time_three_start,
        listOfSelectedCoworkers[0].time_three_end
      );
      addToResultingArray(time_three[0], time_three[1]);
      // console.log(resultingArray);
      //everything else
    }
    // console.log("Number of selected people: " + listOfSelectedCoworkers.length);
  
    for (var i = 1; i < listOfSelectedCoworkers.length; i++) {
      // i is the coworker
      var tempArray = resultingArray;
      resultingArray = []; // we save the array for comparison, but build the prevArray again from scratch.
      currentArray = [];
      // here we add to currentArray to later compare to the previous array
      var time_one = calculateSlots(
        listOfSelectedCoworkers[i].time_one_start,
        listOfSelectedCoworkers[i].time_one_end
      );
      addToCurrentArray(time_one[0], time_one[1]);
      var time_two = calculateSlots(
        listOfSelectedCoworkers[i].time_two_start,
        listOfSelectedCoworkers[i].time_two_end
      );
      addToCurrentArray(time_two[0], time_two[1]);
      var time_three = calculateSlots(
        listOfSelectedCoworkers[i].time_three_start,
        listOfSelectedCoworkers[i].time_three_end
      );
      addToCurrentArray(time_three[0], time_three[1]);
  
      // For every item in this current array we build the new array of matches
      resultingArray = currentArray.filter((element) =>
        tempArray.includes(element)
      ); //All the logic leads here. This one line. I thought it would take at least 15 lines.
    }
    // console.log("Resulting array: " + resultingArray);
  
    availableTimes = [];
    resultingArray.forEach((time) => {
      const quotient = Math.floor(time / 2);
      const remainder = time % 2;
      remainder > 0
        ? availableTimes.push(quotient + ":" + "30")
        : availableTimes.push(quotient + ":" + "00");
    });
    // console.log("Available times: " + availableTimes);
    var tempMessage;
    if (availableTimes.length > 0) {
      if (availableTimes.length > 1) {
        const str = String(availableTimes.slice(1));
        const spacedTimes = str.replace(/,/g, ", ");
        tempMessage =
          "The next available time for a meeting is " +
          availableTimes[0] +
          ". Other possibles times: " +
          spacedTimes +
          ".";
      } else {
        tempMessage =
          "The next available time for a meeting is " + availableTimes[0] + ".";
      }
    } else {
      tempMessage = "No match found. Select two or more possible attendees."
    }
    return tempMessage;
  }
  
  module.exports = { schedule };
  