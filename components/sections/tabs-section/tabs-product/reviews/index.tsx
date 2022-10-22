import { RateCardComponent } from "./RateCard";
import { Container } from "components/data/components";

import { ReviewsStyle } from "./styles";

export interface Review {
  id: number;
  model?: string;
  data: string;
  sku: string;
  url: string;
  comment: string;
  nameAuthorComment: string;
  rate: number;
  images?: {
    id: number;
    image: string;
  }[];
}

interface ReviewProps {
  reviews: Review[];
}

export function ReviewsComponent({ reviews }: ReviewProps) {
  return (
    <ReviewsStyle id="review">
      <div className="content">
        <div className="rating-list">
          {reviews?.length === 0 && (
            <div>Esse produto não possui avaliações</div>
          )}

          {reviews &&
            reviews.map((review) => {
              return (
                <RateCardComponent
                  key={`product-rate-${review.id}`}
                  review={review}
                />
              );
            })}
        </div>
      </div>
    </ReviewsStyle>
  );
}
