import { useState, useEffect } from 'react';

const roastLevelColors = [
  { name: 'light', rgb: [128, 100, 80] },
  { name: 'light medium', rgb: [108, 84, 64] },
  { name: 'medium', rgb: [88, 68, 48] },
  { name: 'medium dark', rgb: [68, 52, 32] },
  { name: 'dark', rgb: [38, 23, 11] }
];

const ColorAnalyzer = () => {
  const [imageData, setImageData] = useState(null);
//   const [closestColor, setClosestColor] = useState(null);
//   const [calibratedColors, setCalibratedColors] = useState(roastLevelColors);

//   useEffect(() => {
//     const overriddenColors = roastLevelColors.map((color) => {
//       const overriddenValue = localStorage.getItem(`roastColor_${color.name}`);
//       if (overriddenValue) {
//         return { ...color, rgb: JSON.parse(overriddenValue) };
//       }
//       return color;
//     });

//     setCalibratedColors(overriddenColors);
//   }, []);

//   useEffect(() => {
      
//     const fac = new FastAverageColor();
//     const container = document.querySelector('.image-container');

//     fac.getColorAsync(container.querySelector('img'))
//         .then(color => {
//             container.style.backgroundColor = color.rgba;
//             container.style.color = color.isDark ? '#fff' : '#000';
//         })
//         .catch(e => {
//             console.log(e);
//         });

//   })

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     const colors = await getImageColors(file);
//     const meanColor = colors.mean.rgb;

//     const closestRoastLevel = findClosestRoastLevel(meanColor);
//     setClosestColor(closestRoastLevel);
//     setImageData(URL.createObjectURL(file));
//   };

//   const findClosestRoastLevel = (color) => {
//     let minDistance = Infinity;
//     let closestLevel = null;

//     for (const level of calibratedColors) {
//       const distance = getColorDistance(color, level.rgb);
//       if (distance < minDistance) {
//         minDistance = distance;
//         closestLevel = level;
//       }
//     }

//     return closestLevel;
//   };

//   const getColorDistance = (color1, color2) => {
//     const [r1, g1, b1] = color1;
//     const [r2, g2, b2] = color2;
//     return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
//   };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="file"
        accept="image/*"
        // onChange={handleImageUpload}
        // onChange={(e) => handleImageUpload(e)}
        className="mb-4"
      />
      {imageData && (
        <div>
          {/* <img src={imageData} alt="Uploaded Image" className="max-w-xs" /> */}
          {closestColor && (
            <div>
              <div
                className="w-16 h-16 mx-auto mt-4"
                style={{
                  backgroundColor: `rgb(${closestColor.rgb.join(',')})`
                }}
              />
              <p className="mt-2 text-center">{closestColor.name}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ColorAnalyzer;