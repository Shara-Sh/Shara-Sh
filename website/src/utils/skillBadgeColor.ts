export const color = (skill: string) => {
  switch (skill.toLowerCase()) {
    case "python":
      return "bg-[#3776AB]";
    case "html":
      return "bg-[#E44D27]";
    case "css":
      return "bg-[#1572B6]";
    case "javascript":
      return "bg-[#FFCE5A] text-black";
    case "typescript":
      return "bg-[#1976D2]";
    case "markdown":
      return "bg-[#000]";
    case "react":
      return "bg-[#282C34]";
    case "sass":
      return "bg-[#CC6699]";
    case "tailwindcss":
      return "bg-[#1A202C]";
    case "bootstrap":
      return "bg-[#6E2BF2]";
    case "vite":
      return "bg-[#646CFF]";
    case "prettier":
      return "bg-[#F7B93E] text-black";
    case "git":
      return "bg-[#F05032]";
    case "vscode":
      return "bg-[#007ACC]";
    case "vercel":
      return "bg-[#fff] text-black";
    case "supabase":
      return "bg-[#1C1C1C]";
    default:
      return "bg-gray-500";
  }
};
