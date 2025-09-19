import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  User, 
  Code, 
  Music, 
  Mail, 
  Github, 
  Linkedin,
  Server,
  Monitor,
  Mic
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Oyxon Qadamboyeva</h1>
              <p className="text-muted-foreground">Frontend & Backend Developer</p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Main intro card */}
        <Card className="shadow-[var(--shadow-card)] border-border/50 bg-gradient-to-b from-card to-card/95">
          <CardHeader>
            <CardTitle className="text-center text-xl">Salom! 👋</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-card-foreground leading-relaxed">
              Men Oyxon Qadamboyeva. Hozirda frontend va backend dasturchilikni chuqur o'rganib bormoqdaman. 
              Zamonaviy veb-texnologiyalar va server tomonidagi ishlanmalar meni juda qiziqtiradi. 
              Kodlash jarayonida ijodkorlikni namoyon etishni yaxshi ko'raman.
            </p>
            <p className="text-card-foreground leading-relaxed">
              Bo'sh vaqtlarimda esa rep musiqasi bilan shug'ullanaman - bu menga o'z his-tuyg'ularimni 
              ifoda etishga yordam beradi. Har kuni yangi narsalarni o'rganish va professional 
              rivojlanish yo'lida oldinga intilaman!
            </p>
          </CardContent>
        </Card>

        {/* Skills section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-primary" />
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Foydalanuvchi interfeysi va tajribasi yaratish
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">HTML/CSS</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Server va ma'lumotlar bazasi bilan ishlash
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Database</Badge>
                <Badge variant="secondary">API Development</Badge>
                <Badge variant="secondary">Backend Logic</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hobby section */}
        <Card className="shadow-[var(--shadow-card)] border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="w-5 h-5 text-accent" />
              Xobbim: Rep Musiqasi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-card-foreground">
              Rep musiqasi mening ijodiy ifoda etish usulidir. Bu menga o'z fikrlarim va 
              his-tuyg'ularimni so'zlar orqali baham ko'rishga imkon beradi. Musiqadagi 
              ritm va qofiyalar kodlashdagi mantiq kabi aniq va tartibli bo'lishi kerak.
            </p>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                Ijodkorlik va texnologiya - mening hayotimdagi ikki muhim qism
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Contact section */}
        <Card className="shadow-[var(--shadow-card)] border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Bog'lanish
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-card-foreground mb-4">
              Hamkorlik yoki loyihalar haqida gaplashish uchun menga murojaat qiling!
            </p>
            <div className="flex gap-3">
              <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button size="sm" variant="outline" className="gap-2 border-border hover:bg-secondary">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button size="sm" variant="outline" className="gap-2 border-border hover:bg-secondary">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-sm text-muted-foreground">
            © 2024 Oyxon Qadamboyeva. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
}