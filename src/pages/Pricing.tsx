
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Star, Zap, Users, BarChart3, Shield } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "무료",
      period: "",
      description: "개인 프로젝트와 소규모 팀을 위한 기본 기능",
      features: [
        "프로젝트 3개까지",
        "팀원 5명까지",
        "기본 이슈 트래킹",
        "파일 스토리지 1GB",
        "이메일 지원",
        "기본 통합 (GitHub, Slack)"
      ],
      cta: "무료로 시작하기",
      href: "/signup",
      popular: false
    },
    {
      name: "Professional",
      price: "₩29,000",
      period: "/월",
      description: "성장하는 팀을 위한 고급 협업 기능",
      features: [
        "무제한 프로젝트",
        "팀원 50명까지",
        "고급 이슈 트래킹 & 워크플로우",
        "파일 스토리지 100GB",
        "실시간 대시보드",
        "모든 통합 기능",
        "우선 지원",
        "고급 보고서"
      ],
      cta: "Professional 시작하기",
      href: "/signup?plan=professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "맞춤 가격",
      period: "",
      description: "대규모 조직을 위한 엔터프라이즈 솔루션",
      features: [
        "무제한 프로젝트 & 팀원",
        "무제한 스토리지",
        "고급 보안 & 권한 관리",
        "SSO & SAML 연동",
        "전담 고객 성공 매니저",
        "맞춤형 통합 개발",
        "SLA 보장",
        "온사이트 교육"
      ],
      cta: "영업팀 문의",
      href: "/contact",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "무료 플랜에서 유료 플랜으로 언제든 업그레이드할 수 있나요?",
      answer: "네, 언제든지 업그레이드 가능합니다. 기존 데이터는 모두 보존되며, 업그레이드 즉시 새로운 기능을 사용할 수 있습니다."
    },
    {
      question: "결제는 어떤 방식으로 이루어지나요?",
      answer: "월간 또는 연간 구독으로 결제 가능하며, 신용카드, 계좌이체, 법인카드를 지원합니다. 연간 결제 시 2개월 할인 혜택을 제공합니다."
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer: "30일 무조건 환불 보장을 제공합니다. 서비스에 만족하지 않으실 경우 전액 환불해드립니다."
    },
    {
      question: "팀원 수를 초과하면 어떻게 되나요?",
      answer: "팀원 수 초과 시 자동으로 다음 단계 플랜으로 업그레이드되거나, 추가 사용자 요금이 적용됩니다. 사전에 알림을 받으실 수 있습니다."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              팀 규모에 맞는 <span className="gradient-text">완벽한 플랜</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              스타트업부터 대기업까지, 모든 팀의 요구사항을 충족하는 유연한 가격 정책
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card relative ${plan.popular ? 'featured' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.href} className="w-full">
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              투자 대비 <span className="gradient-text">확실한 성과</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">생산성 향상</h3>
                <p className="text-2xl font-bold text-primary">40%</p>
                <p className="text-sm text-muted-foreground">프로젝트 완료 속도 개선</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-xl mx-auto">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-semibold">커뮤니케이션</h3>
                <p className="text-2xl font-bold text-success">60%</p>
                <p className="text-sm text-muted-foreground">오버헤드 감소</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-16 h-16 bg-purple/10 rounded-xl mx-auto">
                  <BarChart3 className="w-8 h-8 text-purple" />
                </div>
                <h3 className="font-semibold">의사결정 품질</h3>
                <p className="text-2xl font-bold text-purple">3배</p>
                <p className="text-sm text-muted-foreground">데이터 기반 정확도</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-16 h-16 bg-orange/10 rounded-xl mx-auto">
                  <Shield className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-semibold">보안 수준</h3>
                <p className="text-2xl font-bold text-orange">99.9%</p>
                <p className="text-sm text-muted-foreground">업타임 보장</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-muted-foreground">
              가격과 플랜에 대한 궁금한 점들을 확인해보세요.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              지금 바로 <span className="gradient-text">시작</span>해보세요
            </h2>
            <p className="text-lg text-muted-foreground">
              14일 무료 체험으로 WorkFlow Pro의 모든 기능을 경험해보세요.
            </p>
            <Link to="/signup">
              <Button className="btn-primary text-lg px-8 py-4">
                무료 체험 시작하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
