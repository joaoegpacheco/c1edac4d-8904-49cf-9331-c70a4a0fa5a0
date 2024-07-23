import React from 'react';

interface FeaturedToggleProps {
  featuredOnly: boolean;
  onToggleChange: (value: boolean) => void;
}

const FeaturedToggle: React.FC<FeaturedToggleProps> = ({ featuredOnly, onToggleChange }) => {
  return (
    <div className="featured-toggle">
      <label htmlFor="featured-switch">Mostrar apenas em destaque:</label>
      <input
        type="checkbox"
        id="featured-switch"
        checked={featuredOnly}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggleChange(e.target.checked)}
      />
    </div>
  );
};

export default FeaturedToggle;
