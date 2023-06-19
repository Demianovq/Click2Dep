import { useInView } from 'framer-motion';
import { useRef } from 'react';

import {
  BlogSection,
  BlogList,
  BlogContentBlock,
  BlogText,
  BlogTitle,
  BlogListItem,
  BlogImg,
} from './BlogPage.styled';
import { Container } from 'components/Container/Container.styled';
import blogImg1 from 'images/Blog/Blog1.jpg';
import blogImg2 from 'images/Blog/Blog2.jpg';
import blogImg3 from 'images/Blog/Blog3.jpg';

export const BlogPage = () => {
  const refFirst = useRef(null);
  const refSecond = useRef(null);
  const refThird = useRef(null);
  const isInViewFirst = useInView(refFirst);
  const isInViewSecond = useInView(refSecond);
  const isInViewThird = useInView(refThird);
  return (
    <BlogSection>
      <Container>
        <BlogList>
          <BlogListItem>
            <BlogTitle>
              The Future of Dating Affiliate Marketing in 2023: Opportunities
              and Challenges
            </BlogTitle>
            <BlogContentBlock ref={refFirst}>
              <BlogText
                style={{
                  transform: isInViewFirst ? 'none' : 'translateY(-200px)',
                  opacity: isInViewFirst ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                }}
              >
                The dating industry has always been a lucrative market for
                affiliate marketers, and 2023 is no exception. With the rise of
                dating apps and online dating platforms, the opportunities for
                affiliates to earn commissions by promoting dating offers have
                only increased. However, as with any industry, there are also
                challenges and potential pitfalls that affiliates need to be
                aware of. One of the biggest opportunities for dating affiliates
                in 2023 is the continued growth of the dating market. According
                to recent data, the online dating market is projected to reach
                $9.2 billion by 2025, with a CAGR of 4.7% between 2020 and 2025.
                This growth is driven by the increasing use of smartphones and
                the proliferation of dating apps. Another key trend in the
                dating industry is the growing popularity of niche dating sites.
                These sites cater to specific audiences, such as seniors, people
                with disabilities, or those seeking relationships based on
                specific interests or lifestyles. This trend presents a great
                opportunity for affiliates to target specific audiences and
                promote offers that are highly relevant to their interests.
                However, with opportunity comes competition, and the dating
                industry is no exception. The market is crowded, with many
                dating sites and apps vying for users' attention and dollars.
                This means that affiliates need to be strategic in how they
                promote offers and differentiate themselves from the
                competition. One way to do this is to focus on building a strong
                personal brand and establishing yourself as an expert in the
                dating niche. This can be done through creating high-quality
                content, building a social media following, and engaging with
                your audience through email marketing or webinars. In
                conclusion, the dating industry continues to offer significant
                opportunities for affiliate marketers in 2023. However, to
                succeed in this competitive market, affiliates need to be
                strategic, differentiate themselves from the competition. By
                doing so, they can tap into the growing demand for online dating
                and earn lucrative commissions in the process.
              </BlogText>
              <BlogImg src={blogImg1} alt="Blog picture" />
            </BlogContentBlock>
          </BlogListItem>
          <BlogListItem>
            <BlogTitle>
              Unlock Your Earning Potential with Click2Dep: A Step-by-Step Guide
              to Making Money with Affiliate Marketing
            </BlogTitle>
            <BlogContentBlock ref={refSecond}>
              <BlogText
                style={{
                  transform: isInViewSecond ? 'none' : 'translateY(-200px)',
                  opacity: isInViewSecond ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                }}
              >
                Are you looking to make money online? Affiliate marketing is a
                proven way to earn passive income, and Click2Dep is the CPA
                network that can help you unlock your earning potential. In this
                article, we'll provide a step-by-step guide to making money with
                affiliate marketing through Click2Dep. Step 1: Join Click2Dep
                The first step to making money with affiliate marketing is to
                join Click2Dep. As a trusted CPA network, we offer a wide range
                of high-paying affiliate programs across various niches. Our
                user-friendly platform makes it easy to find the right offers to
                promote and track your performance in real-time. Step 2: Choose
                a niche The next step is to choose a niche. This is the topic or
                industry that you'll focus on when promoting offers. Click2Dep
                offers a range of niches, including finance, health, dating,
                gambling and more. When choosing a niche, consider your
                interests and expertise, as well as the demand for products in
                that niche. Step 3: Promote offers Once you've chosen a niche,
                the next step is to promote offers. Click2Dep offers a range of
                promotional materials, including banners, landing pages, to help
                you promote offers effectively. It's important to create
                high-quality content that provides value to your audience and
                promotes the products you're promoting. Step 4: Drive traffic
                The key to making money with affiliate marketing is to drive
                traffic to your offers. This can be done through various
                channels, including social media, SEO, paid advertising, and
                email marketing. Click2Dep offers a range of tracking tools to
                help you monitor your traffic and optimize your campaigns for
                maximum conversions. Step 5: Earn commissions The final step is
                to earn commissions. Click2Dep offers competitive commission
                rates and fast payouts to help you maximize your earnings. Our
                dedicated support team is available 24/7 to help you with any
                questions or issues you may encounter. In conclusion, affiliate
                marketing is a powerful way to make money online, and Click2Dep
                is the CPA network that can help you unlock your earning
                potential. By joining Click2Dep, choosing a niche, promoting
                offers, driving traffic, and earning commissions, you can build
                a successful affiliate marketing business and achieve your
                financial goals. Sign up today and start earning!
              </BlogText>
              <BlogImg src={blogImg2} alt="Blog picture" />
            </BlogContentBlock>
          </BlogListItem>
          <BlogListItem>
            <BlogTitle>
              The Top GEOs for Affiliate Marketing in the Gambling Industry
            </BlogTitle>
            <BlogContentBlock ref={refThird}>
              <BlogText
                style={{
                  transform: isInViewThird ? 'none' : 'translateY(-200px)',
                  opacity: isInViewThird ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                }}
              >
                Affiliate marketing in the gambling industry can be incredibly
                lucrative if you know where to focus your efforts. One of the
                most important factors to consider is your geographic target, as
                different regions have varying levels of demand for online
                gambling. In this article, we'll explore the most popular GEOs
                for affiliate marketing in the gambling industry. Europe Europe
                is one of the most popular regions for affiliate marketing in
                the gambling industry. With a population of over 740 million,
                there is a large and diverse audience for online gambling.
                Additionally, many European countries have well-established
                regulatory frameworks for online gambling, making it a
                relatively safe and stable market. North America North America
                is another lucrative region for affiliate marketing in the
                gambling industry. The United States, in particular, has seen
                significant growth in online gambling in recent years, with some
                estimates projecting a market value of $127 billion by 2027.
                Canada is also a significant market for online gambling, with a
                growing number of players looking for high-quality online
                casinos. Asia Asia is a rapidly growing market for online
                gambling, with a large and rapidly growing middle class and a
                high demand for entertainment. China is the largest market in
                the region, with an estimated $68 billion in annual online
                gambling revenue. Japan and South Korea are also significant
                markets for online gambling, with growing demand for
                high-quality casino games. Latin America Latin America is a
                promising region for affiliate marketing in the gambling
                industry, with a population of over 650 million and a growing
                middle class. Brazil is the largest market in the region, with
                an estimated $1.6 billion in annual online gambling revenue.
                Other significant markets include Mexico, Argentina, and
                Colombia. In conclusion, affiliate marketing in the gambling
                industry can be incredibly lucrative if you focus your efforts
                on the right GEOs. Europe, North America, Asia, and Latin
                America are the most promising regions for affiliate marketing
                in the gambling industry, each with its unique opportunities and
                challenges. By understanding the demand and regulatory framework
                in each region, you can build a successful affiliate marketing
                business and capitalize on this growing industry.
              </BlogText>
              <BlogImg src={blogImg3} alt="Blog picture" />
            </BlogContentBlock>
          </BlogListItem>
        </BlogList>
      </Container>
    </BlogSection>
  );
};
