import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const mods = [
    {
      name: 'Create: New Age',
      category: 'Технологии',
      description: 'Футуристичный мод на электричество, автоматизацию и высокотехнологичные машины',
      downloads: '2.5M',
      version: '1.20.1',
      tags: ['Tech', 'Automation', 'Energy']
    },
    {
      name: 'Ad Astra',
      category: 'Космос',
      description: 'Исследование космоса, ракеты, планеты и межгалактические путешествия',
      downloads: '1.8M',
      version: '1.20.1',
      tags: ['Space', 'Adventure', 'Tech']
    },
    {
      name: 'Mekanism',
      category: 'Технологии',
      description: 'Мощная энергетическая система и продвинутая обработка ресурсов',
      downloads: '3.2M',
      version: '1.20.1',
      tags: ['Tech', 'Energy', 'Processing']
    },
    {
      name: 'Applied Energistics 2',
      category: 'Хранение',
      description: 'Цифровое хранение предметов через квантовую сеть',
      downloads: '4.1M',
      version: '1.20.1',
      tags: ['Storage', 'Tech', 'Network']
    },
    {
      name: 'Thermal Series',
      category: 'Технологии',
      description: 'Модульная система машин для автоматизации и энергетики',
      downloads: '2.9M',
      version: '1.20.1',
      tags: ['Tech', 'Automation', 'Modular']
    },
    {
      name: 'Botania',
      category: 'Магия',
      description: 'Технологическая магия на основе маны и цветов',
      downloads: '3.5M',
      version: '1.20.1',
      tags: ['Magic', 'Tech', 'Nature']
    }
  ];

  const guides = [
    {
      title: 'Автоматизация фермы',
      difficulty: 'Легко',
      time: '15 мин',
      description: 'Создайте автоматическую ферму с помощью Create mod'
    },
    {
      title: 'Энергосистема с нуля',
      difficulty: 'Средне',
      time: '30 мин',
      description: 'Постройте эффективную энергосистему на Mekanism'
    },
    {
      title: 'ME система хранения',
      difficulty: 'Сложно',
      time: '45 мин',
      description: 'Настройте цифровую систему хранения Applied Energistics 2'
    },
    {
      title: 'Космическая база',
      difficulty: 'Сложно',
      time: '60 мин',
      description: 'Постройте базу на другой планете с Ad Astra'
    }
  ];

  const modpacks = [
    {
      name: 'Create: Above and Beyond',
      mods: '200+',
      type: 'Quest',
      description: 'Прогрессивный модпак с фокусом на Create mod'
    },
    {
      name: 'All The Mods 9',
      mods: '400+',
      type: 'Kitchen Sink',
      description: 'Все популярные моды в одном паке'
    },
    {
      name: 'Enigmatica 9',
      mods: '300+',
      type: 'Expert',
      description: 'Экспертный модпак с квестами и челленджами'
    }
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      <div className="relative">
        <nav className="border-b border-primary/30 bg-card/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-border animate-pulse-glow">
                <Icon name="Blocks" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-black glow text-primary">MINECRAFT MODS</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button 
                onClick={() => setActiveSection('main')}
                className={`font-semibold transition-all ${activeSection === 'main' ? 'text-primary glow' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('guides')}
                className={`font-semibold transition-all ${activeSection === 'guides' ? 'text-primary glow' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Гайды
              </button>
            </div>
          </div>
        </nav>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <Badge className="bg-primary/20 text-primary border-primary/50 text-lg px-6 py-2 glow-border">
                <Icon name="Rocket" size={16} className="mr-2" />
                Версия 1.20.1
              </Badge>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black leading-tight">
              <span className="text-primary glow">ФУТУРИСТИЧНЫЕ</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                МОДЫ MINECRAFT
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Трансформируй Minecraft в киберпанк-вселенную с технологиями, космосом и автоматизацией
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 glow-border"
                onClick={() => setActiveSection('main')}
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать моды
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8"
                onClick={() => setActiveSection('guides')}
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Смотреть гайды
              </Button>
            </div>
          </div>
        </section>

        {activeSection === 'main' && (
          <>
            <section className="container mx-auto px-4 py-20">
              <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-4xl font-black text-primary glow">ПОПУЛЯРНЫЕ МОДЫ</h3>
                  <p className="text-muted-foreground text-lg">Лучшие технологические моды для создания футуристичного мира</p>
                </div>

                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="w-full justify-start bg-card/50 border border-primary/20 p-1">
                    <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      Все
                    </TabsTrigger>
                    <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      Технологии
                    </TabsTrigger>
                    <TabsTrigger value="space" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      Космос
                    </TabsTrigger>
                    <TabsTrigger value="magic" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      Магия
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mods.map((mod, idx) => (
                        <Card 
                          key={idx} 
                          className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary/60 transition-all hover:scale-105 group overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <CardHeader className="relative">
                            <div className="flex items-start justify-between">
                              <div className="space-y-2 flex-1">
                                <CardTitle className="text-xl font-bold text-primary group-hover:glow transition-all">
                                  {mod.name}
                                </CardTitle>
                                <Badge variant="outline" className="border-accent text-accent">
                                  {mod.category}
                                </Badge>
                              </div>
                              <Icon name="Cpu" className="text-secondary" size={28} />
                            </div>
                          </CardHeader>
                          <CardContent className="relative space-y-4">
                            <CardDescription className="text-sm leading-relaxed">
                              {mod.description}
                            </CardDescription>
                            
                            <div className="flex flex-wrap gap-2">
                              {mod.tags.map((tag, tagIdx) => (
                                <Badge 
                                  key={tagIdx}
                                  variant="secondary"
                                  className="bg-primary/10 text-primary border-primary/30 text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Icon name="Download" size={14} />
                                  {mod.downloads}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="Tag" size={14} />
                                  {mod.version}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="tech">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mods.filter(m => m.category === 'Технологии' || m.category === 'Хранение').map((mod, idx) => (
                        <Card 
                          key={idx} 
                          className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary/60 transition-all hover:scale-105"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <CardTitle className="text-xl font-bold text-primary">{mod.name}</CardTitle>
                                <Badge variant="outline" className="border-accent text-accent">{mod.category}</Badge>
                              </div>
                              <Icon name="Cpu" className="text-secondary" size={28} />
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <CardDescription>{mod.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                              {mod.tags.map((tag, tagIdx) => (
                                <Badge key={tagIdx} variant="secondary" className="bg-primary/10 text-primary border-primary/30 text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="space">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mods.filter(m => m.category === 'Космос').map((mod, idx) => (
                        <Card 
                          key={idx} 
                          className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary/60 transition-all hover:scale-105"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <CardTitle className="text-xl font-bold text-primary">{mod.name}</CardTitle>
                                <Badge variant="outline" className="border-accent text-accent">{mod.category}</Badge>
                              </div>
                              <Icon name="Rocket" className="text-secondary" size={28} />
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <CardDescription>{mod.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                              {mod.tags.map((tag, tagIdx) => (
                                <Badge key={tagIdx} variant="secondary" className="bg-primary/10 text-primary border-primary/30 text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="magic">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mods.filter(m => m.category === 'Магия').map((mod, idx) => (
                        <Card 
                          key={idx} 
                          className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary/60 transition-all hover:scale-105"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <CardTitle className="text-xl font-bold text-primary">{mod.name}</CardTitle>
                                <Badge variant="outline" className="border-accent text-accent">{mod.category}</Badge>
                              </div>
                              <Icon name="Sparkles" className="text-secondary" size={28} />
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <CardDescription>{mod.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                              {mod.tags.map((tag, tagIdx) => (
                                <Badge key={tagIdx} variant="secondary" className="bg-primary/10 text-primary border-primary/30 text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            <section className="container mx-auto px-4 py-20">
              <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-4xl font-black text-secondary glow">МОДПАКИ</h3>
                  <p className="text-muted-foreground text-lg">Готовые сборки с настроенным балансом</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {modpacks.map((pack, idx) => (
                    <Card 
                      key={idx}
                      className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur border-secondary/30 hover:border-secondary/60 transition-all hover:scale-105"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-secondary/20 text-secondary border-secondary/50">
                            {pack.mods}
                          </Badge>
                          <Badge variant="outline" className="border-accent text-accent">
                            {pack.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-black text-secondary">{pack.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{pack.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'guides' && (
          <section className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-black text-accent glow">ГАЙДЫ</h3>
                <p className="text-muted-foreground text-lg">Пошаговые инструкции по популярным механикам</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide, idx) => (
                  <Card 
                    key={idx}
                    className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent/60 transition-all hover:scale-105 group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex gap-3">
                          <Badge 
                            variant="outline" 
                            className={`${
                              guide.difficulty === 'Легко' ? 'border-accent text-accent' :
                              guide.difficulty === 'Средне' ? 'border-primary text-primary' :
                              'border-secondary text-secondary'
                            }`}
                          >
                            {guide.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="bg-muted text-muted-foreground">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {guide.time}
                          </Badge>
                        </div>
                        <Icon name="BookOpen" className="text-accent" size={28} />
                      </div>
                      <CardTitle className="text-2xl font-bold text-accent group-hover:glow transition-all">
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{guide.description}</CardDescription>
                      <Button 
                        variant="outline" 
                        className="w-full border-accent text-accent hover:bg-accent/10"
                      >
                        <Icon name="ArrowRight" size={16} className="mr-2" />
                        Читать гайд
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <footer className="border-t border-primary/30 bg-card/50 backdrop-blur mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center">
                  <Icon name="Blocks" className="text-white" size={20} />
                </div>
                <span className="text-sm text-muted-foreground">© 2024 Minecraft Mods</span>
              </div>
              <div className="flex gap-6">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
