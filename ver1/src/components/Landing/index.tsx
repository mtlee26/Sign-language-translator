import React from 'react';
import cn from 'classnames';

import renderSection1 from './section1';
import renderSection2 from './section2';
import renderSection3 from './section3';
import renderSection4 from './section4';
import renderSection5 from './section5';
import renderSection6 from './section6';

interface IProps {
  className?: string;
}

function Landing(props: IProps) {
  return (
    <main className={`landing bg-white flex flex-col overflow-hidden ${props.className || ''}`}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderSection5(props)}
      {renderSection6(props)}
    </main>
  );
}

export default Landing;
