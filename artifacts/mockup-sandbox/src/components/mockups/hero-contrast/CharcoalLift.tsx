import { HeroTemplate } from "./_HeroTemplate";

export function CharcoalLift() {
  return (
    <HeroTemplate p={{
      bg: "#1C1C1C",
      panel: "#252525",
      border: "#3a3a3a",
      borderCard: "rgba(255,255,255,0.10)",
      text: "#f5f5f5",
      muted: "#BDBDBD",
      primary: "#FF8C00",
      heroBg: `
        radial-gradient(circle at 85% 12%, rgba(255,140,0,0.14), transparent 25%),
        radial-gradient(circle at 15% 55%, rgba(80,80,80,0.20), transparent 30%),
        linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(22,22,22,1) 100%)
      `,
      pillBg: "rgba(40,40,40,0.9)",
      pillBorder: "rgba(255,255,255,0.10)",
      innerPanel: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
      innerPanelBorder: "rgba(255,255,255,0.09)",
      statBg: "rgba(255,255,255,0.03)",
      statBorder: "rgba(255,255,255,0.07)",
      mockBodyBg: "linear-gradient(160deg, rgba(255,140,0,0.10), transparent 30%), linear-gradient(180deg, rgba(30,30,30,1) 0%, rgba(25,25,25,1) 100%)",
      skeletonBg: "#3a3a3a",
    }} />
  );
}
