import React, { useEffect, useState } from 'react';
import './ProfileNavbar.css';
import profileimg from '../../assets/profile.png';

const ProfileNavbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg?.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <>
      <div className="profile-navbar">
        <img
          src={user?.photo_url || profileimg}
          alt="Photo"
          className="profileimg"
        />
        <h2 className="profiletext">
          {user ? `${user.first_name || ''} (@${user.username || ''})` : 'Профиль'}
        </h2>
      </div>

      <div className="link-wrapper">
        <div className="link">
          <a href="#"><button className="link-btn">Поддержка</button></a>
          <a href="#"><button className="link-btn">Условия доставки</button></a>
          <a href="#"><button className="link-btn">Политика конфиденциальности</button></a>
        </div>
      </div>

      <h3 className="order-main-title">Мои заказы:</h3>
    </>
  );
};

export default ProfileNavbar;
