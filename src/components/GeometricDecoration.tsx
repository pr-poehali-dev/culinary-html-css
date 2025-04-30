
interface GeometricDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-right';
}

export const GeometricDecoration = ({ position }: GeometricDecorationProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return (
          <>
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#FEC6A1] rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-16 left-16 w-20 h-20 bg-[#9b87f5] rounded-sm opacity-20 transform rotate-45"></div>
          </>
        );
      case 'top-right':
        return (
          <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6BCFA] rounded-sm opacity-20 transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute top-20 right-10 w-16 h-16 bg-[#FEC6A1] rounded-full opacity-20"></div>
          </>
        );
      case 'bottom-left':
        return (
          <>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#9b87f5] rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-16 left-20 w-24 h-24 bg-[#FEC6A1] rounded-sm opacity-20 transform rotate-45"></div>
          </>
        );
      case 'bottom-right':
        return (
          <>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#D6BCFA] rounded-sm opacity-20 transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#9b87f5] rounded-full opacity-20"></div>
          </>
        );
      case 'center-right':
        return (
          <>
            <div className="absolute top-1/2 right-0 w-48 h-48 bg-[#FEF7CD] rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-24 w-24 h-24 bg-[#9b87f5] rounded-sm opacity-20 transform -translate-y-1/2 rotate-45"></div>
          </>
        );
      default:
        return null;
    }
  };

  return <>{getPositionClasses()}</>;
};
