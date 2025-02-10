// import { useState } from 'react';


// const ColorCalibrator = () => {
//   const [imageData, setImageData] = useState(null);
//   const [meanColor, setMeanColor] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     const colors = await getImageColors(file);
//     const meanColorValue = colors.mean.rgb;

//     setMeanColor(meanColorValue);
//     setImageData(URL.createObjectURL(file));
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const handleColorSave = () => {
//     if (meanColor && selectedColor) {
//       localStorage.setItem(`roastColor_${selectedColor.name}`, JSON.stringify(meanColor));
//       alert(`${selectedColor.name} color calibrated successfully!`);
//     } else {
//       alert('Please select a color to calibrate and upload an image.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         className="mb-4"
//       />
//       {imageData && (
//         <div>
//           <img src={imageData} alt="Uploaded Image" className="max-w-xs" />
//           {meanColor && (
//             <div>
//               <p className="mt-2 text-center">Mean Color: {meanColor.join(', ')}</p>
//               <div className="mt-4">
//                 {roastLevelColors.map((color) => (
//                   <button
//                     key={color.name}
//                     onClick={() => handleColorSelect(color)}
//                     className={`px-4 py-2 mr-2 ${
//                       selectedColor === color ? 'bg-blue-500 text-white' : 'bg-gray-300'
//                     }`}
//                   >
//                     {color.name}
//                   </button>
//                 ))}
//               </div>
//               <button
//                 onClick={handleColorSave}
//                 className="px-4 py-2 mt-4 bg-green-500 text-white"
//               >
//                 Calibrate Color
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ColorCalibrator;