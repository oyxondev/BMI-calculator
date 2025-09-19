import { Sun, Moon, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const nextTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('night');
    else setTheme('light');
  };

  const getIcon = () => {
    if (theme === 'light') return <Sun className="h-4 w-4" />;
    if (theme === 'dark') return <Moon className="h-4 w-4" />;
    return <Zap className="h-4 w-4" />;
  };

  const getLabel = () => {
    if (theme === 'light') return 'Light';
    if (theme === 'dark') return 'Dark';
    return 'Night';
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={nextTheme}
      className="gap-2 border-border hover:bg-secondary"
    >
      {getIcon()}
      {getLabel()}
    </Button>
  );
}