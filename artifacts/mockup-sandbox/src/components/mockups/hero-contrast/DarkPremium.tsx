import { HeroTemplate } from "./_HeroTemplate";

export function DarkPremium() {
  return (
    <HeroTemplate p={{
      bg: "#0D0D0D",
      panel: "#141414",
      border: "#2a2a2a",
      borderCard: "rgba(255,255,255,0.08)",
      text: "#f5f5f5",
      muted: "#A6A6A6",
      primary: "#FF8C00",
      heroBg: `
        radial-gradient(circle at 85% 12%, rgba(255,140,0,0.20), transparent 22%),
        radial-gradient(circle at 15% 55%, rgba(82,50,0,0.32), transparent 28%),
        linear-gradient(180deg, rgba(13,13,13,1) 0%, rgba(10,10,10,1) 100%)
      `,
      pillBg: "rgba(20,20,20,0.9)",
      pillBorder: "rgba(255,255,255,0.08)",
      innerPanel: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%)",
      innerPanelBorder: "rgba(255,255,255,0.06)",
      statBg: "rgba(255,255,255,0.02)",
      statBorder: "rgba(255,255,255,0.05)",
      mockBodyBg: "linear-gradient(160deg, rgba(255,140,0,0.14), transparent 30%), linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(14,14,14,1) 100%)",
      skeletonBg: "#252525",
    }} />
  );
}
