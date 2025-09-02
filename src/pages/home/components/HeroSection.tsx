
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20industrial%20digital%20printing%20facility%20with%20large%20format%20textile%20printing%20machines%2C%20professional%20lighting%2C%20clean%20white%20and%20blue%20environment%2C%20high-tech%20equipment%2C%20fabric%20materials%2C%20rolls%20of%20colorful%20printed%20textiles%2C%20industrial%20photography%20style%2C%20bright%20and%20spacious%20workspace&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              디지털 프린팅의
              <span className="block text-blue-200">새로운 기준</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              정교한 색상 표현과 디테일 없는 화상으로<br />
              상상 속의 디자인을 현실로 만들어드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold">
                <i className="ri-phone-line mr-2"></i>
                지금 상담받기
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                서비스 둘러보기
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl"></i>
      </div>
    </section>
  );
}
