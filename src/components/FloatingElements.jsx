import React from 'react';

function FloatingElements() {
  return (
    <div className="floating-elements">
      {/* Números Matrix flotando */}
      <div className="floating-number" style={{ left: '10%', animationDelay: '0s' }}>01</div>
      <div className="floating-number" style={{ left: '20%', animationDelay: '2s' }}>101</div>
      <div className="floating-number" style={{ left: '30%', animationDelay: '4s' }}>010</div>
      <div className="floating-number" style={{ left: '70%', animationDelay: '1s' }}>001</div>
      <div className="floating-number" style={{ left: '80%', animationDelay: '3s' }}>110</div>
      <div className="floating-number" style={{ left: '90%', animationDelay: '5s' }}>011</div>

      {/* Métricas flotando */}
      <div className="floating-metric" style={{ left: '15%', animationDelay: '1s' }}>+127%</div>
      <div className="floating-metric" style={{ left: '25%', animationDelay: '6s' }}>+2.4k</div>
      <div className="floating-metric" style={{ left: '75%', animationDelay: '2s' }}>↗️ 89%</div>
      <div className="floating-metric" style={{ left: '85%', animationDelay: '4s' }}>+156</div>

      {/* Símbolos tech */}
      <div className="floating-symbol" style={{ left: '5%', animationDelay: '0s' }}>{'<>'}</div>
      <div className="floating-symbol" style={{ left: '35%', animationDelay: '3s' }}>#{}</div>
      <div className="floating-symbol" style={{ left: '65%', animationDelay: '1s' }}>@</div>
      <div className="floating-symbol" style={{ left: '95%', animationDelay: '5s' }}>*</div>
    </div>
  );
}

export default FloatingElements;