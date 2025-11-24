"use client";

import { useState, useEffect } from "react";
import { Upload, Camera, FileText, ShoppingCart, TrendingUp, Dna, Calendar, Apple, Pill, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface UserProfile {
  dnaUploaded: boolean;
  routineData: {
    age: string;
    weight: string;
    height: string;
    activityLevel: string;
    goals: string;
    restrictions: string;
  };
  foodPhotos: string[];
  dietPlan: DietPlan | null;
  weeklyProgress: WeeklyProgress[];
}

interface DietPlan {
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
  meals: Meal[];
  supplements: Supplement[];
  shoppingList: string[];
}

interface Meal {
  name: string;
  time: string;
  foods: string[];
  calories: number;
}

interface Supplement {
  name: string;
  dosage: string;
  timing: string;
}

interface WeeklyProgress {
  week: number;
  weight: string;
  energy: number;
  compliance: number;
  notes: string;
}

export default function DietApp() {
  const [activeTab, setActiveTab] = useState("profile");
  const [userProfile, setUserProfile] = useState<UserProfile>({
    dnaUploaded: false,
    routineData: {
      age: "",
      weight: "",
      height: "",
      activityLevel: "",
      goals: "",
      restrictions: "",
    },
    foodPhotos: [],
    dietPlan: null,
    weeklyProgress: [],
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  // Load data from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem("dietAppProfile");
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("dietAppProfile", JSON.stringify(userProfile));
  }, [userProfile]);

  const handleDNAUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserProfile({ ...userProfile, dnaUploaded: true });
      toast.success("Teste de DNA carregado com sucesso!");
    }
  };

  const handleFoodPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile({
          ...userProfile,
          foodPhotos: [...userProfile.foodPhotos, reader.result as string],
        });
        toast.success("Foto da comida adicionada!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRoutineDataChange = (field: string, value: string) => {
    setUserProfile({
      ...userProfile,
      routineData: { ...userProfile.routineData, [field]: value },
    });
  };

  const generateDietPlan = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate AI processing
    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    setTimeout(() => {
      const mockDietPlan: DietPlan = {
        calories: 2200,
        macros: {
          protein: 165,
          carbs: 220,
          fats: 73,
        },
        meals: [
          {
            name: "Café da Manhã",
            time: "07:00",
            foods: ["3 ovos mexidos", "2 fatias de pão integral", "1 banana", "Café com leite"],
            calories: 520,
          },
          {
            name: "Lanche da Manhã",
            time: "10:00",
            foods: ["1 iogurte grego", "30g de granola", "10 amêndoas"],
            calories: 280,
          },
          {
            name: "Almoço",
            time: "12:30",
            foods: ["150g de frango grelhado", "1 xícara de arroz integral", "Salada verde", "Brócolis no vapor"],
            calories: 650,
          },
          {
            name: "Lanche da Tarde",
            time: "16:00",
            foods: ["1 batata doce média", "2 colheres de pasta de amendoim"],
            calories: 320,
          },
          {
            name: "Jantar",
            time: "19:30",
            foods: ["150g de salmão", "Quinoa", "Aspargos grelhados", "Salada mista"],
            calories: 430,
          },
        ],
        supplements: [
          { name: "Vitamina D3", dosage: "2000 UI", timing: "Café da manhã" },
          { name: "Ômega 3", dosage: "1000mg", timing: "Almoço" },
          { name: "Magnésio", dosage: "400mg", timing: "Jantar" },
          { name: "Probióticos", dosage: "10 bilhões CFU", timing: "Café da manhã" },
        ],
        shoppingList: [
          "Ovos (2 dúzias)",
          "Pão integral",
          "Bananas",
          "Iogurte grego",
          "Granola",
          "Amêndoas",
          "Frango (1kg)",
          "Arroz integral",
          "Brócolis",
          "Batata doce",
          "Pasta de amendoim",
          "Salmão (500g)",
          "Quinoa",
          "Aspargos",
          "Mix de folhas verdes",
        ],
      };

      setUserProfile({ ...userProfile, dietPlan: mockDietPlan });
      setIsGenerating(false);
      setActiveTab("diet");
      toast.success("Plano de dieta gerado com sucesso!");
    }, 3000);
  };

  const addWeeklyProgress = () => {
    const newProgress: WeeklyProgress = {
      week: userProfile.weeklyProgress.length + 1,
      weight: "",
      energy: 5,
      compliance: 80,
      notes: "",
    };
    setUserProfile({
      ...userProfile,
      weeklyProgress: [...userProfile.weeklyProgress, newProgress],
    });
    toast.success("Novo registro semanal adicionado!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-emerald-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 sm:p-3 rounded-xl shadow-lg">
                <Apple className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  NutriDNA
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Dieta Personalizada por IA</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-300">
              <Dna className="w-3 h-3 mr-1" />
              DNA Ativo
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-white/50 dark:bg-gray-800/50 p-2 rounded-xl">
            <TabsTrigger value="profile" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
              <Camera className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Fotos</span>
            </TabsTrigger>
            <TabsTrigger value="diet" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
              <Apple className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Dieta</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Progresso</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-2 border-emerald-200 dark:border-gray-700 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Dna className="w-6 h-6" />
                  Upload de Teste de DNA
                </CardTitle>
                <CardDescription className="text-emerald-50">
                  Carregue seu teste de DNA para análise genética personalizada
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full max-w-md">
                    <Label htmlFor="dna-upload" className="cursor-pointer">
                      <div className="border-2 border-dashed border-emerald-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-800 transition-all">
                        <Upload className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Clique para fazer upload do arquivo DNA
                        </p>
                        <p className="text-xs text-gray-500 mt-2">Formatos aceitos: .txt, .csv, .json</p>
                      </div>
                    </Label>
                    <Input
                      id="dna-upload"
                      type="file"
                      className="hidden"
                      accept=".txt,.csv,.json"
                      onChange={handleDNAUpload}
                    />
                  </div>
                  {userProfile.dnaUploaded && (
                    <Badge className="bg-emerald-500 text-white">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      DNA Carregado
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 dark:border-gray-700 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Dados da Rotina
                </CardTitle>
                <CardDescription className="text-teal-50">
                  Preencha suas informações para personalização completa
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Idade</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Ex: 30"
                      value={userProfile.routineData.age}
                      onChange={(e) => handleRoutineDataChange("age", e.target.value)}
                      className="border-teal-200 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Ex: 75"
                      value={userProfile.routineData.weight}
                      onChange={(e) => handleRoutineDataChange("weight", e.target.value)}
                      className="border-teal-200 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Altura (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Ex: 175"
                      value={userProfile.routineData.height}
                      onChange={(e) => handleRoutineDataChange("height", e.target.value)}
                      className="border-teal-200 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="activity">Nível de Atividade</Label>
                    <Input
                      id="activity"
                      placeholder="Ex: Moderado"
                      value={userProfile.routineData.activityLevel}
                      onChange={(e) => handleRoutineDataChange("activityLevel", e.target.value)}
                      className="border-teal-200 focus:border-teal-500"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="goals">Objetivos</Label>
                  <Textarea
                    id="goals"
                    placeholder="Ex: Perder peso, ganhar massa muscular, melhorar energia..."
                    value={userProfile.routineData.goals}
                    onChange={(e) => handleRoutineDataChange("goals", e.target.value)}
                    className="border-teal-200 focus:border-teal-500"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="restrictions">Restrições Alimentares</Label>
                  <Textarea
                    id="restrictions"
                    placeholder="Ex: Intolerância à lactose, vegetariano, alergia a nozes..."
                    value={userProfile.routineData.restrictions}
                    onChange={(e) => handleRoutineDataChange("restrictions", e.target.value)}
                    className="border-teal-200 focus:border-teal-500"
                    rows={3}
                  />
                </div>
                <Button
                  onClick={generateDietPlan}
                  disabled={isGenerating || !userProfile.dnaUploaded}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg"
                >
                  {isGenerating ? "Gerando Plano..." : "Gerar Plano de Dieta Personalizado"}
                </Button>
                {isGenerating && (
                  <div className="space-y-2">
                    <Progress value={generationProgress} className="h-2" />
                    <p className="text-sm text-center text-gray-600">Analisando DNA e dados... {generationProgress}%</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-6">
            <Card className="border-2 border-cyan-200 dark:border-gray-700 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-6 h-6" />
                  Análise de Fotos de Comida
                </CardTitle>
                <CardDescription className="text-cyan-50">
                  Envie fotos das suas refeições para análise nutricional por IA
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <Label htmlFor="food-photo" className="cursor-pointer w-full">
                    <div className="border-2 border-dashed border-cyan-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-800 transition-all">
                      <Camera className="w-12 h-12 mx-auto mb-4 text-cyan-600" />
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Adicionar Foto da Refeição
                      </p>
                      <p className="text-xs text-gray-500 mt-2">JPG, PNG ou WEBP</p>
                    </div>
                  </Label>
                  <Input
                    id="food-photo"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFoodPhotoUpload}
                  />
                </div>

                {userProfile.foodPhotos.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {userProfile.foodPhotos.map((photo, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={photo}
                          alt={`Comida ${index + 1}`}
                          className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Badge className="bg-cyan-500 text-white">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Analisada
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {userProfile.foodPhotos.length > 0 && (
                  <Card className="bg-cyan-50 dark:bg-gray-800 border-cyan-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Análise Nutricional</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Calorias estimadas:</span>
                        <span className="font-semibold text-cyan-600">~650 kcal</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Proteínas:</span>
                        <span className="font-semibold text-cyan-600">~35g</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Carboidratos:</span>
                        <span className="font-semibold text-cyan-600">~60g</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Gorduras:</span>
                        <span className="font-semibold text-cyan-600">~25g</span>
                      </div>
                      <div className="mt-4 p-3 bg-white dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          <AlertCircle className="w-4 h-4 inline mr-1 text-cyan-600" />
                          Sugestão: Adicione mais vegetais verdes para aumentar fibras e micronutrientes.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Diet Tab */}
          <TabsContent value="diet" className="space-y-6">
            {userProfile.dietPlan ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="border-2 border-emerald-200 dark:border-gray-700 shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Calorias Diárias</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-emerald-600">{userProfile.dietPlan.calories}</p>
                      <p className="text-sm text-gray-500">kcal/dia</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-teal-200 dark:border-gray-700 shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Proteínas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-teal-600">{userProfile.dietPlan.macros.protein}g</p>
                      <p className="text-sm text-gray-500">por dia</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-cyan-200 dark:border-gray-700 shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Carboidratos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-cyan-600">{userProfile.dietPlan.macros.carbs}g</p>
                      <p className="text-sm text-gray-500">por dia</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-2 border-emerald-200 dark:border-gray-700 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Apple className="w-6 h-6" />
                      Plano de Refeições
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    {userProfile.dietPlan.meals.map((meal, index) => (
                      <Card key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 border-emerald-200">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{meal.name}</CardTitle>
                            <Badge variant="outline" className="bg-white dark:bg-gray-800">
                              {meal.time}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <ul className="space-y-1">
                            {meal.foods.map((food, foodIndex) => (
                              <li key={foodIndex} className="text-sm flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span>{food}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2 border-t border-emerald-200">
                            <span className="text-sm font-semibold text-emerald-700">
                              {meal.calories} kcal
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200 dark:border-gray-700 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="w-6 h-6" />
                      Suplementação Personalizada
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {userProfile.dietPlan.supplements.map((supplement, index) => (
                        <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 border-purple-200">
                          <CardContent className="pt-4">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-400">{supplement.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Dosagem: {supplement.dosage}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Horário: {supplement.timing}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-200 dark:border-gray-700 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="w-6 h-6" />
                      Lista de Compras Automática
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {userProfile.dietPlan.shoppingList.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-orange-50 dark:bg-gray-800 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="border-2 border-gray-200 dark:border-gray-700">
                <CardContent className="pt-12 pb-12 text-center">
                  <Apple className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nenhum plano de dieta gerado
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Complete seu perfil e gere um plano personalizado
                  </p>
                  <Button
                    onClick={() => setActiveTab("profile")}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                  >
                    Ir para Perfil
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <Card className="border-2 border-blue-200 dark:border-gray-700 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Monitoramento Semanal
                </CardTitle>
                <CardDescription className="text-blue-50">
                  Acompanhe seu progresso e receba feedback personalizado
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <Button
                  onClick={addWeeklyProgress}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                >
                  Adicionar Registro Semanal
                </Button>

                {userProfile.weeklyProgress.length > 0 ? (
                  <div className="space-y-4">
                    {userProfile.weeklyProgress.map((progress, index) => (
                      <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-blue-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Semana {progress.week}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <Label htmlFor={`weight-${index}`}>Peso (kg)</Label>
                            <Input
                              id={`weight-${index}`}
                              type="number"
                              placeholder="Ex: 74.5"
                              value={progress.weight}
                              onChange={(e) => {
                                const updated = [...userProfile.weeklyProgress];
                                updated[index].weight = e.target.value;
                                setUserProfile({ ...userProfile, weeklyProgress: updated });
                              }}
                              className="border-blue-200"
                            />
                          </div>
                          <div>
                            <Label>Nível de Energia (1-10): {progress.energy}</Label>
                            <Input
                              type="range"
                              min="1"
                              max="10"
                              value={progress.energy}
                              onChange={(e) => {
                                const updated = [...userProfile.weeklyProgress];
                                updated[index].energy = parseInt(e.target.value);
                                setUserProfile({ ...userProfile, weeklyProgress: updated });
                              }}
                              className="w-full"
                            />
                          </div>
                          <div>
                            <Label>Aderência ao Plano: {progress.compliance}%</Label>
                            <Progress value={progress.compliance} className="h-2" />
                          </div>
                          <div>
                            <Label htmlFor={`notes-${index}`}>Observações</Label>
                            <Textarea
                              id={`notes-${index}`}
                              placeholder="Como você se sentiu esta semana?"
                              value={progress.notes}
                              onChange={(e) => {
                                const updated = [...userProfile.weeklyProgress];
                                updated[index].notes = e.target.value;
                                setUserProfile({ ...userProfile, weeklyProgress: updated });
                              }}
                              className="border-blue-200"
                              rows={2}
                            />
                          </div>
                          <div className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-blue-200">
                            <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">
                              Feedback da IA:
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              Excelente progresso! Continue mantendo a aderência ao plano. Considere aumentar a ingestão de água para otimizar resultados.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500">Nenhum registro semanal ainda</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-emerald-200 dark:border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            NutriDNA - Dieta Personalizada por IA baseada em DNA
          </p>
        </div>
      </footer>
    </div>
  );
}
