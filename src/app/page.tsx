"use client";

import { useState } from "react";
import { Dna, Apple, Camera, TrendingUp, CheckCircle2, Star, ArrowRight, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado! Entraremos em contato em breve no email: ${email}`);
    setEmail("");
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
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-20">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 px-4 py-2 text-sm">
            <Dna className="w-4 h-4 mr-2 inline" />
            Tecnologia de Ponta em Nutrição Genética
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Sua Dieta Perfeita,
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Baseada no Seu DNA
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubra o poder da nutrição personalizada com análise genética avançada. 
            Receba um plano de dieta e suplementação criado especialmente para você, 
            com acompanhamento inteligente por IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-2xl text-lg px-8 py-6 w-full sm:w-auto"
            >
              Começar Minha Jornada
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6 w-full sm:w-auto"
            >
              Ver Como Funciona
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Análise de DNA Completa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Plano 100% Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Acompanhamento por IA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-12 border-y border-emerald-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                10k+
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                95%
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">Taxa de Sucesso</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                50+
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">Marcadores Genéticos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                24/7
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">Suporte por IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Como Funciona o NutriDNA
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Um processo simples e científico para transformar sua alimentação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 border-emerald-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-xl w-fit mb-4">
                <Dna className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">1. Envie Seu DNA</CardTitle>
              <CardDescription>
                Faça upload do seu teste de DNA ou solicite nosso kit de coleta
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-teal-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-xl w-fit mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">2. Análise Completa</CardTitle>
              <CardDescription>
                Nossa IA analisa seu DNA, rotina e fotos das suas refeições
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-cyan-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl w-fit mb-4">
                <Apple className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">3. Plano Personalizado</CardTitle>
              <CardDescription>
                Receba dieta, suplementação e lista de compras sob medida
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-blue-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl w-fit mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">4. Acompanhamento</CardTitle>
              <CardDescription>
                Monitore seu progresso com feedback semanal inteligente
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Por Que Escolher o NutriDNA?
            </h3>
            <p className="text-lg text-emerald-50">
              Tecnologia de ponta para resultados reais e duradouros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white">
              <CardHeader>
                <Zap className="w-12 h-12 mb-4 text-yellow-300" />
                <CardTitle className="text-2xl">Resultados Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-50">
                  Veja mudanças significativas em apenas 2-4 semanas com nosso plano baseado em ciência genética
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white">
              <CardHeader>
                <Shield className="w-12 h-12 mb-4 text-blue-300" />
                <CardTitle className="text-2xl">100% Seguro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-50">
                  Seus dados genéticos são criptografados e protegidos com os mais altos padrões de segurança
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white">
              <CardHeader>
                <Users className="w-12 h-12 mb-4 text-pink-300" />
                <CardTitle className="text-2xl">Suporte Dedicado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-50">
                  Equipe de nutricionistas e IA disponível 24/7 para tirar suas dúvidas e ajustar seu plano
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O Que Nossos Clientes Dizem
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Histórias reais de transformação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 border-emerald-200 dark:border-gray-700 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardTitle className="text-lg">Perdi 12kg em 3 meses!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Nunca imaginei que meu DNA pudesse revelar tanto sobre minha alimentação. O plano é fácil de seguir e os resultados são incríveis!"
              </p>
              <p className="text-sm font-semibold text-emerald-600">— Maria Silva, 34 anos</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-teal-200 dark:border-gray-700 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardTitle className="text-lg">Mais energia do que nunca</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "A suplementação personalizada fez toda a diferença. Acordo com mais disposição e meu rendimento na academia triplicou!"
              </p>
              <p className="text-sm font-semibold text-teal-600">— João Santos, 28 anos</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-cyan-200 dark:border-gray-700 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardTitle className="text-lg">Finalmente entendi meu corpo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Descobri intolerâncias que nem sabia que tinha. Agora sei exatamente o que comer para me sentir bem todos os dias."
              </p>
              <p className="text-sm font-semibold text-cyan-600">— Ana Costa, 41 anos</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-16 sm:py-24 border-y border-emerald-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Planos e Preços
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Escolha o plano ideal para sua jornada de transformação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription>Para começar sua jornada</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">R$ 297</span>
                  <span className="text-gray-600 dark:text-gray-400">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Análise de DNA completa</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Plano de dieta personalizado</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Lista de compras automática</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Suporte por email</span>
                </div>
                <Button className="w-full mt-6 border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50" variant="outline">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-emerald-500 shadow-2xl hover:shadow-3xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1">
                  Mais Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>Resultados acelerados</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">R$ 497</span>
                  <span className="text-gray-600 dark:text-gray-400">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-semibold">Tudo do plano Básico +</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Análise de fotos de comida por IA</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Suplementação personalizada</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Monitoramento semanal</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Suporte prioritário 24/7</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Elite</CardTitle>
                <CardDescription>Transformação completa</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">R$ 797</span>
                  <span className="text-gray-600 dark:text-gray-400">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-semibold">Tudo do plano Premium +</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Consultas mensais com nutricionista</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ajustes ilimitados no plano</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Acesso a comunidade exclusiva</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Kit de suplementos incluído</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <Card className="border-4 border-emerald-500 shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700">
          <CardContent className="py-12 sm:py-16 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pronto Para Transformar Sua Alimentação?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já descobriram o poder da nutrição personalizada por DNA
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-emerald-300 focus:border-emerald-500 text-lg py-6"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-6 whitespace-nowrap"
              >
                Começar Agora
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Sem compromisso. Cancele quando quiser.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-emerald-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  NutriDNA
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nutrição personalizada baseada em análise genética e inteligência artificial
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-emerald-600">Como Funciona</a></li>
                <li><a href="#" className="hover:text-emerald-600">Planos e Preços</a></li>
                <li><a href="#" className="hover:text-emerald-600">Depoimentos</a></li>
                <li><a href="#" className="hover:text-emerald-600">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-emerald-600">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-emerald-600">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-600">Carreiras</a></li>
                <li><a href="#" className="hover:text-emerald-600">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-emerald-600">Privacidade</a></li>
                <li><a href="#" className="hover:text-emerald-600">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-emerald-600">Cookies</a></li>
                <li><a href="#" className="hover:text-emerald-600">Segurança</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-emerald-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 NutriDNA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
