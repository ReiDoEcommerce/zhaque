import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  useEffect,
} from "react";

import debounce from "lodash.debounce";

import { baseImage } from "src/services/api";

import { GetProductsCarousel, IProductItem } from "../IProduct";

import * as S from "./styles";
import { NextImage } from "components/data/NextImage";

interface OwlProps {
  items: GetProductsCarousel[];
  handleItem: Dispatch<SetStateAction<IProductItem[] | undefined>>;
  numberItens?: number;
  centerItem?: number;
  marginCarousel?: number;
}

export function CarouselProducts({
  items,
  handleItem,
  numberItens = 5,
  centerItem = 35,
  marginCarousel = 10,
}: OwlProps) {
  const [updateCarousel, setUpdateCarousel] = useState(0);

  const size = useWindowSize();

  useEffect(() => {
    const carousel: any = document.querySelector(".carousel");
    const controls: any = document.querySelector(".controls");
    const slider: any = document.querySelector(".slider");

    if (slider && centerItem && numberItens && marginCarousel) {
      const widthItens = (100 - centerItem) / (numberItens - 1);

      const allItens = document.querySelectorAll(".item");
      const itens = document.querySelectorAll("#carousel .item:not(.center)");
      const startItemMidle = Math.round(numberItens / 2);

      allItens.forEach((i, index) => {
        if (index === startItemMidle - 1) {
          i.classList.add("center");
        }
      });

      itens.forEach((item: any) => {
        item.style.width = `calc(${widthItens}vw - ${marginCarousel}px)`;
      });

      const centerItemElement: any = document.querySelector(
        "#carousel .item.center"
      );

      if (centerItemElement) {
        centerItemElement.style.width = `calc(${centerItem}vw - ${marginCarousel}px)`;

        const widthSlider = 100 + widthItens * (items.length - numberItens);

        slider.style.width = `calc(${widthSlider + "vw"} - 7px)`;

        controls.style.maxWidth = centerItem + "vw";
        carousel.style.height = `${centerItemElement.offsetHeight}px`;

        const nextSlibing = centerItemElement?.nextElementSibling;
        const prevSlibing = centerItemElement?.previousElementSibling;

        var allElements = document.querySelectorAll("#carousel .item");
        let i = 0;
        for (i = 0; i < allElements.length; i++) {
          allElements[i].classList.remove("next-owl-item-opacity");
          allElements[i].classList.remove("prev-owl-item-opacity");
        }

        nextSlibing?.classList.add("next-owl-item-opacity");
        prevSlibing?.previousElementSibling?.classList.add(
          "prev-owl-item-opacity"
        );

        handleItem(centerItemElement);
      }
    }
  }, [size.height, size.width, updateCarousel]);

  useEffect(() => {
    if (items) {
      setTimeout(() => {
        setUpdateCarousel(1);
      }, 1000);
    }
  }, []);

  const next = useCallback(() => {
    const carousel: any = document.querySelector(".carousel");
    const slider: any = document.querySelector(".slider");
    const centerItemElement: any = document.querySelector(
      "#carousel .item.center"
    );
    const prevCenterItemElement: any = centerItemElement.nextElementSibling;

    if (carousel && slider && centerItemElement && centerItem && numberItens) {
      centerItemElement.classList.remove("center");
      prevCenterItemElement.classList.add("center");

      const widthItens = (100 - centerItem) / (numberItens - 1);

      const itens = document.querySelectorAll("#carousel .item:not(.center)");

      itens.forEach((item: any) => {
        item.style.width = widthItens + "vw";
      });

      centerItemElement.style.width = widthItens + "vw";
      prevCenterItemElement.style.width = centerItem + "vw";

      carousel.style.justifyContent = "flex-start";
      slider.style.transform = `translate(${"-" + widthItens + "vw"})`;

      slider.appendChild(slider.firstElementChild);

      slider.style.transform = `translate(${0 + "vw"})`;

      const nextSlibing = prevCenterItemElement?.nextElementSibling;
      const prevSlibing = prevCenterItemElement?.previousElementSibling;

      var allElements = document.querySelectorAll("#carousel .item");

      let i = 0;

      for (i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove("next-owl-item-opacity");
        allElements[i].classList.remove("prev-owl-item-opacity");
      }

      nextSlibing?.classList.add("next-owl-item-opacity");
      prevSlibing?.previousElementSibling?.classList.add(
        "prev-owl-item-opacity"
      );

      handleItem(prevCenterItemElement);
    }
  }, []);

  const prev = useCallback(() => {
    const carousel: any = document.querySelector(".carousel");
    const slider: any = document.querySelector(".slider");
    const centerItemElement: any = document.querySelector(
      "#carousel .item.center"
    );
    const prevCenterItemElement: any = centerItemElement.previousElementSibling;

    if (carousel && slider && centerItemElement && centerItem && numberItens) {
      centerItemElement.classList.remove("center");
      prevCenterItemElement.classList.add("center");

      const widthItens = (100 - centerItem) / (numberItens - 1);

      const itens = document.querySelectorAll("#carousel .item:not(.center)");

      itens.forEach((item: any) => {
        item.style.width = widthItens + "vw";
      });

      centerItemElement.style.width = widthItens + "vw";
      prevCenterItemElement.style.width = centerItem + "vw";

      carousel.style.justifyContent = "flex-start";
      slider.style.transform = `translate(-${widthItens + "vw"})`;

      slider.prepend(slider.lastElementChild);

      slider.style.transform = `translate(${0 + "vw"})`;

      const nextSlibing = prevCenterItemElement?.nextElementSibling;
      const prevSlibing = prevCenterItemElement?.previousElementSibling;

      var allElements = document.querySelectorAll("#carousel .item");
      let i = 0;
      for (i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove("next-owl-item-opacity");
        allElements[i].classList.remove("prev-owl-item-opacity");
      }

      nextSlibing?.classList.add("next-owl-item-opacity");
      prevSlibing?.previousElementSibling?.classList.add(
        "prev-owl-item-opacity"
      );

      handleItem(prevCenterItemElement);
    }
  }, []);

  return (
    <S.Carousel className="carousel">
      <div className="controls">
        <button className="prev" onClick={prev} aria-label="nagigation left">
          <img
            src="/images/nav-left.svg"
            loading="lazy"
            alt="navigation carousel left"
          />
        </button>

        <button className="next" onClick={next} aria-label="nagigation right">
          <img
            src="/images/nav-right.svg"
            loading="lazy"
            alt="navigation carousel right"
          />
        </button>
      </div>

      <div id="carousel" className="slider" style={{ gap: marginCarousel }}>
        {items.map((item) => {
          return (
            <div
              style={{ color: "#fff" }}
              className={`item ${item.id}`}
              key={item.id}
            >
              <div className="image">
                <NextImage src={item.imagem} isBaseUrl layout="fill" />
              </div>

              <h3 className="-bold-cinzel">
                <span>{item.titulo}</span>
              </h3>
            </div>
          );
        })}
      </div>
    </S.Carousel>
  );
}

// Hook
function useWindowSize() {
  const [dimensions, setDimensions] = useState({
    height: typeof window !== "undefined" ? window?.innerHeight : 0,
    width: typeof window !== "undefined" ? window?.innerWidth : 0,
  });
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: typeof window !== "undefined" ? window?.innerHeight : 0,
        width: typeof window !== "undefined" ? window?.innerWidth : 0,
      });
    }, 500);

    window?.addEventListener("resize", debouncedHandleResize);

    return () => {
      window?.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return dimensions;
}
