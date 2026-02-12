import "./PopularDestinations.css";

import d1 from "../assets/destinations/varanasi.png";
import d2 from "../assets/destinations/shimla.png";
import d3 from "../assets/destinations/jaipur.png";
import d4 from "../assets/destinations/ayodhya.png";
import d5 from "../assets/destinations/kedarnath.png";

const destinations = [
  { id: 1, name: "Varanasi", image: d1 },
  { id: 2, name: "Shimla", image: d2 },
  { id: 3, name: "Jaipur", image: d3 },
  { id: 4, name: "Ayodhya", image: d4 },
  { id: 5, name: "Kedarnath", image: d5 },
];

function PopularDestinations() {
  return (
    <section className="destinations-section" id="destinations">
      <h2 className="destinations-title">POPULAR DESTINATIONS</h2>

      <div className="destinations-scroll">
        {destinations.map((item) => (
          <div className="destination-card" key={item.id}>
            <div className="destination-image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>
            <p className="destination-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
