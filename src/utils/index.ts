export function capitalizeText(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function calculateAge(birthdate: Date | string): number {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const monthDifference = currentDate.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function formatHeight(heightInCm: number): string {
  if (heightInCm <= 0) {
    throw new Error("Height must be a positive number.");
  }

  const inches = heightInCm / 2.54;
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);

  return `${feet}'${remainingInches}"`;
}

export function kgToLb(kg: number, decimalPlaces: number = 2): number {
  const lb = kg * 2.20462;
  return parseFloat(lb.toFixed(decimalPlaces));
}

export function formatBodyMeasurements(
  chest: number,
  waist: number,
  hips: number
): string {
  const cmToInch = (cm: number) => Math.round(cm / 2.54);

  const chestIn = cmToInch(chest);
  const waistIn = cmToInch(waist);
  const hipsIn = cmToInch(hips);

  return `${chestIn}-${waistIn}-${hipsIn}`;
}

export function determineBodyType(
  chest: number,
  waist: number,
  hips: number
): string {
  if (waist < chest && waist < hips) {
    if (chest === hips) return "Hourglass";
    if (hips > chest) return "Pear-Shaped";
    if (chest > hips) return "Inverted Triangle";
  }
  if (chest === waist && waist === hips) return "Rectangular";
  if (waist >= chest || waist >= hips) return "Apple-Shaped";

  return "Toned";
}

export function determineHotnessType(hotness: number): string {
  if (hotness < 0 || hotness > 100) {
    throw new Error("Hotness must be between 0 and 100.");
  }

  if (hotness >= 90) return "Scorching Hot 🔥";
  if (hotness >= 75) return "Smokin' Hot 😍";
  if (hotness >= 60) return "Very Attractive 😎";
  if (hotness >= 45) return "Pretty Good 😊";
  if (hotness >= 30) return "Average 👍";
  if (hotness >= 15) return "Not Bad 🤔";
  return "Needs Some Work 😅";
}

export function determineNudityType(
  nudity: "none" | "partial" | "full"
): string {
  const nudityLevels: Record<string, string> = {
    none: "Fully Clothed 👕",
    partial: "Partially Exposed 🔥",
    full: "Fully Nude 😳",
  };

  return nudityLevels[nudity] || "Unknown Nudity Level";
}
