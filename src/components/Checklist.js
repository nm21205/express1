import React from 'react';
import './Checklist.scss';

function Checklist() {
  return (
    <section id="checklist">
      <h2>소비자 체크리스트</h2>
      <ul>
        <li>✔ 이사업체 허가 여부 확인: 피해 보상 가능 업체여부 확인 필수</li>
        <li>✔ 계약서 작성 필수: 미작성시, 보상 어려움</li>
        <li>✔ 살던 집 원상복구 및 공과금 정산</li>
        <li>✔ 주소 이전 및 우편물 변경 신청</li>
        <li>✔ 물품 파손·분실 시 보상 방법: 즉시 사진 촬영 후 14일 이내 신고</li>
      </ul>
    </section>
  );
}

export default Checklist; 