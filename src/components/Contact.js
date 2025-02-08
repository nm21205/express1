import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <section id="contact">
      <h2>상담 및 문의</h2>
      <div className="contact-info">
        <p className="call">
          <a href="tel:031-485-2525">📞 전화 상담: 000-000-2525</a>
        </p>
        <p className="chat">
          <a href="https://open.kakao.com/o/someChatLink" target="_blank" rel="noopener noreferrer">
            💬 카카오톡 채팅 상담 가능
          </a>
        </p>
        <p>📍 위치: 경기도 안산시 상록구 본오동</p>
      </div>
      <p id='contact-info-p' className='contac' >🚛 익스프레스와 함께 깔끔하고 안전한 이사를 경험하세요!</p>
    </section>
  );
}

export default Contact; 