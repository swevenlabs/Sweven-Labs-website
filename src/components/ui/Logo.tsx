import React from 'react';
import { SWEVEN_LOGO_DATA_URI } from '../../assets/imagesData';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'watermark';
  showText?: boolean;
  layout?: 'row' | 'col';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true,
  layout
}) => {
  const isStacked = layout === 'col' || size === 'hero' || size === 'xl';

  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-13 h-13 sm:w-15 sm:h-15',
    xl: 'w-18 h-18 sm:w-22 sm:h-22',
    hero: 'w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52',
    watermark: 'w-64 h-64 md:w-[350px] md:h-[350px]'
  };

  const textMap = {
    sm: { main: 'text-[10px]', sub: 'text-[7px]' },
    md: { main: 'text-[11px] sm:text-[12px]', sub: 'text-[7.5px] sm:text-[8px]' },
    lg: { main: 'text-xs sm:text-sm', sub: 'text-[8.5px] sm:text-[9.5px]' },
    xl: { main: 'text-sm sm:text-base', sub: 'text-[9px] sm:text-[10px]' },
    hero: { main: 'text-lg sm:text-xl md:text-2xl', sub: 'text-[10px] sm:text-[11px]' },
    watermark: { main: 'text-lg', sub: 'text-[9px]' }
  };

  return (
    <div className={`inline-flex items-center select-none group ${isStacked ? 'flex-col justify-center text-center gap-3 sm:gap-4' : 'gap-3.5 sm:gap-4.5 md:gap-5'} ${className}`}>
      {/* Rounded Circle Container with Silver Neon Chrome Outline & Glow */}
      <div 
        className={`relative rounded-full overflow-hidden bg-black shrink-0 border-2 border-slate-200 shadow-[0_0_18px_rgba(226,232,240,0.85),_0_0_35px_rgba(56,189,248,0.45),_inset_0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300 group-hover:shadow-[0_0_26px_rgba(34,211,238,0.95),_0_0_45px_rgba(226,232,240,0.75),_inset_0_0_18px_rgba(255,255,255,0.8)] ${sizeMap[size]}`}
      >
        <img 
          src="https://res.cloudinary.com/bn8jj56m/image/upload/v1786607488/9d6fa30d-b92d-4dd1-9a7e-681f7d914dfd.jpg" 
          alt="Sweven Labs Logo"
          className="w-full h-full object-cover rounded-full select-none"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = SWEVEN_LOGO_DATA_URI;
          }}
        />
      </div>

      {/* Brand Name Text Lockup (SWΞVΞN LABS) */}
      {showText && size !== 'watermark' && (
        <div className={`flex flex-col justify-center leading-none ${isStacked ? 'items-center' : ''}`}>
          <div className={`font-brand font-semibold tracking-[0.25em] text-white flex items-center ${textMap[size].main}`}>
            <span>SWΞVΞN</span>
          </div>
          <div className={`font-brand font-medium tracking-[0.4em] text-slate-300/90 uppercase mt-1 ${textMap[size].sub}`}>
            — LABS —
          </div>
        </div>
      )}
    </div>
  );
};







