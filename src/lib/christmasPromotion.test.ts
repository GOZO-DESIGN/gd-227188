import { describe, expect, test } from 'bun:test';
import { christmasPromotion, getChristmasPromotionState } from './christmasPromotion';

describe('Christmas customer offer', () => {
  test('bundle costs €1748', () => expect(christmasPromotion.price).toBe(1748));
  test('includes five years warranty', () => expect(christmasPromotion.warrantyYears).toBe(5));
  test('includes TM7, second bowl, Styler and silicone mould', () => {
    expect(christmasPromotion.contents.slice(0, 4)).toEqual(['Thermomix® TM7', 'Zweiter Mixtopf', 'TM7 Gemüse Styler', 'Multi-Silikonform']);
  });
  test('bundle runs through November 29 in Vienna', () => {
    expect(getChristmasPromotionState(Date.parse('2026-11-29T23:59:59+01:00')).bundleActive).toBe(true);
    expect(getChristmasPromotionState(Date.parse('2026-11-30T00:00:00+01:00')).bundleActive).toBe(false);
  });
  test('financing ends after November 16 while bundle continues', () => {
    expect(getChristmasPromotionState(Date.parse('2026-11-16T23:59:59+01:00')).financingActive).toBe(true);
    expect(getChristmasPromotionState(Date.parse('2026-11-17T00:00:00+01:00'))).toEqual({ bundleActive: true, financingActive: false });
  });
  test('financing lasts ten months', () => expect(christmasPromotion.financingMonths).toBe(10));
  test('financing has zero interest', () => expect(christmasPromotion.interestPercent).toBe(0));
  test('financing requires no down payment', () => expect(christmasPromotion.downPayment).toBe(0));
});