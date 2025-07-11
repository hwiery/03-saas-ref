
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Workflow, 
  Users, 
  BarChart3, 
  Shield,
  Zap,
  MessageSquare,
  Calendar,
  Target,
  GitBranch,
  Bell,
  Search,
  Smartphone,
  Globe,
  Lock,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "스마트 프로젝트 관리",
      description: "AI 기반 자동화와 직관적인 워크플로우로 프로젝트를 효율적으로 관리하세요.",
      details: [
        "칸반 보드와 간트 차트 지원",
        "자동 작업 할당 및 우선순위 설정",
        "마일스톤과 데드라인 관리",
        "커스텀 워크플로우 설정"
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "팀 협업 최적화",
      description: "실시간 소통과 파일 공유로 팀의 생산성을 극대화합니다.",
      details: [
        "실시간 채팅과 비디오 회의",
        "파일 버전 관리와 동시 편집",
        "팀원 간 역할과 권한 설정",
        "프로젝트별 협업 공간"
      ],
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "데이터 기반 인사이트",
      description: "프로젝트 성과를 시각화하고 데이터로 의사결정하세요.",
      details: [
        "실시간 대시보드와 리포트",
        "팀 생산성 분석",
        "프로젝트 진행률 추적",
        "커스텀 KPI 설정"
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "엔터프라이즈 보안",
      description: "SOC 2, GDPR 준수로 안전한 데이터 관리를 보장합니다.",
      details: [
        "종단 간 암호화",
        "2단계 인증 (2FA)",
        "SSO 및 SAML 지원",
        "감사 로그 및 컴플라이언스"
      ],
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    }
  ];

  const additionalFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "실시간 커뮤니케이션",
      description: "프로젝트 내 채팅, 댓글, 알림으로 소통을 간소화하세요."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "스마트 일정 관리",
      description: "팀 캘린더, 마일스톤, 데드라인을 한 곳에서 관리하세요."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "목표 설정 및 추적",
      description: "OKR과 KPI를 설정하고 진행상황을 실시간으로 추적하세요."
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "개발 도구 통합",
      description: "GitHub, GitLab, Bitbucket과 완벽하게 연동됩니다."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "스마트 알림",
      description: "중요한 업데이트만 선별하여 알림을 받아보세요."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "강력한 검색",
      description: "모든 프로젝트 데이터를 빠르게 검색하고 필터링하세요."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "모바일 앱",
      description: "언제 어디서나 iOS, Android 앱으로 프로젝트를 관리하세요."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "다국어 지원",
      description: "한국어, 영어, 일본어 등 다양한 언어로 사용 가능합니다."
    }
  ];

  const integrations = [
    { name: "Slack", description: "팀 커뮤니케이션" },
    { name: "GitHub", description: "코드 관리" },
    { name: "Figma", description: "디자인 협업" },
    { name: "Notion", description: "문서 작성" },
    { name: "Zoom", description: "화상 회의" },
    { name: "Google Drive", description: "파일 저장" },
    { name: "Jira", description: "이슈 트래킹" },
    { name: "Trello", description: "프로젝트 관리" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              모든 기능 한눈에 보기
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              팀 협업을 위한
              <br />
              <span className="gradient-text">완전한 도구모음</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              프로젝트 관리부터 팀 커뮤니케이션, 성과 분석까지. 
              WorkFlow Pro 하나로 모든 협업 과정을 통합 관리하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="container space-y-24">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="lg:w-1/2 space-y-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${feature.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl blur-3xl opacity-20`}></div>
                  <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl">
                    <div className="bg-background rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{feature.title} 미리보기</h3>
                          <div className={`w-3 h-3 ${feature.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-4 bg-muted rounded w-3/4"></div>
                          <div className="h-4 bg-muted rounded w-1/2"></div>
                          <div className="h-4 bg-muted rounded w-2/3"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 pt-4">
                          <div className={`h-20 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                            <div className={`w-8 h-8 ${feature.color}`}>
                              {feature.icon}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-muted rounded"></div>
                            <div className="h-3 bg-muted rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              더 많은 <span className="gradient-text">강력한 기능</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              팀의 모든 요구사항을 충족하는 포괄적인 기능들을 만나보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="feature-card group text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              이미 사용중인 도구들과 <span className="gradient-text">완벽 연동</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              기존 워크플로우를 그대로 유지하면서 더욱 강력한 기능을 추가하세요.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/20 transition-colors group">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              검증된 <span className="gradient-text">성과</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              WorkFlow Pro를 사용하는 팀들이 경험한 실제 성과를 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-xl mx-auto">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-1">40%</div>
                <div className="text-lg font-semibold mb-2">생산성 향상</div>
                <p className="text-muted-foreground">프로젝트 완료 속도가 평균 40% 향상</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">60%</div>
                <div className="text-lg font-semibold mb-2">소통 효율성</div>
                <p className="text-muted-foreground">불필요한 회의와 이메일 60% 감소</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-purple/10 rounded-xl mx-auto">
                <Target className="w-8 h-8 text-purple" />
              </div>
              <div>
                <div className="text-4xl font-bold text-purple mb-1">3배</div>
                <div className="text-lg font-semibold mb-2">목표 달성률</div>
                <p className="text-muted-foreground">데이터 기반 의사결정으로 목표 달성률 3배 증가</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              모든 기능을 <span className="gradient-text">무료</span>로 체험해보세요
            </h2>
            <p className="text-lg text-muted-foreground">
              14일 무료 체험으로 WorkFlow Pro의 모든 기능을 제한 없이 사용해보세요.
              신용카드 정보 없이도 바로 시작할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button className="btn-primary text-lg px-8 py-4">
                  무료 체험 시작하기
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

export default Features;
