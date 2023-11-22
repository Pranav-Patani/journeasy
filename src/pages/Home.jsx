import { Link } from "react-router-dom";
import { BgVideo } from "../components/BgVideo";

const categories = [
  {
    id: 1,
    categoryName: `Hotels`,
    description: `Explore a variety of Hotels and find a perfect stay for your journey.`,
    imgUrl: `https://images.unsplash.com/photo-1669043962278-fcf15a3ba5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    id: 2,
    categoryName: `Restaurants`,
    description: `Explore some of the best restaurants around you that will never dissapoint your taste buds!`,
    imgUrl: `https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    id: 3,
    categoryName: `Tourist Spots`,
    description: `Explore the culture and the history of the city by visiting some of the best tourist attraction spots.`,
    imgUrl: `https://images.unsplash.com/photo-1470075446540-4391a96ec621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80`,
  },
];

export const Home = ({handleCategoryFilter}) => {


  return (
    <>
      <div className="section-home">
        <div className="section-home__hero">
          <BgVideo />
          <div className="section-home__hero-content">
            <div className="section-home__hero-content-logo-box">
              {/* <img className="section-home__hero-content-logo-box__logo" src="src/png/logo-no-background.png" alt="logo" /> */}
              <h1 className="section-home__hero-content-logo-box-text section-home__hero-content-logo-box-text--top heading-primary">
                journeasy
              </h1>
              <h2 className="section-home__hero-content-logo-box-text section-home__hero-content-logo-box-text--bottom heading-tertiary">
                your tourism buddy
              </h2>
            </div>
            <div className="section-home__hero-content-btn-container">
              <a href="#categories">
                <button className="btn-primary">Explore the city</button>
              </a>
            </div>
          </div>
        </div>

        <div className="section-home__categories u-center-text" id="categories">
          <h1 className="heading-primary u-margin-top u-margin-bottom ">
            Categories
          </h1>
          <div className="section-home__categories-card-container">
            {categories.map(({ id, categoryName, description, imgUrl }) => (
              <div
                key={id}
                className="section-home__categories-card-container__card"
              >
              <Link to="/places" className="section-home__categories-card-container__card__link" onClick={()=>handleCategoryFilter(categoryName)}>
                <div className="section-home__categories-card-container__card__img-container">
                  <img
                    src={imgUrl}
                    alt="category"
                    className="section-home__categories-card-container__card__img-container__img"
                  />
                  <div className="section-home__categories-card-container__card__img-container__span"></div>
                </div>

                <div className="section-home__categories-card-container__card__text-container">
                  <h2 className="heading-secondary">{categoryName}</h2>
                  <p className="section-home__categories-card-container__card__text-container-para">
                    {description}
                  </p>
                 
                    <button className="section-home__categories-card-container__card__text-container-btn btn-secondary"
                    >
                      Explore
                    </button>
                
                </div>
                </Link>
              </div>
            
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
