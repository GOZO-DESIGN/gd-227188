export const christmasPromotion = {
  price: 1748,
  warrantyYears: 5,
  financingMonths: 10,
  interestPercent: 0,
  downPayment: 0,
  bundleEnd: Date.parse('2026-11-30T00:00:00+01:00'),
  financingEnd: Date.parse('2026-11-17T00:00:00+01:00'),
  contents: ['Thermomix® TM7', 'Zweiter Mixtopf', 'TM7 Gemüse Styler', 'Multi-Silikonform', '5 Jahre Garantie'],
};

export function getChristmasPromotionState(now = Date.now()) {
  return {
    bundleActive: now < christmasPromotion.bundleEnd,
    financingActive: now < christmasPromotion.financingEnd,
  };
}