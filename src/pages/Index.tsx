
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Users, 
  BarChart3, 
  Shield,
  GitBranch,
  MessageSquare,
  Calendar,
  Target,
  Workflow,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "스마트 프로젝트 관리",
      description: "AI 기반 자동화로 프로젝트 진행을 더욱 효율적으로 관리하세요.",
      color: "text-blue-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "팀 협업 최적화",
      description: "실시간 소통과 파일 공유로 팀워크를 극대화합니다.",
      color: "text-green-400"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "데이터 기반 인사이트",
      description: "프로젝트 성과를 시각화하고 데이터로 의사결정하세요.",
      color: "text-purple-400"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "엔터프라이즈 보안",
      description: "SOC 2, GDPR 준수로 안전한 데이터 관리를 보장합니다.",
      color: "text-orange-400"
    }
  ];

  const integrations = [
    "GitHub", "Slack", "Figma", "Notion", "Linear", "Jira"
  ];

  const benefits = [
    "프로젝트 완료 속도 40% 향상",
    "팀 커뮤니케이션 오버헤드 60% 감소", 
    "데이터 기반 의사결정으로 성공률 3배 증가"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      {/* 히어로 섹션 백그라운드 이미지 설정 */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-[url('/nasa-Q1p7bh3SHj8-unsplash.jpg')] bg-cover bg-center">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              새로운 팀 협업의 시작
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              현대적인 팀을 위한
              <br />
              <span className="gradient-text">협업 플랫폼</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              복잡한 프로젝트 관리, 산발적인 커뮤니케이션, 투명하지 않은 진행상황 추적.
              WorkFlow Pro로 이 모든 문제를 해결하세요.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/signup">
                <Button className="btn-primary text-lg px-8 py-4">
                  무료로 시작하기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" className="text-lg px-8 py-4 border-border hover:border-primary/50">
                데모 보기
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              팀 협업의 <span className="text-destructive">문제점</span>을 해결하는
              <br />
              <span className="gradient-text">완전한 솔루션</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-destructive">기존 방식의 문제점</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">여러 도구에 분산된 프로젝트 정보</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">실시간 진행상황 파악의 어려움</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">비효율적인 커뮤니케이션과 중복 업무</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">데이터 기반 의사결정 부족</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-success">WorkFlow Pro 솔루션</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">모든 프로젝트 정보를 하나의 플랫폼에서</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">실시간 대시보드와 자동 알림</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">AI 기반 워크플로우 최적화</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">고급 분석과 성과 측정 도구</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              모든 팀이 필요로 하는 <span className="gradient-text">핵심 기능</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              단순한 도구가 아닌, 팀의 성장을 위한 완전한 플랫폼을 경험하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              이미 사용중인 도구들과 <span className="gradient-text">완벽 연동</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              기존 워크플로우를 그대로 유지하면서 더욱 강력한 기능을 추가하세요.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-card border border-border rounded-lg px-6 py-4 hover:border-primary/20 transition-colors">
                <span className="font-medium text-muted-foreground">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              팀의 생산성을 <span className="gradient-text">혁신</span>할 준비가 되셨나요?
            </h2>
            <p className="text-lg text-muted-foreground">
              14일 무료 체험으로 WorkFlow Pro의 모든 기능을 경험해보세요. 
              신용카드 정보 없이도 바로 시작할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button className="btn-primary text-lg px-8 py-4">
                  지금 무료로 시작하기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="text-lg px-8 py-4 border-border hover:border-primary/50">
                  가격 확인하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
