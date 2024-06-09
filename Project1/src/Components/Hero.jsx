const HeroSection = () =>{
    return(
        <main className="hero container">
            <div className="Hero-Content">
            <h1>YOUR FEET DESERVES THE BETTER</h1>
            <p>Your feet deserves the best and we are here to 
                help you with our shoes. Your feet deserves
                the best and we are here to help you with 
                our shoes.
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className= "shopping">
                <p>available on</p>
                <div className="brand-icons">
                    <img src = "/images/amazon.png" alt = "amazon-logo"/>
                    <img src = "/images/flipkart.png" alt = "flipkart-logo"/>

                </div>

            </div>
            </div>
            <div className="Hero-Image">
            <img src = "/images/shoe_image.png" alt = "shoe-image"/>

            </div>
        </main>
    );
};
export default HeroSection;