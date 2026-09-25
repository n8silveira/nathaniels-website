const artwork = {
  video: [174, 359, 208, 113],
  meetitude: [460, 353, 227, 121],
  kingdom: [1112, 344, 237, 126],
  phone: [1745, 346, 233, 126],
  note: [401, 771, 226, 119],
};

// Crop the supplied reference with CSS; all drawings share one image asset.
export default function Sketch({
  name,
  crop = artwork[name],
  label,
  className = "artwork",
}) {
  const [x, y, width, height] = crop;
  const style = {
    backgroundSize: `${(2048 / width) * 100}% ${(1028 / height) * 100}%`,
    backgroundPosition: `${(x / (2048 - width)) * 100}% ${(y / (1028 - height)) * 100}%`,
    aspectRatio: `${width}/${height}`,
  };
  return (
    <div
      className={`sketch ${className}`}
      role="img"
      aria-label={label}
      style={style}
    />
  );
}
