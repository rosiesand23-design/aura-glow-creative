// AI-isolated, pure-white-background versions of each Shopify product photo.
// Generated once via Lovable AI (gemini-2.5-flash-image). To refresh after
// product changes in Shopify, re-run the background-removal script.
import collagenAndRetinolSerum1 from "@/assets/products/collagen-and-retinol-serum-1.png";
import mildToningElixir1 from "@/assets/products/mild-toning-elixir-1.png";
import hyaluronicMoisturizer1 from "@/assets/products/hyaluronic-moisturizer-1.png";
import embraceCollagenMoisturizer1 from "@/assets/products/embrace-collagen-moisturizer-1.png";
import glowMask1 from "@/assets/products/glow-mask-1.png";
import kaleFaceCleanser from "@/assets/products/kale-face-cleanser.png";
import ageDefyingSerum from "@/assets/products/age-defying-serum.png";
import mintExfoliatingFacialPolish from "@/assets/products/mint-exfoliating-facial-polish.png";
import hydratingFacialCleanser from "@/assets/products/hydrating-facial-cleanser.png";
import hyaluronicAcidSerum from "@/assets/products/hyaluronic-acid-serum.png";
import soothingEmulsion from "@/assets/products/soothing-emulsion.png";
import sheaBodyButter from "@/assets/products/shea-body-butter.png";
import oilControlHydrator from "@/assets/products/oil-control-hydrator.png";
import niacinamideVitaminBoostSerum from "@/assets/products/niacinamide-vitamin-boost-serum.png";
import antiAgingRoseGoldOil from "@/assets/products/anti-aging-rose-gold-oil.png";
import activeEyeCream from "@/assets/products/active-eye-cream.png";
import hydrationSerum from "@/assets/products/hydration-serum.png";
import glycolicAcidSerum from "@/assets/products/glycolic-acid-serum.png";
import nourishHandCream from "@/assets/products/nourish-hand-cream.png";
import nightRenewalCreme from "@/assets/products/night-renewal-creme.png";
import oilFreeDailyMoisturizer from "@/assets/products/oil-free-daily-moisturizer.png";
import firmSerum from "@/assets/products/firm-serum.png";
import extremeMoistureBlend from "@/assets/products/extreme-moisture-blend.png";
import soothingMoisturizer from "@/assets/products/soothing-moisturizer.png";

export const PRODUCT_IMAGE_OVERRIDES: Record<string, string> = {
  "collagen-and-retinol-serum-1": collagenAndRetinolSerum1,
  "mild-toning-elixir-1": mildToningElixir1,
  "hyaluronic-moisturizer-1": hyaluronicMoisturizer1,
  "embrace-collagen-moisturizer-1": embraceCollagenMoisturizer1,
  "glow-mask-1": glowMask1,
  "kale-face-cleanser": kaleFaceCleanser,
  "age-defying-serum": ageDefyingSerum,
  "mint-exfoliating-facial-polish": mintExfoliatingFacialPolish,
  "hydrating-facial-cleanser": hydratingFacialCleanser,
  "hyaluronic-acid-serum": hyaluronicAcidSerum,
  "soothing-emulsion": soothingEmulsion,
  "shea-body-butter": sheaBodyButter,
  "oil-control-hydrator": oilControlHydrator,
  "niacinamide-vitamin-boost-serum": niacinamideVitaminBoostSerum,
  "anti-aging-rose-gold-oil": antiAgingRoseGoldOil,
  "active-eye-cream": activeEyeCream,
  "hydration-serum": hydrationSerum,
  "glycolic-acid-serum": glycolicAcidSerum,
  "nourish-hand-cream": nourishHandCream,
  "night-renewal-creme": nightRenewalCreme,
  "oil-free-daily-moisturizer": oilFreeDailyMoisturizer,
  "firm-serum": firmSerum,
  "extreme-moisture-blend": extremeMoistureBlend,
  "soothing-moisturizer": soothingMoisturizer,
};

export function getProductImage(handle: string, fallbackUrl?: string): string | undefined {
  return PRODUCT_IMAGE_OVERRIDES[handle] || fallbackUrl;
}
