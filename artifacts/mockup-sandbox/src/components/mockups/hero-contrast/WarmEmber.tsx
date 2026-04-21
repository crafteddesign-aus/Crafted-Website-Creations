import { HeroTemplate } from "./_HeroTemplate";

export function WarmEmber() {
  return (
    <HeroTemplate p={{
      bg: "#100D09",
      panel: "#1A1510",
      border: "#3a2e20",
      borderCard: "rgba(255,180,80,0.12)",
      text: "#F0EBE3",
      muted: "#B8A89A",
      primary: "#FF8C00",
      heroBg: `
        radial-gradient(circle at 85% 12%, rgba(255,140,0,0.30), transparent 24%),
        radial-gradient(circle at 15% 55%, rgba(130,70,0,0.38), transparent 30%),
        linear-gradient(180deg, rgba(16,13,9,1) 0%, rgba(12,10,7,1) 100%)
      `,
      pillBg: "rgba(30,22,12,0.92)",
      pillBorder: "rgba(255,180,80,0.15)",
      innerPanel: "linear-gradient(180deg, rgba(255,140,0,0.04) 0%, rgba(255,140,0,0.015) 100%)",
      innerPanelBorder: "rgba(255,140,0,0.10)",
      statBg: "rgba(255,140,0,0.03)",
      statBorder: "rgba(255,140,0,0.08)",
      mockBodyBg: "linear-gradient(160deg, rgba(255,140,0,0.20), transparent 32%), linear-gradient(180deg, rgba(22,16,10,1) 0%, rgba(18,13,8,1) 100%)",
      skeletonBg: "#3a2a18",
    }} />
  );
}
