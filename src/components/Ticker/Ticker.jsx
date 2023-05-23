import Marquee from 'react-double-marquee';
import { TickerBlock } from './Ticker.styled';

export const Ticker = () => {
  return (
    <TickerBlock>
      <Marquee
        autoStart={true}
        direction={'left'}
        delay={1000}
        speed={0.05}
        childMargin={50}
      >
        Join us and write your review about our work!
      </Marquee>
    </TickerBlock>
  );
};
