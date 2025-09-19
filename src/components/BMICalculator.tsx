import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Heart } from "lucide-react";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [errors, setErrors] = useState({ height: "", weight: "" });

  const calculateBMI = () => {
    // Reset errors
    setErrors({ height: "", weight: "" });
    
    // Validation
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    
    let hasErrors = false;
    
    if (!height || heightNum <= 0 || heightNum > 300) {
      setErrors(prev => ({ ...prev, height: "Please enter a valid height (1-300 cm)" }));
      hasErrors = true;
    }
    
    if (!weight || weightNum <= 0 || weightNum > 1000) {
      setErrors(prev => ({ ...prev, weight: "Please enter a valid weight (1-1000 kg)" }));
      hasErrors = true;
    }
    
    if (hasErrors) return;
    
    // Calculate BMI
    const heightInMeters = heightNum / 100;
    const bmi = weightNum / (heightInMeters * heightInMeters);
    
    // Determine category and color
    let category: string;
    let color: string;
    
    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-health-underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
      color = "text-health-normal";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-health-overweight";
    } else {
      category = "Obesity";
      color = "text-health-obesity";
    }
    
    setResult({
      bmi: Math.round(bmi * 100) / 100,
      category,
      color
    });
  };

  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setResult(null);
    setErrors({ height: "", weight: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">BMI Calculator</h1>
          <p className="text-muted-foreground">Calculate your Body Mass Index quickly and easily</p>
        </div>

        {/* Calculator Card */}
        <Card className="shadow-[var(--shadow-card)] border-border/50 bg-gradient-to-b from-card to-card/95">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              <Calculator className="w-5 h-5 text-primary" />
              Calculate Your BMI
            </CardTitle>
            <CardDescription>
              Enter your height and weight to get your BMI result
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Input Fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="height" className="text-sm font-medium text-foreground">
                  Height (cm)
                </Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g., 170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className={`bg-input border-border focus:ring-primary focus:border-primary ${
                    errors.height ? "border-destructive focus:ring-destructive" : ""
                  }`}
                />
                {errors.height && (
                  <p className="text-sm text-destructive">{errors.height}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-sm font-medium text-foreground">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={`bg-input border-border focus:ring-primary focus:border-primary ${
                    errors.weight ? "border-destructive focus:ring-destructive" : ""
                  }`}
                />
                {errors.weight && (
                  <p className="text-sm text-destructive">{errors.weight}</p>
                )}
              </div>
            </div>

            {/* Calculate Button */}
            <Button 
              onClick={calculateBMI}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium shadow-[var(--shadow-button)] transition-all duration-200"
            >
              Calculate BMI
            </Button>

            {/* Result Display */}
            {result && (
              <div className="mt-6 p-6 rounded-lg bg-secondary/50 border border-border/30 text-center space-y-3">
                <div className="text-3xl font-bold text-foreground">
                  {result.bmi}
                </div>
                <div className={`text-lg font-semibold ${result.color}`}>
                  {result.category}
                </div>
                <p className="text-sm text-muted-foreground">
                  Your BMI is {result.bmi}. This is considered {result.category.toLowerCase()}.
                </p>
                
                <Button
                  variant="outline"
                  onClick={resetCalculator}
                  className="mt-4 border-border hover:bg-secondary"
                >
                  Calculate Again
                </Button>
              </div>
            )}

            {/* BMI Categories Info */}
            <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/30">
              <h4 className="font-semibold text-sm text-foreground mb-3">BMI Categories:</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-health-underweight font-medium">Underweight</span>
                  <span className="text-muted-foreground">Below 18.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-health-normal font-medium">Normal weight</span>
                  <span className="text-muted-foreground">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-health-overweight font-medium">Overweight</span>
                  <span className="text-muted-foreground">25.0 - 29.9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-health-obesity font-medium">Obesity</span>
                  <span className="text-muted-foreground">30.0 and above</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}