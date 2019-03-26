const userId = localStorage.getItem("userId");

export const getBookedRooms = async () => {
    const res = await fetch(`http://127.0.0.1:5000/user-bookings/${userId}`, {
      headers: {
        'Accept': 'application/json',
      },
    });
    const resJson = await res.json();
    return resJson;
}

export const getWatchedRooms = async () => {
    const res = await fetch(`http://127.0.0.1:5000/user-watch-list/${userId}`, {
      headers: {
        'Accept': 'application/json',
      },
    });
    const resJson = await res.json();
    return resJson;
}

export const watchRoom = (
    roomId=1,
    capacity=0,
    startTime="2019-02-27 10:00:00",
    endTime="2019-02-27 11:00:00"
  ) => {
    console.log(JSON.stringify(
      {
        UserId: userId,
        RoomId: roomId,
        Capacity: capacity,
        StartTime: startTime,
        EndTime: endTime
      }))
  return fetch('http://127.0.0.1:5000/watch-room', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(
      {
        UserId: userId,
        RoomId: roomId,
        Capacity: capacity,
        StartTime: startTime,
        EndTime: endTime
      }
    ),
  }).then(res => console.log(res))
}

export const unwatchRoom = async (watchId) => {
    const res = await fetch(`http://127.0.0.1:5000/delete-watch/${watchId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        },
    });
    console.log(await res.json());
}

export const bookRoom = async (
    roomId=1,
    name="My meeting",
    startTime="2019-02-27 10:00:00",
    endTime="2019-02-27 11:00:00"
  ) => {
    return await fetch('http://127.0.0.1:5000/book-room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(
        {
          UserId: userId,
          RoomId: roomId,
          Name: name,
          StartTime: startTime,
          EndTime: endTime
        }
      ),
    });
}

export const getRooms = async (name=null, location=null, floor=null, capacity=0, start=null, end=null, showUnavailable) => {
    const res = await fetch(`http://127.0.0.1:5000/meeting-rooms?capacity=${capacity}${name ? `&name=${name}` : ''}${location ? `&location=${location}` : ''}${floor ? `&floor=${floor}` : ''}${start ? `&start=${start}`: ''}${end ? `&end=${end}` : ''}&show_unavailable=${showUnavailable}`, {
      headers: {
        'Accept': 'application/json',
      },
    });
    return await res.json();
}

export const convertDate = (date) => {
    const formattedDate = new Date(date);
    return `${formattedDate.toLocaleDateString()} ${formattedDate.toTimeString()}`.slice(0, 16)
}

export const cancelBooking = async (bookingId) => {
  const res = await fetch(`http://127.0.0.1:5000/delete-booking/${bookingId}`, {
    method: 'DELETE',
    headers: {
        Accept: 'application/json',
    },
  });
  console.log(await res.json());
}
