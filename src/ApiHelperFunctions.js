export const getBookedRooms = async () => {
    const res = await fetch('http://127.0.0.1:5000/user-bookings/1', {
      headers: {
        'Accept': 'application/json',
      },
    });
    const resJson = await res.json();
    for (let i=0; i < resJson.length; i++) {
        resJson[i].StartTime = convertDate(resJson[i].StartTime);
        resJson[i].EndTime = convertDate(resJson[i].EndTime); 
    }
    return resJson;
}

export const getWatchedRooms = async () => {
    const res = await fetch('http://127.0.0.1:5000/user-watch-list/1', {
      headers: {
        'Accept': 'application/json',
      },
    });
    const resJson = await res.json();
    for (let i=0; i < resJson.length; i++) {
        resJson[i].StartTime = convertDate(resJson[i].StartTime);
        resJson[i].EndTime = convertDate(resJson[i].EndTime); 
    }
    return resJson;
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

export const bookRoom = (roomId) => {
    return fetch('http://127.0.0.1:5000/book-room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(
        {
          UserId: 1,
          RoomId: roomId,
          Name: "My meeting",
          StartTime: "2019-02-27 10:00:00",
          EndTime: "2019-02-27 11:00:00"
        }
      ),
    }).then(res => console.log(res))
}

export const getRooms = async (name=null, location=null, floor=null, capacity=0, start=null, end=null, showUnavailable) => {
    const res = await fetch(`http://127.0.0.1:5000/meeting-rooms?capacity=${capacity}${name ? `&name=${name}` : ''}${location ? `&location=${location}` : ''}${floor ? `&floor=${floor}` : ''}${start ? `&start=${start}`: ''}${end ? `&end=${end}` : ''}&show_unavailable=${showUnavailable}`, {
      headers: {
        'Accept': 'application/json',
      },
    });
    return await res.json();
}

const convertDate = (date) => {
    const formattedDate = new Date(date);
    return `${formattedDate.toLocaleDateString()} ${formattedDate.toTimeString()}`.slice(0, 16)
}
