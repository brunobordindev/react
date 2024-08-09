import "./styles.css";
export default function Restaurants() {
    return (
        <div className="restaurants_container">
            <h3>Conheça nossos restaurantes</h3>
            <div className="container_cards">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}
function RestaurantCard() {
    return (
        <div className="restaurant_card">
            <div className="avatar" />
            <div className="content_info">
                <p>UnyDonald’s</p>
                <p>Fast-food</p>
            </div>
        </div>
    );
}