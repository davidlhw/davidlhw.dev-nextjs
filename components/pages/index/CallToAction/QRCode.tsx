import React from "react";
import styled from "styled-components";

export const Wrapper = styled.svg(
  ({ $cursor }: { $cursor: string }) => `
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
  cursor: ${$cursor};
  
  & path { transition: fill 0.25s }
`
);

export default ({
  color = "black",
  ...props
}: {
  color?: string;
} & Omit<JSX.IntrinsicElements["svg"], "ref">) => (
  <Wrapper
    {...props}
    width={2277}
    height={2277}
    viewBox="0 0 2277 2277"
    fill="none"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={2277}
      height={2277}
      xmlSpace="preserve"
      fill="none"
      {...props}
    >
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 690 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 759 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 897 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 966 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1173 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1242 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1449 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1518 138)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 690 207)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 759 207)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 897 207)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1104 207)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1173 207)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 759 276)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 897 276)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1035 276)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1104 276)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1173 276)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 1518 276)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 690 345)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1242 345)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 1311 345)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1449 345)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 345)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 828 414)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1035 414)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 1311 414)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1449 414)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 414)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 483)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 1104 483)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1380 483)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1449 483)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 483)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 690 552)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 552)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 966 552)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1104 552)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1242 552)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 552)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 1518 552)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 690 621)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 621)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 897 621)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1035 621)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1104 621)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1311 621)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 621)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1449 621)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 138 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 276 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 345 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 483 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 552 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 621 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 759 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 897 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1035 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1104 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1242 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1311 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1380 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 1656 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1863 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 2001 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 2070 690)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 138 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 276 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 345 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 414 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 621 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 690 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 966 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1173 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1242 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1449 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1587 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1656 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1725 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1794 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 2070 759)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 138 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 276 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 483 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 552 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 759 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 828 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 966 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1104 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1173 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1518 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1587 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1932 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 2001 828)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 138 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 276 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 483 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 690 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 759 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 828 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1035 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1104 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1173 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1380 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1656 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1794 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 2070 897)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 138 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 207 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 276 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 345 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 483 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 552 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 621 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 690 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 897 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 966 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 1311 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 1518 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1863 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 1932 966)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 138 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 207 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 276 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 345 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 483 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 621 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 759 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 897 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 966 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1035 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1311 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 1449 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1656 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1932 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 2001 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 2070 1035)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 138 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 276 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 345 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 414 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 483 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 552 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 621 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 690 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 897 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1104 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1380 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1449 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 1587 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 1794 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1932 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 2001 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 2070 1104)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 276 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 414 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 483 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 759 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 897 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1035 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1173 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1242 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1587 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1725 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1794 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 2001 1173)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 138 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 207 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 345 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 552 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 621 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 690 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 759 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 897 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1380 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1587 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1794 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 1863 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 2001 1242)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 276 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 414 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 483 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 690 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 966 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1035 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 1173 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1311 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 1518 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 1725 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1863 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1932 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 2001 1311)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 138 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 276 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 414 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 483 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 552 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 897 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1173 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 1242 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1587 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1656 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1725 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1794 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1932 1380)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 621 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 690 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 759 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1242 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1311 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 1380 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1725 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1932 1449)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 207 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 276 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 552 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 621 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 690 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 828 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 1035 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1311 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1449 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1587 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1656 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1725 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1794 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1863 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1932 1518)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 690 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1035 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1104 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1242 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1794 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1863 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1932 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 2001 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 2070 1587)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 690 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 759 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 897 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 966 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1035 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1311 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1449 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1656 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1794 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1863 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 2001 1656)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 690 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 897 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 966 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1173 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 1242 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1794 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1863 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 2001 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 2070 1725)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 828 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 897 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1104 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1173 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1242 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1311 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1518 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1587 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1656 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1725 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1794 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1932 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 2001 1794)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 690 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 828 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 966 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1035 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1104 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1173 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1242 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1380 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1587 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1725 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1794 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1863 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 2070 1863)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 690 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0v500h500C500 223.853 276.142 0 0 0z"
        transform="matrix(.138 0 0 .138 759 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 897 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 966 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1104 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1242 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 1380 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 500h500V0C223.861.001 0 223.854 0 500z"
        transform="matrix(.138 0 0 .138 1518 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 1587 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 1725 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1932 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 2070 1932)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 759 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 966 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1104 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1173 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1242 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1518 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 1794 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1863 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 250v250s-170.194 0-250-.012c-62.324.012-250 0-250 0V249.994C.006 111.931 111.929 0 249.994 0 388.064 0 500 111.93 500 250z"
        transform="matrix(.138 0 0 .138 2001 2001)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0h250v500H250C111.881 500 0 388.021 0 250 0 111.963 111.881 0 250 0z"
        transform="matrix(.138 0 0 .138 690 2070)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 0H0v500c276.142 0 500-223.858 500-500z"
        transform="matrix(.138 0 0 .138 759 2070)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 966 2070)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 1242 2070)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 0c138.077 0 250 111.93 250 250 0 138.077-111.923 250-250 250C111.93 500 0 388.077 0 250 0 111.93 111.93 0 250 0z"
        transform="matrix(.138 0 0 .138 1380 2070)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M500 500V0H0c.001 276.142 223.853 500 500 500z"
        transform="matrix(.138 0 0 .138 1518 2070)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 0h100v100H0z"
        transform="matrix(.69 0 0 .69 1587 2070)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M250 500H0V0h250c138.064 0 250 111.929 250 250 0 138.064-111.936 250-250 250z"
        transform="matrix(.138 0 0 .138 1656 2070)"
        style={{
          fill: color,
        }}
      />
      <path
        d="M0 250V0h500v250c0 138.064-111.936 250-250 250C111.929 500 0 388.064 0 250z"
        transform="matrix(.138 0 0 .138 2001 2070)"
        style={{
          fill: color,
        }}
      />
      <g
        style={{
          fill: color,
        }}
      >
        <path
          style={{
            fill: "none",
          }}
          d="M33.78 85H85V15H15.004l.016 50.855C15.02 76.414 23.436 85 33.78 85z"
          transform="matrix(4.83 0 0 -4.83 138 621)"
        />
        <path d="M621 138V621H138l.097-318.099c0-90.905 73.126-164.901 163.06-164.901H621zm-72.45 72.45H301.157c-49.961 0-90.61 41.47-90.61 92.47l-.078 245.63H548.55v-338.1z" />
      </g>
      <g
        style={{
          fill: color,
        }}
      >
        <path
          style={{
            fill: "none",
          }}
          d="M33.78 85H85V15H15.004l.016 50.855C15.02 76.414 23.436 85 33.78 85z"
          transform="matrix(-4.83 0 0 -4.83 2139 621)"
        />
        <path d="M1656 138V621h483l-.097-318.099c0-90.905-73.126-164.901-163.06-164.901H1656zm72.45 72.45h247.393c49.961 0 90.61 41.47 90.61 92.47l.078 245.63H1728.45v-338.1z" />
      </g>
      <g
        style={{
          fill: color,
        }}
      >
        <path
          style={{
            fill: "none",
          }}
          d="M33.78 85H85V15H15.004l.016 50.855C15.02 76.414 23.436 85 33.78 85z"
          transform="matrix(4.83 0 0 4.83 138 1656)"
        />
        <path d="M621 2139V1656H138l.097 318.099c0 90.905 73.126 164.901 163.06 164.901H621zm-72.45-72.45H301.157c-49.961 0-90.61-41.47-90.61-92.47l-.078-245.63H548.55v338.1z" />
      </g>
      <g
        style={{
          fill: color,
        }}
      >
        <path d="M332.617 483c-31.237 0-56.646-24.906-56.646-55.493v-96.043c0-9.556 2.484-18.548 6.833-26.416 4.2-7.572 10.145-14.08 17.305-18.99 9.197-6.33 20.408-10.058 32.477-10.058h93.826c31.208 0 56.617 24.877 56.617 55.462v96.043c0 30.585-25.407 55.493-56.617 55.493h-93.795z" />
      </g>
      <g
        style={{
          fill: color,
        }}
      >
        <path d="M1850.617 483c-31.237 0-56.646-24.906-56.646-55.493v-96.043c0-9.556 2.484-18.548 6.833-26.416 4.2-7.572 10.145-14.08 17.305-18.99 9.197-6.33 20.408-10.058 32.477-10.058h93.826c31.208 0 56.617 24.877 56.617 55.462v96.043c0 30.585-25.407 55.493-56.617 55.493h-93.795z" />
      </g>
      <g
        style={{
          fill: color,
        }}
      >
        <path d="M332.617 2001c-31.237 0-56.646-24.906-56.646-55.493v-96.043c0-9.556 2.484-18.548 6.833-26.416 4.2-7.572 10.145-14.08 17.305-18.99 9.197-6.33 20.408-10.058 32.477-10.058h93.826c31.208 0 56.617 24.877 56.617 55.462v96.043c0 30.585-25.407 55.493-56.617 55.493h-93.795z" />
      </g>
    </svg>
  </Wrapper>
);
