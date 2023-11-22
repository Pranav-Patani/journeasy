import { FaHeart, FaRegHeart } from "react-icons/fa6";

export const Search = ({ searchPlaces,  handleLike }) => {
  const list = searchPlaces;
  return (
    <>
      <section className="section-places">
        {list?.map(
          ({
            id,
            name,
            category,
            description,
            imgUrl,
            inWishlist,
            location,
          }) => (
            <div key={id} className="card">
              <div className="card__img-container">
                <img
                  src={imgUrl}
                  alt="place"
                  className="card__img-container__img"
                />
              </div>

              <div className="card__text-container">
                <h3 className="card__text-container__name heading-secondary">
                  {name}
                </h3>
                <p className="card__text-container__description">
                  {description}
                </p>
                <p className="card__text-container__category">{category}</p>

                <div className="card__text-container__btn-container">
                  <a
                    href={location}
                    target="_blank"
                    className="card__text-container__btn-container__btn btn-tertiary"
                  >
                    Locate
                  </a>
                  <button
                    onClick={() => handleLike(id)}
                    className="card__text-container__btn-container__btn-heart"
                  >
                    {inWishlist ? (
                      <FaHeart style={{ color: `#dc2626` }} />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
};
