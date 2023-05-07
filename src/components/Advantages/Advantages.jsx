import loyalty from 'images/advantages/Loyalty Program-min.svg';
import support from 'images/advantages/Support-min.svg';
import payouts from 'images/advantages/Fast Payouts-min.svg';
import offers from 'images/advantages/Exclusive Offers-min.svg';
import hold from 'images/advantages/Minimal Hold-min.svg';
import approach from 'images/advantages/Many niches-min.svg';
import {
  AdvantagesBlock,
  AdvantagesIconsBlock,
  AdvantagesImg,
  AdvantagesItemTitle,
  AdvantagesItemText,
  AdvantagesTitle,
} from './Advantages.styled';

export const Advantages = () => {
  return (
    <>
      <AdvantagesTitle>Why is Click2Dep?</AdvantagesTitle>
      <AdvantagesBlock>
        <AdvantagesIconsBlock>
          <AdvantagesImg src={loyalty} alt="About Us" width={150} />
          <AdvantagesItemTitle>Loyalty Program</AdvantagesItemTitle>
          <AdvantagesItemText>
            The more you work with us, the more rewards you get!
          </AdvantagesItemText>
        </AdvantagesIconsBlock>
        <AdvantagesIconsBlock>
          <AdvantagesImg src={support} alt="About Us" width={150} />
          <AdvantagesItemTitle>
            Experienced and Responsive Support
          </AdvantagesItemTitle>
          <AdvantagesItemText>
            Our 24/7 support team is always ready to help you with any questions
          </AdvantagesItemText>
        </AdvantagesIconsBlock>
        <AdvantagesIconsBlock>
          <AdvantagesImg src={payouts} alt="About Us" width={150} />
          <AdvantagesItemTitle>Fast payouts</AdvantagesItemTitle>
          <AdvantagesItemText>We always pay on time</AdvantagesItemText>
        </AdvantagesIconsBlock>
        <AdvantagesIconsBlock>
          <AdvantagesImg src={offers} alt="About Us" width={150} />
          <AdvantagesItemTitle>Exclusive Offers</AdvantagesItemTitle>
          <AdvantagesItemText>
            We have a variety of exclusive offers that you won't find anywhere
            else.
          </AdvantagesItemText>
        </AdvantagesIconsBlock>
        <AdvantagesIconsBlock>
          <AdvantagesImg src={hold} alt="About Us" width={150} />
          <AdvantagesItemTitle>Minimal Hold</AdvantagesItemTitle>
          <AdvantagesItemText>
            We have a minimal hold period for payments.
          </AdvantagesItemText>
        </AdvantagesIconsBlock>
        <AdvantagesIconsBlock>
          <AdvantagesImg src={approach} alt="About Us" width={150} />
          <AdvantagesItemTitle>Unique Approach</AdvantagesItemTitle>
          <AdvantagesItemText>
            We try to find an individual approach for everyone
          </AdvantagesItemText>
        </AdvantagesIconsBlock>
      </AdvantagesBlock>
    </>
  );
};
