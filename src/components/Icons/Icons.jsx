import IconsSVG from './Icons.svg'

export const Icons = ({name, className}) => {
// export const Icons = ({name, color, size, className}) => {
    return (
       <svg className={`icon icon-${name} ${className}`}>
       {/* <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>> */}
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
    )
}
