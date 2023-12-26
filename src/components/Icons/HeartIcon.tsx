import { SVGProps } from 'react';

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill={props.fill}
      d="M13.44 3.073A4.18 4.18 0 0 0 8 2.667a4.18 4.18 0 0 0-5.44 6.32l4.967 4.966a.666.666 0 0 0 .947 0l4.967-4.966a4.178 4.178 0 0 0 0-5.914Zm-.94 4.974L8 12.54 3.5 8.047a2.853 2.853 0 0 1 2-4.867c.752.002 1.47.302 2 .833a.667.667 0 0 0 .947 0 2.847 2.847 0 0 1 4 4.034h.054Z"
    />
  </svg>
);
export default HeartIcon;
