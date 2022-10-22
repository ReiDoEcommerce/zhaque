import Link from "next/link";

import { LoaderCircle } from "../loader-circle";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  backgroundColor?: string;
  href?: string;
  type?: "submit" | "button";
  loading?: boolean;
  svg?: {
    icon: string;
    size: number;
  };
  target?: string;
}

export function ButtonComponent({
  text,
  backgroundColor,
  href,
  type,
  loading,
  svg,
  target,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      $loading={loading}
      svgSize={svg?.size}
    >
      {href && !type ? (
        <Link href={href} passHref>
          <a href="replace" className="link-2-bold-graphie" target={target} {...props}>
            {svg && (
              <i
                dangerouslySetInnerHTML={{
                  __html: svg.icon,
                }}
              ></i>
            )}

            {text}
          </a>
        </Link>
      ) : (
        <button
          className="link-2-bold-graphie"
          type={type ? type : "submit"}
          disabled={loading}
          {...props}
        >
          {svg && (
            <i
              dangerouslySetInnerHTML={{
                __html: svg.icon,
              }}
            ></i>
          )}
          
          {loading ? <LoaderCircle size={40} /> : text}
        </button>
      )}
    </S.Button>
  );
}
