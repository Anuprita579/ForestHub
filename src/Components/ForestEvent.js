import React from 'react'
const eventslist = [
    {
        id: "001",
        title: "Forest Cleanup Drive",
        organisers: "Environmentalists United",
        location: "Goa, India",
        type: "environmental",
        date: "28/02/2024",
        attendee: "28",
        price: "free"
    },
    {
        id: "002",
        title: "Mountain Biking Adventure",
        organisers: "Extreme Adventures Club",
        location: "Himalayas, India",
        type: "adventure",
        date: "12/03/2024",
        attendee: "30",
        price: "free"
    },
    {
        id: "003",
        title: "Bird Watching Tour",
        organisers: "Nature Enthusiasts Society",
        location: "Vancouver, Canada",
        type: "nature",
        date: "10/03/2024",
        attendee: "15",
        price: "free"
    },
    {
        id: "004",
        title: "Tree Plantation Drive",
        organisers: "Green Earth Foundation",
        location: "Central Park, New York",
        type: "environmental",
        date: "02/03/2024",
        attendee: "49",
        price: "free"
    },
    {
        id: "005",
        title: "Wildlife Photography Workshop",
        organisers: "Nature Photographers Association",
        location: "Masai Mara, Kenya",
        type: "photography",
        date: "15/03/2024",
        attendee: "10",
        price: "free"
    }
];

function ForestEvent() {
    // Calculate the offset in milliseconds for each day
    const oneDay = 24 * 60 * 60 * 1000;

    // Update dates for each event
    const updatedEvents = eventslist.map(event => {
        // Parse event date
        const [day, month, year] = event.date.split('/');
        const eventDate = new Date(`${year}-${month}-${day}`);

        // Calculate new date
        const newDate = new Date(eventDate.getTime() + oneDay);

        // Format new date
        const newDay = String(newDate.getDate()).padStart(2, '0');
        const newMonth = String(newDate.getMonth() + 1).padStart(2, '0'); // January is 0!
        const newYear = newDate.getFullYear();
        const formattedDate = `${newDay}/${newMonth}/${newYear}`;

        // Update event object with new date
        return { ...event, date: formattedDate };
    });


  return (
    <>
    <div className='flex'>
        {updatedEvents.map((eve)=>{
            return(
                <div key={eve.id} className='bg-green-100 p-2 m-2'>
                    <h1>{eve.title}</h1>
                    <h3>{eve.organisers}</h3>
                    <h3>{eve.location}</h3>
                    <h3>{eve.type}</h3>
                    <h3>{eve.date}</h3>
                    <h4>{eve.attendee}</h4>
                    <h4>{eve.price}</h4>
                    <button className='bg-green-800 text-white p-2 m-2'>Book Ticket</button>
                    
                </div>
            )
        })}
    </div>
      
    </>
  )
}

export default ForestEvent
