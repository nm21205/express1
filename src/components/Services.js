import React, { useState, useEffect } from 'react';
import './Services.scss';

function Services() {
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" style={{ backgroundColor: bgColor }}>
      <h2>서비스 종류</h2>
      <ul>
        <li>✅ 용달이사: 소량 짐 운송</li>
        <li>✅ 일반 이사: 바구니 대여 + 운반 + 가구·가전 배치</li>
        <li>✅ 포장이사: 모든 물건 포장 + 운반 + 가구·가전 배치 + 소품 정리</li>
        <li>✅ 사무실, 오피스텔, 보관이사 서비스 제공</li>
        <li>✅ 사다리차 장비 대기 (고층 이사 필수)</li>
        <li>✅ 고객 상황에 맞춰 서비스 제공 가능</li>
      </ul>
    </section>
  );
}

export default Services; 