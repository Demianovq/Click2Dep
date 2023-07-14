import { useState } from 'react';

import { ModalWindowBlog } from './ModalWindowBlog/ModalWindowBlog';
import { ModalNavBlock, StyledLinkLogo } from 'utils/ModalNavMobTab.styled';
import {
  BlogSection,
  BlogList,
  BlogListItem,
  BlogListItemTitle,
  BlogImg,
  BlogTitle,
} from './BlogPage.styled';
import { Container } from 'components/Container/Container.styled';

import logo from 'images/logo.png';
import dataBlogs from './blogsdata';

export const BlogPage = () => {
  // const refFirst = useRef(null);
  // const refSecond = useRef(null);
  // const refThird = useRef(null);
  // const isInViewFirst = useInView(refFirst);
  // const isInViewSecond = useInView(refSecond);
  // const isInViewThird = useInView(refThird);

  const [modal, setModal] = useState({
    open: false,
    data: null,
  });

  return (
    <BlogSection>
      <ModalNavBlock>
        <StyledLinkLogo to="/">
          <img src={logo} alt="Logo" />
        </StyledLinkLogo>
      </ModalNavBlock>
      <Container>
        <BlogTitle>Our Blog</BlogTitle>
        <BlogList>
          {dataBlogs.map((el, idx) => (
            <BlogListItem
              key={idx}
              onClick={e => {
                e.stopPropagation();
                setModal({ open: true, data: el });
              }}
            >
              <BlogListItemTitle>{el.title}</BlogListItemTitle>
              <BlogImg src={el.img} alt="Future of the Marketing" />
            </BlogListItem>
          ))}
        </BlogList>
        {/* {modal && (
          <ModalWindowBlog data={modal} onClose={() => setModal(null)} />
        )} */}

        {modal.open && (
          <ModalWindowBlog
            data={modal.data}
            isOpen={modal.open}
            onClose={() => setModal({ open: false, data: null })}
          />
        )}
      </Container>
    </BlogSection>
  );
};
