var corpFlightBookings = function(bookings, n) {
  let seatsPerFlight = {};
  
  for (let i = 0; i < bookings.length; i++) {
    for (let j = bookings[i][0]; j <= bookings[i][1]; j++) {
      if (seatsPerFlight[j] === undefined) {
        seatsPerFlight[j] = bookings[i][2];
      } else {
        seatsPerFlight[j] += bookings[i][2];
      }
    }
  }

  let seats = [];
  
  for (let i = 1; i <= n; i++) {
    if (!seatsPerFlight[i]) {
      seats.push(0);
    } else {
      seats.push(seatsPerFlight[i]);
    }
  }
  
  return seats; 
};

console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5))