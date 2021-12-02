import IconsSVG from './Icons.svg';

export const Icons = ({ name, className }) => {
  return (
    <svg className={`icon icon-${name} ${className}`}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};
