import React from 'react'
import './footer.scss'

const footer = () => {
  const handlePhoneClick = () => {
    if (window.innerWidth <= 768) { // Assuming mobile devices have a width of 768px or less
      window.location.href = 'tel:010-010-010';
    } else {
      alert('전화번호: 010-010-010');
    }
  };

  return (
    <footer>
      <ul>
        <li>주소: 경기도 안산시 상록구 본오동</li>
        <li>이메일: example@example.com</li>
        <li>전화번호: <span onClick={handlePhoneClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>010-010-010</span></li>
        <li>카카오톡ID: example</li>
      </ul>
      <ul>
        <li>회사명:   익스프레스</li>
        <li>사업자등록번호: 000-00-00000</li>
        <li>대표자:  홍길동</li>
      </ul>
    </footer>
  )
}

export default footer
