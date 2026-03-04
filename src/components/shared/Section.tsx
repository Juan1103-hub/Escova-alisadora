import React from 'react';

const Section = ({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`section-pad relative z-10 ${className}`}>
    <div className="container-fluid relative">
      {children}
    </div>
  </section>
);

export default Section;
