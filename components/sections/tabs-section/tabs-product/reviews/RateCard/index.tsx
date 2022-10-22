import { NextImage } from "components/data/NextImage";
import { Rating } from "react-simple-star-rating";

import { Review } from "../index";

import { RateCardStyle } from "./styles";

interface RateCardProps {
  review: Review;
}

export function RateCardComponent({ review }: RateCardProps) {
  return (
    <RateCardStyle>
      <div className="box-left">
        <div className="top-rating">
          <strong className="paragraph-1-bold-graphie">Nota</strong>

          <Rating
            ratingValue={20 * review.rate}
            size={31}
            transition
            fillColor="orange"
            emptyColor="gray"
            className="foo"
            readonly
            allowHalfIcon
          />
        </div>

        <div className="bottom">
          <strong className="paragraph-1-bold-graphie">
            {review.nameAuthorComment}
          </strong>

          <h3 className="paragraph-2-regular-graphie">{review.data}</h3>
        </div>
      </div>

      <div className="box-right">
        <h4 className="paragraph-1-bold-graphie">{review.model}</h4>

        <p className="paragraph-2-medium">{review.comment}</p>
      </div>
    </RateCardStyle>
  );
}
