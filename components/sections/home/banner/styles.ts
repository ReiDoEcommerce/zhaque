import styled from "styled-components";

export const Banner = styled.section`
  .md-block {
    object-fit: cover;
    width: 100%;

    img {
      aspect-ratio: 800/258 !important;
    }
  }

  .md-mobile,
  .md-block {
    object-fit: cover;
    width: 100%;
  }

  .swiper-pagination {
    span {
      background-color: #b8b8b8;
    }

    .swiper-pagination-bullet-active {
      background-color: var(--secundary-color);
    }
  }
`;
