
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Zap, Github, Mail, Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan') || 'starter';
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    companyName: "",
    teamSize: "",
    acceptTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "이용약관 동의 필요",
        description: "서비스 이용을 위해 이용약관에 동의해주세요.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "회원가입 완료!",
        description: "WorkFlow Pro에 오신 것을 환영합니다.",
      });
      navigate('/onboarding');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialSignup = (provider: string) => {
    toast({
      title: `${provider} 가입`,
      description: "소셜 로그인 기능을 준비중입니다.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Left Side - Brand */}
      <div className="lg:w-1/2 bg-gradient-to-br from-primary/10 to-purple/10 flex items-center justify-center p-8">
        <div className="max-w-md text-center lg:text-left space-y-6">
          <Link to="/" className="flex items-center justify-center lg:justify-start space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">WorkFlow Pro</span>
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">
              팀의 생산성을
              <br />
              <span className="gradient-text">혁신하세요</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              전 세계 10,000+ 팀이 선택한 협업 플랫폼으로 
              프로젝트 관리의 새로운 경험을 시작하세요.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-muted-foreground">14일 무료 체험</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-muted-foreground">신용카드 정보 불필요</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-muted-foreground">언제든 취소 가능</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">계정 만들기</h2>
            <p className="text-muted-foreground">
              몇 분만에 시작할 수 있습니다
            </p>
          </div>

          {/* Selected Plan Indicator */}
          {selectedPlan !== 'starter' && (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">선택한 플랜: {selectedPlan === 'professional' ? 'Professional' : 'Enterprise'}</span>
                <Link to="/pricing" className="text-primary text-sm hover:underline">
                  변경
                </Link>
              </div>
            </div>
          )}

          {/* Social Signup */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => handleSocialSignup('Google')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Google로 가입하기
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => handleSocialSignup('GitHub')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub로 가입하기
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">또는</span>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">이름 *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="홍길동"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">회사명</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="회사명 (선택)"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">이메일 주소 *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">비밀번호 *</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="8자 이상의 비밀번호"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamSize">팀 크기</Label>
              <select
                id="teamSize"
                name="teamSize"
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                value={formData.teamSize}
                onChange={handleInputChange}
              >
                <option value="">선택해주세요</option>
                <option value="1-5">1-5명</option>
                <option value="6-20">6-20명</option>
                <option value="21-50">21-50명</option>
                <option value="50+">50명 이상</option>
              </select>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="acceptTerms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
              />
              <Label htmlFor="acceptTerms" className="text-sm leading-5">
                <Link to="/terms" className="text-primary hover:underline">이용약관</Link> 및{" "}
                <Link to="/privacy" className="text-primary hover:underline">개인정보처리방침</Link>에 
                동의합니다.
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "계정 생성 중..." : "무료로 시작하기"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-muted-foreground">
              이미 계정이 있으신가요?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
