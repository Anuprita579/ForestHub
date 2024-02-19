import React from "react";
import { IonIcon } from "@ionic/react";
import { location } from "ionicons/icons";
import { Link } from "react-router-dom";

const eventslist = [
  {
    id: "001",
    title: "Forest Cleanup Drive",
    img_src:
      "https://img.freepik.com/free-photo/reforestation-done-by-voluntary-group_23-2149500822.jpg?size=626&ext=jpg&ga=GA1.2.693548172.1671363486&semt=ais",
    organisers: "Environmentalists United",
    location: "Goa, India",
    type: "environmental",
    date: "25/02/2024",
    attendee: "28",
    price: "free",
  },
  {
    id: "002",
    title: "Mountain Biking Adventure",
    img_src:
      "https://img.freepik.com/free-photo/mountain-bike-cyclist-standing-top-mountain-with-bicycle_1150-19013.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
    organisers: "Extreme Adventures Club",
    location: "Himalayas, India",
    type: "adventure",
    date: "12/03/2024",
    attendee: "30",
    price: "free",
  },
  {
    id: "003",
    title: "Bird Watching Tour",
    img_src:
      "https://img.freepik.com/free-photo/two-birds-branch_181624-8901.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
    organisers: "Nature Enthusiasts Society",
    location: "Vancouver, Canada",
    type: "nature",
    date: "10/03/2024",
    attendee: "15",
    price: "free",
  },
  {
    id: "004",
    title: "Tree Plantation Drive",
    img_src:
      "https://img.freepik.com/free-vector/vector-small-green-sprout-soil-with-bokeh-background_1284-48013.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
    organisers: "Green Earth Foundation",
    location: "Central Park, New York",
    type: "environmental",
    date: "02/03/2024",
    attendee: "49",
    price: "free",
  },
  {
    id: "005",
    title: "Wildlife Photography Workshop",
    img_src:
      "https://img.freepik.com/free-photo/cute-boys-playing-nature-sunset-generated-by-ai_188544-29851.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=sph",
    organisers: "Nature Photographers Association",
    location: "Masai Mara, Kenya",
    type: "photography",
    date: "15/03/2024",
    attendee: "10",
    price: "free",
  },
];

function ForestEvent() {



  return (
    <>
      <div className="flex min-h-screen flex-wrap">
        {eventslist.map((eve) => {
          return (
            <div
              key={eve.id}
              className="bg-slate-100 p-4 m-5 h-fit w-80 flex flex-col justify-center items-center drop-shadow-2xl shadow-black transform hover:scale-105 duration-150"
            >
              <img src={eve.img_src} alt="event" className="w-full h-40 m-4" />
              <h1 className="font-semibold text-xl whitespace-nowrap">
                {eve.title}
              </h1>
              <h3 className="text-slate-500 italic font-serif">
                {eve.organisers}
              </h3>
              <h3>
                {" "}
                <IonIcon icon={location}></IonIcon> {eve.location}
              </h3>
              <h3 className=" text-slate-700 font-thin">{eve.type}</h3>
              <h3>{eve.date}</h3>
              <h4>
                {" "}
                <span className="font-semibold">Attendee :</span> {eve.attendee}
              </h4>
              <h4>{eve.price}</h4>
              {/* Use Link from react-router-dom for dynamic routing */}
              <Link
                to={{
                  pathname: `/booking/${eve.id}/${encodeURIComponent(
                    eve.location
                  )}/${encodeURIComponent(eve.title)}/${encodeURIComponent(eve.date)}`, // Change to a valid date
                  state: {
                    event: eve,
                    title: eve.title,
                    location: eve.location,
                    date: eve.date,
                  },
                }}
                className="bg-green-800 text-white p-2 m-2 transform hover:scale-90 duration-200"
              >
                Book Ticket
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ForestEvent;
