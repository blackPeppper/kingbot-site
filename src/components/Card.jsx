import React from 'react';

export function Card({ children, title }) {
  return (
    <>
      <div className="card bg-gray-800 anim-fade-in anim-delay-5000ms anim-mode-backwards">
        <div className="body p-8">
          <p className="title text-gray-50">{title}</p>
          <p className="text font-sm text-gray-100">{children}</p>
        </div>
      </div>
    </>
  );
}
