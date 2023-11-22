import { useAuth0 } from "@auth0/auth0-react";
export const Profile = () => {
  const { user, logout } = useAuth0();
  return (
    <>
      <div className="section-profile">
        <div className="section-profile__profile-card">
          <div className="section-profile__profile-card__img-container">
            <img
              // src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?auto=format&fit=crop&q=80&w=1559&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={user?.picture}
              alt="user"
              className="section-profile__profile-card__img-container__img"
            />
          </div>
          <div className="section-profile__profile-card__text">
            <p className="section-profile__profile-card__text__info">
              <span className="section-profile__profile-card__text__info__key">
                Name:{" "}
              </span>
              <span className="section-profile__profile-card__text__info__value">
                {user?.nickname}
              </span>
            </p>
            <p className="section-profile__profile-card__text__info">
              <span className="section-profile__profile-card__text__info__key">
                Email:{" "}
              </span>
              <span className="section-profile__profile-card__text__info__value">
                {user?.email}
              </span>
            </p>
            <button
              className="section-profile__profile-card__text__btn btn-tertiary"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
