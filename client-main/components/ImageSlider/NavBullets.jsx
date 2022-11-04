import classNames from './styles';

//navigation bullets for the images slider
export const NavBullets = ({ count, getslide, setslide, ...props }) => {
  const bulletCount = [];
  for (let i = 0; i < count; i += 1) {
    bulletCount.push('');
  }
  return (
    <div className={classNames.navBulletsContainer}>
      {bulletCount.map((bullet, index) => (
        <svg
          className="m-1"
          key={index}
          width={24}
          height={24}
          viewBox="0 0 100 100"
          {...props}
          onClick={() => {
            setslide(index);
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke={getslide() !== index ? '#F4F8FB' : '#F4F8FB'}
            strokeWidth="4"
            fill={getslide() === index ? '#F4F8FB' : 'none'}
          />
        </svg>
      ))}
    </div>
  );
};

export default NavBullets;
