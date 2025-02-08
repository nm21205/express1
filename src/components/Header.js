import React from 'react';
import './Header.scss';
import { FaTruck } from "react-icons/fa";

const Header = () => {
  const handleCallClick = (e) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // 모바일에서는 전화 연결
      window.location.href = 'tel:031-485-2525';
    } else {
      // PC에서는 알림창
      e.preventDefault();
      alert('전화번호: 031-485-2525');
    }
  };

  const handleMenuClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <ul>
        <li><a href="#home" onClick={(e) => handleMenuClick(e, 'home')}><FaTruck className='FaTruck'/>익스프레스</a></li>
      </ul>
      <ul>
        <li><a href="#introduction" onClick={(e) => handleMenuClick(e, 'introduction')}>소개</a></li>
        <li><a href="#services" onClick={(e) => handleMenuClick(e, 'services')}>서비스 종류</a></li>
        <li><a href="#estimates" onClick={(e) => handleMenuClick(e, 'estimates')}>이사 비용</a></li>
        <li><a href="#checklist" onClick={(e) => handleMenuClick(e, 'checklist')}>체크리스트</a></li>
        <li><a href="#contact" onClick={(e) => handleMenuClick(e, 'contact')}>문의하기</a></li>
        <li className="call"><a href="tel:031-485-2525" onClick={handleCallClick}>📞전화 연결</a></li>
      </ul>
    </header>
  );
}

export default Header; 