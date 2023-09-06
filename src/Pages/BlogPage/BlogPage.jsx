import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';

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
  const ref = useRef(null);

  const isInView = useInView(ref);

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
        <BlogList ref={ref}>
          {dataBlogs.map((el, idx) => (
            <BlogListItem
              key={idx}
              onClick={e => {
                e.stopPropagation();
                setModal({ open: true, data: el });
              }}
              style={{
                transform: isInView ? 'none' : 'translateY(+200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
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
